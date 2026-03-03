import './extension/IAgoraMediaPlayerExtension';
import { SpatialAudioParams } from './AgoraBase';
import {
  AudioDualMonoMode,
  IAudioPcmFrameSink,
  IAudioSpectrumObserver,
  RawAudioFrameOpModeType,
  RenderModeType,
  VideoFrame,
} from './AgoraMediaBase';
import {
  MediaPlayerState,
  MediaSource,
  PlayerStreamInfo,
} from './AgoraMediaPlayerTypes';
import { IMediaPlayerSourceObserver } from './IAgoraMediaPlayerSource';

/**
 * 提供媒体播放器功能的类，支持多实例。
 */
export abstract class IMediaPlayer {
  /**
   * 获取播放器 ID。
   *
   * @returns
   * 方法调用成功，返回播放器 ID。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getMediaPlayerId(): number;

  /**
   * 打开媒体资源。
   *
   * 该方法为异步调用。
   *
   * @param url 设置媒体文件的路径，支持本地和在线文件。
   * @param startPos 设置起始播放位置（毫秒），默认值为 0。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract open(url: string, startPos: number): number;

  /**
   * 打开媒体资源并进行播放设置。
   *
   * 该方法支持你打开不同类型的媒体资源，包括自定义的媒体资源文件，并可进行播放设置。 该方法为异步调用。如需播放媒体文件，需要在收到 onPlayerSourceStateChanged 回调报告状态为 PlayerStateOpenCompleted 后再调用 play 方法播放媒体文件。
   *
   * @param source 媒体资源，详见 MediaSource 。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract openWithMediaSource(source: MediaSource): number;

  /**
   * 播放媒体文件。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract play(): number;

  /**
   * 暂停播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract pause(): number;

  /**
   * 停止播放。
   *
   * 调用该方法停止播放后，如需重新播放，需要调用 open 或 openWithMediaSource 再次打开媒体资源。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract stop(): number;

  /**
   * 暂停后恢复播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract resume(): number;

  /**
   * 定位到媒体文件的指定播放位置。
   *
   * 如果你在播放已经完成后（收到 onPlayerSourceStateChanged 回调报告播放状态为 PlayerStatePlaybackCompleted 或 PlayerStatePlaybackAllLoopsCompleted）再调用 seek ，方法调用成功后，SDK 会从你指定的位置开始自动播放，此时你会收到 onPlayerSourceStateChanged 回调报告播放状态为 PlayerStatePlaying。
   *  如果你在播放暂停的情况下调用 seek ，调用成功后 SDK 会定位到你指定位置，如需播放，请调用 resume 或 play 。
   *
   * @param newPos 指定的位置（毫秒）。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract seek(newPos: number): number;

  /**
   * 调整当前播放的媒体资源的音调。
   *
   * 你需要在调用 open 后调用该方法。
   *
   * @param pitch 按半音音阶调整本地播放的音乐文件的音调，默认值为 0，即不调整音调。取值范围为 [-12,12]，每相邻两个值的音高距离相差半音。取值的绝对值越大，音调升高或降低得越多。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioPitch(pitch: number): number;

  /**
   * 获取媒体文件总时长。
   *
   * @returns
   * 媒体文件总时长（毫秒）。
   */
  abstract getDuration(): number;

  /**
   * 获取当前播放进度。
   *
   * @returns
   * 方法调用成功，返回当前播放进度（毫秒）。
   *  < 0: 方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getPlayPosition(): number;

  /**
   * 获取当前媒体文件中媒体流的数量。
   *
   * 请在 open 后并收到 onPlayerSourceStateChanged 回调报告播放状态为 PlayerStateOpenCompleted 后再调用该方法。
   *
   * @returns
   * 方法调用成功，返回该媒体文件中媒体流的数量。
   *  < 0: 方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getStreamCount(): number;

  /**
   * 通过媒体流的索引值获取媒体流信息。
   *
   * @param index 媒体流索引值。该参数的值需小于 getStreamCount 的返回值。
   *
   * @returns
   * 方法调用成功，返回媒体流信息，详见 PlayerStreamInfo 。
   *  方法调用失败，返回 null 。
   */
  abstract getStreamInfo(index: number): PlayerStreamInfo;

