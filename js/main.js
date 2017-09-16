console.log('help me')

var $slime = $("#slime");
var $slimeFood = $("#slime-food");
var sLeft = $slime.position();
var modWidth = 1;
var modHeight = 1;



($slimeFood).click(function(){

  $($slime).width( modWidth);
  modWidth += 0.1;

  $($slime).height( modHeight);
  modHeight += 0.1;

})

 