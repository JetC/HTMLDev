$(document).ready(function() {
	$('#box11').imgFlash({
		mainID: '#imgbox',//定义主体区域ID
		mainIDRow: 'p',//定义主体区域的行
		mainIDNum: '#num',//定义引导数字区域
		mainIDTxt: '#txt',//定义标题单独显示区域
		mainHoverLink: 'mosve',//定义指定连接CSS样式
		linkTarget: '_blank',//定义引导、标题的链接弹出方式
		timeSwitching: 5000, //图片切换间隔,默认�?�?
		fot: 200, //淡出消失时间
		fin: 200, //淡入显示时间
		auto: true //是否�?��自动滚动true为默认开�?
	});
})
