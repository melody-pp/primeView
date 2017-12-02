$(function(){
	/*--------------------------------banner轮播和导航部分------------------------------------------*/
	Ispc()//js判断是pc端还是移动端
	
	/*--------------------------------banner轮播和导航部分完------------------------------------------*/
	/*--------------------------------营销关键字-----------------------------------------------------*/
	//取整函数
	function rand(number) {
	    return Math.floor(Math.random()*number);
	};
	var arr = ['#0f2d5d','#87a2f9','#11c7ca','#98d4d5'];//颜色数组
	var arrs = ['宋哲被抓','日企周休三日','hegfkegnnkegn','亚洲国足第六','李晨撸串','传奇大熊猫过世','ipone X','ipone8','藏獒经济崩盘','政府禁用卡巴斯基','公安协警倒卖信息','网友偶遇谢贤']//营销关键字数组
    var arrLength = arr.length;
    var arrsLength = arrs.length
    var heng = 3;//一行的个数
    var shu = 4;//一列的个数
 	//动态添加营销关键字的组成结构
	for(var i=0;i<shu;i++){
		var str='';
		str+='<div class="across">';
		for(var k=0;k<heng;k++){
			var cc = (i*heng)+k
			str+='<div style="position:relative" class="title row'+cc+'">';
			str+='<span class="typed" style="white-space:pre;"></span>';
			str+='<img src="img/index/opcaity.png"/>'
			str+='<b style="position:absolute;top:0;left:0;" class="p_row'+cc+'"></b>';
			str+='<b style="position:absolute;top:0;left:0;" class="p_row'+cc+'"></b>';
			str+='</div>';
			str+='<div class="typed-strings">';
			str+='<p class="rows'+cc+'">第一个多少</p>';
			str+='</div>'
		}
		str+='<div style="clear:both"></div>'
		str+='</div>';
		$("#Marketing_keyword").append(str);
		str = '';
	}
	//清除浮动
	
	//给每一块添加不同的颜色和文字
	for(var t=0;t<heng*shu;t++){
		$('.row'+t).css('backgroundColor',arr[rand(arrLength)]);
		$('.rows'+t).html(arrs[rand(arrsLength)]);
		$('.p_row'+t).html(arrs[rand(arrsLength)]);
		$('.p_row'+t).css('overflow','hidden');
		$('.p_row'+t).css('height','0%');
		$('.p_row'+t).css('width','0%');
		$('.p_row'+t).css('color','#fff');
		$('.p_row'+t).css('line-height','165px');
		$('.p_row'+t).css('text-align','center');
		$('.p_row'+t).css('font-size','2rem');
			$(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            
        });

        $(".reset").click(function(){
            $(".typed").typed('reset');
        });
	}
	//更新关键字动画
	setInterval(change,2000);//整体间隔两秒
	var aa;
	var bb;
	var cc;
	function change(){
		var num = rand(heng*shu);
	    var rownum = arr[rand(arrLength)]
	    var rownums = arrs[rand(arrsLength)]
	    bb = num;
	    aa = rownum;
		$('.p_row'+num).css('backgroundColor',rownum);
		//动画
		var aa = rand(2)
		cc = aa;
		$('.p_row'+num).css(aa==1?'width':'height','100%');
		$('.p_row'+num).animate(aa==1?{height:'100%'}:{width:'100%'});
		setTimeout(chou,1000)//收缩动画秒数
    }
	function chou(){
		$('.p_row'+bb).animate(cc==1?{height:'0%'}:{width:'0%'});
		setTimeout(ddd,500)//出现动画秒数
	}
	function ddd(){
		$('.p_row'+bb).css(cc==1?'width':'height','0%');
	}
	//模拟打字效果
	$(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            
        });

        $(".reset").click(function(){
            $(".typed").typed('reset');
        });
	/*--------------------------------营销关键字-----------------------------------------------------*/
	/*--------------------------------案例介绍-视觉表现-----------------------------------------------------*/
	var cars = ["视","觉表","现"]
