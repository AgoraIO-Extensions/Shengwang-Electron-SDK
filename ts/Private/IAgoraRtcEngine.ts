import './extension/IAgoraRtcEngineExtension';
import {
  AudienceLatencyLevelType,
  AudioAinsMode,
  AudioEffectPreset,
  AudioEncodedFrameObserverConfig,
  AudioProfileType,
  AudioRecordingConfiguration,
  AudioSampleRateType,
  AudioScenarioType,
  AudioSessionOperationRestriction,
  AudioVolumeInfo,
  BeautyOptions,
  CameraFocalLengthType,
  CameraStabilizationMode,
  CaptureBrightnessLevelType,
  ChannelMediaRelayConfiguration,
  ChannelMediaRelayError,
  ChannelMediaRelayState,
  ChannelProfileType,
  ClientRoleChangeFailedReason,
  ClientRoleOptions,
  ClientRoleType,
  CodecCapInfo,
  ColorEnhanceOptions,
  ConnectionChangedReasonType,
  ConnectionStateType,
  DataStreamConfig,
  DeviceInfo,
  EarMonitoringFilterType,
  EchoTestConfiguration,
  EncryptionConfig,
  EncryptionErrorType,
  ErrorCodeType,
  FaceShapeArea,
  FaceShapeAreaOptions,
  FaceShapeBeautyOptions,
  FilterEffectOptions,
  FocalLengthInfo,
  HdrCapability,
  HeadphoneEqualizerPreset,
  IAudioEncodedFrameObserver,
  LastmileProbeConfig,
  LastmileProbeResult,
  LicenseErrorType,
  LiveTranscoding,
  LocalAccessPointConfiguration,
  LocalAudioMixerConfiguration,
  LocalAudioStats,
  LocalAudioStreamReason,
  LocalAudioStreamState,
  LocalTranscoderConfiguration,
  LocalVideoEventType,
  LocalVideoStreamReason,
  LocalVideoStreamState,
  LowlightEnhanceOptions,
  MediaTraceEvent,
  MultipathMode,
  MultipathStats,
  MultipathType,
  NetworkType,
  PermissionType,
  QualityAdaptIndication,
  QualityType,
  RdtState,
  RdtStreamType,
  RecorderStreamInfo,
  Rectangle,
  RemoteAudioState,
  RemoteAudioStateReason,
  RemoteVideoState,
  RemoteVideoStateReason,
  RenewTokenErrorCode,
  RtcStats,
  RtmpStreamPublishReason,
  RtmpStreamPublishState,
  RtmpStreamingEvent,
  ScreenCaptureParameters,
  ScreenCaptureParameters2,
  ScreenScenarioType,
  SegmentationProperty,
  SenderOptions,
  SimulcastConfig,
  SimulcastStreamConfig,
  SimulcastStreamMode,
  SpatialAudioParams,
  StreamPublishState,
  StreamSubscribeState,
  ThreadPriorityType,
  TranscodingVideoStream,
  UplinkNetworkInfo,
  UploadErrorReason,
  UserInfo,
  UserOfflineReasonType,
  VideoApplicationScenarioType,
  VideoCanvas,
  VideoCodecType,
  VideoContentHint,
  VideoDenoiserOptions,
  VideoDimensions,
  VideoEncoderConfiguration,
  VideoFormat,
  VideoLayout,
  VideoMirrorModeType,
  VideoModuleType,
  VideoOrientation,
  VideoQoePreferenceType,
  VideoRenderingTracingInfo,
  VideoStreamType,
  VideoSubscriptionOptions,
  VideoTranscoderError,
  VirtualBackgroundSource,
  VoiceAiTunerType,
  VoiceBeautifierPreset,
  VoiceConversionPreset,
  WatermarkConfig,
  WatermarkOptions,
} from './AgoraBase';
import {
  ContentInspectConfig,
  ContentInspectResult,
  ExtensionContext,
  IAudioSpectrumObserver,
  MediaSourceType,
  RawAudioFrameOpModeType,
  RenderModeType,
  SnapshotConfig,
  VideoSourceType,
} from './AgoraMediaBase';
import { IH265Transcoder } from './IAgoraH265Transcoder';
import { LogConfig, LogFilterType, LogLevel } from './IAgoraLog';
import { AudioMixingDualMonoMode, IMediaEngine } from './IAgoraMediaEngine';
import { IMediaPlayer } from './IAgoraMediaPlayer';
import { IMediaRecorder } from './IAgoraMediaRecorder';
import { IMusicContentCenter } from './IAgoraMusicContentCenter';
import {
  AgoraRhythmPlayerConfig,
  RhythmPlayerReason,
  RhythmPlayerStateType,
} from './IAgoraRhythmPlayer';
import { RtcConnection } from './IAgoraRtcEngineEx';
import { ILocalSpatialAudioEngine } from './IAgoraSpatialAudio';
import { IAudioDeviceManager } from './IAudioDeviceManager';

/**
 * 设备类型。
 */
export enum MediaDeviceType {
  /**
   * -1: 设备类型未知。
   */
  UnknownAudioDevice = -1,
  /**
   * 0: 音频播放设备。
   */
  AudioPlayoutDevice = 0,
  /**
   * 1: 音频采集设备。
   */
  AudioRecordingDevice = 1,
  /**
   * 2: 视频渲染设备 (显卡)。
   */
  VideoRenderDevice = 2,
  /**
   * 3: 视频采集设备。
   */
  VideoCaptureDevice = 3,
  /**
   * 4: 音频应用播放设备。
   */
  AudioApplicationPlayoutDevice = 4,
  /**
   * （仅适用于 macOS。）5: 虚拟音频播放设备（虚拟声卡）。
   */
  AudioVirtualPlayoutDevice = 5,
  /**
   * （仅适用于 macOS。）6: 虚拟音频采集设备（虚拟声卡）。
   */
  AudioVirtualRecordingDevice = 6,
}

/**
 * 音乐文件播放状态。
 */
export enum AudioMixingStateType {
  /**
   * 710: 音乐文件正常播放。
   */
  AudioMixingStatePlaying = 710,
  /**
   * 711: 音乐文件暂停播放。
   */
  AudioMixingStatePaused = 711,
  /**
   * 713: 音乐文件停止播放。
   * 该状态可能由以下原因导致：
   *  AudioMixingReasonAllLoopsCompleted(723)
   *  AudioMixingReasonStoppedByUser(724)
   */
  AudioMixingStateStopped = 713,
  /**
   * 714: 音乐文件播放出错。
   * 该状态可能由以下原因导致：
   *  AudioMixingReasonCanNotOpen(701)
   *  AudioMixingReasonTooFrequentCall(702)
   *  AudioMixingReasonInterruptedEof(703)
   */
  AudioMixingStateFailed = 714,
}

/**
 * 音乐文件播放状态改变的原因。在 onAudioMixingStateChanged 回调中报告。
 */
export enum AudioMixingReasonType {
  /**
   * 701: 音乐文件打开出错。例如，本地音乐文件不存在、文件格式不支持或无法访问在线音乐文件 URL。
   */
  AudioMixingReasonCanNotOpen = 701,
  /**
   * 702: 音乐文件打开太频繁。如需多次调用 startAudioMixing ，请确保调用间隔大于 500 ms。
   */
  AudioMixingReasonTooFrequentCall = 702,
  /**
   * 703: 音乐文件播放中断。
   */
  AudioMixingReasonInterruptedEof = 703,
  /**
   * 721: 音乐文件完成一次循环播放。
   */
  AudioMixingReasonOneLoopCompleted = 721,
  /**
   * 723: 音乐文件完成所有循环播放。
   */
  AudioMixingReasonAllLoopsCompleted = 723,
  /**
   * 724: 成功调用 stopAudioMixing 停止播放音乐文件。
   */
  AudioMixingReasonStoppedByUser = 724,
  /**
   * @ignore
   */
  AudioMixingReasonResumedByUser = 726,
  /**
   * 0: 成功打开音乐文件。
   */
  AudioMixingReasonOk = 0,
}

/**
 * @ignore
 */
export enum InjectStreamStatus {
  /**
   * @ignore
   */
  InjectStreamStatusStartSuccess = 0,
  /**
   * @ignore
   */
  InjectStreamStatusStartAlreadyExists = 1,
  /**
   * @ignore
   */
  InjectStreamStatusStartUnauthorized = 2,
  /**
   * @ignore
   */
  InjectStreamStatusStartTimedout = 3,
  /**
   * @ignore
   */
  InjectStreamStatusStartFailed = 4,
  /**
   * @ignore
   */
  InjectStreamStatusStopSuccess = 5,
  /**
   * @ignore
   */
  InjectStreamStatusStopNotFound = 6,
  /**
   * @ignore
   */
  InjectStreamStatusStopUnauthorized = 7,
  /**
   * @ignore
   */
  InjectStreamStatusStopTimedout = 8,
  /**
   * @ignore
   */
  InjectStreamStatusStopFailed = 9,
  /**
   * @ignore
   */
  InjectStreamStatusBroken = 10,
}

/**
 * 语音音效均衡波段的中心频率。
 */
export enum AudioEqualizationBandFrequency {
  /**
   * 0: 31 Hz
   */
  AudioEqualizationBand31 = 0,
  /**
   * 1: 62 Hz
   */
  AudioEqualizationBand62 = 1,
  /**
   * 2: 125 Hz
   */
  AudioEqualizationBand125 = 2,
  /**
   * 3: 250 Hz
   */
  AudioEqualizationBand250 = 3,
  /**
   * 4: 500 Hz
   */
  AudioEqualizationBand500 = 4,
  /**
   * 5: 1 kHz
   */
  AudioEqualizationBand1k = 5,
  /**
   * 6: 2 kHz
   */
  AudioEqualizationBand2k = 6,
  /**
   * 7: 4 kHz
   */
  AudioEqualizationBand4k = 7,
  /**
   * 8: 8 kHz
   */
  AudioEqualizationBand8k = 8,
  /**
   * 9: 16 kHz
   */
  AudioEqualizationBand16k = 9,
}

/**
 * 音频混响类型。
 */
export enum AudioReverbType {
  /**
   * 0: 原始声音强度，即所谓的 dry signal，取值范围 [-20,10]，单位为 dB。
   */
  AudioReverbDryLevel = 0,
  /**
   * 1: 早期反射信号强度，即所谓的 wet signal，取值范围 [-20,10]，单位为 dB。
   */
  AudioReverbWetLevel = 1,
  /**
   * 2: 所需混响效果的房间尺寸，一般房间越大，混响越强，取值范围 [0,100]，单位为 dB。
   */
  AudioReverbRoomSize = 2,
  /**
   * 3: Wet signal 的初始延迟长度，取值范围 [0,200]，单位为毫秒。
   */
  AudioReverbWetDelay = 3,
  /**
   * 4: 混响持续的强度，取值范围为 [0,100]。
   */
  AudioReverbStrength = 4,
}

/**
 * @ignore
 */
export enum StreamFallbackOptions {
  /**
   * @ignore
   */
  StreamFallbackOptionDisabled = 0,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLow = 1,
  /**
   * @ignore
   */
  StreamFallbackOptionAudioOnly = 2,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer1 = 3,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer2 = 4,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer3 = 5,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer4 = 6,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer5 = 7,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer6 = 8,
}

/**
 * @ignore
 */
export enum PriorityType {
  /**
   * @ignore
   */
  PriorityHigh = 50,
  /**
   * @ignore
   */
  PriorityNormal = 100,
}

/**
 * 本地视频流统计信息。
 */
export class LocalVideoStats {
  /**
   * 本地用户的 ID。
   */
  uid?: number;
  /**
   * 实际发送码率 (Kbps) 不包含丢包后重传视频等的发送码率。
   */
  sentBitrate?: number;
  /**
   * 实际发送帧率 (fps)。 不包含丢包后重传视频等的发送帧率。
   */
  sentFrameRate?: number;
  /**
   * 本地视频采集帧率 (fps)。
   */
  captureFrameRate?: number;
  /**
   * 本地视频采集宽度 (px)。
   */
  captureFrameWidth?: number;
  /**
   * 本地视频采集高度 (px)。
   */
  captureFrameHeight?: number;
  /**
   * SDK 内置的视频采集适配器（regulator）调整后的摄像头采集视频帧率 (fps)。Regulator 根据视频编码配置对摄像头采集视频的帧率进行调整。
   */
  regulatedCaptureFrameRate?: number;
  /**
   * SDK 内置的视频采集适配器（regulator）调整后的摄像头采集视频宽度 (px)。Regulator 根据视频编码配置对摄像头采集视频的宽高进行调整。
   */
  regulatedCaptureFrameWidth?: number;
  /**
   * SDK 内置的视频采集适配器（regulator）调整后的摄像头采集视频高度 (px)。Regulator 根据视频编码配置对摄像头采集视频的宽高进行调整。
   */
  regulatedCaptureFrameHeight?: number;
  /**
   * 本地视频编码器的输出帧率，单位为 fps。
   */
  encoderOutputFrameRate?: number;
  /**
   * 视频编码宽度（px）。
   */
  encodedFrameWidth?: number;
  /**
   * 视频编码高度（px）。
   */
  encodedFrameHeight?: number;
  /**
   * 本地视频渲染器的输出帧率，单位为 fps。
   */
  rendererOutputFrameRate?: number;
  /**
   * 当前编码器的目标编码码率 (Kbps)，该码率为 SDK 根据当前网络状况预估的一个值。
   */
  targetBitrate?: number;
  /**
   * 当前编码器的目标编码帧率 (fps)。
   */
  targetFrameRate?: number;
  /**
   * 统计周期内本地视频质量（基于目标帧率和目标码率）的自适应情况。详见 QualityAdaptIndication 。
   */
  qualityAdaptIndication?: QualityAdaptIndication;
  /**
   * 视频编码码率（Kbps）。 不包含丢包后重传视频等的编码码率。
   */
  encodedBitrate?: number;
  /**
   * 视频发送的帧数，累计值。
   */
  encodedFrameCount?: number;
  /**
   * 视频的编码类型。详见 VideoCodecType 。
   */
  codecType?: VideoCodecType;
  /**
   * 弱网对抗前本端到声网边缘服务器的视频丢包率 (%)。
   */
  txPacketLossRate?: number;
  /**
   * 本地采集的画质亮度级别。详见 CaptureBrightnessLevelType 。
   */
  captureBrightnessLevel?: CaptureBrightnessLevelType;
  /**
   * @ignore
   */
  dualStreamEnabled?: boolean;
  /**
   * 本地视频编码加速类型。
   *  0：采用软件编码，未加速。
   *  1：采用硬件编码进行加速。
   */
  hwEncoderAccelerating?: number;
  /**
   * @ignore
   */
  simulcastDimensions?: VideoDimensions[];
  /**
   * @ignore
   */
  encodedFrameDepth?: number;
}

/**
 * 远端用户的音频统计数据。
 */
export class RemoteAudioStats {
  /**
   * 远端用户的用户 ID。
   */
  uid?: number;
  /**
   * 远端用户发送的音频流质量。详见 QualityType 。
   */
  quality?: number;
  /**
   * 音频发送端到接收端的网络延迟（毫秒）。
   */
  networkTransportDelay?: number;
  /**
   * 音频接收端到网络抖动缓冲的网络延迟（毫秒）。 当接收端为观众且 ClientRoleOptions 的 audienceLatencyLevel 为 1 时，该参数不生效。
   */
  jitterBufferDelay?: number;
  /**
   * 统计周期内的远端音频流的丢帧率 (%)。
   */
  audioLossRate?: number;
  /**
   * 声道数。
   */
  numChannels?: number;
  /**
   * 统计周期内接收到的远端音频流的采样率。
   */
  receivedSampleRate?: number;
  /**
   * 接收到的远端音频流在统计周期内的平均码率（Kbps）。
   */
  receivedBitrate?: number;
  /**
   * 远端用户在加入频道后发生音频卡顿的累计时长（毫秒）。通话过程中，音频丢帧率达到 4% 即记为一次音频卡顿。
   */
  totalFrozenTime?: number;
  /**
   * 音频卡顿的累计时长占音频总有效时长的百分比 (%)。音频有效时长是指远端用户加入频道后音频未被停止发送或禁用的时长。
   */
  frozenRate?: number;
  /**
   * 统计周期内，声网实时音频 MOS（平均主观意见分）评估方法对接收到的远端音频流的质量评分。返回值范围为 [0,500]。返回值除以 100 即可得到 MOS 分数，范围为 [0,5] 分，分数越高，音频质量越好。 MOS 分数 音质感受 大于 4 分 音频质量佳，清晰流畅。 3.5 - 4 分 音频质量较好，偶有音质损伤，但依然清晰。 3 - 3.5 分 音频质量一般，偶有卡顿，不是非常流畅，需要一点注意力才能听清。 2.5 - 3 分 音频质量较差，卡顿频繁，需要集中精力才能听清。 2 - 2.5 分 音频质量很差，偶有杂音，部分语义丢失，难以交流。 小于 2 分 音频质量非常差，杂音频现，大量语义丢失，完全无法交流。
   */
  mosValue?: number;
  /**
   * @ignore
   */
  frozenRateByCustomPlcCount?: number;
  /**
   * @ignore
   */
  plcCount?: number;
  /**
   * @ignore
   */
  frozenCntByCustom?: number;
  /**
   * @ignore
   */
  frozenTimeByCustom?: number;
  /**
   * 远端用户在音频通话开始到本次回调之间的有效时长（毫秒）。
   * 有效时长是指去除了远端用户进入静音状态的总时长。
   */
  totalActiveTime?: number;
  /**
   * 远端音频流的累计发布时长（毫秒）。
   */
  publishDuration?: number;
  /**
   * 接收远端音频时，本地用户的主观体验质量。详见 ExperienceQualityType 。
   */
  qoeQuality?: number;
  /**
   * 接收远端音频时，本地用户主观体验质量较差的原因。详见 ExperiencePoorReason 。
   */
  qualityChangedReason?: number;
  /**
   * @ignore
   */
  rxAudioBytes?: number;
  /**
   * 端到端音频延时（毫秒），即自远端用户音频采集起，至本地用户开始播放音频的总时长。
   */
  e2eDelay?: number;
}

/**
 * 远端视频流的统计信息。
 */
export class RemoteVideoStats {
  /**
   * 用户 ID，指定是哪个用户的视频流。
   */
  uid?: number;
  /**
   * 延时（毫秒）。 弃用：在有音画同步机制的音视频场景中，你可以参考 RemoteAudioStats 里的 networkTransportDelay 和 jitterBufferDelay 成员的值，了解视频的延迟数据。
   */
  delay?: number;
  /**
   * 端到端视频延时（毫秒）。即，自远端用户视频采集起，至本地用户接收并渲染视频的总时长。
   */
  e2eDelay?: number;
  /**
   * 视频流宽（像素）。
   */
  width?: number;
  /**
   * 视频流高（像素）。
   */
  height?: number;
  /**
   * （上次统计后）接收到的码率(Kbps)。
   */
  receivedBitrate?: number;
  /**
   * @ignore
   */
  decoderInputFrameRate?: number;
  /**
   * 远端视频解码器的输出帧率，单位为 fps。
   */
  decoderOutputFrameRate?: number;
  /**
   * 远端视频渲染器的输出帧率，单位为 fps。
   */
  rendererOutputFrameRate?: number;
  /**
   * 远端视频丢包率(%)。
   */
  frameLossRate?: number;
  /**
   * 远端视频在使用抗丢包技术之后的丢包率(%)。
   */
  packetLossRate?: number;
  /**
   * 视频流类型，大流或小流。详见 VideoStreamType 。
   */
  rxStreamType?: VideoStreamType;
  /**
   * 远端用户在加入频道后发生视频卡顿的累计时长（ms）。通话过程中，视频帧率设置不低于 5 fps 时，连续渲染的两帧视频之间间隔超过 500 ms，则记为一次视频卡顿。
   */
  totalFrozenTime?: number;
  /**
   * 远端用户在加入频道后发生视频卡顿的累计时长占视频总有效时长的百分比 (%)。视频有效时长是指远端用户加入频道后视频未被停止发送或禁用的时长。
   */
  frozenRate?: number;
  /**
   * 音频超前视频的时间 (ms)。 如果为负值，则代表音频落后于视频。
   */
  avSyncTimeMs?: number;
  /**
   * 视频有效时长（毫秒）。
   * 视频总有效时长是远端用户或主播加入频道后，既没有停止发送视频流，也没有禁用视频模块的通话时长。
   */
  totalActiveTime?: number;
  /**
   * 远端视频流的累计发布时长（毫秒）。
   */
  publishDuration?: number;
  /**
   * 在统计周期内远端音频流的质量。该质量由声网实时音频 MOS（主观意见评分）测量方法确定。返回值范围为 [0, 500]，除以 100 后为 MOS 分数，范围为 0 到 5，分数越高表示音频质量越好。声网实时音频 MOS 评分对应的主观音质感受如下：
   *  大于 4 分，音频质量佳，清晰流畅。
   *  3.5 - 4 分，音频质量较好，偶有音质损伤，但依然清晰。
   *  3 - 3.5 分，音频质量一般，偶有卡顿，不是非常流畅，需要一点注意力才能听清。
   *  2.5 - 3 分，音频质量较差，卡顿频繁，需要集中精力才能听清。
   *  2 - 2.5 分，音频质量很差，偶有杂音，部分语义丢失，难以交流。
   *  小于 2 分，音频质量非常差，杂音频现，大量语义丢失，完全无法交流。
   */
  mosValue?: number;
  /**
   * @ignore
   */
  rxVideoBytes?: number;
}

/**
 * @ignore
 */
export class Region {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  x?: number;
  /**
   * @ignore
   */
  y?: number;
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  zOrder?: number;
  /**
   * @ignore
   */
  alpha?: number;
  /**
   * @ignore
   */
  renderMode?: RenderModeType;
}

/**
 * @ignore
 */
export class VideoCompositingLayout {
  /**
   * @ignore
   */
  canvasWidth?: number;
  /**
   * @ignore
   */
  canvasHeight?: number;
  /**
   * @ignore
   */
  backgroundColor?: string;
  /**
   * @ignore
   */
  regions?: Region[];
  /**
   * @ignore
   */
  regionCount?: number;
  /**
   * @ignore
   */
  appData?: Uint8Array;
  /**
   * @ignore
   */
  appDataLength?: number;
}

/**
 * @ignore
 */
export class InjectStreamConfig {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  videoGop?: number;
  /**
   * @ignore
   */
  videoFramerate?: number;
  /**
   * @ignore
   */
  videoBitrate?: number;
  /**
   * @ignore
   */
  audioSampleRate?: AudioSampleRateType;
  /**
   * @ignore
   */
  audioBitrate?: number;
  /**
   * @ignore
   */
  audioChannels?: number;
}

/**
 * 服务端转码推流的生命周期。
 *
 * 废弃 弃用
 */
export enum RtmpStreamLifeCycleType {
  /**
   * 跟频道生命周期绑定，即频道内所有主播离开，服务端转码推流会在 30 秒之后停止。
   */
  RtmpStreamLifeCycleBind2channel = 1,
  /**
   * 跟启动服务端转码推流的主播生命周期绑定，即该主播离开，服务端转码推流会立即停止。
   */
  RtmpStreamLifeCycleBind2owner = 2,
}

/**
 * @ignore
 */
export class PublisherConfiguration {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  framerate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  defaultLayout?: number;
  /**
   * @ignore
   */
  lifecycle?: number;
  /**
   * @ignore
   */
  owner?: boolean;
  /**
   * @ignore
   */
  injectStreamWidth?: number;
  /**
   * @ignore
   */
  injectStreamHeight?: number;
  /**
   * @ignore
   */
  injectStreamUrl?: string;
  /**
   * @ignore
   */
  publishUrl?: string;
  /**
   * @ignore
   */
  rawStreamUrl?: string;
  /**
   * @ignore
   */
  extraInfo?: string;
}

/**
 * 摄像头方向。
 */
export enum CameraDirection {
  /**
   * 0: 后置摄像头。
   */
  CameraRear = 0,
  /**
   * 1: （默认）前置摄像头。
   */
  CameraFront = 1,
}

/**
 * 云代理类型。
 */
export enum CloudProxyType {
  /**
   * 0：自动模式。SDK 默认开启该模式。在该模式下，SDK 优先连接 SD-RTN™，如果连接失败，自动切换到 TLS 443。
   */
  NoneProxy = 0,
  /**
   * 1：UDP 协议的云代理，即 Force UDP 云代理模式。在该模式下，SDK 始终通过 UDP 协议传输数据。
   */
  UdpProxy = 1,
  /**
   * 2：TCP（加密）协议的云代理，即 Force TCP 云代理模式。在该模式下，SDK 始终通过 TLS 443 传输数据。
   */
  TcpProxy = 2,
}

/**
 * 摄像头采集配置。
 */
export class CameraCapturerConfiguration {
  /**
   * @ignore
   */
  cameraDirection?: CameraDirection;
  /**
   * @ignore
   */
  cameraFocalLengthType?: CameraFocalLengthType;
  /**
   * （可选）摄像头的 ID。最大长度为 MaxDeviceIdLengthType 。
   */
  deviceId?: string;
  /**
   * @ignore
   */
  cameraId?: string;
  /**
   * （可选）是否跟随 setVideoEncoderConfiguration 中设置的视频宽高比： true ：(默认) 跟随。SDK 会将采集到的视频按照已设置的视频宽高比进行裁剪，会同步改变本地预览画面、 onCaptureVideoFrame 和 onPreEncodeVideoFrame 中的视频画面。 false ：不跟随。SDK不改变采集到的视频帧宽高比。
   */
  followEncodeDimensionRatio?: boolean;
  /**
   * （可选）视频帧格式。详见 VideoFormat 。
   */
  format?: VideoFormat;
}

/**
 * 屏幕采集配置。
 */
export class ScreenCaptureConfiguration {
  /**
   * 是否采集屏幕上的窗口： true ：采集窗口。 false ：（默认）采集屏幕，不采集窗口。
   */
  isCaptureWindow?: boolean;
  /**
   * （仅适用于 macOS 平台）屏幕的 display ID。 请仅在 Mac 设备上采集屏幕时使用该参数。
   */
  displayId?: number;
  /**
   * （仅适用于 Windows 平台）待共享的屏幕相对于虚拟屏的位置。 请仅在 Windows 设备上采集屏幕时使用该参数。
   */
  screenRect?: Rectangle;
  /**
   * 窗口 ID。 请仅在采集窗口时使用该参数。
   */
  windowId?: number;
  /**
   * 屏幕共享流的编码参数配置。详见 ScreenCaptureParameters 。
   */
  params?: ScreenCaptureParameters;
  /**
   * 待共享区域相对于整个屏幕的位置。详见 Rectangle 。如不填，则表示共享整个屏幕。如果设置的共享区域超出了屏幕的边界，则只共享屏幕内的内容。 如果将 Rectangle 中的 width 或 height 设为 0 ，则共享整个屏幕。
   */
  regionRect?: Rectangle;
}

/**
 * @ignore
 */
export class Size {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
}

/**
 * 缩略图或图标的图像内容。在 ScreenCaptureSourceInfo 中设置。
 *
 * 图像默认为 ARGB 格式。如果你需要使用其他格式，请自行转换格式。
 */
export class ThumbImageBuffer {
  /**
   * 缩略图或图标的 buffer。
   */
  buffer?: Uint8Array;
  /**
   * 缩略图或图标的 buffer 长度，单位为字节。
   */
  length?: number;
  /**
   * 缩略图或图标的实际宽度（px）。
   */
  width?: number;
  /**
   * 缩略图或图标的实际高度（px）。
   */
  height?: number;
}

/**
 * 共享目标的类型。在 ScreenCaptureSourceInfo 中设置。
 */
export enum ScreenCaptureSourceType {
  /**
   * -1：未知。
   */
  ScreencapturesourcetypeUnknown = -1,
  /**
   * 0：共享目标为某一个窗口。
   */
  ScreencapturesourcetypeWindow = 0,
  /**
   * 1：共享目标为某一个显示器的屏幕。
   */
  ScreencapturesourcetypeScreen = 1,
  /**
   * 2：预留参数。
   */
  ScreencapturesourcetypeCustom = 2,
}

/**
 * 可共享窗口或屏幕的信息。
 */
export class ScreenCaptureSourceInfo {
  /**
   * 共享目标的类型。详见 ScreenCaptureSourceType 。
   */
  type?: ScreenCaptureSourceType;
  /**
   * 对于窗口，表示窗口 ID（Window ID）；对于屏幕，表示屏幕 ID（Display ID）。
   */
  sourceId?: number;
  /**
   * 窗口或屏幕的名称。UTF-8 编码。
   */
  sourceName?: string;
  /**
   * 缩略图的图像内容。详见 ThumbImageBuffer 。
   */
  thumbImage?: ThumbImageBuffer;
  /**
   * 图标的图像内容。详见 ThumbImageBuffer 。
   */
  iconImage?: ThumbImageBuffer;
  /**
   * 窗口所属的进程。UTF-8 编码。
   */
  processPath?: string;
  /**
   * 窗口标题。UTF-8 编码。
   */
  sourceTitle?: string;
  /**
   * 屏幕是否为主显示屏： true : 屏幕为主显示屏。 false : 屏幕不是主显示屏。
   */
  primaryMonitor?: boolean;
  /**
   * @ignore
   */
  isOccluded?: boolean;
  /**
   * 窗口相对于整个屏幕空间（包含所有可共享屏幕）的位置。详见 Rectangle 。
   */
  position?: Rectangle;
  /**
   * (仅适用于 Windows) 窗口是否已最小化： true : 窗口已最小化。 false : 窗口未最小化。
   */
  minimizeWindow?: boolean;
  /**
   * (仅适用于 Windows) 窗口所在的屏幕 ID。如果窗口为跨屏幕显示，则表示与该窗口相交面积最大的屏幕 ID。如果窗口位于可见屏幕之外，则该成员的值为 -2。
   */
  sourceDisplayId?: number;
}

/**
 * 音频的高级选项。
 */
export class AdvancedAudioOptions {
  /**
   * 音频前处理的声道数。详见 AudioProcessingChannels 。
   */
  audioProcessingChannels?: number;
}

/**
 * 垫片图片的设置选项。
 */
export class ImageTrackOptions {
  /**
   * 垫片图片的 URL，目前支持 JPEG、JPG、PNG、GIF 格式的图片。支持从本地绝对路径或相对路径添加垫片图片。
   */
  imageUrl?: string;
  /**
   * 视频帧率，取值范围为 [1,30]。默认值为 1。
   */
  fps?: number;
  /**
   * @ignore
   */
  mirrorMode?: VideoMirrorModeType;
}

/**
 * 频道媒体设置选项。
 *
 * RtcConnection publishMicrophoneTrack publishCustomAudioTrack publishMediaPlayerAudioTrack true publishCameraTrack publishScreenTrack 、 publishCustomVideoTrack publishEncodedVideoTrack true 建议你根据业务场景自行设置成员参数值，否则 SDK 会自动对成员参数进行赋值。
 */
