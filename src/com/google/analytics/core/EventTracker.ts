module com {
	export module google {
		export module analytics {
			export module core {
				export class EventTracker extends egret.HashObject {
					private _parent:com.google.analytics.v4.GoogleAnalyticsAPI;
					public name:string;

					public constructor(param1:string,param2:com.google.analytics.v4.GoogleAnalyticsAPI)
					{
						super();
						super();
						this.name = param1;
						this._parent = param2;
					}

					public trackEvent(param1:string,param2:string = null,param3:number = NaN):boolean
					{
						return this._parent.trackEvent(this.name,param1,param2,param3);
					}

				}
			}
		}
	}
}

