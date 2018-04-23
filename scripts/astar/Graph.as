package astar
{
   public class Graph
   {
       
      
      private var _width:uint = 0;
      
      private var _height:uint = 0;
      
      private var _widthMinusOne:int = 0;
      
      private var _heightMinusOne:int = 0;
      
      private var _area:uint = 0;
      
      private var _graph:Vector.<GraphNode> = null;
      
      private var _neighbors:Vector.<GraphNode>;
      
      public function Graph(param1:uint, param2:uint)
      {
         this._neighbors = new Vector.<GraphNode>();
         super();
         this._width = param1;
         this._height = param2;
         this._widthMinusOne = param1 - 1;
         this._heightMinusOne = param2 - 1;
         this._area = param1 * param2;
         this._graph = new Vector.<GraphNode>(this._area,true);
         var _loc3_:int = 0;
         while(_loc3_ < this._area)
         {
            this._graph[_loc3_] = new GraphNode(int(_loc3_ / this._height),_loc3_ % this._height);
            _loc3_++;
         }
      }
      
      public function get width() : uint
      {
         return this._width;
      }
      
      public function get height() : uint
      {
         return this._height;
      }
      
      public function getNeighbors(param1:GraphNode) : Vector.<GraphNode>
      {
         var _loc2_:GraphNode = null;
         var _loc3_:GraphNode = null;
         var _loc4_:GraphNode = null;
         var _loc5_:GraphNode = null;
         this._neighbors.length = 0;
         var _loc6_:uint = param1.x;
         var _loc7_:uint = param1.y;
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
            if(!_loc4_.isWall)
            {
               if(_loc7_ > 0 && !_loc2_.isWall)
               {
                  this._neighbors[this._neighbors.length] = this.getNode(_loc6_ - 1,_loc7_ - 1);
               }
               if(_loc7_ < this._heightMinusOne && !_loc3_.isWall)
               {
                  this._neighbors[this._neighbors.length] = this.getNode(_loc6_ - 1,_loc7_ + 1);
               }
            }
         }
         if(_loc6_ < this._widthMinusOne)
         {
            _loc5_ = this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_);
            if(!_loc5_.isWall)
            {
               if(_loc7_ > 0 && !_loc2_.isWall)
               {
                  this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_ - 1);
               }
               if(_loc7_ < this._heightMinusOne && !_loc3_.isWall)
               {
                  this._neighbors[this._neighbors.length] = this.getNode(_loc6_ + 1,_loc7_ + 1);
               }
            }
         }
         return this._neighbors;
      }
      
      public function getNodeAt(param1:int, param2:int) : GraphNode
      {
         var _loc3_:int = param1 * this._height + param2;
         return _loc3_ >= 0 && _loc3_ < this._area?this._graph[_loc3_]:null;
      }
      
      private function getNode(param1:int, param2:int) : GraphNode
      {
         return this._graph[param1 * this._height + param2];
      }
   }
}