export class ChannelMediaOptions {
  /**
   * 设置是否发布摄像头采集的视频： true ：发布摄像头采集的视频。 false ：不发布摄像头采集的视频。
   */
  publishCameraTrack?: boolean;
  /**
   * 设置是否发布第二个摄像头采集的视频： true ：发布第二个摄像头采集的视频。 false ：不发布第二个摄像头采集的视频。
   */
  publishSecondaryCameraTrack?: boolean;
  /**
   * 设置是否发布第三个摄像头采集的视频： true ：发布第三个摄像头采集的视频。 false ：不发布第三个摄像头采集的视频。
   */
  publishThirdCameraTrack?: boolean;
  /**
   * 设置是否发布第四个摄像头采集的视频： true ：发布第四个摄像头采集的视频。 false ：不发布第四个摄像头采集的视频。
   */
  publishFourthCameraTrack?: boolean;
  /**
   * 设置是否发布麦克风采集到的音频： true ：发布麦克风采集到的音频。 false ：不发布麦克风采集到的音频。
   */
  publishMicrophoneTrack?: boolean;
  /**
   * @ignore
   */
  publishScreenCaptureAudio?: boolean;
  /**
   * @ignore
   */
  publishScreenCaptureVideo?: boolean;
  /**
   * 设置是否发布屏幕采集的视频： true ：发布屏幕采集到的视频。 false ：不发布屏幕采集到的视频。
   */
  publishScreenTrack?: boolean;
  /**
   * 设置是否发布第二个屏幕采集的视频： true ：发布第二个屏幕采集到的视频。 false ：不发布第二个屏幕采集到的视频。
   */
  publishSecondaryScreenTrack?: boolean;
  /**
   * 设置是否发布第三个屏幕采集的视频： true ：发布第三个屏幕采集到的视频。 false ：不发布第三个屏幕采集到的视频。
   */
  publishThirdScreenTrack?: boolean;
  /**
   * 设置是否发布第四个屏幕采集的视频： true ：发布第四个屏幕采集到的视频。 false ：不发布第四个屏幕采集到的视频。
   */
  publishFourthScreenTrack?: boolean;
  /**
   * 设置是否发布自定义采集的音频： true ：发布自定义采集到的音频。 false ：不发布自定义采集到的音频。
   */
  publishCustomAudioTrack?: boolean;
  /**
   * 待发布的自定义音频轨道的 ID，默认值为 0。你可以通过 createCustomAudioTrack 方法来获取自定义音频轨道 ID。
   */
  publishCustomAudioTrackId?: number;
  /**
   * 设置是否发布自定义采集的视频： true ：发布自定义采集的视频。 false ：不发布自定义采集到的视频。
   */
  publishCustomVideoTrack?: boolean;
  /**
   * 设置是否发布编码后的视频： true ：发布编码后的视频 。 false ：不发布编码后的视频。
   */
  publishEncodedVideoTrack?: boolean;
  /**
   * 设置是否发布媒体播放器的音频： true ：发布媒体播放器的音频。 false ：不发布媒体播放器的音频。
   */
  publishMediaPlayerAudioTrack?: boolean;
  /**
   * 设置是否发布媒体播放器的视频： true ：发布媒体播放器的视频。 false ：不发布媒体播放器的视频。
   */
  publishMediaPlayerVideoTrack?: boolean;
  /**
   * 设置是否发布本地的转码视频： true ：发布本地的转码视频。 false ：不发布本地的转码视频。
   */
  publishTranscodedVideoTrack?: boolean;
  /**
   * 设置是否发布本地混音音频： true ：发布本地混音音频。 false ：不发布本地混音音频。
   */
  publishMixedAudioTrack?: boolean;
  /**
   * 设置是否发布语音驱动插件处理后的视频： true ：发布语音驱动插件处理后的视频。 false ：（默认）不发布语音驱动插件处理后的视频。
   */
  publishLipSyncTrack?: boolean;
  /**
   * 设置是否自动订阅所有音频流： true ：自动订阅所有音频流。 false ：不自动订阅任何音频流。
   */
  autoSubscribeAudio?: boolean;
  /**
   * 设置是否自动订阅所有视频流： true ：自动订阅所有视频流。 false ：不自动订阅任何视频流。
   */
  autoSubscribeVideo?: boolean;
  /**
   * 如果那你需要发布麦克风采集的音频流，请确保该参数设为 true 。 设置是否开启音频录制或播放： true ：开启音频录制或播放。 false ：不开启音频录制或播放。
   */
  enableAudioRecordingOrPlayout?: boolean;
  /**
   * 待发布的媒体播放器的 ID。默认值为 0。
   */
  publishMediaPlayerId?: number;
  /**
   * 用户角色。详见 ClientRoleType 。
   */
  clientRoleType?: ClientRoleType;
  /**
   * 观众端延时级别。详见 AudienceLatencyLevelType 。
   */
  audienceLatencyLevel?: AudienceLatencyLevelType;
  /**
   * 默认订阅的视频流类型: VideoStreamType 。
   */
  defaultVideoStreamType?: VideoStreamType;
  /**
   * 频道使用场景。详见 ChannelProfileType 。
   */
  channelProfile?: ChannelProfileType;
  /**
   * 发送音频帧的延时（毫秒）。你可以通过该参数来设置需要发送的音频帧的延时，以确保音画同步。
   * 如果要关闭延时，将此参数值设置为 0。
   */
  audioDelayMs?: number;
  /**
   * @ignore
   */
  mediaPlayerAudioDelayMs?: number;
  /**
   * （可选）在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   *  该参数仅在调用 updateChannelMediaOptions 或 updateChannelMediaOptionsEx 时生效。
   *  请确保用于生成 token 的 App ID、频道名和用户名和 initialize 方法初始化引擎时用的 App ID，以及 joinChannel 或 joinChannelEx 方法加入频道时设置的频道名和用户名是一致的。
   */
  token?: string;
  /**
   * @ignore
   */
  enableBuiltInMediaEncryption?: boolean;
  /**
   * 设置是否发布虚拟节拍器声音至远端： true ：发布。本地用户和远端用户都能听到节拍器。 false ：不发布。只有本地用户能听到节拍器。
   */
  publishRhythmPlayerTrack?: boolean;
  /**
   * 该参数用于实现跨直播间连麦场景。连麦主播需要调用 joinChannelEx 方法，以观众身份加入对方的直播间，并将 isInteractiveAudience 设置为 true 。
   *  仅当用户角色为 ClientRoleAudience 时，该参数生效。 是否开启互动观众模式： true ：开启互动观众模式。成功开启后，本地用户作为互动观众，收到低延时和流畅的远端用户视频。 false ：不开启互动观众模式。本地用户作为普通观众，收到默认设置的远端用户视频。
   */
  isInteractiveAudience?: boolean;
  /**
   * 调用 createCustomVideoTrack 方法返回的视频轨道 ID。默认值为 0。
   */
  customVideoTrackId?: number;
  /**
   * 如需启用该功能，请[联系销售](https://www.shengwang.cn/contact-sales/)。 设置是否让当前音频流根据音强算法参与选流。 true ：参与音强选流。如未开启音强选流功能，该参数不会生效。 false ：不参与音强选流。
   */
  isAudioFilterable?: boolean;
  /**
   * @ignore
   */
  parameters?: string;
  /**
   * 权限和系统要求：
   *  Android：Android 7.0 或更高版本（API 级别 24 或更高），需要 ACCESS_NETWORK_STATE 和 CHANGE_NETWORK_STATE 权限。
   *  iOS：iOS 12.0 或更高版本。
   *  macOS：10.14 或更高版本。
   *  Windows：Windows Vista 或更高版本。 是否启用多路径传输： true ：启用多路径传输。 false ：禁用多路径传输。
   */
  enableMultipath?: boolean;
  /**
   * 上行传输模式。详见 MultipathMode 。 使用该参数时，请确保已将 enableMultipath 设置为 true 。
   */
  uplinkMultipathMode?: MultipathMode;
  /**
   * 下行传输模式。详见 MultipathMode 。 使用该参数时，请确保已将 enableMultipath 设置为 true 。
   */
  downlinkMultipathMode?: MultipathMode;
  /**
   * 首选的传输路径类型。详见 MultipathType 。 使用该参数时，请确保已将 enableMultipath 设置为 true 。
   */
  preferMultipathType?: MultipathType;
}

/**
 * 代理类型。
 */
export enum ProxyType {
  /**
   * 0: 预留参数，暂不支持。
   */
  NoneProxyType = 0,
  /**
   * 1: UDP 协议的云代理，即 Force UDP 云代理模式。在该模式下，SDK 始终通过 UDP 协议传输数据。
   */
  UdpProxyType = 1,
  /**
   * 2: TCP（加密）协议的云代理，即 Force TCP 云代理模式。在该模式下，SDK 始终通过 TLS 443 传输数据。
   */
  TcpProxyType = 2,
  /**
   * 3: 预留参数，暂不支持。
   */
  LocalProxyType = 3,
  /**
   * 4: 自动模式。在该模式下，SDK 优先连接 SD-RTN™，如果连接失败，自动切换为 TLS 443。
   */
  TcpProxyAutoFallbackType = 4,
  /**
   * @ignore
   */
  HttpProxyType = 5,
  /**
   * @ignore
   */
  HttpsProxyType = 6,
}

/**
 * 进阶功能类型。
 */
export enum FeatureType {
  /**
   * 1: 虚拟背景功能。
   */
  VideoVirtualBackground = 1,
  /**
   * 2: 美颜功能。
   */
  VideoBeautyEffect = 2,
}

/**
 * 离开频道的选项。
 */
export class LeaveChannelOptions {
  /**
   * 离开频道时，是否停止播放音乐文件及混音： true ：（默认）停止播放音乐文件及混音。 false ： 不停止播放音乐文件及混音。
   */
  stopAudioMixing?: boolean;
  /**
   * 离开频道时，是否停止播放音效： true ：（默认）停止播放音效。 false ： 不停止播放音效。
   */
  stopAllEffect?: boolean;
  /**
   * 离开频道时，是否停止麦克风采集： true ：（默认）停止麦克风采集。 false ： 不停止麦克风采集。
   */
  stopMicrophoneRecording?: boolean;
}

/**
 * 接口类 IRtcEngineEventHandler 用于 SDK 向 App 发送事件通知，App 通过继承该接口类的方法获取 SDK 的事件通知。
 *
 * 该接口类的所有方法都有缺省（空）实现， App 可以根据需要只继承关心的事件。
 *  在回调方法中，App 不应该做耗时或者调用可能会引起阻塞的 API（如 sendMessage ），否则可能影响 SDK 的运行。
 *  SDK 不再捕获开发者在 IRtcEngineEventHandler 类回调中自行实现的代码逻辑中的异常。你需要自行处理该异常，否则异常出现时可能引起 App 崩溃。
 */
export interface IRtcEngineEventHandler {
  /**
   * 成功加入频道回调。
   *
   * 该回调方法表示该客户端成功加入了指定的频道。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param elapsed 从本地调用 joinChannel 开始到发生此事件过去的时间（毫秒）。
   */
  onJoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;

  /**
   * 成功重新加入频道回调。
   *
   * @param uid 重新加入频道的用户 ID。
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param elapsed 从调用 joinChannel 方法到触发该回调的时间间隔（毫秒）。
   */
  onRejoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;

  /**
   * 代理连接状态回调。
   *
   * 通过该回调你可以监听 SDK 连接代理的状态。例如，当用户调用 setCloudProxy 设置代理并成功加入频道后，SDK 会触发该回调报告用户 ID、连接的代理类型和从调用 joinChannel 到触发该回调经过的时间等。
   *
   * @param channel 频道名称。
   * @param uid 用户 ID
   * @param proxyType 连接上的代理类型。详见 ProxyType 。
   * @param localProxyIp 预留参数，暂不支持。
   * @param elapsed 从调用 joinChannel 到 SDK 触发该回调的经过的时间（毫秒）。
   */
  onProxyConnected?(
    channel: string,
    uid: number,
    proxyType: ProxyType,
    localProxyIp: string,
    elapsed: number
  ): void;

  /**
   * 发生错误回调。
   *
   * 该回调方法表示 SDK 运行时出现了网络或媒体相关的错误。通常情况下，SDK 上报的错误意味着 SDK 无法自动恢复，需要 App 干预或提示用户。
   *
   * @param err 错误码。详见 ErrorCodeType 。
   * @param msg 错误描述。
   */
  onError?(err: ErrorCodeType, msg: string): void;

  /**
   * 远端声音质量回调。
   *
   * 废弃 弃用： 请改用 onRemoteAudioStats 。 该回调描述远端用户在通话中的音频质量，针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，指定是谁发的音频流。
   * @param quality 语音质量。详见 QualityType 。
   * @param delay 音频包从发送端到接收端的延迟（毫秒），包括声音采样前处理、网络传输、网络抖动缓冲引起的延迟。
   * @param lost 音频包从发送端到接收端的丢包率 (%)。
   */
  onAudioQuality?(
    connection: RtcConnection,
    remoteUid: number,
    quality: QualityType,
    delay: number,
    lost: number
  ): void;

  /**
   * 通话前网络上下行 Last mile 质量探测报告回调。
   *
   * 在调用 startLastmileProbeTest 之后，SDK 会在约 30 秒内返回该回调。
   *
   * @param result 上下行 Last mile 质量探测结果。详见 LastmileProbeResult 。
   */
  onLastmileProbeResult?(result: LastmileProbeResult): void;

  /**
   * 用户音量提示回调。
   *
   * 该回调默认禁用，你可以通过 enableAudioVolumeIndication 开启。 开启后，只要频道内有发流用户，SDK 会在加入频道后按 enableAudioVolumeIndication 中设置的时间间隔触发 onAudioVolumeIndication 回调。每次会触发两个 onAudioVolumeIndication 回调，一个报告本地发流用户的音量相关信息，另一个报告瞬时音量最高的远端用户（最多 3 位）的音量相关信息。 启用该功能后，如果有用户将自己静音（调用了 muteLocalAudioStream ），SDK 会继续报告本地用户的音量提示回调。
   * 瞬时音量最高的远端用户静音后 20 秒，远端的音量提示回调中将不再包含该用户；如果远端所有用户都将自己静音，20 秒后 SDK 停止报告远端用户的音量提示回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param speakers 用户音量信息，详见 AudioVolumeInfo 数组。如果 speakers 为空，则表示远端用户不发流或没有远端用户。
   * @param speakerNumber 用户数量。
   *  在本地用户的回调中，只要本地用户在发流， speakerNumber 始终为 1。
   *  在远端用户的回调中， speakerNumber 取值范围为 [0,3]。如果远端发流用户数量大于 3，则此回调中 speakerNumber 值为 3。
   * @param totalVolume 混音后的总音量，取值范围为 [0,255]。
   *  在本地用户的回调中， totalVolume 为本地发流用户的音量。
   *  在远端用户的回调中， totalVolume 为瞬时音量最高的远端用户（最多 3 位）混音后的总音量。
   */
  onAudioVolumeIndication?(
    connection: RtcConnection,
    speakers: AudioVolumeInfo[],
    speakerNumber: number,
    totalVolume: number
  ): void;

  /**
   * 离开频道回调。
   *
   * 你可以通过该回调获取此次通话的总通话时长、SDK 收发数据的流量等信息。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats 通话的统计数据，详见 RtcStats 。
   */
  onLeaveChannel?(connection: RtcConnection, stats: RtcStats): void;

  /**
   * 当前通话相关的统计信息回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats RTC 引擎统计数据，详见 RtcStats 。
   */
  onRtcStats?(connection: RtcConnection, stats: RtcStats): void;

  /**
   * 音频设备变化回调。
   *
   * 提示系统音频设备状态发生改变，比如耳机被拔出。
   *
   * @param deviceId 设备 ID。
   * @param deviceType 设备类型定义。详见 MediaDeviceType 。
   * @param deviceState 设备状态，详见 MediaDeviceStateType 。
   */
  onAudioDeviceStateChanged?(
    deviceId: string,
    deviceType: MediaDeviceType,
    deviceState: MediaDeviceStateType
  ): void;

  /**
   * 音乐文件播放进度回调。
   *
   * 当你调用 startAudioMixing 方法播放音乐文件后，SDK 会每隔一秒触发一次该回调，报告音乐文件当前的播放进度。
   *
   * @param position 音乐文件当前的播放进度，单位为 ms。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  onAudioMixingPositionChanged?(position: number): void;

  /**
   * 本地音乐文件播放已结束回调。
   *
   * 废弃 弃用： 请改用 onAudioMixingStateChanged 。 当调用 startAudioMixing 播放本地音乐文件结束后，会触发该回调。如果调用 startAudioMixing 失败，会返回错误码 WARN_AUDIO_MIXING_OPEN_ERROR 。
   */
  onAudioMixingFinished?(): void;

  /**
   * 本地音效文件播放已结束回调。
   *
   * 当播放音效结束后，会触发该回调。
   *
   * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
   */
  onAudioEffectFinished?(soundId: number): void;

  /**
   * 视频设备变化回调。
   *
   * 该回调提示系统视频设备状态发生改变，比如被拔出或移除。如果设备已使用外接摄像头采集，外接摄像头被拔开后，视频会中断。
   *
   * @param deviceId 设备 ID。
   * @param deviceType 设备类型。详见 MediaDeviceType 。
   * @param deviceState 设备状态。详见 MediaDeviceStateType 。
   */
  onVideoDeviceStateChanged?(
    deviceId: string,
    deviceType: MediaDeviceType,
    deviceState: MediaDeviceStateType
  ): void;

  /**
   * 通话中每个用户的网络上下行 last mile 质量报告回调。
   *
   * 该回调描述每个用户在通话中的 last mile 网络状态，其中 last mile 是指设备到声网边缘服务器的网络状态。
   * 该回调每 2 秒触发一次。如果远端有多个用户，该回调每 2 秒会被触发多次。
   * 该回调通过频道内的广播包反馈网络质量。过多的广播包可能引发广播风暴。为防止广播风暴导致频道内大量数据传输，该回调默认支持同时反馈最多 4 个远端主播的网络质量。 用户不发流时， txQuality 为 Unknown ；用户不收流时， rxQuality 为 Unknown 。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID。表示该回调报告的是持有该 ID 的用户的网络质量。如果当 uid 为 0 时，返回的是本地用户的网络质量。
   * @param txQuality 该用户的上行网络质量，基于发送码率、上行丢包率、平均往返时延和网络抖动计算。 该值代表当前的上行网络质量，帮助判断是否可以支持当前设置的视频编码属性。 假设上行码率是 1000 Kbps，那么支持直播场景下 640 × 480 的分辨率、15 fps 的帧率没有问题，但是支持 1280 × 720 的分辨率就会有困难。详见 QualityType 。
   * @param rxQuality 该用户的下行网络质量，基于下行网络的丢包率、平均往返延时和网络抖动计算。详见 QualityType 。
   */
  onNetworkQuality?(
    connection: RtcConnection,
    remoteUid: number,
    txQuality: QualityType,
    rxQuality: QualityType
  ): void;

  /**
   * @ignore
   */
  onIntraRequestReceived?(connection: RtcConnection): void;

  /**
   * 上行网络信息变化回调。
   *
   * 只有当上行网络信息发生变化时，SDK 才会触发该回调。 该回调仅适用于向 SDK 推送 H.264 格式的外部编码视频数据的场景。
   *
   * @param info 上行网络信息，详见 UplinkNetworkInfo 。
   */
  onUplinkNetworkInfoUpdated?(info: UplinkNetworkInfo): void;

  /**
   * 网络上下行 last mile 质量报告回调。
   *
   * 该回调描述本地用户在加入频道前的 last mile 网络探测的结果，其中 last mile 是指设备到声网边缘服务器的网络状态。
   * 加入频道前，调用 startLastmileProbeTest 之后，SDK 触发该回调报告本地用户在加入频道前的 last mile 网络探测的结果。
   *
   * @param quality Last mile 网络质量。详见 QualityType 。
   */
  onLastmileQuality?(quality: QualityType): void;

