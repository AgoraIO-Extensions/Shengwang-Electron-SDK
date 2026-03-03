import './extension/IAgoraMusicContentCenterExtension';
import { IMediaPlayer } from './IAgoraMediaPlayer';

/**
 * 音乐资源的播放模式。
 */
export enum MusicPlayMode {
  /**
   * 0：原唱。
   */
  KMusicPlayModeOriginal = 0,
  /**
   * 1：伴唱。
   */
  KMusicPlayModeAccompany = 1,
  /**
   * 2：导唱。
   */
  KMusicPlayModeLeadSing = 2,
}

/**
 * 音乐资源的加载状态。
 */
export enum PreloadState {
  /**
   * 0：音乐资源加载完成。
   */
  KPreloadStateCompleted = 0,
  /**
   * 1：音乐资源加载失败。
   */
  KPreloadStateFailed = 1,
  /**
   * 2：音乐资源正在加载中。
   */
  KPreloadStatePreloading = 2,
  /**
   * 3：缓存的音乐资源已被移除。
   */
  KPreloadStateRemoved = 3,
}

/**
 * 音乐内容中心的请求状态码。
 */
export enum MusicContentCenterStateReason {
  /**
   * 0：请求成功。
   */
  KMusicContentCenterReasonOk = 0,
  /**
   * 1：一般错误，无明确归因。
   */
  KMusicContentCenterReasonError = 1,
  /**
   * 2：网关异常。可能的原因有：
   *  当前使用的 Token 已过期。请重新生成 Token。
   *  传入的 Token 无效。请确保你使用的是 RTM Token。
   *  网络错误。请检查你的网络。
   */
  KMusicContentCenterReasonGateway = 2,
  /**
   * 3：权限错误或音乐资源不存在。请确保你的项目已开通声网音乐内容中心权限，请[联系技术支持](https://ticket.shengwang.cn/)。
   */
  KMusicContentCenterReasonPermissionAndResource = 3,
  /**
   * 4：内部数据解析错误。请[联系技术支持](https://ticket.shengwang.cn/)。
   */
  KMusicContentCenterReasonInternalDataParse = 4,
  /**
   * 5：音乐资源加载时出错。请[联系技术支持](https://ticket.shengwang.cn/)。
   */
  KMusicContentCenterReasonMusicLoading = 5,
  /**
   * 6：音乐资源解密时出错。请[联系技术支持](https://ticket.shengwang.cn/)。
   */
  KMusicContentCenterReasonMusicDecryption = 6,
  /**
   * 7：HTTP 内部出现错误。请稍后重试。
   */
  KMusicContentCenterReasonHttpInternalError = 7,
}

/**
 * 音乐榜单的详细信息。
 */
export class MusicChartInfo {
  /**
   * 榜单名。
   */
  chartName?: string;
  /**
   * 音乐榜单的 ID。
   */
  id?: number;
}

/**
 * 音乐资源的缓存状态。
 */
export enum MusicCacheStatusType {
  /**
   * 0: 音乐资源已缓存。
   */
  MusicCacheStatusTypeCached = 0,
  /**
   * 1: 音乐资源正在缓存。
   */
  MusicCacheStatusTypeCaching = 1,
}

/**
 * 缓存的音乐资源的相关信息。
 */
export class MusicCacheInfo {
  /**
   * 音乐资源的编号，用于标识音乐资源。
   */
  songCode?: number;
  /**
   * 音乐资源的缓存状态，详见 MusicCacheStatusType 。
   */
  status?: MusicCacheStatusType;
}

/**
 * 音乐榜单的详细信息。
 */
export abstract class MusicChartCollection {
  /**
   * 获取本次请求的音乐榜单数量。
   *
   * @returns
   * 本次请求的音乐榜单数量。
   */
  abstract getCount(): number;

