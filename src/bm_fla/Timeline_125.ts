module bm_fla {
	export class Timeline_125 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](18,flash.bind(this.frame19,this));
		}

		public frame19():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_125","egret.SwfMovie")
