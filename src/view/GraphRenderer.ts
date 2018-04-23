module view {
	export class GraphRenderer extends egret.Sprite {
		public pathFind:any = false;

		public constructor()
		{
			super();
		}

		public draw(param1:astar.Graph)
		{
			var _self__:any = this;
			var _loc2_:number = flash.checkInt(0);
			var _loc3_:number = flash.checkInt(0);
			while(_loc3_ < param1.width)
			{
				_loc2_ = flash.checkInt(0);
				while(_loc2_ < param1.height)
				{
					_self__.addChild(new view.GraphNodeVisual(param1.getNodeAt(_loc3_,_loc2_)));
					_loc2_++;
				}
				_loc3_++;
			}
		}

		private getMarker(param1:string):flash.TextField
		{
			var _loc2_:flash.TextField = new flash.TextField();
			_loc2_["selectable"] = false;
			_loc2_.touchEnabled = false;
			_loc2_.defaultTextFormat = new flash.TextFormat("_typewriter",10,13553358,true);
			_loc2_.width = 20;
			_loc2_.height = 15;
			_loc2_.textAlign = flash.TextFieldAutoSize.CENTER;
			_loc2_.text = param1;
			return _loc2_;
		}

		public update(param1:astar.Graph,param2:Array<astar.GraphNode>,param3:Array<astar.GraphNode>,param4:Array<astar.GraphNode>)
		{
			var _loc5_:number = flash.checkInt(0);
			var _loc6_:astar.GraphNode = <any>null;
			var _loc7_:view.GraphNodeVisual = <any>null;
			var _loc8_:any = 1;
			var _loc9_:number = flash.checkInt(0);
			while(_loc9_ < param1.width)
			{
				_loc5_ = flash.checkInt(0);
				while(_loc5_ < param1.height)
				{
					_loc6_ = param1.getNodeAt(_loc9_,_loc5_);
					_loc7_ = this.getVisualNode(_loc6_);
					if(param3.indexOf(_loc6_) != -1 || param4.indexOf(_loc6_) != -1)
					{
						if(param2 && param2.indexOf(_loc6_) != -1)
						{
							_loc7_.showPathPoint(_loc8_);
							_loc8_++;
							this.pathFind = true;
						}
						else
						{
							this.pathFind = false;
						}
					}
					_loc5_++;
				}
				_loc9_++;
			}
			if(param2 != null)
			{
				console.log("dddddddd " + param2);
				this.pathFind = true;
			}
		}

		private getDitection(param1:astar.GraphNode):number
		{
			var _loc2_:number = flash.checkInt(0);
			var _loc3_:number = flash.checkInt(0);
			if(param1.parent)
			{
				_loc2_ = flash.checkInt(param1.x - param1.parent.x);
				_loc3_ = flash.checkInt(param1.y - param1.parent.y);
				if(_loc2_ == 1 && _loc3_ == 1)
				{
					return view.GraphNodeVisual.TOP_LEFT;
				}
				if(_loc2_ == 1 && _loc3_ == 0)
				{
					return view.GraphNodeVisual.LEFT;
				}
				if(_loc2_ == 1 && _loc3_ == -1)
				{
					return view.GraphNodeVisual.BOTTOM_LEFT;
				}
				if(_loc2_ == 0 && _loc3_ == -1)
				{
					return view.GraphNodeVisual.BOTTOM;
				}
				if(_loc2_ == -1 && _loc3_ == -1)
				{
					return view.GraphNodeVisual.BOTTOM_RIGHT;
				}
				if(_loc2_ == -1 && _loc3_ == 0)
				{
					return view.GraphNodeVisual.RIGHT;
				}
				if(_loc2_ == -1 && _loc3_ == 1)
				{
					return view.GraphNodeVisual.TOP_RIGHT;
				}
				if(_loc2_ == 0 && _loc3_ == 1)
				{
					return view.GraphNodeVisual.TOP;
				}
			}
			return Number.NaN;
		}

		public getVisualNode(param1:astar.GraphNode):view.GraphNodeVisual
		{
			var _self__:any = this;
			var _loc2_:view.GraphNodeVisual = <any>null;
			var _loc3_:number = flash.checkInt(0);
			while(_loc3_ < this.numChildren)
			{
				_loc2_ = flash.As3As(_self__.getChildAt(_loc3_),view.GraphNodeVisual);
				if(_loc2_.graphNode.x == param1.x && _loc2_.graphNode.y == param1.y)
				{
					return _loc2_;
				}
				_loc3_++;
			}
			return null;
		}

		public showStartAndEndNodes(param1:astar.GraphNode,param2:astar.GraphNode)
		{
			var _loc3_:view.GraphNodeVisual = this.getVisualNode(param1);
			var _loc4_:view.GraphNodeVisual = this.getVisualNode(param2);
			_loc3_.showCrossMarker(false);
			_loc4_.showCrossMarker(true);
		}

	}
}

flash.extendsClass("view.GraphRenderer","egret.Sprite")
