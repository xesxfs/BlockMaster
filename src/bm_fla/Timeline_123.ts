module bm_fla {
	export class Timeline_123 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](23,flash.bind(this.frame24,this));
		}

		public frame24():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_123","egret.SwfMovie")
