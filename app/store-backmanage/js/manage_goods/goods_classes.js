$(function () {
	var classesList = $('.classes-edit')

	;
	$('.sort-btn').on('click',function () {
		classesList.toggleClass('sorting');
	})
	$('input').iCheck({
	    checkboxClass: 'iradio_square-green',
	    // radioClass: 'iradio_square-green',
	    increaseArea: '20%' // optional
	  });
	var clsssesInput = $('input.classes_edit');
	console.log(clsssesInput)
	$.each(clsssesInput,function () {
		
	})
	var checkedNum = $('input.classes_edit:checked').length
	console.log(checkedNum)
	$('input.classes_edit').on('ifChanged', function(event){
	  // alert(event.type + ' callback');
	  var checkedNum = $('input.classes_edit:checked').length
	  console.log(checkedNum)
	  if (checkedNum == 0) {
	  	classesList.removeClass('more-selected');
	  	classesList.removeClass('one-selected');

	  	console.log('----0')
	  }else if(checkedNum == 1){
	  	console.log('----1')
	  	classesList.addClass('one-selected');
	  	classesList.removeClass('more-selected');

	  }else if(checkedNum > 1){
	  	console.log('---->1')
	  	classesList.removeClass('one-selected');
	  	classesList.addClass('more-selected');

	  }
	});
})