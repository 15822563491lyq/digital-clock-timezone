// 定义时区配置
const timezones = [
    { name: 'UTC', city: '伦敦', offset: 0 },
    { name: 'CST', city: '北京', offset: 8 },
    { name: 'JST', city: '东京', offset: 9 },
    { name: 'AEST', city: '悉尼', offset: 10 },
    { name: 'IST', city: '印度', offset: 5.5 },
    { name: 'GST', city: '迪拜', offset: 4 },
    { name: 'CET', city: '巴黎', offset: 1 },
    { name: 'EST', city: '纽约', offset: -5 },
    { name: 'CST', city: '芝加哥', offset: -6 },
    { name: 'MST', city: '丹佛', offset: -7 },
    { name: 'PST', city: '洛杉矶', offset: -8 },
    { name: 'AKST', city: '安克雷奇', offset: -9 }
];

// 创建时钟卡片
function createClockCard(timezone) {
    return `
        <div class="clock-card">
            <div class="timezone-name">${timezone.name}</div>
            <div class="city-name">${timezone.city}</div>
            <div class="clock-display" id="clock-${timezone.offset}">${getTime(timezone.offset)}</div>
            <div class="date-display" id="date-${timezone.offset}">${getDate(timezone.offset)}</div>
            <div class="timezone-offset">UTC${timezone.offset > 0 ? '+' : ''}${timezone.offset}</div>
        </div>
    `;
}

// 获取指定时区的时间
function getTime(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const locTime = new Date(utc + 3600000 * offset);
    
    const hours = String(locTime.getHours()).padStart(2, '0');
    const minutes = String(locTime.getMinutes()).padStart(2, '0');
    const seconds = String(locTime.getSeconds()).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
}

// 获取指定时区的日期
function getDate(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const locTime = new Date(utc + 3600000 * offset);
    
    const year = locTime.getFullYear();
    const month = String(locTime.getMonth() + 1).padStart(2, '0');
    const day = String(locTime.getDate()).padStart(2, '0');
    
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDay = weekDays[locTime.getDay()];
    
    return `${year}年${month}月${day}日 ${weekDay}`;
}

// 初始化
function init() {
    const container = document.getElementById('clocksContainer');
    container.innerHTML = timezones.map(tz => createClockCard(tz)).join('');
}

// 更新所有时钟
function updateClocks() {
    timezones.forEach(tz => {
        const clockId = `clock-${tz.offset}`;
        const dateId = `date-${tz.offset}`;
        
        const clockElement = document.getElementById(clockId);
        const dateElement = document.getElementById(dateId);
        
        if (clockElement) {
            clockElement.textContent = getTime(tz.offset);
        }
        if (dateElement) {
            dateElement.textContent = getDate(tz.offset);
        }
    });
}

// 初始化页面
init();

// 每秒更新一次时钟
setInterval(updateClocks, 1000);

// 允许动态添加新时区
function addTimezone(name, city, offset) {
    timezones.push({ name, city, offset });
    init();
    updateClocks();
}

// 暴露 addTimezone 到全局作用域
window.addTimezone = addTimezone;