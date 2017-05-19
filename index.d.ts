// typings install --source dt --global jquery

declare const jsSocials: JsSocialsStatic;

interface JQuery {
  jsSocials(config: jsSocials.IConfig): JQuery;
  jsSocials(method: 'destroy'): JQuery;
  jsSocials(method: 'refresh'): JQuery;
  jsSocials(method: 'option', optionName: string): any;
  jsSocials(method: 'option', optionName: string, optionValue: any): JQuery;
  jsSocials(method: string, ...arg: any[]): any;
}

interface JsSocialsStatic {
  shares: jsSocials.IShares;
  setDefaults(config: jsSocials.IConfig): void;
  setDefaults(shareName: jsSocials.ShareName, config: jsSocials.IShareConfig): void;
  shareStrategies: jsSocials.IShareStrategies;
}

declare namespace jsSocials {
  export interface IShares {
    "email": ICustomShare;
    "twitter": ICustomShare;
    "facebook": ICustomShare;
    "googleplus": ICustomShare;
    "linkedin": ICustomShare;
    "pinterest": ICustomShare;
    "stumbleupon": ICustomShare;
    "whatsapp": ICustomShare;
    "telegram": ICustomShare;
    "line": ICustomShare;
  }

  export interface ICustomShare {
    label?: string;
    logo?: string;
    shareUrl?: string | (() => string);
    countUrl?: string | (() => string);
    getCount?: (data: number) => string|number;
  }

  export interface IShareStrategies {
    [key:string]: (args:{})=>JQuery;
  }

  export interface IConfig {
    shares: Share[];
    url?: string;
    text?: string;
    showLabel?: boolean | ShowFn;
    showCount?: boolean | 'inside' | ShowFn;
    shareIn?: ShareIn | string;
    on?: IEvents;
  }

  type Share = ShareName | IShare;

  type ShareName = "email" | "twitter" | "facebook" | "googleplus" | "linkedin" | "pinterest" | "stumbleupon" |
    "whatsapp" | "telegram" | "line";

  interface IShare extends IShareConfig {
    share: ShareName;
  }

  interface IShareConfig {
    label?: string;
    logo?: string;
    css?: string;
    shareIn: ShareIn;
    renderer: () => JQuery;
  }

  type ShowFn = ((screenWidth: number) => boolean);

  type ShareIn = 'blank' | 'popup' | 'self';

  interface IEvents {
    [event: string]: EventListener;
  }
}