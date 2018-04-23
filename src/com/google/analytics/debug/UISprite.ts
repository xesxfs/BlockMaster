module com {
	export module google {
		export module analytics {
			export module debug {
				export class UISprite extends egret.Sprite {
					private _forcedHeight:number = 0;
					protected listenResize:boolean = false;
					public alignement:com.google.analytics.debug.Align;
					private _forcedWidth:number = 0;
					public margin:com.google.analytics.debug.Margin;
					protected alignTarget:egret.DisplayObject;

					public constructor(param1:egret.DisplayObject = null)
					{
						super(						var _self__:any = this;
);
						this.listenResize = false;
						this.alignement = com.google.analytics.debug.Align.none;
						this.alignTarget = param1;
						this.margin = new com.google.analytics.debug.Margin();
						_self__.addEventListener(egret.Event.ADDED_TO_STAGE,flash.bind(this._onAddedToStage,this),null);
						_self__.addEventListener(egret.Event.REMOVED_FROM_STAGE,flash.bind(this._onRemovedFromStage,this),null);
					}

					protected dispose()
					{
						var _self__:any = this;
						var _loc1_:egret.DisplayObject = <any>null;
						var _loc2_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(0);
						while(_loc2_ < this.numChildren)
						{
							_loc1_ = _self__.getChildAt(_loc2_);
							if(_loc1_)
							{
								_self__.removeChild(_loc1_);
							}
							_loc2_++;
						}
					}

					protected layout()
					{
					}

					public get forcedHeight():number
					{
						if(this._forcedHeight)
						{
							return this._forcedHeight;
						}
						return this.height;
					}

					public alignTo(param1:com.google.analytics.debug.Align,param2:egret.DisplayObject = null)
					{
						var _loc3_:number = flash.checkUint(0);
						var _loc4_:number = flash.checkUint(0);
						var _loc5_:number = flash.checkUint(0);
						var _loc6_:number = flash.checkUint(0);
						var _loc7_:com.google.analytics.debug.UISprite = <any>null;
						if(param2 == null)
						{
							if(flash.As3is(this.parent,egret.Stage))
							{
								param2 = this.stage;
							}
							else
							{
								param2 = this.parent;
							}
						}
						if(param2 == this.stage)
						{
							if(this.stage == null)
							{
								return ;
							}
							_loc3_ = flash.checkUint(this.stage.stageHeight);
							_loc4_ = flash.checkUint(this.stage.stageWidth);
							_loc5_ = flash.checkUint(0);
							_loc6_ = flash.checkUint(0);
						}
						else
						{
							_loc7_ = flash.As3As(param2,com.google.analytics.debug.UISprite);
							if(_loc7_.forcedHeight)
							{
								_loc3_ = flash.checkUint(_loc7_.forcedHeight);
							}
							else
							{
								_loc3_ = flash.checkUint(_loc7_.height);
							}
							if(_loc7_.forcedWidth)
							{
								_loc4_ = flash.checkUint(_loc7_.forcedWidth);
							}
							else
							{
								_loc4_ = flash.checkUint(_loc7_.width);
							}
							_loc5_ = flash.checkUint(0);
							_loc6_ = flash.checkUint(0);
						}
						switch(param1)
						{
						case com.google.analytics.debug.Align.top :
							this.x = _loc4_ / 2 - this.forcedWidth / 2;
							this.y = _loc6_ + this.margin.top;
							break;
						case com.google.analytics.debug.Align.bottom :
							this.x = _loc4_ / 2 - this.forcedWidth / 2;
							this.y = _loc6_ + _loc3_ - this.forcedHeight - this.margin.bottom;
							break;
						case com.google.analytics.debug.Align.left :
							this.x = _loc5_ + this.margin.left;
							this.y = _loc3_ / 2 - this.forcedHeight / 2;
							break;
						case com.google.analytics.debug.Align.right :
							this.x = _loc5_ + _loc4_ - this.forcedWidth - this.margin.right;
							this.y = _loc3_ / 2 - this.forcedHeight / 2;
							break;
						case com.google.analytics.debug.Align.center :
							this.x = _loc4_ / 2 - this.forcedWidth / 2;
							this.y = _loc3_ / 2 - this.forcedHeight / 2;
							break;
						case com.google.analytics.debug.Align.topLeft :
							this.x = _loc5_ + this.margin.left;
							this.y = _loc6_ + this.margin.top;
							break;
						case com.google.analytics.debug.Align.topRight :
							this.x = _loc5_ + _loc4_ - this.forcedWidth - this.margin.right;
							this.y = _loc6_ + this.margin.top;
							break;
						case com.google.analytics.debug.Align.bottomLeft :
							this.x = _loc5_ + this.margin.left;
							this.y = _loc6_ + _loc3_ - this.forcedHeight - this.margin.bottom;
							break;
						case com.google.analytics.debug.Align.bottomRight :
							this.x = _loc5_ + _loc4_ - this.forcedWidth - this.margin.right;
							this.y = _loc6_ + _loc3_ - this.forcedHeight - this.margin.bottom;
						}
						if(<any>!this.listenResize && param1 != com.google.analytics.debug.Align.none)
						{
							param2.addEventListener(egret.Event.RESIZE,flash.bind(this.onResize,this),null,false,0);
							this.listenResize = true;
						}
						this.alignement = param1;
						this.alignTarget = param2;
					}

					public get forcedWidth():number
					{
						if(this._forcedWidth)
						{
							return this._forcedWidth;
						}
						return this.width;
					}

					protected onResize(param1:egret.Event)
					{
						this.resize();
					}

					private _onRemovedFromStage(param1:egret.Event)
					{
						var _self__:any = this;
						_self__.removeEventListener(egret.Event.ADDED_TO_STAGE,flash.bind(this._onAddedToStage,this),null);
						_self__.removeEventListener(egret.Event.REMOVED_FROM_STAGE,flash.bind(this._onRemovedFromStage,this),null);
						this.dispose();
					}

					public resize()
					{
						if(this.alignement != com.google.analytics.debug.Align.none)
						{
							this.alignTo(this.alignement,this.alignTarget);
						}
					}

					private _onAddedToStage(param1:egret.Event)
					{
						this.layout();
						this.resize();
					}

					public set forcedHeight(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._forcedHeight = flash.checkUint(param1);
					}

					public set forcedWidth(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._forcedWidth = flash.checkUint(param1);
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.debug.UISprite","egret.Sprite")
