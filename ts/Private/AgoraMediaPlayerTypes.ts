import './extension/AgoraMediaPlayerTypesExtension';

/**
 * 播放器的状态。
 */
export enum MediaPlayerState {
  /**
   * 0: 默认状态。播放器会在你打开媒体文件之前和结束播放之后返回该状态码。
   */
  PlayerStateIdle = 0,
  /**
   * 1: 正在打开媒体文件。
   */
  PlayerStateOpening = 1,
  /**
   * 2: 成功打开媒体文件。
   */
  PlayerStateOpenCompleted = 2,
  /**
   * 3: 正在播放。
   */
  PlayerStatePlaying = 3,
  /**
   * 4: 暂停播放。
   */
  PlayerStatePaused = 4,
  /**
   * 5: 播放完毕。
   */
  PlayerStatePlaybackCompleted = 5,
  /**
   * 6: 循环播放已结束。
   */
  PlayerStatePlaybackAllLoopsCompleted = 6,
  /**
   * 7: 播放已停止。
   */
  PlayerStateStopped = 7,
  /**
   * @ignore
   */
  PlayerStatePausingInternal = 50,
  /**
   * @ignore
   */
  PlayerStateStoppingInternal = 51,
  /**
   * @ignore
   */
  PlayerStateSeekingInternal = 52,
  /**
   * @ignore
   */
  PlayerStateGettingInternal = 53,
  /**
   * @ignore
   */
  PlayerStateNoneInternal = 54,
  /**
   * @ignore
   */
  PlayerStateDoNothingInternal = 55,
  /**
   * @ignore
   */
  PlayerStateSetTrackInternal = 56,
  /**
   * 100: 播放失败。
   */
  PlayerStateFailed = 100,
}

/**
 * 播放器状态改变的原因。
 */
export enum MediaPlayerReason {
  /**
   * 0: 没有错误。
   */
  PlayerReasonNone = 0,
  /**
   * -1: 不正确的参数。
   */
  PlayerReasonInvalidArguments = -1,
  /**
   * -2: 内部错误。
   */
  PlayerReasonInternal = -2,
  /**
   * -3: 没有 resource。
   */
  PlayerReasonNoResource = -3,
  /**
   * -4: 无效的 resource。
   */
  PlayerReasonInvalidMediaSource = -4,
  /**
   * -5: 未知的媒体流类型。
   */
  PlayerReasonUnknownStreamType = -5,
  /**
   * -6: 对象没有初始化。
   */
  PlayerReasonObjNotInitialized = -6,
  /**
   * -7: 解码器不支持该 codec。
   */
  PlayerReasonCodecNotSupported = -7,
  /**
   * -8: 无效的 renderer。
   */
  PlayerReasonVideoRenderFailed = -8,
  /**
   * -9: 播放器内部状态错误。
   */
  PlayerReasonInvalidState = -9,
  /**
   * -10: 未找到该 URL。
   */
  PlayerReasonUrlNotFound = -10,
  /**
   * -11: 播放器与声网服务器的连接无效。
   */
  PlayerReasonInvalidConnectionState = -11,
  /**
   * -12: 播放缓冲区数据不足。
   */
  PlayerReasonSrcBufferUnderflow = -12,
  /**
   * -13: 播放被异常打断而结束。
   */
  PlayerReasonInterrupted = -13,
  /**
   * -14: SDK 不支持的接口调用。
   */
  PlayerReasonNotSupported = -14,
  /**
   * @ignore
   */
  PlayerReasonTokenExpired = -15,
  /**
   * @ignore
   */
  PlayerReasonIpExpired = -16,
  /**
   * -17：未知错误。
   */
  PlayerReasonUnknown = -17,
}

/**
 * 媒体流的类型。
 */
export enum MediaStreamType {
  /**
   * 0: 未知类型。
   */
  StreamTypeUnknown = 0,
  /**
   * 1: 视频流。
   */
  StreamTypeVideo = 1,
  /**
   * 2: 音频流。
   */
  StreamTypeAudio = 2,
  /**
   * 3: 字幕流。
   */
  StreamTypeSubtitle = 3,
}

/**
 * 播放器事件。
 */
