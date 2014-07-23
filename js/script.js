$(document).ready(function(){
	function circle(){
		var c=document.getElementById("canvas_circle_1"),
		v=document.getElementById("canvas_circle_2"),
		l=document.getElementById("canvas_circle_3"),
		a=document.getElementById("canvas_circle_4");
		if(typeof c.getContext!="undefined"){
			var s=c.getContext("2d"),
			h=v.getContext("2d"),
			o=l.getContext("2d"),
			i=a.getContext("2d"),
			t=75,
			n=75,
			f=60,
			u=0,
			r=Math.PI+Math.PI/150,
			e=!0;s.arc(t,n,f,u,r,e),
			h.arc(t,n,f,u,r,e),
			o.arc(t,n,f,u,r,e),
			i.arc(t,n,f,u,r,e),
			s.strokeStyle="#4cb743",
			s.lineWidth=30,s.stroke(),
			h.strokeStyle="#4292be",
			h.lineWidth=30,h.stroke(),
			o.strokeStyle="#ff6801",
			o.lineWidth=30,o.stroke(),
			i.strokeStyle="#0e559e",
			i.lineWidth=30,
			i.stroke()}
	}
	if ($("#canvas_circle_1").length>0)
		circle();
	if (window.location.toString().search("careers")!=-1&&window.location.toString().search("benefits")!=-1){
		$(".howwework li a.active").removeClass("active");
		var n = 1;
		$("#how-we-wo .howw").hide();
		$("#how-we-wo .howw").eq(n).show();
		$(".howwework li a").eq(n).addClass("active");
	}
/*	$(".let-button").click(function(){
		$(".dialog-box").show();
		$(".dialog-overlay").show();
	});*/
	$("#load-more-benefits").click(function(){
		$(".not-viz").show(100);
		$(this).hide();
	});
       $('#load-more-benefits').click(function(){
            $(this).parent().fadeOut('fast');
            
            var $lastRow = $('.career-benefits .row:hidden:first');
            $lastRow.fadeIn(200);
            $lastRow.find('> div:first').fadeIn(800);
            $lastRow.find('> div:last').fadeIn(1600);
            
            var sticky = $('.career-benefits');
            var scrollShowEl = function() {
                var stickyPos = sticky.position();
                if (document.documentElement.scrollTop + $(window).height() > stickyPos.top + sticky.height() 
                        || self.pageYOffset + $(window).height() > stickyPos.top + sticky.height()) {
                    if ($('.career-benefits .row:hidden:first').length === 1) {
                        var $lastRow = $('.career-benefits .row:hidden:first');
                        $lastRow.fadeIn(200);
                        $lastRow.find('> div:first').fadeIn(800);
                        $lastRow.find('> div:last').fadeIn(1600);
                    } else {
                        $('.removeMarginWhenAnimComp').css('margin', 0);
                        $(window).off('scroll', scrollShowEl);
                    }
                }
            };
            
            if (sticky.length) {
                $(window).scroll(scrollShowEl).trigger('scroll');
            }
        });
	$(".dialog-overlay").click(function(){
		$(".dialog-box").hide();
		$(".dialog-overlay").hide();
	});
	$(".dialog-box .close").click(function(){
		$(".dialog-box").hide();
		$(".dialog-overlay").hide();
	});
	$(".steps-models li a").click(function(){
		$(".steps-models li a.active").removeClass("active");
		var cl = $(this).attr("class");
		$(".steps-models li a").each(function(){
			var cl = $(this).attr("class");
			$("#"+cl).hide();
		});

		$(this).addClass("active");
		$("#"+cl).show();
	});

	$(".page-tabs li").click(function(e){
		e.preventDefault();
		$(".page-tabs li.active").removeClass("active");
		$(".mobi-tab-content-container .tab-pane").addClass("fade");
		$(this).addClass("active");
		var n = $(".page-tabs li").index($(this));
		$(".mobi-tab-content-container .tab-pane").eq(n).removeClass("fade");
		
	});
	$(".howwework li a").click(function(){
		$(".howwework li a.active").removeClass("active");
		var n = $(".howwework li a").index($(this));
		$("#how-we-wo .howw").hide();
		$("#how-we-wo .howw").eq(n).show();
		$(this).addClass("active");
	});
	$(".mobile-development-platforms .float-item").click(function(){
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$(".tabs .tab.active").removeClass("active");
		var n = $(".mobile-development-platforms .float-item").index($(this));
		$(".tabs .tab").eq(n).addClass("active");
	});
    if ($(".home-owl").length!==0){
        $(".home-owl").owlCarousel({
            autoPlay: 5000, //Set AutoPlay to 5 seconds
            autoHeight : true,
            singleItem:true,
            pagination: false,
            navigation : true,
            navigationText : ["<",">"],
            items : 1,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3]
        });
    }

	
	
    if ($(".player").length!==0){
        $(".player").mb_YTPlayer({autoPlay:true});
	    $('.scrollyeah').scrollyeah();
    }
      $(".partner-carusel .right-arrow").click(function(e){
          var k=-$(".partner-carusel .slider-inner .item").width();
          $(".partner-carusel .slider-inner").css({"transform":"translateX("+k+"px)"});
      });  
    $(".button-container .red-button").click(function(e){
        $('html, body').animate({
            scrollTop: $('footer').offset().top
        }, 'slow');
    });
    $(".details-kurs").click(function(e){
        $('html, body').animate({
            scrollTop: $('.fromZero').offset().top
        }, 'slow');
    });
    $(".plan a").click(function(e){
        $('html, body').animate({
            scrollTop: $('.resume .right').offset().top
        }, 'slow');
    });
    $(".resumAdd").click(function(e){
        $('.addresum').click();
    });
    $(".stick_menu .connectwith a").click(function(e){
        e.preventDefault();
        _gaq.push(["_trackEvent", "Client Feedback", "Sales", $(this).attr("class")]);
        var self = this;
        setTimeout(function() {
            window.location = $(self).attr("href");
        }, 100);

    });
    $(".stick_menu .front").click(function(){
        $(this).hide();
        $(".stick_menu .back").show();
        $(".stick_menu .pointer").show();
    });
    $(".stick_menu .back").click(function(){
        $(this).hide();
        $(".stick_menu .pointer").hide();
        $(".stick_menu .front").show();
    });

    if (window.Swiper){
        var ALL = $('.portfolio-slider');
        var pagi = $('.navigation-slider');
        var slidesPerView = 1;
        if ($('.portfolio-slider').parents(".partner-carusel").length>0){
            slidesPerView = 5;
        }
        swiperOpts = {
            def: {
                grabCursor:true,
                loop:true,
                slidesPerView:slidesPerView

            },
            pag: {
                paginationElement:'span',
                paginationVisibleClass:'',
                paginationClickable:true

            }
        };
	    ALL.each(function(i){
		    var mySwiper= new Swiper(this, $.extend({resizeReInit: true,pagination:pagi[i], onInit: function(swiper) {
      var w = window.innerWidth;

      swiper.params.slidesPerView = w < 560 ? 1 : (w < 830 ? 2 : (w < 940 ? 3 : 4));
    }
                                                    },swiperOpts.def, swiperOpts.pag));
            $('#main-menu .prev').on('click', function(e){
                e.preventDefault();
                mySwiper.swipePrev();
            });
            $('#main-menu .next').on('click', function(e){
                e.preventDefault();
                mySwiper.swipeNext();
            });
            $('.partner-carusel .prev').on('click', function(e){
                e.preventDefault();
                alert();
                mySwiper.swipePrev();
            });
            $('.partner-carusel .next').on('click', function(e){
                e.preventDefault();
                mySwiper.swipeNext();
            });
	    });




    }
    if (window.location.pathname == "/contactUs.html"){
       if (window.location.search){
            var search = window.location.search;
            searchArr = search.replace("?",'').split("&");
            var iAmInput = $('form#contact-form').find('input[name="iAm"]');
            var lookingForInput = $('#contact-form').find('input[name="lookingFor"]');
            var iAmValue = iAmInput.next('ul').find('li').eq(searchArr[0]).text();
            var lookingForValue = lookingForInput.next('ul').find('li').eq(searchArr[1]).text();
            iAmInput.val(iAmValue);
            lookingForInput.val(lookingForValue);
       }
    };

     $("#futterSubmit").click(function(){
         var iAmIndex = $('.footer ol').eq(0).find('li').index($('.footer ol').eq(0).find('li.active'));
         var lookingForIndex = $('.footer ol').eq(1).find('li').index($('.footer ol').eq(1).find('li.active'));
         window.location = "/contactUs.html?" + iAmIndex + "&" + lookingForIndex;
     });

     $('.footer .list').keydown(function(e){

        if(e.keyCode == "38" || e.keyCode == "40" || e.keyCode == "13"){
            var currLi = $(e.target).find('li.active');

            if (e.keyCode == "38"){
                var prevLi = currLi.removeClass('active').prev();
                    if (!prevLi.length == 0){
                        prevLi.addClass('active');
                    }
                    else {
                        $(e.target).find('li:last').addClass('active');
                    }
            return false;
            }
            if (e.keyCode == "40"){
                var nextLi = currLi.removeClass('active').next();
                    if (!nextLi.length == 0){
                        nextLi.addClass('active');
                    }
                    else {
                        $(e.target).find('li:first').addClass('active');
                    }
            return false;
            }

            if (e.keyCode == "13"){
                 $(e.target).find('span').text(currLi.text());
                 $(e.target).find('ol').hide();

            return false;
            }

        }
     });

     $('#contact-form input[name="iAm"], input[name="lookingFor"], .arrow').keydown(function(e){

        if(e.keyCode == "38" || e.keyCode == "40" || e.keyCode == "13"){
            var curuntCont = $(e.target).closest('.inner');
            var currLi = curuntCont.find('li.active');


            if (e.keyCode == "38"){
                var prevLi = currLi.removeClass('active').prev();
                    if (!prevLi.length == 0){
                        prevLi.addClass('active');
                    }
                    else {
                        curuntCont.find('li:last').addClass('active');
                    }
            return false;
         }
            if (e.keyCode == "40"){
                var nextLi = currLi.removeClass('active').next();
                    if (!nextLi.length == 0){
                        nextLi.addClass('active');
                    }
                    else {
                        curuntCont.find('li:first').addClass('active');
                    }
            return false;
            }

            if (e.keyCode == "13"){
                 curuntCont.find('input').val(currLi.text());
                 curuntCont.find('ul').hide();

            return false;
            }

        }

     });


    $(".form .button-submit").click(function(){

        var email = $('#contact-form input[name="email"]').val();
        var massage = $('#contact-form textarea[name="message"]').val();
        var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regEmail.test(email)|| massage == "") {
            $('div.inTouch').find('ul.formErrors li').hide();
            if(!regEmail.test(email)){
               var emailError = $('div.inTouch').find('ul.formErrors li').eq(0);
                  emailError.show();
                  email.focus();
            }
            if (massage == ""){
                var emailError = $('div.inTouch').find('ul.formErrors li').eq(1);
                emailError.show();
            }
            return false;
        }
        else { $('div.inTouch').find('ul.formErrors li').hide();
            $.post("mail.php", $("#contact-form").serialize(),  function(data) {  _gaq.push(['_trackEvent', "Client Feedback", "Email", "Email"]);
            $('#success').html('The Message sent!');
            $('#success').hide(2000);   });
          
            return false;
        }
    });


    $(".landingSend .red-button").click(function(){
        var form = $(this).parents(".landingSend");
        var email = form.find('input[name="email"]').val();
        var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var emailError = form.find('.error');

        if (!regEmail.test(email)) {
            emailError.show();
            return false;
        }
        else {
            emailError.hide();
            $.post("mailLanding.php", $(this).parents(".landingSend").serialize(),  function(data) {
                _gaq.push(['_trackEvent', "Client Feedback Landing", "Email", "Email"]);
                form.find('.success').html('The Message sent!');
                form.find('.success').hide(2000);
            });
        }
    });

    $("#contact_us_form_quote #submit_1").click(function(){
        var form = $(this).parents("#contact_us_form_quote");
        var email = form.find('input[name="email"]').val();
        var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var emailError = form.find('.error');

        if (!regEmail.test(email)) {
            emailError.show();
            return false;
        }
        else {
            emailError.hide();
            $.post("quickContact.php", form.serialize(),  function(data) {
                _gaq.push(['_trackEvent', "Client Quick Contact", "Email", "Email"]);
                form.find('.success').html('The Message sent!');
                form.find('.success').hide(2000);
            });
        }
    });

   $(".itform .send").click(function(){
        var form = $(this).parents(".itform");
        var email = form.find('input[name="email"]').val();
        var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var emailError = form.find('.error');

        if (!regEmail.test(email)) {
            emailError.show();
            return false;
        }
        else {
            emailError.hide();
            $.post("mailIT.php", $(this).parents(".itform").serialize(),  function(data) {
                _gaq.push(['_trackEvent', "Client Feedback IT School", "Email", "Email"]);
                form.find('.success').html('The Message sent!');
                form.find('.success').hide(2000);
            });
        }
    });
        


	var portfolioAnimTime = 200;
	var arrKoord = [];
	var currentGalleryEl = "";
	var arrMenuHref = [];
	var countArrHref = $("#ut-navigation a").length;
