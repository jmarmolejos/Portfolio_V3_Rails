Pagination = {
	pageSize: 9,
	totalPages: 0,
	slideSize: 0
};

Pagination.init = function(element){
	var width = 0;
	
	$('ul.work-list').each(function(i, item){
		width += $(item).outerWidth(true);
	})
	
	$('#scroller').css('width', width)
	
	this.totalPages = element.find('ul.work-list').length;
	
	this.slideSize = element.width()/2;
	
	if (this.totalPages > 1) {
		
		var paginationLinks = $('<div></div>').addClass('pagination-links-wrapper').appendTo('#work');
		
		for (var i=0; i < this.totalPages; i++) {
			$('<a></a>').addClass('works-page')
				.attr('href', 'works/' + (i+1))
				.text(i + 1)
				.appendTo(paginationLinks);
		};
	};
	
	//console.log(this.slideSize); 
}


$(function(){
	
	var itemsGroups = [];
	var currentGroup = 0;
	var scroller = $('#scroller');
	
	itemsGroups[currentGroup] = [];
	
	var items = $('ul.work-list li')
	
	$('ul.work-list').remove(); // removing the ul so we can add the distributed works again
	
	items.each(function(i){
		itemsGroups[currentGroup].push(this);
		if (itemsGroups[currentGroup].length == Pagination.pageSize) {
			currentGroup ++;
			itemsGroups[currentGroup] = [];
		};
	})
	
	for (var i=0; i < itemsGroups.length; i++) {
	  var group = itemsGroups[i]
	  
	  var ul = $('<ul></ul>').addClass('work-list');
	  
	  for (var j=0; j < group.length; j++) {
		ul.append($(group[j]))
	  };
	  
	  scroller.append(ul);
	  
	};
	
	Pagination.init($('#scroller'));
	
})
