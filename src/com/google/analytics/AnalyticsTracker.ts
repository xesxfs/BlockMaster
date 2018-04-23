module com {
	export module google {
		export module analytics {
			export interface AnalyticsTracker extends egret.IEventDispatcher {
				config:com.google.analytics.v4.Configuration;
				isReady():boolean;
				mode:string;
				debug:com.google.analytics.debug.DebugConfiguration;
				account:string;
				visualDebug:boolean;
			}
		}
	}
}

flash.extendsClass("com.google.analytics.AnalyticsTracker","egret.IEventDispatcher")