export enum MediaPlayerEvent {
  /**
   * 0: 开始定位。
   */
  PlayerEventSeekBegin = 0,
  /**
   * 1: 完成定位。
   */
  PlayerEventSeekComplete = 1,
  /**
   * 2: 定位出错。
   */
  PlayerEventSeekError = 2,
  /**
   * 5: 当前音轨发生改变。
   */
  PlayerEventAudioTrackChanged = 5,
  /**
   * 6: 当前缓冲的数据不足以支持播放。
   */
  PlayerEventBufferLow = 6,
  /**
   * 7: 当前缓冲的数据刚好能支持播放。
   */
  PlayerEventBufferRecover = 7,
  /**
   * 8: 音频或视频出现卡顿。
   */
  PlayerEventFreezeStart = 8,
  /**
   * 9: 音频和视频均停止卡顿。
   */
  PlayerEventFreezeStop = 9,
  /**
   * 10: 开始切换媒体资源。
   */
  PlayerEventSwitchBegin = 10,
  /**
   * 11: 媒体资源切换完成。
   */
  PlayerEventSwitchComplete = 11,
  /**
   * 12: 媒体资源切换出错。
   */
  PlayerEventSwitchError = 12,
  /**
   * 13: 视频首帧出图。
   */
  PlayerEventFirstDisplayed = 13,
  /**
   * 14：达到可缓存文件的数量上限。
   */
  PlayerEventReachCacheFileMaxCount = 14,
  /**
   * 15：达到可缓存文件的大小上限。
   */
  PlayerEventReachCacheFileMaxSize = 15,
  /**
   * @ignore
   */
  PlayerEventTryOpenStart = 16,
  /**
   * @ignore
   */
  PlayerEventTryOpenSucceed = 17,
  /**
   * @ignore
   */
  PlayerEventTryOpenFailed = 18,
  /**
   * @ignore
   */
  PlayerEventHttpRedirect = 19,
}

/**
 * 预加载媒体资源时发生的事件。
 */
export enum PlayerPreloadEvent {
  /**
   * 0: 开始预加载媒体资源。
   */
  PlayerPreloadEventBegin = 0,
  /**
   * 1: 预加载媒体资源完成。
   */
  PlayerPreloadEventComplete = 1,
  /**
   * 2: 预加载媒体资源出错。
   */
  PlayerPreloadEventError = 2,
}

/**
 * 播放器媒体流的所有信息。
 */
export class PlayerStreamInfo {
  /**
   * 媒体流的索引值。
   */
  streamIndex?: number;
  /**
   * 此条媒体流的类型。详见 MediaStreamType 。
   */
  streamType?: MediaStreamType;
  /**
   * 此条媒体流的编码规格。
   */
  codecName?: string;
  /**
   * 此条媒体流的语言。
   */
  language?: string;
  /**
   * 该参数仅对视频流生效，表示视频帧率 (fps)。
   */
  videoFrameRate?: number;
  /**
   * 该参数仅对视频流生效，表示视频码率 (bps)。
   */
  videoBitRate?: number;
  /**
   * 该参数仅对视频流生效，表示视频宽度 (px)。
   */
  videoWidth?: number;
  /**
   * 该参数仅对视频流生效，表示视频高度 (px)。
   */
  videoHeight?: number;
  /**
   * 该参数仅对视频流生效，表示旋转角度。
   */
  videoRotation?: number;
  /**
   * 该参数仅对音频流生效，表示音频采样率 (Hz)。
   */
  audioSampleRate?: number;
  /**
   * 该参数仅对音频流生效，表示声道数。
   */
  audioChannels?: number;
  /**
   * 该参数仅对音频流生效，表示每个音频采样点的位数 (bit)。
   */
  audioBitsPerSample?: number;
  /**
   * 媒体流的时长（毫秒）。
   */
  duration?: number;
}

/**
 * 媒体资源播放时的视频码率相关信息。
 */
export class SrcInfo {
  /**
   * 媒体资源播放时的视频码率（Kbps）。
   */
  bitrateInKbps?: number;
  /**
   * 媒体资源的名字。
   */
  name?: string;
}

/**
 * 媒体附属信息数据类型。
 */
export enum MediaPlayerMetadataType {
  /**
   * 0: 未知类型。
   */
  PlayerMetadataTypeUnknown = 0,
  /**
   * 1: SEI （补充增强信息）类型。
   */
  PlayerMetadataTypeSei = 1,
}

