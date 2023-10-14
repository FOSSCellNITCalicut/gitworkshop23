// Write your code here
// Do not Import anything
/*
* Your contribution should ideally be like this
* Try to leave no gaps so that no one can mess with your code :)
*
* // BEGIN : YOURNAME
* 	code()
* 	...
* // END : YOURNAME
*/

function square(side) {
   repeat(4, function () {
      forward(side);
      right(90);
   });
}

function demo() {
   hideTurtle();
   colour(0,0,255,1);
   for(s = 100; s > 0; s -= 10) {
      square(s);
      right(36);
   }
}

demo()
demo(10)
demo()
demo(15)
demo()



// 

//BEGIN : Mohammed Ameen


function shell() {
   hideTurtle();
   colour(255,0,255,1);
   // for(s = 100; s > 0; s -= 10) {
   //    square(s);
   //    right(36);
   // }

	w = 1;
	o = 1;
	f = 100;
	for(s = 0; s < 600; ++s){
	   width(w); 
	   goto(-200, -100);
	   colour(100, 0, 0, o);
	   forward(f);
	   left(5);
	   o -= 0.01;
	   f -= 1;
	   w += 0.5;
  }

}

shell();

//END : Mohammed Ameen



//BEGIN: Vivek
function colorfulPattern() {
   const canvas = document.getElementById('myCanvas'); // Get a reference to an HTML5 Canvas element
   const ctx = canvas.getContext('2d'); // Create a 2D drawing context
 
   let x = canvas.width / 2;
   let y = canvas.height / 2;
   let radius = 100;
   let angle = 0;
   let hue = 0;
 
   function drawCircle() {
     ctx.beginPath();
     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
     ctx.fillStyle = `hsl(${hue}, 80%, 50%)`; // Use HSL color for variety
     ctx.fill();
     ctx.closePath();
   }
 
   function updateParams() {
     radius -= 1;
     angle += 5;
     hue = (hue + 5) % 360;
   }
 
   function animate() {
     if (radius > 0) {
       drawCircle();
       updateParams();
       requestAnimationFrame(animate);
     }
   }
 
   animate();
 }
 
 colorfulPattern();

 //END: Vivek