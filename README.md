# 毕业电子贺卡使用说明

这是一个纯前端静态网页贺卡，直接由 `index.html`、`style.css`、`script.js` 和 `assets/images/` 组成。

## 本地电脑预览

- 方式一：直接双击 `index.html`，用浏览器打开。
- 方式二：在 VS Code 中使用 Live Server 打开，预览效果会更接近线上环境。

## 手机端推荐查看方式

不建议直接把 zip 发给对方在手机里打开。手机微信、Safari、Chrome 对本地压缩包和本地文件的支持不稳定。

推荐部署到任一静态网页服务：

- GitHub Pages
- Gitee Pages
- Vercel
- Netlify
- 学校或个人静态服务器

部署后，把网页链接发给对方即可，手机点开就能查看。

## 如果必须发送文件

- 必须发送整个 `graduation-card` 文件夹中的网页文件。
- 对方需要先解压。
- 解压后打开 `index.html`。
- 不能只发送 `index.html`，否则样式、脚本和图片都会丢失。
- 发送前可以删除 `assets/original-images/`，这个目录只是原图备份，网页不依赖它。

## 图片说明

网页实际使用的是 `assets/images/` 中的压缩图片，适合手机加载。

`assets/original-images/` 是压缩前的原图备份，网页不会引用它。部署到线上或发给别人时，可以不上传或删除这个备份目录，以减小体积。
