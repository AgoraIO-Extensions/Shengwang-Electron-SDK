import './extension/AgoraBaseExtension';
import {
  AudioSourceType,
  RenderModeType,
  VideoModulePosition,
  VideoPixelFormat,
  VideoSourceType,
} from './AgoraMediaBase';

/**
 * 频道场景。
 */
export enum ChannelProfileType {
  /**
   * 0: 通信场景。声网推荐使用直播场景以获取更好的音视频体验。
   */
  ChannelProfileCommunication = 0,
  /**
   * 1:（默认）直播场景。
   */
  ChannelProfileLiveBroadcasting = 1,
  /**
   * 2: 游戏场景。 废弃：请改用 ChannelProfileLiveBroadcasting。
   */
  ChannelProfileGame = 2,
  /**
   * 3: 互动场景。该场景对延时进行了优化。如果你的场景中有用户需要频繁互动，建议使用该场景。 废弃：请改用 ChannelProfileLiveBroadcasting。
   */
  ChannelProfileCloudGaming = 3,
  /**
   * @ignore
   */
  ChannelProfileCommunication1v1 = 4,
}

/**
 * @ignore
 */
export enum WarnCodeType {
  /**
   * @ignore
   */
  WarnInvalidView = 8,
  /**
   * @ignore
   */
  WarnInitVideo = 16,
  /**
   * @ignore
   */
  WarnPending = 20,
  /**
   * @ignore
   */
  WarnNoAvailableChannel = 103,
  /**
   * @ignore
   */
  WarnLookupChannelTimeout = 104,
  /**
   * @ignore
   */
  WarnLookupChannelRejected = 105,
  /**
   * @ignore
   */
  WarnOpenChannelTimeout = 106,
  /**
   * @ignore
   */
  WarnOpenChannelRejected = 107,
  /**
   * @ignore
   */
  WarnSwitchLiveVideoTimeout = 111,
  /**
   * @ignore
   */
  WarnSetClientRoleTimeout = 118,
  /**
   * @ignore
   */
  WarnOpenChannelInvalidTicket = 121,
  /**
   * @ignore
   */
  WarnOpenChannelTryNextVos = 122,
  /**
   * @ignore
   */
  WarnChannelConnectionUnrecoverable = 131,
  /**
   * @ignore
   */
  WarnChannelConnectionIpChanged = 132,
  /**
   * @ignore
   */
  WarnChannelConnectionPortChanged = 133,
  /**
   * @ignore
   */
  WarnChannelSocketError = 134,
  /**
   * @ignore
   */
  WarnAudioMixingOpenError = 701,
  /**
   * @ignore
   */
  WarnAdmRuntimePlayoutWarning = 1014,
  /**
   * @ignore
   */
  WarnAdmRuntimeRecordingWarning = 1016,
  /**
   * @ignore
   */
  WarnAdmRecordAudioSilence = 1019,
  /**
   * @ignore
   */
  WarnAdmPlayoutMalfunction = 1020,
  /**
   * @ignore
   */
  WarnAdmRecordMalfunction = 1021,
  /**
   * @ignore
   */
  WarnAdmRecordAudioLowlevel = 1031,
  /**
   * @ignore
   */
  WarnAdmPlayoutAudioLowlevel = 1032,
  /**
   * @ignore
   */
  WarnAdmWindowsNoDataReadyEvent = 1040,
  /**
   * @ignore
   */
  WarnApmHowling = 1051,
  /**
   * @ignore
   */
  WarnAdmGlitchState = 1052,
  /**
   * @ignore
   */
  WarnAdmImproperSettings = 1053,
  /**
   * @ignore
   */
  WarnAdmPopState = 1055,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoRecordingDevice = 1322,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoPlayoutDevice = 1323,
  /**
   * @ignore
   */
  WarnAdmWinCoreImproperCaptureRelease = 1324,
}

/**
 * 错误代码。
 *
 * 错误代码意味着 SDK 遇到不可恢复的错误，需要应用程序干预。例如：打开摄像头失败时会返回错误，App 需要提示用户不能使用摄像头。
 */
export enum ErrorCodeType {
  /**
   * 0：没有错误。
   */
  ErrOk = 0,
  /**
   * 1：一般性的错误（没有明确归类的错误原因）。请重新调用方法。
   */
  ErrFailed = 1,
  /**
   * 2：方法中设置了无效的参数。例如指定的频道名中含有非法字符。请重新设置参数。
   */
  ErrInvalidArgument = 2,
  /**
   * 3：SDK 尚未准备好。可能的原因有： IRtcEngine 初始化失败。请重新初始化 IRtcEngine 。
   *  调用方法时用户尚未加入频道。请检查方法的调用逻辑。
   *  调用 rate 或 complain 方法时用户尚未离开频道。请检查方法的调用逻辑。
   *  音频模块未开启。
   *  程序集不完整。
   */
  ErrNotReady = 3,
  /**
   * 4： IRtcEngine 当前状态不支持该操作。可能的原因有：
   *  使用内置加密时，设置的加密模式不正确，或加载外部加密库失败。请检查加密的枚举值是否正确，或重新加载外部加密库。
   */
  ErrNotSupported = 4,
  /**
   * 5：方法调用被拒绝。可能的原因有： IRtcEngine 初始化失败。请重新初始化 IRtcEngine 。
   *  在加入频道时，将频道名设为空字符 "" 。请重新设置频道名。
   *  多频道场景下，在调用 joinChannelEx 方法加入频道时，设置的频道名已存在。请重新设置频道名。
   */
  ErrRefused = 5,
  /**
   * 6：缓冲区大小不足以存放返回的数据。
   */
  ErrBufferTooSmall = 6,
  /**
   * 7： IRtcEngine 尚未初始化就调用方法。请确认在调用该方法前已创建 IRtcEngine 对象并完成初始化。
   */
  ErrNotInitialized = 7,
  /**
   * 8：当前状态无效。
   */
  ErrInvalidState = 8,
  /**
   * 9：没有操作权限。请检查用户是否授予了 App 音视频设备的使用权限。
   */
  ErrNoPermission = 9,
  /**
   * 10： 方法调用超时。有些方法调用需要 SDK 返回结果，如果 SDK 处理事件过长，超过 10 秒没有返回，会出现此错误。
   */
  ErrTimedout = 10,
  /**
   * @ignore
   */
  ErrCanceled = 11,
  /**
   * @ignore
   */
  ErrTooOften = 12,
  /**
   * @ignore
   */
  ErrBindSocket = 13,
  /**
   * @ignore
   */
  ErrNetDown = 14,
  /**
   * 17：加入频道被拒绝。可能的原因有：
   *  用户已经在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。除收到 ConnectionStateDisconnected (1) 状态外，不要再次调用该方法加入频道。
   *  用户在调用 startEchoTest 进行通话测试后，未调用 stopEchoTest 结束当前测试就尝试加入频道。开始通话测试后，需要先调用 stopEchoTest 结束当前测试，再加入频道。
   */
  ErrJoinChannelRejected = 17,
  /**
   * 18：离开频道失败。可能的原因有：
   *  调用 leaveChannel 前，用户已离开频道。停止调用该方法即可。
   *  用户尚未加入频道，就调用 leaveChannel 退出频道。这种情况下无需额外操作。
   */
  ErrLeaveChannelRejected = 18,
  /**
   * 19：资源已被占用，不能重复使用。
   */
  ErrAlreadyInUse = 19,
  /**
   * 20：SDK 放弃请求，可能由于请求的次数太多。
   */
  ErrAborted = 20,
  /**
   * 21：Windows 下特定的防火墙设置导致 IRtcEngine 初始化失败然后崩溃。
   */
  ErrInitNetEngine = 21,
  /**
   * 22：SDK 分配资源失败，可能由于 App 占用资源过多或系统资源耗尽。
   */
  ErrResourceLimited = 22,
  /**
   * @ignore
   */
  ErrFuncIsProhibited = 23,
  /**
   * 101：不是有效的 App ID。请更换有效的 App ID 重新加入频道。
   */
  ErrInvalidAppId = 101,
  /**
   * 102：不是有效的频道名。可能的原因是设置的参数数据类型不正确。请更换有效的频道名重新加入频道。
   */
  ErrInvalidChannelName = 102,
  /**
   * 103：无法获取当前区域的服务器资源。请在初始化 IRtcEngine 时尝试指定其他区域。
   */
  ErrNoServerResources = 103,
  /**
   * 109：当前使用的 Token 过期，不再有效。请在服务端申请生成新的 Token，并调用 renewToken 更新 Token。 弃用：该枚举已废弃。请改用 onConnectionStateChanged 回调中的 ConnectionChangedTokenExpired (9)。
   */
  ErrTokenExpired = 109,
  /**
   * 弃用：该枚举已废弃。请改用 onConnectionStateChanged 回调中的 ConnectionChangedInvalidToken (8)。 110：Token 无效。一般有以下原因：
   *  在控制台中启用了 App 证书，但未使用 App ID + Token 鉴权。当项目启用了 App 证书，就必须使用 Token 鉴权。
   *  生成 Token 时填入的 uid 字段，和用户加入频道时填入的 uid 不匹配。
   */
  ErrInvalidToken = 110,
  /**
   * 111：网络连接中断。SDK 在和服务器建立连接后，失去网络连接超过 4 秒。
   */
  ErrConnectionInterrupted = 111,
  /**
   * 112：网络连接丢失。网络连接中断，且 SDK 无法在 10 秒内连接服务器。
   */
  ErrConnectionLost = 112,
  /**
   * 113：调用 sendStreamMessage 方法时用户不在频道内。
   */
  ErrNotInChannel = 113,
  /**
   * 114：在调用 sendStreamMessage 时，发送的数据长度大于 1 KB。
   */
  ErrSizeTooLarge = 114,
  /**
   * 115：在调用 sendStreamMessage 时，发送数据的频率超过限制（6 KB/s）。
   */
  ErrBitrateLimit = 115,
  /**
   * 116：在调用 createDataStream 时，创建的数据流超过限制（5 个）。
   */
  ErrTooManyDataStreams = 116,
  /**
   * 117：数据流发送超时。
   */
  ErrStreamMessageTimeout = 117,
  /**
   * 119：用户切换角色失败，请尝试重新加入频道。
   */
  ErrSetClientRoleNotAuthorized = 119,
  /**
   * 120：媒体流解密失败。可能是用户加入频道时使用了错误的密钥。请检查用户加入频道时填入的密钥，或引导用户尝试重新加入频道。
   */
  ErrDecryptionFailed = 120,
  /**
   * 121：该用户 ID 无效。
   */
  ErrInvalidUserId = 121,
  /**
   * 122：数据流解密失败。可能是用户加入频道时使用了错误的密钥。请检查用户加入频道时填入的密钥，或引导用户尝试重新加入频道。
   */
  ErrDatastreamDecryptionFailed = 122,
  /**
   * 123：该用户被服务器禁止。
   */
  ErrClientIsBannedByServer = 123,
  /**
   * 130：SDK 不支持将加密过的流推到 CDN 上。
   */
  ErrEncryptedStreamNotAllowedPublish = 130,
  /**
   * @ignore
   */
  ErrLicenseCredentialInvalid = 131,
  /**
   * 134：无效的 user account，可能是因为设置了无效的参数。
   */
  ErrInvalidUserAccount = 134,
  /**
   * @ignore
   */
  ErrModuleNotFound = 157,
  /**
   * 1001：加载媒体引擎失败。
   */
  ErrCertRaw = 157,
  /**
   * @ignore
   */
  ErrCertJsonPart = 158,
  /**
   * @ignore
   */
  ErrCertJsonInval = 159,
  /**
   * @ignore
   */
  ErrCertJsonNomem = 160,
  /**
   * @ignore
   */
  ErrCertCustom = 161,
  /**
   * @ignore
   */
  ErrCertCredential = 162,
  /**
   * @ignore
   */
  ErrCertSign = 163,
  /**
   * @ignore
   */
  ErrCertFail = 164,
  /**
   * @ignore
   */
  ErrCertBuf = 165,
  /**
   * @ignore
   */
  ErrCertNull = 166,
  /**
   * @ignore
   */
  ErrCertDuedate = 167,
  /**
   * @ignore
   */
  ErrCertRequest = 168,
  /**
   * 200：不支持的 PCM 格式。
   */
  ErrPcmsendFormat = 200,
  /**
   * 201：缓冲区溢出，PCM 发送速率过快。
   */
  ErrPcmsendBufferoverflow = 201,
  /**
   * @ignore
   */
  ErrRdtUserNotExist = 250,
  /**
   * @ignore
   */
  ErrRdtUserNotReady = 251,
  /**
   * @ignore
   */
  ErrRdtDataBlocked = 252,
  /**
   * @ignore
   */
  ErrRdtCmdExceedLimit = 253,
  /**
   * @ignore
   */
  ErrRdtDataExceedLimit = 254,
  /**
   * @ignore
   */
  ErrRdtEncryption = 255,
  /**
   * @ignore
   */
  ErrLoginAlreadyLogin = 428,
  /**
   * @ignore
   */
  ErrLoadMediaEngine = 1001,
  /**
   * 1005：音频设备出现错误（未指明何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道。
   */
  ErrAdmGeneralError = 1005,
  /**
   * 1008：初始化播放设备出错。请检查播放设备是否被其他应用占用，或者尝试重新进入频道。
   */
  ErrAdmInitPlayout = 1008,
  /**
   * 1009：启动播放设备出错。请检查播放设备是否正常。
   */
  ErrAdmStartPlayout = 1009,
  /**
   * 1010：停止播放设备出错。
   */
  ErrAdmStopPlayout = 1010,
  /**
   * 1011：初始化录音设备出错。请检查录音设备是否正常，或者尝试重新进入频道。
   */
  ErrAdmInitRecording = 1011,
  /**
   * 1012：启动录音设备出错。请检查录音设备是否正常。
   */
  ErrAdmStartRecording = 1012,
  /**
   * 1013：停止录音设备出错。
   */
  ErrAdmStopRecording = 1013,
  /**
   * 1501：没有摄像头使用权限。请检查是否已经打开摄像头权限。
   */
  ErrVdmCameraNotAuthorized = 1501,
}

/**
 * @ignore
 */
export enum LicenseErrorType {
  /**
   * @ignore
   */
  LicenseErrInvalid = 1,
  /**
   * @ignore
   */
  LicenseErrExpire = 2,
  /**
   * @ignore
   */
  LicenseErrMinutesExceed = 3,
  /**
   * @ignore
   */
  LicenseErrLimitedPeriod = 4,
  /**
   * @ignore
   */
  LicenseErrDiffDevices = 5,
  /**
   * @ignore
   */
  LicenseErrInternal = 99,
}

/**
 * SDK 对 Audio Session 的操作权限。
 */
export enum AudioSessionOperationRestriction {
  /**
   * 0: 没有限制，SDK 可以对 Audio Session 进行更改。
   */
  AudioSessionOperationRestrictionNone = 0,
  /**
   * 1: SDK 不能更改 Audio Session 的 category。
   */
  AudioSessionOperationRestrictionSetCategory = 1,
  /**
   * 2: SDK 不能更改 Audio Session 的 category、mode 或 categoryOptions。
   */
  AudioSessionOperationRestrictionConfigureSession = 1 << 1,
  /**
   * 4: 离开频道时，SDK 会保持 Audio Session 处于活动状态，例如在后台播放音频。
   */
  AudioSessionOperationRestrictionDeactivateSession = 1 << 2,
  /**
   * 128: 完全限制 SDK 对 Audio Session 的操作权限，SDK 不能再对 Audio Session 进行任何更改。
   */
  AudioSessionOperationRestrictionAll = 1 << 7,
}

/**
 * 用户离线原因。
 */
export enum UserOfflineReasonType {
  /**
   * 0: 用户主动离开。
   */
  UserOfflineQuit = 0,
  /**
   * 1: 因过长时间收不到对方数据包，超时掉线。 由于 SDK 使用的是不可靠通道，也有可能对方主动离开频道，但是本地没收到对方离开消息而误判为超时掉线。
   */
  UserOfflineDropped = 1,
  /**
   * 2: 用户身份从主播切换为观众。
   */
  UserOfflineBecomeAudience = 2,
}

/**
 * 接口类。
 */
export enum InterfaceIdType {
  /**
   * 1： IAudioDeviceManager 接口类。
   */
  AgoraIidAudioDeviceManager = 1,
  /**
   * 2： IVideoDeviceManager 接口类。
   */
  AgoraIidVideoDeviceManager = 2,
  /**
   * @ignore
   */
  AgoraIidParameterEngine = 3,
  /**
   * 4： IMediaEngine 接口类。
   */
  AgoraIidMediaEngine = 4,
  /**
   * @ignore
   */
  AgoraIidAudioEngine = 5,
  /**
   * @ignore
   */
  AgoraIidVideoEngine = 6,
  /**
   * @ignore
   */
  AgoraIidRtcConnection = 7,
  /**
   * 8：该接口类已废弃。
   */
  AgoraIidSignalingEngine = 8,
  /**
   * @ignore
   */
  AgoraIidMediaEngineRegulator = 9,
  /**
   * 11： ILocalSpatialAudioEngine 接口类。
   */
  AgoraIidLocalSpatialAudio = 11,
  /**
   * @ignore
   */
  AgoraIidStateSync = 13,
  /**
   * @ignore
   */
  AgoraIidMetaService = 14,
  /**
   * 15： IMusicContentCenter 接口类。
   */
  AgoraIidMusicContentCenter = 15,
  /**
   * @ignore
   */
  AgoraIidH265Transcoder = 16,
}

/**
 * 网络质量。
 */
export enum QualityType {
  /**
   * 0: 网络质量未知。
   */
  QualityUnknown = 0,
  /**
   * 1: 网络质量极好。
   */
  QualityExcellent = 1,
  /**
   * 2: 用户主观感觉和 excellent 差不多，但码率可能略低于 excellent。
   */
  QualityGood = 2,
  /**
   * 3: 用户主观感受有瑕疵但不影响沟通。
   */
  QualityPoor = 3,
  /**
   * 4: 勉强能沟通但不顺畅。
   */
  QualityBad = 4,
  /**
   * 5: 网络质量非常差，基本不能沟通。
   */
  QualityVbad = 5,
  /**
   * 6: 完全无法沟通。
   */
  QualityDown = 6,
  /**
   * @ignore
   */
  QualityUnsupported = 7,
  /**
   * 8: 网络质量检测进行中。
   */
  QualityDetecting = 8,
}

/**
 * @ignore
 */
export enum FitModeType {
  /**
   * @ignore
   */
  ModeCover = 1,
  /**
   * @ignore
   */
  ModeContain = 2,
}

/**
 * 视频顺时针旋转信息。
 */
export enum VideoOrientation {
  /**
   * 0:（默认）顺时针旋转 0 度。
   */
  VideoOrientation0 = 0,
  /**
   * 90: 顺时针旋转 90 度。
   */
  VideoOrientation90 = 90,
  /**
   * 180: 顺时针旋转 180 度。
   */
  VideoOrientation180 = 180,
  /**
   * 270: 顺时针旋转 270 度。
   */
  VideoOrientation270 = 270,
}

/**
 * 视频帧率。
 */
export enum FrameRate {
  /**
   * 1: 1 fps。
   */
  FrameRateFps1 = 1,
  /**
   * 7: 7 fps。
   */
  FrameRateFps7 = 7,
  /**
   * 10: 10 fps。
   */
  FrameRateFps10 = 10,
  /**
   * 15: 15 fps。
   */
  FrameRateFps15 = 15,
  /**
   * 24: 24 fps。
   */
  FrameRateFps24 = 24,
  /**
   * 30: 30 fps。
   */
  FrameRateFps30 = 30,
  /**
   * 60: 60 fps。
   */
  FrameRateFps60 = 60,
}

/**
 * @ignore
 */
export enum FrameWidth {
  /**
   * @ignore
   */
  FrameWidth960 = 960,
}

/**
 * @ignore
 */
export enum FrameHeight {
  /**
   * @ignore
   */
  FrameHeight540 = 540,
}

/**
 * 视频帧类型。
 */
export enum VideoFrameType {
  /**
   * 0: 黑帧。
   */
  VideoFrameTypeBlankFrame = 0,
  /**
   * 3: 关键帧。
   */
  VideoFrameTypeKeyFrame = 3,
  /**
   * 4: Delta 帧。
   */
  VideoFrameTypeDeltaFrame = 4,
  /**
   * 5: B 帧。
   */
  VideoFrameTypeBFrame = 5,
  /**
   * 6: 丢弃帧。
   */
  VideoFrameTypeDroppableFrame = 6,
  /**
   * 未知帧。
   */
  VideoFrameTypeUnknow = 7,
}

/**
 * 视频编码的方向模式。
 */
export enum OrientationMode {
  /**
   * 0: （默认）该模式下 SDK 输出的视频方向与采集到的视频方向一致。接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景。
   *  如果采集的视频是横屏模式，则输出的视频也是横屏模式。
   *  如果采集的视频是竖屏模式，则输出的视频也是竖屏模式。
   */
  OrientationModeAdaptive = 0,
  /**
   * @ignore
   */
  OrientationModeFixedLandscape = 1,
  /**
   * @ignore
   */
  OrientationModeFixedPortrait = 2,
}

/**
 * 带宽受限时的视频编码降级偏好。
 */
export enum DegradationPreference {
  /**
   * -1：（默认）自动模式。SDK 会根据你设置的视频场景，自动选择 MaintainFramerate、MaintainBalanced 或 MaintainResolution，以获得最优的综合质量体验 (QoE)。
   */
  MaintainAuto = -1,
  /**
   * 0：带宽受限时，视频编码时优先降低视频帧率，维持分辨率不变。该降级偏好适用于画质优先的场景。 弃用：该枚举已废弃。请改用其他枚举。
   */
  MaintainQuality = 0,
  /**
   * 1：带宽受限时，视频编码时优先降低视频分辨率，维持视频帧率不变。该降级偏好适用于流畅性优先且允许画质降低的场景。
   */
  MaintainFramerate = 1,
  /**
   * 2：带宽受限时，视频编码时同时降低视频帧率和视频分辨率。MaintainBalanced 的降幅比 MaintainQuality 和 MaintainFramerate 降幅更低，适用于流畅性和画质均有限的场景。 本地发送的视频分辨率可能改变，远端用户需能处理这种情况，详见 onVideoSizeChanged 。
   */
  MaintainBalanced = 2,
  /**
   * 3: 带宽受限时，视频编码时优先降低视频帧率，维持分辨率保持不变。该降级偏好适用于画质优先的场景。
   */
  MaintainResolution = 3,
  /**
   * @ignore
   */
  Disabled = 100,
}

/**
 * 视频尺寸。
 */
export class VideoDimensions {
  /**
   * 视频宽度，单位为像素。
   */
  width?: number;
  /**
   * 视频高度，单位为像素。
   */
  height?: number;
}

/**
 * @ignore
 */
