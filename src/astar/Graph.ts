module astar {
	export class Graph extends egret.HashObject {
		private _width:number = 0;
		private _height:number = 0;
		private _widthMinusOne:number = 0;
		private _heightMinusOne:number = 0;
		private _area:number = 0;
		private _graph:Array<astar.GraphNode> = null;
		private _neighbors:Array<astar.GraphNode>;

		public constructor(param1:number,param2:number)
		{
			super();
			param1 = flash.checkUint(param1);
			param2 = flash.checkUint(param2);
			super();
			this._neighbors = new Array<astar.GraphNode>();
			this._width = flash.checkUint(param1);
			this._height = flash.checkUint(param2);
			this._widthMinusOne = flash.checkInt(param1 - 1);
			this._heightMinusOne = flash.checkInt(param2 - 1);
			this._area = flash.checkUint(param1 * param2);
			this._graph = new Array<astar.GraphNode>(this._area,true);
			var _loc3_:number = flash.checkInt(0);
			while(_loc3_ < this._area)
			{
				this._graph[_loc3_] = new astar.GraphNode(flash.tranint(_loc3_ / this._height),_loc3_ % this._height);
				_loc3_++;
			}
		}

		public get width():number
		{
			return this._width;
		}

		public get height():number
		{
			return this._height;
		}

		public getNeighbors(param1:astar.GraphNode):Array<astar.GraphNode>
		{
			var _loc2_:astar.GraphNode = <any>null;
			var _loc3_:astar.GraphNode = <any>null;
			var _loc4_:astar.GraphNode = <any>null;
			var _loc5_:astar.GraphNode = <any>null;
			this._neighbors.length = 0;
			var _loc6_:number = flash.checkUint(param1.x);
			var _loc7_:number = flash.checkUint(param1.y);
			if(_loc7_ > 0)
			{
				_loc2_ = this._neighbors[this._neighbors.length] = this.getNode(_loc6_,_loc7_ - 1);
			}
			if(_loc7_ < this._heightMinusOne)
			{
				_loc3_ = this._neighbors[this._neighbors.length] = this.getNode(_loc6_,_loc7_ + 1);
			}
			if(_loc6_ > 0)
			{
				_loc4_ = this._neighbors[this._neighbors.length] = this.getNode(_loc6_ - 1,_loc7_);
				if(<any>!_loc4_.isWall)
				{
					if(_loc7_ > 0 && <any>!_loc2_.isWall)
					{
						this._neighbors[this._neighbors.length] = this.getNode(_loc6_ - 1,_loc7_ - 1);
					}
					if(_loc7_ < this._heightMinusOne && <any>!_loc3_.isWall)
					{
						this._neighbors[this._neighbors.length] = this.getNode(_loc6_ - 1,_loc7_ + 1);
					}
				}
			}
			if(_loc6_ < this._widthMinusOne)
			{
				_loc5_ = this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_);
				if(<any>!_loc5_.isWall)
				{
					if(_loc7_ > 0 && <any>!_loc2_.isWall)
					{
						this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_ - 1);
					}
					if(_loc7_ < this._heightMinusOne && <any>!_loc3_.isWall)
					{
						this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_ + 1);
					}
				}
			}
			return this._neighbors;
		}

		public getNodeAt(param1:number,param2:number):astar.GraphNode
		{
			param1 = flash.checkInt(param1);
			param2 = flash.checkInt(param2);
			var _loc3_:number = flash.checkInt(param1 * this._height + param2);
			return _loc3_ >= 0 && _loc3_ < this._area?this._graph[_loc3_]:null;
		}

		private getNode(param1:number,param2:number):astar.GraphNode
		{
			param1 = flash.checkInt(param1);
			param2 = flash.checkInt(param2);
			return this._graph[param1 * this._height + param2];
		}

	}
}

