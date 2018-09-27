const grid = document.getElementById("grid");

// default grid
function defaultGrid(x) {
	console.log("hello");
	for (j = 0; j < x; j++) {
		for (i = 0; i < x; i++) {
      		let gridCells = document.createElement("div");
      		gridCells.classList.add("blocks");
	       	gridCells.style.width = (600/x) + "px";
	       	gridCells.style.height = (600/x) + "px";
			    grid.appendChild(gridCells);
		}
	}
	
  let gridBlocks = grid.querySelectorAll('.blocks');
  
  if (gridBlocks) {
    gridBlocks.forEach(function (element) {
      element.addEventListener("mouseover", blocksDraw);
    });
  }
}

// resize grid


// hover over blocks (black color)
function blocksDraw(e) {
  console.log(this);
  this.classList.add("visible");
}

//hover over blocks - RAINBOW PSYCHEDELIC

//function psychGrid(e) {
  //let gridBlocks = grid.querySelectorAll('.blocks');
  //let randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  
  //if (gridBlocks) {
    //gridBlocks.forEach(function (element) {
      //element.addEventListener("mouseover, function(){
        //element.classList.add("visiblePsych");
        //element.style.backgroundColor = randomColor;
      //}
    //}
  //console.log("erased :D!");
  //}



// erase grid
function eraseGrid(e) {
  let gridBlocks = grid.querySelectorAll('.blocks');
  
  if (gridBlocks) {
    gridBlocks.forEach(function (element) {
      element.classList.remove("visible");
    });
  }
  console.log("erased :D!");
}


window.onload = defaultGrid(16);

//buttons
document.getElementById("erase").addEventListener("click", eraseGrid);
//document.getElementById("psych").addEventListener("click", psychGrid);