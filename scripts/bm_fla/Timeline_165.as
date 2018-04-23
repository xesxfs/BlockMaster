package bm_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Timeline_165 extends MovieClip
   {
       
      
      public var b_yes6:MovieClip;
      
      public var b_yes7:MovieClip;
      
      public var b_activ16:MovieClip;
      
      public var b_activ15:MovieClip;
      
      public var b_yes8:MovieClip;
      
      public var b_activ14:MovieClip;
      
      public var b_yes9:MovieClip;
      
      public var b_activ8:MovieClip;
      
      public var b_activ13:MovieClip;
      
      public var b_yes10:MovieClip;
      
      public var b_activ9:MovieClip;
      
      public var b_activ12:MovieClip;
      
      public var b_yes11:MovieClip;
      
      public var b1:SimpleButton;
      
      public var b_yes12:MovieClip;
      
      public var b_activ11:MovieClip;
      
      public var b_activ6:MovieClip;
      
      public var b2:SimpleButton;
      
      public var b_yes13:MovieClip;
      
      public var c1:MovieClip;
      
      public var b_activ10:MovieClip;
      
      public var b_activ7:MovieClip;
      
      public var b3:SimpleButton;
      
      public var b_yes14:MovieClip;
      
      public var b_activ4:MovieClip;
      
      public var c2:MovieClip;
      
      public var b4:SimpleButton;
      
      public var b_yes15:MovieClip;
      
      public var b_activ5:MovieClip;
      
      public var c3:MovieClip;
      
      public var c10:MovieClip;
      
      public var b_bac:SimpleButton;
      
      public var b10:SimpleButton;
      
      public var b5:SimpleButton;
      
      public var c11:MovieClip;
      
      public var b_yes16:MovieClip;
      
      public var c4:MovieClip;
      
      public var b_activ2:MovieClip;
      
      public var b11:SimpleButton;
      
      public var b6:SimpleButton;
      
      public var c12:MovieClip;
      
      public var c5:MovieClip;
      
      public var b_activ3:MovieClip;
      
      public var b12:SimpleButton;
      
      public var b7:SimpleButton;
      
      public var c13:MovieClip;
      
      public var c6:MovieClip;
      
      public var b_yes1:MovieClip;
      
      public var b13:SimpleButton;
      
      public var b8:SimpleButton;
      
      public var c14:MovieClip;
      
      public var c7:MovieClip;
      
      public var b_yes2:MovieClip;
      
      public var b_activ1:MovieClip;
      
      public var b14:SimpleButton;
      
      public var b9:SimpleButton;
      
      public var c15:MovieClip;
      
      public var c8:MovieClip;
      
      public var b_yes3:MovieClip;
      
      public var b15:SimpleButton;
      
      public var c16:MovieClip;
      
      public var b_yes4:MovieClip;
      
      public var c9:MovieClip;
      
      public var b16:SimpleButton;
      
      public var b_yes5:MovieClip;
      
      public function Timeline_165()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      public function drMenu() : void
      {
         if(MovieClip(parent).LIVEL == 0)
         {
            this.b_bac.visible = false;
         }
         else
         {
            this.b_bac.visible = true;
         }
         var _loc1_:* = 0;
         while(_loc1_ < MovieClip(parent).livels)
         {
            trace("ar " + _loc1_);
            if(MovieClip(parent).ARR[_loc1_] == 0 || MovieClip(parent).ARR[_loc1_] == 1)
            {
               this["b_yes" + (_loc1_ + 1)].visible = false;
            }
            if(MovieClip(parent).ARR[_loc1_] == 0)
            {
               this["b_activ" + (_loc1_ + 1)].gotoAndStop(2);
               this["c" + (_loc1_ + 1)].alpha = 0.3;
               this["b" + (_loc1_ + 1)].visible = false;
            }
            if(MovieClip(parent).ARR[_loc1_] == 1)
            {
               this["b_activ" + (_loc1_ + 1)].gotoAndStop(1);
               this["c" + (_loc1_ + 1)].alpha = 1;
               this["b" + (_loc1_ + 1)].visible = true;
            }
            if(MovieClip(parent).ARR[_loc1_] == 2)
            {
               this["b_activ" + (_loc1_ + 1)].gotoAndStop(2);
               this["b_yes" + (_loc1_ + 1)].visible = true;
            }
            _loc1_++;
         }
      }
      
      function frame1() : *
      {
         stop();
         this.b_bac.addEventListener(MouseEvent.MOUSE_DOWN,MovieClip(parent).be_bac);
         this.drMenu();
      }
      
      function frame2() : *
      {
         stop();
         this.b_bac.addEventListener(MouseEvent.MOUSE_DOWN,MovieClip(parent).be_bac);
         this.drMenu();
      }
   }
}
