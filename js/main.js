$(document).ready(function(){
    var b = true;
	function scrollMenu(){
        if ($("#header-top-section").length>0){
		    if ($(document).scrollTop()>300&&b){
                b=false;
			    $("#header-top-section").css({"height":0}).stop().show().animate({"height":"50px"},200);
		    }
		    else
		        if ($(document).scrollTop()<=300&&!b){
                    b = true;
			        $("#header-top-section").css({"height":"50px"}).stop().animate({"height":"0"},200,function(){
				        $(this).stop().hide();
			        });
		        }
		   
	    }
    }
   $(window).on("mousewheel",scrollMenu);
	setInterval(scrollMenu,251)	;
    $(".inner-section").css({"padding-top":(($(".home-section").height()-$(".inner-section").height())/2)+"px"});
});
