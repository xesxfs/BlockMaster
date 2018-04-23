module bm_fla {
	export class Timeline_160 extends egret.SwfMovie {
		public b1:egret.SwfButton;
		public b_bac:egret.SwfButton;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
			this.b_bac.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(<egret.SwfMovie>(this.parent))["b_menu_help"],null);
		}

		public frame2():any
		{
			var _self__:any = this;
			_self__.stop();
			this.b_bac.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(<egret.SwfMovie>(this.parent))["b_menu_help"],null);
		}

	}
}

flash.extendsClass("bm_fla.Timeline_160","egret.SwfMovie")
