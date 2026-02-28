import './extension/IAgoraMediaRecorderExtension';
import {
  IMediaRecorderObserver,
  MediaRecorderConfiguration,
} from './AgoraMediaBase';

/**
 * 提供本地及远端音视频录制功能的类。
 */
export abstract class IMediaRecorder {
  /**
   * 注册 IMediaRecorderObserver 观测器。
   *
   * 该方法用于设置音视频录制的回调，以便在录制过程中向 App 通知音视频流的录制状态和信息。
   * 调用该方法前请确保：
   *  已创建并初始化 IRtcEngine 对象。
   *  已通过 createMediaRecorder 创建音视频录制对象。
   *
   * @param callback 音视频流录制回调，详见 IMediaRecorderObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setMediaRecorderObserver(callback: IMediaRecorderObserver): number;

  /**
   * 开启音视频流录制。
   *
   * 该方法用于开启音视频流录制。声网 SDK 支持同时录制本地及远端用户的音视频流。
   * 在开始录制前请确保：
   *  已通过 createMediaRecorder 创建音视频录制对象。
   *  已调用 setMediaRecorderObserver 注册录制对象观测器来监听录制的相关回调。
   *  已加入频道。 该方法支持录制如下数据：
   *  麦克风采集的、AAC 编码格式的音频。
   *  摄像头采集的、H.264 或 H.265 编码格式的视频。 开启音视频流录制后，当视频分辨率在录制过程中发生变化时，SDK 会停止录制；当音频采样率和声道数发生变化时，SDK 会持续录制并生成单个 MP4 录制文件。 仅当检测到可录制的音视频流时，才能成功生成录制文件；如果没有可录制的音视频流，或在录制过程中的音视频流中断超过 5 秒后，SDK 会停止录制，并触发 onRecorderStateChanged (RecorderStateError, RecorderErrorNoStream) 回调。
   *  如果你需要录制的是本地的音视频流，请在开始录制前确保本地用户的角色设为主播。
   *  如果你需要录制的是远端用户的音视频流，请在开始录制前确保已经订阅了该用户的音视频流。
   *
   * @param config 音视频流录制配置。详见 MediaRecorderConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2: 参数无效。请确保：
   *  指定的录制文件保存路径正确且可写。
   *  指定的录制文件格式正确。
   *  设置的最大录制时长正确。
   *  -4: IRtcEngine 当前状态不支持该操作。可能因为录制正在进行中或录制出错停止。
   *  -7: IRtcEngine 尚未初始化就调用方法。请确认在调用该方法前已创建 IMediaRecorder 对象。
   */
  abstract startRecording(config: MediaRecorderConfiguration): number;

  /**
   * 停止音视频流录制。
   *
   * 调用 startRecording 后，如果要停止录制，请调用该方法停止录制；否则，生成的录制文件可能无法正常播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败：
   *  -7: IRtcEngine 尚未初始化就调用方法。请确认在调用该方法前已创建 IMediaRecorder 对象。
   */
  abstract stopRecording(): number;
}
