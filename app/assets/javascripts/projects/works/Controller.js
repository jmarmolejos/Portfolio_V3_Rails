Controller = {};
			
Controller.assets = function(route){
	Utils.showSpinner();
	
	var img = $('<img />').attr('src', "/" + route);
	
	$('#work-img-big').empty().append(img);
	
	img.load(function(){
		Utils.hideSpinner();
		$('#work-modal').reveal({ animation: 'fade' });
	})
}

Controller.home = function(){
	$('#work-modal').trigger('reveal:close');
}

Controller.content = function(route){
	$('.ui-module .ui-module').hide();
	
	var values = route.split('/');
	
	$('ul#site-nav').find('a.current').removeClass('current');
	
	$('ul#site-nav').find('a[href="'+route+'"]').addClass('current');
	
	$('#' + values[1]).fadeIn(800);
}

Controller.works = function(route)
{
	var values = route.split('/');
	var page = values[1] - 1;
	
	$('#scroller').animate({
		left: -page * Pagination.slideSize
	}, 600, "easeOutQuart");
	
	$('.pagination-links-wrapper').find('.current').removeClass('current');
	$('.pagination-links-wrapper').find('a[href="'+ route +'"]').addClass('current');
}
