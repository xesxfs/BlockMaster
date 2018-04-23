module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMC extends com.google.analytics.data.UTMCookie {
					private _domainHash:number = NaN;

					public constructor(param1:number = NaN)
					{
						super("utmc","__utmc",["domainHash"]);
						this.domainHash = param1;
					}

					public set domainHash(param1:number)
					{
						this._domainHash = param1;
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

flash.extendsClass("com.google.analytics.data.UTMC","com.google.analytics.data.UTMCookie")