  /**
   * 获取音乐榜单的详细信息。
   *
   * @param index MusicChartInfo 数组的索引。
   *
   * @returns
   * MusicChartInfo ，包含音乐榜单的详细信息。
   */
  abstract get(index: number): MusicChartInfo;
}

/**
 * @ignore
 */
export class MvProperty {
  /**
   * @ignore
   */
  resolution?: string;
  /**
   * @ignore
   */
  bandwidth?: string;
}

/**
 * 音乐高潮片段设置。
 */
export class ClimaxSegment {
  /**
   * 音乐高潮片段的开始时间点，单位毫秒。
   */
  startTimeMs?: number;
  /**
   * 音乐高潮片段的结束时间点，单位毫秒。
   */
  endTimeMs?: number;
}

/**
 * 音乐资源的详细信息。
 */
export class Music {
  /**
   * 音乐资源的编号，用于标识一个音乐资源。
   */
  songCode?: number;
  /**
   * 音乐资源名称。
   */
  name?: string;
  /**
   * 歌手名。
   */
  singer?: string;
  /**
   * 音乐资源海报的下载地址。
   */
  poster?: string;
  /**
   * 音乐资源发布的时间。
   */
  releaseTime?: string;
  /**
   * 音乐资源总时长 （秒）。
   */
  durationS?: number;
  /**
   * 音乐资源类型：
   *  1：左声道伴奏，右声道原唱的单音轨音源。
   *  2：只有伴唱的单音轨音源。
   *  3：只有原唱的单音轨音源。
   *  4：多音轨音源。
   */
  type?: number;
  /**
   * 歌曲是否支持演唱评分功能：
   *  1：歌曲支持演唱评分功能。
   *  2：歌曲不支持演唱评分功能。
   */
  pitchType?: number;
  /**
   * 歌曲的歌词数量。
   */
  lyricCount?: number;
  /**
   * 支持的歌词类型：
   *  0：xml 格式。
   *  1：lrc 格式。
   */
  lyricList?: number[];
  /**
   * 高潮片段的数量。
   */
  climaxSegmentCount?: number;
  /**
   * 音乐高潮片段列表，详见 ClimaxSegment 。
   */
  climaxSegmentList?: ClimaxSegment[];
  /**
   * @ignore
   */
  mvPropertyCount?: number;
  /**
   * @ignore
   */
  mvPropertyList?: MvProperty[];
}

/**
 * 音乐资源列表的详细信息。
 */
export abstract class MusicCollection {
  /**
   * 获取本次请求的音乐数量。
   *
   * @returns
   * 本次请求的音乐数量。
   */
  abstract getCount(): number;

  /**
   * 获取列表内音乐资源的总数量。
   *
   * @returns
   * 列表内音乐资源的总数量。
   */
  abstract getTotal(): number;

  /**
   * 获取音乐资源列表当前页的页码。
   *
   * @returns
   * 当前页的页码。
   */
  abstract getPage(): number;

  /**
   * 获取 SDK 实际返回的音乐资源数量。
   *
   * @returns
   * SDK 实际返回的音乐资源数量。
   */
  abstract getPageSize(): number;

  /**
   * 获取当前页面列表中音乐资源的详细信息。
   *
   * @param index Music 数组的索引。
   *
   * @returns
   * 一个 Music 实例。
   */
  abstract getMusic(index: number): Music;
}

/**
 * IMusicContentCenterEventHandler 接口类，用于 SDK 向客户端发送音乐内容中心事件通知。
 */
export interface IMusicContentCenterEventHandler {
  /**
   * 获取音乐榜单回调。
   *
   * 当你调用 getMusicCharts 方法获取全部音乐榜单之后，SDK 会触发该回调。
   *
   * @param requestId 请求 ID。本次请求的唯一标识。
   * @param result 当前可播放的音乐榜单列表。详见 MusicChartInfo 。
   * @param reason 音乐内容中心的请求状态码，详见 MusicContentCenterStateReason 。
   */
  onMusicChartsResult?(
    requestId: string,
    result: MusicChartInfo[],
    reason: MusicContentCenterStateReason
  ): void;

  /**
   * 获取音乐资源列表回调。
   *
   * 当你调用 getMusicCollectionByMusicChartId 方法来获取指定榜单的音乐资源列表或调用 searchMusic 来搜索音乐资源时，SDK 会触发此回调报告榜单中音乐资源列表的详细信息。
   *
   * @param requestId 请求 ID。本次请求的唯一标识。
   * @param result 音乐资源列表的详细信息。详见 MusicCollection 。
   * @param reason 音乐内容中心的请求状态码，详见 MusicContentCenterStateReason 。
   */
  onMusicCollectionResult?(
    requestId: string,
    result: MusicCollection,
    reason: MusicContentCenterStateReason
  ): void;

  /**
   * 歌词下载地址回调。
   *
   * 当你调用 getLyric 获取指定歌曲的歌词下载地址后，SDK 会触发该回调。
   *
   * @param requestId 请求 ID。本次请求的唯一标识。
   * @param lyricUrl 歌词的下载地址。
   * @param reason 音乐内容中心的请求状态码，详见 MusicContentCenterStateReason 。
   */
  onLyricResult?(
    requestId: string,
    songCode: number,
    lyricUrl: string,
    reason: MusicContentCenterStateReason
  ): void;

  /**
   * 音乐资源的详细信息回调。
   *
   * 当你调用 getSongSimpleInfo 获取某一音乐资源的详细信息后，SDK 会触发该回调。
   *
   * @param requestId 请求 ID。本次请求的唯一标识。
   * @param songCode 音乐资源的编号，用于标识音乐资源。
   * @param simpleInfo 音乐资源的相关信息，包含下列内容：
   *  副歌片段的开始和结束的时间（ms）
   *  副歌片段的歌词下载地址
   *  副歌片段时长（ms）
   *  歌曲名称
   *  歌手名
   * @param reason 音乐内容中心的请求状态码，详见 MusicContentCenterStateReason 。
   */
  onSongSimpleInfoResult?(
    requestId: string,
    songCode: number,
    simpleInfo: string,
    reason: MusicContentCenterStateReason
  ): void;

  /**
   * 报告预加载音乐资源的事件。
   *
   * 当你调用 Preload 方法预加载音乐资源后，SDK 会触发该回调。
   *
   * @param songCode 音乐资源的编号，用于标识一个音乐资源。
   * @param percent 音乐资源当前的加载进度，取值范围为 [0,100]。
   * @param lyricUrl 歌词下载地址。
   * @param state 当前音乐资源的加载状态。详见 PreloadState 。
   * @param reason 音乐内容中心的请求状态码，详见 MusicContentCenterStateReason 。
   */
  onPreLoadEvent?(
    requestId: string,
    songCode: number,
    percent: number,
    lyricUrl: string,
    state: PreloadState,
    reason: MusicContentCenterStateReason
  ): void;
}

/**
 * 音乐内容中心的设置。
 */
export class MusicContentCenterConfiguration {
  /**
   * 已启用内容中心的项目的 App ID。
   */
  appId?: string;
  /**
   * 使用音乐内容中心时，用于鉴权的 RTM Token。
   *  声网推荐你使用 AccessToken2 进行鉴权，详见[部署 Token 服务器](https://doc.shengwang.cn/doc/rtm2/android/user-guide/token/token-generation)。生成 Token 时，请向 uid 传入 String 型的 mccUid 。
   *  当你的 Token 即将过期时，你可以调用 renewToken 来传入新的 Token。
   */
  token?: string;
  /**
   * 使用音乐内容中心的用户 ID，该 ID 可以和你加入 RTC 频道时使用的 uid 一致，但不能为 0。
   */
  mccUid?: number;
  /**
   * 可缓存的音乐资源数量，最多不能超过 50。
   */
  maxCacheSize?: number;
  /**
   * @ignore
   */
  mccDomain?: string;
}

