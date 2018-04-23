module com {
	export module google {
		export module analytics {
			export module utils {
				export class Variables extends egret.HashObject {
					public post:Array<any>;
					public URIencode:boolean = false;
					public pre:Array<any>;
					public sort:boolean = true;

					public constructor(param1:string = null,param2:Array<any> = null,param3:Array<any> = null)
					{
						super();
						super();
						this.pre = [];
						this.post = [];
						this.sort = true;
						if(param1)
						{
							this.decode(param1);
						}
						if(param2)
						{
							this.pre = param2;
						}
						if(param3)
						{
							this.post = param3;
						}
					}

					private _join(param1:com.google.analytics.utils.Variables)
					{
						var _loc2_:any = null;
						if(<any>!param1)
						{
							return ;
						}
						for(_loc2_ in param1)
						{
							this[_loc2_] = param1[_loc2_];
						}
					}

					public join(...rest)
					{
						var _loc2_:number = flash.checkInt(0);
						var _loc3_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(rest.length);
						_loc3_ = flash.checkInt(0);
						while(_loc3_ < _loc2_)
						{
							if(flash.As3is(rest[_loc3_],com.google.analytics.utils.Variables))
							{
								this._join(rest[_loc3_]);
							}
							_loc3_++;
						}
					}

					public toString():string
					{
						var _loc1_:Array<any> = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:any = null;
						var _loc4_:string = <any>null;
						var _loc5_:number = flash.checkInt(0);
						var _loc6_:number = flash.checkInt(0);
						var _loc7_:string = <any>null;
						var _loc8_:string = <any>null;
						_loc1_ = [];
						for(_loc3_ in this)
						{
							_loc2_ = this[_loc3_];
							if(this.URIencode)
							{
								_loc2_ = encodeURI(_loc2_);
							}
							_loc1_.push(_loc3_ + "=" + _loc2_);
						}
						if(this.sort)
						{
							_loc1_.sort();
						}
						if(this.pre.length > 0)
						{
							this.pre.reverse();
							_loc5_ = flash.checkInt(0);
							while(_loc5_ < this.pre.length)
							{
								_loc7_ = this.pre[_loc5_];
								_loc6_ = flash.checkInt(0);
								while(_loc6_ < _loc1_.length)
								{
									_loc4_ = _loc1_[_loc6_];
									if(_loc4_.indexOf(_loc7_) == 0)
									{
										_loc1_.unshift(_loc1_.splice(_loc6_,1)[0]);
									}
									_loc6_++;
								}
								_loc5_++;
							}
							this.pre.reverse();
						}
						if(this.post.length > 0)
						{
							_loc5_ = flash.checkInt(0);
							while(_loc5_ < this.post.length)
							{
								_loc8_ = this.post[_loc5_];
								_loc6_ = flash.checkInt(0);
								while(_loc6_ < _loc1_.length)
								{
									_loc4_ = _loc1_[_loc6_];
									if(_loc4_.indexOf(_loc8_) == 0)
									{
										_loc1_.push(_loc1_.splice(_loc6_,1)[0]);
									}
									_loc6_++;
								}
								_loc5_++;
							}
						}
						return _loc1_.join("&");
					}

					public decode(param1:string)
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:string = <any>null;
						var _loc5_:string = <any>null;
						var _loc6_:Array<any> = <any>null;
						var _loc7_:number = flash.checkInt(0);
						if(param1 == "")
						{
							return ;
						}
						if(param1.indexOf("&") > -1)
						{
							_loc2_ = param1.split("&");
						}
						else
						{
							_loc2_ = [param1];
						}
						_loc7_ = flash.checkInt(0);
						while(_loc7_ < _loc2_.length)
						{
							_loc3_ = _loc2_[_loc7_];
							if(_loc3_.indexOf("=") > -1)
							{
								_loc6_ = _loc3_.split("=");
								_loc4_ = _loc6_[0];
								_loc5_ = decodeURI(_loc6_[1]);
								this[_loc4_] = _loc5_;
							}
							_loc7_++;
						}
					}

					public toURLVariables():egret.URLVariables
					{
						var _loc1_:egret.URLVariables = <any>null;
						var _loc2_:any = null;
						_loc1_ = new egret.URLVariables();
						for(_loc2_ in this)
						{
							_loc1_[_loc2_] = this[_loc2_];
						}
						return _loc1_;
					}

				}
			}
		}
	}
}

