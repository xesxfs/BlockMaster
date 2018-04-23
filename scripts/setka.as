package
{
   import flash.display.MovieClip;
   
   public dynamic class setka extends MovieClip
   {
       
      
      public var setkaFree:Boolean;
      
      public var blokName;
      
      public var xSetka:Number;
      
      public var ySetka:Number;
      
      public var g:Number;
      
      public var f:Number;
      
      public var h:Number;
      
      public var parentSetka:setka;
      
      public var isPath:Boolean;
      
      public function setka()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3,3,this.frame4);
      }
      
      function frame1() : *
      {
         this.setkaFree = true;
         this.blokName = 0;
         stop();
         this.xSetka = 0;
         this.ySetka = 0;
         this.g = 0;
         this.f = 0;
         this.h = 0;
         this.parentSetka = null;
         this.isPath = false;
      }
      
      function frame2() : *
      {
         this.setkaFree = false;
         stop();
      }
      
      function frame3() : *
      {
         this.setkaFree = true;
         this.blokName = 0;
         stop();
      }
      
      function frame4() : *
      {
         this.setkaFree = true;
         this.blokName = 0;
         stop();
      }
   }
}
