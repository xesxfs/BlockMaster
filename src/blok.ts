 class blok extends egret.SwfMovie {
	public xSetka:number = NaN;
	public ySetka:number = NaN;
	public pointsNumb:number = NaN;
	public namer:number = NaN;
	public colorBlok:string;

	public constructor()
	{
		super();
		this["addFrameScript"](0,flash.bind(this.frame1,this));
	}

	public frame1():any
	{
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(<egret.SwfMovie>(this.parent))["startDrug"],null);
	}

}

flash.extendsClass("blok","egret.SwfMovie")
