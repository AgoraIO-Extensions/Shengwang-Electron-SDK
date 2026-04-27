import './extension/AgoraMediaBaseExtension';
import { EncodedVideoFrameInfo } from './AgoraBase';

/**
 * 插件上下文信息。
 */
export class ExtensionContext {
  /**
   * ExtensionContext 中报告的 uid 是否有效： true ： uid 有效。 false ： uid 无效。
   */
  isValid?: boolean;
  /**
   * 用户 ID。0 代表本地用户，大于 0 代表远端用户。
   */
  uid?: number;
  /**
   * 提供插件的服务商名称。
   */
  providerName?: string;
  /**
   * 插件的名称。
   */
  extensionName?: string;
}

/**
 * 视频源的类型。
 */
export enum VideoSourceType {
  /**
   * 0：（默认）视频源为第一个摄像头。
   */
  VideoSourceCameraPrimary = 0,
  /**
   * 0：（默认）视频源为第一个摄像头。
   */
  VideoSourceCamera = 0,
  /**
   * 1：视频源为第二个摄像头。
   */
  VideoSourceCameraSecondary = 1,
  /**
   * 2：视频源为第一个屏幕。
   */
  VideoSourceScreenPrimary = 2,
  /**
   * 2：视频源为第一个屏幕。
   */
  VideoSourceScreen = 2,
  /**
   * 3：视频源为第二个屏幕。
   */
  VideoSourceScreenSecondary = 3,
  /**
   * 4：自定义的视频源。
   */
  VideoSourceCustom = 4,
  /**
   * 5：视频源为媒体播放器。
   */
  VideoSourceMediaPlayer = 5,
  /**
   * 6：视频源为 PNG 图片。
   */
  VideoSourceRtcImagePng = 6,
  /**
   * 7：视频源为 JPEG 图片。
   */
  VideoSourceRtcImageJpeg = 7,
  /**
   * 8：视频源为 GIF 图片。
   */
  VideoSourceRtcImageGif = 8,
  /**
   * 9：视频源为网络获取的远端视频。
   */
  VideoSourceRemote = 9,
  /**
   * 10：转码后的视频源。
   */
  VideoSourceTranscoded = 10,
  /**
   * 11：视频源为第三个摄像头。
   */
  VideoSourceCameraThird = 11,
  /**
   * 12：视频源为第四个摄像头。
   */
  VideoSourceCameraFourth = 12,
  /**
   * 13：视频源为第三个屏幕。
   */
  VideoSourceScreenThird = 13,
  /**
   * 14：视频源为第四个屏幕。
   */
  VideoSourceScreenFourth = 14,
  /**
   * 15：视频源为语音驱动插件处理后的视频。
   */
  VideoSourceSpeechDriven = 15,
  /**
   * 100：未知的视频源。
   */
  VideoSourceUnknown = 100,
}

/**
 * 音频源类型。
 */
export enum AudioSourceType {
  /**
   * 0：（默认）麦克风。
   */
  AudioSourceMicrophone = 0,
  /**
   * 1：自定义采集到的音频流。
   */
  AudioSourceCustom = 1,
  /**
   * 2：媒体播放器。
   */
  AudioSourceMediaPlayer = 2,
  /**
   * 3：在屏幕共享时采集的系统音频流。
   */
  AudioSourceLoopbackRecording = 3,
  /**
   * @ignore
   */
  AudioSourceMixedStream = 4,
  /**
   * 5：指定远端用户的音频流。
   */
  AudioSourceRemoteUser = 5,
  /**
   * 6：当前频道内所有音频流的合流。
   */
  AudioSourceRemoteChannel = 6,
  /**
   * 100：未知的音频源。
   */
  AudioSourceUnknown = 100,
}

/**
 * 音频路由的类型。
 */
export enum AudioRoute {
  /**
   * -1: 使用默认的音频路由。
   */
  RouteDefault = -1,
  /**
   * 0: 音频路由为带麦克风的耳机。
   */
  RouteHeadset = 0,
  /**
   * 1: 音频路由为听筒。
   */
  RouteEarpiece = 1,
  /**
   * 2: 音频路由为不带麦克风的耳机。
   */
  RouteHeadsetnomic = 2,
  /**
   * 3: 音频路由为设备自带的扬声器。
   */
  RouteSpeakerphone = 3,
  /**
   * 4: 音频路由为外接的扬声器。（仅适用于 macOS）
   */
  RouteLoudspeaker = 4,
  /**
   * 5: 音频路由为使用 HFP 协议的蓝牙设备。
   */
  RouteBluetoothDeviceHfp = 5,
  /**
   * 6: 音频路由为 USB 外围设备。（仅适用于 macOS）
   */
  RouteUsb = 6,
  /**
   * 7: 音频路由为 HDMI 外围设备。（仅适用于 macOS）
   */
  RouteHdmi = 7,
  /**
   * 8: 音频路由为 DisplayPort 外围设备。（仅适用于 macOS）
   */
  RouteDisplayport = 8,
  /**
   * 9: 音频路由为 Apple AirPlay。（仅适用于 macOS）
   */
  RouteAirplay = 9,
  /**
   * 10: 音频路由为使用 A2DP 协议的蓝牙设备。
   */
  RouteBluetoothDeviceA2dp = 10,
}

/**
 * @ignore
 */
export enum BytesPerSample {
  /**
   * @ignore
   */
  TwoBytesPerSample = 2,
}

/**
 * @ignore
 */
export class AudioParameters {
  /**
   * @ignore
   */
  sample_rate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  frames_per_buffer?: number;
}

/**
 * 音频数据的使用模式。
 */
