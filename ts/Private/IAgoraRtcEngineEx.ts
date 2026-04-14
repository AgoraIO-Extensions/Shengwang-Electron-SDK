import './extension/IAgoraRtcEngineExExtension';
import {
  ChannelMediaRelayConfiguration,
  ConnectionStateType,
  DataStreamConfig,
  EncryptionConfig,
  LiveTranscoding,
  RdtStreamType,
  SimulcastConfig,
  SimulcastStreamConfig,
  SimulcastStreamMode,
  SpatialAudioParams,
  UserInfo,
  VideoCanvas,
  VideoEncoderConfiguration,
  VideoMirrorModeType,
  VideoStreamType,
  VideoSubscriptionOptions,
  WatermarkConfig,
  WatermarkOptions,
} from './AgoraBase';
import {
  ContentInspectConfig,
  RenderModeType,
  SnapshotConfig,
} from './AgoraMediaBase';
import {
  ChannelMediaOptions,
  IRtcEngine,
  LeaveChannelOptions,
  StreamFallbackOptions,
} from './IAgoraRtcEngine';

/**
 * 包含连接信息的类。
 */
export class RtcConnection {
  /**
   * 频道名。
   */
  channelId?: string;
  /**
   * 本地用户 ID。
   */
  localUid?: number;
}

/**
 * 提供多频道方法的接口类。
 *
 * 继承自 IRtcEngine 。
 */
export abstract class IRtcEngineEx extends IRtcEngine {
  /**
   * 加入频道。
   *
   * 调用该方法，你可以同时加入多个频道。如果你想在不同的设备上加入相同的频道，请确保你在不同设备上使用的用户 ID 都不同。 如果你已经在一个频道内，你不能用相同的用户 ID 再次加入该频道。
   * 加入频道前，请确保用于生成 Token 的 App ID 和调用 initialize 方法初始化引擎时使用的是同一个 App ID，否则使用 Token 加入频道会失败。
   *
   * @param token 在服务端生成的用于鉴权的动态密钥。详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/electron/basic-features/token-authentication)。
   *  （推荐）如果你的项目开启了安全模式，即选择 APP ID + Token 为鉴权机制，则该参数为必填。
   *  如果你的项目仅开启调试模式，即选择 APP ID 为鉴权机制，则无需填入 Token 即可加入频道。成功加入频道 24 小时后会自动退出该频道。
   *  如果你需要同时加入多个频道或在频道间频繁切换，声网推荐你使用通配 Token 以避免每加入一个新的频道都需向服务端申请一个新的 Token，详见 [使用通配 Token](https://doc.shengwang.cn/doc/rtc/electron/best-practice/wildcard-token)。
   * @param connection Connection 信息。详见 RtcConnection 。
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
  abstract joinChannelEx(
    token: string,
    connection: RtcConnection,
    options: ChannelMediaOptions
  ): number;

  /**
   * 设置频道选项并离开频道。
   *
   * 调用该方法后，SDK 会终止音视频互动、离开当前频道，并会释放会话相关的所有资源。
   * 调用 joinChannelEx 成功加入频道后，必须调用本方法结束通话，否则无法开始下一次通话。
   *  该方法是异步操作，调用返回时并没有真正退出频道。
   *  如果你调用了 leaveChannel 后，会同时离开 joinChannel 及 joinChannelEx 加入的频道。 如果你调用了该方法后立即调用 release 方法，SDK 将不会触发 onLeaveChannel 回调。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param options 离开频道的选项，详见 LeaveChannelOptions 。 该参数仅支持设置 LeaveChannelOptions 中的 stopMicrophoneRecording 成员，设置其他成员均不生效。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract leaveChannelEx(
    connection: RtcConnection,
    options?: LeaveChannelOptions
  ): number;

  /**
   * @ignore
   */
  abstract leaveChannelWithUserAccountEx(
    channelId: string,
    userAccount: string,
    options?: LeaveChannelOptions
  ): number;