/**
 * 缓存文件的统计数据。
 */
export class CacheStatistics {
  /**
   * 本次播放的媒体文件的大小，单位为字节。
   */
  fileSize?: number;
  /**
   * 本次播放的媒体文件已缓存的数据大小，单位为字节。
   */
  cacheSize?: number;
  /**
   * 本次播放已下载的媒体文件大小，单位为字节。
   */
  downloadSize?: number;
}

/**
 * 当前播放的媒体资源的相关信息。
 */
export class PlayerPlaybackStats {
  /**
   * 视频帧率，单位为 fps。
   */
  videoFps?: number;
  /**
   * 视频码率，单位为 kbps。
   */
  videoBitrateInKbps?: number;
  /**
   * 音频码率，单位为 kbps。
   */
  audioBitrateInKbps?: number;
  /**
   * 媒体流的总码率，单位为 kbps。
   */
  totalBitrateInKbps?: number;
}

/**
 * 媒体播放器相关信息。
 */
export class PlayerUpdatedInfo {
  /**
   * @ignore
   */
  internalPlayerUuid?: string;
  /**
   * 设备 ID，标识一个设备。
   */
  deviceId?: string;
  /**
   * 视频高度 (pixel)。
   */
  videoHeight?: number;
  /**
   * 视频宽度 (pixel)。
   */
  videoWidth?: number;
  /**
   * 音频采样率 (Hz)。
   */
  audioSampleRate?: number;
  /**
   * 声道数。
   */
  audioChannels?: number;
  /**
   * 每个音频采样点的位数 (bit)。
   */
  audioBitsPerSample?: number;
}

/**
 * 需播放的媒体文件的相关信息及播放设置。
 */
export class MediaSource {
  /**
   * 需要播放的媒体资源的 URL。
   */
  url?: string;
  /**
   * 媒体文件的 URI（Uniform Resource Identifier），可用于标识媒体文件。
   */
  uri?: string;
  /**
   * 设置起始播放位置 (毫秒)，默认值为 0。
   */
  startPos?: number;
  /**
   * 如果你设置关闭自动播放，打开媒体文件后，请调用 play 方法来播放媒体文件。 打开媒体文件后，是否开启自动播放： true ：（默认）开启自动播放。 false ：关闭自动播放。
   */
  autoPlay?: boolean;
  /**
   * SDK 目前仅支持缓存点播流，但不支持缓存通过 HLS 协议传输的点播流。
   *  缓存前，请向 uri 传值，否则播放器会以媒体文件的 url 作为缓存索引。
   *  开启实时缓存后，播放器会预先缓存当前正在播放的媒体文件的部分数据到本地，当你下次播放该文件时播放器会直接从缓存中加载数据，可节省网络流量。当前缓存的媒体文件的相关统计数据会在媒体文件开始播放后每秒更新一次，详见 CacheStatistics 。 此次播放是否开启实时缓存功能： true ：开启实时缓存。 false ：（默认）关闭实时缓存。
   */
  enableCache?: boolean;
  /**
   * 此次播放是否允许选择不同音轨： true ：允许选择不同音轨。 false ：（默认）不允许选择不同音轨。 如果你在本地播放和发布音频至远端时，需要设置不同的音轨，你需要将该参数设为 true ，然后再调用 selectMultiAudioTrack 方法来设置音轨。
   */
  enableMultiAudioTrack?: boolean;
  /**
   * 如果你需要打开的媒体资源为声网融合 CDN 分发的直播流或点播流，请向 url 传入直播或点播流的 URL 并将 isAgoraSource 设置为 true ，否则无需设置 isAgoraSource 。 打开的媒体资源是否为通过声网融合 CDN 分发的直播或点播流： true ：打开的媒体资源是声网融合 CDN 分发的直播或点播流。 false ：（默认）打开的媒体资源不是声网融合 CDN 分发的直播或点播流。
   */
  isAgoraSource?: boolean;
  /**
   * 仅当打开的媒体资源为直播流时，将 isLiveSource 设置为 true 后才可加快媒体资源的打开速度。 打开的媒体资源是否为直播流： true ：直播流。 false ：（默认）非直播流。 如果你打开的媒体资源为直播流，建议你将该参数设置为 true ，可加快打开直播流的速度。
   */
  isLiveSource?: boolean;
}
