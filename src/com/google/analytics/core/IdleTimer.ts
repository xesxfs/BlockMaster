module com {
	export module google {
		export module analytics {
			export module core {
				export class IdleTimer extends egret.HashObject {
					private _loop:egret.Timer;
					private _stage:egret.Stage;
					private _lastMove:number = 0;
					private _debug:com.google.analytics.debug.DebugConfiguration;
					private _session:egret.Timer;
					private _inactivity:number = NaN;
					private _buffer:com.google.analytics.core.Buffer;

					public constructor(param1:com.google.analytics.v4.Configuration,param2:com.google.analytics.debug.DebugConfiguration,param3:egret.DisplayObject,param4:com.google.analytics.core.Buffer)
					{
						super();
						super();
						var _loc5_:number = <any>NaN;
						var _loc6_:number = <any>NaN;
						var _loc7_:number = <any>NaN;
						_loc5_ = param1.idleLoop;
						_loc6_ = param1.idleTimeout;
						_loc7_ = param1.sessionTimeout;
						this._loop = new egret.Timer(_loc5_ * 1000);
						this._session = new egret.Timer(_loc7_ * 1000,1);
						this._debug = param2;
						this._stage = param3.stage;
						this._buffer = param4;
						this._lastMove = flash.checkInt(egret.getTimer());
						this._inactivity = _loc6_ * 1000;
						this._loop.addEventListener(egret.TimerEvent.TIMER,flash.bind(this.checkForIdle,this),null);
						this._session.addEventListener(egret.TimerEvent.TIMER_COMPLETE,flash.bind(this.endSession,this),null);
						this._stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
						this._debug.info("delay: " + _loc5_ + "sec , inactivity: " + _loc6_ + "sec, sessionTimeout: " + _loc7_,com.google.analytics.debug.VisualDebugMode.geek);
						this._loop.start();
					}

					private onMouseMove(param1:flash.MouseEvent)
					{
						this._lastMove = flash.checkInt(egret.getTimer());
						if(this._session.running)
						{
							this._debug.info("session timer reset",com.google.analytics.debug.VisualDebugMode.geek);
							this._session.reset();
						}
					}

					public endSession(param1:egret.TimerEvent)
					{
						this._session.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,flash.bind(this.endSession,this),null);
						this._debug.info("session timer end session",com.google.analytics.debug.VisualDebugMode.geek);
						this._session.reset();
						this._buffer.resetCurrentSession();
						this._debug.info(this._buffer.utmb.toString(),com.google.analytics.debug.VisualDebugMode.geek);
						this._debug.info(this._buffer.utmc.toString(),com.google.analytics.debug.VisualDebugMode.geek);
						this._session.addEventListener(egret.TimerEvent.TIMER_COMPLETE,flash.bind(this.endSession,this),null);
					}

					public checkForIdle(param1:egret.TimerEvent)
					{
						var _loc2_:number = flash.checkInt(0);
						_loc2_ = flash.checkInt(egret.getTimer());
						if(_loc2_ - this._lastMove >= this._inactivity)
						{
							if(<any>!this._session.running)
							{
								this._debug.info("session timer start",com.google.analytics.debug.VisualDebugMode.geek);
								this._session.start();
							}
						}
					}

				}
			}
		}
	}
}

