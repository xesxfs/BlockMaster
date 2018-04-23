module bm_fla {
	export class Timeline_127 extends egret.SwfMovie {

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),10,flash.bind(this.frame11,this),49,flash.bind(this.frame50,this),192,flash.bind(this.frame193,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame11():any
		{
			var _self__:any = this;
			_self__.gotoAndStop(1);
		}

		public frame50():any
		{
			if((<egret.SwfMovie>(this.parent))["LIVEL"] < 16)
			{
				(<egret.SwfMovie>(this.parent))["b_next_level"].visible = true;
				(<egret.SwfMovie>(this.parent))["num"].visible = true;
				(<egret.SwfMovie>(this.parent))["num"].gotoAndStop((<egret.SwfMovie>(this.parent))["LIVEL"] + 1);
				(<egret.SwfMovie>(this.parent))["num"].blesk.gotoAndPlay(2);
				(<egret.SwfMovie>(this.parent))["pobeda"].visible = false;
				if((<egret.SwfMovie>(this.parent))["lang1"] == "ru")
				{
					(<egret.SwfMovie>(this.parent))["num"].b.gotoAndStop(1);
				}
				else
				{
					(<egret.SwfMovie>(this.parent))["num"].b.gotoAndStop(2);
				}
			}
			else if((<egret.SwfMovie>(this.parent))["lang1"] == "ru")
			{
				(<egret.SwfMovie>(this.parent))["pobeda"].visible = true;
				(<egret.SwfMovie>(this.parent))["pobeda"].gotoAndStop(2);
			}
			else
			{
				(<egret.SwfMovie>(this.parent))["pobeda"].visible = true;
				(<egret.SwfMovie>(this.parent))["pobeda"].gotoAndStop(3);
			}
		}

		public frame193():any
		{
			var _self__:any = this;
			_self__.gotoAndStop(1);
		}

	}
}

flash.extendsClass("bm_fla.Timeline_127","egret.SwfMovie")
