module com {
	export module google {
		export module analytics {
			export module core {
				export class TrackerCache extends egret.HashObject implements com.google.analytics.v4.GoogleAnalyticsAPI {
					public static CACHE_THROW_ERROR:boolean = false;
					public tracker:com.google.analytics.v4.GoogleAnalyticsAPI;
					private _ar:Array<any>;

					public constructor(param1:com.google.analytics.v4.GoogleAnalyticsAPI = null)
					{
						super();
						super();
						this.tracker = param1;
						this._ar = [];
					}

					public size():number
					{
						return this._ar.length;
					}

					public flush()
					{
						var _loc1_:any = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:Array<any> = <any>null;
						var _loc4_:number = flash.checkInt(0);
						var _loc5_:number = flash.checkInt(0);
						if(this.tracker == null)
						{
							return ;
						}
						if(this.size() > 0)
						{
							_loc4_ = flash.checkInt(this._ar.length);
							while(_loc5_ < _loc4_)
							{
								_loc1_ = this._ar.shift();
								_loc2_ = <string>_loc1_["name"];
								_loc3_ = flash.As3As(_loc1_["args"],Array);
								if(_loc2_ != null && _loc2_ in this.tracker)
								{
									(flash.As3As(this.tracker[_loc2_],Function)).apply(this.tracker,_loc3_);
								}
								_loc5_++;
							}
						}
					}

					public enqueue(param1:string,...rest):boolean
					{
						if(param1 == null)
						{
							return false;
						}
						this._ar.push({"name":param1,"args":rest});
						return true;
					}

					public link(param1:string,param2:boolean = false)
					{
						this.enqueue("link",param1,param2);
					}

					public addOrganic(param1:string,param2:string)
					{
						this.enqueue("addOrganic",param1,param2);
					}

					public setAllowLinker(param1:boolean)
					{
						this.enqueue("setAllowLinker",param1);
					}

					public trackEvent(param1:string,param2:string,param3:string = null,param4:number = NaN):boolean
					{
						this.enqueue("trackEvent",param1,param2,param3,param4);
						return true;
					}

					public trackTrans()
					{
						this.enqueue("trackTrans");
					}

					public trackPageview(param1:string = "")
					{
						this.enqueue("trackPageview",param1);
					}

					public setClientInfo(param1:boolean)
					{
						this.enqueue("setClientInfo",param1);
					}

					public getClientInfo():boolean
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getClientInfo\' method for the moment.").message;
						}
						return false;
					}

					public linkByPost(param1:any,param2:boolean = false)
					{
						this.enqueue("linkByPost",param1,param2);
					}

					public setCookieTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this.enqueue("setCookieTimeout",param1);
					}

					public isEmpty():boolean
					{
						return this._ar.length == 0;
					}

					public resetSession()
					{
						this.enqueue("resetSession");
					}

					public setDetectFlash(param1:boolean)
					{
						this.enqueue("setDetectFlash",param1);
					}

					public clear()
					{
						this._ar = [];
					}

					public getDetectTitle():boolean
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getDetectTitle\' method for the moment.").message;
						}
						return false;
					}

					public setCampNameKey(param1:string)
					{
						this.enqueue("setCampNameKey",param1);
					}

					public addItem(param1:string,param2:string,param3:string,param4:string,param5:number,param6:number)
					{
						param6 = flash.checkInt(param6);
						this.enqueue("addItem",param1,param2,param3,param4,param5,param6);
					}

					public createEventTracker(param1:string):com.google.analytics.core.EventTracker
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'createEventTracker\' method for the moment.").message;
						}
						return null;
					}

					public setVar(param1:string)
					{
						this.enqueue("setVar",param1);
					}

					public clearIgnoredOrganic()
					{
						this.enqueue("clearIgnoredOrganic");
					}

					public setDomainName(param1:string)
					{
						this.enqueue("setDomainName",param1);
					}

					public addTrans(param1:string,param2:string,param3:number,param4:number,param5:number,param6:string,param7:string,param8:string):any
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'addTrans\' method for the moment.").message;
						}
						return null;
					}

					public setCampSourceKey(param1:string)
					{
						this.enqueue("setCampSourceKey",param1);
					}

					public setCampContentKey(param1:string)
					{
						this.enqueue("setCampContentKey",param1);
					}

					public clearIgnoredRef()
					{
						this.enqueue("clearIgnoredRef");
					}

					public setLocalServerMode()
					{
						this.enqueue("setLocalServerMode");
					}

					public getLocalGifPath():string
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getLocalGifPath\' method for the moment.").message;
						}
						return "";
					}

					public setAllowAnchor(param1:boolean)
					{
						this.enqueue("setAllowAnchor",param1);
					}

					public setLocalGifPath(param1:string)
					{
						this.enqueue("setLocalGifPath",param1);
					}

					public getVersion():string
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getVersion\' method for the moment.").message;
						}
						return "";
					}

					public setCookiePath(param1:string)
					{
						this.enqueue("setCookiePath",param1);
					}

					public setSampleRate(param1:number)
					{
						this.enqueue("setSampleRate",param1);
					}

					public setAllowHash(param1:boolean)
					{
						this.enqueue("setAllowHash",param1);
					}

					public addIgnoredOrganic(param1:string)
					{
						this.enqueue("addIgnoredOrganic",param1);
					}

					public setCampNOKey(param1:string)
					{
						this.enqueue("setCampNOKey",param1);
					}

					public getServiceMode():com.google.analytics.core.ServerOperationMode
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getServiceMode\' method for the moment.").message;
						}
						return null;
					}

					public setLocalRemoteServerMode()
					{
						this.enqueue("setLocalRemoteServerMode");
					}

					public cookiePathCopy(param1:string)
					{
						this.enqueue("cookiePathCopy",param1);
					}

					public setDetectTitle(param1:boolean)
					{
						this.enqueue("setDetectTitle",param1);
					}

					public getDetectFlash():boolean
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getDetectFlash\' method for the moment.").message;
						}
						return false;
					}

					public setCampaignTrack(param1:boolean)
					{
						this.enqueue("setCampaignTrack",param1);
					}

					public clearOrganic()
					{
						this.enqueue("clearOrganic");
					}

					public setCampTermKey(param1:string)
					{
						this.enqueue("setCampTermKey",param1);
					}

					public addIgnoredRef(param1:string)
					{
						this.enqueue("addIgnoredRef",param1);
					}

					public setCampMediumKey(param1:string)
					{
						this.enqueue("setCampMediumKey",param1);
					}

					public setSessionTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this.enqueue("setSessionTimeout",param1);
					}

					public setRemoteServerMode()
					{
						this.enqueue("setRemoteServerMode");
					}

					public element():any
					{
						return this._ar[0];
					}

					public getAccount():string
					{
						if(com.google.analytics.core.TrackerCache.CACHE_THROW_ERROR)
						{
							throw new flash.IllegalOperationError("The tracker is not ready and you can use the \'getAccount\' method for the moment.").message;
						}
						return "";
					}

				}
			}
		}
	}
}

flash.implementsClass("com.google.analytics.core.TrackerCache",["com.google.analytics.v4.GoogleAnalyticsAPI"]);