export enum ScreenCaptureFramerateCapability {
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability15Fps = 0,
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability30Fps = 1,
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability60Fps = 2,
}

/**
 * @ignore
 */
export enum VideoCodecCapabilityLevel {
  /**
   * @ignore
   */
  CodecCapabilityLevelUnspecified = -1,
  /**
   * @ignore
   */
  CodecCapabilityLevelBasicSupport = 5,
  /**
   * @ignore
   */
  CodecCapabilityLevel1080p30fps = 10,
  /**
   * @ignore
   */
  CodecCapabilityLevel1080p60fps = 20,
  /**
   * @ignore
   */
  CodecCapabilityLevel4k60fps = 30,
}

/**
 * 视频编码格式。
 */
export enum VideoCodecType {
  /**
   * 0：（默认）不指定编解码格式。SDK 会根据当前视频流的分辨率、设备性能自动匹配适合的编解码格式。
   */
  VideoCodecNone = 0,
  /**
   * 1：标准 VP8。
   */
  VideoCodecVp8 = 1,
  /**
   * 2：标准 H.264。
   */
  VideoCodecH264 = 2,
  /**
   * 3：标准 H.265。
   */
  VideoCodecH265 = 3,
  /**
   * 6：Generic。本类型主要用于传输视频裸数据(比如用户已加密的视频帧)，该类型视频帧以回调的形式返回给用户，需要用户自行解码与渲染。
   */
  VideoCodecGeneric = 6,
  /**
   * @ignore
   */
  VideoCodecGenericH264 = 7,
  /**
   * @ignore
   */
  VideoCodecAv1 = 12,
  /**
   * @ignore
   */
  VideoCodecVp9 = 13,
  /**
   * 20：Generic JPEG。本类型所需的算力较小，可用于算力有限的 IoT 设备。
   */
  VideoCodecGenericJpeg = 20,
}

/**
 * @ignore
 */
export enum CameraFocalLengthType {
  /**
   * @ignore
   */
  CameraFocalLengthDefault = 0,
  /**
   * @ignore
   */
  CameraFocalLengthWideAngle = 1,
  /**
   * @ignore
   */
  CameraFocalLengthUltraWide = 2,
  /**
   * @ignore
   */
  CameraFocalLengthTelephoto = 3,
}

/**
 * @ignore
 */
export enum TCcMode {
  /**
   * @ignore
   */
  CcEnabled = 0,
  /**
   * @ignore
   */
  CcDisabled = 1,
}

/**
 * @ignore
 */
export class SenderOptions {
  /**
   * @ignore
   */
  ccMode?: TCcMode;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  targetBitrate?: number;
}

/**
 * 音频编解码格式。
 */
export enum AudioCodecType {
  /**
   * 1: OPUS。
   */
  AudioCodecOpus = 1,
  /**
   * @ignore
   */
  AudioCodecPcma = 3,
  /**
   * @ignore
   */
  AudioCodecPcmu = 4,
  /**
   * @ignore
   */
  AudioCodecG722 = 5,
  /**
   * 8: LC-AAC。
   */
  AudioCodecAaclc = 8,
  /**
   * 9: HE-AAC。
   */
  AudioCodecHeaac = 9,
  /**
   * @ignore
   */
  AudioCodecJc1 = 10,
  /**
   * 11: HE-AAC v2。
   */
  AudioCodecHeaac2 = 11,
  /**
   * @ignore
   */
  AudioCodecLpcnet = 12,
  /**
   * @ignore
   */
  AudioCodecOpusmc = 13,
}

/**
 * 音频编码类型。
 */
export enum AudioEncodingType {
  /**
   * 0x010101: AAC 编码格式，16000 Hz 采样率，低音质。音频时长为 10 分钟的文件编码后大小约为 1.2 MB。
   */
  AudioEncodingTypeAac16000Low = 0x010101,
  /**
   * 0x010102: AAC 编码格式，16000 Hz 采样率，中音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeAac16000Medium = 0x010102,
  /**
   * 0x010201: AAC 编码格式，32000 Hz 采样率，低音质。音频时长为 10 分钟的文件编码后大小约为 1.2 MB。
   */
  AudioEncodingTypeAac32000Low = 0x010201,
  /**
   * 0x010202: AAC 编码格式，32000 Hz 采样率，中音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeAac32000Medium = 0x010202,
  /**
   * 0x010203: AAC 编码格式，32000 Hz 采样率，高音质。音频时长为 10 分钟的文件编码后大小约为 3.5 MB。
   */
  AudioEncodingTypeAac32000High = 0x010203,
  /**
   * 0x010302: AAC 编码格式，48000 Hz 采样率，中音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeAac48000Medium = 0x010302,
  /**
   * 0x010303: AAC 编码格式，48000 Hz 采样率，高音质。音频时长为 10 分钟的文件编码后大小约为 3.5 MB。
   */
  AudioEncodingTypeAac48000High = 0x010303,
  /**
   * 0x020101: OPUS 编码格式，16000 Hz 采样率，低音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeOpus16000Low = 0x020101,
  /**
   * 0x020102: OPUS 编码格式，16000 Hz 采样率，中音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeOpus16000Medium = 0x020102,
  /**
   * 0x020302: OPUS 编码格式，48000 Hz 采样率，中音质。音频时长为 10 分钟的文件编码后大小约为 2 MB。
   */
  AudioEncodingTypeOpus48000Medium = 0x020302,
  /**
   * 0x020303: OPUS 编码格式，48000 Hz 采样率，高音质。音频时长为 10 分钟的文件编码后大小约为 3.5 MB。
   */
  AudioEncodingTypeOpus48000High = 0x020303,
}

/**
 * 水印的适配模式。
 */
export enum WatermarkFitMode {
  /**
   * 0: 使用你在 WatermarkOptions 中设置的 positionInLandscapeMode 和 positionInPortraitMode 值。此时 WatermarkRatio 中的设置无效。
   */
  FitModeCoverPosition = 0,
  /**
   * 1: 使用你在 WatermarkRatio 中设置的值。此时 WatermarkOptions 中 positionInLandscapeMode 和 positionInPortraitMode 的设置无效。
   */
  FitModeUseImageRatio = 1,
}

/**
 * @ignore
 */
export class EncodedAudioFrameAdvancedSettings {
  /**
   * @ignore
   */
  speech?: boolean;
  /**
   * @ignore
   */
  sendEvenIfEmpty?: boolean;
}

/**
 * 编码后音频的信息。
 */
export class EncodedAudioFrameInfo {
  /**
   * 音频编码规格: AudioCodecType 。
   */
  codec?: AudioCodecType;
  /**
   * 音频采样率 (Hz)。
   */
  sampleRateHz?: number;
  /**
   * 每个声道的音频采样数。
   */
  samplesPerChannel?: number;
  /**
   * 声道数。
   */
  numberOfChannels?: number;
  /**
   * 该功能暂不支持。
   */
  advancedSettings?: EncodedAudioFrameAdvancedSettings;
  /**
   * 采集外部编码视频帧的 Unix 时间戳 (ms)。
   */
  captureTimeMs?: number;
}

/**
 * @ignore
 */
export class AudioPcmDataInfo {
  /**
   * @ignore
   */
  samplesPerChannel?: number;
  /**
   * @ignore
   */
  channelNum?: number;
  /**
   * @ignore
   */
  samplesOut?: number;
  /**
   * @ignore
   */
  elapsedTimeMs?: number;
  /**
   * @ignore
   */
  ntpTimeMs?: number;
}

/**
 * @ignore
 */
export enum H264PacketizeMode {
  /**
   * @ignore
   */
  NonInterleaved = 0,
  /**
   * @ignore
   */
  SingleNalUnit = 1,
}

/**
 * 视频流类型。
 */
export enum VideoStreamType {
  /**
   * 0: 视频大流，即高分辨率、高码率视频流。
   */
  VideoStreamHigh = 0,
  /**
   * 1: 视频小流，即低分辨率、低码率视频流。
   */
  VideoStreamLow = 1,
  /**
   * @ignore
   */
  VideoStreamLayer1 = 4,
  /**
   * @ignore
   */
  VideoStreamLayer2 = 5,
  /**
   * @ignore
   */
  VideoStreamLayer3 = 6,
  /**
   * @ignore
   */
  VideoStreamLayer4 = 7,
  /**
   * @ignore
   */
  VideoStreamLayer5 = 8,
  /**
   * @ignore
   */
  VideoStreamLayer6 = 9,
}

/**
 * 视频订阅设置。
 */
export class VideoSubscriptionOptions {
  /**
   * 订阅的视频流类型，默认值为 VideoStreamHigh，即订阅视频大流。详见 VideoStreamType 。
   */
  type?: VideoStreamType;
  /**
   * 是否仅订阅编码后的视频流： true ：仅订阅编码后的视频数据（结构化数据），SDK 未对该视频数据做解码及渲染。 false ：（默认）订阅原始视频数据和编码后的数据。
   */
  encodedFrameOnly?: boolean;
}

/**
 * 用户 User Account 的最大长度。
 */
export enum MaxUserAccountLengthType {
  /**
   * 用户 User Account 的最大长度为 255 个字符。
   */
  MaxUserAccountLength = 256,
}

/**
 * 外部编码视频帧的信息。
 */
export class EncodedVideoFrameInfo {
  /**
   * 视频编码类型，详见 VideoCodecType 。默认值为 VideoCodecH264 (2) 。
   */
  codecType?: VideoCodecType;
  /**
   * 视频帧的宽度 (px)。
   */
  width?: number;
  /**
   * 视频帧的高度 (px)。
   */
  height?: number;
  /**
   * 每秒的视频帧数。
   * 当该参数不为 0 时，你可以用它计算外部编码视频帧的 Unix 时间戳。
   */
  framesPerSecond?: number;
  /**
   * 视频帧的类型，详见 VideoFrameType 。
   */
  frameType?: VideoFrameType;
  /**
   * 视频帧的旋转信息，详见 VideoOrientation 。
   */
  rotation?: VideoOrientation;
  /**
   * 预留参数。
   */
  trackId?: number;
  /**
   * 采集外部编码视频帧的 Unix 时间戳 (ms)。
   */
  captureTimeMs?: number;
  /**
   * @ignore
   */
  decodeTimeMs?: number;
  /**
   * 视频流类型。详见 VideoStreamType 。
   */
  streamType?: VideoStreamType;
  /**
   * @ignore
   */
  presentationMs?: number;
}

/**
 * 视频编码的压缩偏好类型。
 */
export enum CompressionPreference {
  /**
   * -1:（默认）自动模式。SDK 会根据你设置的视频场景，自动选择 PreferLowLatency 或 PreferQuality，以获得最佳的用户体验。
   */
  PreferCompressionAuto = -1,
  /**
   * 0: 低延时偏好。SDK 会对视频帧进行压缩处理，以降低延时。该偏好适用于流畅性优先且允许画质降低的场景。
   */
  PreferLowLatency = 0,
  /**
   * 1：高质量偏好。SDK 会对视频帧进行压缩处理，同时保持视频质量。该偏好适用于画质优先的场景。
   */
  PreferQuality = 1,
}

/**
 * 视频编码器偏好。
 */
export enum EncodingPreference {
  /**
   * -1：自适应偏好。SDK 根据平台、设备类型等因素自动选择最优的编码类型进行编码。
   */
  PreferAuto = -1,
  /**
   * 0：软件编码偏好。SDK 优先使用软件编码器进行视频编码。
   */
  PreferSoftware = 0,
  /**
   * 1：硬件编码偏好。SDK 优先使用硬件编码器进行视频编码。当设备不支持硬件编码时，SDK 会自动使用软件编码，并通过 onLocalVideoStats 回调中的 hwEncoderAccelerating 报告当前使用的视频编码器类型。
   */
  PreferHardware = 1,
}

/**
 * 视频编码的高级选项。
 */
export class AdvanceOptions {
  /**
   * 视频编码器偏好。详见 EncodingPreference 。
   */
  encodingPreference?: EncodingPreference;
  /**
   * 视频编码的压缩偏好。详见 CompressionPreference 。
   */
  compressionPreference?: CompressionPreference;
  /**
   * 当视频帧包含 Alpha 通道数据时，设置是否将 Alpha 数据编码并发送至远端： true ：对 Alpha 数据进行编码发送。 false ：（默认）不对 Alpha 数据进行编码发送。
   */
  encodeAlpha?: boolean;
}

/**
 * 镜像模式类型。
 */
export enum VideoMirrorModeType {
  /**
   * 0：由 SDK 决定镜像模式。
   *  本地视图镜像模式：如果你使用前置摄像头，默认启动本地视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
   *  远端用户视图镜像模式：默认关闭远端用户的镜像模式。
   */
  VideoMirrorModeAuto = 0,
  /**
   * 1：启用镜像模式。
   */
  VideoMirrorModeEnabled = 1,
  /**
   * 2：关闭镜像模式。
   */
  VideoMirrorModeDisabled = 2,
}

/**
 * @ignore
 */
export enum CameraFormatType {
  /**
   * @ignore
   */
  CameraFormatNv12 = 0,
  /**
   * @ignore
   */
  CameraFormatBgra = 1,
}

/**
 * @ignore
 */
export enum VideoModuleType {
  /**
   * @ignore
   */
  VideoModuleCapturer = 0,
  /**
   * @ignore
   */
  VideoModuleSoftwareEncoder = 1,
  /**
   * @ignore
   */
  VideoModuleHardwareEncoder = 2,
  /**
   * @ignore
   */
  VideoModuleSoftwareDecoder = 3,
  /**
   * @ignore
   */
  VideoModuleHardwareDecoder = 4,
  /**
   * @ignore
   */
  VideoModuleRenderer = 5,
}

/**
 * @ignore
 */
export enum HdrCapability {
  /**
   * @ignore
   */
  HdrCapabilityUnknown = -1,
  /**
   * @ignore
   */
  HdrCapabilityUnsupported = 0,
  /**
   * @ignore
   */
  HdrCapabilitySupported = 1,
}

/**
 * 编解码类型 bit mask。
 */
export enum CodecCapMask {
  /**
   * (0)：不支持编解码。
   */
  CodecCapMaskNone = 0,
  /**
   * (1 << 0)：支持硬件解码。
   */
  CodecCapMaskHwDec = 1 << 0,
  /**
   * (1 << 1)：支持硬件编码。
   */
  CodecCapMaskHwEnc = 1 << 1,
  /**
   * (1 << 2)：支持软件解码。
   */
  CodecCapMaskSwDec = 1 << 2,
  /**
   * (1 << 3)：支持软件编码。
   */
  CodecCapMaskSwEnc = 1 << 3,
}

/**
 * 编解码能力等级。
 */
export class CodecCapLevels {
  /**
   * 硬件解码能力等级，表示设备能够对不同品质视频进行硬件解码的能力。详见 VIDEO_CODEC_CAPABILITY_LEVEL 。
   */
  hwDecodingLevel?: VideoCodecCapabilityLevel;
  /**
   * 软件解码能力等级，表示设备能够对不同品质视频进行软件解码的能力。详见 VIDEO_CODEC_CAPABILITY_LEVEL 。
   */
  swDecodingLevel?: VideoCodecCapabilityLevel;
}

/**
 * SDK 支持的编解码能力信息。
 */
export class CodecCapInfo {
  /**
   * 视频编解码类型。详见 VideoCodecType 。
   */
  codecType?: VideoCodecType;
  /**
   * SDK 编解码类型的 bit mask。详见 CodecCapMask 。
   */
  codecCapMask?: number;
  /**
   * SDK 支持的编解码能力等级。详见 CodecCapLevels 。
   */
  codecLevels?: CodecCapLevels;
}

/**
 * @ignore
 */
export class FocalLengthInfo {
  /**
   * @ignore
   */
  cameraDirection?: number;
  /**
   * @ignore
   */
  focalLengthType?: CameraFocalLengthType;
}

/**
 * 视频编码器的配置。
 */
export class VideoEncoderConfiguration {
  /**
   * 视频编码类型，详见 VideoCodecType 。
   */
  codecType?: VideoCodecType;
  /**
   * 视频编码的分辨率 (px)，详见 VideoDimensions 。该参数用于衡量编码质量，以长 × 宽表示，默认值为 960 × 540。用户可以自行设置分辨率。
   */
  dimensions?: VideoDimensions;
  /**
   * 视频编码的帧率(fps)，默认值为 15。详见 FrameRate 。
   */
  frameRate?: number;
  /**
   * 视频编码码率，单位为 Kbps。该参数无需设置，保留默认值 STANDARD_BITRATE 即可，SDK 会根据你设定的视频分辨率和帧率自动匹配最合适的码率。有关视频分辨率和帧率的对应关系，详见[视频属性](https://doc.shengwang.cn/doc/rtc/electron/basic-features/video-profile#%E8%A7%86%E9%A2%91%E5%B1%9E%E6%80%A7%E5%8F%82%E8%80%83)。
   *  STANDARD_BITRATE (0): (默认) 标准码率模式。
   *  COMPATIBLE_BITRATE (-1): 适配码率模式。一般情况下，声网建议你不要使用该值。
   */
  bitrate?: number;
  /**
   * 最低编码码率，单位为 Kbps。
   * SDK 会根据网络状况自动调整视频编码码率。将参数设为高于默认值可强制视频编码器输出高质量图片，但在网络状况不佳情况下可能导致网络丢包并影响视频播放的流畅度造成卡顿。因此如非对画质有特殊需求，声网建议不要修改该参数的值。 该参数仅适用于直播场景。
   */
  minBitrate?: number;
  /**
   * 视频编码的方向模式，详见 OrientationMode 。
   */
  orientationMode?: OrientationMode;
  /**
   * 带宽受限时，视频编码降级偏好。详见 DegradationPreference 。 当该参数设置为 MaintainFramerate (1) 或者 MaintainBalanced (2) 时，需要同时将 orientationMode 设置为 OrientationModeAdaptive (0)，否则设置不生效。
   */
  degradationPreference?: DegradationPreference;
  /**
   * 发送编码视频时是否开启镜像模式，只影响远端用户看到的视频画面。详见 VideoMirrorModeType 。 默认关闭镜像模式。
   */
  mirrorMode?: VideoMirrorModeType;
  /**
   * 视频编码的高级选项。详见 AdvanceOptions 。
   */
  advanceOptions?: AdvanceOptions;
}

/**
 * 数据流设置。
 *
 * 下表展示不同的参数设置下，SDK 的行为： syncWithAudio ordered
 * SDK 行为 false false
 * 接收端接收到数据包后，SDK 立刻触发 onStreamMessage 回调。 true false
 * 如果数据包的延迟在音频延迟的范围内，SDK 会在播放音频的同时触发与该音频包同步的 onStreamMessage 回调。如果数据包的延迟超出了音频延迟，SDK 会在接收到该数据包时立刻触发 onStreamMessage 回调；此情况会造成音频包和数据包的不同步。 false true
 * 如果数据包的延迟在 5 秒以内，SDK 会修正数据包的乱序问题。如果数据包的延迟超出 5 秒，SDK 会丢弃该数据包。 true true
 * 如果数据包的延迟在音频延迟的范围内，SDK 会修正数据包的乱序问题。如果数据包的延迟超出音频延迟，SDK 会丢弃该数据包。
 */
export class DataStreamConfig {
  /**
   * 是否与本地发送的音频流同步。 true : 数据流与音频流同步。该设置适用于歌词同步等特殊场景。 false : 数据流与音频流不同步。该设置适用于需要数据包立刻到达接收端的场景。 设置数据流与音频流同步后，如果数据包的延迟在音频延迟的范围内，SDK 会在播放音频的同时触发与该音频包同步的 onStreamMessage 回调。
   */
  syncWithAudio?: boolean;
  /**
   * 是否保证接收到的数据按发送的顺序排列。 true : 保证 SDK 按照发送方发送的顺序输出数据包。 false : 不保证 SDK 按照发送方发送的顺序输出数据包。 当需要数据包立刻到达接收端时，不能将该参数设置为 true 。
   */
  ordered?: boolean;
}

/**
 * 发送视频流的模式。
 */
export enum SimulcastStreamMode {
  /**
   * -1：默认不发送小流，直至收到接收端发起的订阅小流申请时，开始自动发送小流。
   */
  AutoSimulcastStream = -1,
  /**
   * 0：始终不发送小流。
   */
  DisableSimulcastStream = 0,
  /**
   * 1：始终发送小流。
   */
  EnableSimulcastStream = 1,
}

/**
 * 视频小流的配置。
 */
export class SimulcastStreamConfig {
  /**
   * 视频尺寸。详见 VideoDimensions 。默认值为视频大流的 50%。
   */
  dimensions?: VideoDimensions;
  /**
   * 视频码率 (Kbps)，默认值为 -1。该参数无需设置，SDK 会根据你设定的视频分辨率和帧率自动匹配最合适的码率。
   */
  kBitrate?: number;
  /**
   * 视频帧率 (fps)。默认值为 5。
   */
  framerate?: number;
}

/**
 * @ignore
 */
export enum StreamLayerIndex {
  /**
   * @ignore
   */
  StreamLayer1 = 0,
  /**
   * @ignore
   */
  StreamLayer2 = 1,
  /**
   * @ignore
   */
  StreamLayer3 = 2,
  /**
   * @ignore
   */
  StreamLayer4 = 3,
  /**
   * @ignore
   */
  StreamLayer5 = 4,
  /**
   * @ignore
   */
  StreamLayer6 = 5,
  /**
   * @ignore
   */
  StreamLow = 6,
  /**
   * @ignore
   */
  StreamLayerCountMax = 7,
}

/**
 * @ignore
 */
export class StreamLayerConfig {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  framerate?: number;
  /**
   * @ignore
   */
  enable?: boolean;
}

/**
 * @ignore
 */
export class SimulcastConfig {
  /**
   * @ignore
   */
  configs?: StreamLayerConfig[];
  /**
   * @ignore
   */
  publish_fallback_enable?: boolean;
}

/**
 * 目标区域相对于整个屏幕或窗口的位置，如不填，则表示整个屏幕或窗口。
 */
export class Rectangle {
  /**
   * 左上角的横向偏移。
   */
  x?: number;
  /**
   * 左上角的纵向偏移。
   */
  y?: number;
  /**
   * 目标区域的宽度。
   */
  width?: number;
  /**
   * 目标区域的高度。
   */
  height?: number;
}

/**
 * 水印在屏幕中的位置和大小。
 *
 * 水印在屏幕中的位置和大小由 xRatio 、 yRatio 和 widthRatio 共同决定：
 *  (xRatio, yRatio) 指水印左上角的坐标，决定水印左上角到屏幕左上角的距离。 widthRatio 决定水印的宽度。
 */
