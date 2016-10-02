const zhihu = require( '../../libs/zhihu.js' );

Page( {
  data : {
	  title : '',
    image : ''
	},
	onLoad ( params ) {
		var that = this;
	  console.log( 'load detail.' )
		zhihu.fetchData( `news/${params.id}` ).then( ( data ) => {
		  console.log( 'detail',  data )
			that.setData( {
			  title : data.title,
				image : data.image.replace( /pic\d/, 'pic3' )
			} )
		} )
	},
	onReady () {
	  wx.setNavigationBarTitle( { title : '知乎热文 - ' + this.data.title } );
	}
} )