/*	$("#ut-navigation a").each(function(){
		arrMenuHref.push($(this).attr("href"));
	});*/
	var socialTime = 50;
    function RepeatText(){
        $(".show-hide-text").each(function(){
            var self = this;
            setTimeout(function(){
                $(self).show();
                $(self).animate({opacity:1},4000,function(){
                    if ($(self).data("end")){
                        setTimeout(function(){
                            $(self).animate({opacity:0},4000,function(){
                                $(self).hide();
                            });
                        },$(self).data("end"));
                    }
                });
            }, $(this).data("start"));
            
        });
    }
    RepeatText();
    setInterval(RepeatText,34500);
	/*$(".social-network li span").mouseenter(function(e){
		$(this).stop().animate({"borderWidth":"0","padding-top":"2px"},socialTime);
		var i = $(this).find("i");
		if (i.hasClass("icon-twitter")){
				i.stop().animate({"background-size":"100%","margin-top":"8px","background-position-y":"-60px","background-position-x":"-2px"},socialTime);
		}
		if (i.hasClass("icon-google-plus")){
				i.stop().animate({"background-size":"100%","margin-top":"5px","background-position-y":"2px","background-position-x":"0px"},socialTime);
		}
		if (i.hasClass("icon-facebook")){
				i.stop().animate({"background-size":"100%","margin-top":"5px","background-position-y":"-30px","background-position-x":"-1px","height":"30px"},socialTime);
		}

	}).mouseleave(function(e){
		$(this).stop().animate({"borderWidth":"2","padding-top":"0"},socialTime);
		var i = $(this).find("i");
		if (i.hasClass("icon-twitter")){
			i.stop().animate({"background-size":"80%","margin-top":"12px","background-position-y":"-47px","background-position-x":"2px"},socialTime);
		}
		if (i.hasClass("icon-google-plus")){
			i.stop().animate({"background-size":"80%","margin-top":"5px","background-position-y":"5px","background-position-x":"5px"},socialTime);
		}
		if (i.hasClass("icon-facebook")){
			i.stop().animate({"background-size":"80%","margin-top":"9px","background-position-y":"-25px","background-position-x":"2px","height":"24px"},socialTime);
		}

	});*/
    var flag = false;
    $(window).scroll(function() {

    if($(window).scrollTop() > $("#about-us").scrollTop()-$(window).height()/2 && flag == false && $(window).scrollTop() <  ($(window).height()*2)){

/*        var arr = $(".numbers .num .number");
        var digW = 67.2;
        arr.each(function(){
            var n = parseInt($(this).text());
            $(this).text("");
            var k=n;
            while (k>0){
                var t = k%10;
                k = (k-t)/10;
                $(this).prepend('<span class="digit" data-num="'+t+'"></span>');
                $(this).find(".digit").css({"background-position":"0 0px"});
            }
            n = 0;
            $(this).find('.digit').each(function(){
                n = n*10+$(this).data("num");
                $(this).css({"background-position":"0 "+(-n*digW)+"px"});
            });
            //            $(this).find(".digit").css({"background-position":"0 -100px"});
        })
        flag = true;  */
        var arr = $(".numbers .num");
        function animateValue(element, start, end, duration) {
            var range = end - start;
            var current = start;
            var increment = end > start? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            var obj = element;
            var timer = setInterval(function() {
                current += increment;
                obj.innerHTML = current+"<span class='pl'>+<span>";
                if (current == end) {
                    clearInterval(timer);
                    $(obj).find(".pl").css({"display":"block"});;
                }
            }, stepTime);
        }
        arr.each(function(){
            var count = parseInt($(this).text());
            animateValue(this, 0, count, 1000);
        });
        flag = true;
    }
    });
	function scrollMenu(){
        if ($("body>#header-section").length>0){
		    if (($(document).scrollTop()>$(window).height()-100)&&!$("#header-section").is(":visible")){
			    $("#header-section").css({"height":0}).show().stop().animate({"height":"62px"},200);
		    }
		    else
		        if (($(document).scrollTop()<$(window).height()-100)&&$("#header-section").is(":visible")){
			        $("#header-section").css({"height":"62px"}).stop().animate({"height":"0"},200,function(){
				        $(this).hide();
			        });
		        }
		    for (var i=countArrHref-1;i>=0;i--){

			    if ($(arrMenuHref[i]).length!==0&&$(document).scrollTop()>=$(arrMenuHref[i]).offset().top-200){
				    $("#ut-navigation a.selected").removeClass("selected");
				    $("#ut-navigation a").eq(i).addClass("selected");
				    break;
			    }
		    }
	    }
    }