  /**
   * 设置循环播放。
   *
   * 如果你希望循环播放，请调用该方法并设置循环播放次数。
   * 循环播放结束时，SDK 会触发 onPlayerSourceStateChanged 回调，向你报告播放状态为 PlayerStatePlaybackAllLoopsCompleted。
   *
   * @param loopCount 循环播放的次数。
   *  ≥0：循环次数。例如，设为 0 表示不循环播放，一共播放一次；设为 1 表示循环播放一次，一共播放 2 次。
   *  -1：无限循环播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setLoopCount(loopCount: number): number;

  /**
   * 设置当前音频文件的播放速度。
   *
   * 你需要在 open 后调用该方法。
   *
   * @param speed 播放速度。推荐取值范围为 [30,400]，其中：
   *  30: 0.3 倍速。
   *  100: 原始速度。
   *  400: 4 倍速。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setPlaybackSpeed(speed: number): number;

  /**
   * 指定当前音频文件的播放音轨。
   *
   * 获取音频文件的音轨索引后，你可以调用该方法指定任一音轨进行播放。如果一个多音轨文件的不同音轨存放了不同语言的歌曲，你可以调用该方法设置播放语言。 你需要在调用 getStreamInfo 获取音频流索引值后调用该方法。
   *
   * @param index 音轨的索引值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract selectAudioTrack(index: number): number;

  /**
   * 选择本地播放和发送至远端的音轨。
   *
   * 你可以调用该方法分别设置本地播放和发送到远端的音轨。
   * 在调用该方法前，你需要通过 openWithMediaSource 来打开媒体文件，并通过 MediaSource 将 enableMultiAudioTrack 设为 true 。
   *
   * @param playoutTrackIndex 用于本地播放的音轨索引。你可以通过 getStreamInfo 来获取索引值。
   * @param publishTrackIndex 用于发送至远端的音轨索引。你可以通过 getStreamInfo 来获取索引值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。
   */
  abstract selectMultiAudioTrack(
    playoutTrackIndex: number,
    publishTrackIndex: number
  ): number;

  /**
   * @ignore
   */
  abstract takeScreenshot(filename: string): number;

  /**
   * @ignore
   */
  abstract selectInternalSubtitle(index: number): number;

  /**
   * @ignore
   */
  abstract setExternalSubtitle(url: string): number;

  /**
   * 获取播放器当前状态。
   *
   * @returns
   * 播放器当前状态，详见 MediaPlayerState 。
   */
  abstract getState(): MediaPlayerState;

  /**
   * 设置是否静音。
   *
   * @param muted 静音选项。 true ：静音。 false ：（默认）不静音。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract mute(muted: boolean): number;

  /**
   * 获取当前播放的媒体文件是否静音。
   *
   * @returns
   * true ：当前播放的媒体文件为静音。 false ：当前播放的媒体文件没有静音。
   */
  abstract getMute(): boolean;

  /**
   * 调节本地播放音量。
   *
   * @param volume 本地播放音量，取值范围从 0 到 100：
   *  0: 无声。
   *  100: （默认）媒体文件的原始播放音量。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustPlayoutVolume(volume: number): number;

  /**
   * 获取当前本地播放音量。
   *
   * @returns
   * 返回当前本地播放音量，取值范围从 0 到 100：
   *  0: 无声。
   *  100: （默认）媒体文件的原始播放音量。
   */
  abstract getPlayoutVolume(): number;

