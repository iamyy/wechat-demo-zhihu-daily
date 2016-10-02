const API_URL = 'http://news-at.zhihu.com/api/4';

function fetch ( type, params ) {
  return ( new Promise( ( resolve, reject ) => {
	  wx.request( {
		  url : `${API_URL}/${type}`,
      data : Object.assign( {}, params ),
			success : resolve,
		  fail : reject	
		} )
	} ) )
}


module.exports = {
  fetchData ( type, params ) {
		return fetch( type, params ).then( res => res.data );
	}
}
