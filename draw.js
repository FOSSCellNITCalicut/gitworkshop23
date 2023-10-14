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
//

//BEGIN : Mohammed Ameen
//Joel John code


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
   // code is running

}

shell();

//END : Mohammed Ameen
//Joel John



