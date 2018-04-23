module com {
	export module google {
		export module analytics {
			export module utils {
				export class Version extends egret.HashObject {
					private _maxBuild:number = 255;
					private _maxMinor:number = 15;
					private _maxMajor:number = 15;
					private _revision:number = 0;
					private _separator:string = ".";
					private _maxRevision:number = 65535;
					private _build:number = 0;
					private _minor:number = 0;
					private _major:number = 0;

					public constructor(param1:number = 0,param2:number = 0,param3:number = 0,param4:number = 0)
					{
						super();
						super();
						var _loc5_:com.google.analytics.utils.Version = <any>null;
						this._maxMajor = flash.checkUint(15);
						this._maxMinor = flash.checkUint(15);
						this._maxBuild = flash.checkUint(255);
						this._maxRevision = flash.checkUint(65535);
						this._separator = ".";
						if(param1 > this._maxMajor && param2 == 0 && param3 == 0 && param4 == 0)
						{
							_loc5_ = com.google.analytics.utils.Version.fromNumber(param1);
							param1 = flash.checkUint(_loc5_.major);
							param2 = flash.checkUint(_loc5_.minor);
							param3 = flash.checkUint(_loc5_.build);
							param4 = flash.checkUint(_loc5_.revision);
						}
						this.major = param1;
						this.minor = param2;
						this.build = param3;
						this.revision = param4;
					}

					public static fromString(param1:string = "",param2:string = "."):com.google.analytics.utils.Version
					{
						var _loc3_:com.google.analytics.utils.Version = <any>null;
						var _loc4_:Array<any> = <any>null;
						_loc3_ = new com.google.analytics.utils.Version();
						if(param1 == "" || param1 == null)
						{
							return _loc3_;
						}
						if(param1.indexOf(param2) > -1)
						{
							_loc4_ = param1.split(param2);
							_loc3_.major = flash.tranint(_loc4_[0]);
							_loc3_.minor = flash.tranint(_loc4_[1]);
							_loc3_.build = flash.tranint(_loc4_[2]);
							_loc3_.revision = flash.tranint(_loc4_[3]);
						}
						else
						{
							_loc3_.major = flash.tranint(param1);
						}
						return _loc3_;
					}

					public static fromNumber(param1:number = 0):com.google.analytics.utils.Version
					{
						var _loc2_:com.google.analytics.utils.Version = <any>null;
						_loc2_ = new com.google.analytics.utils.Version();
						if(isNaN(param1) || param1 == 0 || param1 < 0 || param1 == Number.MAX_VALUE || param1 == Number.POSITIVE_INFINITY || param1 == Number.NEGATIVE_INFINITY)
						{
							return _loc2_;
						}
						_loc2_.major = param1 >>> 28;
						_loc2_.minor = (param1 & 251658240) >>> 24;
						_loc2_.build = (param1 & 16711680) >>> 16;
						_loc2_.revision = param1 & 65535;
						return _loc2_;
					}

					public toString(param1:number = 0):string
					{
						var _loc2_:Array<any> = <any>null;
						if(param1 <= 0 || param1 > 4)
						{
							param1 = flash.checkInt(this.getFields());
						}
						switch(param1)
						{
						case 1 :
							_loc2_ = [this.major];
							break;
						case 2 :
							_loc2_ = [this.major,this.minor];
							break;
						case 3 :
							_loc2_ = [this.major,this.minor,this.build];
							break;
						case 4 :
						default :
							_loc2_ = [this.major,this.minor,this.build,this.revision];
						}
						return _loc2_.join(this._separator);
					}

					public get revision():number
					{
						return this._revision;
					}

					public set build(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._build = flash.checkUint(Math.min(param1,this._maxBuild));
					}

					public set minor(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._minor = flash.checkUint(Math.min(param1,this._maxMinor));
					}

					public get build():number
					{
						return this._build;
					}

					public set major(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._major = flash.checkUint(Math.min(param1,this._maxMajor));
					}

					public get minor():number
					{
						return this._minor;
					}

					public valueOf():number
					{
						return this.major << 28 | this.minor << 24 | this.build << 16 | this.revision;
					}

					public get major():number
					{
						return this._major;
					}

					public set revision(param1:number)
					{
						param1 = flash.checkUint(param1);
						this._revision = flash.checkUint(Math.min(param1,this._maxRevision));
					}

					private getFields():number
					{
						var _loc1_:number = flash.checkInt(0);
						_loc1_ = flash.checkInt(4);
						if(this.revision == 0)
						{
							_loc1_--;
						}
						if(_loc1_ == 3 && this.build == 0)
						{
							_loc1_--;
						}
						if(_loc1_ == 2 && this.minor == 0)
						{
							_loc1_--;
						}
						return _loc1_;
					}

					public equals(param1:any):boolean
					{
						if(<any>!(flash.As3is(param1,com.google.analytics.utils.Version)))
						{
							return false;
						}
						if(param1.major == this.major && param1.minor == this.minor && param1.build == this.build && param1.revision == this.revision)
						{
							return true;
						}
						return false;
					}

				}
			}
		}
	}
}

