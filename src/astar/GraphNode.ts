module astar {
	export class GraphNode extends egret.HashObject {
		public x:number = 0;
		public y:number = 0;
		public g:number = 0;
		public f:number = 0;
		public h:number = 0;
		public parent:astar.GraphNode = null;
		public isWall:boolean = false;

		public constructor(param1:number,param2:number)
		{
			super();
			param1 = flash.checkInt(param1);
			param2 = flash.checkInt(param2);
			super();
			this.x = flash.checkInt(param1);
			this.y = flash.checkInt(param2);
		}

		public toString():string
		{
			return "[" + this.x + "," + this.y + "]";
		}

	}
}