  /**
   * 加入频道后更新频道媒体选项 。
   *
   * @param options 频道媒体选项，详见 ChannelMediaOptions 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2： ChannelMediaOptions 成员值设置无效。例如，使用了不合法的 Token，设置了无效的用户角色。你需要填入有效的参数。
   *  -7： IRtcEngine 对象尚未初始化。你需要在调用该方法前成功初始化 IRtcEngine 对象。
   *  -8： IRtcEngine 对象内部状态错误。可能的原因是用户不在频道中。建议通过 onConnectionStateChanged 回调判断用户是否在频道中。如果收到 ConnectionStateDisconnected (1) 或 ConnectionStateFailed (5)，则表示用户不在频道中。你需要在调用该方法前调用 joinChannel 加入频道。
   */
  abstract updateChannelMediaOptionsEx(
    options: ChannelMediaOptions,
    connection: RtcConnection
  ): number;

  /**
   * 设置视频编码属性。
   *
   * 设置本地视频的编码属性。每一种视频编码属性对应一系列视频相关参数设置，包含分辨率、帧率和码率。 该方法的 config 参数设置是在理想网络状态下能达到的最大值。如果网络状态不好，视频引擎便不能使用该 config 渲染本地视频，它会自动降低到一个合适的视频参数设置。
   *
   * @param config 视频编码参数配置。详见 VideoEncoderConfiguration 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setVideoEncoderConfigurationEx(
    config: VideoEncoderConfiguration,
    connection: RtcConnection
  ): number;

  /**
   * 初始化远端用户视图。
   *
   * 该方法绑定远端用户和显示视图，并设置远端用户视图在本地显示时的渲染模式和镜像模式，只影响本地用户看到的视频画面。
   * 调用该方法时需要在 VideoCanvas 中指定远端视频的用户 ID，一般可以在进频道前提前设置好。
   * 如果无法在加入频道前得到远端用户的 uid，可以在收到 onUserJoined 回调时调用该方法。如果启用了视频录制功能，视频录制服务会做为一个哑客户端加入频道，因此其他客户端也会收到它的 onUserJoined 事件， App 不应给它绑定视图（因为它不会发送视频流）。
   * 如需解除某个远端用户的绑定视图，可以调用该方法并将 view 设置为空。
   * 离开频道后，SDK 会清除远端用户视图的绑定关系。
   *  该方法需要在 joinChannelEx 之后调用。
   *  在 Flutter 中你不需要主动调用该方法，请使用 AgoraVideoView 渲染本地和远端视图。
   *  如果你希望在通话中更新远端用户视图的渲染或镜像模式，请使用 setRemoteRenderModeEx 方法。
   *
   * @param canvas 视频画布信息。详见 VideoCanvas 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setupRemoteVideoEx(
    canvas: VideoCanvas,
    connection: RtcConnection
  ): number;

  /**
   * 停止/恢复接收指定的音频流。
   *
   * 该方法停止/恢复接收某一个指定远端用户的音频流。在加入频道前或后都可以调用。该方法的设置在离开频道后失效。
   *
   * @param uid 指定用户的 ID。
   * @param mute 是否停止接收指定音频流： true : 停止接收指定音频流。 false :（默认）继续接收指定音频流。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteRemoteAudioStreamEx(
    uid: number,
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * 停止/恢复接收指定的视频流。
   *
   * 该方法停止/恢复接收某一个指定远端用户的视频流。在加入频道前或后都可以调用。该方法的设置在离开频道后失效。
   *
   * @param uid 远端用户的 ID。
   * @param mute 是否停止接收某个远端用户的视频： true : 停止接收。 false : （默认）恢复接收。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteRemoteVideoStreamEx(
    uid: number,
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * 设置订阅的视频流类型。
   *
   * 取决于发送端的默认行为和调用 setDualStreamMode 的具体设置，接收端调用该方法分为以下几种情况：
   *  SDK 默认在发送端开启小流自适应模式 (AutoSimulcastStream)，即：发送端仅发送大流，仅主播身份的接收端可以调用该方法发起小流申请，发送端收到申请后开始自动发送小流，此时频道内所有用户均可调用该方法切换到小流订阅模式。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 DisableSimulcastStream （始终不发送小流），则调用该方法不生效。
   *  当发送端调用 setDualStreamMode 并将 mode 设置为 EnableSimulcastStream （始终发送小流），则主播或观众身份的接收端均可调用该方法切换到小流订阅模式。 在接收视频小流时，SDK 会根据视频窗口的大小动态调整对应视频流的大小，以节约带宽和计算资源。视频小流默认的宽高比和视频大流的宽高比一致。根据当前大流的宽高比，系统会自动分配小流的分辨率、帧率及码率。 如果发送端已调用 setDualStreamModeEx 并将 mode 设置为 DisableSimulcastStream （始终不发送小流），则调用该方法不生效，你需要在发送端重新调用 setDualStreamModeEx 修改设置。
   *
   * @param uid 用户 ID。
   * @param streamType 视频流类型: VideoStreamType 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVideoStreamTypeEx(
    uid: number,
    streamType: VideoStreamType,
    connection: RtcConnection
  ): number;

  /**
   * 取消或恢复发布本地音频流。
   *
   * 成功调用该方法后，远端会触发 onUserMuteAudio 回调和 onRemoteAudioStateChanged 回调。 该方法不影响音频采集状态，因为没有禁用音频采集设备。
   *
   * @param mute 是否取消发布本地音频流。 true : 取消发布。 false :（默认）发布。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteLocalAudioStreamEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * 取消或恢复发布本地视频流。
   *
   * 成功调用该方法后，远端会触发 onUserMuteVideo 回调。
   *  该方法不影响视频采集状态，没有禁用摄像头。
   *
   * @param mute 是否取消发送本地视频流。 true : 取消发送本地视频流。 false : （默认）发送本地视频流。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteLocalVideoStreamEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * 取消或恢复订阅所有远端用户的音频流。
   *
   * 成功调用该方法后，本地用户会取消或恢复订阅远端用户的音频流，包括在调用该方法后加入频道的用户的音频流。
   *  该方法需要在加入频道后调用。
   *  如果需要在加入频道前设置默认不订阅远端用户音频流，可以在调用 joinChannel 加入频道时设置 autoSubscribeAudio 为 false 。
   *
   * @param mute 是否取消订阅所有远端用户的音频流： true : 取消订阅所有远端用户的音频流。 false :（默认）订阅所有远端用户的音频流。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteAllRemoteAudioStreamsEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * 取消或恢复订阅所有远端用户的视频流。
   *
   * 成功调用该方法后，本地用户会取消或恢复订阅所有远端用户的视频流，包括在调用该方法后加入频道的用户的视频流。
   *
   * @param mute 是否取消订阅所有远端用户的视频流。 true : 取消订阅所有用户的视频流。 false :（默认）订阅所有用户的视频流。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract muteAllRemoteVideoStreamsEx(
    mute: boolean,
    connection: RtcConnection
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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeAudioBlocklistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeAudioAllowlistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeVideoBlocklistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSubscribeVideoAllowlistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
  ): number;

  /**
   * 设置远端视频流的订阅选项。
   *
   * 当远端发送双流时，可调用此方法来设置远端视频流的订阅选项。
   *
   * @param uid 远端用户 ID。
   * @param options 视频流的订阅设置，详见 VideoSubscriptionOptions 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVideoSubscriptionOptionsEx(
    uid: number,
    options: VideoSubscriptionOptions,
    connection: RtcConnection
  ): number;

  /**
   * 设置远端用户声音的 2D 位置，即水平面位置。
   *
   * 设置远端用户声音的空间位置和音量，方便本地用户听声辨位。
   * 通过调用该接口设置远端用户声音出现的位置，左右声道的声音差异会产生声音的方位感，从而判断出远端用户的实时位置。在多人在线游戏场景，如吃鸡游戏中，该方法能有效增加游戏角色的方位感，模拟真实场景。
   *  为获得最佳听觉体验，建议用户佩戴有线耳机。
   *  该方法需要在加入频道后调用。
   *
   * @param uid 远端用户的 ID。
   * @param pan 设置远端用户声音的空间位置，取值范围为 [-1.0,1.0]:
   *  -1.0: 声音出现在左边。
   *  （默认）0.0: 声音出现在正前方。
   *  1.0: 声音出现在右边。
   * @param gain 设置远端用户声音的音量，取值范围为 [0.0,100.0]，默认值为 100.0，表示该用户的原始音量。取值越小，则音量越低。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteVoicePositionEx(
    uid: number,
    pan: number,
    gain: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteUserSpatialAudioParamsEx(
    uid: number,
    params: SpatialAudioParams,
    connection: RtcConnection
  ): number;

  /**
   * 设置远端视图显示模式。
   *
   * 初始化远端用户视图后，你可以调用该方法更新远端用户视图在本地显示时的渲染和镜像模式。该方法只影响本地用户看到的视频画面。
   *
   * @param uid 远端用户 ID。
   * @param renderMode 远端视图显示模式，详见 RenderModeType 。
   * @param mirrorMode 远端用户视图的镜像模式，详见 VideoMirrorModeType 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteRenderModeEx(
    uid: number,
    renderMode: RenderModeType,
    mirrorMode: VideoMirrorModeType,
    connection: RtcConnection
  ): number;

  /**
   * 开启声卡采集。
   *
   * 启用声卡采集功能后，声卡播放的声音会被合到本地音频流中，从而可以发送到远端。
   *  macOS 系统默认声卡不支持采集功能，如果你需要使用该功能，请启用一个虚拟声卡，并将 deviceName 设为该虚拟声卡的设备名。声网推荐你使用声网自研的虚拟声卡 AgoraALD 进行采集。
   *  该方法目前仅支持一路声卡采集。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param enabled 是否开启声卡采集： true : 开启声卡采集。 false :（默认）不开启声卡采集。
   * @param deviceName Electron for 统信 OS SDK 不支持该参数。
   *  macOS: 虚拟声卡的设备名。默认为空，代表使用 AgoraALD 虚拟声卡进行采集。
   *  Windows: 声卡的设备名。默认为空，代表使用设备自带的声卡进行采集。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableLoopbackRecordingEx(
    connection: RtcConnection,
    enabled: boolean,
    deviceName?: string
  ): number;

  /**
   * @ignore
   */
  abstract adjustRecordingSignalVolumeEx(
    volume: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteRecordingSignalEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustUserPlaybackSignalVolumeEx(
    uid: number,
    volume: number,
    connection: RtcConnection
  ): number;

  /**
   * 获取当前网络连接状态。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 当前网络连接状态。详见 ConnectionStateType 。
   */
  abstract getConnectionStateEx(connection: RtcConnection): ConnectionStateType;

  /**
   * 开启或关闭内置加密。
   *
   * 用户离开频道后，SDK 会自动关闭加密。如需重新开启加密，你需要在用户再次加入频道前调用该方法。
   *  同一频道内的所有用户在调用该方法时，必须设置相同的加密模式和密钥。
   *  如果开启了内置加密，则不能使用旁路推流功能。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param enabled 是否开启内置加密： true : 开启内置加密。 false :（默认）关闭内置加密。
   * @param config 配置内置加密模式和密钥。详见 EncryptionConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableEncryptionEx(
    connection: RtcConnection,
    enabled: boolean,
    config: EncryptionConfig
  ): number;

  /**
   * 创建数据流。
   *
   * 在 IRtcEngine 生命周期内，每个用户最多只能创建 5 个数据流。离开频道时数据流会被销毁，如需使用需要重新创建数据流。
   *
   * @param config 数据流设置。详见 DataStreamConfig 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 创建的数据流的 ID：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract createDataStreamEx(
    config: DataStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * 发送数据流。
   *
   * 调用 createDataStreamEx 后，你可以调用本方法向频道内所有用户发送数据流消息。
   * SDK 对该方法的实现进行了如下限制：
   *  频道内每个客户端最多可以同时拥有 5 个数据通道，所有数据通道共用的总发包码率限制为 30 KB/s。
   *  每个数据通道每秒最多能发送 60 个包，每个包最大为 1 KB。 成功调用该方法后，远端会触发 onStreamMessage 回调，远端用户可以在该回调中获取接收到的流消息；若调用失败，远端会触发 onStreamMessageError 回调。
   *  该方法需要在 joinChannelEx 后调用。
   *  请确保在调用该方法前，已调用 createDataStreamEx 创建了数据通道。
   *
   * @param streamId 数据流 ID。可以通过 createDataStreamEx 获取。
   * @param data 待发送的数据。
   * @param length 数据长度。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract sendStreamMessageEx(
    streamId: number,
    data: Uint8Array,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract sendRdtMessageEx(
    uid: number,
    type: RdtStreamType,
    data: string,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract sendMediaControlMessageEx(
    uid: number,
    data: string,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * 添加本地视频水印。
   *
   * 废弃 弃用：该方法已废弃，请改用 addVideoWatermarkWithConfigEx 。 该方法将一张 PNG 图片作为水印添加到本地发布的直播视频流上，同一直播频道中的用户、旁路直播观众和采集设备都能看到或采集到该水印图片。当前只支持在直播视频流中添加一个水印，后添加的水印会替换掉之前添加的水印。
   * 水印坐标和 setVideoEncoderConfigurationEx 方法中的设置有依赖关系：
   *  如果视频编码方向（ OrientationMode ）固定为横屏或自适应模式下的横屏，那么水印使用横屏坐标。
   *  如果视频编码方向（ OrientationMode ）固定为竖屏或自适应模式下的竖屏，那么水印使用竖屏坐标。
   *  设置水印坐标时，水印的图像区域不能超出 setVideoEncoderConfigurationEx 方法中设置的视频尺寸，否则超出部分将被裁剪。
   *  你需要在调用 enableVideo 方法之后再调用本方法。
   *  待添加水印图片必须是 PNG 格式。本方法支持所有像素格式的 PNG 图片：RGBA、RGB、Palette、Gray 和 Alpha_gray。
   *  如果待添加的 PNG 图片的尺寸与你在本方法中设置的尺寸不一致，SDK 会对 PNG 图片进行缩放或裁剪，以与设置相符。
   *  如果你已经使用 startPreview 方法开启本地视频预览，那么本方法的 visibleInPreview 可设置水印在预览时是否可见。
   *  如果你已设置本地视频为镜像模式，那么此处的本地水印也为镜像。为避免本地用户看本地视频时的水印也被镜像，建议你不要对本地视频同时使用镜像和水印功能，请在应用层实现本地水印功能。
   *
   * @param watermarkUrl 待添加的水印图片的本地路径。该方法支持从本地绝对/相对路径添加水印图片。
   * @param options 待添加的水印图片的设置选项，详见 WatermarkOptions 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract addVideoWatermarkEx(
    watermarkUrl: string,
    options: WatermarkOptions,
    connection: RtcConnection
  ): number;

  /**
   * 从本地或远端视频流中移除指定的水印图像。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param id 水印 ID。
   * @param connection 连接信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract removeVideoWatermarkEx(
    id: string,
    connection: RtcConnection
  ): number;

  /**
   * 删除已添加的视频水印。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract clearVideoWatermarkEx(connection: RtcConnection): number;

  /**
   * 自定义数据上报和分析服务。
   *
   * 声网提供自定义数据上报和分析服务。该服务当前处于免费内测期。内测期提供的能力为 6 秒内最多上报 10 条数据，每条自定义数据不能超过 256 字节，每个字符串不能超过 100 字节。如需试用该服务，请[联系销售](https://www.shengwang.cn/contact-sales/)开通并商定自定义数据格式。
   */
  abstract sendCustomReportMessageEx(
    id: string,
    category: string,
    event: string,
    label: string,
    value: number,
    connection: RtcConnection
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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableAudioVolumeIndicationEx(
    interval: number,
    smooth: number,
    reportVad: boolean,
    connection: RtcConnection
  ): number;

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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：URL 或转码属性参数错误，请检查你的 URL 或参数设置。
   *  -7：调用该方法前，未初始化 SDK。
   *  -19：该旁路推流 URL 已在使用中，请使用其他旁路推流 URL。
   */
  abstract startRtmpStreamWithoutTranscodingEx(
    url: string,
    connection: RtcConnection
  ): number;

  /**
   * 开始旁路推流并设置转码属性。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 调用该方法，你可以向指定的旁路推流地址推送直播音视频流并设置转码属性。该方法每次只能向一个地址推送媒体流，如果你需要向多个地址转码推流，则需多次调用该方法。
   * 调用该方法后，SDK 会在本地触发 onRtmpStreamingStateChanged 回调，报告推流的状态。
   *  请确保已开通旁路推流服务。
   *  请在加入频道后调用该方法。
   *  只有直播场景下的主播才能调用该方法。
   *  调用该方法推流失败后，如果你想要重新推流，那么请你务必先调用 stopRtmpStreamEx ，再调用该方法重推，否则 SDK 会返回与上次推流失败时一样的错误码。
   *
   * @param url 旁路推流地址。格式为 RTMP 或 RTMPS。字符长度不能超过 1024 字节。不支持中文字符等特殊字符。
   * @param transcoding 旁路推流的转码属性，详见 LiveTranscoding 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2：URL 或转码属性参数错误，请检查你的 URL 或参数设置。
   *  -7：调用该方法前，未初始化 SDK。
   *  -19：该旁路推流 URL 已在使用中，请使用其他旁路推流 URL。
   */
  abstract startRtmpStreamWithTranscodingEx(
    url: string,
    transcoding: LiveTranscoding,
    connection: RtcConnection
  ): number;

  /**
   * 更新旁路推流转码属性。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 开启转码推流后，你可以根据场景需求，动态更新转码属性。转码属性更新后，SDK 会触发 onTranscodingUpdated 回调。
   *
   * @param transcoding 旁路推流的转码属性，详见 LiveTranscoding 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract updateRtmpTranscodingEx(
    transcoding: LiveTranscoding,
    connection: RtcConnection
  ): number;

  /**
   * 结束旁路推流。
   *
   * 声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。
   * 调用该方法，你可以结束指定的旁路推流地址上的直播。该方法每次只能结束一个推流地址上的直播，如果你需要结束多个推流地址的直播，则需多次调用该方法。
   * 调用该方法后，SDK 会在本地触发 onRtmpStreamingStateChanged 回调，报告推流的状态。
   *
   * @param url 旁路推流地址。格式为 RTMP 或 RTMPS。字符长度不能超过 1024 字节。不支持中文字符等特殊字符。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stopRtmpStreamEx(url: string, connection: RtcConnection): number;

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
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -1: 一般性的错误（未明确归类）。
   *  -2: 参数无效。
   *  -8：内部状态错误。可能因为用户角色不是主播。
   */
  abstract startOrUpdateChannelMediaRelayEx(
    configuration: ChannelMediaRelayConfiguration,
    connection: RtcConnection
  ): number;

  /**
   * 停止跨频道媒体流转发。一旦停止，主播会退出所有目标频道。
   *
   * 成功调用该方法后，SDK 会触发 onChannelMediaRelayStateChanged 回调。如果报告 RelayStateIdle (0) 和 RelayOk (0)，则表示已停止转发媒体流。 如果该方法调用不成功，SDK 会触发 onChannelMediaRelayStateChanged 回调，并报告状态码 RelayErrorServerNoResponse (2) 或 RelayErrorServerConnectionLost (8)。你可以调用 leaveChannel 方法离开频道，跨频道媒体流转发会自动停止。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有正在进行的跨频道媒体流转发。
   */
  abstract stopChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * 暂停向所有目标频道转发媒体流。
   *
   * 开始跨频道转发媒体流后，如果你需要暂停向所有频道转发媒体流，可以调用该方法；暂停后，如果要恢复跨频道媒体流转发，可以调用 resumeAllChannelMediaRelay 方法。 该方法需要在调用 startOrUpdateChannelMediaRelayEx 开始跨频道媒体流转发后调用。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有正在进行的跨频道媒体流转发。
   */
  abstract pauseAllChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * 恢复向所有目标频道转发媒体流。
   *
   * 调用 pauseAllChannelMediaRelayEx 方法后，如果你需要恢复向所有目标频道转发媒体流，可以调用该方法。 该方法需要在 pauseAllChannelMediaRelayEx 后调用。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -5: 方法调用被拒绝。当前没有暂停的跨频道媒体流转发。
   */
  abstract resumeAllChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract getUserInfoByUserAccountEx(
    userAccount: string,
    connection: RtcConnection
  ): UserInfo;

  /**
   * @ignore
   */
  abstract getUserInfoByUidEx(uid: number, connection: RtcConnection): UserInfo;

  /**
   * 在发送端开启或关闭双流模式。
   *
   * 废弃 弃用： 从 v4.2.0 起废弃，请改用 setDualStreamModeEx 。 你可以在发流端调用该方法开启或关闭双流模式。双流指视频大流和视频小流：
   *  视频大流：高分辨率、高帧率的视频流。
   *  视频小流：低分辨率、低帧率的视频流。 开启双流模式后，你可以在收流端调用 setRemoteVideoStreamType 选择接收视频大流或视频小流。 该方法适用于发送端发送的所有类型的流，包括且不限于来自摄像头采集的视频流、屏幕共享流、自定义采集的视频流。
   *
   * @param enabled 是否开启双流模式： true : 开启双流模式。 false : (默认) 关闭双流模式。
   * @param streamConfig 视频小流的配置。详见 SimulcastStreamConfig 。 当设置 mode 为 DisableSimulcastStream 时，再设置 streamConfig 不会生效。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。 详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableDualStreamModeEx(
    enabled: boolean,
    streamConfig: SimulcastStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * 在发送端设置双流模式。
   *
   * SDK 默认在发送端开启小流自适应模式 (AutoSimulcastStream)，即发送端不主动发送小流，主播身份的接收端可以调用 setRemoteVideoStreamTypeEx 发起小流申请，发送端收到申请后开始自动发送小流。
   *  如果你想修改此行为，可以调用该方法并修改 mode 为 DisableSimulcastStream （始终不发送小流）或 EnableSimulcastStream （始终发送小流）。
   *  如果你在进行修改后又想恢复该默认行为，可重新调用该方法，并将 mode 设置为 AutoSimulcastStream 。 该方法和 enableDualStreamModeEx 的区别与联系如下：
   *  调用该方法并设置 mode 为 DisableSimulcastStream 时，跟 enableDualStreamModeEx(false) 的效果相同。
   *  调用该方法并设置 mode 为 EnableSimulcastStream 时，跟 enableDualStreamModeEx(true) 的效果相同。
   *  两种方法均可在加入频道前后调用，若同时使用，则以后调用的方法中的设置为准。
   *
   * @param mode 发送视频流的模式。详见 SimulcastStreamMode 。
   * @param streamConfig 视频小流的配置。详见 SimulcastStreamConfig 。 当设置 mode 为 DisableSimulcastStream 时，再设置 streamConfig 不会生效。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。 详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setDualStreamModeEx(
    mode: SimulcastStreamMode,
    streamConfig: SimulcastStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSimulcastConfigEx(
    simulcastConfig: SimulcastConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setHighPriorityUserListEx(
    uidList: number[],
    uidNum: number,
    option: StreamFallbackOptions,
    connection: RtcConnection
  ): number;

  /**
   * 使用连接 ID 获取视频截图。
   *
   * 该方法用于对指定用户的视频流进行截图，生成一张 JPG 格式的图片，并保存至指定的路径。
   *  该方法是异步操作，调用返回时 SDK 并没有真正获取截图。
   *  该方法用于本地视频截图时，是对 ChannelMediaOptions 中指定发布的视频流进行截图。
   *  如果用户的视频经过前处理，例如，添加了水印或美颜，生成的截图会包含前处理效果。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 用户 ID。如果要对本地用户的视频截图，则设为 0。
   * @param filePath 请确保目录存在且可写。 截图的本地保存路径，需精确到文件名及格式，例如：
   *  Windows: C:\Users\<user_name>\AppData\Local\Agora\<process_name>\example.jpg
   *  macOS: ～/Library/Logs/example.jpg
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract takeSnapshotEx(
    connection: RtcConnection,
    uid: number,
    filePath: string
  ): number;

  /**
   * 开启/关闭本地截图上传。
   *
   * 该方法可以对多条视频流截图并上传。开启本地截图上传后，SDK 会根据你在 ContentInspectConfig 中设置的模块类型和频率对本地用户发送的视频进行截图和上传。截图完成后，声网服务器会以 HTTPS 请求的形式，向你的服务器发送回调通知，并将所有截图发送至你指定的第三方云存储。 调用该方法前，请确保已[联系技术支持](https://ticket.shengwang.cn/)开通本地截图上传服务。
   *
   * @param enabled 设置是否开启本地截图上传： true ：开启本地截图上传。 false ：关闭本地截图上传。
   * @param config 本地截图上传配置。详见 ContentInspectConfig 。
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract enableContentInspectEx(
    enabled: boolean,
    config: ContentInspectConfig,
    connection: RtcConnection
  ): number;

  /**
   * 开启视频帧渲染数据打点。
   *
   * 成功调用该方法后，SDK 会以调用该方法的时刻作为起点，并通过 onVideoRenderingTracingResult 回调报告视频帧渲染的相关信息。
   *  如果你未调用该方法，SDK 默认以调用 joinChannel 加入频道的时刻为起始点开始打点，自动开始跟踪视频的渲染事件。你可以根据实际业务场景，在合适的时机调用该方法，进行自定义打点。
   *  离开当前频道后，SDK 会自动重置该时间点为下一次加入频道的时刻。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract startMediaRenderingTracingEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract setParametersEx(
    connection: RtcConnection,
    parameters: string
  ): number;

  /**
   * 使用连接 ID 获取通话 ID。
   *
   * 客户端在每次加入频道后会生成一个对应的 callId ，标识该客户端的此次通话。你可以调用该方法获取 callId 参数，然后在调用 rate 、 complain 等方法时填入。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   */
  abstract getCallIdEx(connection: RtcConnection): string;

  /**
   * @ignore
   */
  abstract sendAudioMetadataEx(
    connection: RtcConnection,
    metadata: string,
    length: number
  ): number;

  /**
   * 将指定音效预加载到频道中。
   *
   * 自从 自 v4.6.2 版本新增。 每次调用该方法时，只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 playEffect 播放预加载的音效，或调用 playAllEffects 播放所有预加载的音效。
   *  为确保使用体验流畅，音效文件的大小不应超过限制。
   *  声网建议在加入频道前调用该方法。
   *  如果在调用 playEffectEx 前已调用 preloadEffectEx ，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时会直接从头开始播放。
   *  如果在调用 playEffectEx 前未调用 preloadEffectEx ，则 playEffectEx 执行后会销毁资源。下次调用 playEffectEx 时会尝试重新打开文件并从头开始播放。
   *
   * @param connection 连接信息。详见 RtcConnection 。
   * @param soundId 音效 ID。
   * @param filePath 本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。
   * @param startPos 音效文件的播放起始位置（单位为毫秒）。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract preloadEffectEx(
    connection: RtcConnection,
    soundId: number,
    filePath: string,
    startPos?: number
  ): number;

  /**
   * 在频道中播放指定音效。
   *
   * 自从 自 v4.6.2 版本新增。 你可以调用该方法在频道内向所有用户播放指定音效。每次调用该方法只能播放一个音效。若需同时播放多个音效，请使用不同的 soundId 和 filePath 多次调用该方法。你还可以设置是否在频道中发布该音效。
   *  声网建议不要同时播放超过三个音效。
   *  该方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中的保持一致。
   *  如果在调用 playEffectEx 之前调用了 preloadEffectEx ， playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时会直接从头开始播放。
   *  如果在调用 playEffectEx 之前未调用 preloadEffectEx ， playEffectEx 执行后会销毁资源。下次调用 playEffectEx 时会尝试重新打开文件并从头播放。
   *
   * @param connection RtcConnection 对象，详见 RtcConnection 。
   * @param soundId 音效 ID。
   * @param filePath 本地文件的绝对路径或在线文件的 URL。支持的音频格式包括 mp3、mp4、m4a、aac、3gp、mkv 和 wav。
   * @param loopCount 音效的循环播放次数： -1 ：无限循环，直到调用 stopEffect 或 stopAllEffects 。 0 ：播放一次。 1 ：播放两次。
   * @param pitch 音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。数值越小，音调越低。
   * @param pan 音效的空间位置。取值范围为 -1.0 到 1.0： -1.0 ：音效从用户左侧传来。 0.0 ：音效从用户正前方传来。 1.0 ：音效从用户右侧传来。
   * @param gain 音效的音量。取值范围为 0 到 100，默认值为 100（原始音量）。数值越小，音量越低。
   * @param publish 是否在频道中发布该音效： true ：在频道中发布该音效。 false ：（默认）不在频道中发布该音效。
   * @param startPos 音效文件的播放起始位置，单位为毫秒。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract playEffectEx(
    connection: RtcConnection,
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
   * 使用连接 ID 获取指定观测位置的视频截图。
   *
   * 该方法用于对指定用户的视频流进行截图，生成一张 JPG 格式的图片，并保存至指定的路径。
   *  该方法是异步操作，调用返回时 SDK 并没有真正获取截图。
   *  该方法用于本地视频截图时，是对 ChannelMediaOptions 中指定发布的视频流进行截图。
   *  如果用户的视频经过前处理，例如，添加了水印或美颜，生成的截图会包含前处理效果。
   *
   * @param connection Connection 信息。详见 RtcConnection 。
   * @param uid 用户 ID。如果要对本地用户的视频截图，则设为 0。
   * @param config 截图设置，详见 SnapshotConfig 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract takeSnapshotWithConfigEx(
    connection: RtcConnection,
    uid: number,
    config: SnapshotConfig
  ): number;

  /**
   * 向本地视频添加水印图像。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param config 水印配置，详见 WatermarkConfig 。
   * @param connection RtcConnection 对象，详见 RtcConnection 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract addVideoWatermarkWithConfigEx(
    config: WatermarkConfig,
    connection: RtcConnection
  ): number;
}
