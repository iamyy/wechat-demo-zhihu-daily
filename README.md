# wechat-demo-zhihu-daily
微信小程序（应用号）DEMO（知乎日报）

![image](https://raw.githubusercontent.com/iamyy/wechat-demo-zhihu-daily/master/others/images/screen_shoot2.png)

![image](https://raw.githubusercontent.com/iamyy/wechat-demo-zhihu-daily/master/others/images/screen_shoot3.png)

## TODOs
* 首图轮播
* 下拉刷新
* 触底加载更多
* 文章详情接口返回的内容是 html 字符串，需要实现一个 html -> wxml 的插件（以目前微信提供的接口来看，不太可能实现。唯一可以考虑的是利用 canvas 将 html 转图片，但是坑肯定不少）
