jQuery.fn.imgFlash=function(parameters) {
	defaults = {
		mainID: '#imgbox',//定义主体区域ID
		mainIDRow: 'p',//定义主体区域的行
		mainIDNum: '#num',//定义引导数字区域
		mainIDTxt: '#txt',//定义标题单独显示区域区域
		mainHoverLink: 'kly',//定义指定连接区域
		linkTarget: '_blank',//定义引导、标题的链接弹出方式
		timeSwitching: 2000, //图片切换间隔,默认�?�?
		fot: 200, //淡出消失时间
		fin: 200, //淡入显示时间
		auto: true //是否�?��自动滚动true为默认开�?
	};
	//定义全局变量
	jQuery.extend(defaults,parameters);
	
	$(defaults.mainID).children(defaults.mainIDRow).find('a:last-child').hide();
	var box=$(defaults.mainID).children(defaults.mainIDRow);
	var txt=box.eq(0).find('a').text();
	var imghref2 = $(defaults.mainID).children(defaults.mainIDRow).eq(0).find('a:first-child').attr('href');
	$(defaults.mainIDTxt).append('<a href='+imghref2+' target='+defaults.linkTarget+'>'+txt+'</a>');
	var num=$(defaults.mainID).children(defaults.mainIDRow).length;
	var aa=1;
	for (var i=0; i<num;i++) {
		var imghref = box.eq(i).find('a:first-child').attr('href');
		$(defaults.mainIDNum).append('<a href='+imghref+' target='+defaults.linkTarget+'>'+aa+'</a>');
		aa++;
	};
	$(defaults.mainIDNum).children('a:first-child').addClass(defaults.mainHoverLink);
	//鼠标滑过数字引导区函�?
	$(defaults.mainIDNum).children('a').hover(
		function mouseMain() {
			clearInt();
			var ky = $(defaults.mainIDNum).children('a').index($(this));
			$.mainFunction(ky);
			hgNum= $(defaults.mainIDNum).children('a').index($(this));
			huaguo=true;
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//鼠标滑图片函�?
	$(defaults.mainID).find('img').hover(
		function mouseMain2() {
			clearInt();
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//鼠标滑文字标题函�?
	$(defaults.mainIDTxt).hover(
		function mouseMain3() {
			clearInt();
		},
		function () {
			if (defaults.auto) {
				setInt();
			}
		}
	);
	//自动播放函数
	boxNum=0;
	judge=false;
	hgNum=0;
	huaguo=false;
	if(num>1){
	function autoPlay() {	
				if(huaguo) { boxNum=hgNum; boxNum++; huaguo=false;};
				var imgnum=$(defaults.mainID).children(defaults.mainIDRow).length;
				if ( boxNum == imgnum ) { boxNum = 0 };
				var ky=boxNum;
				//alert(boxNum);
				if (judge) {
					if ( ky == 0) {
						var ky=1;
						boxNum++;
						judge=false;
					};
				};
				$.mainFunction(ky);
				boxNum++;
				
	}
	
	//效果函数
	jQuery.fade=function(k) {
		$(defaults.mainID).children(defaults.mainIDRow).hide();
		$(defaults.mainID).children(defaults.mainIDRow).eq(k).show()
	}
	//切换函数
	jQuery.mainFunction=function(ky) {
					$(defaults.mainIDNum).children('a').removeClass(defaults.mainHoverLink);
					var imghref = $(defaults.mainID).children(defaults.mainIDRow).eq(ky).find('a:first-child').attr('href');
					$(defaults.mainIDNum).children('a').eq(ky).addClass(defaults.mainHoverLink);
					$(defaults.mainIDTxt).empty();
					$.fade(ky);
					var txt = $(defaults.mainID).children(defaults.mainIDRow).eq(ky).find('a').text();
					$(defaults.mainIDTxt).append('<a href='+imghref+' target='+defaults.linkTarget+'>'+txt+'</a>');		
	}
	//定义切换函数
	function setInt(){
		defaults.auto=setInterval(autoPlay,defaults.timeSwitching);
	}	
	//取消周期的函�?
	function clearInt(){ 
		if (defaults.auto) clearInterval(defaults.auto);
	}
	//�?��执行
	if (defaults.auto) {
		setInt(); 
	}
	}

}
