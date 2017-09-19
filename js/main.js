
var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $bench = $(".bench");
var $workers = $(".workers");
var modWidth = 1;
var modHeight = 1;
var basicWorker = 5;
var slimeFeeder = 10;

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
	if (modWidth > slimeFeeder){

		$slime.animate({
        width: '-=' + slimeFeeder + 'px',
        height: '-=' + slimeFeeder + 'px'
    }, 500);;
		
		($slime).width(modWidth);
		modWidth -= slimeFeeder;

		($slime).height(modHeight);
		modHeight -= slimeFeeder;
		$bench.append('<div class="slime-feeder onBench"><div class="stress-bar"><div class="stress"></div></div</div>');
		updateScore();
		slimeFeeder = slimeFeeder + 30;
		$(".feeder-buy span").html(slimeFeeder)
	}
});

$(".worker-buy").click(function(){
	if (modWidth > basicWorker){

		$slime.animate({
        width: '-=' + basicWorker + 'px',
        height: '-=' + basicWorker + 'px'
    }, 500);;
		
		($slime).width(modWidth);
		modWidth -= basicWorker;

		($slime).height(modHeight);
		modHeight -= basicWorker;
		$bench.append('<div class="basic-worker onBench"><div class="stress-bar"><div class="stress"></div></div</div>');
		updateScore();
		basicWorker = basicWorker + 15;
		$(".worker-buy span").html(basicWorker)
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


