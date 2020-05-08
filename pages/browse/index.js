// pages/browse/index.js
Page({
    
    /**
    * 页面的初始数据
    */
    data: {
        check_lst:[{
            usr_name:'李小绿',
            create_time:'2020-05-07 20:21:25',
            usr_avatar: '../../icons/lixiaolv.png',
            task_lst:[{
                time:20,
                content:'背单词'
            },{
                time: 40,
                content: '绘本阅读'
            }],
            self_comment: '孩子今天读绘本了，好棒！',
            instruction: '继续努力哦～～～',
        }, 
        {
            usr_name: '邬小浩',
            create_time: '2020-05-07 19:15:50',
            usr_avatar: '../../icons/wuxiaohao.png',
            task_lst: [{
              time: 15,
              content: '背单词'
            }, {
              time: 10,
              content: '听音频'
            }],
            self_comment: '孩子觉得内容太难，学得少！',
            instruction: '不要灰心，加油！',
          },
          {
            usr_name: '张小红',
            create_time: '2020-05-07 19:45:00',
            usr_avatar: '../../icons/zhangxiaohong.png',
            task_lst: [{
              time: 25,
              content: '背单词'
            }, {
              time: 60,
              content: '影视观看'
            }],
            self_comment: '孩子很喜欢哈利波特，看了1个小时呢！',
            instruction: '看的时候可以跟着一起读，锻炼口语哦～',
          },
        ]
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
        
    }
})