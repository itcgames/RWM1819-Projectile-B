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
     this.x = 100;
     this.y = 300;
     this.radius = 15;

     this.distance = 1000; // Distance in number of pixels,
                          // change to increase speed
     this.totalTime = 10;
     this.startTime = new Date(); // The time at which the code starts
     this.expired = 0; // The expired time in seconds

     this.gravity = 0.5;
     this.velX = (Math.random() * +15) + 5;
     this.velY = (Math.random() * -15) - 5;

     var that = this;

     this.applyToX = false; // Applies velocity to X if true, but is set to false
     this.applyToY = false; // Applies velocity to Y if true, but is set to false
     this.applyGravity = false;

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

     /*
      *
      */
     if(this.applyToX === true)
     {
       // Calculated velocity and applys to X
       /*this.expired = (new Date() - this.startTime) / 1000;
       this.x = this.expired * this.distance / this.totalTime;*/
       this.x += this.velX;
       console.log(this.x);
     }

     /*
      *
      */
     else if(this.applyToY === true)
     {
       // Applys velocity to Y
       /*this.expired = (new Date() - this.startTime) / 1000;
       this.y = this.expired * this.distance / this.totalTime;*/
       this.y += this.velY;
       console.log(this.y);
     }

     /*
      *
      */
     else if(this.applyGravity === true)
     {
       this.velY += this.gravity;
       this.y += this.velY;
       console.log(this.y);
     }

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

   /*
    *
    */
   applyXValues()
   {
     this.x = 0;
     this.y = 300;
     this.radius = 15;

     this.gravity = 0.5;
     this.velY = (Math.random() * -15) - 5;

     this.applyToX = true;
     this.applyToY = false;
     this.applyGravity = false;
   }

   /*
    *
    */
   applyYValues()
   {
     this.x = 300;
     this.y = 0;
     this.radius = 15;

     this.gravity = 0.5;
     this.velY = (Math.random() * -15) - 5;

     this.applyToX = false;
     this.applyToY = true;
     this.applyGravity = false;
   }

   /*
    *
    */
   applyGravityValues()
   {
     this.x = 300;
     this.y = 600;
     this.radius = 15;

     this.gravity = 0.5;
     this.velY = (Math.random() * -15) - 5;

     this.applyToX = false;
     this.applyToY = false;
     this.applyGravity = true;
   }

 }
