//Displays and handles the colour palette.
function ColourPalette() {
  //a list of web colour strings
  this.colours = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "orange",
    "pink",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ];
  //make the start colour be black
  this.selectedColour = "black";

  var self = this;

  var colourClick = function () {
    //remove the old border
    var current = select("#" + self.selectedColour + "Switch");
    current.style("border", "0");

    //get the new colour from the id of the clicked element
    var c = this.id().split("Switch")[0];

    //set the selected colour and fill and stroke
    self.selectedColour = c;
    fill(c);
    stroke(c);

    //add a new border to the selected colour
    this.style("border", "2px solid blue");
  };

  //load in the colours
  this.loadColours = function () {
    //set the fill and stroke properties to be black at the start of the programme
    //running
    fill(this.colours[0]);
    stroke(this.colours[0]);

    //for each colour create a new div in the html for the colourSwitches
    for (var i = 0; i < this.colours.length; i++) {
      var colourID = this.colours[i] + "Switch";

      //using p5.dom add the switch to the palette and set its background colour
      //to be the colour value.
      var colourSwitch = createDiv();
      colourSwitch.class("colourSwitches");
      colourSwitch.id(colourID);

      select(".colourPalette").child(colourSwitch);
      select("#" + colourID).style("background-color", this.colours[i]);
      colourSwitch.mouseClicked(colourClick);
    }

    select(".colourSwitches").style("border", "2px solid blue");
  };
  //call the loadColours function now it is declared
  this.loadColours();
}
