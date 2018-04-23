module com {
	export module google {
		export module analytics {
			export module core {
				export class Domain extends egret.HashObject {
					private _mode:com.google.analytics.core.DomainNameMode;
					private _name:string;
					private _debug:com.google.analytics.debug.DebugConfiguration;

					public constructor(param1:com.google.analytics.core.DomainNameMode = null,param2:string = "",param3:com.google.analytics.debug.DebugConfiguration = null)
					{
						super();
						super();
						this._debug = param3;
						if(param1 == null)
						{
							param1 = com.google.analytics.core.DomainNameMode.auto;
						}
						this._mode = param1;
						if(param1 == com.google.analytics.core.DomainNameMode.custom)
						{
							this.name = param2;
						}
						else
						{
							this._name = param2;
						}
					}

					public get mode():com.google.analytics.core.DomainNameMode
					{
						return this._mode;
					}

					public set mode(param1:com.google.analytics.core.DomainNameMode)
					{
						this._mode = param1;
						if(this._mode == com.google.analytics.core.DomainNameMode.none)
						{
							this._name = "";
						}
					}

					public get name():string
					{
						return this._name;
					}

					public set name(param1:string)
					{
						if(param1.charAt(0) != "." && this._debug)
						{
							this._debug.warning("missing leading period \".\", cookie will only be accessible on " + param1,com.google.analytics.debug.VisualDebugMode.geek);
						}
						this._name = param1;
					}

				}
			}
		}
	}
}

