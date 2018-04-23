package
{
   import astar.AStar;
   import astar.Graph;
   import astar.GraphNode;
   import flash.display.Sprite;
   import flash.text.TextField;
   import view.GraphRenderer;
   
   public class AStarDetailed extends Sprite
   {
       
      
      public var pathFind:Boolean = false;
      
      private var logic:AStar;
      
      private var graph:Graph;
      
      private var renderer:GraphRenderer;
      
      private var start:GraphNode;
      
      private var end:GraphNode;
      
      private var hint:TextField;
      
      public function AStarDetailed(param1:*, param2:*, param3:*, param4:Number)
      {
         this.logic = new AStar();
         this.graph = new Graph(13,13);
         this.renderer = new GraphRenderer();
         this.hint = new TextField();
         super();
         addChild(this.renderer);
         this.renderer.draw(this.graph);
         trace("MovieClip " + param1);
         this.start = this.graph.getNodeAt(param1,param2);
         this.end = this.graph.getNodeAt(param3,param4);
         this.graph.getNodeAt(4,1).isWall = true;
         this.graph.getNodeAt(4,3).isWall = true;
      }
      
      public function getWall(param1:*, param2:Number) : void
      {
         this.graph.getNodeAt(param1,param2).isWall = true;
      }
      
      public function getNoWall(param1:*, param2:Number) : void
      {
         this.graph.getNodeAt(param1,param2).isWall = false;
      }
      
      public function updatePath() : void
      {
         var _loc1_:Vector.<GraphNode> = this.logic.search(this.graph,this.start,this.end);
         this.renderer.update(this.graph,_loc1_,this.logic.openList,this.logic.closedList);
         this.renderer.showStartAndEndNodes(this.start,this.end);
         this.pathFind = this.renderer.pathFind;
      }
   }
}
