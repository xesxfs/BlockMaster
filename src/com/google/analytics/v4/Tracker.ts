module com {
	export module google {
		export module analytics {
			export module v4 {
				export class Tracker extends egret.HashObject implements com.google.analytics.v4.GoogleAnalyticsAPI {
					private _adSense:com.google.analytics.external.AdSenseGlobals;
					private EVENT_TRACKER_LABEL_KEY_NUM:number = 3;
					private _eventTracker:com.google.analytics.data.X10;
					private EVENT_TRACKER_VALUE_VALUE_NUM:number = 1;
					private _noSessionInformation:boolean = false;
					private _browserInfo:com.google.analytics.core.BrowserInfo;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _isNewVisitor:boolean = false;
					private _buffer:com.google.analytics.core.Buffer;
					private _config:com.google.analytics.v4.Configuration;
					private _x10Module:com.google.analytics.data.X10;
					private _campaign:com.google.analytics.campaign.CampaignManager;
					private _formatedReferrer:string;
					private _timeStamp:number = NaN;
					private _info:com.google.analytics.utils.Environment;
					private _domainHash:number = NaN;
					private EVENT_TRACKER_PROJECT_ID:number = 5;
					private _campaignInfo:com.google.analytics.campaign.CampaignInfo;
					private EVENT_TRACKER_OBJECT_NAME_KEY_NUM:number = 1;
					private _gifRequest:com.google.analytics.core.GIFRequest;
					private EVENT_TRACKER_TYPE_KEY_NUM:number = 2;
					private _hasInitData:boolean = false;
					private _account:string;

					public constructor(param1:string,param2:com.google.analytics.v4.Configuration,param3:com.google.analytics.debug.DebugConfiguration,param4:com.google.analytics.utils.Environment,param5:com.google.analytics.core.Buffer,param6:com.google.analytics.core.GIFRequest,param7:com.google.analytics.external.AdSenseGlobals)
					{
						super();
						super();
						var _loc8_:any = null;
						this._hasInitData = false;
						this._isNewVisitor = false;
						this._noSessionInformation = false;
						this._account = param1;
						this._config = param2;
						this._debug = param3;
						this._info = param4;
						this._buffer = param5;
						this._gifRequest = param6;
						this._adSense = param7;
						if(<any>!com.google.analytics.core.Utils.validateAccount(param1))
						{
							_loc8_ = "Account \"" + param1 + "\" is not valid.";
							this._debug.warning(_loc8_);
							throw new flash.Error(_loc8_).message;
						}
						this._initData();
					}

					private _doTracking():boolean
					{
						if(this._info.protocol != com.google.analytics.utils.Protocols.file && this._info.protocol != com.google.analytics.utils.Protocols.none && this._isNotGoogleSearch())
						{
							return true;
						}
						if(this._config.allowLocalTracking)
						{
							return true;
						}
						return false;
					}

					public addOrganic(param1:string,param2:string)
					{
						this._debug.info("addOrganic( " + [param1,param2].join(", ") + " )");
						this._config.organic["addSource"](param1,param2);
					}

					public setAllowLinker(param1:boolean)
					{
						this._config.allowLinker = param1;
						this._debug.info("setAllowLinker( " + this._config.allowLinker + " )");
					}

					public trackPageview(param1:string = "")
					{
						this._debug.info("trackPageview( " + param1 + " )");
						if(this._doTracking())
						{
							this._initData();
							this._trackMetrics(param1);
							this._noSessionInformation = false;
						}
						else
						{
							this._debug.warning("trackPageview( " + param1 + " ) failed");
						}
					}

					public setCookieTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this._config.conversionTimeout = param1;
						this._debug.info("setCookieTimeout( " + this._config.conversionTimeout + " )");
					}

					public trackTrans()
					{
						this._debug.warning("trackTrans() not implemented");
					}

					public trackEvent(param1:string,param2:string,param3:string = null,param4:number = NaN):boolean
					{
						var _loc5_:boolean = <any>false;
						var _loc6_:number = flash.checkInt(0);
						_loc5_ = true;
						_loc6_ = flash.checkInt(2);
						if(param1 != "" && param2 != "")
						{
							this._eventTracker.clearKey(this.EVENT_TRACKER_PROJECT_ID);
							this._eventTracker.clearValue(this.EVENT_TRACKER_PROJECT_ID);
							_loc5_ = this._eventTracker.setKey(this.EVENT_TRACKER_PROJECT_ID,this.EVENT_TRACKER_OBJECT_NAME_KEY_NUM,param1);
							_loc5_ = this._eventTracker.setKey(this.EVENT_TRACKER_PROJECT_ID,this.EVENT_TRACKER_TYPE_KEY_NUM,param2);
							if(param3 && param3 != "")
							{
								_loc5_ = this._eventTracker.setKey(this.EVENT_TRACKER_PROJECT_ID,this.EVENT_TRACKER_LABEL_KEY_NUM,param3);
								_loc6_ = flash.checkInt(3);
								if(<any>!isNaN(param4))
								{
									_loc5_ = this._eventTracker.setValue(this.EVENT_TRACKER_PROJECT_ID,this.EVENT_TRACKER_VALUE_VALUE_NUM,param4);
									_loc6_ = flash.checkInt(4);
								}
							}
							if(_loc5_)
							{
								this._debug.info("valid event tracking call\ncategory: " + param1 + "\naction: " + param2,com.google.analytics.debug.VisualDebugMode.geek);
								this._sendXEvent(this._eventTracker);
							}
						}
						else
						{
							this._debug.warning("event tracking call is not valid, failed!\ncategory: " + param1 + "\naction: " + param2,com.google.analytics.debug.VisualDebugMode.geek);
							_loc5_ = false;
						}
						switch(_loc6_)
						{
						case 4 :
							this._debug.info("trackEvent( " + [param1,param2,param3,param4].join(", ") + " )");
							break;
						case 3 :
							this._debug.info("trackEvent( " + [param1,param2,param3].join(", ") + " )");
							break;
						case 2 :
						default :
							this._debug.info("trackEvent( " + [param1,param2].join(", ") + " )");
						}
						return _loc5_;
					}

					public setClientInfo(param1:boolean)
					{
						this._config.detectClientInfo = param1;
						this._debug.info("setClientInfo( " + this._config.detectClientInfo + " )");
					}

					public linkByPost(param1:any,param2:boolean = false)
					{
						this._debug.warning("linkByPost( " + [param1,param2].join(", ") + " ) not implemented");
					}

					private _initData()
					{
						var _loc1_:any = null;
						var _loc2_:any = null;
						if(<any>!this._hasInitData)
						{
							this._updateDomainName();
							this._domainHash = this._getDomainHash();
							this._timeStamp = Math.round(new flash.As3Date().getTime() / 1000);
							if(this._debug.verbose)
							{
								_loc1_ = "";
								_loc1_ = _loc1_ + "_initData 0";
								_loc1_ = _loc1_ + ("\ndomain name: " + this._config.domainName);
								_loc1_ = _loc1_ + ("\ndomain hash: " + this._domainHash);
								_loc1_ = _loc1_ + ("\ntimestamp:   " + this._timeStamp + " (" + new flash.As3Date(this._timeStamp * 1000) + ")");
								this._debug.info(_loc1_,com.google.analytics.debug.VisualDebugMode.geek);
							}
						}
						if(this._doTracking())
						{
							this._handleCookie();
						}
						if(<any>!this._hasInitData)
						{
							if(this._doTracking())
							{
								this._formatedReferrer = this._formatReferrer();
								this._browserInfo = new com.google.analytics.core.BrowserInfo(this._config,this._info);
								this._debug.info("browserInfo: " + this._browserInfo.toURLString(),com.google.analytics.debug.VisualDebugMode.advanced);
								if(this._config.campaignTracking)
								{
									this._campaign = new com.google.analytics.campaign.CampaignManager(this._config,this._debug,this._buffer,this._domainHash,this._formatedReferrer,this._timeStamp);
									this._campaignInfo = this._campaign.getCampaignInformation(this._info.locationSearch,this._noSessionInformation);
									this._debug.info("campaignInfo: " + this._campaignInfo.toURLString(),com.google.analytics.debug.VisualDebugMode.advanced);
								}
							}
							this._x10Module = new com.google.analytics.data.X10();
							this._eventTracker = new com.google.analytics.data.X10();
							this._hasInitData = true;
						}
						if(this._config.hasSiteOverlay)
						{
							this._debug.warning("Site Overlay is not supported");
						}
						if(this._debug.verbose)
						{
							_loc2_ = "";
							_loc2_ = _loc2_ + "_initData (misc)";
							_loc2_ = _loc2_ + ("\nflash version: " + this._info.flashVersion.toString(4));
							_loc2_ = _loc2_ + ("\nprotocol: " + this._info.protocol);
							_loc2_ = _loc2_ + ("\ndefault domain name (auto): \"" + this._info.domainName + "\"");
							_loc2_ = _loc2_ + ("\nlanguage: " + this._info.language);
							_loc2_ = _loc2_ + ("\ndomain hash: " + this._getDomainHash());
							_loc2_ = _loc2_ + ("\nuser-agent: " + this._info.userAgent);
							this._debug.info(_loc2_,com.google.analytics.debug.VisualDebugMode.geek);
						}
					}

					public getDetectTitle():boolean
					{
						this._debug.info("getDetectTitle()");
						return this._config.detectTitle;
					}

					public resetSession()
					{
						this._debug.info("resetSession()");
						this._buffer.resetCurrentSession();
					}

					private _sendXEvent(param1:com.google.analytics.data.X10 = null)
					{
						var _loc2_:com.google.analytics.utils.Variables = <any>null;
						var _loc3_:com.google.analytics.core.EventInfo = <any>null;
						var _loc4_:com.google.analytics.utils.Variables = <any>null;
						var _loc5_:com.google.analytics.utils.Variables = <any>null;
						this._initData();
						if(this._takeSample())
						{
							_loc2_ = new com.google.analytics.utils.Variables();
							_loc2_.URIencode = true;
							_loc3_ = new com.google.analytics.core.EventInfo(true,this._x10Module,param1);
							_loc4_ = _loc3_.toVariables();
							_loc5_ = this._renderMetricsSearchVariables();
							_loc2_.join(_loc4_,_loc5_);
							this._gifRequest.send(this._account,_loc2_,false,true);
						}
					}

					public setDetectFlash(param1:boolean)
					{
						this._config.detectFlash = param1;
						this._debug.info("setDetectFlash( " + this._config.detectFlash + " )");
					}

					public setCampNameKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCCN = param1;
						_loc2_ = "setCampNameKey( " + this._config.campaignKey.UCCN + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCCN]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					private _formatReferrer():string
					{
						var _loc1_:string = <any>null;
						var _loc2_:string = <any>null;
						var _loc3_:com.google.analytics.utils.URL = <any>null;
						var _loc4_:com.google.analytics.utils.URL = <any>null;
						_loc1_ = this._info.referrer;
						if(_loc1_ == "" || _loc1_ == "localhost")
						{
							_loc1_ = "-";
						}
						else
						{
							_loc2_ = this._info.domainName;
							_loc3_ = new com.google.analytics.utils.URL(_loc1_);
							_loc4_ = new com.google.analytics.utils.URL("http://" + _loc2_);
							if(_loc3_.hostName == _loc2_)
							{
								return "-";
							}
							if(_loc4_.domain == _loc3_.domain)
							{
								if(_loc4_.subDomain != _loc3_.subDomain)
								{
									_loc1_ = "0";
								}
							}
							if(_loc1_.charAt(0) == "[" && _loc1_.charAt(_loc1_.length - 1))
							{
								_loc1_ = "-";
							}
						}
						this._debug.info("formated referrer: " + _loc1_,com.google.analytics.debug.VisualDebugMode.advanced);
						return _loc1_;
					}

					private _visitCode():number
					{
						if(this._debug.verbose)
						{
							this._debug.info("visitCode: " + this._buffer.utma["sessionId"],com.google.analytics.debug.VisualDebugMode.geek);
						}
						return this._buffer.utma["sessionId"];
					}

					public createEventTracker(param1:string):com.google.analytics.core.EventTracker
					{
						this._debug.info("createEventTracker( " + param1 + " )");
						return new com.google.analytics.core.EventTracker(param1,this);
					}

					public addItem(param1:string,param2:string,param3:string,param4:string,param5:number,param6:number)
					{
						param6 = flash.checkInt(param6);
						this._debug.warning("addItem( " + [param1,param2,param3,param4,param5,param6].join(", ") + " ) not implemented");
					}

					public clearIgnoredOrganic()
					{
						this._debug.info("clearIgnoredOrganic()");
						this._config.organic["clearIgnoredKeywords"]();
					}

					public setVar(param1:string)
					{
						var _loc2_:com.google.analytics.utils.Variables = <any>null;
						if(param1 != "" && this._isNotGoogleSearch())
						{
							this._initData();
							this._buffer.utmv["domainHash"] = this._domainHash;
							this._buffer.utmv["value"] = param1;
							if(this._debug.verbose)
							{
								this._debug.info(this._buffer.utmv.toString(),com.google.analytics.debug.VisualDebugMode.geek);
							}
							this._debug.info("setVar( " + param1 + " )");
							if(this._takeSample())
							{
								_loc2_ = new com.google.analytics.utils.Variables();
								_loc2_["utmt"] = "var";
								this._gifRequest.send(this._account,_loc2_);
							}
						}
						else
						{
							this._debug.warning("setVar \"" + param1 + "\" is ignored");
						}
					}

					public setDomainName(param1:string)
					{
						if(param1 == "auto")
						{
							this._config.domain["mode"] = com.google.analytics.core.DomainNameMode.auto;
						}
						else if(param1 == "none")
						{
							this._config.domain["mode"] = com.google.analytics.core.DomainNameMode.none;
						}
						else
						{
							this._config.domain["mode"] = com.google.analytics.core.DomainNameMode.custom;
							this._config.domain["name"] = param1;
						}
						this._updateDomainName();
						this._debug.info("setDomainName( " + this._config.domainName + " )");
					}

					public getClientInfo():boolean
					{
						this._debug.info("getClientInfo()");
						return this._config.detectClientInfo;
					}

					private _updateDomainName()
					{
						var _loc1_:string = <any>null;
						if(this._config.domain["mode"] == com.google.analytics.core.DomainNameMode.auto)
						{
							_loc1_ = this._info.domainName;
							if(_loc1_.substring(0,4) == "www.")
							{
								_loc1_ = _loc1_.substring(4);
							}
							this._config.domain["name"] = _loc1_;
						}
						this._config.domainName = this._config.domain["name"].toLowerCase();
						this._debug.info("domain name: " + this._config.domainName,com.google.analytics.debug.VisualDebugMode.advanced);
					}

					public addTrans(param1:string,param2:string,param3:number,param4:number,param5:number,param6:string,param7:string,param8:string):any
					{
						this._debug.warning("addTrans( " + [param1,param2,param3,param4,param5,param6,param7,param8].join(", ") + " ) not implemented");
						return null;
					}

					public setCampContentKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCCT = param1;
						_loc2_ = "setCampContentKey( " + this._config.campaignKey.UCCT + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCCT]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					private _handleCookie()
					{
						var _loc1_:any = null;
						var _loc2_:any = null;
						var _loc3_:Array<any> = <any>null;
						var _loc4_:any = null;
						if(<any>!this._config.allowLinker)
							{}
						if(this._buffer.hasUTMA() && <any>!this._buffer.utma["isEmpty"]())
						{
							if(<any>!this._buffer.hasUTMB() || <any>!this._buffer.hasUTMC())
							{
								this._buffer.updateUTMA(this._timeStamp);
								this._noSessionInformation = true;
							}
							if(this._debug.verbose)
							{
								this._debug.info("from cookie " + this._buffer.utma.toString(),com.google.analytics.debug.VisualDebugMode.geek);
							}
						}
						else
						{
							this._debug.info("create a new utma",com.google.analytics.debug.VisualDebugMode.advanced);
							this._buffer.utma["domainHash"] = this._domainHash;
							this._buffer.utma["sessionId"] = this._getUniqueSessionId();
							this._buffer.utma["firstTime"] = this._timeStamp;
							this._buffer.utma["lastTime"] = this._timeStamp;
							this._buffer.utma["currentTime"] = this._timeStamp;
							this._buffer.utma["sessionCount"] = 1;
							if(this._debug.verbose)
							{
								this._debug.info(this._buffer.utma.toString(),com.google.analytics.debug.VisualDebugMode.geek);
							}
							this._noSessionInformation = true;
							this._isNewVisitor = true;
						}
						if(this._adSense["gaGlobal"] && this._adSense["dh"] == String(this._domainHash))
						{
							if(this._adSense["sid"])
							{
								this._buffer.utma["currentTime"] = flash.trannumber(this._adSense["sid"]);
								if(this._debug.verbose)
								{
									_loc1_ = "";
									_loc1_ = _loc1_ + "AdSense sid found\n";
									_loc1_ = _loc1_ + ("Override currentTime(" + this._buffer.utma["currentTime"] + ") from AdSense sid(" + flash.trannumber(this._adSense["sid"]) + ")");
									this._debug.info(_loc1_,com.google.analytics.debug.VisualDebugMode.geek);
								}
							}
							if(this._isNewVisitor)
							{
								if(this._adSense["sid"])
								{
									this._buffer.utma["lastTime"] = flash.trannumber(this._adSense["sid"]);
									if(this._debug.verbose)
									{
										_loc2_ = "";
										_loc2_ = _loc2_ + "AdSense sid found (new visitor)\n";
										_loc2_ = _loc2_ + ("Override lastTime(" + this._buffer.utma["lastTime"] + ") from AdSense sid(" + flash.trannumber(this._adSense["sid"]) + ")");
										this._debug.info(_loc2_,com.google.analytics.debug.VisualDebugMode.geek);
									}
								}
								if(this._adSense["vid"])
								{
									_loc3_ = this._adSense["vid"].split(".");
									this._buffer.utma["sessionId"] = flash.trannumber(_loc3_[0]);
									this._buffer.utma["firstTime"] = flash.trannumber(_loc3_[1]);
									if(this._debug.verbose)
									{
										_loc4_ = "";
										_loc4_ = _loc4_ + "AdSense vid found (new visitor)\n";
										_loc4_ = _loc4_ + ("Override sessionId(" + this._buffer.utma["sessionId"] + ") from AdSense vid(" + flash.trannumber(_loc3_[0]) + ")\n");
										_loc4_ = _loc4_ + ("Override firstTime(" + this._buffer.utma["firstTime"] + ") from AdSense vid(" + flash.trannumber(_loc3_[1]) + ")");
										this._debug.info(_loc4_,com.google.analytics.debug.VisualDebugMode.geek);
									}
								}
								if(this._debug.verbose)
								{
									this._debug.info("AdSense modified : " + this._buffer.utma.toString(),com.google.analytics.debug.VisualDebugMode.geek);
								}
							}
						}
						this._buffer.utmb["domainHash"] = this._domainHash;
						if(isNaN(this._buffer.utmb["trackCount"]))
						{
							this._buffer.utmb["trackCount"] = 0;
						}
						if(isNaN(this._buffer.utmb["token"]))
						{
							this._buffer.utmb["token"] = this._config.tokenCliff;
						}
						if(isNaN(this._buffer.utmb["lastTime"]))
						{
							this._buffer.utmb["lastTime"] = this._buffer.utma["currentTime"];
						}
						this._buffer.utmc["domainHash"] = this._domainHash;
						if(this._debug.verbose)
						{
							this._debug.info(this._buffer.utmb.toString(),com.google.analytics.debug.VisualDebugMode.advanced);
							this._debug.info(this._buffer.utmc.toString(),com.google.analytics.debug.VisualDebugMode.advanced);
						}
					}

					public setLocalServerMode()
					{
						this._config.serverMode = com.google.analytics.core.ServerOperationMode.local;
						this._debug.info("setLocalServerMode()");
					}

					private _renderMetricsSearchVariables(param1:string = ""):com.google.analytics.utils.Variables
					{
						var _loc2_:com.google.analytics.utils.Variables = <any>null;
						var _loc3_:com.google.analytics.core.DocumentInfo = <any>null;
						var _loc4_:com.google.analytics.utils.Variables = <any>null;
						var _loc5_:com.google.analytics.utils.Variables = <any>null;
						_loc2_ = new com.google.analytics.utils.Variables();
						_loc2_.URIencode = true;
						_loc3_ = new com.google.analytics.core.DocumentInfo(this._config,this._info,this._formatedReferrer,param1,this._adSense);
						this._debug.info("docInfo: " + _loc3_.toURLString(),com.google.analytics.debug.VisualDebugMode.geek);
						if(this._config.campaignTracking)
						{
							_loc4_ = this._campaignInfo.toVariables();
						}
						_loc5_ = this._browserInfo.toVariables();
						_loc2_.join(_loc3_.toVariables(),_loc5_,_loc4_);
						return _loc2_;
					}

					public clearIgnoredRef()
					{
						this._debug.info("clearIgnoredRef()");
						this._config.organic["clearIgnoredReferrals"]();
					}

					public setCampSourceKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCSR = param1;
						_loc2_ = "setCampSourceKey( " + this._config.campaignKey.UCSR + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCSR]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					public getLocalGifPath():string
					{
						this._debug.info("getLocalGifPath()");
						return this._config.localGIFpath;
					}

					public setLocalGifPath(param1:string)
					{
						this._config.localGIFpath = param1;
						this._debug.info("setLocalGifPath( " + this._config.localGIFpath + " )");
					}

					public getVersion():string
					{
						this._debug.info("getVersion()");
						return this._config.version;
					}

					public setAllowAnchor(param1:boolean)
					{
						this._config.allowAnchor = param1;
						this._debug.info("setAllowAnchor( " + this._config.allowAnchor + " )");
					}

					private _isNotGoogleSearch():boolean
					{
						var _loc1_:string = <any>null;
						var _loc2_:any = false;
						var _loc3_:any = false;
						var _loc4_:any = false;
						var _loc5_:any = false;
						_loc1_ = this._config.domainName;
						_loc2_ = _loc1_.indexOf("www.google.") < 0;
						_loc3_ = _loc1_.indexOf(".google.") < 0;
						_loc4_ = _loc1_.indexOf("google.") < 0;
						_loc5_ = _loc1_.indexOf("google.org") > -1;
						return _loc2_ || _loc3_ || _loc4_ || this._config.cookiePath != "/" || _loc5_;
					}

					public setSampleRate(param1:number)
					{
						if(param1 < 0)
						{
							this._debug.warning("sample rate can not be negative, ignoring value.");
						}
						else
						{
							this._config.sampleRate = param1;
						}
						this._debug.info("setSampleRate( " + this._config.sampleRate + " )");
					}

					private _takeSample():boolean
					{
						if(this._debug.verbose)
						{
							this._debug.info("takeSample: (" + this._visitCode() % 10000 + ") < (" + this._config.sampleRate * 10000 + ")",com.google.analytics.debug.VisualDebugMode.geek);
						}
						return this._visitCode() % 10000 < this._config.sampleRate * 10000;
					}

					public setCookiePath(param1:string)
					{
						this._config.cookiePath = param1;
						this._debug.info("setCookiePath( " + this._config.cookiePath + " )");
					}

					public setAllowHash(param1:boolean)
					{
						this._config.allowDomainHash = param1;
						this._debug.info("setAllowHash( " + this._config.allowDomainHash + " )");
					}

					private _generateUserDataHash():number
					{
						var _loc1_:string = <any>null;
						_loc1_ = "";
						_loc1_ = _loc1_ + this._info.appName;
						_loc1_ = _loc1_ + this._info.appVersion;
						_loc1_ = _loc1_ + this._info.language;
						_loc1_ = _loc1_ + this._info.platform;
						_loc1_ = _loc1_ + this._info.userAgent.toString();
						_loc1_ = _loc1_ + (this._info.screenWidth + "x" + this._info.screenHeight + this._info.screenColorDepth);
						_loc1_ = _loc1_ + this._info.referrer;
						return com.google.analytics.core.Utils.generateHash(_loc1_);
					}

					public addIgnoredOrganic(param1:string)
					{
						this._debug.info("addIgnoredOrganic( " + param1 + " )");
						this._config.organic["addIgnoredKeyword"](param1);
					}

					public setLocalRemoteServerMode()
					{
						this._config.serverMode = com.google.analytics.core.ServerOperationMode.both;
						this._debug.info("setLocalRemoteServerMode()");
					}

					public cookiePathCopy(param1:string)
					{
						this._debug.warning("cookiePathCopy( " + param1 + " ) not implemented");
					}

					public setDetectTitle(param1:boolean)
					{
						this._config.detectTitle = param1;
						this._debug.info("setDetectTitle( " + this._config.detectTitle + " )");
					}

					public setCampTermKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCTR = param1;
						_loc2_ = "setCampTermKey( " + this._config.campaignKey.UCTR + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCTR]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					public getServiceMode():com.google.analytics.core.ServerOperationMode
					{
						this._debug.info("getServiceMode()");
						return this._config.serverMode;
					}

					public setCampNOKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCNO = param1;
						_loc2_ = "setCampNOKey( " + this._config.campaignKey.UCNO + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCNO]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					private _trackMetrics(param1:string = "")
					{
						var _loc2_:com.google.analytics.utils.Variables = <any>null;
						var _loc3_:com.google.analytics.utils.Variables = <any>null;
						var _loc4_:com.google.analytics.utils.Variables = <any>null;
						var _loc5_:com.google.analytics.core.EventInfo = <any>null;
						if(this._takeSample())
						{
							_loc2_ = new com.google.analytics.utils.Variables();
							_loc2_.URIencode = true;
							if(this._x10Module && this._x10Module.hasData())
							{
								_loc5_ = new com.google.analytics.core.EventInfo(false,this._x10Module);
								_loc3_ = _loc5_.toVariables();
							}
							_loc4_ = this._renderMetricsSearchVariables(param1);
							_loc2_.join(_loc3_,_loc4_);
							this._gifRequest.send(this._account,_loc2_);
						}
					}

					public setCampaignTrack(param1:boolean)
					{
						this._config.campaignTracking = param1;
						this._debug.info("setCampaignTrack( " + this._config.campaignTracking + " )");
					}

					public addIgnoredRef(param1:string)
					{
						this._debug.info("addIgnoredRef( " + param1 + " )");
						this._config.organic["addIgnoredReferral"](param1);
					}

					public clearOrganic()
					{
						this._debug.info("clearOrganic()");
						this._config.organic["clearEngines"]();
					}

					public getDetectFlash():boolean
					{
						this._debug.info("getDetectFlash()");
						return this._config.detectFlash;
					}

					public setCampMediumKey(param1:string)
					{
						var _loc2_:any = null;
						this._config.campaignKey.UCMD = param1;
						_loc2_ = "setCampMediumKey( " + this._config.campaignKey.UCMD + " )";
						if(this._debug.mode == com.google.analytics.debug.VisualDebugMode.geek)
						{
							this._debug.info(_loc2_ + " [UCMD]");
						}
						else
						{
							this._debug.info(_loc2_);
						}
					}

					private _getUniqueSessionId():number
					{
						var _loc1_:number = <any>NaN;
						_loc1_ = (com.google.analytics.core.Utils.generate32bitRandom() ^ this._generateUserDataHash()) * 2147483647;
						this._debug.info("Session ID: " + _loc1_,com.google.analytics.debug.VisualDebugMode.geek);
						return _loc1_;
					}

					private _getDomainHash():number
					{
						if(<any>!this._config.domainName || this._config.domainName == "" || this._config.domain["mode"] == com.google.analytics.core.DomainNameMode.none)
						{
							this._config.domainName = "";
							return 1;
						}
						this._updateDomainName();
						if(this._config.allowDomainHash)
						{
							return com.google.analytics.core.Utils.generateHash(this._config.domainName);
						}
						return 1;
					}

					public setSessionTimeout(param1:number)
					{
						param1 = flash.checkInt(param1);
						this._config.sessionTimeout = param1;
						this._debug.info("setSessionTimeout( " + this._config.sessionTimeout + " )");
					}

					public getAccount():string
					{
						this._debug.info("getAccount()");
						return this._account;
					}

					public link(param1:string,param2:boolean = false)
					{
						this._debug.warning("link( " + [param1,param2].join(", ") + " ) not implemented");
					}

					public setRemoteServerMode()
					{
						this._config.serverMode = com.google.analytics.core.ServerOperationMode.remote;
						this._debug.info("setRemoteServerMode()");
					}

				}
			}
		}
	}
}

flash.implementsClass("com.google.analytics.v4.Tracker",["com.google.analytics.v4.GoogleAnalyticsAPI"]);