module bm_fla {
	export class Timeline_165 extends egret.SwfMovie {
		public b_yes6:egret.SwfMovie;
		public b_yes7:egret.SwfMovie;
		public b_activ16:egret.SwfMovie;
		public b_activ15:egret.SwfMovie;
		public b_yes8:egret.SwfMovie;
		public b_activ14:egret.SwfMovie;
		public b_yes9:egret.SwfMovie;
		public b_activ8:egret.SwfMovie;
		public b_activ13:egret.SwfMovie;
		public b_yes10:egret.SwfMovie;
		public b_activ9:egret.SwfMovie;
		public b_activ12:egret.SwfMovie;
		public b_yes11:egret.SwfMovie;
		public b1:egret.SwfButton;
		public b_yes12:egret.SwfMovie;
		public b_activ11:egret.SwfMovie;
		public b_activ6:egret.SwfMovie;
		public b2:egret.SwfButton;
		public b_yes13:egret.SwfMovie;
		public c1:egret.SwfMovie;
		public b_activ10:egret.SwfMovie;
		public b_activ7:egret.SwfMovie;
		public b3:egret.SwfButton;
		public b_yes14:egret.SwfMovie;
		public b_activ4:egret.SwfMovie;
		public c2:egret.SwfMovie;
		public b4:egret.SwfButton;
		public b_yes15:egret.SwfMovie;
		public b_activ5:egret.SwfMovie;
		public c3:egret.SwfMovie;
		public c10:egret.SwfMovie;
		public b_bac:egret.SwfButton;
		public b10:egret.SwfButton;
		public b5:egret.SwfButton;
		public c11:egret.SwfMovie;
		public b_yes16:egret.SwfMovie;
		public c4:egret.SwfMovie;
		public b_activ2:egret.SwfMovie;
		public b11:egret.SwfButton;
		public b6:egret.SwfButton;
		public c12:egret.SwfMovie;
		public c5:egret.SwfMovie;
		public b_activ3:egret.SwfMovie;
		public b12:egret.SwfButton;
		public b7:egret.SwfButton;
		public c13:egret.SwfMovie;
		public c6:egret.SwfMovie;
		public b_yes1:egret.SwfMovie;
		public b13:egret.SwfButton;
		public b8:egret.SwfButton;
		public c14:egret.SwfMovie;
		public c7:egret.SwfMovie;
		public b_yes2:egret.SwfMovie;
		public b_activ1:egret.SwfMovie;
		public b14:egret.SwfButton;
		public b9:egret.SwfButton;
		public c15:egret.SwfMovie;
		public c8:egret.SwfMovie;
		public b_yes3:egret.SwfMovie;
		public b15:egret.SwfButton;
		public c16:egret.SwfMovie;
		public b_yes4:egret.SwfMovie;
		public c9:egret.SwfMovie;
		public b16:egret.SwfButton;
		public b_yes5:egret.SwfMovie;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this));
		}

		public drMenu()
		{
			if((<egret.SwfMovie>(this.parent))["LIVEL"] == 0)
			{
				this.b_bac.visible = false;
			}
			else
			{
				this.b_bac.visible = true;
			}
			var _loc1_:any = 0;
			while(_loc1_ < (<egret.SwfMovie>(this.parent))["livels"])
			{
				console.log("ar " + _loc1_);
				if((<egret.SwfMovie>(this.parent))["ARR"][_loc1_] == 0 || (<egret.SwfMovie>(this.parent))["ARR"][_loc1_] == 1)
				{
					this["b_yes" + (_loc1_ + 1)].visible = false;
				}
				if((<egret.SwfMovie>(this.parent))["ARR"][_loc1_] == 0)
				{
					this["b_activ" + (_loc1_ + 1)].gotoAndStop(2);
					this["c" + (_loc1_ + 1)].alpha = 0.3;
					this["b" + (_loc1_ + 1)].visible = false;
				}
				if((<egret.SwfMovie>(this.parent))["ARR"][_loc1_] == 1)
				{
					this["b_activ" + (_loc1_ + 1)].gotoAndStop(1);
					this["c" + (_loc1_ + 1)].alpha = 1;
					this["b" + (_loc1_ + 1)].visible = true;
				}
				if((<egret.SwfMovie>(this.parent))["ARR"][_loc1_] == 2)
				{
					this["b_activ" + (_loc1_ + 1)].gotoAndStop(2);
					this["b_yes" + (_loc1_ + 1)].visible = true;
				}
				_loc1_++;
			}
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
			this.b_bac.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(<egret.SwfMovie>(this.parent))["be_bac"],null);
			this.drMenu();
		}

		public frame2():any
		{
			var _self__:any = this;
			_self__.stop();
			this.b_bac.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(<egret.SwfMovie>(this.parent))["be_bac"],null);
			this.drMenu();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_165","egret.SwfMovie")
