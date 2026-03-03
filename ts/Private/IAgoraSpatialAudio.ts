import './extension/IAgoraSpatialAudioExtension';
import { RtcConnection } from './IAgoraRtcEngineEx';

/**
 * 远端用户或媒体播放器的空间位置信息。
 */
export class RemoteVoicePositionInfo {
  /**
   * 在世界坐标系中的坐标。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  position?: number[];
  /**
   * 在世界坐标系前轴的单位向量。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  forward?: number[];
}

/**
 * 隔声区域的设置。
 */
export class SpatialAudioZone {
  /**
   * 隔声区域的 ID。
   */
  zoneSetId?: number;
  /**
   * 隔声区域的空间中心点。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  position?: number[];
  /**
   * 以 position 为起点，向前的单位向量。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  forward?: number[];
  /**
   * 以 position 为起点，向右的单位向量。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  right?: number[];
  /**
   * 以 position 为起点，向上的单位向量。该参数是长度为 3 的数组，三个值依次表示前、右、上的坐标值。
   */
  up?: number[];
  /**
   * 将整个隔声区域看做一个立方体，表示向前的边长，单位为游戏引擎的单位长度。
   */
  forwardLength?: number;
  /**
   * 将整个隔声区域看做一个立方体，表示向右的边长，单位为游戏引擎的单位长度。
   */
  rightLength?: number;
  /**
   * 将整个隔声区域看做一个立方体，表示向上的边长，单位为游戏引擎的单位长度。
   */
  upLength?: number;
  /**
   * 隔声区域以内的用户和外部用户互通时的声音衰减系数，取值范围为 [0,1]。其中：
   *  0：广播模式，即音量和音色均不随距离衰减，无论距离远近，本地用户听到的音量和音色都无变化。
   *  (0,0.5)：弱衰减模式，即音量和音色在传播过程中仅发生微弱衰减，跟真实环境相比，声音可以传播得更远。
   *  0.5：模拟音量在真实环境下的衰减，效果等同于不设置 audioAttenuation 参数。
   *  (0.5,1]：强衰减模式 (默认值为 1) ，即音量和音色在传播过程中发生迅速衰减。
   */
  audioAttenuation?: number;
}

/**
 * 该类通过 SDK 计算用户坐标，实现空间音频。
 *
 * 该类继承自 IBaseSpatialAudioEngine 。调用该类下其他 API 前，你需要调用 initialize 方法初始化该类。
 */
export abstract class ILocalSpatialAudioEngine {
  /**
   * @ignore
   */
  abstract release(): void;

  /**
   * 初始化 ILocalSpatialAudioEngine 。
   *
   * 在调用 ILocalSpatialAudioEngine 类的其他方法前，你需要先调用该方法初始化 ILocalSpatialAudioEngine 。
   *  SDK 只支持每个 App 创建一个 ILocalSpatialAudioEngine 实例。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract initialize(): number;

  /**
   * 更新远端用户的空间位置信息。
   *
   * 成功调用该方法后，SDK 会根据本地和远端用户的相对位置计算空间音频参数。 该方法需要在 joinChannel 后调用。
   *
   * @param uid 用户 ID。需与用户加入频道时填写的用户 ID 一致。
   * @param posInfo 远端用户的空间位置信息。详见 RemoteVoicePositionInfo 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract updateRemotePosition(
    uid: number,
    posInfo: RemoteVoicePositionInfo
  ): number;

  /**
   * @ignore
   */
  abstract updateRemotePositionEx(
    uid: number,
    posInfo: RemoteVoicePositionInfo,
    connection: RtcConnection
  ): number;

  /**
   * 删除指定远端用户的空间位置信息。
   *
   * 成功调用该方法后，本地用户将听不到指定的远端用户。
   * 离开频道后，为避免计算资源的浪费，你需要调用该方法删除指定远端用户的空间位置信息。否则，该用户的空间位置信息会一直被保存。当远端用户人数大于 setMaxAudioRecvCount 中设定的可接收音频流数时，会按照相对距离依次自动取消订阅距离最远的用户的音频流。
   *
   * @param uid 用户 ID。需与用户加入频道时填写的用户 ID 一致。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract removeRemotePosition(uid: number): number;

  /**
   * @ignore
   */
  abstract removeRemotePositionEx(
    uid: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract clearRemotePositionsEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract updateSelfPositionEx(
    position: number[],
    axisForward: number[],
    axisRight: number[],
    axisUp: number[],
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setMaxAudioRecvCount(maxCount: number): number;

  /**
   * @ignore
   */
  abstract setAudioRecvRange(range: number): number;

  /**
   * @ignore
   */
  abstract setDistanceUnit(unit: number): number;

  /**
   * @ignore
   */
  abstract updateSelfPosition(
    position: number[],
    axisForward: number[],
    axisRight: number[],
    axisUp: number[]
  ): number;

  /**
   * @ignore
   */
  abstract updatePlayerPositionInfo(
    playerId: number,
    positionInfo: RemoteVoicePositionInfo
  ): number;

  /**
   * @ignore
   */
  abstract setParameters(params: string): number;

  /**
   * @ignore
   */
  abstract muteLocalAudioStream(mute: boolean): number;

  /**
   * @ignore
   */
  abstract muteAllRemoteAudioStreams(mute: boolean): number;

  /**
   * @ignore
   */
  abstract muteRemoteAudioStream(uid: number, mute: boolean): number;

  /**
   * 设置指定用户的声音衰减效果。
   *
   * @param uid 用户 ID。需与用户加入频道时填写的用户 ID 一致。
   * @param attenuation 针对该用户的声音衰减系数，取值范围为[0,1]。其中：
   * @param forceSet 是否强制设定该用户的声音衰减效果： true ：强制使用 attenuation 设置该用户的声音衰减效果，此时 SpatialAudioZone 中的 audioAttenuation 中设置的隔声区域衰减系数对该用户不生效。 false ：不强制使用 attenuation 设置用户的声音衰减效果，分为以下两种情况。
   *  如果音源和听声者分属于隔声区域内部和外部，则声音衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定。
   *  如果音源和听声者在同一个隔声区域内或同在隔声区域外，则声音衰减效果由该方法中的 attenuation 决定。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRemoteAudioAttenuation(
    uid: number,
    attenuation: number,
    forceSet: boolean
  ): number;

  /**
   * @ignore
   */
  abstract setZones(zones: SpatialAudioZone[], zoneCount: number): number;

  /**
   * @ignore
   */
  abstract setPlayerAttenuation(
    playerId: number,
    attenuation: number,
    forceSet: boolean
  ): number;

  /**
   * 删除所有远端用户的空间位置信息。
   *
   * 成功调用该方法后，本地用户将听不到所有远端用户。
   * 离开频道后，为避免计算资源的浪费，你也可以调用该方法删除所有远端用户的空间位置信息。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract clearRemotePositions(): number;
}
