package view
{
   import astar.GraphNode;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.text.TextField;
   import flash.text.TextFormat;
   
   public class GraphNodeVisual extends Sprite
   {
      
      public static const LEFT:Number = Math.PI;
      
      public static const RIGHT:Number = 0;
      
      public static const TOP:Number = -Math.PI / 2;
      
      public static const TOP_LEFT:Number = -Math.PI * 3 / 4;
      
      public static const BOTTOM_LEFT:Number = -Math.PI * 5 / 4;
      
      public static const TOP_RIGHT:Number = -Math.PI / 4;
      
      public static const BOTTOM_RIGHT:Number = -Math.PI * 7 / 4;
      
      public static const BOTTOM:Number = -Math.PI * 3 / 2;
      
      private static const SIDE:Number = 33;
      
      private static const GAP:Number = 0;
      
      private static const format:TextFormat = new TextFormat("_typewriter",10);
       
      
      private var gText:TextField;
      
      private var hText:TextField;
      
      private var fText:TextField;
      
      private var parameters:Sprite;
      
      private var direction:Sprite;
      
      public var graphNode:GraphNode = null;
      
      public function GraphNodeVisual(param1:GraphNode)
      {
         var _loc2_:TextField = null;
         this.gText = new TextField();
         this.hText = new TextField();
         this.fText = new TextField();
         this.parameters = new Sprite();
         this.direction = new Sprite();
         super();
         this.graphNode = param1;
         buttonMode = true;
         addChild(this.direction);
         addChild(this.parameters);
         for each(_loc2_ in [this.gText,this.hText,this.fText])
         {
            _loc2_.selectable = false;
            _loc2_.mouseEnabled = false;
            _loc2_.defaultTextFormat = format;
            _loc2_.width = 34;
            _loc2_.height = 15;
            this.parameters.addChild(_loc2_);
         }
         this.direction.mouseEnabled = false;
         this.hideDetails();
         addEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
      }
      
      private function onAddedToStage(param1:Event) : void
      {
         removeEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
         this.x = (SIDE + GAP) * this.graphNode.x;
         this.y = (SIDE + GAP) * this.graphNode.y;
      }
      
      public function hideDetails() : void
      {
      }
      
      public function showDetails() : void
      {
      }
      
      public function showType(param1:Boolean) : void
      {
      }
      
      public function showPathPoint(param1:Number) : void
      {
         trace("indexGreenPoint = " + param1);
         var _loc2_:* = new green_point();
         addChild(_loc2_);
         _loc2_.gotoAndPlay(50 - param1);
      }
      
      public function showDirection(param1:Number) : void
      {
         if(!isNaN(param1))
         {
         }
      }
      
      public function showCrossMarker(param1:Boolean) : void
      {
         if(!param1)
         {
            this.parameters.visible = false;
         }
         this.direction.visible = false;
      }
      
      private function redrawBackground(param1:int, param2:int = 2147483647) : void
      {
      }
      
      public function drawArrow(param1:Number, param2:uint) : void
      {
         if(!isNaN(param1))
         {
            this.direction.visible = true;
            this.direction.graphics.clear();
            this.direction.graphics.beginFill(param2);
            this.direction.graphics.drawCircle(SIDE / 2,SIDE / 2,4);
            this.direction.graphics.endFill();
            this.direction.graphics.lineStyle(3,param2);
            this.direction.graphics.moveTo(SIDE / 2 + Math.cos(param1) * 25,SIDE / 2 + Math.sin(param1) * 25);
            this.direction.graphics.lineTo(SIDE / 2 + Math.cos(param1) * 5,SIDE / 2 + Math.sin(param1) * 5);
            this.direction.graphics.lineTo(SIDE / 2 + Math.cos(param1) * 5 + Math.cos(param1 - 0.4) * 10,SIDE / 2 + Math.sin(param1) * 5 + Math.sin(param1 - 0.4) * 10);
            this.direction.graphics.moveTo(SIDE / 2 + Math.cos(param1) * 5,SIDE / 2 + Math.sin(param1) * 5);
            this.direction.graphics.lineTo(SIDE / 2 + Math.cos(param1) * 5 + Math.cos(param1 + 0.4) * 10,SIDE / 2 + Math.sin(param1) * 5 + Math.sin(param1 + 0.4) * 10);
         }
      }
   }
}
