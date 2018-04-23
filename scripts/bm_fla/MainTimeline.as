package bm_fla
{
   import com.google.analytics.components.FlashTracker;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.FullScreenEvent;
   import flash.events.MouseEvent;
   import flash.events.ProgressEvent;
   import flash.events.TimerEvent;
   import flash.external.ExternalInterface;
   import flash.geom.ColorTransform;
   import flash.media.SoundMixer;
   import flash.media.SoundTransform;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   import flash.ui.Mouse;
   import flash.utils.Dictionary;
   import flash.utils.Timer;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var adBox:MovieClip;
      
      public var __id0_:FlashTracker;
      
      public var __setPropDict:Dictionary;
      
      public var __lastFrameProp:int = -1;
      
      public var kursori:MovieClip;
      
      public var ogames:MovieClip;
      
      public var Opana:MovieClip;
      
      public var opana:MovieClip;
      
      public var startSetka:MovieClip;
      
      public var plizz:MovieClip;
      
      public var livel_n:TextField;
      
      public var fs_bg:MovieClip;
      
      public var dmenu:MovieClip;
      
      public var logo:MovieClip;
      
      public var replay_b:SimpleButton;
      
      public var b_br:SimpleButton;
      
      public var finishSetka:MovieClip;
      
      public var helper:MovieClip;
      
      public var pobeda:MovieClip;
      
      public var pole_bg:MovieClip;
      
      public var topper:MovieClip;
      
      public var num:MovieClip;
      
      public var menuha:MovieClip;
      
      public var b_next_level:SimpleButton;
      
      public var sounds:MovieClip;
      
      public var prohod_level:Number;
      
      public var MAX_LIVEL:Number;
      
      public var percent:Number;
      
      public var lang1;
      
      public var game_first;
      
      public var livels;
      
      public var saveFile;
      
      public var ARR:Array;
      
      public var activGame;
      
      public var startOne;
      
      public var globalTempLivel;
      
      public var setkaX:Number;
      
      public var setkaY:Number;
      
      public var startX:Number;
      
      public var startY:Number;
      
      public var shag:Number;
      
      public var j1:Number;
      
      public var b_matrix:Array;
      
      public var bloks:Number;
      
      public var blokMass;
      
      public var pointsMass;
      
      public var pointsMassTop;
      
      public var setkaPoinnts;
      
      public var startBlokX;
      
      public var startBlokY;
      
      public var startBlokXreal;
      
      public var startBlokYreal;
      
      public var startBlokXrealMP;
      
      public var startBlokYrealMP;
      
      public var orDrag;
      
      public var DragX;
      
      public var porog;
      
      public var activBlok:Object;
      
      public var BLOKS:Number;
      
      public var LIVEL:Number;
      
      public var ROOM:Number;
      
      public var BLOKS_color:Object;
      
      public var startPathX:Number;
      
      public var startPathY:Number;
      
      public var endPathX:Number;
      
      public var endPathY:Number;
      
      public var pathLayer:AStarDetailed;
      
      public var MP;
      
      public function MainTimeline()
      {
         this.__setPropDict = new Dictionary(true);
         super();
         addFrameScript(0,this.frame1,7,this.frame8,401,this.frame402,402,this.frame403,408,this.frame409,416,this.frame417,423,this.frame424,430,this.frame431,437,this.frame438,444,this.frame445,451,this.frame452,458,this.frame459,465,this.frame466,472,this.frame473,479,this.frame480,486,this.frame487,493,this.frame494,500,this.frame501,508,this.frame509,515,this.frame516);
         addEventListener(Event.FRAME_CONSTRUCTED,this.__setProp_handler,false,0,true);
      }
      
      public function loadComplete(param1:Event) : *
      {
         var ofl_CustomMouseCursor:Function = null;
         var timerHandler:Function = null;
         var completeHandler:Function = null;
         ofl_CustomMouseCursor = function(param1:Event):*
         {
            kursori.x = stage.mouseX;
            kursori.y = stage.mouseY;
         };
         timerHandler = function(param1:TimerEvent):void
         {
            trace("tk tk tk");
         };
         completeHandler = function(param1:TimerEvent):void
         {
            trace("taimer stoped");
            gotoAndPlay("go");
         };
         this.loaderInfo.removeEventListener(Event.COMPLETE,this.loadComplete);
         this.loaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.loadProgress);
         stage.addChild(this.kursori);
         this.kursori.mouseEnabled = false;
         this.kursori.addEventListener(Event.ENTER_FRAME,ofl_CustomMouseCursor);
         Mouse.hide();
         var timer:Timer = new Timer(1000,11);
         timer.addEventListener(TimerEvent.TIMER,timerHandler);
         timer.addEventListener(TimerEvent.TIMER_COMPLETE,completeHandler);
         timer.start();
      }
      
      public function loadProgress(param1:ProgressEvent) : void
      {
         this.percent = param1.bytesLoaded / param1.bytesTotal * 100;
         this.plizz.proc.proc.process1.text = Math.round(this.percent) + "%";
      }
      
      public function playGame(param1:Event) : void
      {
         gotoAndPlay("play1");
      }
      
      public function start_pole() : *
      {
         var _loc1_:* = undefined;
         var _loc2_:* = 0;
         while(_loc2_ <= this.setkaX + 1)
         {
            this.setkaPoinnts[_loc2_] = new Array();
            _loc1_ = 0;
            while(_loc1_ <= this.setkaY + 1)
            {
               this.setkaPoinnts[_loc2_][_loc1_] = new setka();
               addChild(this.setkaPoinnts[_loc2_][_loc1_]);
               this.setkaPoinnts[_loc2_][_loc1_].x = this.startX + _loc2_ * this.shag;
               this.setkaPoinnts[_loc2_][_loc1_].y = this.startY + _loc1_ * this.shag;
               this.setkaPoinnts[_loc2_][_loc1_].xSetka = _loc2_;
               this.setkaPoinnts[_loc2_][_loc1_].ySetka = _loc1_;
               if(_loc2_ == 0)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc2_ == this.setkaX + 1)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc1_ == 0)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc1_ == this.setkaY + 1)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               _loc1_++;
            }
            _loc2_++;
         }
      }
      
      public function reset_pole() : *
      {
         var _loc1_:* = undefined;
         var _loc2_:* = 0;
         while(_loc2_ <= this.setkaX + 1)
         {
            _loc1_ = 0;
            while(_loc1_ <= this.setkaY + 1)
            {
               this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(1);
               if(_loc2_ == 0)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc2_ == this.setkaX + 1)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc1_ == 0)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               if(_loc1_ == this.setkaY + 1)
               {
                  this.setkaPoinnts[_loc2_][_loc1_].gotoAndStop(2);
               }
               _loc1_++;
            }
            _loc2_++;
         }
      }
      
      public function start_bloks(param1:Number) : *
      {
         var _loc2_:* = undefined;
         this.startSetka.x = this.startX + this.startPathX * this.shag;
         this.startSetka.y = this.startY + this.startPathY * this.shag;
         this.finishSetka.x = this.startX + this.endPathX * this.shag;
         this.finishSetka.y = this.startY + this.endPathY * this.shag;
         if(!this.activGame)
         {
            if(!this.startOne)
            {
               if(this.pathLayer)
               {
                  this.removeChild(this.pathLayer);
               }
            }
            this.activGame = true;
            this.reset_pole();
            _loc2_ = 1;
            while(_loc2_ <= this.blokMass.length - 1)
            {
               if(this.blokMass[_loc2_])
               {
                  this.removeChild(this.blokMass[_loc2_]);
                  delete this.blokMass[_loc2_];
               }
               _loc2_++;
            }
         }
         this.bloks = param1;
         var _loc3_:* = 1;
         while(_loc3_ <= param1)
         {
            this.blokMass[_loc3_] = new blok();
            addChild(this.blokMass[_loc3_]);
            _loc3_++;
         }
         this.startOne = false;
         this.menuha.visible = false;
         this.helper.visible = false;
      }
      
      public function start_bloks_setka(param1:Number) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:* = 1;
         while(_loc3_ <= param1)
         {
            this.blokMass[_loc3_].x = this.startX + this.blokMass[_loc3_].xSetka * this.shag;
            this.blokMass[_loc3_].y = this.startY + this.blokMass[_loc3_].ySetka * this.shag;
            this.blokMass[_loc3_].namer = _loc3_;
            this.pointsMass[_loc3_] = new Array();
            this.pointsMassTop[_loc3_] = new Array();
            _loc2_ = 1;
            while(_loc2_ <= this.blokMass[_loc3_].pointsNumb)
            {
               this.pointsMass[_loc3_][_loc2_] = new onePoint();
               this.blokMass[_loc3_].addChild(this.pointsMass[_loc3_][_loc2_]);
               this.pointsMassTop[_loc3_][_loc2_] = new onePointTop();
               this.blokMass[_loc3_].addChild(this.pointsMassTop[_loc3_][_loc2_]);
               _loc2_++;
            }
            _loc3_++;
         }
      }
      
      public function start_bloks_points(param1:Number) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:ColorTransform = null;
         var _loc4_:* = 1;
         while(_loc4_ <= param1)
         {
            _loc2_ = 1;
            while(_loc2_ <= this.blokMass[_loc4_].pointsNumb)
            {
               this.pointsMass[_loc4_][_loc2_].x = (this.pointsMass[_loc4_][_loc2_].xSetka - 1) * this.shag;
               this.pointsMass[_loc4_][_loc2_].y = (this.pointsMass[_loc4_][_loc2_].ySetka - 1) * this.shag;
               this.pointsMassTop[_loc4_][_loc2_].x = (this.pointsMass[_loc4_][_loc2_].xSetka - 1) * this.shag;
               this.pointsMassTop[_loc4_][_loc2_].y = (this.pointsMass[_loc4_][_loc2_].ySetka - 1) * this.shag;
               _loc3_ = new ColorTransform();
               _loc3_.color = this.blokMass[_loc4_].colorBlok;
               this.pointsMass[_loc4_][_loc2_].transform.colorTransform = _loc3_;
               _loc2_++;
            }
            _loc4_++;
         }
      }
      
      public function zero_bloks(param1:Number) : *
      {
         this.j1 = 1;
         while(this.j1 <= this.blokMass[param1].pointsNumb)
         {
            this.setkaPoinnts[Number(this.blokMass[param1].xSetka + this.pointsMass[param1][this.j1].xSetka - 1)][Number(this.blokMass[param1].ySetka + this.pointsMass[param1][this.j1].ySetka - 1)].gotoAndStop(1);
            this.j1++;
         }
      }
      
      public function test_setka() : *
      {
         var _loc1_:* = undefined;
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = 1;
         while(_loc4_ <= this.bloks)
         {
            _loc1_ = 1;
            while(_loc1_ <= this.blokMass[_loc4_].pointsNumb)
            {
               _loc2_ = Number(this.blokMass[_loc4_].xSetka + this.pointsMass[_loc4_][_loc1_].xSetka - 1);
               _loc3_ = Number(this.blokMass[_loc4_].ySetka + this.pointsMass[_loc4_][_loc1_].ySetka - 1);
               this.setkaPoinnts[_loc2_][_loc3_].gotoAndStop(2);
               this.setkaPoinnts[_loc2_][_loc3_].blokName = _loc4_;
               _loc1_++;
            }
            _loc4_++;
         }
      }
      
      public function startDrug(param1:Event) : void
      {
         if(this.activGame)
         {
            this.activBlok = param1.target.parent;
            this.activBlok.alpha = 0.9;
            this.MP.x = mouseX;
            this.MP.y = mouseY;
            this.MP.startDrag(true);
            this.MP.addEventListener(Event.ENTER_FRAME,this.DrugEnterFrame);
            this.MP.addEventListener(MouseEvent.MOUSE_UP,this.stopDrug);
            setChildIndex(this.MP,this.numChildren - 1);
            this.startBlokXrealMP = this.MP.x;
            this.startBlokYrealMP = this.MP.y;
         }
      }
      
      public function DrugEnterFrame(param1:Event) : void
      {
         var _loc2_:* = Math.abs(this.startBlokXrealMP - this.MP.x);
         var _loc3_:* = Math.abs(this.startBlokYrealMP - this.MP.y);
         if(_loc2_ > this.porog || _loc3_ > this.porog)
         {
            if(_loc2_ > _loc3_)
            {
               this.DragX = true;
               this.orDrag = true;
            }
            else
            {
               this.orDrag = true;
               this.DragX = false;
            }
         }
         var _loc4_:* = 0;
         if(this.DragX)
         {
            if(this.startBlokXrealMP - this.MP.x > 0)
            {
               _loc4_ = 1;
            }
            else
            {
               _loc4_ = -1;
            }
            if(Math.abs(this.startBlokXrealMP - this.MP.x) > this.shag)
            {
               this.zero_bloks(this.activBlok.namer);
               if(this.testBlokMovieX(-_loc4_))
               {
                  this.startBlokXrealMP = this.startBlokXrealMP - this.shag * _loc4_;
                  this.activBlok.x = this.activBlok.x - this.shag * _loc4_;
                  this.activBlok.xSetka = this.activBlok.xSetka - _loc4_;
                  this.test_setka();
                  this.sounds.gotoAndPlay("go1");
               }
            }
         }
         else
         {
            if(this.startBlokYrealMP - this.MP.y > 0)
            {
               _loc4_ = 1;
            }
            else
            {
               _loc4_ = -1;
            }
            if(Math.abs(this.startBlokYrealMP - this.MP.y) > this.shag)
            {
               this.zero_bloks(this.activBlok.namer);
               if(this.testBlokMovieY(-_loc4_))
               {
                  this.startBlokYrealMP = this.startBlokYrealMP - this.shag * _loc4_;
                  this.activBlok.y = this.activBlok.y - this.shag * _loc4_;
                  this.activBlok.ySetka = this.activBlok.ySetka - _loc4_;
                  this.test_setka();
                  this.sounds.gotoAndPlay("go1");
               }
            }
         }
      }
      
      public function stopDrug(param1:Event) : void
      {
         this.activBlok.alpha = 1;
         this.MP.stopDrag();
         setChildIndex(this.MP,1);
         this.MP.removeEventListener(Event.ENTER_FRAME,this.DrugEnterFrame);
         this.orDrag = false;
         this.test_setka();
         trace("stop");
         this.testPath();
      }
      
      public function normalX(param1:Number) : Number
      {
         var _loc2_:* = Math.round((param1 - this.shag / 2 - this.startX) / this.shag);
         return _loc2_;
      }
      
      public function normalY(param1:Number) : Number
      {
         var _loc2_:* = Math.round((param1 - this.shag / 2 - this.startY) / this.shag);
         return _loc2_;
      }
      
      public function testBlokMovieX(param1:Number) : Boolean
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = true;
         var _loc5_:* = 1;
         while(_loc5_ <= this.activBlok.pointsNumb)
         {
            _loc2_ = this.pointsMass[this.activBlok.namer][_loc5_].xSetka + this.activBlok.xSetka - 1 + param1;
            _loc3_ = this.pointsMass[this.activBlok.namer][_loc5_].ySetka + this.activBlok.ySetka - 1;
            if(!this.setkaPoinnts[_loc2_][_loc3_].setkaFree)
            {
               if(this.setkaPoinnts[_loc2_][_loc3_].blokName != this.activBlok.namer)
               {
                  _loc4_ = false;
               }
            }
            _loc5_++;
         }
         return _loc4_;
      }
      
      public function testBlokMovieY(param1:Number) : Boolean
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = true;
         var _loc5_:* = 1;
         while(_loc5_ <= this.activBlok.pointsNumb)
         {
            _loc2_ = this.pointsMass[this.activBlok.namer][_loc5_].xSetka + this.activBlok.xSetka - 1;
            _loc3_ = this.pointsMass[this.activBlok.namer][_loc5_].ySetka + this.activBlok.ySetka - 1 + param1;
            if(!this.setkaPoinnts[_loc2_][_loc3_].setkaFree)
            {
               if(this.setkaPoinnts[_loc2_][_loc3_].blokName != this.activBlok.namer)
               {
                  _loc4_ = false;
               }
            }
            _loc5_++;
         }
         return _loc4_;
      }
      
      public function testPath() : *
      {
         var _loc1_:* = undefined;
         var _loc2_:* = undefined;
         var _loc3_:* = 0;
         while(_loc3_ <= this.setkaX + 1)
         {
            _loc1_ = 0;
            while(_loc1_ <= this.setkaY + 1)
            {
               if(!this.setkaPoinnts[_loc3_][_loc1_].setkaFree)
               {
                  this.pathLayer.getWall(_loc3_,_loc1_);
               }
               else
               {
                  this.pathLayer.getNoWall(_loc3_,_loc1_);
               }
               _loc1_++;
            }
            _loc3_++;
         }
         this.pathLayer.updatePath();
         if(this.pathLayer.pathFind)
         {
            this.startSetka.visible = false;
            this.finishSetka.visible = false;
            trace("finishSetka.visible = false;");
            this.activGame = false;
            setChildIndex(this.pathLayer,this.numChildren - 1);
            this.sounds.gotoAndPlay("go2");
            this.ARR[this.LIVEL - 1] = 2;
            if(this.ARR[this.LIVEL] == 0)
            {
               this.ARR[this.LIVEL] = 1;
            }
            if(this.MAX_LIVEL < this.LIVEL + 1)
            {
               _loc2_ = this.LIVEL + 1;
               trace("MAX_LIVEL " + this.MAX_LIVEL + " " + _loc2_);
               ExternalInterface.call("save_game_stats","block-master",_loc2_);
            }
         }
      }
      
      public function addPathLayer() : *
      {
         this.setkaPoinnts[this.startPathX][this.startPathY].gotoAndStop(1);
         this.setkaPoinnts[this.endPathX][this.endPathY].gotoAndStop(1);
         this.pathLayer = new AStarDetailed(this.startPathX,this.startPathY,this.endPathX,this.endPathY);
         addChild(this.pathLayer);
         this.pathLayer.x = this.startX;
         this.pathLayer.y = this.startY;
         setChildIndex(this.pathLayer,0);
         trace("!!!");
      }
      
      public function start_levels() : void
      {
         var _loc1_:* = 0;
         while(_loc1_ < this.livels)
         {
            if(_loc1_ < this.prohod_level)
            {
               this.ARR[_loc1_] = 2;
            }
            else if(_loc1_ == this.prohod_level)
            {
               this.ARR[_loc1_] = 1;
            }
            else
            {
               this.ARR[_loc1_] = 0;
            }
            _loc1_++;
         }
      }
      
      public function test_save_file() : void
      {
      }
      
      public function fullScreenRedraw(param1:FullScreenEvent) : void
      {
         if(param1.fullScreen)
         {
            this.fs_bg.visible = true;
         }
         else
         {
            this.fs_bg.visible = false;
         }
      }
      
      public function normal_random(param1:Number, param2:Number) : *
      {
         return Math.floor(Math.random() * (param2 - param1)) + param1;
      }
      
      public function sounder_on(param1:Event) : void
      {
         SoundMixer.soundTransform = new SoundTransform(1);
         this.topper.soundClip.b1_.visible = false;
         this.topper.soundClip.b1.visible = true;
      }
      
      public function sounder_off(param1:Event) : void
      {
         SoundMixer.soundTransform = new SoundTransform(0);
         this.topper.soundClip.b1.visible = false;
         this.topper.soundClip.b1_.visible = true;
      }
      
      public function replay_func(param1:Event) : void
      {
         trace("ogooo");
         this.menuha.visible = false;
      }
      
      public function interfaceLang() : *
      {
         if(this.helper.visible == true)
         {
            if(this.lang1 == "en")
            {
               this.helper.gotoAndStop(2);
            }
         }
      }
      
      public function lang_eng(param1:Event) : void
      {
         this.go_lang("en");
         this.topper.langClip.b1.visible = true;
         this.topper.langClip.b1_.visible = false;
         this.interfaceLang();
      }
      
      public function lang_rus(param1:Event) : void
      {
         this.go_lang("en");
         this.topper.langClip.b1_.visible = true;
         this.topper.langClip.b1.visible = false;
         this.interfaceLang();
      }
      
      public function go_lang(param1:String) : void
      {
         this.lang1 = param1;
         if(param1 == "en")
         {
            trace("en");
         }
      }
      
      public function addEvents() : *
      {
         this.menuha.b1.addEventListener(MouseEvent.MOUSE_DOWN,this.livel1);
         this.menuha.b2.addEventListener(MouseEvent.MOUSE_DOWN,this.livel2);
         this.menuha.b3.addEventListener(MouseEvent.MOUSE_DOWN,this.livel3);
         this.menuha.b4.addEventListener(MouseEvent.MOUSE_DOWN,this.livel4);
         this.menuha.b5.addEventListener(MouseEvent.MOUSE_DOWN,this.livel5);
         this.menuha.b6.addEventListener(MouseEvent.MOUSE_DOWN,this.livel6);
         this.menuha.b7.addEventListener(MouseEvent.MOUSE_DOWN,this.livel7);
         this.menuha.b8.addEventListener(MouseEvent.MOUSE_DOWN,this.livel8);
         this.menuha.b9.addEventListener(MouseEvent.MOUSE_DOWN,this.livel9);
         this.menuha.b10.addEventListener(MouseEvent.MOUSE_DOWN,this.livel10);
         this.menuha.b11.addEventListener(MouseEvent.MOUSE_DOWN,this.livel11);
         this.menuha.b12.addEventListener(MouseEvent.MOUSE_DOWN,this.livel12);
         this.menuha.b13.addEventListener(MouseEvent.MOUSE_DOWN,this.livel13);
         this.menuha.b14.addEventListener(MouseEvent.MOUSE_DOWN,this.livel14);
         this.menuha.b15.addEventListener(MouseEvent.MOUSE_DOWN,this.livel15);
         this.menuha.b16.addEventListener(MouseEvent.MOUSE_DOWN,this.livel16);
      }
      
      public function go_to_site(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var url:String = "http://www.playogames.com/";
         var request:URLRequest = new URLRequest(url);
         try
         {
            navigateToURL(request,"_self");
            return;
         }
         catch(e:Error)
         {
            trace("Error occurred!");
            return;
         }
      }
      
      public function next_level(param1:Event) : void
      {
         this.gotoLivel(this.LIVEL + 1);
         this.b_next_level.visible = false;
         this.num.visible = false;
         this.menuha.drMenu();
      }
      
      public function b_menu_URL(param1:Event) : void
      {
      }
      
      public function b_menu_win(param1:Event) : void
      {
         this.b_next_level.visible = false;
         this.num.visible = false;
         if(this.helper.visible == true)
         {
            this.helper.visible = false;
         }
         if(this.menuha.visible == true)
         {
            if(this.LIVEL !== 0)
            {
               this.menuha.visible = false;
            }
         }
         else
         {
            if(this.lang1 == "en")
            {
               this.menuha.gotoAndStop(2);
            }
            this.menuha.visible = true;
            setChildIndex(this.menuha,this.numChildren - 1);
            this.addEvents();
            this.menuha.drMenu();
         }
      }
      
      public function b_menu_help(param1:Event) : void
      {
         if(this.helper.visible == true)
         {
            this.helper.visible = false;
         }
         else
         {
            this.helper.visible = true;
            if(this.lang1 == "en")
            {
               this.helper.gotoAndStop(2);
            }
            setChildIndex(this.helper,this.numChildren - 1);
         }
      }
      
      public function gotoLivel(param1:Number) : void
      {
         this.menuha.visible = false;
         this.helper.visible = false;
         this.pole_bg.visible = true;
         this.game_first = false;
         trace("LIVEL == tempLivel" + this.LIVEL + " " + param1);
         if(this.LIVEL !== param1)
         {
            this.activGame = false;
            gotoAndStop("livel" + param1);
            this.LIVEL = param1;
            if(this.MAX_LIVEL < this.LIVEL)
            {
               this.MAX_LIVEL = this.LIVEL;
            }
            this.startSetka.visible = true;
            this.finishSetka.visible = true;
            trace(" livel ");
         }
         if(this.lang1 == "en")
         {
            this.livel_n.text = "Level " + this.LIVEL;
         }
      }
      
      public function be_bac(param1:Event) : void
      {
         this.menuha.visible = false;
      }
      
      public function livel1(param1:Event) : void
      {
         this.gotoLivel(1);
      }
      
      public function livel2(param1:Event) : void
      {
         this.gotoLivel(2);
      }
      
      public function livel3(param1:Event) : void
      {
         this.gotoLivel(3);
      }
      
      public function livel4(param1:Event) : void
      {
         this.gotoLivel(4);
      }
      
      public function livel5(param1:Event) : void
      {
         this.gotoLivel(5);
      }
      
      public function livel6(param1:Event) : void
      {
         this.gotoLivel(6);
      }
      
      public function livel7(param1:Event) : void
      {
         this.gotoLivel(7);
      }
      
      public function livel8(param1:Event) : void
      {
         this.gotoLivel(8);
      }
      
      public function livel9(param1:Event) : void
      {
         this.gotoLivel(9);
      }
      
      public function livel10(param1:Event) : void
      {
         this.gotoLivel(10);
      }
      
      public function livel11(param1:Event) : void
      {
         this.gotoLivel(11);
      }
      
      public function livel12(param1:Event) : void
      {
         this.gotoLivel(12);
      }
      
      public function livel13(param1:Event) : void
      {
         this.gotoLivel(13);
      }
      
      public function livel14(param1:Event) : void
      {
         this.gotoLivel(14);
      }
      
      public function livel15(param1:Event) : void
      {
         this.gotoLivel(15);
      }
      
      public function livel16(param1:Event) : void
      {
         this.gotoLivel(16);
      }
      
      public function livel17(param1:Event) : void
      {
         this.gotoLivel(17);
      }
      
      public function livel18(param1:Event) : void
      {
         this.gotoLivel(18);
      }
      
      public function livel19(param1:Event) : void
      {
         this.gotoLivel(19);
      }
      
      public function livel20(param1:Event) : void
      {
         this.gotoLivel(30);
      }
      
      public function livel21(param1:Event) : void
      {
         this.gotoLivel(21);
      }
      
      public function livel22(param1:Event) : void
      {
         this.gotoLivel(22);
      }
      
      public function livel23(param1:Event) : void
      {
         this.gotoLivel(23);
      }
      
      public function livel24(param1:Event) : void
      {
         this.gotoLivel(24);
      }
      
      public function livel25(param1:Event) : void
      {
         this.gotoLivel(25);
      }
      
      function frame1() : *
      {
         this.prohod_level = 0;
         this.MAX_LIVEL = 0;
         if(this.loaderInfo.parameters.level == undefined)
         {
            this.prohod_level = 0;
         }
         else
         {
            this.prohod_level = this.loaderInfo.parameters.level - 1;
            this.MAX_LIVEL = this.prohod_level;
         }
         stop();
         this.loaderInfo.addEventListener(Event.COMPLETE,this.loadComplete);
         this.loaderInfo.addEventListener(ProgressEvent.PROGRESS,this.loadProgress);
         this.lang1 = "en";
         var _loc1_:URLRequest = new URLRequest("http://swf.playogames.com/blockmasterads.swf");
         var _loc2_:Loader = new Loader();
         _loc2_.load(_loc1_);
         this.ogames.addChild(_loc2_);
      }
      
      function frame8() : *
      {
         this.b_br.addEventListener(MouseEvent.CLICK,this.playGame);
      }
      
      function frame402() : *
      {
         this.game_first = true;
         this.livels = 16;
         this.saveFile = "save.dat";
         this.ARR = new Array();
         this.activGame = true;
         this.startOne = true;
         this.globalTempLivel = 0;
         this.setkaX = 11;
         this.setkaY = 11;
         this.startX = 200;
         this.startY = 61;
         this.shag = 33;
         this.j1 = 0;
         this.b_matrix = new Array();
         this.bloks = 0;
         this.blokMass = new Array();
         this.pointsMass = new Array();
         this.pointsMassTop = new Array();
         this.setkaPoinnts = new Array();
         this.startBlokX = 0;
         this.startBlokY = 0;
         this.startBlokXreal = 0;
         this.startBlokYreal = 0;
         this.startBlokXrealMP = 0;
         this.startBlokYrealMP = 0;
         this.orDrag = false;
         this.DragX = false;
         this.porog = 6;
         this.BLOKS = 0;
         this.LIVEL = 0;
         this.ROOM = 0;
         this.BLOKS_color = new Object();
         this.BLOKS_color.green = "0x00AD00";
         this.BLOKS_color.red = "0xFF3300";
         this.BLOKS_color.blue = "0x0066CC";
         this.BLOKS_color.orange = "0xFF9900";
         this.BLOKS_color.purple = "0xCC00FF";
         this.BLOKS_color.lightblue = "0x0191FF";
         this.BLOKS_color.darkpurple = "0x882288";
         this.BLOKS_color.yellow = "0x999900";
         this.startPathX = 0;
         this.startPathY = 0;
         this.endPathX = 0;
         this.endPathY = 0;
         this.pathLayer = new AStarDetailed(0,0,0,0);
         this.MP = new mouse_point();
         addChild(this.MP);
         this.start_pole();
         this.test_save_file();
         this.start_levels();
         stage.addEventListener(FullScreenEvent.FULL_SCREEN,this.fullScreenRedraw);
      }
      
      function frame403() : *
      {
         this.LIVEL = 0;
         setChildIndex(this.menuha,this.numChildren - 1);
         this.topper.soundClip.b1_.visible = false;
         this.topper.langClip.b1.visible = false;
         this.helper.visible = false;
         this.pole_bg.visible = false;
         this.pobeda.visible = false;
         this.b_next_level.visible = false;
         this.num.visible = false;
         this.fs_bg.visible = false;
         stop();
         this.topper.soundClip.b1.addEventListener(MouseEvent.MOUSE_DOWN,this.sounder_off);
         this.topper.soundClip.b1_.addEventListener(MouseEvent.MOUSE_DOWN,this.sounder_on);
         this.replay_b.addEventListener(MouseEvent.MOUSE_DOWN,this.replay_func);
         this.topper.langClip.b1.addEventListener(MouseEvent.MOUSE_DOWN,this.lang_rus);
         this.topper.langClip.b1_.addEventListener(MouseEvent.MOUSE_DOWN,this.lang_eng);
         this.go_lang(this.lang1);
         this.addEvents();
         this.dmenu.b_menu.addEventListener(MouseEvent.MOUSE_DOWN,this.b_menu_win);
         this.dmenu.b_help.addEventListener(MouseEvent.MOUSE_DOWN,this.b_menu_help);
         this.helper.b1.addEventListener(MouseEvent.MOUSE_DOWN,this.b_menu_help);
         this.helper.b_bac.addEventListener(MouseEvent.MOUSE_DOWN,this.b_menu_help);
         this.b_next_level.addEventListener(MouseEvent.MOUSE_DOWN,this.next_level);
         this.topper.logo.addEventListener(MouseEvent.MOUSE_DOWN,this.go_to_site);
         this.dmenu.b_more_games.addEventListener(MouseEvent.MOUSE_DOWN,this.go_to_site);
      }
      
      function frame409() : *
      {
         this.LIVEL = 1;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 5;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 6;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 1;
         this.blokMass[2].ySetka = 5;
         this.blokMass[2].pointsNumb = 6;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 4;
         this.blokMass[3].ySetka = 1;
         this.blokMass[3].pointsNumb = 14;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 6;
         this.blokMass[4].ySetka = 4;
         this.blokMass[4].pointsNumb = 24;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 8;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 1;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 2;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 2;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 1;
         this.pointsMass[1][5].ySetka = 3;
         this.pointsMass[1][6].xSetka = 2;
         this.pointsMass[1][6].ySetka = 3;
         this.pointsMass[1][7].xSetka = 3;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 3;
         this.pointsMass[1][8].ySetka = 2;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 1;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 1;
         this.pointsMass[2][5].ySetka = 3;
         this.pointsMass[2][6].xSetka = 2;
         this.pointsMass[2][6].ySetka = 3;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 4;
         this.pointsMass[4][13].ySetka = 1;
         this.pointsMass[4][14].xSetka = 4;
         this.pointsMass[4][14].ySetka = 2;
         this.pointsMass[4][15].xSetka = 4;
         this.pointsMass[4][15].ySetka = 3;
         this.pointsMass[4][16].xSetka = 4;
         this.pointsMass[4][16].ySetka = 4;
         this.pointsMass[4][17].xSetka = 5;
         this.pointsMass[4][17].ySetka = 1;
         this.pointsMass[4][18].xSetka = 5;
         this.pointsMass[4][18].ySetka = 2;
         this.pointsMass[4][19].xSetka = 5;
         this.pointsMass[4][19].ySetka = 3;
         this.pointsMass[4][20].xSetka = 5;
         this.pointsMass[4][20].ySetka = 4;
         this.pointsMass[4][21].xSetka = 6;
         this.pointsMass[4][21].ySetka = 1;
         this.pointsMass[4][22].xSetka = 6;
         this.pointsMass[4][22].ySetka = 2;
         this.pointsMass[4][23].xSetka = 6;
         this.pointsMass[4][23].ySetka = 3;
         this.pointsMass[4][24].xSetka = 6;
         this.pointsMass[4][24].ySetka = 4;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame417() : *
      {
         this.LIVEL = 2;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 5;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 5;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 5;
         this.blokMass[2].ySetka = 5;
         this.blokMass[2].pointsNumb = 6;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 7;
         this.blokMass[3].ySetka = 5;
         this.blokMass[3].pointsNumb = 14;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 1;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 28;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 8;
         this.blokMass[5].ySetka = 1;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 1;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 2;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 2;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 1;
         this.pointsMass[1][5].ySetka = 3;
         this.pointsMass[1][6].xSetka = 2;
         this.pointsMass[1][6].ySetka = 3;
         this.pointsMass[1][7].xSetka = 3;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 3;
         this.pointsMass[1][8].ySetka = 2;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 1;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 1;
         this.pointsMass[2][5].ySetka = 3;
         this.pointsMass[2][6].xSetka = 2;
         this.pointsMass[2][6].ySetka = 3;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 4;
         this.pointsMass[4][13].ySetka = 1;
         this.pointsMass[4][14].xSetka = 4;
         this.pointsMass[4][14].ySetka = 2;
         this.pointsMass[4][15].xSetka = 4;
         this.pointsMass[4][15].ySetka = 3;
         this.pointsMass[4][16].xSetka = 4;
         this.pointsMass[4][16].ySetka = 4;
         this.pointsMass[4][17].xSetka = 5;
         this.pointsMass[4][17].ySetka = 1;
         this.pointsMass[4][18].xSetka = 5;
         this.pointsMass[4][18].ySetka = 2;
         this.pointsMass[4][19].xSetka = 5;
         this.pointsMass[4][19].ySetka = 3;
         this.pointsMass[4][20].xSetka = 5;
         this.pointsMass[4][20].ySetka = 4;
         this.pointsMass[4][21].xSetka = 6;
         this.pointsMass[4][21].ySetka = 1;
         this.pointsMass[4][22].xSetka = 6;
         this.pointsMass[4][22].ySetka = 2;
         this.pointsMass[4][23].xSetka = 6;
         this.pointsMass[4][23].ySetka = 3;
         this.pointsMass[4][24].xSetka = 6;
         this.pointsMass[4][24].ySetka = 4;
         this.pointsMass[4][25].xSetka = 7;
         this.pointsMass[4][25].ySetka = 1;
         this.pointsMass[4][26].xSetka = 7;
         this.pointsMass[4][26].ySetka = 2;
         this.pointsMass[4][27].xSetka = 7;
         this.pointsMass[4][27].ySetka = 3;
         this.pointsMass[4][28].xSetka = 7;
         this.pointsMass[4][28].ySetka = 4;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame424() : *
      {
         this.LIVEL = 3;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 6;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 5;
         this.blokMass[1].pointsNumb = 6;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 1;
         this.blokMass[2].ySetka = 5;
         this.blokMass[2].pointsNumb = 6;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 3;
         this.blokMass[3].ySetka = 5;
         this.blokMass[3].pointsNumb = 14;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 1;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 28;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 8;
         this.blokMass[5].ySetka = 1;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 7;
         this.blokMass[6].ySetka = 8;
         this.blokMass[6].pointsNumb = 12;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 1;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 2;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 2;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 3;
         this.pointsMass[1][5].ySetka = 1;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 1;
         this.pointsMass[2][5].ySetka = 3;
         this.pointsMass[2][6].xSetka = 2;
         this.pointsMass[2][6].ySetka = 3;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 4;
         this.pointsMass[4][13].ySetka = 1;
         this.pointsMass[4][14].xSetka = 4;
         this.pointsMass[4][14].ySetka = 2;
         this.pointsMass[4][15].xSetka = 4;
         this.pointsMass[4][15].ySetka = 3;
         this.pointsMass[4][16].xSetka = 4;
         this.pointsMass[4][16].ySetka = 4;
         this.pointsMass[4][17].xSetka = 5;
         this.pointsMass[4][17].ySetka = 1;
         this.pointsMass[4][18].xSetka = 5;
         this.pointsMass[4][18].ySetka = 2;
         this.pointsMass[4][19].xSetka = 5;
         this.pointsMass[4][19].ySetka = 3;
         this.pointsMass[4][20].xSetka = 5;
         this.pointsMass[4][20].ySetka = 4;
         this.pointsMass[4][21].xSetka = 6;
         this.pointsMass[4][21].ySetka = 1;
         this.pointsMass[4][22].xSetka = 6;
         this.pointsMass[4][22].ySetka = 2;
         this.pointsMass[4][23].xSetka = 6;
         this.pointsMass[4][23].ySetka = 3;
         this.pointsMass[4][24].xSetka = 6;
         this.pointsMass[4][24].ySetka = 4;
         this.pointsMass[4][25].xSetka = 7;
         this.pointsMass[4][25].ySetka = 1;
         this.pointsMass[4][26].xSetka = 7;
         this.pointsMass[4][26].ySetka = 2;
         this.pointsMass[4][27].xSetka = 7;
         this.pointsMass[4][27].ySetka = 3;
         this.pointsMass[4][28].xSetka = 7;
         this.pointsMass[4][28].ySetka = 4;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 2;
         this.pointsMass[6][2].ySetka = 1;
         this.pointsMass[6][3].xSetka = 3;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 2;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 1;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 3;
         this.pointsMass[6][9].xSetka = 4;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 4;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 5;
         this.pointsMass[6][11].ySetka = 1;
         this.pointsMass[6][12].xSetka = 5;
         this.pointsMass[6][12].ySetka = 2;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame431() : *
      {
         this.LIVEL = 4;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 6;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 8;
         this.blokMass[1].ySetka = 10;
         this.blokMass[1].pointsNumb = 4;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 8;
         this.blokMass[2].ySetka = 8;
         this.blokMass[2].pointsNumb = 8;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 1;
         this.blokMass[3].pointsNumb = 12;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 17;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 1;
         this.blokMass[5].pointsNumb = 18;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 1;
         this.blokMass[6].ySetka = 6;
         this.blokMass[6].pointsNumb = 30;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 4;
         this.pointsMass[1][4].ySetka = 1;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 3;
         this.pointsMass[3][9].ySetka = 1;
         this.pointsMass[3][10].xSetka = 3;
         this.pointsMass[3][10].ySetka = 2;
         this.pointsMass[3][11].xSetka = 3;
         this.pointsMass[3][11].ySetka = 3;
         this.pointsMass[3][12].xSetka = 3;
         this.pointsMass[3][12].ySetka = 4;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 4;
         this.pointsMass[4][13].ySetka = 1;
         this.pointsMass[4][14].xSetka = 4;
         this.pointsMass[4][14].ySetka = 2;
         this.pointsMass[4][15].xSetka = 4;
         this.pointsMass[4][15].ySetka = 3;
         this.pointsMass[4][16].xSetka = 4;
         this.pointsMass[4][16].ySetka = 4;
         this.pointsMass[4][17].xSetka = 5;
         this.pointsMass[4][17].ySetka = 1;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[5][13].xSetka = 1;
         this.pointsMass[5][13].ySetka = 5;
         this.pointsMass[5][14].xSetka = 2;
         this.pointsMass[5][14].ySetka = 5;
         this.pointsMass[5][15].xSetka = 3;
         this.pointsMass[5][15].ySetka = 5;
         this.pointsMass[5][16].xSetka = 1;
         this.pointsMass[5][16].ySetka = 6;
         this.pointsMass[5][17].xSetka = 2;
         this.pointsMass[5][17].ySetka = 6;
         this.pointsMass[5][18].xSetka = 3;
         this.pointsMass[5][18].ySetka = 6;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[6][13].xSetka = 4;
         this.pointsMass[6][13].ySetka = 1;
         this.pointsMass[6][14].xSetka = 4;
         this.pointsMass[6][14].ySetka = 2;
         this.pointsMass[6][15].xSetka = 4;
         this.pointsMass[6][15].ySetka = 3;
         this.pointsMass[6][16].xSetka = 4;
         this.pointsMass[6][16].ySetka = 4;
         this.pointsMass[6][17].xSetka = 5;
         this.pointsMass[6][17].ySetka = 1;
         this.pointsMass[6][18].xSetka = 5;
         this.pointsMass[6][18].ySetka = 2;
         this.pointsMass[6][19].xSetka = 5;
         this.pointsMass[6][19].ySetka = 3;
         this.pointsMass[6][20].xSetka = 5;
         this.pointsMass[6][20].ySetka = 4;
         this.pointsMass[6][21].xSetka = 1;
         this.pointsMass[6][21].ySetka = 5;
         this.pointsMass[6][22].xSetka = 2;
         this.pointsMass[6][22].ySetka = 5;
         this.pointsMass[6][23].xSetka = 3;
         this.pointsMass[6][23].ySetka = 5;
         this.pointsMass[6][24].xSetka = 4;
         this.pointsMass[6][24].ySetka = 5;
         this.pointsMass[6][25].xSetka = 5;
         this.pointsMass[6][25].ySetka = 5;
         this.pointsMass[6][26].xSetka = 6;
         this.pointsMass[6][26].ySetka = 1;
         this.pointsMass[6][27].xSetka = 6;
         this.pointsMass[6][27].ySetka = 2;
         this.pointsMass[6][28].xSetka = 6;
         this.pointsMass[6][28].ySetka = 3;
         this.pointsMass[6][29].xSetka = 6;
         this.pointsMass[6][29].ySetka = 4;
         this.pointsMass[6][30].xSetka = 6;
         this.pointsMass[6][30].ySetka = 5;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame438() : *
      {
         this.LIVEL = 5;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 6;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 2;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 25;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[6][13].xSetka = 4;
         this.pointsMass[6][13].ySetka = 1;
         this.pointsMass[6][14].xSetka = 4;
         this.pointsMass[6][14].ySetka = 2;
         this.pointsMass[6][15].xSetka = 4;
         this.pointsMass[6][15].ySetka = 3;
         this.pointsMass[6][16].xSetka = 4;
         this.pointsMass[6][16].ySetka = 4;
         this.pointsMass[6][17].xSetka = 5;
         this.pointsMass[6][17].ySetka = 1;
         this.pointsMass[6][18].xSetka = 5;
         this.pointsMass[6][18].ySetka = 2;
         this.pointsMass[6][19].xSetka = 5;
         this.pointsMass[6][19].ySetka = 3;
         this.pointsMass[6][20].xSetka = 5;
         this.pointsMass[6][20].ySetka = 4;
         this.pointsMass[6][21].xSetka = 1;
         this.pointsMass[6][21].ySetka = 5;
         this.pointsMass[6][22].xSetka = 2;
         this.pointsMass[6][22].ySetka = 5;
         this.pointsMass[6][23].xSetka = 3;
         this.pointsMass[6][23].ySetka = 5;
         this.pointsMass[6][24].xSetka = 4;
         this.pointsMass[6][24].ySetka = 5;
         this.pointsMass[6][25].xSetka = 5;
         this.pointsMass[6][25].ySetka = 5;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame445() : *
      {
         this.LIVEL = 6;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 6;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 5;
         this.blokMass[1].pointsNumb = 6;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 1;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 6;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 2;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 19;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 1;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 5;
         this.blokMass[6].pointsNumb = 25;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 1;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 2;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 2;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 3;
         this.pointsMass[1][5].ySetka = 1;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 4;
         this.pointsMass[4][13].ySetka = 1;
         this.pointsMass[4][14].xSetka = 4;
         this.pointsMass[4][14].ySetka = 2;
         this.pointsMass[4][15].xSetka = 4;
         this.pointsMass[4][15].ySetka = 3;
         this.pointsMass[4][16].xSetka = 4;
         this.pointsMass[4][16].ySetka = 4;
         this.pointsMass[4][17].xSetka = 5;
         this.pointsMass[4][17].ySetka = 1;
         this.pointsMass[4][18].xSetka = 5;
         this.pointsMass[4][18].ySetka = 2;
         this.pointsMass[4][19].xSetka = 5;
         this.pointsMass[4][19].ySetka = 3;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[6][13].xSetka = 4;
         this.pointsMass[6][13].ySetka = 1;
         this.pointsMass[6][14].xSetka = 4;
         this.pointsMass[6][14].ySetka = 2;
         this.pointsMass[6][15].xSetka = 4;
         this.pointsMass[6][15].ySetka = 3;
         this.pointsMass[6][16].xSetka = 4;
         this.pointsMass[6][16].ySetka = 4;
         this.pointsMass[6][17].xSetka = 5;
         this.pointsMass[6][17].ySetka = 1;
         this.pointsMass[6][18].xSetka = 5;
         this.pointsMass[6][18].ySetka = 2;
         this.pointsMass[6][19].xSetka = 5;
         this.pointsMass[6][19].ySetka = 3;
         this.pointsMass[6][20].xSetka = 5;
         this.pointsMass[6][20].ySetka = 4;
         this.pointsMass[6][21].xSetka = 1;
         this.pointsMass[6][21].ySetka = 5;
         this.pointsMass[6][22].xSetka = 2;
         this.pointsMass[6][22].ySetka = 5;
         this.pointsMass[6][23].xSetka = 3;
         this.pointsMass[6][23].ySetka = 5;
         this.pointsMass[6][24].xSetka = 4;
         this.pointsMass[6][24].ySetka = 5;
         this.pointsMass[6][25].xSetka = 5;
         this.pointsMass[6][25].ySetka = 5;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame452() : *
      {
         this.LIVEL = 7;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 7;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 2;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 12;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame459() : *
      {
         this.LIVEL = 8;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 7;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 2;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 15;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 12;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 12;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 7;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[5][10].xSetka = 1;
         this.pointsMass[5][10].ySetka = 4;
         this.pointsMass[5][11].xSetka = 2;
         this.pointsMass[5][11].ySetka = 4;
         this.pointsMass[5][12].xSetka = 3;
         this.pointsMass[5][12].ySetka = 4;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 1;
         this.pointsMass[7][2].ySetka = 2;
         this.pointsMass[7][3].xSetka = 2;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 1;
         this.pointsMass[7][4].ySetka = 3;
         this.pointsMass[7][5].xSetka = 2;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 3;
         this.pointsMass[7][6].ySetka = 2;
         this.pointsMass[7][7].xSetka = 3;
         this.pointsMass[7][7].ySetka = 3;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame466() : *
      {
         this.LIVEL = 9;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 7;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 6;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 9;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 5;
         this.blokMass[6].ySetka = 8;
         this.blokMass[6].pointsNumb = 12;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 3;
         this.pointsMass[3][13].ySetka = 5;
         this.pointsMass[3][14].xSetka = 4;
         this.pointsMass[3][14].ySetka = 5;
         this.pointsMass[3][15].xSetka = 3;
         this.pointsMass[3][15].ySetka = 6;
         this.pointsMass[3][16].xSetka = 4;
         this.pointsMass[3][16].ySetka = 6;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 3;
         this.pointsMass[5][3].ySetka = 1;
         this.pointsMass[5][4].xSetka = 1;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[5][5].xSetka = 2;
         this.pointsMass[5][5].ySetka = 2;
         this.pointsMass[5][6].xSetka = 3;
         this.pointsMass[5][6].ySetka = 2;
         this.pointsMass[5][7].xSetka = 1;
         this.pointsMass[5][7].ySetka = 3;
         this.pointsMass[5][8].xSetka = 2;
         this.pointsMass[5][8].ySetka = 3;
         this.pointsMass[5][9].xSetka = 3;
         this.pointsMass[5][9].ySetka = 3;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame473() : *
      {
         this.LIVEL = 10;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 7;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 24;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 12;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[3][21].xSetka = 3;
         this.pointsMass[3][21].ySetka = 5;
         this.pointsMass[3][22].xSetka = 3;
         this.pointsMass[3][22].ySetka = 6;
         this.pointsMass[3][23].xSetka = 3;
         this.pointsMass[3][23].ySetka = 7;
         this.pointsMass[3][24].xSetka = 3;
         this.pointsMass[3][24].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 1;
         this.pointsMass[6][3].ySetka = 3;
         this.pointsMass[6][4].xSetka = 1;
         this.pointsMass[6][4].ySetka = 4;
         this.pointsMass[6][5].xSetka = 2;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 2;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[6][7].xSetka = 2;
         this.pointsMass[6][7].ySetka = 3;
         this.pointsMass[6][8].xSetka = 2;
         this.pointsMass[6][8].ySetka = 4;
         this.pointsMass[6][9].xSetka = 3;
         this.pointsMass[6][9].ySetka = 1;
         this.pointsMass[6][10].xSetka = 3;
         this.pointsMass[6][10].ySetka = 2;
         this.pointsMass[6][11].xSetka = 3;
         this.pointsMass[6][11].ySetka = 3;
         this.pointsMass[6][12].xSetka = 3;
         this.pointsMass[6][12].ySetka = 4;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame480() : *
      {
         this.LIVEL = 11;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 20;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 15;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 9;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 7;
         this.blokMass[8].ySetka = 6;
         this.blokMass[8].pointsNumb = 10;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame487() : *
      {
         this.LIVEL = 12;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 8;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 1;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 24;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 1;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 10;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 7;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 1;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 7;
         this.blokMass[8].ySetka = 6;
         this.blokMass[8].pointsNumb = 10;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[3][21].xSetka = 3;
         this.pointsMass[3][21].ySetka = 5;
         this.pointsMass[3][22].xSetka = 3;
         this.pointsMass[3][22].ySetka = 6;
         this.pointsMass[3][23].xSetka = 3;
         this.pointsMass[3][23].ySetka = 7;
         this.pointsMass[3][24].xSetka = 3;
         this.pointsMass[3][24].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame494() : *
      {
         this.LIVEL = 13;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 4;
         this.blokMass[1].pointsNumb = 12;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 6;
         this.blokMass[2].ySetka = 2;
         this.blokMass[2].pointsNumb = 10;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 1;
         this.blokMass[3].pointsNumb = 24;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 6;
         this.blokMass[4].ySetka = 6;
         this.blokMass[4].pointsNumb = 14;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 4;
         this.blokMass[5].ySetka = 6;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 1;
         this.blokMass[6].ySetka = 9;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 4;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 4;
         this.blokMass[8].ySetka = 4;
         this.blokMass[8].pointsNumb = 10;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[1][10].xSetka = 1;
         this.pointsMass[1][10].ySetka = 4;
         this.pointsMass[1][11].xSetka = 2;
         this.pointsMass[1][11].ySetka = 4;
         this.pointsMass[1][12].xSetka = 3;
         this.pointsMass[1][12].ySetka = 4;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 5;
         this.pointsMass[2][9].ySetka = 1;
         this.pointsMass[2][10].xSetka = 5;
         this.pointsMass[2][10].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[3][21].xSetka = 3;
         this.pointsMass[3][21].ySetka = 5;
         this.pointsMass[3][22].xSetka = 3;
         this.pointsMass[3][22].ySetka = 6;
         this.pointsMass[3][23].xSetka = 3;
         this.pointsMass[3][23].ySetka = 7;
         this.pointsMass[3][24].xSetka = 3;
         this.pointsMass[3][24].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 1;
         this.pointsMass[4][12].ySetka = 5;
         this.pointsMass[4][13].xSetka = 2;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 1;
         this.pointsMass[4][14].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame501() : *
      {
         this.LIVEL = 14;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 5;
         this.blokMass[1].ySetka = 9;
         this.blokMass[1].pointsNumb = 7;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 2;
         this.blokMass[2].pointsNumb = 8;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 24;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 2;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 7;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 4;
         this.blokMass[6].ySetka = 8;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 2;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 7;
         this.blokMass[8].ySetka = 6;
         this.blokMass[8].pointsNumb = 15;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 3;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 1;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 2;
         this.pointsMass[1][3].ySetka = 2;
         this.pointsMass[1][4].xSetka = 3;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 1;
         this.pointsMass[1][5].ySetka = 3;
         this.pointsMass[1][6].xSetka = 2;
         this.pointsMass[1][6].ySetka = 3;
         this.pointsMass[1][7].xSetka = 3;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[3][21].xSetka = 3;
         this.pointsMass[3][21].ySetka = 5;
         this.pointsMass[3][22].xSetka = 3;
         this.pointsMass[3][22].ySetka = 6;
         this.pointsMass[3][23].xSetka = 3;
         this.pointsMass[3][23].ySetka = 7;
         this.pointsMass[3][24].xSetka = 3;
         this.pointsMass[3][24].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.pointsMass[8][11].xSetka = 1;
         this.pointsMass[8][11].ySetka = 3;
         this.pointsMass[8][12].xSetka = 2;
         this.pointsMass[8][12].ySetka = 3;
         this.pointsMass[8][13].xSetka = 3;
         this.pointsMass[8][13].ySetka = 3;
         this.pointsMass[8][14].xSetka = 4;
         this.pointsMass[8][14].ySetka = 3;
         this.pointsMass[8][15].xSetka = 5;
         this.pointsMass[8][15].ySetka = 3;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame509() : *
      {
         this.LIVEL = 15;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 9;
         this.blokMass[1].pointsNumb = 6;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 7;
         this.blokMass[2].ySetka = 2;
         this.blokMass[2].pointsNumb = 8;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 24;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 4;
         this.blokMass[4].ySetka = 4;
         this.blokMass[4].pointsNumb = 18;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 7;
         this.blokMass[5].ySetka = 4;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 6;
         this.blokMass[6].ySetka = 10;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 5;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 7;
         this.blokMass[8].ySetka = 6;
         this.blokMass[8].pointsNumb = 20;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 2;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 2;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 2;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 3;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 3;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 3;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[3][17].xSetka = 3;
         this.pointsMass[3][17].ySetka = 1;
         this.pointsMass[3][18].xSetka = 3;
         this.pointsMass[3][18].ySetka = 2;
         this.pointsMass[3][19].xSetka = 3;
         this.pointsMass[3][19].ySetka = 3;
         this.pointsMass[3][20].xSetka = 3;
         this.pointsMass[3][20].ySetka = 4;
         this.pointsMass[3][21].xSetka = 3;
         this.pointsMass[3][21].ySetka = 5;
         this.pointsMass[3][22].xSetka = 3;
         this.pointsMass[3][22].ySetka = 6;
         this.pointsMass[3][23].xSetka = 3;
         this.pointsMass[3][23].ySetka = 7;
         this.pointsMass[3][24].xSetka = 3;
         this.pointsMass[3][24].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 1;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 2;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 3;
         this.pointsMass[4][12].xSetka = 3;
         this.pointsMass[4][12].ySetka = 4;
         this.pointsMass[4][13].xSetka = 1;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 2;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 3;
         this.pointsMass[4][15].ySetka = 5;
         this.pointsMass[4][16].xSetka = 1;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 2;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[4][18].xSetka = 3;
         this.pointsMass[4][18].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.pointsMass[8][11].xSetka = 1;
         this.pointsMass[8][11].ySetka = 3;
         this.pointsMass[8][12].xSetka = 2;
         this.pointsMass[8][12].ySetka = 3;
         this.pointsMass[8][13].xSetka = 3;
         this.pointsMass[8][13].ySetka = 3;
         this.pointsMass[8][14].xSetka = 4;
         this.pointsMass[8][14].ySetka = 3;
         this.pointsMass[8][15].xSetka = 5;
         this.pointsMass[8][15].ySetka = 3;
         this.pointsMass[8][16].xSetka = 1;
         this.pointsMass[8][16].ySetka = 4;
         this.pointsMass[8][17].xSetka = 2;
         this.pointsMass[8][17].ySetka = 4;
         this.pointsMass[8][18].xSetka = 3;
         this.pointsMass[8][18].ySetka = 4;
         this.pointsMass[8][19].xSetka = 4;
         this.pointsMass[8][19].ySetka = 4;
         this.pointsMass[8][20].xSetka = 5;
         this.pointsMass[8][20].ySetka = 4;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function frame516() : *
      {
         this.LIVEL = 16;
         this.startPathX = 0;
         this.startPathY = 6;
         this.endPathX = 12;
         this.endPathY = 6;
         this.BLOKS = 8;
         this.start_bloks(this.BLOKS);
         this.blokMass[1].xSetka = 9;
         this.blokMass[1].ySetka = 6;
         this.blokMass[1].pointsNumb = 9;
         this.blokMass[1].colorBlok = this.BLOKS_color.red;
         this.blokMass[2].xSetka = 8;
         this.blokMass[2].ySetka = 9;
         this.blokMass[2].pointsNumb = 12;
         this.blokMass[2].colorBlok = this.BLOKS_color.blue;
         this.blokMass[3].xSetka = 1;
         this.blokMass[3].ySetka = 4;
         this.blokMass[3].pointsNumb = 16;
         this.blokMass[3].colorBlok = this.BLOKS_color.green;
         this.blokMass[4].xSetka = 6;
         this.blokMass[4].ySetka = 2;
         this.blokMass[4].pointsNumb = 17;
         this.blokMass[4].colorBlok = this.BLOKS_color.orange;
         this.blokMass[5].xSetka = 8;
         this.blokMass[5].ySetka = 1;
         this.blokMass[5].pointsNumb = 4;
         this.blokMass[5].colorBlok = this.BLOKS_color.purple;
         this.blokMass[6].xSetka = 9;
         this.blokMass[6].ySetka = 4;
         this.blokMass[6].pointsNumb = 6;
         this.blokMass[6].colorBlok = this.BLOKS_color.lightblue;
         this.blokMass[7].xSetka = 10;
         this.blokMass[7].ySetka = 1;
         this.blokMass[7].pointsNumb = 6;
         this.blokMass[7].colorBlok = this.BLOKS_color.darkpurple;
         this.blokMass[8].xSetka = 3;
         this.blokMass[8].ySetka = 8;
         this.blokMass[8].pointsNumb = 20;
         this.blokMass[8].colorBlok = this.BLOKS_color.yellow;
         this.start_bloks_setka(this.BLOKS);
         this.pointsMass[1][1].xSetka = 1;
         this.pointsMass[1][1].ySetka = 1;
         this.pointsMass[1][2].xSetka = 2;
         this.pointsMass[1][2].ySetka = 1;
         this.pointsMass[1][3].xSetka = 3;
         this.pointsMass[1][3].ySetka = 1;
         this.pointsMass[1][4].xSetka = 1;
         this.pointsMass[1][4].ySetka = 2;
         this.pointsMass[1][5].xSetka = 2;
         this.pointsMass[1][5].ySetka = 2;
         this.pointsMass[1][6].xSetka = 3;
         this.pointsMass[1][6].ySetka = 2;
         this.pointsMass[1][7].xSetka = 1;
         this.pointsMass[1][7].ySetka = 3;
         this.pointsMass[1][8].xSetka = 2;
         this.pointsMass[1][8].ySetka = 3;
         this.pointsMass[1][9].xSetka = 3;
         this.pointsMass[1][9].ySetka = 3;
         this.pointsMass[2][1].xSetka = 1;
         this.pointsMass[2][1].ySetka = 1;
         this.pointsMass[2][2].xSetka = 1;
         this.pointsMass[2][2].ySetka = 2;
         this.pointsMass[2][3].xSetka = 2;
         this.pointsMass[2][3].ySetka = 1;
         this.pointsMass[2][4].xSetka = 2;
         this.pointsMass[2][4].ySetka = 2;
         this.pointsMass[2][5].xSetka = 3;
         this.pointsMass[2][5].ySetka = 1;
         this.pointsMass[2][6].xSetka = 3;
         this.pointsMass[2][6].ySetka = 2;
         this.pointsMass[2][7].xSetka = 4;
         this.pointsMass[2][7].ySetka = 1;
         this.pointsMass[2][8].xSetka = 4;
         this.pointsMass[2][8].ySetka = 2;
         this.pointsMass[2][9].xSetka = 1;
         this.pointsMass[2][9].ySetka = 3;
         this.pointsMass[2][10].xSetka = 2;
         this.pointsMass[2][10].ySetka = 3;
         this.pointsMass[2][11].xSetka = 3;
         this.pointsMass[2][11].ySetka = 3;
         this.pointsMass[2][12].xSetka = 4;
         this.pointsMass[2][12].ySetka = 3;
         this.pointsMass[3][1].xSetka = 1;
         this.pointsMass[3][1].ySetka = 1;
         this.pointsMass[3][2].xSetka = 2;
         this.pointsMass[3][2].ySetka = 1;
         this.pointsMass[3][3].xSetka = 1;
         this.pointsMass[3][3].ySetka = 2;
         this.pointsMass[3][4].xSetka = 2;
         this.pointsMass[3][4].ySetka = 2;
         this.pointsMass[3][5].xSetka = 1;
         this.pointsMass[3][5].ySetka = 3;
         this.pointsMass[3][6].xSetka = 2;
         this.pointsMass[3][6].ySetka = 3;
         this.pointsMass[3][7].xSetka = 1;
         this.pointsMass[3][7].ySetka = 4;
         this.pointsMass[3][8].xSetka = 2;
         this.pointsMass[3][8].ySetka = 4;
         this.pointsMass[3][9].xSetka = 1;
         this.pointsMass[3][9].ySetka = 5;
         this.pointsMass[3][10].xSetka = 2;
         this.pointsMass[3][10].ySetka = 5;
         this.pointsMass[3][11].xSetka = 1;
         this.pointsMass[3][11].ySetka = 6;
         this.pointsMass[3][12].xSetka = 2;
         this.pointsMass[3][12].ySetka = 6;
         this.pointsMass[3][13].xSetka = 1;
         this.pointsMass[3][13].ySetka = 7;
         this.pointsMass[3][14].xSetka = 2;
         this.pointsMass[3][14].ySetka = 7;
         this.pointsMass[3][15].xSetka = 1;
         this.pointsMass[3][15].ySetka = 8;
         this.pointsMass[3][16].xSetka = 2;
         this.pointsMass[3][16].ySetka = 8;
         this.pointsMass[4][1].xSetka = 1;
         this.pointsMass[4][1].ySetka = 1;
         this.pointsMass[4][2].xSetka = 1;
         this.pointsMass[4][2].ySetka = 2;
         this.pointsMass[4][3].xSetka = 1;
         this.pointsMass[4][3].ySetka = 3;
         this.pointsMass[4][4].xSetka = 1;
         this.pointsMass[4][4].ySetka = 4;
         this.pointsMass[4][5].xSetka = 2;
         this.pointsMass[4][5].ySetka = 1;
         this.pointsMass[4][6].xSetka = 2;
         this.pointsMass[4][6].ySetka = 2;
         this.pointsMass[4][7].xSetka = 2;
         this.pointsMass[4][7].ySetka = 3;
         this.pointsMass[4][8].xSetka = 2;
         this.pointsMass[4][8].ySetka = 4;
         this.pointsMass[4][9].xSetka = 3;
         this.pointsMass[4][9].ySetka = 2;
         this.pointsMass[4][10].xSetka = 3;
         this.pointsMass[4][10].ySetka = 3;
         this.pointsMass[4][11].xSetka = 3;
         this.pointsMass[4][11].ySetka = 4;
         this.pointsMass[4][12].xSetka = 1;
         this.pointsMass[4][12].ySetka = 5;
         this.pointsMass[4][13].xSetka = 2;
         this.pointsMass[4][13].ySetka = 5;
         this.pointsMass[4][14].xSetka = 3;
         this.pointsMass[4][14].ySetka = 5;
         this.pointsMass[4][15].xSetka = 1;
         this.pointsMass[4][15].ySetka = 6;
         this.pointsMass[4][16].xSetka = 2;
         this.pointsMass[4][16].ySetka = 6;
         this.pointsMass[4][17].xSetka = 3;
         this.pointsMass[4][17].ySetka = 6;
         this.pointsMass[5][1].xSetka = 1;
         this.pointsMass[5][1].ySetka = 1;
         this.pointsMass[5][2].xSetka = 2;
         this.pointsMass[5][2].ySetka = 1;
         this.pointsMass[5][3].xSetka = 1;
         this.pointsMass[5][3].ySetka = 2;
         this.pointsMass[5][4].xSetka = 2;
         this.pointsMass[5][4].ySetka = 2;
         this.pointsMass[6][1].xSetka = 1;
         this.pointsMass[6][1].ySetka = 1;
         this.pointsMass[6][2].xSetka = 1;
         this.pointsMass[6][2].ySetka = 2;
         this.pointsMass[6][3].xSetka = 2;
         this.pointsMass[6][3].ySetka = 1;
         this.pointsMass[6][4].xSetka = 2;
         this.pointsMass[6][4].ySetka = 2;
         this.pointsMass[6][5].xSetka = 3;
         this.pointsMass[6][5].ySetka = 1;
         this.pointsMass[6][6].xSetka = 3;
         this.pointsMass[6][6].ySetka = 2;
         this.pointsMass[7][1].xSetka = 1;
         this.pointsMass[7][1].ySetka = 1;
         this.pointsMass[7][2].xSetka = 2;
         this.pointsMass[7][2].ySetka = 1;
         this.pointsMass[7][3].xSetka = 1;
         this.pointsMass[7][3].ySetka = 2;
         this.pointsMass[7][4].xSetka = 2;
         this.pointsMass[7][4].ySetka = 2;
         this.pointsMass[7][5].xSetka = 1;
         this.pointsMass[7][5].ySetka = 3;
         this.pointsMass[7][6].xSetka = 2;
         this.pointsMass[7][6].ySetka = 3;
         this.pointsMass[8][1].xSetka = 1;
         this.pointsMass[8][1].ySetka = 1;
         this.pointsMass[8][2].xSetka = 1;
         this.pointsMass[8][2].ySetka = 2;
         this.pointsMass[8][3].xSetka = 2;
         this.pointsMass[8][3].ySetka = 1;
         this.pointsMass[8][4].xSetka = 2;
         this.pointsMass[8][4].ySetka = 2;
         this.pointsMass[8][5].xSetka = 3;
         this.pointsMass[8][5].ySetka = 1;
         this.pointsMass[8][6].xSetka = 3;
         this.pointsMass[8][6].ySetka = 2;
         this.pointsMass[8][7].xSetka = 4;
         this.pointsMass[8][7].ySetka = 1;
         this.pointsMass[8][8].xSetka = 4;
         this.pointsMass[8][8].ySetka = 2;
         this.pointsMass[8][9].xSetka = 5;
         this.pointsMass[8][9].ySetka = 1;
         this.pointsMass[8][10].xSetka = 5;
         this.pointsMass[8][10].ySetka = 2;
         this.pointsMass[8][11].xSetka = 1;
         this.pointsMass[8][11].ySetka = 3;
         this.pointsMass[8][12].xSetka = 2;
         this.pointsMass[8][12].ySetka = 3;
         this.pointsMass[8][13].xSetka = 3;
         this.pointsMass[8][13].ySetka = 3;
         this.pointsMass[8][14].xSetka = 4;
         this.pointsMass[8][14].ySetka = 3;
         this.pointsMass[8][15].xSetka = 5;
         this.pointsMass[8][15].ySetka = 3;
         this.pointsMass[8][16].xSetka = 1;
         this.pointsMass[8][16].ySetka = 4;
         this.pointsMass[8][17].xSetka = 2;
         this.pointsMass[8][17].ySetka = 4;
         this.pointsMass[8][18].xSetka = 3;
         this.pointsMass[8][18].ySetka = 4;
         this.pointsMass[8][19].xSetka = 4;
         this.pointsMass[8][19].ySetka = 4;
         this.pointsMass[8][20].xSetka = 5;
         this.pointsMass[8][20].ySetka = 4;
         this.start_bloks_points(this.BLOKS);
         this.test_setka();
         this.addPathLayer();
         stop();
      }
      
      function __setProp___id0__Scene1_Layer10_0(param1:int) : *
      {
         if(this.__id0_ != null && param1 >= 1 && param1 <= 7 && (this.__setPropDict[this.__id0_] == undefined || !(int(this.__setPropDict[this.__id0_]) >= 1 && int(this.__setPropDict[this.__id0_]) <= 7)))
         {
            this.__setPropDict[this.__id0_] = param1;
            try
            {
               this.__id0_["componentInspectorSetting"] = true;
            }
            catch(e:Error)
            {
            }
            this.__id0_.account = "UA-89432435-1";
            this.__id0_.mode = "AS3";
            this.__id0_.visualDebug = false;
            try
            {
               this.__id0_["componentInspectorSetting"] = false;
               return;
            }
            catch(e:Error)
            {
               return;
            }
         }
      }
      
      function __setProp_handler(param1:Object) : *
      {
         var _loc2_:int = 0;
         _loc2_ = currentFrame;
         if(this.__lastFrameProp == _loc2_)
         {
            return;
         }
         this.__lastFrameProp = _loc2_;
         this.__setProp___id0__Scene1_Layer10_0(_loc2_);
      }
   }
}
