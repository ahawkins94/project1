var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var $bench = $(".bench");
var $workers = $(".workers");
var modWidth = 1;
var modHeight = 1;
var buyWorker = 0;
var buyFeeder = 10;
var buyDoctor = 15;
var buyTaskmaster = 20;
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
	modWidth += 0.3;
	($slime).height(modHeight);
	modHeight += 0.3;
}

function addSizeStress(){
	($slime).width(modWidth);
	modWidth += 0.1;
	($slime).height(modHeight);
	modHeight += 0.1;
}

function addMoreSize(){
	($slime).width(modWidth);
	modWidth += 0.6;
	($slime).height(modHeight);
	modHeight += 0.6;
}

function addEvenMoreSize(){
	($slime).width(modWidth);
	modWidth += 1;
	($slime).height(modHeight);
	modHeight += 1;
}

function decreaseSize(){
	($slime).width(modWidth);
	modWidth -= 0.1;
	($slime).height(modHeight);
	modHeight -= 0.1;
}

function decreaseMoreSize(){
	($slime).width(modWidth);
	modWidth -= 0.5;
	($slime).height(modHeight);
	modHeight -= 0.5;
}

function decreaseEvenMoreSize(){
	($slime).width(modWidth);
	modWidth -= 1;
	($slime).height(modHeight);
	modHeight -= 1;
}

function workerFunction(){
	
	$('.stress').each(function(i, v){
		var $this = $(this);
			if ($this.hasClass('offBench')){
				var id = $this.closest('.basic-worker').attr('id');
				workerList[id]++;
				$this.css("width", "+=0.4px")
				if (workerList[id] > 100){
					workerList[id] = 100;
				}
				if (workerList[id] < 50){
					addSize();
				}else if (workerList[id] < 85){
					addSizeStress();
				}else if (workerList[id] > 85){
					decreaseSize();
				}

			} else if ($this.hasClass('onBench')){
				var id = $this.closest('.basic-worker').attr('id');
				workerList[id]--;
				$this.css("width", "-=0.4px")
				if (workerList[id] < 0){
					workerList[id] = 0;
				}
			}
	})
}

function feederFunction(){
	$('.stress').each(function(i, v){
		var $this = $(this);
			if ($this.hasClass('offBench')){
				var id = $this.closest('.slime-feeder').attr('id');
				workerList[id]++;
				if (workerList[id] > 100){
					workerList[id] = 100;
				}
				if (workerList[id] < 50){
					addMoreSize();
				}else if (workerList[id] < 85){
					addSize();
				}else if (workerList[id] > 85){
					decreaseSize();
				}

			} else if ($this.hasClass('onBench')){
				var id = $this.closest('.slime-feeder').attr('id');
				workerList[id]--;
				if (workerList[id] < 0){
					workerList[id] = 0;
				}
			}
	})
}

function doctorFunction(){
	$('.stress').each(function(i, v){
		var $this = $(this);
			if ($this.hasClass('offBench')){
				var id = $this.closest('.slime-doctor').attr('id');
				workerList[id]++;
				if (workerList[id] > 100){
					workerList[id] = 100;
				}
				if (workerList[id] < 50){
					addEvenMoreSize();
				}else if (workerList[id] < 85){
					addMoreSize();
				}else if (workerList[id] > 85){
					decreaseEvenMoreSize();
				}

			} else if ($this.hasClass('onBench')){
				var id = $this.closest('.slime-doctor').attr('id');
				workerList[id]--;
				if (workerList[id] < 0){
					workerList[id] = 0;
				}
			}
	})
}

function taskmasterFunction(){
	$('.stress').each(function(i, v){
		var $this = $(this);
			if ($this.hasClass('offBench')){
				var id = $this.closest('.slime-taskmaster').attr('id');
				workerList[id]++;
				if (workerList[id] > 100){
					workerList[id] = 100;
				}
				if (workerList[id] < 50){
					addEvenMoreSize();
				}else if (workerList[id] < 85){
					addMoreSize();
				}else if (workerList[id] > 85){
					decreaseEvenMoreSize();
				}

			} else if ($this.hasClass('onBench')){
				var id = $this.closest('.slime-taskmaster').attr('id');
				workerList[id]--;
				if (workerList[id] < 0){
					workerList[id] = 0;
				}
			}
	})
}

function updateScore(){
	$('#score').html(Math.round( $slime.width() * 10 ) / 10);	
}

function addToBench(){
	$this.appendTo(".bench");
	$this.find("*").addClass('onBench').removeClass('offBench')
	$this.addClass('onBench').removeClass('offBench')	
}

