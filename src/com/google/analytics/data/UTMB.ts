module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMB extends com.google.analytics.data.UTMCookie {
					public static defaultTimespan:number;
					private _lastTime:number = NaN;
					private _domainHash:number = NaN;
					private _trackCount:number = NaN;
					private _token:number = NaN;

					public constructor(param1:number = NaN,param2:number = NaN,param3:number = NaN,param4:number = NaN)
					{
						super("utmb","__utmb",["domainHash","trackCount","token","lastTime"],com.google.analytics.data.UTMB.defaultTimespan * 1000);
						this.domainHash = param1;
						this.trackCount = param2;
						this.token = param3;
						this.lastTime = param4;
					}

					public get token():number
					{
						return this._token;
					}

					public set trackCount(param1:number)
					{
						this._trackCount = param1;
						this.update();
					}

					public set lastTime(param1:number)
					{
						this._lastTime = param1;
						this.update();
					}

					public get lastTime():number
					{
						return this._lastTime;
					}

					public set domainHash(param1:number)
					{
						this._domainHash = param1;
						this.update();
					}

					public get domainHash():number
					{
						return this._domainHash;
					}

					public set token(param1:number)
					{
						this._token = param1;
						this.update();
					}

					public get trackCount():number
					{
						return this._trackCount;
					}

				}
			}
		}
	}
}

com.google.analytics.data.UTMB.defaultTimespan = com.google.analytics.utils.Timespan.thirtyminutes;
flash.extendsClass("com.google.analytics.data.UTMB","com.google.analytics.data.UTMCookie")
