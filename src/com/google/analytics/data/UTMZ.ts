module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMZ extends com.google.analytics.data.UTMCookie {
					public static defaultTimespan:number;
					private _domainHash:number = NaN;
					private _campaignSessions:number = NaN;
					private _campaignTracking:string;
					private _responseCount:number = NaN;
					private _campaignCreation:number = NaN;

					public constructor(param1:number = NaN,param2:number = NaN,param3:number = NaN,param4:number = NaN,param5:string = "")
					{
						super("utmz","__utmz",["domainHash","campaignCreation","campaignSessions","responseCount","campaignTracking"],com.google.analytics.data.UTMZ.defaultTimespan * 1000);
						this.domainHash = param1;
						this.campaignCreation = param2;
						this.campaignSessions = param3;
						this.responseCount = param4;
						this.campaignTracking = param5;
					}

					public get campaignCreation():number
					{
						return this._campaignCreation;
					}

					public set campaignSessions(param1:number)
					{
						this._campaignSessions = param1;
						this.update();
					}

					public set responseCount(param1:number)
					{
						this._responseCount = param1;
						this.update();
					}

					public set campaignCreation(param1:number)
					{
						this._campaignCreation = param1;
						this.update();
					}

					public get campaignSessions():number
					{
						return this._campaignSessions;
					}

					public get responseCount():number
					{
						return this._responseCount;
					}

					public set domainHash(param1:number)
					{
						this._domainHash = param1;
						this.update();
					}

					public get campaignTracking():string
					{
						return this._campaignTracking;
					}

					public set campaignTracking(param1:string)
					{
						this._campaignTracking = param1;
						this.update();
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

com.google.analytics.data.UTMZ.defaultTimespan = com.google.analytics.utils.Timespan.sixmonths;
flash.extendsClass("com.google.analytics.data.UTMZ","com.google.analytics.data.UTMCookie")