  /**
   * 调节远端用户听到的音量。
   *
   * 连接到声网服务器后，你可以调用该方法，调节远端用户听到的媒体文件的音量。
   *
   * @param volume 信号音量，取值范围从 0 到 400：
   *  0: 无声。
   *  100: （默认）媒体文件的原始音量。
   *  400: 原始音量的四倍（自带溢出保护）。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract adjustPublishSignalVolume(volume: number): number;

  /**
   * 获取远端用户听到的音量。
   *
   * @returns
   * ≥ 0: 播放文件的远端播放音量。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getPublishSignalVolume(): number;

  /**
   * 设置播放器渲染视图。
   *
   * @param view 渲染视图。Windows 平台为窗口句柄（HWND）。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setView(view: any): number;

  /**
   * 设置播放器视图的渲染模式。
   *
   * @param renderMode 播放器视图的渲染模式。详见 RenderModeType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setRenderMode(renderMode: RenderModeType): number;

  /**
   * 注册一个播放观测器。
   *
   * @param observer 播放观测器，报告播放中的事件，详见 IMediaPlayerSourceObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number;

  /**
   * 取消注册播放观测器。
   *
   * @param observer 播放观测器，报告播放中的事件，详见 IMediaPlayerSourceObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number;

  /**
   * 注册音频帧观测器。
   *
   * @param observer 音频帧观测器，观测每帧音频的接收，详见 IAudioPcmFrameSink 。
   * @param mode 音频帧的使用模式，详见 RawAudioFrameOpModeType 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerAudioFrameObserver(
    observer: IAudioPcmFrameSink,
    mode?: RawAudioFrameOpModeType
  ): number;

  /**
   * 取消注册音频帧观测器。
   *
   * @param observer 音频帧观测器，详见 IAudioPcmFrameSink 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterAudioFrameObserver(observer: IAudioPcmFrameSink): number;

  /**
   * 注册视频帧观测器。
   *
   * 你需要在该方法中实现一个 IMediaPlayerVideoFrameObserver 类，并根据场景需要，注册该类的回调。成功注册视频帧观测器后，SDK 会在捕捉到每个视频帧时，触发你所注册的回调。
   *
   * @param observer 视频帧观测器，观测每帧视频的接收。详见 IMediaPlayerVideoFrameObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number;

  /**
   * 取消注册视频帧观测器。
   *
   * @param observer 视频帧观测器，观测每帧视频的接收，详见 IMediaPlayerVideoFrameObserver 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract registerMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver,
    intervalInMS: number
  ): number;

  /**
   * @ignore
   */
  abstract unregisterMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * 设置当前音频文件的声道模式。
   *
   * 在双声道音频文件中，左声道和右声道可以存储不同的音频数据。根据实际需要，你可以设置声道模式为原始模式、左声道模式、右声道模式或混合模式。例如，在 KTV 场景中，音频文件的左声道存储了伴奏，右声道存储了原唱的歌声。如果你只需听伴奏，调用该方法设置音频文件的声道模式为左声道模式；如果你需要同时听伴奏和原唱，调用该方法设置声道模式为混合模式。
   *  你需要在调用 open 后调用该方法。
   *  该方法仅适用于双声道的音频文件。
   *
   * @param mode 声道模式。详见 AudioDualMonoMode 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setAudioDualMonoMode(mode: AudioDualMonoMode): number;

  /**
   * @ignore
   */
  abstract getPlayerSdkVersion(): string;

  /**
   * 获取播放的媒体资源的路径。
   *
   * @returns
   * 播放的媒体资源的路径。
   */
  abstract getPlaySrc(): string;

  /**
   * @ignore
   */
  abstract openWithAgoraCDNSrc(src: string, startPos: number): number;

  /**
   * @ignore
   */
  abstract getAgoraCDNLineCount(): number;

  /**
   * @ignore
   */
  abstract switchAgoraCDNLineByIndex(index: number): number;

  /**
   * @ignore
   */
  abstract getCurrentAgoraCDNIndex(): number;

  /**
   * @ignore
   */
  abstract enableAutoSwitchAgoraCDN(enable: boolean): number;

  /**
   * @ignore
   */
  abstract renewAgoraCDNSrcToken(token: string, ts: number): number;

  /**
   * @ignore
   */
  abstract switchAgoraCDNSrc(src: string, syncPts?: boolean): number;

