// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {
        'id':1,
        'title':'许光汉好帅'
      },
      {
        'id':1,
        'title':'易烊千玺真可爱'
      }
    ]
  },

  /**
   * view被点击的事件
   */
  onViewClick: function(event){
    console.log('hello xjw');
  },
/**
 * 
 * 文字被点击
 */
  onArticleClick: function(event){
    var dataset = event.currentTarget.dataset;
    var id=dataset.id;
   wx.navigateTo({
     url: '/pages/article/article?id='+id,
   })
  },
/**
 * 外面视图被点击事件
 */
  onOutterViewClick: function(event){
    console.log("外面被点击了");
    console.log(event);
  },
  /**
 * 里面视图被点击事件
 */
  onInnerViewClick: function(event){
    console.log("里面被点击了");
    console.log(event);
  }
})