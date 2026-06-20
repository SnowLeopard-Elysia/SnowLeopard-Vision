# 雪豹视觉

SnowLeopard Vision 是一款本地 AI 图片与视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.5

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [下载当前版本 V1.5](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.5)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

## V1.5 更新

- 修复部分 MKV、渲染输出或录屏视频缺少帧数 metadata 时，RIFE 补帧只输出 1 帧的问题。
- RIFE 补帧改用实际抽帧数量计算处理帧数，降低特殊容器格式带来的误判。
- 视频超分与补帧阶段的总进度反馈更连续，减少“看起来卡住”的误解。
- 自定义输出质量显示会跟随高级设置中的 CRF/CQ 数值，不再显示固定默认值。
- 保留原音频与 NVENC 编码改为圆润滑动开关，高级设置增加数值微调说明。
- 支持作者页面继续内置收款码，安装版与免安装版均可正常显示。

## 仓库说明

本仓库用于维护 SnowLeopard Vision 官方网站、公开说明和版本发布，不包含应用程序源代码。
应用调用或依赖 FFmpeg、Real-ESRGAN、RIFE/rife-ncnn-vulkan、ncnn 和 Vulkan，相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 独立开发，所有功能免费使用。
允许免费转载原始安装包、免安装包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整说明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
