module com {
	export module google {
		export module analytics {
			export module core {
				export class Organic extends egret.HashObject {
					public static throwErrors:boolean;
					private _sourcesCache:Array<any>;
					private _sourcesEngine:Array<any>;
					private _ignoredKeywords:Array<any>;
					private _ignoredReferralsCache:any;
					private _ignoredReferrals:Array<any>;
					private _ignoredKeywordsCache:any;
					private _sources:Array<any>;

					public constructor()
					{
						super();
						super();
						this._sources = [];
						this._sourcesCache = [];
						this._sourcesEngine = [];
						this._ignoredReferrals = [];
						this._ignoredReferralsCache = {};
						this._ignoredKeywords = [];
						this._ignoredKeywordsCache = {};
					}

					public static getKeywordValueFromPath(param1:string,param2:string):string
					{
						var _loc3_:string = <any>null;
						var _loc4_:com.google.analytics.utils.Variables = <any>null;
						if(param2.indexOf(param1 + "=") > -1)
						{
							if(param2.charAt(0) == "?")
							{
								param2 = param2.substr(1);
							}
							param2 = param2.split("+").join("%20");
							_loc4_ = new com.google.analytics.utils.Variables(param2);
							_loc3_ = _loc4_[param1];
						}
						return _loc3_;
					}

					public getKeywordValue(param1:com.google.analytics.core.OrganicReferrer,param2:string):string
					{
						var _loc3_:string = <any>null;
						_loc3_ = param1.keyword;
						return com.google.analytics.core.Organic.getKeywordValueFromPath(_loc3_,param2);
					}

					public isIgnoredKeyword(param1:string):boolean
					{
						if(this._ignoredKeywordsCache.hasOwnProperty(param1))
						{
							return true;
						}
						return false;
					}

					public isIgnoredReferral(param1:string):boolean
					{
						if(this._ignoredReferralsCache.hasOwnProperty(param1))
						{
							return true;
						}
						return false;
					}

					public clear()
					{
						this.clearEngines();
						this.clearIgnoredReferrals();
						this.clearIgnoredKeywords();
					}

					public get ignoredKeywordsCount():number
					{
						return this._ignoredKeywords.length;
					}

					public match(param1:string):boolean
					{
						if(param1 == "")
						{
							return false;
						}
						param1 = param1.toLowerCase();
						if(this._sourcesEngine[param1] != undefined)
						{
							return true;
						}
						return false;
					}

					public get count():number
					{
						return this._sources.length;
					}

					public addSource(param1:string,param2:string)
					{
						var _loc3_:com.google.analytics.core.OrganicReferrer = <any>null;
						_loc3_ = new com.google.analytics.core.OrganicReferrer(param1,param2);
						if(this._sourcesCache[_loc3_.toString()] == undefined)
						{
							this._sources.push(_loc3_);
							this._sourcesCache[_loc3_.toString()] = this._sources.length - 1;
							if(this._sourcesEngine[_loc3_.engine] == undefined)
							{
								this._sourcesEngine[_loc3_.engine] = [this._sources.length - 1];
							}
							else
							{
								this._sourcesEngine[_loc3_.engine].push(this._sources.length - 1);
							}
						}
						else if(com.google.analytics.core.Organic.throwErrors)
						{
							throw new flash.Error(_loc3_.toString() + " already exists, we don\'t add it.").message;
						}
					}

					public clearIgnoredKeywords()
					{
						this._ignoredKeywords = [];
						this._ignoredKeywordsCache = {};
					}

					public clearEngines()
					{
						this._sources = [];
						this._sourcesCache = [];
						this._sourcesEngine = [];
					}

					public get ignoredReferralsCount():number
					{
						return this._ignoredReferrals.length;
					}

					public addIgnoredReferral(param1:string)
					{
						if(this._ignoredReferralsCache[param1] == undefined)
						{
							this._ignoredReferrals.push(param1);
							this._ignoredReferralsCache[param1] = this._ignoredReferrals.length - 1;
						}
						else if(com.google.analytics.core.Organic.throwErrors)
						{
							throw new flash.Error("\"" + param1 + "\" already exists, we don\'t add it.").message;
						}
					}

					public clearIgnoredReferrals()
					{
						this._ignoredReferrals = [];
						this._ignoredReferralsCache = {};
					}

					public getReferrerByName(param1:string):com.google.analytics.core.OrganicReferrer
					{
						var _loc2_:number = flash.checkInt(0);
						if(this.match(param1))
						{
							_loc2_ = flash.checkInt(this._sourcesEngine[param1][0]);
							return this._sources[_loc2_];
						}
						return null;
					}

					public addIgnoredKeyword(param1:string)
					{
						if(this._ignoredKeywordsCache[param1] == undefined)
						{
							this._ignoredKeywords.push(param1);
							this._ignoredKeywordsCache[param1] = this._ignoredKeywords.length - 1;
						}
						else if(com.google.analytics.core.Organic.throwErrors)
						{
							throw new flash.Error("\"" + param1 + "\" already exists, we don\'t add it.").message;
						}
					}

					public get sources():Array<any>
					{
						return this._sources;
					}

				}
			}
		}
	}
}

com.google.analytics.core.Organic.throwErrors = false;
