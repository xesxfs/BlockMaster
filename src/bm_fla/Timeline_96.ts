module bm_fla {
	export class Timeline_96 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](190,flash.bind(this.frame191,this));
		}

		public frame191():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_96","egret.SwfMovie")