export enum RawAudioFrameOpModeType {
  /**
   * 0: (默认) 只读模式，用户仅获取 SDK 返回的原始数据，不作任何修改。例如: 若用户通过 SDK 采集数据，自己进行旁路推流，则可以选择该模式。
   */
  RawAudioFrameOpModeReadOnly = 0,
  /**
   * 2: 读写模式, 用户修改 SDK 返回的原始视频，并返回给 SDK 进行编码传输。例如: 若用户自己有音效处理模块，且想要根据实际需要对数据进行前处理(例如变声)，则可以选择该模式。
   */
  RawAudioFrameOpModeReadWrite = 2,
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
 * 媒体源类型。
 */
export enum MediaSourceType {
  /**
   * 0: 音频播放设备。
   */
  AudioPlayoutSource = 0,
  /**
   * 1: 音频采集设备。
   */
  AudioRecordingSource = 1,
  /**
   * 2: 第一个摄像头
   */
  PrimaryCameraSource = 2,
  /**
   * 3: 第二个摄像头。
   */
  SecondaryCameraSource = 3,
  /**
   * @ignore
   */
  PrimaryScreenSource = 4,
  /**
   * @ignore
   */
  SecondaryScreenSource = 5,
  /**
   * 6: 自定义采集的视频源。
   */
  CustomVideoSource = 6,
  /**
   * @ignore
   */
  MediaPlayerSource = 7,
  /**
   * @ignore
   */
  RtcImagePngSource = 8,
  /**
   * @ignore
   */
  RtcImageJpegSource = 9,
  /**
   * @ignore
   */
  RtcImageGifSource = 10,
  /**
   * @ignore
   */
  RemoteVideoSource = 11,
  /**
   * @ignore
   */
  TranscodedVideoSource = 12,
  /**
   * 13: 视频源为语音驱动插件处理后的视频。
   */
  SpeechDrivenVideoSource = 13,
  /**
   * 100: 未知媒体源。
   */
  UnknownMediaSource = 100,
}

/**
 * @ignore
 */
export class PacketOptions {
  /**
   * @ignore
   */
  timestamp?: number;
  /**
   * @ignore
   */
  audioLevelIndication?: number;
}

/**
 * @ignore
 */
export class AudioEncodedFrameInfo {
  /**
   * @ignore
   */
  sendTs?: number;
  /**
   * @ignore
   */
  codec?: number;
}

/**
 * 外部 PCM 格式音频帧的信息。
 */
export class AudioPcmFrame {
  /**
   * 音频帧的时间戳 (ms)。
   */
  capture_timestamp?: number;
  /**
   * 每个声道的采样点数。
   */
  samples_per_channel_?: number;
  /**
   * 音频采样率 (Hz)。
   */
  sample_rate_hz_?: number;
  /**
   * 音频声道数。
   */
  num_channels_?: number;
  /**
   * @ignore
   */
  audio_track_number_?: number;
  /**
   * 音频数据的字节数。
   */
  bytes_per_sample?: BytesPerSample;
  /**
   * 音频帧数据。
   */
  data_?: number[];
  /**
   * @ignore
   */
  is_stereo_?: boolean;
}

/**
 * 声道模式。
 */
export enum AudioDualMonoMode {
  /**
   * 0: 原始模式。
   */
  AudioDualMonoStereo = 0,
  /**
   * 1: 左声道模式。该模式用左声道的音频替换右声道的音频，即用户只能听到左声道的音频。
   */
  AudioDualMonoL = 1,
  /**
   * 2: 右声道模式。该模式用右声道的音频替换左声道的音频，即用户只能听到右声道的音频。
   */
  AudioDualMonoR = 2,
  /**
   * 3: 混合模式。该模式将左右声道的数据叠加，即用户能同时听到左声道和右声道的音频。
   */
  AudioDualMonoMix = 3,
}

/**
 * 视频像素格式。
 */
export enum VideoPixelFormat {
  /**
   * 0: 原始视频像素格式。
   */
  VideoPixelDefault = 0,
  /**
   * 1: I420 格式。
   */
  VideoPixelI420 = 1,
  /**
   * @ignore
   */
  VideoPixelBgra = 2,
  /**
   * @ignore
   */
  VideoPixelNv21 = 3,
  /**
   * 4: RGBA 格式。
   */
  VideoPixelRgba = 4,
  /**
   * @ignore
   */
  VideoPixelNv12 = 8,
  /**
   * @ignore
   */
  VideoTexture2d = 10,
  /**
   * @ignore
   */
  VideoTextureOes = 11,
  /**
   * @ignore
   */
  VideoCvpixelNv12 = 12,
  /**
   * @ignore
   */
  VideoCvpixelI420 = 13,
  /**
   * @ignore
   */
  VideoCvpixelBgra = 14,
  /**
   * @ignore
   */
  VideoCvpixelP010 = 15,
  /**
   * 16: I422 格式。
   */
  VideoPixelI422 = 16,
  /**
   * @ignore
   */
  VideoTextureId3d11texture2d = 17,
  /**
   * @ignore
   */
  VideoPixelI010 = 18,
}

/**
 * 视频显示模式。
 */
export enum RenderModeType {
  /**
   * 1: 视频尺寸等比缩放。优先保证视窗被填满。因视频尺寸与显示视窗尺寸不一致而多出的视频将被截掉。
   */
  RenderModeHidden = 1,
  /**
   * 2: 视频尺寸等比缩放。优先保证视频内容全部显示。因视频尺寸与显示视窗尺寸不一致造成的视窗未被填满的区域填充黑色。
   */
  RenderModeFit = 2,
  /**
   * @ignore
   */
  RenderModeAdaptive = 3,
}

/**
 * @ignore
 */
export enum CameraVideoSourceType {
  /**
   * @ignore
   */
  CameraSourceFront = 0,
  /**
   * @ignore
   */
  CameraSourceBack = 1,
  /**
   * @ignore
   */
  VideoSourceUnspecified = 2,
}

/**
 * @ignore
 */
export enum MetaInfoKey {
  /**
   * @ignore
   */
  KeyFaceCapture = 0,
}

/**
 * @ignore
 */
export abstract class IVideoFrameMetaInfo {
  /**
   * @ignore
   */
  abstract getMetaInfoStr(key: MetaInfoKey): string;
}

/**
 * @ignore
 */
export enum PrimaryID {
  /**
   * @ignore
   */
  PrimaryidBt709 = 1,
  /**
   * @ignore
   */
  PrimaryidUnspecified = 2,
  /**
   * @ignore
   */
  PrimaryidBt470m = 4,
  /**
   * @ignore
   */
  PrimaryidBt470bg = 5,
  /**
   * @ignore
   */
  PrimaryidSmpte170m = 6,
  /**
   * @ignore
   */
  PrimaryidSmpte240m = 7,
  /**
   * @ignore
   */
  PrimaryidFilm = 8,
  /**
   * @ignore
   */
  PrimaryidBt2020 = 9,
  /**
   * @ignore
   */
  PrimaryidSmptest428 = 10,
  /**
   * @ignore
   */
  PrimaryidSmptest431 = 11,
  /**
   * @ignore
   */
  PrimaryidSmptest432 = 12,
  /**
   * @ignore
   */
  PrimaryidJedecp22 = 22,
}

/**
 * @ignore
 */
export enum RangeID {
  /**
   * @ignore
   */
  RangeidInvalid = 0,
  /**
   * @ignore
   */
  RangeidLimited = 1,
  /**
   * @ignore
   */
  RangeidFull = 2,
  /**
   * @ignore
   */
  RangeidDerived = 3,
}

/**
 * @ignore
 */
export enum MatrixID {
  /**
   * @ignore
   */
  MatrixidRgb = 0,
  /**
   * @ignore
   */
  MatrixidBt709 = 1,
  /**
   * @ignore
   */
  MatrixidUnspecified = 2,
  /**
   * @ignore
   */
  MatrixidFcc = 4,
  /**
   * @ignore
   */
  MatrixidBt470bg = 5,
  /**
   * @ignore
   */
  MatrixidSmpte170m = 6,
  /**
   * @ignore
   */
  MatrixidSmpte240m = 7,
  /**
   * @ignore
   */
  MatrixidYcocg = 8,
  /**
   * @ignore
   */
  MatrixidBt2020Ncl = 9,
  /**
   * @ignore
   */
  MatrixidBt2020Cl = 10,
  /**
   * @ignore
   */
  MatrixidSmpte2085 = 11,
  /**
   * @ignore
   */
  MatrixidCdncls = 12,
  /**
   * @ignore
   */
  MatrixidCdcls = 13,
  /**
   * @ignore
   */
  MatrixidBt2100Ictcp = 14,
}

/**
 * @ignore
 */
export enum TransferID {
  /**
   * @ignore
   */
  TransferidBt709 = 1,
  /**
   * @ignore
   */
  TransferidUnspecified = 2,
  /**
   * @ignore
   */
  TransferidGamma22 = 4,
  /**
   * @ignore
   */
  TransferidGamma28 = 5,
  /**
   * @ignore
   */
  TransferidSmpte170m = 6,
  /**
   * @ignore
   */
  TransferidSmpte240m = 7,
  /**
   * @ignore
   */
  TransferidLinear = 8,
  /**
   * @ignore
   */
  TransferidLog = 9,
  /**
   * @ignore
   */
  TransferidLogSqrt = 10,
  /**
   * @ignore
   */
  TransferidIec6196624 = 11,
  /**
   * @ignore
   */
  TransferidBt1361Ecg = 12,
  /**
   * @ignore
   */
  TransferidIec6196621 = 13,
  /**
   * @ignore
   */
  TransferidBt202010 = 14,
  /**
   * @ignore
   */
  TransferidBt202012 = 15,
  /**
   * @ignore
   */
  TransferidSmptest2084 = 16,
  /**
   * @ignore
   */
  TransferidSmptest428 = 17,
  /**
   * @ignore
   */
  TransferidAribStdB67 = 18,
}

/**
 * @ignore
 */
export class ColorSpace {
  /**
   * @ignore
   */
  primaries?: PrimaryID;
  /**
   * @ignore
   */
  transfer?: TransferID;
  /**
   * @ignore
   */
  matrix?: MatrixID;
  /**
   * @ignore
   */
  range?: RangeID;
}

/**
 * @ignore
 */
export class Hdr10MetadataInfo {
  /**
   * @ignore
   */
  redPrimaryX?: number;
  /**
   * @ignore
   */
  redPrimaryY?: number;
  /**
   * @ignore
   */
  greenPrimaryX?: number;
  /**
   * @ignore
   */
  greenPrimaryY?: number;
  /**
   * @ignore
   */
  bluePrimaryX?: number;
  /**
   * @ignore
   */
  bluePrimaryY?: number;
  /**
   * @ignore
   */
  whitePointX?: number;
  /**
   * @ignore
   */
  whitePointY?: number;
  /**
   * @ignore
   */
  maxMasteringLuminance?: number;
  /**
   * @ignore
   */
  minMasteringLuminance?: number;
  /**
   * @ignore
   */
  maxContentLightLevel?: number;
  /**
   * @ignore
   */
  maxFrameAverageLightLevel?: number;
}

/**
 * alphaBuffer 和视频帧的相对位置。
 */
export enum AlphaStitchMode {
  /**
   * 0：（默认）仅视频帧，即 alphaBuffer 不和视频帧拼接。
   */
  NoAlphaStitch = 0,
  /**
   * 1： alphaBuffer 位于视频帧的上方。
   */
  AlphaStitchUp = 1,
  /**
   * 2： alphaBuffer 位于视频帧的下方。
   */
  AlphaStitchBelow = 2,
  /**
   * 3： alphaBuffer 位于视频帧的左侧。
   */
  AlphaStitchLeft = 3,
  /**
   * 4： alphaBuffer 位于视频帧的右侧。
   */
  AlphaStitchRight = 4,
}

/**
 * @ignore
 */
export enum EglContextType {
  /**
   * @ignore
   */
  EglContext10 = 0,
  /**
   * @ignore
   */
  EglContext14 = 1,
}

/**
 * 视频 buffer 类型。
 */
export enum VideoBufferType {
  /**
   * 1: 类型为原始数据。
   */
  VideoBufferRawData = 1,
  /**
   * 2: 类型为原始数据。
   */
  VideoBufferArray = 2,
  /**
   * 3: 类型为 Texture 。
   */
  VideoBufferTexture = 3,
}

/**
 * 外部视频帧。
 */
export class ExternalVideoFrame {
  /**
   * 视频类型。详见 VideoBufferType 。
   */
  type?: VideoBufferType;
  /**
   * 像素格式。详见 VideoPixelFormat 。
   */
  format?: VideoPixelFormat;
  /**
   * 视频缓冲区。
   */
  buffer?: Uint8Array;
  /**
   * 传入视频帧的行间距，单位为像素而不是字节。对于 Texture，该值指的是 Texture 的宽度。
   */
  stride?: number;
  /**
   * 传入视频帧的高度。
   */
  height?: number;
  /**
   * 该参数仅适用于原始视频数据。
   */
  cropLeft?: number;
  /**
   * 该参数仅适用于原始视频数据。
   */
  cropTop?: number;
  /**
   * 该参数仅适用于原始视频数据。
   */
  cropRight?: number;
  /**
   * 该参数仅适用于原始视频数据。
   */
  cropBottom?: number;
  /**
   * 原始数据相关字段。指定是否对传入的视频组做顺时针旋转操作，可选值为 0， 90， 180， 270。默认为 0。
   */
  rotation?: number;
  /**
   * 传入的视频帧的时间戳，以毫秒为单位。不正确的时间戳会导致丢帧或者音视频不同步。
   */
  timestamp?: number;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。指该视频帧的 Texture ID。
   */
  eglType?: EglContextType;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。为一个输入的 4x4 变换矩阵，典型值为一个单位矩阵。
   */
  textureId?: number;
  /**
   * @ignore
   */
  fenceObject?: number;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。为一个输入的 4x4 变换矩阵，典型值为一个单位矩阵。
   */
  matrix?: number[];
  /**
   * 该参数仅适用于 Texture 格式的视频数据。指 MetaData 的数据缓冲区，默认值为 NULL 。
   */
  metadataBuffer?: Uint8Array;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。指 MetaData 的大小，默认值为 0 。
   */
  metadataSize?: number;
  /**
   * 采用人像分割算法输出的 Alpha 通道数据。该数据跟视频帧的尺寸一致，每个像素点的取值范围为 [0,255]，其中 0 代表背景；255 代表前景（人像）。
   * 你可以通过设置该参数，实现将视频背景自渲染为各种效果，例如：透明、纯色、图片、视频等。 在自定义视频渲染场景下，需确保传入的视频帧和 alphaBuffer 均为 Full Range 类型；其他类型可能导致 Alpha 数据渲染不正常。
   */
  alphaBuffer?: Uint8Array;
  /**
   * 对于 BGRA 或 RGBA 格式的视频数据，你可以任选一种方式设置 Alpha 通道数据：
   *  通过将该参数设置为 true 自动填写。
   *  通过 alphaBuffer 参数设置。 该参数仅适用于 BGRA 或 RGBA 格式的视频数据。设置是否提取视频帧中的 Alpha 通道数据并自动填入到 alphaBuffer 中： true ：提取并填充 Alpha 通道数据。 false ：（默认）不提取填充 Alpha 通道数据。
   */
  fillAlphaBuffer?: boolean;
  /**
   * 当视频帧中包含 Alpha 通道数据时，设置 alphaBuffer 和视频帧的相对位置。详见 AlphaStitchMode 。
   */
  alphaStitchMode?: AlphaStitchMode;
  /**
   * 该参数仅适用于 Windows Texture 格式的视频数据。表示一个指向 ID3D11Texture2D 类型对象的指针，该类型对象被视频帧所使用。
   */
  d3d11Texture2d?: any;
  /**
   * 该参数仅适用于 Windows Texture 格式的视频数据。表示在 ID3D11Texture2D 数组中，被视频帧使用的某一个 ID3D11Texture2D 纹理对象的索引。
   */
  textureSliceIndex?: number;
  /**
   * @ignore
   */
  hdr10MetadataInfo?: Hdr10MetadataInfo;
  /**
   * 视频帧的色彩空间属性，默认情况下会应用 Full Range 和 BT.709 标准配置。你可以根据自定义采集、自定义渲染的业务需求进行自定义设置，详见 [VideoColorSpace](https://developer.mozilla.org/en-US/docs/Web/API/VideoColorSpace)。
   */
  colorSpace?: ColorSpace;
}

/**
 * 视频帧的属性设置。
 *
 * 缓冲区给出的是指向指针的指针，该接口不能修改缓冲区的指针，只能修改缓冲区的内容。
 */
export class VideoFrame {
  /**
   * 像素格式。详见 VideoPixelFormat 。
   */
  type?: VideoPixelFormat;
  /**
   * 视频像素宽度。
   */
  width?: number;
  /**
   * 视频像素高度。
   */
  height?: number;
  /**
   * 对 YUV 数据，表示 Y 缓冲区的行跨度；对 RGBA 数据，表示总的数据长度。 在处理视频数据时，需根据该参数处理每行像素数据之间的偏移量，否则可能导致图像失真。
   */
  yStride?: number;
  /**
   * 对 YUV 数据，表示 U 缓冲区的行跨度；对 RGBA 数据，值为 0。 在处理视频数据时，需根据该参数处理每行像素数据之间的偏移量，否则可能导致图像失真。
   */
  uStride?: number;
  /**
   * 对 YUV 数据，表示 V 缓冲区的行跨度；对 RGBA 数据，值为 0。 在处理视频数据时，需根据该参数处理每行像素数据之间的偏移量，否则可能导致图像失真。
   */
  vStride?: number;
  /**
   * 对 YUV 数据，表示 Y 缓冲区的指针；对 RGBA 数据，表示数据缓冲区。
   */
  yBuffer?: Uint8Array;
  /**
   * 对 YUV 数据，表示 U 缓冲区的指针；对 RGBA 数据，值为空。
   */
  uBuffer?: Uint8Array;
  /**
   * 对 YUV 数据，表示 V 缓冲区的指针；对 RGBA 数据，值为空。
   */
  vBuffer?: Uint8Array;
  /**
   * 在渲染视频前设置该帧的顺时针旋转角度，目前支持 0 度、90 度、180 度，和 270 度。
   */
  rotation?: number;
  /**
   * 视频帧被渲染时的 Unix 时间戳（毫秒）。该时间戳可用于指导渲染视频帧。该参数为必填。
   */
  renderTimeMs?: number;
  /**
   * 保留参数。
   */
  avsync_type?: number;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。指 MetaData 的数据缓冲区，默认值为 NULL 。
   */
  metadata_buffer?: Uint8Array;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。指 MetaData 的大小，默认值为 0 。
   */
  metadata_size?: number;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。Texture ID。
   */
  textureId?: number;
  /**
   * 该参数仅适用于 Texture 格式的视频数据。为一个输入的 4x4 变换矩阵，典型值为一个单位矩阵。
   */
  matrix?: number[];
  /**
   * 采用人像分割算法输出的 Alpha 通道数据。该数据跟视频帧的尺寸一致，每个像素点的取值范围为 [0,255]，其中 0 代表背景；255 代表前景（人像）。
   * 你可以通过设置该参数，实现将视频背景自渲染为各种效果，例如：透明、纯色、图片、视频等。
   *  在自定义视频渲染场景下，需确保传入的视频帧和 alphaBuffer 均为 Full Range 类型；其他类型可能导致 Alpha 数据渲染不正常。
   *  请务必确保 alphaBuffer 跟视频帧的尺寸 (width × height) 完全一致，否则可能会导致 App 崩溃。
   */
  alphaBuffer?: Uint8Array;
  /**
   * 当视频帧中包含 Alpha 通道数据时，设置 alphaBuffer 和视频帧的相对位置。详见 AlphaStitchMode 。
   */
  alphaStitchMode?: AlphaStitchMode;
  /**
   * @ignore
   */
  pixelBuffer?: Uint8Array;
  /**
   * 视频帧中的元信息。该参数需要[联系技术支持](https://ticket.shengwang.cn/)使用。
   */
  metaInfo?: IVideoFrameMetaInfo;
  /**
   * @ignore
   */
  hdr10MetadataInfo?: Hdr10MetadataInfo;
  /**
   * 视频帧的色彩空间属性，默认情况下会应用 Full Range 和 BT.709 标准配置。你可以根据自定义采集、自定义渲染的业务需求进行自定义设置，详见 [VideoColorSpace](https://developer.mozilla.org/en-US/docs/Web/API/VideoColorSpace)。
   */
  colorSpace?: ColorSpace;
}

/**
 * @ignore
 */
export enum MediaPlayerSourceType {
  /**
   * @ignore
   */
  MediaPlayerSourceDefault = 0,
  /**
   * @ignore
   */
  MediaPlayerSourceFullFeatured = 1,
  /**
   * @ignore
   */
  MediaPlayerSourceSimple = 2,
}

/**
 * 视频观测位置。
 */
export enum VideoModulePosition {
  /**
   * 1: 本地采集视频数据并且经过前处理之后的位置，对应 onCaptureVideoFrame 回调。此处观测到的视频具备视频前处理的效果，可通过开启美颜、虚拟背景或水印等方式验证。
   */
  PositionPostCapturer = 1 << 0,
  /**
   * 2: 接收远端发送的视频在渲染前的位置，对应 onRenderVideoFrame 回调。
   */
  PositionPreRenderer = 1 << 1,
  /**
   * 4: 本地视频编码前的位置，对应 onPreEncodeVideoFrame 回调。此处观测到的视频具备视频前处理和编码前处理的效果：
   *  对于视频前处理效果，可通过开启美颜、虚拟背景或水印等方式验证。
   *  对于编码前处理效果，可通过设置一个较低的帧率（例如 5 fps）验证。
   */
  PositionPreEncoder = 1 << 2,
  /**
   * 8: 本地采集视频之后、前处理之前的位置。此处观测到的视频不具备前处理的效果，可通过开启美颜、虚拟背景或设置水印等方式验证。
   */
  PositionPostCapturerOrigin = 1 << 3,
}

/**
 * @ignore
 */
export enum ContentInspectResult {
  /**
   * @ignore
   */
  ContentInspectNeutral = 1,
  /**
   * @ignore
   */
  ContentInspectSexy = 2,
  /**
   * @ignore
   */
  ContentInspectPorn = 3,
}

/**
 * 视频内容审核模块的类型。
 */
export enum ContentInspectType {
  /**
   * 0：（默认）该功能模块无实际功能。请不要将 type 设为该值。
   */
  ContentInspectInvalid = 0,
  /**
   * @ignore
   */
  ContentInspectModeration = 1,
  /**
   * 2：使用声网自研插件截图上传。SDK 会对视频流进行截图并上传。
   */
  ContentInspectSupervision = 2,
  /**
   * 3：使用云市场插件截图上传。SDK 会使用云市场视频审核插件对视频流进行截图并上传。
   */
  ContentInspectImageModeration = 3,
}

/**
 * ContentInspectModule 结构体，用于配置本地截图上传的频率。
 */
export class ContentInspectModule {
  /**
   * 功能模块的类型。详见 ContentInspectType 。
   */
  type?: ContentInspectType;
  /**
   * 本地截图上传的间隔，单位为秒，取值必须大于 0。默认值为 0，表示不进行截图上传。推荐值为 10 秒，你也可以根据业务需求自行调整。
   */
  interval?: number;
  /**
   * 视频观察器的位置。详见 VideoModulePosition 。
   */
  position?: VideoModulePosition;
}

/**
 * 本地截图上传配置。
 */
export class ContentInspectConfig {
  /**
   * 附加信息，最大长度为 1024 字节。
   * SDK 会将附加信息和截图一起上传至声网服务器；截图完成后，声网服务器会将附加信息随回调通知一起发送给你的服务器。
   */
  extraInfo?: string;
  /**
   * @ignore
   */
  serverConfig?: string;
  /**
   * 功能模块。详见 ContentInspectModule 。
   * 最多支持配置 32 个 ContentInspectModule 实例， MAX_CONTENT_INSPECT_MODULE_COUNT 的取值范围为 [1,32] 中的整数。 一个功能模块最多只能配置一个实例。目前仅支持截图上传功能。
   */
  modules?: ContentInspectModule[];
  /**
   * 功能模块数，即配置的 ContentInspectModule 实例的数量，必须与 modules 中配置的实例个数一致。最大值为 32。
   */
  moduleCount?: number;
}

/**
 * 视频截图设置。
 */
export class SnapshotConfig {
  /**
   * 请确保目录存在且可写。 截图的本地保存路径，需精确到文件名及格式，例如：
   *  Windows: C:\Users\<user_name>\AppData\Local\Agora\<process_name>\example.jpg
   *  macOS: ～/Library/Logs/example.jpg
   */
  filePath?: string;
  /**
   * 截图的视频帧在视频链路中的位置。详见 VideoModulePosition 。
   */
  position?: VideoModulePosition;
}

/**
 * 该类用于获取原始的 PCM 音频数据。
 *
 * 你可以继承这个类，实现 onFrame 回调来获得 PCM 音频数据。
 */
export interface IAudioPcmFrameSink {
  /**
   * 已获取音频帧回调。
   *
   * 注册音频数据观测器后，每次接收到一帧音频帧时，都会触发该回调，报告音频帧信息。
   *
   * @param frame 音频帧信息。详见 AudioPcmFrame 。
   */
  onFrame?(frame: AudioPcmFrame): void;
}

/**
 * 音频帧类型。
 */
export enum AudioFrameType {
  /**
   * 0: PCM 16
   */
  FrameTypePcm16 = 0,
}

/**
 * 原始音频数据。
 */
export class AudioFrame {
  /**
   * 音频帧类型，详见 AudioFrameType 。
   */
  type?: AudioFrameType;
  /**
   * 每个声道的采样点数。
   */
  samplesPerChannel?: number;
  /**
   * 每个采样点的字节数。对于 PCM 来说，一般使用 16 bit，即两个字节。
   */
  bytesPerSample?: BytesPerSample;
  /**
   * 声道数量(如果是立体声，数据是交叉的)。
   *  1: 单声道
   *  2: 双声道
   */
  channels?: number;
  /**
   * 每声道每秒的采样点数。
   */
  samplesPerSec?: number;
  /**
   * 声音数据缓存区（如果是立体声，数据是交叉存储的）。
   * 缓存区数据大小 buffer = samples × channels × bytesPerSample 。
   */
  buffer?: Uint8Array;
  /**
   * 外部音频帧的渲染时间戳。
   * 你可以使用该时间戳还原音频帧顺序；在有视频的场景中（包含使用外部视频源的场景），该参数可以用于实现音视频同步。
   */
  renderTimeMs?: number;
  /**
   * 保留参数。
   */
  avsync_type?: number;
  /**
   * @ignore
   */
  presentationMs?: number;
  /**
   * @ignore
   */
  audioTrackNumber?: number;
  /**
   * @ignore
   */
  rtpTimestamp?: number;
}

/**
 * @ignore
 */
export enum AudioFramePosition {
  /**
   * @ignore
   */
  AudioFramePositionNone = 0x0000,
  /**
   * @ignore
   */
  AudioFramePositionPlayback = 0x0001,
  /**
   * @ignore
   */
  AudioFramePositionRecord = 0x0002,
  /**
   * @ignore
   */
  AudioFramePositionMixed = 0x0004,
  /**
   * @ignore
   */
  AudioFramePositionBeforeMixing = 0x0008,
  /**
   * @ignore
   */
  AudioFramePositionEarMonitoring = 0x0010,
}

/**
 * 音频数据格式。
 *
 * SDK 会根据 AudioParams 设置以下回调中的音频数据格式： onRecordAudioFrame onPlaybackAudioFrame onMixedAudioFrame
 *  SDK 会通过 AudioParams 中的 samplesPerCall 、 sampleRate 和 channel 参数计算采样间隔，并根据该采样间隔触发 onRecordAudioFrame 、 onPlaybackAudioFrame 、 onMixedAudioFrame 和 onEarMonitoringAudioFrame 回调。
 *  采样间隔 = samplesPerCall /(sampleRate × channel)。
 *  请确保采样间隔不得小于 0.01 (s)。
 */
export class AudioParams {
  /**
   * 数据的采样率，单位为 Hz，取值如下：
   *  8000
   *  16000（默认值）
   *  32000
   *  44100
   *  48000
   */
  sample_rate?: number;
  /**
   * 数据的声道数，取值如下：
   *  1：单声道（默认值）
   *  2：双声道
   */
  channels?: number;
  /**
   * 数据的使用模式。详见 RawAudioFrameOpModeType 。
   */
  mode?: RawAudioFrameOpModeType;
  /**
   * 数据的采样点数，如旁路推流应用中通常为 1024。
   */
  samples_per_call?: number;
}

/**
 * 音频观测器。
 *
 * 你可以调用 registerAudioFrameObserver 注册或取消注册 IAudioFrameObserverBase 音频观测器。
 */
export interface IAudioFrameObserverBase {
  /**
   * 获得采集的原始音频数据。
   *
   * 为保证采集的音频数据格式符合预期，你可以在如下方法设置音频的数据格式：调用 setRecordingAudioFrameParameters 设置音频数据格式后，调用 registerAudioFrameObserver 注册音频观测器对象，SDK 会根据该方法中的参数计算采样间隔，并根据该采样间隔触发 onRecordAudioFrame 回调。
   *
   * @param channelId 频道 ID。
   * @param audioFrame 音频原始数据。详见 AudioFrame 。
   */
  onRecordAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * 获得播放的原始音频数据。
   *
   * 为保证播放的音频数据格式符合预期，你可以在如下方法设置音频的数据格式：调用 setPlaybackAudioFrameParameters 设置音频数据格式后，调用 registerAudioFrameObserver 注册音频观测器对象，SDK 会根据该方法中的参数计算采样间隔，并根据该采样间隔触发 onPlaybackAudioFrame 回调。
   *
   * @param channelId 频道 ID。
   * @param audioFrame 音频原始数据。详见 AudioFrame 。
   */
  onPlaybackAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * 获取采集和播放音频混音后的数据。
   *
   * 为保证采集和播放混音后的音频数据格式符合预期，你可以在如下方法设置音频的数据格式：调用 setMixedAudioFrameParameters 设置音频数据格式后，调用 registerAudioFrameObserver 注册音频观测器对象，SDK 会根据该方法中的参数计算采样间隔，并根据该采样间隔触发 onMixedAudioFrame 回调。
   *
   * @param channelId 频道 ID。
   * @param audioFrame 音频原始数据。详见 AudioFrame 。
   */
  onMixedAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * 获得耳返的原始音频数据。
   *
   * 为保证耳返的音频数据格式符合预期，你可以使用如下方法设置耳返音频数据格式：调用 setEarMonitoringAudioFrameParameters 设置音频数据格式后，调用 registerAudioFrameObserver 注册音频观测器对象，SDK 会根据该方法中的参数计算采样间隔，并根据该采样间隔触发 onEarMonitoringAudioFrame 回调。
   *
   * @param audioFrame 音频原始数据。详见 AudioFrame 。
   */
  onEarMonitoringAudioFrame?(audioFrame: AudioFrame): void;
}

/**
 * 音频观测器。
 *
 * 你可以调用 registerAudioFrameObserver 注册或取消注册 IAudioFrameObserver 音频观测器。
 */
export interface IAudioFrameObserver extends IAudioFrameObserverBase {
  /**
   * 获取所订阅的远端用户混音前的声音。
   *
   * 由于框架的限制，该回调不支持将处理后的音频数据发送回 SDK。
   *
   * @param channelId 频道 ID。
   * @param uid 订阅的远端用户的 ID。
   * @param audioFrame 音频原始数据。详见 AudioFrame 。
   */
  onPlaybackAudioFrameBeforeMixing?(
    channelId: string,
    uid: number,
    audioFrame: AudioFrame
  ): void;
}

/**
 * 音频频谱数据。
 */
export class AudioSpectrumData {
  /**
   * 音频频谱数据。声网将声音频率分为 256 个频域，通过该参数报告各频域的能量值，每个能量值的取值范围为 [-300,1]，单位为 dBFS。
   */
  audioSpectrumData?: number[];
  /**
   * 音频频谱数据长度为 256。
   */
  dataLength?: number;
}

/**
 * 远端用户的音频频谱信息。
 */
export class UserAudioSpectrumInfo {
  /**
   * 远端用户 ID。
   */
  uid?: number;
  /**
   * 远端用户的音频频谱数据。详见 AudioSpectrumData 。
   */
  spectrumData?: AudioSpectrumData;
}

/**
 * 音频频谱观测器。
 */
export interface IAudioSpectrumObserver {
  /**
   * 获取本地音频频谱。
   *
   * 成功调用 registerAudioSpectrumObserver 实现 IAudioSpectrumObserver 中的 onLocalAudioSpectrum 回调并调用 enableAudioSpectrumMonitor 开启音频频谱监测后，SDK 会按照你设置的时间间隔触发该回调，报告编码前的本地音频数据的频谱。
   *
   * @param data 本地用户的音频频谱数据。详见 AudioSpectrumData 。
   */
  onLocalAudioSpectrum?(data: AudioSpectrumData): void;

