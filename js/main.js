
var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $workers = $(".workers")
var modWidth = 1;
var modHeight = 1;
var basicWorker = 20;

function addSize(){

	($slime).width(modWidth);
	modWidth += 0.1;

	($slime).height(modHeight);
	modHeight += 0.1;
}

function decreaseSize(){

	($slime).width(modWidth);
	modWidth -= 0.1;

	($slime).height(modHeight);
	modHeight -= 0.1;
}

function updateScore(){
	$('#score').html(Math.round( $slime.width() * 10 ) / 10);	
}

$("#worker-buy").click(function(){
	if (modWidth > basicWorker){

		$slime.animate({
        width: '-=20px',
        height: '-=20px'
    }, 500);;
		
		($slime).width(modWidth);
		modWidth -= basicWorker;

		($slime).height(modHeight);
		modHeight -= basicWorker;
		$workers.append('<div class="basic-worker"></div>')
		updateScore()
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
}, 300);

setInterval(function slimeDecrease(e){

	if ($("#slime").width() > 22){
				decreaseSize();
				updateScore();
				clearInterval();
		};
	}, 200);
// }, 100);