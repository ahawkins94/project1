console.log('help me')

var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var modWidth = 1;
var modHeight = 1;



($slimeFood).click(function(){

	($slime).width( modWidth);
	modWidth += 0.1;

	($slime).height( modHeight);
	modHeight += 0.1;
	($slime).addClass('animated jello').delay(500).queue(function(){
		($slime).removeClass('animated jello'). dequeue();
	})
	$('#score').html(Math.round( $slime.width() * 10 ) / 10);

})

// if ($slime hasClass("basic-worker")){

// 	setInterval(function(){

// 	($slime).width( modWidth);
// 	modWidth += 0.1;

// 	($slime).height( modHeight);
// 	modHeight += 0.1;

// 	$('#score').html(Math.round( $slime.width() * 10 ) / 10);

// 	}, 100);
// }