function addToWorkers(){
	$this.appendTo("#slime-container .workers")
	$this.addClass('offBench').removeClass('onBench')
	$this.find("*").addClass('offBench').removeClass('onBench')
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

$(".bench").on('click', ".slime-doctor", function(){
	$this = $(this);
	addToWorkers();
});

$(".workers").on('click', ".slime-doctor", function(){
	$this = $(this);	
	addToBench();
});

$(".bench").on('click', ".slime-taskmaster", function(){
	$this = $(this);
	addToWorkers();
});

$(".workers").on('click', ".slime-taskmaster", function(){
	$this = $(this);	
	addToBench();
});

$(".taskmaster-buy").click(function(){
	if (modWidth > buyTaskmaster){

		$slime.animate({
        width: '-=' + buyTaskmaster + 'px',
        height: '-=' + buyTaskmaster + 'px'
    }, 500);;

		count++
		
		($slime).width(modWidth);
		modWidth -= buyTaskmaster;

		($slime).height(modHeight);
		modHeight -= buyTaskmaster;
		$bench.append('<div class="slime-taskmaster onBench" id="w' + count + '"><div class="stress-bar onBench"><div class="stress" label="w' + count + '"></div></div></div</div>');
		updateScore();
		buyTaskmaster += 50;
		$(".taskmaster-buy span").html(buyTaskmaster)

		workerList['w' + count] = 0;
		$slimeTaskmaster = $('.slime-taskmaster');
		$stress = $(".stress");
	
	}
});

$(".doctor-buy").click(function(){
	if (modWidth > buyDoctor){

		$slime.animate({
        width: '-=' + buyDoctor + 'px',
        height: '-=' + buyDoctor + 'px'
    }, 500);;

		count++
		
		($slime).width(modWidth);
		modWidth -= buyDoctor;

		($slime).height(modHeight);
		modHeight -= buyDoctor;
		$bench.append('<div class="slime-doctor onBench" id="w' + count + '"><div class="stress-bar onBench"><div class="stress" label="w' + count + '"></div></div></div</div>');
		updateScore();
		buyDoctor = buyDoctor + 50;
		$(".doctor-buy span").html(buyDoctor)

		workerList['w' + count] = 0;
		$slimeDoctor = $('.slime-doctor');
		$stress = $(".stress");
	
	}
});

$(".feeder-buy").click(function(){
	if (modWidth > buyFeeder){

		$slime.animate({
        width: '-=' + buyFeeder + 'px',
        height: '-=' + buyFeeder + 'px'
    }, 500);;

		count++
		
		($slime).width(modWidth);
		modWidth -= buyFeeder;

		($slime).height(modHeight);
		modHeight -= buyFeeder;
		$bench.append('<div class="slime-feeder onBench" id="w' + count + '"><div class="stress-bar onBench"><div class="stress" label="w' + count + '"></div></div></div</div>');
		updateScore();
		buyFeeder = buyFeeder + 30;
		$(".feeder-buy span").html(buyFeeder)

		workerList['w' + count] = 0;
		$slimeFeeder = $('.slime-feeder');
		$stress = $(".stress");
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
	$bench.append('<div class="basic-worker onBench" id="w' + count + '"><div class="stress-bar onBench"><div class="stress" label="w' + count + '"></div></div></div</div>');
	updateScore();
	buyWorker = buyWorker + 2;
	$(".worker-buy span").html(buyWorker)

	workerList['w' + count] = 0;
	$basicWorker = $('.basic-worker');
	$stress = $(".stress");
	}
});

$(".instructions-minimize").click(function(){
    $(".instructions").slideToggle();
  });

$(".shop-minimize").click(function(){
    $(".shop").slideToggle();
  });

($slimeFood).click(function(){
	var foodClone = $('<div class="mini-food"></div>');
	$("body").append(foodClone);
	foodClone.css(
		"position", "absolute"
	)
	foodClone.animate({
		left: 153.78465270996094,
		top: 550,
		opacity: 0
	}, 1000, function(){
		foodClone.remove()
	})

	addSize();
	($slime).addClass('animated jello').delay(500).queue(function(){
		($slime).removeClass('animated jello'). dequeue();
	})
	updateScore();
})

setInterval(function slimeDecrease(e){

	if ($("#slime").width() > 100){
				decreaseEvenMoreSize();
				updateScore();
		}else if ($("#slime").width() > 50){
				decreaseMoreSize();
				updateScore();
		}else if ($("#slime").width() > 20){
				decreaseSize();
				updateScore();
		}
	}, 200);

setInterval(function(){
		workerFunction()
		feederFunction();
		doctorFunction();
		taskmasterFunction();
		updateScore();
}, 1000);
		


