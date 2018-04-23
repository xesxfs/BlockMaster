module com {
	export module google {
		export module analytics {
			export module campaign {
				export class CampaignKey extends egret.HashObject {
					public UCMD:string = "utm_medium";
					public UCID:string = "utm_id";
					public UCTR:string = "utm_term";
					public UCSR:string = "utm_source";
					public UCNO:string = "utm_nooverride";
					public UCCN:string = "utm_campaign";
					public UGCLID:string = "gclid";
					public UCCT:string = "utm_content";

					public constructor()
					{
						super();
						super();
						this.UCCN = "utm_campaign";
						this.UCCT = "utm_content";
						this.UCID = "utm_id";
						this.UCMD = "utm_medium";
						this.UCNO = "utm_nooverride";
						this.UCSR = "utm_source";
						this.UCTR = "utm_term";
						this.UGCLID = "gclid";
					}

				}
			}
		}
	}
}

