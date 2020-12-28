// $(document).ready(function)(){
//     $("btn").click(function(){
//         var value = $(this).attr("data-filter");
//         if(value == "all"){
//             $(".filter").show("100");
//         }
//         else{
//             $(".filter").not("."+value).hide("1000");
//             $(".filter").filter("."+value).show("1000");
//         }
//         $("a.btn").click(function(){
//             $this.addClass('active').siblings().removeClass('active');
//         })
//     })
// }

// init Isotope
var $grid = $('.portfolio-item').isotope({
    // options
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.portfolio-menu').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });