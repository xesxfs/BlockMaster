module com {
	export module google {
		export module analytics {
			export module campaign {
				export class CampaignManager extends egret.HashObject {
					public static trackingDelimiter:string;
					private _config:com.google.analytics.v4.Configuration;
					private _domainHash:number = NaN;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _timeStamp:number = NaN;
					private _referrer:string;
					private _buffer:com.google.analytics.core.Buffer;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.debug.DebugConfiguration,param3:com.google.analytics.core.Buffer,param4:number,param5:string,param6:number)
					{
						super();
						super();
						this._config = param1;
						this._debug = param2;
						this._buffer = param3;
						this._domainHash = param4;
						this._referrer = param5;
						this._timeStamp = param6;
					}

					public static isInvalidReferrer(param1:string):boolean
					{
						var _loc2_:com.google.analytics.utils.URL = <any>null;
						if(param1 == "" || param1 == "-" || param1 == "0")
						{
							return true;
						}
						if(param1.indexOf("://") > -1)
						{
							_loc2_ = new com.google.analytics.utils.URL(param1);
							if(_loc2_.protocol == com.google.analytics.utils.Protocols.file || _loc2_.protocol == com.google.analytics.utils.Protocols.none)
							{
								return true;
							}
						}
						return false;
					}

					public static isFromGoogleCSE(param1:string,param2:com.google.analytics.v4.Configuration):boolean
					{
						var _loc3_:com.google.analytics.utils.URL = <any>null;
						_loc3_ = new com.google.analytics.utils.URL(param1);
						if(_loc3_.hostName["indexOf"](param2.google) > -1)
						{
							if(_loc3_.search["indexOf"](param2.googleSearchParam + "=") > -1)
							{
								if(_loc3_.path == "/" + param2.googleCsePath)
								{
									return true;
								}
							}
						}
						return false;
					}

					public hasNoOverride(param1:string):boolean
					{
						var _loc2_:com.google.analytics.campaign.CampaignKey = <any>null;
						var _loc3_:com.google.analytics.utils.Variables = <any>null;
						var _loc4_:string = <any>null;
						_loc2_ = this._config.campaignKey;
						if(param1 == "")
						{
							return false;
						}
						_loc3_ = new com.google.analytics.utils.Variables(param1);
						_loc4_ = "";
						if(_loc3_.hasOwnProperty(_loc2_.UCNO))
						{
							_loc4_ = _loc3_[_loc2_.UCNO];
							switch(_loc4_)
							{
							case "1" :
								return true;
							case "" :
							case "0" :
							default :
								return false;
							}
						}
						else
						{
							return false;
						}
					}

					public getCampaignInformation(param1:string,param2:boolean):com.google.analytics.campaign.CampaignInfo
					{
						var _loc3_:com.google.analytics.campaign.CampaignInfo = <any>null;
						var _loc4_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc5_:any = false;
						var _loc6_:boolean = <any>false;
						var _loc7_:number = flash.checkInt(0);
						var _loc8_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc9_:number = flash.checkInt(0);
						_loc3_ = new com.google.analytics.campaign.CampaignInfo();
						_loc5_ = false;
						_loc6_ = false;
						_loc7_ = flash.checkInt(0);
						if(this._config.allowLinker && this._buffer.isGenuine())
						{
							if(<any>!this._buffer.hasUTMZ())
							{
								return _loc3_;
							}
						}
						_loc4_ = this.getTrackerFromSearchString(param1);
						if(this.isValid(_loc4_))
						{
							_loc6_ = this.hasNoOverride(param1);
							if(_loc6_ && <any>!this._buffer.hasUTMZ())
							{
								return _loc3_;
							}
						}
						if(<any>!this.isValid(_loc4_))
						{
							_loc4_ = this.getOrganicCampaign();
							if(<any>!this._buffer.hasUTMZ() && this.isIgnoredKeyword(_loc4_))
							{
								return _loc3_;
							}
						}
						if(<any>!this.isValid(_loc4_) && param2)
						{
							_loc4_ = this.getReferrerCampaign();
							if(<any>!this._buffer.hasUTMZ() && this.isIgnoredReferral(_loc4_))
							{
								return _loc3_;
							}
						}
						if(<any>!this.isValid(_loc4_))
						{
							if(<any>!this._buffer.hasUTMZ() && param2)
							{
								_loc4_ = this.getDirectCampaign();
							}
						}
						if(<any>!this.isValid(_loc4_))
						{
							return _loc3_;
						}
						if(this._buffer.hasUTMZ() && <any>!this._buffer.utmz["isEmpty"]())
						{
							_loc8_ = new com.google.analytics.campaign.CampaignTracker();
							_loc8_.fromTrackerString(this._buffer.utmz["campaignTracking"]);
							_loc5_ = _loc8_.toTrackerString() == _loc4_.toTrackerString();
							_loc7_ = flash.checkInt(this._buffer.utmz["responseCount"]);
						}
						if(<any>!_loc5_ || param2)
						{
							_loc9_ = flash.checkInt(this._buffer.utma["sessionCount"]);
							_loc7_++;
							if(_loc9_ == 0)
							{
								_loc9_ = flash.checkInt(1);
							}
							this._buffer.utmz["domainHash"] = this._domainHash;
							this._buffer.utmz["campaignCreation"] = this._timeStamp;
							this._buffer.utmz["campaignSessions"] = _loc9_;
							this._buffer.utmz["responseCount"] = _loc7_;
							this._buffer.utmz["campaignTracking"] = _loc4_.toTrackerString();
							this._debug.info(this._buffer.utmz.toString(),com.google.analytics.debug.VisualDebugMode.geek);
							_loc3_ = new com.google.analytics.campaign.CampaignInfo(false,true);
						}
						else
						{
							_loc3_ = new com.google.analytics.campaign.CampaignInfo(false,false);
						}
						return _loc3_;
					}

					public isValid(param1:com.google.analytics.campaign.CampaignTracker):boolean
					{
						if(param1 && param1.isValid())
						{
							return true;
						}
						return false;
					}

					public getTrackerFromSearchString(param1:string):com.google.analytics.campaign.CampaignTracker
					{
						var _loc2_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc3_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc4_:com.google.analytics.campaign.CampaignKey = <any>null;
						var _loc5_:com.google.analytics.utils.Variables = <any>null;
						_loc2_ = this.getOrganicCampaign();
						_loc3_ = new com.google.analytics.campaign.CampaignTracker();
						_loc4_ = this._config.campaignKey;
						if(param1 == "")
						{
							return _loc3_;
						}
						_loc5_ = new com.google.analytics.utils.Variables(param1);
						if(_loc5_.hasOwnProperty(_loc4_.UCID))
						{
							_loc3_.id = _loc5_[_loc4_.UCID];
						}
						if(_loc5_.hasOwnProperty(_loc4_.UCSR))
						{
							_loc3_.source = _loc5_[_loc4_.UCSR];
						}
						if(_loc5_.hasOwnProperty(_loc4_.UGCLID))
						{
							_loc3_.clickId = _loc5_[_loc4_.UGCLID];
						}
						if(_loc5_.hasOwnProperty(_loc4_.UCCN))
						{
							_loc3_.name = _loc5_[_loc4_.UCCN];
						}
						else
						{
							_loc3_.name = "(not set)";
						}
						if(_loc5_.hasOwnProperty(_loc4_.UCMD))
						{
							_loc3_.medium = _loc5_[_loc4_.UCMD];
						}
						else
						{
							_loc3_.medium = "(not set)";
						}
						if(_loc5_.hasOwnProperty(_loc4_.UCTR))
						{
							_loc3_.term = _loc5_[_loc4_.UCTR];
						}
						else if(_loc2_ && _loc2_.term != "")
						{
							_loc3_.term = _loc2_.term;
						}
						if(_loc5_.hasOwnProperty(_loc4_.UCCT))
						{
							_loc3_.content = _loc5_[_loc4_.UCCT];
						}
						return _loc3_;
					}

					public getOrganicCampaign():com.google.analytics.campaign.CampaignTracker
					{
						var _loc1_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc2_:com.google.analytics.utils.URL = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:Array<any> = <any>null;
						var _loc5_:com.google.analytics.core.OrganicReferrer = <any>null;
						var _loc6_:string = <any>null;
						if(com.google.analytics.campaign.CampaignManager.isInvalidReferrer(this._referrer) || com.google.analytics.campaign.CampaignManager.isFromGoogleCSE(this._referrer,this._config))
						{
							return _loc1_;
						}
						_loc2_ = new com.google.analytics.utils.URL(this._referrer);
						_loc3_ = "";
						if(_loc2_.hostName != "")
						{
							if(_loc2_.hostName["indexOf"](".") > -1)
							{
								_loc4_ = _loc2_.hostName["split"](".");
								switch(_loc4_.length)
								{
								case 2 :
									_loc3_ = _loc4_[0];
									break;
								case 3 :
									_loc3_ = _loc4_[1];
								}
							}
						}
						if(this._config.organic["match"](_loc3_))
						{
							_loc5_ = this._config.organic["getReferrerByName"](_loc3_);
							_loc6_ = this._config.organic["getKeywordValue"](_loc5_,_loc2_.search);
							_loc1_ = new com.google.analytics.campaign.CampaignTracker();
							_loc1_.source = _loc5_.engine;
							_loc1_.name = "(organic)";
							_loc1_.medium = "organic";
							_loc1_.term = _loc6_;
						}
						return _loc1_;
					}

					public isIgnoredReferral(param1:com.google.analytics.campaign.CampaignTracker):boolean
					{
						if(param1 && param1.medium == "referral")
						{
							return this._config.organic["isIgnoredReferral"](param1.source);
						}
						return false;
					}

					public getDirectCampaign():com.google.analytics.campaign.CampaignTracker
					{
						var _loc1_:com.google.analytics.campaign.CampaignTracker = <any>null;
						_loc1_ = new com.google.analytics.campaign.CampaignTracker();
						_loc1_.source = "(direct)";
						_loc1_.name = "(direct)";
						_loc1_.medium = "(none)";
						return _loc1_;
					}

					public isIgnoredKeyword(param1:com.google.analytics.campaign.CampaignTracker):boolean
					{
						if(param1 && param1.medium == "organic")
						{
							return this._config.organic["isIgnoredKeyword"](param1.term);
						}
						return false;
					}

					public getReferrerCampaign():com.google.analytics.campaign.CampaignTracker
					{
						var _loc1_:com.google.analytics.campaign.CampaignTracker = <any>null;
						var _loc2_:com.google.analytics.utils.URL = <any>null;
						var _loc3_:string = <any>null;
						var _loc4_:string = <any>null;
						if(com.google.analytics.campaign.CampaignManager.isInvalidReferrer(this._referrer) || com.google.analytics.campaign.CampaignManager.isFromGoogleCSE(this._referrer,this._config))
						{
							return _loc1_;
						}
						_loc2_ = new com.google.analytics.utils.URL(this._referrer);
						_loc3_ = _loc2_.hostName;
						_loc4_ = _loc2_.path;
						if(_loc3_.indexOf("www.") == 0)
						{
							_loc3_ = _loc3_.substr(4);
						}
						_loc1_ = new com.google.analytics.campaign.CampaignTracker();
						_loc1_.source = _loc3_;
						_loc1_.name = "(referral)";
						_loc1_.medium = "referral";
						_loc1_.content = _loc4_;
						return _loc1_;
					}

				}
			}
		}
	}
}

com.google.analytics.campaign.CampaignManager.trackingDelimiter = "|";
