function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
$('img').each(function(){
  var a = randomInt(20,200).toString();
  var b = randomInt(20,400).toString();
  $(this).attr('src','http://placehold.it/'+a+'x'+a);
  if(randomInt(0,4)==2 || a<50 )
  $(this).parent().css('background','none');
});
function someAction(e) {
  if (e.deltaY > 0) {
      $('header').slideUp( "slow", function() {});
  }
  else if (e.deltaY < 0) {
    $('header').slideDown( "slow", function() {});
  }
}
window.addEventListener('mousewheel', someAction, false);
window.addEventListener('wheel', someAction, false);
var data = {array: ['первое','второе','третье']};
var text = 'поиск';
function createContent(){
  $('input').attr('placeholder','');
  text = data.array[randomInt(0,data.array.length)]
}
setInterval(function(){
  var inp = $('input');
  if(inp.val()==''&&!inp.is(":focus")){
    inp.attr('placeholder')!=text?inp.attr('placeholder', inp.attr('placeholder')+ text[inp.attr('placeholder').length]):createContent();    
  }
},190);
$(window).mousemove(function(e) {
 // if (!e) ee = window.event;
  if (window.event.shiftKey){
    var w = $(window).width();
    var wh = $(window).height();
   var v = mapValues( e.pageX,0,w,-45,45).toString();
   var h = mapValues( e.pageY,0,wh,45,-45).toString();
  $('html').attr('style','rotateX('+h+'deg) transform:rotateZ('+v+'deg); -webkit-transform: rotateX('+h+'deg) rotate('+v+'deg)');
  $('html').css('box-shadow' ,'-60px 60px 15px #eee;');
  }
  if (window.event.altKey){
    $('html').attr('style','rotateX(0deg) transform:rotateZ(0deg); -webkit-transform: rotateX(0deg) rotate(0deg)');
  }
    //document.Form1.posx.value = e.pageY;
});

function mapValues(x, in_min, in_max, out_min, out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}