module com {
	export module google {
		export module analytics {
			export module core {
				export class RequestObject extends egret.HashObject {
					public start:number = 0;
					public request:egret.URLRequest;
					public end:number = 0;

					public constructor(param1:egret.URLRequest)
					{
						super();
						super();
						this.start = flash.checkInt(egret.getTimer());
						this.request = param1;
					}

					public toString():string
					{
						var _loc1_:Array<any> = <any>null;
						_loc1_ = [];
						_loc1_.push("duration: " + this.duration + "ms");
						_loc1_.push("url: " + this.request.url);
						return "{ " + _loc1_.join(", ") + " }";
					}

					public get duration():number
					{
						if(<any>!this.hasCompleted())
						{
							return 0;
						}
						return this.end - this.start;
					}

					public hasCompleted():boolean
					{
						return this.end > 0;
					}

					public complete()
					{
						this.end = flash.checkInt(egret.getTimer());
					}

				}
			}
		}
	}
}

