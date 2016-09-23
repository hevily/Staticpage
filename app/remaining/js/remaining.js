$(function () {
	$('.current-remaining').click(function() {
		$('.remaining-box ').toggleClass('wait-select');
		$('.remaining-box .remaining-options').fadeToggle('slow');
		$('.nav-mask').fadeToggle('fast')
		notMove('.nav-mask')
	});
	$('.remaining-option').click(function () {
		$('.selecting').removeClass('selecting');
		$(this).addClass('selecting');
		$('.remaining-box .remaining-options').fadeToggle('slow');
		$('.remaining-box ').removeClass('wait-select');
		$('.nav-mask').fadeToggle('fast')
		notMove('.nav-mask')
		
		$('.remaining-name-title').text($(".selecting span").text());
		console.log($(".selecting span").text())
	})
	$('.nav-mask').click(function () {
		$('.nav-mask').fadeToggle('fast')
		$('.remaining-box .remaining-options').fadeToggle('slow');
		$('.remaining-box ').removeClass('wait-select');
	})
	function notMove(ele) {
		$(ele).on('touchmove',function(event) { event.preventDefault(); }, false);
	}
})