module com {
	export module google {
		export module analytics {
			export module debug {
				export class AlertAction extends egret.HashObject {
					public container:com.google.analytics.debug.Alert;
					private _callback:any;
					public name:string;
					public activator:string;

					public constructor(param1:string,param2:string,param3:any)
					{
						super();
						super();
						this.name = param1;
						this.activator = param2;
						this._callback = param3;
					}

					public execute()
					{
						if(this._callback)
						{
							if(flash.As3is(this._callback,Function))
							{
								(flash.As3As(this._callback,Function))();
							}
							else if(flash.As3is(this._callback,"string"))
							{
								this.container[this._callback]();
							}
						}
					}

				}
			}
		}
	}
}

