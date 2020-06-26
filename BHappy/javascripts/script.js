var imgadr= ['images/sunflower.jpg','images/money.jpg','images/destination.jpg'];
var headArray= ['Happiness is Not: Feeling Good All The Time','Happiness is Not: Being Rich or Affording Everything You Want', 'Happiness is Not: A Final Destination'];
var cnt= 0;
var timer;
//
function sliderTimer()
{
  timer= setInterval(slider, 3500);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
}

function next()
{
  clearInterval(timer);

  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];

	sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);

  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];

  sliderTimer();
}
