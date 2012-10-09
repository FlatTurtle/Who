$(document).ready(function(){
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {
	  $('.vcard').css({'display':'none'}); 
	}
});

$(window).load(function(){  
  setTimeout(function(){
      window.scrollTo(0, 1);
  }, 0);
});