/**
 *
 *
 */

 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 14:41 3 November 2018
 // Finished at 16:40 4 November 2018
 // Time taken: 3 hours 30 Minutes
 // Known bugs: None

 /*
  *
  */
 class Projectile
 {
   /*
    *
    */
   constructor(canvas, context)
   {
     this.x = 10;
     this.y = 300;
     this.radius = 15;

     this.distance = 1000; // Distance in number of pixels,
                          // change to increase speed
     this.totalTime = 10;
     this.startTime = new Date(); // The time at which the code starts
     this.expired = 0; // The expired time in seconds


     var that = this;

     this.canvas = canvas;
     this.context = context;
   }

   /*
    *
    */
   update(e)
   {
     //Old formula don't use
     /*
     this.time = this.time + this.inc;
     this.x = this.x + this.velX * this.inc;
     this.y = this.y + this.velY * this.inc;
     */

     // Calculated velocity and applys to X
     this.expired = (new Date() - this.startTime) / 1000;
     this.x = this.expired * this.distance / this.totalTime;

     // Applys velocity to Y
     //this.y = this.expired * this.distance / this.totalTime;

     //Screen Warp, stops applying velocity when screen warp occurs
     /*
     if(this.x > 825)
     {
       this.x = -15;
     }
     else if (this.x < -25)
     {
       this.x = 815;
     }

     if(this.y > 625)
     {
       this.y = -15;
     }
     else if (this.y < -25)
     {
       this.y = 615;
     }
     */

     console.log(this.x);

     console.log(this.y);
   }

   /*
    *
    */
   draw()
   {
     this.circle(this.context, this.x, this.y, this.radius, "black");
   }


   /*
    *
    */
   circle(context, x, y, r, colour)
   {
     x = Math.round(x);
     y = Math.round(y);

     var temp = context.strokeStyle;

     this.context.beginPath();
     this.context.arc(x, y, r, 0, 2 * Math.PI);
     this.context.strokeStyle = colour;
     this.context.lineWidth = 4;
     this.context.stroke();
     this.context.strokeStyle = temp;
   }

 }
