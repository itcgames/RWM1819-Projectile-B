/**
 *
 *
 */

 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 16:01 3 November 2018
 // Finished at
 // Time taken:
 // Known bugs:

 /*
  *
  */
 class Game
 {
   constructor()
   {
     this.canvas = null;
     this.context = null;

     this.projectile;
   }

   initWorld()
   {

     var velocityButton = document.getElementById("applyVelocity");
     var gravityButton = document.getElementById("applyGravity");
     var frictionButton = document.getElementById("applyFriction");
     var bounceButton = document.getElementById("applyBounce");

     var that = this;


     this.canvas = document.getElementById("canvas");
     this.context = this.canvas.getContext("2d");


     this.projectile = new Projectile(this.canvas, this.context);

     //
     velocityButton.addEventListener("click", function(){
       that.projectile.applyVelocityValues();
       console.log("Velocity Pressed!");
     });

     //
     gravityButton.addEventListener("click", function(){
       that.projectile.applyGravityValues();
       console.log("Gravity Pressed!");
     });

     //
     frictionButton.addEventListener("click", function(){
       that.projectile.applyFrictionValues();
       console.log("Friction Pressed!");
     });

     //
     bounceButton.addEventListener("click", function(){
       that.projectile.applyBounceValues();
       console.log("Bounce Pressed!");
     });

     console.log("Initialising game world");
     this.update();
   }

   update()
   {
     gameGlobal.game.draw();

     gameGlobal.game.projectile.update();

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   draw()
   {
     this.context.clearRect(0 ,0, gameGlobal.game.canvas.width, gameGlobal.game.canvas.height);

     gameGlobal.game.projectile.draw();
   }
 }
