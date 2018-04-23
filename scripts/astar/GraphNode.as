package astar
{
   public class GraphNode
   {
       
      
      public var x:int = 0;
      
      public var y:int = 0;
      
      public var g:Number = 0;
      
      public var f:Number = 0;
      
      public var h:Number = 0;
      
      public var parent:GraphNode = null;
      
      public var isWall:Boolean = false;
      
      public function GraphNode(param1:int, param2:int)
      {
         super();
         this.x = param1;
         this.y = param2;
      }
      
      public function toString() : String
      {
         return "[" + this.x + "," + this.y + "]";
      }
   }
}
