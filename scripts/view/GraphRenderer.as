package view
{
   import astar.Graph;
   import astar.GraphNode;
   import flash.display.Sprite;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   
   public class GraphRenderer extends Sprite
   {
       
      
      public var pathFind = false;
      
      public function GraphRenderer()
      {
         super();
      }
      
      public function draw(param1:Graph) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < param1.width)
         {
            _loc2_ = 0;
            while(_loc2_ < param1.height)
            {
               addChild(new GraphNodeVisual(param1.getNodeAt(_loc3_,_loc2_)));
               _loc2_++;
            }
            _loc3_++;
         }
      }
      
      private function getMarker(param1:String) : TextField
      {
         var _loc2_:TextField = new TextField();
         _loc2_.selectable = false;
         _loc2_.mouseEnabled = false;
         _loc2_.defaultTextFormat = new TextFormat("_typewriter",10,13553358,true);
         _loc2_.width = 20;
         _loc2_.height = 15;
         _loc2_.autoSize = TextFieldAutoSize.CENTER;
         _loc2_.text = param1;
         return _loc2_;
      }
      
      public function update(param1:Graph, param2:Vector.<GraphNode>, param3:Vector.<GraphNode>, param4:Vector.<GraphNode>) : void
      {
         var _loc5_:int = 0;
         var _loc6_:GraphNode = null;
         var _loc7_:GraphNodeVisual = null;
         var _loc8_:* = 1;
         var _loc9_:int = 0;
         while(_loc9_ < param1.width)
         {
            _loc5_ = 0;
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
            trace("dddddddd " + param2);
            this.pathFind = true;
         }
      }
      
      private function getDitection(param1:GraphNode) : Number
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(param1.parent)
         {
            _loc2_ = param1.x - param1.parent.x;
            _loc3_ = param1.y - param1.parent.y;
            if(_loc2_ == 1 && _loc3_ == 1)
            {
               return GraphNodeVisual.TOP_LEFT;
            }
            if(_loc2_ == 1 && _loc3_ == 0)
            {
               return GraphNodeVisual.LEFT;
            }
            if(_loc2_ == 1 && _loc3_ == -1)
            {
               return GraphNodeVisual.BOTTOM_LEFT;
            }
            if(_loc2_ == 0 && _loc3_ == -1)
            {
               return GraphNodeVisual.BOTTOM;
            }
            if(_loc2_ == -1 && _loc3_ == -1)
            {
               return GraphNodeVisual.BOTTOM_RIGHT;
            }
            if(_loc2_ == -1 && _loc3_ == 0)
            {
               return GraphNodeVisual.RIGHT;
            }
            if(_loc2_ == -1 && _loc3_ == 1)
            {
               return GraphNodeVisual.TOP_RIGHT;
            }
            if(_loc2_ == 0 && _loc3_ == 1)
            {
               return GraphNodeVisual.TOP;
            }
         }
         return Number.NaN;
      }
      
      public function getVisualNode(param1:GraphNode) : GraphNodeVisual
      {
         var _loc2_:GraphNodeVisual = null;
         var _loc3_:int = 0;
         while(_loc3_ < numChildren)
         {
            _loc2_ = getChildAt(_loc3_) as GraphNodeVisual;
            if(_loc2_.graphNode.x == param1.x && _loc2_.graphNode.y == param1.y)
            {
               return _loc2_;
            }
            _loc3_++;
         }
         return null;
      }
      
      public function showStartAndEndNodes(param1:GraphNode, param2:GraphNode) : void
      {
         var _loc3_:GraphNodeVisual = this.getVisualNode(param1);
         var _loc4_:GraphNodeVisual = this.getVisualNode(param2);
         _loc3_.showCrossMarker(false);
         _loc4_.showCrossMarker(true);
      }
   }
}
