# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V2.0

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V2.0](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V2.0)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V2.0 更新

- 更新界面并新增设置板块，可自由调节界面颜色风格。
- 新增 Anime4K、Real-CUGAN 模型，以及 RIFE 4.25、RIFE 4.26，提供更多超分与补帧选择。
- 优化长视频任务链，明显降低处理时所需的临时磁盘空间。
- 新增性能档位，可根据显卡性能自由调节。
- 新增 AMD AMF 编码，修复 NVENC 报错问题，并加入 H.265 编码器与 10-bit 输出。
- 再次优化进度反馈，任务状态更加直观。
- 新增实验性去重功能，并优化处理设置板块。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
