module bm_fla {
	export class MainTimeline extends egret.SwfMovie {
		public adBox:egret.SwfMovie;
		public __id0_:com.google.analytics.components.FlashTracker;
		public __setPropDict:flash.Dictionary;
		public __lastFrameProp:number = -1;
		public kursori:egret.SwfMovie;
		public ogames:egret.SwfMovie;
		public Opana:egret.SwfMovie;
		public opana:egret.SwfMovie;
		public startSetka:egret.SwfMovie;
		public plizz:egret.SwfMovie;
		public livel_n:flash.TextField;
		public fs_bg:egret.SwfMovie;
		public dmenu:egret.SwfMovie;
		public logo:egret.SwfMovie;
		public replay_b:egret.SwfButton;
		public b_br:egret.SwfButton;
		public finishSetka:egret.SwfMovie;
		public helper:egret.SwfMovie;
		public pobeda:egret.SwfMovie;
		public pole_bg:egret.SwfMovie;
		public topper:egret.SwfMovie;
		public num:egret.SwfMovie;
		public menuha:egret.SwfMovie;
		public b_next_level:egret.SwfButton;
		public sounds:egret.SwfMovie;
		public prohod_level:number = NaN;
		public MAX_LIVEL:number = NaN;
		public percent:number = NaN;
		public lang1:any;
		public game_first:any;
		public livels:any;
		public saveFile:any;
		public ARR:Array<any>;
		public activGame:any;
		public startOne:any;
		public globalTempLivel:any;
		public setkaX:number = NaN;
		public setkaY:number = NaN;
		public startX:number = NaN;
		public startY:number = NaN;
		public shag:number = NaN;
		public j1:number = NaN;
		public b_matrix:Array<any>;
		public bloks:number = NaN;
		public blokMass:any;
		public pointsMass:any;
		public pointsMassTop:any;
		public setkaPoinnts:any;
		public startBlokX:any;
		public startBlokY:any;
		public startBlokXreal:any;
		public startBlokYreal:any;
		public startBlokXrealMP:any;
		public startBlokYrealMP:any;
		public orDrag:any;
		public DragX:any;
		public porog:any;
		public activBlok:any;
		public BLOKS:number = NaN;
		public LIVEL:number = NaN;
		public ROOM:number = NaN;
		public BLOKS_color:any;
		public startPathX:number = NaN;
		public startPathY:number = NaN;
		public endPathX:number = NaN;
		public endPathY:number = NaN;
		public pathLayer:AStarDetailed;
		public MP:any;

		public constructor()
		{
			super();			var _self__:any = this;

			this.__setPropDict = new flash.Dictionary(true);
			this["addFrameScript"](0,flash.bind(this.frame1,this),7,flash.bind(this.frame8,this),401,flash.bind(this.frame402,this),402,flash.bind(this.frame403,this),408,flash.bind(this.frame409,this),416,flash.bind(this.frame417,this),423,flash.bind(this.frame424,this),430,flash.bind(this.frame431,this),437,flash.bind(this.frame438,this),444,flash.bind(this.frame445,this),451,flash.bind(this.frame452,this),458,flash.bind(this.frame459,this),465,flash.bind(this.frame466,this),472,flash.bind(this.frame473,this),479,flash.bind(this.frame480,this),486,flash.bind(this.frame487,this),493,flash.bind(this.frame494,this),500,flash.bind(this.frame501,this),508,flash.bind(this.frame509,this),515,flash.bind(this.frame516,this));
			_self__.addEventListener(egret.Event["FRAME_CONSTRUCTED"],flash.bind(this.__setProp_handler,this),null,false,0);
		}

