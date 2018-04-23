module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMV extends com.google.analytics.data.UTMCookie {
					private _domainHash:number = NaN;
					private _value:string;

					public constructor(param1:number = NaN,param2:string = "")
					{
						super("utmv","__utmv",["domainHash","value"],com.google.analytics.utils.Timespan.twoyears * 1000);
						this.domainHash = param1;
						this.value = param2;
					}

					public get value():string
					{
						return this._value;
					}

					public set value(param1:string)
					{
						this._value = param1;
						this.update();
					}

					public toURLString():string
					{
						return this.inURL + "=" + encodeURI(this.valueOf());
					}

					public get domainHash():number
					{
						return this._domainHash;
					}

					public set domainHash(param1:number)
					{
						this._domainHash = param1;
						this.update();
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.data.UTMV","com.google.analytics.data.UTMCookie")
