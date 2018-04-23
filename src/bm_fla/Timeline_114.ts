module bm_fla {
	export class Timeline_114 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),260,flash.bind(this.frame261,this),522,flash.bind(this.frame523,this));
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

		public frame261():any
		{
			var _self__:any = this;
			_self__.gotoAndPlay("ru");
		}

		public frame523():any
		{
			this.gotoAndPlay("en");
		}

	}
}

flash.extendsClass("bm_fla.Timeline_114","egret.SwfMovie")