export class WatermarkRatio {
  /**
   * 水印左上角的 x 坐标。以屏幕左上角为原点，x 坐标为水印左上角相对于原点的横向位移。取值范围为 [0.0,1.0]，默认值为 0。
   */
  xRatio?: number;
  /**
   * 水印左上角的 y 坐标。以屏幕左上角为原点，y 坐标为水印左上角相对于原点的纵向位移。取值范围为 [0.0,1.0]，默认值为 0。
   */
  yRatio?: number;
  /**
   * 水印的宽度。SDK 会根据该参数值计算出等比例的水印高度，确保放大或缩小后的水印图片不失真。取值范围为 [0.0,1.0]，默认值为 0，代表不显示水印。
   */
  widthRatio?: number;
}

/**
 * 配置水印图像。
 *
 * 用于设置要添加的水印图像的相关配置项。
 */
export class WatermarkOptions {
  /**
   * 水印是否在本地预览视图中可见： true : （默认）水印在本地预览视图中可见。 false : 水印在本地预览视图中不可见。
   */
  visibleInPreview?: boolean;
  /**
   * 水印的适配模式为 FitModeCoverPosition 时，用于设置横屏模式下水印图片的区域。详见 Rectangle 。
   */
  positionInLandscapeMode?: Rectangle;
  /**
   * 水印的适配模式为 FitModeCoverPosition 时，用于设置竖屏模式下水印图片的区域。详见 Rectangle 。
   */
  positionInPortraitMode?: Rectangle;
  /**
   * 水印的适配模式为 FitModeUseImageRatio 时，该参数可设置缩放模式下的水印坐标。详见 WatermarkRatio 。
   */
  watermarkRatio?: WatermarkRatio;
  /**
   * 水印的适配模式。详见 WatermarkFitMode 。
   */
  mode?: WatermarkFitMode;
  /**
   * 水印图像的图层顺序，默认值为 0。
   */
  zOrder?: number;
}

/**
 * 水印源类型。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum WatermarkSourceType {
  /**
   * （0）：水印源为图像。
   */
  Image = 0,
  /**
   * （1）：水印源为缓冲区。
   */
  Buffer = 1,
  /**
   * （2）：水印源为文本字面量。 仅支持在 Linux 平台使用。
   */
  Literal = 2,
  /**
   * （3）：水印源为时间戳。 仅支持在 Linux 平台使用。
   */
  Timestamps = 3,
}

/**
 * 用于配置时间戳水印。
 *
 * 自从 自 v4.6.2 版本新增。 仅适用于 Linux 平台。
 */
export class WatermarkTimestamp {
  /**
   * 时间戳字体的大小。默认值为 10。
   */
  fontSize?: number;
  /**
   * 时间戳字体文件的路径。默认值为 NULL 。字体文件需为 .ttf 格式。如果未设置，SDK 会使用系统默认字体（如果可用）。 如果异步使用，请将路径复制到不会被释放的内存中。
   */
  fontFilePath?: string;
  /**
   * 时间戳描边的宽度。默认值为 1。
   */
  strokeWidth?: number;
  /**
   * 时间戳的格式。默认值为 %F %X 。格式遵循 C 标准库函数 strftime 的规范，详见 strftime 。 如果异步使用，请将格式字符串复制到不会被释放的内存中。
   */
  format?: string;
}

/**
 * 用于配置文字水印。
 *
 * 自从 自 v4.6.2 版本新增。 仅适用于 Linux 平台。
 */
export class WatermarkLiteral {
  /**
   * 文字的字体大小。默认值为 10。
   */
  fontSize?: number;
  /**
   * 文字的描边宽度。默认值为 1。
   */
  strokeWidth?: number;
  /**
   * 水印的文字内容。默认值为 NULL 。 如果异步使用，请将字符串复制到不会被释放的内存中。
   */
  wmLiteral?: string;
  /**
   * 字体文件的路径。默认值为 NULL 。字体文件应为 .ttf 格式。如果未设置，SDK 会使用系统默认字体（如果可用）。 如果异步使用，请将字符串复制到不会被释放的内存中。
   */
  fontFilePath?: string;
}

/**
 * 用于配置水印图像的格式、尺寸和像素缓冲区。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export class WatermarkBuffer {
  /**
   * 水印图像的宽度，单位为像素。
   */
  width?: number;
  /**
   * 水印图像的高度，单位为像素。
   */
  height?: number;
  /**
   * 水印图像缓冲区的长度，单位为字节。
   */
  length?: number;
  /**
   * 水印图像的像素格式，详见 VideoPixelFormat 。
   */
  format?: VideoPixelFormat;
  /**
   * 水印图像的像素缓冲区数据。
   */
  buffer?: Uint8Array;
}

/**
 * 用于配置水印信息。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export class WatermarkConfig {
  /**
   * 水印的唯一标识符，建议使用 UUID。
   */
  id?: string;
  /**
   * 水印类型，详见 WatermarkSourceType 。
   */
  type?: WatermarkSourceType;
  /**
   * 水印的缓冲区。详见 WatermarkBuffer 。
   */
  buffer?: WatermarkBuffer;
  /**
   * 水印的时间戳。 仅支持在 Linux 平台使用。
   */
  timestamp?: WatermarkTimestamp;
  /**
   * 水印的文本内容。 仅支持在 Linux 平台使用。
   */
  literal?: WatermarkLiteral;
  /**
   * 水印图像文件的 URL，默认值为 NULL 。
   */
  imageUrl?: string;
  /**
   * 水印的配置选项。详见 WatermarkOptions 。
   */
  options?: WatermarkOptions;
}

/**
 * 多路径数据传输的模式。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum MultipathMode {
  /**
   * （0）：冗余发送模式，相同的数据会通过所有可用路径进行冗余传输。
   */
  Duplicate = 0,
  /**
   * （1）：动态发送模式，SDK 会根据当前网络状况动态选择最优路径进行数据传输，以提升传输性能。
   */
  Dynamic = 1,
}

/**
 * 多路径传输使用的网络路径类型。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum MultipathType {
  /**
   * （0）：局域网（LAN）路径。
   */
  Lan = 0,
  /**
   * （1）：Wi-Fi 路径。
   */
  Wifi = 1,
  /**
   * （2）：移动网络路径。
   */
  Mobile = 2,
  /**
   * （99）：未知或未指定的网络路径。
   */
  Unknown = 99,
}

/**
 * 用于获取特定网络路径的统计数据。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export class PathStats {
  /**
   * 网络路径的类型。详见 MultipathType 。
   */
  type?: MultipathType;
  /**
   * 该路径的传输码率，单位为 Kbps。
   */
  txKBitRate?: number;
  /**
   * 该路径的接收码率，单位为 Kbps。
   */
  rxKBitRate?: number;
}

/**
 * 用于汇总多路径传输中各网络路径的统计数据。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export class MultipathStats {
  /**
   * 通过 LAN 路径发送的字节总数。
   */
  lanTxBytes?: number;
  /**
   * 通过 LAN 路径接收的字节总数。
   */
  lanRxBytes?: number;
  /**
   * 通过 Wi-Fi 路径发送的字节总数。
   */
  wifiTxBytes?: number;
  /**
   * 通过 Wi-Fi 路径接收的字节总数。
   */
  wifiRxBytes?: number;
  /**
   * 通过移动网络路径发送的字节总数。
   */
  mobileTxBytes?: number;
  /**
   * 通过移动网络路径接收的字节总数。
   */
  mobileRxBytes?: number;
  /**
   * 当前活跃的传输路径数量。
   */
  activePathNum?: number;
  /**
   * 每个活跃传输路径的统计信息数组。详见 PathStats 。
   */
  pathStats?: PathStats[];
}

/**
 * 通话相关的统计信息。
 */
export class RtcStats {
  /**
   * 本地用户通话时长（秒），累计值。
   */
  duration?: number;
  /**
   * 发送字节数 (bytes)。
   */
  txBytes?: number;
  /**
   * 接收字节数 (bytes)。
   */
  rxBytes?: number;
  /**
   * 发送音频字节数 (bytes)，累计值。
   */
  txAudioBytes?: number;
  /**
   * 发送视频字节数 (bytes)，累计值。
   */
  txVideoBytes?: number;
  /**
   * 接收音频字节数 (bytes)，累计值。
   */
  rxAudioBytes?: number;
  /**
   * 接收视频字节数 (bytes)，累计值。
   */
  rxVideoBytes?: number;
  /**
   * 发送码率 (Kbps)。
   */
  txKBitRate?: number;
  /**
   * 接收码率 (Kbps)。
   */
  rxKBitRate?: number;
  /**
   * 音频接收码率 (Kbps)。
   */
  rxAudioKBitRate?: number;
  /**
   * 音频包的发送码率 (Kbps)。
   */
  txAudioKBitRate?: number;
  /**
   * 视频接收码率 (Kbps)。
   */
  rxVideoKBitRate?: number;
  /**
   * 视频发送码率 (Kbps)。
   */
  txVideoKBitRate?: number;
  /**
   * 客户端-接入服务器延时 (毫秒)。
   */
  lastmileDelay?: number;
  /**
   * 当前频道内的用户人数。
   */
  userCount?: number;
  /**
   * 当前 App 的 CPU 使用率 (%)。 onLeaveChannel 回调中报告的 cpuAppUsage 恒为 0。
   */
  cpuAppUsage?: number;
  /**
   * 当前系统的 CPU 使用率 (%)。
   * 对于 Windows 平台，在多核环境中，该成员指多核 CPU 的平均使用率。 计算方式为 (100 - 任务管理中显示的系统空闲进程 CPU)/100。 onLeaveChannel 回调中报告的 cpuTotalUsage 恒为 0。
   */
  cpuTotalUsage?: number;
  /**
   * 客户端到本地路由器的往返时延 (ms)。
   */
  gatewayRtt?: number;
  /**
   * 当前 App 的内存占比 (%)。 该值仅作参考。受系统限制可能无法获取。
   */
  memoryAppUsageRatio?: number;
  /**
   * 当前系统的内存占比 (%)。 该值仅作参考。受系统限制可能无法获取。
   */
  memoryTotalUsageRatio?: number;
  /**
   * 当前 App 的内存大小 (KB)。 该值仅作参考。受系统限制可能无法获取。
   */
  memoryAppUsageInKbytes?: number;
  /**
   * 从开始建立连接到成功连接的时间（毫秒）。如报告 0，则表示无效。
   */
  connectTimeMs?: number;
  /**
   * @ignore
   */
  firstAudioPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDuration?: number;
  /**
   * @ignore
   */
  packetsBeforeFirstKeyFramePacket?: number;
  /**
   * @ignore
   */
  firstAudioPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameDecodedDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameRenderedDurationAfterUnmute?: number;
  /**
   * 使用抗丢包技术前，客户端上行发送到服务器丢包率 (%)。
   */
  txPacketLossRate?: number;
  /**
   * 使用抗丢包技术前，服务器下行发送到客户端丢包率 (%)。
   */
  rxPacketLossRate?: number;
  /**
   * @ignore
   */
  lanAccelerateState?: number;
}

/**
 * 直播场景里的用户角色。
 */
export enum ClientRoleType {
  /**
   * 1: 主播。主播可以发流也可以收流。
   */
  ClientRoleBroadcaster = 1,
  /**
   * 2:（默认）观众。观众只能收流不能发流。
   */
  ClientRoleAudience = 2,
}

/**
 * 自上次统计后本地视频质量的自适应情况（基于目标帧率和目标码率）。
 */
export enum QualityAdaptIndication {
  /**
   * 0：本地视频质量不变。
   */
  AdaptNone = 0,
  /**
   * 1：因网络带宽增加，本地视频质量改善。
   */
  AdaptUpBandwidth = 1,
  /**
   * 2：因网络带宽减少，本地视频质量变差。
   */
  AdaptDownBandwidth = 2,
}

/**
 * 直播频道中观众的延时级别。该枚举仅在用户角色设为 ClientRoleAudience 时才生效。
 */
export enum AudienceLatencyLevelType {
  /**
   * 1: 低延时。
   */
  AudienceLatencyLevelLowLatency = 1,
  /**
   * 2:（默认）超低延时。
   */
  AudienceLatencyLevelUltraLowLatency = 2,
}

/**
 * 用户角色属性设置。
 */
export class ClientRoleOptions {
  /**
   * 观众端延时级别。详见 AudienceLatencyLevelType 。
   */
  audienceLatencyLevel?: AudienceLatencyLevelType;
}

/**
 * 接收远端音频时，本地用户的主观体验质量。
 */
export enum ExperienceQualityType {
  /**
   * 0: 主观体验质量较好。
   */
  ExperienceQualityGood = 0,
  /**
   * 1: 主观体验质量较差。
   */
  ExperienceQualityBad = 1,
}

/**
 * 接收远端音频时，本地用户主观体验质量较差的原因。
 */
export enum ExperiencePoorReason {
  /**
   * 0: 无原因，说明主观体验质量较好。
   */
  ExperienceReasonNone = 0,
  /**
   * 1: 远端用户的网络较差。
   */
  RemoteNetworkQualityPoor = 1,
  /**
   * 2: 本地用户的网络较差。
   */
  LocalNetworkQualityPoor = 2,
  /**
   * 4: 本地用户的 Wi-FI 或者移动数据网络信号弱。
   */
  WirelessSignalPoor = 4,
  /**
   * 8: 本地用户同时开启 Wi-Fi 和蓝牙，二者信号互相干扰，导致音频传输质量下降。
   */
  WifiBluetoothCoexist = 8,
}

/**
 * AI 降噪的模式。
 */
export enum AudioAinsMode {
  /**
   * 0：（默认）均衡降噪模式；如果你希望实现对噪声抑制和延时都较为均衡的降噪效果，可选择该模式。
   */
  AinsModeBalanced = 0,
  /**
   * 1：强降噪模式；适用于对噪声抑制性能要求较高的场景，如户外直播。该模式可以更大程度地减少噪声，但同时可能会对语音造成一定损伤。
   */
  AinsModeAggressive = 1,
  /**
   * 2：低延时强降噪模式。该模式的降噪延时比弱降噪和强降噪模式大约低一半，适用于对降噪及低延时要求较高的场景，如实时合唱。
   */
  AinsModeUltralowlatency = 2,
}

/**
 * 音频编码属性。
 */
export enum AudioProfileType {
  /**
   * 0: 默认值。
   *  直播场景下：48 kHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
   *  通信场景下：
   *  Windows 平台：16 kHz 采样率，语音编码，单声道，编码码率最大值为 16 Kbps。
   *  macOS 平台：32 kHz 采样率，语音编码，单声道，编码码率最大值为 18 Kbps。
   */
  AudioProfileDefault = 0,
  /**
   * 1: 指定 32 kHz 采样率，语音编码，单声道，编码码率最大值为 18 Kbps。
   */
  AudioProfileSpeechStandard = 1,
  /**
   * 2: 指定 48 kHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
   */
  AudioProfileMusicStandard = 2,
  /**
   * 3: 指定 48 kHz 采样率，音乐编码，双声道，编码码率最大值为 80 Kbps。
   * 如需实现立体声，你还需要调用 setAdvancedAudioOptions 并在 AdvancedAudioOptions 中设置 audioProcessingChannels 为 AudioProcessingStereo 。
   */
  AudioProfileMusicStandardStereo = 3,
  /**
   * 4: 指定 48 kHz 采样率，音乐编码，单声道，编码码率最大值为 96 Kbps。
   */
  AudioProfileMusicHighQuality = 4,
  /**
   * 5: 指定 48 kHz 采样率，音乐编码，双声道，编码码率最大值为 128 Kbps。
   * 如需实现立体声，你还需要调用 setAdvancedAudioOptions 并在 AdvancedAudioOptions 中设置 audioProcessingChannels 为 AudioProcessingStereo 。
   */
  AudioProfileMusicHighQualityStereo = 5,
  /**
   * 6: 指定 16 kHz 采样率，语音编码，单声道，应用回声消除算法 AEC。
   */
  AudioProfileIot = 6,
  /**
   * 枚举值边界。
   */
  AudioProfileNum = 7,
}

/**
 * 音频场景。
 */
export enum AudioScenarioType {
  /**
   * 0: （默认）自动场景，根据用户角色和音频路由自动匹配合适的音质。
   */
  AudioScenarioDefault = 0,
  /**
   * 3: 高音质场景，适用于音乐为主的场景。例如：乐器陪练。
   */
  AudioScenarioGameStreaming = 3,
  /**
   * 5: 聊天室场景，适用于用户需要频繁上下麦的场景。例如：教育场景。
   */
  AudioScenarioChatroom = 5,
  /**
   * 7: 合唱场景。适用于网络条件良好，要求极低延时的实时合唱场景。
   */
  AudioScenarioChorus = 7,
  /**
   * 8: 会议场景，适用于人声为主的多人会议。
   */
  AudioScenarioMeeting = 8,
  /**
   * @ignore
   */
  AudioScenarioAiServer = 9,
  /**
   * 10: AI 对话场景，仅适用于与[声网对话式 AI 引擎](https://doc.shengwang.cn/doc/convoai/restful/landing-page)创建的智能体互动的场景。
   */
  AudioScenarioAiClient = 10,
  /**
   * 枚举的数量。
   */
  AudioScenarioNum = 11,
}

/**
 * 视频帧格式。
 */
export class VideoFormat {
  /**
   * 视频帧的宽度（px）。默认值为 960。
   */
  width?: number;
  /**
   * 视频帧的高度（px）。默认值为 540.
   */
  height?: number;
  /**
   * 视频帧的帧率。默认值为 15。
   */
  fps?: number;
}

/**
 * 屏幕共享的内容类型。
 */
export enum VideoContentHint {
  /**
   * （默认）无指定的内容类型。
   */
  ContentHintNone = 0,
  /**
   * 内容类型为动画。当共享的内容是视频、电影或视频游戏时，推荐选择该内容类型。
   */
  ContentHintMotion = 1,
  /**
   * 内容类型为细节。当共享的内容是图片或文字时，推荐选择该内容类型。
   */
  ContentHintDetails = 2,
}

/**
 * 屏幕共享的场景。
 */
export enum ScreenScenarioType {
  /**
   * 1:（默认）文档。该场景下，优先保障共享的画质，并降低了接收端看到共享视频的延时。如果你共享文档、幻灯片、表格，可以设置该场景。
   */
  ScreenScenarioDocument = 1,
  /**
   * 2: 游戏。该场景下，优先保障共享的流畅性。如果你共享游戏，可以设置该场景。
   */
  ScreenScenarioGaming = 2,
  /**
   * 3: 视频。该场景下，优先保障共享的流畅性。如果你共享电影、视频直播，可以设置该场景。
   */
  ScreenScenarioVideo = 3,
  /**
   * 4: 远程控制。该场景下，优先保障共享的画质，并降低了接收端看到共享视频的延时。如果你共享被远程控制的设备桌面，可以设置该场景。
   */
  ScreenScenarioRdc = 4,
}

/**
 * 视频业务场景类型。
 */
export enum VideoApplicationScenarioType {
  /**
   * 0: (默认) 通用场景。
   */
  ApplicationScenarioGeneral = 0,
  /**
   * 1: 会议场景。
   */
  ApplicationScenarioMeeting = 1,
  /**
   * 2: 1v1 视频通话
   */
  ApplicationScenario1v1 = 2,
  /**
   * 3: 秀场直播
   */
  ApplicationScenarioLiveshow = 3,
}

/**
 * @ignore
 */
export enum VideoQoePreferenceType {
  /**
   * @ignore
   */
  VideoQoePreferenceBalance = 1,
  /**
   * @ignore
   */
  VideoQoePreferenceDelayFirst = 2,
  /**
   * @ignore
   */
  VideoQoePreferencePictureQualityFirst = 3,
  /**
   * @ignore
   */
  VideoQoePreferenceFluencyFirst = 4,
}

/**
 * 本地采集的画质亮度级别。
 */
export enum CaptureBrightnessLevelType {
  /**
   * @ignore
   */
  CaptureBrightnessLevelInvalid = -1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelNormal = 0,
  /**
   * @ignore
   */
  CaptureBrightnessLevelBright = 1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelDark = 2,
}

/**
 * @ignore
 */
export enum CameraStabilizationMode {
  /**
   * @ignore
   */
  CameraStabilizationModeOff = -1,
  /**
   * @ignore
   */
  CameraStabilizationModeAuto = 0,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel1 = 1,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel2 = 2,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel3 = 3,
  /**
   * @ignore
   */
  CameraStabilizationModeMaxLevel = 3,
}

/**
 * 本地音频状态。
 */
export enum LocalAudioStreamState {
  /**
   * 0: 本地音频默认初始状态。
   */
  LocalAudioStreamStateStopped = 0,
  /**
   * 1: 本地音频采集设备启动成功。
   */
  LocalAudioStreamStateRecording = 1,
  /**
   * 2: 本地音频首帧编码成功。
   */
  LocalAudioStreamStateEncoding = 2,
  /**
   * 3: 本地音频启动失败。
   */
  LocalAudioStreamStateFailed = 3,
}

/**
 * 本地音频状态改变原因。
 */
export enum LocalAudioStreamReason {
  /**
   * 0：本地音频状态正常。
   */
  LocalAudioStreamReasonOk = 0,
  /**
   * 1：本地音频出错原因不明确。建议提示用户尝试重新加入频道。
   */
  LocalAudioStreamReasonFailure = 1,
  /**
   * 2：没有权限启动本地音频采集设备。请提示用户开启权限。 弃用：该枚举已废弃。请改用 onPermissionError 回调中的 RecordAudio 。
   */
  LocalAudioStreamReasonDeviceNoPermission = 2,
  /**
   * @ignore
   */
  LocalAudioStreamReasonDeviceBusy = 3,
  /**
   * 4：本地音频采集失败。
   */
  LocalAudioStreamReasonRecordFailure = 4,
  /**
   * 5：本地音频编码失败。
   */
  LocalAudioStreamReasonEncodeFailure = 5,
  /**
   * 6：无本地音频采集设备。请提示用户在设备的控制面板中检查麦克风是否与设备连接正常，检查麦克风是否正常工作。
   */
  LocalAudioStreamReasonNoRecordingDevice = 6,
  /**
   * 7：无本地音频播放设备。请提示用户在设备的控制面板中检查扬声器是否与设备连接正常，检查扬声器是否正常工作。
   */
  LocalAudioStreamReasonNoPlayoutDevice = 7,
  /**
   * @ignore
   */
  LocalAudioStreamReasonInterrupted = 8,
  /**
   * 9：（仅适用于 Windows）本地音频采集设备的 ID 无效。请提示用户检查音频采集设备 ID。
   */
  LocalAudioStreamReasonRecordInvalidId = 9,
  /**
   * 10：（仅适用于 Windows）本地音频播放设备的 ID 无效。请提示用户检查音频播放设备 ID。
   */
  LocalAudioStreamReasonPlayoutInvalidId = 10,
}

/**
 * 本地视频状态。
 */
