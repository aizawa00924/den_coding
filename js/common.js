$(function() {
  //image
  $(window).on('load resize', function(){
    var width = $(window).width();
    var border = 768;

    if(width < border){
      $('.js-image-switch').each(function(){
        $(this).attr('src', $(this).attr('src').replace('_pc','_sp'));
      })
    } else {
      $('.js-image-switch').each(function(){
        $(this).attr('src', $(this).attr('src').replace('_sp','_pc'));
      })
    }
  });

  //page link #
  $(document).ready(function() {
    var windowWidth = $(window).width();
    var headerHeight = 30;

    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  // max height
  $('.p-index_about_list.btm li .p-index_about_ttl').matchHeight();

  // page top
  var pagetop = $('.l-footer_pageTop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
    $(function(){
      //sp menu
      var trigger = '.l-header_menu';
      var target = '.l-gnav';
      var body = 'body';
      var fixed = '.c-fixed';
      var pageTop = '.l-footer_pageTop';

      $(trigger).click(function(){
        if ($(trigger).hasClass('active')){
          $(trigger).removeClass('active');
          $(target).removeClass('open');
          $(body).removeClass('is_move');
          $(fixed).fadeIn();
          $(pageTop).fadeIn();
        } else {
          $(this).addClass('active');
          $(target).addClass('open');
          $(body).addClass('is_move');
          $(fixed).fadeOut();
          $(pageTop).fadeOut();
        }
      });

      $('.l-gnav_list li a').click(function(){
        $(trigger).removeClass('active');
        $(target).removeClass('open');
        $(body).removeClass('is_move');
      });

      //page top - smooth scroll
      var footerFixed = $('.c-fixed');
      footerFixed.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          footerFixed.fadeIn();
       　} else {
          footerFixed.fadeOut();
        }
      });

      // max height
      $('.p-index_about_list.top li .p-index_about_ttl').matchHeight();
    });
  } else {
    $(function(){
      // img height
      objectFitImages('.c-row_img img');
    });
  }
});
