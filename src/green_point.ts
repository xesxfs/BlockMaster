 class green_point extends egret.SwfMovie {

	public constructor()
	{
		super();
		this["addFrameScript"](0,flash.bind(this.frame1,this),57,flash.bind(this.frame58,this));
	}

	public frame1():any
	{
	}

	public frame58():any
	{
		var _self__:any = this;
		_self__.stop();
	}

}

flash.extendsClass("green_point","egret.SwfMovie")
