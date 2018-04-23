module com {
	export module google {
		export module analytics {
			export module debug {
				export class Info extends com.google.analytics.debug.Label {
					private _timer:egret.Timer;

					public constructor(param1:string = "",param2:number = 3000)
					{
						super(param1,"uiInfo",Style.infoColor,com.google.analytics.debug.Align.top,true);
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

flash.extendsClass("com.google.analytics.debug.Info","com.google.analytics.debug.Label")