  /**
   * 获取远端音频频谱。
   *
   * 成功调用 registerAudioSpectrumObserver 实现 IAudioSpectrumObserver 中的 onRemoteAudioSpectrum 回调并调用 enableAudioSpectrumMonitor 开启音频频谱监测后，SDK 会按照你设置的时间间隔触发该回调，报告接收到的远端音频数据的频谱。
   *
   * @param spectrums 远端用户的音频频谱信息，详见 UserAudioSpectrumInfo 。 数组数量等于 SDK 监测到的远端用户数量，数组为空表示没有监测到远端用户的音频频谱。
   * @param spectrumNumber 远端用户的数量。
   */
  onRemoteAudioSpectrum?(
    spectrums: UserAudioSpectrumInfo[],
    spectrumNumber: number
  ): void;
}

/**
 * 用于接收编码后的视频图像的类。
 */
export interface IVideoEncodedFrameObserver {
  /**
   * 报告接收端已收到远端发送的待解码视频帧。
   *
   * 调用 setRemoteVideoSubscriptionOptions 方法并将 encodedFrameOnly 设置为 true 时，SDK 会在本地触发该回调，上报接收到的编码后视频帧信息。
   *
   * @param channelId 频道名。
   * @param uid 远端用户 ID。
   * @param imageBuffer 视频图像 buffer。
   * @param length 视频图像的数据长度。
   * @param videoEncodedFrameInfo 编码后的视频帧信息，详见 EncodedVideoFrameInfo 。
   */
  onEncodedVideoFrameReceived?(
    channelId: string,
    uid: string,
    imageBuffer: Uint8Array,
    length: number,
    videoEncodedFrameInfo: EncodedVideoFrameInfo
  ): void;
}

/**
 * 视频帧处理模式。
 */
export enum VideoFrameProcessMode {
  /**
   * 只读模式。
   * 只读模式下，你不修改视频帧，视频观测器相当于渲染器。
   */
  ProcessModeReadOnly = 0,
  /**
   * 读写模式。
   * 读写模式下，你会修改视频帧，视频观测器相当于视频 filter。
   */
  ProcessModeReadWrite = 1,
}

/**
 * 视频观测器。
 *
 * 你可以调用 registerVideoFrameObserver 注册或取消注册 IVideoFrameObserver 视频观测器。
 */
export interface IVideoFrameObserver {
  /**
   * 获取本地设备采集到的视频数据。
   *
   * 你可以在回调中获取本地设备采集到的原始视频数据。
   *  如果你获取到的视频数据类型为 RGBA，SDK 不支持对 Alpha 通道的值进行处理。
   *  建议你在修改 videoFrame 中的参数时，需确保修改后的参数跟视频帧缓冲区中的视频帧实际情况保持一致，否则可能导致本地预览画面和对端的视频画面出现非预期的旋转、失真等问题。
   *  建议你通过 C++ API 实现该回调。
   *  由于框架的限制，该回调不支持将处理后的视频数据发送回 SDK。
   *
   * @param sourceType 视频源类型，可能的视频源包括：摄像头、屏幕或媒体播放器。详见 VideoSourceType 。
   * @param videoFrame 视频帧数据。详见 VideoFrame 。 通过该回调获取的视频帧数据格式默认值如下：
   *  macOS：I420
   *  Windows：YUV420
   */
  onCaptureVideoFrame?(
    sourceType: VideoSourceType,
    videoFrame: VideoFrame
  ): void;

