module com {
	export module google {
		export module analytics {
			export module core {
				export class GIFRequest extends egret.HashObject {
					private _info:com.google.analytics.utils.Environment;
					private _count:number = 0;
					private _utmac:string;
					private _alertcount:number = 0;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _lastRequest:egret.URLRequest;
					private _buffer:com.google.analytics.core.Buffer;
					private _config:com.google.analytics.v4.Configuration;
					private _requests:Array<any>;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.debug.DebugConfiguration,param3:com.google.analytics.core.Buffer,param4:com.google.analytics.utils.Environment)
					{
						super();
						super();
						this._config = param1;
						this._debug = param2;
						this._buffer = param3;
						this._info = param4;
						this._count = flash.checkInt(0);
						this._alertcount = flash.checkInt(0);
						this._requests = [];
					}

					public get utmn():string
					{
						return <string>com.google.analytics.core.Utils.generate32bitRandom();
					}

					public onIOError(param1:flash.IOErrorEvent)
					{
						var _loc2_:string = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:any = null;
						_loc2_ = this._lastRequest.url;
						_loc3_ = String(this._requests.length - 1);
						_loc4_ = "Gif Request #" + _loc3_ + " failed";
						if(this._debug.GIFRequests)
						{
							if(<any>!this._debug.verbose)
							{
								if(_loc2_.indexOf("?") > -1)
								{
									_loc2_ = _loc2_.split("?")[0];
								}
								_loc2_ = this._shortenURL(_loc2_);
							}
							if(flash.tranint(this._debug.mode) > flash.tranint(com.google.analytics.debug.VisualDebugMode.basic))
							{
								_loc4_ = _loc4_ + (" \"" + _loc2_ + "\" does not exists or is unreachable");
							}
							this._debug.failure(_loc4_);
						}
						else
						{
							this._debug.warning(_loc4_);
						}
						this._removeListeners(param1.target);
					}

					public send(param1:string,param2:com.google.analytics.utils.Variables = null,param3:boolean = false,param4:boolean = false)
					{
						var _loc5_:string = <any>null;
						var _loc6_:egret.URLRequest = <any>null;
						var _loc7_:egret.URLRequest = <any>null;
						this._utmac = param1;
						if(<any>!param2)
						{
							param2 = new com.google.analytics.utils.Variables();
						}
						param2.URIencode = false;
						param2.pre = ["utmwv","utmn","utmhn","utmt","utme","utmcs","utmsr","utmsc","utmul","utmje","utmfl","utmdt","utmhid","utmr","utmp"];
						param2.post = ["utmcc"];
						if(this._debug.verbose)
						{
							this._debug.info("tracking: " + this._buffer.utmb["trackCount"] + "/" + this._config.trackingLimitPerSession,com.google.analytics.debug.VisualDebugMode.geek);
						}
						if(this._buffer.utmb["trackCount"] < this._config.trackingLimitPerSession || param3)
						{
							if(param4)
							{
								this.updateToken();
							}
							if(param3 || <any>!param4 || this._buffer.utmb["token"] >= 1)
							{
								if(<any>!param3 && param4)
								{
									this._buffer.utmb["token"] = this._buffer.utmb["token"] - 1;
								}
								this._buffer.utmb["trackCount"] = this._buffer.utmb["trackCount"] + 1;
								if(this._debug.verbose)
								{
									this._debug.info(this._buffer.utmb.toString(),com.google.analytics.debug.VisualDebugMode.geek);
								}
								param2["utmwv"] = this.utmwv;
								param2["utmn"] = com.google.analytics.core.Utils.generate32bitRandom();
								if(this._info.domainName != "")
								{
									param2["utmhn"] = this._info.domainName;
								}
								if(this._config.sampleRate < 1)
								{
									param2["utmsp"] = this._config.sampleRate * 100;
								}
								if(this._config.serverMode == com.google.analytics.core.ServerOperationMode.local || this._config.serverMode == com.google.analytics.core.ServerOperationMode.both)
								{
									_loc5_ = this._info.locationSWFPath;
									if(_loc5_.lastIndexOf("/") > 0)
									{
										_loc5_ = _loc5_.substring(0,_loc5_.lastIndexOf("/"));
									}
									_loc6_ = new egret.URLRequest();
									if(this._config.localGIFpath.indexOf("http") == 0)
									{
										_loc6_.url = this._config.localGIFpath;
									}
									else
									{
										_loc6_.url = _loc5_ + this._config.localGIFpath;
									}
									_loc6_.url = _loc6_.url + ("?" + param2.toString());
									if(this._debug.active && this._debug.GIFRequests)
									{
										this._debugSend(_loc6_);
									}
									else
									{
										this.sendRequest(_loc6_);
									}
								}
								if(this._config.serverMode == com.google.analytics.core.ServerOperationMode.remote || this._config.serverMode == com.google.analytics.core.ServerOperationMode.both)
								{
									_loc7_ = new egret.URLRequest();
									if(this._info.protocol == com.google.analytics.utils.Protocols.HTTPS)
									{
										_loc7_.url = this._config.secureRemoteGIFpath;
									}
									else if(this._info.protocol == com.google.analytics.utils.Protocols.HTTP)
									{
										_loc7_.url = this._config.remoteGIFpath;
									}
									else
									{
										_loc7_.url = this._config.remoteGIFpath;
									}
									param2["utmac"] = this.utmac;
									param2["utmcc"] = encodeURIComponent(this.utmcc);
									_loc7_.url = _loc7_.url + ("?" + param2.toString());
									if(this._debug.active && this._debug.GIFRequests)
									{
										this._debugSend(_loc7_);
									}
									else
									{
										this.sendRequest(_loc7_);
									}
								}
							}
						}
					}

