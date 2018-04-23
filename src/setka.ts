 class setka extends egret.SwfMovie {
	public setkaFree:boolean = false;
	public blokName:any;
	public xSetka:number = NaN;
	public ySetka:number = NaN;
	public g:number = NaN;
	public f:number = NaN;
	public h:number = NaN;
	public parentSetka:setka;
	public isPath:boolean = false;

	public constructor()
	{
		super();
		this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this),2,flash.bind(this.frame3,this),3,flash.bind(this.frame4,this));
	}

	public frame1():any
	{
		var _self__:any = this;
		this.setkaFree = true;
		this.blokName = 0;
		_self__.stop();
		this.xSetka = 0;
		this.ySetka = 0;
		this.g = 0;
		this.f = 0;
		this.h = 0;
		this.parentSetka = null;
		this.isPath = false;
	}

	public frame2():any
	{
		var _self__:any = this;
		this.setkaFree = false;
		_self__.stop();
	}

	public frame3():any
	{
		var _self__:any = this;
		this.setkaFree = true;
		this.blokName = 0;
		_self__.stop();
	}

	public frame4():any
	{
		var _self__:any = this;
		this.setkaFree = true;
		this.blokName = 0;
		_self__.stop();
	}

}

flash.extendsClass("setka","egret.SwfMovie")
