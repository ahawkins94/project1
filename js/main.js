
var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $bench = $(".bench");
var $workers = $(".workers");
var $basicWorker = $(".basic-worker");
var modWidth = 1;
var modHeight = 1;
var buyWorker = 5;
var buyFeeder = 10;
var count = 0
var workerList = {

}

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

function addToBench(){
	$this.appendTo(".bench");
	$this.addClass('onBench').removeClass('offBench')	
}

function addToWorkers(){
	$this.appendTo("#slime-container .workers")
	$this.addClass('offBench').removeClass('onBench')
}

// function increaseStress(){
// 	if 
// }

$(".bench").on('click', ".basic-worker", function(){
	$this = $(this);
	addToWorkers();
});

$(".workers").on('click', ".basic-worker", function(){
	$this = $(this);	
	addToBench();
});

$(".bench").on('click', ".slime-feeder", function(){
	$this = $(this);
	addToWorkers();
});

$(".workers").on('click', ".slime-feeder", function(){
	$this = $(this);	
	addToBench();
});

$(".feeder-buy").click(function(){
	if (modWidth > buyFeeder){

		$slime.animate({
        width: '-=' + buyFeeder + 'px',
        height: '-=' + buyFeeder + 'px'
    }, 500);;
		
		($slime).width(modWidth);
		modWidth -= buyFeeder;

		($slime).height(modHeight);
		modHeight -= buyFeeder;
		$bench.append('<div class="slime-feeder onBench"><div class="stress-bar"><div class="stress"></div></div></div</div>');
		updateScore();
		buyFeeder = buyFeeder + 30;
		$(".feeder-buy span").html(buyFeeder)

	}
});

$(".worker-buy").click(function(){
	if (modWidth > buyWorker){

		$slime.animate({
        width: '-=' + buyWorker + 'px',
        height: '-=' + buyWorker + 'px'
    }, 500);;
		
		($slime).width(modWidth);
		modWidth -= buyWorker;

		($slime).height(modHeight);
		modHeight -= buyWorker;
		$bench.append('<div class="basic-worker onBench"><div class="stress-bar"><div class="stress"></div></div</div>');
		updateScore();
		buyWorker = buyWorker + 15;
		$(".worker-buy span").html(buyWorker)

		count++
		workerList['w' + count] = {stress: 0}
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

setInterval(function(){
	for (i = 0; i < $workers.find(".slime-feeder").length; i++){
		addSize();
		updateScore();
		clearInterval();
	} 
}, 150);

setInterval(function slimeDecrease(e){

	if ($("#slime").width() > 22){
				decreaseSize();
				updateScore();
				clearInterval();
		};
	}, 200);