		public loadComplete(param1:egret.Event):any
		{
			var _self__:any = this;
			var ofl_CustomMouseCursor:Function = <any>null;
			var timerHandler:Function = <any>null;
			var completeHandler:Function = <any>null;
			ofl_CustomMouseCursor = function (param1:egret.Event):any
			{
				_self__.kursori.x = _self__.stage["mouseX"];
				_self__.kursori.y = _self__.stage["mouseY"];
			};
			timerHandler = function (param1:egret.TimerEvent)
			{
				console.log("tk tk tk");
			};
			completeHandler = function (param1:egret.TimerEvent)
			{
				console.log("taimer stoped");
				_self__.gotoAndPlay("go");
			};
			this["loaderInfo"].removeEventListener(egret.Event.COMPLETE,flash.bind(this.loadComplete,this),null);
			this["loaderInfo"].removeEventListener(egret.ProgressEvent.PROGRESS,flash.bind(this.loadProgress,this),null);
			this.stage.addChild(this.kursori);
			this.kursori.touchEnabled = false;
			this.kursori.addEventListener(egret.Event.ENTER_FRAME,ofl_CustomMouseCursor,null);
			Mouse.hide();
			var timer:egret.Timer = new egret.Timer(1000,11);
			timer.addEventListener(egret.TimerEvent.TIMER,timerHandler,null);
			timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,completeHandler,null);
			timer.start();
		}

		public loadProgress(param1:egret.ProgressEvent)
		{
			this.percent = param1.bytesLoaded / param1.bytesTotal * 100;
			this.plizz["proc"].proc.process1.text = Math.round(this.percent) + "%";
		}

		public playGame(param1:egret.Event)
		{
			var _self__:any = this;
			_self__.gotoAndPlay("play1");
		}