export enum LocalVideoStreamState {
  /**
   * 0: 本地视频默认初始状态。
   */
  LocalVideoStreamStateStopped = 0,
  /**
   * 1: 本地视频采集设备启动成功。
   */
  LocalVideoStreamStateCapturing = 1,
  /**
   * 2: 本地视频首帧编码成功。
   */
  LocalVideoStreamStateEncoding = 2,
  /**
   * 3: 本地视频启动失败。
   */
  LocalVideoStreamStateFailed = 3,
}

/**
 * 本地视频事件类型。
 *
 * 自从 自 v4.6.1 版本新增。
 */
export enum LocalVideoEventType {
  /**
   * （1）：屏幕采集窗口被隐藏，仅适用于 Android 平台。
   */
  LocalVideoEventTypeScreenCaptureWindowHidden = 1,
  /**
   * （2）：屏幕采集窗口从隐藏状态恢复，仅适用于 Android 平台。
   */
  LocalVideoEventTypeScreenCaptureWindowRecoverFromHidden = 2,
  /**
   * （3）：屏幕采集被用户停止，仅适用于 Android 平台。
   */
  LocalVideoEventTypeScreenCaptureStoppedByUser = 3,
  /**
   * （4）：屏幕采集过程中发生系统内部错误，仅适用于 Android 平台。
   */
  LocalVideoEventTypeScreenCaptureSystemInternalError = 4,
}

/**
 * 本地视频状态改变原因。
 */
export enum LocalVideoStreamReason {
  /**
   * 0：本地视频状态正常。
   */
  LocalVideoStreamReasonOk = 0,
  /**
   * 1：出错原因不明确。
   */
  LocalVideoStreamReasonFailure = 1,
  /**
   * 2：没有权限启动本地视频采集设备。请提示用户开启设备权限后再重新加入频道。 弃用：该枚举已废弃。请改用 onPermissionError 回调中的 Camera 。
   */
  LocalVideoStreamReasonDeviceNoPermission = 2,
  /**
   * 3：本地视频采集设备正在使用中。请提示用户检查摄像头是否被其他 App 占用，或者尝试重新加入频道。
   */
  LocalVideoStreamReasonDeviceBusy = 3,
  /**
   * 4：本地视频采集失败。请提示用户检查视频采集设备是否正常工作，检查摄像头是否被其他 App 占用，或者尝试重新加入频道。
   */
  LocalVideoStreamReasonCaptureFailure = 4,
  /**
   * 5：本地视频编码失败。
   */
  LocalVideoStreamReasonCodecNotSupport = 5,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCaptureInbackground = 6,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCaptureMultipleForegroundApps = 7,
  /**
   * 8：找不到本地视频采集设备。需检查摄像头是否与设备正常连接、摄像头是否正常工作，或者尝试重新加入频道。
   */
  LocalVideoStreamReasonDeviceNotFound = 8,
  /**
   * 9：当前正在使用的视频采集设备已经断开连接（例如，被拔出）。
   */
  LocalVideoStreamReasonDeviceDisconnected = 9,
  /**
   * 10：SDK 无法在视频设备列表中找到该视频设备。请检查视频设备 ID 是否有效。
   */
  LocalVideoStreamReasonDeviceInvalidId = 10,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceInterrupt = 14,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceFatalError = 15,
  /**
   * 101：由于系统压力过大，导致当前视频采集设备不可用。
   */
  LocalVideoStreamReasonDeviceSystemPressure = 101,
  /**
   * 11：调用 startScreenCaptureByWindowId 方法共享窗口时，共享窗口处于最小化的状态。SDK 无法共享被最小化的窗口。请提示用户将共享窗口取消最小化。
   */
  LocalVideoStreamReasonScreenCaptureWindowMinimized = 11,
  /**
   * 12：通过窗口 ID 共享的窗口已关闭，或通过窗口 ID 共享的全屏窗口已退出全屏。退出全屏模式后，远端用户将无法看到共享的窗口。为避免远端用户看到黑屏，建议你立即结束本次共享。
   * 报告该错误码的常见场景：
   *  本地用户关闭共享的窗口。
   *  本地用户先播放映幻灯片，然后共享放映中的幻灯片。结束放映时，SDK 会报告该错误码。
   *  本地用户先全屏观看网页视频或网页文档，然后共享网页视频或网页文档。结束全屏时，SDK 会报告该错误码。
   */
  LocalVideoStreamReasonScreenCaptureWindowClosed = 12,
  /**
   * 13:（仅适用于 Windows）待共享的窗口被其他窗口遮挡住，被遮挡住的部分在共享时会被 SDK 涂黑。
   */
  LocalVideoStreamReasonScreenCaptureWindowOccluded = 13,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowNotSupported = 20,
  /**
   * 21：（仅适用于 Windows 和 Android）当前采集的窗口无数据。
   */
  LocalVideoStreamReasonScreenCaptureFailure = 21,
  /**
   * 22：不具备采集屏幕的权限。
   */
  LocalVideoStreamReasonScreenCaptureNoPermission = 22,
  /**
   * 24：（仅适用于 Windows）屏幕共享过程中发生意外错误（可能由于窗口屏蔽失败），导致屏幕共享策略降级，但屏幕共享过程本身没有受到影响。 屏幕共享过程中，由于设备本身驱动等问题导致屏蔽指定窗口失败时，SDK 也会报告该事件并自动回退到共享整个屏幕。如果你的应用场景需要屏蔽特定窗口以保护隐私，建议监听此事件并在事件触发时添加额外的隐私保护机制。
   */
  LocalVideoStreamReasonScreenCaptureAutoFallback = 24,
  /**
   * 25：（仅适用于 Windows）当前屏幕采集的窗口处于隐藏状态，并且在当前屏幕上不可见。
   */
  LocalVideoStreamReasonScreenCaptureWindowHidden = 25,
  /**
   * 26：（仅适用于 Windows）进行屏幕采集的窗口已经从隐藏状态中恢复。
   */
  LocalVideoStreamReasonScreenCaptureWindowRecoverFromHidden = 26,
  /**
   * 27：进行屏幕采集的窗口已经从最小化状态恢复正常。
   */
  LocalVideoStreamReasonScreenCaptureWindowRecoverFromMinimized = 27,
  /**
   * 28：（仅适用于 Windows）屏幕采集已暂停。报告该错误码的常见场景：当前屏幕可能已切换到安全桌面，例如 UAC 对话框或者 Winlogon 桌面。
   */
  LocalVideoStreamReasonScreenCapturePaused = 28,
  /**
   * 29：（仅适用于 Windows）屏幕采集已从暂停状态中恢复。
   */
  LocalVideoStreamReasonScreenCaptureResumed = 29,
  /**
   * 30：进行屏幕采集的显示器已断开连接。当收到该状态时，请提示用户当前屏幕共享已暂停并重启屏幕共享。
   */
  LocalVideoStreamReasonScreenCaptureDisplayDisconnected = 30,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureStoppedByUser = 31,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureInterruptedByOther = 32,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureStoppedByCall = 33,
  /**
   * 34：（仅适用于 Windows 平台）屏幕共享时，排除窗口列表中的部分窗口排除失败。
   */
  LocalVideoStreamReasonScreenCaptureExcludeWindowFailed = 34,
}

/**
 * 远端音频流状态。
 */
export enum RemoteAudioState {
  /**
   * 0: 远端音频默认初始状态。在 RemoteAudioReasonLocalMuted 、 RemoteAudioReasonRemoteMuted 或 RemoteAudioReasonRemoteOffline 的情况下，会报告该状态。
   */
  RemoteAudioStateStopped = 0,
  /**
   * 1: 本地用户已接收远端音频首包。
   */
  RemoteAudioStateStarting = 1,
  /**
   * 2: 远端音频流正在解码，正常播放。在 RemoteAudioReasonNetworkRecovery 、 RemoteAudioReasonLocalUnmuted 或 RemoteAudioReasonRemoteUnmuted 的情况下，会报告该状态。
   */
  RemoteAudioStateDecoding = 2,
  /**
   * 3: 远端音频流卡顿。在 RemoteAudioReasonNetworkCongestion 的情况下，会报告该状态。
   */
  RemoteAudioStateFrozen = 3,
  /**
   * 4: 远端音频流播放失败。在 RemoteAudioReasonInternal 的情况下，会报告该状态。
   */
  RemoteAudioStateFailed = 4,
}

/**
 * 远端音频流状态切换原因。
 */
export enum RemoteAudioStateReason {
  /**
   * 0: 音频状态发生改变时，会报告该原因。
   */
  RemoteAudioReasonInternal = 0,
  /**
   * 1: 网络阻塞。
   */
  RemoteAudioReasonNetworkCongestion = 1,
  /**
   * 2: 网络恢复正常。
   */
  RemoteAudioReasonNetworkRecovery = 2,
  /**
   * 3: 本地用户停止接收远端音频流或本地用户禁用音频模块。
   */
  RemoteAudioReasonLocalMuted = 3,
  /**
   * 4: 本地用户恢复接收远端音频流或本地用户启动音频模块。
   */
  RemoteAudioReasonLocalUnmuted = 4,
  /**
   * 5: 远端用户停止发送音频流或远端用户禁用音频模块。
   */
  RemoteAudioReasonRemoteMuted = 5,
  /**
   * 6: 远端用户恢复发送音频流或远端用户启用音频模块。
   */
  RemoteAudioReasonRemoteUnmuted = 6,
  /**
   * 7: 远端用户离开频道。
   */
  RemoteAudioReasonRemoteOffline = 7,
  /**
   * @ignore
   */
  RemoteAudioReasonNoPacketReceive = 8,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalPlayFailed = 9,
}

/**
 * 远端视频流状态。
 */
export enum RemoteVideoState {
  /**
   * 0: 远端视频默认初始状态。在 RemoteVideoStateReasonLocalMuted 、 RemoteVideoStateReasonRemoteMuted 或 RemoteVideoStateReasonRemoteOffline 的情况下，会报告该状态。
   */
  RemoteVideoStateStopped = 0,
  /**
   * 1: 本地用户已接收远端视频首包。
   */
  RemoteVideoStateStarting = 1,
  /**
   * 2: 远端视频流正在解码，正常播放。在 RemoteVideoStateReasonNetworkRecovery 、 RemoteVideoStateReasonLocalUnmuted 、 RemoteVideoStateReasonRemoteUnmuted 的情况下，会报告该状态。
   */
  RemoteVideoStateDecoding = 2,
  /**
   * 3: 远端视频流卡顿。在 RemoteVideoStateReasonNetworkCongestion 的情况下，会报告该状态。
   */
  RemoteVideoStateFrozen = 3,
  /**
   * 4: 远端视频流播放失败。在 RemoteVideoStateReasonInternal 的情况下，会报告该状态。
   */
  RemoteVideoStateFailed = 4,
}

/**
 * 远端视频流状态切换原因。
 */
export enum RemoteVideoStateReason {
  /**
   * 0: 视频状态发生改变时，会报告该原因。
   */
  RemoteVideoStateReasonInternal = 0,
  /**
   * 1: 网络阻塞。
   */
  RemoteVideoStateReasonNetworkCongestion = 1,
  /**
   * 2: 网络恢复正常。
   */
  RemoteVideoStateReasonNetworkRecovery = 2,
  /**
   * 3: 本地用户停止接收远端视频流或本地用户禁用视频模块。
   */
  RemoteVideoStateReasonLocalMuted = 3,
  /**
   * 4: 本地用户恢复接收远端视频流或本地用户启动视频模块。
   */
  RemoteVideoStateReasonLocalUnmuted = 4,
  /**
   * 5: 远端用户停止发送视频流或远端用户禁用视频模块。
   */
  RemoteVideoStateReasonRemoteMuted = 5,
  /**
   * 6: 远端用户恢复发送视频流或远端用户启用视频模块。
   */
  RemoteVideoStateReasonRemoteUnmuted = 6,
  /**
   * 7: 远端用户离开频道。
   */
  RemoteVideoStateReasonRemoteOffline = 7,
  /**
   * 8: 弱网情况下，远端音视频流回退为音频流。
   */
  RemoteVideoStateReasonAudioFallback = 8,
  /**
   * 9: 网络情况改善时，远端音频流恢复为音视频流。
   */
  RemoteVideoStateReasonAudioFallbackRecovery = 9,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToLow = 10,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToHigh = 11,
  /**
   * @ignore
   */
  RemoteVideoStateReasonSdkInBackground = 12,
  /**
   * 13：本地的视频解码器不支持对收到的远端视频流进行解码。
   */
  RemoteVideoStateReasonCodecNotSupport = 13,
}

/**
 * @ignore
 */
export enum RemoteUserState {
  /**
   * @ignore
   */
  UserStateMuteAudio = 1 << 0,
  /**
   * @ignore
   */
  UserStateMuteVideo = 1 << 1,
  /**
   * @ignore
   */
  UserStateEnableVideo = 1 << 4,
  /**
   * @ignore
   */
  UserStateEnableLocalVideo = 1 << 8,
}

/**
 * @ignore
 */
