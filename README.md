# SnowLeopard Vision（雪豹视觉）

SnowLeopard Vision 是一款在 Windows 本地运行的图片与视频增强工具，提供图片超分、视频超分、视频补帧和超分并补帧功能。

本仓库用于维护 **官方网站、公开说明与版本发布**。SnowLeopard Vision 应用程序本身并未在此仓库公开源代码。

## 下载

建议普通用户使用当前稳定版本。

| 版本 | 发布时间 | 说明 | 下载 |
| --- | --- | --- | --- |
| V1.3 | 2026-06-13 | 当前稳定版本 | [安装版与免安装版](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.3) |
| V1.2 | 2026-06-09 | 历史版本，仅供兼容与存档 | [查看 V1.2](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases/tag/V1.2) |

- [访问官方网站](https://snowleopard-elysia.github.io/SnowLeopard-Vision/)
- [查看全部版本与历史下载](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)

安装版与免安装版功能相同：

- **安装版**提供安装向导，可以选择安装位置并创建桌面快捷方式。
- **免安装版**解压后即可运行，适合放在自定义文件夹或移动硬盘中。

## 第一次使用

1. 从上方下载页选择安装版或免安装版。
2. 启动 SnowLeopard Vision，点击“一键准备/修复环境”。
3. 选择图片、视频或文件夹，并选择需要的处理方式。
4. 确认设置后开始任务，在进度页面查看当前阶段和日志。

处理图片和视频会消耗显卡性能与磁盘空间。视频越长、输出分辨率越高，处理时间和临时文件占用通常越大。

## 功能说明

- **图片超分**：提高图片分辨率，改善低分辨率图片放大后的清晰度。
- **视频超分**：逐帧增强视频画面，再合成为更高分辨率的视频。
- **视频补帧**：生成中间帧，提高视频实际帧数与运动流畅度。
- **超分并补帧**：依次完成视频超分和补帧。
- **一键准备环境**：自动配置运行所需的 FFmpeg、Real-ESRGAN 和 RIFE。

## 运行要求

- Windows 10 或 Windows 11
- NVIDIA 显卡
- 建议使用较新的 NVIDIA 驱动
- 足够的磁盘可用空间

软件会分别检测 AI 处理显卡和 NVENC 编码显卡。部分电脑如果无法使用 NVENC，可以关闭 NVENC 后使用 CPU 编码；AI 超分和补帧仍由 NVIDIA 显卡处理。

## V1.3 更新

- 分别检测 AI 处理显卡与 NVENC 编码显卡，并自动选择可用的 NVIDIA 独显。
- 进度页面显示总进度、当前阶段进度与详细日志。
- 环境准备增加下载校验、压缩包路径保护与中断恢复。
- 改善 Windows 深色模式下的可读性、滚动条、控件状态和小窗口表现。
- 安装版与免安装版均可在应用内查看支持作者页面。

## 常见问题

**为什么处理速度比预期慢？**

速度取决于显卡性能、输入分辨率、超分倍率、补帧目标、编码方式和磁盘速度。超分并补帧需要依次执行两个处理阶段，通常耗时最长。

**为什么输出文件明显变大？**

更高分辨率、更多视频帧和更高编码质量都会增加文件大小。可以调整输出质量档位，在画质、体积和处理速度之间取舍。

**任务失败后应当提供什么信息？**

请保留进度页面中的日志，并说明使用的功能、显卡型号、是否启用 NVENC，以及失败发生在哪个阶段。

问题反馈可通过 [GitHub Issues](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/issues)，或联系作者 QQ：767411754。

## 仓库内容

- `index.html`：官方网站页面
- `assets/`：官网使用的图片与图标
- `.github/workflows/`：GitHub Pages 部署配置
- `NOTICE.md`：使用、转载与第三方组件声明
- `LICENSE`：本仓库公开文件的许可说明
- [Releases](https://github.com/SnowLeopard-Elysia/SnowLeopard-Vision/releases)：应用安装包、免安装包与历史版本

本仓库公开的网页、说明和发布文件不代表 SnowLeopard Vision 应用源代码已经开源。

## 第三方组件

SnowLeopard Vision 调用或依赖 FFmpeg、Real-ESRGAN、RIFE/rife-ncnn-vulkan、ncnn 和 Vulkan。相关组件的版权与许可证归各自作者和项目所有。

## 使用与转载

SnowLeopard Vision 由 **雪豹·Elysia** 独立开发，所有功能免费使用。

允许免费转载原始安装包、免安装包、官方网站链接和 GitHub Release 链接。未经作者书面许可，禁止收费销售、捆绑售卖、冒充作者发布、移除作者署名或替换版权声明。

完整说明见 [NOTICE.md](NOTICE.md) 和 [LICENSE](LICENSE)。
