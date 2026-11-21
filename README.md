<p align="center">
  <img src="assets/app-cover.png" alt="SnowLeopard Vision" width="80" height="80">
</p>

<h1 align="center">雪豹视觉</h1>

<p align="center">
  <img src="https://img.shields.io/github/v/release/SnowLeopard-Elysia/SnowLeopard-Vision?style=flat-square&amp;label=%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC" alt="最新版本">
  <img src="https://img.shields.io/badge/Windows-10%20%7C%2011-2376bc?style=flat-square&amp;logo=windows&amp;logoColor=white" alt="支持系统">
  <img src="https://img.shields.io/github/downloads/SnowLeopard-Elysia/SnowLeopard-Vision/total?style=flat-square&amp;label=%E7%B4%AF%E8%AE%A1%E4%B8%8B%E8%BD%BD" alt="累计下载">
  <img src="https://img.shields.io/badge/许可-免费使用-2f855a?style=flat-square" alt="使用许可">
</p>

SnowLeopard Vision 是一款本地 AI 图片、视频增强与音频工具，支持图片超分、视频超分、视频补帧、超分并补帧，以及音频格式转换和视频音频替换。

当前版本：V2.5

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [夸克网盘下载 V2.5](https://pan.quark.cn/s/389f95c11e67)
- [迅雷网盘下载 V2.5](https://pan.xunlei.com/s/VP6xmKaEeBoEGwjevMpCgG4xA1?pwd=4ksn)
- [百度网盘下载 V2.5](https://pan.baidu.com/s/1hTTkcV3mN-8Pm-y_2ci9Yw?pwd=v4ua)
- [历史版本](https://pan.quark.cn/s/a221d02a4c99)

<p align="center">
  <img src="assets/readme-showcase-v24.png" alt="官网超分效果对比：左侧为原图，右侧为 Real-CUGAN 4 倍超分结果" width="960">
</p>

## V2.5 更新说明

- **新增 Intel QSV 硬件编码**，适用于超分补帧和视频格式转换。
- **优化补帧**。RIFE 4.x 支持固定帧率与转场保护同时使用，修复部分高分辨率视频补帧闪黑。
- **改善素材兼容性**。修复部分非整数帧率、可变帧率素材的截短、音画错位和校验误报，改善旋转视频、奇数尺寸及多视频轨处理。
- **优化任务收尾**。断点续跑可复用更多已完成画面；合并失败可直接重试；格式转换遇到原文件占用时自动另存成品。
- **修复编码与界面问题**。修正 AMD H.265 10-bit 标记、性能档位保存、启动白闪和设置展开卡顿。
- **新增哈基米主题和福利页**，优化雪豹主题。同目录覆盖升级时保留个人设置和任务记录。

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
