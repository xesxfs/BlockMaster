package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.StageDisplayState;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public dynamic class Timeline_153 extends MovieClip
   {
       
      
      public var b:SimpleButton;
      
      public function Timeline_153()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      public function fs(param1:Event) : void
      {
         stage.displayState = StageDisplayState.FULL_SCREEN;
         gotoAndStop(2);
      }
      
      public function fs_out(param1:Event) : void
      {
         stage.displayState = StageDisplayState.NORMAL;
         gotoAndStop(1);
      }
      
      function frame1() : *
      {
         this.b.addEventListener(MouseEvent.MOUSE_DOWN,this.fs);
         stop();
      }
      
      function frame2() : *
      {
         this.b.addEventListener(MouseEvent.MOUSE_DOWN,this.fs_out);
         stop();
      }
   }
}
