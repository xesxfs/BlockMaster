module com {
	export module google {
		export module analytics {
			export module events {
				export class AnalyticsEvent extends egret.Event {
					public static READY:string;
					public tracker:com.google.analytics.AnalyticsTracker;

					public constructor(param1:string,param2:com.google.analytics.AnalyticsTracker,param3:boolean = false,param4:boolean = false)
					{
						super(param1,param3,param4);
						this.tracker = param2;
					}

					public clone():egret.Event
					{
						return new com.google.analytics.events.AnalyticsEvent(this.type,this.tracker,this.bubbles,this.cancelable);
					}

				}
			}
		}
	}
}

com.google.analytics.events.AnalyticsEvent.READY = "ready";
flash.extendsClass("com.google.analytics.events.AnalyticsEvent","egret.Event")
