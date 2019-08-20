/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,a) {
  this.change = false;
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  };
  this.moveRightLeft = function (a) {
    this.left = this.left + a;
  };
  this.moveDownUp = function (a) {
    this.top = this.top + a;
  };

  this.moveAround = function () {
    if (!this.change) {
      if (this.left < window.innerWidth - this.size) {
        this.moveRightLeft(a);
      } else if (this.top < window.innerHeight - this.size) {
        this.moveDownUp(a);
      } else {
        this.change = true;
      }

    }
    if (this.change) {
      if (this.left > 0) {
        this.moveRightLeft(-a);
      } else if (this.top > 0) {
        this.moveDownUp(-a);
      } else {
        this.change = false;
      }
    }
  }
}

var diabay = new Hero('diabay.jpg', 20, 30, 100, 10);
var diabay2 = new Hero('diabay.jpg', 20, 30, 100, 20);
function start(){
  diabay.moveAround();
  diabay2.moveAround();
  document.getElementById('game').innerHTML = diabay.getHeroElement();
  document.getElementById('game1').innerHTML = diabay2.getHeroElement();
  setTimeout(start, 10)
}
start();