//	$(window).on("mousewheel",scrollMenu);
	setInterval(scrollMenu,251)	;
	$(".main-menu a.menu-link, #ut-navigation a").click(function(){
		$('html, body').animate({
			scrollTop:$($(this).attr("href")).offset().top-70

		}, 500);
		return false;
	});
	$(".portfolio-grid .item").click(function(){
		$("#overlay").css({
			"width":$(document).width(),
			"height":$(document).height()
		}).show();
		var h = $(window).width()*0.7*501/1025;
		$("#gallery").find(".content").height(h);
		$("#gallery").find(".content").css({"margin-top":($(window).height()-h)/2-50});
		$("#gallery").show().find("img").attr("src",$(this).find(".large").data("src"));
		var n = $(".portfolio-grid .item").length;
		var k = $(".portfolio-grid .item").index($(this))+1;
		$("#gallery").find(".counter").text(k+" of "+n);
		$("#gallery").find(".bottom .text").html($(this).find(".large").html());
		currentGalleryEl = $(this);

	});
	$("#gallery .close").click(function(){$("#gallery").hide();$("#overlay").hide();});
	$("#gallery .next").click(function(){
		var cur = currentGalleryEl.next();
		if (!cur.hasClass("item")) cur = $(".portfolio-grid .item").eq(0);
		$("#gallery").find("img").attr("src",cur.find(".large").data("src"));
		var n = $(".portfolio-grid .item").length;
		var k = $(".portfolio-grid .item").index(cur)+1;
		$("#gallery").find(".counter").text(k+" of "+n);
		$("#gallery").find(".bottom .text").html(cur.find(".large").html());
		currentGalleryEl = cur;
	});
	$("#gallery .prev").click(function(){
		var cur = currentGalleryEl.prev();
		if (!cur.hasClass("item")) cur = $(".portfolio-grid .item").eq($(".portfolio-grid .item").length-1);
		$("#gallery").find("img").attr("src",cur.find(".large").data("src"));
		var n = $(".portfolio-grid .item").length;
		var k = $(".portfolio-grid .item").index(cur)+1;
		$("#gallery").find(".counter").text(k+" of "+n);
		$("#gallery").find(".bottom .text").html(cur.find(".large").html());
		currentGalleryEl = cur;
	});

	$(".filter-container .filter li a").click(function(){
		var k = $(".portfolio-grid .item").length;
		if (arrKoord.length==0){
			for (var i=0;i<k;i++){
				var myOffset=$(".portfolio-grid .item").eq(i).offset();
				var parentOffset=$(".portfolio-grid .item").parent().offset();
				var relX = myOffset.left-parentOffset.left;
				var relY = myOffset.top-parentOffset.top;
				arrKoord.push({x:relX-10,y:relY-10});
			}
		}
		$(this).parents(".filter").find(".active").removeClass("active");
		$(this).addClass("active");
		
		var self = this;
		var cur =0;
		var ph = $(".portfolio-grid").height();
		
		$(".portfolio-grid").find(".item").each(function(){
			if (!($(this).hasClass($(self).data("filter").replace(".",""))||$(self).data("filter")=="*")&& $(this).is(":visible")){
				$(this).hide("slow");
			}
			if (($(this).hasClass($(self).data("filter").replace(".",""))||$(self).data("filter")=="*")&& $(this).is(":visible")){
				$(this).show("slow");
				$(this).css({"position":"absolute"}).animate({"top":arrKoord[cur].y+"px","left":arrKoord[cur].x+"px"});
				cur+=1;
			}
			if (($(this).hasClass($(self).data("filter").replace(".",""))||$(self).data("filter")=="*")&& !$(this).is(":visible")){
				$(this).css({"position":"absolute","top":arrKoord[cur].y+"px","left":arrKoord[cur].x+"px"});
				$(this).show("slow");
				cur+=1;
			}
		});
		var mnh = $(".portfolio-grid").width()/5*Math.ceil(cur/5);
		$(".portfolio-grid").css({"min-height":ph}).animate({"min-height":mnh});

	});
    $(".footer .list").click(function(){
        $(".footer .list ol").hide();
        $(this).find("ol").show();
        return false;
    });
    $(".footer .list ol li").click(function(){
        $(this).parents(".list").find(">span").text($(this).text());
        $(this).closest('ol').find('li[class="active"]').removeClass('active');
        $(this).addClass('active');
        $(".footer .list ol").hide();
        return false;
        
    });
	$(".portfolio-grid .item").mouseenter(function(e){
		var parentOffset = $(this).offset();
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		function showUp(self){
			var cur = $(self).find(".text");
			var h = $(self).height();
			cur.css({"margin-top":h,"margin-left":"0","display":"block"}).stop().animate({"margin-top":"0"},portfolioAnimTime);
		}
		function showDown(self){
			var cur = $(self).find(".text");
			var h = $(self).height();
			cur.css({"margin-top":-h,"margin-left":"0","display":"block"}).stop().animate({"margin-top":"0"},portfolioAnimTime);
		}
		function showLeft(self){
			var cur = $(self).find(".text");
			var w = $(self).width();
			cur.css({"margin-top":0,"margin-left":-w,"display":"block"}).stop().animate({"margin-left":"0"},portfolioAnimTime);
		}
		function showRight(self){
			var cur = $(self).find(".text");
			var w = $(self).width();
			cur.css({"margin-top":0,"margin-left":w,"display":"block"}).stop().animate({"margin-left":"0"},portfolioAnimTime);
		}
		var side = $(this).width();
		if (relX<relY){
			if (relX<Math.abs(side-relY)){
				showLeft(this);
			}else{
				showUp(this);
			}
		}else{
			if (relY<Math.abs(side-relX)){
				showDown(this);
			}else{
				showRight(this);
			}
		}
	});
    $(".form .line input, .form .line .arrow").click(function(){
        var b = $(this).parent().find("ul").is(":visible");
		if (!b) {
			$(this).parents('.form').find("ul").hide();
		}
		$(this).parent().find("ul").toggle();
        return false;
    });
    $(document).click(function(){
        $(".form .line ul").hide();
        $(".footer .list ol").hide();
    });
   $(".form .line ul li").click(function(){
        $(".form .line ul li.active").removeClass('active');
        $(this).addClass('active').parents(".left").find("input").val($(this).text());
    });
	$(".portfolio-grid .item").mouseleave(function(e){
		var parentOffset = $(this).offset();
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		function showUp(self){
			var cur = $(self).find(".text");
			var h = $(self).height();
			cur.css({"margin-top":0,"margin-left":0,"display":"block"}).stop().animate({"margin-top":h},portfolioAnimTime,function(){$(this).css({"display":"none"});});
		}
		function showDown(self){
			var cur = $(self).find(".text");
			var h = $(self).height();
			cur.css({"margin-top":0,"margin-left":0,"display":"block"}).stop().animate({"margin-top":-h},portfolioAnimTime,function(){$(this).css({"display":"none"});});
		}
		function showLeft(self){
			var cur = $(self).find(".text");
			var w = $(self).width();
			cur.css({"margin-top":0,"margin-left":0,"display":"block"}).stop().animate({"margin-left":-w},portfolioAnimTime,function(){$(this).css({"display":"none"});});
		}
		function showRight(self){
			var cur = $(self).find(".text");
			var w = $(self).width();
			cur.css({"margin-top":0,"margin-left":0,"display":"block"}).stop().animate({"margin-left":w},portfolioAnimTime,function(){$(this).css({"display":"none"});});
		}
		var side = $(this).width();
		if (relX<relY){
			if (relX<Math.abs(side-relY)){
				showLeft(this);
			}else{
				showUp(this);
			}
		}else{
			if (relY<Math.abs(side-relX)){
				showDown(this);
			}else{
				showRight(this);
			}
		}
	});

	function resizeDocument(){
        $(".inner-section").css({"padding-top":(($(".home-section").height()-$(".inner-section").height())/2)+"px","padding-bottom":(($(".home-section").height()-$(".inner-section").height())/2)+"px"});
        $(".partners-section .clients-say .inner").css({"height":"auto"});
        var max = 0;
        $(".partners-section .clients-say .inner").each(function(){
            if (max<$(this).height()){
                max = $(this).height();
            }
        });
		max = 0;
		$(".main-page .items .item .inner").css({"height":"auto"});
		$(".main-page .items .item .inner").each(function(){
            if (max<$(this).height()){
                max = $(this).height();
            }
        });

		$(".main-page .items .item .inner").css({"height":max+"px"});

   /*$(".resume .inner").css({"height":"auto"});
        var max = 0;
        $(".resume .inner").each(function(){
            if (max<$(this).height()){
                max = $(this).height();
            }
        });
		$(".resume .inner").height(max-60);*/

		var h = $(window).height();
		$('#main-menu').css({ 'height': (h-43) + 'px' });
      

        if ($(".navigation-main-slider").length>0){
            var index = $(".navigation-main-slider li span").index($(".navigation-main-slider li span.active"));
            var k = -$(window).width()*index;
            $(".navigation-main-slider").parents(".portfolio-slider").find(".wrapper-slider").css({"-webkit-transform":"translate3d("+k+"px, 0px, 0px)","-moz-transform":"translate3d("+k+"px, 0px, 0px)","transform":"translateX("+k+"px)","-o-transform:":"translateX("+k+"px)"});
        }
//        $(".main-slider ul li img").css({"width":$(".main-slider ul li").width()+"px","height":$(".main-slider ul li").height()+"px"});
		h = $("#main-menu").height();
		var w = $(".main-slider ul li").width();
        console.log(w);
        console.log(h);
        if (w/h>1920/1000){
            var h2 = w/1920*1000;
            $(".main-slider ul li img").css({"width":w+"px","height":h2+"px"}).css({"margin-top":(h-h2)/2,"margin-left":"0px"});
        }else{
            var w2 = 1920/1000*h;
            var index = $(".navigation-main-slider li span").index($(".navigation-main-slider li span.active"));
            $(".main-slider ul li img").eq(index).height(h).width(w2).css({"width":w2+"px","height":h+"px"}).css({"margin-left":(w-w2)/2,"margin-top":"0px"});
        }


        var th = $(".top-name").height();
        var ph = (h-th)/2+50;
        $(".top-name").css({"margin-top":ph+"px"});
		if (h<$(".main-menu").height()) h= $(".main-menu").height();
        $(".main-slider .wrapper-slider").css({ 'height': ($('#main-menu').height()) + 'px' });
        $(".main-slider .wrapper-slider li").css({ 'height': ($('#main-menu').height()) + 'px' });

		$('.main-menu-container').css({ 'height': h + 'px' });
		w = $("#our-team .container").width()+320;
		var tg = $(".team-grid").width();
        var scw = $('#service .container').width();
		$(".main-menu").css({"margin-top":(h-$(".main-menu").height())/2});
        if(scw < 1099){
            $('#service .container .block').css({
                "width": "31%",
                "margin": "1.1%"
            });
        }
        if(scw > 1100){
            $('#service .container .block').css({
                "width": "23%",
                "margin": "1%"
            });
        }
        if(scw < 800){
            $('#service .container .block').css({
                "width": "48%",
                "margin": "1%"
            });
        }
		if ($(window).width()<1920/1113*$(window).height()){
			$(".main-menu-container").css({"background-size":"auto 100%"});

		}else{
			$(".main-menu-container").css({"background-size":"100% auto"});
		}
		$(".team-grid").css({"margin-left":((-tg+w)/2)+"px"});
		w = $("#portfolio .portfolio-grid .item").width();
		$("#portfolio .portfolio-grid .item").height(w);
		$("#portfolio .portfolio-grid .item .text").css({"line-height":w+"px"});
		var k = $(".portfolio-grid .item").length;
		for (var i=0;i<k;i++){
			$(".portfolio-grid .item").eq(i).css({"position":"static","display":"block"});
		}
		$("#portfolio .filter-container li a.active").removeClass("active");
		$("#portfolio .filter-container li").eq(0).find("a").addClass("active");
		$("#partners .partners").each(function(){
			$(this).height($(this).width());
		});
		arrKoord = [];
		for (var i=0;i<k;i++){
			var myOffset=$(".portfolio-grid .item").eq(i).offset();
			var parentOffset=$(".portfolio-grid .item").parent().offset();
			var relX = myOffset.left-parentOffset.left;
			var relY = myOffset.top-parentOffset.top;
				arrKoord.push({x:relX-10,y:relY-10});
		}
        var plW = 1920;
        var plH = 1080;
        var winW = $(window).width();
        var winH = winW*plH/plW;
        var mrL = 0;
        if (winH<$(window).height()){
            winH = $(window).height();
            winW = winH*plW/plH;
            mrL = ($(window).width() - winW)/2;
        }
        $("#tubular-player").css({width: winW+"px",height: winH+"px","margin-left":mrL+"px"});
	}
	resizeDocument();
	jQuery(window).resize(resizeDocument);
    $(".navigation-slider li").click(function(){
        var k = $(this).parents(".navigation-slider").find("li").index($(this));
        k = -320*k;
        $(this).parents(".navigation-slider").find(".active").removeClass("active");
        $(this).find("span").addClass("active");
        $(this).parents(".portfolio-slider").find(".wrapper-slider").css({"-webkit-transform":"translate3d("+k+"px, 0px, 0px)","-moz-transform":"translate3d("+k+"px, 0px, 0px)","transform":"translateX("+k+"px)","-o-transform":"translate3d("+k+"px, 0px, 0px)"});

    });
    var countInSlider = 10 - 1;
  $(".navigation-main-slider li").click(function(){
      var k = $(this).parents(".navigation-main-slider").find("li").index($(this));
 
      k = -$(window).width()*k;
      $(this).parents(".navigation-main-slider").find(".active").removeClass("active");
      $(this).find("span").addClass("active");
      $(this).parents(".portfolio-slider").find(".wrapper-slider").css({"-webkit-transform":"translate3d("+k+"px, 0px, 0px)","-moz-transform":"translate3d("+k+"px, 0px, 0px)","transform":"translateX("+k+"px)"});
		var h = $(window).height();
		var w = $(window).width();
        if (w/h>1920/1000){
            var h2 = w/1920*1000;
            $(".main-slider .wrapper-slider img").height(h2).width(w).css({"margin-top":(h-h2)/2});
        }else{
            var w2 = 1920/1000*h;
         var index = $(".navigation-main-slider li span").index($(".navigation-main-slider li span.active"));
            $(".main-slider .wrapper-slider img").eq(index).height(h).width(w2).css({"margin-left":(w-w2)/2});
        }
    });

   

	var customSlider=function(item){
		item.forEach(function(el){
			var h = el.height();
			var current=el.find(".active");
			var x = parseFloat(current.css("background-position-y").replace("px",""));
		$(current).animate({"height":0,"background-position-y":(x+h/2)+"px","margin-top":h/2},200,function(){
			$(this).css({"background-position-y":x+"px","margin-top":"0px"});
			$(this).removeClass("active");
			var next = $(current).next();
			if (!next.hasClass("img")) next = $(this).parent().find(".img").eq(0);
			var x2 = parseFloat(next.css("background-position-y").replace("px",""));
			next.addClass("active").css({"height":"0px","background-position-y":(x2+h/2)+"px","margin-top":(h/2)+"px"});
			next.animate({"height":h+"px","background-position-y":x2+"px","margin-top":0},200);
			
		});
		});
	};
	function getRandomNumber(k,n){
		return k+Math.floor(Math.random()*n);
	}
	function chooseSlideElement(){
		var k=$(".img-slider").length;
		var k2=$(".team-grid .item").length;
		var choosed = [];
		var elArr= [$(".img-slider").eq(getRandomNumber(0,k))];
//		var elArr= [$(".img-slider").eq(0)]
		while(choosed.length<3){
			var t = getRandomNumber(0,k2);
			if (choosed.indexOf(t)==-1){
				choosed.push(t);
				elArr.push($(".team-grid .item").eq(t));
			}
		}
		customSlider(elArr);

		setTimeout(chooseSlideElement,getRandomNumber(2000,3000));
		
	}
	function slideLogo(){
		$(".slider .item.active").css({"margin-top":"0px"}).animate({"margin-top":"154px"},500,function(){
			var next = $(this).next();
			if (!next.hasClass("item")) next = $(this).parent().find(".item").eq(0);
			$(this).removeClass("active");
			next.addClass("active").css({"margin-top":"154px"}).animate({"margin-top":"0px"},500);
			
		});
	}
    if (window.google)     
        google.maps.event.addDomListener(window, 'load',function(){

    var zoomLevel = parseFloat($('#google-map').attr('data-zoom-level'));
    var centerlat = parseFloat($('#google-map').attr('data-center-lat'));
	var centerlng = parseFloat($('#google-map').attr('data-center-lng'));
	var markerImg = $('#google-map').attr('data-marker-img');
	var enableZoom = $('#google-map').attr('data-enable-zoom');
	var greyscale = $('#google-map').attr('data-greyscale');
	var extraColor = $('#google-map').attr('data-extra-color');
	var enableAnimation = $('#google-map').attr('data-enable-animation');
	var animationDelay = 0; 
	
	if( isNaN(zoomLevel) ) { zoomLevel = 12;}
	if( isNaN(centerlat) ) { centerlat = 48.617887;}
	if( isNaN(centerlng) ) { centerlng = 22.291573;}
	if( typeof enableAnimation != 'undefined' && enableAnimation == 1 && $(window).width() > 690) { animationDelay = 180; enableAnimation = google.maps.Animation.BOUNCE } else { enableAnimation = null; }

    var latLng = new google.maps.LatLng(centerlat,centerlng);
    
    //color
  
		
		styles = [
	    
	    {
			featureType: "poi",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}, 
		{ 
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [{ 
				"visibility": "off" 
			}] 
		},
		{ 
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [{ 
				"visibility": "off" 
			}] 
		},
		{
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [{
				visibility: "off"
			}]
		}, 
		{
			elementType: "geometry",
			stylers: [{
				saturation: -100
			}]
		},
		{
			elementType: "labels",
			stylers: [{
			saturation: -100
			}]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [{
				color: "#ffffff"
			}]
		},
		{
			featureType: "landscape",
			stylers: [{
				color: "#ffffff"
			}]
		}, 
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [ {
				color: "#eaeaea"
			}]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [{
				color: "#b9e7f4"
			}]
		}];
	        
	        var styledMap = new google.maps.StyledMapType(styles,
                                                          {name: "Styled Map"});
            


            var zoom = 5;
            if ($("#google-map").parent().hasClass("google")){
                zoom =4;
                
            }
            var mapOptions = {
                center: latLng,
                zoom: zoom,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
   	            },
                scrollwheel: false,
                panControl: false,
	            zoomControl: enableZoom,	  
	            zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
   	            },
	            mapTypeControl: false,
	            scaleControl: false,
	            streetViewControl: false
	            
    };
            map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
            // style map
