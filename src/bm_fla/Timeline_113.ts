module bm_fla {
	export class Timeline_113 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),12,flash.bind(this.frame13,this),31,flash.bind(this.frame32,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			if((<egret.SwfMovie>(this.parent.parent))["lang1"] == "ru")
			{
				_self__.gotoAndPlay("ru");
			}
			else
			{
				_self__.gotoAndPlay("en");
			}
		}

		public frame13():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame32():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_113","egret.SwfMovie")
