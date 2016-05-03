//Cache reference to window and animation items
var $animation_elements = $(".timelineElement").children();
var $window = $(window);

$(window).on("load",function() {
    $window.on('scroll', check_if_in_view);
    $animation_elements.each(function(){
        $(this).fadeTo(0,0);
    });

    $window.trigger('scroll');




});

function check_if_in_view(){

    $animation_elements.each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();

        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            $(this).addClass("in-view");
            if ($(this).css("opacity")==0) {
                if ($(this).is("h2")) {


                    if ($(this).parent().is(".right")) {
                        $(this).animate(
                            {
                                'margin-left': '20%',
                                'opacity': '1'
                                // to move it towards the left
                            }, 500,
                            function () {
                                //$(this).slideUp('fast');
                                // once it's finished moving to the right, just
                                // removes the the element from the display, you could use
                                // `remove()` instead, or whatever.
                            }
                        );
                    }
                    if ($(this).parent().is(".left")) {
                        $(this).animate(
                            {
                                'margin-right': '20%',
                                'opacity': '1'
                                // to move it towards the right
                            }, 500,
                            function () {
                                //$(this).slideUp('fast');
                                // once it's finished moving to the right, just
                                // removes the the element from the display, you could use
                                // `remove()` instead, or whatever.
                            }
                        );
                    }

                }
                if ($(this).is("h3")) {


                    if ($(this).parent().is(".right")) {

                        $(this).animate(
                            {
                                'background-size': '100%',
                                'margin-top' : '0px',
                                'opacity': '1'
                                // to move it towards the left
                            }, 500,
                            function () {
                                //$(this).slideUp('fast');
                                // once it's finished moving to the right, just
                                // removes the the element from the display, you could use
                                // `remove()` instead, or whatever.
                            }
                        );
                    }
                    if ($(this).parent().is(".left")) {
                        $(this).animate(
                            {
                                'background-size': '100%',
                                'margin-top' : '0px',
                                'opacity': '1'
                                // to move it towards the right
                            }, 500,
                            function () {
                                //$(this).slideUp('fast');
                                // once it's finished moving to the right, just
                                // removes the the element from the display, you could use
                                // `remove()` instead, or whatever.
                            }
                        );
                    }


                }
                if ($(this).is("h4")) {
                    $(this).animate(
                    {
                        //'margin-bottom' : '20px',
                        'opacity': '1'
                    });

                }

                else
                    $(this).animate(
                        {


                            'opacity': '1'
                            // to move it towards the right
                        }, 500,
                        function () {
                            //$(this).slideUp('fast');
                            // once it's finished moving to the right, just
                            // removes the the element from the display, you could use
                            // `remove()` instead, or whatever.
                        }
                    );

            }
        }
        else{
            $(this).removeClass("in-view");
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
    });

}
/*
$(window).on("load",function() {
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    var windowBottom = $(window).scrollTop() + $(window).innerHeight();

    $(".timelineElement h2").each(function() {
        if (objectBottom > windowBottom) { //object out of view (scrolling down)

            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }

    });
});
*/



/*$(window).on("load",function() {
    $(window).scroll(function() {
        $(".timelineElement").each(function() {
            /!* Check the location of each desired element *!/
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /!* If the element is completely within bounds of the window, fade it in *!/
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $(this).children("h2").animate({


                    height: "50"
                }, 400, function() {
                    // Animation complete.
                });
               if ($(this).css("opacity")==0) {
                    $(this).fadeTo(500,1);
               }
            }
             else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }); $(window).scroll(); //invoke scroll-handler on page-load
});*/


