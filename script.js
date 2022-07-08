// even pada saat link diklik
$('.page-scroll').on('click', function()
    {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs

    var elemenTujuan = $(tujuan);


    //    pindahkan scroll

    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');

     e.preventDefault();

});

// parallax

$(window).on('load', function(){
    $('kiri').addClass('pmuncul')
});


$(window).scroll(function(){

    var wScroll =$(this).scrollTop()

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'

        });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    
         });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'

        });

    // portofolio
    // if( wScroll > $('.portfolio').offset().top -250 ) {
    //     $('.portfolio .thumbnail').each(function(i){
    //         setTimeout(function(){

    //         },2000)
    //     })
    //  $('.portfolio .thumbnail').eq(i).addClass('.muncul');
    // }


});