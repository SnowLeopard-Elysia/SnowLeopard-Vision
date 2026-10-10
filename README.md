# 雪豹视觉

<img src="assets/app-cover.png" alt="SnowLeopard Vision" align="right" width="112">

![最新版本](https://img.shields.io/github/v/release/SnowLeopard-Elysia/SnowLeopard-Vision?style=flat-square&label=最新版本)
![支持系统](https://img.shields.io/badge/Windows-10%20%7C%2011-2376bc?style=flat-square&logo=windows&logoColor=white)
![累计下载](https://img.shields.io/github/downloads/SnowLeopard-Elysia/SnowLeopard-Vision/total?style=flat-square&label=累计下载)
![使用许可](https://img.shields.io/badge/许可-免费使用-2f855a?style=flat-square)

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V2.3

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [夸克网盘下载 V2.3（推荐）](https://pan.quark.cn/s/4b1b8e06b73b)
- [迅雷网盘下载 V2.3](https://pan.xunlei.com/s/VP3a1KAT31f4Uoe-M9WMPjBlA1?pwd=2ymt)
- [百度网盘下载 V2.3](https://pan.baidu.com/s/1qXj-qNhLWnJbHQ3xTXcT3g?pwd=s7pe)
- [GitHub 备用下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.3)
- [历史版本](https://pan.quark.cn/s/de2aed22cddb)

## V2.3 更新说明

### 该版本鸣谢子贤dalao的友情赞助！

- **保留字幕功能**：默认开启，也可按需关闭。兼容的文本字幕可转换为 MP4 支持的字幕；使用 MKV 输出时，可保留样式字幕和字体附件。
- **修复 BUG**：修复重启后暂停任务被跳过、最小化恢复后窗口透明或裁切，以及高速流处理中的分片帧数与拼接异常。
- **任务独立输出目录**：队列中的每个任务都可以分别指定保存位置。
- **UI 优化**：新增环形队列与任务进度、NVIDIA GPU 实际占用显示和运算流程示意；集中显示当前阶段与设备信息，并优化启动界面。
- **性能测试调整**：移除第三个虚幻场景，优化空间占用。
- **安装器启动优化**：优化安装器的启动速度。

## 下载说明

- 安装版适合常规使用，可直接完成安装与卸载。
- 免安装版解压后即可运行，适合便携使用或保留多个版本。
- 国内用户也可以通过[官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/#download)选择夸克、迅雷或百度网盘。
- GitHub 可直接下载安装包或免安装压缩包。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
