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

ab()
demo()
demo(10)
demo(



// 

