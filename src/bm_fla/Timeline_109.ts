module bm_fla {
	export class Timeline_109 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](35,flash.bind(this.frame36,this));
		}

		public frame36():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_109","egret.SwfMovie")
