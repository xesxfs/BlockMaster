module view {
	export class GraphNodeVisual extends egret.Sprite {
		public static LEFT:number;
		public static RIGHT:number;
		public static TOP:number;
		public static TOP_LEFT:number;
		public static BOTTOM_LEFT:number;
		public static TOP_RIGHT:number;
		public static BOTTOM_RIGHT:number;
		public static BOTTOM:number;
		public static SIDE:number;
		public static GAP:number;
		public static format:flash.TextFormat;
		private gText:flash.TextField;
		private hText:flash.TextField;
		private fText:flash.TextField;
		private parameters:egret.Sprite;
		private direction:egret.Sprite;
		public graphNode:astar.GraphNode = null;

		public constructor(param1:astar.GraphNode)
		{
			super();			var _self__:any = this;

			var _loc2_:flash.TextField = <any>null;
			this.gText = new flash.TextField();
			this.hText = new flash.TextField();
			this.fText = new flash.TextField();
			this.parameters = new egret.Sprite();
			this.direction = new egret.Sprite();
			this.graphNode = param1;
			this["buttonMode"] = true;
			_self__.addChild(this.direction);
			_self__.addChild(this.parameters);
			var _loc2__key_a;
			for(_loc2__key_a in [this.gText,this.hText,this.fText])
			{
				_loc2_ = [this.gText,this.hText,this.fText][_loc2__key_a];
				_loc2_["selectable"] = false;
				_loc2_.touchEnabled = false;
				_loc2_.defaultTextFormat = view.GraphNodeVisual.format;
				_loc2_.width = 34;
				_loc2_.height = 15;
				this.parameters.addChild(_loc2_);
			}
			this.direction.touchEnabled = false;
			this.hideDetails();
			_self__.addEventListener(egret.Event.ADDED_TO_STAGE,flash.bind(this.onAddedToStage,this),null);
		}

		private onAddedToStage(param1:egret.Event)
		{
			var _self__:any = this;
			_self__.removeEventListener(egret.Event.ADDED_TO_STAGE,flash.bind(this.onAddedToStage,this),null);
			this.x = (view.GraphNodeVisual.SIDE + view.GraphNodeVisual.GAP) * this.graphNode.x;
			this.y = (view.GraphNodeVisual.SIDE + view.GraphNodeVisual.GAP) * this.graphNode.y;
		}

		public hideDetails()
		{
		}

		public showDetails()
		{
		}

		public showType(param1:boolean)
		{
		}

		public showPathPoint(param1:number)
		{
			var _self__:any = this;
			console.log("indexGreenPoint = " + param1);
			var _loc2_:any = <any>new green_point();
			_self__.addChild(_loc2_);
			_loc2_.gotoAndPlay(50 - param1);
		}

		public showDirection(param1:number)
		{
			if(<any>!isNaN(param1))
				{}
		}

		public showCrossMarker(param1:boolean)
		{
			if(<any>!param1)
			{
				this.parameters.visible = false;
			}
			this.direction.visible = false;
		}

		private redrawBackground(param1:number,param2:number = 2147483647)
		{
		}

		public drawArrow(param1:number,param2:number)
		{
			param2 = flash.checkUint(param2);
			if(<any>!isNaN(param1))
			{
				this.direction.visible = true;
				this.direction.graphics.clear();
				this.direction.graphics.beginFill(param2);
				this.direction.graphics.drawCircle(view.GraphNodeVisual.SIDE / 2,view.GraphNodeVisual.SIDE / 2,4);
				this.direction.graphics.endFill();
				this.direction.graphics.lineStyle(3,param2);
				this.direction.graphics.moveTo(view.GraphNodeVisual.SIDE / 2 + Math.cos(param1) * 25,view.GraphNodeVisual.SIDE / 2 + Math.sin(param1) * 25);
				this.direction.graphics.lineTo(view.GraphNodeVisual.SIDE / 2 + Math.cos(param1) * 5,view.GraphNodeVisual.SIDE / 2 + Math.sin(param1) * 5);
				this.direction.graphics.lineTo(view.GraphNodeVisual.SIDE / 2 + Math.cos(param1) * 5 + Math.cos(param1 - 0.4) * 10,view.GraphNodeVisual.SIDE / 2 + Math.sin(param1) * 5 + Math.sin(param1 - 0.4) * 10);
				this.direction.graphics.moveTo(view.GraphNodeVisual.SIDE / 2 + Math.cos(param1) * 5,view.GraphNodeVisual.SIDE / 2 + Math.sin(param1) * 5);
				this.direction.graphics.lineTo(view.GraphNodeVisual.SIDE / 2 + Math.cos(param1) * 5 + Math.cos(param1 + 0.4) * 10,view.GraphNodeVisual.SIDE / 2 + Math.sin(param1) * 5 + Math.sin(param1 + 0.4) * 10);
			}
		}

	}
}

view.GraphNodeVisual.LEFT = Math.PI;
view.GraphNodeVisual.RIGHT = 0;
view.GraphNodeVisual.TOP = -Math.PI / 2;
view.GraphNodeVisual.TOP_LEFT = -Math.PI * 3 / 4;
view.GraphNodeVisual.BOTTOM_LEFT = -Math.PI * 5 / 4;
view.GraphNodeVisual.TOP_RIGHT = -Math.PI / 4;
view.GraphNodeVisual.BOTTOM_RIGHT = -Math.PI * 7 / 4;
view.GraphNodeVisual.BOTTOM = -Math.PI * 3 / 2;
view.GraphNodeVisual.SIDE = 33;
view.GraphNodeVisual.GAP = 0;
view.GraphNodeVisual.format = new flash.TextFormat("_typewriter",10);
flash.extendsClass("view.GraphNodeVisual","egret.Sprite")
