module com {
	export module google {
		export module analytics {
			export module core {
				export class Utils extends egret.HashObject {

					public constructor()
					{
						super();
						super();
					}

					public static trim(param1:string,param2:boolean = false):string
					{
						var _loc3_:Array<any> = <any>null;
						var _loc4_:string = <any>null;
						var _loc5_:number = flash.checkInt(0);
						var _loc6_:number = flash.checkInt(0);
						var _loc7_:number = flash.checkInt(0);
						if(param1 == "")
						{
							return "";
						}
						_loc3_ = [" ","\n","\r","\t"];
						_loc4_ = param1;
						if(param2)
						{
							_loc5_ = flash.checkInt(0);
							while(_loc5_ < _loc3_.length && _loc4_.indexOf(_loc3_[_loc5_]) > -1)
							{
								_loc4_ = _loc4_.split(_loc3_[_loc5_]).join("");
								_loc5_++;
							}
						}
						else
						{
							_loc6_ = flash.checkInt(0);
							while(_loc6_ < _loc4_.length && _loc3_.indexOf(_loc4_.charAt(_loc6_)) > -1)
							{
								_loc6_++;
							}
							_loc4_ = _loc4_.substr(_loc6_);
							_loc7_ = flash.checkInt(_loc4_.length - 1);
							while(_loc7_ >= 0 && _loc3_.indexOf(_loc4_.charAt(_loc7_)) > -1)
							{
								_loc7_--;
							}
							_loc4_ = _loc4_.substring(0,_loc7_ + 1);
						}
						return _loc4_;
					}

					public static generateHash(param1:string):number
					{
						var _loc2_:any = 0;
						var _loc3_:any = 0;
						var _loc4_:number = flash.checkInt(0);
						var _loc5_:number = flash.checkInt(0);
						_loc2_ = 1;
						_loc3_ = 0;
						if(param1 != null && param1 != "")
						{
							_loc2_ = 0;
							_loc4_ = flash.checkInt(param1.length - 1);
							while(_loc4_ >= 0)
							{
								_loc5_ = flash.checkInt(param1.charCodeAt(_loc4_));
								_loc2_ = flash.tranint((_loc2_ << 6 & 268435455) + _loc5_ + (_loc5_ << 14));
								_loc3_ = _loc2_ & 266338304;
								if(_loc3_ != 0)
								{
									_loc2_ = _loc2_ ^ _loc3_ >> 21;
								}
								_loc4_--;
							}
						}
						return _loc2_;
					}

					public static generate32bitRandom():number
					{
						return Math.round(Math.random() * 2147483647);
					}

					public static validateAccount(param1:string):boolean
					{
						var _loc2_:RegExp = <any>null;
						_loc2_ = /^UA-[0-9]*-[0-9]*$/;
						return _loc2_.test(param1);
					}

				}
			}
		}
	}
}

