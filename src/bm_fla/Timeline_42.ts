module bm_fla {
	export class Timeline_42 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](105,flash.bind(this.frame106,this));
		}

		public frame106():any
		{
			var _self__:any = this;
			_self__.gotoAndPlay(2);
		}

	}
}

flash.extendsClass("bm_fla.Timeline_42","egret.SwfMovie")
