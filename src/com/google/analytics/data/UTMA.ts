module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMA extends com.google.analytics.data.UTMCookie {
					private _domainHash:number = NaN;
					private _firstTime:number = NaN;
					private _currentTime:number = NaN;
					private _sessionId:number = NaN;
					private _lastTime:number = NaN;
					private _sessionCount:number = NaN;

					public constructor(param1:number = NaN,param2:number = NaN,param3:number = NaN,param4:number = NaN,param5:number = NaN,param6:number = NaN)
					{
						super("utma","__utma",["domainHash","sessionId","firstTime","lastTime","currentTime","sessionCount"],com.google.analytics.utils.Timespan.twoyears * 1000);
						this.domainHash = param1;
						this.sessionId = param2;
						this.firstTime = param3;
						this.lastTime = param4;
						this.currentTime = param5;
						this.sessionCount = param6;
					}

					public get lastTime():number
					{
						return this._lastTime;
					}

					public set lastTime(param1:number)
					{
						this._lastTime = param1;
						this.update();
					}

					public get sessionCount():number
					{
						return this._sessionCount;
					}

					public get firstTime():number
					{
						return this._firstTime;
					}

					public set sessionId(param1:number)
					{
						this._sessionId = param1;
						this.update();
					}

					public set sessionCount(param1:number)
					{
						this._sessionCount = param1;
						this.update();
					}

					public set firstTime(param1:number)
					{
						this._firstTime = param1;
						this.update();
					}

					public set currentTime(param1:number)
					{
						this._currentTime = param1;
						this.update();
					}

					public get sessionId():number
					{
						return this._sessionId;
					}

					public set domainHash(param1:number)
					{
						this._domainHash = param1;
						this.update();
					}

					public get currentTime():number
					{
						return this._currentTime;
					}

					public get domainHash():number
					{
						return this._domainHash;
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.data.UTMA","com.google.analytics.data.UTMCookie")