//                maptype = new google.maps.StyledMapType(styledMap, styledMapOptions);
            map.mapTypes.set('map_style', styledMap);
//            map.mapTypes.set('map_style', maptype);
            map.setMapTypeId('map_style');
            var Coordinates = new google.maps.LatLng(48.618621, 22.298769);
            marker = new google.maps.Marker({
                map: map,
                position: Coordinates,
                tooltip: '<B>Mobilez365</B></br>Ukraine, Uzhhorod</br> Shandora Petefi sq., 47',
                icon:'../i/desktop/marker1.png'
            });

            var tooltip = new Tooltip({map: map}, marker);
                tooltip.bindTo("text", marker, "tooltip");
                google.maps.event.addListener(marker, 'mouseover', function() {
                    tooltip.addTip();
                    tooltip.getPos2(marker.getPosition());
            });

            google.maps.event.addListener(marker, 'mouseout', function() {
                tooltip.removeTip();
            });

        });


        // Change text inside send button on submit

    /*var textSlide = function(){
        var array =['We become bigger and bigger, smarter and smarter, more talented and have more <span>experience</span> ',
                '<span>MobileSoft365</span> - is the only company in Transcarpathia engaged mobile development',
                'We open a new <span>office</span> this month',
                'We have <span>51</span> top employees',
                'You are growing from junior to senior specialist even <span>in a year</span> in our company',
                'Our company provides <span>official job</span> with social benefits',
                'We <span>care</span> about our employees&#39; education',
                '<span>English</span> is our language of communication',
                'Stability <span>improvement</span> plays very important role in our company',
                'We&#39;ll never leave <span>you</span> to deal with your problems alone',
                'Perfect choise for the <span>implementation</span> of technological ideas for small and medium business',
                'We have more than <span>20</span> different projects',
                'The company is <span>proud</span> of its employees',
                'There is <span>excellent</span> teamwork in our company',
				'Team leaders care about the <span>success</span> of their team as their own'],
            counter = 0;

        setInterval(function () {
            $("#textSlider").fadeOut(function () {
                $(this).html(array[counter = (counter + 1) % array.length]).fadeIn();
            });
        }, 7000);
    }
    textSlide();
	setTimeout(chooseSlideElement,getRandomNumber(2000,3000));
	setInterval(slideLogo,7000);*/
});


/*function onDocumentMouseMove(event) {
	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}
function onDocumentTouchStart(event) {
	if (event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;
	}
}
function onDocumentTouchMove(event) {
	if (event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;
	}
}
function loop() {
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		particle.updatePhysics();
		with (particle.position) {
			if (y < -1000) y += 2000;
			if (x > 1000) x -= 2000;
			else if (x < -1000) x += 2000;
			if (z > 1000) z -= 2000;
			else if (z < -1000) z += 2000;
		}
	}
	camera.position.x += (mouseX - camera.position.x) * 0.05;
	camera.position.y += (-mouseY - camera.position.y) * 0.05;
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}*/


