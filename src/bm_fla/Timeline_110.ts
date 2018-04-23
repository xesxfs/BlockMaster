module bm_fla {
	export class Timeline_110 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](9,flash.bind(this.frame10,this));
		}

		public frame10():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_110","egret.SwfMovie")
