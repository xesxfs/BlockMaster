module com {
	export module google {
		export module analytics {
			export module core {
				export class BrowserInfo extends egret.HashObject {
					private _config:com.google.analytics.v4.Configuration;
					private _info:com.google.analytics.utils.Environment;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.utils.Environment)
					{
						super();
						super();
						this._config = param1;
						this._info = param2;
					}

					public get utmul():string
					{
						return this._info.language["toLowerCase"]();
					}

					public get utmje():string
					{
						return "0";
					}

					public toURLString():string
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = this.toVariables();
						return _loc1_.toString();
					}

					public get utmsr():string
					{
						return this._info.screenWidth + "x" + this._info.screenHeight;
					}

					public get utmcs():string
					{
						return this._info.languageEncoding;
					}

					public get utmfl():string
					{
						var _loc1_:com.google.analytics.utils.Version = <any>null;
						if(this._config.detectFlash)
						{
							_loc1_ = this._info.flashVersion;
							return _loc1_.major + "." + _loc1_.minor + " r" + _loc1_.build;
						}
						return "-";
					}

					public toVariables():com.google.analytics.utils.Variables
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = new com.google.analytics.utils.Variables();
						_loc1_.URIencode = true;
						_loc1_["utmcs"] = this.utmcs;
						_loc1_["utmsr"] = this.utmsr;
						_loc1_["utmsc"] = this.utmsc;
						_loc1_["utmul"] = this.utmul;
						_loc1_["utmje"] = this.utmje;
						_loc1_["utmfl"] = this.utmfl;
						return _loc1_;
					}

					public get utmsc():string
					{
						return this._info.screenColorDepth + "-bit";
					}

				}
			}
		}
	}
}

