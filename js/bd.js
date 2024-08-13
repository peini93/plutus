
var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	isMobile = 1;
}else{
	isMobile = 0;
}

$(function(){
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { 
		});

		$(window).scroll(function(){
			var sx = $(window).scrollTop();
			var ah1 = $('#a00').offset().top-200;
			var ah2 = $('#a01').offset().top-200;
			var ah3 = $('#a02').offset().top-200;
			var ah4 = $('#a03').offset().top-200;
			if(sx>=ah1 && sx<ah2){
									ACTION(1);  
									$(".b_m li a" ).removeClass('act');
         					$(".b_m li:nth-of-type(1) a").addClass('act');    
   		}else if(sx>=ah2 && sx<ah3){
									ACTION(2); 
									$(".b_m li a" ).removeClass('act');
									$(".b_m li:nth-of-type(2) a").addClass('act');              	 
   		}else if(sx>=ah3 && sx<ah4){
         					ACTION(3); 
									$(".b_m li a" ).removeClass('act');
									$(".b_m li:nth-of-type(3) a").addClass('act');  	              	        
			}else if(sx>ah4){
									ACTION(4);
									$(".b_m li a" ).removeClass('act');
									$(".b_m li:nth-of-type(4) a").addClass('act');       
			}
		})
		GOTOP();
		MENU();
		ACTION();
		MM();

		$(".hb a").click(function() {
	    	$(".hb a").toggleClass("change");
	    	$( ".m_m" ).stop(true,false).animate({width:"toggle"},300); 
  		});

});

function GOTOP(){
	$('.gotop,.logo,.b_m li:nth-of-type(1) a,.m_m ul li:nth-of-type(1) a').on("click", function(){
	  	$('html,body').animate({scrollTop:0},800);
			$('#a02').removeClass('bgtop');
	});
	$(window).scroll(function(){
       var Y = $(window).scrollTop();
       if(Y>600){
        $(".gotop").stop(true,false).animate({ bottom:3+"%",opacity:1},800); 
        }else{
        $(".gotop").stop(true,false).animate({ bottom:0,opacity:0},800); 
        }
    });
}


function MENU(){
	$(".b_m li:nth-of-type(1) a").on("click", function(){
 			ACTION(1);
			$(".b_m li a" ).removeClass('act');
			$(this).addClass('act');
			$('#a02').removeClass('bgtop');	
			return false;
	});
	$(".b_m li:nth-of-type(2) a").on("click", function(){
			ACTION(2);
			$('html,body').stop().animate({scrollTop:$("#a01").offset().top},800);
			$(".b_m li a" ).removeClass('act');
			$(this).addClass('act');
			$('#a02').removeClass('bgtop');	
			return false;
	});
	$(".b_m li:nth-of-type(3) a").on("click", function(){
			ACTION(3);
			$('html,body').stop().animate({scrollTop:$("#a02").offset().top},800);
			$(".b_m li a" ).removeClass('act');
			$(this).addClass('act');
			$('#a02').removeClass('bgtop');	
			return false;
	});

	$(".b_m li:nth-of-type(4) a").on("click", function(){
			ACTION(4);
			$('html,body').stop().animate({scrollTop:$("#a03").offset().top},800);
			$(".b_m li a" ).removeClass('act');
			$(this).addClass('act');
			$('#a02').removeClass('bgtop');	
			return false;
	});
	
}

function MM(){
	$(".m_m ul li:nth-of-type(1) a").on("click", function(){
 			ACTION(1);
			// $('html,body').stop().animate({scrollTop:$("#a01").offset().top},800);
			return false;
	});
	$(".m_m ul li:nth-of-type(2) a").on("click", function(){
			ACTION(2);
			$('html,body').stop().animate({scrollTop:$("#a01").offset().top},800);
			return false;
	});
	$(".m_m ul li:nth-of-type(3) a").on("click", function(){
			ACTION(3);
			$('html,body').stop().animate({scrollTop:$("#a02").offset().top},800);
			return false;
	});
	$(".m_m ul li:nth-of-type(4) a").on("click", function(){
			ACTION(4);
			$('html,body').stop().animate({scrollTop:$("#a03").offset().top},800);
			return false;
	});
	
}

function ACTION(num){
	switch(num){
		case 1:
			$("#b01").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 2:
			$("#b01").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 3:
			$("#b02").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
		case 4:
			$("#b03").stop().delay(500).animate({opacity: 1, paddingTop:0},500);
		break;
	}

}
