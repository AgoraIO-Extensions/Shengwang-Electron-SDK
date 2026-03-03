import './extension/IAgoraMediaPlayerSourceExtension';
import {
  CacheStatistics,
  MediaPlayerEvent,
  MediaPlayerReason,
  MediaPlayerState,
  PlayerPlaybackStats,
  PlayerPreloadEvent,
  PlayerUpdatedInfo,
  SrcInfo,
} from './AgoraMediaPlayerTypes';

/**
 * 提供媒体播放器的回调。
 */
export interface IMediaPlayerSourceObserver {
  /**
   * 报告播放器状态改变。
   *
   * 当播放器状态改变时，SDK 会触发该回调，报告新的播放状态。
   *
   * @param state 新的播放状态，详见 MediaPlayerState 。
   * @param reason 播放器状态改变的原因，详见 MediaPlayerReason 。
   */
  onPlayerSourceStateChanged?(
    state: MediaPlayerState,
    reason: MediaPlayerReason
  ): void;

  /**
   * 报告当前媒体资源的播放进度。
   *
   * 播放媒体文件时，SDK 每隔 1 秒会自动触发该回调，报告当前播放进度。
   *
   * @param positionMs 当前播放进度，单位为 ms。
   * @param timestampMs 当前播放进度的 NTP 时间戳，单位为 ms。
   */
  onPositionChanged?(positionMs: number, timestampMs: number): void;

  /**
   * 报告播放器的事件。
   *
   * 调用 seek 定位播放后，SDK 会触发该回调，报告定位播放的结果。
   *
   * @param eventCode 播放器事件，详见 MediaPlayerEvent 。
   * @param elapsedTime 发生事件的时间 (毫秒)。
   * @param message 事件的信息。
   */
  onPlayerEvent?(
    eventCode: MediaPlayerEvent,
    elapsedTime: number,
    message: string
  ): void;

  /**
   * 报告已获取媒体附属信息。
   *
   * 解析媒体附属信息后时，SDK 会触发该回调，报告媒体附属信息的数据类型和具体数据。
   *
   * @param data 具体数据，用户自定义格式的数据。
   * @param length 数据长度，单位为 byte。
   */
  onMetaData?(data: Uint8Array, length: number): void;

  /**
   * 报告当前缓冲数据能播放的时间。
   *
   * 播放在线媒体资源的过程中，SDK 会每隔 1 秒触发一次该回调，报告当前缓冲的数据能支持的播放时间。
   *  当缓冲数据支持的播放时间小于阈值（默认为 0）时，返回 PlayerEventBufferLow (6)。
   *  当缓冲数据支持的播放时间大于阈值（默认为 0）时，返回 PlayerEventBufferRecover (7)。
   *
   * @param playCachedBuffer 当前缓冲的数据能支持的播放时间 (毫秒)。
   */
  onPlayBufferUpdated?(playCachedBuffer: number): void;

  /**
   * 报告预加载媒体资源的事件。
   *
   * @param src 媒体资源的路径。
   * @param event 预加载媒体资源时发生的事件。详见 PlayerPreloadEvent 。
   */
  onPreloadEvent?(src: string, event: PlayerPreloadEvent): void;

  /**
   * @ignore
   */
  onCompleted?(): void;

  /**
   * @ignore
   */
  onAgoraCDNTokenWillExpire?(): void;

  /**
   * 媒体资源视频码率变化回调。
   *
   * @param from 变化前，媒体资源播放时的视频码率相关信息。详见 SrcInfo 。
   * @param to 变化后，媒体资源播放时的视频码率相关信息。详见 SrcInfo 。
   */
  onPlayerSrcInfoChanged?(from: SrcInfo, to: SrcInfo): void;

  /**
   * 媒体播放器相关信息发生改变回调。
   *
   * 当媒体播放器相关信息发生改变时，SDK 会触发该回调。你可用其进行问题定位和排查。
   *
   * @param info 媒体播放器相关信息。详见 PlayerUpdatedInfo 。
   */
  onPlayerInfoUpdated?(info: PlayerUpdatedInfo): void;

  /**
   * 报告当前缓存中的媒体资源的相关信息。
   *
   * 调用 openWithMediaSource 方法且设置 enableCache 成员为 true 后，SDK 会在媒体文件打开后每秒触发一次该回调，报告当前缓存的媒体文件的统计数据。
   *
   * @param stats 缓存中的媒体资源的相关信息，详见 CacheStatistics 。
   */
  onPlayerCacheStats?(stats: CacheStatistics): void;

  /**
   * 报告当前播放的媒体资源的相关信息。
   *
   * 当媒体资源开始播放后，SDK 会每秒触发一次该回调，报告媒体资源的相关信息。
   *
   * @param stats 媒体资源的相关信息，详见 PlayerPlaybackStats 。
   */
  onPlayerPlaybackStats?(stats: PlayerPlaybackStats): void;

  /**
   * 媒体播放器音量提示回调。
   *
   * SDK 每 200 毫秒触发一次该回调，报告媒体播放器当前的音量。
   *
   * @param volume 播放器的当前音量，取值范围为 [0,255]。
   */
  onAudioVolumeIndication?(volume: number): void;
}
