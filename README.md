# 多时区数字时钟

一个实时显示全球不同时区当前时间的网页应用。

## 功能特性

- 🌍 实时显示12个主要时区的时间
- 📱 响应式设计，适配各种屏幕尺寸
- 🎨 现代化界面设计
- ⚡ 每秒实时更新
- 🔧 易于扩展，可动态添加新时区

## 包含的时区

- UTC (伦敦)
- CST (北京)
- JST (东京)
- AEST (悉尼)
- IST (印度)
- GST (迪拜)
- CET (巴黎)
- EST (纽约)
- CST (芝加哥)
- MST (丹佛)
- PST (洛杉矶)
- AKST (安克雷奇)

## 使用方法

### 方式1: 直接打开HTML文件

```bash
# 克隆仓库
git clone https://github.com/15822563491lyq/digital-clock-timezone.git
cd digital-clock-timezone

# 直接在浏览器中打开 index.html
```

### 方式2: 使用本地服务器

```bash
# 使用 Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

### 方式3: 使用其他HTTP服务器

```bash
# 使用 Node.js (需要先安装 http-server)
npm install -g http-server
http-server

# 使用 Live Server (VS Code 扩展)
# 在 VS Code 中安装 Live Server 扩展，然后右键点击 index.html 选择 "Open with Live Server"
```

## 文件结构

```
digital-clock-timezone/
├── index.html       # HTML 结构
├── styles.css       # 样式表
├── script.js        # JavaScript 逻辑
├── package.json     # 项目配置
└── README.md        # 项目说明
```

## 自定义时区

你可以通过修改 `script.js` 中的 `timezones` 数组来添加或修改时区：

```javascript
const timezones = [
    { name: 'UTC', city: '伦敦', offset: 0 },
    { name: 'CST', city: '北京', offset: 8 },
    // 添加更多时区...
];
```

或使用 JavaScript 动态添加新时区：

```javascript
addTimezone('GMT', '格林威治', 0);
```

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Backdrop Filter)
- Vanilla JavaScript (无框架依赖)

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
