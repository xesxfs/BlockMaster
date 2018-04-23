module bm_fla {
	export class Timeline_9 extends egret.SwfMovie {
		public pogbtn:egret.SwfButton;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),64,flash.bind(this.frame65,this),133,flash.bind(this.frame134,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			if((<egret.SwfMovie>(this.parent))["lang1"] == "ru")
			{
				_self__.gotoAndPlay("ru");
			}
			else
			{
				_self__.gotoAndPlay("en");
			}
		}

		public frame65():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame134():any
		{
			var _self__:any = this;
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.Timeline_9","egret.SwfMovie")
