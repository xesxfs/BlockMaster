module com {
	export module google {
		export module analytics {
			export module v4 {
				export interface GoogleAnalyticsAPI {
					getServiceMode():com.google.analytics.core.ServerOperationMode;
					setLocalRemoteServerMode();
					setCampSourceKey(param1:string);
					setCampContentKey(param1:string);
					addOrganic(param1:string,param2:string);
					setDetectFlash(param1:boolean);
					resetSession();
					setCampTermKey(param1:string);
					setCampNameKey(param1:string);
					addIgnoredOrganic(param1:string);
					addItem(param1:string,param2:string,param3:string,param4:string,param5:number,param6:number);
					setAllowLinker(param1:boolean);
					addTrans(param1:string,param2:string,param3:number,param4:number,param5:number,param6:string,param7:string,param8:string):any;
					getDetectFlash():boolean;
					setCampaignTrack(param1:boolean);
					createEventTracker(param1:string):com.google.analytics.core.EventTracker;
					setCookieTimeout(param1:number);
					setAllowAnchor(param1:boolean);
					trackTrans();
					trackEvent(param1:string,param2:string,param3?:string,param4?:number):boolean;
					trackPageview(param1?:string);
					setLocalGifPath(param1:string);
					getVersion():string;
					getLocalGifPath():string;
					setVar(param1:string);
					clearIgnoredOrganic();
					setCampMediumKey(param1:string);
					addIgnoredRef(param1:string);
					setClientInfo(param1:boolean);
					setCookiePath(param1:string);
					setSampleRate(param1:number);
					setSessionTimeout(param1:number);
					setRemoteServerMode();
					clearIgnoredRef();
					linkByPost(param1:any,param2?:boolean);
					setLocalServerMode();
					setDetectTitle(param1:boolean);
					setAllowHash(param1:boolean);
					clearOrganic();
					getAccount():string;
					setDomainName(param1:string);
					link(param1:string,param2?:boolean);
					setCampNOKey(param1:string);
					getClientInfo():boolean;
					cookiePathCopy(param1:string);
					getDetectTitle():boolean;
				}
			}
		}
	}
}

