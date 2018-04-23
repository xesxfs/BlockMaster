module com {
	export module google {
		export module analytics {
			export module data {
				export interface Cookie {
					toURLString():string;
					toSharedObject():any;
					creation:flash.As3Date;
					fromSharedObject(param1:any);
					expiration:flash.As3Date;
					isExpired():boolean;
				}
			}
		}
	}
}

