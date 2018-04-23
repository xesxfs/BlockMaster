module com {
	export module google {
		export module analytics {
			export module campaign {
				export class CampaignInfo extends egret.HashObject {
					private _new:boolean = false;
					private _empty:boolean = false;

					public constructor(param1:boolean = true,param2:boolean = false)
					{
						super();
						super();
						this._empty = param1;
						this._new = param2;
					}

					public isEmpty():boolean
					{
						return this._empty;
					}

					public toURLString():string
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = this.toVariables();
						return _loc1_.toString();
					}

					public toVariables():com.google.analytics.utils.Variables
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = new com.google.analytics.utils.Variables();
						_loc1_.URIencode = true;
						if(<any>!this.isEmpty() && this.isNew())
						{
							_loc1_["utmcn"] = this.utmcn;
						}
						if(<any>!this.isEmpty() && <any>!this.isNew())
						{
							_loc1_["utmcr"] = this.utmcr;
						}
						return _loc1_;
					}

					public isNew():boolean
					{
						return this._new;
					}

					public get utmcn():string
					{
						return "1";
					}

					public get utmcr():string
					{
						return "1";
					}

				}
			}
		}
	}
}

