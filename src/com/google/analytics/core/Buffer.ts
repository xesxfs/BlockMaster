module com {
	export module google {
		export module analytics {
			export module core {
				export class Buffer extends egret.HashObject {
					private _SO:flash.SharedObject;
					private _OBJ:any;
					private _utma:com.google.analytics.data.UTMA;
					private _utmb:com.google.analytics.data.UTMB;
					private _utmc:com.google.analytics.data.UTMC;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _utmk:com.google.analytics.data.UTMK;
					private _config:com.google.analytics.v4.Configuration;
					private _utmv:com.google.analytics.data.UTMV;
					private _utmz:com.google.analytics.data.UTMZ;
					private _volatile:boolean = false;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.debug.DebugConfiguration,param3:boolean = false,param4:any = null)
					{
						super();
						super();
						var _loc5_:boolean = <any>false;
						var _loc6_:any = null;
						this._config = param1;
						this._debug = param2;
						com.google.analytics.data.UTMB.defaultTimespan = this._config.sessionTimeout;
						com.google.analytics.data.UTMZ.defaultTimespan = this._config.conversionTimeout;
						if(<any>!param3)
						{
							this._SO = flash.SharedObject.getLocal(this._config.cookieName,this._config.cookiePath);
							_loc5_ = false;
							if(this._SO.data["utma"])
							{
								if(<any>!this.hasUTMA())
								{
									this._createUMTA();
								}
								this._utma.fromSharedObject(this._SO.data["utma"]);
								if(this._debug.verbose)
								{
									this._debug.info("found: " + this._utma.toString(true),com.google.analytics.debug.VisualDebugMode.geek);
								}
								if(this._utma.isExpired())
								{
									if(this._debug.verbose)
									{
										this._debug.warning("UTMA has expired",com.google.analytics.debug.VisualDebugMode.advanced);
									}
									this._clearUTMA();
									_loc5_ = true;
								}
							}
							if(this._SO.data["utmb"])
							{
								if(<any>!this.hasUTMB())
								{
									this._createUMTB();
								}
								this._utmb.fromSharedObject(this._SO.data["utmb"]);
								if(this._debug.verbose)
								{
									this._debug.info("found: " + this._utmb.toString(true),com.google.analytics.debug.VisualDebugMode.geek);
								}
								if(this._utmb.isExpired())
								{
									if(this._debug.verbose)
									{
										this._debug.warning("UTMB has expired",com.google.analytics.debug.VisualDebugMode.advanced);
									}
									this._clearUTMB();
									_loc5_ = true;
								}
							}
							if(this._SO.data["utmc"])
							{
								delete this._SO.data["utmc"];
								_loc5_ = true;
							}
							if(this._SO.data["utmk"])
							{
								if(<any>!this.hasUTMK())
								{
									this._createUMTK();
								}
								this._utmk.fromSharedObject(this._SO.data["utmk"]);
								if(this._debug.verbose)
								{
									this._debug.info("found: " + this._utmk.toString(),com.google.analytics.debug.VisualDebugMode.geek);
								}
							}
							if(this._SO.data["utmv"])
							{
								if(<any>!this.hasUTMV())
								{
									this._createUMTV();
								}
								this._utmv.fromSharedObject(this._SO.data["utmv"]);
								if(this._debug.verbose)
								{
									this._debug.info("found: " + this._utmv.toString(true),com.google.analytics.debug.VisualDebugMode.geek);
								}
								if(this._utmv.isExpired())
								{
									if(this._debug.verbose)
									{
										this._debug.warning("UTMV has expired",com.google.analytics.debug.VisualDebugMode.advanced);
									}
									this._clearUTMV();
									_loc5_ = true;
								}
							}
							if(this._SO.data["utmz"])
							{
								if(<any>!this.hasUTMZ())
								{
									this._createUMTZ();
								}
								this._utmz.fromSharedObject(this._SO.data["utmz"]);
								if(this._debug.verbose)
								{
									this._debug.info("found: " + this._utmz.toString(true),com.google.analytics.debug.VisualDebugMode.geek);
								}
								if(this._utmz.isExpired())
								{
									if(this._debug.verbose)
									{
										this._debug.warning("UTMZ has expired",com.google.analytics.debug.VisualDebugMode.advanced);
									}
									this._clearUTMZ();
									_loc5_ = true;
								}
							}
							if(_loc5_)
							{
								this.save();
							}
						}
						else
						{
							this._OBJ = new Object();
							if(param4)
							{
								for(_loc6_ in param4)
								{
									this._OBJ[_loc6_] = param4[_loc6_];
								}
							}
						}
						this._volatile = param3;
					}

					public save()
					{
						var flushStatus:string = <any>null;
						if(<any>!this.isVolatile())
						{
							flushStatus = null;
							try 
							{
								flushStatus = this._SO.flush();
							}
							catch(e)
							{
								this._debug.warning("Error...Could not write SharedObject to disk");
							}
							switch(flushStatus)
							{
							case SharedObjectFlushStatus.PENDING :
								this._debug.info("Requesting permission to save object...");
								this._SO.addEventListener(NetStatusEvent.NET_STATUS,flash.bind(this._onFlushStatus,this),null);
								break;
							case SharedObjectFlushStatus.FLUSHED :
								this._debug.info("Value flushed to disk.");
							}
						}
					}

					public get utmv():com.google.analytics.data.UTMV
					{
						if(<any>!this.hasUTMV())
						{
							this._createUMTV();
						}
						return this._utmv;
					}

					public clearCookies()
					{
						this.utma.reset();
						this.utmb.reset();
						this.utmc.reset();
						this.utmz.reset();
						this.utmv.reset();
						this.utmk.reset();
					}

					public get utmz():com.google.analytics.data.UTMZ
					{
						if(<any>!this.hasUTMZ())
						{
							this._createUMTZ();
						}
						return this._utmz;
					}

					public hasUTMA():boolean
					{
						if(this._utma)
						{
							return true;
						}
						return false;
					}

					public hasUTMB():boolean
					{
						if(this._utmb)
						{
							return true;
						}
						return false;
					}

					public isGenuine():boolean
					{
						if(<any>!this.hasUTMK())
						{
							return true;
						}
						return this.utmk.hash == this.generateCookiesHash();
					}

					public resetCurrentSession()
					{
						this._clearUTMB();
						this._clearUTMC();
						this.save();
					}

					public hasUTMC():boolean
					{
						if(this._utmc)
						{
							return true;
						}
						return false;
					}

					public hasUTMK():boolean
					{
						if(this._utmk)
						{
							return true;
						}
						return false;
					}

					public generateCookiesHash():number
					{
						var _loc1_:string = <any>null;
						_loc1_ = "";
						_loc1_ = _loc1_ + this.utma.valueOf();
						_loc1_ = _loc1_ + this.utmb.valueOf();
						_loc1_ = _loc1_ + this.utmc.valueOf();
						_loc1_ = _loc1_ + this.utmz.valueOf();
						_loc1_ = _loc1_ + this.utmv.valueOf();
						return com.google.analytics.core.Utils.generateHash(_loc1_);
					}

					private _createUMTA()
					{
						this._utma = new com.google.analytics.data.UTMA();
						this._utma.proxy = this;
					}

					private _createUMTB()
					{
						this._utmb = new com.google.analytics.data.UTMB();
						this._utmb.proxy = this;
					}

					private _createUMTC()
					{
						this._utmc = new com.google.analytics.data.UTMC();
					}

					public hasUTMV():boolean
					{
						if(this._utmv)
						{
							return true;
						}
						return false;
					}

					private _createUMTK()
					{
						this._utmk = new com.google.analytics.data.UTMK();
						this._utmk.proxy = this;
					}

					public hasUTMZ():boolean
					{
						if(this._utmz)
						{
							return true;
						}
						return false;
					}

					private _createUMTV()
					{
						this._utmv = new com.google.analytics.data.UTMV();
						this._utmv.proxy = this;
					}

					private _createUMTZ()
					{
						this._utmz = new com.google.analytics.data.UTMZ();
						this._utmz.proxy = this;
					}

					public updateUTMA(param1:number)
					{
						if(this._debug.verbose)
						{
							this._debug.info("updateUTMA( " + param1 + " )",com.google.analytics.debug.VisualDebugMode.advanced);
						}
						if(<any>!this.utma.isEmpty())
						{
							if(isNaN(this.utma.sessionCount))
							{
								this.utma.sessionCount = 1;
							}
							else
							{
								this.utma.sessionCount = this.utma.sessionCount + 1;
							}
							this.utma.lastTime = this.utma.currentTime;
							this.utma.currentTime = param1;
						}
					}

					private _onFlushStatus(param1:flash.events.NetStatusEvent)
					{
						this._debug.info("User closed permission dialog...");
						switch(param1["info"].code)
						{
						case "SharedObject.Flush.Success" :
							this._debug.info("User granted permission -- value saved.");
							break;
						case "SharedObject.Flush.Failed" :
							this._debug.info("User denied permission -- value not saved.");
						}
						this._SO.removeEventListener(NetStatusEvent.NET_STATUS,flash.bind(this._onFlushStatus,this),null);
					}

					private _clearUTMA()
					{
						this._utma = null;
						if(<any>!this.isVolatile())
						{
							this._SO.data["utma"] = null;
							delete this._SO.data["utma"];
						}
					}

					private _clearUTMC()
					{
						this._utmc = null;
					}

					private _clearUTMB()
					{
						this._utmb = null;
						if(<any>!this.isVolatile())
						{
							this._SO.data["utmb"] = null;
							delete this._SO.data["utmb"];
						}
					}

					public update(param1:string,param2:any)
					{
						if(this.isVolatile())
						{
							this._OBJ[param1] = param2;
						}
						else
						{
							this._SO.data[param1] = param2;
						}
					}

					private _clearUTMZ()
					{
						this._utmz = null;
						if(<any>!this.isVolatile())
						{
							this._SO.data["utmz"] = null;
							delete this._SO.data["utmz"];
						}
					}

					private _clearUTMV()
					{
						this._utmv = null;
						if(<any>!this.isVolatile())
						{
							this._SO.data["utmv"] = null;
							delete this._SO.data["utmv"];
						}
					}

					public isVolatile():boolean
					{
						return this._volatile;
					}

					public get utma():com.google.analytics.data.UTMA
					{
						if(<any>!this.hasUTMA())
						{
							this._createUMTA();
						}
						return this._utma;
					}

					public get utmb():com.google.analytics.data.UTMB
					{
						if(<any>!this.hasUTMB())
						{
							this._createUMTB();
						}
						return this._utmb;
					}

					public get utmc():com.google.analytics.data.UTMC
					{
						if(<any>!this.hasUTMC())
						{
							this._createUMTC();
						}
						return this._utmc;
					}

					public get utmk():com.google.analytics.data.UTMK
					{
						if(<any>!this.hasUTMK())
						{
							this._createUMTK();
						}
						return this._utmk;
					}

				}
			}
		}
	}
}

