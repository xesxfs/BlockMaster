module com {
	export module google {
		export module analytics {
			export module debug {
				export class Debug extends com.google.analytics.debug.Label {
					public static count_static_com_google_analytics_debug_Debug:number;
					private _lines:Array<any>;
					private _preferredForcedWidth:number = 540;
					public maxLines:number = 16;
					private _linediff:number = 0;

					public constructor(param1:number = 0,param2:com.google.analytics.debug.Align = null,param3:boolean = false)
					{
						super(						var _self__:any = this;
"","uiLabel",param1,param2,param3);
						this._linediff = flash.checkInt(0);
						this._preferredForcedWidth = flash.checkUint(540);
						this.maxLines = flash.checkUint(16);
						if(param2 == null)
						{
							param2 = com.google.analytics.debug.Align.bottom;
						}
						this.name = "Debug" + com.google.analytics.debug.Debug.count_static_com_google_analytics_debug_Debug++;
						this._lines = [];
						this.selectable = true;
						_self__.addEventListener(flash.KeyboardEvent.KEY_DOWN,flash.bind(this.onKey,this),null);
					}

					public close()
					{
						this.dispose();
					}

					public writeBold(param1:string)
					{
						this.write(param1,true);
					}

					protected dispose()
					{
						var _self__:any = this;
						_self__.removeEventListener(flash.KeyboardEvent.KEY_DOWN,flash.bind(this.onKey,this),null);
						super.dispose();
					}

					public get forcedWidth():number
					{
						if(this.parent)
						{
							if((<com.google.analytics.debug.UISprite>(this.parent)).forcedWidth > this._preferredForcedWidth)
							{
								return this._preferredForcedWidth;
							}
							return (<com.google.analytics.debug.UISprite>(this.parent)).forcedWidth;
						}
						return egret.superGetter(com.google.analytics.debug.Debug,this,"forcedWidth");
					}

					public set forcedWidth(value:number)
		{
			egret.superSetter(com.google.analytics.debug.Debug, this, "forcedWidth", value);
		}
	
 					private onKey(param1:flash.KeyboardEvent = null)
					{
						var _loc2_:Array<any> = <any>null;
						switch(param1.keyCode)
						{
						case flash.Keyboard.DOWN :
							_loc2_ = this._getLinesToDisplay(1);
							break;
						case flash.Keyboard.UP :
							_loc2_ = this._getLinesToDisplay(-1);
							break;
						default :
							_loc2_ = null;
						}
						if(_loc2_ == null)
						{
							return ;
						}
						this.text = _loc2_.join("\n");
					}

					public write(param1:string,param2:boolean = false)
					{
						var _loc3_:Array<any> = <any>null;
						var _loc4_:string = <any>null;
						var _loc5_:string = <any>null;
						var _loc6_:number = flash.checkInt(0);
						var _loc7_:Array<any> = <any>null;
						if(param1.indexOf("") > -1)
						{
							_loc3_ = param1.split("\n");
						}
						else
						{
							_loc3_ = [param1];
						}
						_loc4_ = "";
						_loc5_ = "";
						if(param2)
						{
							_loc4_ = "<b>";
							_loc5_ = "</b>";
						}
						_loc6_ = flash.checkInt(0);
						while(_loc6_ < _loc3_.length)
						{
							this._lines.push(_loc4_ + _loc3_[_loc6_] + _loc5_);
							_loc6_++;
						}
						_loc7_ = this._getLinesToDisplay();
						this.text = _loc7_.join("\n");
					}

					private _getLinesToDisplay(param1:number = 0):Array<any>
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:number = flash.checkUint(0);
						var _loc4_:number = flash.checkUint(0);
						if(this._lines.length - 1 > this.maxLines)
						{
							if(this._linediff <= 0)
							{
								this._linediff = flash.checkInt(this._linediff + param1);
							}
							else if(this._linediff > 0 && param1 < 0)
							{
								this._linediff = flash.checkInt(this._linediff + param1);
							}
							_loc3_ = flash.checkUint(this._lines.length - this.maxLines + this._linediff);
							_loc4_ = flash.checkUint(_loc3_ + this.maxLines);
							_loc2_ = this._lines.slice(_loc3_,_loc4_);
						}
						else
						{
							_loc2_ = this._lines;
						}
						return _loc2_;
					}

				}
			}
		}
	}
}

com.google.analytics.debug.Debug.count_static_com_google_analytics_debug_Debug = 0;
flash.extendsClass("com.google.analytics.debug.Debug","com.google.analytics.debug.Label")
