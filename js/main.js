
var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $bench = $(".bench");
var $workers = $(".workers");
var modWidth = 1;
var modHeight = 1;
var buyWorker = 0;
var buyFeeder = 10;
var count = 0
var $basicWorker;
var $stress = $(".stress");
var stressBar = 0.4;
var workerList = {

}
var up = true;

var stressWidth = 0;


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

function increaseStress(){
	$('.stress').each(function(i, v){
		if (this.classList.value.includes('stress')) {
			if (this.classList.value.includes('offBench')){
				var workernum = 'w' + (parseInt(i) + 1);
				workerList[workernum]++;
			} else if (this.classList.value.includes('onBench')){
				var workernum = 'w' + (parseInt(i) + 1);
				workerList[workernum]--;
			}
		}
	})
	
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
    }, 500);
		
	count++

	($slime).width(modWidth);
	modWidth -= buyWorker;

	($slime).height(modHeight);
	modHeight -= buyWorker;
	$bench.append('<div class="basic-worker onBench"><div class="stress-bar onBench" id="w' + count + '"><div class="stress"></div></div</div>');
	updateScore();
	buyWorker = buyWorker + 15;
	$(".worker-buy span").html(buyWorker)

	workerList['w' + count] = 0;
	$basicWorker = $('.basic-worker');
	$stress = $(".stress");
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

setInterval(function(){
	if (up == true && $basicWorker.hasClass("offBench")){
		var ceiling = 40;
		increaseStress();
		console.log(workerList)

		// $stress[0].css("width", stressWidth + "px")
		// stressWidth += 5;
		// console.log($stress)

	if (workerList['w' + count] == ceiling){
		up = false
	}
	};
}, 1000);
		


