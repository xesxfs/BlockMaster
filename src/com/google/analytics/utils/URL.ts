module com {
	export module google {
		export module analytics {
			export module utils {
				export class URL extends egret.HashObject {
					private _url:string;

					public constructor(param1:string = "")
					{
						super();
						super();
						this._url = param1.toLowerCase();
					}

					public get domain():string
					{
						var _loc1_:Array<any> = <any>null;
						if(this.hostName != "" && this.hostName.indexOf(".") > -1)
						{
							_loc1_ = this.hostName.split(".");
							switch(_loc1_.length)
							{
							case 2 :
								return this.hostName;
							case 3 :
								if(_loc1_[1] == "co")
								{
									return this.hostName;
								}
								_loc1_.shift();
								return _loc1_.join(".");
							case 4 :
								_loc1_.shift();
								return _loc1_.join(".");
							}
						}
						return "";
					}

					public get path():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._url;
						if(_loc1_.indexOf("://") > -1)
						{
							_loc1_ = _loc1_.split("://")[1];
						}
						if(_loc1_.indexOf(this.hostName) == 0)
						{
							_loc1_ = _loc1_.substr(this.hostName.length);
						}
						if(_loc1_.indexOf("?") > -1)
						{
							_loc1_ = _loc1_.split("?")[0];
						}
						if(_loc1_.charAt(0) != "/")
						{
							_loc1_ = "/" + _loc1_;
						}
						return _loc1_;
					}

					public get search():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._url;
						if(_loc1_.indexOf("://") > -1)
						{
							_loc1_ = _loc1_.split("://")[1];
						}
						if(_loc1_.indexOf(this.hostName) == 0)
						{
							_loc1_ = _loc1_.substr(this.hostName.length);
						}
						if(_loc1_.indexOf("?") > -1)
						{
							_loc1_ = _loc1_.split("?")[1];
						}
						else
						{
							_loc1_ = "";
						}
						return _loc1_;
					}

					public get subDomain():string
					{
						if(this.domain != "" && this.domain != this.hostName)
						{
							return this.hostName.split("." + this.domain).join("");
						}
						return "";
					}

					public get protocol():com.google.analytics.utils.Protocols
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._url.split("://")[0];
						switch(_loc1_)
						{
						case "file" :
							return com.google.analytics.utils.Protocols.file;
						case "http" :
							return com.google.analytics.utils.Protocols.HTTP;
						case "https" :
							return com.google.analytics.utils.Protocols.HTTPS;
						default :
							return com.google.analytics.utils.Protocols.none;
						}
					}

					public get hostName():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this._url;
						if(_loc1_.indexOf("://") > -1)
						{
							_loc1_ = _loc1_.split("://")[1];
						}
						if(_loc1_.indexOf("/") > -1)
						{
							_loc1_ = _loc1_.split("/")[0];
						}
						if(_loc1_.indexOf("?") > -1)
						{
							_loc1_ = _loc1_.split("?")[0];
						}
						if(this.protocol == com.google.analytics.utils.Protocols.file || this.protocol == com.google.analytics.utils.Protocols.none)
						{
							return "";
						}
						return _loc1_;
					}

				}
			}
		}
	}
}

