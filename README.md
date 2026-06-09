# SnowLeopard Vision

SnowLeopard Vision 是一款本地 AI 图片和视频增强工具，支持图片超分、视频超分、视频补帧、超分并补帧。

当前版本：V1.2

## V1.2 更新

- 改用稳定发行版 FFmpeg 8.1.1，增强不同 NVIDIA 显卡与驱动环境下的 NVENC 稳定性。
- 开启 NVENC 后不会自动切换到 CPU；新增真实目标分辨率预检、多种纯 NVENC 兼容方案和驱动恢复重试。
- 音轨不兼容时仅转换音频，视频仍保持 NVENC 编码。
- 修复 GUI 后台任务链、日志与完成状态偶尔丢失的问题。
- 诊断日志新增 GPU、驱动、显存和编码器利用率信息。

## 使用与转载声明

SnowLeopard Vision 由 **雪豹·Elysia** 独立开发，所有功能免费使用。

允许免费转载原始安装包、压缩包、官网链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整声明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