  /**
   * 获取本地视频编码前的视频数据。
   *
   * 成功注册视频数据观测器后，SDK 会在捕捉到每个视频帧时触发该回调。你可以在回调中获取编码前的视频数据，然后根据场景需要，对视频数据进行处理。
   * 完成处理后，你可以在该回调中，传入处理后的视频数据将其发送回 SDK。
   *  建议你通过 C++ API 实现该回调。
   *  由于框架的限制，该回调不支持将处理后的视频数据发送回 SDK。
   *  此处获取的视频数据已经过前处理，如裁剪、旋转和美颜等。
   *  建议你在修改 videoFrame 中的参数时，需确保修改后的参数跟视频帧缓冲区中的视频帧实际情况保持一致，否则可能导致本地预览画面和对端的视频画面出现非预期的旋转、失真等问题。
   *
   * @param sourceType 视频源的类型。详见 VideoSourceType 。
   * @param videoFrame 视频帧数据。详见 VideoFrame 。 通过该回调获取的视频帧数据格式默认值如下：
   *  macOS：I420
   *  Windows：YUV420
   */
  onPreEncodeVideoFrame?(
    sourceType: VideoSourceType,
    videoFrame: VideoFrame
  ): void;

  /**
   * @ignore
   */
  onMediaPlayerVideoFrame?(videoFrame: VideoFrame, mediaPlayerId: number): void;