		public start_pole():any
		{
			var _self__:any = this;
			var _loc1_:any = undefined;
			var _loc2_:any = 0;
			while(_loc2_ <= this.setkaX + 1)
			{
				this.setkaPoinnts[_loc2_] = new Array();
				_loc1_ = 0;
				while(_loc1_ <= this.setkaY + 1)
				{
					this.setkaPoinnts[_loc2_][_loc1_] = new setka();
					_self__.addChild(this.setkaPoinnts[_loc2_][_loc1_]);
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

		public reset_pole():any
		{
			var _loc1_:any = undefined;
			var _loc2_:any = 0;
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

		public start_bloks(param1:number):any
		{
			var _self__:any = this;
			var _loc2_:any = undefined;
			this.startSetka.x = this.startX + this.startPathX * this.shag;
			this.startSetka.y = this.startY + this.startPathY * this.shag;
			this.finishSetka.x = this.startX + this.endPathX * this.shag;
			this.finishSetka.y = this.startY + this.endPathY * this.shag;
			if(<any>!this.activGame)
			{
				if(<any>!this.startOne)
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
			var _loc3_:any = 1;
			while(_loc3_ <= param1)
			{
				this.blokMass[_loc3_] = new blok();
				_self__.addChild(this.blokMass[_loc3_]);
				_loc3_++;
			}
			this.startOne = false;
			this.menuha.visible = false;
			this.helper.visible = false;
		}

		public start_bloks_setka(param1:number):any
		{
			var _loc2_:any = undefined;
			var _loc3_:any = 1;
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

		public start_bloks_points(param1:number):any
		{
			var _loc2_:any = undefined;
			var _loc3_:flash.ColorTransform = <any>null;
			var _loc4_:any = 1;
			while(_loc4_ <= param1)
			{
				_loc2_ = 1;
				while(_loc2_ <= this.blokMass[_loc4_].pointsNumb)
				{
					this.pointsMass[_loc4_][_loc2_].x = (this.pointsMass[_loc4_][_loc2_].xSetka - 1) * this.shag;
					this.pointsMass[_loc4_][_loc2_].y = (this.pointsMass[_loc4_][_loc2_].ySetka - 1) * this.shag;
					this.pointsMassTop[_loc4_][_loc2_].x = (this.pointsMass[_loc4_][_loc2_].xSetka - 1) * this.shag;
					this.pointsMassTop[_loc4_][_loc2_].y = (this.pointsMass[_loc4_][_loc2_].ySetka - 1) * this.shag;
					_loc3_ = new flash.ColorTransform();
					_loc3_.color = this.blokMass[_loc4_].colorBlok;
					this.pointsMass[_loc4_][_loc2_].transform.colorTransform = _loc3_;
					_loc2_++;
				}
				_loc4_++;
			}
		}

		public zero_bloks(param1:number):any
		{
			this.j1 = 1;
			while(this.j1 <= this.blokMass[param1].pointsNumb)
			{
				this.setkaPoinnts[flash.trannumber(this.blokMass[param1].xSetka + this.pointsMass[param1][this.j1].xSetka - 1)][flash.trannumber(this.blokMass[param1].ySetka + this.pointsMass[param1][this.j1].ySetka - 1)].gotoAndStop(1);
				this.j1++;
			}
		}

		public test_setka():any
		{
			var _loc1_:any = undefined;
			var _loc2_:any = undefined;
			var _loc3_:any = undefined;
			var _loc4_:any = 1;
			while(_loc4_ <= this.bloks)
			{
				_loc1_ = 1;
				while(_loc1_ <= this.blokMass[_loc4_].pointsNumb)
				{
					_loc2_ = flash.trannumber(this.blokMass[_loc4_].xSetka + this.pointsMass[_loc4_][_loc1_].xSetka - 1);
					_loc3_ = flash.trannumber(this.blokMass[_loc4_].ySetka + this.pointsMass[_loc4_][_loc1_].ySetka - 1);
					this.setkaPoinnts[_loc2_][_loc3_].gotoAndStop(2);
					this.setkaPoinnts[_loc2_][_loc3_].blokName = _loc4_;
					_loc1_++;
				}
				_loc4_++;
			}
		}

		public startDrug(param1:egret.Event)
		{
			var _self__:any = this;
			if(this.activGame)
			{
				this.activBlok = param1.target["parent"];
				this.activBlok["alpha"] = 0.9;
				this.MP.x = this["mouseX"];
				this.MP.y = this["mouseY"];
				this.MP.startDrag(true);
				this.MP.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this.DrugEnterFrame,this));
				this.MP.addEventListener(egret.TouchEvent.TOUCH_END,flash.bind(this.stopDrug,this));
				_self__.setChildIndex(this.MP,this.numChildren - 1);
				this.startBlokXrealMP = this.MP.x;
				this.startBlokYrealMP = this.MP.y;
			}
		}

		public DrugEnterFrame(param1:egret.Event)
		{
			var _loc2_:any = <any>Math.abs(this.startBlokXrealMP - this.MP.x);
			var _loc3_:any = <any>Math.abs(this.startBlokYrealMP - this.MP.y);
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
			var _loc4_:any = 0;
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
					this.zero_bloks(this.activBlok["namer"]);
					if(this.testBlokMovieX(-_loc4_))
					{
						this.startBlokXrealMP = this.startBlokXrealMP - this.shag * _loc4_;
						this.activBlok["x"] = this.activBlok["x"] - this.shag * _loc4_;
						this.activBlok["xSetka"] = this.activBlok["xSetka"] - _loc4_;
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
					this.zero_bloks(this.activBlok["namer"]);
					if(this.testBlokMovieY(-_loc4_))
					{
						this.startBlokYrealMP = this.startBlokYrealMP - this.shag * _loc4_;
						this.activBlok["y"] = this.activBlok["y"] - this.shag * _loc4_;
						this.activBlok["ySetka"] = this.activBlok["ySetka"] - _loc4_;
						this.test_setka();
						this.sounds.gotoAndPlay("go1");
					}
				}
			}
		}

		public stopDrug(param1:egret.Event)
		{
			var _self__:any = this;
			this.activBlok["alpha"] = 1;
			this.MP.stopDrag();
			_self__.setChildIndex(this.MP,1);
			this.MP.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.DrugEnterFrame,this));
			this.orDrag = false;
			this.test_setka();
			console.log("stop");
			this.testPath();
		}

		public normalX(param1:number):number
		{
			var _loc2_:any = <any>Math.round((param1 - this.shag / 2 - this.startX) / this.shag);
			return _loc2_;
		}

		public normalY(param1:number):number
		{
			var _loc2_:any = <any>Math.round((param1 - this.shag / 2 - this.startY) / this.shag);
			return _loc2_;
		}

		public testBlokMovieX(param1:number):boolean
		{
			var _loc2_:any = undefined;
			var _loc3_:any = undefined;
			var _loc4_:any = true;
			var _loc5_:any = 1;
			while(_loc5_ <= this.activBlok["pointsNumb"])
			{
				_loc2_ = this.pointsMass[this.activBlok["namer"]][_loc5_].xSetka + this.activBlok["xSetka"] - 1 + param1;
				_loc3_ = this.pointsMass[this.activBlok["namer"]][_loc5_].ySetka + this.activBlok["ySetka"] - 1;
				if(<any>!this.setkaPoinnts[_loc2_][_loc3_].setkaFree)
				{
					if(this.setkaPoinnts[_loc2_][_loc3_].blokName != this.activBlok["namer"])
					{
						_loc4_ = false;
					}
				}
				_loc5_++;
			}
			return _loc4_;
		}

		public testBlokMovieY(param1:number):boolean
		{
			var _loc2_:any = undefined;
			var _loc3_:any = undefined;
			var _loc4_:any = true;
			var _loc5_:any = 1;
			while(_loc5_ <= this.activBlok["pointsNumb"])
			{
				_loc2_ = this.pointsMass[this.activBlok["namer"]][_loc5_].xSetka + this.activBlok["xSetka"] - 1;
				_loc3_ = this.pointsMass[this.activBlok["namer"]][_loc5_].ySetka + this.activBlok["ySetka"] - 1 + param1;
				if(<any>!this.setkaPoinnts[_loc2_][_loc3_].setkaFree)
				{
					if(this.setkaPoinnts[_loc2_][_loc3_].blokName != this.activBlok["namer"])
					{
						_loc4_ = false;
					}
				}
				_loc5_++;
			}
			return _loc4_;
		}

		public testPath():any
		{
			var _self__:any = this;
			var _loc1_:any = undefined;
			var _loc2_:any = undefined;
			var _loc3_:any = 0;
			while(_loc3_ <= this.setkaX + 1)
			{
				_loc1_ = 0;
				while(_loc1_ <= this.setkaY + 1)
				{
					if(<any>!this.setkaPoinnts[_loc3_][_loc1_].setkaFree)
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
				console.log("finishSetka.visible = false;");
				this.activGame = false;
				_self__.setChildIndex(this.pathLayer,this.numChildren - 1);
				this.sounds.gotoAndPlay("go2");
				this.ARR[this.LIVEL - 1] = 2;
				if(this.ARR[this.LIVEL] == 0)
				{
					this.ARR[this.LIVEL] = 1;
				}
				if(this.MAX_LIVEL < this.LIVEL + 1)
				{
					_loc2_ = this.LIVEL + 1;
					console.log("MAX_LIVEL " + this.MAX_LIVEL + " " + _loc2_);
					flash.ExternalInterface.call("save_game_stats","block-master",_loc2_);
				}
			}
		}

		public addPathLayer():any
		{
			var _self__:any = this;
			this.setkaPoinnts[this.startPathX][this.startPathY].gotoAndStop(1);
			this.setkaPoinnts[this.endPathX][this.endPathY].gotoAndStop(1);
			this.pathLayer = new AStarDetailed(this.startPathX,this.startPathY,this.endPathX,this.endPathY);
			_self__.addChild(this.pathLayer);
			this.pathLayer.x = this.startX;
			this.pathLayer.y = this.startY;
			_self__.setChildIndex(this.pathLayer,0);
			console.log("!!!");
		}

		public start_levels()
		{
			var _loc1_:any = 0;
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

		public test_save_file()
		{
		}

		public fullScreenRedraw(param1:flash.events.FullScreenEvent)
		{
			if(param1["fullScreen"])
			{
				this.fs_bg.visible = true;
			}
			else
			{
				this.fs_bg.visible = false;
			}
		}

		public normal_random(param1:number,param2:number):any
		{
			return Math.floor(Math.random() * (param2 - param1)) + param1;
		}

		public sounder_on(param1:egret.Event)
		{
			SoundMixer.soundTransform = new flash.SoundTransform(1);
			this.topper["soundClip"].b1_.visible = false;
			this.topper["soundClip"].b1.visible = true;
		}

		public sounder_off(param1:egret.Event)
		{
			SoundMixer.soundTransform = new flash.SoundTransform(0);
			this.topper["soundClip"].b1.visible = false;
			this.topper["soundClip"].b1_.visible = true;
		}

		public replay_func(param1:egret.Event)
		{
			console.log("ogooo");
			this.menuha.visible = false;
		}

		public interfaceLang():any
		{
			if(this.helper.visible == true)
			{
				if(this.lang1 == "en")
				{
					this.helper.gotoAndStop(2);
				}
			}
		}

		public lang_eng(param1:egret.Event)
		{
			this.go_lang("en");
			this.topper["langClip"].b1.visible = true;
			this.topper["langClip"].b1_.visible = false;
			this.interfaceLang();
		}

		public lang_rus(param1:egret.Event)
		{
			this.go_lang("en");
			this.topper["langClip"].b1_.visible = true;
			this.topper["langClip"].b1.visible = false;
			this.interfaceLang();
		}

		public go_lang(param1:string)
		{
			this.lang1 = param1;
			if(param1 == "en")
			{
				console.log("en");
			}
		}

		public addEvents():any
		{
			this.menuha["b1"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel1,this));
			this.menuha["b2"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel2,this));
			this.menuha["b3"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel3,this));
			this.menuha["b4"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel4,this));
			this.menuha["b5"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel5,this));
			this.menuha["b6"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel6,this));
			this.menuha["b7"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel7,this));
			this.menuha["b8"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel8,this));
			this.menuha["b9"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel9,this));
			this.menuha["b10"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel10,this));
			this.menuha["b11"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel11,this));
			this.menuha["b12"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel12,this));
			this.menuha["b13"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel13,this));
			this.menuha["b14"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel14,this));
			this.menuha["b15"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel15,this));
			this.menuha["b16"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.livel16,this));
		}

		public go_to_site(param1:flash.MouseEvent)
		{
			var e:flash.MouseEvent = param1;
			var url:string = "http://www.playogames.com/";
			var request:egret.URLRequest = new egret.URLRequest(url);
			try 
			{
				flash.navigateToURL(request,"_self");
				return ;
			}
			catch(e)
			{
				console.log("Error occurred!");
				return ;
			}
		}

		public next_level(param1:egret.Event)
		{
			this.gotoLivel(this.LIVEL + 1);
			this.b_next_level.visible = false;
			this.num.visible = false;
			this.menuha["drMenu"]();
		}

		public b_menu_URL(param1:egret.Event)
		{
		}

		public b_menu_win(param1:egret.Event)
		{
			var _self__:any = this;
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
				_self__.setChildIndex(this.menuha,this.numChildren - 1);
				this.addEvents();
				this.menuha["drMenu"]();
			}
		}

		public b_menu_help(param1:egret.Event)
		{
			var _self__:any = this;
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
				_self__.setChildIndex(this.helper,this.numChildren - 1);
			}
		}

		public gotoLivel(param1:number)
		{
			var _self__:any = this;
			this.menuha.visible = false;
			this.helper.visible = false;
			this.pole_bg.visible = true;
			this.game_first = false;
			console.log("LIVEL == tempLivel" + this.LIVEL + " " + param1);
			if(this.LIVEL !== param1)
			{
				this.activGame = false;
				_self__.gotoAndStop("livel" + param1);
				this.LIVEL = param1;
				if(this.MAX_LIVEL < this.LIVEL)
				{
					this.MAX_LIVEL = this.LIVEL;
				}
				this.startSetka.visible = true;
				this.finishSetka.visible = true;
				console.log(" livel ");
			}
			if(this.lang1 == "en")
			{
				this.livel_n.text = "Level " + this.LIVEL;
			}
		}

		public be_bac(param1:egret.Event)
		{
			this.menuha.visible = false;
		}

		public livel1(param1:egret.Event)
		{
			this.gotoLivel(1);
		}

		public livel2(param1:egret.Event)
		{
			this.gotoLivel(2);
		}

		public livel3(param1:egret.Event)
		{
			this.gotoLivel(3);
		}

		public livel4(param1:egret.Event)
		{
			this.gotoLivel(4);
		}

		public livel5(param1:egret.Event)
		{
			this.gotoLivel(5);
		}

		public livel6(param1:egret.Event)
		{
			this.gotoLivel(6);
		}

		public livel7(param1:egret.Event)
		{
			this.gotoLivel(7);
		}

		public livel8(param1:egret.Event)
		{
			this.gotoLivel(8);
		}

		public livel9(param1:egret.Event)
		{
			this.gotoLivel(9);
		}

		public livel10(param1:egret.Event)
		{
			this.gotoLivel(10);
		}

		public livel11(param1:egret.Event)
		{
			this.gotoLivel(11);
		}

		public livel12(param1:egret.Event)
		{
			this.gotoLivel(12);
		}

		public livel13(param1:egret.Event)
		{
			this.gotoLivel(13);
		}

		public livel14(param1:egret.Event)
		{
			this.gotoLivel(14);
		}

		public livel15(param1:egret.Event)
		{
			this.gotoLivel(15);
		}

		public livel16(param1:egret.Event)
		{
			this.gotoLivel(16);
		}

		public livel17(param1:egret.Event)
		{
			this.gotoLivel(17);
		}

		public livel18(param1:egret.Event)
		{
			this.gotoLivel(18);
		}

		public livel19(param1:egret.Event)
		{
			this.gotoLivel(19);
		}

		public livel20(param1:egret.Event)
		{
			this.gotoLivel(30);
		}

		public livel21(param1:egret.Event)
		{
			this.gotoLivel(21);
		}

		public livel22(param1:egret.Event)
		{
			this.gotoLivel(22);
		}

		public livel23(param1:egret.Event)
		{
			this.gotoLivel(23);
		}

		public livel24(param1:egret.Event)
		{
			this.gotoLivel(24);
		}

		public livel25(param1:egret.Event)
		{
			this.gotoLivel(25);
		}

		public frame1():any
		{
			var _self__:any = this;
			this.prohod_level = 0;
			this.MAX_LIVEL = 0;
			if(this["loaderInfo"].parameters["level"] == undefined)
			{
				this.prohod_level = 0;
			}
			else
			{
				this.prohod_level = this["loaderInfo"].parameters["level"] - 1;
				this.MAX_LIVEL = this.prohod_level;
			}
			_self__.stop();
			this["loaderInfo"].addEventListener(egret.Event.COMPLETE,flash.bind(this.loadComplete,this),null);
			this["loaderInfo"].addEventListener(egret.ProgressEvent.PROGRESS,flash.bind(this.loadProgress,this),null);
			this.lang1 = "en";
			var _loc1_:egret.URLRequest = new egret.URLRequest("http://swf.playogames.com/blockmasterads.swf");
			var _loc2_:flash.Loader = new flash.Loader();
			_loc2_.load(_loc1_);
			this.ogames.addChild(_loc2_);
		}

		public frame8():any
		{
			this.b_br.addEventListener(egret.TouchEvent.TOUCH_TAP,flash.bind(this.playGame,this),null);
		}

		public frame402():any
		{
			var _self__:any = this;
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
			this.BLOKS_color["green"] = "0x00AD00";
			this.BLOKS_color["red"] = "0xFF3300";
			this.BLOKS_color["blue"] = "0x0066CC";
			this.BLOKS_color["orange"] = "0xFF9900";
			this.BLOKS_color["purple"] = "0xCC00FF";
			this.BLOKS_color["lightblue"] = "0x0191FF";
			this.BLOKS_color["darkpurple"] = "0x882288";
			this.BLOKS_color["yellow"] = "0x999900";
			this.startPathX = 0;
			this.startPathY = 0;
			this.endPathX = 0;
			this.endPathY = 0;
			this.pathLayer = new AStarDetailed(0,0,0,0);
			this.MP = new mouse_point();
			_self__.addChild(this.MP);
			this.start_pole();
			this.test_save_file();
			this.start_levels();
			this.stage.addEventListener(FullScreenEvent.FULL_SCREEN,flash.bind(this.fullScreenRedraw,this),null);
		}

		public frame403():any
		{
			var _self__:any = this;
			this.LIVEL = 0;
			_self__.setChildIndex(this.menuha,this.numChildren - 1);
			this.topper["soundClip"].b1_.visible = false;
			this.topper["langClip"].b1.visible = false;
			this.helper.visible = false;
			this.pole_bg.visible = false;
			this.pobeda.visible = false;
			this.b_next_level.visible = false;
			this.num.visible = false;
			this.fs_bg.visible = false;
			_self__.stop();
			this.topper["soundClip"].b1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.sounder_off,this));
			this.topper["soundClip"].b1_.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.sounder_on,this));
			this.replay_b.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.replay_func,this),null);
			this.topper["langClip"].b1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.lang_rus,this));
			this.topper["langClip"].b1_.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.lang_eng,this));
			this.go_lang(this.lang1);
			this.addEvents();
			this.dmenu["b_menu"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.b_menu_win,this));
			this.dmenu["b_help"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.b_menu_help,this));
			this.helper["b1"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.b_menu_help,this));
			this.helper["b_bac"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.b_menu_help,this));
			this.b_next_level.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.next_level,this),null);
			this.topper["logo"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.go_to_site,this));
			this.dmenu["b_more_games"].addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.go_to_site,this));
		}

		public frame409():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 1;
			this.blokMass[2].ySetka = 5;
			this.blokMass[2].pointsNumb = 6;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 4;
			this.blokMass[3].ySetka = 1;
			this.blokMass[3].pointsNumb = 14;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 6;
			this.blokMass[4].ySetka = 4;
			this.blokMass[4].pointsNumb = 24;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 8;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
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
			_self__.stop();
		}

		public frame417():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 5;
			this.blokMass[2].ySetka = 5;
			this.blokMass[2].pointsNumb = 6;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 7;
			this.blokMass[3].ySetka = 5;
			this.blokMass[3].pointsNumb = 14;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 1;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 28;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 8;
			this.blokMass[5].ySetka = 1;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
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
			_self__.stop();
		}

		public frame424():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 1;
			this.blokMass[2].ySetka = 5;
			this.blokMass[2].pointsNumb = 6;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 3;
			this.blokMass[3].ySetka = 5;
			this.blokMass[3].pointsNumb = 14;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 1;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 28;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 8;
			this.blokMass[5].ySetka = 1;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 7;
			this.blokMass[6].ySetka = 8;
			this.blokMass[6].pointsNumb = 12;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
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
			_self__.stop();
		}

		public frame431():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 8;
			this.blokMass[2].ySetka = 8;
			this.blokMass[2].pointsNumb = 8;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 1;
			this.blokMass[3].pointsNumb = 12;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 17;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 1;
			this.blokMass[5].pointsNumb = 18;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 1;
			this.blokMass[6].ySetka = 6;
			this.blokMass[6].pointsNumb = 30;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
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
			_self__.stop();
		}

		public frame438():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 2;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 25;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
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
			_self__.stop();
		}

		public frame445():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 1;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 6;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 2;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 19;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 1;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 5;
			this.blokMass[6].pointsNumb = 25;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
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
			_self__.stop();
		}

		public frame452():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 2;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 12;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
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
			_self__.stop();
		}

		public frame459():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 2;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 15;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 12;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 12;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 7;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
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
			_self__.stop();
		}

		public frame466():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 6;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 9;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 5;
			this.blokMass[6].ySetka = 8;
			this.blokMass[6].pointsNumb = 12;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
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
			_self__.stop();
		}

		public frame473():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 24;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 12;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
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
			_self__.stop();
		}

		public frame480():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 20;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 15;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 9;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 7;
			this.blokMass[8].ySetka = 6;
			this.blokMass[8].pointsNumb = 10;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public frame487():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 1;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 24;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 1;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 10;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 7;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 1;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 7;
			this.blokMass[8].ySetka = 6;
			this.blokMass[8].pointsNumb = 10;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public frame494():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 6;
			this.blokMass[2].ySetka = 2;
			this.blokMass[2].pointsNumb = 10;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 1;
			this.blokMass[3].pointsNumb = 24;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 6;
			this.blokMass[4].ySetka = 6;
			this.blokMass[4].pointsNumb = 14;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 4;
			this.blokMass[5].ySetka = 6;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 1;
			this.blokMass[6].ySetka = 9;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 4;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 4;
			this.blokMass[8].ySetka = 4;
			this.blokMass[8].pointsNumb = 10;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public frame501():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 2;
			this.blokMass[2].pointsNumb = 8;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 24;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 2;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 7;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 4;
			this.blokMass[6].ySetka = 8;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 2;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 7;
			this.blokMass[8].ySetka = 6;
			this.blokMass[8].pointsNumb = 15;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public frame509():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 7;
			this.blokMass[2].ySetka = 2;
			this.blokMass[2].pointsNumb = 8;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 24;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 4;
			this.blokMass[4].ySetka = 4;
			this.blokMass[4].pointsNumb = 18;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 7;
			this.blokMass[5].ySetka = 4;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 6;
			this.blokMass[6].ySetka = 10;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 5;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 7;
			this.blokMass[8].ySetka = 6;
			this.blokMass[8].pointsNumb = 20;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public frame516():any
		{
			var _self__:any = this;
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
			this.blokMass[1].colorBlok = this.BLOKS_color["red"];
			this.blokMass[2].xSetka = 8;
			this.blokMass[2].ySetka = 9;
			this.blokMass[2].pointsNumb = 12;
			this.blokMass[2].colorBlok = this.BLOKS_color["blue"];
			this.blokMass[3].xSetka = 1;
			this.blokMass[3].ySetka = 4;
			this.blokMass[3].pointsNumb = 16;
			this.blokMass[3].colorBlok = this.BLOKS_color["green"];
			this.blokMass[4].xSetka = 6;
			this.blokMass[4].ySetka = 2;
			this.blokMass[4].pointsNumb = 17;
			this.blokMass[4].colorBlok = this.BLOKS_color["orange"];
			this.blokMass[5].xSetka = 8;
			this.blokMass[5].ySetka = 1;
			this.blokMass[5].pointsNumb = 4;
			this.blokMass[5].colorBlok = this.BLOKS_color["purple"];
			this.blokMass[6].xSetka = 9;
			this.blokMass[6].ySetka = 4;
			this.blokMass[6].pointsNumb = 6;
			this.blokMass[6].colorBlok = this.BLOKS_color["lightblue"];
			this.blokMass[7].xSetka = 10;
			this.blokMass[7].ySetka = 1;
			this.blokMass[7].pointsNumb = 6;
			this.blokMass[7].colorBlok = this.BLOKS_color["darkpurple"];
			this.blokMass[8].xSetka = 3;
			this.blokMass[8].ySetka = 8;
			this.blokMass[8].pointsNumb = 20;
			this.blokMass[8].colorBlok = this.BLOKS_color["yellow"];
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
			_self__.stop();
		}

		public __setProp___id0__Scene1_Layer10_0(param1:number):any
		{
			param1 = flash.checkInt(param1);
			if(this.__id0_ != null && param1 >= 1 && param1 <= 7 && (this.__setPropDict.getItem(this.__id0_) == undefined || <any>!(flash.tranint(this.__setPropDict.getItem(this.__id0_)) >= 1 && flash.tranint(this.__setPropDict.getItem(this.__id0_)) <= 7)))
			{
				this.__setPropDict.setItem(this.__id0_,param1);
				try 
				{
					this.__id0_["componentInspectorSetting"] = true;
				}
				catch(e)
				{}
				this.__id0_.account = "UA-89432435-1";
				this.__id0_.mode = "AS3";
				this.__id0_.visualDebug = false;
				try 
				{
					this.__id0_["componentInspectorSetting"] = false;
					return ;
				}
				catch(e)
				{
					return ;
				}
			}
		}

		public __setProp_handler(param1:any):any
		{
			var _loc2_:number = flash.checkInt(0);
			_loc2_ = flash.checkInt(this.currentFrame);
			if(this.__lastFrameProp == _loc2_)
			{
				return ;
			}
			this.__lastFrameProp = flash.checkInt(_loc2_);
			this.__setProp___id0__Scene1_Layer10_0(_loc2_);
		}

	}
}

flash.extendsClass("bm_fla.MainTimeline","egret.SwfMovie")
