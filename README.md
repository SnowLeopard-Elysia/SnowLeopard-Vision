# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.4

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V1.4](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.4)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V1.4 更新

- AI 超分与补帧支持检测到的兼容 Vulkan 图形设备，不再仅限 NVIDIA 独显。
- 自动模式优先选择高性能独显，多显卡设备也可以由用户手动选择。
- 未检测到可用 NVENC 时，最终视频自动使用 CPU 编码。
- 保留 V1.3 的设备检测、任务进度、环境校验与界面优化。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE/rife-ncnn-vulkan、ncnn 和 Vulkan，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 独立开发，所有功能免费使用。

允许免费转载原始安装包、免安装包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整说明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
