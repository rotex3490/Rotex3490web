function rtxSlider(overlay,item,mainImage,imageArray){
    var images = imageArray;
    var image = mainImage;
    var currentImage = 0;

    $(item).click(function(){
        var selectedID = $(this).attr('id');
        currentImage = selectedID;
        startImage(selectedID);
        showOverlay();
    });

    $("#close").click(function(event){
        closeOverlay();
    });
    
    $("#next").click(function(){
     nextImage();                 
    });
    
    $("#prev").click(function(){
     prevImage();                 
    });
	
	$(document).keydown(function(e) {
		// ESCAPE key pressed
		if (e.keyCode == 27) {
			closeOverlay();
		}
		// LEFT key pressed
		else if(e.keyCode == 37){
			prevImage();
		}
		// RIGHT key pressed
		else if(e.keyCode == 39){
			nextImage();
		}
		
	});

    function showOverlay(){
        $(overlay).css("display","block");
        $("body").css("overflow","hidden");
        $(overlay).animate({opacity:'1'}, 80, 'linear');
    }

    function closeOverlay(){
        $(overlay).animate({ 'opacity':'0' }, 80, 'linear', function(){ $(overlay).css("display","none"); });
        $("body").css("overflow","auto");
    }
    
    function startImage(index) {
     $(image).fadeOut("fast", function () {
		 $(this).attr('src', images[index]).fadeIn("fast").load(function(){
		 	$(mainImage).css('margin-top','-' + $(mainImage).height()/2 + 'px');
			$('.download').attr('href',images[index]);
			
		 });
     });
    }
    
    function nextImage(){
     $(image).fadeOut("fast", function () {
         currentImage++;
         if(currentImage >= images.length){
             currentImage = 0;
         }
		 $(this).attr('src', images[currentImage]).fadeIn("fast").load(function(){
		 	$(mainImage).css('margin-top','-' + $(mainImage).height()/2 + 'px');
			$('.download').attr('href',images[currentImage]);
			
		 });
     });
    }
    
    function prevImage(){
     $(image).fadeOut("fast", function () {
         currentImage--;
         if(currentImage < 0){
             currentImage = images.length-1;
         }
		 $(this).attr('src', images[currentImage]).fadeIn("fast").load(function(){
		 	$(mainImage).css('margin-top','-' + $(mainImage).height()/2 + 'px');
			$('.download').attr('href',images[currentImage]);
			
		 });
     });
    }
}