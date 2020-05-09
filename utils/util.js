// 将时间（秒）转换成 '00:00'格式
const formatSeconds = (s) => {
  let str = "";
  if(s > 0){
      const minutes = Math.floor(s / 60);
      const seconds = Math.floor(s - minutes * 60);
      let m_str = minutes < 10 ? "0" + minutes : minutes;
      let s_str = seconds < 10 ? "0" + seconds : seconds;
      str = m_str + ":" + s_str;
  } else {
      str = "00:00";
  }
  return str;
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

module.exports = {
  formatSeconds: formatSeconds
}