/**
 * 继承自 IMediaPlayer 类，提供音乐播放器的相关方法。
 */
export abstract class IMusicPlayer extends IMediaPlayer {
  /**
   * 设置音乐资源的播放模式。
   *
   * 你可以调用该方法来设置启用原唱、伴奏或导唱。如不调用该方法进行设置，则默认播放伴奏；如果音乐资源没有伴奏，则播放原唱。 你可以通过 onMusicCollectionResult 回调获取音乐资源的详细信息，并可通过其中的 result 参数得知需播放的版权音乐所支持的播放类型。
   *
   * @param mode 播放模式，详见 MusicPlayMode 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   *  -2: 参数设置错误，请重新设置参数。
   */
  abstract setPlayMode(mode: MusicPlayMode): number;

  /**
   * 通过音乐资源编号打开音乐资源。
   *
   * 在调用此方法之前，请确保需要播放的音乐资源已加载完成。你可以调用 isPreloaded 方法来检测音乐资源是否已被预加载，或通过 onPreLoadEvent 回调得知。
   * 调用该方法后会触发 onPlayerSourceStateChanged 回调。在收到报告播放状态为 PlayerStateOpenCompleted 后，你可以调用 play 方法播放媒体文件。 如果你想要打开的音乐资源受数字版权保护，则需要调用此方法打开。对于不受数字版权保护的音乐资源，你可以选择通过调用此方法或 IMediaPlayer 类下的 open 方法来打开。
   *
   * @param songCode 音乐资源的编号，用于标识音乐资源。
   * @param startPos 设置起始播放位置（毫秒），默认值为 0。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract openWithSongCode(songCode: number, startPos?: number): number;
}

/**
 * IMusicContentCenter 接口类提供音乐内容中心的相关方法。
 */
export abstract class IMusicContentCenter {
  /**
   * 初始化 IMusicContentCenter 。
   *
   * 在调用 IMusicContentCenter 类下的其他方法前，你需要先调用该方法初始化 IMusicContentCenter 。
   *
   * @param configuration IMusicContentCenter 的设置，详见 MusicContentCenterConfiguration 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract initialize(configuration: MusicContentCenterConfiguration): number;

  /**
   * 更新 Token。
   *
   * 当你用于鉴权的 Token 快要过期或已过期时，你可以调用该方法来传入新生成的 Token。
   *
   * @param token 新的 Token。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract renewToken(token: string): number;

  /**
   * 释放音乐内容中心所占用的所有资源。
   *
   * 该方法需要在 IRtcEngine 的 release 方法前调用。
   */
  abstract release(): void;

  /**
   * 注册音乐内容中心回调事件。
   *
   * @param eventHandler 待注册的回调事件，详见 IMusicContentCenterEventHandler 。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract registerEventHandler(
    eventHandler: IMusicContentCenterEventHandler
  ): number;

  /**
   * 取消注册音乐内容中心事件回调。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract unregisterEventHandler(): number;

  /**
   * 创建音乐播放器。
   *
   * 如果你需要播放音乐内容中心的音乐资源，你需要先调用该方法来创建一个音乐播放器。
   *
   * @returns
   * 方法调用成功：返回 IMusicPlayer 对象。
   *  方法调用失败：返回空指针。
   */
  abstract createMusicPlayer(): IMusicPlayer;

  /**
   * 销毁音乐播放器对象。
   *
   * 当你不再需要使用音乐播放器时，你可以调用该方法来销毁音乐播放器对象。销毁之后如果需要重新使用音乐播放器，需要调用 createMusicPlayer 重新创建一个音乐播放器对象。
   *
   * @param musicPlayer IMusicPlayer 对象。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract destroyMusicPlayer(musicPlayer: IMusicPlayer): number;

  /**
   * 获取全部音乐榜单。
   *
   * 当你调用该方法后，SDK 会触发 onMusicChartsResult 回调报告音乐榜单的详细信息。
   *
   * @returns
   * 一个 requestId ，为本次请求的唯一标识。
   */
  abstract getMusicCharts(): string;