  /**
   * 切换媒体资源。
   *
   * 你可以根据当前网络状态调用该方法切换播放的媒体资源的码率。例如：
   *  在网络较差时，将播放的媒体资源切换为较低码率的媒体资源地址。
   *  在网络较好时，将播放的媒体资源切换为较高码率的媒体资源地址。 调用该方法后，如果你收到 onPlayerEvent 回调报告事件 PlayerEventSwitchComplete ，则媒体资源切换成功。如果资源切换失败，SDK 会自动重试 3 次。如果仍然失败，你会收到 onPlayerEvent 回调，报告 PlayerEventSwitchError 事件，表示媒体资源切换时发生错误。
   *  请确保在 open 之后调用该方法。
   *  为保证播放正常，请在调用该方法时注意如下：
   *  不要在播放暂停时调用该方法。
   *  不要在切换码率过程中调用 seek 。
   *  确保切换码率前的播放位置不大于待切换的媒体资源总时长。
   *
   * @param src 媒体资源的网络路径。
   * @param syncPts 是否同步切换前后的起始播放位置: true ：同步。 false ：(默认) 不同步。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract switchSrc(src: string, syncPts?: boolean): number;

  /**
   * 预加载媒体资源。
   *
   * 你可以调用该方法将一个媒体资源预加载到播放列表中。如果需要预加载多个媒体资源，你可以多次调用该方法。
   * 调用该方法后，如果收到 onPreloadEvent 回调报告事件 PlayerPreloadEventComplete ，则预加载成功；如果你收到 onPreloadEvent 回调报告事件 PlayerPreloadEventError ，则预加载失败。
   * 预加载成功后，如果你想播放媒体资源，请调用 playPreloadedSrc ；如果你想清空播放列表，请调用 stop 。
   *  调用该方法前，请确保你已经调用 open 或 openWithMediaSource 成功打开媒体资源。
   *  SDK 不支持你预加载重复的媒体资源到播放列表，但支持你将正在播放的媒体资源再次预加载到播放列表。
   *
   * @param src 媒体资源的网络路径。
   * @param startPos 预加载到播放列表后，开始播放时的起始位置（毫秒）。预加载直播流时，将该参数设置为 0。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract preloadSrc(src: string, startPos: number): number;

  /**
   * 播放预加载的媒体资源。
   *
   * 调用 preloadSrc 方法将媒体资源预加载到播放列表后，可以调用该方法播放已预加载的媒体资源。调用该方法后，如果你收到 onPlayerSourceStateChanged 回调报告状态 PlayerStatePlaying ，则表示播放成功。
   * 如果你想更换播放的预加载媒体资源，你可以再次调用该方法并指定新的媒体资源路径。如果你想重新播放媒体资源，你需要在播放前调用 preloadSrc 重新将该媒体资源预加载到播放列表。如果你想清空播放列表，请调用 stop 。 如果你在播放暂停时调用该方法，该方法会在恢复播放后才生效。
   *
   * @param src 播放列表中的媒体资源 URL 地址，必须与 preloadSrc 方法设置的 src 一致，否则无法播放。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract playPreloadedSrc(src: string): number;

  /**
   * 释放预加载的媒体资源。
   *
   * @param src 媒体资源的网络路径。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unloadSrc(src: string): number;

  /**
   * 开启或关闭媒体播放器的空间音频。
   *
   * 成功设置媒体播放器的空间音频参数后，SDK 会开启媒体播放器的空间音频，即本地用户听媒体资源会有空间感。
   * 如果需关闭媒体播放器的空间音频，你需要将 params 参数设为空。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setSpatialAudioParams(params: SpatialAudioParams): number;

  /**
   * @ignore
   */
  abstract setSoundPositionParams(pan: number, gain: number): number;

  /**
   * @ignore
   */
  abstract getAudioBufferDelay(): number;

