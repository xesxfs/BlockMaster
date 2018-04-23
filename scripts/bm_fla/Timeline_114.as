package bm_fla
{
   import flash.display.MovieClip;
   
   public dynamic class Timeline_114 extends MovieClip
   {
       
      
      public function Timeline_114()
      {
         super();
         addFrameScript(0,this.frame1,260,this.frame261,522,this.frame523);
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
      
      function frame261() : *
      {
         gotoAndPlay("ru");
      }
      
      function frame523() : *
      {
         this.gotoAndPlay("en");
      }
   }
}
