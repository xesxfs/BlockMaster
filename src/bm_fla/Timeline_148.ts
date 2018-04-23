module bm_fla {
	export class Timeline_148 extends egret.SwfMovie {
		public b1:egret.SwfButton;
		public b1_:egret.SwfButton;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			if((<egret.SwfMovie>(this.parent))["lang1"] == "ru")
			{
				this.b1_.visible = false;
				this.b1.visible = true;
			}
			else
			{
				this.b1.visible = false;
				this.b1_.visible = true;
			}
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_148","egret.SwfMovie")
