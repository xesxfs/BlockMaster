module com {
	export module google {
		export module analytics {
			export module core {
				export class DocumentInfo extends egret.HashObject {
					private _config:com.google.analytics.v4.Configuration;
					private _utmr:string;
					private _adSense:com.google.analytics.external.AdSenseGlobals;
					private _info:com.google.analytics.utils.Environment;
					private _pageURL:string;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.utils.Environment,param3:string,param4:string = null,param5:com.google.analytics.external.AdSenseGlobals = null)
					{
						super();
						super();
						this._config = param1;
						this._info = param2;
						this._utmr = param3;
						this._pageURL = param4;
						this._adSense = param5;
					}

					public get utmr():string
					{
						if(<any>!this._utmr)
						{
							return "-";
						}
						return this._utmr;
					}

					public toURLString():string
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = this.toVariables();
						return _loc1_.toString();
					}

					private _renderPageURL(param1:string = ""):string
					{
						var _loc2_:string = <any>null;
						var _loc3_:string = <any>null;
						_loc2_ = this._info.locationPath;
						_loc3_ = this._info.locationSearch;
						if(<any>!param1 || param1 == "")
						{
							param1 = _loc2_ + unescape(_loc3_);
						}
						return param1;
					}

					public get utmp():string
					{
						return this._renderPageURL(this._pageURL);
					}

					private _generateHitId():number
					{
						var _loc1_:number = <any>NaN;
						if(this._adSense["hid"] && this._adSense["hid"] != "")
						{
							_loc1_ = flash.trannumber(this._adSense["hid"]);
						}
						else
						{
							_loc1_ = Math.round(Math.random() * 2147483647);
							this._adSense["hid"] = String(_loc1_);
						}
						return _loc1_;
					}

					public get utmhid():string
					{
						return String(this._generateHitId());
					}

					public toVariables():com.google.analytics.utils.Variables
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = new com.google.analytics.utils.Variables();
						_loc1_.URIencode = true;
						if(this._config.detectTitle && this.utmdt != "")
						{
							_loc1_["utmdt"] = this.utmdt;
						}
						_loc1_["utmhid"] = this.utmhid;
						_loc1_["utmr"] = this.utmr;
						_loc1_["utmp"] = this.utmp;
						return _loc1_;
					}

					public get utmdt():string
					{
						return this._info.documentTitle;
					}

				}
			}
		}
	}
}

