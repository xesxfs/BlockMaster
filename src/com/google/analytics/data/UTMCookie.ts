module com {
	export module google {
		export module analytics {
			export module data {
				export class UTMCookie extends egret.HashObject implements com.google.analytics.data.Cookie {
					protected inURL:string;
					protected name:string;
					private _creation:flash.As3Date;
					private _expiration:flash.As3Date;
					public proxy:com.google.analytics.core.Buffer;
					private _timespan:number = NaN;
					protected fields:Array<any>;

					public constructor(param1:string,param2:string,param3:Array<any>,param4:number = 0)
					{
						super();
						super();
						this.name = param1;
						this.inURL = param2;
						this.fields = param3;
						this._timestamp(param4);
					}

					public isEmpty():boolean
					{
						var _loc1_:number = flash.checkInt(0);
						var _loc2_:string = <any>null;
						var _loc3_:number = flash.checkInt(0);
						_loc1_ = flash.checkInt(0);
						_loc3_ = flash.checkInt(0);
						while(_loc3_ < this.fields.length)
						{
							_loc2_ = this.fields[_loc3_];
							if(flash.As3is(this[_loc2_],"number") && isNaN(this[_loc2_]))
							{
								_loc1_++;
							}
							else if(flash.As3is(this[_loc2_],"string") && this[_loc2_] == "")
							{
								_loc1_++;
							}
							_loc3_++;
						}
						if(_loc1_ == this.fields.length)
						{
							return true;
						}
						return false;
					}

					protected update()
					{
						this.resetTimestamp();
						if(this.proxy)
						{
							this.proxy.update(this.name,this.toSharedObject());
						}
					}

					public fromSharedObject(param1:any)
					{
						var _loc2_:string = <any>null;
						var _loc3_:number = flash.checkInt(0);
						var _loc4_:number = flash.checkInt(0);
						_loc3_ = flash.checkInt(this.fields.length);
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < _loc3_)
						{
							_loc2_ = this.fields[_loc4_];
							if(param1[_loc2_])
							{
								this[_loc2_] = param1[_loc2_];
							}
							_loc4_++;
						}
						if(param1["creation"])
						{
							this.creation = param1["creation"];
						}
						if(param1["expiration"])
						{
							this.expiration = param1["expiration"];
						}
					}

					private _timestamp(param1:number)
					{
						this.creation = new flash.As3Date();
						this._timespan = param1;
						if(param1 > 0)
						{
							this.expiration = new flash.As3Date(this.creation.valueOf() + param1);
						}
					}

					public isExpired():boolean
					{
						var _loc1_:flash.As3Date = <any>null;
						var _loc2_:number = <any>NaN;
						_loc1_ = new flash.As3Date();
						_loc2_ = this.expiration.valueOf() - _loc1_.valueOf();
						if(_loc2_ <= 0)
						{
							return true;
						}
						return false;
					}

					public set expiration(param1:flash.As3Date)
					{
						this._expiration = param1;
					}

					public get creation():flash.As3Date
					{
						return this._creation;
					}

					public reset()
					{
						var _loc1_:string = <any>null;
						var _loc2_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(0);
						while(_loc2_ < this.fields.length)
						{
							_loc1_ = this.fields[_loc2_];
							if(flash.As3is(this[_loc1_],"number"))
							{
								this[_loc1_] = NaN;
							}
							else if(flash.As3is(this[_loc1_],"string"))
							{
								this[_loc1_] = "";
							}
							_loc2_++;
						}
						this.resetTimestamp();
						this.update();
					}

					public valueOf():string
					{
						var _loc1_:Array<any> = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:any = undefined;
						var _loc4_:number = flash.checkInt(0);
						_loc1_ = [];
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < this.fields.length)
						{
							_loc2_ = this.fields[_loc4_];
							_loc3_ = this[_loc2_];
							if(flash.As3is(_loc3_,"string"))
							{
								if(_loc3_ == "")
								{
									_loc3_ = "-";
									_loc1_.push(_loc3_);
								}
								else
								{
									_loc1_.push(_loc3_);
								}
							}
							else if(flash.As3is(_loc3_,"number"))
							{
								if(_loc3_ == 0)
								{
									_loc1_.push(_loc3_);
								}
								else if(isNaN(_loc3_))
								{
									_loc3_ = "-";
									_loc1_.push(_loc3_);
								}
								else
								{
									_loc1_.push(_loc3_);
								}
							}
							_loc4_++;
						}
						return "" + _loc1_.join(".");
					}

					public resetTimestamp(param1:number = NaN)
					{
						if(<any>!isNaN(param1))
						{
							this._timespan = param1;
						}
						this._creation = null;
						this._expiration = null;
						this._timestamp(this._timespan);
					}

					public get expiration():flash.As3Date
					{
						if(this._expiration)
						{
							return this._expiration;
						}
						return new flash.As3Date(new flash.As3Date().valueOf() + 1000);
					}

					public toURLString():string
					{
						return this.inURL + "=" + this.valueOf();
					}

					public toSharedObject():any
					{
						var _loc1_:any = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:any = undefined;
						var _loc4_:number = flash.checkInt(0);
						_loc1_ = {};
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < this.fields.length)
						{
							_loc2_ = this.fields[_loc4_];
							_loc3_ = this[_loc2_];
							if(flash.As3is(_loc3_,"string"))
							{
								_loc1_[_loc2_] = _loc3_;
							}
							else if(_loc3_ == 0)
							{
								_loc1_[_loc2_] = _loc3_;
							}
							else if(<any>!isNaN(_loc3_))
							{
								_loc1_[_loc2_] = _loc3_;
							}
							_loc4_++;
						}
						_loc1_["creation"] = this.creation;
						_loc1_["expiration"] = this.expiration;
						return _loc1_;
					}

					public toString(param1:boolean = false):string
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:any = undefined;
						var _loc5_:number = flash.checkInt(0);
						var _loc6_:number = flash.checkInt(0);
						var _loc7_:any = null;
						_loc2_ = [];
						_loc5_ = flash.checkInt(this.fields.length);
						_loc6_ = flash.checkInt(0);
						while(_loc6_ < _loc5_)
						{
							_loc3_ = this.fields[_loc6_];
							_loc4_ = this[_loc3_];
							if(flash.As3is(_loc4_,"string"))
							{
								_loc2_.push(_loc3_ + ": \"" + _loc4_ + "\"");
							}
							else if(_loc4_ == 0)
							{
								_loc2_.push(_loc3_ + ": " + _loc4_);
							}
							else if(<any>!isNaN(_loc4_))
							{
								_loc2_.push(_loc3_ + ": " + _loc4_);
							}
							_loc6_++;
						}
						_loc7_ = this.name.toUpperCase() + " {" + _loc2_.join(", ") + "}";
						if(param1)
						{
							_loc7_ = _loc7_ + (" creation:" + this.creation + ", expiration:" + this.expiration);
						}
						return _loc7_;
					}

					public set creation(param1:flash.As3Date)
					{
						this._creation = param1;
					}

				}
			}
		}
	}
}

flash.implementsClass("com.google.analytics.data.UTMCookie",["com.google.analytics.data.Cookie"]);