module com {
	export module google {
		export module analytics {
			export module utils {
				export class UserAgent extends egret.HashObject {
					public static minimal:boolean;
					private _version:com.google.analytics.utils.Version;
					private _localInfo:com.google.analytics.utils.Environment;
					private _applicationProduct:string;

					public constructor(param1:com.google.analytics.utils.Environment,param2:string = "",param3:string = "")
					{
						super();
						super();
						this._localInfo = param1;
						this.applicationProduct = param2;
						this._version = com.google.analytics.utils.Version.fromString(param3);
					}

					public get tamarinProductToken():string
					{
						if(com.google.analytics.utils.UserAgent.minimal)
						{
							return "";
						}
						if(flash.System["vmVersion"])
						{
							return "Tamarin/" + com.google.analytics.core.Utils.trim(flash.System["vmVersion"],true);
						}
						return "";
					}

					public set applicationProduct(param1:string)
					{
						this._applicationProduct = param1;
					}

					public get applicationVersion():string
					{
						return this._version.toString(2);
					}

					public get applicationProductToken():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = this.applicationProduct;
						if(this.applicationVersion != "")
						{
							_loc1_ = _loc1_ + ("/" + this.applicationVersion);
						}
						return _loc1_;
					}

					public get vendorProductToken():string
					{
						var _loc1_:any = null;
						_loc1_ = "";
						if(this._localInfo.isAIR())
						{
							_loc1_ = _loc1_ + "AIR";
						}
						else
						{
							_loc1_ = _loc1_ + "FlashPlayer";
						}
						_loc1_ = _loc1_ + "/";
						_loc1_ = _loc1_ + this._version.toString(3);
						return _loc1_;
					}

					public toString():string
					{
						var _loc1_:string = <any>null;
						_loc1_ = "";
						_loc1_ = _loc1_ + this.applicationProductToken;
						if(this.applicationComment != "")
						{
							_loc1_ = _loc1_ + (" " + this.applicationComment);
						}
						if(this.tamarinProductToken != "")
						{
							_loc1_ = _loc1_ + (" " + this.tamarinProductToken);
						}
						if(this.vendorProductToken != "")
						{
							_loc1_ = _loc1_ + (" " + this.vendorProductToken);
						}
						return _loc1_;
					}

					public get applicationComment():string
					{
						var _loc1_:Array<any> = <any>null;
						_loc1_ = [];
						_loc1_.push(this._localInfo.platform);
						_loc1_.push(this._localInfo.playerType);
						if(<any>!com.google.analytics.utils.UserAgent.minimal)
						{
							_loc1_.push(this._localInfo.operatingSystem);
							_loc1_.push(this._localInfo.language);
						}
						if(flash.Capabilities.isDebugger)
						{
							_loc1_.push("DEBUG");
						}
						if(_loc1_.length > 0)
						{
							return "(" + _loc1_.join("; ") + ")";
						}
						return "";
					}

					public set applicationVersion(param1:string)
					{
						this._version = com.google.analytics.utils.Version.fromString(param1);
					}

					public get applicationProduct():string
					{
						return this._applicationProduct;
					}

				}
			}
		}
	}
}

com.google.analytics.utils.UserAgent.minimal = false;
