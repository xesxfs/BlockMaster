module com {
	export module google {
		export module analytics {
			export module debug {
				export class GIFRequestAlert extends com.google.analytics.debug.Alert {

					public constructor(param1:string,param2:Array<any>)
					{
						super(param1,param2);
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.debug.GIFRequestAlert","com.google.analytics.debug.Alert")