  /**
   * 已显示本地视频首帧回调。
   *
   * 本地视频首帧显示在本地视图上时，SDK 会触发此回调。
   *
   * @param source 视频源的类型。详见 VideoSourceType 。
   * @param width 本地渲染视频的宽 (px) 。
   * @param height 本地渲染视频的高 (px)。
   * @param elapsed 从调用 joinChannel 加入频道时到发生此事件过去的时间（毫秒）。如果在加入频道前调用了 startPreviewWithoutSourceType / startPreview ，则该参数表示从调用 startPreviewWithoutSourceType 或 startPreview 开启本地视频预览到发生此事件过去的时间。
   */
  onFirstLocalVideoFrame?(
    source: VideoSourceType,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * 已发布本地视频首帧回调。
   *
   * SDK 会在以下三种时机触发该回调：
   *  开启本地视频模块的情况下，调用 joinChannel 成功加入频道后。
   *  调用 muteLocalVideoStream (true)，再调用 muteLocalVideoStream (false) 后。
   *  调用 disableVideo ，再调用 enableVideo 后。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param elapsed 从调用 joinChannel 方法到触发该回调的时间间隔（毫秒）。
   */
  onFirstLocalVideoFramePublished?(
    connection: RtcConnection,
    elapsed: number
  ): void;

  /**
   * 已接收到远端视频并完成解码回调。
   *
   * SDK 会在以下时机触发该回调：
   *  远端用户首次上线后发送视频。
   *  远端用户视频离线再上线后发送视频。出现这种中断的可能原因包括：
   *  远端用户离开频道。
   *  远端用户掉线。
   *  远端用户调用 disableVideo 方法关闭视频模块。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，指定是哪个用户的视频流。
   * @param width 视频流宽（px）。
   * @param height 视频流高（px）。
   * @param elapsed 从本地调用 joinChannel 开始到该回调触发的延迟（毫秒）。
   */
  onFirstRemoteVideoDecoded?(
    connection: RtcConnection,
    remoteUid: number,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * 本地或远端视频大小和旋转信息发生改变回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param sourceType 视频源的类型。详见 VideoSourceType 。
   * @param uid 图像尺寸和旋转信息发生变化的用户 ID（本地用户的 uid 为 0。此时视频为本地用户的视频预览）。
   * @param width 视频流的宽度（像素）。
   * @param height 视频流的高度（像素）。
   * @param rotation 旋转信息，取值范围 [0,360)。
   */
  onVideoSizeChanged?(
    connection: RtcConnection,
    sourceType: VideoSourceType,
    uid: number,
    width: number,
    height: number,
    rotation: number
  ): void;

  /**
   * @ignore
   */
  onLocalVideoEvent?(source: VideoSourceType, event: LocalVideoEventType): void;

  /**
   * 本地视频状态发生改变回调。
   *
   * 本地视频的状态发生改变时，SDK 会触发该回调，报告当前的本地视频状态以及状态改变的原因。
   *  帧重复检测仅针对分辨率大于 200 × 200、帧率大于等于 10 fps、码率小于 20 Kbps 的视频帧。
   *  如果视频采集出现异常，正常情况下可以通过该回调的 reason 参数来排查问题。但在部分设备上，采集出现问题时（如卡死） Android 系统不会抛出任何错误回调，因此 SDK 无法报告本地视频状态改变的原因，此时你可以通过下列方式来判断采集是否无帧：该回调报告 state 为 LocalVideoStreamStateCapturing 或 LocalVideoStreamStateEncoding ，且 onLocalVideoStats 回调的 captureFrameRate 为 0。
   *
   * @param source 视频源的类型。详见 VideoSourceType 。
   * @param state 本地视频状态，详见 LocalVideoStreamState 。
   * @param reason 本地视频状态改变原因，详见 LocalVideoStreamReason 。
   */
  onLocalVideoStateChanged?(
    source: VideoSourceType,
    state: LocalVideoStreamState,
    reason: LocalVideoStreamReason
  ): void;

  /**
   * 远端视频状态发生改变回调。
   *
   * 频道内的用户（通信场景）或主播（直播场景）人数超过 32 人时，该回调可能不准确。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 发生视频状态改变的远端用户 ID。
   * @param state 远端视频流状态，详见 RemoteVideoState 。
   * @param reason 远端视频流状态改变的具体原因，详见 RemoteVideoStateReason 。
   * @param elapsed 从本地用户调用 joinChannel 方法到发生本事件经历的时间，单位为毫秒。
   */
  onRemoteVideoStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: RemoteVideoState,
    reason: RemoteVideoStateReason,
    elapsed: number
  ): void;

  /**
   * 渲染器已接收首帧远端视频回调。
   *
   * 该回调只在 SDK 渲染时才会触发；如果用户采用自定义视频渲染则不会触发，客户需要通过 SDK 以外的方法自行实现。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，指定是哪个用户的视频流。
   * @param width 视频流宽（px）。
   * @param height 视频流高（px）。
   * @param elapsed 从本地调用 joinChannel 到发生此事件过去的时间（毫秒）。
   */
  onFirstRemoteVideoFrame?(
    connection: RtcConnection,
    remoteUid: number,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * 远端用户（通信场景）/主播（直播场景）加入当前频道回调。
   *
   * 通信场景下，该回调提示有远端用户加入了频道。如果加入之前已经有其他用户在频道中，新加入的用户也会收到这些已有用户加入频道的回调。
   *  直播场景下，该回调提示有主播加入了频道。如果加入之前，已经有主播在频道中了，新加入的用户也会收到已有主播加入频道的回调。建议连麦主播不超过 32 人（其中视频连麦主播不超过 17 人）。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 新加入频道的远端用户/主播 ID。
   * @param elapsed 从本地用户调用 joinChannel 到该回调触发的延迟（毫秒）。
   */
  onUserJoined?(
    connection: RtcConnection,
    remoteUid: number,
    elapsed: number
  ): void;

  /**
   * 远端用户（通信场景）/主播（直播场景）离开当前频道回调。
   *
   * 用户离开频道一般有以下两个原因：
   *  正常离开：远端用户或主播会发送类似“再见”的消息然后主动离开频道。
   *  超时掉线：在一定时间内（通信场景为 20 秒，直播场景稍有延时），用户没有收到对方的任何数据包，则判定为对方掉线。在网络较差的情况下，有可能会误报。建议使用 RTM SDK 来做可靠的掉线检测。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 离线的远端用户或主播的 ID。
   * @param reason 远端用户（通信场景）或主播（直播场景）离线的原因，详见 UserOfflineReasonType 。
   */
  onUserOffline?(
    connection: RtcConnection,
    remoteUid: number,
    reason: UserOfflineReasonType
  ): void;

  /**
   * 远端用户（通信场景）/主播（直播场景）停止或恢复发送音频流回调。
   *
   * 该回调是由远端用户调用 muteLocalAudioStream 方法关闭或开启音频发送触发的。 频道内的用户（通信场景）或主播（直播场景）人数超过 32 人时，该回调可能不准确。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID。
   * @param muted 该用户是否静音： true : 该用户已将音频静音。 false : 该用户取消了音频静音。
   */
  onUserMuteAudio?(
    connection: RtcConnection,
    remoteUid: number,
    muted: boolean
  ): void;

  /**
   * 远端用户取消或恢复发布视频流回调。
   *
   * 当远端用户调用 muteLocalVideoStream 取消或恢复发布视频流时，SDK 会触发该回调向本地用户报告远端用户的发流状况。 当频道内的用户（通信场景）或主播（直播场景）的人数超过 32 人时，该回调可能不准确。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 远端用户 ID。
   * @param muted 远端用户是否取消发布视频流： true : 取消发布视频流。 false : 发布视频流。
   */
  onUserMuteVideo?(
    connection: RtcConnection,
    remoteUid: number,
    muted: boolean
  ): void;

  /**
   * 远端用户开/关视频模块回调。
   *
   * 关闭视频功能是指该用户只能进行语音通话，不能显示、发送自己的视频，也不能接收、显示别人的视频。
   * 该回调是由远端用户调用 enableVideo 或 disableVideo 方法开启或关闭视频模块触发的。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，提示是哪个用户的视频流。
   * @param enabled true : 该用户已启用视频功能。 false : 该用户已关闭视频功能。
   */
  onUserEnableVideo?(
    connection: RtcConnection,
    remoteUid: number,
    enabled: boolean
  ): void;

  /**
   * @ignore
   */
  onUserStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: number
  ): void;

  /**
   * 远端用户开/关本地视频采集回调。
   *
   * 废弃 弃用： 该回调已废弃，请改用 onRemoteVideoStateChanged 回调的如下枚举： RemoteVideoStateStopped (0) 和 RemoteVideoStateReasonRemoteMuted (5)。 RemoteVideoStateDecoding (2) 和 RemoteVideoStateReasonRemoteUnmuted (6)。 该回调是由远端用户调用 enableLocalVideo 方法开启或关闭视频采集触发的。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，提示是哪个用户的视频流。
   * @param enabled 远端用户是否启用视频采集： true : 该用户已启用视频功能。启用后，其他用户可以接收到该用户的视频流。 false : 该用户已关闭视频功能。关闭后，该用户仍然可以接收其他用户的视频流，但其他用户接收不到该用户的视频流。
   */
  onUserEnableLocalVideo?(
    connection: RtcConnection,
    remoteUid: number,
    enabled: boolean
  ): void;

  /**
   * 通话中远端音频流的统计信息回调。
   *
   * 该回调针对每个发送音频流的远端用户/主播每 2 秒触发一次。如果远端有多个用户/主播发送音频流，该回调每 2 秒会被触发多次。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats 接收到的远端音频统计数据，详见 RemoteAudioStats 。
   */
  onRemoteAudioStats?(connection: RtcConnection, stats: RemoteAudioStats): void;

  /**
   * 通话中本地音频流的统计信息回调。
   *
   * SDK 每 2 秒触发该回调一次。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats 本地音频统计数据。详见 LocalAudioStats 。
   */
  onLocalAudioStats?(connection: RtcConnection, stats: LocalAudioStats): void;

  /**
   * 本地视频流统计信息回调。
   *
   * 该回调描述本地设备发送视频流的统计信息，每 2 秒触发一次。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats 本地视频流统计信息。详见 LocalVideoStats 。
   */
  onLocalVideoStats?(
    connection: RtcConnection,
    sourceType: VideoSourceType,
    stats: LocalVideoStats
  ): void;

  /**
   * 通话中远端视频流的统计信息回调。
   *
   * 该回调描述远端用户在通话中端到端的视频流统计信息， 针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播， 该回调每 2 秒会被触发多次。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param stats 远端视频统计数据。详见 RemoteVideoStats 。
   */
  onRemoteVideoStats?(connection: RtcConnection, stats: RemoteVideoStats): void;

  /**
   * 摄像头就绪回调。
   *
   * 废弃 弃用: 请改用 onLocalVideoStateChanged 中的 LocalVideoStreamStateCapturing(1)。 该回调提示已成功打开摄像头，可以开始捕获视频。
   */
  onCameraReady?(): void;

  /**
   * @ignore
   */
  onCameraFocusAreaChanged?(
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * @ignore
   */
  onCameraExposureAreaChanged?(
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * @ignore
   */
  onFacePositionChanged?(
    imageWidth: number,
    imageHeight: number,
    vecRectangle: Rectangle[],
    vecDistance: number[],
    numFaces: number
  ): void;

  /**
   * 视频功能已停止回调。
   *
   * 废弃 弃用： 请改用 onLocalVideoStateChanged 回调中的 LocalVideoStreamStateStopped (0)。 App 如需在停止视频后对 view 做其他处理（比如显示其他画面），可以在这个回调中进行。
   */
  onVideoStopped?(): void;

  /**
   * 音乐文件的播放状态已改变回调。
   *
   * 该回调在音乐文件播放状态发生改变时触发，并报告当前的播放状态和错误码。
   *
   * @param state 音乐文件播放状态。详见 AudioMixingStateType 。
   * @param reason 错误码。详见 AudioMixingReasonType 。
   */
  onAudioMixingStateChanged?(
    state: AudioMixingStateType,
    reason: AudioMixingReasonType
  ): void;

  /**
   * 虚拟节拍器状态发生改变回调。
   *
   * 废弃 自 v4.6.0 版本废弃。 虚拟节拍器状态发生改变时，SDK 会触发该回调报告当前的虚拟节拍器状态。在虚拟节拍器出现故障时，该回调可以帮助你了解当前虚拟节拍的状态以及出现故障的原因，方便你排查问题。
   *
   * @param state 当前的虚拟节拍器状态，详见 RhythmPlayerStateType 。
   * @param reason 虚拟节拍器发生错误的错误码和错误信息，详见 RhythmPlayerReason 。
   */
  onRhythmPlayerStateChanged?(
    state: RhythmPlayerStateType,
    reason: RhythmPlayerReason
  ): void;

  /**
   * 网络连接中断，且 SDK 无法在 10 秒内连接服务器回调。
   *
   * SDK 在调用 joinChannel 后，无论是否加入成功，只要 10 秒和服务器无法连接就会触发该回调。如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   */
  onConnectionLost?(connection: RtcConnection): void;

  /**
   * 网络连接中断回调。
   *
   * 废弃 弃用: 请改用 onConnectionStateChanged 回调。 SDK 在和服务器建立连接后，失去了网络连接超过 4 秒，会触发该回调。在触发事件后，SDK 会主动重连服务器，所以该事件可以用于 UI 提示。该回调与 onConnectionLost 的区别是： onConnectionInterrupted 回调一定是发生在成功加入频道后，且 SDK 刚失去和服务器连接超过 4 秒时触发。 onConnectionLost 回调是无论是否成功加入频道，只要 10 秒内和服务器无法建立连接都会触发。 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   */
  onConnectionInterrupted?(connection: RtcConnection): void;

  /**
   * 网络连接已被服务器禁止回调。
   *
   * 废弃 弃用: 请改用 onConnectionStateChanged 。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   */
  onConnectionBanned?(connection: RtcConnection): void;

  /**
   * 接收到对方数据流消息的回调。
   *
   * 该回调表示本地用户收到了远端用户调用 sendStreamMessage 方法发送的流消息。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 发送消息的用户 ID。
   * @param streamId 接收到的消息的 Stream ID。
   * @param data 接收到的数据。
   * @param length 数据长度，单位为字节。
   * @param sentTs 数据流发出的时间。
   */
  onStreamMessage?(
    connection: RtcConnection,
    remoteUid: number,
    streamId: number,
    data: Uint8Array,
    length: number,
    sentTs: number
  ): void;

  /**
   * 接收对方数据流消息发生错误的回调。
   *
   * 该回调表示本地用户未收到远端用户调用 sendStreamMessage 方法发送的流消息。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 发送消息的用户 ID。
   * @param streamId 接收到的消息的 Stream ID。
   * @param code 错误码。详见 ErrorCodeType 。
   * @param missed 丢失的消息数量。
   * @param cached 数据流中断时，后面缓存的消息数量。
   */
  onStreamMessageError?(
    connection: RtcConnection,
    remoteUid: number,
    streamId: number,
    code: ErrorCodeType,
    missed: number,
    cached: number
  ): void;

  /**
   * @ignore
   */
  onRdtMessage?(
    connection: RtcConnection,
    userId: number,
    type: RdtStreamType,
    data: string,
    length: number
  ): void;

  /**
   * @ignore
   */
  onRdtStateChanged?(
    connection: RtcConnection,
    userId: number,
    state: RdtState
  ): void;

  /**
   * @ignore
   */
  onMediaControlMessage?(
    connection: RtcConnection,
    userId: number,
    data: string,
    length: number
  ): void;

  /**
   * Token 已过期回调。
   *
   * 在音视频互动过程中，如果 Token 失效，SDK 会触发该回调报告 Token 已过期。
   * 当收到该回调时，你需要重新在服务端生成新的 Token，然后通过下列任意一种方式来更新 Token：
   *  单频道场景：
   *  调用 renewToken 来传入新的 Token。
   *  调用 leaveChannel 离开当前频道，然后在调用 joinChannel 时传入新的 Token 重新加入频道。
   *  多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   */
  onRequestToken?(connection: RtcConnection): void;

  /**
   * Token 即将在 30s 内过期回调。
   *
   * 当收到该回调时，你需要重新在服务端生成新的 Token，然后通过下列任意一种方式来更新 Token：
   *  单频道场景：
   *  调用 renewToken 来传入新的 Token。
   *  调用 leaveChannel 离开当前频道，然后在调用 joinChannel 时传入新的 Token 重新加入频道。
   *  多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param token 即将过期的 Token。
   */
  onTokenPrivilegeWillExpire?(connection: RtcConnection, token: string): void;

  /**
   * @ignore
   */
  onLicenseValidationFailure?(
    connection: RtcConnection,
    reason: LicenseErrorType
  ): void;

  /**
   * 已发布本地音频首帧回调。
   *
   * SDK 会在以下时机触发该回调：
   *  开启本地音频的情况下，调用 joinChannel 成功加入频道后。
   *  调用 muteLocalAudioStream (true) ，再调用 muteLocalAudioStream (false) 后。
   *  调用 disableAudio ，再调用 enableAudio 后。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param elapsed 从调用 joinChannel 方法到触发该回调的时间间隔（毫秒）。
   */
  onFirstLocalAudioFramePublished?(
    connection: RtcConnection,
    elapsed: number
  ): void;

  /**
   * 已解码远端音频首帧的回调。
   *
   * 废弃 弃用： 请改用 onRemoteAudioStateChanged 。 SDK 会在以下时机触发该回调：
   *  远端用户首次上线后发送音频。
   *  远端用户音频离线再上线发送音频。音频离线指本地在 15 秒内没有收到音频包，可能有如下原因：
   *  远端用户离开频道
   *  远端用户掉线
   *  远端用户调用 muteLocalAudioStream 方法停止发送音频流
   *  远端用户调用 disableAudio 方法关闭音频
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 远端用户 ID。
   * @param elapsed 从本地用户调用 joinChannel 直至该回调触发的延迟，单位为毫秒。
   */
  onFirstRemoteAudioDecoded?(
    connection: RtcConnection,
    uid: number,
    elapsed: number
  ): void;

  /**
   * 已接收远端音频首帧回调。
   *
   * 废弃 弃用： 请改用 onRemoteAudioStateChanged 。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param userId 发送音频帧的远端用户的用户 ID。
   * @param elapsed 从本地用户调用 joinChannel 直至该回调触发的延迟，单位为毫秒。
   */
  onFirstRemoteAudioFrame?(
    connection: RtcConnection,
    userId: number,
    elapsed: number
  ): void;

  /**
   * 本地音频状态发生改变回调。
   *
   * 本地音频的状态发生改变时（包括本地麦克风采集状态和音频编码状态），SDK 会触发该回调报告当前的本地音频状态。在本地音频出现故障时，该回调可以帮助你了解当前音频的状态以及出现故障的原因，方便你排查问题。 当状态为 LocalAudioStreamStateFailed (3) 时， 你可以在 error 参数中查看返回的错误信息。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param state 当前的本地音频状态。详见 LocalAudioStreamState 。
   * @param reason 本地音频状态改变原因。详见 LocalAudioStreamReason 。
   */
  onLocalAudioStateChanged?(
    connection: RtcConnection,
    state: LocalAudioStreamState,
    reason: LocalAudioStreamReason
  ): void;

  /**
   * 远端音频流状态发生改变回调。
   *
   * 远端用户（通信场景）或主播（直播场景）的音频状态发生改变时，SDK 会触发该回调向本地用户报告当前的远端音频流状态。 频道内的用户（通信场景）或主播（直播场景）人数超过 32 人时，该回调可能不准确。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 发生音频状态改变的远端用户 ID。
   * @param state 远端音频流状态，详见 RemoteAudioState 。
   * @param reason 远端音频流状态改变的具体原因，详见 RemoteAudioStateReason 。
   * @param elapsed 从本地用户调用 joinChannel 方法到发生本事件经历的时间，单位为毫秒。
   */
  onRemoteAudioStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: RemoteAudioState,
    reason: RemoteAudioStateReason,
    elapsed: number
  ): void;

  /**
   * 监测到远端最活跃用户回调。
   *
   * 成功调用 enableAudioVolumeIndication 后，SDK 会持续监测音量最大的远端用户，并统计该用户被判断为音量最大者的次数。当前时间段内，该次数累积最多的远端用户为最活跃的用户。
   * 当频道内用户数量大于或等于 2 且有远端活跃用户时，SDK 会触发该回调并报告远端最活跃用户的 uid 。
   *  如果远端最活跃用户一直是同一位用户，则 SDK 不会再次触发 onActiveSpeaker 回调。
   *  如果远端最活跃用户有变化，则 SDK 会再次触发该回调并报告新的远端最活跃用户的 uid 。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 远端最活跃用户的 ID。
   */
  onActiveSpeaker?(connection: RtcConnection, uid: number): void;

  /**
   * @ignore
   */
  onContentInspectResult?(result: ContentInspectResult): void;

  /**
   * 视频截图结果回调。
   *
   * 成功调用 takeSnapshot 后，SDK 触发该回调报告截图是否成功和获取截图的详情。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 用户 ID。如果 uid 为 0，表示本地用户。
   * @param filePath 截图的本地保存路径。
   * @param width 图片宽度（px）。
   * @param height 图片高度（px）。
   * @param errCode 截图成功的提示或失败的原因。
   *  0：截图成功。
   *  < 0: 截图失败。
   *  -1：写入文件失败或 JPEG 编码失败。
   *  -2： takeSnapshot 方法调用后 1 秒内没有收到指定用户的视频帧。可能的原因有：本地采集停止、远端停止发布或者视频数据处理堵塞。
   *  -3： takeSnapshot 方法调用过于频繁。
   */
  onSnapshotTaken?(
    connection: RtcConnection,
    uid: number,
    filePath: string,
    width: number,
    height: number,
    errCode: number
  ): void;

  /**
   * 用户角色、观众端延时级别已切换回调。
   *
   * 当你在加入频道前调用 setClientRole 并将用户角色设为 BROADCASTER 时，不会触发此回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param oldRole 切换前的角色： ClientRoleType 。
   * @param newRole 切换后的角色： ClientRoleType 。
   * @param newRoleOptions 切换后的角色属性。详见 ClientRoleOptions 。
   */
  onClientRoleChanged?(
    connection: RtcConnection,
    oldRole: ClientRoleType,
    newRole: ClientRoleType,
    newRoleOptions: ClientRoleOptions
  ): void;

  /**
   * 用户角色切换失败回调。
   *
   * 当用户角色切换失败时，你可以通过此回调得知切换失败的原因和当前的用户角色。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param reason 切换用户角色失败的原因。详见 ClientRoleChangeFailedReason 。
   * @param currentRole 当前用户角色。详见 ClientRoleType 。
   */
  onClientRoleChangeFailed?(
    connection: RtcConnection,
    reason: ClientRoleChangeFailedReason,
    currentRole: ClientRoleType
  ): void;

  /**
   * 音频设备或 App 的音量发生改变回调。
   *
   * 当音频播放、采集设备或 App 的音量发生改变时，会触发该回调。
   *
   * @param deviceType 设备类型定义。详见 MediaDeviceType 。
   * @param volume 音量。范围为 [0,255]。
   * @param muted 音频设备是否为静音状态： true : 音频设备已静音。 false : 音频设备未被静音。
   */
  onAudioDeviceVolumeChanged?(
    deviceType: MediaDeviceType,
    volume: number,
    muted: boolean
  ): void;

  /**
   * 旁路推流状态发生改变回调。
   *
   * 旁路推流状态发生改变时，SDK会触发该回调，并在回调中明确状态发生改变的 URL 地址及当前推流状态。该回调方便推流用户了解当前的推流状态；推流出错时，你可以通过返回的错误码了解出错的原因，方便排查问题。
   *
   * @param url 推流状态发生改变的 URL 地址。
   * @param state 当前的推流状态，详见 RtmpStreamPublishState 。
   * @param reason 推流状态改变的原因，详见 RtmpStreamPublishReason 。
   */
  onRtmpStreamingStateChanged?(
    url: string,
    state: RtmpStreamPublishState,
    reason: RtmpStreamPublishReason
  ): void;

  /**
   * 旁路推流事件回调。
   *
   * @param url 旁路推流 URL。
   * @param eventCode 旁路推流事件码。详见 RtmpStreamingEvent 。
   */
  onRtmpStreamingEvent?(url: string, eventCode: RtmpStreamingEvent): void;

  /**
   * 旁路推流转码设置已被更新回调。
   *
   * startRtmpStreamWithTranscoding 方法中的直播参数 LiveTranscoding 更新时， onTranscodingUpdated 回调会被触发并向主播报告更新信息。 首次调用 startRtmpStreamWithTranscoding 方法设置转码参数 LiveTranscoding 时，不会触发此回调。
   */
  onTranscodingUpdated?(): void;

  /**
   * 音频路由已发生变化回调。
   *
   * 该回调仅适用于 macOS 平台。
   *
   * @param routing 当前的音频路由：
   *  -1：使用默认的音频路由。
   *  0：音频路由为带麦克风的耳机。
   *  1：音频路由为听筒。
   *  2：音频路由为不带麦克风的耳机。
   *  3：音频路由为设备自带的扬声器。
   *  4：音频路由为外接的扬声器。（仅适用于 iOS 和 macOS）
   *  5：音频路由为蓝牙耳机。
   */
  onAudioRoutingChanged?(routing: number): void;

  /**
   * 跨频道媒体流转发状态发生改变回调。
   *
   * 当跨频道媒体流转发状态发生改变时，SDK 会触发该回调，并报告当前的转发状态以及相关的错误信息。
   *
   * @param state 跨频道媒体流转发状态。详见 ChannelMediaRelayState 。
   * @param code 跨频道媒体流转发出错的错误码。详见 ChannelMediaRelayError 。
   */
  onChannelMediaRelayStateChanged?(
    state: ChannelMediaRelayState,
    code: ChannelMediaRelayError
  ): void;

  /**
   * 订阅流已回退为音频流或恢复为音视频流回调。
   *
   * 当你调用了 setRemoteSubscribeFallbackOption 并将 option 设置为 StreamFallbackOptionAudioOnly 后，该回调会在下列情况时被触发：
   *  下行网络环境较差，订阅的音视频流回退为音频流
   *  下行网络环境改善，订阅音频流恢复为音视频流 订阅流因弱网环境而回退为视频小流时，你可以通过 onRemoteVideoStats 回调来监控远端视频大小流的切换。
   *
   * @param uid 远端用户的用户 ID。
   * @param isFallbackOrRecover true : 由于网络环境不理想，订阅流已回退为音频流。 false : 由于网络环境改善，订阅流已恢复为音视频流。
   */
  onRemoteSubscribeFallbackToAudioOnly?(
    uid: number,
    isFallbackOrRecover: boolean
  ): void;

  /**
   * 通话中远端音频流传输的统计信息回调。
   *
   * 弃用：
   * 请改用 onRemoteAudioStats 。
   * 该回调描述远端用户通话中端到端的网络统计信息，通过音频包计算，用客观的数据，如丢包、 网络延迟等，展示当前网络状态。通话中，当用户收到远端用户/主播发送的音频数据包后 ，会每 2 秒触发一次该回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，指定是哪个用户/主播的音频包。
   * @param delay 音频包从发送端到接收端的延时（毫秒）。
   * @param lost 音频包从发送端到接收端的丢包率 (%)。
   * @param rxKBitrate 远端音频包的接收码率（Kbps）。
   */
  onRemoteAudioTransportStats?(
    connection: RtcConnection,
    remoteUid: number,
    delay: number,
    lost: number,
    rxKBitRate: number
  ): void;

  /**
   * 通话中远端视频流传输的统计信息回调。
   *
   * 废弃 弃用： 该回调已被废弃，请改用 onRemoteVideoStats 。 该回调描述远端用户通话中端到端的网络统计信息，通过视频包计算，用客观的数据，如丢包、 网络延迟等，展示当前网络状态。
   * 通话中，当用户收到远端用户/主播发送的视频数据包后，会每 2 秒触发一次该回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param remoteUid 用户 ID，指定是哪个用户/主播的视频包。
   * @param delay 视频包从发送端到接收端的延时（毫秒）。
   * @param lost 视频包从发送端到接收端的丢包率 (%)。
   * @param rxKBitRate 远端视频包的接收码率（Kbps）。
   */
  onRemoteVideoTransportStats?(
    connection: RtcConnection,
    remoteUid: number,
    delay: number,
    lost: number,
    rxKBitRate: number
  ): void;

  /**
   * 网络连接状态已改变回调。
   *
   * 该回调在网络连接状态发生改变的时候触发，并告知用户当前的网络连接状态和引起网络状态改变的原因。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param state 当前网络连接状态。详见 ConnectionStateType 。
   * @param reason 引起当前网络连接状态改变的原因。详见 ConnectionChangedReasonType 。
   */
  onConnectionStateChanged?(
    connection: RtcConnection,
    state: ConnectionStateType,
    reason: ConnectionChangedReasonType
  ): void;

  /**
   * 本地网络类型发生改变回调。
   *
   * 本地网络连接类型发生改变时，SDK 会触发该回调，并在回调中明确当前的网络连接类型。你可以通过该回调获取正在使用的网络类型；当连接中断时，该回调能辨别引起中断的原因是网络切换还是网络条件不好。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param type 本地网络连接类型。详见 NetworkType 。
   */
  onNetworkTypeChanged?(connection: RtcConnection, type: NetworkType): void;

  /**
   * 内置加密出错回调。
   *
   * 调用 enableEncryption 开启加密后， 如果发流端、收流端出现加解密出错，SDK 会触发该回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param errorType 错误类型，详见 EncryptionErrorType 。
   */
  onEncryptionError?(
    connection: RtcConnection,
    errorType: EncryptionErrorType
  ): void;

  /**
   * 获取设备权限出错回调。
   *
   * 无法获取设备权限时，SDK 会触发该回调，报告哪个设备的权限无法获取。
   *
   * @param permissionType 设备权限类型。详见 PermissionType 。
   */
  onPermissionError?(permissionType: PermissionType): void;

  /**
   * @ignore
   */
  onPermissionGranted?(permissionType: PermissionType): void;

  /**
   * 本地用户成功注册 User Account 回调。
   *
   * 本地用户成功调用 registerLocalUserAccount 方法注册用户 User Account，或调用 joinChannelWithUserAccount 加入频道后，SDK 会触发该回调，并告知本地用户的 UID 和 User Account。
   *
   * @param uid 本地用户的 ID。
   * @param userAccount 本地用户的 User Account。
   */
  onLocalUserRegistered?(uid: number, userAccount: string): void;

  /**
   * 远端用户信息已更新回调。
   *
   * 远端用户加入频道后，SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的 Mapping 表，并在本地触发该回调。
   *
   * @param uid 远端用户 ID。
   * @param info 标识用户信息的 UserInfo 对象，包含用户 UID 和 User Account。详见 UserInfo 类。
   */
  onUserInfoUpdated?(uid: number, info: UserInfo): void;

  /**
   * @ignore
   */
  onUserAccountUpdated?(
    connection: RtcConnection,
    remoteUid: number,
    remoteUserAccount: string
  ): void;

  /**
   * 视频帧渲染事件回调。
   *
   * 调用 startMediaRenderingTracing 方法或加入频道后，SDK 会触发该回调，报告视频帧渲染的事件和渲染过程中的指标。开发者可以针对指标进行专项优化，以提高出图效率。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 用户 ID。
   * @param currentEvent 当前视频帧渲染事件。详见 MediaTraceEvent 。
   * @param tracingInfo 视频帧渲染过程中的指标。开发者需要尽可能降低指标值，以提高出图效率。详见 VideoRenderingTracingInfo 。
   */
  onVideoRenderingTracingResult?(
    connection: RtcConnection,
    uid: number,
    currentEvent: MediaTraceEvent,
    tracingInfo: VideoRenderingTracingInfo
  ): void;

  /**
   * 本地合图发生错误回调。
   *
   * 当你调用 startLocalVideoTranscoder 或 updateLocalTranscoderConfiguration 失败时，SDK 会触发该回调，报告合图失败的原因。
   *
   * @param stream 合图失败的视频流。详见 TranscodingVideoStream 。
   * @param error 本地合图出错原因。详见 VideoTranscoderError 。
   */
  onLocalVideoTranscoderError?(
    stream: TranscodingVideoStream,
    error: VideoTranscoderError
  ): void;

  /**
   * @ignore
   */
  onUploadLogResult?(
    connection: RtcConnection,
    requestId: string,
    success: boolean,
    reason: UploadErrorReason
  ): void;

  /**
   * 音频订阅状态发生改变回调。
   *
   * @param channel 频道名。
   * @param uid 远端用户的 ID。
   * @param oldState 之前的订阅状态，详见 StreamSubscribeState 。
   * @param newState 当前的订阅状态，详见 StreamSubscribeState 。
   * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
   */
  onAudioSubscribeStateChanged?(
    channel: string,
    uid: number,
    oldState: StreamSubscribeState,
    newState: StreamSubscribeState,
    elapseSinceLastState: number
  ): void;

  /**
   * 视频订阅状态发生改变回调。
   *
   * @param channel 频道名。
   * @param uid 远端用户的 ID。
   * @param oldState 之前的订阅状态，详见 StreamSubscribeState 。
   * @param newState 当前的订阅状态，详见 StreamSubscribeState 。
   * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
   */
  onVideoSubscribeStateChanged?(
    channel: string,
    uid: number,
    oldState: StreamSubscribeState,
    newState: StreamSubscribeState,
    elapseSinceLastState: number
  ): void;

  /**
   * 音频发布状态改变回调。
   *
   * @param channel 频道名。
   * @param oldState 之前的发布状态，详见 StreamPublishState 。
   * @param newState 当前的发布状态，详见 StreamPublishState 。
   * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
   */
  onAudioPublishStateChanged?(
    channel: string,
    oldState: StreamPublishState,
    newState: StreamPublishState,
    elapseSinceLastState: number
  ): void;

  /**
   * 视频发布状态改变回调。
   *
   * @param source 视频源的类型。详见 VideoSourceType 。
   * @param channel 频道名。
   * @param oldState 之前的发布状态，详见 StreamPublishState 。
   * @param newState 当前的发布状态，详见 StreamPublishState 。
   * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
   */
  onVideoPublishStateChanged?(
    source: VideoSourceType,
    channel: string,
    oldState: StreamPublishState,
    newState: StreamPublishState,
    elapseSinceLastState: number
  ): void;

  /**
   * @ignore
   */
  onTranscodedStreamLayoutInfo?(
    connection: RtcConnection,
    uid: number,
    width: number,
    height: number,
    layoutCount: number,
    layoutlist: VideoLayout[]
  ): void;

  /**
   * @ignore
   */
  onAudioMetadataReceived?(
    connection: RtcConnection,
    uid: number,
    metadata: string,
    length: number
  ): void;

  /**
   * 插件事件回调。
   *
   * 为监听插件事件，你需要注册该回调。
   *
   * @param context 插件上下文信息，详见 ExtensionContext 。
   * @param key 插件属性的 Key。
   * @param value 插件属性 Key 对应的值。
   */
  onExtensionEventWithContext?(
    context: ExtensionContext,
    key: string,
    value: string
  ): void;

  /**
   * 插件已启用成功回调。
   *
   * 成功启用插件后会触发该回调。
   *
   * @param context 插件上下文信息，详见 ExtensionContext 。
   */
  onExtensionStartedWithContext?(context: ExtensionContext): void;

  /**
   * 插件已禁用回调。
   *
   * 成功禁用插件后会触发该回调。
   *
   * @param context 插件上下文信息，详见 ExtensionContext 。
   */
  onExtensionStoppedWithContext?(context: ExtensionContext): void;

  /**
   * 插件出错回调。
   *
   * 启用插件失败或者插件运行出错时，插件会触发该回调并报告错误码和错误原因。
   *
   * @param context 插件上下文信息，详见 ExtensionContext 。
   * @param error 错误码。详见插件服务商提供的插件文档。
   * @param message 错误原因。详见插件服务商提供的插件文档。
   */
  onExtensionErrorWithContext?(
    context: ExtensionContext,
    error: number,
    message: string
  ): void;

  /**
   * @ignore
   */
  onSetRtmFlagResult?(connection: RtcConnection, code: number): void;

  /**
   * 多路径传输统计信息的回调。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param stats 多路径传输统计信息。详见 MultipathStats 。
   */
  onMultipathStats?(connection: RtcConnection, stats: MultipathStats): void;

  /**
   * renewToken 方法调用结果回调。
   *
   * 自从 自 v4.6.2 版本新增。 当你调用 renewToken 方法更新 Token 后，该回调会被触发，用于通知更新结果。
   *
   * @param token 更新的 Token。
   * @param code 错误码，详见 RenewTokenErrorCode 。
   */
  onRenewTokenResult?(
    connection: RtcConnection,
    token: string,
    code: RenewTokenErrorCode
  ): void;
}

/**
 * 视频设备管理方法。
 */
export abstract class IVideoDeviceManager {
  /**
   * 获取系统中所有的视频设备列表。
   *
   * @returns
   * 方法调用成功：返回一个 VideoDeviceInfo 数组，其中包含系统中所有视频设备。
   *  方法调用失败: 返回空列表。
   */
  abstract enumerateVideoDevices(): VideoDeviceInfo[];

  /**
   * 通过设备 ID 指定视频采集设备。
   *
   * 插拔设备不会改变设备 ID。
   *
   * @param deviceIdUTF8 设备 ID。可通过调用 enumerateVideoDevices 方法获取。
   * 最大长度为 MaxDeviceIdLengthType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setDevice(deviceIdUTF8: string): number;

  /**
   * 获取当前使用的视频采集设备。
   *
   * @returns
   * 视频采集设备。
   */
  abstract getDevice(): string;

  /**
   * 获取指定视频采集设备支持的视频格式数量。
   *
   * 视频采集设备可能支持多种视频格式，每一种格式都支持不同的视频帧宽度、视频帧高度、帧率组合。
   * 你可以通过调用该方法，获取指定的视频采集设备可支持多少种视频格式，然后调用 getCapability 获取指定视频格式下的具体视频帧信息。
   *
   * @param deviceIdUTF8 视频采集设备的 ID。
   *
   * @returns
   * > 0: 方法调用成功。返回该设备支持的视频格式数量。例如：如果指定的摄像头支持 10 种不同的视频格式，则返回值为 10。
   *  ≤ 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract numberOfCapabilities(deviceIdUTF8: string): number;

  /**
   * 获取视频采集设备在指定的视频格式下的详细视频帧信息。
   *
   * 在调用 numberOfCapabilities 获取视频采集设备支持的视频格式数量后，你可以调用该方法获取指定索引号支持的具体视频帧信息。
   *
   * @param deviceIdUTF8 视频采集设备的 ID。
   * @param deviceCapabilityNumber 视频格式的索引号。如果 numberOfCapabilities 的返回值为 i，则该参数取值范围为[0,i)。
   *
   * @returns
   * 指定视频格式的具体信息，包括宽度（px），高度（px）和帧率（fps）。详见 VideoFormat 。
   */
  abstract getCapability(
    deviceIdUTF8: string,
    deviceCapabilityNumber: number
  ): VideoFormat;

  /**
   * @ignore
   */
  abstract startDeviceTest(hwnd: any): number;

  /**
   * @ignore
   */
  abstract stopDeviceTest(): number;

  /**
   * @ignore
   */
  abstract release(): void;
}

/**
 * 视频特效节点类型。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum VideoEffectNodeId {
  /**
   * （1）：美颜特效节点。
   */
  Beauty = 1 << 0,
  /**
   * （2）：风格妆特效节点。
   */
  StyleMakeup = 1 << 1,
  /**
   * （4）：滤镜特效节点。
   */
  Filter = 1 << 2,
}

/**
 * 对视频特效节点执行的操作类型。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum VideoEffectAction {
  /**
   * （1）：保存当前视频特效的参数。
   */
  Save = 1,
  /**
   * （2）：将视频特效重置为默认参数。
   */
  Reset = 2,
}

/**
 * 用于管理和配置视频特效，例如美颜、风格妆容和滤镜。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export abstract class IVideoEffectObject {
  /**
   * 添加或更新指定视频特效节点和模板的特效。
   *
   * 自从 自 v4.6.2 版本新增。 优先级规则：
   *  风格妆节点优先于滤镜特效节点。
   *  若要应用滤镜特效，必须先移除风格妆特效节点。
   *
   * @param nodeId 视频特效节点的唯一标识符或标识符组合。详见 VideoEffectNodeId 。
   * @param templateName 特效模板名称。如果设置为 NULL 或空字符串，SDK 会从资源包中加载默认配置。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract addOrUpdateVideoEffect(nodeId: number, templateName: string): number;

  /**
   * 移除指定节点 ID 的视频特效。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param nodeId 要移除的视频特效节点的唯一标识符，详见 VideoEffectNodeId 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract removeVideoEffect(nodeId: number): number;

  /**
   * 对指定的视频特效节点执行操作。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param nodeId 视频特效节点的唯一标识符。
   * @param actionId 要执行的操作，详见 VideoEffectAction 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract performVideoEffectAction(
    nodeId: number,
    actionId: VideoEffectAction
  ): number;

  /**
   * 设置视频特效的浮点参数。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数选项的类别。
   * @param key 参数的键名。
   * @param param 要设置的浮点值。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoEffectFloatParam(
    option: string,
    key: string,
    param: number
  ): number;

  /**
   * setVideoEffectIntParam ：设置视频特效的整数参数。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数所属选项的类别。
   * @param key 参数的键名。
   * @param param 要设置的整数参数值。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoEffectIntParam(
    option: string,
    key: string,
    param: number
  ): number;

  /**
   * 设置视频特效的布尔参数。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数选项的类别。
   * @param key 参数的键名。
   * @param param 要设置的布尔值： true ：启用该选项。 false ：禁用该选项。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoEffectBoolParam(
    option: string,
    key: string,
    param: boolean
  ): number;

  /**
   * 获取视频特效中指定 float 类型参数的值。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数所属选项的类别。
   * @param key 参数的键名。
   *
   * @returns
   * 如果参数存在，返回对应的 float 值。
   *  如果参数不存在或发生错误，返回 0.0f。
   */
  abstract getVideoEffectFloatParam(option: string, key: string): number;

  /**
   * 获取视频特效中的整数类型参数。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数选项的类别。
   * @param key 参数的键名。
   *
   * @returns
   * 如果参数存在，返回对应的整数值。
   *  如果参数不存在或发生错误，返回 0。
   */
  abstract getVideoEffectIntParam(option: string, key: string): number;

  /**
   * 获取视频特效中的布尔参数。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param option 参数所属的选项类别。
   * @param key 参数的键名。
   *
   * @returns
   * true ：参数已启用。 false ：参数未启用或不存在。
   */
  abstract getVideoEffectBoolParam(option: string, key: string): boolean;
}

/**
 * RtcEngineContext 定义。
 */
export class RtcEngineContext {
  /**
   * 声网为 App 开发者签发的 App ID。 使用同一个 App ID 的 App 才能进入同一个频道进行通话或直播。一个 App ID 只能用于创建一个 IRtcEngine 。如需更换 App ID，必须先调用 release 销毁当前 IRtcEngine 再重新创建。
   */
  appId?: string;
  /**
   * 频道使用场景。详见 ChannelProfileType 。
   */
  channelProfile?: ChannelProfileType;
  /**
   * @ignore
   */
  license?: string;
  /**
   * 音频场景。不同的音频场景下，设备的音量类型是不同的。
   * 详见 AudioScenarioType 。
   */
  audioScenario?: AudioScenarioType;
  /**
   * 服务器的访问区域。该功能为高级设置，适用于有访问安全限制的场景。支持的区域详见 AreaCode 。区域码支持位操作。
   */
  areaCode?: number;
  /**
   * 设置 SDK 输出的日志文件。详见 LogConfig 。
   * 默认情况下，SDK 会生成 5 个 SDK 日志文件和 5 个 API 调用日志文件，规则如下：
   */
  logConfig?: LogConfig;
  /**
   * @ignore
   */
  threadPriority?: ThreadPriorityType;
  /**
   * @ignore
   */
  useExternalEglContext?: boolean;
  /**
   * 是否开启域名限制： true ：开启域名限制。该设置适用于 IoT 设备使用物联网卡进行网络访问的场景。SDK 会仅连接到已向运营商报备的域名或 IP 白名单中的服务器。 false ：（默认）关闭域名限制。该设置适用于大部分普通场景。
   */
  domainLimit?: boolean;
  /**
   * 是否在初始化 IRtcEngine 时自动注册声网插件： true ：（默认）初始化 IRtcEngine 时自动注册声网插件。 false ：初始化 IRtcEngine 时不注册声网插件。你需要调用 enableExtension 来注册声网插件。
   */
  autoRegisterAgoraExtensions?: boolean;
}

/**
 * 观测器的 Metadata 类型。当前仅支持视频类型的 Metadata 。
 */
export enum MetadataType {
  /**
   * -1: Metadata 类型未知。
   */
  UnknownMetadata = -1,
  /**
   * 0: Metadata 类型为视频。
   */
  VideoMetadata = 0,
}

/**
 * @ignore
 */
export enum MaxMetadataSizeType {
  /**
   * @ignore
   */
  InvalidMetadataSizeInByte = -1,
  /**
   * @ignore
   */
  DefaultMetadataSizeInByte = 512,
  /**
   * @ignore
   */
  MaxMetadataSizeInByte = 1024,
}

/**
 * 媒体附属信息。
 */
export class Metadata {
  /**
   * 频道名称。
   */
  channelId?: string;
  /**
   * 用户 ID。
   *  对于接收者：发送该 Metadata 的远端用户的 ID。
   *  对于发送者：请忽略。
   */
  uid?: number;
  /**
   * 接收到的或发送的 Metadata 的缓存大小。
   */
  size?: number;
  /**
   * 接收到的 Metadata 的缓存地址。
   */
  buffer?: Uint8Array;
  /**
   * 发送 Metadata 的时间戳，单位为毫秒。
   */
  timeStampMs?: number;
}

/**
 * Metadata 观测器。
 */
export interface IMetadataObserver {
  /**
   * 接收端已收到 metadata。
   *
   * @param metadata 接收到的 metadata，详见 Metadata 。
   */
  onMetadataReceived?(metadata: Metadata): void;
}

/**
 * CDN 推流状态改变的原因。
 *
 * 废弃 自 v4.6.0 版本废弃。
 */
export enum DirectCdnStreamingReason {
  /**
   * 0：推流状态正常。
   */
  DirectCdnStreamingReasonOk = 0,
  /**
   * 1：一般性错误，没有明确原因。你可以尝试重新推流。
   */
  DirectCdnStreamingReasonFailed = 1,
  /**
   * 2：音频推流出错。例如，本地音频采集设备未正常工作、被其他进程占用或没有使用权限。
   */
  DirectCdnStreamingReasonAudioPublication = 2,
  /**
   * 3：视频推流出错。例如，本地视频采集设备未正常工作、被其他进程占用或没有使用权限。
   */
  DirectCdnStreamingReasonVideoPublication = 3,
  /**
   * 4：连接 CDN 失败。
   */
  DirectCdnStreamingReasonNetConnect = 4,
  /**
   * 5：URL 已用于推流。请使用新的 URL。
   */
  DirectCdnStreamingReasonBadName = 5,
}

/**
 * 当前 CDN 推流状态。
 *
 * 废弃 自 v4.6.0 版本废弃。
 */
export enum DirectCdnStreamingState {
  /**
   * 0：初始状态，即推流尚未开始。
   */
  DirectCdnStreamingStateIdle = 0,
  /**
   * 1：正在推流中。当你调用 startDirectCdnStreaming 成功推流时，SDK 会返回该值。
   */
  DirectCdnStreamingStateRunning = 1,
  /**
   * 2：推流已正常结束。当你调用 stopDirectCdnStreaming 主动停止推流时，SDK 会返回该值。
   */
  DirectCdnStreamingStateStopped = 2,
  /**
   * 3：推流失败。你可以通过 onDirectCdnStreamingStateChanged 回调报告的信息排查问题，然后重新推流。
   */
  DirectCdnStreamingStateFailed = 3,
  /**
   * 4：尝试重新连接声网服务器和 CDN。最多尝试重连 10 次，如仍未成功恢复连接，则推流状态变为 DirectCdnStreamingStateFailed。
   */
  DirectCdnStreamingStateRecovering = 4,
}

/**
 * 当前 CDN 推流的统计数据。
 *
 * 废弃 自 v4.6.0 版本废弃。
 */
export class DirectCdnStreamingStats {
  /**
   * 视频的宽度（px）。
   */
  videoWidth?: number;
  /**
   * 视频的高度（px）。
   */
  videoHeight?: number;
  /**
   * 当前视频帧率（fps）。
   */
  fps?: number;
  /**
   * 当前视频码率（bps）。
   */
  videoBitrate?: number;
  /**
   * 当前音频码率（bps）。
   */
  audioBitrate?: number;
}

/**
 * IDirectCdnStreamingEventHandler 接口类用于 SDK 向 App 发送 CDN 推流的事件通知，App 通过继承该接口类的方法获取 SDK 的事件通知。
 */
export interface IDirectCdnStreamingEventHandler {
  /**
   * CDN 推流状态改变回调。
   *
   * 主播端直接向 CDN 推流后，当推流状态改变时，SDK 会触发该回调向你报告新的状态、错误码和信息。你可以据此排查问题。
   *
   * @param state 当前推流状态。详见 DirectCdnStreamingState 。
   * @param reason 推流状态改变的原因。详见 DirectCdnStreamingReason 。
   * @param message 状态改变对应的信息。
   */
  onDirectCdnStreamingStateChanged?(
    state: DirectCdnStreamingState,
    reason: DirectCdnStreamingReason,
    message: string
  ): void;

  /**
   * CDN 推流统计数据回调。
   *
   * 在主播直接向 CDN 推流的过程中，SDK 每隔 1 秒触发一次该回调。
   *
   * @param stats 当前推流的统计数据。详见 DirectCdnStreamingStats 。
   */
  onDirectCdnStreamingStats?(stats: DirectCdnStreamingStats): void;
}

/**
 * 主播端的媒体选项。
 *
 * 废弃 自 v4.6.0 版本废弃。
 */
export class DirectCdnStreamingMediaOptions {
  /**
   * 设置是否发布摄像头采集的视频。 true : 发布摄像头采集的视频。 false :（默认）不发布摄像头采集的视频。
   */
  publishCameraTrack?: boolean;
  /**
   * 设置是否发布麦克风采集的音频。 true : 发布麦克风采集的音频。 false :（默认）不发布麦克风采集的音频。
   */
  publishMicrophoneTrack?: boolean;
  /**
   * 设置是否发布自定义采集的音频。 true : 发布自定义采集的音频。 false :（默认）不发布自定义采集的音频。
   */
  publishCustomAudioTrack?: boolean;
  /**
   * 设置是否发布自定义采集的视频。 true : 发布自定义采集的视频。 false :（默认）不发布自定义采集的视频。
   */
  publishCustomVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerId?: number;
  /**
   * 调用 createCustomVideoTrack 方法返回的视频轨道 ID。默认值为 0。
   */
  customVideoTrackId?: number;
}

/**
 * @ignore
 */
export class ExtensionInfo {
  /**
   * @ignore
   */
  mediaSourceType?: MediaSourceType;
  /**
   * @ignore
   */
  remoteUid?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  localUid?: number;
}

/**
 * RTC SDK 的基础接口类，实现实时音视频的主要功能。
 *
 * IRtcEngine 提供了 App 调用的主要方法。
 * 在调用其他 API 之前，必须先调用 createAgoraRtcEngine 创建 IRtcEngine 对象。
 */
export abstract class IRtcEngine {
  /**
   * 创建并初始化 IRtcEngine 。
   *
   * IRtcEngine 类的所有接口函数，如无特殊说明，都是异步调用，对接口的调用建议在同一个线程进行。
   * SDK 只支持每个 App 创建一个 IRtcEngine 实例。
   *
   * @param context IRtcEngine 实例的配置。详见 RtcEngineContext 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 设置了无效的参数。
   *  -7: SDK 初始化失败。
   *  -22: 资源申请失败。当 App 占用资源过多，或系统资源耗尽时，SDK 分配资源失败，会返回该错误。
   *  -101: App ID 无效。
   */
  abstract initialize(context: RtcEngineContext): number;

  /**
   * 获取 SDK 版本。
   *
   * @returns
   * SDKBuildInfo 对象。
   */
  abstract getVersion(): SDKBuildInfo;

  /**
   * 获取警告或错误描述。
   *
   * @param code SDK 报告的错误码。
   *
   * @returns
   * 具体的错误描述。
   */
  abstract getErrorDescription(code: number): string;

  /**
   * 查询 SDK 支持的视频编解码能力。
   *
   * @returns
   * 如果调用成功，则返回一个包含以下属性的对象： codecInfo ： CodecCapInfo 数组，表示 SDK 的视频编码能力。 size ： CodecCapInfo 数组的大小。
   *  如果调用超时，请修改调用逻辑，不要在主线程中调用该方法。
   */
  abstract queryCodecCapability(): { codecInfo: CodecCapInfo[]; size: number };

  /**
   * 查询设备评分等级。
   *
   * @returns
   * > 0: 方法调用成功，值为当前设备的评分等级，取值范围为[0,100]，数值越大表示设备能力越强。大部分设备的评分在 60 到 100 之间。
   *  < 0: 方法调用失败。
   */
  abstract queryDeviceScore(): number;

