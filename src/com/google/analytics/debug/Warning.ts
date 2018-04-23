module com {
	export module google {
		export module analytics {
			export module debug {
				export class Warning extends com.google.analytics.debug.Label {
					private _timer:egret.Timer;

					public constructor(param1:string = "",param2:number = 3000)
					{
						super(param1,"uiWarning",Style.warningColor,com.google.analytics.debug.Align.top,false);
						this.margin.top = flash.checkInt(32);
						if(param2 > 0)
						{
							this._timer = new egret.Timer(param2,1);
							this._timer.start();
							this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,flash.bind(this.onComplete,this),null,false,0);
						}
					}

					public onComplete(param1:egret.TimerEvent)
					{
						this.close();
					}

					public onLink(param1:egret.TextEvent)
					{
						switch(param1.text)
						{
						case "hide" :
							this.close();
						}
					}

					public close()
					{
						if(this.parent != null)
						{
							this.parent.removeChild(this);
						}
					}

				}
			}
		}
	}
}

flash.extendsClass("com.google.analytics.debug.Warning","com.google.analytics.debug.Label")
