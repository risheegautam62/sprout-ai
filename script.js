document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

$(document).ready(function() {
    $(".hamburger").click(function() {
        $("#mySidebar").addClass("open");
        $("body").addClass("sidebar-open");
    });
    $(".closebtn").click(function() {
        $("#mySidebar").removeClass("open");
        $("body").removeClass("sidebar-open");
    });
    $(document).click(function(event) {
        if (!$(event.target).closest("#mySidebar, .hamburger").length && $("#mySidebar").hasClass("open")) {
            $("#mySidebar").removeClass("open");
            $("body").removeClass("sidebar-open");
        }
    });
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        nextArrow: $('.next-button'),
        prevArrow: $('.prev-button'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false, 
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, 
                    infinite: true
                }
            }
        ]
    });
});