  /**
   * 获取远端发送的视频数据。
   *
   * 成功注册视频数据观测器后，SDK 会在捕捉到每个视频帧时触发该回调。你可以在回调中获取远端发送的渲染前的视频数据，然后根据场景需要，对视频数据进行处理。
   *  如果你获取到的视频数据类型为 RGBA，SDK 不支持对 Alpha 通道的值进行处理。
   *  建议你通过 C++ API 实现该回调。
   *  由于框架的限制，该回调不支持将处理后的视频数据发送回 SDK。
   *  建议你在修改 videoFrame 中的参数时，需确保修改后的参数跟视频帧缓冲区中的视频帧实际情况保持一致，否则可能导致本地预览画面和对端的视频画面出现非预期的旋转、失真等问题。
   *
   * @param channelId 频道 ID。
   * @param remoteUid 发送该帧视频的远端用户 ID。
   * @param videoFrame 视频帧数据。详见 VideoFrame 。 通过该回调获取的视频帧数据格式默认值如下：
   *  macOS：I420
   *  Windows：YUV420
   */
  onRenderVideoFrame?(
    channelId: string,
    remoteUid: number,
    videoFrame: VideoFrame
  ): void;

  /**
   * @ignore
   */
  onTranscodedVideoFrame?(videoFrame: VideoFrame): void;
}

/**
 * 外部视频帧编码类型。
 */
export enum ExternalVideoSourceType {
  /**
   * 0：未编码视频帧。
   */
  VideoFrame = 0,
  /**
   * 1：已编码视频帧。
   */
  EncodedVideoFrame = 1,
}

/**
 * 录制文件的格式。
 */
export enum MediaRecorderContainerFormat {
  /**
   * 1:（默认）MP4。
   */
  FormatMp4 = 1,
}

/**
 * 录制内容。
 */
export enum MediaRecorderStreamType {
  /**
   * 1: 仅音频。
   */
  StreamTypeAudio = 0x01,
  /**
   * 2: 仅视频。
   */
  StreamTypeVideo = 0x02,
  /**
   * 3: （默认）音视频。
   */
  StreamTypeBoth = 0x01 | 0x02,
}

/**
 * 当前的录制状态。
 */
export enum RecorderState {
  /**
   * -1: 音视频流录制出错，错误原因详见 RecorderReasonCode 。
   */
  RecorderStateError = -1,
  /**
   * 2: 音视频流录制开始。
   */
  RecorderStateStart = 2,
  /**
   * 3: 音视频流录制停止。
   */
  RecorderStateStop = 3,
}

/**
 * 录制状态出错的原因。
 */
export enum RecorderReasonCode {
  /**
   * 0: 一切正常。
   */
  RecorderReasonNone = 0,
  /**
   * @ignore
   */
  RecorderReasonWriteFailed = 1,
  /**
   * @ignore
   */
  RecorderReasonNoStream = 2,
  /**
   * @ignore
   */
  RecorderReasonOverMaxDuration = 3,
  /**
   * @ignore
   */
  RecorderReasonConfigChanged = 4,
  /**
   * @ignore
   */
  RecorderReasonFailed = 5,
  /**
   * @ignore
   */
  RecorderReasonInitializeFailed = 6,
  /**
   * @ignore
   */
  RecorderReasonSetupVideoTrackFailed = 7,
  /**
   * @ignore
   */
  RecorderReasonSetupAudioTrackFailed = 8,
  /**
   * @ignore
   */
  RecorderReasonStartFailed = 9,
  /**
   * @ignore
   */
  RecorderReasonInvalidState = 10,
}

/**
 * @ignore
 */
export enum AudioRecordingContentType {
  /**
   * @ignore
   */
  LocalAudioOnly = 1,
  /**
   * @ignore
   */
  RemoteAudiosOnly = 2,
  /**
   * @ignore
   */
  MixedAllAudios = 3,
  /**
   * @ignore
   */
  AllAudioStreams = 4,
  /**
   * @ignore
   */
  LocalUpstreamMixedAudio = 5,
}

/**
 * @ignore
 */
export enum MediaRecorderMode {
  /**
   * @ignore
   */
  RecorderModeNonTranscoded = 0,
  /**
   * @ignore
   */
  RecorderModeTranscoded = 1,
}

/**
 * @ignore
 */
export class AudioConfiguration {
  /**
   * @ignore
   */
  sampleRate?: number;
  /**
   * @ignore
   */
  audioRecordingType?: AudioRecordingContentType;
  /**
   * @ignore
   */
  recordingChannel?: number;
}

/**
 * 音视频流录制配置。
 */
export class MediaRecorderConfiguration {
  /**
   * 请确保你指定的路径存在并且可写。 录制文件在本地保存的绝对路径，需精确到文件名及格式。例如：
   *  Windows: C:\Users\<user_name>\AppData\Local\Agora\<process_name>\example.mp4
   *  macOS: /Library/Logs/example.mp4
   */
  storagePath?: string;
  /**
   * 录制文件的格式。详见 MediaRecorderContainerFormat 。
   */
  containerFormat?: MediaRecorderContainerFormat;
  /**
   * 录制内容。详见 MediaRecorderStreamType 。
   */
  streamType?: MediaRecorderStreamType;
  /**
   * 最大录制时长，单位为毫秒，默认值为 120000。
   */
  maxDurationMs?: number;
  /**
   * 录制信息更新间隔，单位为毫秒，取值范围为 [1000,10000]。SDK 会根据该值的设置触发 onRecorderInfoUpdated 回调，报告更新后的录制信息。
   */
  recorderInfoUpdateInterval?: number;
  /**
   * 录制视频的宽度 (px)，宽 × 高的最大值不应超过 3840 × 2160。
   * 该参数仅在 调用 createMediaRecorder 且将 RecorderStreamInfo 中的 type 设置为 Preview 时需要传入。
   */
  width?: number;
  /**
   * 录制视频的高度 (px)，宽 × 高的最大值不超过 3840 × 2160。
   * 该参数仅在 调用 createMediaRecorder 且将 RecorderStreamInfo 中的 type 设置为 Preview 时需要传入。
   */
  height?: number;
  /**
   * 录制视频的帧率，最高值不超过 30，如： 5、10、15、24、30 等。
   * 该参数仅在 调用 createMediaRecorder 且将 RecorderStreamInfo 中的 type 设置为 Preview 时需要传入。
   */
  fps?: number;
  /**
   * 录制视频源的类型。详见 VideoSourceType 。
   * 该参数仅在 调用 createMediaRecorder 且将 RecorderStreamInfo 中的 type 设置为 Preview 时需要传入。
   */
  videoSourceType?: VideoSourceType;
  /**
   * @ignore
   */
  recordingMode?: MediaRecorderMode;
  /**
   * @ignore
   */
  audioConfiguration?: AudioConfiguration;
}

/**
 * 人脸信息观测器。
 *
 * 你可以调用 registerFaceInfoObserver 注册 IFaceInfoObserver 观测器。
 */
export interface IFaceInfoObserver {
  /**
   * 报告已获取语音驱动插件处理后的人脸信息。
   *
   * @param outFaceInfo 输出参数，语音驱动插件处理后的人脸信息 JSON 字符串，包含以下字段：
   *  faces：Object 序列。包含识别到的人脸信息，每一张人脸对应一个 Object。
   *  blendshapes：Object。面捕系数集，命名符合 ARkit 标准，内部的键值对为每一个 blendshape 系数。blendshape 系数为浮点，取值范围为 [0.0,1.0]。
   *  rotation：Object 序列。头部旋转量，包含以下三个键值对，取值为浮点数，范围为 [-180.0,180.0]：
   *  pitch：头部俯仰角度。低头为正值，抬头为负值。
   *  yaw：头部水平旋转角度。左转为正值，右转为负值。
   *  roll：头部垂直旋转角度。右倾为正值，左倾为负值。
   *  timestamp：String。输出结果的时间戳，单位为毫秒。 以下为 JSON 示例： { "faces":[{ "blendshapes":{ "eyeBlinkLeft":0.9, "eyeLookDownLeft":0.0, "eyeLookInLeft":0.0, "eyeLookOutLeft":0.0, "eyeLookUpLeft":0.0, "eyeSquintLeft":0.0, "eyeWideLeft":0.0, "eyeBlinkRight":0.0, "eyeLookDownRight":0.0, "eyeLookInRight":0.0, "eyeLookOutRight":0.0, "eyeLookUpRight":0.0, "eyeSquintRight":0.0, "eyeWideRight":0.0, "jawForward":0.0, "jawLeft":0.0, "jawRight":0.0, "jawOpen":0.0, "mouthClose":0.0, "mouthFunnel":0.0, "mouthPucker":0.0, "mouthLeft":0.0, "mouthRight":0.0, "mouthSmileLeft":0.0, "mouthSmileRight":0.0, "mouthFrownLeft":0.0, "mouthFrownRight":0.0, "mouthDimpleLeft":0.0, "mouthDimpleRight":0.0, "mouthStretchLeft":0.0, "mouthStretchRight":0.0, "mouthRollLower":0.0, "mouthRollUpper":0.0, "mouthShrugLower":0.0, "mouthShrugUpper":0.0, "mouthPressLeft":0.0, "mouthPressRight":0.0, "mouthLowerDownLeft":0.0, "mouthLowerDownRight":0.0, "mouthUpperUpLeft":0.0, "mouthUpperUpRight":0.0, "browDownLeft":0.0, "browDownRight":0.0, "browInnerUp":0.0, "browOuterUpLeft":0.0, "browOuterUpRight":0.0, "cheekPuff":0.0, "cheekSquintLeft":0.0, "cheekSquintRight":0.0, "noseSneerLeft":0.0, "noseSneerRight":0.0, "tongueOut":0.0 }, "rotation":{"pitch":30.0, "yaw":25.5, "roll":-15.5}, }], "timestamp":"654879876546" }
   *
   * @returns
   * true : 人脸信息 JSON 解析成功。 false : 人脸信息 JSON 解析失败。
   */
  onFaceInfo?(outFaceInfo: string): void;
}

/**
 * 录制文件信息。
 */
export class RecorderInfo {
  /**
   * 录制文件的绝对存储路径。
   */
  fileName?: string;
  /**
   * 录制文件的时长，单位为毫秒。
   */
  durationMs?: number;
  /**
   * 录制文件的大小，单位为字节。
   */
  fileSize?: number;
}

/**
 * 包含音视频录制的事件。
 */
export interface IMediaRecorderObserver {
  /**
   * 录制状态发生改变回调。
   *
   * 音视频流录制状态发生改变时，SDK 会触发该回调，报告当前的录制状态和引起录制状态改变的原因。
   *
   * @param channelId 频道名称。
   * @param uid 用户 ID。
   * @param state 当前的录制状态。详见 RecorderState 。
   * @param reason 录制状态出错的原因。详见 RecorderReasonCode 。
   */
  onRecorderStateChanged?(
    channelId: string,
    uid: number,
    state: RecorderState,
    reason: RecorderReasonCode
  ): void;

  /**
   * 录制信息更新回调。
   *
   * 成功注册该回调并开启音视频流录制后，SDK 会根据你在 MediaRecorderConfiguration 中设置的 recorderInfoUpdateInterval 的值周期性触发该回调，报告当前录制文件的文件名、时长和大小。
   *
   * @param channelId 频道名称。
   * @param uid 用户 ID。
   * @param info 录制文件信息。详见 RecorderInfo 。
   */
  onRecorderInfoUpdated?(
    channelId: string,
    uid: number,
    info: RecorderInfo
  ): void;
}
