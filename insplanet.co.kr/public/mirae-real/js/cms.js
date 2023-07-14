$(function(){
    $('.cms-ondepth').on('click',function(){
        if($(this).parent().hasClass('active') == 0){
            $('.cms-ondepth').parent().removeClass('active')
            $(this).parent().addClass('active')
        }else{
            $(this).parent().removeClass('active')
        }
    });
    $('.cms-content-wrap .cms-btn-asideclose').on('click',function(){
        $('.cms-content-wrap').removeClass('aside-open');
        $('.cms-content-wrap').addClass('aside-close');
    });
    $('.cms-content-wrap .cms-btn-asideopen').on('click',function(){
        $('.cms-content-wrap').removeClass('aside-close');
        $('.cms-content-wrap').addClass('aside-open');
    });
});