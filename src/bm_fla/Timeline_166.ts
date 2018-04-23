module bm_fla {
	export class Timeline_166 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame2():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_166","egret.SwfMovie")
