//--------------------------------------------------------------------------------------------------------------------------

function randomizeMainImage(images){
	var randomPhotoNumber = Math.floor(Math.random() * images. length);
	var photoSrc = images[randomPhotoNumber];
	$("#main_section").css("background", "url('" + photoSrc + "') no-repeat center center");
	$("#main_section").css("background-size", "cover");
}

//--------------------------------------------------------------------------------------------------------------------------

function changeTopMenuLink(){
	//$("ul#topMenu li:first a").attr('href', '/#rotex3490');
	$("ul#topMenu li a").each(function(){
		if($(this).attr('href') == '/rotex3490/'){
			$(this).attr('href', '/#rotex3490')
		}
		/*if($(this).attr('href') == '/press/'){
			$(this).attr('href', '/p-login/')
		}*/
	});
	
	$("ul#topMenuWhite li a").each(function(){
		if($(this).attr('href') == '/rotex3490/'){
			$(this).attr('href', '/#rotex3490')
		}
		/*if($(this).attr('href') == '/press/'){
			$(this).attr('href', '/p-login/')
		}*/
	})
}

//--------------------------------------------------------------------------------------------------------------------------

function animateAnchor(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          //scrollTop: target.offset().top - 80
			scrollTop: target.offset().top - 85
        }, 800);
        return false;
      }
    }
  });
}

//--------------------------------------------------------------------------------------------------------------------------

function animateNavigation(){
    var scroller_anchor = $(".copenhagen").offset().top;
	var checkDevice = jQuery.browser.mobile;
	var difference;
	if(!checkDevice){
		difference = 500;
	}else{
		difference = 100;
	}
    
    //Main Light Navigation 
    if ($(this).scrollTop() >= scroller_anchor - difference){//difference was originally 500 
        $('.main_header').css({
            'margin-top': '-90px'
        });
    }
    else{    
        $('.main_header').css({
            'margin-top': '0px'
        });
    }

    //Side Navigation & Main Dark Navigation 
    if ($(this).scrollTop() >= scroller_anchor) {
        $('.dark_header').css({
            'top': '0px'
        });
        $('aside').css({
          'position':'fixed',
          'top' : '0px'
        });
    }
    else{
        $('.dark_header').css({
            'top': '-75px'
        });
      $('aside').css({
          'position':'relative'
        });
    }
}


//--------------------------------------------------------------------------------------------------------------------------

function footerCollision(){
	var scrollTop = $(window).scrollTop();
	var	elementOffset = $('footer').offset().top;
	var	distance = (elementOffset - scrollTop);
	if(distance - 298 > $("aside nav").height()){
		$("aside").css({
			'top' : '0px',
			'bottom' : 'initial',
			'position' : 'fixed'
		});
	}else{
		$("aside").css({
			'top' : 'initial',
			'bottom' : '-80px',
			'position' : 'absolute'
		});
	}
}

//--------------------------------------------------------------------------------------------------------------------------

function footerCollisionCopenhagen(){
	var scroller_anchor = $(".copenhagen").offset().top;
	var scrollTop = $(window).scrollTop();
	var	elementOffset = $('footer').offset().top;
	var	distance = (elementOffset - scrollTop);
	if(distance - 298 > $("aside nav").height()){
		$("aside").css({
			'top' : '0px',
			'bottom' : 'initial',
			'position' : 'fixed'
		});
	}else{
		$("aside").css({
			'top' : 'initial',
			'bottom' : '-80px',
			'position' : 'absolute'
		});
	}
	
	if($(this).scrollTop() < scroller_anchor){
		$('aside').css({
          'position':'relative'
        });
	}
}

//--------------------------------------------------------------------------------------------------------------------------

function animateImages(image_selector){
    var scrollBottom = $(window).scrollTop() + $(window).height();

    $(image_selector).each(function() {
        var imgScroll = $(this).offset().top;
          if (scrollBottom >= imgScroll) {
            $(this).css({
              'padding-top' : '0px',
              'opacity' : '1'
            });
          }
          else{
            $(this).css({
              'padding-top' : '300px',
              'opacity' : '0'
            });
          }
      });
}

//--------------------------------------------------------------------------------------------------------------------------

function vifaAccordion(){
  $(".accordion_details").each(function(){
    $(this).css("height", $(this).height() + "px");
  });

  $(".accordion_item:not(:first-child)").addClass("closed");

  $(".accordion_item .accordion_title").click(function(){
    $(this).parent().toggleClass("closed");
  });
}

//--------------------------------------------------------------------------------------------------------------------------



function initSideNav(){
	$(".side_nav li a").click(function(event){
		$(".side_nav li").removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().parents("li").addClass("active");
	});
}

//--------------------------------------------------------------------------------------------------------------------------

function scrollSideNav(){
	var sections = $("section.content_section div[ID]");
	var navigation_links = $(".side_nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('.side_nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("active");
			active_link.parent().addClass("active");
			active_link.parent().parents("li").addClass("active");
		},
		offset: '148'
	})
}

//--------------------------------------------------------------------------------------------------------------------------

function showHidePress(){
	$('.side_nav li').removeClass("active");
	$('.side_nav li').first().addClass("active");
	$('.sub_nav').hide();
	$('.sub_nav').first().show();
	$('.side_nav li a').click(function(){
    	event.preventDefault();
		if($(this).parents(".sub_nav").length == 0){
			//sub menu toggle
			$('.sub_nav').hide();
			$('.sub_nav li').removeClass("active");
			$(this).parent().children('.sub_nav').slideToggle('slow'); 
				
		}
	});
}
//--------------------------------------------------------------------------------------------------------------------------

function sideNav(wrapper,nav,trigger){
  $(wrapper).click(function(e){
    if ($(e.target).is(trigger)) {
      e.stopPropagation(); 
    }else{
      $(wrapper).removeClass("pulled_nav");
    }
  });

  $(trigger).click(function(){
    $(wrapper).toggleClass("pulled_nav");
  });
	
	$(nav + " a").click(function(){
		$(wrapper).removeClass("pulled_nav");
	});
}

//--------------------------------------------------------------------------------------------------------------------------

function scrollToDiv() {

	var pathname = window.location.href;
	if(pathname.indexOf('#') != -1){
		var urlId = pathname.split("#");
		var scrollId = urlId[urlId.length-1];
		var scrollDiv = $("#"+scrollId);
		if(scrollDiv.length != 0){
		  $('html,body').animate({
          	scrollTop: scrollDiv.offset().top - 140
          }, 200);
		}
	}
}

//--------------------------------------------------------------------------------------------------------------------------

function hideEmptyAccordion(){
	$('.accordion_details p a').each(function(){
   		var href = $(this).attr("href"); 
		if(href == ''){
			$(this).closest(".accordion_item").hide();
		}
	})
}


//--------------------------------------------------------------------------------------------------------------------------

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/#.*/, "", "");
    path = decodeURIComponent(path);
	
	if(path == '/'){
		$(".main_nav_white li:first-child, .main_nav_dark li:first-child").addClass('active');
	}
	else{
		$(".main_nav_white a, .main_nav_dark a").each(function () {
			var href = $(this).attr('href');
			if (path.substring(0, href.length) === href) {
				$(this).closest('li').addClass('active');
			}
		});
	}

}
