module com {
	export module google {
		export module analytics {
			export module debug {
				export class Layout extends egret.HashObject implements com.google.analytics.debug.ILayout {
					private _display:egret.DisplayObject;
					private _infoQueue:Array<any>;
					private _maxCharPerLine:number = 85;
					private _hasInfo:boolean = false;
					private _warningQueue:Array<any>;
					private _hasDebug:boolean = false;
					private _hasWarning:boolean = false;
					private _mainPanel:com.google.analytics.debug.Panel;
					private _GRAlertQueue:Array<any>;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					public visualDebug:com.google.analytics.debug.Debug;
					private _hasGRAlert:boolean = false;

					public constructor(param1:com.google.analytics.debug.DebugConfiguration,param2:egret.DisplayObject)
					{
						super();
						super();
						this._maxCharPerLine = flash.checkInt(85);
						this._display = param2;
						this._debug = param1;
						this._hasWarning = false;
						this._hasInfo = false;
						this._hasDebug = false;
						this._hasGRAlert = false;
						this._warningQueue = [];
						this._infoQueue = [];
						this._GRAlertQueue = [];
					}

					private onKey(param1:flash.KeyboardEvent = null)
					{
						switch(param1.keyCode)
						{
						case this._debug.showHideKey :
							this._mainPanel.visible = <any>!this._mainPanel.visible;
							break;
						case this._debug.destroyKey :
							this.destroy();
						}
					}

					public bringToFront(param1:egret.DisplayObject)
					{
						this._display.stage.setChildIndex(param1,this._display.stage.numChildren - 1);
					}

					public createFailureAlert(param1:string)
					{
						var _loc2_:com.google.analytics.debug.AlertAction = <any>null;
						var _loc3_:com.google.analytics.debug.Alert = <any>null;
						if(this._debug.verbose)
						{
							param1 = this._filterMaxChars(param1);
							_loc2_ = new com.google.analytics.debug.AlertAction("Close","close","close");
						}
						else
						{
							_loc2_ = new com.google.analytics.debug.AlertAction("X","close","close");
						}
						_loc3_ = new com.google.analytics.debug.FailureAlert(this._debug,param1,[_loc2_]);
						this.addToPanel("analytics",_loc3_);
						if(this._hasDebug)
						{
							if(this._debug.verbose)
							{
								param1 = param1.split("\n").join("");
								param1 = this._filterMaxChars(param1,66);
							}
							this.visualDebug.writeBold(param1);
						}
					}

					public init()
					{
						var _loc1_:number = flash.checkInt(0);
						var _loc2_:number = flash.checkUint(0);
						var _loc3_:number = flash.checkUint(0);
						var _loc4_:com.google.analytics.debug.Panel = <any>null;
						_loc1_ = flash.checkInt(10);
						_loc2_ = flash.checkUint(this._display.stage.stageWidth - _loc1_ * 2);
						_loc3_ = flash.checkUint(this._display.stage.stageHeight - _loc1_ * 2);
						_loc4_ = new com.google.analytics.debug.Panel("analytics",_loc2_,_loc3_);
						_loc4_.alignement = com.google.analytics.debug.Align.top;
						_loc4_.stickToEdge = false;
						_loc4_.title = "Google Analytics v" + com.google.analytics.GATracker.version;
						this._mainPanel = _loc4_;
						this.addToStage(_loc4_);
						this.bringToFront(_loc4_);
						if(this._debug.minimizedOnStart)
						{
							this._mainPanel.onToggle();
						}
						this.createVisualDebug();
						this._display.stage.addEventListener(flash.KeyboardEvent.KEY_DOWN,flash.bind(this.onKey,this),null,false,0);
					}

					public addToPanel(param1:string,param2:egret.DisplayObject)
					{
						var _loc3_:egret.DisplayObject = <any>null;
						var _loc4_:com.google.analytics.debug.Panel = <any>null;
						_loc3_ = this._display.stage.getChildByName(param1);
						if(_loc3_)
						{
							_loc4_ = flash.As3As(_loc3_,com.google.analytics.debug.Panel);
							_loc4_.addData(param2);
						}
						else
						{
							console.log("panel \"" + param1 + "\" not found");
						}
					}

					private _clearInfo(param1:egret.Event)
					{
						this._hasInfo = false;
						if(this._infoQueue.length > 0)
						{
							this.createInfo(this._infoQueue.shift());
						}
					}

					private _filterMaxChars(param1:string,param2:number = 0):string
					{
						var _loc3_:string = <any>null;
						var _loc4_:Array<any> = <any>null;
						var _loc5_:Array<any> = <any>null;
						var _loc6_:string = <any>null;
						var _loc7_:number = flash.checkInt(0);
						_loc3_ = "\n";
						_loc4_ = [];
						_loc5_ = param1.split(_loc3_);
						if(param2 == 0)
						{
							param2 = flash.checkInt(this._maxCharPerLine);
						}
						_loc7_ = flash.checkInt(0);
						while(_loc7_ < _loc5_.length)
						{
							_loc6_ = _loc5_[_loc7_];
							while(_loc6_.length > param2)
							{
								_loc4_.push(_loc6_.substr(0,param2));
								_loc6_ = _loc6_.substring(param2);
							}
							_loc4_.push(_loc6_);
							_loc7_++;
						}
						return _loc4_.join(_loc3_);
					}

