package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class Timeline_135 extends MovieClip
   {
       
      
      public var b_more_games:SimpleButton;
      
      public var b_help:SimpleButton;
      
      public var b_menu:SimpleButton;
      
      public function Timeline_135()
      {
         super();
         addFrameScript(0,this.frame1,12,this.frame13,31,this.frame32);
      }
      
      function frame1() : *
      {
         if(MovieClip(parent).lang1 == "ru")
         {
            gotoAndPlay("ru");
         }
         else
         {
            gotoAndPlay("en");
         }
      }
      
      function frame13() : *
      {
         stop();
      }
      
      function frame32() : *
      {
         stop();
      }
   }
}
