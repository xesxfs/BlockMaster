package bm_fla
{
   import flash.display.MovieClip;
   
   public dynamic class Timeline_127 extends MovieClip
   {
       
      
      public function Timeline_127()
      {
         super();
         addFrameScript(0,this.frame1,10,this.frame11,49,this.frame50,192,this.frame193);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame11() : *
      {
         gotoAndStop(1);
      }
      
      function frame50() : *
      {
         if(MovieClip(parent).LIVEL < 16)
         {
            MovieClip(parent).b_next_level.visible = true;
            MovieClip(parent).num.visible = true;
            MovieClip(parent).num.gotoAndStop(MovieClip(parent).LIVEL + 1);
            MovieClip(parent).num.blesk.gotoAndPlay(2);
            MovieClip(parent).pobeda.visible = false;
            if(MovieClip(parent).lang1 == "ru")
            {
               MovieClip(parent).num.b.gotoAndStop(1);
            }
            else
            {
               MovieClip(parent).num.b.gotoAndStop(2);
            }
         }
         else if(MovieClip(parent).lang1 == "ru")
         {
            MovieClip(parent).pobeda.visible = true;
            MovieClip(parent).pobeda.gotoAndStop(2);
         }
         else
         {
            MovieClip(parent).pobeda.visible = true;
            MovieClip(parent).pobeda.gotoAndStop(3);
         }
      }
      
      function frame193() : *
      {
         gotoAndStop(1);
      }
   }
}
