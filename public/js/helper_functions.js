
function featureArrivingSoon() {
	alert("This feature will be coming soon.");
}

javascript:featureArrivingSoon();

function showMenu() {
	winWidth = $(window).width();  // WINDOW WIDTH
	
	if(winWidth < 980) { // FOR MOBILE
		if(menu == 0) {
			$("#menu").stop().clearQueue().slideDown();
			menu = 1;
		} else {
			$("#menu").stop().clearQueue().slideUp();
			menu = 0;
		}
		
	} else { // FOR IPAD AND DESKTOP
		
	}
}


/* ------------ SHARE JAVASCRIPT ---------- */
// DECLARED VARIABLES
var menu = 0; // 0 = MENU IS CLOSED
var submenu = 0; // 0 = SUBMENU IS CLOSED
var winWidth = $(window).width();  // WINDOW WIDTH
var winHeight = $(window).height(); // WINDOW HEIGHT
var winScroll =  $(window).scrollTop();
var menuPos; // POSITION OF WHERE THE MENU IS WHEN IT LOADS
var menuPosPer; // POSITION OF WHERE THE MENU IS WHEN IT LOADS IN PERCENTAGE
var menuTop; // CHECK IF THE MENU IS AT THE TOP OF THE PAGE OR NOT
var temp;

$(document).ready(function() { // will be executed immediately
    winWidth = $(window).width();  // WINDOW WIDTH
    topSlide();
    imageHeight();
    
    $(".fancyBox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

$(".fancybox-media").fancybox({
        openEffect  : "none",
        closeEffect : "none",
        helpers : {
            overlay: {
                locked: false
            },
            media : {}
        }
    });

});


$(window).load(function () { //Run a function when the page is fully loaded
    winWidth = $(window).width();  // WINDOW WIDTH
    winHeight = $(window).height(); // WINDOW HEIGHT
    imageHeight();

});


$( window ).resize(function() {
    winWidth = $(window).width();  // WINDOW WIDTH
    winHeight = $(window).height(); // WINDOW HEIGHT
    imageHeight();
    menuScrolling();

    if(winWidth < 980) {
        if(menu == 0) {
            $("#menu").hide();
        } else {
            $("#menu").show();
        }
    } 
    
});


$( window ).scroll( function(){ // FOR WINDOW IF SCROLLING
    winScroll =  $(window).scrollTop();
    menuScrolling();
});





/*
*
********************************************************************
------------ SET THE IMAGE HEIGHT BASE ON THE PAGE ----------------
********************************************************************
*/
function imageHeight() {
    winWidth = $(window).width();  // WINDOW WIDTH
    winScroll =  $(window).scrollTop();
    winHeight = $(window).height(); // HEIGHT OF THE WINDOW
    var imageWidth = $(".topImage img").eq(0).width(); // HEIGHT OF THE IMAGE
    var imageHeight = $("#topSlider").height(); // HEIGHT OF THE IMAGE
    var sdHeight = $("#scrollDown").height(); // HEIGHT OF THE ADDRESS
    //console.log("window: "+winHeight+", imageHeight: "+imageHeight+", sdHeight: "+sdHeight);
    
    if(imageHeight < winHeight) {
        //console.log("lessThan");
        var totalHeight = winHeight - sdHeight;
var totalHeight = totalHeight -300;
        if(totalHeight <= 420) { // THE SMALLEST IT CAN BE IS 420 BASE ON MOBILE
            totalHeight = 420;
        }
        $("#topSlider").height(totalHeight);
        $(".topImage").height(totalHeight);
    } else if(imageHeight >= winHeight) {
        $("#topSlider").height('420');
        $(".topImage").height('420').width('');
    }
    
}

/*
*
***************************************************************************
------------------------ FIX THE MENU AT TO THE TOP -----------------------
***************************************************************************
*/
function menuScrolling() {
    winWidth = $(window).width();
    winHeight = $(window).height();
    winScroll = $(window).scrollTop();

    if ((winWidth >= 980)) {
        // DEFAULT POSITION IS 38% 
        var menuPosNum = 30; // GET THE POSITION OF MENU

        //console.log(menuPosNum);
        if (winScroll >= menuPosNum) {
            $("#header").addClass("onTop");
            menuTop = 1;
        } else {
            $("#header").removeClass("onTop");
            menuTop = 0;
        }
    } else {
        $("#header").removeClass("onTop");
        menuTop = 0;
    }
}


/*
*
********************************************************************
------------------------ TOP SLIDE FUNCTION ------------------------
********************************************************************
*/
function topSlide() {
    $('#topSlide').cycle({
        speed: 600,
        manualSpeed: 100
    });
}



/*
*
********************************************************************
----------------------- SCROLL DOWN FUNCTION -----------------------
********************************************************************
*/
function scrollDown() {
    winHeight = $(window).height(); // HEIGHT OF THE WINDOW
    var link = document.querySelector('#content');
}



function scrollDown2() {
    if(winScroll < 100) {
        $('html,body').animate({scrollTop: "100px"}, 1000, 'swing');
    }
}



$('#scrollDown').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});



function showMenu() {
    winWidth = $(window).width(); // WINDOW WIDTH

    if (winWidth < 980) { // FOR MOBILE
        if (menu == 0) {
            $("#menu").stop().clearQueue().slideDown();
            menu = 1;
        } else {
            $("#menu").stop().clearQueue().slideUp();
            menu = 0;
        }

    } else { // FOR IPAD AND DESKTOP

    }
}