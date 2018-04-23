module com {
	export module google {
		export module analytics {
			export module debug {
				export class Panel extends com.google.analytics.debug.UISprite {
					protected baseAlpha:number = NaN;
					private _border:egret.Shape;
					private _name:string;
					private _title:com.google.analytics.debug.Label;
					private _data:com.google.analytics.debug.UISprite;
					private _backgroundColor:number = 0;
					private _colapsed:boolean = false;
					private _stickToEdge:boolean = false;
					private _background:egret.Shape;
					private _savedW:number = 0;
					private _mask:egret.Sprite;
					private _savedH:number = 0;
					private _borderColor:number = 0;

					public constructor(param1:string,param2:number,param3:number,param4:number = 0,param5:number = 0,param6:number = 0.3,param7:com.google.analytics.debug.Align = null,param8:boolean = false)
					{
						super();
						this._name = param1;
						this.name = param1;
						this.touchEnabled = false;
						this._colapsed = false;
						this.forcedWidth = param2;
						this.forcedHeight = param3;
						this.baseAlpha = param6;
						this._background = new egret.Shape();
						this._data = new com.google.analytics.debug.UISprite();
						this._data.forcedWidth = param2;
						this._data.forcedHeight = param3;
						this._data.touchEnabled = false;
						this._title = new com.google.analytics.debug.Label(param1,"uiLabel",16777215,com.google.analytics.debug.Align.topLeft,param8);
						this._title["buttonMode"] = true;
						this._title.margin.top = flash.checkInt(0.6);
						this._title.margin.left = flash.checkInt(0.6);
						this._title.addEventListener(egret.TouchEvent.TOUCH_TAP,flash.bind(this.onToggle,this),null);
						this._title.touchChildren = false;
						this._border = new egret.Shape();
						this._mask = new egret.Sprite();
						this._mask["useHandCursor"] = false;
						this._mask.touchEnabled = false;
						this._mask.touchChildren = false;
						if(param7 == null)
						{
							param7 = com.google.analytics.debug.Align.none;
						}
						this.alignement = param7;
						this.stickToEdge = param8;
						if(param4 == 0)
						{
							param4 = flash.checkUint(Style.backgroundColor);
						}
						this._backgroundColor = flash.checkUint(param4);
						if(param5 == 0)
						{
							param5 = flash.checkUint(Style.borderColor);
						}
						this._borderColor = flash.checkUint(param5);
					}

					public set stickToEdge(param1:boolean)
					{
						this._stickToEdge = param1;
						this._title.stickToEdge = param1;
					}

					public onToggle(param1:flash.MouseEvent = null)
					{
						if(this._colapsed)
						{
							this._data.visible = true;
						}
						else
						{
							this._data.visible = false;
						}
						this._colapsed = <any>!this._colapsed;
						this._update();
						this.resize();
					}

					protected dispose()
					{
						this._title.removeEventListener(egret.TouchEvent.TOUCH_TAP,flash.bind(this.onToggle,this),null);
						super.dispose();
					}

					private _draw()
					{
						var _loc1_:number = flash.checkUint(0);
						var _loc2_:number = flash.checkUint(0);
						var _loc3_:egret.Graphics = <any>null;
						var _loc4_:egret.Graphics = <any>null;
						var _loc5_:egret.Graphics = <any>null;
						var _loc6_:egret.Graphics = <any>null;
						if(this._savedW && this._savedH)
						{
							this.forcedWidth = this._savedW;
							this.forcedHeight = this._savedH;
						}
						if(<any>!this._colapsed)
						{
							_loc1_ = flash.checkUint(this.forcedWidth);
							_loc2_ = flash.checkUint(this.forcedHeight);
						}
						else
						{
							_loc1_ = flash.checkUint(this._title.width);
							_loc2_ = flash.checkUint(this._title.height);
							this._savedW = flash.checkUint(this.forcedWidth);
							this._savedH = flash.checkUint(this.forcedHeight);
							this.forcedWidth = _loc1_;
							this.forcedHeight = _loc2_;
						}
						_loc3_ = this._background.graphics;
						_loc3_.clear();
						_loc3_.beginFill(this._backgroundColor);
						com.google.analytics.debug.Background.drawRounded(this,_loc3_,_loc1_,_loc2_);
						_loc3_.endFill();
						_loc4_ = this._data.graphics;
						_loc4_.clear();
						_loc4_.beginFill(this._backgroundColor,0);
						com.google.analytics.debug.Background.drawRounded(this,_loc4_,_loc1_,_loc2_);
						_loc4_.endFill();
						_loc5_ = this._border.graphics;
						_loc5_.clear();
						_loc5_.lineStyle(0.1,this._borderColor);
						com.google.analytics.debug.Background.drawRounded(this,_loc5_,_loc1_,_loc2_);
						_loc5_.endFill();
						_loc6_ = this._mask.graphics;
						_loc6_.clear();
						_loc6_.beginFill(this._backgroundColor);
						com.google.analytics.debug.Background.drawRounded(this,_loc6_,_loc1_ + 1,_loc2_ + 1);
						_loc6_.endFill();
					}

					protected layout()
					{
						var _self__:any = this;
						this._update();
						_self__.addChild(this._background);
						_self__.addChild(this._data);
						_self__.addChild(this._title);
						_self__.addChild(this._border);
						_self__.addChild(this._mask);
						this.mask = this._mask;
					}

					public get title():string
					{
						return this._title.text;
					}

					public get stickToEdge():boolean
					{
						return this._stickToEdge;
					}

					public set title(param1:string)
					{
						this._title.text = param1;
					}

					private _update()
					{
						this._draw();
						if(this.baseAlpha < 1)
						{
							this._background.alpha = this.baseAlpha;
							this._border.alpha = this.baseAlpha;
						}
					}

					public addData(param1:egret.DisplayObject)
					{
						this._data.addChild(param1);
					}

					public close()
					{
						this.dispose();
						if(this.parent != null)
						{
							this.parent.removeChild(this);
						}
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.debug.Panel","com.google.analytics.debug.UISprite")
