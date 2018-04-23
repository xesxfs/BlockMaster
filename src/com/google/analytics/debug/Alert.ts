module com {
	export module google {
		export module analytics {
			export module debug {
				export class Alert extends com.google.analytics.debug.Label {
					public actionOnNextLine:boolean = true;
					public autoClose:boolean = true;
					private _actions:Array<any>;

					public constructor(param1:string,param2:Array<any>,param3:string = "uiAlert",param4:number = 0,param5:com.google.analytics.debug.Align = null,param6:boolean = false,param7:boolean = true)
					{
						super(param1,param3,param4,param5,param6);
						var _loc8_:number = flash.checkInt(0);
						this.autoClose = true;
						this.actionOnNextLine = true;
						if(param4 == 0)
						{
							param4 = flash.checkUint(Style.alertColor);
						}
						if(param5 == null)
						{
							param5 = com.google.analytics.debug.Align.center;
						}
						this.selectable = true;
						egret.superSetter(com.google.analytics.debug.Alert,this,"touchChildren",true);
						this["buttonMode"] = true;
						this.touchEnabled = true;
						this["useHandCursor"] = true;
						this.actionOnNextLine = param7;
						this._actions = [];
						_loc8_ = flash.checkInt(0);
						while(_loc8_ < param2.length)
						{
							param2[_loc8_].container = this;
							this._actions.push(param2[_loc8_]);
							_loc8_++;
						}
					}

					protected getAction(param1:string):com.google.analytics.debug.AlertAction
					{
						var _loc2_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(0);
						while(_loc2_ < this._actions.length)
						{
							if(param1 == this._actions[_loc2_].activator)
							{
								return this._actions[_loc2_];
							}
							_loc2_++;
						}
						return null;
					}

					protected layout()
					{
						super.layout();
						this._defineActions();
					}

					protected spaces(param1:number):string
					{
						param1 = flash.checkInt(param1);
						var _loc2_:string = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:number = flash.checkInt(0);
						_loc2_ = "";
						_loc3_ = "          ";
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < param1 + 1)
						{
							_loc2_ = _loc2_ + _loc3_;
							_loc4_++;
						}
						return _loc2_;
					}

					public onLink(param1:egret.TextEvent)
					{
						var _loc2_:com.google.analytics.debug.AlertAction = <any>null;
						if(this.isValidAction(param1.text))
						{
							_loc2_ = this.getAction(param1.text);
							if(_loc2_)
							{
								_loc2_.execute();
							}
						}
						if(this.autoClose)
						{
							this.close();
						}
					}

					protected isValidAction(param1:string):boolean
					{
						var _loc2_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(0);
						while(_loc2_ < this._actions.length)
						{
							if(param1 == this._actions[_loc2_].activator)
							{
								return true;
							}
							_loc2_++;
						}
						return false;
					}

					private _defineActions()
					{
						var _loc1_:any = null;
						var _loc2_:Array<any> = <any>null;
						var _loc3_:com.google.analytics.debug.AlertAction = <any>null;
						var _loc4_:number = flash.checkInt(0);
						_loc1_ = "";
						if(this.actionOnNextLine)
						{
							_loc1_ = _loc1_ + "\n";
						}
						else
						{
							_loc1_ = _loc1_ + " |";
						}
						_loc1_ = _loc1_ + " ";
						_loc2_ = [];
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < this._actions.length)
						{
							_loc3_ = this._actions[_loc4_];
							_loc2_.push("<a href=\"event:" + _loc3_.activator + "\">" + _loc3_.name + "</a>");
							_loc4_++;
						}
						_loc1_ = _loc1_ + _loc2_.join(" | ");
						this.appendText(_loc1_,"uiAlertAction");
					}

					public close()
					{
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

flash.extendsClass("com.google.analytics.debug.Alert","com.google.analytics.debug.Label")
