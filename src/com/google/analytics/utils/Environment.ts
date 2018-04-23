module com {
	export module google {
		export module analytics {
			export module utils {
				export class Environment extends egret.HashObject {
					private _dom:com.google.analytics.external.HTMLDOM;
					private _appName:string;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _appVersion:com.google.analytics.utils.Version;
					private _url:string;
					private _protocol:com.google.analytics.utils.Protocols;
					private _userAgent:com.google.analytics.utils.UserAgent;

					public constructor(param1:string = "",param2:string = "",param3:string = "",param4:com.google.analytics.debug.DebugConfiguration = null,param5:com.google.analytics.external.HTMLDOM = null)
					{
						super();
						super();
						var _loc6_:com.google.analytics.utils.Version = <any>null;
						if(param2 == "")
						{
							if(this.isAIR())
							{
								param2 = "AIR";
							}
							else
							{
								param2 = "Flash";
							}
						}
						if(param3 == "")
						{
							_loc6_ = this.flashVersion;
						}
						else
						{
							_loc6_ = com.google.analytics.utils.Version.fromString(param3);
						}
						this._url = param1;
						this._appName = param2;
						this._appVersion = _loc6_;
						this._debug = param4;
						this._dom = param5;
					}

					public isAIR():boolean
					{
						return this.playerType == "Desktop" && flash.Security["sandboxType"].toString() == "application";
					}

					public get playerType():string
					{
						return flash.Capabilities.playerType;
					}

					public get locationSearch():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._dom["search"];
						if(_loc1_)
						{
							return _loc1_;
						}
						return "";
					}

					public get protocol():com.google.analytics.utils.Protocols
					{
						if(<any>!this._protocol)
						{
							this._findProtocol();
						}
						return this._protocol;
					}

					public get flashVersion():com.google.analytics.utils.Version
					{
						var _loc1_:com.google.analytics.utils.Version = <any>null;
						_loc1_ = com.google.analytics.utils.Version.fromString(flash.Capabilities.version.split(" ")[1],",");
						return _loc1_;
					}

					public get screenWidth():number
					{
						return flash.Capabilities.screenResolutionX;
					}

					public get languageEncoding():string
					{
						var _loc1_:string = <any>null;
						if(flash.System["useCodePage"])
						{
							_loc1_ = this._dom["characterSet"];
							if(_loc1_)
							{
								return _loc1_;
							}
							return "-";
						}
						return "UTF-8";
					}

					public get appName():string
					{
						return this._appName;
					}

					public get screenColorDepth():string
					{
						var _loc1_:string = <any>null;
						var _loc2_:string = <any>null;
						switch(flash.Capabilities.screenColor)
						{
						case "bw" :
							_loc1_ = "1";
							break;
						case "gray" :
							_loc1_ = "2";
							break;
						case "color" :
						default :
							_loc1_ = "24";
						}
						_loc2_ = this._dom["colorDepth"];
						if(_loc2_)
						{
							_loc1_ = _loc2_;
						}
						return _loc1_;
					}

					private _findProtocol()
					{
						var _loc1_:com.google.analytics.utils.Protocols = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:string = <any>null;
						var _loc5_:string = <any>null;
						_loc1_ = com.google.analytics.utils.Protocols.none;
						if(this._url != "")
						{
							_loc4_ = this._url.toLowerCase();
							_loc5_ = _loc4_.substr(0,5);
							switch(_loc5_)
							{
							case "file:" :
								_loc1_ = com.google.analytics.utils.Protocols.file;
								break;
							case "http:" :
								_loc1_ = com.google.analytics.utils.Protocols.HTTP;
								break;
							case "https" :
								if(_loc4_.charAt(5) == ":")
								{
									_loc1_ = com.google.analytics.utils.Protocols.HTTPS;
								}
								break;
							default :
								this._protocol = com.google.analytics.utils.Protocols.none;
							}
						}
						_loc2_ = this._dom["protocol"];
						_loc3_ = (_loc1_.toString() + ":").toLowerCase();
						if(_loc2_ && _loc2_ != _loc3_ && this._debug)
						{
							this._debug.warning("Protocol mismatch: SWF=" + _loc3_ + ", DOM=" + _loc2_);
						}
						this._protocol = _loc1_;
					}

					public get locationSWFPath():string
					{
						return this._url;
					}

					public get platform():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = flash.Capabilities.manufacturer;
						return _loc1_.split("Adobe ")[1];
					}

					public get operatingSystem():string
					{
						return flash.Capabilities.os;
					}

					public set appName(param1:string)
					{
						this._appName = param1;
						this.userAgent.applicationProduct = param1;
					}

					public get userAgent():com.google.analytics.utils.UserAgent
					{
						if(<any>!this._userAgent)
						{
							this._userAgent = new com.google.analytics.utils.UserAgent(this,this.appName,this.appVersion.toString(4));
						}
						return this._userAgent;
					}

					public set url(param1:string)
					{
						this._url = param1;
					}

					public get referrer():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._dom["referrer"];
						if(_loc1_)
						{
							return _loc1_;
						}
						if(this.protocol == com.google.analytics.utils.Protocols.file)
						{
							return "localhost";
						}
						return "";
					}

					public isInHTML():boolean
					{
						return flash.Capabilities.playerType == "PlugIn";
					}

					public get language():string
					{
						var _loc1_:string = <any>null;
						var _loc2_:string = <any>null;
						_loc1_ = this._dom["language"];
						_loc2_ = flash.Capabilities.language;
						if(_loc1_)
						{
							if(_loc1_.length > _loc2_.length && _loc1_.substr(0,_loc2_.length) == _loc2_)
							{
								_loc2_ = _loc1_;
							}
						}
						return _loc2_;
					}

					public get domainName():string
					{
						var _loc1_:string = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:number = flash.checkInt(0);
						if(this.protocol == com.google.analytics.utils.Protocols.HTTP || this.protocol == com.google.analytics.utils.Protocols.HTTPS)
						{
							_loc1_ = this._url.toLowerCase();
							if(this.protocol == com.google.analytics.utils.Protocols.HTTP)
							{
								_loc2_ = _loc1_.split("http://").join("");
							}
							else if(this.protocol == com.google.analytics.utils.Protocols.HTTPS)
							{
								_loc2_ = _loc1_.split("https://").join("");
							}
							_loc3_ = flash.checkInt(_loc2_.indexOf("/"));
							if(_loc3_ > -1)
							{
								_loc2_ = _loc2_.substring(0,_loc3_);
							}
							return _loc2_;
						}
						if(this.protocol == com.google.analytics.utils.Protocols.file)
						{
							return "localhost";
						}
						return "";
					}

					public set userAgent(param1:com.google.analytics.utils.UserAgent)
					{
						this._userAgent = param1;
					}

					public set appVersion(param1:com.google.analytics.utils.Version)
					{
						this._appVersion = param1;
						this.userAgent.applicationVersion = param1.toString(4);
					}

					public get screenHeight():number
					{
						return flash.Capabilities.screenResolutionY;
					}

					public get locationPath():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._dom["pathname"];
						if(_loc1_)
						{
							return _loc1_;
						}
						return "";
					}

					public get documentTitle():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._dom["title"];
						if(_loc1_)
						{
							return _loc1_;
						}
						return "";
					}

					public get appVersion():com.google.analytics.utils.Version
					{
						return this._appVersion;
					}

				}
			}
		}
	}
}

