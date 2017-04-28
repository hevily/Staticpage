$(function () {
	var classesList = $('.classes-edit')
	;
	$('.sort-btn').on('click',function () {
		classesList.toggleClass('sorting');
	})
})