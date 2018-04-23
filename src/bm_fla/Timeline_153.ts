module bm_fla {
	export class Timeline_153 extends egret.SwfMovie {
		public b:egret.SwfButton;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this));
		}

		public fs(param1:egret.Event)
		{
			var _self__:any = this;
			this.stage["displayState"] = flash.StageDisplayState.FULL_SCREEN;
			_self__.gotoAndStop(2);
		}

		public fs_out(param1:egret.Event)
		{
			var _self__:any = this;
			this.stage["displayState"] = flash.StageDisplayState.NORMAL;
			_self__.gotoAndStop(1);
		}

		public frame1():any
		{
			var _self__:any = this;
			this.b.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.fs,this),null);
			_self__.stop();
		}

		public frame2():any
		{
			var _self__:any = this;
			this.b.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.fs_out,this),null);
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_153","egret.SwfMovie")
