module com {
	export module google {
		export module analytics {
			export module debug {
				export class Background extends egret.HashObject {

					public constructor()
					{
						super();
						super();
					}

					public static drawRounded(param1:any,param2:egret.Graphics,param3:number = 0,param4:number = 0)
					{
						var _loc5_:number = flash.checkUint(0);
						var _loc6_:number = flash.checkUint(0);
						var _loc7_:number = flash.checkUint(0);
						_loc7_ = flash.checkUint(Style.roundedCorner);
						if(param3 > 0 && param4 > 0)
						{
							_loc5_ = flash.checkUint(param3);
							_loc6_ = flash.checkUint(param4);
						}
						else
						{
							_loc5_ = flash.checkUint(param1.width);
							_loc6_ = flash.checkUint(param1.height);
						}
						if(param1.stickToEdge && param1.alignement != com.google.analytics.debug.Align.none)
						{
							switch(param1.alignement)
							{
							case com.google.analytics.debug.Align.top :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,0,0,_loc7_,_loc7_);
								break;
							case com.google.analytics.debug.Align.topLeft :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,0,0,0,_loc7_);
								break;
							case com.google.analytics.debug.Align.topRight :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,0,0,_loc7_,0);
								break;
							case com.google.analytics.debug.Align.bottom :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,_loc7_,_loc7_,0,0);
								break;
							case com.google.analytics.debug.Align.bottomLeft :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,0,_loc7_,0,0);
								break;
							case com.google.analytics.debug.Align.bottomRight :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,_loc7_,0,0,0);
								break;
							case com.google.analytics.debug.Align.left :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,0,_loc7_,0,_loc7_);
								break;
							case com.google.analytics.debug.Align.right :
								param2["drawRoundRectComplex"](0,0,_loc5_,_loc6_,_loc7_,0,_loc7_,0);
								break;
							case com.google.analytics.debug.Align.center :
								param2.drawRoundRect(0,0,_loc5_,_loc6_,_loc7_,_loc7_);
							}
						}
						else
						{
							param2.drawRoundRect(0,0,_loc5_,_loc6_,_loc7_,_loc7_);
						}
					}

				}
			}
		}
	}
}

