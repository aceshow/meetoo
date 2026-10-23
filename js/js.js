$(function () {
	// $('body').height($('body')[0].clientHeight);
	initpage();
	$(window).resize(function () {
		initpage();
	})

	function initpage() {
		var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
		var _html = document.getElementsByTagName('html')[0];
		view_width > 640 ? _html.style.fontSize = 640 / 16 + 'px' : _html.style.fontSize = view_width / 16 + 'px';
	}
});

var sllTop;
var divsTop = 330;/*document.getElementsByClassName('content')[0].offsetTop; 获取当前对象到其上级层顶部的距离*/
window.onscroll = function () {
	var onBtn = document.getElementById('top-box');
	sllTop = document.documentElement.scrollTop || document.body.scrollTop;//如果浏览器不支持第一个事件则选择第二

	if (sllTop >= 40) {
		$('.header-con').css('padding', '0');
		$('.logo img').css({ 'width': '50', 'margin-top': '5px', 'margin-left': '10px' });
	} else {
		$('.header-con').css('padding', '10px 0');
		$('.logo img').css({ 'width': '60', 'margin-top': '0px', 'margin-left': '0px' });
	}

	if (sllTop > 240) {
		$('#tbox2').css('display', 'block')
	} else {
		$('#tbox2').css('display', 'none');
	}
	if (sllTop >= divsTop) {
		$('.left-list').css('position', 'fixed');
	} else {
		$('.left-list').css('position', '');
	}
	tlistTop();

};

$(function () {
	$(".taoba").click(function (event) {
		var i = $(this).index();
		var id = $('.dingwei')[i];
		$("html,body").animate({ scrollTop: $(id).offset().top - 80 }, 800);
	});


	$(".list-text").click(function (event) {
		var i2 = $(this).index();
		var id2 = $('.sethome-con')[i2];
		$("html,body").animate({ scrollTop: $(id2).offset().top - 80 }, 800);
	});
});

function tlistTop() {
	var sethome_conHeight;
	var tihsHeight;
	var list_text = document.getElementsByClassName('fa-caret-right');
	if (list_text.length === 0) {
		return false;  //如果匹配到0个元素，则将函数返回，不继续执行
	}
	arr1 = []; //存储元素的top距离页面顶部的高度
	for (var i = 0; i <= 4; i++) {
		thisHeight = document.getElementsByClassName('sethome-con')[i].offsetTop + divsTop - 80;
		arr1.push(thisHeight); //将循环获取到的值添加到数组里面
	}

	if (sllTop >= arr1[0]) {
		list_text[0].style.opacity = 1;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[1]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 1;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[2]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 1;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[3]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 1;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[4]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 1;
	}
}

$('#gotop').click(function () {
	$('body,html').animate({
		scrollTop: 0
	},
		800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
})

function _search_() {
	var aCookie = document.cookie.split(";");

	for (var i = 0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if (aCrumb[0].toString().trim() == 'order_list') {
			continue;
		}
		var name = unescape(aCrumb[0].trim());

		if (aCrumb[0].toString().trim().indexOf("_search_") > -1) {

			var link = getCookie(name).split("_nln_");

			$('.baidu form').attr('action', link[1]);
			$('.this_s').html(link[0]);
			$('#kw-2').attr('name', link[2]);
			$('.Select-box-2 ul').css('height', '48px');
		}

	}

}
_search_();

//清空输入框内容
$('.qingkong').click(function () {
	cls();
	$(this).css('display', 'none')
});
function cls() {
	var sum = 0;
	var t = document.getElementsByTagName("INPUT");
	for (var i = 0; i < t.length; i++) {
		if (t[i].type == 'text') {
			++sum;
			t[i].value = "";//清空 
		}
	}
}

//清空输入框按钮的显示和隐藏
function if_btn() {
	var btn_obj = document.getElementById("kw") || document.getElementById("kw-2");
	var cls_btn = document.getElementById("qingkong");
	var btn_obj_val;
	var times;
	//当元素获得焦点时
	if (btn_obj == '' || btn_obj == null) {
		return false;  //如果没有找到这个元素，则将函数返回，不继续执行
	}
	btn_obj.onfocus = function () {
		times = setInterval(function () {
			btn_obj_val = btn_obj.value;
			if (btn_obj_val != 0) {
				cls_btn.style.display = "block";
			} else {
				cls_btn.style.display = "none";
			}
		}, 200);
	}
	//元素失去焦点时
	btn_obj.onblur = function () {
		clearInterval(times);
	}

}
if_btn();

$('.muban li').click(function () {
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.muban-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
});
$('.ruanjian-tab li').click(function () {
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.ruanjian-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
});

$('.list-link-4').hover(function () {
	//获取当前元素的title内容，赋值给_thisTit
	var _thisTit = $(this).attr('data-title');
	//tips提示内容为_thisTit（即等于当前鼠标滑过元素的title内容），吸附对象为当前鼠标滑过对象
	if (_thisTit != "") {	//判断条件，当前元素的data-title不等于空才执行下面的代码
		layer.tips(_thisTit, this, {
			tips: [1, '#1E9FFF'],
			time: 99999,
		});
	}

}, function () {
	$('.layui-layer-tips').css('display', 'none')
});

var btn = $("#kw-2"), oUl = $(".keylist")[0];

$("#qingkong").click(function () {
	oUl.style.display = 'none';
})