  /**
   * 使用 token 、 channelId 、 uid 预加载频道。
   *
   * 调用该方法可以减少观众频繁切换频道时加入频道的时间，从而缩短观众听到主播首帧音频以及看到首帧画面的耗时，提升观众端的视频体验。
   * 如果当前频道已经成功预加载，观众加入、离开频道后如需再次加入该频道，只要预加载时传入的 Token 仍在有效期内，则无需重新预加载。 预加载不生效不会影响后续正常加入频道，也不会增加加入频道的耗时。
   *  调用该方法时，请确保用户角色设为观众、音频应用场景设为非合唱场景（ AudioScenarioChorus ），否则预加载不生效。
   *  请确保预加载频道时传入的频道名、用户 ID、Token 和后续加入频道时传入的值相同，否则预加载不生效。
   *  目前一个 IRtcEngine 实例最多支持预加载 20 个频道，如超出限制，仅最新预加载的 20 个频道生效。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   * Token 过期后，根据预加载频道的数量，你可以通过不同方式来传入用于预加载频道的新 Token：
   *  预加载一个频道时：调用此方法来传入新的 Token。
   *  预加载多个频道时：
   *  如果你使用了通配的 Token，调用 updatePreloadChannelToken 来更新所有预加载频道的 Token。生成通配 Token 时，用户 ID 不得设为 0。详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   *  如果你使用了不同的 Token：调用此方法并传入你的用户 ID、对应的频道名和更新后的 Token。
   * @param channelId 待预加载的频道名。该参数标识用户进行实时音视频互动的频道。App ID 一致的前提下，填入相同频道名的用户会进入同一个频道进行音视频互动。
   * 该参数为长度在 64 字节以内的字符串。以下为支持的字符集范围（共 89 个字符）:
   *  26 个小写英文字母 a~z
   *  26 个大写英文字母 A~Z
   *  10 个数字 0~9
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   * @param uid 用户 ID。该参数用于标识在实时音视频互动频道中的用户。你需要自行设置和管理用户 ID，并确保同一频道内的每个用户 ID 是唯一的。该参数为 32 位无符号整数。建议设置范围：1 到 232-1。如果不指定（即设为 0），SDK 会自动分配一个，并在 onJoinChannelSuccess 回调中返回， 应用层必须记住该返回值并维护，SDK 不对该返回值进行维护。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -102：频道名无效。你需要填入有效的频道名，重新加入频道。
   */
  abstract preloadChannel(
    token: string,
    channelId: string,
    uid: number
  ): number;

  /**
   * 使用 token 、 channelId 、 userAccount 预加载频道。
   *
   * 调用该方法可以减少观众频繁切换频道时加入频道的时间，从而缩短观众听到主播首帧音频以及看到首帧画面的耗时，提升观众端的视频体验。
   * 如果当前频道已经成功预加载，观众加入、离开频道后如需再次加入该频道，只要预加载时传入的 Token 仍在有效期内，则无需重新预加载。 预加载不生效不会影响后续正常加入频道，也不会增加加入频道的耗时。
   *  调用该方法时，请确保用户角色设为观众、音频应用场景设为非合唱场景（ AudioScenarioChorus ），否则预加载不生效。
   *  请确保预加载频道时传入的频道名、用户 User Account、Token 和后续加入频道时传入的值相同，否则预加载不生效。
   *  目前一个 IRtcEngine 实例最多支持预加载 20 个频道，如超出限制，仅最新预加载的 20 个频道生效。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   * Token 过期后，根据预加载频道的数量，你可以通过不同方式来传入用于预加载频道的新 Token：
   *  预加载一个频道时：调用此方法来传入新的 Token。
   *  预加载多个频道时：
   *  如果你使用了通配的 Token，调用 updatePreloadChannelToken 来更新所有预加载频道的 Token。生成通配 Token 时，用户 ID 不得设为 0。详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   *  如果你使用了不同的 Token：调用此方法并传入你的用户 ID、对应的频道名和更新后的 Token。
   * @param channelId 待预加载的频道名。该参数标识用户进行实时音视频互动的频道。App ID 一致的前提下，填入相同频道名的用户会进入同一个频道进行音视频互动。
   * 该参数为长度在 64 字节以内的字符串。以下为支持的字符集范围（共 89 个字符）:
   *  26 个小写英文字母 a~z
   *  26 个大写英文字母 A~Z
   *  10 个数字 0~9
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   * @param userAccount 用户 User Account。该参数用于标识实时音视频互动频道中的用户。你需要自行设置和管理用户的 User Account，并确保同一频道中每个用户的 User Account 是唯一的。 该参数为必填，最大不超过 255 字节，不可填 null。以下为支持的字符集范围（共 89 个字符）：
   *  26 个小写英文字母 a-z
   *  26 个大写英文字母 A-Z
   *  10 个数字 0-9
   *  空格
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，User Account 为空。你需要填入有效的参数，重新加入频道。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -102：频道名无效。你需要填入有效的频道名，重新加入频道。
   */
  abstract preloadChannelWithUserAccount(
    token: string,
    channelId: string,
    userAccount: string
  ): number;

  /**
   * 更新预加载频道的通配 Token。
   *
   * 你需要自行维护通配 Token 的生命周期。当通配 Token 过期后，你需要在你的服务端生成新的通配 Token，然后通过此方法来传入新的 Token。
   *
   * @param token 新的 Token。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，使用了不合法的 Token。你需要填入有效的参数，重新加入频道。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   */
  abstract updatePreloadChannelToken(token: string): number;

  /**
   * 设置媒体选项并加入频道。
   *
   * 该方法可以在加入频道时设置媒体选项，如是否在频道内发布音视频流等。用户加入频道时是否自动订阅频道内所有远端音视频流。默认情况下，用户订阅频道内所有其他用户的音频流和视频流，因此会产生用量并影响计费。如果想取消订阅，可以通过设置 options 参数或相应的 mute 方法实现。
   *  该方法仅支持用户一次加入一个频道。
   *  使用不同 App ID 的 App 不能互通。
   *  加入频道前，请确保用于生成 Token 的 App ID 和调用 initialize 方法初始化引擎时使用的是同一个 App ID，否则使用 Token 加入频道会失败。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   *  （推荐）如果你的项目开启了安全模式，即选择 APP ID + Token 为鉴权机制，则该参数为必填。
   *  如果你的项目仅开启调试模式，即选择 APP ID 为鉴权机制，则无需填入 Token 即可加入频道。成功加入频道 24 小时后会自动退出该频道。
   *  如果你需要同时加入多个频道或在频道间频繁切换，声网推荐你使用通配 Token 以避免每加入一个新的频道都需向服务端申请一个新的 Token，详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   * @param channelId 频道名。该参数标识用户进行实时音视频互动的频道。App ID 一致的前提下，填入相同频道名的用户会进入同一个频道进行音视频互动。该参数为长度在 64 字节以内的字符串。以下为支持的字符集范围（共 89 个字符）:
   *  26 个小写英文字母 a~z
   *  26 个大写英文字母 A~Z
   *  10 个数字 0~9
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   * @param uid 用户 ID。该参数用于标识在实时音视频互动频道中的用户。你需要自行设置和管理用户 ID，并确保同一频道内的每个用户 ID 是唯一的。该参数为 32 位无符号整数。建议设置范围：1 到 232-1。如果不指定（即设为 0），SDK 会自动分配一个，并在 onJoinChannelSuccess 回调中返回， 应用层必须记住该返回值并维护，SDK 不对该返回值进行维护。
   * @param options 频道媒体设置选项。详见 ChannelMediaOptions 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，使用了不合法的 Token， uid 参数未设置为整型，或 ChannelMediaOptions 成员值不合法。你需要填入有效的参数，重新加入频道。
   *  -3： IRtcEngine 对象初始化失败。你需要重新初始化 IRtcEngine 对象。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -8： IRtcEngine 对象内部状态错误。可能的原因是：调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。你需要在该方法前调用 stopEchoTest 。
   *  -17：加入频道被拒绝。可能的原因是用户已经在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。除收到 ConnectionStateDisconnected (1) 状态外，不要再次调用该方法加入频道。
   *  -102：频道名无效。你需要在 channelId 中填入有效的频道名，重新加入频道。
   *  -121：用户 ID 无效。你需要在 uid 中填入有效的用户 ID，重新加入频道。
   */
  abstract joinChannel(
    token: string,
    channelId: string,
    uid: number,
    options: ChannelMediaOptions
  ): number;

  /**
   * 加入频道后更新频道媒体选项。
   *
   * @param options 频道媒体选项，详见 ChannelMediaOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2： ChannelMediaOptions 成员值设置无效。例如，使用了不合法的 Token，设置了无效的用户角色。你需要填入有效的参数。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -8： IRtcEngine 对象内部状态错误。可能的原因是用户不在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。如果收到 ConnectionStateDisconnected (1) 或 ConnectionStateFailed (5)，则表示用户不在频道中。你需要在调用该方法前调用 joinChannel 加入频道。
   */
  abstract updateChannelMediaOptions(options: ChannelMediaOptions): number;

  /**
   * 设置频道选项并离开频道。
   *
   * 调用该方法后，SDK 会终止音视频互动、离开当前频道，并会释放会话相关的所有资源。
   * 成功加入频道后，必须调用本方法结束通话，否则无法开始下一次通话。如果你已调用 joinChannelEx 加入多个频道，调用本方法后会同时离开所有已加入的频道。 该方法是异步操作，调用返回时并没有真正退出频道。
   * 如果你调用了该方法后立即调用 release 方法，SDK 将不会触发 onLeaveChannel 回调。
   *
   * @param options 离开频道的选项，详见 LeaveChannelOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract leaveChannel(options?: LeaveChannelOptions): number;

  /**
   * 更新 Token。
   *
   * 该方法用于更新 Token。Token 会在一定时间后失效，此时 SDK 将无法和服务器建立连接。
   *
   * @param token 新生成的 Token。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，Token 为空。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -110：Token 无效。请确保：
   *  生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致，
   *  生成的 Token 和加入频道使用的 Token 一致。
   */
  abstract renewToken(token: string): number;

  /**
   * 设置频道场景。
   *
   * 你可以调用该方法设置频道的使用场景。SDK 会针对不同的使用场景采用不同的优化策略，如直播场景优先保证画质。SDK 初始化后默认的频道场景为直播场景。 为保证实时音视频质量，相同频道内的用户必须使用同一种频道场景。
   *
   * @param profile 频道使用场景。详见 ChannelProfileType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2: 参数无效。
   *  -7: SDK 尚未初始化。
   */
  abstract setChannelProfile(profile: ChannelProfileType): number;

  /**
   * 设置直播场景下的用户角色和观众端延时级别。
   *
   * SDK 默认设置用户角色为观众，你可以调用该方法设置用户角色为主播。用户角色（ role ）确定用户在 SDK 层的权限，包含是否有发流权限等。 当用户角色设为主播时，观众端延时级别仅支持设置为 AudienceLatencyLevelUltraLowLatency（超低延时）。
   * 在加入频道前调用该方法并将 role 设为 BROADCASTER （主播）时，本地不会触发 onClientRoleChanged 回调。
   *
   * @param role 用户角色。详见 ClientRoleType 。 角色为观众的用户无法在频道内发布音视频流。在直播场景下发流时，请确保你的用户角色已切换为主播。
   * @param options 用户具体设置，包含用户级别。详见 ClientRoleOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 参数无效。
   *  -5: 调用被拒绝。
   *  -7: SDK 尚未初始化。
   */
  abstract setClientRole(
    role: ClientRoleType,
    options?: ClientRoleOptions
  ): number;

  /**
   * 开始音视频通话回路测试。
   *
   * 为测试用户本地发流、收流是否正常，你可以调用该方法进行音视频通话回路测试，即测试系统的音视频设备和用户的上下行网络是否正常。
   * 开始测试后，用户需发出声音或面对摄像头，音频或视频会在约 2 秒后播放出来。如果音频播放正常，则表示系统音频设备和用户上下行网络均正常； 如果视频播放正常，则表示系统视频设备和用户上下行网络均正常。
   *  在频道内调用该方法时，需确保当前没有发布音视频流。
   *  调用该方法后，必须调用 stopEchoTest 结束测试，否则该用户无法进行下一次音视频通话回路测试，也无法加入频道。
   *  直播场景下，该方法仅能由主播调用。
   *
   * @param config 音视频通话回路测试的配置。详见 EchoTestConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startEchoTest(config: EchoTestConfiguration): number;

  /**
   * 停止语音通话回路测试。
   *
   * 调用 startEchoTest 后，必须调用该方法结束测试，否则该用户无法进行下一次音视频通话回路测试，也无法加入频道。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5(ERR_REFUSED): 停止测试失败，可能是测试不在运行中。
   */
  abstract stopEchoTest(): number;

  /**
   * @ignore
   */
  abstract enableMultiCamera(
    enabled: boolean,
    config: CameraCapturerConfiguration
  ): number;

