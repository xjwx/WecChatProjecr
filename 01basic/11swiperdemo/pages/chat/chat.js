// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var systemInfo = wx.getSystemInfoSync();
    var windowWidth = systemInfo.windowWidth;
    this.setData({
      "windowWidth" :windowWidth
    })
  },
  onTouchStateEvent: function(event){
    var startPageX = event.touches[0].pageX;
    this.setData({
      "startPageX":startPageX
    })
  },
  onTouchEndEvent: function(event){
    var endPageX = event.changedTouches[0].PageX;
    var startPageX = this.data.startPageX;
    var x=this.data.x;
    //起始点大于结束点
    if (startPageX >endPageX){
      if(x <-20){
        this.setData
        ({
          x: -100
        })
      }else{
        this.setData({
          x:0
        })
      }
    }else{
      if(x> -80){
        this.setData({
          x:0
        })
      }else{
        this.setData({
          x:-100
        })
      }

    }
  },
  onChangeEvent : function(event){
    var x=event.detail.x;
    this.setData({
      x:x
    })
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