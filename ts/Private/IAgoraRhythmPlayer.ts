import './extension/IAgoraRhythmPlayerExtension';

/**
 * 虚拟节拍器状态。
 */
export enum RhythmPlayerStateType {
  /**
   * 810：虚拟节拍器未开启或已关闭。
   */
  RhythmPlayerStateIdle = 810,
  /**
   * 811：正在打开节拍音频文件。
   */
  RhythmPlayerStateOpening = 811,
  /**
   * 812：正在解码节拍音频文件。
   */
  RhythmPlayerStateDecoding = 812,
  /**
   * 813：正在播放节拍音频文件。
   */
  RhythmPlayerStatePlaying = 813,
  /**
   * 814：开启虚拟节拍器失败。你可以通过报告的错误码 errorCode 排查错误原因，也可以重新尝试开启虚拟节拍器。
   */
  RhythmPlayerStateFailed = 814,
}

/**
 * 虚拟节拍器错误信息。
 */
export enum RhythmPlayerReason {
  /**
   * 0：正常播放节拍音频文件，没有错误。
   */
  RhythmPlayerReasonOk = 0,
  /**
   * 1：一般性错误，没有明确原因。
   */
  RhythmPlayerReasonFailed = 1,
  /**
   * 801：打开节拍音频文件出错。
   */
  RhythmPlayerReasonCanNotOpen = 801,
  /**
   * 802：播放节拍音频文件出错。
   */
  RhythmPlayerReasonCanNotPlay = 802,
  /**
   * 803：节拍音频文件时长超出限制。最大时长为 1.2 秒。
   */
  RhythmPlayerReasonFileOverDurationLimit = 803,
}

/**
 * 虚拟节拍器配置。
 */
export class AgoraRhythmPlayerConfig {
  /**
   * 每小节的拍数，取值范围为 [1,9]。默认值为 4，即每小节包含 1 个强拍和 3 个弱拍。
   */
  beatsPerMeasure?: number;
  /**
   * 节拍速度（拍/分钟），取值范围为 [60,360]。默认值为 60，即 1 分钟有 60 拍。
   */
  beatsPerMinute?: number;
}