  /**
   * 启用视频模块。
   *
   * 视频模块默认为关闭状态，需要调用该方法启用。如果后续需要关闭视频模块，需调用 disableVideo 方法。
   *  该方法设置的是内部引擎为启用状态，在离开频道后仍然有效。
   *  调用该方法会重置整个引擎，响应时间较慢。你可以根据实际需求用以下方法来独立控制视频模块的某一项功能： enableLocalVideo : 是否启动摄像头采集并创建本地视频流。 muteLocalVideoStream : 是否发布本地视频流。 muteRemoteVideoStream : 是否接收并播放远端视频流。 muteAllRemoteVideoStreams : 是否接收并播放所有远端视频流。
   *  在频道内调用该方法时，会重置 enableLocalVideo 、 muteRemoteVideoStream 和 muteAllRemoteVideoStreams 的设置，需谨慎使用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableVideo(): number;

  /**
   * 关闭视频模块。
   *
   * 该方法用于关闭视频模块。
   *  该方法设置的是内部引擎为禁用状态，在离开频道后仍然有效。
   *  调用该方法会重置整个引擎，响应时间较慢。你可以根据实际需求用以下方法来独立控制视频模块的某一项功能： enableLocalVideo : 是否启动摄像头采集并创建本地视频流。 muteLocalVideoStream : 是否发布本地视频流。 muteRemoteVideoStream : 是否接收并播放远端视频流。 muteAllRemoteVideoStreams : 是否接收并播放所有远端视频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract disableVideo(): number;

  /**
   * 开启视频预览并指定预览的视频源。
   *
   * 该方法用于启动本地视频预览，并指定出现在预览画面中的视频源。
   *  本地预览默认开启镜像功能。
   *  在离开频道后，本地预览依然处于开启状态。你需要调用 stopPreview 关闭本地预览。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startPreview(sourceType?: VideoSourceType): number;

  /**
   * 停止视频预览。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopPreview(sourceType?: VideoSourceType): number;

  /**
   * 开始通话前网络质量探测。
   *
   * 开始通话前网络质量探测，向用户反馈上下行网络的带宽、丢包、网络抖动和往返时延数据。
   *
   * @param config Last mile 网络探测配置，详见 LastmileProbeConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startLastmileProbeTest(config: LastmileProbeConfig): number;

  /**
   * 停止通话前网络质量探测。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopLastmileProbeTest(): number;

  /**
   * 设置视频编码属性。
   *
   * 设置本地视频的编码属性。每一种视频编码属性对应一系列视频相关参数设置，包含分辨率、帧率和码率。
   *  该方法的 config 参数设置是在理想网络状态下能达到的最大值。如果网络状态不好，视频引擎便不能使用该 config 渲染本地视频，它会自动降低到一个合适的视频参数设置。
   *
   * @param config 视频编码参数配置。详见 VideoEncoderConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoEncoderConfiguration(
    config: VideoEncoderConfiguration
  ): number;

  /**
   * 设置美颜效果选项。
   *
   * 开启本地美颜功能，并设置美颜效果选项。
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  该功能对设备性能要求较高，调用该方法时 SDK 会自动对当前设备能力进行检查。
   *
   * @param enabled 是否开启美颜功能： true : 开启美颜功能。 false :（默认）关闭美颜功能。
   * @param options 美颜选项，详细定义见 BeautyOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -4：当前设备不支持该功能，可能的原因有：
   *  当前设备能力不满足美颜的使用要求，建议更换性能更高的设备。
   */
  abstract setBeautyEffectOptions(
    enabled: boolean,
    options: BeautyOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 设置美型效果选项并指定媒体源。
   *
   * 调用该方法可对人脸各部位进行修饰，使用预设的参数一次性实现瘦脸、大眼、瘦鼻等微整形效果，支持微调整体的修饰力度。 美型属于增值服务，计费方式详见[计费策略](https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy)。
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  该功能对设备性能要求较高，调用该方法时 SDK 会自动对当前设备能力进行检查。
   *
   * @param enabled 是否开启美型效果： true : 开启美型功能。 false :（默认）关闭美型功能。
   * @param options 美型风格选项，详见 FaceShapeBeautyOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -4：当前设备不支持该功能，可能的原因有：
   *  当前设备能力不满足美颜的使用要求，建议更换性能更高的设备。
   */
  abstract setFaceShapeBeautyOptions(
    enabled: boolean,
    options: FaceShapeBeautyOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 设置美型部位选项并指定媒体源。
   *
   * 如果在 setFaceShapeBeautyOptions 方法中实现的预设美型效果达不到预期，你可以通过该方法设置美型部位选项，对人脸的各个部位单独微调，实现更加精细的美型效果。 美型属于增值服务，计费方式详见[计费策略](https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy)。
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  该功能对设备性能要求较高，调用该方法时 SDK 会自动对当前设备能力进行检查。
   *
   * @param options 美型部位选项，详见 FaceShapeAreaOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -4：当前设备不支持该功能，可能的原因有：
   *  当前设备能力不满足美颜的使用要求，建议更换性能更高的设备。
   */
  abstract setFaceShapeAreaOptions(
    options: FaceShapeAreaOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 获取美型效果选项。
   *
   * 调用该方法可以获取美型效果当前设置的参数信息。
   *
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 方法调用成功，返回 FaceShapeBeautyOptions 对象。
   *  方法调用失败，返回 null。
   */
  abstract getFaceShapeBeautyOptions(
    type?: MediaSourceType
  ): FaceShapeBeautyOptions;

  /**
   * 获取美型部位选项。
   *
   * 调用该方法可以获取美型部位当前设置的参数信息。
   *
   * @param shapeArea 美型部位。详见 FaceShapeArea 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 方法调用成功，返回 FaceShapeAreaOptions 对象。
   *  方法调用失败，返回 null。
   */
  abstract getFaceShapeAreaOptions(
    shapeArea: FaceShapeArea,
    type?: MediaSourceType
  ): FaceShapeAreaOptions;

  /**
   * 设置滤镜效果选项并指定媒体源。
   *
   * 该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  该功能对设备性能要求较高，调用该方法时 SDK 会自动对当前设备能力进行检查。
   *
   * @param enabled 是否开启滤镜效果： true : 开启滤镜功能。 false :（默认）关闭滤镜功能。
   * @param options 滤镜选项，详见 FilterEffectOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setFilterEffectOptions(
    enabled: boolean,
    options: FilterEffectOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 创建一个 IVideoEffectObject 视频特效对象。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param bundlePath 视频特效资源包的路径。
   * @param type 媒体源类型，详见 MediaSourceType 。
   *
   * @returns
   * 方法调用成功，返回 IVideoEffectObject 对象指针，详见 IVideoEffectObject 。
   *  方法调用失败，返回 NULL 。
   */
  abstract createVideoEffectObject(
    bundlePath: string,
    type?: MediaSourceType
  ): IVideoEffectObject;

  /**
   * 销毁视频特效对象。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param videoEffectObject 要销毁的视频特效对象。详见 IVideoEffectObject 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract destroyVideoEffectObject(
    videoEffectObject: IVideoEffectObject
  ): number;

  /**
   * 设置暗光增强功能。
   *
   * 你可以调用该方法开启暗光增强功能并设置暗光增强的效果。
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  暗光增强对设备性能有一定要求。开启暗光增强后，如果设备出现严重发烫等问题，建议你将暗光增强等级修改为消耗性能较少的等级或关闭暗光增强功能。
   *  如果要实现优先画质 (LowLightEnhanceLevelHighQuality) 的暗光增强，需要先调用 setVideoDenoiserOptions 实现视频降噪，具体对应关系如下：
   *  暗光增强为自动模式 (LowLightEnhanceAuto) 时，视频降噪需设置为优先画质 (VideoDenoiserLevelHighQuality)、自动模式 (VideoDenoiserAuto)。
   *  暗光增强为手动模式 (LowLightEnhanceManual) 时，视频降噪需设置为优先画质 (VideoDenoiserLevelHighQuality)、手动模式 (VideoDenoiserManual)。
   *
   * @param enabled 是否开启暗光增强功能： true : 开启暗光增强功能。 false :（默认）关闭暗光增强功能。
   * @param options 暗光增强选项，用于设置暗光增强的效果。详见 LowlightEnhanceOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLowlightEnhanceOptions(
    enabled: boolean,
    options: LowlightEnhanceOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 设置视频降噪功能。
   *
   * 你可以调用该方法开启视频降噪功能并设置视频降噪的效果。 如果该方法实现的降噪强度无法满足你的需求，声网推荐你调用 setBeautyEffectOptions 方法启用美颜磨皮功能，以获得更好的视频降噪效果。强效降噪效果的 BeautyOptions 推荐设置如下： lighteningContrastLevel ：LighteningContrastNormal lighteningLevel ：0.0 smoothnessLevel ：0.5 rednessLevel ：0.0 sharpnessLevel ：0.1
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *  视频降噪对设备性能有一定要求。开启视频降噪后，如果设备出现严重发烫等问题，建议你将视频降噪等级修改为消耗性能较少的等级或关闭视频降噪功能。
   *
   * @param enabled 是否开启视频降噪功能： true : 开启视频降噪功能。 false :（默认）关闭视频降噪功能。
   * @param options 视频降噪选项，用于设置视频降噪的效果。详见 VideoDenoiserOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoDenoiserOptions(
    enabled: boolean,
    options: VideoDenoiserOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 设置色彩增强功能。
   *
   * 摄像头采集到的视频画面可能存在色彩失真的现象。色彩增强功能可以通过智能调节饱和度和对比度等视频特性，提升视频色彩丰富度和色彩还原度，最终使视频画面更生动。
   * 你可以调用该方法开启色彩增强功能并设置色彩增强的效果。
   *  请在 enableVideo 后调用该方法。
   *  色彩增强对设备性能有一定要求。开启色彩增强后，如果设备出现严重发烫等问题，建议你将色彩增强等级修改为消耗性能较少的等级或关闭色彩增强功能。
   *  该方法依赖于视频增强动态库 libagora_clear_vision_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param enabled 是否开启色彩增强功能： true ：开启色彩增强功能。 false ：（默认）关闭色彩增强功能。
   * @param options 色彩增强选项，用于设置色彩增强的效果。详见 ColorEnhanceOptions 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setColorEnhanceOptions(
    enabled: boolean,
    options: ColorEnhanceOptions,
    type?: MediaSourceType
  ): number;

  /**
   * 开启/关闭虚拟背景。
   *
   * 虚拟背景功能支持将本地用户原来的背景替换为静态图片、动态视频、将背景虚化，或者将人像与背景分割以实现人像画中画。成功开启虚拟背景功能后，频道内所有用户都能看到自定义的背景。
   * 请在 enableVideo 或 startPreview 之后调用该方法。
   *  使用视频作为虚拟背景会导致内存占用持续增加，可能会导致 App 出现闪退等问题，因此在使用时请尽量降低视频的分辨率和帧率。
   *  该功能对设备性能要求较高，调用该方法时 SDK 会自动对当前设备能力进行检查。建议你在搭载如下芯片的设备上使用：
   *  CPU 为 i5 及更好的设备
   *  建议你在满足如下条件的场景中使用该功能：
   *  使用高清摄像设备、摄像环境光照均匀。
   *  摄像画面中，物件较少，用户的人像为半身人像且基本无遮挡，背景色较单一且与用户着装颜色不同。
   *  该方法依赖于虚拟背景动态库 libagora_segmentation_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param enabled 是否开启虚拟背景： true : 开启虚拟背景。 false : 关闭虚拟背景。
   * @param backgroundSource 自定义的背景。详见 VirtualBackgroundSource 。为将自定义背景图的分辨率与 SDK 的视频采集分辨率适配，SDK 会在保证自定义背景图不变形的前提下，对自定义背景图进行缩放和裁剪。
   * @param segproperty 背景图像的处理属性。详见 SegmentationProperty 。
   * @param type 效果应用的媒体源类型。详见 MediaSourceType 。 在该方法中，该参数仅支持以下两种设置：
   *  使用摄像头采集本地视频时，请保持默认值 PrimaryCameraSource 。
   *  如果要使用自定义采集的视频，将该参数设置为 CustomVideoSource 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -4：设备能力不满足虚拟背景的使用要求，建议更换性能更高的设备。
   */
  abstract enableVirtualBackground(
    enabled: boolean,
    backgroundSource: VirtualBackgroundSource,
    segproperty: SegmentationProperty,
    type?: MediaSourceType
  ): number;

  /**
   * 初始化远端用户视图。
   *
   * 该方法绑定远端用户和显示视图，并设置远端用户视图在本地显示时的渲染模式和镜像模式，只影响本地用户看到的视频画面。
   * 调用该方法时需要指定远端视频的用户 ID，一般可以在进频道前提前设置好。如果无法在加入频道前得到远端用户的 ID，可以在收到 onUserJoined 回调时调用该方法。
   * 如需解除某个远端用户的绑定视图，可以调用该方法并将 view 设置为空。
   * 离开频道后，SDK 会清除远端用户视图的绑定关系。
   *  当使用录制服务时，由于它不会发送视频流，App 无需为它绑定视图。如果 App 无法识别录制服务，可以在收到 onFirstRemoteVideoDecoded 回调时再绑定远端用户视图。
   *  如果想要停止渲染视图，需要将 view 设为 null 后再次调用该方法，以停止渲染并清理渲染缓存。
   *
   * @param canvas 远端视频显示属性。详见 VideoCanvas 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setupRemoteVideo(canvas: VideoCanvas): number;

  /**
   * 初始化本地视图。
   *
   * 该方法初始化本地视图并设置本地用户视频显示属性，只影响本地用户看到的视频画面，不影响本地视频的发布。调用该方法绑定本地视频流的显示视窗 (view)，并设置本地用户视图的渲染模式和镜像模式。
   * 退出频道后绑定仍然有效。如果需要停止渲染或解除绑定，可以调用该方法将参数 view 设为 null，以停止渲染并清理渲染缓存。
   *  在 Flutter 中你不需要主动调用该方法，请使用 AgoraVideoView 渲染本地和远端视图。
   *
   * @param canvas 本地视频显示属性。详见 VideoCanvas 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setupLocalVideo(canvas: VideoCanvas): number;

  /**
   * 设置视频业务场景。
   *
   * 成功调用该方法设置视频业务场景后，SDK 会基于指定场景启用最佳实践策略，自动调整关键性能指标，进而优化视频体验质量。 该方法需要在加入频道前调用。
   *
   * @param scenarioType 视频业务场景。详见 VideoApplicationScenarioType 。 ApplicationScenarioMeeting (1) 适用于会议场景。如果用户已调用 setDualStreamMode 将小流设置为始终不发送 (DisableSimulcastStream)，会议场景对小流的动态开关不生效。
   * 该枚举值仅适用于主播 vs 主播场景。SDK 会针对该场景启用以下策略：
   *  针对会议场景对小流码率要求较高的情况，自动启用多项抗弱网技术，提升小流的抗弱网能力，确保多路流订阅时接收端的流畅性。
   *  实时监测接收端大流的订阅人数，根据订阅人数动态调节大流配置：
   *  无人订阅大流时，会自动降低大流的码率和帧率，节省上行带宽和消耗。
   *  有人订阅大流时，大流会重置为用户最近一次调用 setVideoEncoderConfiguration 时的 VideoEncoderConfiguration 配置。如果用户此前没有进行设置，则使用如下值：
   *  视频分辨率：1280 × 720
   *  视频帧率：15 fps
   *  码率：1600 Kbps
   *  实时监测接收端小流的订阅人数，根据订阅人数动态开启和关闭小流：
   *  无人订阅小流时，自动关闭小流，节省上行带宽和消耗。
   *  有人订阅小流时，开启小流并重置为用户最近一次调用 setDualStreamMode 时的 SimulcastStreamConfig 配置。如果用户此前没有进行设置，则使用如下值：
   *  视频分辨率：480 × 272
   *  视频帧率：15 fps
   *  码率：500 Kbps ApplicationScenario1v1 (2) 适用于[视频 1v1 通话](https://doc.shengwang.cn/doc/one-to-one-live/android/rtm/overview/product-overview)场景。针对该场景低延迟、高画质的体验要求，SDK 进行了策略调优，提升了画质、首帧出图、中低端机延迟及弱网流畅度等性能表现。 ApplicationScenarioLiveshow (3) 适用于[秀场直播](https://doc.shengwang.cn/doc/showroom/android/overview/product-overview)场景。针对该场景对首帧出图时间和画质清晰度的高要求，SDK 进行了策略调优，例如，默认开启音视频帧加速渲染来提升首帧出图体验，无需再额外调用 enableInstantMediaRendering ，同时会默认开启 B 帧来确保较高的图像质量、提高传输效率。此外，也增强了在弱网环境和低端设备上的画质和流畅度表现。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1：一般性的错误（未明确归类）。
   *  -4：不支持设置视频业务场景。可能的原因是当前使用的是音频 SDK。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   */
  abstract setVideoScenario(scenarioType: VideoApplicationScenarioType): number;

  /**
   * @ignore
   */
  abstract setVideoQoEPreference(qoePreference: VideoQoePreferenceType): number;

  /**
   * 启用音频模块。
   *
   * 音频模块默认开启。如果你调用 disableAudio 关闭了音频模块，可调用该方法重新开启。
   *  调用该方法会重置整个引擎，响应时间较慢。你可以根据实际需求用以下方法来独立控制音频模块的某一项功能： enableLocalAudio : 是否启动麦克风采集并创建本地音频流。 muteLocalAudioStream : 是否发布本地音频流。 muteRemoteAudioStream : 是否接收并播放远端音频流。 muteAllRemoteAudioStreams : 是否接收并播放所有远端音频流。
   *  在频道内调用该方法时，会重置 enableLocalAudio 、 muteRemoteAudioStream 和 muteAllRemoteAudioStreams 的设置，需谨慎使用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableAudio(): number;

  /**
   * 关闭音频模块。
   *
   * 音频模块默认开启，你可以调用该方法关闭音频模块。 该方法重置整个引擎，响应时间较慢，因此声网建议使用如下方法来控制音频模块： enableLocalAudio ：是否启动麦克风采集并创建本地音频流。 enableLoopbackRecording ：是否开启声卡采集。 muteLocalAudioStream ：是否发布本地音频流。 muteRemoteAudioStream ：是否接收并播放远端音频流。 muteAllRemoteAudioStreams ：是否接收并播放所有远端音频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract disableAudio(): number;

  /**
   * 设置音频编码属性和音频场景。
   *
   * @param profile 音频编码属性，包含采样率、码率、编码模式和声道数。详见 AudioProfileType 。
   * @param scenario 音频场景。不同的音频场景下，设备的音量类型是不同的。
   * 详见 AudioScenarioType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioProfile(
    profile: AudioProfileType,
    scenario?: AudioScenarioType
  ): number;

  /**
   * 设置音频场景。
   *
   * @param scenario 音频场景。不同的音频场景下，设备的音量类型是不同的。
   * 详见 AudioScenarioType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioScenario(scenario: AudioScenarioType): number;

  /**
   * 开启或关闭本地音频采集。
   *
   * 当用户加入频道时，音频功能默认是开启的。该方法可以关闭或重新开启本地音频功能，即停止或重新开始本地音频采集。
   * 该方法与 muteLocalAudioStream 的区别在于： enableLocalAudio : 开启或关闭本地音频采集及处理。使用 enableLocalAudio 关闭或开启本地采集后，本地听远端播放会有短暂中断。 muteLocalAudioStream : 停止或继续发送本地音频流，不影响音频的采集状态。
   *
   * @param enabled true : 重新开启本地音频功能，即开启本地音频采集（默认）； false : 关闭本地音频功能，即停止本地音频采集。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableLocalAudio(enabled: boolean): number;

  /**
   * 取消或恢复发布本地音频流。
   *
   * 该方法用于控制是否发布本地采集的音频流。如果不发布本地采集的音频流，也不会禁用音频采集设备，所以不影响音频的采集状态。
   *
   * @param mute 是否取消发布本地音频流。 true : 取消发布。 false :（默认）发布。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteLocalAudioStream(mute: boolean): number;

  /**
   * 取消或恢复订阅所有远端用户的音频流。
   *
   * 成功调用该方法后，本地用户会取消或恢复订阅所有远端用户的音频流，包括在调用该方法后加入频道的用户的音频流。 SDK 默认在加入频道时订阅所有远端用户的音频流，如果要修改此行为，可以在调用 joinChannel 加入频道时设置 autoSubscribeAudio 为 false ，即可在加入频道时取消订阅所有用户的音频流。
   * 如果在调用该方法之后又调用了 enableAudio 或 disableAudio ，则后调用的方法会生效。
   *
   * @param mute 是否取消订阅所有远端用户的音频流： true : 取消订阅所有远端用户的音频流。 false :（默认）订阅所有远端用户的音频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteAllRemoteAudioStreams(mute: boolean): number;

  /**
   * 取消或恢复订阅指定远端用户的音频流。
   *
   * @param uid 指定用户的用户 ID。
   * @param mute 是否取消订阅指定远端用户的音频流。 true : 取消订阅指定用户的音频流。 false :（默认）订阅指定用户的音频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteRemoteAudioStream(uid: number, mute: boolean): number;

  /**
   * 取消或恢复发布本地视频流。
   *
   * 该方法用于控制是否发布本地采集的视频流。如果不发布本地采集的视频流，也不会禁用视频采集设备，所以不影响视频的采集状态。
   * 相比于调用 enableLocalVideo (false) 关闭本地视频流采集、从而取消发布本地视频流的方法，该方法响应速度更快。
   *
   * @param mute 是否取消发送本地视频流。 true : 取消发送本地视频流。 false : （默认）发送本地视频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteLocalVideoStream(mute: boolean): number;

  /**
   * 开关本地视频采集。
   *
   * 该方法禁用或重新启用本地视频采集，不影响接收远端视频。
   * 调用 enableVideo 后，本地视频采集即默认开启。
   * 如果你在频道内调用 enableLocalVideo (false) 关闭本地视频采集，也会同时停止在频道内发布视频流。如果想要重新开启，则可调用 enableLocalVideo (true)，然后调用 updateChannelMediaOptions 并设置 options 参数，将本地采集的视频流发布到频道中。
   * 成功禁用或启用本地视频采集后，远端会触发 onRemoteVideoStateChanged 回调。
   *  该方法在加入频道前后均可调用，但加入频道前调用的设置，在加入频道后才会生效。
   *  该方法设置内部引擎为启用状态，在离开频道后仍然有效。
   *
   * @param enabled 是否开启本地视频采集。 true :（默认）开启本地视频采集。 false : 关闭本地视频采集。关闭后，远端用户会接收不到本地用户的视频流；但本地用户依然可以接收远端用户的视频流。设置为 false 时，该方法不需要本地有摄像头。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableLocalVideo(enabled: boolean): number;

  /**
   * 取消或恢复订阅所有远端用户的视频流。
   *
   * 成功调用该方法后，本地用户会取消或恢复订阅所有远端用户的视频流，包括在调用该方法后加入频道的用户的视频流。 SDK 默认在加入频道时订阅所有远端用户的视频流，如果要修改此行为，可以在调用 joinChannel 加入频道时设置 autoSubscribeVideo 为 false ，即可在加入频道时取消订阅所有用户的视频流。
   * 如果在调用该方法之后又调用了 enableVideo 或 disableVideo ，则后调用的方法会生效。
   *
   * @param mute 是否取消订阅所有远端用户的视频流。 true : 取消订阅所有用户的视频流。 false :（默认）订阅所有用户的视频流。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteAllRemoteVideoStreams(mute: boolean): number;

  /**
   * 设置默认订阅的视频流类型。
   *
   * 取决于发送端的默认行为和调用 setDualStreamMode 的具体设置，接收端调用该方法分为以下几种情况：
   *  SDK 默认在发送端开启小流自适应模式 (AutoSimulcastStream)，即：发送端仅发送大流，仅主播身份的接收端可以调用该方法发起小流申请，发送端收到申请后开始自动发送小流，此时频道内所有用户均可调用该方法切换到小流订阅模式。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 DisableSimulcastStream （始终不发送小流），则调用该方法不生效。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 EnableSimulcastStream （始终发送小流），则主播或观众身份的接收端均可调用该方法切换到小流订阅模式。 在接收视频小流时，SDK 会根据视频窗口的大小动态调整对应视频流的大小，以节约带宽和计算资源。视频小流默认的宽高比和视频大流的宽高比一致。根据当前大流的宽高比，系统会自动分配小流的分辨率、帧率及码率。 如果你既调用了该方法，也调用了 setRemoteVideoStreamType ，则 SDK 以 setRemoteVideoStreamType 中的设置为准。
   *
   * @param streamType 默认订阅的视频流类型: VideoStreamType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteDefaultVideoStreamType(streamType: VideoStreamType): number;

  /**
   * 取消或恢复订阅指定远端用户的视频流。
   *
   * @param uid 指定用户的用户 ID。
   * @param mute 是否取消订阅指定远端用户的视频流。 true : 取消订阅指定用户的视频流。 false : （默认）订阅指定用户的视频流。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteRemoteVideoStream(uid: number, mute: boolean): number;

  /**
   * 设置订阅的视频流类型。
   *
   * 取决于发送端的默认行为和调用 setDualStreamMode 的具体设置，接收端调用该方法分为以下几种情况：
   *  SDK 默认在发送端开启小流自适应模式 (AutoSimulcastStream)，即：发送端仅发送大流，仅主播身份的接收端可以调用该方法发起小流申请，发送端收到申请后开始自动发送小流，此时频道内所有用户均可调用该方法切换到小流订阅模式。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 DisableSimulcastStream （始终不发送小流），则调用该方法不生效。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 EnableSimulcastStream （始终发送小流），则主播或观众身份的接收端均可调用该方法切换到小流订阅模式。 在接收视频小流时，SDK 会根据视频窗口的大小动态调整对应视频流的大小，以节约带宽和计算资源。视频小流默认的宽高比和视频大流的宽高比一致。根据当前大流的宽高比，系统会自动分配小流的分辨率、帧率及码率。
   *  该方法在加入频道前后都能调用。
   *  如果既调用了该方法，也调用了 setRemoteDefaultVideoStreamType ，则 SDK 以该方法中的设置为准。
   *
   * @param uid 用户 ID。
   * @param streamType 视频流类型: VideoStreamType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVideoStreamType(
    uid: number,
    streamType: VideoStreamType
  ): number;

  /**
   * 设置远端视频流的订阅选项。
   *
   * 当远端发送双流时，可调用此方法来设置远端视频流的订阅选项。SDK 对远端视频流的默认订阅行为取决于注册的视频观测器类型：
   *  如果注册的是 IVideoFrameObserver 观测器，则默认订阅原始数据和编码后的数据。
   *  如果注册的是 IVideoEncodedFrameObserver 观测器，则默认仅订阅编码后的数据。
   *  如果注册了两种观测器，则默认跟随后注册的视频观测器。举例来说，如果后注册的是 IVideoFrameObserver 观测器，则默认订阅原始数据和编码后的数据。 如果你想修改以上默认行为，或者想针对不同 uid 设置不同的订阅选项，可调用该方法设置。
   *
   * @param uid 远端用户 ID。
   * @param options 视频流的订阅设置，详见 VideoSubscriptionOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVideoSubscriptionOptions(
    uid: number,
    options: VideoSubscriptionOptions
  ): number;

  /**
   * 设置音频订阅黑名单。
   *
   * 你可以调用该方法指定不订阅的音频流。
   *  该方法在加入频道前后均可调用。
   *  音频订阅黑名单不受 muteRemoteAudioStream 、 muteAllRemoteAudioStreams 以及 ChannelMediaOptions 中的 autoSubscribeAudio 影响。
   *  设置订阅黑名单后，如果离开当前频道后再重新加入频道，黑名单依然生效。
   *  如果某个用户同时在音频订阅黑名单和白名单中，仅订阅黑名单生效。
   *
   * @param uidList 订阅黑名单的用户 ID 列表。
   * 如果你想指定不订阅某一发流用户的音频流，将该用户的 ID 加入此列表中。如果你想要将某一用户从订阅黑名单中移除，需要重新调用 setSubscribeAudioBlocklist 方法更新订阅黑名单的用户 ID 列表，使其不包含你想移除的用户的 uid 。
   * @param uidNumber 黑名单用户 ID 列表中的用户数量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeAudioBlocklist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * 设置音频订阅白名单。
   *
   * 你可以调用该方法指定想要订阅的音频流。
   *  该方法在加入频道前后均可调用。
   *  音频订阅白名单不受 muteRemoteAudioStream 、 muteAllRemoteAudioStreams 以及 ChannelMediaOptions 中的 autoSubscribeAudio 的影响。
   *  设置订阅白名单后，如果离开当前频道后再重新加入频道，白名单依然生效。
   *  如果某个用户同时在音频订阅黑名单和白名单中，仅订阅黑名单生效。
   *
   * @param uidList 音频订阅白名单的用户 ID 列表。
   * 如果你想指定订阅某一发流用户的音频流，将该用户的 ID 加入此列表中。如果你想要将某一用户从订阅白名单中移除，需要重新调用 setSubscribeAudioAllowlist 方法更新音频订阅白名单的用户 ID 列表，使其不包含你想移除的用户的 uid 。
   * @param uidNumber 白名单用户 ID 列表中的用户数量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeAudioAllowlist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * 设置视频订阅黑名单。
   *
   * 你可以调用该方法指定不订阅的视频流。
   *  该方法在加入频道前后均可调用。
   *  视频订阅黑名单不受 muteRemoteVideoStream 、 muteAllRemoteVideoStreams 以及 ChannelMediaOptions 中的 autoSubscribeVideo 的影响。
   *  设置订阅黑名单后，如果离开当前频道后再重新加入频道，黑名单依然生效。
   *  如果某个用户同时在音频订阅黑名单和白名单中，仅订阅黑名单生效。
   *
   * @param uidList 视频订阅黑名单的用户 ID 列表。
   * 如果你想指定不订阅某一发流用户的视频流，将该用户的 ID 加入此列表中。如果你想要将某一用户从订阅黑名单中移除，需要重新调用 setSubscribeVideoBlocklist 方法更新订阅黑名单的用户 ID 列表，使其不包含你想移除的用户的 uid 。
   * @param uidNumber 黑名单用户 ID 列表中的用户数量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeVideoBlocklist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * 设置视频订阅白名单。
   *
   * 你可以调用该方法指定想要订阅的视频流。
   *  该方法在加入频道前后均可调用。
   *  视频订阅白名单不受 muteRemoteVideoStream 、 muteAllRemoteVideoStreams 以及 ChannelMediaOptions 中的 autoSubscribeVideo 的影响。
   *  设置订阅白名单后，如果离开当前频道后再重新加入频道，白名单依然生效。
   *  如果某个用户同时在音频订阅黑名单和白名单中，仅订阅黑名单生效。
   *
   * @param uidList 视频订阅白名单的用户 ID 列表。
   * 如果你想指定仅订阅某一发流用户的视频流，将该用户的 ID 加入此列表中。如果你想要将某一用户从订阅白名单中移除，需要重新调用 setSubscribeVideoAllowlist 方法更新音频订阅白名单的用户 ID 列表，使其不包含你想移除的用户的 uid 。
   * @param uidNumber 白名单用户 ID 列表中的用户数量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeVideoAllowlist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * 启用用户音量提示。
   *
   * 该方法允许 SDK 定期向 App 报告本地发流用户和瞬时音量最高的远端用户（最多 3 位）的音量相关信息。
   *
   * @param interval 指定音量提示的时间间隔：
   *  ≤ 0: 禁用音量提示功能。
   *  > 0: 返回音量提示的间隔，单位为毫秒。建议设置到大于 100 毫秒，不得小于 10 毫秒，否则会收不到 onAudioVolumeIndication 回调。
   * @param smooth 平滑系数，指定音量提示的灵敏度。取值范围为 [0,10]，建议值为 3。数字越大，波动越灵敏；数字越小，波动越平滑。
   * @param reportVad true ：开启本地人声检测功能。开启后， onAudioVolumeIndication 回调的 vad 参数会报告是否在本地检测到人声。 false ：（默认）关闭本地人声检测功能。除引擎自动进行本地人声检测的场景外， onAudioVolumeIndication 回调的 vad 参数不会报告是否在本地检测到人声。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableAudioVolumeIndication(
    interval: number,
    smooth: number,
    reportVad: boolean
  ): number;

  /**
   * 开始客户端录音并进行录音配置。
   *
   * SDK 支持通话过程中在客户端进行录音。调用该方法后，你可以录制频道内用户的音频，并得到一个录音文件。录音文件仅支持下列格式：
   *  WAV: 音质保真度较高，文件较大。例如，采样率为 32000 Hz，录音时长为 10 分钟的文件大小约为 73 M。
   *  AAC: 音质保真度较低，文件较小。例如，采样率为 32000 Hz，录音音质为 AudioRecordingQualityMedium，录音时长为 10 分钟的文件大小约为 2 M。 用户离开频道后，录音会自动停止。
   *
   * @param config 录音配置。详见 AudioRecordingConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startAudioRecording(config: AudioRecordingConfiguration): number;

  /**
   * 注册音频编码数据观测器。
   *
   * 请在加入频道后调用该方法。
   *  由于该方法和 startAudioRecording 都会设置音频内容和音质，不建议该方法和 startAudioRecording 一起使用。否则，只有后调用的方法会生效。
   *
   * @param config 编码后音频的观测器设置。详见 AudioEncodedFrameObserverConfig 。
   *
   * @returns
   * 一个 IAudioEncodedFrameObserver 对象。
   */
  abstract registerAudioEncodedFrameObserver(
    config: AudioEncodedFrameObserverConfig,
    observer: IAudioEncodedFrameObserver
  ): number;

  /**
   * 停止客户端录音。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopAudioRecording(): number;

  /**
   * @ignore
   */
  abstract createMediaPlayer(): IMediaPlayer;

  /**
   * 销毁媒体播放器。
   *
   * @param mediaPlayer IMediaPlayer 对象。
   *
   * @returns
   * ≥ 0: 方法调用成功，返回媒体播放器 ID
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract destroyMediaPlayer(mediaPlayer: IMediaPlayer): number;

  /**
   * 创建音视频录制对象。
   *
   * 在开始音视频流录制前，你需要调用该方法创建一个音视频录制对象。SDK 支持录制本地或远端用户的多个音视频流，你可以多次调用该方法创建录制对象，并通过 info 参数指定需要录制的频道名称和发流的用户 ID。
   * 成功创建后，你需要调用 setMediaRecorderObserver 注册录制对象的观测器来监听录制的相关回调，然后再调用 startRecording 开始录制。
   *
   * @param info 需要录制的音视频流相关信息，详见 RecorderStreamInfo 。
   *
   * @returns
   * 方法调用成功：返回一个 IMediaRecorder 对象。
   *  方法调用失败：返回空指针。
   */
  abstract createMediaRecorder(info: RecorderStreamInfo): IMediaRecorder;

  /**
   * 销毁音视频录制对象。
   *
   * 当你不需要再录制音视频流时，可以调用该方法销毁对应的音视频录制对象。如果你正在录制，请先调用 stopRecording 停止录制，再调用该方法来销毁音视频录制对象。
   *
   * @param mediaRecorder 待销毁的 IMediaRecorder 对象。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract destroyMediaRecorder(mediaRecorder: IMediaRecorder): number;

  /**
   * 开始播放音乐文件。
   *
   * 该方法支持播放的音频文件格式见 [RTC SDK 支持播放哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。如果本地音乐文件不存在、文件格式不支持或无法访问在线音乐文件 URL，则 SDK 会报告 AudioMixingReasonCanNotOpen。
   *  使用该方法播放时长较短的音效文件可能会导致播放失败。如需播放音效文件，建议使用 playEffect 。
   *  如需多次调用该方法，请确保调用间隔大于 500 ms。
   *
   * @param filePath 文件路径：
   *  Windows: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 C:\music\audio.mp4 。
   *  macOS: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 /var/mobile/Containers/Data/audio.mp4 。
   * @param loopback 是否只在本地播放音乐文件： true ：只在本地播放音乐文件，只有本地用户能听到音乐。 false ：将本地播放的音乐文件发布至远端，本地用户和远端用户都能听到音乐。
   * @param cycle 音乐文件的播放次数。
   *  > 0: 播放次数。例如，1 表示播放 1 次。
   *  -1: 无限循环播放。
   * @param startPos 音乐文件的播放位置，单位为毫秒。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败：
   *  -1：一般性的错误（未明确归类）。
   *  -2：设置了无效的参数。
   *  -3：SDK 尚未准备好：
   *  请检查是否已开启音频模块。
   *  请检查程序集完整性。 IRtcEngine 初始化失败。请重新初始化 IRtcEngine 。
   */
  abstract startAudioMixing(
    filePath: string,
    loopback: boolean,
    cycle: number,
    startPos?: number
  ): number;

  /**
   * 停止播放音乐文件。
   *
   * 当你调用 startAudioMixing 方法播放音乐文件后，如需停止播放，可调用该方法。如果仅需暂停播放，请调用 pauseAudioMixing 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopAudioMixing(): number;

  /**
   * 暂停播放音乐文件。
   *
   * 当你调用 startAudioMixing 方法播放音乐文件后，如需暂停播放，请调用该方法。如果你需要停止播放，请调用 stopAudioMixing 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract pauseAudioMixing(): number;

  /**
   * 恢复播放音乐文件。
   *
   * 当你调用 pauseAudioMixing 暂停播放音乐文件后，如需恢复播放，请调用该方法。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract resumeAudioMixing(): number;

  /**
   * 指定当前音乐文件的播放音轨。
   *
   * 获取音乐文件的音轨数量后，你可以调用该方法指定任一音轨进行播放。例如，如果一个多音轨文件的不同音轨存放了不同语言的歌曲，则你可以调用该方法设置音乐文件的播放语言。
   *  该方法支持的音频文件格式见 [RTC SDK 支持播放哪些格式的音频文件？](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。
   *  你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged(AudioMixingStatePlaying) 回调后调用该方法。
   *
   * @param index 指定的播放音轨。取值范围应大于等于 0 且小于 getAudioTrackCount 的返回值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract selectAudioTrack(index: number): number;

  /**
   * 获取当前音乐文件的音轨索引。
   *
   * 你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged(AudioMixingStatePlaying) 回调后调用该方法。
   *
   * @returns
   * 方法调用成功时，返回当前音乐文件的音轨索引。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getAudioTrackCount(): number;

  /**
   * 调节音乐文件的播放音量。
   *
   * 该方法调节混音音乐文件在本端和远端的播放音量大小。 调用该方法不会影响 playEffect 方法中设置的音效文件播放音量。
   *
   * @param volume 音乐文件音量范围为 0~100。100 （默认值）为原始文件音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustAudioMixingVolume(volume: number): number;

  /**
   * 调节音乐文件远端播放音量。
   *
   * 该方法调节混音音乐文件在远端的播放音量大小。
   *
   * @param volume 音乐文件音量。取值范围为 [0,100]，100 （默认值）为原始音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustAudioMixingPublishVolume(volume: number): number;

  /**
   * 获取音乐文件的远端播放音量。
   *
   * 该接口可以方便开发者排查音量相关问题。 你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged(AudioMixingStatePlaying) 回调后调用该方法。
   *
   * @returns
   * ≥ 0: 方法调用成功则返回音量值，范围为 [0,100]。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getAudioMixingPublishVolume(): number;

  /**
   * 调节音乐文件在本地播放的音量。
   *
   * @param volume 音乐文件音量。取值范围为 [0,100]，100 （默认值）为原始音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustAudioMixingPlayoutVolume(volume: number): number;

  /**
   * 获取音乐文件的本地播放音量。
   *
   * 你可以调用该方法获取混音的音乐文件的本地播放音量，方便排查音量相关问题。
   *
   * @returns
   * ≥ 0: 方法调用成功则返回音量值，范围为 [0,100]。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getAudioMixingPlayoutVolume(): number;

  /**
   * 获取音乐文件总时长。
   *
   * 该方法获取音乐文件总时长，单位为毫秒。
   *
   * @returns
   * ≥ 0: 方法调用成功则返回音乐文件时长。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getAudioMixingDuration(): number;

  /**
   * 获取音乐文件的播放进度。
   *
   * 该方法获取当前音乐文件播放进度，单位为毫秒。
   *  你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged(AudioMixingStatePlaying) 回调后调用该方法。
   *  如需多次调用 getAudioMixingCurrentPosition ，请确保调用间隔大于 500 ms。
   *
   * @returns
   * ≥ 0: 方法调用成功，返回当前音乐文件播放进度（ms）。0 表示当前音乐文件未开始播放。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getAudioMixingCurrentPosition(): number;

  /**
   * 设置音乐文件的播放位置。
   *
   * 该方法可以设置音频文件的播放位置，这样你可以根据实际情况播放文件，而非从头到尾播放整个文件。
   *
   * @param pos 整数。进度条位置，单位为毫秒。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioMixingPosition(pos: number): number;

  /**
   * 设置当前音频文件的声道模式。
   *
   * 在双声道音频文件中，左声道和右声道可以存储不同的音频数据。根据实际需要，你可以设置声道模式为原始模式、左声道模式、右声道模式或混合模式。 该方法仅适用于双声道的音频文件。
   *
   * @param mode 声道模式。详见 AudioMixingDualMonoMode 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioMixingDualMonoMode(mode: AudioMixingDualMonoMode): number;

  /**
   * 调整本地播放的音乐文件的音调。
   *
   * 本地人声和播放的音乐文件混音时，调用该方法可以仅调节音乐文件的音调。
   *
   * @param pitch 按半音音阶调整本地播放的音乐文件的音调，默认值为 0，即不调整音调。取值范围为 [-12,12]，每相邻两个值的音高距离相差半音。取值的绝对值越大，音调升高或降低得越多。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioMixingPitch(pitch: number): number;

  /**
   * 设置当前音乐文件的播放速度。
   *
   * 你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged 回调报告播放状态为 AudioMixingStatePlaying 后再调用该方法。
   *
   * @param speed 音乐文件的播放速度。推荐取值范围为 [50,400]，其中：
   *  50: 0.5 倍速。
   *  100: 原始速度。
   *  400: 4 倍速。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioMixingPlaybackSpeed(speed: number): number;

  /**
   * 获取音效文件的播放音量。
   *
   * 音量范围为 0~100。100 （默认值）为原始文件音量。 该方法需要在 playEffect 后调用。
   *
   * @returns
   * 音效文件的音量。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getEffectsVolume(): number;

  /**
   * 设置音效文件的播放音量。
   *
   * @param volume 播放音量。取值范围为 [0,100]。默认值为 100，表示原始音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setEffectsVolume(volume: number): number;

  /**
   * 将音效文件加载至内存。
   *
   * 为保证通信畅通，请注意控制预加载音效文件的大小。
   * 该方法支持的预加载音频文件的格式见 [RTC SDK 支持播放哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。
   * @param filePath 文件路径：
   *  Windows: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 C:\music\audio.mp4 。
   *  macOS: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 /var/mobile/Containers/Data/audio.mp4 。
   * @param startPos 音效文件加载的起始位置，单位为毫秒。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract preloadEffect(
    soundId: number,
    filePath: string,
    startPos?: number
  ): number;

  /**
   * 播放指定的本地或在线音效文件。
   *
   * 你可以多次调用该方法，传入不同的 soundID 和 filePath ，同时播放多个音效文件。为获得最佳用户体验，建议同时播放的音效文件不超过 3 个。 如果你需要播放在线音效文件，声网建议先将在线音效文件缓存到本地设备，调用 preloadEffect 将缓存的音效文件预加载到内存中，然后再调用此方法播放音效。否则，可能出现因在线音效文件加载超时、加载失败而导致的播放失败和无声的问题。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。 如果你已通过 preloadEffect 将音效加载至内存，请确保该参数与 preloadEffect 中设置的 soundId 相同。
   * @param filePath 播放文件的地址，支持在线文件的 URL 地址、播放文件的绝对路径，需精确到文件名及后缀。支持的音频格式包括 MP3、AAC、M4A、MP4、WAV、3GP 等。 如果你已通过 preloadEffect 将音效加载至内存，请确保该参数与 preloadEffect 中设置的 filePath 相同。
   * @param loopCount 音效循环播放的次数。
   *  ≥ 0: 循环播放次数。例如，1 表示循环播放 1 次，即总计播放 2 次。
   *  -1: 无限循环播放。
   * @param pitch 音效的音调，取值范围为 [0.5,2.0]。默认值为 1.0，表示原始音调。取值越小，则音调越低。
   * @param pan 音效的空间位置。取值范围为 [-1.0,1.0]，例如：
   *  -1.0：音效出现在左边
   *  0.0：音效出现在正前方
   *  1.0：音效出现在右边
   * @param gain 音效的音量。取值范围为 [0.0,100.0]。默认值为 100.0，表示原始音量。取值越小，则音量越低。
   * @param publish 是否将音效发布至远端： true : 将音效发布至远端。本地用户和远端用户都能听到音效。 false : 不将音效发布至远端。只有本地用户能听到音效。
   * @param startPos 音效文件的播放位置，单位为毫秒。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract playEffect(
    soundId: number,
    filePath: string,
    loopCount: number,
    pitch: number,
    pan: number,
    gain: number,
    publish?: boolean,
    startPos?: number
  ): number;

  /**
   * 播放所有音效文件。
   *
   * 多次调用 preloadEffect 预加载多个音效文件后，你可以调用本方法播放所有预加载的音效文件。
   *
   * @param loopCount 音效文件循环播放的次数：
   *  -1: 无限循环播放音效文件，直至调用 stopEffect 或 stopAllEffects 后停止。
   *  0: 播放音效文件一次。
   *  1: 播放音效文件两次。
   * @param pitch 音效的音调。取值范围为 [0.5,2.0]。默认值为 1.0，代表原始音调。取值越小，则音调越低。
   * @param pan 音效的空间位置。取值范围为 [-1.0,1.0]:
   *  -1.0: 音效出现在左边。
   *  0: 音效出现在正前边。
   *  1.0: 音效出现在右边。
   * @param gain 音效的音量。取值范围为 [0,100]。100 为默认值，代表原始音量。取值越小，则音量越低。
   * @param publish 是否将音效发布到远端： true : 将音效发布到远端。本地和远端用户都能听到该音效。 false : （默认）不将音效发布到远端。只能本地用户能听到该音效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract playAllEffects(
    loopCount: number,
    pitch: number,
    pan: number,
    gain: number,
    publish?: boolean
  ): number;

  /**
   * 获取指定音效文件的播放音量。
   *
   * @param soundId 音效文件的 ID。
   *
   * @returns
   * ≥ 0: 方法调用成功，返回播放音量。音量范围为 [0,100]。100 为原始音量。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getVolumeOfEffect(soundId: number): number;

  /**
   * 设置指定音效文件的播放音量。
   *
   * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
   * @param volume 播放音量。取值范围为 [0,100]。默认值为 100，表示原始音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVolumeOfEffect(soundId: number, volume: number): number;

  /**
   * 暂停音效文件播放。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract pauseEffect(soundId: number): number;

  /**
   * 暂停所有音效文件播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract pauseAllEffects(): number;

  /**
   * 恢复播放指定音效文件。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract resumeEffect(soundId: number): number;

  /**
   * 恢复播放所有音效文件。
   *
   * 当你调用 pauseAllEffects 暂停播放所有音效文件后，如需恢复播放，可以调用该方法。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract resumeAllEffects(): number;

  /**
   * 停止播放指定音效文件。
   *
   * 当你不需要再播放某一音效文件时，可以调用该方法停止播放。如果你仅需暂停播放，请调用 pauseEffect 。
   *
   * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopEffect(soundId: number): number;

  /**
   * 停止播放所有音效文件。
   *
   * 当你不需要再播放音效文件时，可以调用该方法停止播放。如果你仅需暂停播放，请调用 pauseAllEffects 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopAllEffects(): number;

  /**
   * 从内存释放某个预加载的音效文件。
   *
   * 调用 preloadEffect 将音效文件加载至内存后，如需释放该音效文件，请调用该方法。
   *
   * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unloadEffect(soundId: number): number;

  /**
   * 从内存释放所有预加载音效文件。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unloadAllEffects(): number;

  /**
   * 获取指定音效文件总时长。
   *
   * 该方法需要在加入频道后调用。
   *
   * @param filePath 文件路径：
   *  Windows: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 C:\music\audio.mp4 。
   *  macOS: 音频文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 /var/mobile/Containers/Data/audio.mp4 。
   *
   * @returns
   * 方法调用成功，返回指定音效文件时长（毫秒）。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getEffectDuration(filePath: string): number;

  /**
   * 设置指定音效文件的播放位置。
   *
   * 成功设置后，本地音效文件会在指定位置开始播放。 该方法需要在 playEffect 后调用。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。
   * @param pos 音效文件的播放位置，单位为毫秒。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setEffectPosition(soundId: number, pos: number): number;

  /**
   * 获取指定音效文件的播放进度。
   *
   * 该方法需要在 playEffect 后调用。
   *
   * @param soundId 音效的 ID。每个音效的 ID 具有唯一性。
   *
   * @returns
   * 方法调用成功，返回指定音效文件的播放进度（毫秒）。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getEffectCurrentPosition(soundId: number): number;

  /**
   * 开启/关闭远端用户的语音立体声。
   *
   * 如果想调用 setRemoteVoicePosition 实现听声辨位的功能，请确保在加入频道前调用该方法开启远端用户的语音立体声。
   *
   * @param enabled 是否开启远端用户语音立体声： true : 开启语音立体声。 false : 关闭语音立体声。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableSoundPositionIndication(enabled: boolean): number;

  /**
   * 设置远端用户声音的 2D 位置，即水平面位置。
   *
   * 设置远端用户声音的 2D 位置和音量，方便本地用户听声辨位。
   * 通过调用该接口设置远端用户声音出现的位置，左右声道的声音差异会产生声音的方位感，从而判断出远端用户的实时位置。在多人在线游戏场景，如吃鸡游戏中，该方法能有效增加游戏角色的方位感，模拟真实场景。
   *  使用该方法需要在加入频道前调用 enableSoundPositionIndication 开启远端用户的语音立体声。
   *  为获得最佳听觉体验，建议使用该方法时使用有线耳机。
   *  该方法需要在加入频道后调用。
   *
   * @param uid 远端用户的 ID
   * @param pan 设置远端用户声音的 2D 位置，取值范围为 [-1.0,1.0]:
   *  （默认）0.0: 声音出现在正前方。
   *  -1.0: 声音出现在左边。
   *  1.0: 声音出现在右边。
   * @param gain 设置远端用户声音的音量，取值范围为 [0.0,100.0]，默认值为 100.0，表示该用户的原始音量。取值越小，则音量越低。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVoicePosition(
    uid: number,
    pan: number,
    gain: number
  ): number;

  /**
   * 开启或关闭空间音频。
   *
   * 开启空间音频后，你可以调用 setRemoteUserSpatialAudioParams 设置远端用户的空间音频参数。
   *  该方法在加入频道前后均可调用。
   *  该方法依赖于空间音频动态库 libagora_spatial_audio_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param enabled 是否开启空间音频： true : 开启空间音频。 false : 关闭空间音频。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableSpatialAudio(enabled: boolean): number;

  /**
   * 设置远端用户的空间音频参数。
   *
   * 该方法需要在 enableSpatialAudio 后调用。成功设置远端用户的空间音频参数后，本地用户听远端用户会有空间感。
   *
   * @param uid 用户 ID。需与用户加入频道时填写的用户 ID 一致。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteUserSpatialAudioParams(
    uid: number,
    params: SpatialAudioParams
  ): number;

  /**
   * 设置预设的美声效果。
   *
   * 调用该方法可以为本地发流用户设置预设的人声美化效果。设置美声效果后，频道内所有用户都能听到该效果。根据不同的场景，你可以为用户设置不同的美声效果。
   *  请勿将 setAudioProfile 的 profile 参数设置为 AudioProfileSpeechStandard (1) 或 AudioProfileIot (6)，否则该方法不生效。
   *  该方法对人声的处理效果最佳，不建议调用该方法处理含音乐的音频数据。
   *  调用 setVoiceBeautifierPreset ，不建议调用以下方法，否则 setVoiceBeautifierPreset 设置的效果会被覆盖： setAudioEffectPreset setAudioEffectParameters setLocalVoicePitch setLocalVoiceEqualization setLocalVoiceReverb setVoiceBeautifierParameters setVoiceConversionPreset
   *  该方法依赖于美声动态库 libagora_audio_beauty_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param preset 预设的美声效果选项，详见 VoiceBeautifierPreset 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVoiceBeautifierPreset(preset: VoiceBeautifierPreset): number;

  /**
   * 设置 SDK 预设的人声音效。
   *
   * 调用该方法可以为本地发流用户设置 SDK 预设的人声音效，且不会改变原声的性别特征。设置音效后，频道内所有用户都能听到该效果。
   *  请勿将 setAudioProfile 的 profile 参数设置为 AudioProfileSpeechStandard (1) 或 AudioProfileIot (6)，否则该方法不生效。
   *  如果调用 setAudioEffectPreset 并设置除 RoomAcoustics3dVoice 或 PitchCorrection 外的枚举，请勿再调用 setAudioEffectParameters ，否则 setAudioEffectPreset 设置的效果会被覆盖。
   *  调用 setAudioEffectPreset 后，不建议调用以下方法，否则 setAudioEffectPreset 设置的效果会被覆盖： setVoiceBeautifierPreset setLocalVoicePitch setLocalVoiceEqualization setLocalVoiceReverb setVoiceBeautifierParameters setVoiceConversionPreset
   *  该方法依赖于美声动态库 libagora_audio_beauty_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param preset 预设的音效选项，详见 AudioEffectPreset 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioEffectPreset(preset: AudioEffectPreset): number;

  /**
   * 设置预设的变声效果。
   *
   * 调用该方法可以为本地发流用户设置 SDK 预设的变声效果。设置变声效果后，频道内所有用户都能听到该效果。根据不同的场景，你可以为用户设置不同的变声效果。
   *  请勿将 setAudioProfile 的 profile 参数设置为 AudioProfileSpeechStandard (1) 或 AudioProfileIot (6)，否则该方法不生效。
   *  该方法对人声的处理效果最佳，不建议调用该方法处理含音乐的音频数据。
   *  调用 setVoiceConversionPreset 后，不建议调用以下方法，否则 setVoiceConversionPreset 设置的效果会被覆盖： setAudioEffectPreset setAudioEffectParameters setVoiceBeautifierPreset setVoiceBeautifierParameters setLocalVoicePitch setLocalVoiceFormant setLocalVoiceEqualization setLocalVoiceReverb
   *  该方法依赖于美声动态库 libagora_audio_beauty_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param preset 预设的变声效果选项: VoiceConversionPreset 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVoiceConversionPreset(preset: VoiceConversionPreset): number;

  /**
   * 设置 SDK 预设人声音效的参数。
   *
   * 调用该方法可以对本地发流用户进行如下设置：
   *  3D 人声音效：设置 3D 人声音效的环绕周期。
   *  电音音效：设置电音音效的基础调式和主音音高。为方便用户自行调节电音音效，建议你将基础调式和主音音高配置选项与应用的 UI 元素绑定。 设置后，频道内所有用户都能听到该效果。 为获取更好的人声效果，建议你在调用该方法前进行以下操作：
   *  调用 setAudioScenario 将音频场景设为高音质场景，即 AudioScenarioGameStreaming (3)。
   *  调用 setAudioProfile 将 profile 设为 AudioProfileMusicHighQuality (4) 或 AudioProfileMusicHighQualityStereo (5)。
   *  该方法在加入频道前后都能调用。
   *  请勿将 setAudioProfile 的 profile 参数设置为 AudioProfileSpeechStandard (1) 或 AudioProfileIot (6)，否则该方法不生效。
   *  该方法对人声的处理效果最佳，不建议调用该方法处理含音乐的音频数据。
   *  调用 setAudioEffectParameters 后，不建议调用以下方法，否则 setAudioEffectParameters 设置的效果会被覆盖： setAudioEffectPreset setVoiceBeautifierPreset setLocalVoicePitch setLocalVoiceEqualization setLocalVoiceReverb setVoiceBeautifierParameters setVoiceConversionPreset
   *  该方法依赖于美声动态库 libagora_audio_beauty_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param preset SDK 预设的音效，支持以下设置： RoomAcoustics3dVoice ，3D 人声音效。
   *  你需要在使用该枚举前将 setAudioProfile 的 profile 参数设置 为 AudioProfileMusicStandardStereo (3) 或 AudioProfileMusicHighQualityStereo (5)，否则该枚举设置无效。
   *  启用 3D 人声后，用户需要使用支持双声道的音频播放设备才能听到预期效果。 PitchCorrection ，电音音效。
   * @param param1 如果 preset 设为 RoomAcoustics3dVoice ，则 param1 表示 3D 人声音效的环绕周期。取值范围为 [1,60]，单位为秒。默认值为 10，表示人声会 10 秒环绕 360 度。
   *  如果 preset 设为 PitchCorrection ，则 param1 表示电音音效的基础调式： 1 : （默认）自然大调。 2 : 自然小调。 3 : 和风小调。
   * @param param2 如果 preset 设为 RoomAcoustics3dVoice ，你需要将 param2 设置为 0 。
   *  如果 preset 设为 PitchCorrection ，则 param2 表示电音音效的主音音高： 1 : A 2 : A# 3 : B 4 : (Default) C 5 : C# 6 : D 7 : D# 8 : E 9 : F 10 : F# 11 : G 12 : G#
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioEffectParameters(
    preset: AudioEffectPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * 设置预设美声效果的参数。
   *
   * 调用该方法可以设置歌唱美声效果的性别特征和混响效果。该方法对本地发流用户进行设置。设置后，频道内所有用户都能听到该效果。
   * 为获取更好的人声效果，建议你在调用该方法前进行以下操作：
   *  调用 setAudioScenario 将音频场景设为高音质场景，即 AudioScenarioGameStreaming (3)。
   *  调用 setAudioProfile 将 profile 设为 AudioProfileMusicHighQuality (4) 或 AudioProfileMusicHighQualityStereo (5)。
   *  该方法在加入频道前后都能调用。
   *  请勿将 setAudioProfile 的 profile 参数设置为 AudioProfileSpeechStandard (1) 或 AudioProfileIot (6)，否则该方法不生效。
   *  该方法对人声的处理效果最佳，不建议调用该方法处理含音乐的音频数据。
   *  调用 setVoiceBeautifierParameters ，不建议调用以下方法，否则 setVoiceBeautifierParameters 设置的效果会被覆盖： setAudioEffectPreset setAudioEffectParameters setVoiceBeautifierPreset setLocalVoicePitch setLocalVoiceEqualization setLocalVoiceReverb setVoiceConversionPreset
   *  该方法依赖于美声动态库 libagora_audio_beauty_extension.dll ，如果删除该动态库会导致无法正常开启该功能。
   *
   * @param preset 预设的音效： SINGING_BEAUTIFIER : 歌唱美声。
   * @param param1 歌声的性别特征： 1 : 男声。 2 : 女声。
   * @param param2 歌声的混响效果： 1 : 歌声在小房间的混响效果。 2 : 歌声在大房间的混响效果。 3 : 歌声在大厅的混响效果。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVoiceBeautifierParameters(
    preset: VoiceBeautifierPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * @ignore
   */
  abstract setVoiceConversionParameters(
    preset: VoiceConversionPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * 设置本地语音音调。
   *
   * @param pitch 语音频率。可以 [0.5,2.0] 范围内设置。取值越小，则音调越低。默认值为 1.0，表示不需要修改音调。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalVoicePitch(pitch: number): number;

  /**
   * 设置共振峰比率以改变语音的音色。
   *
   * 共振峰比率是影响声音音色的一个参数，共振峰比率取值越小声音会更低沉，取值越大声音会更尖锐。设置共振峰比率后，频道内所有用户都能听到该效果。如果你想要在调整音色的同时改变音调，声网推荐你搭配 setLocalVoicePitch 一起使用。
   *
   * @param formantRatio 共振峰比率，取值范围为 [-1.0，1.0]。默认值为 0.0，即不改变原声的音色。 声网推荐的取值范围为 [-0.4，0.6] ，超出此范围外音效听感可能不佳。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalVoiceFormant(formantRatio: number): number;

  /**
   * 设置本地语音音效均衡。
   *
   * @param bandFrequency 频谱子带索引。取值范围是 [0,9]，分别代表音效的 10 个频带。对应的中心频率为 [31，62，125，250，500，1k，2k，4k，8k，16k] Hz。详见 AudioEqualizationBandFrequency 。
   * @param bandGain 每个 band 的增益，单位是 dB，每一个值的范围是 [-15,15]，默认值为 0。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalVoiceEqualization(
    bandFrequency: AudioEqualizationBandFrequency,
    bandGain: number
  ): number;

  /**
   * 设置本地音效混响。
   *
   * SDK 提供一个使用更为简便的方法 setAudioEffectPreset ，直接实现流行、R&B、KTV 等预置的混响效果。 该方法在加入频道前后都能调用。
   *
   * @param reverbKey 混响音效 Key。该方法共有 5 个混响音效 Key，详见 AudioReverbType 。
   * @param value 各混响音效 Key 所对应的值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalVoiceReverb(
    reverbKey: AudioReverbType,
    value: number
  ): number;

  /**
   * 设置预设的耳机均衡效果。
   *
   * 该方法主要应用于空间音频场景下，你可以选择预设的耳机均衡器收听音频，以达到预期的音频体验。 如果你使用的耳机已经具备良好的均衡效果，调用该方法时可能不会获得明显的体验提升效果，甚至可能导致体验下降。
   *
   * @param preset 预设的耳机均衡效果。详见 HeadphoneEqualizerPreset 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败
   *  -1：一般性的错误（未明确归类）。
   */
  abstract setHeadphoneEQPreset(preset: HeadphoneEqualizerPreset): number;

  /**
   * 设置耳机均衡器的低频和高频参数。
   *
   * 在空间音频场景下，如果在调用 setHeadphoneEQPreset 方法使用预设的耳机均衡效果后仍未达到预期，你可以通过调用该方法进一步调节耳机均衡效果。
   *
   * @param lowGain 耳机均衡器的低频参数。取值范围为 [-10,10]，取值越大，声音越低沉。
   * @param highGain 耳机均衡器的高频参数。取值范围为 [-10,10]，取值越大，声音越尖锐。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败
   *  -1：一般性的错误（未明确归类）。
   */
  abstract setHeadphoneEQParameters(lowGain: number, highGain: number): number;

  /**
   * 开启或关闭 AI 调音器功能。
   *
   * AI 调音器功能支持美化音质，调整音色风格。
   *
   * @param enabled 是否开启 AI 调音器功能： true ：开启 AI 调音器功能。 false ：（默认）关闭 AI 调音器功能。
   * @param type AI 调音器音效类型，详见 VoiceAiTunerType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableVoiceAITuner(enabled: boolean, type: VoiceAiTunerType): number;

  /**
   * 设置日志文件
   *
   * 废弃 弃用： 该方法已废弃，请在调用 initialize 时通过 context 参数设置日志文件路径。 设置 SDK 的输出 log 文件。SDK 运行时产生的所有 log 将写入该文件。 App 必须保证指定的目录存在而且可写。
   *
   * @param filePath 日志文件的完整路径。该日志文件为 UTF-8 编码。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLogFile(filePath: string): number;

  /**
   * 设置日志输出等级。
   *
   * 废弃 弃用： 请改用 initialize 中的 logConfig 。 该方法设置 SDK 的输出日志输出等级。不同的输出等级可以单独或组合使用。日志级别顺序依次为 LogFilterOff 、 LogFilterCritical 、 LogFilterError 、 LogFilterWarn 、 LogFilterInfo 和 LogFilterDebug 。
   * 选择一个级别，你就可以看到在该级别之前所有级别的日志信息。
   * 例如，你选择 LogFilterWarn 级别，就可以看到在 LogFilterCritical 、 LogFilterError 和 LogFilterWarn 级别的日志信息。
   *
   * @param filter 日志过滤等级。详见 LogFilterType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLogFilter(filter: LogFilterType): number;

  /**
   * 设置 SDK 的日志输出级别。
   *
   * 废弃 弃用： 该方法已废弃，请在调用 initialize 时通过 context 参数设置日志输出级别。 选择一个级别，你就可以看到该级别的日志信息。
   *
   * @param level 日志级别。详见 LogLevel 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLogLevel(level: LogLevel): number;

  /**
   * 设置 SDK 输出的日志文件的大小。
   *
   * 废弃 弃用： 该方法已废弃，请改用 initialize 中的 logConfig 参数设置日志文件大小。 默认情况下，SDK 会生成 5 个 SDK 日志文件和 5 个 API 调用日志文件，规则如下：
   *  SDK 日志文件的名称分别为： agorasdk.log 、 agorasdk.1.log 、 agorasdk.2.log 、 agorasdk.3.log 、 agorasdk.4.log 。
   *  API 调用日志文件的名称分别为： agoraapi.log 、 agoraapi.1.log 、 agoraapi.2.log 、 agoraapi.3.log 、 agoraapi.4.log 。
   *  每个 SDK 日志文件的默认大小为 2,048 KB；API 调用日志文件的默认大小为 2,048 KB。日志文件均为 UTF-8 编码。
   *  最新的日志永远写在 agorasdk.log 和 agoraapi.log 中。
   *  当 agorasdk.log 写满后，SDK 会按照以下顺序对日志文件进行操作：
   *  删除 agorasdk.4.log 文件（如有）。
   *  将 agorasdk.3.log 重命名为 agorasdk.4.log 。
   *  将 agorasdk.2.log 重命名为 agorasdk.3.log 。
   *  将 agorasdk.1.log 重命名为 agorasdk.2.log 。
   *  新建 agorasdk.log 文件。 agoraapi.log 文件的覆盖规则与 agorasdk.log 相同。 该方法仅用于设置 agorasdk.log 文件的大小，对 agoraapi.log 不生效。
   *
   * @param fileSizeInKBytes 单个 agorasdk.log 日志文件的大小，单位为 KB，取值范围为 [128,20480]，默认值为 2,048 KB。如果你将 fileSizeInKByte 设为小于 128 KB，SDK 会自动调整到 128 KB；如果你将 fileSizeInKByte 设为大于 20,480 KB，SDK 会自动调整到 20,480 KB。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLogFileSize(fileSizeInKBytes: number): number;

  /**
   * @ignore
   */
  abstract uploadLogFile(): string;

  /**
   * @ignore
   */
  abstract writeLog(level: LogLevel, fmt: string): number;

  /**
   * 更新本地视图显示模式。
   *
   * 初始化本地用户视图后，你可以调用该方法更新本地用户视图的渲染和镜像模式。该方法只影响本地用户看到的视频画面，不影响本地视频的发布。 该方法仅对第一个摄像头 (PrimaryCameraSource) 生效。在自定义视频采集或使用其他类型视频源的场景下，你需要使用 setupLocalVideo 方法替代该方法。
   *
   * @param renderMode 本地视图显示模式。详见 RenderModeType 。
   * @param mirrorMode 本地视图的镜像模式，详见 VideoMirrorModeType 。 如果你使用前置摄像头，默认启动本地用户视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalRenderMode(
    renderMode: RenderModeType,
    mirrorMode?: VideoMirrorModeType
  ): number;

  /**
   * 更新远端视图显示模式。
   *
   * 初始化远端用户视图后，你可以调用该方法更新远端用户视图在本地显示时的渲染和镜像模式。该方法只影响本地用户看到的视频画面。
   *  请在调用 setupRemoteVideo 方法初始化远端视图后，调用该方法。
   *  你可以在通话中多次调用该方法，多次更新远端用户视图的显示模式。
   *
   * @param uid 远端用户 ID。
   * @param renderMode 远端用户视图的渲染模式，详见 RenderModeType 。
   * @param mirrorMode 远端用户视图的镜像模式，详见 VideoMirrorModeType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteRenderMode(
    uid: number,
    renderMode: RenderModeType,
    mirrorMode: VideoMirrorModeType
  ): number;

  /**
   * 设置本地视频渲染的最大帧率。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   * @param targetFps 最大渲染帧率 (fps)。支持的参数值为：1、7、10、15、24、30、60。 请将此参数设置为低于视频实际帧率的渲染帧率，否则设置将不会生效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalRenderTargetFps(
    sourceType: VideoSourceType,
    targetFps: number
  ): number;

  /**
   * 设置视频在远端渲染的最大帧率。
   *
   * @param targetFps 最大渲染帧率 (fps)。支持的参数值为：1、7、10、15、24、30、60。 请将此参数设置为低于视频实际帧率的渲染帧率，否则设置将不会生效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteRenderTargetFps(targetFps: number): number;

  /**
   * 设置本地视频镜像。
   *
   * 废弃 弃用: 该方法已废弃。
   *
   * @param mirrorMode 本地视频镜像模式。详见 VideoMirrorModeType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalVideoMirrorMode(mirrorMode: VideoMirrorModeType): number;

  /**
   * 在发送端开启或关闭双流模式并设置视频小流。
   *
   * 废弃 弃用： 从 v4.2.0 起废弃，请改用 setDualStreamMode 。 你可以在发流端调用该方法开启或关闭双流模式。双流指视频大流和视频小流：
   *  视频大流：高分辨率、高帧率的视频流。
   *  视频小流：低分辨率、低帧率的视频流。 开启双流模式后，你可以在收流端调用 setRemoteVideoStreamType 选择接收视频大流或视频小流。
   *  该方法适用于发送端发送的所有类型的流，包括且不限于来自摄像头采集的视频流、屏幕共享流、自定义采集的视频流。
   *  如果需要在多频道场景下开启视频双流，可以调用 enableDualStreamModeEx 方法。
   *  该方法可以在加入频道前后调用。
   *
   * @param enabled 是否开启双流模式： true : 开启双流模式。 false : (默认) 关闭双流模式。
   * @param streamConfig 视频小流的配置。详见 SimulcastStreamConfig 。 当设置 mode 为 DisableSimulcastStream 时，再设置 streamConfig 不会生效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。 详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableDualStreamMode(
    enabled: boolean,
    streamConfig?: SimulcastStreamConfig
  ): number;

  /**
   * 在发送端设置双流模式并设置视频小流。
   *
   * SDK 默认在发送端开启小流自适应模式 (AutoSimulcastStream)，即发送端不主动发送小流，主播身份的接收端可以调用 setRemoteVideoStreamType 发起小流申请，发送端收到申请后开始自动发送小流。
   *  如果你想修改此行为，可以调用该方法并修改 mode 为 DisableSimulcastStream （始终不发送小流）或 EnableSimulcastStream （始终发送小流）。
   *  如果你在进行修改后又想恢复该默认行为，可重新调用该方法，并将 mode 设置为 AutoSimulcastStream 。 该方法和 enableDualStreamMode 的区别与联系如下：
   *  调用该方法并设置 mode 为 DisableSimulcastStream 时，跟调用 enableDualStreamMode 并设置 enabled 为 false 的效果相同。
   *  调用该方法并设置 mode 为 EnableSimulcastStream 时，跟调用 enableDualStreamMode 并设置 enabled 为 true 的效果相同。
   *  两种方法均可在加入频道前后调用，若同时使用，则以后调用的方法中的设置为准。
   *
   * @param mode 发送视频流的模式。详见 SimulcastStreamMode 。
   * @param streamConfig 视频小流的配置。详见 SimulcastStreamConfig 。 当设置 mode 为 DisableSimulcastStream 时，再设置 streamConfig 不会生效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。 详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setDualStreamMode(
    mode: SimulcastStreamMode,
    streamConfig?: SimulcastStreamConfig
  ): number;

  /**
   * @ignore
   */
  abstract setSimulcastConfig(simulcastConfig: SimulcastConfig): number;

  /**
   * 设置是否在本地播放外部音频源。
   *
   * 调用该方法设置在本地播放外部采集的音频源后，如需停止本地播放，可以再次调用该方法并设置 enabled 为 false 。
   * 你可以调用 adjustCustomAudioPlayoutVolume 调节自定义音频采集轨道在本地播放的音量。 在调用该方法前，请确保你已经调用 createCustomAudioTrack 方法创建自定义音频采集轨道。
   *
   * @param trackId 音频轨道 ID。将该参数设置为调用 createCustomAudioTrack 方法返回的自定义音频轨道 ID。
   * @param enabled 是否在本地播放外部音频源： true ：在本地播放。 false ：（默认）不在本地播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableCustomAudioLocalPlayback(
    trackId: number,
    enabled: boolean
  ): number;

  /**
   * 设置采集的原始音频数据格式。
   *
   * SDK 会通过该方法中的 samplesPerCall 、 sampleRate 和 channel 参数计算出采样间隔，计算公式为采样间隔 = samplesPerCall /(sampleRate × channel)。请确保采样间隔不小于 0.01 秒。SDK 会根据该采样间隔触发 onRecordAudioFrame 回调。
   *
   * @param sampleRate 音频数据的采样率 (Hz)，可设置为 8000、 16000、 32000、44100 或 48000。
   * @param channel 音频数据的声道数，可设置为 1 或 2:
   *  1: 单声道。
   *  2: 双声道。
   * @param mode 音频帧的使用模式，详见 RawAudioFrameOpModeType 。
   * @param samplesPerCall 音频数据的采样点数，如旁路推流应用中通常为 1024。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRecordingAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * 设置播放的原始音频数据格式。
   *
   * SDK 会通过该方法中的 samplesPerCall 、 sampleRate 和 channel 参数计算出采样间隔，计算公式为采样间隔 = samplesPerCall /(sampleRate × channel)。请确保采样间隔不小于 0.01 秒。SDK 会根据该采样间隔触发 onPlaybackAudioFrame 回调。
   *
   * @param sampleRate 音频数据的采样率 (Hz)，可设置为 8000、 16000、 24000、 32000、44100 或 48000。
   * @param channel 音频数据的声道数，可设置为 1 或 2:
   *  1: 单声道。
   *  2: 双声道。
   * @param mode 音频帧的使用模式，详见 RawAudioFrameOpModeType 。
   * @param samplesPerCall 音频数据的采样点数，如旁路推流应用中通常为 1024。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setPlaybackAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * 设置采集和播放音频混音后的原始音频数据格式。
   *
   * SDK 会通过该方法中的 samplesPerCall 、 sampleRate 和 channel 参数计算出采样间隔，计算公式为采样间隔 = samplesPerCall /(sampleRate × channel)。请确保采样间隔不小于 0.01 秒。SDK 会根据该采样间隔触发 onMixedAudioFrame 回调。
   *
   * @param sampleRate 音频数据的采样率 (Hz)，可设置为 8000、 16000、 32000、44100 或 48000。
   * @param channel 音频数据的声道数，可设置为 1 或 2:
   *  1: 单声道。
   *  2: 双声道。
   * @param samplesPerCall 音频数据的采样点数，如旁路推流应用中通常为 1024。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setMixedAudioFrameParameters(
    sampleRate: number,
    channel: number,
    samplesPerCall: number
  ): number;

  /**
   * 设置耳返的音频数据格式。
   *
   * 该方法用于设置 onEarMonitoringAudioFrame 回调的耳返音频数据格式。
   *  调用该方法前，你需要先调用 enableInEarMonitoring ，将 includeAudioFilters 设置为 EarMonitoringFilterBuiltInAudioFilters 或 EarMonitoringFilterNoiseSuppression 。
   *  SDK 会通过该方法中的 samplesPerCall 、 sampleRate 和 channel 参数计算出采样间隔，计算公式为采样间隔 = samplesPerCall /(sampleRate × channel)。请确保采样间隔不小于 0.01 秒。SDK 会根据该采样间隔触发 onEarMonitoringAudioFrame 回调。
   *
   * @param sampleRate onEarMonitoringAudioFrame 中报告音频的采样率 (Hz)，可设置为 8000、 16000、 32000、44100 或 48000。
   * @param channel onEarMonitoringAudioFrame 中报告音频的声道数，可设置为 1 或 2:
   *  1: 单声道。
   *  2: 双声道。
   * @param mode 音频帧的使用模式，详见 RawAudioFrameOpModeType 。
   * @param samplesPerCall onEarMonitoringAudioFrame 中报告的音频的采样点数，如旁路推流应用中通常为 1024。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setEarMonitoringAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * 设置混音前的原始音频播放数据格式。
   *
   * SDK 会根据该采样间隔触发 onPlaybackAudioFrameBeforeMixing 回调。
   *
   * @param sampleRate 音频数据的采样率 (Hz)，可设置为 8000、 16000、 32000、44100 或 48000。
   * @param channel 音频数据的声道数，可设置为 1 或 2:
   *  1: 单声道。
   *  2: 双声道。
   * @param samplesPerCall 设置 onPlaybackAudioFrameBeforeMixing 回调中返回音频数据的采样点数。在 RTMP 推流场景中，建议设置为 1024。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setPlaybackAudioFrameBeforeMixingParameters(
    sampleRate: number,
    channel: number,
    samplesPerCall: number
  ): number;

  /**
   * 开启音频频谱监测。
   *
   * 如果你想获取本地或远端用户的音频频谱数据，请注册音频频谱观测器并开启音频频谱监测。 该方法在加入频道前后均可调用。
   *
   * @param intervalInMS SDK 触发 onLocalAudioSpectrum 和 onRemoteAudioSpectrum 回调的时间间隔（毫秒）。 默认值为 100 毫秒。取值不得少于 10 毫秒，否则该方法会调用失败。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2: 参数设置错误。
   */
  abstract enableAudioSpectrumMonitor(intervalInMS?: number): number;

  /**
   * 关闭音频频谱监测。
   *
   * 调用 enableAudioSpectrumMonitor 后，如果你想关闭音频频谱监测，请调用该方法。 该方法在加入频道前后均可调用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract disableAudioSpectrumMonitor(): number;

  /**
   * 注册音频频谱观测器。
   *
   * 成功注册音频频谱观测器并调用 enableAudioSpectrumMonitor 开启音频频谱监测后，SDK 会按照你设置的时间间隔报告你在 IAudioSpectrumObserver 类中实现的回调。 该方法在加入频道前后均可调用。
   *
   * @param observer 音频频谱观测器。详见 IAudioSpectrumObserver 。
   *
   * @returns
   * 一个 IAudioSpectrumObserver 对象。
   */
  abstract registerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * 取消注册音频频谱观测器。
   *
   * 调用 registerAudioSpectrumObserver 后，如果你想取消注册音频频谱观测器，请调用该方法。 该方法在加入频道前后均可调用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * 调节音频采集信号音量。
   *
   * 如果你只需将音频信号静音，建议你使用 muteRecordingSignal 。
   *
   * @param volume 音量，取值范围为 [0,400]。
   *  0: 静音。
   *  100: （默认）原始音量。
   *  400: 原始音量的 4 倍，自带溢出保护。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustRecordingSignalVolume(volume: number): number;

  /**
   * 是否将录音信号静音。
   *
   * 如果你已经调用 adjustRecordingSignalVolume 调节了音频采集信号音量，则调用该方法并设置为 true 时，SDK 的行为如下：
   *  记录调节后的音量。
   *  将音频采集信号静音。 当你再次调用该方法并设置为 false 时，录音信号会恢复为静音前 SDK 记录的音量。
   *
   * @param mute true : 静音。 false :（默认）原始音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteRecordingSignal(mute: boolean): number;

  /**
   * 调节本地播放的所有远端用户信号音量。
   *
   * 该方法用于调节所有远端用户混音后在本地播放的信号音量，如果你需要调节指定远端用户在本地播放的信号音量，建议你调用 adjustUserPlaybackSignalVolume 。
   *
   * @param volume 音量，取值范围为 [0,400]。
   *  0: 静音。
   *  100: （默认）原始音量。
   *  400: 原始音量的 4 倍，自带溢出保护。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustPlaybackSignalVolume(volume: number): number;

  /**
   * 调节本地播放的指定远端用户信号音量。
   *
   * 你可以在通话中调用该方法调节指定远端用户在本地播放的音量。如需调节多个用户在本地播放的音量，则需多次调用该方法。
   *
   * @param uid 远端用户 ID。
   * @param volume 音量，取值范围为 [0,400]。
   *  0: 静音。
   *  100: （默认）原始音量。
   *  400: 原始音量的 4 倍，自带溢出保护。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustUserPlaybackSignalVolume(uid: number, volume: number): number;

  /**
   * 设置弱网环境下订阅的音视频流回退选项。
   *
   * 网络不理想的环境下，实时通信音视频的质量会下降。你可以调用该方法并将 option 设置为 StreamFallbackOptionVideoStreamLow 或 StreamFallbackOptionAudioOnly ，SDK 会在下行弱网且音视频质量严重受影响时，将视频流切换为小流或关闭视频流，从而保证音频质量。同时，SDK 会持续监控网络质量，并在网络质量改善时恢复订阅音视频流。
   * 当订阅流回退为音频流或由音频流恢复为音视频流时，SDK 会触发 onRemoteSubscribeFallbackToAudioOnly 回调。
   *
   * @param option 订阅流的回退选项。详见 STREAM_FALLBACK_OPTIONS 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteSubscribeFallbackOption(
    option: StreamFallbackOptions
  ): number;

  /**
   * @ignore
   */
  abstract setHighPriorityUserList(
    uidList: number[],
    uidNum: number,
    option: StreamFallbackOptions
  ): number;

  /**
   * 启用/禁用插件。
   *
   * 如果要开启多个插件，需要多次调用该方法。
   *  该方法调用成功后，无法再加载其他插件。
   *
   * @param provider 提供插件的服务商名称。
   * @param extension 插件的名称。
   * @param enable 是否启用插件： true : 启用插件。 false : 禁用插件。
   * @param type 插件的媒体源类型。详见 MediaSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -3: 该插件动态库没有被加载。声网推荐你检查该动态库是否存放在预期的位置，或该动态库名是否正确。
   */
  abstract enableExtension(
    provider: string,
    extension: string,
    enable?: boolean,
    type?: MediaSourceType
  ): number;

  /**
   * 设置插件的属性。
   *
   * 开启插件后，你可以调用该方法设置插件的属性。 如果要设置多个插件的属性，需要多次调用该方法。
   *
   * @param provider 提供插件的服务商名称。
   * @param extension 插件的名称。
   * @param key 插件属性的 Key。
   * @param value 插件属性 Key 对应的值。
   * @param type 插件的媒体源类型。详见 MediaSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setExtensionProperty(
    provider: string,
    extension: string,
    key: string,
    value: string,
    type?: MediaSourceType
  ): number;

  /**
   * 获取插件的详细信息。
   *
   * @param provider 提供插件的服务商名称。
   * @param extension 插件的名称。
   * @param key 插件属性的 Key。
   * @param bufLen 插件属性 JSON 字符串的最大长度。最大值为 512 字节。
   * @param type 插件的媒体源类型。详见 MediaSourceType 。
   *
   * @returns
   * 方法调用成功，则返回插件信息。
   *  方法调用失败，则返回空字符串。
   */
  abstract getExtensionProperty(
    provider: string,
    extension: string,
    key: string,
    bufLen: number,
    type?: MediaSourceType
  ): string;

  /**
   * 开启声卡采集。
   *
   * 启用声卡采集功能后，声卡播放的声音会被合到本地音频流中，从而可以发送到远端。
   *  该方法在加入频道前后都能调用。
   *  如果你调用了 disableAudio 关闭音频模块，声卡采集功能也会被关闭。如果你需要再次启用声卡采集功能，需要调用 enableAudio 启用音频模块后再次调用 enableLoopbackRecording 。
   *
   * @param enabled 是否开启声卡采集: true : 开启声卡采集；系统声音 > 输出界面显示虚拟声卡名称。 false :（默认）关闭声卡采集；系统声音 > 输出界面不显示虚拟声卡名称。
   * @param deviceName Electron for 统信 OS SDK 不支持该参数。
   *  macOS: 虚拟声卡的设备名。默认为空，代表使用 AgoraALD 虚拟声卡进行采集。
   *  Windows: 声卡的设备名。默认为空，代表使用设备自带的声卡进行采集。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableLoopbackRecording(
    enabled: boolean,
    deviceName?: string
  ): number;

  /**
   * 调节声卡采集信号音量。
   *
   * 调用 enableLoopbackRecording 开启声卡采集后，你可以调用该方法调节声卡采集的信号音量。
   *
   * @param volume 音乐文件音量范围为 0~100。100 （默认值）为原始文件音量。
   *
   * @returns
   * 0: 方法调用成功
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustLoopbackSignalVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getLoopbackRecordingVolume(): number;

  /**
   * 开启耳返功能。
   *
   * 该方法用于打开或关闭耳返功能。 用户必须使用耳机（有线和蓝牙均可）才能听到耳返效果。
   *
   * @param enabled 开启/关闭耳返功能: true : 开启耳返功能。 false : （默认）关闭耳返功能。
   * @param includeAudioFilters 耳返 Audio filter 类型。详见 EarMonitoringFilterType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -8: 请确保当前的音频路由为蓝牙或耳机。
   */
  abstract enableInEarMonitoring(
    enabled: boolean,
    includeAudioFilters: EarMonitoringFilterType
  ): number;

  /**
   * 设置耳返音量。
   *
   * @param volume 音量，取值范围为 [0,400]。
   *  0: 静音。
   *  100: （默认）原始音量。
   *  400: 原始音量的 4 倍，自带溢出保护。
   */
  abstract setInEarMonitoringVolume(volume: number): number;

  /**
   * 加载插件。
   *
   * 该方法用于将 SDK 外部插件（例如云市场插件和 SDK 拓展插件）添加到 SDK 中。 如果要加载多个插件，需要多次调用该方法。
   * 该方法仅适用于 Windows。
   *
   * @param path 插件的动态库路径和名称。例如： /library/libagora_segmentation_extension.dll 。
   * @param unloadAfterUse 是否在插件使用完毕后自动卸载： true : 当 IRtcEngine 销毁时自动卸载插件。 false : 不自动卸载插件，直到进程退出（推荐）。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract loadExtensionProvider(
    path: string,
    unloadAfterUse?: boolean
  ): number;

  /**
   * 设置插件服务商的属性。
   *
   * 你可以调用该方法设置插件服务商的属性，并根据服务商的类型初始化相关参数。 如果要设置多个插件服务商的属性，需要多次调用该方法。
   *
   * @param provider 提供插件的服务商名称。
   * @param key 插件属性的 Key。
   * @param value 插件属性 Key 对应的值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setExtensionProviderProperty(
    provider: string,
    key: string,
    value: string
  ): number;

  /**
   * 注册插件。
   *
   * 对于 SDK 外部的插件（例如云市场插件和 SDK 拓展插件），加载插件后，你需要调用该方法注册插件。SDK 内部插件（包含在 SDK 包中的插件）在初始化 IRtcEngine 后会自动加载并注册，无需调用该方法。
   *  如果要注册多个插件，需要多次调用该方法。
   *  不同插件在 SDK 中处理数据的顺序由插件的注册顺序决定。即先注册的插件会先处理数据。
   *
   * @param provider 提供插件的服务商名称。
   * @param extension 插件的名称。
   * @param type 插件的媒体源类型。详见 MediaSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -3: 该插件动态库没有被加载。声网推荐你检查该动态库是否存放在预期的位置，或该动态库名是否正确。
   */
  abstract registerExtension(
    provider: string,
    extension: string,
    type?: MediaSourceType
  ): number;

  /**
   * 设置摄像头采集配置。
   *
   * @param config 摄像头采集配置，详见 CameraCapturerConfiguration 。
   *
   * @returns
   * < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setCameraCapturerConfiguration(
    config: CameraCapturerConfiguration
  ): number;

  /**
   * 创建一个自定义的视频轨道。
   *
   * 当你需要在频道中发布自定义采集视频时，可参考以下步骤：
   *  调用该方法创建视频轨道并获得视频轨道 ID。
   *  调用 joinChannel 加入频道时，将 ChannelMediaOptions 中的 customVideoTrackId 设置为你想要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true 。
   *  调用 pushVideoFrame 将 videoTrackId 指定为步骤 2 中指定的视频轨道 ID，即可实现在频道内发布对应的自定义视频源。
   *
   * @returns
   * 方法调用成功，返回视频轨道 ID 作为该视频轨道的唯一标识。
   *  方法调用失败，返回 0xffffffff。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract createCustomVideoTrack(): number;

  /**
   * @ignore
   */
  abstract createCustomEncodedVideoTrack(senderOption: SenderOptions): number;

  /**
   * 销毁指定的视频轨道。
   *
   * @param videoTrackId 调用 createCustomVideoTrack 方法返回的视频轨道 ID。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract destroyCustomVideoTrack(videoTrackId: number): number;

  /**
   * @ignore
   */
  abstract destroyCustomEncodedVideoTrack(videoTrackId: number): number;

  /**
   * @ignore
   */
  abstract switchCamera(): number;

  /**
   * @ignore
   */
  abstract isCameraZoomSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraFaceDetectSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraTorchSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraFocusSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraAutoFocusFaceModeSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraZoomFactor(factor: number): number;

  /**
   * @ignore
   */
  abstract enableFaceDetection(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract getCameraMaxZoomFactor(): number;

  /**
   * @ignore
   */
  abstract setCameraFocusPositionInPreview(
    positionX: number,
    positionY: number
  ): number;

  /**
   * @ignore
   */
  abstract setCameraTorchOn(isOn: boolean): number;

  /**
   * @ignore
   */
  abstract setCameraAutoFocusFaceModeEnabled(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract isCameraExposurePositionSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraExposurePosition(
    positionXinView: number,
    positionYinView: number
  ): number;

  /**
   * @ignore
   */
  abstract isCameraExposureSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraExposureFactor(factor: number): number;

  /**
   * @ignore
   */
  abstract isCameraAutoExposureFaceModeSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraAutoExposureFaceModeEnabled(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract setCameraStabilizationMode(mode: CameraStabilizationMode): number;

  /**
   * @ignore
   */
  abstract setDefaultAudioRouteToSpeakerphone(
    defaultToSpeaker: boolean
  ): number;

  /**
   * @ignore
   */
  abstract setEnableSpeakerphone(speakerOn: boolean): number;

  /**
   * @ignore
   */
  abstract isSpeakerphoneEnabled(): boolean;

  /**
   * @ignore
   */
  abstract setRouteInCommunicationMode(route: number): number;

  /**
   * 查询摄像头是否支持人像锁定。
   *
   * 在调用 enableCameraCenterStage 开启人像锁定功能前，建议你先调用该方法查询当前设备是否支持人像锁定。 该方法仅适用于 macOS。
   *
   * @returns
   * true : 当前摄像头支持人像锁定。 false : 当前摄像头不支持人像锁定。
   */
  abstract isCameraCenterStageSupported(): boolean;

  /**
   * 开启或关闭人像锁定功能。
   *
   * 人像锁定功能默认关闭，你需要调用该方法开启。如果需要关闭该功能，则需重新调用该方法并将 enabled 设置为 false 。 该方法仅适用于 macOS。
   * 由于该功能对设备性能要求较高，你需要在以下类型或更高性能的设备上使用该功能：
   *  iPad：
   *  12.9 英寸 iPad Pro（第五代）
   *  11 英寸 iPad Pro（第三代）
   *  iPad（第九代）
   *  iPad mini（第六代）
   *  iPad Air（第五代）
   *  2020 年 M1 MacBook Pro 13 英寸 + iPhone 11（将 iPhone 作为 MacBook 的外接摄像头使用） 声网建议你在开启该功能前，先调用 isCameraCenterStageSupported 查询当前设备是否支持人像锁定。
   *
   * @param enabled 是否开启人像锁定功能： true ：开启人像锁定。 false ：关闭人像锁定。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableCameraCenterStage(enabled: boolean): number;

  /**
   * 获取可共享的屏幕和窗口对象列表。
   *
   * 屏幕共享或窗口共享前，你可以调用该方法获取可共享的屏幕和窗口的对象列表，方便用户通过列表中的缩略图选择共享某个显示器的屏幕或某个窗口。列表中包含窗口 ID 和屏幕 ID 等重要信息，你可以获取到 ID 后再调用 startScreenCaptureByWindowId 或 startScreenCaptureByDisplayId 开启共享。
   *
   * @param thumbSize 屏幕或窗口的缩略图的目标尺寸（宽高单位为像素）。SDK 会在保证原图不变形的前提下，缩放原图，使图片最长边和目标尺寸的最长边的长度一致。例如，原图宽高为 400 × 300， thumbSize 为 100 x 100，缩略图实际尺寸为 100 × 75。如果目标尺寸大于原图尺寸，缩略图即为原图，SDK 不进行缩放操作。
   * @param iconSize 程序所对应的图标的目标尺寸（宽高单位为像素）。SDK 会在保证原图不变形的前提下，缩放原图，使图片最长边和目标尺寸的最长边的长度一致。例如，原图宽高为 400 × 300， iconSize 为 100 × 100，图标实际尺寸为 100 × 75。如果目标尺寸大于原图尺寸，图标即为原图，SDK 不进行缩放操作。
   * @param includeScreen 除了窗口信息外，SDK 是否返回屏幕信息： true ：SDK 返回屏幕和窗口信息。 false ：SDK 仅返回窗口信息。
   *
   * @returns
   * ScreenCaptureSourceInfo 数组。
   */
  abstract getScreenCaptureSources(
    thumbSize: Size,
    iconSize: Size,
    includeScreen: boolean
  ): ScreenCaptureSourceInfo[];

  /**
   * @ignore
   */
  abstract setAudioSessionOperationRestriction(
    restriction: AudioSessionOperationRestriction
  ): number;

  /**
   * 开始采集指定屏幕的视频流。
   *
   * 采集一个屏幕或该屏幕部分区域的视频流。
   *
   * @param displayId 指定待共享的屏幕 ID。 对于 Windows 平台，如果你需要同时共享两个屏幕（主屏 + 副屏），可以在调用该方法时，将 displayId 设置为 -1 。
   * @param regionRect （可选）指定待共享区域相对于整个屏幕的位置。如需共享整个屏幕，则填 nil 。
   * @param captureParams 屏幕共享的参数配置。默认的视频编码分辨率为 1920 × 1080，即 2073600 像素。该像素值为计费标准。详见 ScreenCaptureParameters 。 屏幕共享流的视频属性只需通过该参数设置，与 setVideoEncoderConfiguration 无关。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract startScreenCaptureByDisplayId(
    displayId: number,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * 开始采集指定屏幕区域的视频流。
   *
   * 废弃 弃用： 该方法已废弃。请改用 startScreenCaptureByDisplayId 。如果你需要在设备外接其他显示屏的情况下开启屏幕共享，强烈建议你使用 startScreenCaptureByDisplayId 。 共享一个屏幕或该屏幕的部分区域。你需要在该方法中指定想要共享的屏幕区域。
   * 该方法在加入频道前后均可调用，区别如下：
   *  如果在加入频道前调用该方法，然后调用 joinChannel 加入频道，并设置 publishScreenTrack 或 publishSecondaryScreenTrack 为 true ，即可开始屏幕共享。
   *  如果在加入频道后调用该方法，然后调用 updateChannelMediaOptions 更新频道媒体选项，并设置 publishScreenTrack 或 publishSecondaryScreenTrack 为 true ，即可开始屏幕共享。 该方法仅适用于 Windows 平台。
   *
   * @param screenRect 指定待共享的屏幕相对于虚拟屏的位置。
   * @param regionRect 指定待共享区域相对于整个屏幕的位置。如不填，则表示共享整个屏幕。详见 Rectangle 。如果设置的共享区域超出了屏幕的边界，则只共享屏幕内的内容；如果将 width 或 height 设为 0 ，则共享整个屏幕。
   * @param captureParams 屏幕共享的编码参数配置。默认的分辨率为 1920 x 1080，即 2073600 像素。该像素值为计费标准。详见 ScreenCaptureParameters 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract startScreenCaptureByScreenRect(
    screenRect: Rectangle,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract getAudioDeviceInfo(): DeviceInfo;

  /**
   * 开始采集指定窗口的视频流。
   *
   * 共享一个窗口或该窗口的部分区域。用户需要在该方法中指定想要共享的窗口 ID。
   * 该方法支持共享通用 Windows 平台（UWP）应用窗口。声网使用最新版 SDK 对主流的 UWP 应用进行了测试，结果如下： 系统版本 软件名称 兼容版本 是否支持 Windows 10 Chrome 76.0.3809.100 否 Office Word 18.1903.1152.0 是 Office Excel 18.1903.1152.0 否 Office PPT 18.1903.1152.0 是 WPS Word 11.1.0.9145 是 WPS Excel 11.1.0.9145 是 WPS PPT 11.1.0.9145 是 系统自带的 Media Player 所有版本 是 Windows 8 Chrome 所有版本 是 Office Word 所有版本 是 Office Excel 所有版本 是 Office PPT 所有版本 是 WPS Word 11.1.0.9098 是 WPS Excel 11.1.0.9098 是 WPS PPT 11.1.0.9098 是 系统自带的 Media Player 所有版本 是 Windows 7 Chrome 73.0.3683.103 否 Office Word 所有版本 是 Office Excel 所有版本 是 Office PPT 所有版本 是 WPS Word 11.1.0.9098 否 WPS Excel 11.1.0.9098 否 WPS PPT 11.1.0.9098 是 系统自带的 Media Player 所有版本 否 该方法仅适用于 macOS 和 Windows 平台。
   * SDK 的窗口共享功能依赖于 WGC（Windows Graphics Capture）或 GDI（Graphics Device Interface）采集，WGC 在早于 Windows 10 2004 的系统上无法设置关闭鼠标采集，因此，当你在搭载早于 Windows 10 2004 系统的设备上进行窗口共享时，可能出现 captureMouseCursor(false) 不生效的现象。详见 ScreenCaptureParameters 。
   *
   * @param windowId 指定待共享的窗口 ID。
   * @param regionRect （可选）指定待共享区域相对于整个屏幕的位置。如不填，则表示共享整个屏幕。详见 Rectangle 。如果设置的共享区域超出了窗口的边界，则只共享窗口内的内容；如果宽或高为 0，则共享整个窗口。 Electron for 统信 OS SDK 暂不支持该参数。
   * @param captureParams 屏幕共享的参数配置。默认的分辨率为 1920 x 1080，即 2073600 像素。该像素值为计费标准。详见 ScreenCaptureParameters 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract startScreenCaptureByWindowId(
    windowId: number,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * 设置屏幕共享内容类型。
   *
   * SDK 会根据不同的内容类型，使用不同的算法对共享效果进行优化。如果不调用该方法，SDK 会将屏幕共享的内容默认为 ContentHintNone，即无指定的内容类型。 该方法在开始屏幕共享前后都能调用。
   *
   * @param contentHint 屏幕共享的内容类型。详见 VideoContentHint 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract setScreenCaptureContentHint(contentHint: VideoContentHint): number;

  /**
   * 更新屏幕采集的区域。
   *
   * 请在开启屏幕共享或窗口共享后调用该方法。
   *
   * @param regionRect 待共享区域相对于整个屏幕或窗口的位置，如不填，则表示共享整个屏幕或窗口。详见 Rectangle 。如果设置的共享区域超出了屏幕或窗口的边界，则只共享屏幕或窗口内的内容；如果将 width 或 height 设为 0，则共享整个屏幕或窗口。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract updateScreenCaptureRegion(regionRect: Rectangle): number;

  /**
   * 更新屏幕采集的参数配置。
   *
   * 请在开启屏幕共享或窗口共享后调用该方法。
   *
   * @param captureParams 屏幕共享的编码参数配置。详见 ScreenCaptureParameters 。 屏幕共享流的视频属性只需通过该参数设置，与 setVideoEncoderConfiguration 无关。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。
   *  -8：屏幕共享状态无效。可能因为你已经共享了其他屏幕或窗口。尝试调用 stopScreenCapture 停止当前共享，再重新开始共享屏幕。
   */
  abstract updateScreenCaptureParameters(
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract startScreenCapture(captureParams: ScreenCaptureParameters2): number;

  /**
   * @ignore
   */
  abstract updateScreenCapture(captureParams: ScreenCaptureParameters2): number;

  /**
   * @ignore
   */
  abstract queryScreenCaptureCapability(): number;

  /**
   * @ignore
   */
  abstract queryCameraFocalLengthCapability(): {
    focalLengthInfos: FocalLengthInfo[];
    size: number;
  };

  /**
   * @ignore
   */
  abstract setExternalMediaProjection(mediaProjection: any): number;

  /**
   * 设置屏幕共享的场景。
   *
   * 开启屏幕共享或窗口共享时，你可以调用该方法设置屏幕共享的场景，SDK 会根据你设置的场景调整共享画面的画质。 声网建议你在加入频道前调用该方法。
   *
   * @param screenScenario 屏幕共享的场景，详见 ScreenScenarioType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setScreenCaptureScenario(screenScenario: ScreenScenarioType): number;

  /**
   * 停止屏幕采集。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopScreenCapture(): number;

  /**
   * 获取通话 ID。
   *
   * 客户端在每次加入频道后会生成一个对应的 callId ，标识该客户端的此次通话。你可以调用该方法获取 callId 参数，然后在调用 rate 、 complain 等方法时填入。
   *
   * @returns
   * 方法调用成功则返回当前的通话 ID。
   *  方法调用失败则返回空字符串。
   */
  abstract getCallId(): string;

  /**
   * 给通话评分。
   *
   * 该方法需要在用户离开频道后调用。
   *
   * @param callId 通话 ID。你可以通过调用 getCallId 获取该参数。
   * @param rating 给通话的评分，最低 1 分，最高 5 分。
   * @param description 给通话的描述。长度应小于 800 字节。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 参数无效。
   */
  abstract rate(callId: string, rating: number, description: string): number;

  /**
   * 投诉通话质量。
   *
   * 该方法允许用户就通话质量进行投诉。需要在离开频道后调用。
   *
   * @param callId 通话 ID。你可以通过调用 getCallId 获取该参数。
   * @param description 通话的描述。长度应小于 800 字节。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 参数无效。
   *  -7: IRtcEngine 尚未初始化就调用方法。
   */
  abstract complain(callId: string, description: string): number;

  /**
   * 开始非转码推流。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 调用该方法，你可以向指定的旁路推流地址推送直播音视频流。该方法每次只能向一个地址推送媒体流，如果你需要向多个地址转码推流，则需多次调用该方法。
   * 调用该方法后，SDK 会在本地触发 onRtmpStreamingStateChanged 回调，报告推流的状态。
   *  请在加入频道后调用该方法。
   *  只有直播场景下的主播才能调用该方法。
   *  调用该方法推流失败后，如果你想要重新推流，那么请你务必先调用 stopRtmpStream ，再调用该方法重推，否则 SDK 会返回与上次推流失败时一样的错误码。
   *
   * @param url 旁路推流地址。格式为 RTMP 或 RTMPS。字符长度不能超过 1024 字节。不支持中文字符等特殊字符。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：URL 或转码属性参数错误，请检查你的 URL 或参数设置。
   *  -7：调用该方法前，未初始化 SDK。
   *  -19：该旁路推流 URL 已在使用中，请使用其他旁路推流 URL。
   */
  abstract startRtmpStreamWithoutTranscoding(url: string): number;

  /**
   * 开始旁路推流并设置转码属性。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 调用该方法，你可以向指定的旁路推流地址推送直播音视频流并设置转码属性。该方法每次只能向一个地址推送媒体流，如果你需要向多个地址转码推流，则需多次调用该方法。
   * 一次推流代表一个推流任务，最大并发任务数默认为 200，表示你在一个声网项目下最多同时运行 200 个推流任务，如需更高配额，请[联系技术支持](https://ticket.shengwang.cn/)。
   * 调用该方法后，SDK 会在本地触发 onRtmpStreamingStateChanged 回调，报告推流的状态。
   *  请在加入频道后调用该方法。
   *  只有直播场景下的主播才能调用该方法。
   *  调用该方法推流失败后，如果你想要重新推流，那么请你务必先调用 stopRtmpStream ，再调用该方法重推，否则 SDK 会返回与上次推流失败时一样的错误码。
   *
   * @param url 旁路推流地址。格式为 RTMP 或 RTMPS。字符长度不能超过 1024 字节。不支持中文字符等特殊字符。
   * @param transcoding 旁路推流的转码属性，详见 LiveTranscoding 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：URL 或转码属性参数错误，请检查你的 URL 或参数设置。
   *  -7：调用该方法前，未初始化 SDK。
   *  -19：该旁路推流 URL 已在使用中，请使用其他旁路推流 URL。
   */
  abstract startRtmpStreamWithTranscoding(
    url: string,
    transcoding: LiveTranscoding
  ): number;

  /**
   * 更新旁路推流转码属性。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 开启转码推流后，你可以根据场景需求，动态更新转码属性。转码属性更新后，SDK 会触发 onTranscodingUpdated 回调。
   *
   * @param transcoding 旁路推流的转码属性，详见 LiveTranscoding 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract updateRtmpTranscoding(transcoding: LiveTranscoding): number;

  /**
   * 开启本地合图。
   *
   * 调用该方法后，你可以在本地将多路视频流合并为一路视频流。例如：将摄像头采集的视频流、屏幕共享流、媒体播放器中的视频流、远端视频流、视频文件、图片等合并为一路视频流，然后将已合图的视频流发布到频道中。
   *  本地合图对 CPU 的消耗较高，声网建议你在性能较高的设备上开启该功能。
   *  如果你需要对本地采集的视频流进行合图，SDK 支持如下采集组合：
   *  在 Windows 平台上，最多支持 4 路摄像头采集的视频流 + 4 路屏幕共享流合图。
   *  在 macOS 平台上，最多支持 4 路摄像头采集的视频流 + 1 路屏幕共享流合图。
   *  在进行合图配置时，需确保采集人像的摄像头视频流在合图中的图层编号大于屏幕共享流的图层编号，否则人像会被屏幕共享覆盖、无法显示在最终合图的视频流中。
   *
   * @param config 本地合图的配置，详见 LocalTranscoderConfiguration 。
   *  参与本地合图的每一路视频流的分辨率最大为 4096 × 2160，如果超出此限制，会导致合图不生效。
   *  合图后的视频流最大分辨率为 4096 × 2160。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startLocalVideoTranscoder(
    config: LocalTranscoderConfiguration
  ): number;

  /**
   * 更新本地合图配置。
   *
   * 调用 startLocalVideoTranscoder 后，如果你希望更新本地合图配置，请调用该方法。 如果你想要更新用于合图的的本地采集视频源类型，比如：增加第二路摄像头或者屏幕采集的视频，需要在 startCameraCapture 或 startScreenCaptureBySourceType 之后调用该方法。
   *
   * @param config 本地合图的配置，详见 LocalTranscoderConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract updateLocalTranscoderConfiguration(
    config: LocalTranscoderConfiguration
  ): number;

  /**
   * 结束旁路推流。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 调用该方法，你可以结束指定的旁路推流地址上的直播。该方法每次只能结束一个推流地址上的直播，如果你需要结束多个推流地址的直播，则需多次调用该方法。
   * 调用该方法后，SDK 会在本地触发 onRtmpStreamingStateChanged 回调，报告推流的状态。
   *
   * @param url 旁路推流地址。格式为 RTMP 或 RTMPS。字符长度不能超过 1024 字节。不支持中文字符等特殊字符。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopRtmpStream(url: string): number;

  /**
   * 停止本地合图。
   *
   * 调用 startLocalVideoTranscoder 后，如果你希望停止本地合图，请调用该方法。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopLocalVideoTranscoder(): number;

  /**
   * 开启本地音频合流。
   *
   * 该方法支持在本地将多路音频流合并为一路音频流。例如：将本地麦克风采集的音频流、媒体播放器中的音频流、声卡采集的音频流、远端音频流等合并为一路音频流，然后将合流后的音频流发布到频道中。
   *  如果你要对本地采集的音频流进行合流，可以将 ChannelMediaOptions 中的 publishMixedAudioTrack 设置为 true ，则可将合流后的音频流发布到频道中。
   *  如果你要对远端音频流进行合流，需确保远端音频流已在频道内发布并且已被订阅。 为了保证音频质量，建议参与本地合流的音频流数量不超过 10 个。
   *
   * @param config 本地音频合流的配置。详见 LocalAudioMixerConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   */
  abstract startLocalAudioMixer(config: LocalAudioMixerConfiguration): number;

  /**
   * 更新本地音频合流的配置。
   *
   * 调用 startLocalAudioMixer 后，如果你希望更新本地音频合流的配置，请调用该方法。 为了保证音频质量，建议参与本地合流的音频流数量不超过 10 个。
   *
   * @param config 本地音频合流的配置。详见 LocalAudioMixerConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   */
  abstract updateLocalAudioMixerConfiguration(
    config: LocalAudioMixerConfiguration
  ): number;

  /**
   * 停止本地音频合流。
   *
   * 调用 startLocalAudioMixer 后，如果你希望停止本地音频合流，请调用该方法。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   */
  abstract stopLocalAudioMixer(): number;

  /**
   * 开始通过摄像头采集视频。
   *
   * 调用该方法可以通过指定 sourceType 同时开启多路摄像头采集。
   *
   * @param sourceType 视频源的类型。详见 VideoSourceType 。
   *  桌面端最多支持 4 路摄像头采集的视频流。
   * @param config 视频采集配置。详见 CameraCapturerConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startCameraCapture(
    sourceType: VideoSourceType,
    config: CameraCapturerConfiguration
  ): number;

  /**
   * 停止通过摄像头采集视频。
   *
   * 调用 startCameraCapture 开启一路或多路摄像头采集的视频流后，你可以调用该方法，通过设置 sourceType 停止一路或多路摄像头的视频采集。 如果你正在使用本地合图功能，调用该方法停止通过第一个摄像头采集视频，会造成本地合图中断。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopCameraCapture(sourceType: VideoSourceType): number;

  /**
   * 设置采集视频的旋转角度。
   *
   * 该方法仅适用于 Windows。
   *  该方法必须在 enableVideo 后调用，设置结果在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调返回本地视频状态为 LocalVideoStreamStateCapturing (1) 后。
   *  当视频采集设备不带重力感应功能时，你可以调用该方法手动调整采集到的视频画面的旋转角度。
   *
   * @param type 视频源类型，详见 VideoSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setCameraDeviceOrientation(
    type: VideoSourceType,
    orientation: VideoOrientation
  ): number;

  /**
   * @ignore
   */
  abstract setScreenCaptureOrientation(
    type: VideoSourceType,
    orientation: VideoOrientation
  ): number;

  /**
   * 获取当前网络连接状态。
   *
   * @returns
   * 当前网络连接状态。详见 ConnectionStateType 。
   */
  abstract getConnectionState(): ConnectionStateType;

  /**
   * 添加主回调事件。
   *
   * 接口类 IRtcEngineEventHandler 用于 SDK 向 App 发送回调事件通知，App 通过继承该接口类的方法获取 SDK 的事件通知。
   * 接口类的所有方法都有缺省（空）实现，App 可以根据需要只继承关心的事件。在回调方法中，App 不应该做耗时或者调用可能会引起阻塞的 API（如 sendStreamMessage ），
   * 否则可能影响 SDK 的运行。
   *
   * @param eventHandler 待添加的回调事件，详见 IRtcEngineEventHandler 。
   *
   * @returns
   * true ：方法调用成功。 false ：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerEventHandler(eventHandler: IRtcEngineEventHandler): boolean;

  /**
   * 删除指定的回调事件。
   *
   * 该方法用于删除已添加的所有回调事件。
   *
   * @param eventHandler 待删除的回调事件。详见 IRtcEngineEventHandler 。
   *
   * @returns
   * true : 方法调用成功。 false : 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterEventHandler(
    eventHandler: IRtcEngineEventHandler
  ): boolean;

  /**
   * @ignore
   */
  abstract setRemoteUserPriority(
    uid: number,
    userPriority: PriorityType
  ): number;

  /**
   * 开启或关闭内置加密。
   *
   * 用户离开频道后，SDK 会自动关闭加密。如需重新开启加密，你需要在用户再次加入频道前调用该方法。
   *  同一频道内的所有用户在调用该方法时，必须设置相同的加密模式和密钥。
   *  如果开启了内置加密，则不能使用旁路推流功能。
   *
   * @param enabled 是否开启内置加密： true : 开启内置加密。 false :（默认）关闭内置加密。
   * @param config 配置内置加密模式和密钥。详见 EncryptionConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败
   *  -2: 调用了无效的参数。需重新指定参数。
   *  -4: 设置的加密模式不正确或加载外部加密库失败。需检查枚举值是否正确或重新加载外部加密库。
   *  -7: SDK 尚未初始化。需在调用 API 之前已创建 IRtcEngine 对象并完成初始化。
   */
  abstract enableEncryption(enabled: boolean, config: EncryptionConfig): number;

  /**
   * 创建数据流。
   *
   * 在 IRtcEngine 生命周期内，每个用户最多只能创建 5 个数据流。离开频道时数据流会被销毁，如需使用需要重新创建数据流。
   *
   * @param config 数据流设置。详见 DataStreamConfig 。
   *
   * @returns
   * 创建的数据流的 ID：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract createDataStream(config: DataStreamConfig): number;

  /**
   * 发送数据流。
   *
   * 调用 createDataStream 后，你可以调用该方法向频道内所有用户发送数据流消息。
   * SDK 对该方法的实现进行了如下限制：
   *  频道内每个客户端最多可以同时拥有 5 个数据通道，所有数据通道共用的总发包码率限制为 30 KB/s。
   *  每个数据通道每秒最多能发送 60 个包，每个包最大为 1 KB。 成功调用该方法后，远端会触发 onStreamMessage 回调，远端用户可以在该回调中获取接收到的流消息；若调用失败，远端会触发 onStreamMessageError 回调。
   *  该方法需要在加入频道后、且调用 createDataStream 创建数据通道之后调用。
   *  该方法仅适用于主播用户。
   *
   * @param streamId 数据流 ID。可以通过 createDataStream 获取。
   * @param data 待发送的数据。
   * @param length 数据长度。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract sendStreamMessage(
    streamId: number,
    data: Uint8Array,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract sendRdtMessage(
    uid: number,
    type: RdtStreamType,
    data: string,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract sendMediaControlMessage(
    uid: number,
    data: string,
    length: number
  ): number;

  /**
   * 添加本地视频水印。
   *
   * 废弃 弃用：该方法已废弃，请改用 addVideoWatermarkWithConfig 。 该方法将一张 PNG 图片作为水印添加到本地发布的直播视频流上，同一直播频道中的用户、旁路直播观众和采集设备都能看到或采集到该水印图片。当前只支持在直播视频流中添加一个水印，后添加的水印会替换掉之前添加的水印。
   * 水印坐标和 setVideoEncoderConfiguration 方法中的设置有依赖关系：
   *  如果视频编码方向（ OrientationMode ）固定为横屏或自适应模式下的横屏，那么水印使用横屏坐标。
   *  如果视频编码方向（ OrientationMode ）固定为竖屏或自适应模式下的竖屏，那么水印使用竖屏坐标。
   *  设置水印坐标时，水印的图像区域不能超出 setVideoEncoderConfiguration 方法中设置的视频尺寸，否则超出部分将被裁剪。
   *  你需要在调用 enableVideo 方法之后再调用该方法。
   *  如果你只是在旁路推流时添加水印，你可以使用该方法或 startRtmpStreamWithTranscoding 方法设置水印。
   *  待添加水印图片必须是 PNG 格式。该方法支持所有像素格式的 PNG 图片：RGBA、RGB、Palette、Gray 和 Alpha_gray。
   *  如果待添加的 PNG 图片的尺寸与你在该方法中设置的尺寸不一致，SDK 会对 PNG 图片进行缩放或裁剪，以与设置相符。
   *  如果你已设置本地视频为镜像模式，那么此处的本地水印也为镜像。为避免本地用户看本地视频时的水印也被镜像，建议你不要对本地视频同时使用镜像和水印功能，请在应用层实现本地水印功能。
   *
   * @param watermarkUrl 待添加的水印图片的本地路径。该方法支持从本地绝对/相对路径添加水印图片。
   * @param options 待添加的水印图片的设置选项，详见 WatermarkOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract addVideoWatermark(
    watermarkUrl: string,
    options: WatermarkOptions
  ): number;

  /**
   * 从本地视频中移除水印图像。
   *
   * 自从 自 v4.6.2 版本新增。 该方法根据指定的唯一 ID，从本地视频流中移除之前添加的水印图像。
   *
   * @param id 要移除的水印的 ID。该值需与添加水印时使用的 ID 相同。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract removeVideoWatermark(id: string): number;

  /**
   * 删除已添加的视频水印。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract clearVideoWatermarks(): number;

  /**
   * @ignore
   */
  abstract pauseAudio(): number;

  /**
   * @ignore
   */
  abstract resumeAudio(): number;

  /**
   * 打开与 Web SDK 的互通（仅在直播场景适用）。
   *
   * 废弃 弃用: 该方法已废弃，SDK 自动开启与 Web SDK 的互通，无需调用该方法开启。 该方法打开或关闭与 Web SDK 的互通。如果有用户通过 Web SDK 加入频道，请确保调用该方法，否则 Web 端用户看 Native 端的画面会是黑屏。
   * 该方法仅在直播场景下适用，通信场景下默认互通是打开的。
   *
   * @param enabled 是否打开与 Web SDK 的互通： true : 打开互通。 false : (默认) 关闭互通。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableWebSdkInteroperability(enabled: boolean): number;

  /**
   * 发送自定义上报消息。
   *
   * 声网提供自定义数据上报和分析服务。该服务当前处于免费内测期。内测期提供的能力为 6 秒内最多上报 10 条数据，每条自定义数据不能超过 256 字节，每个字符串不能超过 100 字节。如需试用该服务，请[联系销售](https://www.shengwang.cn/contact-sales/)开通并商定自定义数据格式。
   */
  abstract sendCustomReportMessage(
    id: string,
    category: string,
    event: string,
    label: string,
    value: number
  ): number;

  /**
   * 注册媒体 metadata 观测器用于接收或发送 metadata。
   *
   * 你需要自行实现 IMetadataObserver 类并在本方法中指定 metadata 类型。本方法允许你为视频流添加同步的 metadata，用于多样化的直播互动，如发送购物链接、电子优惠券和在线测试。 请在 joinChannel 前调用该方法。
   *
   * @param observer metadata 观测器。详见 IMetadataObserver 。
   * @param type metadata 类型。目前仅支持 VideoMetadata 。详见 MetadataType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerMediaMetadataObserver(
    observer: IMetadataObserver,
    type: MetadataType
  ): number;

  /**
   * 取消注册媒体 metadata 观测器。
   *
   * @param observer metadata 观测器，详见 IMetadataObserver 。
   * @param type metadata 类型。目前仅支持 VideoMetadata 。详见 MetadataType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterMediaMetadataObserver(
    observer: IMetadataObserver,
    type: MetadataType
  ): number;

  /**
   * @ignore
   */
  abstract startAudioFrameDump(
    channelId: string,
    uid: number,
    location: string,
    uuid: string,
    passwd: string,
    durationMs: number,
    autoUpload: boolean
  ): number;

  /**
   * @ignore
   */
  abstract stopAudioFrameDump(
    channelId: string,
    uid: number,
    location: string
  ): number;

  /**
   * 设置是否开启 AI 降噪功能并设置降噪模式。
   *
   * 你可以调用开方法来开启 AI 降噪功能。该功能可以在保证语音质量的前提下，智能化检测并降低周围环境中多种稳态与非稳态噪声，使人声更加清晰。
   * 稳态噪声指在任何时间点上都具有相同频率的噪声，常见的稳态噪声有：
   *  电视机噪声
   *  空调噪声
   *  工厂机器噪声等 非稳态噪声是指随时间而快速变化的噪声，常见的非稳态噪声有：
   *  雷声
   *  爆炸声
   *  破裂声等
   *
   * @param enabled 是否开启 AI 降噪功能： true ：开启 AI 降噪功能。 false ：（默认）关闭 AI 降噪功能。
   * @param mode 降噪模式，详见 AudioAinsMode 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAINSMode(enabled: boolean, mode: AudioAinsMode): number;

  /**
   * 注册本地用户 User Account。
   *
   * 该方法为本地用户注册一个 User Account。注册成功后，该 User Account 即可标识该本地用户的身份，用户可以使用它加入频道。
   * 该方法为可选。如果你希望用户使用 User Account 加入频道，可参考下列任意一种方式实现：
   *  先调用 registerLocalUserAccount 方法注册 Account，再调用 joinChannelWithUserAccount 方法加入频道，可以缩短进入频道的时间。
   *  直接调用 joinChannelWithUserAccount 方法加入频道。
   *  请确保在该方法中设置的 userAccount 在频道中的唯一性。
   *  为保证通信质量，请确保频道内使用同一类型的数据标识用户身份。即同一频道内需要统一使用 UID 或 User Account。如果有用户通过 Web SDK 加入频道，请确保 Web 加入的用户也是同样类型。
   *
   * @param appId 你的项目在控制台注册的 App ID。
   * @param userAccount 用户 User Account。该参数用于标识实时音视频互动频道中的用户。你需要自行设置和管理用户的 User Account，并确保同一频道中每个用户的 User Account 是唯一的。该参数为必填，最大不超过 255 字节，不可填 null。以下为支持的字符集范围（共 89 个字符）：
   *  26 个小写英文字母 a-z
   *  26 个大写英文字母 A-Z
   *  10 个数字 0-9
   *  空格
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerLocalUserAccount(appId: string, userAccount: string): number;

  /**
   * 使用 User Account 和 Token 加入频道，并设置频道媒体选项。
   *
   * 调用该方法前，如果你未调用 registerLocalUserAccount 注册一个 User Account，调用该方法加入频道时，SDK 会自动为你创建一个 User Account。先调用 registerLocalUserAccount 方法注册 Account，再调用此方法加入频道，可以缩短进入频道的时间。
   * 用户成功加入频道后，默认订阅频道内所有其他用户的音频流和视频流，因此产生用量并影响计费。如果想取消订阅，可以通过调用相应的 mute 方法实现。 为保证通信质量，请确保频道内使用同一类型的数据标识用户身份。即同一频道内需要统一使用 UID 或 User Account。如果有用户通过 Web SDK 加入频道，请确保 Web 加入的用户也是同样类型。
   *  该方法仅支持用户一次加入一个频道。
   *  使用不同 App ID 的 App 不能互通。
   *  加入频道前，请确保用于生成 Token 的 App ID 和调用 initialize 方法初始化引擎时使用的是同一个 App ID，否则使用 Token 加入频道会失败。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   *  （推荐）如果你的项目开启了安全模式，即选择 APP ID + Token 为鉴权机制，则该参数为必填。
   *  如果你的项目仅开启调试模式，即选择 APP ID 为鉴权机制，则无需填入 Token 即可加入频道。成功加入频道 24 小时后会自动退出该频道。
   *  如果你需要同时加入多个频道或在频道间频繁切换，声网推荐你使用通配 Token 以避免每加入一个新的频道都需向服务端申请一个新的 Token，详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   * @param userAccount 用户 User Account。该参数用于标识实时音视频互动频道中的用户。你需要自行设置和管理用户的 User Account，并确保同一频道中每个用户的 User Account 是唯一的。 该参数为必填，最大不超过 255 字节，不可填 null。以下为支持的字符集范围（共 89 个字符）：
   *  26 个小写英文字母 a-z
   *  26 个大写英文字母 A-Z
   *  10 个数字 0-9
   *  空格
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   * @param options 频道媒体设置选项。详见 ChannelMediaOptions 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，使用了不合法的 Token， uid 参数未设置为整型，或 ChannelMediaOptions 成员值不合法。你需要填入有效的参数，重新加入频道。
   *  -3： IRtcEngine 对象初始化失败。你需要重新初始化 IRtcEngine 对象。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -8： IRtcEngine 对象内部状态错误。可能的原因是：调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。你需要在该方法前调用 stopEchoTest 。
   *  -17：加入频道被拒绝。可能的原因是用户已经在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。除收到 ConnectionStateDisconnected (1) 状态外，不要再次调用该方法加入频道。
   *  -102：频道名无效。你需要在 channelId 中填入有效的频道名，重新加入频道。
   *  -121：用户 ID 无效。你需要在 uid 中填入有效的用户 ID，重新加入频道。
   */
  abstract joinChannelWithUserAccount(
    token: string,
    channelId: string,
    userAccount: string,
    options?: ChannelMediaOptions
  ): number;

  /**
   * 使用 User Account 和 Token 加入频道，并设置频道媒体选项。
   *
   * 调用该方法前，如果你未调用 registerLocalUserAccount 注册一个 User Account，调用该方法加入频道时，SDK 会自动为你创建一个 User Account。先调用 registerLocalUserAccount 方法注册 Account，再调用此方法加入频道，可以缩短进入频道的时间。
   * 用户成功加入频道后，默认订阅频道内所有其他用户的音频流和视频流，因此产生用量并影响计费。如果想取消订阅，可以通过设置 options 参数或调用相应的 mute 方法实现。 为保证通信质量，请确保频道内使用同一类型的数据标识用户身份。即同一频道内需要统一使用 UID 或 User Account。如果有用户通过 Web SDK 加入频道，请确保 Web 加入的用户也是同样类型。
   *  该方法仅支持用户一次加入一个频道。
   *  使用不同 App ID 的 App 不能互通。
   *  加入频道前，请确保用于生成 Token 的 App ID 和调用 initialize 方法初始化引擎时使用的是同一个 App ID，否则使用 Token 加入频道会失败。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   *  （推荐）如果你的项目开启了安全模式，即选择 APP ID + Token 为鉴权机制，则该参数为必填。
   *  如果你的项目仅开启调试模式，即选择 APP ID 为鉴权机制，则无需填入 Token 即可加入频道。成功加入频道 24 小时后会自动退出该频道。
   *  如果你需要同时加入多个频道或在频道间频繁切换，声网推荐你使用通配 Token 以避免每加入一个新的频道都需向服务端申请一个新的 Token，详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   * @param userAccount 用户 User Account。该参数用于标识实时音视频互动频道中的用户。你需要自行设置和管理用户的 User Account，并确保同一频道中每个用户的 User Account 是唯一的。 该参数为必填，最大不超过 255 字节，不可填 null。以下为支持的字符集范围（共 89 个字符）：
   *  26 个小写英文字母 a-z
   *  26 个大写英文字母 A-Z
   *  10 个数字 0-9
   *  空格
   *  "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","
   * @param options 频道媒体设置选项。详见 ChannelMediaOptions 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：传入的参数无效。例如，使用了不合法的 Token， uid 参数未设置为整型，或 ChannelMediaOptions 成员值不合法。你需要填入有效的参数，重新加入频道。
   *  -3： IRtcEngine 对象初始化失败。你需要重新初始化 IRtcEngine 对象。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -8： IRtcEngine 对象内部状态错误。可能的原因是：调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。你需要在该方法前调用 stopEchoTest 。
   *  -17：加入频道被拒绝。可能的原因是用户已经在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。除收到 ConnectionStateDisconnected (1) 状态外，不要再次调用该方法加入频道。
   *  -102：频道名无效。你需要在 channelId 中填入有效的频道名，重新加入频道。
   *  -121：用户 ID 无效。你需要在 uid 中填入有效的用户 ID，重新加入频道。
   */
  abstract joinChannelWithUserAccountEx(
    token: string,
    channelId: string,
    userAccount: string,
    options: ChannelMediaOptions
  ): number;

  /**
   * 通过 User Account 获取用户信息。
   *
   * 远端用户加入频道后，SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的映射表，并在本地触发 onUserInfoUpdated 回调。收到回调后，调用该方法传入 User Account 来获取包含了指定用户 UID 的 UserInfo 对象。
   *
   * @param userAccount 用户 User Account。
   *
   * @returns
   * 方法调用成功，返回 UserInfo 对象。
   *  方法调用失败，则返回 null。
   */
  abstract getUserInfoByUserAccount(userAccount: string): UserInfo;

  /**
   * 通过 UID 获取用户信息。
   *
   * 远端用户加入频道后，SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的映射表，并在本地触发 onUserInfoUpdated 回调。收到回调后，调用该方法传入 UID 来获取包含了指定用户 User Account 的 UserInfo 对象。
   *
   * @param uid 用户 ID。
   *
   * @returns
   * 方法调用成功，返回 UserInfo 对象。
   *  方法调用失败，则返回 null。
   */
  abstract getUserInfoByUid(uid: number): UserInfo;

  /**
   * 开始或更新跨频道媒体流转发。
   *
   * 首次成功调用该方法将开始跨频道转发媒体流。如需将流转发到多个目标频道，或退出当前的转发频道，可以再次调用该方法添加或移除转发的目标频道。该功能最多支持将媒体流转发至 6 个目标频道。
   * 成功调用该方法后，SDK 会触发 onChannelMediaRelayStateChanged 回调，报告当前的跨频道媒体流转发状态。常见状态如下：
   *  如果 onChannelMediaRelayStateChanged 回调报告 RelayStateRunning (2) 和 RelayOk (0)， 则表示 SDK 开始在源频道和目标频道之间转发媒体流。
   *  如果 onChannelMediaRelayStateChanged 回调报告 RelayStateFailure (3)， 则表示跨频道媒体流转发出现异常。
   *  请在成功加入频道后调用该方法。
   *  在直播场景中，只有角色为主播的用户才能调用该方法。
   *  跨频道媒体流转发功能需要[联系技术支持](https://ticket.shengwang.cn/)开通。
   *  该功能不支持 String 型 UID。
   *
   * @param configuration 跨频道媒体流转发参数配置。详见 ChannelMediaRelayConfiguration 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 参数无效。
   *  -8：内部状态错误。可能因为用户角色不是主播。
   */
  abstract startOrUpdateChannelMediaRelay(
    configuration: ChannelMediaRelayConfiguration
  ): number;

  /**
   * 停止跨频道媒体流转发。一旦停止，主播会退出所有目标频道。
   *
   * 成功调用该方法后，SDK 会触发 onChannelMediaRelayStateChanged 回调。如果报告 RelayStateIdle (0) 和 RelayOk (0)，则表示已停止转发媒体流。 如果该方法调用不成功，SDK 会触发 onChannelMediaRelayStateChanged 回调，并报告状态码 RelayErrorServerNoResponse (2) 或 RelayErrorServerConnectionLost (8)。你可以调用 leaveChannel 方法离开频道，跨频道媒体流转发会自动停止。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有正在进行的跨频道媒体流转发。
   */
  abstract stopChannelMediaRelay(): number;

  /**
   * 暂停向所有目标频道转发媒体流。
   *
   * 开始跨频道转发媒体流后，如果你需要暂停向所有频道转发媒体流，可以调用该方法；暂停后，如果要恢复跨频道媒体流转发，可以调用 resumeAllChannelMediaRelay 方法。 该方法需要在调用 startOrUpdateChannelMediaRelay 开始跨频道媒体流转发后调用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有正在进行的跨频道媒体流转发。
   */
  abstract pauseAllChannelMediaRelay(): number;

  /**
   * 恢复向所有目标频道转发媒体流。
   *
   * 调用 pauseAllChannelMediaRelay 方法后，如果你需要恢复向所有目标频道转发媒体流，可以调用该方法。 该方法需要在 pauseAllChannelMediaRelay 后调用。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有暂停的跨频道媒体流转发。
   */
  abstract resumeAllChannelMediaRelay(): number;

  /**
   * 设置主播端直接向 CDN 推流时的音频编码属性。
   *
   * 废弃 自 v4.6.0 版本废弃。
   */
  abstract setDirectCdnStreamingAudioConfiguration(
    profile: AudioProfileType
  ): number;

  /**
   * 设置主播端直接向 CDN 推流时的视频编码属性。
   *
   * 废弃 自 v4.6.0 版本废弃。 该方法仅对摄像头采集、屏幕共享或自采集的视频有效。即对在 DirectCdnStreamingMediaOptions 中设置 publishCameraTrack 或 publishCustomVideoTrack 为 true 时所采集的视频有效。
   * 如果你设置的视频分辨率超出你的摄像头设备支持的范围，SDK 会根据你的设置进行自适应，取最接近、且长宽比与你设置的分辨率一致的值进行采集、编码、推流。你可以通过 onDirectCdnStreamingStats 回调了解推送的视频流的实际分辨率。
   *
   * @param config 视频编码参数配置。详见 VideoEncoderConfiguration 。 在直接向 CDN 推流时，SDK 目前仅支持将 OrientationMode 设为横屏模式（ OrientationFixedLandscape ）或竖屏模式（ OrientationFixedPortrait ）。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setDirectCdnStreamingVideoConfiguration(
    config: VideoEncoderConfiguration
  ): number;

  /**
   * 设置主播端开始直接向 CDN 推流。
   *
   * 废弃 自 v4.6.0 版本废弃。 SDK 不支持同一时间向同一个 URL 重复推流。
   * 媒体选项说明
   * SDK 不支持 publishCameraTrack 和 publishCustomVideoTrack 同时为 true ，也不支持 publishMicrophoneTrack 和 publishCustomAudioTrack 同时为 true 。你可以根据场景需求设置媒体选项 (DirectCdnStreamingMediaOptions)。示例如下：
   * 如果你想推送主播端自定义采集的音视频流，请将媒体选项进行如下设置： publishCustomAudioTrack 设为 true 并调用 pushAudioFrame publishCustomVideoTrack 设为 true 并调用 pushVideoFrame
   *  确保 publishCameraTrack 为 false (默认值)
   *  确保 publishMicrophoneTrack 为 false (默认值) 自 v4.2.0 起，SDK 支持推送纯音频流。你可以在 DirectCdnStreamingMediaOptions 中将 publishCustomAudioTrack 或者 publishMicrophoneTrack 设为 true ，并调用 pushAudioFrame 即可推送纯音频流。
   *
   * @param eventHandler 详见 onDirectCdnStreamingStateChanged 及 onDirectCdnStreamingStats 。
   * @param publishUrl CDN 推流 URL。
   * @param options 主播端的媒体选项。详见 DirectCdnStreamingMediaOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startDirectCdnStreaming(
    eventHandler: IDirectCdnStreamingEventHandler,
    publishUrl: string,
    options: DirectCdnStreamingMediaOptions
  ): number;

  /**
   * 设置主播端停止直接向 CDN 推流。
   *
   * 废弃 自 v4.6.0 版本废弃。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopDirectCdnStreaming(): number;

  /**
   * @ignore
   */
  abstract updateDirectCdnStreamingMediaOptions(
    options: DirectCdnStreamingMediaOptions
  ): number;

  /**
   * 开启虚拟节拍器。
   *
   * 废弃 自 v4.6.0 版本废弃。
   *  开启虚拟节拍器后，SDK 会从头开始播放指定的音频文件，并根据你在 AgoraRhythmPlayerConfig 中设置的 beatsPerMinute 控制每个文件的播放时长。例如，将 beatsPerMinute 设为 60 ，则 SDK 会 1 秒播放 1 个节拍。如果文件时长超过了节拍时长，则 SDK 只播放节拍时长部分的音频。
   *  虚拟节拍器的声音默认不会发布至远端，如果你希望远端用户听到虚拟节拍器的声音，你可以在调用该方法后，将 ChannelMediaOptions 中的 publishRhythmPlayerTrack 设为 true 。
   *
   * @param sound1 强拍文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 C:\music\audio.mp4 。支持的音频文件格式见 [RTC SDK 支持播放哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。
   * @param sound2 弱拍文件的绝对路径或 URL 地址，需精确到文件名及后缀。例如 C:\music\audio.mp4 。支持的音频文件格式见 [RTC SDK 支持播放哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。
   * @param config 节拍器配置。详见 AgoraRhythmPlayerConfig 。
   */
  abstract startRhythmPlayer(
    sound1: string,
    sound2: string,
    config: AgoraRhythmPlayerConfig
  ): number;

  /**
   * 关闭虚拟节拍器。
   *
   * 调用 startRhythmPlayer 后，你可以调用该方法关闭虚拟节拍器。
   */
  abstract stopRhythmPlayer(): number;

  /**
   * 配置虚拟节拍器。
   *
   * 废弃 自 v4.6.0 版本废弃。
   *  调用 startRhythmPlayer 后，你可以调用该方法重新配置虚拟节拍器。
   *  开启虚拟节拍器后，SDK 会从头开始播放指定的音频文件，并根据你在 AgoraRhythmPlayerConfig 中设置的 beatsPerMinute 控制每个文件的播放时长。例如，将 beatsPerMinute 设为 60 ，则 SDK 会 1 秒播放 1 个节拍。如果文件时长超过了节拍时长，则 SDK 只播放节拍时长部分的音频。
   *  虚拟节拍器的声音默认不会发布至远端，如果你希望远端用户听到虚拟节拍器的声音，你可以在调用该方法后，将 ChannelMediaOptions 中的 publishRhythmPlayerTrack 设为 true 。
   *
   * @param config 节拍器配置。详见 AgoraRhythmPlayerConfig 。
   */
  abstract configRhythmPlayer(config: AgoraRhythmPlayerConfig): number;

  /**
   * 对视频截图。
   *
   * 该方法用于对指定用户的视频流进行截图，生成一张 JPG 格式的图片，并保存至指定的路径。
   *  该方法是异步操作，调用返回时 SDK 并没有真正获取截图。
   *  该方法用于本地视频截图时，是对 ChannelMediaOptions 中指定发布的视频流进行截图。
   *  如果用户的视频经过前处理，例如，添加了水印或美颜，生成的截图会包含前处理效果。
   *
   * @param uid 用户 ID。如果要对本地用户的视频截图，则设为 0。
   * @param filePath 请确保目录存在且可写。 截图的本地保存路径，需精确到文件名及格式，例如：
   *  Windows: C:\Users\<user_name>\AppData\Local\Agora\<process_name>\example.jpg
   *  macOS: ～/Library/Logs/example.jpg
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract takeSnapshot(uid: number, filePath: string): number;

  /**
   * 开启/关闭本地截图上传。
   *
   * 开启本地截图上传后，SDK 会根据你在 ContentInspectConfig 中设置的模块类型和频率对本地用户发送的视频进行截图和上传。截图完成后，声网服务器会以 HTTPS 请求的形式，向你的服务器发送回调通知，并将所有截图发送至你指定的第三方云存储。
   *  调用该方法前，请确保已在声网控制台开通本地截图上传服务。
   *  视频审核模块选择声网自研插件截图上传（ ContentInspectSupervision ）时需集成本地截图上传动态库 libagora_content_inspect_extension.dll ，如果删除该动态库会导致无法正常开启本地截图上传功能。
   *
   * @param enabled 设置是否开启本地截图上传： true ：开启本地截图上传。 false ：关闭本地截图上传。
   * @param config 本地截图上传配置。详见 ContentInspectConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableContentInspect(
    enabled: boolean,
    config: ContentInspectConfig
  ): number;

  /**
   * 调节自定义音频采集轨道在远端播放的音量。
   *
   * 调用该方法设置音频在远端播放的音量后，如果你想重新调整音量，你可以再次调用该方法。 在调用该方法前，请确保你已经调用 createCustomAudioTrack 方法创建自定义音频采集轨道。
   *
   * @param trackId 音频轨道 ID。将该参数设置为调用 createCustomAudioTrack 方法返回的自定义音频轨道 ID。
   * @param volume 自定义采集音频的播放音量，取值范围为 [0,100]。0 表示静音，100 表示原始音量。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustCustomAudioPublishVolume(
    trackId: number,
    volume: number
  ): number;

  /**
   * 调节自定义音频采集轨道在本地播放的音量。
   *
   * 调用该方法设置音频在本地播放的音量后，如果你想重新调整音量，你可以再次调用该方法。 在调用该方法前，请确保你已经调用 createCustomAudioTrack 方法创建自定义音频采集轨道。
   *
   * @param trackId 音频轨道 ID。将该参数设置为调用 createCustomAudioTrack 方法返回的自定义音频轨道 ID。
   * @param volume 自定义采集音频的播放音量，取值范围为 [0,100]。0 表示静音，100 表示原始音量。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustCustomAudioPlayoutVolume(
    trackId: number,
    volume: number
  ): number;

  /**
   * 设置云代理服务。
   *
   * 当用户的网络访问受到防火墙限制时，你需要将声网提供的 IP 和端口号添加到防火墙白名单，然后调用该方法开启云代理，并通过 proxyType 参数设置云代理类型。
   * 成功连接云代理后，SDK 会触发 onConnectionStateChanged (ConnectionStateConnecting, ConnectionChangedSettingProxyServer) 回调。
   * 如果你想关闭已设置的 Force UDP 或 Force TCP 云代理，请调用 setCloudProxy(NoneProxy) 。
   * 如果你想更改已设置的云代理类型，请先调用 setCloudProxy(NoneProxy) ，再调用 setCloudProxy 并传入你期望的 proxyType 值。
   *  建议你在频道外调用该方法。
   *  如果用户处于内网防火墙环境下，使用 Force UDP 云代理时，旁路推流和跨频道媒体流转发功能不可用。
   *  使用 Force UDP 云代理时，调用 startAudioMixing 方法时无法播放 HTTP 协议的在线音频文件。旁路推流和跨频道媒体流转发功能会使用 TCP 协议的云代理。
   *
   * @param proxyType 云代理类型，详见 CloudProxyType 。
   * 该参数为必填参数，如果你不赋值，SDK 会报错。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2: 传入的参数无效。
   *  -7: SDK 尚未初始化。
   */
  abstract setCloudProxy(proxyType: CloudProxyType): number;

  /**
   * 配置与声网私有媒体服务器接入模块的连接。
   *
   * 成功部署声网私有媒体服务器并在内网终端集成 4.x RTC SDK 后，你可以调用该方法指定 Local Access Point，给 SDK 分配接入模块。 该方法仅在部署声网混合云方案后生效。你可以[联系销售](https://www.shengwang.cn/contact-sales/)了解和部署声网混合云。
   *
   * @param config Local Access Point 配置。详见 LocalAccessPointConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLocalAccessPoint(config: LocalAccessPointConfiguration): number;

  /**
   * 设置音频的高级选项。
   *
   * 如果你对音频处理有进阶需求，例如需要采集和发送立体声，可以调用该方法设置音频的高级选项。 你需要在 joinChannel 、 enableAudio 和 enableLocalAudio 前调用该方法。
   *
   * @param options 音频的高级选项。详见 AdvancedAudioOptions 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAdvancedAudioOptions(
    options: AdvancedAudioOptions,
    sourceType?: number
  ): number;

  /**
   * 设置发流端音画同步。
   *
   * 同一用户可能使用两个设备分别发送音频流和视频流，为保证接收端听到和看到的音频和视频的时间同步性，你可以在视频发送端调用该方法，并传入音频发送端的频道名、用户 ID。 SDK 会以发送的音频流的时间戳为基准进行自动调节发送的视频流，以保证即使在两个发送端的上行网络情况不一致（如分别使用 Wi-Fi 和 4G 网络）的情况下，也能让接收到的音视频具有时间同步性。 建议你在加入频道前调用该方法。
   *
   * @param channelId 标识音频发送端所在频道的频道名。
   * @param uid 音频发送端的用户 ID。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAVSyncSource(channelId: string, uid: number): number;

  /**
   * 设置是否开启垫片推流功能。
   *
   * 在发布视频流时，你可以调用该方法使用自定义图片来替代当前发布的视频流画面进行推流。
   * 开启该功能后，你可以通过 ImageTrackOptions 参数自定义垫片图片；在你关闭垫片功能之后，远端用户看到的依旧是当前你发布的视频流画面。
   *
   * @param enable 是否开启垫片推流： true ：开启垫片推流。 false ：（默认）关闭垫片推流。
   * @param options 垫片图片设置，详见 ImageTrackOptions 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableVideoImageSource(
    enable: boolean,
    options: ImageTrackOptions
  ): number;

  /**
   * 获取 SDK 当前的 Monotonic Time。
   *
   * Monotonic Time 是指一个单调递增的时间序列，它的值会随着时间的推移而增加。单位为毫秒。
   * 在自定义视频采集、自定义音频采集场景中，为确保音视频同步，声网建议你调用该方法获取 SDK 当前的 Monotonic Time 后，将该值传入采集的视频帧（ VideoFrame ）、音频帧（ AudioFrame ）的时间戳参数。
   *
   * @returns
   * ≥ 0: 方法调用成功，返回 SDK 当前的 Monotonic Time（毫秒）。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getCurrentMonotonicTimeInMs(): number;

  /**
   * 获取本地网络连接类型。
   *
   * 你可以在任何阶段通过该方法获取正在使用的网络类型。 该方法在加入频道前后均可调用。
   *
   * @returns
   * ≥ 0: 方法调用成功，返回本地网络连接类型。
   *  0：网络连接已断开。
   *  1：网络类型为 LAN。
   *  2：网络类型为 Wi-Fi（包含热点）。
   *  3：网络类型为 2G 移动网络。
   *  4：网络类型为 3G 移动网络。
   *  5：网络类型为 4G 移动网络。
   *  6：网络类型为 5G 移动网络。
   *  < 0: 方法调用失败，返回错误码。
   *  -1：网络连接类型未知。
   */
  abstract getNetworkType(): number;

  /**
   * SDK 的 JSON 配置信息，用于提供技术预览或特别定制功能。
   *
   * @param parameters JSON 字符串形式的参数。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setParameters(parameters: string): number;

  /**
   * 开启视频帧渲染数据打点。
   *
   * 成功调用该方法后，SDK 会以调用该方法的时刻作为起点，并通过 onVideoRenderingTracingResult 回调报告视频帧渲染的相关信息。
   *  如果你未调用该方法，SDK 默认以调用 joinChannel 加入频道的时刻为起始点开始打点，自动开始跟踪视频的渲染事件。你可以根据实际业务场景，在合适的时机调用该方法，进行自定义打点。
   *  离开当前频道后，SDK 会自动重置该时间点为下一次加入频道的时刻。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7: IRtcEngine 尚未初始化就调用方法。
   */
  abstract startMediaRenderingTracing(): number;

  /**
   * 开启音视频帧加速渲染。
   *
   * 成功调用该方法后，SDK 会开启加速出图和出声模式，可加快用户加入频道后的首帧出图与出声速度。 主播端和观众端都需调用该方法开启音视频帧加速渲染才可体验该功能。
   * 一旦成功调用该方法，只能通过调用 release 方法销毁 IRtcEngine 对象来取消加速渲染。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -7: IRtcEngine 尚未初始化就调用方法。
   */
  abstract enableInstantMediaRendering(): number;

  /**
   * 获取当前的 NTP (网络时间协议) 时间。
   *
   * 在实时合唱的场景中，特别是在各个接收端由于网络原因导致下行链路不一致的情况下，你可以调用该方法来获取当前的 NTP 时间作为基准时间，以对齐多个接收端的歌词和音乐，实现合唱同步。
   *
   * @returns
   * 当前 NTP 时间的 Unix 时间戳 (毫秒)。
   */
  abstract getNtpWallTimeInMs(): number;

  /**
   * 查询设备是否支持指定进阶功能。
   *
   * 查询当前设备能力是否满足虚拟背景、美颜等进阶功能的要求。
   *
   * @param type 进阶功能类型，详见 FeatureType 。
   *
   * @returns
   * true : 设备支持指定进阶功能。 false : 设备不支持指定进阶功能。
   */
  abstract isFeatureAvailableOnDevice(type: FeatureType): boolean;

  /**
   * @ignore
   */
  abstract sendAudioMetadata(metadata: string, length: number): number;

  /**
   * @ignore
   */
  abstract queryHDRCapability(videoModule: VideoModuleType): HdrCapability;

  /**
   * 向本地视频流添加水印图像。
   *
   * 自从 自 v4.6.2 版本新增。 你可以使用该方法在本地视频流中叠加水印图像，并通过 WatermarkConfig 设置水印在预览画面中的位置、大小和可见性。
   *
   * @param configs 水印配置。详见 WatermarkConfig 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract addVideoWatermarkWithConfig(configs: WatermarkConfig): number;

  /**
   * 开始屏幕采集并指定视频源。
   *
   * 该方法仅适用于 macOS 和 Windows 平台。
   *  如果调用该方法开始屏幕采集，则停止屏幕采集时需要调用 stopScreenCaptureBySourceType 。
   *  在 Windows 平台上，最多支持 4 路屏幕采集的视频流。
   *  在 macOS 平台上，最多支持 1 路屏幕采集的视频流。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。 在 macOS 平台上，仅支持将该参数设置为 VideoSourceScreen (2)。
   * @param config 屏幕采集配置。详见 ScreenCaptureConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startScreenCaptureBySourceType(
    sourceType: VideoSourceType,
    config: ScreenCaptureConfiguration
  ): number;

  /**
   * 停止对指定的视频源进行屏幕采集。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopScreenCaptureBySourceType(sourceType: VideoSourceType): number;

  /**
   * 销毁 IRtcEngine 对象。
   *
   * 该方法释放 SDK 使用的所有资源。有些 App 只在用户需要时才进行实时音视频通信，不需要时则将资源释放出来用于其他操作，该方法适用于此类情况。
   * 调用该方法后，你将无法再使用 SDK 的其它方法和回调。如需再次使用实时音视频通信功能， 你必须依次重新调用 createAgoraRtcEngine 和 initialize 方法创建一个新的 IRtcEngine 对象。
   *  该方法为同步调用。需要等待 IRtcEngine 资源释放后才能执行其他操作（例如：创建一个新的 IRtcEngine 对象），因此建议在子线程中调用该方法，避免主线程阻塞。
   *  不建议在 SDK 的回调中调用 release ，否则由于 SDK 要等待回调返回才能回收相关的对象资源，会造成死锁。
   *
   * @param sync 该方法是否为同步调用： true :该方法为同步调用。 false :该方法为异步调用。目前该方法仅支持同步调用，请不要将该参数设置为该值。
   */
  abstract release(sync?: boolean): void;

  /**
   * 开启视频预览。
   *
   * 该方法用于启动本地视频预览。
   *  本地预览默认开启镜像功能。
   *  在离开频道后，本地预览依然处于开启状态。你需要调用 stopPreview 关闭本地预览。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startPreviewWithoutSourceType(): number;

  /**
   * 获取 IAudioDeviceManager 对象，以管理音频设备。
   *
   * @returns
   * 一个 IAudioDeviceManager 对象。
   */
  abstract getAudioDeviceManager(): IAudioDeviceManager;

  /**
   * 获取 IVideoDeviceManager 对象，以管理视频设备。
   *
   * @returns
   * 一个 IVideoDeviceManager 对象。
   */
  abstract getVideoDeviceManager(): IVideoDeviceManager;

  /**
   * 获取 IMusicContentCenter 。
   *
   * @returns
   * 一个 IMusicContentCenter 对象。
   */
  abstract getMusicContentCenter(): IMusicContentCenter;

  /**
   * 获取 IMediaEngine 对象。
   *
   * 该方法需要在初始化 IRtcEngine 对象后调用。
   *
   * @returns
   * IMediaEngine 对象。
   */
  abstract getMediaEngine(): IMediaEngine;

  /**
   * 获取 ILocalSpatialAudioEngine 对象。
   *
   * 该方法需要在初始化 IRtcEngine 对象后调用。
   *
   * @returns
   * 一个 ILocalSpatialAudioEngine 对象。
   */
  abstract getLocalSpatialAudioEngine(): ILocalSpatialAudioEngine;

  /**
   * @ignore
   */
  abstract getH265Transcoder(): IH265Transcoder;

  /**
   * 发送媒体附属信息。
   *
   * 如果成功发送了媒体附属信息，接收端会收到 onMetadataReceived 回调。
   *
   * @param metadata 媒体附属信息。详见 Metadata 。
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract sendMetaData(
    metadata: Metadata,
    sourceType: VideoSourceType
  ): number;

  /**
   * 设置媒体附属信息的最大大小。
   *
   * 调用 registerMediaMetadataObserver 后，你可以调用本方法来设置媒体附属信息的最大大小。
   *
   * @param size 媒体附属信息的最大大小。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setMaxMetadataSize(size: number): number;

  /**
   * 销毁单个视频渲染器对象。
   *
   * @param view 需要销毁的 HTMLElement 对象。
   */
  abstract destroyRendererByView(view: any): void;

  /**
   * 销毁多个视频渲染器对象。
   *
   * @param sourceType 视频源的类型，详见 VideoSourceType 。
   * @param uid 远端用户 ID。
   */
  abstract destroyRendererByConfig(
    sourceType: VideoSourceType,
    channelId?: string,
    uid?: number
  ): void;

  /**
   * 取消注册音频编码数据观测器。
   *
   * @param observer 音频编码数据观测器。详见 IAudioEncodedFrameObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterAudioEncodedFrameObserver(
    observer: IAudioEncodedFrameObserver
  ): number;

  /**
   * 获取 Native SDK 的 C++ 句柄。
   *
   * 该方法获取 Native SDK 引擎 的 C++ 句柄，用于包括注册音视频回调在内的特殊场景。
   *
   * @returns
   * SDK 引擎的 Native 句柄。
   */
  abstract getNativeHandle(): number;

  /**
   * 在指定观测位置进行视频截图。
   *
   * 该方法用于对指定用户的视频流进行截图，生成一张 JPG 格式的图片，并保存至指定的路径。
   *  该方法是异步操作，调用返回时 SDK 并没有真正获取截图。
   *  该方法用于本地视频截图时，是对 ChannelMediaOptions 中指定发布的视频流进行截图。
   *
   * @param uid 用户 ID。如果要对本地用户的视频截图，则设为 0。
   * @param config 截图设置，详见 SnapshotConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract takeSnapshotWithConfig(uid: number, config: SnapshotConfig): number;
}

/**
 * @ignore
 */
export enum QualityReportFormatType {
  /**
   * @ignore
   */
  QualityReportJson = 0,
  /**
   * @ignore
   */
  QualityReportHtml = 1,
}

/**
 * 设备状态。
 */
export enum MediaDeviceStateType {
  /**
   * 0: 设备就绪。
   */
  MediaDeviceStateIdle = 0,
  /**
   * 1: 设备正在使用。
   */
  MediaDeviceStateActive = 1,
  /**
   * 2: 设备被禁用。
   */
  MediaDeviceStateDisabled = 2,
  /**
   * 3: 设备已插入。
   */
  MediaDeviceStatePluggedIn = 3,
  /**
   * 4: 没有此设备。
   */
  MediaDeviceStateNotPresent = 4,
  /**
   * 8: 设备被拔出。
   */
  MediaDeviceStateUnplugged = 8,
}

/**
 * @ignore
 */
export enum VideoProfileType {
  /**
   * @ignore
   */
  VideoProfileLandscape120p = 0,
  /**
   * @ignore
   */
  VideoProfileLandscape120p3 = 2,
  /**
   * @ignore
   */
  VideoProfileLandscape180p = 10,
  /**
   * @ignore
   */
  VideoProfileLandscape180p3 = 12,
  /**
   * @ignore
   */
  VideoProfileLandscape180p4 = 13,
  /**
   * @ignore
   */
  VideoProfileLandscape240p = 20,
  /**
   * @ignore
   */
  VideoProfileLandscape240p3 = 22,
  /**
   * @ignore
   */
  VideoProfileLandscape240p4 = 23,
  /**
   * @ignore
   */
  VideoProfileLandscape360p = 30,
  /**
   * @ignore
   */
  VideoProfileLandscape360p3 = 32,
  /**
   * @ignore
   */
  VideoProfileLandscape360p4 = 33,
  /**
   * @ignore
   */
  VideoProfileLandscape360p6 = 35,
  /**
   * @ignore
   */
  VideoProfileLandscape360p7 = 36,
  /**
   * @ignore
   */
  VideoProfileLandscape360p8 = 37,
  /**
   * @ignore
   */
  VideoProfileLandscape360p9 = 38,
  /**
   * @ignore
   */
  VideoProfileLandscape360p10 = 39,
  /**
   * @ignore
   */
  VideoProfileLandscape360p11 = 100,
  /**
   * @ignore
   */
  VideoProfileLandscape480p = 40,
  /**
   * @ignore
   */
  VideoProfileLandscape480p3 = 42,
  /**
   * @ignore
   */
  VideoProfileLandscape480p4 = 43,
  /**
   * @ignore
   */
  VideoProfileLandscape480p6 = 45,
  /**
   * @ignore
   */
  VideoProfileLandscape480p8 = 47,
  /**
   * @ignore
   */
  VideoProfileLandscape480p9 = 48,
  /**
   * @ignore
   */
  VideoProfileLandscape480p10 = 49,
  /**
   * @ignore
   */
  VideoProfileLandscape720p = 50,
  /**
   * @ignore
   */
  VideoProfileLandscape720p3 = 52,
  /**
   * @ignore
   */
  VideoProfileLandscape720p5 = 54,
  /**
   * @ignore
   */
  VideoProfileLandscape720p6 = 55,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p = 60,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p3 = 62,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p5 = 64,
  /**
   * @ignore
   */
  VideoProfileLandscape1440p = 66,
  /**
   * @ignore
   */
  VideoProfileLandscape1440p2 = 67,
  /**
   * @ignore
   */
  VideoProfileLandscape4k = 70,
  /**
   * @ignore
   */
  VideoProfileLandscape4k3 = 72,
  /**
   * @ignore
   */
  VideoProfilePortrait120p = 1000,
  /**
   * @ignore
   */
  VideoProfilePortrait120p3 = 1002,
  /**
   * @ignore
   */
  VideoProfilePortrait180p = 1010,
  /**
   * @ignore
   */
  VideoProfilePortrait180p3 = 1012,
  /**
   * @ignore
   */
  VideoProfilePortrait180p4 = 1013,
  /**
   * @ignore
   */
  VideoProfilePortrait240p = 1020,
  /**
   * @ignore
   */
  VideoProfilePortrait240p3 = 1022,
  /**
   * @ignore
   */
  VideoProfilePortrait240p4 = 1023,
  /**
   * @ignore
   */
  VideoProfilePortrait360p = 1030,
  /**
   * @ignore
   */
  VideoProfilePortrait360p3 = 1032,
  /**
   * @ignore
   */
  VideoProfilePortrait360p4 = 1033,
  /**
   * @ignore
   */
  VideoProfilePortrait360p6 = 1035,
  /**
   * @ignore
   */
  VideoProfilePortrait360p7 = 1036,
  /**
   * @ignore
   */
  VideoProfilePortrait360p8 = 1037,
  /**
   * @ignore
   */
  VideoProfilePortrait360p9 = 1038,
  /**
   * @ignore
   */
  VideoProfilePortrait360p10 = 1039,
  /**
   * @ignore
   */
  VideoProfilePortrait360p11 = 1100,
  /**
   * @ignore
   */
  VideoProfilePortrait480p = 1040,
  /**
   * @ignore
   */
  VideoProfilePortrait480p3 = 1042,
  /**
   * @ignore
   */
  VideoProfilePortrait480p4 = 1043,
  /**
   * @ignore
   */
  VideoProfilePortrait480p6 = 1045,
  /**
   * @ignore
   */
  VideoProfilePortrait480p8 = 1047,
  /**
   * @ignore
   */
  VideoProfilePortrait480p9 = 1048,
  /**
   * @ignore
   */
  VideoProfilePortrait480p10 = 1049,
  /**
   * @ignore
   */
  VideoProfilePortrait720p = 1050,
  /**
   * @ignore
   */
  VideoProfilePortrait720p3 = 1052,
  /**
   * @ignore
   */
  VideoProfilePortrait720p5 = 1054,
  /**
   * @ignore
   */
  VideoProfilePortrait720p6 = 1055,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p = 1060,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p3 = 1062,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p5 = 1064,
  /**
   * @ignore
   */
  VideoProfilePortrait1440p = 1066,
  /**
   * @ignore
   */
  VideoProfilePortrait1440p2 = 1067,
  /**
   * @ignore
   */
  VideoProfilePortrait4k = 1070,
  /**
   * @ignore
   */
  VideoProfilePortrait4k3 = 1072,
  /**
   * @ignore
   */
  VideoProfileDefault = 30,
}

/**
 * SDK 版本信息。
 */
export class SDKBuildInfo {
  /**
   * SDK 编译号。
   */
  build?: number;
  /**
   * SDK 版本号。格式为字符串，如 4.0.0。
   */
  version?: string;
}

/**
 * VideoDeviceInfo 类，包含视频设备的 ID 和设备名称。
 */
export class VideoDeviceInfo {
  /**
   * 设备 ID。
   */
  deviceId?: string;
  /**
   * 设备名称。
   */
  deviceName?: string;
}

/**
 * AudioDeviceInfo 类，包含音频设备的 ID 和设备名称。
 */
export class AudioDeviceInfo {
  /**
   * 设备 ID。
   */
  deviceId?: string;
  /**
   * 音频设备类型，如：built-in、USB、HDMI 等。
   */
  deviceTypeName?: string;
  /**
   * 设备名称。
   */
  deviceName?: string;
}
