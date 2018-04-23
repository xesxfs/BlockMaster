package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Timeline_160 extends MovieClip
   {
       
      
      public var b1:SimpleButton;
      
      public var b_bac:SimpleButton;
      
      public function Timeline_160()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      function frame1() : *
      {
         stop();
         this.b_bac.addEventListener(MouseEvent.MOUSE_DOWN,MovieClip(parent).b_menu_help);
      }
      
      function frame2() : *
      {
         stop();
         this.b_bac.addEventListener(MouseEvent.MOUSE_DOWN,MovieClip(parent).b_menu_help);
      }
   }
}
