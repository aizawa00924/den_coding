// viewport
$(function(){
  var ua = navigator.userAgent;
  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
    $('head').prepend('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0"; user-scalable="no">');
  } else {
    $('head').prepend('<meta name="viewport" content="width=1200">');
  }
});
