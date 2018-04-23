module com {
	export module google {
		export module analytics {
			export module debug {
				export class Margin extends egret.HashObject {
					public bottom:number = 0;
					public top:number = 0;
					public right:number = 0;
					public left:number = 0;

					public constructor(param1:number = 0,param2:number = 0,param3:number = 0,param4:number = 0)
					{
						super();
						super();
						this.top = flash.checkInt(param1);
						this.bottom = flash.checkInt(param2);
						this.left = flash.checkInt(param3);
						this.right = flash.checkInt(param4);
					}

				}
			}
		}
	}
}

