# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.8

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V1.8](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.8)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V1.8 更新

- 修复滚动设置页面时误触模型、倍率、帧率、显卡和高级数值的问题。
- 工具路径改为稳定持久化，有效的手动或内置路径不会再被 Scoop 覆盖。
- 修复短音轨截断视频末尾帧，并改善小幅帧数偏差的校验逻辑。
- NVENC 增加基础环境与目标分辨率两级预检，失败原因更加清晰。
- 增强 MKV、AV1 和多种音轨兼容，不适合 MP4 的音轨可按需转换为 AAC。
- 增加 RIFE Vulkan 致命错误、显存分配失败和交替黑帧保护。
- 临时空间提示明确说明占用来自处理期间的图片帧，成功后会自动删除。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。

应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE / rife-ncnn-vulkan、ncnn 和 Vulkan 等第三方能力，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 开发，所有功能免费使用。

允许免费转载原始安装包、免安装压缩包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
