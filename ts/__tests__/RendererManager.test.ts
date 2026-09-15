import { RendererCache } from '../Renderer/RendererCache';

jest.unmock('../Renderer/RendererManager');
jest.mock('../Renderer/WebGLRenderer/webgl-utils', () => ({
  createProgramFromSources: jest.fn(),
}));
const { RendererManager } =
  require('../Renderer/RendererManager') as typeof import('../Renderer/RendererManager');

test('pauses rendering while the document is hidden and resumes when visible', () => {
  let hidden = true;
  let visibilityChange: (() => void) | undefined;
  let scheduledRender: (() => void) | undefined;
  const documentMock = {
    get hidden() {
      return hidden;
    },
    addEventListener: jest.fn(
      (event: string, listener: () => void) =>
        (visibilityChange = event === 'visibilitychange' ? listener : undefined)
    ),
    removeEventListener: jest.fn(),
    createElement: jest.fn(() => ({
      getContext: jest.fn(() => null),
    })),
  };
  const windowMock = {
    clearTimeout: jest.fn(),
    setTimeout: jest.fn((callback: () => void) => {
      scheduledRender = callback;
      return 1;
    }),
  };
  (global as unknown as { document: typeof documentMock }).document =
    documentMock;
  (global as unknown as { window: typeof windowMock }).window = windowMock;
  const cache = {
    getTimeUntilNextRender: jest.fn(() => 0),
    runRenderCycle: jest.fn(),
  } as unknown as RendererCache;
  const manager = new RendererManager();

  manager.registerRendererCacheForScheduling(cache);
  expect(windowMock.setTimeout).not.toHaveBeenCalled();
  expect(cache.runRenderCycle).not.toHaveBeenCalled();

  hidden = false;
  visibilityChange?.();
  scheduledRender?.();
  expect(cache.runRenderCycle).toHaveBeenCalledTimes(1);

  manager.unregisterRendererCacheForScheduling(cache);
  manager.release();
  expect(documentMock.removeEventListener).toHaveBeenCalledWith(
    'visibilitychange',
    visibilityChange
  );
  delete (global as unknown as { document?: unknown }).document;
  delete (global as unknown as { window?: unknown }).window;
});