  /**
   * 设置媒体播放器选项。
   *
   * 媒体播放器支持通过 key 和 value 来设置选项。
   * 该方法和 setPlayerOptionInString 的区别在于，该方法的 value 是 Int 型， setPlayerOptionInString 的 value 是 String 型。二者不可混用。
   *
   * @param key key 值。
   * @param value value 值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setPlayerOptionInInt(key: string, value: number): number;

  /**
   * 设置媒体播放器选项。
   *
   * 媒体播放器支持通过 key 和 value 来设置选项。
   * 该方法和 setPlayerOptionInInt 的区别在于，该方法的 value 是 String 型， setPlayerOptionInInt 的 value 是 Int 型。二者不可混用。
   *
   * @param key key 值。
   * @param value value 值。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract setPlayerOptionInString(key: string, value: string): number;
}

/**
 * 该类提供管理媒体播放器中缓存媒体文件的方法。
 */
export abstract class IMediaPlayerCacheManager {
  /**
   * 删除媒体播放器中所有已缓存的媒体文件。
   *
   * 该方法不会删除正在播放中的已缓存媒体文件。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract removeAllCaches(): number;

  /**
   * 删除媒体播放器中近期最少使用的一个缓存媒体文件。
   *
   * 缓存媒体文件占用过多空间时，你可以调用该方法清理缓存文件。调用该方法后，SDK 会删除最少使用的一个缓存媒体文件。 当你调用此方法删除缓存媒体文件时，当前正在播放的已缓存媒体文件不会被删除。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract removeOldCache(): number;

  /**
   * 删除指定的已缓存媒体文件。
   *
   * 该方法不会删除正在播放中的已缓存媒体文件。
   *
   * @param uri 待删除的缓存文件的 URI（Uniform Resource Identifier），可用于标识媒体文件。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract removeCacheByUri(uri: string): number;

  /**
   * 设置待缓存的媒体文件的储存路径。
   *
   * 该方法需在初始化 IRtcEngine 之后调用。
   *
   * @param path 缓存文件储存的绝对路径。请确保指定的目录存在且可写。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract setCacheDir(path: string): number;

  /**
   * 设置缓存媒体文件数量的上限。
   *
   * @param count 可缓存的媒体文件数量的上限，默认值为 1000。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract setMaxCacheFileCount(count: number): number;

  /**
   * 设置缓存媒体文件的总缓存大小的上限。
   *
   * @param cacheSize 缓存媒体文件的总缓存上限，单位为字节。默认为 1 GB。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract setMaxCacheFileSize(cacheSize: number): number;

  /**
   * 设置是否开启自动清除缓存文件功能。
   *
   * 开启自动清除缓存文件后，当播放器中缓存的媒体文件超过你设置的文件数量或总缓存大小的上限时，SDK 会自动清除近期最少使用的一个缓存文件。
   *
   * @param enable 是否自动清除缓存文件： true ：开启自动清除缓存文件功能。 false ：（默认）关闭自动清除缓存文件功能。
   *
   * @returns
   * 0：方法调用成功。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract enableAutoRemoveCache(enable: boolean): number;

  /**
   * 获取缓存文件的储存路径。
   *
   * 如果你在调用该方法前未曾调用 setCacheDir 方法自定义缓存文件的储存路径，该方法返回的为 SDK 默认的缓存文件储存路径。
   *
   * @param length 输入参数，缓存文件储存路径字符串的最大长度。
   *
   * @returns
   * 方法调用成功时，返回缓存文件的储存路径。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getCacheDir(length: number): string;

  /**
   * 获取所设置的缓存文件数量上限。
   *
   * SDK 默认的缓存文件数量上限为 1000。
   *
   * @returns
   * > 0：方法调用成功，返回缓存文件数量的上限。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getMaxCacheFileCount(): number;

  /**
   * 获取所设置的缓存文件总缓存的上限。
   *
   * SDK 默认的缓存文件总缓存上限为 1GB。你可以调用 setMaxCacheFileSize 方法自定义总缓存大小的上限。
   *
   * @returns
   * > 0：方法调用成功，返回缓存文件的总缓存上限，单位为字节。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getMaxCacheFileSize(): number;

  /**
   * 获取当前已缓存的媒体文件的总数量。
   *
   * @returns
   * ≥ 0：方法调用成功，返回当前已缓存的媒体文件的总数量。
   *  < 0：方法调用失败，详见 MediaPlayerReason 。
   */
  abstract getCacheFileCount(): number;
}

/**
 * 媒体播放器的视频数据观测器。
 *
 * 你可以调用 registerVideoFrameObserver 注册或取消注册 IMediaPlayerVideoFrameObserver 观测器。
 */
export interface IMediaPlayerVideoFrameObserver {
  /**
   * 已获取视频帧回调。
   *
   * 注册视频观测器后，每次接收到一帧视频时，都会触发该回调，报告视频帧信息。
   * 建议你通过 C++ API 实现该回调。
   *
   * @param frame 视频帧信息，详见 VideoFrame 。
   */
  onFrame?(frame: VideoFrame): void;
}
