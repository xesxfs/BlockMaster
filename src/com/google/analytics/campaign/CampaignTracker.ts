module com {
	export module google {
		export module analytics {
			export module campaign {
				export class CampaignTracker extends egret.HashObject {
					public content:string;
					public id:string;
					public clickId:string;
					public name:string;
					public term:string;
					public medium:string;
					public source:string;

					public constructor(param1:string = "",param2:string = "",param3:string = "",param4:string = "",param5:string = "",param6:string = "",param7:string = "")
					{
						super();
						super();
						this.id = param1;
						this.source = param2;
						this.clickId = param3;
						this.name = param4;
						this.medium = param5;
						this.term = param6;
						this.content = param7;
					}

					public toTrackerString():string
					{
						var _loc1_:Array<any> = <any>null;
						_loc1_ = [];
						this._addIfNotEmpty(_loc1_,"utmcsr=",this.source);
						this._addIfNotEmpty(_loc1_,"utmccn=",this.name);
						this._addIfNotEmpty(_loc1_,"utmcmd=",this.medium);
						this._addIfNotEmpty(_loc1_,"utmctr=",this.term);
						this._addIfNotEmpty(_loc1_,"utmcct=",this.content);
						this._addIfNotEmpty(_loc1_,"utmcid=",this.id);
						this._addIfNotEmpty(_loc1_,"utmgclid=",this.clickId);
						return _loc1_.join(com.google.analytics.campaign.CampaignManager.trackingDelimiter);
					}

					public isValid():boolean
					{
						if(this.id != "" || this.source != "" || this.clickId != "")
						{
							return true;
						}
						return false;
					}

					private _addIfNotEmpty(param1:Array<any>,param2:string,param3:string)
					{
						if(param3 != "")
						{
							param3 = param3.split("+").join("%20");
							param3 = param3.split(" ").join("%20");
							param1.push(param2 + param3);
						}
					}

					public fromTrackerString(param1:string)
					{
						var _loc2_:string = <any>null;
						var _loc3_:com.google.analytics.utils.Variables = <any>null;
						_loc2_ = param1.split(com.google.analytics.campaign.CampaignManager.trackingDelimiter).join("&");
						_loc3_ = new com.google.analytics.utils.Variables(_loc2_);
						if(_loc3_.hasOwnProperty("utmcid"))
						{
							this.id = _loc3_["utmcid"];
						}
						if(_loc3_.hasOwnProperty("utmcsr"))
						{
							this.source = _loc3_["utmcsr"];
						}
						if(_loc3_.hasOwnProperty("utmccn"))
						{
							this.name = _loc3_["utmccn"];
						}
						if(_loc3_.hasOwnProperty("utmcmd"))
						{
							this.medium = _loc3_["utmcmd"];
						}
						if(_loc3_.hasOwnProperty("utmctr"))
						{
							this.term = _loc3_["utmctr"];
						}
						if(_loc3_.hasOwnProperty("utmcct"))
						{
							this.content = _loc3_["utmcct"];
						}
						if(_loc3_.hasOwnProperty("utmgclid"))
						{
							this.clickId = _loc3_["utmgclid"];
						}
					}

				}
			}
		}
	}
}

