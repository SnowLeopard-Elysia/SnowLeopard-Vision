# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.7

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V1.7](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.7)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V1.7 更新

- 修复超长文件名在最大化、还原和连续缩放窗口后挤压界面的问题。
- 新增源文件、输出目录、工具、模型、写入权限和临时空间预检。
- Real-ESRGAN 与 RIFE 改为分块处理，支持更可靠的暂停与断点续跑。
- 队列项目独立保存完整参数，队列与断点文件采用原子写入。
- 新增图片黑图检测，并精确校验视频分辨率、帧率、帧数、时长、画面与音轨。
- 转场保护改用 FFmpeg scdet，失败信息与诊断入口更加完整。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
