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
     this.x = 100; // Set to 0 for applying velocity to X
                   // Set to 300 for applying velocity to Y
                   // Set to 100 for applying gravity

     this.y = 300; // Set to 300 for applying velocity to X
                   // Set to 0 for applying velocity to Y
                   // Set to 300 for applying gravity

     this.radius = 15;

     this.gravity = 0.5;
     this.velX = 0;
     this.velY = 0;


     this.fricVelX = 0;
     this.fricVelY = 0;
     this.speed = 0.0;
     this.friction = 0.01;
     this.angle = 0.0;

     var that = this;

     this.applyToVelocity  = false; // Applies velocity if true, but is set to false
     this.applyGravity = false; // Applies gravity when true, but set to false
     this.applyFric = false;

     this.canvas = canvas;
     this.context = context;
   }

   /*
    *
    */
   update(e)
   {
     /*
      *
      */
     if(this.applyToVelocity === true)
     {
       // Calculated velocity and applys to X
       /*this.expired = (new Date() - this.startTime) / 1000;
       this.x = this.expired * this.distance / this.totalTime;*/

       this.applyVelocity();

       console.log(this.x);
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

     /*
      *
      */
     else if(this.applyFric === true)
     {
       this.applyFriction();

       console.log(this.x);
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
   applyVelocity()
   {
     this.speed = Math.sqrt((this.velX * this.velX) + (this.velY * this.velY));
     this.angle = Math.atan2(this.velY, this.velX);

     this.velX = Math.cos(this.angle) * this.speed;
     this.velY = Math.sin(this.angle) * this.speed;

     this.x += this.velX;
     this.y += this.velY;
   }

   /*
    *
    */
   applyGravity()
   {

   }

   /*
    *
    */
   applyFriction()
   {
     this.speed = Math.sqrt((this.fricVelX * this.fricVelX) + (this.fricVelY * this.fricVelY));
     this.angle = Math.atan2(this.fricVelY, this.fricVelX);

     if(this.speed > this.friction)
     {
       this.speed -= this.friction;
     }
     else
     {
        this.speed = 0;
     }

     this.fricVelX = Math.cos(this.angle) * this.speed;
     this.fricVelY = Math.sin(this.angle) * this.speed;

     this.x += this.fricVelX;
     this.y += this.fricVelY;
   }

   /*
    *
    */
   applyVelocityValues()
   {
     this.x = 400;
     this.y = 500;
     this.radius = 15;

     this.gravity = 0.5;

     if(isNaN(document.getElementById("x-vel-input").value))
     {
       this.velX = 0;
     }
     else
     {
       this.velX = document.getElementById("x-vel-input").value;
     }

     if(isNaN(document.getElementById("y-vel-input").value))
     {
       this.velY = 0;
     }
     else
     {
       this.velY = document.getElementById("y-vel-input").value;
     }

     this.applyToVelocity = true;
     this.applyGravity = false;
     this.applyFric = false;
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

     this.applyToVelocity = false;
     this.applyGravity = true;
     this.applyFric = false;
   }

   /*
    *
    */
   applyFrictionValues()
   {
     this.x = 400;
     this.y = 500;
     this.radius = 15;

     if(isNaN(document.getElementById("x-velocity-input").value))
     {
       this.fricVelX = 0;
     }
     else
     {
       this.fricVelX = document.getElementById("x-velocity-input").value;
     }

     if(isNaN(document.getElementById("y-velocity-input").value))
     {
       this.fricVelY = 0;
     }
     else
     {
       this.fricVelY = document.getElementById("y-velocity-input").value;
     }


     this.applyToVelocity = false;
     this.applyGravity = false;
     this.applyFric = true;
   }

 }
