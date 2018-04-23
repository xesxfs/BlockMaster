module bm_fla {
	export class pobeda_189 extends egret.SwfMovie {
		public moviek_and_flashka:egret.SwfMovie;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this),2,flash.bind(this.frame3,this));
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame2():any
		{
			var _self__:any = this;
			_self__.stop();
		}

		public frame3():any
		{
			var _self__:any = this;
			flash.navigateToURL(new egret.URLRequest("http://www.playogames.com"),"_blank");
			_self__.stop();
		}

	}
}

flash.extendsClass("bm_fla.pobeda_189","egret.SwfMovie")