					public createWarning(param1:string)
					{
						var _loc2_:com.google.analytics.debug.Warning = <any>null;
						if(this._hasWarning || <any>!this.isAvailable())
						{
							this._warningQueue.push(param1);
							return ;
						}
						param1 = this._filterMaxChars(param1);
						this._hasWarning = true;
						_loc2_ = new com.google.analytics.debug.Warning(param1,this._debug.warningTimeout);
						this.addToPanel("analytics",_loc2_);
						_loc2_.addEventListener(egret.Event.REMOVED_FROM_STAGE,flash.bind(this._clearWarning,this),null,false,0);
						if(this._hasDebug)
						{
							this.visualDebug.writeBold(param1);
						}
					}

					private _clearGRAlert(param1:egret.Event)
					{
						this._hasGRAlert = false;
						if(this._GRAlertQueue.length > 0)
						{
							this.createGIFRequestAlert.apply(this,this._GRAlertQueue.shift());
						}
					}

					public createSuccessAlert(param1:string)
					{
						var _loc2_:com.google.analytics.debug.AlertAction = <any>null;
						var _loc3_:com.google.analytics.debug.Alert = <any>null;
						if(this._debug.verbose)
						{
							param1 = this._filterMaxChars(param1);
							_loc2_ = new com.google.analytics.debug.AlertAction("Close","close","close");
						}
						else
						{
							_loc2_ = new com.google.analytics.debug.AlertAction("X","close","close");
						}
						_loc3_ = new com.google.analytics.debug.SuccessAlert(this._debug,param1,[_loc2_]);
						this.addToPanel("analytics",_loc3_);
						if(this._hasDebug)
						{
							if(this._debug.verbose)
							{
								param1 = param1.split("\n").join("");
								param1 = this._filterMaxChars(param1,66);
							}
							this.visualDebug.writeBold(param1);
						}
					}

					public isAvailable():boolean
					{
						return this._display.stage != null;
					}

					public createAlert(param1:string)
					{
						var _loc2_:com.google.analytics.debug.Alert = <any>null;
						param1 = this._filterMaxChars(param1);
						_loc2_ = new com.google.analytics.debug.Alert(param1,[new com.google.analytics.debug.AlertAction("Close","close","close")]);
						this.addToPanel("analytics",_loc2_);
						if(this._hasDebug)
						{
							this.visualDebug.writeBold(param1);
						}
					}

					public createInfo(param1:string)
					{
						var _loc2_:com.google.analytics.debug.Info = <any>null;
						if(this._hasInfo || <any>!this.isAvailable())
						{
							this._infoQueue.push(param1);
							return ;
						}
						param1 = this._filterMaxChars(param1);
						this._hasInfo = true;
						_loc2_ = new com.google.analytics.debug.Info(param1,this._debug.infoTimeout);
						this.addToPanel("analytics",_loc2_);
						_loc2_.addEventListener(egret.Event.REMOVED_FROM_STAGE,flash.bind(this._clearInfo,this),null,false,0);
						if(this._hasDebug)
						{
							this.visualDebug.write(param1);
						}
					}

					public createGIFRequestAlert(param1:string,param2:egret.URLRequest,param3:com.google.analytics.core.GIFRequest)
					{
						var f:Function = <any>null;
						var gra:com.google.analytics.debug.GIFRequestAlert = <any>null;
						var message:string = param1;
						var request:egret.URLRequest = param2;
						var ref:com.google.analytics.core.GIFRequest = param3;
						if(this._hasGRAlert)
						{
							this._GRAlertQueue.push([message,request,ref]);
							return ;
						}
						this._hasGRAlert = true;
						f = function ()
						{
							ref.sendRequest(request);
						};
						message = this._filterMaxChars(message);
						gra = new com.google.analytics.debug.GIFRequestAlert(message,[new com.google.analytics.debug.AlertAction("OK","ok",f),new com.google.analytics.debug.AlertAction("Cancel","cancel","close")]);
						this.addToPanel("analytics",gra);
						gra.addEventListener(egret.Event.REMOVED_FROM_STAGE,flash.bind(this._clearGRAlert,this),null,false,0);
						if(this._hasDebug)
						{
							if(this._debug.verbose)
							{
								message = message.split("\n").join("");
								message = this._filterMaxChars(message,66);
							}
							this.visualDebug.write(message);
						}
					}

					public createVisualDebug()
					{
						if(<any>!this.visualDebug)
						{
							this.visualDebug = new com.google.analytics.debug.Debug();
							this.visualDebug.alignement = com.google.analytics.debug.Align.bottom;
							this.visualDebug.stickToEdge = true;
							this.addToPanel("analytics",this.visualDebug);
							this._hasDebug = true;
						}
					}

					public addToStage(param1:egret.DisplayObject)
					{
						this._display.stage.addChild(param1);
					}

					private _clearWarning(param1:egret.Event)
					{
						this._hasWarning = false;
						if(this._warningQueue.length > 0)
						{
							this.createWarning(this._warningQueue.shift());
						}
					}

					public createPanel(param1:string,param2:number,param3:number)
					{
						param2 = flash.checkUint(param2);
						param3 = flash.checkUint(param3);
						var _loc4_:com.google.analytics.debug.Panel = <any>null;
						_loc4_ = new com.google.analytics.debug.Panel(param1,param2,param3);
						_loc4_.alignement = com.google.analytics.debug.Align.center;
						_loc4_.stickToEdge = false;
						this.addToStage(_loc4_);
						this.bringToFront(_loc4_);
					}

					public destroy()
					{
						this._mainPanel.close();
						this._debug.layout = null;
					}

				}
			}
		}
	}
}

flash.implementsClass("com.google.analytics.debug.Layout",["com.google.analytics.debug.ILayout"]);