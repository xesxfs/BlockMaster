package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class Timeline_9 extends MovieClip
   {
       
      
      public var pogbtn:SimpleButton;
      
      public function Timeline_9()
      {
         super();
         addFrameScript(0,this.frame1,64,this.frame65,133,this.frame134);
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
      
      function frame65() : *
      {
         stop();
      }
      
      function frame134() : *
      {
         stop();
      }
   }
}
