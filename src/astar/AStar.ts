module astar {
	export class AStar extends egret.HashObject {
		public openList:Array<astar.GraphNode>;
		public closedList:Array<astar.GraphNode>;

		public constructor()
		{
			super();
			super();
			this.openList = new Array<astar.GraphNode>();
			this.closedList = new Array<astar.GraphNode>();
		}

		public search(param1:astar.Graph,param2:astar.GraphNode,param3:astar.GraphNode):Array<astar.GraphNode>
		{
			var _loc4_:astar.GraphNode = <any>null;
			var _loc5_:number = flash.checkInt(0);
			var _loc6_:Array<astar.GraphNode> = <any>null;
			var _loc7_:Array<astar.GraphNode> = <any>null;
			var _loc8_:astar.GraphNode = <any>null;
			var _loc9_:number = <any>NaN;
			var _loc10_:any = false;
			this.openList.length = 0;
			this.closedList.length = 0;
			param2.parent = null;
			param2.g = 0;
			this.openList[this.openList.length] = param2;
			while(this.openList.length > 0)
			{
				_loc4_ = this.openList[0];
				_loc5_ = flash.checkInt(1);
				while(_loc5_ < this.openList.length)
				{
					if(this.openList[_loc5_].f < _loc4_.f)
					{
						_loc4_ = this.openList[_loc5_];
					}
					_loc5_++;
				}
				if(_loc4_.x == param3.x && _loc4_.y == param3.y)
				{
					_loc7_ = new Array<astar.GraphNode>();
					while(_loc4_)
					{
						_loc7_[_loc7_.length] = _loc4_;
						_loc4_ = _loc4_.parent;
					}
					return _loc7_.reverse();
				}
				this.openList.splice(this.openList.indexOf(_loc4_),1);
				this.closedList[this.closedList.length] = _loc4_;
				_loc6_ = param1.getNeighbors(_loc4_);
				_loc5_ = flash.checkInt(0);
				while(_loc5_ < _loc6_.length)
				{
					_loc8_ = _loc6_[_loc5_];
					if(<any>!(this.closedList.indexOf(_loc8_) != -1 || _loc8_.isWall))
					{
						_loc9_ = _loc4_.g + 1;
						_loc10_ = this.openList.indexOf(_loc8_) == -1;
						if(_loc10_)
						{
							_loc8_.h = this.heuristic(_loc8_,param3);
							this.openList.push(_loc8_);
						}
						if(_loc10_ || _loc9_ < _loc8_.g)
						{
							_loc8_.parent = _loc4_;
							_loc8_.g = _loc9_;
							_loc8_.f = _loc8_.g + _loc8_.h;
						}
					}
					_loc5_++;
				}
			}
			return null;
		}

		private heuristic(param1:astar.GraphNode,param2:astar.GraphNode):number
		{
			var _loc3_:number = flash.checkInt(param2.x - param1.x);
			var _loc4_:number = flash.checkInt(param2.y - param1.y);
			_loc3_ = flash.checkInt(_loc3_ < 0?flash.tranint(flash.tranint(-_loc3_)):flash.tranint(flash.tranint(_loc3_)));
			_loc4_ = flash.checkInt(_loc4_ < 0?flash.tranint(flash.tranint(-_loc4_)):flash.tranint(flash.tranint(_loc4_)));
			return _loc3_ + _loc4_;
		}

	}
}

