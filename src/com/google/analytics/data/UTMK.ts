module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMK extends com.google.analytics.data.UTMCookie {
					private _hash:number = NaN;

					public constructor(param1:number = NaN)
					{
						super("utmk","__utmk",["hash"]);
						this.hash = param1;
					}

					public get hash():number
					{
						return this._hash;
					}

					public set hash(param1:number)
					{
						this._hash = param1;
						this.update();
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.data.UTMK","com.google.analytics.data.UTMCookie")
