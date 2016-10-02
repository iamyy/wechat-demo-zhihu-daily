const zhihu = require( '../../libs/zhihu.js' )

var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  gotoDetail: function( e ) {
		var data = e.currentTarget.dataset;
		console.log( data.itemId )	
    wx.navigateTo({
      url: `../detail/detail?id=${data.itemId}`
    })
  },
  onLoad: function () {
		var that = this
		
		zhihu.fetchData( 'news/latest' ).then( ( data ) => {
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
