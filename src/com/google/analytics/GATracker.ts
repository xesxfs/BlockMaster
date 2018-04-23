module com {
	export module google {
		export module analytics {
			export class GATracker extends egret.HashObject implements com.google.analytics.AnalyticsTracker {
				public static version:com.google.analytics.utils.Version;
				public static autobuild:boolean;
				private _adSense:com.google.analytics.external.AdSenseGlobals;
				private _env:com.google.analytics.utils.Environment;
				private _visualDebug:boolean = false;
				private _idleTimer:com.google.analytics.core.IdleTimer;
				private _debug:com.google.analytics.debug.DebugConfiguration;
				private _buffer:com.google.analytics.core.Buffer;
				private _config:com.google.analytics.v4.Configuration;
				private _mode:string;
				private _display:egret.DisplayObject;
				private _jsproxy:com.google.analytics.external.JavascriptProxy;
				private _dom:com.google.analytics.external.HTMLDOM;
				private _eventDispatcher:egret.EventDispatcher;
				private _ready:boolean = false;
				private _gifRequest:com.google.analytics.core.GIFRequest;
				private _account:string;
				private _tracker:com.google.analytics.v4.GoogleAnalyticsAPI;

				public constructor(param1:egret.DisplayObject,param2:string,param3:string = "AS3",param4:boolean = false,param5:com.google.analytics.v4.Configuration = null,param6:com.google.analytics.debug.DebugConfiguration = null)
				{
					super();
					super();
					this._ready = false;
					this._display = param1;
					this._eventDispatcher = new egret.EventDispatcher(<any>this);
					this._tracker = new com.google.analytics.core.TrackerCache();
					this.account = param2;
					this.mode = param3;
					this.visualDebug = param4;
					if(<any>!param6)
					{
						this.debug = new com.google.analytics.debug.DebugConfiguration();
					}
					if(<any>!param5)
					{
						this.config = new com.google.analytics.v4.Configuration(param6);
					}
					if(com.google.analytics.GATracker.autobuild)
					{
						this._factory();
					}
				}

				public link(param1:string,param2:boolean = false)
				{
					this._tracker.link(param1,param2);
				}

				public addOrganic(param1:string,param2:string)
				{
					this._tracker.addOrganic(param1,param2);
				}

				public setAllowLinker(param1:boolean)
				{
					this._tracker.setAllowLinker(param1);
				}

				public trackEvent(param1:string,param2:string,param3:string = null,param4:number = NaN):boolean
				{
					return this._tracker.trackEvent(param1,param2,param3,param4);
				}

				public setCookieTimeout(param1:number)
				{
					param1 = flash.checkInt(param1);
					this._tracker.setCookieTimeout(param1);
				}

				public trackTrans()
				{
					this._tracker.trackTrans();
				}

				public trackPageview(param1:string = "")
				{
					this._tracker.trackPageview(param1);
				}

				public getClientInfo():boolean
				{
					return this._tracker.getClientInfo();
				}

				public setClientInfo(param1:boolean)
				{
					this._tracker.setClientInfo(param1);
				}

				public get account():string
				{
					return this._account;
				}

				public linkByPost(param1:any,param2:boolean = false)
				{
					this._tracker.linkByPost(param1,param2);
				}

				public getDetectTitle():boolean
				{
					return this._tracker.getDetectTitle();
				}

				public dispatchEvent(param1:egret.Event):boolean
				{
					return this._eventDispatcher.dispatchEvent(param1);
				}

				public get config():com.google.analytics.v4.Configuration
				{
					return this._config;
				}

				public set mode(param1:string)
				{
					this._mode = param1;
				}

				public removeEventListener(param1:string,param2:Function,thisObject:any,param3:boolean = false)
				{
					this._eventDispatcher.removeEventListener(param1,param2,null,param3);
				}

				public setDetectFlash(param1:boolean)
				{
					this._tracker.setDetectFlash(param1);
				}

				public resetSession()
				{
					this._tracker.resetSession();
				}

				public setCampNameKey(param1:string)
				{
					this._tracker.setCampNameKey(param1);
				}

				public get debug():com.google.analytics.debug.DebugConfiguration
				{
					return this._debug;
				}

				public addItem(param1:string,param2:string,param3:string,param4:string,param5:number,param6:number)
				{
					param6 = flash.checkInt(param6);
					this._tracker.addItem(param1,param2,param3,param4,param5,param6);
				}

				private _bridgeFactory():com.google.analytics.v4.GoogleAnalyticsAPI
				{
					this.debug.info("GATracker (Bridge) v" + com.google.analytics.GATracker.version + "\naccount: " + this.account);
					return new Bridge(this.account,this._debug,this._jsproxy);
				}

				public addEventListener(param1:string,param2:Function,thisObject:any,param3:boolean = false,param4:number = 0,param5:boolean = false)
				{
					this._eventDispatcher.addEventListener(param1,param2,null,param3,param4);
				}

				public clearIgnoredOrganic()
				{
					this._tracker.clearIgnoredOrganic();
				}

				public set account(param1:string)
				{
					this._account = param1;
				}

				public setVar(param1:string)
				{
					this._tracker.setVar(param1);
				}

				public build()
				{
					if(<any>!this.isReady())
					{
						this._factory();
					}
				}

				public setDomainName(param1:string)
				{
					this._tracker.setDomainName(param1);
				}

				public createEventTracker(param1:string):com.google.analytics.core.EventTracker
				{
					return this._tracker.createEventTracker(param1);
				}

				public set config(param1:com.google.analytics.v4.Configuration)
				{
					this._config = param1;
				}

				public addTrans(param1:string,param2:string,param3:number,param4:number,param5:number,param6:string,param7:string,param8:string):any
				{
					return this._tracker.addTrans(param1,param2,param3,param4,param5,param6,param7,param8);
				}

				public setCampSourceKey(param1:string)
				{
					this._tracker.setCampSourceKey(param1);
				}

				public setCampContentKey(param1:string)
				{
					this._tracker.setCampContentKey(param1);
				}

				public willTrigger(param1:string):boolean
				{
					return this._eventDispatcher.willTrigger(param1);
				}

				public setLocalServerMode()
				{
					this._tracker.setLocalServerMode();
				}

				public isReady():boolean
				{
					return this._ready;
				}

				public getLocalGifPath():string
				{
					return this._tracker.getLocalGifPath();
				}

				public setAllowAnchor(param1:boolean)
				{
					this._tracker.setAllowAnchor(param1);
				}

				public clearIgnoredRef()
				{
					this._tracker.clearIgnoredRef();
				}

				public get mode():string
				{
					return this._mode;
				}

				public set debug(param1:com.google.analytics.debug.DebugConfiguration)
				{
					this._debug = param1;
				}

				public setLocalGifPath(param1:string)
				{
					this._tracker.setLocalGifPath(param1);
				}

				public getVersion():string
				{
					return this._tracker.getVersion();
				}

				public setSampleRate(param1:number)
				{
					this._tracker.setSampleRate(param1);
				}

				public setCookiePath(param1:string)
				{
					this._tracker.setCookiePath(param1);
				}

				public setAllowHash(param1:boolean)
				{
					this._tracker.setAllowHash(param1);
				}

				public setCampNOKey(param1:string)
				{
					this._tracker.setCampNOKey(param1);
				}

				public addIgnoredOrganic(param1:string)
				{
					this._tracker.addIgnoredOrganic(param1);
				}

				public setLocalRemoteServerMode()
				{
					this._tracker.setLocalRemoteServerMode();
				}

				public cookiePathCopy(param1:string)
				{
					this._tracker.cookiePathCopy(param1);
				}

				private _factory()
				{
					var _loc1_:com.google.analytics.v4.GoogleAnalyticsAPI = <any>null;
					var _loc2_:com.google.analytics.core.TrackerCache = <any>null;
					this._jsproxy = new JavascriptProxy(this.debug);
					if(this.visualDebug)
					{
						this.debug.layout = new com.google.analytics.debug.Layout(this.debug,this._display);
						this.debug.active = this.visualDebug;
					}
					_loc2_ = flash.As3As(this._tracker,com.google.analytics.core.TrackerCache);
					switch(this.mode)
					{
					case com.google.analytics.core.TrackerMode.BRIDGE :
						_loc1_ = this._bridgeFactory();
						break;
					case com.google.analytics.core.TrackerMode.AS3 :
					default :
						_loc1_ = this._trackerFactory();
					}
					if(<any>!_loc2_.isEmpty())
					{
						_loc2_.tracker = _loc1_;
						_loc2_.flush();
					}
					this._tracker = _loc1_;
					this._ready = true;
					this.dispatchEvent(new com.google.analytics.events.AnalyticsEvent(com.google.analytics.events.AnalyticsEvent.READY,this));
				}

				public setCampTermKey(param1:string)
				{
					this._tracker.setCampTermKey(param1);
				}

				private _trackerFactory():com.google.analytics.v4.GoogleAnalyticsAPI
				{
					this.debug.info("GATracker (AS3) v" + com.google.analytics.GATracker.version + "\naccount: " + this.account);
					this._adSense = new AdSenseGlobals(this.debug);
					this._dom = new HTMLDOM(this.debug);
					this._dom["cacheProperties"]();
					this._env = new com.google.analytics.utils.Environment("","","",this.debug,this._dom);
					this._buffer = new com.google.analytics.core.Buffer(this.config,this.debug,false);
					this._gifRequest = new com.google.analytics.core.GIFRequest(this.config,this.debug,this._buffer,this._env);
					this._idleTimer = new com.google.analytics.core.IdleTimer(this.config,this.debug,this._display,this._buffer);
					this._env.url = this._display.stage["loaderInfo"].url;
					return new com.google.analytics.v4.Tracker(this.account,this.config,this.debug,this._env,this._buffer,this._gifRequest,this._adSense);
				}

				public setDetectTitle(param1:boolean)
				{
					this._tracker.setDetectTitle(param1);
				}

				public getServiceMode():com.google.analytics.core.ServerOperationMode
				{
					return this._tracker.getServiceMode();
				}

				public clearOrganic()
				{
					this._tracker.clearOrganic();
				}

				public setCampaignTrack(param1:boolean)
				{
					this._tracker.setCampaignTrack(param1);
				}

				public addIgnoredRef(param1:string)
				{
					this._tracker.addIgnoredRef(param1);
				}

				public set visualDebug(param1:boolean)
				{
					this._visualDebug = param1;
				}

				public setCampMediumKey(param1:string)
				{
					this._tracker.setCampMediumKey(param1);
				}

				public setSessionTimeout(param1:number)
				{
					param1 = flash.checkInt(param1);
					this._tracker.setSessionTimeout(param1);
				}

				public getDetectFlash():boolean
				{
					return this._tracker.getDetectFlash();
				}

				public get visualDebug():boolean
				{
					return this._visualDebug;
				}

				public getAccount():string
				{
					return this._tracker.getAccount();
				}

				public hasEventListener(param1:string):boolean
				{
					return this._eventDispatcher.hasEventListener(param1);
				}

				public setRemoteServerMode()
				{
					this._tracker.setRemoteServerMode();
				}

			}
		}
	}
}

com.google.analytics.GATracker.version = com.google.analytics.API.version;
com.google.analytics.GATracker.autobuild = true;
flash.implementsClass("com.google.analytics.GATracker",["com.google.analytics.AnalyticsTracker"]);