for (var i=0;i<cars.length;i++) {
  $(".fold_wrap").append('<li><a href="#"><div class="mask_b"><h4 class="i_how_n1"><span>'+cars[i]+'</span></h4></div><div class="pic_auto" style="background:url(img/index/case_originality'+i+'.jpg) no-repeat center 0;"></div></a></li>')
}
var slideMenu=function(){
  var sp,st,t,m,sa,l,w,gw,ot;
  return{
    destruct:function(){
        if(m){
          clearInterval(m.htimer);
          clearInterval(m.timer);
        }
    },
    build:function(sm,sw,mt,s,sl,h){
      sp=s; 
      st=sw; 
      t=mt;
      m=document.getElementById(sm);
      sa=m.getElementsByTagName('li');
      l=sa.length; 
      w=m.offsetWidth; 
      gw=w/l;
      ot=Math.floor((w-st)/(l-1)); 
      var i=0;
      for(i;i<l;i++){
        s=sa[i]; 
        s.style.width=gw+'px'; 
        this.timer(s)
      }
      if(sl!=null){
        m.timer=setInterval(function(){
          slideMenu.slide(sa[sl-1])
        },t)}
    },
    timer:function(s){
      s.onmouseover=function(){
        clearInterval(m.htimer);
        clearInterval(m.timer);
        m.timer = setInterval(function(){
          slideMenu.slide(s)
        },t);
        //console.log($(this).find('.mask_b').html());
        $(this).find('.mask_b').hide();
        //console.log($(this).find('.mask_b').attr("style"));
    }
      s.onmouseout=function(){
        clearInterval(m.timer);
        clearInterval(m.htimer);
        m.htimer=setInterval(function(){
          slideMenu.slide(s,true)
        },t);
        //console.log($(this).find('.mask_b').html());
       $(this).find('.mask_b').show();
       //console.log($(this).find('.mask_b').attr("style"));
     }
    },
    slide:function(s,c){
      var cw=parseInt(s.style.width);
      if((cw<st && !c) || (cw>gw && c)){
        var owt=0; var i=0;
        for(i;i<l;i++){
          if(sa[i]!=s){
            var o,ow; var oi=0; o=sa[i]; ow=parseInt(o.style.width);
            if(ow<gw && c){
              oi=Math.floor((gw-ow)/sp); 
              oi=(oi>0)?oi:1; 
              o.style.width=(ow+oi)+'px';
              //console.log(o);
            //console.log(o.style.width);
            }else if(ow>ot && !c){
              oi=Math.floor((ow-ot)/sp); 
              oi=(oi>0)?oi:1; 
              o.style.width=(ow-oi)+'px';
              //console.log(o);
              //console.log(o.style.width);
            }
            if(c){
              owt=owt+(ow+oi)
            }else{
              owt=owt+(ow-oi)
            }
          }
        }
        s.style.width=(w-owt)+'px';
      }else{
        if(m.htimer)
          clearInterval(m.htimer)
        if(m.timer)
          clearInterval(m.timer);
      }
    }
  };
}();
slideMenu.build('sm',875,10,10,1);
	/*--------------------------------案例介绍-视觉表现完-----------------------------------------------------*/
	/*---------------------------------首页底部--合作伙伴联系我们底部条--------------------------------------*/
	//添加logo
	var logoLength = 16;
	var bb = logoLength-1;
	var aa = bb > 10 ? bb % 2 == 0 ? bb / 2 : Math.ceil(bb / 2) : 0

	for(var i = 1; i < logoLength; i++) {
		$(".partner_ul").append('<li><img src="img/logo/logo_' + i + '.jpg"/></li>')
	}
	//清除浮动
	$(".partner_ul").each(function(){
	    var y = $(this).children().last();
	   	$(".partner_ul").append('<div class="clear" style="clear:both"></div>')
	});
	$(document).ready(function() {
		//		var li_width = $('.partner_ul').children('li');
		setTimeout(ff, 500)
	})

	function ff() {
		var ul_width = $('.partner_ul').width();
		var partner_ul_hide =$('.partner_ul_hide').width();
		var w1 = 0;
		var num = 0;
		$('.partner_ul').find('li').each(function() {
			num++
			if(aa == 0) {
				w1 += $(this).width();
			}
			if(aa != 0 && num < aa) {
				w1 += $(this).width();
			}
		})
		$('.partner_ul').css('width', w1 + (aa == 0 ? logoLength : aa) * 80)
		if(w1 + (aa == 0 ? logoLength : aa) * 80>partner_ul_hide){
			$('.partner_ul_hide').css('overflow-x','scroll');
		}else{
			
		}
	}
	/*---------------------------------首页底部--合作伙伴联系我们底部条--------------------------------------*/

/*案例介绍-视觉表现封装函数*/
//鼠标滑过显示大图
function picLen(me){
	$(".outsidePic").append('<img src="img/index/case_originality'+ me +'.jpg"/>')
	$(".outsidePic").animate({marginLeft:'0%'},1500);
//	$(".span_mask").animate({width:'0%'},1500);
}

//	$(".outsidePic").animate({width:'0'},1500);	
	
	
	
	
})

function aa(){
	
}

/*js判断是pc端还是移动端*/
function Ispc(){
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	   //alert('手机端');
	   //引入css文件
	   $("head").append("<link>");
		css = $("head").children(":last");
		console.log("电脑声卡")
		css.attr({
			rel: "stylesheet",
			type: "text/css",
			href: "css/index_phone.css"
		});
	}else{
	   //alert('pc端');
	   //引入css文件
	   $("head").append("<link>");
		css = $("head").children(":last");
		css.attr({
			rel: "stylesheet",
			type: "text/css",
			href: "css/index.css"
		});
	}	
}