//app.js
App({
  onLaunch: function (options) {
    console.log("onLaunch");
    console.log(options);
  },
  onShow: function(options){
    console.log("=========");
    console.log(options);
    console.log("onShow");
  },

  globalData: {
    userInfo: null
  }
})