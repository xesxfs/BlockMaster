package astar
{
   public class AStar
   {
       
      
      public var openList:Vector.<GraphNode>;
      
      public var closedList:Vector.<GraphNode>;
      
      public function AStar()
      {
         this.openList = new Vector.<GraphNode>();
         this.closedList = new Vector.<GraphNode>();
         super();
      }
      
      public function search(param1:Graph, param2:GraphNode, param3:GraphNode) : Vector.<GraphNode>
      {
         var _loc4_:GraphNode = null;
         var _loc5_:int = 0;
         var _loc6_:Vector.<GraphNode> = null;
         var _loc7_:Vector.<GraphNode> = null;
         var _loc8_:GraphNode = null;
         var _loc9_:Number = NaN;
         var _loc10_:* = false;
         this.openList.length = 0;
         this.closedList.length = 0;
         param2.parent = null;
         param2.g = 0;
         this.openList[this.openList.length] = param2;
         while(this.openList.length > 0)
         {
            _loc4_ = this.openList[0];
            _loc5_ = 1;
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
               _loc7_ = new Vector.<GraphNode>();
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
            _loc5_ = 0;
            while(_loc5_ < _loc6_.length)
            {
               _loc8_ = _loc6_[_loc5_];
               if(!(this.closedList.indexOf(_loc8_) != -1 || _loc8_.isWall))
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
      
      private function heuristic(param1:GraphNode, param2:GraphNode) : int
      {
         var _loc3_:int = param2.x - param1.x;
         var _loc4_:int = param2.y - param1.y;
         _loc3_ = _loc3_ < 0?int(int(-_loc3_)):int(int(_loc3_));
         _loc4_ = _loc4_ < 0?int(int(-_loc4_)):int(int(_loc4_));
         return _loc3_ + _loc4_;
      }
   }
}
