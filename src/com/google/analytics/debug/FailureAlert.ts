module com {
	export module google {
		export module analytics {
			export module debug {
				export class FailureAlert extends com.google.analytics.debug.Alert {

					public constructor(param1:com.google.analytics.debug.DebugConfiguration,param2:string,param3:Array<any>)
					{
						super(param2,param3,"uiFailure",Style.failureColor,_loc4_,_loc5_,_loc6_);
						var _loc4_:com.google.analytics.debug.Align = <any>null;
						var _loc5_:boolean = <any>false;
						var _loc6_:boolean = <any>false;
						_loc4_ = com.google.analytics.debug.Align.bottomLeft;
						_loc5_ = true;
						_loc6_ = false;
						if(param1.verbose)
						{
							param2 = "<u><span class=\"uiAlertTitle\">Failure</span>" + this.spaces(18) + "</u>\n\n" + param2;
							_loc4_ = com.google.analytics.debug.Align.center;
							_loc5_ = false;
							_loc6_ = true;
						}
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.debug.FailureAlert","com.google.analytics.debug.Alert")
