/**
 * main is the entry point for Javascript programs.
 *
 */

 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 14:34 3 November 2018
 // Finished at
 // Time taken:
 // Known bugs:

 var gameGlobal = {};

 function main()
 {
   /*
   this.projectile = new Projectile();

   this.projectile.update();
   this.projectile.draw();
   window.requestAnimationFrame(main);
   */

   var game = new Game();
	 gameGlobal.game = game;
   game.initWorld();
 }
