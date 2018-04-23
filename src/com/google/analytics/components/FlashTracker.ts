module com {
	export module google {
		export module analytics {
			export module components {
				export class FlashTracker extends egret.Sprite implements com.google.analytics.AnalyticsTracker {
					public static version:com.google.analytics.utils.Version;
					private _adSense:com.google.analytics.external.AdSenseGlobals;
					private _env:com.google.analytics.utils.Environment;
					protected _height:number = 18;
					private _idleTimer:com.google.analytics.core.IdleTimer;
					private _config:com.google.analytics.v4.Configuration;
					private _mode:string = "AS3";
					private _dom:com.google.analytics.external.HTMLDOM;
					private _ready:boolean = false;
					protected _width:number = 18;
					private _account:string = "";
					protected _componentInspectorSetting:boolean = false;
					private _visualDebug:boolean = false;
					public boundingBox_mc:egret.DisplayObject;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _buffer:com.google.analytics.core.Buffer;
					private _display:egret.DisplayObject;
					protected livePreviewHeight:number = NaN;
					private _jsproxy:com.google.analytics.external.JavascriptProxy;
					protected isLivePreview:boolean = false;
					protected preview:egret.SwfMovie;
					private _gifRequest:com.google.analytics.core.GIFRequest;
					protected livePreviewWidth:number = NaN;
					private _tracker:com.google.analytics.v4.GoogleAnalyticsAPI;

					public constructor()
					{
						super(						var _self__:any = this;
);
						this._ready = false;
						this._account = "";
						this._mode = com.google.analytics.core.TrackerMode.AS3;
						this._visualDebug = false;
						this._width = 18;
						this._height = 18;
						this._tracker = new com.google.analytics.core.TrackerCache();
						this.isLivePreview = this._checkLivePreview();
						this._componentInspectorSetting = false;
						if(this.boundingBox_mc)
						{
							this.boundingBox_mc.visible = false;
							_self__.removeChild(this.boundingBox_mc);
							this.boundingBox_mc = null;
						}
						if(this.isLivePreview)
						{
							this._createLivePreview();
						}
						_self__.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this._factory,this),null);
					}

					public trackEvent(param1:string,param2:string,param3:string = null,param4:number = NaN):boolean
					{
						return this._tracker.trackEvent(param1,param2,param3,param4);
					}

					public trackTrans()
					{
						this._tracker.trackTrans();
					}

					private _createLivePreview()
					{
						var _self__:any = this;
						var _loc1_:egret.Graphics = <any>null;
						var _loc2_:any = <any>null;
						this.preview = new egret.SwfMovie();
						_loc1_ = this.preview.graphics;
						_loc1_.beginFill(16777215);
						_loc1_.moveTo(0,0);
						_loc1_.lineTo(0,this._width);
						_loc1_.lineTo(this._width,this._height);
						_loc1_.lineTo(this._height,0);
						_loc1_.lineTo(0,0);
						_loc1_.endFill();
						_loc2_ = <any>flash.getDefinitionByName("com.google.analytics.components::Icon");
						this.preview["icon_mc"] = new _loc2_();
						this.preview["icon_mc"].name = "icon_mc";
						this.preview.addChild(this.preview["icon_mc"]);
						_self__.addChild(this.preview);
					}

					public trackPageview(param1:string = "")
					{
						this._tracker.trackPageview(param1);
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

					public setCampNameKey(param1:string)
					{
						this._tracker.setCampNameKey(param1);
					}

					public resetSession()
					{
						this._tracker.resetSession();
					}

					public set account(param1:string)
					{
						this._account = param1;
					}

					public get debug():com.google.analytics.debug.DebugConfiguration
					{
						if(<any>!this._debug)
						{
							this._createDebugAndConfig();
						}
						return this._debug;
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

					public setLocalServerMode()
					{
						this._tracker.setLocalServerMode();
					}

					public getLocalGifPath():string
					{
						return this._tracker.getLocalGifPath();
					}

					public clearIgnoredRef()
					{
						this._tracker.clearIgnoredRef();
					}

					public isReady():boolean
					{
						return this._ready;
					}

					public set debug(param1:com.google.analytics.debug.DebugConfiguration)
					{
						this._debug = param1;
					}

					public getVersion():string
					{
						return this._tracker.getVersion();
					}

					public setLocalRemoteServerMode()
					{
						this._tracker.setLocalRemoteServerMode();
					}

					public setCampNOKey(param1:string)
					{
						this._tracker.setCampNOKey(param1);
					}

					public addIgnoredOrganic(param1:string)
					{
						this._tracker.addIgnoredOrganic(param1);
					}

					public setCookiePath(param1:string)
					{
						this._tracker.setCookiePath(param1);
					}

					public setCampTermKey(param1:string)
					{
						this._tracker.setCampTermKey(param1);
					}

					private _trackerFactory():com.google.analytics.v4.GoogleAnalyticsAPI
					{
						this.debug.info("GATracker (AS3) v" + com.google.analytics.components.FlashTracker.version + "\naccount: " + this.account);
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

					public setCampaignTrack(param1:boolean)
					{
						this._tracker.setCampaignTrack(param1);
					}

					public getServiceMode():com.google.analytics.core.ServerOperationMode
					{
						return this._tracker.getServiceMode();
					}

					public set componentInspectorSetting(param1:boolean)
					{
						this._componentInspectorSetting = param1;
					}

					public setSessionTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this._tracker.setSessionTimeout(param1);
					}

					public setRemoteServerMode()
					{
						this._tracker.setRemoteServerMode();
					}

					public get visualDebug():boolean
					{
						return this._visualDebug;
					}

					public addOrganic(param1:string,param2:string)
					{
						this._tracker.addOrganic(param1,param2);
					}

					public setCookieTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this._tracker.setCookieTimeout(param1);
					}

					public getClientInfo():boolean
					{
						return this._tracker.getClientInfo();
					}

					public setAllowLinker(param1:boolean)
					{
						this._tracker.setAllowLinker(param1);
					}

					public setClientInfo(param1:boolean)
					{
						this._tracker.setClientInfo(param1);
					}

					private _bridgeFactory():com.google.analytics.v4.GoogleAnalyticsAPI
					{
						this.debug.info("GATracker (Bridge) v" + com.google.analytics.components.FlashTracker.version + "\naccount: " + this.account);
						return new Bridge(this.account,this._debug,this._jsproxy);
					}

					public get config():com.google.analytics.v4.Configuration
					{
						if(<any>!this._config)
						{
							this._createDebugAndConfig();
						}
						return this._config;
					}

					public set mode(param1:string)
					{
						this._mode = param1;
					}

					public setDetectFlash(param1:boolean)
					{
						this._tracker.setDetectFlash(param1);
					}

					public addItem(param1:string,param2:string,param3:string,param4:string,param5:number,param6:number)
					{
						param6 = flash.checkInt(param6);
						this._tracker.addItem(param1,param2,param3,param4,param5,param6);
					}

					public setVar(param1:string)
					{
						this._tracker.setVar(param1);
					}

					public clearIgnoredOrganic()
					{
						this._tracker.clearIgnoredOrganic();
					}

					public setDomainName(param1:string)
					{
						this._tracker.setDomainName(param1);
					}

					private _checkLivePreview():boolean
					{
						if(this.parent != null && egret.getQualifiedClassName(this.parent) == "fl.livepreview::LivePreviewParent")
						{
							return true;
						}
						return false;
					}

					public setCampSourceKey(param1:string)
					{
						this._tracker.setCampSourceKey(param1);
					}

					public setCampContentKey(param1:string)
					{
						this._tracker.setCampContentKey(param1);
					}

					public setSize(param1:number,param2:number)
					{
					}

					public setAllowAnchor(param1:boolean)
					{
						this._tracker.setAllowAnchor(param1);
					}

					public setLocalGifPath(param1:string)
					{
						this._tracker.setLocalGifPath(param1);
					}

					public get mode():string
					{
						return this._mode;
					}

					public setSampleRate(param1:number)
					{
						this._tracker.setSampleRate(param1);
					}

					public setAllowHash(param1:boolean)
					{
						this._tracker.setAllowHash(param1);
					}

					public setDetectTitle(param1:boolean)
					{
						this._tracker.setDetectTitle(param1);
					}

					public cookiePathCopy(param1:string)
					{
						this._tracker.cookiePathCopy(param1);
					}

					private _factory(param1:egret.Event)
					{
						var _self__:any = this;
						var _loc2_:com.google.analytics.v4.GoogleAnalyticsAPI = <any>null;
						var _loc3_:com.google.analytics.core.TrackerCache = <any>null;
						_self__.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this._factory,this),null);
						if(this.isLivePreview)
						{
							return ;
						}
						this._display = this;
						this._createDebugAndConfig();
						if(this.visualDebug)
						{
							this.debug.layout = new com.google.analytics.debug.Layout(this.debug,this._display);
							this.debug.active = this.visualDebug;
						}
						this._jsproxy = new JavascriptProxy(this.debug);
						_loc3_ = flash.As3As(this._tracker,com.google.analytics.core.TrackerCache);
						switch(this.mode)
						{
						case com.google.analytics.core.TrackerMode.BRIDGE :
							_loc2_ = this._bridgeFactory();
							break;
						case com.google.analytics.core.TrackerMode.AS3 :
						default :
							_loc2_ = this._trackerFactory();
						}
						if(<any>!_loc3_.isEmpty())
						{
							_loc3_.tracker = _loc2_;
							_loc3_.flush();
						}
						this._tracker = _loc2_;
						this._ready = true;
						_self__.dispatchEvent(new com.google.analytics.events.AnalyticsEvent(com.google.analytics.events.AnalyticsEvent.READY,this));
					}

					public getDetectFlash():boolean
					{
						return this._tracker.getDetectFlash();
					}

					public clearOrganic()
					{
						this._tracker.clearOrganic();
					}

					private _createDebugAndConfig()
					{
						if(<any>!this._debug)
						{
							this.debug = new com.google.analytics.debug.DebugConfiguration();
						}
						if(<any>!this._config)
						{
							this.config = new com.google.analytics.v4.Configuration(this.debug);
						}
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

					public getAccount():string
					{
						return this._tracker.getAccount();
					}

					public link(param1:string,param2:boolean = false)
					{
						this._tracker.link(param1,param2);
					}

				}
			}
		}
	}
}

com.google.analytics.components.FlashTracker.version = com.google.analytics.API.version;
flash.extendsClass("com.google.analytics.components.FlashTracker","egret.Sprite")
flash.implementsClass("com.google.analytics.components.FlashTracker",["com.google.analytics.AnalyticsTracker"]);