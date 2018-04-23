module com {
	export module google {
		export module analytics {
			export module debug {
				export class DebugConfiguration extends egret.HashObject {
					public showHideKey:number = NaN;
					private _mode:com.google.analytics.debug.VisualDebugMode;
					private _verbose:boolean = false;
					public destroyKey:number = NaN;
					public GIFRequests:boolean = false;
					public infoTimeout:number = 1000;
					public showInfos:boolean = true;
					public minimizedOnStart:boolean = false;
					private _active:boolean = false;
					public traceOutput:boolean = false;
					public layout:com.google.analytics.debug.ILayout;
					public warningTimeout:number = 1500;
					public javascript:boolean = false;
					public showWarnings:boolean = true;
					private _visualInitialized:boolean = false;

					public constructor()
					{
						super();
						super();
						this._active = false;
						this._verbose = false;
						this._visualInitialized = false;
						this._mode = com.google.analytics.debug.VisualDebugMode.basic;
						this.traceOutput = false;
						this.javascript = false;
						this.GIFRequests = false;
						this.showInfos = true;
						this.infoTimeout = 1000;
						this.showWarnings = true;
						this.warningTimeout = 1500;
						this.minimizedOnStart = false;
						this.showHideKey = flash.Keyboard.SPACE;
						this.destroyKey = flash.Keyboard.BACKSPACE;
					}

					public get verbose():boolean
					{
						return this._verbose;
					}

					public set verbose(param1:boolean)
					{
						this._verbose = param1;
					}

					public set mode(param1:any)
					{
						if(flash.As3is(param1,"string"))
						{
							switch(param1)
							{
							case "geek" :
								param1 = com.google.analytics.debug.VisualDebugMode.geek;
								break;
							case "advanced" :
								param1 = com.google.analytics.debug.VisualDebugMode.advanced;
								break;
							default :
							case "basic" :
								param1 = com.google.analytics.debug.VisualDebugMode.basic;
							}
						}
						this._mode = param1;
					}

					public success(param1:string)
					{
						if(this.layout)
						{
							this.layout.createSuccessAlert(param1);
						}
						if(this.traceOutput)
						{
							this.trace("[+] " + param1 + " !!");
						}
					}

					public get active():boolean
					{
						return this._active;
					}

					private _initializeVisual()
					{
						if(this.layout)
						{
							this.layout.init();
							this._visualInitialized = true;
						}
					}

					private _destroyVisual()
					{
						if(this.layout && this._visualInitialized)
						{
							this.layout.destroy();
						}
					}

					public warning(param1:string,param2:com.google.analytics.debug.VisualDebugMode = null)
					{
						if(this._filter(param2))
						{
							return ;
						}
						if(this.layout && this.showWarnings)
						{
							this.layout.createWarning(param1);
						}
						if(this.traceOutput)
						{
							this.trace("## " + param1 + " ##");
						}
					}

					private _filter(param1:com.google.analytics.debug.VisualDebugMode = null):boolean
					{
						return param1 && flash.tranint(param1) >= flash.tranint(this.mode);
					}

					public failure(param1:string)
					{
						if(this.layout)
						{
							this.layout.createFailureAlert(param1);
						}
						if(this.traceOutput)
						{
							this.trace("[-] " + param1 + " !!");
						}
					}

					public get mode():any
					{
						return this._mode;
					}

					public set active(param1:boolean)
					{
						this._active = param1;
						if(this._active)
						{
							this._initializeVisual();
						}
						else
						{
							this._destroyVisual();
						}
					}

					protected trace(param1:string)
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:any = null;
						var _loc4_:any = null;
						var _loc5_:number = flash.checkInt(0);
						var _loc6_:number = flash.checkInt(0);
						var _loc7_:Array<any> = <any>null;
						var _loc8_:number = flash.checkInt(0);
						_loc2_ = [];
						_loc3_ = "";
						_loc4_ = "";
						if(this.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							_loc3_ = egret.getTimer() + " - ";
							_loc4_ = new Array(_loc3_.length).join(" ") + " ";
						}
						if(param1.indexOf("\n") > -1)
						{
							_loc7_ = param1.split("\n");
							_loc8_ = flash.checkInt(0);
							while(_loc8_ < _loc7_.length)
							{
								if(_loc7_[_loc8_] != "")
								{
									if(_loc8_ == 0)
									{
										_loc2_.push(_loc3_ + _loc7_[_loc8_]);
									}
									else
									{
										_loc2_.push(_loc4_ + _loc7_[_loc8_]);
									}
								}
								_loc8_++;
							}
						}
						else
						{
							_loc2_.push(_loc3_ + param1);
						}
						_loc5_ = flash.checkInt(_loc2_.length);
						_loc6_ = flash.checkInt(0);
						while(_loc6_ < _loc5_)
						{
							this.trace(_loc2_[_loc6_]);
							_loc6_++;
						}
					}

					public alert(param1:string)
					{
						if(this.layout)
						{
							this.layout.createAlert(param1);
						}
						if(this.traceOutput)
						{
							this.trace("!! " + param1 + " !!");
						}
					}

					public info(param1:string,param2:com.google.analytics.debug.VisualDebugMode = null)
					{
						if(this._filter(param2))
						{
							return ;
						}
						if(this.layout && this.showInfos)
						{
							this.layout.createInfo(param1);
						}
						if(this.traceOutput)
						{
							this.trace(param1);
						}
					}

					public alertGifRequest(param1:string,param2:egret.URLRequest,param3:com.google.analytics.core.GIFRequest)
					{
						if(this.layout)
						{
							this.layout.createGIFRequestAlert(param1,param2,param3);
						}
						if(this.traceOutput)
						{
							this.trace(">> " + param1 + " <<");
						}
					}

				}
			}
		}
	}
}

