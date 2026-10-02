# 雪豹视觉

<img src="assets/app-cover.png" alt="SnowLeopard Vision" align="right" width="112">

![最新版本](https://img.shields.io/github/v/release/SnowLeopard-Elysia/SnowLeopard-Vision?style=flat-square&label=最新版本)
![支持系统](https://img.shields.io/badge/Windows-10%20%7C%2011-2376bc?style=flat-square&logo=windows&logoColor=white)
![累计下载](https://img.shields.io/github/downloads/SnowLeopard-Elysia/SnowLeopard-Vision/total?style=flat-square&label=累计下载)
![使用许可](https://img.shields.io/badge/许可-免费使用-2f855a?style=flat-square)

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V2.2

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [夸克网盘下载 V2.2（推荐）](https://pan.quark.cn/s/fc3c5a92736e)
- [迅雷网盘下载 V2.2](https://pan.xunlei.com/s/VP2yty88OmHtTQK1hs7LufLEA1?pwd=rahf)
- [百度网盘下载 V2.2](https://pan.baidu.com/s/1-dinNzs8QYUK_eWudD8xTw?pwd=i92w)
- [GitHub 备用下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.2)

## V2.2 更新

- 新增 GPU 性能测试：支持 DirectX 12、Vulkan 和 1080P／2K／4K 三档分辨率，包含三个实时渲染场景，提供总分、分项成绩及帧率数据。
- 完善视频输出设置：编码选项移至基础设置，新增 AV1、受支持路径的 HDR 输出，以及超分补帧的 MP4／MKV／MOV 格式选择，并补充用途与兼容性说明。RIFE 补帧暂不支持 HDR 输出。
- 增强素材兼容与恢复能力：改善多音轨、字幕和章节保留，增加处理前的兼容提示；最终合成失败后可调整格式重新合并，无需重复 AI 处理。
- 优化补帧与处理稳定性：自动选择优先推荐 RIFE 4.26，改进自定义 60 FPS、可变帧率素材、分段拼接、音画同步及色彩处理。
- 优化界面与使用体验：新增官网更新入口，改善进度反馈、设置说明、窗口圆角、主题记忆及安装界面。

## 下载说明

- 安装版适合常规使用，可直接完成安装与卸载。
- 免安装版解压后即可运行，适合便携使用或保留多个版本。
- 国内用户也可以通过[官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/#download)选择夸克、迅雷或百度网盘。
- 由于 GitHub 单文件大小限制，本次采用分卷下载；不熟悉分卷操作的用户，也可以通过网盘下载完整包。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
