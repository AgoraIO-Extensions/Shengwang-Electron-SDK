import type { IRtcEngine } from 'shengwang-electron-sdk';

declare global {
  interface Window {
    agoraRtcEngine?: IRtcEngine;
  }
}
