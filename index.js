$(document).ready(function(){
	$('#fullPage').fullpage({
		verticalCentered:false,
		anchors:['p1','p2','p3'],
		navigation:true,
		navigationTooltips:['醒醒吧！90后你的中年危机来临','不动声色就搞定一切的人，好酷','上班痛苦，不上班更痛苦'],
		afterLoad:function(link,index){
			switch(index){
				case 1:
				move('.section1 h1').scale(1.5).end();
				move('.section1 p').set('margin-top','5%').end();
				break;
				case 2:
				move('.section2 h1').scale(0.5).end();
				break;
				case 3:
				move('.section3 h1').set('margin-left','20%').end();
				move('.section3 p').set('margin-left','20%').end();
				break;
				default:break;
			}
			
			
		},
		// 离开某一屏后恢复到初始效果
		onLeave:function(link,index){
			switch(index){
				case 1:
				move('.section1 h1').scale(1).end();
				move('.section1 p').set('margin-top','800px').end();
				break;
				case 2:
				move('.section2 h1').scale(1).end();
				break;
				case 3:
				move('.section3 h1').set('margin-left','-1500px').end();
				move('.section3 p').set('margin-left','1500px').end();
				break;
				default:break;
			}

			},
	})
});