module com {
	export module google {
		export module analytics {
			export module v4 {
				export class Configuration extends egret.HashObject {
					public serverMode:com.google.analytics.core.ServerOperationMode;
					public detectFlash:boolean = true;
					public allowLocalTracking:boolean = true;
					public secureRemoteGIFpath:string = "https://ssl.google-analytics.com/__utm.gif";
					public hasSiteOverlay:boolean = false;
					private _version:string = "4.3as";
					public allowDomainHash:boolean = true;
					public detectClientInfo:boolean = true;
					public idleLoop:number = 30;
					public isTrackOutboundSubdomains:boolean = false;
					public cookiePath:string = "/";
					public transactionFieldDelim:string = "|";
					private _organic:com.google.analytics.core.Organic;
					private _cookieName:string = "analytics";
					public campaignKey:com.google.analytics.campaign.CampaignKey;
					public google:string = "google";
					public googleCsePath:string = "cse";
					public bucketCapacity:number = 10;
					private _sampleRate:number = 1;
					public remoteGIFpath:string = "http://www.google-analytics.com/__utm.gif";
					public googleSearchParam:string = "q";
					public allowLinker:boolean = false;
					public maxOutboundLinkExamined:number = 1000;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _trackingLimitPerSession:number = 500;
					private _domain:com.google.analytics.core.Domain;
					public allowAnchor:boolean = false;
					public tokenCliff:number = 10;
					public sessionTimeout:number = NaN;
					public idleTimeout:number = 60;
					public campaignTracking:boolean = true;
					public domainName:string = "";
					public detectTitle:boolean = true;
					public tokenRate:number = 0.2;
					public conversionTimeout:number = NaN;
					public localGIFpath:string = "/__utm.gif";

					public constructor(param1:com.google.analytics.debug.DebugConfiguration = null)
					{
						super();
						super();
						this._version = "4.3as";
						this._sampleRate = 1;
						this._trackingLimitPerSession = flash.checkInt(500);
						this._organic = new com.google.analytics.core.Organic();
						this.googleCsePath = "cse";
						this.googleSearchParam = "q";
						this.google = "google";
						this._cookieName = "analytics";
						this.allowDomainHash = true;
						this.allowAnchor = false;
						this.allowLinker = false;
						this.hasSiteOverlay = false;
						this.tokenRate = 0.2;
						this.conversionTimeout = com.google.analytics.utils.Timespan.sixmonths;
						this.sessionTimeout = com.google.analytics.utils.Timespan.thirtyminutes;
						this.idleLoop = 30;
						this.idleTimeout = 60;
						this.maxOutboundLinkExamined = 1000;
						this.tokenCliff = flash.checkInt(10);
						this.bucketCapacity = 10;
						this.detectClientInfo = true;
						this.detectFlash = true;
						this.detectTitle = true;
						this.campaignKey = new com.google.analytics.campaign.CampaignKey();
						this.campaignTracking = true;
						this.isTrackOutboundSubdomains = false;
						this.serverMode = com.google.analytics.core.ServerOperationMode.remote;
						this.localGIFpath = "/__utm.gif";
						this.remoteGIFpath = "http://www.google-analytics.com/__utm.gif";
						this.secureRemoteGIFpath = "https://ssl.google-analytics.com/__utm.gif";
						this.cookiePath = "/";
						this.transactionFieldDelim = "|";
						this.domainName = "";
						this.allowLocalTracking = true;
						this._debug = param1;
						this._domain = new com.google.analytics.core.Domain(com.google.analytics.core.DomainNameMode.auto,"",this._debug);
						this.serverMode = com.google.analytics.core.ServerOperationMode.remote;
						this._initOrganicSources();
					}

					public get organic():com.google.analytics.core.Organic
					{
						return this._organic;
					}

					public get trackingLimitPerSession():number
					{
						return this._trackingLimitPerSession;
					}

					private _initOrganicSources()
					{
						this.addOrganicSource(this.google,this.googleSearchParam);
						this.addOrganicSource("yahoo","p");
						this.addOrganicSource("msn","q");
						this.addOrganicSource("aol","query");
						this.addOrganicSource("aol","encquery");
						this.addOrganicSource("lycos","query");
						this.addOrganicSource("ask","q");
						this.addOrganicSource("altavista","q");
						this.addOrganicSource("netscape","query");
						this.addOrganicSource("cnn","query");
						this.addOrganicSource("looksmart","qt");
						this.addOrganicSource("about","terms");
						this.addOrganicSource("mamma","query");
						this.addOrganicSource("alltheweb","q");
						this.addOrganicSource("gigablast","q");
						this.addOrganicSource("voila","rdata");
						this.addOrganicSource("virgilio","qs");
						this.addOrganicSource("live","q");
						this.addOrganicSource("baidu","wd");
						this.addOrganicSource("alice","qs");
						this.addOrganicSource("yandex","text");
						this.addOrganicSource("najdi","q");
						this.addOrganicSource("aol","q");
						this.addOrganicSource("club-internet","q");
						this.addOrganicSource("mama","query");
						this.addOrganicSource("seznam","q");
						this.addOrganicSource("search","q");
						this.addOrganicSource("wp","szukaj");
						this.addOrganicSource("onet","qt");
						this.addOrganicSource("netsprint","q");
						this.addOrganicSource("google.interia","q");
						this.addOrganicSource("szukacz","q");
						this.addOrganicSource("yam","k");
						this.addOrganicSource("pchome","q");
						this.addOrganicSource("kvasir","searchExpr");
						this.addOrganicSource("sesam","q");
						this.addOrganicSource("ozu","q");
						this.addOrganicSource("terra","query");
						this.addOrganicSource("nostrum","query");
						this.addOrganicSource("mynet","q");
						this.addOrganicSource("ekolay","q");
						this.addOrganicSource("search.ilse","search_for");
					}

					public get sampleRate():number
					{
						return this._sampleRate;
					}

					public get cookieName():string
					{
						return this._cookieName;
					}

					public addOrganicSource(param1:string,param2:string)
					{
						var engine:string = param1;
						var keyword:string = param2;
						try 
						{
							this._organic.addSource(engine,keyword);
							return ;
						}
						catch(e)
						{
							if(this._debug && this._debug.active)
							{
								this._debug.warning(e.message);
							}
							return ;
						}
					}

					public get domain():com.google.analytics.core.Domain
					{
						return this._domain;
					}

					public set sampleRate(param1:number)
					{
						if(param1 <= 0)
						{
							param1 = 0.1;
						}
						if(param1 > 1)
						{
							param1 = 1;
						}
						param1 = flash.trannumber(param1.toFixed(2));
						this._sampleRate = param1;
					}

					public get version():string
					{
						return this._version;
					}

				}
			}
		}
	}
}

