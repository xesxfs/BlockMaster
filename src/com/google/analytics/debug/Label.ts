module com {
	export module google {
		export module analytics {
			export module debug {
				export class Label extends com.google.analytics.debug.UISprite {
					public static count:number;
					private _text:string;
					private _textField:flash.TextField;
					private _color:number = 0;
					protected selectable:boolean = false;
					public stickToEdge:boolean = false;
					private _background:egret.Shape;
					private _tag:string;

					public constructor(param1:string = "",param2:string = "uiLabel",param3:number = 0,param4:com.google.analytics.debug.Align = null,param5:boolean = false)
					{
						super();
						this.name = "Label" + com.google.analytics.debug.Label.count++;
						this.selectable = false;
						this._background = new egret.Shape();
						this._textField = new flash.TextField();
						this._text = param1;
						this._tag = param2;
						if(param4 == null)
						{
							param4 = com.google.analytics.debug.Align.none;
						}
						this.alignement = param4;
						this.stickToEdge = param5;
						if(param3 == 0)
						{
							param3 = flash.checkUint(Style.backgroundColor);
						}
						this._color = flash.checkUint(param3);
						this._textField.addEventListener(egret.TextEvent.egret.TextEvent.LINK,flash.bind(this.onLink,this),null);
					}

					protected dispose()
					{
						this._textField.removeEventListener(egret.TextEvent.egret.TextEvent.LINK,flash.bind(this.onLink,this),null);
						super.dispose();
					}

					private _draw()
					{
						var _loc1_:egret.Graphics = <any>null;
						var _loc2_:number = flash.checkUint(0);
						var _loc3_:number = flash.checkUint(0);
						_loc1_ = this._background.graphics;
						_loc1_.clear();
						_loc1_.beginFill(this._color);
						_loc2_ = flash.checkUint(this._textField.width);
						_loc3_ = flash.checkUint(this._textField.height);
						if(this.forcedWidth > 0)
						{
							_loc2_ = flash.checkUint(this.forcedWidth);
						}
						com.google.analytics.debug.Background.drawRounded(this,_loc1_,_loc2_,_loc3_);
						_loc1_.endFill();
					}

					protected layout()
					{
						var _self__:any = this;
						this._textField.type = egret.TextFieldType.DYNAMIC;
						this._textField.textAlign = flash.TextFieldAutoSize.LEFT;
						this._textField.background = false;
						this._textField["selectable"] = this.selectable;
						this._textField.multiline = true;
						this._textField.styleSheet = Style.sheet;
						this.text = this._text;
						_self__.addChild(this._background);
						_self__.addChild(this._textField);
					}

					public get text():string
					{
						return this._textField.text;
					}

					public set tag(param1:string)
					{
						this._tag = param1;
						this.text = "";
					}

					public set text(param1:string)
					{
						if(param1 == "")
						{
							param1 = this._text;
						}
						this._textField.htmlText = "<span class=\"" + this.tag + "\">" + param1 + "</span>";
						this._text = param1;
						this._draw();
						this.resize();
					}

					public appendText(param1:string,param2:string = "")
					{
						if(param1 == "")
						{
							return ;
						}
						if(param2 == "")
						{
							param2 = this.tag;
						}
						this._textField.htmlText = this._textField.htmlText + ("<span class=\"" + param2 + "\">" + param1 + "</span>");
						this._text = this._text + param1;
						this._draw();
						this.resize();
					}

					public onLink(param1:egret.TextEvent)
					{
					}

					public get tag():string
					{
						return this._tag;
					}

				}
			}
		}
	}
}

com.google.analytics.debug.Label.count = 0;
flash.extendsClass("com.google.analytics.debug.Label","com.google.analytics.debug.UISprite")
