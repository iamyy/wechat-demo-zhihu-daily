const zhihu = require( '../../libs/zhihu.js' )

var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad11111')
		var that = this
		
		zhihu.fetchData( 'news/latest' ).then( ( data ) => {
		  console.log( 'bbbbb', data	)
			data.stories.forEach( ( story ) => {
			  story.images[ 0 ] = story.images[ 0 ].replace( /pic\d/, 'pic3' );
			} )
			that.setData( {
			  items : data.stories
			} )
		} )

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
