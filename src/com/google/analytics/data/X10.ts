module com {
	export module google {
		export module analytics {
			export module data {
				export class X10 extends egret.HashObject {
					private _delimEnd:string = ")";
					private _delimSet:string = "*";
					private _escapeChar:string = "\'";
					private _delimBegin:string = "(";
					private _delimNumValue:string = "!";
					private _key:string = "k";
					private _set:Array<any>;
					private _projectData:any;
					private _hasData:number = 0;
					private _escapeCharMap:any;
					private _minimum:number = 0;
					private _value:string = "v";

					public constructor()
					{
						super();
						super();
						this._key = "k";
						this._value = "v";
						this._set = [this._key,this._value];
						this._delimBegin = "(";
						this._delimEnd = ")";
						this._delimSet = "*";
						this._delimNumValue = "!";
						this._escapeChar = "\'";
						this._projectData = {};
						this._escapeCharMap = {};
						this._escapeCharMap[this._escapeChar] = "\'0";
						this._escapeCharMap[this._delimEnd] = "\'1";
						this._escapeCharMap[this._delimSet] = "\'2";
						this._escapeCharMap[this._delimNumValue] = "\'3";
						this._minimum = flash.checkInt(1);
					}

					private _clearInternal(param1:number,param2:string)
					{
						var _loc3_:boolean = <any>false;
						var _loc4_:number = flash.checkInt(0);
						var _loc5_:number = flash.checkInt(0);
						if(this.hasProject(param1) && this._projectData[param1][param2] != undefined)
						{
							this._projectData[param1][param2] = undefined;
							_loc3_ = true;
							_loc5_ = flash.checkInt(this._set.length);
							_loc4_ = flash.checkInt(0);
							while(_loc4_ < _loc5_)
							{
								if(this._projectData[param1][this._set[_loc4_]] != undefined)
								{
									_loc3_ = false;
									break;
								}
								_loc4_++;
							}
							if(_loc3_)
							{
								this._projectData[param1] = undefined;
								this._hasData = flash.checkInt(this._hasData - 1);
							}
						}
					}

					public hasData():boolean
					{
						return this._hasData > 0;
					}

					private _setInternal(param1:number,param2:string,param3:number,param4:string)
					{
						if(<any>!this.hasProject(param1))
						{
							this._projectData[param1] = {};
						}
						if(this._projectData[param1][param2] == undefined)
						{
							this._projectData[param1][param2] = [];
						}
						this._projectData[param1][param2][param3] = param4;
						this._hasData = flash.checkInt(this._hasData + 1);
					}

					public hasProject(param1:number):boolean
					{
						return this._projectData[param1];
					}

					public clearKey(param1:number)
					{
						this._clearInternal(param1,this._key);
					}

					private _renderDataType(param1:Array<any>):string
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:number = flash.checkInt(0);
						_loc2_ = [];
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < param1.length)
						{
							if(param1[_loc4_] != undefined)
							{
								_loc3_ = "";
								if(_loc4_ != this._minimum && param1[_loc4_ - 1] == undefined)
								{
									_loc3_ = _loc3_ + _loc4_.toString();
									_loc3_ = _loc3_ + this._delimNumValue;
								}
								_loc3_ = _loc3_ + this._escapeExtensibleValue(param1[_loc4_]);
								_loc2_.push(_loc3_);
							}
							_loc4_++;
						}
						return this._delimBegin + _loc2_.join(this._delimSet) + this._delimEnd;
					}

					public getKey(param1:number,param2:number):string
					{
						return <string>this._getInternal(param1,this._key,param2);
					}

					public clearValue(param1:number)
					{
						this._clearInternal(param1,this._value);
					}

					public renderMergedUrlString(param1:com.google.analytics.data.X10 = null):string
					{
						var _loc2_:Array<any> = <any>null;
						var _loc3_:any = null;
						if(<any>!param1)
						{
							return this.renderUrlString();
						}
						_loc2_ = [param1.renderUrlString()];
						for(_loc3_ in this._projectData)
						{
							if(this.hasProject(flash.trannumber(_loc3_)) && <any>!param1.hasProject(flash.trannumber(_loc3_)))
							{
								_loc2_.push(_loc3_ + this._renderProject(this._projectData[_loc3_]));
							}
						}
						return _loc2_.join("");
					}

					public setValue(param1:number,param2:number,param3:number):boolean
					{
						if(Math.round(param3) != param3 || isNaN(param3) || param3 == Infinity)
						{
							return false;
						}
						this._setInternal(param1,this._value,param2,param3.toString());
						return true;
					}

					public renderUrlString():string
					{
						var _loc1_:Array<any> = <any>null;
						var _loc2_:any = null;
						_loc1_ = [];
						for(_loc2_ in this._projectData)
						{
							if(this.hasProject(flash.trannumber(_loc2_)))
							{
								_loc1_.push(_loc2_ + this._renderProject(this._projectData[_loc2_]));
							}
						}
						return _loc1_.join("");
					}

					private _getInternal(param1:number,param2:string,param3:number):any
					{
						if(this.hasProject(param1) && this._projectData[param1][param2] != undefined)
						{
							return this._projectData[param1][param2][param3];
						}
						return undefined;
					}

					public setKey(param1:number,param2:number,param3:string):boolean
					{
						this._setInternal(param1,this._key,param2,param3);
						return true;
					}

					public getValue(param1:number,param2:number):any
					{
						var _loc3_:any = undefined;
						_loc3_ = this._getInternal(param1,this._value,param2);
						if(_loc3_ == null)
						{
							return null;
						}
						return flash.trannumber(_loc3_);
					}

					private _renderProject(param1:any):string
					{
						var _loc2_:string = <any>null;
						var _loc3_:boolean = <any>false;
						var _loc4_:number = flash.checkInt(0);
						var _loc5_:Array<any> = <any>null;
						var _loc6_:number = flash.checkInt(0);
						_loc2_ = "";
						_loc3_ = false;
						_loc6_ = flash.checkInt(this._set.length);
						_loc4_ = flash.checkInt(0);
						while(_loc4_ < _loc6_)
						{
							_loc5_ = param1[this._set[_loc4_]];
							if(_loc5_)
							{
								if(_loc3_)
								{
									_loc2_ = _loc2_ + this._set[_loc4_];
								}
								_loc2_ = _loc2_ + this._renderDataType(_loc5_);
								_loc3_ = false;
							}
							else
							{
								_loc3_ = true;
							}
							_loc4_++;
						}
						return _loc2_;
					}

					private _escapeExtensibleValue(param1:string):string
					{
						var _loc2_:string = <any>null;
						var _loc3_:number = flash.checkInt(0);
						var _loc4_:string = <any>null;
						var _loc5_:string = <any>null;
						_loc2_ = "";
						_loc3_ = flash.checkInt(0);
						while(_loc3_ < param1.length)
						{
							_loc4_ = param1.charAt(_loc3_);
							_loc5_ = this._escapeCharMap[_loc4_];
							if(_loc5_)
							{
								_loc2_ = _loc2_ + _loc5_;
							}
							else
							{
								_loc2_ = _loc2_ + _loc4_;
							}
							_loc3_++;
						}
						return _loc2_;
					}

				}
			}
		}
	}
}