export class VideoTrackInfo {
  /**
   * @ignore
   */
  isLocal?: boolean;
  /**
   * @ignore
   */
  ownerUid?: number;
  /**
   * @ignore
   */
  trackId?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  encodedFrameOnly?: boolean;
  /**
   * @ignore
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  observationPosition?: number;
}

/**
 * @ignore
 */
export enum RemoteVideoDownscaleLevel {
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevelNone = 0,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel1 = 1,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel2 = 2,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel3 = 3,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel4 = 4,
}

/**
 * 用户音量信息。
 */
export class AudioVolumeInfo {
  /**
   * 用户 ID。
   *  在本地用户的回调中， uid 为 0。
   *  在远端用户的回调中， uid 为瞬时音量最高的远端用户（最多 3 位）的 ID。
   */
  uid?: number;
  /**
   * 用户的音量，取值范围为 [0,255]。如果用户将自己静音（将 muteLocalAudioStream 设为 true ），但开启了音频采集， volume 的值表示本地采集信号的音量。
   */
  volume?: number;
  /**
   * vad 无法报告远端用户的人声状态。对于远端用户， vad 的值始终为 1。
   *  如需使用此参数，请在调用 enableAudioVolumeIndication 时设置 reportVad 为 true 。 本地用户的人声状态。
   *  0：本地无人声。
   *  1：本地有人声。
   */
  vad?: number;
  /**
   * 本地用户的人声音调（Hz）。取值范围为 [0.0,4000.0]。 voicePitch 无法报告远端用户的人声音调。对于远端用户， voicePitch 的值始终为 0.0。
   */
  voicePitch?: number;
}

/**
 * 音频设备信息。
 */
export class DeviceInfo {
  /**
   * @ignore
   */
  isLowLatencyAudioSupported?: boolean;
}

/**
 * @ignore
 */
export class Packet {
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  size?: number;
}

/**
 * 推流输出音频的采样率。
 */
export enum AudioSampleRateType {
  /**
   * 32000: 32 kHz
   */
  AudioSampleRate32000 = 32000,
  /**
   * 44100: 44.1 kHz
   */
  AudioSampleRate44100 = 44100,
  /**
   * 48000: （默认）48 kHz
   */
  AudioSampleRate48000 = 48000,
}

/**
 * 转码输出视频流的编解码类型。
 */
export enum VideoCodecTypeForStream {
  /**
   * 1：（默认）H.264。
   */
  VideoCodecH264ForStream = 1,
  /**
   * 2：H.265。
   */
  VideoCodecH265ForStream = 2,
}

/**
 * 旁路推流输出视频的编解码规格。
 */
export enum VideoCodecProfileType {
  /**
   * 66: Baseline 级别的视频编码规格，一般用于低阶或需要额外容错的应用，比如视频通话、手机视频等。
   */
  VideoCodecProfileBaseline = 66,
  /**
   * 77: Main 级别的视频编码规格，一般用于主流消费类电子产品，如 MP4、便携的视频播放器、PSP、iPad 等。
   */
  VideoCodecProfileMain = 77,
  /**
   * 100: （默认）High 级别的视频编码规格，一般用于广播、视频碟片存储、高清电视。
   */
  VideoCodecProfileHigh = 100,
}

/**
 * 推流输出音频的编解码规格，默认为 LC-AAC。
 */
export enum AudioCodecProfileType {
  /**
   * 0: （默认）LC-AAC 规格。
   */
  AudioCodecProfileLcAac = 0,
  /**
   * 1: HE-AAC 规格。
   */
  AudioCodecProfileHeAac = 1,
  /**
   * 2: HE-AAC v2 规格。
   */
  AudioCodecProfileHeAacV2 = 2,
}

/**
 * 本地音频统计数据。
 */
export class LocalAudioStats {
  /**
   * 声道数。
   */
  numChannels?: number;
  /**
   * 发送本地音频的采样率，单位为 Hz。
   */
  sentSampleRate?: number;
  /**
   * 发送本地音频的码率平均值，单位为 Kbps。
   */
  sentBitrate?: number;
  /**
   * 内部的 payload 类型。
   */
  internalCodec?: number;
  /**
   * 弱网对抗前本端到声网边缘服务器的丢包率 (%)。
   */
  txPacketLossRate?: number;
  /**
   * 播放或录制音频时，音频设备模块的延迟 (ms)。
   */
  audioDeviceDelay?: number;
  /**
   * @ignore
   */
  audioPlayoutDelay?: number;
  /**
   * 耳返延迟 (ms)，即声音从麦克风输入到耳机输出的延迟。
   */
  earMonitorDelay?: number;
  /**
   * 回声消除延迟 (ms)，即回声消除 (Acoustic Echo Cancellation, AEC) 模块测算出音频在本地播放前与被本地采集后的信号延迟。
   */
  aecEstimatedDelay?: number;
}

/**
 * 推流状态。
 */
export enum RtmpStreamPublishState {
  /**
   * 0：推流未开始或已结束。
   */
  RtmpStreamPublishStateIdle = 0,
  /**
   * 1：正在连接推流服务器和 CDN 服务器。
   */
  RtmpStreamPublishStateConnecting = 1,
  /**
   * 2：推流正在进行。成功推流后，会返回该状态。
   */
  RtmpStreamPublishStateRunning = 2,
  /**
   * 3：正在恢复推流。当 CDN 出现异常，或推流短暂中断时，SDK 会自动尝试恢复推流，并返回该状态。
   *  如成功恢复推流，则进入状态 RtmpStreamPublishStateRunning(2)。
   *  如服务器出错或 60 秒内未成功恢复，则进入状态 RtmpStreamPublishStateFailure(4)。如果觉得 60 秒太长，也可以主动尝试重连。
   */
  RtmpStreamPublishStateRecovering = 3,
  /**
   * 4：推流失败。失败后，你可以通过返回的错误码排查错误原因。
   */
  RtmpStreamPublishStateFailure = 4,
  /**
   * 5：SDK 正在与推流服务器和 CDN 服务器断开连接。当你调用 stopRtmpStream 方法正常结束推流时，SDK 会依次报告推流状态为 RtmpStreamPublishStateDisconnecting 、 RtmpStreamPublishStateIdle 。
   */
  RtmpStreamPublishStateDisconnecting = 5,
}

/**
 * 推流状态改变的原因。
 */
export enum RtmpStreamPublishReason {
  /**
   * 0：推流成功。
   */
  RtmpStreamPublishReasonOk = 0,
  /**
   * 1：参数无效。请检查输入参数是否正确。
   */
  RtmpStreamPublishReasonInvalidArgument = 1,
  /**
   * 2：推流已加密，不能推流。
   */
  RtmpStreamPublishReasonEncryptedStreamNotAllowed = 2,
  /**
   * 3：推流超时未成功。
   */
  RtmpStreamPublishReasonConnectionTimeout = 3,
  /**
   * 4：推流服务器出现错误。
   */
  RtmpStreamPublishReasonInternalServerError = 4,
  /**
   * 5：CDN 服务器出现错误。
   */
  RtmpStreamPublishReasonRtmpServerError = 5,
  /**
   * 6：推流请求过于频繁。
   */
  RtmpStreamPublishReasonTooOften = 6,
  /**
   * 7：单个主播的推流地址数目达到上限 10。请删掉一些不用的推流地址再增加推流地址。
   */
  RtmpStreamPublishReasonReachLimit = 7,
  /**
   * 8：主播操作不属于自己的流。例如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
   */
  RtmpStreamPublishReasonNotAuthorized = 8,
  /**
   * 9：服务器未找到这个流。
   */
  RtmpStreamPublishReasonStreamNotFound = 9,
  /**
   * 10：推流地址格式有错误。请检查推流地址格式是否正确。
   */
  RtmpStreamPublishReasonFormatNotSupported = 10,
  /**
   * 11：用户角色不是主播，该用户无法使用推流功能。请检查你的应用代码逻辑。
   */
  RtmpStreamPublishReasonNotBroadcaster = 11,
  /**
   * 13：非转码推流情况下，调用了 updateRtmpTranscoding 方法更新转码属性。请检查你的应用代码逻辑。
   */
  RtmpStreamPublishReasonTranscodingNoMixStream = 13,
  /**
   * 14：主播的网络出错。
   */
  RtmpStreamPublishReasonNetDown = 14,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonInvalidAppid = 15,
  /**
   * 16：你的项目没有使用推流服务的权限。
   */
  RtmpStreamPublishReasonInvalidPrivilege = 16,
  /**
   * @ignore
   */
  RtmpStreamUnpublishReasonOk = 100,
}

/**
 * 旁路推流时发生的事件。
 */
export enum RtmpStreamingEvent {
  /**
   * 1: 旁路推流时，添加背景图或水印出错。
   */
  RtmpStreamingEventFailedLoadImage = 1,
  /**
   * 2: 该推流 URL 已用于推流。如果你想开始新的推流，请使用新的推流 URL。
   */
  RtmpStreamingEventUrlAlreadyInUse = 2,
  /**
   * 3: 功能不支持。
   */
  RtmpStreamingEventAdvancedFeatureNotSupport = 3,
  /**
   * 4: 预留参数。
   */
  RtmpStreamingEventRequestTooOften = 4,
}

/**
 * 图像属性。
 *
 * 用于设置直播视频的水印和背景图片的属性。
 */
export class RtcImage {
  /**
   * 直播视频上图片的 HTTP/HTTPS 地址。字符长度不得超过 1024 字节。
   */
  url?: string;
  /**
   * 图片在视频画面上的 x 坐标 (px)，以输出视频画面的左上角为原点。
   */
  x?: number;
  /**
   * 图片在视频画面上的 y 坐标 (px)，以输出视频画面的左上角为原点。
   */
  y?: number;
  /**
   * 图片在视频画面上的宽度 (px)。
   */
  width?: number;
  /**
   * 图片在视频画面上的高度 (px)。
   */
  height?: number;
  /**
   * 水印或背景图的图层编号。使用水印数组添加单张或多张水印时，必须向 zOrder 传值，取值范围为 [1,255]，否则 SDK 会报错。其余情况， zOrder 可选传值，取值范围为 [0,255]，0 为默认值。0 代表图层的最下层，255 代表图层的最上层。
   */
  zOrder?: number;
  /**
   * 水印或背景图片的透明度。取值范围为 [0.0,1.0]：
   *  0.0: 完全透明。
   *  1.0:（默认）完全不透明。
   */
  alpha?: number;
}

/**
 * 转码推流的高级功能配置。
 *
 * 如需使用转码推流高级功能，请[联系销售](https://www.shengwang.cn/contact-sales/)。
 */
export class LiveStreamAdvancedFeature {
  /**
   * 转码推流高级功能的名称，包含 LBHQ（低码率的高清视频功能） 和 VEO（优化的视频编码器功能）。
   */
  featureName?: string;
  /**
   * 是否启用转码推流的高级功能： true ：开启转码推流的高级功能。 false ：（默认）关闭转码推流的高级功能。
   */
  opened?: boolean;
}

/**
 * 网络连接状态。
 */
export enum ConnectionStateType {
  /**
   * 1: 网络连接断开。该状态表示 SDK 处于:
   *  调用 joinChannel 加入频道前的初始化阶段。
   *  或调用 leaveChannel 后的离开频道阶段。
   */
  ConnectionStateDisconnected = 1,
  /**
   * 2: 建立网络连接中。该状态表示 SDK 在调用 joinChannel 后正在与指定的频道建立连接。
   *  如果成功加入频道，App 会收到 onConnectionStateChanged 回调，通知当前网络状态变成 ConnectionStateConnected。
   *  建立连接后，SDK 还会初始化媒体，一切就绪后会回调 onJoinChannelSuccess 。
   */
  ConnectionStateConnecting = 2,
  /**
   * 3: 网络已连接。该状态表示用户已经加入频道，可以在频道内发布或订阅媒体流。如果因网络断开或切换而导致 SDK 与频道的连接中断，SDK 会自动重连，此时 App 会收到 onConnectionStateChanged 回调，通知当前网络状态变成 ConnectionStateReconnecting。
   */
  ConnectionStateConnected = 3,
  /**
   * 4: 重新建立网络连接中。该状态表示 SDK 之前曾加入过频道，但因网络等原因连接中断了，此时 SDK 会自动尝试重新接入频道。
   *  如果 SDK 无法在 10 秒内重新加入频道，则 onConnectionLost 会被触发，SDK 会一直保持在 ConnectionStateReconnecting 的状态，并不断尝试重新加入频道。
   *  如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，则应用程序会收到 onConnectionStateChanged 回调，通知 App 的网络状态进入 ConnectionStateFailed，SDK 停止尝试重连。
   */
  ConnectionStateReconnecting = 4,
  /**
   * 5: 网络连接失败。该状态表示 SDK 已不再尝试重新加入频道，需要调用 leaveChannel 离开频道。
   *  如果用户还想重新加入频道，则需要再次调用 joinChannel 。
   *  如果 SDK 因服务器端使用 RESTful API 禁止加入频道，则 App 会收到 onConnectionStateChanged 。
   */
  ConnectionStateFailed = 5,
}

/**
 * 参与转码合流的每个主播的设置。
 */
export class TranscodingUser {
  /**
   * 主播的用户 ID。
   */
  uid?: number;
  /**
   * 主播视频画面在输出视频画面的 x 坐标 (px)，以输出视频画面的左上角为原点。取值范围为[0,width]，width 为 LiveTranscoding 中设置的 width 。
   */
  x?: number;
  /**
   * 主播视频画面在输出视频画面的 y 坐标 (px)，以输出视频画面的左上角为原点。取值范围为[0,height]，height 为 LiveTranscoding 中设置的 height 。
   */
  y?: number;
  /**
   * 主播视频画面的宽 (px)。
   */
  width?: number;
  /**
   * 主播视频画面的高 (px)。
   */
  height?: number;
  /**
   * 如果取值小于 0 或大于 100，会返回错误 ErrInvalidArgument 。
   *  支持将 zOrder 设置为 0。 主播视频画面的图层编号。取值范围为 [0,100]。
   *  0:（默认）视频画面位于图层的最下层。
   *  100: 视频画面位于图层的最上层。
   */
  zOrder?: number;
  /**
   * 主播视频画面的透明度。取值范围为 [0.0,1.0]。
   *  0.0: 完全透明。
   *  1.0:（默认）完全不透明。
   */
  alpha?: number;
  /**
   * 取值不为 0 时，需要使用特殊的播放器。 主播音频在输出音频中占用的声道。默认值为 0，取值范围为 [0,5]： 0 : （推荐）默认混音设置，最多支持双声道，与主播上行音频相关。 1 : 主播音频在输出音频的 FL 声道。如果主播上行音频是多声道，声网服务器会先把多声道混音成单声道。 2 : 主播音频在输出音频的 FC 声道。如果主播上行音频是多声道，声网服务器会先把多声道混音成单声道。 3 : 主播音频在输出音频的 FR 声道。如果主播上行音频是多声道，声网服务器会先把多声道混音成单声道。 4 : 主播音频在输出音频的 BL 声道。如果主播上行音频是多声道，声网服务器会先把多声道混音成单声道。 5 : 主播音频在输出音频的 BR 声道。如果主播上行音频是多声道，声网服务器会先把多声道混音成单声道。 0xFF 或取值大于 5 : 该主播音频静音，声网服务器移除该主播的音频。
   */
  audioChannel?: number;
}

/**
 * 旁路推流的转码属性。
 */
export class LiveTranscoding {
  /**
   * 推流视频的总宽度，默认值 360，单位为像素。
   *  如果推视频流， width 取值范围为 [64,1920]。如果取值低于 64，声网服务器会自动调整为 64； 如果取值高于 1920，声网服务器会自动调整为 1920。
   *  如果推音频流，请将 width 和 height 设为 0。
   */
  width?: number;
  /**
   * 推流视频的总高度，默认值 640，单位为像素。
   *  如果推视频流， height 取值范围为 [64,1080]。如果取值低于 64，声网服务器会自动调整为 64； 如果取值高于 1080，声网服务器会自动调整为 1080。
   *  如果推音频流，请将 width 和 height 设为 0。
   */
  height?: number;
  /**
   * 视频编码码率，单位为 Kbps。该参数无需设置，保留默认值 STANDARD_BITRATE 即可，SDK 会根据你设定的视频分辨率和帧率自动匹配最合适的码率。有关视频分辨率和帧率的对应关系，详见[视频属性](https://doc.shengwang.cn/doc/rtc/electron/basic-features/video-profile#%E8%A7%86%E9%A2%91%E5%B1%9E%E6%80%A7%E5%8F%82%E8%80%83)。
   */
  videoBitrate?: number;
  /**
   * 用于旁路直播的输出视频的帧率。取值范围是 (0,30]，单位为 fps。15 fps 为默认值。 声网服务器会将高于 30 fps 的帧率统一调整为 30 fps。
   */
  videoFramerate?: number;
  /**
   * 弃用不建议使用。 低延时模式 true : 低延时，不保证画质。 false :（默认值）高延时，保证画质。
   */
  lowLatency?: boolean;
  /**
   * 用于旁路直播的输出视频的 GOP (Group of Pictures)。单位为帧。默认值为 30。
   */
  videoGop?: number;
  /**
   * 用于旁路直播的输出视频的编码规格。可以设置为 66、77 或 100，详见 VideoCodecProfileType 。 如果你把这个参数设为其他值，声网服务器会将其调整为默认值。
   */
  videoCodecProfile?: VideoCodecProfileType;
  /**
   * 用于旁路直播的输出视频的背景色，格式为 RGB 定义下的十六进制整数，不要带 # 号，如 0xFFB6C1 表示浅粉色。默认0x000000，黑色。
   */
  backgroundColor?: number;
  /**
   * 用于旁路直播的输出视频的编解码类型。详见 VideoCodecTypeForStream 。
   */
  videoCodecType?: VideoCodecTypeForStream;
  /**
   * 参与合图的用户数量，默认 0。取值范围为 [0,17]。
   */
  userCount?: number;
  /**
   * 用于管理参与旁路直播的视频转码合图的用户。最多支持 17 人同时参与转码合图。详见 TranscodingUser 。
   */
  transcodingUsers?: TranscodingUser[];
  /**
   * 预留参数：用户自定义的发送到旁路推流客户端的信息，用于填充 H264/H265 视频中 SEI 帧内容。长度限制：4096 字节。关于 SEI 的详细信息，详见 [SEI 帧相关问题](https://doc.shengwang.cn/faq/quality-issues/sei)。
   */
  transcodingExtraInfo?: string;
  /**
   * 发送给 CDN 客户端的 metadata。 弃用已废弃，不建议使用。
   */
  metadata?: string;
  /**
   * 直播视频上的水印。图片格式需为 PNG。详见 RtcImage 。
   * 你可以添加一个水印，或使用数组的方式添加多个水印。该参数与 watermarkCount 搭配使用。
   */
  watermark?: RtcImage[];
  /**
   * 直播视频上的水印的数量。水印和背景图的总数量需大于等于 0 且小于等于 10。该参数与 watermark 搭配使用。
   */
  watermarkCount?: number;
  /**
   * 直播视频上的背景图。图片格式需为 PNG。详见 RtcImage 。
   * 你可以添加一张背景图，或使用数组的方式添加多张背景图。该参数与 backgroundImageCount 搭配使用。
   */
  backgroundImage?: RtcImage[];
  /**
   * 直播视频上的背景图的数量。水印和背景图的总数量需大于等于 0 且小于等于 10。该参数与 backgroundImage 搭配使用。
   */
  backgroundImageCount?: number;
  /**
   * 用于旁路推流的输出媒体流的音频采样率 (Hz)，详见 AudioSampleRateType 。
   */
  audioSampleRate?: AudioSampleRateType;
  /**
   * 用于旁路直播的输出音频的码率。单位为 Kbps，默认值为 48，最大值为 128。
   */
  audioBitrate?: number;
  /**
   * 用于旁路直播的输出音频的声道数，默认值为 1。取值范围为 [1,5] 中的整型，建议取 1 或 2。3、4、5 需要特殊播放器支持：
   *  1: （默认）单声道
   *  2: 双声道
   *  3: 三声道
   *  4: 四声道
   *  5: 五声道
   */
  audioChannels?: number;
  /**
   * 用于旁路直播输出音频的编码规格。详见 AudioCodecProfileType 。
   */
  audioCodecProfile?: AudioCodecProfileType;
  /**
   * 转码推流的高级功能。详见 LiveStreamAdvancedFeature 。
   */
  advancedFeatures?: LiveStreamAdvancedFeature[];
  /**
   * 开启的高级功能数量。默认值为 0。
   */
  advancedFeatureCount?: number;
}

/**
 * 参与本地合图的视频流。
 */
export class TranscodingVideoStream {
  /**
   * 参与本地合图的视频源类型。详见 VideoSourceType 。
   */
  sourceType?: VideoSourceType;
  /**
   * 远端用户 ID。 请仅在参与本地合图的视频源类型为 VideoSourceRemote 时，使用该参数。
   */
  remoteUserUid?: number;
  /**
   * 请仅在参与本地合图的视频源类型为图片时，使用该参数。 本地图片的路径。 示例路径：
   *  macOS: ~/Pictures/image.png
   *  Windows: C:\\Users\\{username}\\Pictures\\image.png
   */
  imageUrl?: string;
  /**
   * （可选）媒体播放器 ID。当你将 sourceType 设置为 VideoSourceMediaPlayer 时，需要设置该参数。
   */
  mediaPlayerId?: number;
  /**
   * 参与本地合图的视频的左上角相对于合图画布左上角（原点）的横向位移。
   */
  x?: number;
  /**
   * 参与本地合图的视频的左上角相对于合图画布左上角（原点）的纵向位移。
   */
  y?: number;
  /**
   * 参与本地合图的视频的宽度 (px)。
   */
  width?: number;
  /**
   * 参与本地合图的视频的高度 (px)。
   */
  height?: number;
  /**
   * 参与本地合图的视频所属的图层的编号。取值范围为 [0,100]。
   *  0:（默认值）图层在最下层。
   *  100: 图层在最上层。
   */
  zOrder?: number;
  /**
   * 参与本地合图的视频的透明度。取值范围为 [0.0,1.0]。 0.0 表示透明度为完全透明，1.0 表示透明度为完全不透明。
   */
  alpha?: number;
  /**
   * 该参数仅对视频源类型为摄像头的视频生效。 是否对参与本地合图的的视频进行镜像： true : 将参与本地合图的视频进行镜像。 false : （默认值）不将参与本地合图的视频进行镜像。
   */
  mirror?: boolean;
}

/**
 * 本地合图的配置。
 */
export class LocalTranscoderConfiguration {
  /**
   * 参与本地合图的视频流的数量。
   */
  streamCount?: number;
  /**
   * 参与本地合图的视频流。详见 TranscodingVideoStream 。
   */
  videoInputStreams?: TranscodingVideoStream[];
  /**
   * 本地合图后，合图视频的编码配置。详见 VideoEncoderConfiguration 。
   */
  videoOutputConfiguration?: VideoEncoderConfiguration;
  /**
   * @ignore
   */
  syncWithPrimaryCamera?: boolean;
}

/**
 * 本地合图错误代码。
 */
export enum VideoTranscoderError {
  /**
   * 1：指定的视频源未开始进行视频采集，你需要为其创建视频轨道并开始视频采集。
   */
  VtErrVideoSourceNotReady = 1,
  /**
   * 2：视频源类型无效，你需要重新指定支持的视频源类型。
   */
  VtErrInvalidVideoSourceType = 2,
  /**
   * 3：图片路径无效，你需要重新指定正确的图片路径。
   */
  VtErrInvalidImagePath = 3,
  /**
   * 4：图片格式无效，需确保图片格式为 PNG、JPEG 或 GIF 中的一种。
   */
  VtErrUnsupportImageFormat = 4,
  /**
   * 5：合图后的视频编码分辨率无效。
   */
  VtErrInvalidLayout = 5,
  /**
   * 20：内部未知错误。
   */
  VtErrInternal = 20,
}

/**
 * 在本地进行合流的音频源。
 */
export class MixedAudioStream {
  /**
   * 音频源的类型。详见 AudioSourceType 。
   */
  sourceType?: AudioSourceType;
  /**
   * 远端用户 ID。 当参与本地音频合流的音频源类型为 AudioSourceRemoteUser 时，需要设置该参数。
   */
  remoteUserUid?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * 音频轨道 ID。将该参数设置为调用 createCustomAudioTrack 方法返回的自定义音频轨道 ID。 当参与本地本地音频合流的音频源类型为 AudioSourceCustom 时，需要设置该参数。
   */
  trackId?: number;
}

/**
 * 本地音频合流配置。
 */
export class LocalAudioMixerConfiguration {
  /**
   * 在本地进行合流的音频流数量。
   */
  streamCount?: number;
  /**
   * 在本地进行合流的音频源。详见 MixedAudioStream 。
   */
  audioInputStreams?: MixedAudioStream[];
  /**
   * 合流后的音频流是否使用本地麦克风采集的音频帧时间戳： true ：（默认）使用本地麦克风采集的音频帧时间戳。如果要所有本地采集的音频流保持同步，你可以将参数设置为该值。 false ：不使用本地麦克风采集的音频帧时间戳，SDK 会采用合流的音频帧被构建时的时间戳。
   */
  syncWithLocalMic?: boolean;
}

/**
 * Last mile 网络探测配置。
 */
export class LastmileProbeConfig {
  /**
   * 是否探测上行网络。有些用户，如直播频道中的普通观众，不需要进行网络探测: true : 探测上行网络。 false : 不探测上行网络。
   */
  probeUplink?: boolean;
  /**
   * 是否探测下行网络： true : 探测下行网络。 false : 不探测下行网络。
   */
  probeDownlink?: boolean;
  /**
   * 用户期望的最高发送码率，单位为 bps，范围为 [100000,5000000]。建议参考 setVideoEncoderConfiguration 中的码率值设置该参数的值。
   */
  expectedUplinkBitrate?: number;
  /**
   * 用户期望的最高接收码率，单位为 bps，范围为 [100000,5000000]。
   */
  expectedDownlinkBitrate?: number;
}

/**
 * Last mile 质量探测结果的状态。
 */
export enum LastmileProbeResultState {
  /**
   * 1: 表示本次 last mile 质量探测的结果是完整的。
   */
  LastmileProbeResultComplete = 1,
  /**
   * 2: 表示本次 last mile 质量探测未进行带宽预测，因此结果不完整。一个可能的原因是测试资源暂时受限。
   */
  LastmileProbeResultIncompleteNoBwe = 2,
  /**
   * 3: 未进行 last mile 质量探测。一个可能的原因是网络连接中断。
   */
  LastmileProbeResultUnavailable = 3,
}

/**
 * 上行或下行 Last mile 网络质量探测结果。
 */
export class LastmileProbeOneWayResult {
  /**
   * 丢包率。
   */
  packetLossRate?: number;
  /**
   * 网络抖动 (ms)。
   */
  jitter?: number;
  /**
   * 可用网络带宽预估 (bps)。
   */
  availableBandwidth?: number;
}

/**
 * 上下行 Last mile 网络质量探测结果。
 */
export class LastmileProbeResult {
  /**
   * Last mile 质量探测结果的状态。详见: LastmileProbeResultState 。
   */
  state?: LastmileProbeResultState;
  /**
   * 上行网络质量报告。详见 LastmileProbeOneWayResult 。
   */
  uplinkReport?: LastmileProbeOneWayResult;
  /**
   * 下行网络质量报告。详见 LastmileProbeOneWayResult 。
   */
  downlinkReport?: LastmileProbeOneWayResult;
  /**
   * 往返时延 (ms)。
   */
  rtt?: number;
}

/**
 * 网络连接状态发生变化的原因。
 */
export enum ConnectionChangedReasonType {
  /**
   * 0: 建立网络连接中。
   */
  ConnectionChangedConnecting = 0,
  /**
   * 1: 成功加入频道。
   */
  ConnectionChangedJoinSuccess = 1,
  /**
   * 2: 网络连接中断。
   */
  ConnectionChangedInterrupted = 2,
  /**
   * 3: 网络连接被服务器禁止。例如，当用户被踢出频道时，会返回该状态。
   */
  ConnectionChangedBannedByServer = 3,
  /**
   * 4: 加入频道失败。SDK 在尝试加入频道 20 分钟后仍未能加入频道，会返回该状态并不再尝试重连。请提示用户尝试切换网络后重新加入频道。
   */
  ConnectionChangedJoinFailed = 4,
  /**
   * 5: 离开频道。
   */
  ConnectionChangedLeaveChannel = 5,
  /**
   * 6: App ID 无效。请使用有效的 APP ID 重新加入频道，并确保你使用的 App ID 与在声网控制台生成的一致。
   */
  ConnectionChangedInvalidAppId = 6,
  /**
   * 7: 频道名无效。请更换有效的频道名重新加入频道。有效的频道名为长度在 64 字节以内的字符串。以下为支持的字符集范围（共 89 个字符）:
   */
  ConnectionChangedInvalidChannelName = 7,
  /**
   * 8: Token 无效。一般有以下原因：
   *  你的项目启用了 App Certificate，但加入频道未使用 Token。
   *  在调用 joinChannel 加入频道时指定的用户 ID 与生成 Token 时传入的用户 ID 不一致。
   *  生成的 Token 和加入频道使用的 Token 不一致。 请确保：
   *  当你的项目启用了 App Certificate 时，使用 Token 加入频道。
   *  生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致，
   *  生成的 Token 和加入频道使用的 Token 一致。
   */
  ConnectionChangedInvalidToken = 8,
  /**
   * 9: 当前使用的 Token 已过期。请重新在你的服务端生成 Token，然后用新的 Token 重新加入频道。
   */
  ConnectionChangedTokenExpired = 9,
  /**
   * 10: 此用户被服务器禁止。一般有以下原因：
   *  用户已进入频道，再次调用加入频道的 API，例如 joinChannel ，会返回此状态。停止调用该方法即可。
   *  用户在进行通话测试时尝试加入频道。等待通话测试结束后再加入频道即可。
   */
  ConnectionChangedRejectedByServer = 10,
  /**
   * 11: 由于设置了代理服务器，SDK 尝试重连。
   */
  ConnectionChangedSettingProxyServer = 11,
  /**
   * 12: 更新 Token 引起网络连接状态改变。
   */
  ConnectionChangedRenewToken = 12,
  /**
   * 13: 客户端 IP 地址变更。如多次收到该状态码，请提示用户更换网络后尝试重新加入频道。
   */
  ConnectionChangedClientIpAddressChanged = 13,
  /**
   * 14: SDK 和服务器连接保活超时，进入自动重连状态。
   */
  ConnectionChangedKeepAliveTimeout = 14,
  /**
   * 15: 重新加入频道成功。
   */
  ConnectionChangedRejoinSuccess = 15,
  /**
   * 16: SDK 和服务器失去连接。
   */
  ConnectionChangedLost = 16,
  /**
   * 17: 连接状态变化由回声测试引起。
   */
  ConnectionChangedEchoTest = 17,
  /**
   * 18: 本地 IP 地址被用户更改。
   */
  ConnectionChangedClientIpAddressChangedByUser = 18,
  /**
   * 19: 使用相同的 UID 从不同的设备加入同一频道。
   */
  ConnectionChangedSameUidLogin = 19,
  /**
   * 20: 频道内主播人数已达上限。
   */
  ConnectionChangedTooManyBroadcasters = 20,
  /**
   * @ignore
   */
  ConnectionChangedLicenseValidationFailure = 21,
  /**
   * @ignore
   */
  ConnectionChangedCertificationVeryfyFailure = 22,
  /**
   * @ignore
   */
  ConnectionChangedStreamChannelNotAvailable = 23,
  /**
   * @ignore
   */
  ConnectionChangedInconsistentAppid = 24,
}

/**
 * 切换用户角色失败的原因。
 */
export enum ClientRoleChangeFailedReason {
  /**
   * 1: 频道内主播人数达到上限。 该枚举仅在开启 128 人功能后报告。主播人数的上限根据开启 128 人功能时实际配置的人数而定。
   */
  ClientRoleChangeFailedTooManyBroadcasters = 1,
  /**
   * 2: 请求被服务端拒绝。建议提示用户重新尝试切换用户角色。
   */
  ClientRoleChangeFailedNotAuthorized = 2,
  /**
   * 3: 请求超时。建议提示用户检查网络连接状况后重新尝试切换用户角色。 废弃：该枚举值自 v4.4.0 起废弃，不建议使用。
   */
  ClientRoleChangeFailedRequestTimeOut = 3,
  /**
   * 4: 网络连接断开。可根据 onConnectionStateChanged 报告的 reason ，排查网络连接失败的具体原因。 废弃：该枚举值自 v4.4.0 起废弃，不建议使用。
   */
  ClientRoleChangeFailedConnectionFailed = 4,
}

/**
 * 网络连接类型。
 */
export enum NetworkType {
  /**
   * -1: 网络连接类型未知。
   */
  NetworkTypeUnknown = -1,
  /**
   * 0: 网络连接已断开。
   */
  NetworkTypeDisconnected = 0,
  /**
   * 1: 网络类型为 LAN。
   */
  NetworkTypeLan = 1,
  /**
   * 2: 网络类型为 Wi-Fi（包含热点）。
   */
  NetworkTypeWifi = 2,
  /**
   * 3: 网络类型为 2G 移动网络。
   */
  NetworkTypeMobile2g = 3,
  /**
   * 4: 网络类型为 3G 移动网络。
   */
  NetworkTypeMobile3g = 4,
  /**
   * 5: 网络类型为 4G 移动网络。
   */
  NetworkTypeMobile4g = 5,
  /**
   * 6: 网络类型为 5G 移动网络。
   */
  NetworkTypeMobile5g = 6,
}

/**
 * 视图设置模式。
 */
export enum VideoViewSetupMode {
  /**
   * 0：(默认) 清除已添加的所有视图、替换为新的视图。
   */
  VideoViewSetupReplace = 0,
  /**
   * 1：增加一个视图。
   */
  VideoViewSetupAdd = 1,
  /**
   * 2：删除一个视图。 当你不再需要使用某个视图时，建议及时设置 setupMode 为 VideoViewSetupRemove 删除视图，否则可能会导致渲染资源泄漏。
   */
  VideoViewSetupRemove = 2,
}

/**
 * 视频画布对象的属性。
 */
export class VideoCanvas {
  /**
   * 发布视频源的用户 ID。
   */
  uid?: number;
  /**
   * 预留参数。
   */
  subviewUid?: number;
  /**
   * 视频显示窗口。
   */
  view?: any;
  /**
   * 视频画布的背景颜色，格式为 RGBA。默认值为 0x00000000，代表黑色。
   */
  backgroundColor?: number;
  /**
   * 视频渲染模式，详见 RenderModeType 。
   */
  renderMode?: RenderModeType;
  /**
   * 视图镜像模式，详见 VideoMirrorModeType 。
   *  本地视图镜像模式：如果你使用前置摄像头，默认启动本地视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
   *  远端用户视图镜像模式：默认关闭远端用户的镜像模式。
   */
  mirrorMode?: VideoMirrorModeType;
  /**
   * 视图设置模式。详见 VideoViewSetupMode 。
   */
  setupMode?: VideoViewSetupMode;
  /**
   * 视频源的类型，详见 VideoSourceType 。
   */
  sourceType?: VideoSourceType;
  /**
   * 媒体播放器 ID。可通过 getMediaPlayerId 获取。
   */
  mediaPlayerId?: number;
  /**
   * （可选）视频帧的展示区域，详见 Rectangle 。其中， width 和 height 表示该区域的视频像素宽度和高度。默认值为空值 (宽或高为 0)，表示展示实际分辨率的视频帧。
   */
  cropArea?: Rectangle;
  /**
   * 仅当发送端开启 Alpha 传输功能时，接收端才能渲染 Alpha 通道的信息。
   *  如需开启 Alpha 传输功能，请[联系技术支持](https://ticket.shengwang.cn/)。 （可选）是否开启 Alpha 遮罩渲染： true ：开启 Alpha 遮罩渲染。 false ：（默认）关闭 Alpha 遮罩渲染。 Alpha 遮罩渲染可以创建具有透明效果的图像，还可以提取视频中的人像。与其他方法结合使用时，可以实现人像画中画、添加水印等效果。
   */
  enableAlphaMask?: boolean;
  /**
   * 视频帧在视频链路中的位置。详见 VideoModulePosition 。
   */
  position?: VideoModulePosition;
}

/**
 * 亮度明暗对比度。
 */
export enum LighteningContrastLevel {
  /**
   * 0：低对比度。
   */
  LighteningContrastLow = 0,
  /**
   * 1：正常对比度。
   */
  LighteningContrastNormal = 1,
  /**
   * 2：高对比度。
   */
  LighteningContrastHigh = 2,
}

/**
 * 美颜选项。
 */
export class BeautyOptions {
  /**
   * 对比度，常与 lighteningLevel 搭配使用。取值越大，明暗对比程度越大。详见 LighteningContrastLevel 。
   */
  lighteningContrastLevel?: LighteningContrastLevel;
  /**
   * 美白程度，取值范围为 [0.0,1.0]，其中 0.0 表示原始亮度，默认值为 0.0。取值越大，美白程度越大。
   */
  lighteningLevel?: number;
  /**
   * 磨皮程度，取值范围为 [0.0,1.0]，其中 0.0 表示原始磨皮程度，默认值为 0.0。取值越大，磨皮程度越大。
   */
  smoothnessLevel?: number;
  /**
   * 红润度，取值范围为 [0.0,1.0]，其中 0.0 表示原始红润度，默认值为 0.0。取值越大，红润程度越大。
   */
  rednessLevel?: number;
  /**
   * 锐化程度，取值范围为 [0.0,1.0]，其中 0.0 表示原始锐度，默认值为 0.0。取值越大，锐化程度越大。
   */
  sharpnessLevel?: number;
}

/**
 * 选择需要调整的具体美型区域。
 *
 * 自从 自 v4.4.0 版本新增。
 */
export enum FaceShapeArea {
  /**
   * （-1）：默认值，表示无效区域，美型效果不生效。
   */
  FaceShapeAreaNone = -1,
  /**
   * （100）：头部区域，用于实现小头效果。取值范围为 [0, 100]，默认值为 50。数值越大，调整越明显。
   */
  FaceShapeAreaHeadscale = 100,
  /**
   * （101）：额头区域，用于调整发际线高度。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaForehead = 101,
  /**
   * （102）：脸部轮廓区域，用于实现瘦脸效果。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaFacecontour = 102,
  /**
   * （103）：脸部长度区域，用于拉长脸部。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaFacelength = 103,
  /**
   * （104）：脸部宽度区域，用于实现窄脸效果。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaFacewidth = 104,
  /**
   * （105）：颧骨区域，用于调整颧骨宽度。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaCheekbone = 105,
  /**
   * （106）：面颊区域，用于调整面颊宽度。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaCheek = 106,
  /**
   * （107）：下颌骨区域，用于调整下颌骨宽度。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaMandible = 107,
  /**
   * （108）：下巴区域，用于调整下巴长度。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaChin = 108,
  /**
   * （200）：眼睛区域，用于实现大眼效果。取值范围为 [0, 100]，默认值为 50。数值越大，调整越明显。
   */
  FaceShapeAreaEyescale = 200,
  /**
   * （201）：眼距区域，用于调整两眼间距。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaEyedistance = 201,
  /**
   * （202）：眼睛位置区域，用于调整眼睛整体位置。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaEyeposition = 202,
  /**
   * （203）：下眼睑区域，用于调整下眼睑形态。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaLowereyelid = 203,
  /**
   * （204）：瞳孔区域，用于调整瞳孔大小。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaEyepupils = 204,
  /**
   * （205）：内眼角区域，用于调整内眼角形态。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaEyeinnercorner = 205,
  /**
   * （206）：外眼角区域，用于调整外眼角形态。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaEyeoutercorner = 206,
  /**
   * （300）：鼻子长度区域，用于拉长鼻子。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaNoselength = 300,
  /**
   * （301）：鼻子宽度区域，用于实现瘦鼻效果。取值范围为 [0, 100]，默认值为 0。数值越大，瘦鼻效果越明显。
   */
  FaceShapeAreaNosewidth = 301,
  /**
   * （302）：鼻翼区域，用于调整鼻翼宽度。取值范围为 [0, 100]，默认值为 10。数值越大，调整越明显。
   */
  FaceShapeAreaNosewing = 302,
  /**
   * （303）：鼻根区域，用于调整鼻根高度。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaNoseroot = 303,
  /**
   * （304）：鼻梁区域，用于调整鼻梁高度。取值范围为 [0, 100]，默认值为 50。数值越大，调整越明显。
   */
  FaceShapeAreaNosebridge = 304,
  /**
   * （305）：鼻尖区域，用于调整鼻尖形态。取值范围为 [0, 100]，默认值为 50。数值越大，调整越明显。
   */
  FaceShapeAreaNosetip = 305,
  /**
   * （306）：整体鼻子区域，用于统一调整鼻部形态。取值范围为 [-100, 100]，默认值为 50。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaNosegeneral = 306,
  /**
   * （400）：嘴巴区域，用于实现大嘴效果。取值范围为 [-100, 100]，默认值为 20。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaMouthscale = 400,
  /**
   * （401）：嘴巴位置区域，用于调整嘴巴整体位置。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaMouthposition = 401,
  /**
   * （402）：嘴角微笑区域，用于调整嘴角上扬程度。取值范围为 [0, 1]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaMouthsmile = 402,
  /**
   * （403）：唇形区域，用于调整唇部形态。取值范围为 [0, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaMouthlip = 403,
  /**
   * （500）：眉毛位置区域，用于调整眉毛整体位置。取值范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
   */
  FaceShapeAreaEyebrowposition = 500,
  /**
   * （501）：眉毛粗细区域，用于调整眉毛粗细。取值范围为 [-100, 100]，默认值为 0。数值越大，调整越明显。
   */
  FaceShapeAreaEyebrowthickness = 501,
}

/**
 * 滤镜效果选项。
 */
export class FaceShapeAreaOptions {
  /**
   * 美型部位，详见 FaceShapeArea 。
   */
  shapeArea?: FaceShapeArea;
  /**
   * 修饰力度。各部位的修饰力度定义（包括修饰的方向、范围、预设值等）有所不同，详见 FaceShapeArea 。
   */
  shapeIntensity?: number;
}

/**
 * 美型风格妆特效选项。
 *
 * 自从 自 v4.4.0 版本新增。
 */
export enum FaceShapeBeautyStyle {
  /**
   * （0）：（默认）女性风格妆特效。
   */
  FaceShapeBeautyStyleFemale = 0,
  /**
   * （1）：男性风格妆特效。
   */
  FaceShapeBeautyStyleMale = 1,
  /**
   * （2）：自然风格妆特效，仅对面部特征进行最小调整。
   */
  FaceShapeBeautyStyleNatural = 2,
}

/**
 * 美型风格选项。
 */
export class FaceShapeBeautyOptions {
  /**
   * 美型风格，详见 FaceShapeBeautyStyle 。
   */
  shapeStyle?: FaceShapeBeautyStyle;
  /**
   * 美型风格强度，取值范围为 [0,100]，其中默认值为 0.0，表示无美型效果。取值越大，修饰部位的改变越明显。
   */
  styleIntensity?: number;
}

/**
 * 滤镜效果选项。
 */
export class FilterEffectOptions {
  /**
   * 3D 立方体贴图文件的本地绝对路径，该文件用于实现自定义滤镜效果。引用的 .cube 文件必须严格遵循立方体查找表（Cube LUT）规范，否则滤镜效果无法生效。以下为 .cube 文件的示例： LUT_3D_SIZE 32
   * 0.0039215689 0 0.0039215682
   * 0.0086021447 0.0037950677 0
   * ...
   * 0.0728652592 0.0039215689 0
   *  立方体贴图文件首行的 LUT_3D_SIZE 标识符表示三维查找表的尺寸，滤镜效果的 LUT 尺寸目前仅支持设为 32。
   *  SDK 提供了一个内置的 built_in_whiten_filter.cube 文件，传入该文件的绝对路径可实现美白滤镜效果。
   */
  path?: string;
  /**
   * 滤镜效果强度，取值范围为 [0.0,1.0]，其中 0.0 表示无滤镜效果，默认值为 0.5。取值越大，滤镜效果越强。
   */
  strength?: number;
}

/**
 * 暗光增强模式。
 */
export enum LowLightEnhanceMode {
  /**
   * 0:（默认）自动模式。SDK 会根据环境光亮度自动开启或关闭暗光增强功能，以适时补光和防止过曝。
   */
  LowLightEnhanceAuto = 0,
  /**
   * 1：手动模式。用户需手动开启或关闭暗光增强功能。
   */
  LowLightEnhanceManual = 1,
}

/**
 * 暗光增强等级。
 */
export enum LowLightEnhanceLevel {
  /**
   * 0:（默认）优先画质的暗光增强，会处理视频图像的亮度、细节、噪声，消耗的性能适中，处理速度适中，综合画质最优。
   */
  LowLightEnhanceLevelHighQuality = 0,
  /**
   * 1：优先性能的暗光增强，会处理视频图像的亮度、细节，消耗的性能较少，处理速度较快。
   */
  LowLightEnhanceLevelFast = 1,
}

/**
 * 暗光增强选项。
 */
export class LowlightEnhanceOptions {
  /**
   * 暗光增强模式。详见 LowLightEnhanceMode 。
   */
  mode?: LowLightEnhanceMode;
  /**
   * 暗光增强等级。详见 LowLightEnhanceLevel 。
   */
  level?: LowLightEnhanceLevel;
}

/**
 * 视频降噪模式。
 */
export enum VideoDenoiserMode {
  /**
   * 0:（默认）自动模式。SDK 会根据环境光亮度自动开启或关闭视频降噪功能。
   */
  VideoDenoiserAuto = 0,
  /**
   * 1：手动模式。用户需手动开启或关闭视频降噪功能。
   */
  VideoDenoiserManual = 1,
}

/**
 * 视频降噪等级。
 */
export enum VideoDenoiserLevel {
  /**
   * 0:（默认）优先画质的视频降噪。是在性能消耗和视频降噪效果中取平衡的等级。性能消耗适中，视频降噪速度适中，综合画质最优。
   */
  VideoDenoiserLevelHighQuality = 0,
  /**
   * 1：优先性能的视频降噪。是在性能消耗和视频降噪效果中侧重于节省性能的等级。性能消耗较少，视频降噪速度较快。为避免处理后的视频有明显的拖影效果，建议你在摄像头固定的情况下使用该设置。
   */
  VideoDenoiserLevelFast = 1,
}

/**
 * 视频降噪选项。
 */
export class VideoDenoiserOptions {
  /**
   * 视频降噪模式。
   */
  mode?: VideoDenoiserMode;
  /**
   * 视频降噪等级。
   */
  level?: VideoDenoiserLevel;
}

/**
 * 色彩增强选项。
 */
export class ColorEnhanceOptions {
  /**
   * 色彩增强程度。取值范围为 [0.0,1.0]。 0.0 表示不对视频进行色彩增强。取值越大，色彩增强的程度越大。默认值为 0.5 。
   */
  strengthLevel?: number;
  /**
   * 肤色保护程度。取值范围为 [0.0,1.0]。 0.0 表示不对肤色进行保护。取值越大，肤色保护的程度越大。默认值为 1.0 。
   *  当色彩增强程度较大时，人像肤色会明显失真，你需要设置肤色保护程度；
   *  肤色保护程度较大时，色彩增强效果会略微降低。 因此，为获取最佳的色彩增强效果，建议你动态调节 strengthLevel 和 skinProtectLevel 以实现最合适的效果。
   */
  skinProtectLevel?: number;
}

/**
 * 自定义的背景。
 */
export enum BackgroundSourceType {
  /**
   * @ignore
   */
  BackgroundNone = 0,
  /**
   * 1:（默认）背景为纯色。
   */
  BackgroundColor = 1,
  /**
   * 2: 背景为 PNG、JPG 格式的图片。
   */
  BackgroundImg = 2,
  /**
   * 3: 背景为虚化处理后的背景。
   */
  BackgroundBlur = 3,
  /**
   * 4: 背景为 MP4、AVI、MKV、FLV 等格式的本地视频。
   */
  BackgroundVideo = 4,
}

/**
 * 自定义背景图的虚化程度。
 */
export enum BackgroundBlurDegree {
  /**
   * 1: 自定义背景图的虚化程度为低。用户差不多能看清背景。
   */
  BlurDegreeLow = 1,
  /**
   * 2: 自定义背景图的虚化程度为中。用户较难看清背景。
   */
  BlurDegreeMedium = 2,
  /**
   * 3:（默认）自定义背景图的虚化程度为高。用户很难看清背景。
   */
  BlurDegreeHigh = 3,
}

/**
 * 自定义的背景。
 */
export class VirtualBackgroundSource {
  /**
   * 自定义的背景。详见 BackgroundSourceType 。
   */
  background_source_type?: BackgroundSourceType;
  /**
   * 自定义的背景图颜色。格式为 RGB 定义下的十六进制整数，不带 # 号，如 0xFFB6C1 表示浅粉色。 默认值为 0xFFFFFF，表示白色。 取值范围为 [0x000000，0xffffff]。如果取值非法，SDK 会用白色背景图替换原背景图。 该参数仅在自定义背景为以下类型时生效，具体效果如下：
   *  BackgroundColor：背景图为该参数传入颜色的纯色图片。
   *  BackgroundImg：如果 source 中的图片使用了透明背景，则会使用该参数传入的颜色填充透明背景。
   */
  color?: number;
  /**
   * 自定义背景的本地绝对路径。支持 PNG、JPG、MP4、 AVI、 MKV 和 FLV 格式。如果路径无效，SDK 会使用原背景图或 color 指定的纯色背景。 该参数仅在自定义背景图类型为 BackgroundImg 或 BackgroundVideo 时生效。
   */
  source?: string;
  /**
   * 自定义背景图的模糊程度。详见 BackgroundBlurDegree 。 该参数仅在自定义背景图类型为 BackgroundBlur 时生效。
   */
  blur_degree?: BackgroundBlurDegree;
}

/**
 * 进行背景处理的算法。
 */
export enum SegModelType {
  /**
   * 1: (默认) 适用于所有场景下的背景处理算法。
   */
  SegModelAi = 1,
  /**
   * 2: 仅适用于绿幕背景下的背景处理算法。
   */
  SegModelGreen = 2,
}

/**
 * 屏幕颜色类型。
 */
export enum ScreenColorType {
  /**
   * （0）：自动选择屏幕颜色。
   */
  ScreenColorAuto = 0,
  /**
   * （1）：绿色屏幕颜色。
   */
  ScreenColorGreen = 1,
  /**
   * （2）：蓝色屏幕颜色。
   */
  ScreenColorBlue = 2,
}

/**
 * 背景图像的处理属性。
 */
export class SegmentationProperty {
  /**
   * 进行背景处理的算法。详见 SegModelType 。
   */
  modelType?: SegModelType;
  /**
   * 对画面中背景颜色识别的精度范围。取值范围为 [0,1]，默认值为 0.5。取值越大，代表可识别的纯色范围越大。当该参数取值过大时，人像边缘和人像范围内的纯色也会被识别。建议你根据实际效果动态调整该参数的值。 该参数仅在 modelType 设置为 SegModelGreen 时生效。
   */
  greenCapacity?: number;
  /**
   * 屏幕颜色类型。详见 ScreenColorType 。
   */
  screenColorType?: ScreenColorType;
}

/**
 * 自定义音频采集轨道的类型。
 */
export enum AudioTrackType {
  /**
   * @ignore
   */
  AudioTrackInvalid = -1,
  /**
   * 0：可混流的音频轨道。支持与其他音频流 (例如：麦克风采集的音频流) 混音后，再在本地播放或发布到频道中。与非混流的音频轨道相比，延迟更高。
   */
  AudioTrackMixable = 0,
  /**
   * 1：非混流的音频轨道。会替代麦克风采集，且不支持与其他音频流混音。与可混流的音频轨道相比，延迟更低。 如指定 AudioTrackDirect ，则必须在调用 joinChannel 加入频道时，将 ChannelMediaOptions 中的 publishMicrophoneTrack 设为 false ，否则加入频道失败并返回错误码 -2.
   */
  AudioTrackDirect = 1,
}

/**
 * 自定义音频轨道的配置选项。
 */
export class AudioTrackConfig {
  /**
   * 是否启用本地音频播放： true ：(默认) 启用本地音频播放。 false ：不启用本地音频播放。
   */
  enableLocalPlayback?: boolean;
  /**
   * 该参数设置仅对 AudioTrackDirect 类型的自定义音频采集轨道生效。 是否启用音频处理模块： true ：启用音频处理模块，应用回声消除 (AEC)、降噪 (ANS) 和自动增益控制 (AGC) 效果。 false ：（默认）不启用音频处理模块。
   */
  enableAudioProcessing?: boolean;
}

/**
 * 预设的美声效果选项。
 */
export enum VoiceBeautifierPreset {
  /**
   * 原声，即关闭美声效果。
   */
  VoiceBeautifierOff = 0x00000000,
  /**
   * 磁性（男）。 该设置仅对男声有效，请勿用于设置女声，否则音频会失真。
   */
  ChatBeautifierMagnetic = 0x01010100,
  /**
   * 清新（女）。 该设置仅对女声有效，请勿用于设置男声，否则音频会失真。
   */
  ChatBeautifierFresh = 0x01010200,
  /**
   * 活力（女）。 该设置仅对女声有效，请勿用于设置男声，否则音频会失真。
   */
  ChatBeautifierVitality = 0x01010300,
  /**
   * 歌唱美声。
   *  如果调用 setVoiceBeautifierPreset (SingingBeautifier)，你可以美化男声并添加歌声在小房间的混响效果。请勿用于设置女声，否则音频会失真。
   *  如果调用 setVoiceBeautifierParameters (SingingBeautifier, param1, param2)，你可以美化男声或女声并添加混响效果。
   */
  SingingBeautifier = 0x01020100,
  /**
   * 浑厚。
   */
  TimbreTransformationVigorous = 0x01030100,
  /**
   * 低沉。
   */
  TimbreTransformationDeep = 0x01030200,
  /**
   * 圆润。
   */
  TimbreTransformationMellow = 0x01030300,
  /**
   * 假音。
   */
  TimbreTransformationFalsetto = 0x01030400,
  /**
   * 饱满。
   */
  TimbreTransformationFull = 0x01030500,
  /**
   * 清澈。
   */
  TimbreTransformationClear = 0x01030600,
  /**
   * 高亢。
   */
  TimbreTransformationResounding = 0x01030700,
  /**
   * 嘹亮。
   */
  TimbreTransformationRinging = 0x01030800,
  /**
   * 超高音质，即让音频更清晰、细节更丰富。
   *  为达到更好的效果，建议在调用 setVoiceBeautifierPreset 前将 setAudioProfile2 的 profile 参数设置为 AudioProfileMusicHighQuality (4) 或 AudioProfileMusicHighQualityStereo (5)，且 scenario 参数设置为 AudioScenarioGameStreaming (3)。
   *  如果用户的音频采集设备可以高度还原音频细节，建议你不要开启超高音质，否则 SDK 会过度还原音频细节，达不到预期效果。
   */
  UltraHighQualityVoice = 0x01040100,
}

/**
 * 预设的音效选项。
 *
 * setAudioProfile profile
 * 预设音效 profile
 *  RoomAcousticsVirtualStereo
 *  RoomAcoustics3dVoice
 *  RoomAcousticsVirtualSurroundSound AudioProfileMusicHighQualityStereo 或 AudioProfileMusicStandardStereo 其他预设音效（除 AudioEffectOff 以外） AudioProfileMusicHighQuality 或 AudioProfileMusicHighQualityStereo
 */
export enum AudioEffectPreset {
  /**
   * 原声，即关闭人声音效。
   */
  AudioEffectOff = 0x00000000,
  /**
   * KTV。
   */
  RoomAcousticsKtv = 0x02010100,
  /**
   * 演唱会。
   */
  RoomAcousticsVocalConcert = 0x02010200,
  /**
   * 录音棚。
   */
  RoomAcousticsStudio = 0x02010300,
  /**
   * 留声机。
   */
  RoomAcousticsPhonograph = 0x02010400,
  /**
   * 虚拟立体声，即 SDK 将单声道的音频渲染出双声道的音效。
   */
  RoomAcousticsVirtualStereo = 0x02010500,
  /**
   * 空旷。
   */
  RoomAcousticsSpacial = 0x02010600,
  /**
   * 空灵。
   */
  RoomAcousticsEthereal = 0x02010700,
  /**
   * 3D 人声，即 SDK 将音频渲染出在用户周围环绕的效果。环绕周期默认为 10 秒。设置该音效后，你还可以调用 setAudioEffectParameters 修改环绕周期。 启用 3D 人声后，用户需要使用支持双声道的音频播放设备才能听到预期效果。
   */
  RoomAcoustics3dVoice = 0x02010800,
  /**
   * 虚拟环绕声，即 SDK 在双声道的基础上产生仿真的环绕声场，从而营造出具有环绕感的音效。 启用虚拟环绕声后，用户需要使用支持双声道的音频播放设备才能听到预期效果。
   */
  RoomAcousticsVirtualSurroundSound = 0x02010900,
  /**
   * 合唱。声网推荐你在合唱场景下使用，使人声更具空间立体感。
   */
  RoomAcousticsChorus = 0x02010d00,
  /**
   * 大叔。 建议用于处理男声，否则无法达到预期效果。
   */
  VoiceChangerEffectUncle = 0x02020100,
  /**
   * 老年男性。 建议用于处理男声，否则无法达到预期效果。
   */
  VoiceChangerEffectOldman = 0x02020200,
  /**
   * 男孩。 建议用于处理男声，否则无法达到预期效果。
   */
  VoiceChangerEffectBoy = 0x02020300,
  /**
   * 少女。 建议用于处理女声，否则无法达到预期效果。
   */
  VoiceChangerEffectSister = 0x02020400,
  /**
   * 女孩。 建议用于处理女声，否则无法达到预期效果。
   */
  VoiceChangerEffectGirl = 0x02020500,
  /**
   * 猪八戒。
   */
  VoiceChangerEffectPigking = 0x02020600,
  /**
   * 绿巨人。
   */
  VoiceChangerEffectHulk = 0x02020700,
  /**
   * R&B。
   */
  StyleTransformationRnb = 0x02030100,
  /**
   * 流行。
   */
  StyleTransformationPopular = 0x02030200,
  /**
   * 电音，即 SDK 以主音音高为 C 的自然大调为基础修正音频的实际音高。设置该音效后，你还可以调用 setAudioEffectParameters 调整修音的基础调式和主音音高。
   */
  PitchCorrection = 0x02040100,
}

/**
 * 预设的变声效果选项。
 */
export enum VoiceConversionPreset {
  /**
   * 原声，即关闭变声效果。
   */
  VoiceConversionOff = 0x00000000,
  /**
   * 中性。为避免音频失真，请确保仅对女声设置该效果。
   */
  VoiceChangerNeutral = 0x03010100,
  /**
   * 甜美。为避免音频失真，请确保仅对女声设置该效果。
   */
  VoiceChangerSweet = 0x03010200,
  /**
   * 稳重。为避免音频失真，请确保仅对男声设置该效果。
   */
  VoiceChangerSolid = 0x03010300,
  /**
   * 低沉。为避免音频失真，请确保仅对男声设置该效果。
   */
  VoiceChangerBass = 0x03010400,
  /**
   * @ignore
   */
  VoiceChangerCartoon = 0x03010500,
  /**
   * @ignore
   */
  VoiceChangerChildlike = 0x03010600,
  /**
   * @ignore
   */
  VoiceChangerPhoneOperator = 0x03010700,
  /**
   * @ignore
   */
  VoiceChangerMonster = 0x03010800,
  /**
   * @ignore
   */
  VoiceChangerTransformers = 0x03010900,
  /**
   * @ignore
   */
  VoiceChangerGroot = 0x03010a00,
  /**
   * @ignore
   */
  VoiceChangerDarthVader = 0x03010b00,
  /**
   * @ignore
   */
  VoiceChangerIronLady = 0x03010c00,
  /**
   * @ignore
   */
  VoiceChangerShinChan = 0x03010d00,
  /**
   * @ignore
   */
  VoiceChangerGirlishMan = 0x03010e00,
  /**
   * @ignore
   */
  VoiceChangerChipmunk = 0x03010f00,
}

/**
 * 预设的耳机均衡器类型。
 */
export enum HeadphoneEqualizerPreset {
  /**
   * 关闭耳机均衡器，收听原始音频。
   */
  HeadphoneEqualizerOff = 0x00000000,
  /**
   * 使用头戴式耳机的均衡器。
   */
  HeadphoneEqualizerOverear = 0x04000001,
  /**
   * 使用入耳式耳机的均衡器。
   */
  HeadphoneEqualizerInear = 0x04000002,
}

/**
 * AI 调音器音效类型。
 */
export enum VoiceAiTunerType {
  /**
   * 0：大叔音。低沉而有磁性的男声。
   */
  VoiceAiTunerMatureMale = 0,
  /**
   * 1：清新男音。清新而略带甜美的男声。
   */
  VoiceAiTunerFreshMale = 1,
  /**
   * 2：御姐音。深沉而富有魅力的女声。
   */
  VoiceAiTunerElegantFemale = 2,
  /**
   * 3：萝莉音。高亢而可爱的女声。
   */
  VoiceAiTunerSweetFemale = 3,
  /**
   * 4：暖男歌声。温暖而悠扬的男声。
   */
  VoiceAiTunerWarmMaleSinging = 4,
  /**
   * 5：温柔女歌声。柔和而细腻的女声。
   */
  VoiceAiTunerGentleFemaleSinging = 5,
  /**
   * 6：烟嗓叔音歌声。独特的沙哑男声。
   */
  VoiceAiTunerHuskyMaleSinging = 6,
  /**
   * 7：温暖御姐歌声。温暖而成熟的女声。
   */
  VoiceAiTunerWarmElegantFemaleSinging = 7,
  /**
   * 8：力量男歌声。强劲而有力的男声。
   */
  VoiceAiTunerPowerfulMaleSinging = 8,
  /**
   * 9：梦幻女歌声。梦幻而柔美的女声。
   */
  VoiceAiTunerDreamyFemaleSinging = 9,
}

/**
 * @ignore
 */
export class ScreenAudioParameters {
  /**
   * @ignore
   */
  sampleRate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  captureSignalVolume?: number;
  /**
   * @ignore
   */
  excludeCurrentProcessAudio?: boolean;
}

/**
 * 屏幕共享的参数配置。
 */
export class ScreenCaptureParameters {
  /**
   * @ignore
   */
  captureAudio?: boolean;
  /**
   * @ignore
   */
  audioParams?: ScreenAudioParameters;
  /**
   * 在共享文档的场景（ScreenScenarioDocument）下设置编码分辨率时，选择以下两种方式其中之一。
   *  如果你需要最优的画质，建议将编码分辨率设置为与采集分辨率相同。
   *  如果你希望在画质、带宽和系统性能之间达到相对平衡，则：
   *  当采集分辨率大于 1920 × 1080 时，建议编码分辨率不低于 1920 × 1080。
   *  当采集分辨率低于 1920 × 1080 时，建议编码分辨率不低于 1280 × 720。 屏幕共享流的视频编码分辨率。详见 VideoDimensions 。默认值为 1920 × 1080，即 2073600 像素。该像素值为计费标准。 当共享的屏幕分辨率宽高比与该值设置不一致时，SDK 按如下策略进行编码。假设 dimensions 设为 1920 × 1080：
   *  如果屏幕分辨率小于 dimensions ，如 1000 × 1000，SDK 直接按 1000 × 1000 进行编码。
   *  如果屏幕分辨率大于 dimensions ，如 2000 × 1500，SDK 按屏幕分辨率的宽高比，即 4:3，取 dimensions 以内的最大分辨率进行编码，即 1440 × 1080。
   */
  dimensions?: VideoDimensions;
  /**
   * 在 Windows 和 macOS 平台上，表示屏幕共享流的视频编码帧率。单位为 fps；默认值为 5，建议不要超过 15。
   */
  frameRate?: number;
  /**
   * 在 Windows 和 macOS 平台上，表示屏幕共享流的视频编码码率。单位为 Kbps；默认值为 0，表示 SDK 根据当前共享屏幕的分辨率计算出一个合理的值。
   */
  bitrate?: number;
  /**
   * 受 macOS 系统限制，在共享屏幕时将该参数设置为 false 无效（共享窗口时无影响）。 是否采集鼠标用于屏幕共享： true :（默认）采集鼠标。 false : 不采集鼠标。
   */
  captureMouseCursor?: boolean;
  /**
   * 由于 macOS 系统限制，设置该成员将窗口前置时，如果当前的应用存在多个窗口，只会将主窗口前置。 调用 startScreenCaptureByWindowId 方法共享窗口时，是否将该窗口前置： true : 前置窗口。 false :（默认）不前置窗口。
   */
  windowFocus?: boolean;
  /**
   * 待屏蔽窗口的 ID 列表。调用 startScreenCaptureByDisplayId 开启屏幕共享时，你可以通过该参数屏蔽指定的窗口。你可以在调用 updateScreenCaptureParameters 更新屏幕共享的配置参数时，通过该参数动态屏蔽指定的窗口。 Electron for 统信 OS SDK 不支持该参数。
   */
  excludeWindowList?: any[];
  /**
   * 待屏蔽窗口的数量。 在 Windows 平台上，该参数最大值不超过 24，如果超过该值，则屏蔽窗口功能失效。
   * Electron for 信创 OS SDK 不支持该参数。
   */
  excludeWindowCount?: number;
  /**
   * 描边的宽度 (px)。默认值为 5，取值范围为 (0,50]。 该参数仅在 highLighted 设置为 true 时生效。
   */
  highLightWidth?: number;
  /**
   * 在 Windows 平台上，指描边的 ARGB 颜色。默认值为 0xFF8CBF26。
   *  在 macOS 平台上， COLOR_CLASS 指 NSColor 。
   */
  highLightColor?: number;
  /**
   * 当你在共享窗口或屏幕的部分区域时，如果将该参数设置为 true ，SDK 会对整个窗口或屏幕进行描边。 是否对共享的窗口或屏幕进行描边： true : 描边。 false : （默认）不描边。
   */
  enableHighLight?: boolean;
}

/**
 * 录音音质。
 */
export enum AudioRecordingQualityType {
  /**
   * 0: 低音质。采样率为 32 kHz，录制 10 分钟的文件大小为 1.2 M 左右。
   */
  AudioRecordingQualityLow = 0,
  /**
   * 1: 中音质。采样率为 32 kHz，录制 10 分钟的文件大小为 2 M 左右。
   */
  AudioRecordingQualityMedium = 1,
  /**
   * 2: 高音质。采样率为 32 kHz，录制 10 分钟的文件大小为 3.75 M 左右。
   */
  AudioRecordingQualityHigh = 2,
  /**
   * 3: 超高音质。采样率为 32 KHz，录制 10 分钟的文件大小约为 7.5 M 左右。
   */
  AudioRecordingQualityUltraHigh = 3,
}

/**
 * 录音内容。在 startAudioRecording 中设置。
 */
export enum AudioFileRecordingType {
  /**
   * 1: 仅录制本地用户的音频。
   */
  AudioFileRecordingMic = 1,
  /**
   * 2: 仅录制所有远端用户的音频。
   */
  AudioFileRecordingPlayback = 2,
  /**
   * 3: 录制本地和所有远端用户混音后的音频。
   */
  AudioFileRecordingMixed = 3,
}

/**
 * 音频编码内容。
 */
export enum AudioEncodedFrameObserverPosition {
  /**
   * 1: 仅编码本地用户的音频。
   */
  AudioEncodedFrameObserverPositionRecord = 1,
  /**
   * 2: 仅编码所有远端用户的音频。
   */
  AudioEncodedFrameObserverPositionPlayback = 2,
  /**
   * 3: 编码本地和所有远端用户混音后的音频。
   */
  AudioEncodedFrameObserverPositionMixed = 3,
}

/**
 * 录音配置。
 */
export class AudioRecordingConfiguration {
  /**
   * 录音文件在本地保存的绝对路径，需精确到文件名及格式。例如： C:\music\audio.aac 。 请确保你指定的路径存在并且可写。
   */
  filePath?: string;
  /**
   * 设置是否编码音频数据： true : 将音频数据用 AAC 编码。 false :（默认）不编码音频数据，直接保存录制的音频数据。
   */
  encode?: boolean;
  /**
   * 如果把该参数设为 44100 或 48000，为保证录音效果，建议录制 WAV 文件或 quality 为 AudioRecordingQualityMedium 或 AudioRecordingQualityHigh 的 AAC 文件。 录音采样率（Hz）。
   *  16000
   *  32000 （默认）
   *  44100
   *  48000
   */
  sampleRate?: number;
  /**
   * 录音内容。详见 AudioFileRecordingType 。
   */
  fileRecordingType?: AudioFileRecordingType;
  /**
   * 录音音质。详见 AudioRecordingQualityType 。 该参数仅适用于 AAC 文件。
   */
  quality?: AudioRecordingQualityType;
  /**
   * 实际录制的音频声道与你采集的音频声道有关：
   *  如果采集的音频为单声道， recordingChannel 设为 2 ， 则录制的音频为经过单声道数据拷贝后的双声道数据，而不是立体声。
   *  如果采集的音频为双声道， recordingChannel 设为 1 ，则录制的音频为经过双声道数据混合后的单声道数据。 此外，集成方案也会影响最终录制的音频声道。因此，如果你希望录制立体声，请[联系技术支持](https://ticket.shengwang.cn/)协助。 录制的音频声道。目前支持如下取值：
   *  1:（默认）单声道。
   *  2: 双声道。
   */
  recordingChannel?: number;
}

/**
 * 编码后音频的观测器设置。
 */
export class AudioEncodedFrameObserverConfig {
  /**
   * 音频编码内容。详见 AudioEncodedFrameObserverPosition 。
   */
  postionType?: AudioEncodedFrameObserverPosition;
  /**
   * 音频编码类型。详见 AudioEncodingType 。
   */
  encodingType?: AudioEncodingType;
}

/**
 * 编码后音频的观测器。
 */
export interface IAudioEncodedFrameObserver {
  /**
   * 获取本地用户的音频编码数据。
   *
   * 调用 registerAudioEncodedFrameObserver 并将音频编码内容设为 AudioEncodedFrameObserverPositionRecord 后，你可以通过该回调获取本地用户的音频编码数据。
   *
   * @param frameBuffer 音频 buffer。
   * @param length 音频数据长度，单位为字节。
   * @param audioEncodedFrameInfo 编码后音频的信息。详见 EncodedAudioFrameInfo 。
   */
  onRecordAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * 获取所有远端用户的音频编码数据。
   *
   * 调用 registerAudioEncodedFrameObserver 并将音频编码内容设为 AudioEncodedFrameObserverPositionPlayback 后，你可以通过该回调获取所有远端用户的音频编码数据。
   *
   * @param frameBuffer 音频 buffer。
   * @param length 音频数据长度，单位为字节。
   * @param audioEncodedFrameInfo 编码后音频的信息。详见 EncodedAudioFrameInfo 。
   */
  onPlaybackAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * 获取本地和所有远端用户混音后的音频编码数据。
   *
   * 调用 registerAudioEncodedFrameObserver 并将音频编码内容设为 AudioEncodedFrameObserverPositionMixed 后，你可以通过该回调获取本地和所有远端用户混音、编码后的音频数据。
   *
   * @param frameBuffer 音频 buffer。
   * @param length 音频数据长度，单位为字节。
   * @param audioEncodedFrameInfo 编码后音频的信息。详见 EncodedAudioFrameInfo 。
   */
  onMixedAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;
}

/**
 * 访问区域，即 SDK 连接的服务器所在的区域。
 */
export enum AreaCode {
  /**
   * 中国大陆。
   */
  AreaCodeCn = 0x00000001,
  /**
   * 北美区域。
   */
  AreaCodeNa = 0x00000002,
  /**
   * 欧洲区域。
   */
  AreaCodeEu = 0x00000004,
  /**
   * 除中国以外的亚洲区域。
   */
  AreaCodeAs = 0x00000008,
  /**
   * 日本。
   */
  AreaCodeJp = 0x00000010,
  /**
   * 印度。
   */
  AreaCodeIn = 0x00000020,
  /**
   * 全球。
   */
  AreaCodeGlob = 0xffffffff,
}

/**
 * @ignore
 */
export enum AreaCodeEx {
  /**
   * @ignore
   */
  AreaCodeOc = 0x00000040,
  /**
   * @ignore
   */
  AreaCodeSa = 0x00000080,
  /**
   * @ignore
   */
  AreaCodeAf = 0x00000100,
  /**
   * @ignore
   */
  AreaCodeKr = 0x00000200,
  /**
   * @ignore
   */
  AreaCodeHkmc = 0x00000400,
  /**
   * @ignore
   */
  AreaCodeUs = 0x00000800,
  /**
   * @ignore
   */
  AreaCodeRu = 0x00001000,
  /**
   * @ignore
   */
  AreaCodeOvs = 0xfffffffe,
}

/**
 * 跨频道媒体流转发出错的错误码。
 */
export enum ChannelMediaRelayError {
  /**
   * 0: 一切正常。
   */
  RelayOk = 0,
  /**
   * 1: 服务器回应出错。
   */
  RelayErrorServerErrorResponse = 1,
  /**
   * 2: 服务器无回应。
   * 该错误可能是网络状况不佳导致的。如果在发起跨频道连麦时报告该错误，你可以稍后重试；如果在跨频道连麦过程中报告该错误，你可以调用 leaveChannel 方法离开频道。
   * 该错误也可能是由于当前的 App ID 未开启跨频道连麦导致的。你可以[联系技术支持](https://ticket.shengwang.cn/)申请开通跨频道连麦。
   */
  RelayErrorServerNoResponse = 2,
  /**
   * 3: SDK 无法获取服务，可能是因为服务器资源有限导致。
   */
  RelayErrorNoResourceAvailable = 3,
  /**
   * 4: 发起跨频道转发媒体流请求失败。
   */
  RelayErrorFailedJoinSrc = 4,
  /**
   * 5: 接受跨频道转发媒体流请求失败。
   */
  RelayErrorFailedJoinDest = 5,
  /**
   * 6: 服务器接收跨频道转发媒体流失败。
   */
  RelayErrorFailedPacketReceivedFromSrc = 6,
  /**
   * 7: 服务器发送跨频道转发媒体流失败。
   */
  RelayErrorFailedPacketSentToDest = 7,
  /**
   * 8: SDK 因网络质量不佳与服务器断开。你可以调用 leaveChannel 方法离开当前频道。
   */
  RelayErrorServerConnectionLost = 8,
  /**
   * 9: 服务器内部出错。
   */
  RelayErrorInternalError = 9,
  /**
   * 10: 源频道的 Token 已过期。
   */
  RelayErrorSrcTokenExpired = 10,
  /**
   * 11: 目标频道的 Token 已过期。
   */
  RelayErrorDestTokenExpired = 11,
}

/**
 * 跨频道媒体流转发状态码。
 */
export enum ChannelMediaRelayState {
  /**
   * 0: 初始状态。在成功调用 stopChannelMediaRelay 停止跨频道媒体流转发后， onChannelMediaRelayStateChanged 会回调该状态。
   */
  RelayStateIdle = 0,
  /**
   * 1: SDK 尝试跨频道。
   */
  RelayStateConnecting = 1,
  /**
   * 2: 源频道主播成功加入目标频道。
   */
  RelayStateRunning = 2,
  /**
   * 3: 发生异常，详见 onChannelMediaRelayStateChanged 的 code 参数提示的错误信息。
   */
  RelayStateFailure = 3,
}

/**
 * 频道媒体信息。
 */
export class ChannelMediaInfo {
  /**
   * 用户 ID。
   */
  uid?: number;
  /**
   * 频道名。
   */
  channelName?: string;
  /**
   * 能加入频道的 Token。
   */
  token?: string;
}

/**
 * 跨频道媒体流转发配置信息。
 */
export class ChannelMediaRelayConfiguration {
  /**
   * 源频道信息 ChannelMediaInfo ，包含如下成员： channelName ：源频道名。默认值为 null ，表示 SDK 填充当前的频道名。 token ：能加入源频道的 token 。由你在 srcInfo 中设置的 channelName 和 uid 生成。
   *  如未启用 App Certificate，可直接将该参数设为默认值 null ，表示 SDK 填充 App ID。
   *  如已启用 App Certificate，则务必填入使用 channelName 和 uid 生成的 token ，且其中的 uid 必须为 0。 uid ：标识源频道中的转发媒体流的 UID。默认值为 0，请勿修改。
   */
  srcInfo?: ChannelMediaInfo;
  /**
   * 由于目标频道中任意频道的 token 过期会导致所有跨频道推流停止，因此建议你将目标频道的 token 设置为相同的过期时长。 目标频道信息 ChannelMediaInfo ，包含如下成员： channelName ：目标频道的频道名。 token ：能加入目标频道的 token 。由你在 destInfos 中设置的 channelName 和 uid 生成。
   *  如未启用 App Certificate，可直接将该参数设为默认值 null ，表示 SDK 填充 App ID。
   *  如已启用 App Certificate，则务必填入使用 channelName 和 uid 生成的 token 。 uid ：标识目标频道中的转发媒体流的 UID。取值范围为 0 到 (2 32-1），请确保与目标频道中的所有 UID 不同。默认值为 0，表示 SDK 随机分配一个 UID。
   */
  destInfos?: ChannelMediaInfo[];
  /**
   * 目标频道数量，默认值为 0，取值范围为 [0,6]。该参数应与你在 destInfos 中定义的 ChannelMediaInfo 数组的数目一致。
   */
  destCount?: number;
}

/**
 * 上行网络信息。
 */
export class UplinkNetworkInfo {
  /**
   * 目标视频编码器的码率 (bps)。
   */
  video_encoder_target_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class PeerDownlinkInfo {
  /**
   * @ignore
   */
  userId?: string;
  /**
   * @ignore
   */
  stream_type?: VideoStreamType;
  /**
   * @ignore
   */
  current_downscale_level?: RemoteVideoDownscaleLevel;
  /**
   * @ignore
   */
  expected_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class DownlinkNetworkInfo {
  /**
   * @ignore
   */
  lastmile_buffer_delay_time_ms?: number;
  /**
   * @ignore
   */
  bandwidth_estimation_bps?: number;
  /**
   * @ignore
   */
  total_downscale_level_count?: number;
  /**
   * @ignore
   */
  peer_downlink_info?: PeerDownlinkInfo[];
  /**
   * @ignore
   */
  total_received_video_count?: number;
}

/**
 * 内置加密模式。
 *
 * 建议使用 Aes128Gcm2 或 Aes256Gcm2 加密模式。这两种模式支持使用盐，安全性更高。
 */
export enum EncryptionMode {
  /**
   * 1: 128 位 AES 加密，XTS 模式。
   */
  Aes128Xts = 1,
  /**
   * 2: 128 位 AES 加密，ECB 模式。
   */
  Aes128Ecb = 2,
  /**
   * 3: 256 位 AES 加密，XTS 模式。
   */
  Aes256Xts = 3,
  /**
   * 4: 128 位 SM4 加密，ECB 模式。
   */
  Sm4128Ecb = 4,
  /**
   * 5: 128 位 AES 加密，GCM 模式。
   */
  Aes128Gcm = 5,
  /**
   * 6: 256 位 AES 加密，GCM 模式。
   */
  Aes256Gcm = 6,
  /**
   * 7:（默认）128 位 AES 加密，GCM 模式。该加密模式需要设置盐（ encryptionKdfSalt ）。
   */
  Aes128Gcm2 = 7,
  /**
   * 8: 256 位 AES 加密，GCM 模式。该加密模式需要设置盐（ encryptionKdfSalt ）。
   */
  Aes256Gcm2 = 8,
  /**
   * 枚举值边界。
   */
  ModeEnd = 9,
}

/**
 * 配置内置加密模式和密钥。
 */
export class EncryptionConfig {
  /**
   * 内置加密模式。详见 EncryptionMode 。建议使用 Aes128Gcm2 或 Aes256Gcm2 加密模式。这两种模式支持使用盐，安全性更高。
   */
  encryptionMode?: EncryptionMode;
  /**
   * 内置加密密钥，字符串类型，长度无限制。建议使用 32 字节的密钥。 如果未指定该参数或将该参数设置为 null ，则无法启用内置加密，且 SDK 会返回错误码 -2 。
   */
  encryptionKey?: string;
  /**
   * 盐，长度为 32 字节。建议你在服务端使用 OpenSSL 生成盐。 只有在 Aes128Gcm2 或 Aes256Gcm2 加密模式下，该参数才生效。此时，需确保填入该参数的值不全为 0 。
   */
  encryptionKdfSalt?: number[];
  /**
   * 是否开启数据流加密： true ：开启数据流加密。 false ：（默认）关闭数据流加密。
   */
  datastreamEncryptionEnabled?: boolean;
}

/**
 * 内置加密的错误类型。
 */
export enum EncryptionErrorType {
  /**
   * 0: 内部原因。
   */
  EncryptionErrorInternalFailure = 0,
  /**
   * 1: 媒体流解密错误。请确保接收端和发送端使用的加密模式或密钥一致。
   */
  EncryptionErrorDecryptionFailure = 1,
  /**
   * 2: 媒体流加密错误。
   */
  EncryptionErrorEncryptionFailure = 2,
  /**
   * 3: 数据流解密错误。请确保接收端和发送端使用的加密模式或密钥一致。
   */
  EncryptionErrorDatastreamDecryptionFailure = 3,
  /**
   * 4: 数据流加密错误。
   */
  EncryptionErrorDatastreamEncryptionFailure = 4,
}

/**
 * @ignore
 */
export enum UploadErrorReason {
  /**
   * @ignore
   */
  UploadSuccess = 0,
  /**
   * @ignore
   */
  UploadNetError = 1,
  /**
   * @ignore
   */
  UploadServerError = 2,
}

/**
 * 调用 renewToken 后的错误码。
 *
 * 自从 自 4.6.0 版本新增。
 */
export enum RenewTokenErrorCode {
  /**
   * （0）：Token 更新成功。
   */
  RenewTokenSuccess = 0,
  /**
   * （1）：由于未知的服务器错误，Token 更新失败。建议检查用于生成 Token 的参数，重新生成 Token，并重试 renewToken 。
   */
  RenewTokenFailure = 1,
  /**
   * （2）：由于提供的 Token 已过期，Token 更新失败。建议生成一个过期时间更长的新 Token，并重试 renewToken 。
   */
  RenewTokenTokenExpired = 2,
  /**
   * （3）：由于提供的 Token 无效，Token 更新失败。常见原因包括：项目在声网控制台启用了 App 证书但加入频道时未使用 Token； joinChannel 中指定的 uid 与生成 Token 时使用的 uid 不一致； joinChannel 中指定的频道名与生成 Token 时使用的频道名不一致。建议检查 Token 的生成流程，重新生成 Token，并重试 renewToken 。
   */
  RenewTokenInvalidToken = 3,
  /**
   * （4）：由于 Token 中的频道名与当前频道不一致，Token 更新失败。建议检查频道名，重新生成 Token，并重试 renewToken 。
   */
  RenewTokenInvalidChannelName = 4,
  /**
   * （5）：由于 Token 中的 App ID 与当前 App ID 不一致，Token 更新失败。建议检查 App ID，重新生成 Token，并重试 renewToken 。
   */
  RenewTokenInconsistentAppid = 5,
  /**
   * （6）：由于发起了新的请求，之前的 Token 更新请求被取消。
   */
  RenewTokenCanceledByNewRequest = 6,
}

/**
 * 设备权限类型。
 */
export enum PermissionType {
  /**
   * 0: 音频采集设备的权限。
   */
  RecordAudio = 0,
  /**
   * 1: 摄像头权限。
   */
  Camera = 1,
  /**
   * @ignore
   */
  ScreenCapture = 2,
}

/**
 * 订阅状态。
 */
export enum StreamSubscribeState {
  /**
   * 0: 加入频道后的初始订阅状态。
   */
  SubStateIdle = 0,
  /**
   * 1: 订阅失败。可能是因为：
   *  远端用户：
   *  调用 muteLocalAudioStream (true) 或 muteLocalVideoStream (true) 停止发送本地媒体流。
   *  调用 disableAudio 或 disableVideo 关闭本地音频或视频模块。
   *  调用 enableLocalAudio (false) 或 enableLocalVideo (false) 关闭本地音频或视频采集。
   *  用户角色为观众。
   *  本地用户调用以下方法停止接收远端媒体流：
   *  调用 muteRemoteAudioStream (true)、 muteAllRemoteAudioStreams (true) 停止接收远端音频流。
   *  调用 muteRemoteVideoStream (true)、 muteAllRemoteVideoStreams (true) 停止接收远端视频流。
   */
  SubStateNoSubscribed = 1,
  /**
   * 2: 正在订阅。
   */
  SubStateSubscribing = 2,
  /**
   * 3: 收到了远端流，订阅成功。
   */
  SubStateSubscribed = 3,
}

/**
 * 发布状态。
 */
export enum StreamPublishState {
  /**
   * 0: 加入频道后的初始发布状态。
   */
  PubStateIdle = 0,
  /**
   * 1: 发布失败。可能是因为：
   *  本地用户调用 muteLocalAudioStream (true) 或 muteLocalVideoStream (true) 停止发送本地媒体流。
   *  本地用户调用 disableAudio 或 disableVideo 关闭本地音频或视频模块。
   *  本地用户调用 enableLocalAudio (false) 或 enableLocalVideo (false) 关闭本地音频或视频采集。
   *  本地用户角色为观众。
   */
  PubStateNoPublished = 1,
  /**
   * 2: 正在发布。
   */
  PubStatePublishing = 2,
  /**
   * 3: 发布成功。
   */
  PubStatePublished = 3,
}

/**
 * 音视频通话回路测试的配置。
 */
export class EchoTestConfiguration {
  /**
   * 用于渲染本地用户视频的视图。该参数仅适用于测试视频设备的场景，请确保 enableVideo 为 true。
   */
  view?: any;
  /**
   * 是否开启音频设备： true : (默认) 开启音频设备。如需测试音频设备，请设为 true。 false : 关闭音频设备。
   */
  enableAudio?: boolean;
  /**
   * 是否开启视频设备。暂不支持视频设备检测，请将该参数设为 false 。
   */
  enableVideo?: boolean;
  /**
   * 用于保证音视频通话回路测试安全性的 Token。如果你在控制台未启用 App 证书，则不需要向该参数传值；如果你在控制台已启用 App 证书，则必须向该参数传入 Token，且在你生成 Token 时使用的 uid 必须为 0xFFFFFFFF，使用的频道名必须为标识每个音视频通话回路测试的频道名。服务端生成 Token 的方式请参考[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   */
  token?: string;
  /**
   * 标识每个音视频通话回路测试的频道名。为保证回路测试功能正常，同一个项目（App ID） 的各终端用户在不同设备上做音视频通话回路测试时，传入的标识每个回路测试的频道名不能相同。
   */
  channelId?: string;
  /**
   * 设置返回音视频回路测试结果的时间间隔或延迟，取值范围为 [2,10]，单位为秒，默认为 2 秒。
   *  对于音频回路测试，测试结果会根据你设置的时间间隔返回。
   *  对于视频回路测试，视频画面会在短时间内显示，之后延迟会逐渐增加，直至达到你设置的延迟。
   */
  intervalInSeconds?: number;
}

/**
 * 用户的信息。
 */
export class UserInfo {
  /**
   * 用户 ID。
   */
  uid?: number;
  /**
   * 用户 Account。长度限制为 MaxUserAccountLengthType 。
   */
  userAccount?: string;
}

/**
 * 耳返 Audio filter 类型。
 */
export enum EarMonitoringFilterType {
  /**
   * 1<<0: 不在耳返中添加 Audio filter。
   */
  EarMonitoringFilterNone = 1 << 0,
  /**
   * 1<<1: 在耳返中添加人声效果 Audio filter。如果你实现了美声、音效等功能，用户可以在耳返中听到添加效果后的声音。
   */
  EarMonitoringFilterBuiltInAudioFilters = 1 << 1,
  /**
   * 1<<2: 在耳返中添加降噪 Audio filter。
   */
  EarMonitoringFilterNoiseSuppression = 1 << 2,
  /**
   * 1<<15: 复用发送端已进行过音效处理的 Audio filter。通过复用 Audio filter 降低耳返对 CPU 的占用率，但会增加耳返延迟，适用于需要降低 CPU 消耗且对耳返延迟不敏感的场景。
   */
  EarMonitoringFilterReusePostProcessingFilter = 1 << 15,
}

/**
 * @ignore
 */
export enum ThreadPriorityType {
  /**
   * @ignore
   */
  Lowest = 0,
  /**
   * @ignore
   */
  Low = 1,
  /**
   * @ignore
   */
  Normal = 2,
  /**
   * @ignore
   */
  High = 3,
  /**
   * @ignore
   */
  Highest = 4,
  /**
   * @ignore
   */
  Critical = 5,
}

/**
 * @ignore
 */
export class ScreenVideoParameters {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  contentHint?: VideoContentHint;
}

/**
 * @ignore
 */
export class ScreenCaptureParameters2 {
  /**
   * @ignore
   */
  captureAudio?: boolean;
  /**
   * @ignore
   */
  audioParams?: ScreenAudioParameters;
  /**
   * @ignore
   */
  captureVideo?: boolean;
  /**
   * @ignore
   */
  videoParams?: ScreenVideoParameters;
}

/**
 * 媒体帧的渲染状态。
 */
export enum MediaTraceEvent {
  /**
   * 0：视频帧已被渲染。
   */
  MediaTraceEventVideoRendered = 0,
  /**
   * 1：视频帧已被解码。
   */
  MediaTraceEventVideoDecoded = 1,
}

/**
 * 视频帧渲染过程中的指标信息。
 */
export class VideoRenderingTracingInfo {
  /**
   * 从调用 startMediaRenderingTracing 到触发 onVideoRenderingTracingResult 回调的时间间隔 (ms)。建议在加入频道前调用 startMediaRenderingTracing 。
   */
  elapsedTime?: number;
  /**
   * 从调用 startMediaRenderingTracing 到调用 joinChannel 的时间间隔 (ms)。负数表示在调用 joinChannel 后调用 startMediaRenderingTracing 。
   */
  start2JoinChannel?: number;
  /**
   * 从调用 joinChannel1 或 joinChannel 到成功加入频道的时间间隔 (ms)。
   */
  join2JoinSuccess?: number;
  /**
   * 如果本地用户在远端用户加入频道后调用 startMediaRenderingTracing ，则该值为 0，无参考意义。
   *  为提升远端用户出图速度，建议远端用户加入频道中后，本地用户再加入频道，以降低该值。
   *  如果本地用户成功加入频道前调用 startMediaRenderingTracing ，则该值为从本地用户成功加入频道到远端用户加入频道的时间间隔 (ms)。
   *  如果本地用户成功加入频道后调用 startMediaRenderingTracing ，则该值为从调用 startMediaRenderingTracing 到远端用户加入频道的时间间隔 (ms)。
   */
  joinSuccess2RemoteJoined?: number;
  /**
   * 如果本地用户在设置远端视图后再调用 startMediaRenderingTracing ，则该值为 0，无参考意义。
   *  为提升远端用户出图速度，建议在远端用户加入频道之前设置远端视图，或者远端用户加入频道后立即设置远端视图，以降低该值。
   *  如果本地用户在远端用户加入频道前调用 startMediaRenderingTracing ，则该值为从远端用户加入频道到本地用户设置远端视图的时间间隔 (ms)。
   *  如果本地用户在远端用户加入频道后调用 startMediaRenderingTracing ，则该值为从调用 startMediaRenderingTracing 到设置远端视图的时间间隔 (ms)。
   */
  remoteJoined2SetView?: number;
  /**
   * 如果在订阅远端视频流后再调用 startMediaRenderingTracing ，则该值为 0，无参考意义。
   *  为提升远端用户出图速度，建议在远端用户加入频道后，本地用户立即订阅远端视频流，以降低该值。
   *  如果本地用户在远端用户加入频道前调用 startMediaRenderingTracing ，则该值为从远端用户加入频道到订阅远端视频流的时间间隔 (ms)。
   *  如果本地用户在远端用户加入频道后调用 startMediaRenderingTracing ，则该值为从调用 startMediaRenderingTracing 到订阅远端视频流的时间间隔 (ms)。
   */
  remoteJoined2UnmuteVideo?: number;
  /**
   * 如果在接收到远端视频流后再调用 startMediaRenderingTracing ，则该值为 0，无参考意义。
   *  为提升远端用户出图速度，建议在远端用户加入频道后立即发布视频流，本地用户立即订阅远端视频流，以降低该值。
   *  如果本地用户在远端用户加入频道前调用 startMediaRenderingTracing ，则该值为从远端用户加入频道到本地用户接收到首个远端数据包的时间间隔 (ms)。
   *  如果本地用户在远端用户加入频道后调用 startMediaRenderingTracing ，则该值为从调用 startMediaRenderingTracing 到接收到首个远端数据包的时间间隔 (ms)。
   */
  remoteJoined2PacketReceived?: number;
}

/**
 * @ignore
 */
export enum ConfigFetchType {
  /**
   * @ignore
   */
  ConfigFetchTypeInitialize = 1,
  /**
   * @ignore
   */
  ConfigFetchTypeJoinChannel = 2,
}

/**
 * 与声网私有媒体服务器的连接模式。
 */
export enum LocalProxyMode {
  /**
   * 0：SDK 优先尝试连接指定的声网私有媒体服务器；如果无法连接到指定的声网私有媒体服务器，则连接声网 SD-RTN™。
   */
  ConnectivityFirst = 0,
  /**
   * 1：SDK 只尝试连接指定的声网私有媒体服务器。
   */
  LocalOnly = 1,
}

/**
 * 日志服务器的配置信息。
 */
export class LogUploadServerInfo {
  /**
   * 日志服务器的域名。
   */
  serverDomain?: string;
  /**
   * 日志在服务器上的存储路径。
   */
  serverPath?: string;
  /**
   * 日志服务器的端口。
   */
  serverPort?: number;
  /**
   * 日志服务器是否使用 HTTPS 协议： true : 使用 HTTPS 协议。 false : 使用 HTTP 协议。
   */
  serverHttps?: boolean;
}

/**
 * Local Access Point 的高级选项。
 */
export class AdvancedConfigInfo {
  /**
   * 自定义的日志上传服务器。默认情况下，SDK 会将日志上传至声网日志服务器。你可以通过该参数修改日志上传的服务器。详见 LogUploadServerInfo 。
   */
  logUploadServer?: LogUploadServerInfo;
}

/**
 * Local Access Point 配置。
 */
export class LocalAccessPointConfiguration {
  /**
   * Local Access Point 的对内 IP 地址列表。ipList 和 domainList 必须至少填一个。
   */
  ipList?: string[];
  /**
   * Local Access Point 对内 IP 地址的数量。该参数的值必须和你填入的 IP 地址的数量一致。
   */
  ipListSize?: number;
  /**
   * Local Access Point 的域名列表。SDK 会根据你填入的域名解析出 Local Access Point 的 IP 地址。域名解析的超时时间为 10 秒。ipList 和 domainList 必须至少填一个。如果你同时指定 IP 地址和域名，SDK 会将根据域名解析出来的 IP 地址和你指定的 IP 地址合并、去重，然后随机连接一个 IP 来实现负载均衡。
   */
  domainList?: string[];
  /**
   * Local Access Point 域名的数量。该参数的值必须和你填入的域名的数量一致。
   */
  domainListSize?: number;
  /**
   * 内网证书验证域名。如果传值为空，则用 SDK 默认的证书验证域名 secure-edge.local 。
   */
  verifyDomainName?: string;
  /**
   * 连接模式。详见 LocalProxyMode 。
   */
  mode?: LocalProxyMode;
  /**
   * Local Access Point 的高级选项。详见 AdvancedConfigInfo 。
   */
  advancedConfig?: AdvancedConfigInfo;
  /**
   * @ignore
   */
  disableAut?: boolean;
}

/**
 * 需录制的视频流类型。
 */
export enum RecorderStreamType {
  /**
   * 0: （默认）频道内的视频流。
   */
  Rtc = 0,
  /**
   * 1: 加入频道前，在本地预览的视频流。
   */
  Preview = 1,
}

/**
 * 需录制的音视频流的相关信息。
 */
export class RecorderStreamInfo {
  /**
   * 需录制的频道名称。
   */
  channelId?: string;
  /**
   * 需录制的用户 ID。
   */
  uid?: number;
  /**
   * 需录制的视频流类型，详见 RecorderStreamType 。
   */
  type?: RecorderStreamType;
}

/**
 * @ignore
 */
export enum RdtStreamType {
  /**
   * @ignore
   */
  RdtStreamCmd = 0,
  /**
   * @ignore
   */
  RdtStreamData = 1,
  /**
   * @ignore
   */
  RdtStreamCount = 2,
}

/**
 * @ignore
 */
export enum RdtState {
  /**
   * @ignore
   */
  RdtStateClosed = 0,
  /**
   * @ignore
   */
  RdtStateOpened = 1,
  /**
   * @ignore
   */
  RdtStateBlocked = 2,
  /**
   * @ignore
   */
  RdtStatePending = 3,
  /**
   * @ignore
   */
  RdtStateBroken = 4,
}

/**
 * 空间音频参数。
 */
export class SpatialAudioParams {
  /**
   * 远端用户或媒体播放器相对于本地用户的水平角。取值范围为 [0,360]，单位为度。其中：
   *  0:（默认）0 度，表示水平面的正前方。
   *  90: 90 度，表示水平面的正左方。
   *  180: 180 度，表示水平面的正后方。
   *  270: 270 度，表示水平面的正右方。
   *  360: 360 度，表示水平面的正前方。
   */
  speaker_azimuth?: number;
  /**
   * 远端用户或媒体播放器相对于本地用户的俯仰角。取值范围为 [-90,90]，单位为度。其中：
   *  0:（默认）0 度，表示水平面无旋转。
   *  -90: -90 度，表示水平面向下旋转 90 度。
   *  90: 90 度，表示水平面向上旋转 90 度。
   */
  speaker_elevation?: number;
  /**
   * 远端用户或媒体播放器相对于本地用户的距离。取值范围为 [1,50]，单位为米。默认值为 1 米。
   */
  speaker_distance?: number;
  /**
   * 远端用户或媒体播放器相对于本地用户的朝向。取值范围为 [0,180]，单位为度。其中：
   *  0:（默认）0 度，表示声源和听者朝向同一方向。
   *  180: 180 度，表示声源和听者面对面。
   */
  speaker_orientation?: number;
  /**
   * 是否开启声音模糊处理： true : 开启模糊处理。 false : （默认）关闭模糊处理。
   */
  enable_blur?: boolean;
  /**
   * 是否开启空气衰减，即模拟声音在空气中传播的音色衰减效果：在一定的传输距离下，高频声音衰减速度快、低频声音衰减速度慢。 true : （默认）开启空气衰减。需确认 speaker_attenuation 的值不为 0 ，否则该设置不生效。 false : 关闭空气衰减。
   */
  enable_air_absorb?: boolean;
  /**
   * 远端用户或媒体播放器的声音衰减系数，取值范围为[0,1]。其中：
   *  0：广播模式，即音量和音色均不随距离衰减，无论距离远近，本地用户听到的音量和音色都无变化。
   *  (0,0.5)：弱衰减模式，即音量和音色（需同时开启 enable_air_absorb ）在传播过程中仅发生微弱衰减，跟真实环境相比，声音可以传播得更远。
   *  0.5：（默认）模拟音量在真实环境下的衰减，效果等同于不设置 speaker_attenuation 参数。
   *  (0.5,1]：强衰减模式，即音量和音色（需同时开启 enable_air_absorb ）在传播过程中发生迅速衰减。
   */
  speaker_attenuation?: number;
  /**
   * 该参数适用于声源高速运动的场景（例如：赛车游戏），在普通音视频互动场景（语聊、连麦、在线 KTV）中不建议开启。
   *  开启该参数时，建议设定一个规律的周期（比如 30 ms），然后调用 updatePlayerPositionInfo 、 updateSelfPosition 和 updateRemotePosition 方法持续更新声源和接收方的相对距离。以下因素会导致多普勒效应达不到预期或者声音出现抖动：更新距离的周期过长，更新周期不规律，网络丢包或延迟导致距离信息丢失。 是否开启多普勒音效：当声源与接收声源者之间产生相对位移时，接收方听到的音调会发生变化。 true : 开启多普勒音效。 false : （默认）关闭多普勒音效。
   */
  enable_doppler?: boolean;
}

/**
 * @ignore
 */
export class VideoLayout {
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  strUid?: string;
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
  videoState?: number;
}
