
var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $workers = $(".workers")
var modWidth = 1;
var modHeight = 1;

function addSize(){

	($slime).width(modWidth);
	modWidth += 0.1;

	($slime).height(modHeight);
	modHeight += 0.1;
}

function updateScore(){
	$('#score').html(Math.round( $slime.width() * 10 ) / 10);	
}

$("#worker-buy").click(function(){
	if (modWidth > 20){

		($slime).width(modWidth);
		modWidth -= 20;

		($slime).height(modHeight);
		modHeight -= 20;
		$workers.append('<div class="basic-worker"></div>')

	}
});

$(".btn-minimize").click(function(){
    $(".shop").fadeToggle();
  });

($slimeFood).click(function(){

	addSize();
	($slime).addClass('animated jello').delay(500).queue(function(){
		($slime).removeClass('animated jello'). dequeue();
	})
	updateScore();
})


setInterval(function(){
	for (i = 0; i < $workers.find(".basic-worker").length; i++){
		addSize();
		updateScore();
		clearInterval();
	} 

}, 100);

//for loop inside interval to add size per worker. workers.length