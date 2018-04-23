module com {
	export module google {
		export module analytics {
			export module core {
				export class EventInfo extends egret.HashObject {
					private _isEventHit:boolean = false;
					private _ext10:com.google.analytics.data.X10;
					private _x10:com.google.analytics.data.X10;

					public constructor(param1:boolean,param2:com.google.analytics.data.X10,param3:com.google.analytics.data.X10 = null)
					{
						super();
						super();
						this._isEventHit = param1;
						this._x10 = param2;
						this._ext10 = param3;
					}

					public toURLString():string
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = this.toVariables();
						return _loc1_.toString();
					}

					public get utmt():string
					{
						return "event";
					}

					public get utme():string
					{
						return this._x10.renderMergedUrlString(this._ext10);
					}

					public toVariables():com.google.analytics.utils.Variables
					{
						var _loc1_:com.google.analytics.utils.Variables = <any>null;
						_loc1_ = new com.google.analytics.utils.Variables();
						_loc1_.URIencode = true;
						if(this._isEventHit)
						{
							_loc1_["utmt"] = this.utmt;
						}
						_loc1_["utme"] = this.utme;
						return _loc1_;
					}

				}
			}
		}
	}
}

