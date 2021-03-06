module com {
	export module google {
		export module analytics {
			export module core {
				export class ServerOperationMode extends egret.HashObject {
					public static both:com.google.analytics.core.ServerOperationMode;
					public static remote:com.google.analytics.core.ServerOperationMode;
					public static local:com.google.analytics.core.ServerOperationMode;
					private _value:number = 0;
					private _name:string;

					public constructor(param1:number = 0,param2:string = "")
					{
						super();
						super();
						this._value = flash.checkInt(param1);
						this._name = param2;
					}

					public valueOf():number
					{
						return this._value;
					}

					public toString():string
					{
						return this._name;
					}

				}
			}
		}
	}
}

com.google.analytics.core.ServerOperationMode.both = new com.google.analytics.core.ServerOperationMode(2,"both");
com.google.analytics.core.ServerOperationMode.remote = new com.google.analytics.core.ServerOperationMode(1,"remote");
com.google.analytics.core.ServerOperationMode.local = new com.google.analytics.core.ServerOperationMode(0,"local");
