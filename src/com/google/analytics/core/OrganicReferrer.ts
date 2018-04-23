module com {
	export module google {
		export module analytics {
			export module core {
				export class OrganicReferrer extends egret.HashObject {
					private _engine:string;
					private _keyword:string;

					public constructor(param1:string,param2:string)
					{
						super();
						super();
						this.engine = param1;
						this.keyword = param2;
					}

					public set engine(param1:string)
					{
						this._engine = param1.toLowerCase();
					}

					public get keyword():string
					{
						return this._keyword;
					}

					public toString():string
					{
						return this.engine + "?" + this.keyword;
					}

					public get engine():string
					{
						return this._engine;
					}

					public set keyword(param1:string)
					{
						this._keyword = param1.toLowerCase();
					}

				}
			}
		}
	}
}