					public onSecurityError(param1:flash.SecurityErrorEvent)
					{
						if(this._debug.GIFRequests)
						{
							this._debug.failure(param1["text"]);
						}
					}

					public get utmsp():string
					{
						return <string>this._config.sampleRate * 100;
					}

					public get utmcc():string
					{
						var _loc1_:Array<any> = <any>null;
						_loc1_ = [];
						if(this._buffer.hasUTMA())
						{
							_loc1_.push(this._buffer.utma["toURLString"]() + ";");
						}
						if(this._buffer.hasUTMZ())
						{
							_loc1_.push(this._buffer.utmz["toURLString"]() + ";");
						}
						if(this._buffer.hasUTMV())
						{
							_loc1_.push(this._buffer.utmv["toURLString"]() + ";");
						}
						return _loc1_.join("+");
					}

					public get utmac():string
					{
						return this._utmac;
					}

					public get utmwv():string
					{
						return this._config.version;
					}

					public sendRequest(param1:egret.URLRequest)
					{
						var loader:flash.Loader = <any>null;
						var context:flash.LoaderContext = <any>null;
						var request:egret.URLRequest = param1;
						loader = new flash.Loader();
						loader.name = String(this._count++);
						context = new flash.LoaderContext(false);
						loader.contentLoaderInfo.addEventListener(egret.IOErrorEvent.IO_ERROR,flash.bind(this.onIOError,this),null);
						loader.contentLoaderInfo.addEventListener(egret.Event.COMPLETE,flash.bind(this.onComplete,this),null);
						this._lastRequest = request;
						this._requests[loader.name] = new com.google.analytics.core.RequestObject(request);
						try 
						{
							loader.load(request,context);
							return ;
						}
						catch(e)
						{
							this._debug.failure("\"Loader.load()\" could not instanciate Gif Request");
							return ;
						}
					}

					private _removeListeners(param1:any)
					{
						param1["removeEventListener"](egret.IOErrorEvent.IO_ERROR,flash.bind(this.onIOError,this));
						param1["removeEventListener"](egret.Event.COMPLETE,flash.bind(this.onComplete,this));
					}

					public updateToken()
					{
						var _loc1_:number = <any>NaN;
						var _loc2_:number = <any>NaN;
						_loc1_ = new flash.As3Date().getTime();
						_loc2_ = (_loc1_ - this._buffer.utmb["lastTime"]) * (this._config.tokenRate / 1000);
						if(this._debug.verbose)
						{
							this._debug.info("tokenDelta: " + _loc2_,com.google.analytics.debug.VisualDebugMode.geek);
						}
						if(_loc2_ >= 1)
						{
							this._buffer.utmb["token"] = Math.min(Math.floor(this._buffer.utmb["token"] + _loc2_),this._config.bucketCapacity);
							this._buffer.utmb["lastTime"] = _loc1_;
							if(this._debug.verbose)
							{
								this._debug.info(this._buffer.utmb.toString(),com.google.analytics.debug.VisualDebugMode.geek);
							}
						}
					}

					private _shortenURL(param1:string):string
					{
						var _loc2_:Array<any> = <any>null;
						if(param1.length > 60)
						{
							_loc2_ = param1.split("/");
							while(param1.length > 60)
							{
								_loc2_.shift();
								param1 = "../" + _loc2_.join("/");
							}
						}
						return param1;
					}

					public get utmhn():string
					{
						return this._info.domainName;
					}

					private _debugSend(param1:egret.URLRequest)
					{
						var _loc2_:any = null;
						var _loc3_:string = <any>null;
						_loc2_ = "";
						switch(this._debug.mode)
						{
						case com.google.analytics.debug.VisualDebugMode.geek :
							_loc2_ = "Gif Request #" + this._alertcount + ":\n" + param1.url;
							break;
						case com.google.analytics.debug.VisualDebugMode.advanced :
							_loc3_ = param1.url;
							if(_loc3_.indexOf("?") > -1)
							{
								_loc3_ = _loc3_.split("?")[0];
							}
							_loc3_ = this._shortenURL(_loc3_);
							_loc2_ = "Send Gif Request #" + this._alertcount + ":\n" + _loc3_ + " ?";
							break;
						case com.google.analytics.debug.VisualDebugMode.basic :
						default :
							_loc2_ = "Send " + this._config.serverMode.toString() + " Gif Request #" + this._alertcount + " ?";
						}
						this._debug.alertGifRequest(_loc2_,param1,this);
						this._alertcount++;
					}

					public onComplete(param1:egret.Event)
					{
						var _loc2_:string = <any>null;
						var _loc3_:any = null;
						var _loc4_:string = <any>null;
						_loc2_ = param1.target["loader"].name;
						this._requests[_loc2_].complete();
						_loc3_ = "Gif Request #" + _loc2_ + " sent";
						_loc4_ = this._requests[_loc2_].request.url;
						if(this._debug.GIFRequests)
						{
							if(<any>!this._debug.verbose)
							{
								if(_loc4_.indexOf("?") > -1)
								{
									_loc4_ = _loc4_.split("?")[0];
								}
								_loc4_ = this._shortenURL(_loc4_);
							}
							if(flash.tranint(this._debug.mode) > flash.tranint(com.google.analytics.debug.VisualDebugMode.basic))
							{
								_loc3_ = _loc3_ + (" to \"" + _loc4_ + "\"");
							}
							this._debug.success(_loc3_);
						}
						else
						{
							this._debug.info(_loc3_);
						}
						this._removeListeners(param1.target);
					}

				}
			}
		}
	}
}

