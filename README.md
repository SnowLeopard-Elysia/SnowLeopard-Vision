# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.9

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V1.9](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.9)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V1.9 更新

- 更新 RIFE 处理后端并完善 Vulkan 异常识别，改善部分设备上的中断与兼容性问题。
- 重做断点续跑机制，任务暂停、软件关闭或异常中断后可继续处理，无需从头开始。
- 暂停任务可即时保留断点；终止任务会结束处理并清理本任务产生的临时图片文件。
- 从准备、拆帧、AI 处理、补帧、整理、合成到校验均提供持续的阶段状态与进度反馈。
- 使用新的 TypeScript 桌面界面重构视觉与交互，改善布局、响应速度和操作反馈。
- 改进补帧后的音视频时间轴处理，并增强转场检测与保护范围。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
