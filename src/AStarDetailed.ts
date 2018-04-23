 class AStarDetailed extends egret.Sprite {
	public pathFind:boolean = false;
	private logic:astar.AStar;
	private graph:astar.Graph;
	private renderer:view.GraphRenderer;
	private start:astar.GraphNode;
	private end:astar.GraphNode;
	private hint:flash.TextField;

	public constructor(param1:any,param2:any,param3:any,param4:number)
	{
		super();
		var _self__:any = this;
		this.logic = new astar.AStar();
		this.graph = new astar.Graph(13,13);
		this.renderer = new view.GraphRenderer();
		this.hint = new flash.TextField();
		_self__.addChild(this.renderer);
		this.renderer.draw(this.graph);
		console.log("MovieClip " + param1);
		this.start = this.graph.getNodeAt(param1,param2);
		this.end = this.graph.getNodeAt(param3,param4);
		this.graph.getNodeAt(4,1).isWall = true;
		this.graph.getNodeAt(4,3).isWall = true;
	}

	public getWall(param1:any,param2:number)
	{
		this.graph.getNodeAt(param1,param2).isWall = true;
	}

	public getNoWall(param1:any,param2:number)
	{
		this.graph.getNodeAt(param1,param2).isWall = false;
	}

	public updatePath()
	{
		var _loc1_:Array<astar.GraphNode> = this.logic.search(this.graph,this.start,this.end);
		this.renderer.update(this.graph,_loc1_,this.logic.openList,this.logic.closedList);
		this.renderer.showStartAndEndNodes(this.start,this.end);
		this.pathFind = this.renderer.pathFind;
	}

}

flash.extendsClass("AStarDetailed","egret.Sprite")
