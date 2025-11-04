function RectangleTool() {
  this.icon = "assets/rectangleTool.png";
  this.name = "Rectangle";

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      } else {
        updatePixels();
        var currX = mouseX;
        var currY = mouseY;
        var x = Math.min(startMouseX, currX); // x,y should be the top-left corner
        var y = Math.min(startMouseY, currY);
        var w = Math.abs(currX - startMouseX); // w,h ought to be positive
        var h = Math.abs(currY - startMouseY);

        push();
        noFill();
        rect(x, y, w, h);
        pop();
      }
    } else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
