jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
};

Utils = {};

Utils.showSpinner = function(){
	var spinner = $('.spinner');
	spinner.center();
	spinner.fadeIn();
}

Utils.hideSpinner = function(){
	var spinner = $('.spinner');
	spinner.hide();
}


Utils.resetContactForm = function(){
	$('#name, #email, #message').val('');
}

Utils.changeHash  = function (href) {
					
	window.location.hash = '/' + href;
	
	_gaq.push(['_trackPageview', '/' + href]);
}