function setColor(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
  }
}
function BodysetColor(backgroundColor,color) {
  var target = document.querySelector('body');
  target.style.backgroundColor=backgroundColor;
  target.style.color=color;
  document.querySelector('ol').style.borderColor=color;
  document.querySelector('h1').style.borderColor=color;
}


function nightDayHandler(self){
  if(self.value === 'night'){
    BodysetColor('black','white')
    self.value ='day';
    setColor('white');

  } else {
    BodysetColor('white','black')
    self.value ='night';
    setColor('black');

    }
}
