package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class Timeline_148 extends MovieClip
   {
       
      
      public var b1:SimpleButton;
      
      public var b1_:SimpleButton;
      
      public function Timeline_148()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         if(MovieClip(parent).lang1 == "ru")
         {
            this.b1_.visible = false;
            this.b1.visible = true;
         }
         else
         {
            this.b1.visible = false;
            this.b1_.visible = true;
         }
         stop();
      }
   }
}
