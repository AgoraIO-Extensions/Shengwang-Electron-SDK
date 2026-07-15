import { MatrixID, RangeID } from '../Private/AgoraMediaBase';
import { WebGLRenderer } from '../Renderer/WebGLRenderer';
import * as Utils from '../Utils';

jest.mock('../Renderer/WebGLRenderer/webgl-utils', () => ({
  createProgramFromSources: jest.fn(),
}));

type ColorSpaceParams = {
  yOffset: number;
  yScale: number;
  rVCoeff: number;
  gUCoeff: number;
  gVCoeff: number;
  bUCoeff: number;
};

const getColorSpaceParams = (
  renderer: WebGLRenderer,
  colorSpace?: { matrix?: MatrixID; range?: RangeID }
): ColorSpaceParams =>
  (
    renderer as unknown as {
      getColorSpaceParams(colorSpace?: {
        matrix?: MatrixID;
        range?: RangeID;
      }): ColorSpaceParams;
    }
  ).getColorSpaceParams(colorSpace);

const limitedOffset = 16 / 255;
const limitedScale = 255 / 219;

test.each([
  {
    name: 'default BT.601 limited',
    colorSpace: undefined,
    expected: {
      yOffset: limitedOffset,
      yScale: limitedScale,
      rVCoeff: 1.596027,
      gUCoeff: -0.391762,
      gVCoeff: -0.812968,
      bUCoeff: 2.017232,
    },
  },
  {
    name: 'BT.601 full',
    colorSpace: {
      matrix: MatrixID.MatrixidBt470bg,
      range: RangeID.RangeidFull,
    },
    expected: {
      yOffset: 0,
      yScale: 1,
      rVCoeff: 1.402,
      gUCoeff: -0.344136,
      gVCoeff: -0.714136,
      bUCoeff: 1.772,
    },
  },
  {
    name: 'BT.601 limited',
    colorSpace: {
      matrix: MatrixID.MatrixidBt470bg,
      range: RangeID.RangeidLimited,
    },
    expected: {
      yOffset: limitedOffset,
      yScale: limitedScale,
      rVCoeff: 1.596027,
      gUCoeff: -0.391762,
      gVCoeff: -0.812968,
      bUCoeff: 2.017232,
    },
  },
  {
    name: 'BT.709 limited',
    colorSpace: {
      matrix: MatrixID.MatrixidBt709,
      range: RangeID.RangeidLimited,
    },
    expected: {
      yOffset: limitedOffset,
      yScale: limitedScale,
      rVCoeff: 1.792741,
      gUCoeff: -0.213249,
      gVCoeff: -0.532909,
      bUCoeff: 2.112402,
    },
  },
  {
    name: 'BT.709 full',
    colorSpace: {
      matrix: MatrixID.MatrixidBt709,
      range: RangeID.RangeidFull,
    },
    expected: {
      yOffset: 0,
      yScale: 1,
      rVCoeff: 1.5748,
      gUCoeff: -0.187324,
      gVCoeff: -0.468124,
      bUCoeff: 1.8556,
    },
  },
  {
    name: 'BT.2020 NCL limited',
    colorSpace: {
      matrix: MatrixID.MatrixidBt2020Ncl,
      range: RangeID.RangeidLimited,
    },
    expected: {
      yOffset: limitedOffset,
      yScale: 1,
      rVCoeff: 1.4746,
      gUCoeff: -0.164553,
      gVCoeff: -0.571353,
      bUCoeff: 1.8814,
    },
  },
  {
    name: 'BT.2020 CL full',
    colorSpace: {
      matrix: MatrixID.MatrixidBt2020Cl,
      range: RangeID.RangeidFull,
    },
    expected: {
      yOffset: 0,
      yScale: 1,
      rVCoeff: 1.4746,
      gUCoeff: -0.164553,
      gVCoeff: -0.571353,
      bUCoeff: 1.8814,
    },
  },
  {
    name: 'unspecified matrix uses BT.601 limited',
    colorSpace: {
      matrix: MatrixID.MatrixidUnspecified,
      range: RangeID.RangeidLimited,
    },
    expected: {
      yOffset: limitedOffset,
      yScale: limitedScale,
      rVCoeff: 1.596027,
      gUCoeff: -0.391762,
      gVCoeff: -0.812968,
      bUCoeff: 2.017232,
    },
  },
  {
    name: 'unsupported matrix falls back to BT.709 limited',
    colorSpace: {
      matrix: MatrixID.MatrixidFcc,
      range: RangeID.RangeidDerived,
    },
    expected: {
      yOffset: limitedOffset,
      yScale: limitedScale,
      rVCoeff: 1.792741,
      gUCoeff: -0.213249,
      gVCoeff: -0.532909,
      bUCoeff: 2.112402,
    },
  },
])(
  '$name uses native-aligned conversion parameters',
  ({ colorSpace, expected }) => {
    expect(getColorSpaceParams(new WebGLRenderer(), colorSpace)).toEqual(
      expected
    );
  }
);

test('logs color space changes after the initial application', () => {
  const renderer = new WebGLRenderer();
  const setColorSpaceUniforms = (
    renderer as unknown as {
      setColorSpaceUniforms(colorSpace: {
        matrix: MatrixID;
        range: RangeID;
      }): void;
    }
  ).setColorSpaceUniforms.bind(renderer);
  renderer.gl = {} as WebGLRenderingContext;
  renderer.program = {} as WebGLProgram;
  const logDebug = jest.spyOn(Utils, 'logDebug').mockImplementation(() => {});

  setColorSpaceUniforms({
    matrix: MatrixID.MatrixidBt470bg,
    range: RangeID.RangeidLimited,
  });
  expect(logDebug).not.toHaveBeenCalled();

  setColorSpaceUniforms({
    matrix: MatrixID.MatrixidBt709,
    range: RangeID.RangeidFull,
  });
  expect(logDebug).toHaveBeenCalledTimes(1);
  expect(logDebug).toHaveBeenCalledWith(
    'WebGLRenderer color space changed: 5:1 -> 1:2'
  );
});
