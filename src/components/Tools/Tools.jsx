export function intervalTime(ctime) {
    var s = new Date().getTime()/1000-parseInt(ctime);
    if (s > 2592000) {
      return parseInt(s / 2592000) + '月前';
    } else if (s > 86400) {
      return parseInt(s / 86400) + '天前';
    } else if (s > 3600) {
      return parseInt(s / 3600) + '小时前';
    } else if (s > 60) {
      return parseInt(s / 60) + '分钟前';
    } 
}