// pages/login/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:"",
    password:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  inputNum: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  inputPsw: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login:function(){
    if (!this.data.password || this.data.password == "") {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        image: '../../icons/error.png',
        duration: 1000,
        mask: true
      })
    }
    else if (!this.data.account || this.data.account==""){
      wx.showToast({
        title: '账号不能为空',
        icon: 'none',
        image: '../../icons/error.png',
        duration: 1000,
        mask: true
      })
    }
    else{
      //发送登录验证
      console.log("account:" + this.data.account)
      console.log("password:" + this.data.password)
      // wx.request({
      //   url: app.globalData.remote +'/',//待改
      //   data: {
      //     account: this.data.account,//待改
      //     password: this.data.password//待改
      //   },
      //   header: {
      //     'content-type': 'application/json' 
      //   },
      //   success(res) {
      //     console.log(res.data)
      //   }
      // })
    }
  }
})