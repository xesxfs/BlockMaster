module com {
	export module google {
		export module analytics {
			export module core {
				export class DomainNameMode extends egret.HashObject {
					public static custom:com.google.analytics.core.DomainNameMode;
					public static none:com.google.analytics.core.DomainNameMode;
					public static auto:com.google.analytics.core.DomainNameMode;
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

com.google.analytics.core.DomainNameMode.custom = new com.google.analytics.core.DomainNameMode(2,"custom");
com.google.analytics.core.DomainNameMode.none = new com.google.analytics.core.DomainNameMode(0,"none");
com.google.analytics.core.DomainNameMode.auto = new com.google.analytics.core.DomainNameMode(1,"auto");