  /**
   * 通过音乐榜单的 ID 获取指定榜单的音乐资源列表。
   *
   * 成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调报告榜单中音乐资源列表的详细信息。
   *
   * @param musicChartId 音乐榜单的 ID，可以通过 onMusicChartsResult 回调获取。你也可以通过 RESTful API 来[获取曲库所有歌曲列表](https://doc.shengwang.cn/doc/online-ktv/android/ktv-scenario/api/music-content-center#%E8%8E%B7%E5%8F%96%E6%9B%B2%E5%BA%93%E6%89%80%E6%9C%89%E6%AD%8C%E6%9B%B2%E5%88%97%E8%A1%A8)或[获取增量歌曲列表](https://doc.shengwang.cn/doc/online-ktv/android/ktv-scenario/api/music-content-center#%E8%8E%B7%E5%8F%96%E5%A2%9E%E9%87%8F%E6%AD%8C%E6%9B%B2%E5%88%97%E8%A1%A8)。
   * @param page 当前页面编号，默认从 1 开始。
   * @param pageSize 当前音乐资源列表的总页面数量，最大值为 50。
   * @param jsonOption 扩展 JSON 字段，默认为 null。你可以通过该字段来筛选出你需要的音乐资源，目前支持筛选可打分的音乐资源及音乐资源的副歌片段： pitchType ：音乐资源是否支持评分。 1 ：可评分的音乐资源。 2 ：不可评分的音乐资源。 needHighPart ：是否需要合唱片段资源。 YES ：需要合唱片段资源。 NO ：不需要合唱片段资源。
   *
   * @returns
   * 一个 requestId ，为本次请求的唯一标识。
   */
  abstract getMusicCollectionByMusicChartId(
    musicChartId: number,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string;

  /**
   * 搜索音乐资源。
   *
   * 成功调用该方法后，SDK 会触发 onMusicCollectionResult 回调报告检索到的音乐资源列表。
   *
   * @param keyword 搜索关键词，支持歌曲名、歌手搜索。
   * @param page 想要获取的音乐资源列表的目标页编号。
   * @param pageSize 每页所展示的音乐资源的最大数量，最大值为 50。
   * @param jsonOption 扩展 JSON 字段，默认为 null。你可以通过该字段来筛选出你需要的音乐资源，目前支持筛选可打分的音乐资源及音乐资源的副歌片段： pitchType ：音乐资源是否支持评分。 1 ：可评分的音乐资源。 2 ：不可评分的音乐资源。 needHighPart ：是否需要合唱片段资源。 YES ：需要合唱片段资源。 NO ：不需要合唱片段资源。
   * @param requestId 请求 ID。本次请求的唯一标识。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract searchMusic(
    keyWord: string,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string;

  /**
   * 预加载音乐资源。
   *
   * 你可以调用该方法预先加载需要播放的音乐资源。成功调用该方法后，SDK 会触发 onPreLoadEvent 回调报告预加载音乐资源的事件。
   * 在调用该方法来预加载音乐资源之前，你需要调用 getMusicCollectionByMusicChartId 或 searchMusic 方法来获取你需要播放的音乐资源，并通过由此触发的 onMusicCollectionResult 回调获取音乐资源的编号（ songCode ）。 如需销毁 IRtcEngine 对象，请在收到 onPreLoadEvent 回调后，再调用 release 方法。
   *
   * @param songCode 音乐资源的编号，用于标识音乐资源。
   *
   * @returns
   * 一个 requestId ，为本次请求的唯一标识。
   */
  abstract preload(songCode: number): string;

  /**
   * 删除已缓存的音乐资源。
   *
   * 你可以调用该方法删除某一已缓存的音乐资源，如需删除多个音乐资源，你可以多次调用该方法。
   *
   * @param songCode 待删除的音乐资源的编号。
   *
   * @returns
   * 0: 方法调用成功，音乐资源已删除。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract removeCache(songCode: number): number;

  /**
   * 获取已缓存的音乐资源信息。
   *
   * 调用该方法前，你需要预先分配一定大小的内存空间用来存储缓存音乐资源的信息。如果你需要设置可缓存的音乐资源数量，可通过 initialize 的 configuration 来设置。
   * 当你不再需要使用已缓存的音乐资源时，你需要及时释放内存以防止内存泄漏。
   *
   * @returns
   * 方法调用成功时，返回一个包含以下属性的对象： cacheInfo ：音乐缓存信息数组。 cacheInfoSize ：音乐缓存信息数组的长度。
   */
  abstract getCaches(): { cacheInfo: MusicCacheInfo[]; cacheInfoSize: number };

  /**
   * 检测音乐资源是否已被预加载。
   *
   * 该方法为同步调用。如需预加载新的音乐资源，可调用 Preload 。
   *
   * @param songCode 音乐资源的编号，用于标识一个音乐资源。
   *
   * @returns
   * 0: 方法调用成功，该音乐资源已被预加载。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract isPreloaded(songCode: number): boolean;

  /**
   * 获取音乐资源的歌词下载地址。
   *
   * 成功调用该方法后，SDK 会触发 onLyricResult 回调报告歌词的下载地址。
   *
   * @param songCode 音乐资源的编号，用于标识音乐资源。
   * @param lyricType 歌词类型：
   *  0：xml 格式。
   *  1：lrc 格式。
   *
   * @returns
   * 一个 requestId ，为本次请求的唯一标识。
   */
  abstract getLyric(songCode: number, lyricType?: number): string;

  /**
   * 获取某一音乐资源的详细信息。
   *
   * 在调用该方法前，你需要先获取到对应的音乐资源的编号。你可以通过调用 getMusicCollectionByMusicChartId 或 searchMusic 方法来获取音乐资源，并通过由此触发的 onMusicCollectionResult 回调获取音乐资源的编号（ songCode ）。
   * 当你调用该方法后，SDK 会触发 onSongSimpleInfoResult 回调报告音乐资源的详细信息。
   *
   * @param songCode 音乐资源的编号，用于标识音乐资源。
   *
   * @returns
   * 一个 requestId ，为本次请求的唯一标识。
   */
  abstract getSongSimpleInfo(songCode: number): string;

  /**
   * 创建音乐资源的副歌片段编号。
   *
   * @param songCode 音乐资源编号，用于标识音乐资源。你可以通过调用 getMusicCollectionByMusicChartId 或 searchMusic 方法来获取音乐资源，并通过由此触发的 onMusicCollectionResult 回调获取音乐资源的编号（ songCode ）。
   * @param jsonOption 声网会根据你在 sceneType 传入的应用场景进行收费。不同的应用场景对应不同的费率，你可以参考 [计费说明](https://doc.shengwang.cn/doc/online-ktv/android/online-ktv-sdk/overview/billing) 查看详细的计费。如果需要切换到不同场景，需要重新调用此方法并传入 sceneType 的值。 扩展 JSON 字段，默认为 null。目前支持传入下列值：
   *  sceneType：场景类型。1：直播场景，在线 K 歌房和背景音乐播放；2：直播场景，背景音乐播放；3：（默认）声动语聊场景，在线 K 歌房；4：声动语聊场景，背景音乐播放；5：VR 场景，在线 K 歌房和背景音乐播放。示例： {"sceneType":1} 。
   *  highPart：副歌片段的索引，从 onMusicCollectionResult 回调中获取，索引从 0 开始。示例： {"format": {"highpart": 0}} 。
   *
   * @returns
   * 方法调用成功，返回创建的音乐资源内部编号。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/electron/error-code)了解详情和解决建议。
   */
  abstract getInternalSongCode(songCode: number, jsonOption: string): number;
}
