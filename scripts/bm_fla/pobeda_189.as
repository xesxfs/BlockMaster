package bm_fla
{
   import flash.display.MovieClip;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public dynamic class pobeda_189 extends MovieClip
   {
       
      
      public var moviek_and_flashka:MovieClip;
      
      public function pobeda_189()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame2() : *
      {
         stop();
      }
      
      function frame3() : *
      {
         navigateToURL(new URLRequest("http://www.playogames.com"),"_blank");
         stop();
      }
   }
}
