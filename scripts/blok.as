package
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public dynamic class blok extends MovieClip
   {
       
      
      public var xSetka:Number;
      
      public var ySetka:Number;
      
      public var pointsNumb:Number;
      
      public var namer:Number;
      
      public var colorBlok:String;
      
      public function blok()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         this.addEventListener(MouseEvent.MOUSE_DOWN,MovieClip(parent).startDrug);
      }
   }
}
