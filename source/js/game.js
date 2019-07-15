$(document).ready(function(){

	function ImageSwitcher(choices, i) {
		i = 0;
		
		this.Next = function() {
			hideCurrentImage();
			showNextImage();
		}
		
		var hideCurrentImage = function() {
			if(choices){
				choices[i].style.visibility = "hidden";
				i += 1;
			}
		}

		var showNextImage = function() {
			if(choices){
				if(i == (choices.length)) {
					i = 0;
				}
				choices[i].style.visibility = "visible";
			}
		}
	}
  
  	var pants = $(".pant");
  	var chestPlates = $(".chestplate");
	var helmets = $(".helmet");
	var shoes = $(".shoe");
	var shields = $(".shield");
	var weapons = $(".weapon");

	var pantPicker = new ImageSwitcher(pants);
	document.getElementById("pantButton").onclick = function() {pantPicker.Next(); };

	var chestPlatePicker = new ImageSwitcher(chestPlates);
	document.getElementById("chestPlateButton").onclick = function() {chestPlatePicker.Next(); };

	var helmetPicker = new ImageSwitcher(helmets);
	document.getElementById("helmetButton").onclick = function() {helmetPicker.Next(); };

	var shoePicker = new ImageSwitcher(shoes);
	document.getElementById("shoeButton").onclick = function() {shoePicker.Next(); };

	var shieldPicker = new ImageSwitcher(shields);
	document.getElementById("shieldButton").onclick = function() {shieldPicker.Next(); };

	var weaponPicker = new ImageSwitcher(weapons);
	document.getElementById("weaponButton").onclick = function() {weaponPicker.Next(); };

});


