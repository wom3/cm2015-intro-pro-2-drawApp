function LineToTool() {
  this.icon = "assets/lineTo.jpg"; // toolbar icon for this tool
  this.name = "LineTo"; // tool identifier shown in UI

  var startMouseX = -1; // starting X coordinates for the line; -1 means "not set"
  var startMouseY = -1; // starting Y coordinates for the line; -1 means "not set"
  var drawing = false; // true while a line is being dragged

  this.draw = function () {
    if (mouseIsPressed) {
      // mouse button currently down
      if (startMouseX == -1) {
        // first frame of the press: initialize start
        startMouseX = mouseX; // capture start X
        startMouseY = mouseY; // capture start Y
        drawing = true; // mark that we're drawing
        loadPixels(); // save canvas pixels for non-destructive preview
      } else {
        updatePixels(); // restore saved pixels so preview doesn't accumulate
        line(startMouseX, startMouseY, mouseX, mouseY); // draw previous line
      }
    } else if (drawing) {
      // mouse released and we were drawing
      drawing = false; // stop drawing
      startMouseX = -1; // reset start X for next operation
      startMouseY = -1; // reset start Y for next operation
    }
  };
}
