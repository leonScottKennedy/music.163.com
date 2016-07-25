
$(document).ready(function() {
	
	tabAnimation();
	
	returnTopAnimation();

	tabMusic();
		
	function tabAnimation(){
		
		var $pics = $('.pic').find('li'),
			   $circles = $('.circle').find('li'),
			   $prev = $('#tab .prev'),
			   $next = $('#tab .next');
		
		var timer = null;
		var iNow = 0;
		var arrColor = ['#0E0906','#131315','#0F4AA8','#FF5B02','#CDCBCC','#FF7A31','#8E8066','#FFFFFF'];
		var time1 = new Date();
		
		// 点击之前，设置背景色为arrColor第一个
		$('#tab').css('background',arrColor[0]);
		
		$next.click(function(){
			
			var time2 = new Date();
			var timedis = time2 - time1;
			
			if(timedis > 1000){
				if(iNow == $pics.length-1){
					iNow = 0;	
				}else{
					iNow++;	
				}
				$('.pic').find('li').eq(0).animate({opacity:0},function(){
					$('#tab').css('background',arrColor[iNow]);
					$(this).remove().appendTo($('.pic'));	
				});
				
				$('.pic').find('li').eq(1).animate({opacity:1},function(){
					$circles.attr('class','').eq(iNow).attr('class','active');
				});
				
				time1 = time2;
			}

		});

		$prev.click(function(){

			var time2 = new Date();
			var timedis = time2 - time1;

			if(timedis > 1000){

				if(iNow == 0){
					iNow = $pics.length-1;
				}else{
					iNow--;
				}

				$('.pic li:first-child').animate({opacity:0},function(){
					$('#tab').css('background',arrColor[iNow]);
					$('.pic li:last-child').remove().insertBefore($(this)).animate({opacity:1},function(){
							console.log(1);
							$circles.attr('class','').eq(iNow).attr('class','active');
						})	
				});

				
				
				time1 = time2;

			}

		});

		$('#tab').mouseover(function(){
			clearInterval(timer);
		});

		$('#tab').mouseout(function(){
			timer = setInterval(fnTab,3000);
		});		

		timer = setInterval(fnTab,3000);

		function fnTab(){
			if(iNow == $pics.length-1){
				iNow = 0;
			}else{
				iNow++;
			}

			$('.pic').find('li').eq(0).animate({opacity:0},function(){
				$('#tab').css('background',arrColor[iNow]);
				$(this).remove().appendTo($('.pic'));	
			});
			
			$('.pic').find('li').eq(1).animate({opacity:1},function(){
				$circles.attr('class','').eq(iNow).attr('class','active');
			});

		}
		
	};
	
	function returnTopAnimation(){
		
	};

	function tabMusic(){

		var $right = $('.newMusic .inner .right');
		var $left = $('.newMusic .inner .left');
		var $ul = $('.roll ul');
		var $width = $ul.width();
		var $li = $('.roll').find('ul li').clone();
		var time1 = new Date();

		$ul.css('width',$width*2 + 5).append($li);

		$right.on('click',function(){

			var time2 = new Date();

			if(time2 - time1 > 1000){
				if($ul.css('left') == '-631px'){
					$ul.css('left',0).stop().animate({left:-$width},1000);
				}else{
					$ul.stop().animate({left:-$width},1000);
				}
				time1 = time2;
			}

		});

		$left.on('click',function(){

			var time2 = new Date();

			if(time2 - time1 > 1000){
				if($ul.css('left') == '0px'){
					$ul.css('left',-631).stop().animate({left:0},1000);
				}else{
					$ul.stop().animate({left:0},1000);
				}
				time1 = time2;
			}

		});
	}
	
});