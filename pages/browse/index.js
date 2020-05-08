// pages/browse/index.js
Page({
    
    /**
    * 页面的初始数据
    */
    data: {
        check_lst:[{
            usr_name:'李小绿',
            create_time:'2020-05-07 03:21:25',
            usr_avatar: '../../icons/coach.png',
            task_lst:[{
                time:20,
                content:'背单词'
            },{
                time: 40,
                content: '绘本阅读'
            }],
            self_comment: '',
            instruction: '',
        },]
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