package bm_fla
{
   import flash.display.MovieClip;
   
   public dynamic class Timeline_113 extends MovieClip
   {
       
      
      public function Timeline_113()
      {
         super();
         addFrameScript(0,this.frame1,12,this.frame13,31,this.frame32);
      }
      
      function frame1() : *
      {
         if(MovieClip(parent.parent).lang1 == "ru")
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
