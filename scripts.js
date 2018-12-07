/*----Portfolio Circles Javascript Logic----*/

//Get initial position of the circles on the web pages, dependent on page position on load
var circles = document.getElementsByClassName("circles");
var initial = {};
for(var i = 0; i < circles.length; i++){
  initial[i] = getPosition(circles[i]);
  if(document.documentElement.scrollTop > 0){
    initial[i].y = initial[i].y + document.documentElement.scrollTop;
  }
}

//Add event listener to each of the circles
function update(){
  for(var i = 0; i < circles.length; i++){
    var position = getPosition(circles[i]);
    circles[i].scroll(scrollingFun(circles[i], initial[i], position));
  }
}

//If the page begins to scroll below the circles, add class. If it scrolls above the circles, remove the class
function scrollingFun(el, initial, position){
  // console.log("This is the initial: " + initial.y);
  if(initial.y < document.documentElement.scrollTop + (window.innerHeight / 2)){
    el.classList.add("pretty");
  }
  if (initial.y > document.documentElement.scrollTop + (window.innerHeight / 2)) {
    el.classList.remove("pretty");
  }
}

//Function to get the circle's initial positions upon loading
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while(el) {
    if(el.tagName == "BODY"){
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

//Keep listening for the event listener
window.addEventListener("scroll", update, false);
window.addEventListener("resize", update, false);

