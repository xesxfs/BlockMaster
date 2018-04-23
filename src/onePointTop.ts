 class onePointTop extends egret.SwfMovie {
	public xSetka:number = NaN;
	public ySetka:number = NaN;

	public constructor()
	{
		super();
		this["addFrameScript"](0,flash.bind(this.frame1,this));
	}

	public frame1():any
	{
	}

}

flash.extendsClass("onePointTop","egret.SwfMovie")
