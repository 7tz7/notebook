!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function e(r,n){var i,o,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function d(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function p(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=v(e[r],t[r]));return e}var i=(t.prototype.wrapCallback=function(r){var n=this;return function(e,t){e?n.reject(e):n.resolve(t),"function"==typeof r&&(n.promise.catch(function(){}),1===r.length?r(e):r(e,t))}},t);function t(){var r=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})}var n,o,s,f=(s=Error,r(n=l,o=s),void(n.prototype=null===o?Object.create(o):(c.prototype=o.prototype,new c)),l);function c(){this.constructor=n}function l(e,t){var r=s.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,u.prototype.create),r}var u=(h.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,n){return e.replace(m,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})}(o,n):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new f(i,s),l=0,p=Object.keys(n);l<p.length;l++){var u=p[l];"_"!==u.slice(-1)&&(u in c&&console.warn('Overwriting FirebaseError base field "'+u+'" can cause unexpected behavior.'),c[u]=n[u])}return c},h);function h(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var m=/\{\$([^}]+)}/g;function y(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function b(e,t){var r=new g(e,t);return r.subscribe.bind(r)}var g=(w.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},w.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},w.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},w.prototype.subscribe=function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var i=n[r];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}}),this.observers.push(n),o},w.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},w.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},w.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},w.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},w);function w(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}function O(){}var E=(I.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},I.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},I.prototype.setServiceProps=function(e){return this.serviceProps=e,this},I);function I(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var _="[DEFAULT]",N=(P.prototype.get=function(e){void 0===e&&(e=_);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new i;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise},P.prototype.getImmediate=function(e){var t=a({identifier:_,optional:!1},e),r=t.identifier,n=t.optional,i=this.normalizeInstanceIdentifier(r);try{var o=this.getOrInitializeService(i);if(o)return o;if(n)return null;throw Error("Service "+this.name+" is not available")}catch(e){if(n)return null;throw e}},P.prototype.getComponent=function(){return this.component},P.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(function(e){return"EAGER"===e.instantiationMode}(this.component=e))try{this.getOrInitializeService(_)}catch(e){}try{for(var n=d(this.instancesDeferred.entries()),i=n.next();!i.done;i=n.next()){var o=p(i.value,2),a=o[0],s=o[1],c=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService(c);s.resolve(l)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},P.prototype.clearInstance=function(e){void 0===e&&(e=_),this.instancesDeferred.delete(e),this.instances.delete(e)},P.prototype.delete=function(){return function(o,a,s,c){return new(s=s||Promise)(function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function n(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}i((c=c.apply(o,a||[])).next())})}(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(t.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}))];case 1:return e.sent(),[2]}})})},P.prototype.isComponentSet=function(){return null!=this.component},P.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return e===_?void 0:e}(e)),this.instances.set(e,t)),t||null},P.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:_:e},P);function P(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}var S,A,C=(R.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},R.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},R.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new N(e,this);return this.providers.set(e,t),t},R.prototype.getProviders=function(){return Array.from(this.providers.values())},R);function R(e){this.name=e,this.providers=new Map}function j(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}(A=S=S||{})[A.DEBUG=0]="DEBUG",A[A.VERBOSE=1]="VERBOSE",A[A.INFO=2]="INFO",A[A.WARN=3]="WARN",A[A.ERROR=4]="ERROR",A[A.SILENT=5]="SILENT";function k(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel)){var i=(new Date).toISOString();switch(t){case S.DEBUG:case S.VERBOSE:console.log.apply(console,j(["["+i+"]  "+e.name+":"],r));break;case S.INFO:console.info.apply(console,j(["["+i+"]  "+e.name+":"],r));break;case S.WARN:console.warn.apply(console,j(["["+i+"]  "+e.name+":"],r));break;case S.ERROR:console.error.apply(console,j(["["+i+"]  "+e.name+":"],r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}}var D,F=S.INFO,x=(Object.defineProperty(L.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in S))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(L.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),L.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,j([this,S.DEBUG],e))},L.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,j([this,S.VERBOSE],e))},L.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,j([this,S.INFO],e))},L.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,j([this,S.WARN],e))},L.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,j([this,S.ERROR],e))},L);function L(e){this.name=e,this._logLevel=F,this._logHandler=k}var T,z=((D={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",D["bad-app-name"]="Illegal App name: '{$appName}",D["duplicate-app"]="Firebase App named '{$appName}' already exists",D["app-deleted"]="Firebase App named '{$appName}' already deleted",D["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",D),V=new u("app","Firebase",z),B="@firebase/app",M="[DEFAULT]",U=((T={})[B]="fire-core",T["@firebase/analytics"]="fire-analytics",T["@firebase/auth"]="fire-auth",T["@firebase/database"]="fire-rtdb",T["@firebase/functions"]="fire-fn",T["@firebase/installations"]="fire-iid",T["@firebase/messaging"]="fire-fcm",T["@firebase/performance"]="fire-perf",T["@firebase/remote-config"]="fire-rc",T["@firebase/storage"]="fire-gcs",T["@firebase/firestore"]="fire-fst",T["fire-js"]="fire-js",T["firebase-wrapper"]="fire-js-all",T),H=new x("@firebase/app"),W=(Object.defineProperty(G.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),G.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(e){return e.delete()}))}).then(function(){t.isDeleted_=!0})},G.prototype._getService=function(e,t){return void 0===t&&(t=M),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},G.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=M),this.container.getProvider(e).clearInstance(t)},G.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(e){H.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,e)}},G.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},G.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw V.create("app-deleted",{appName:this.name_})},G);function G(e,t,r){var n,i,o=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=function(e){return v(void 0,e)}(e),this.container=new C(t.name),this._addComponent(new E("app",function(){return o},"PUBLIC"));try{for(var a=d(this.firebase_.INTERNAL.components.values()),s=a.next();!s.done;s=a.next()){var c=s.value;this._addComponent(c)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}}W.prototype.name&&W.prototype.options||W.prototype.delete||console.log("dc");var $="7.8.2";function Y(c){var l={},p=new Map,u={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});if("object"!=typeof t||null===t){t={name:t}}var r=t;void 0===r.name&&(r.name=M);var n=r.name;if("string"!=typeof n||!n)throw V.create("bad-app-name",{appName:String(n)});if(y(l,n))throw V.create("duplicate-app",{appName:n});var i=new c(e,r,u);return l[n]=i},app:f,registerVersion:function(e,t,r){var n,i=null!==(n=U[e])&&void 0!==n?n:e;r&&(i+="-"+r);var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&s.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&s.push("and"),a&&s.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void H.warn(s.join(" "))}h(new E(i+"-version",function(){return{library:i,version:t}},"VERSION"))},apps:null,SDK_VERSION:$,INTERNAL:{registerComponent:h,removeApp:function(e){delete l[e]},components:p,useAsService:function(e,t){return"serverAuth"!==t?t:null}}};function f(e){if(!y(l,e=e||M))throw V.create("no-app",{appName:e});return l[e]}function h(r){var t,e,n=r.name;if(p.has(n))return H.debug("There were multiple attempts to register component "+n+"."),"PUBLIC"===r.type?u[n]:null;if(p.set(n,r),"PUBLIC"===r.type){var i=function(e){if(void 0===e&&(e=f()),"function"!=typeof e[n])throw V.create("invalid-app-argument",{appName:n});return e[n]()};void 0!==r.serviceProps&&v(i,r.serviceProps),u[n]=i,c.prototype[n]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,n).apply(this,r.multipleInstances?e:[])}}try{for(var o=d(Object.keys(l)),a=o.next();!a.done;a=o.next()){var s=a.value;l[s]._addComponent(r)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return"PUBLIC"===r.type?u[n]:null}return u.default=u,Object.defineProperty(u,"apps",{get:function(){return Object.keys(l).map(function(e){return l[e]})}}),f.App=c,u}var K=function e(){var t=Y(W);return t.INTERNAL=a(a({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){v(t,e)},createSubscribe:b,ErrorFactory:u,deepExtend:v}),t}(),Z=(q.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(e){if(function(e){var t,r=e.getComponent();return"VERSION"===(null===(t=r)||void 0===t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null}).filter(function(e){return e}).join(" ")},q);function q(e){this.container=e}if("object"==typeof self&&self.self===self&&void 0!==self.firebase){H.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var J=self.firebase.SDK_VERSION;J&&0<=J.indexOf("LITE")&&H.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var Q=K.initializeApp;K.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&H.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),Q.apply(void 0,e)};var X,ee,te=K;(X=te).INTERNAL.registerComponent(new E("platform-logger",function(e){return new Z(e)},"PRIVATE")),X.registerVersion(B,"0.5.4",ee),X.registerVersion("fire-js","");return te.registerVersion("firebase","7.8.2","app"),te});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(fl){"use strict";try{(function(){fl=fl&&fl.hasOwnProperty("default")?fl.default:fl,function(){var t,o="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)};var a=function(t){t=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,t];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}return globalThis}(this);function c(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:function(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}(t)}}!function(t,e){if(e){var n=a;t=t.split(".");for(var i=0;i<t.length-1;i++){var r=t[i];r in n||(n[r]={}),n=n[r]}(e=e(i=n[t=t[t.length-1]]))!=i&&null!=e&&o(n,t,{configurable:!0,writable:!0,value:e})}}("Promise",function(t){function s(t){this.b=0,this.c=void 0,this.a=[];var e=this.f();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function e(){this.a=null}function u(e){return e instanceof s?e:new s(function(t){t(e)})}if(t)return t;e.prototype.b=function(t){if(null==this.a){this.a=[];var e=this;this.c(function(){e.g()})}this.a.push(t)};var n=a.setTimeout;e.prototype.c=function(t){n(t,0)},e.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a;this.a=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.f(t)}}}this.a=null},e.prototype.f=function(t){this.c(function(){throw t})},s.prototype.f=function(){function t(e){return function(t){i||(i=!0,e.call(n,t))}}var n=this,i=!1;return{resolve:t(this.m),reject:t(this.g)}},s.prototype.m=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof s)this.o(t);else{t:switch(typeof t){case"object":var e=null!=t;break t;case"function":e=!0;break t;default:e=!1}e?this.u(t):this.h(t)}},s.prototype.u=function(t){var e=void 0;try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.v(e,t):this.h(t)},s.prototype.g=function(t){this.i(2,t)},s.prototype.h=function(t){this.i(1,t)},s.prototype.i=function(t,e){if(0!=this.b)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.b);this.b=t,this.c=e,this.l()},s.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)r.b(this.a[t]);this.a=null}};var r=new e;return s.prototype.o=function(t){var e=this.f();t.La(e.resolve,e.reject)},s.prototype.v=function(t,e){var n=this.f();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},s.prototype.then=function(t,e){function n(e,t){return"function"==typeof e?function(t){try{i(e(t))}catch(t){r(t)}}:t}var i,r,o=new s(function(t,e){i=t,r=e});return this.La(n(t,i),n(e,r)),o},s.prototype.catch=function(t){return this.then(void 0,t)},s.prototype.La=function(t,e){function n(){switch(i.b){case 1:t(i.c);break;case 2:e(i.c);break;default:throw Error("Unexpected state: "+i.b)}}var i=this;null==this.a?r.b(n):this.a.push(n)},s.resolve=u,s.reject=function(n){return new s(function(t,e){e(n)})},s.race=function(r){return new s(function(t,e){for(var n=c(r),i=n.next();!i.done;i=n.next())u(i.value).La(t,e)})},s.all=function(t){var o=c(t),a=o.next();return a.done?u([]):new s(function(n,t){function e(e){return function(t){i[e]=t,0==--r&&n(i)}}for(var i=[],r=0;i.push(void 0),r++,u(a.value).La(e(i.length-1),t),!(a=o.next()).done;);})},s});var u=u||{},l=this||self;function h(t){return"string"==typeof t}function n(t){return"boolean"==typeof t}var s=/^[\w+/_-]+[=]{0,2}$/,f=null;function d(){}function i(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}function r(t){return null===t}function p(t){return"array"==i(t)}function v(t){var e=i(t);return"array"==e||"object"==e&&"number"==typeof t.length}function m(t){return"function"==i(t)}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var e="closure_uid_"+(1e9*Math.random()>>>0),b=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(e,n,t){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,i),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function I(t,e,n){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}var E=Date.now||function(){return+new Date};function k(t,e){function n(){}n.prototype=e.prototype,t.qb=e.prototype,t.prototype=new n,t.prototype.constructor=t}function A(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch(t){return!1}}function S(t){if(Error.captureStackTrace)Error.captureStackTrace(this,S);else{var e=Error().stack;e&&(this.stack=e)}t&&(this.message=String(t))}function N(t,e){for(var n="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)n+=t[r]+(r<e.length?e[r]:"%s");S.call(this,n+t[i])}function O(t,e){throw new N("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function _(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function P(t,e){t.f(e),t.b<100&&(t.b++,e.next=t.a,t.a=e)}function R(){this.b=this.a=null}k(S,Error),S.prototype.name="CustomError",k(N,S),N.prototype.name="AssertionError",_.prototype.get=function(){if(0<this.b){this.b--;var t=this.a;this.a=t.next,t.next=null}else t=this.c();return t};var C=new _(function(){return new D},function(t){t.reset()});function D(){this.next=this.b=this.a=null}function L(t,e){t:{try{var n=t&&t.ownerDocument,i=n&&(n.defaultView||n.parentWindow);if((i=i||l).Element&&i.Location){var r=i;break t}}catch(t){}r=null}if(r&&void 0!==r[e]&&(!t||!(t instanceof r[e])&&(t instanceof r.Location||t instanceof r.Element))){if(g(t))try{var o=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){o="<object could not be stringified>"}else o=void 0===t?"undefined":null===t?"null":typeof t;O("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,o)}}R.prototype.add=function(t,e){var n=C.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},D.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},D.prototype.reset=function(){this.next=this.b=this.a=null};var x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(h(t))return h(e)&&1==e.length?t.indexOf(e,0):-1;for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},M=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=h(t)?t.split(""):t,o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)};var j=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=Array(n),r=h(t)?t.split(""):t,o=0;o<n;o++)o in r&&(i[o]=e.call(void 0,r[o],o,t));return i},U=Array.prototype.some?function(t,e){return Array.prototype.some.call(t,e,void 0)}:function(t,e){for(var n=t.length,i=h(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t))return!0;return!1};function V(t,e){return 0<=x(t,e)}function F(t,e){var n;return(n=0<=(e=x(t,e)))&&Array.prototype.splice.call(t,e,1),n}function K(n,i){!function(t,e){for(var n=h(t)?t.split(""):t,i=t.length-1;0<=i;--i)i in n&&e.call(void 0,n[i],i,t)}(n,function(t,e){i.call(void 0,t,e,n)&&1==Array.prototype.splice.call(n,e,1).length&&0})}function q(t){return Array.prototype.concat.apply([],arguments)}function H(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}function B(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function G(t){for(var e in t)return!1;return!0}function W(t){var e,n={};for(e in t)n[e]=t[e];return n}var X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(t,e){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])t[n]=i[n];for(var o=0;o<X.length;o++)n=X[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Y(t,e){this.a=t===Z&&e||"",this.b=$}function z(t){return t instanceof Y&&t.constructor===Y&&t.b===$?t.a:(O("expected object of type Const, got '"+t+"'"),"type_error:Const")}Y.prototype.qa=!0,Y.prototype.pa=function(){return this.a},Y.prototype.toString=function(){return"Const{"+this.a+"}"};var $={},Z={},Q=new Y(Z,"");function tt(){this.a="",this.b=ot}function et(t){return t instanceof tt&&t.constructor===tt&&t.b===ot?t.a:(O("expected object of type TrustedResourceUrl, got '"+t+"' of type "+i(t)),"type_error:TrustedResourceUrl")}function nt(t,n){var i=z(t);if(!rt.test(i))throw Error("Invalid TrustedResourceUrl format: "+i);return at(t=i.replace(it,function(t,e){if(!Object.prototype.hasOwnProperty.call(n,e))throw Error('Found marker, "'+e+'", in format string, "'+i+'", but no valid label mapping found in args: '+JSON.stringify(n));return(t=n[e])instanceof Y?z(t):encodeURIComponent(String(t))}))}tt.prototype.qa=!0,tt.prototype.pa=function(){return this.a.toString()},tt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var it=/%{(\w+)}/g,rt=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,ot={};function at(t){var e=new tt;return e.a=t,e}var st=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},ut=/&/g,ct=/</g,ht=/>/g,lt=/"/g,ft=/'/g,dt=/\x00/g,pt=/[\x00&<>"']/;function vt(t,e){return-1!=t.indexOf(e)}function mt(t,e){return t<e?-1:e<t?1:0}function gt(){this.a="",this.b=Tt}function bt(t){return t instanceof gt&&t.constructor===gt&&t.b===Tt?t.a:(O("expected object of type SafeUrl, got '"+t+"' of type "+i(t)),"type_error:SafeUrl")}gt.prototype.qa=!0,gt.prototype.pa=function(){return this.a.toString()},gt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var yt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function wt(t){return t instanceof gt?t:(t="object"==typeof t&&t.qa?t.pa():String(t),yt.test(t)||(t="about:invalid#zClosurez"),Et(t))}var It,Tt={};function Et(t){var e=new gt;return e.a=t,e}Et("about:blank");t:{var kt=l.navigator;if(kt){var At=kt.userAgent;if(At){It=At;break t}}It=""}function St(t){return vt(It,t)}function Nt(){this.a="",this.b=_t}function Ot(t){return t instanceof Nt&&t.constructor===Nt&&t.b===_t?t.a:(O("expected object of type SafeHtml, got '"+t+"' of type "+i(t)),"type_error:SafeHtml")}Nt.prototype.qa=!0,Nt.prototype.pa=function(){return this.a.toString()},Nt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var _t={};function Pt(t){var e=new Nt;return e.a=t,e}Pt("<!DOCTYPE html>");var Rt,Ct,Dt=Pt("");function Lt(t,e){for(var n=t.split("%s"),i="",r=Array.prototype.slice.call(arguments,1);r.length&&1<n.length;)i+=n.shift()+r.shift();return i+n.join("%s")}function xt(t){return pt.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(ut,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(ct,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(ht,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(lt,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(ft,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(dt,"&#0;"))),t}function Mt(t){l.setTimeout(function(){throw t},0)}function jt(){var t=l.MessageChannel;if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!St("Presto")&&(t=function(){var t=document.createElement("IFRAME");t.style.display="none",function(t){var e=at(z(Q));L(t,"HTMLIFrameElement"),t.src=et(e).toString()}(t),document.documentElement.appendChild(t);var e=t.contentWindow;(t=e.document).open(),t.write(Ot(Dt)),t.close();var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host;t=I(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this),e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}),void 0===t||St("Trident")||St("MSIE"))return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){l.setTimeout(t,0)};var e=new t,n={},i=n;return e.port1.onmessage=function(){if(void 0!==n.next){var t=(n=n.next).yb;n.yb=null,t()}},function(t){i.next={yb:t},i=i.next,e.port2.postMessage(0)}}function Ut(t,e){Ct||function(){if(l.Promise&&l.Promise.resolve){var t=l.Promise.resolve(void 0);Ct=function(){t.then(Kt)}}else Ct=function(){var t=Kt;!m(l.setImmediate)||l.Window&&l.Window.prototype&&!St("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Rt=Rt||jt())(t):l.setImmediate(t)}}(),Vt||(Ct(),Vt=!0),Ft.add(t,e)}Pt("<br>");var Vt=!1,Ft=new R;function Kt(){for(var t;n=e=void 0,n=null,(e=Ft).a&&(n=e.a,e.a=e.a.next,e.a||(e.b=null),n.next=null),t=n;){try{t.a.call(t.b)}catch(t){Mt(t)}P(C,t)}var e,n;Vt=!1}function qt(t,e){if(this.a=Ht,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=d)try{var n=this;t.call(e,function(t){ee(n,Bt,t)},function(t){if(!(t instanceof ue))try{if(t instanceof Error)throw t;throw Error("Promise rejected.")}catch(t){}ee(n,Gt,t)})}catch(t){ee(this,Gt,t)}}var Ht=0,Bt=2,Gt=3;function Wt(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}Wt.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1};var Xt=new _(function(){return new Wt},function(t){t.reset()});function Jt(t,e,n){var i=Xt.get();return i.g=t,i.b=e,i.f=n,i}function Yt(t){if(t instanceof qt)return t;var e=new qt(d);return ee(e,Bt,t),e}function zt(n){return new qt(function(t,e){e(n)})}function $t(t,e,n){ne(t,e,n,null)||Ut(T(e,t))}function Zt(n){return new qt(function(i){var r=n.length,o=[];if(r)for(var t=function(t,e,n){r--,o[t]=e?{Gb:!0,value:n}:{Gb:!1,reason:n},0==r&&i(o)},e=0;e<n.length;e++)$t(n[e],T(t,e,!0),T(t,e,!1));else i(o)})}function Qt(t,e){t.b||t.a!=Bt&&t.a!=Gt||ie(t),t.f?t.f.next=e:t.b=e,t.f=e}function te(t,r,o,a){var e=Jt(null,null,null);return e.a=new qt(function(n,i){e.g=r?function(t){try{var e=r.call(a,t);n(e)}catch(t){i(t)}}:n,e.b=o?function(t){try{var e=o.call(a,t);void 0===e&&t instanceof ue?i(t):n(e)}catch(t){i(t)}}:i}),Qt(e.a.c=t,e),e.a}function ee(t,e,n){t.a==Ht&&(t===n&&(e=Gt,n=new TypeError("Promise cannot resolve to itself")),t.a=1,ne(n,t.Oc,t.Pc,t)||(t.i=n,t.a=e,t.c=null,ie(t),e!=Gt||n instanceof ue||function(t,e){t.g=!0,Ut(function(){t.g&&se.call(null,e)})}(t,n)))}function ne(t,e,n,i){if(t instanceof qt)return Qt(t,Jt(e||d,n||null,i)),!0;if(A(t))return t.then(e,n,i),!0;if(g(t))try{var r=t.then;if(m(r))return function(t,e,n,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1;try{e.call(t,function(t){a||(a=!0,n.call(r,t))},o)}catch(t){o(t)}}(t,r,e,n,i),!0}catch(t){return n.call(i,t),!0}return!1}function ie(t){t.h||(t.h=!0,Ut(t.Zb,t))}function re(t){var e=null;return t.b&&(e=t.b,t.b=e.next,e.next=null),t.b||(t.f=null),e}function oe(t,e,n,i){if(n==Gt&&e.b&&!e.c)for(;t&&t.g;t=t.c)t.g=!1;if(e.a)e.a.c=null,ae(e,n,i);else try{e.c?e.g.call(e.f):ae(e,n,i)}catch(t){se.call(null,t)}P(Xt,e)}function ae(t,e,n){e==Bt?t.g.call(t.f,n):t.b&&t.b.call(t.f,n)}qt.prototype.then=function(t,e,n){return te(this,m(t)?t:null,m(e)?e:null,n)},qt.prototype.$goog_Thenable=!0,(t=qt.prototype).ka=function(t,e){return(t=Jt(t,t,e)).c=!0,Qt(this,t),this},t.s=function(t,e){return te(this,null,t,e)},t.cancel=function(t){this.a==Ht&&Ut(function(){!function t(e,n){if(e.a==Ht)if(e.c){var i=e.c;if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,s.a==e&&(o=s),!(o&&1<r)));s=s.next)o||(a=s);o&&(i.a==Ht&&1==r?t(i,n):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):re(i),oe(i,o,Gt,n)))}e.c=null}else ee(e,Gt,n)}(this,new ue(t))},this)},t.Oc=function(t){this.a=Ht,ee(this,Bt,t)},t.Pc=function(t){this.a=Ht,ee(this,Gt,t)},t.Zb=function(){for(var t;t=re(this);)oe(this,t,this.a,this.i);this.h=!1};var se=Mt;function ue(t){S.call(this,t)}function ce(){this.va=this.va,this.la=this.la}k(ue,S);var he=0;function le(t){if(!t.va&&(t.va=!0,t.za(),0!=he))t[e]||(t[e]=++b)}function fe(t){return fe[" "](t),t}ce.prototype.va=!(ue.prototype.name="cancel"),ce.prototype.za=function(){if(this.la)for(;this.la.length;)this.la.shift()()},fe[" "]=d;var de,pe,ve=St("Opera"),me=St("Trident")||St("MSIE"),ge=St("Edge"),be=ge||me,ye=St("Gecko")&&!(vt(It.toLowerCase(),"webkit")&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),we=vt(It.toLowerCase(),"webkit")&&!St("Edge");function Ie(){var t=l.document;return t?t.documentMode:void 0}t:{var Te="",Ee=(pe=It,ye?/rv:([^\);]+)(\)|;)/.exec(pe):ge?/Edge\/([\d\.]+)/.exec(pe):me?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pe):we?/WebKit\/(\S+)/.exec(pe):ve?/(?:Version)[ \/]?(\S+)/.exec(pe):void 0);if(Ee&&(Te=Ee?Ee[1]:""),me){var ke=Ie();if(null!=ke&&ke>parseFloat(Te)){de=String(ke);break t}}de=Te}var Ae,Se={};function Ne(s){return function(t,e){var n=Se;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(s,function(){for(var t=0,e=st(String(de)).split("."),n=st(String(s)).split("."),i=Math.max(e.length,n.length),r=0;0==t&&r<i;r++){var o=e[r]||"",a=n[r]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=mt(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||mt(0==o[2].length,0==a[2].length)||mt(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t})}Ae=l.document&&me?Ie():void 0;var Oe=Object.freeze||function(t){return t},_e=!me||9<=Number(Ae),Pe=me&&!Ne("9"),Re=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(t){}return t}();function Ce(t,e){this.type=t,this.b=this.target=e,this.Mb=!0}function De(t,e){if(Ce.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.b=e,e=t.relatedTarget){if(ye){t:{try{fe(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=h(t.pointerType)?t.pointerType:Le[t.pointerType]||"",(this.a=t).defaultPrevented&&this.preventDefault()}}Ce.prototype.preventDefault=function(){this.Mb=!1},k(De,Ce);var Le=Oe({2:"touch",3:"pen",4:"mouse"});De.prototype.preventDefault=function(){De.qb.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Pe)try{(t.ctrlKey||112<=t.keyCode&&t.keyCode<=123)&&(t.keyCode=-1)}catch(t){}},De.prototype.f=function(){return this.a};var xe="closure_listenable_"+(1e6*Math.random()|0),Me=0;function je(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.Pa=r,this.key=++Me,this.ta=this.Ka=!1}function Ue(t){t.ta=!0,t.listener=null,t.proxy=null,t.src=null,t.Pa=null}function Ve(t){this.src=t,this.a={},this.b=0}function Fe(t,e){var n=e.type;n in t.a&&F(t.a[n],e)&&(Ue(e),0==t.a[n].length&&(delete t.a[n],t.b--))}function Ke(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ta&&o.listener==e&&o.capture==!!n&&o.Pa==i)return r}return-1}Ve.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var a=Ke(t,e,i,r);return-1<a?(e=t[a],n||(e.Ka=!1)):((e=new je(e,this.src,o,!!i,r)).Ka=n,t.push(e)),e};var qe="closure_lm_"+(1e6*Math.random()|0),He={};function Be(t,e,n,i,r){if(i&&i.once)We(t,e,n,i,r);else if(p(e))for(var o=0;o<e.length;o++)Be(t,e[o],n,i,r);else n=en(n),t&&t[xe]?rn(t,e,n,g(i)?!!i.capture:!!i,r):Ge(t,e,n,!1,i,r)}function Ge(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var a=g(r)?!!r.capture:!!r,s=Qe(t);if(s||(t[qe]=s=new Ve(t)),!(n=s.add(e,n,i,a,o)).proxy)if(i=function(){var e=Ze,n=_e?function(t){return e.call(n.src,n.listener,t)}:function(t){if(!(t=e.call(n.src,n.listener,t)))return t};return n}(),(n.proxy=i).src=t,i.listener=n,t.addEventListener)Re||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ye(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}}function We(t,e,n,i,r){if(p(e))for(var o=0;o<e.length;o++)We(t,e[o],n,i,r);else n=en(n),t&&t[xe]?on(t,e,n,g(i)?!!i.capture:!!i,r):Ge(t,e,n,!0,i,r)}function Xe(t,e,n,i,r){if(p(e))for(var o=0;o<e.length;o++)Xe(t,e[o],n,i,r);else i=g(i)?!!i.capture:!!i,n=en(n),t&&t[xe]?(t=t.u,(e=String(e).toString())in t.a&&(-1<(n=Ke(o=t.a[e],n,i,r))&&(Ue(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--)))):(t=t&&Qe(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Ke(e,n,i,r)),(n=-1<t?e[t]:null)&&Je(n))}function Je(t){if("number"!=typeof t&&t&&!t.ta){var e=t.src;if(e&&e[xe])Fe(e.u,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ye(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qe(e))?(Fe(n,t),0==n.b&&(n.src=null,e[qe]=null)):Ue(t)}}}function Ye(t){return t in He?He[t]:He[t]="on"+t}function ze(t,e,n,i){var r=!0;if((t=Qe(t))&&(e=t.a[e.toString()]))for(e=e.concat(),t=0;t<e.length;t++){var o=e[t];o&&o.capture==n&&!o.ta&&(o=$e(o,i),r=r&&!1!==o)}return r}function $e(t,e){var n=t.listener,i=t.Pa||t.src;return t.Ka&&Je(t),n.call(i,e)}function Ze(t,e){if(t.ta)return!0;if(_e)return $e(t,new De(e,this));if(!e)t:{e=["window","event"];for(var n=l,i=0;i<e.length;i++)if(null==(n=n[e[i]])){e=null;break t}e=n}if(e=new De(i=e,this),n=!0,!(i.keyCode<0||null!=i.returnValue)){t:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break t}catch(t){r=!0}!r&&null!=i.returnValue||(i.returnValue=!0)}for(i=[],r=e.b;r;r=r.parentNode)i.push(r);for(t=t.type,r=i.length-1;0<=r;r--){e.b=i[r];var o=ze(i[r],t,!0,e);n=n&&o}for(r=0;r<i.length;r++)e.b=i[r],o=ze(i[r],t,!1,e),n=n&&o}return n}function Qe(t){return(t=t[qe])instanceof Ve?t:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function en(e){return m(e)?e:(e[tn]||(e[tn]=function(t){return e.handleEvent(t)}),e[tn])}function nn(){ce.call(this),this.u=new Ve(this),(this.Sb=this).Xa=null}function rn(t,e,n,i,r){t.u.add(String(e),n,!1,i,r)}function on(t,e,n,i,r){t.u.add(String(e),n,!0,i,r)}function an(t,e,n,i){if(!(e=t.u.a[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var a=e[o];if(a&&!a.ta&&a.capture==n){var s=a.listener,u=a.Pa||a.src;a.Ka&&Fe(t.u,a),r=!1!==s.call(u,i)&&r}}return r&&0!=i.Mb}function sn(t,e,n){if(m(t))n&&(t=I(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=I(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function un(n){var i=null;return new qt(function(t,e){-1==(i=sn(function(){t(void 0)},n))&&e(Error("Failed to schedule timer."))}).s(function(t){throw l.clearTimeout(i),t})}function cn(t){if(t.U&&"function"==typeof t.U)return t.U();if(h(t))return t.split("");if(v(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function hn(t){if(t.X&&"function"==typeof t.X)return t.X();if(!t.U||"function"!=typeof t.U){if(v(t)||h(t)){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(var i in e=[],n=0,t)e[n++]=i;return e}}function ln(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ln)for(n=t.X(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function fn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var i=t.a[e];dn(t.b,i)&&(t.a[n++]=i),e++}t.a.length=n}if(t.c!=t.a.length){var r={};for(n=e=0;e<t.a.length;)dn(r,i=t.a[e])||(r[t.a[n++]=i]=1),e++;t.a.length=n}}function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}k(nn,ce),nn.prototype[xe]=!0,nn.prototype.addEventListener=function(t,e,n,i){Be(this,t,e,n,i)},nn.prototype.removeEventListener=function(t,e,n,i){Xe(this,t,e,n,i)},nn.prototype.dispatchEvent=function(t){var e,n=this.Xa;if(n)for(e=[];n;n=n.Xa)e.push(n);n=this.Sb;var i=t.type||t;if(h(t))t=new Ce(t,n);else if(t instanceof Ce)t.target=t.target||n;else{var r=t;J(t=new Ce(i,n),r)}if(r=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.b=e[o];r=an(a,i,!0,t)&&r}if(r=an(a=t.b=n,i,!0,t)&&r,r=an(a,i,!1,t)&&r,e)for(o=0;o<e.length;o++)r=an(a=t.b=e[o],i,!1,t)&&r;return r},nn.prototype.za=function(){if(nn.qb.za.call(this),this.u){var t,e=this.u;for(t in e.a){for(var n=e.a[t],i=0;i<n.length;i++)Ue(n[i]);delete e.a[t],e.b--}}this.Xa=null},(t=ln.prototype).U=function(){fn(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},t.X=function(){return fn(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,e){return dn(this.b,t)?this.b[t]:e},t.set=function(t,e){dn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},t.forEach=function(t,e){for(var n=this.X(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);t.call(e,o,r,this)}};var pn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vn(t,e){var n;this.b=this.i=this.f="",this.l=null,this.g=this.c="",this.h=!1,t instanceof vn?(this.h=void 0!==e?e:t.h,mn(this,t.f),this.i=t.i,this.b=t.b,gn(this,t.l),this.c=t.c,bn(this,jn(t.a)),this.g=t.g):t&&(n=String(t).match(pn))?(this.h=!!e,mn(this,n[1]||"",!0),this.i=En(n[2]||""),this.b=En(n[3]||"",!0),gn(this,n[4]),this.c=En(n[5]||"",!0),bn(this,n[6]||"",!0),this.g=En(n[7]||"")):(this.h=!!e,this.a=new Rn(null,this.h))}function mn(t,e,n){t.f=n?En(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function gn(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.l=e}else t.l=null}function bn(t,e,n){e instanceof Rn?(t.a=e,function(t,e){e&&!t.f&&(Cn(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(Ln(this,e),Mn(this,n,t))},t)),t.f=e}(t.a,t.h)):(n||(e=kn(e,_n)),t.a=new Rn(e,t.h))}function yn(t,e,n){t.a.set(e,n)}function wn(t,e){return t.a.get(e)}function In(t){return t instanceof vn?new vn(t):new vn(t,void 0)}function Tn(t,e){var n=new vn(null,void 0);return mn(n,"https"),t&&(n.b=t),e&&(n.c=e),n}function En(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function kn(t,e,n){return h(t)?(t=encodeURI(t).replace(e,An),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function An(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}vn.prototype.toString=function(){var t=[],e=this.f;e&&t.push(kn(e,Sn,!0),":");var n=this.b;return!n&&"file"!=e||(t.push("//"),(e=this.i)&&t.push(kn(e,Sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.l)&&t.push(":",String(n))),(n=this.c)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(kn(n,"/"==n.charAt(0)?On:Nn,!0))),(n=this.a.toString())&&t.push("?",n),(n=this.g)&&t.push("#",kn(n,Pn)),t.join("")},vn.prototype.resolve=function(t){var e=new vn(this),n=!!t.f;n?mn(e,t.f):n=!!t.i,n?e.i=t.i:n=!!t.b,n?e.b=t.b:n=null!=t.l;var i=t.c;if(n)gn(e,t.l);else if(n=!!t.c){if("/"!=i.charAt(0))if(this.b&&!this.c)i="/"+i;else{var r=e.c.lastIndexOf("/");-1!=r&&(i=e.c.substr(0,r+1)+i)}if(".."==(r=i)||"."==r)i="";else if(vt(r,"./")||vt(r,"/.")){i=0==r.lastIndexOf("/",0),r=r.split("/");for(var o=[],a=0;a<r.length;){var s=r[a++];"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r}return n?e.c=i:n=""!==t.a.toString(),n?bn(e,jn(t.a)):n=!!t.g,n&&(e.g=t.g),e};var Sn=/[#\/\?@]/g,Nn=/[#\?:]/g,On=/[#\?]/g,_n=/[#\?@]/g,Pn=/#/g;function Rn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Cn(n){n.a||(n.a=new ln,n.b=0,n.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(n.c,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}function Dn(t){var e=hn(t);if(void 0===e)throw Error("Keys are undefined");var n=new Rn(null,void 0);t=cn(t);for(var i=0;i<e.length;i++){var r=e[i],o=t[i];p(o)?Mn(n,r,o):n.add(r,o)}return n}function Ln(t,e){Cn(t),e=Un(t,e),dn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,dn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&fn(t)))}function xn(t,e){return Cn(t),e=Un(t,e),dn(t.a.b,e)}function Mn(t,e,n){Ln(t,e),0<n.length&&(t.c=null,t.a.set(Un(t,e),H(n)),t.b+=n.length)}function jn(t){var e=new Rn;return e.c=t.c,t.a&&(e.a=new ln(t.a),e.b=t.b),e}function Un(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(t=Rn.prototype).add=function(t,e){Cn(this),this.c=null,t=Un(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(n,i){Cn(this),this.a.forEach(function(t,e){M(t,function(t){n.call(i,t,e,this)},this)},this)},t.X=function(){Cn(this);for(var t=this.a.U(),e=this.a.X(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i]);return n},t.U=function(t){Cn(this);var e=[];if(h(t))xn(this,t)&&(e=q(e,this.a.get(Un(this,t))));else{t=this.a.U();for(var n=0;n<t.length;n++)e=q(e,t[n])}return e},t.set=function(t,e){return Cn(this),this.c=null,xn(this,t=Un(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},t.get=function(t,e){return t&&0<(t=this.U(t)).length?String(t[0]):e},t.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.X(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.U(i);for(var o=0;o<i.length;o++){var a=r;""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}}return this.c=t.join("&")};var Vn=!me||9<=Number(Ae);function Fn(t){var e=document;return h(t)?e.getElementById(t):t}function Kn(n,t){B(t,function(t,e){t&&"object"==typeof t&&t.qa&&(t=t.pa()),"style"==e?n.style.cssText=t:"class"==e?n.className=t:"for"==e?n.htmlFor=t:qn.hasOwnProperty(e)?n.setAttribute(qn[e],t):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?n.setAttribute(e,t):n[e]=t})}var qn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Hn(t,e,n){var i=arguments,r=document,o=String(i[0]),a=i[1];if(!Vn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',xt(a.name),'"'),a.type){o.push(' type="',xt(a.type),'"');var s={};J(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=r.createElement(o),a&&(h(a)?o.className=a:p(a)?o.className=a.join(" "):Kn(o,a)),2<i.length&&function(e,n,t){function i(t){t&&n.appendChild(h(t)?e.createTextNode(t):t)}for(var r=2;r<t.length;r++){var o=t[r];!v(o)||g(o)&&0<o.nodeType?i(o):M(Bn(o)?H(o):o,i)}}(r,o,i),o}function Bn(t){if(t&&"number"==typeof t.length){if(g(t))return"function"==typeof t.item||"string"==typeof t.item;if(m(t))return"function"==typeof t.item}return!1}function Gn(t){var e=[];return function t(e,n,i){if(null==n)i.push("null");else{if("object"==typeof n){if(p(n)){var r=n;n=r.length,i.push("[");for(var o="",a=0;a<n;a++)i.push(o),t(e,r[a],i),o=",";return void i.push("]")}if(!(n instanceof String||n instanceof Number||n instanceof Boolean)){for(r in i.push("{"),o="",n)Object.prototype.hasOwnProperty.call(n,r)&&("function"!=typeof(a=n[r])&&(i.push(o),Yn(r,i),i.push(":"),t(e,a,i),o=","));return void i.push("}")}n=n.valueOf()}switch(typeof n){case"string":Yn(n,i);break;case"number":i.push(isFinite(n)&&!isNaN(n)?String(n):"null");break;case"boolean":i.push(String(n));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof n)}}}(new Wn,t,e),e.join("")}function Wn(){}var Xn={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Jn=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Yn(t,e){e.push('"',t.replace(Jn,function(t){var e=Xn[t];return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Xn[t]=e),e}),'"')}function zn(){var t=vi();return me&&!!Ae&&11==Ae||/Edge\/\d+/.test(t)}function $n(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function Zn(t,e){e=e||l.window;var n="about:blank";t&&(n=bt(wt(t)).toString()),e.location.href=n}function Qn(t){return!!((t=(t||vi()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function ti(t){t=t||l.window;try{t.close()}catch(t){}}function ei(t,e,n){var i=Math.floor(1e9*Math.random()).toString();e=e||500,n=n||600;var r=(window.screen.availHeight-n)/2,o=(window.screen.availWidth-e)/2;for(a in e={width:e,height:n,top:0<r?r:0,left:0<o?o:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},n=vi().toLowerCase(),i&&(e.target=i,vt(n,"crios/")&&(e.target="_blank")),fi(vi())==hi&&(t=t||"http://localhost",e.scrollbars=!0),n=t||"",(t=e)||(t={}),i=window,e=n instanceof gt?n:wt(void 0!==n.href?n.href:String(n)),n=t.target||n.target,r=[],t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");if((St("iPhone")&&!St("iPod")&&!St("iPad")||St("iPad")||St("iPod"))&&i.navigator&&i.navigator.standalone&&n&&"_self"!=n?(L(a=i.document.createElement("A"),"HTMLAnchorElement"),e instanceof gt||e instanceof gt||(e="object"==typeof e&&e.qa?e.pa():String(e),yt.test(e)||(e="about:invalid#zClosurez"),e=Et(e)),a.href=bt(e),a.setAttribute("target",n),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),a={}):t.noreferrer?(a=i.open("",n,a),t=bt(e).toString(),a&&(be&&vt(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),a.opener=null,t=Pt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+xt(t)+'">'),a.document.write(Ot(t)),a.document.close())):(a=i.open(bt(e).toString(),n,a))&&t.noopener&&(a.opener=null),a)try{a.focus()}catch(t){}return a}var ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ii=/^[^@]+@[^@]+$/;function ri(){var e=null;return new qt(function(t){"complete"==l.document.readyState?t():(e=function(){t()},We(window,"load",e))}).s(function(t){throw Xe(window,"load",e),t})}function oi(t){return t=t||vi(),!("file:"!==wi()&&"ionic:"!==wi()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ai(){var t=l.window;try{return!(!t||t==t.top)}catch(t){return!1}}function si(){return void 0!==l.WorkerGlobalScope&&"function"==typeof l.importScripts}function ui(){return fl.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":fl.INTERNAL.hasOwnProperty("node")?"Node":si()?"Worker":"Browser"}function ci(){var t=ui();return"ReactNative"===t||"Node"===t}var hi="Firefox",li="Chrome";function fi(t){var e=t.toLowerCase();return vt(e,"opera/")||vt(e,"opr/")||vt(e,"opios/")?"Opera":vt(e,"iemobile")?"IEMobile":vt(e,"msie")||vt(e,"trident/")?"IE":vt(e,"edge/")?"Edge":vt(e,"firefox/")?hi:vt(e,"silk/")?"Silk":vt(e,"blackberry")?"Blackberry":vt(e,"webos")?"Webos":!vt(e,"safari/")||vt(e,"chrome/")||vt(e,"crios/")||vt(e,"android")?!vt(e,"chrome/")&&!vt(e,"crios/")||vt(e,"edge/")?vt(e,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":li:"Safari"}var di={Wc:"FirebaseCore-web",Yc:"FirebaseUI-web"};function pi(t,e){e=e||[];var n,i=[],r={};for(n in di)r[di[n]]=!0;for(n=0;n<e.length;n++)void 0!==r[e[n]]&&(delete r[e[n]],i.push(e[n]));return i.sort(),(e=i).length||(e=["FirebaseCore-web"]),"Browser"===(i=ui())?i=fi(r=vi()):"Worker"===i&&(i=fi(r=vi())+"-"+i),i+"/JsCore/"+t+"/"+e.join(",")}function vi(){return l.navigator&&l.navigator.userAgent||""}function mi(t,e){t=t.split("."),e=e||l;for(var n=0;n<t.length&&"object"==typeof e&&null!=e;n++)e=e[t[n]];return n!=t.length&&(e=void 0),e}function gi(){try{var t=l.localStorage,e=Ai();if(t)return t.setItem(e,"1"),t.removeItem(e),!zn()||!!l.indexedDB}catch(t){return si()&&!!l.indexedDB}return!1}function bi(){return(yi()||"chrome-extension:"===wi()||oi())&&!ci()&&gi()&&!si()}function yi(){return"http:"===wi()||"https:"===wi()}function wi(){return l.location&&l.location.protocol||null}function Ii(t){return!Qn(t=t||vi())&&fi(t)!=hi}function Ti(t){return void 0===t?null:Gn(t)}function Ei(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&(n[e]=t[e]);return n}function ki(t){if(null!==t)return JSON.parse(t)}function Ai(t){return t||Math.floor(1e9*Math.random()).toString()}function Si(t){return"Safari"!=fi(t=t||vi())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Ni(){var t=l.___jsl;if(t&&t.H)for(var e in t.H)if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=t.H[e].L.concat(),t.CP)for(var n=0;n<t.CP.length;n++)t.CP[n]=null}function Oi(t,e){if(e<t)throw Error("Short delay should be less than long delay!");this.a=t,this.c=e,t=vi(),e=ui(),this.b=Qn(t)||"ReactNative"===e}function _i(){var t=l.document;return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Pi(t){try{var e=new Date(parseInt(t,10));if(!isNaN(e.getTime())&&!/[^0-9]/.test(t))return e.toUTCString()}catch(t){}return null}function Ri(){return!(!mi("fireauth.oauthhelper",l)&&!mi("fireauth.iframe",l))}Oi.prototype.get=function(){var t=l.navigator;return!t||"boolean"!=typeof t.onLine||!yi()&&"chrome-extension:"!==wi()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)};var Ci,Di={};function Li(t){Di[t]||(Di[t]=!0,"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t))}try{var xi={};Object.defineProperty(xi,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(xi,"abcd",{configurable:!0,enumerable:!0,value:2}),Ci=2==xi.abcd}catch(t){Ci=!1}function Mi(t,e,n){Ci?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n}):t[e]=n}function ji(t,e){if(e)for(var n in e)e.hasOwnProperty(n)&&Mi(t,n,e[n])}function Ui(t){var e={};return ji(e,t),e}function Vi(t){var e=t;if("object"==typeof t&&null!=t)for(var n in e="length"in t?[]:{},t)Mi(e,n,Vi(t[n]));return e}function Fi(t){var e={},n=t[qi],i=t[Hi];if(!(t=t[Bi])||t!=Ki&&!n)throw Error("Invalid provider user info!");e[Wi]=i||null,e[Gi]=n||null,Mi(this,Ji,t),Mi(this,Xi,Vi(e))}var Ki="EMAIL_SIGNIN",qi="email",Hi="newEmail",Bi="requestType",Gi="email",Wi="fromEmail",Xi="data",Ji="operation";function Yi(t,e){this.code=$i+t,this.message=e||Zi[t]||""}function zi(t){var e=t&&t.code;return e?new Yi(e.substring($i.length),t.message):null}k(Yi,Error),Yi.prototype.A=function(){return{code:this.code,message:this.message}},Yi.prototype.toJSON=function(){return this.A()};var $i="auth/",Zi={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function Qi(t){var e=wn(t=In(t),tr)||null,n=wn(t,er)||null,i=wn(t,rr)||null;if(i=i&&ar[i]||null,!e||!n||!i)throw new Yi("argument-error",tr+", "+er+"and "+rr+" are required in a valid action code URL.");ji(this,{apiKey:e,operation:i,code:n,continueUrl:wn(t,nr)||null,languageCode:wn(t,ir)||null,tenantId:wn(t,or)||null})}var tr="apiKey",er="oobCode",nr="continueUrl",ir="languageCode",rr="mode",or="tenantId",ar={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",signIn:Ki,verifyEmail:"VERIFY_EMAIL"};function sr(t){try{return new Qi(t)}catch(t){return null}}function ur(t){var e=t[dr];if(void 0===e)throw new Yi("missing-continue-uri");if("string"!=typeof e||"string"==typeof e&&!e.length)throw new Yi("invalid-continue-uri");this.h=e,this.b=this.a=null,this.g=!1;var n=t[cr];if(n&&"object"==typeof n){e=n[mr];var i=n[pr];if(n=n[vr],"string"==typeof e&&e.length){if(this.a=e,void 0!==i&&"boolean"!=typeof i)throw new Yi("argument-error",pr+" property must be a boolean when specified.");if(this.g=!!i,void 0!==n&&("string"!=typeof n||"string"==typeof n&&!n.length))throw new Yi("argument-error",vr+" property must be a non empty string when specified.");this.b=n||null}else{if(void 0!==e)throw new Yi("argument-error",mr+" property must be a non empty string when specified.");if(void 0!==i||void 0!==n)throw new Yi("missing-android-pkg-name")}}else if(void 0!==n)throw new Yi("argument-error",cr+" property must be a non null object when specified.");if(this.f=null,(e=t[fr])&&"object"==typeof e){if("string"==typeof(e=e[gr])&&e.length)this.f=e;else if(void 0!==e)throw new Yi("argument-error",gr+" property must be a non empty string when specified.")}else if(void 0!==e)throw new Yi("argument-error",fr+" property must be a non null object when specified.");if(void 0!==(e=t[lr])&&"boolean"!=typeof e)throw new Yi("argument-error",lr+" property must be a boolean when specified.");if(this.c=!!e,void 0!==(t=t[hr])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new Yi("argument-error",hr+" property must be a non empty string when specified.");this.i=t||null}var cr="android",hr="dynamicLinkDomain",lr="handleCodeInApp",fr="iOS",dr="url",pr="installApp",vr="minimumVersion",mr="packageName",gr="bundleId";function br(t){var e={};for(var n in e.continueUrl=t.h,e.canHandleCodeInApp=t.c,(e.androidPackageName=t.a)&&(e.androidMinimumVersion=t.b,e.androidInstallApp=t.g),e.iOSBundleId=t.f,e.dynamicLinkDomain=t.i,e)null===e[n]&&delete e[n];return e}var yr=null,wr=null;function Ir(t){var e="";return function(i,t){function e(t){for(;r<i.length;){var e=i.charAt(r++),n=wr[e];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return t}!function(){if(!yr){yr={},wr={};for(var t=0;t<65;t++)yr[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),62<=(wr[yr[t]]=t)&&(wr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}();for(var r=0;;){var n=e(-1),o=e(0),a=e(64),s=e(64);if(64===s&&-1===n)break;t(n<<2|o>>4),64!=a&&(t(o<<4&240|a>>2),64!=s&&t(a<<6&192|s))}}(t,function(t){e+=String.fromCharCode(t)}),e}function Tr(t){this.f=t.sub,this.a=t.provider_id||t.firebase&&t.firebase.sign_in_provider||null,this.c=t.firebase&&t.firebase.tenant||null,this.b=!!t.is_anonymous||"anonymous"==this.a}function Er(t){return(t=kr(t))&&t.sub&&t.iss&&t.aud&&t.exp?new Tr(t):null}function kr(t){if(!t)return null;if(3!=(t=t.split(".")).length)return null;for(var e=(4-(t=t[1]).length%4)%4,n=0;n<e;n++)t+=".";try{return JSON.parse(Ir(t))}catch(t){}return null}Tr.prototype.R=function(){return this.c},Tr.prototype.g=function(){return this.b};var Ar,Sr={bd:{cb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://securetoken.googleapis.com/v1/token",id:"p"},dd:{cb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ed:{cb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",ib:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};function Nr(t){for(var e in Sr)if(Sr[e].id===t)return{firebaseEndpoint:(t=Sr[e]).cb,secureTokenEndpoint:t.ib};return null}Ar=Nr("__EID__")?"__EID__":void 0;var Or="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),_r=["client_id","response_type","scope","redirect_uri","state"],Pr={Xc:{Ea:"locale",sa:700,ra:600,Fa:"facebook.com",Qa:_r},Zc:{Ea:null,sa:500,ra:750,Fa:"github.com",Qa:_r},$c:{Ea:"hl",sa:515,ra:680,Fa:"google.com",Qa:_r},fd:{Ea:"lang",sa:485,ra:705,Fa:"twitter.com",Qa:Or},Vc:{Ea:"locale",sa:600,ra:600,Fa:"apple.com",Qa:[]}};function Rr(t){for(var e in Pr)if(Pr[e].Fa==t)return Pr[e];return null}function Cr(t){var e={};e["facebook.com"]=jr,e["google.com"]=Vr,e["github.com"]=Ur,e["twitter.com"]=Fr;var n=t&&t[Lr];try{if(n)return e[n]?new e[n](t):new Mr(t);if(void 0!==t[Dr])return new xr(t)}catch(t){}return null}var Dr="idToken",Lr="providerId";function xr(t){var e=t[Lr];if(!e&&t[Dr]){var n=Er(t[Dr]);n&&n.a&&(e=n.a)}if(!e)throw Error("Invalid additional user info!");"anonymous"!=e&&"custom"!=e||(e=null),n=!1,void 0!==t.isNewUser?n=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(n=!0),Mi(this,"providerId",e),Mi(this,"isNewUser",n)}function Mr(t){xr.call(this,t),Mi(this,"profile",Vi((t=ki(t.rawUserInfo||"{}"))||{}))}function jr(t){if(Mr.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Ur(t){if(Mr.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!");Mi(this,"username",this.profile&&this.profile.login||null)}function Vr(t){if(Mr.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function Fr(t){if(Mr.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!");Mi(this,"username",t.screenName||null)}function Kr(t){var e=In(t),n=wn(e,"link"),i=wn(In(n),"link");return wn(In(e=wn(e,"deep_link_id")),"link")||e||i||n||t}function qr(){}function Hr(t,n){return t.then(function(t){if(t[Ca]){var e=Er(t[Ca]);if(!e||n!=e.f)throw new Yi("user-mismatch");return t}throw new Yi("user-mismatch")}).s(function(t){throw t&&t.code&&t.code==$i+"user-not-found"?new Yi("user-mismatch"):t})}function Br(t,e){if(!e)throw new Yi("internal-error","failed to construct a credential");this.a=e,Mi(this,"providerId",t),Mi(this,"signInMethod",t)}function Gr(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function Wr(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new Br(t.providerId,t.pendingToken)}catch(t){}return null}function Xr(t,e,n){if(this.a=null,e.idToken||e.accessToken)e.idToken&&Mi(this,"idToken",e.idToken),e.accessToken&&Mi(this,"accessToken",e.accessToken),e.nonce&&!e.pendingToken&&Mi(this,"nonce",e.nonce),e.pendingToken&&(this.a=e.pendingToken);else{if(!e.oauthToken||!e.oauthTokenSecret)throw new Yi("internal-error","failed to construct a credential");Mi(this,"accessToken",e.oauthToken),Mi(this,"secret",e.oauthTokenSecret)}Mi(this,"providerId",t),Mi(this,"signInMethod",n)}function Jr(t){var e={};return t.idToken&&(e.id_token=t.idToken),t.accessToken&&(e.access_token=t.accessToken),t.secret&&(e.oauth_token_secret=t.secret),e.providerId=t.providerId,t.nonce&&!t.a&&(e.nonce=t.nonce),e={postBody:Dn(e).toString(),requestUri:"http://localhost"},t.a&&(delete e.postBody,e.pendingToken=t.a),e}function Yr(t){if(t&&t.providerId&&t.signInMethod){var e={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken};try{return new Xr(t.providerId,e,t.signInMethod)}catch(t){}}return null}function zr(t,e){this.Fc=e||[],ji(this,{providerId:t,isOAuthProvider:!0}),this.zb={},this.eb=(Rr(t)||{}).Ea||null,this.bb=null}function $r(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new Yi("argument-error",'SAML provider IDs must be prefixed with "saml."');zr.call(this,t,[])}function Zr(t){zr.call(this,t,_r),this.a=[]}function Qr(){Zr.call(this,"facebook.com")}function to(t){if(!t)throw new Yi("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return g(t)&&(e=t.accessToken),(new Qr).credential({accessToken:e})}function eo(){Zr.call(this,"github.com")}function no(t){if(!t)throw new Yi("argument-error","credential failed: expected 1 argument (the OAuth access token).");var e=t;return g(t)&&(e=t.accessToken),(new eo).credential({accessToken:e})}function io(){Zr.call(this,"google.com"),this.ya("profile")}function ro(t,e){var n=t;return g(t)&&(n=t.idToken,e=t.accessToken),(new io).credential({idToken:n,accessToken:e})}function oo(){zr.call(this,"twitter.com",Or)}function ao(t,e){var n=t;if(g(n)||(n={oauthToken:t,oauthTokenSecret:e}),!n.oauthToken||!n.oauthTokenSecret)throw new Yi("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Xr("twitter.com",n,"twitter.com")}function so(t,e,n){this.a=t,this.c=e,Mi(this,"providerId","password"),Mi(this,"signInMethod",n===co.EMAIL_LINK_SIGN_IN_METHOD?co.EMAIL_LINK_SIGN_IN_METHOD:co.EMAIL_PASSWORD_SIGN_IN_METHOD)}function uo(t){return t&&t.email&&t.password?new so(t.email,t.password,t.signInMethod):null}function co(){ji(this,{providerId:"password",isOAuthProvider:!1})}function ho(t,e){if(!(e=lo(e)))throw new Yi("argument-error","Invalid email link!");return new so(t,e.code,co.EMAIL_LINK_SIGN_IN_METHOD)}function lo(t){return(t=sr(t=Kr(t)))&&t.operation===Ki?t:null}function fo(t){if(!(t.Va&&t.Ua||t.Ha&&t.ba))throw new Yi("internal-error");this.a=t,Mi(this,"providerId","phone"),Mi(this,"signInMethod","phone")}function po(e){if(e&&"phone"===e.providerId&&(e.verificationId&&e.verificationCode||e.temporaryProof&&e.phoneNumber)){var n={};return M(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(t){e[t]&&(n[t]=e[t])}),new fo(n)}return null}function vo(t){return t.a.Ha&&t.a.ba?{temporaryProof:t.a.Ha,phoneNumber:t.a.ba}:{sessionInfo:t.a.Va,code:t.a.Ua}}function mo(t){try{this.a=t||fl.auth()}catch(t){throw new Yi("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}ji(this,{providerId:"phone",isOAuthProvider:!1})}function go(t,e){if(!t)throw new Yi("missing-verification-id");if(!e)throw new Yi("missing-verification-code");return new fo({Va:t,Ua:e})}function bo(t){if(t.temporaryProof&&t.phoneNumber)return new fo({Ha:t.temporaryProof,ba:t.phoneNumber});var e=t&&t.providerId;if(!e||"password"===e)return null;var n=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken;try{switch(e){case"google.com":return ro(o,n);case"facebook.com":return to(n);case"github.com":return no(n);case"twitter.com":return ao(n,i);default:return n||i||o||a?a?0==e.indexOf("saml.")?new Br(e,a):new Xr(e,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},e):new Zr(e).credential({idToken:o,accessToken:n,rawNonce:r}):null}}catch(t){return null}}function yo(t){if(!t.isOAuthProvider)throw new Yi("invalid-oauth-provider")}function wo(t,e,n,i,r,o,a){if(this.c=t,this.b=e||null,this.g=n||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new Yi("invalid-auth-event");if(this.g&&this.a)throw new Yi("invalid-auth-event");if(this.g&&!this.f)throw new Yi("invalid-auth-event")}function Io(t){return(t=t||{}).type?new wo(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&zi(t.error),t.postBody,t.tenantId):null}function To(){this.b=null,this.a=[]}k(Mr,xr),k(jr,Mr),k(Ur,Mr),k(Vr,Mr),k(Fr,Mr),Br.prototype.na=function(t){return za(t,Gr(this))},Br.prototype.b=function(t,e){var n=Gr(this);return n.idToken=e,$a(t,n)},Br.prototype.f=function(t,e){return Hr(Za(t,Gr(this)),e)},Br.prototype.A=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},Xr.prototype.na=function(t){return za(t,Jr(this))},Xr.prototype.b=function(t,e){var n=Jr(this);return n.idToken=e,$a(t,n)},Xr.prototype.f=function(t,e){return Hr(Za(t,Jr(this)),e)},Xr.prototype.A=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod};return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},zr.prototype.Ga=function(t){return this.zb=W(t),this},k($r,zr),k(Zr,zr),Zr.prototype.ya=function(t){return V(this.a,t)||this.a.push(t),this},Zr.prototype.Hb=function(){return H(this.a)},Zr.prototype.credential=function(t,e){var n;if(!(n=g(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:e||null}).idToken&&!n.accessToken)throw new Yi("argument-error","credential failed: must provide the ID token and/or the access token.");return new Xr(this.providerId,n,this.providerId)},k(Qr,Zr),Mi(Qr,"PROVIDER_ID","facebook.com"),Mi(Qr,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),k(eo,Zr),Mi(eo,"PROVIDER_ID","github.com"),Mi(eo,"GITHUB_SIGN_IN_METHOD","github.com"),k(io,Zr),Mi(io,"PROVIDER_ID","google.com"),Mi(io,"GOOGLE_SIGN_IN_METHOD","google.com"),k(oo,zr),Mi(oo,"PROVIDER_ID","twitter.com"),Mi(oo,"TWITTER_SIGN_IN_METHOD","twitter.com"),so.prototype.na=function(t){return this.signInMethod==co.EMAIL_LINK_SIGN_IN_METHOD?Ns(t,as,{email:this.a,oobCode:this.c}):Ns(t,Es,{email:this.a,password:this.c})},so.prototype.b=function(t,e){return this.signInMethod==co.EMAIL_LINK_SIGN_IN_METHOD?Ns(t,ss,{idToken:e,email:this.a,oobCode:this.c}):Ns(t,gs,{idToken:e,email:this.a,password:this.c})},so.prototype.f=function(t,e){return Hr(this.na(t),e)},so.prototype.A=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}},ji(co,{PROVIDER_ID:"password"}),ji(co,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),ji(co,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),fo.prototype.na=function(t){return t.Wa(vo(this))},fo.prototype.b=function(t,e){var n=vo(this);return n.idToken=e,Ns(t,As,n)},fo.prototype.f=function(t,e){var n=vo(this);return n.operation="REAUTH",Hr(t=Ns(t,Ss,n),e)},fo.prototype.A=function(){var t={providerId:"phone"};return this.a.Va&&(t.verificationId=this.a.Va),this.a.Ua&&(t.verificationCode=this.a.Ua),this.a.Ha&&(t.temporaryProof=this.a.Ha),this.a.ba&&(t.phoneNumber=this.a.ba),t},mo.prototype.Wa=function(e,n){var i=this.a.b;return Yt(n.verify()).then(function(t){if(!h(t))throw new Yi("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(n.type){case"recaptcha":return function(t,e){return Ns(t,vs,e)}(i,{phoneNumber:e,recaptchaToken:t}).then(function(t){return"function"==typeof n.reset&&n.reset(),t},function(t){throw"function"==typeof n.reset&&n.reset(),t});default:throw new Yi("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}})},ji(mo,{PROVIDER_ID:"phone"}),ji(mo,{PHONE_SIGN_IN_METHOD:"phone"}),wo.prototype.getUid=function(){var t=[];return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},wo.prototype.R=function(){return this.h},wo.prototype.A=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.A()}};var Eo,ko=null;function Ao(t){var e="unauthorized-domain",n=void 0,i=In(t);t=i.b,"chrome-extension"==(i=i.f)?n=Lt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?n=Lt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):e="operation-not-supported-in-this-environment",Yi.call(this,e,n)}function So(t,e,n){Yi.call(this,t,n),(t=e||{}).Ab&&Mi(this,"email",t.Ab),t.ba&&Mi(this,"phoneNumber",t.ba),t.credential&&Mi(this,"credential",t.credential),t.Qb&&Mi(this,"tenantId",t.Qb)}function No(t){if(t.code){var e=t.code||"";0==e.indexOf($i)&&(e=e.substring($i.length));var n={credential:bo(t),Qb:t.tenantId};if(t.email)n.Ab=t.email;else if(t.phoneNumber)n.ba=t.phoneNumber;else if(!n.credential)return new Yi(e,t.message||void 0);return new So(e,n,t.message)}return null}function Oo(){}function _o(t){return t.c||(t.c=t.b())}function Po(){}function Ro(t){if(t.f||"undefined"!=typeof XMLHttpRequest||"undefined"==typeof ActiveXObject)return t.f;for(var e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],n=0;n<e.length;n++){var i=e[n];try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}function Co(){}function Do(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=I(this.fc,this),this.a.onerror=I(this.Ib,this),this.a.onprogress=I(this.gc,this),this.a.ontimeout=I(this.kc,this)}function Lo(t,e){t.readyState=e,t.onreadystatechange&&t.onreadystatechange()}function xo(t,e,n){this.reset(t,e,n,void 0,void 0)}function Mo(t){this.f=t,this.b=this.c=this.a=null}function jo(t,e){this.name=t,this.value=e}k(Ao,Yi),k(So,Yi),So.prototype.A=function(){var t={code:this.code,message:this.message};this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId);var e=this.credential&&this.credential.A();return e&&J(t,e),t},So.prototype.toJSON=function(){return this.A()},Oo.prototype.c=null,k(Po,Oo),Po.prototype.a=function(){var t=Ro(this);return t?new ActiveXObject(t):new XMLHttpRequest},Po.prototype.b=function(){var t={};return Ro(this)&&(t[0]=!0,t[1]=!0),t},Eo=new Po,k(Co,Oo),Co.prototype.a=function(){var t=new XMLHttpRequest;if("withCredentials"in t)return t;if("undefined"!=typeof XDomainRequest)return new Do;throw Error("Unsupported browser")},Co.prototype.b=function(){return{}},(t=Do.prototype).open=function(t,e,n){if(null!=n&&!n)throw Error("Only async requests are supported.");this.a.open(t,e)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported");this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.fc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Lo(this,4)},t.Ib=function(){this.status=500,this.response=this.responseText="",Lo(this,4)},t.kc=function(){this.Ib()},t.gc=function(){this.status=200,Lo(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},xo.prototype.a=null,xo.prototype.reset=function(t,e,n,i,r){delete this.a},jo.prototype.toString=function(){return this.name};var Uo=new jo("SEVERE",1e3),Vo=new jo("WARNING",900),Fo=new jo("CONFIG",700),Ko=new jo("FINE",500);Mo.prototype.log=function(t,e,n){if(t.value>=function t(e){return e.c?e.c:e.a?t(e.a):(O("Root logger has no level set."),null)}(this).value)for(m(e)&&(e=e()),t=new xo(t,String(e),this.f),n&&(t.a=n),n=this;n;)n=n.a};var qo,Ho={},Bo=null;function Go(t){var e;if(Bo||(Bo=new Mo(""),(Ho[""]=Bo).c=Fo),!(e=Ho[t])){e=new Mo(t);var n=t.lastIndexOf("."),i=t.substr(n+1);(n=Go(t.substr(0,n))).b||(n.b={}),(n.b[i]=e).a=n,Ho[t]=e}return e}function Wo(t,e){t&&t.log(Ko,e,void 0)}function Xo(t){this.f=t}function Jo(t){nn.call(this),this.o=t,this.readyState=Yo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.m="GET",this.g="",this.a=!1,this.h=Go("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}k(Xo,Oo),Xo.prototype.a=function(){return new Jo(this.f)},Xo.prototype.b=(qo={},function(){return qo}),k(Jo,nn);var Yo=0;function zo(t){t.c.read().then(t.ec.bind(t)).catch(t.Oa.bind(t))}function $o(t,e){e&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,Zo(t)}function Zo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Qo(t){nn.call(this),this.headers=new ln,this.B=t||null,this.c=!1,this.w=this.a=null,this.h=this.O=this.l="",this.f=this.J=this.i=this.I=!1,this.g=0,this.o=null,this.m=ta,this.v=this.P=!1}(t=Jo.prototype).open=function(t,e){if(this.readyState!=Yo)throw this.abort(),Error("Error reopening a connection");this.m=t,this.g=e,this.readyState=1,Zo(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var e={headers:this.i,method:this.m,credentials:void 0,cache:void 0};t&&(e.body=t),this.o.fetch(new Request(this.g,e)).then(this.jc.bind(this),this.Oa.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,$o(this,!1)),this.readyState=Yo},t.jc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,Zo(this)),this.a&&(this.readyState=3,Zo(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.hc.bind(this),this.Oa.bind(this)):void 0!==l.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,zo(this)):t.text().then(this.ic.bind(this),this.Oa.bind(this)))))},t.ec=function(t){if(this.a){var e=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done});e&&(this.response=this.responseText+=e),t.done?$o(this,!0):Zo(this),3==this.readyState&&zo(this)}},t.ic=function(t){this.a&&(this.response=this.responseText=t,$o(this,!0))},t.hc=function(t){this.a&&(this.response=t,$o(this,!0))},t.Oa=function(t){var e=this.h;e&&e.log(Vo,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&$o(this,!0)},t.setRequestHeader=function(t,e){this.i.append(t,e)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(Vo,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h;return t&&t.log(Vo,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[];for(var e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},k(Qo,nn);var ta="";Qo.prototype.b=Go("goog.net.XhrIo");var ea=/^https?$/i,na=["POST","PUT"];function ia(e,t,n,i,r){if(e.a)throw Error("[goog.net.XhrIo] Object is active with another request="+e.l+"; newUri="+t);n=n?n.toUpperCase():"GET",e.l=t,e.h="",e.O=n,e.I=!1,e.c=!0,e.a=e.B?e.B.a():Eo.a(),e.w=e.B?_o(e.B):_o(Eo),e.a.onreadystatechange=I(e.Lb,e);try{Wo(e.b,fa(e,"Opening Xhr")),e.J=!0,e.a.open(n,String(t),!0),e.J=!1}catch(t){return Wo(e.b,fa(e,"Error opening Xhr: "+t.message)),void oa(e,t)}t=i||"";var o=new ln(e.headers);r&&function(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(v(t)||h(t))M(t,e,void 0);else for(var n=hn(t),i=cn(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(r,function(t,e){o.set(e,t)}),r=function(t){t:{for(var e=ra,n=t.length,i=h(t)?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return e<0?null:h(t)?t.charAt(e):t[e]}(o.X()),i=l.FormData&&t instanceof l.FormData,!V(na,n)||r||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(t,e){this.a.setRequestHeader(e,t)},e),e.m&&(e.a.responseType=e.m),"withCredentials"in e.a&&e.a.withCredentials!==e.P&&(e.a.withCredentials=e.P);try{ca(e),0<e.g&&(e.v=function(t){return me&&Ne(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(e.a),Wo(e.b,fa(e,"Will abort after "+e.g+"ms if incomplete, xhr2 "+e.v)),e.v?(e.a.timeout=e.g,e.a.ontimeout=I(e.Ia,e)):e.o=sn(e.Ia,e.g,e)),Wo(e.b,fa(e,"Sending request")),e.i=!0,e.a.send(t),e.i=!1}catch(t){Wo(e.b,fa(e,"Send error: "+t.message)),oa(e,t)}}function ra(t){return"content-type"==t.toLowerCase()}function oa(t,e){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=e,aa(t),ua(t)}function aa(t){t.I||(t.I=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function sa(e){if(e.c&&void 0!==u)if(e.w[1]&&4==ha(e)&&2==la(e))Wo(e.b,fa(e,"Local request error detected and ignored"));else if(e.i&&4==ha(e))sn(e.Lb,0,e);else if(e.dispatchEvent("readystatechange"),4==ha(e)){Wo(e.b,fa(e,"Request complete")),e.c=!1;try{var t,n=la(e);t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}if(!(t=i)){var r;if(r=0===n){var o=String(e.l).match(pn)[1]||null;if(!o&&l.self&&l.self.location){var a=l.self.location.protocol;o=a.substr(0,a.length-1)}r=!ea.test(o?o.toLowerCase():"")}t=r}if(t)e.dispatchEvent("complete"),e.dispatchEvent("success");else{try{var s=2<ha(e)?e.a.statusText:""}catch(t){Wo(e.b,"Can not get status: "+t.message),s=""}e.h=s+" ["+la(e)+"]",aa(e)}}finally{ua(e)}}}function ua(e,t){if(e.a){ca(e);var n=e.a,i=e.w[0]?d:null;e.a=null,e.w=null,t||e.dispatchEvent("ready");try{n.onreadystatechange=i}catch(t){(e=e.b)&&e.log(Uo,"Problem encountered resetting onreadystatechange: "+t.message,void 0)}}}function ca(t){t.a&&t.v&&(t.a.ontimeout=null),t.o&&(l.clearTimeout(t.o),t.o=null)}function ha(t){return t.a?t.a.readyState:0}function la(t){try{return 2<ha(t)?t.a.status:-1}catch(t){return-1}}function fa(t,e){return e+" ["+t.O+" "+t.l+" "+la(t)+"]"}function da(t){var e=ka;this.g=[],this.v=e,this.o=t||null,this.f=this.a=!1,this.c=void 0,this.u=this.w=this.i=!1,this.h=0,this.b=null,this.l=0}function pa(t,e,n){t.a=!0,t.c=n,t.f=!e,ba(t)}function va(t){if(t.a){if(!t.u)throw new ya(t);t.u=!1}}function ma(t,e,n,i){t.g.push([e,n,i]),t.a&&ba(t)}function ga(t){return U(t.g,function(t){return m(t[1])})}function ba(e){if(e.h&&e.a&&ga(e)){var n=e.h,i=Ta[n];i&&(l.clearTimeout(i.a),delete Ta[n]),e.h=0}e.b&&(e.b.l--,delete e.b),n=e.c;for(var t=i=!1;e.g.length&&!e.i;){var r=e.g.shift(),o=r[0],a=r[1];if(r=r[2],o=e.f?a:o)try{var s=o.call(r||e.o,n);void 0!==s&&(e.f=e.f&&(s==n||s instanceof Error),e.c=n=s),(A(n)||"function"==typeof l.Promise&&n instanceof l.Promise)&&(t=!0,e.i=!0)}catch(t){n=t,e.f=!0,ga(e)||(i=!0)}}e.c=n,t&&(s=I(e.m,e,!0),t=I(e.m,e,!1),n instanceof da?(ma(n,s,t),n.w=!0):n.then(s,t)),i&&(n=new Ia(n),Ta[n.a]=n,e.h=n.a)}function ya(){S.call(this)}function wa(){S.call(this)}function Ia(t){this.a=l.setTimeout(I(this.c,this),0),this.b=t}(t=Qo.prototype).Ia=function(){void 0!==u&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Wo(this.b,fa(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(Wo(this.b,fa(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ua(this))},t.za=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ua(this,!0)),Qo.qb.za.call(this)},t.Lb=function(){this.va||(this.J||this.i||this.f?sa(this):this.yc())},t.yc=function(){sa(this)},t.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case ta:case"text":return this.a.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b;return t&&t.log(Uo,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return Wo(this.b,"Can not get response: "+t.message),null}},da.prototype.cancel=function(t){if(this.a)this.c instanceof da&&this.c.cancel();else{if(this.b){var e=this.b;delete this.b,t?e.cancel(t):(e.l--,e.l<=0&&e.cancel())}this.v?this.v.call(this.o,this):this.u=!0,this.a||(t=new wa(this),va(this),pa(this,!1,t))}},da.prototype.m=function(t,e){this.i=!1,pa(this,t,e)},da.prototype.then=function(t,e,n){var i,r,o=new qt(function(t,e){i=t,r=e});return ma(this,i,function(t){t instanceof wa?o.cancel():r(t)}),o.then(t,e,n)},da.prototype.$goog_Thenable=!0,k(ya,S),ya.prototype.message="Deferred has already fired",ya.prototype.name="AlreadyCalledError",k(wa,S),wa.prototype.message="Deferred was canceled",wa.prototype.name="CanceledError",Ia.prototype.c=function(){throw delete Ta[this.a],this.b};var Ta={};function Ea(t){var e,n=document,i=et(t).toString(),r=document.createElement("SCRIPT"),o={Nb:r,Ia:void 0},a=new da(o);return e=window.setTimeout(function(){Aa(r,!0);var t=new Oa(Na,"Timeout reached for loading script "+i);va(a),pa(a,!1,t)},5e3),o.Ia=e,r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Aa(r,!1,e),va(a),pa(a,!0,null))},r.onerror=function(){Aa(r,!0,e);var t=new Oa(Sa,"Error while loading script "+i);va(a),pa(a,!1,t)},J(o={},{type:"text/javascript",charset:"UTF-8"}),Kn(r,o),function(t,e){L(t,"HTMLScriptElement"),t.src=et(e),null===f&&(f=(e=(e=l.document).querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&s.test(e)?e:""),(e=f)&&t.setAttribute("nonce",e)}(r,t),function(t){var e;return(e=(t||document).getElementsByTagName("HEAD"))&&0!=e.length?e[0]:t.documentElement}(n).appendChild(r),a}function ka(){if(this&&this.Nb){var t=this.Nb;t&&"SCRIPT"==t.tagName&&Aa(t,!0,this.Ia)}}function Aa(t,e,n){null!=n&&l.clearTimeout(n),t.onload=d,t.onerror=d,t.onreadystatechange=d,e&&window.setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},0)}var Sa=0,Na=1;function Oa(t,e){var n="Jsloader error (code #"+t+")";e&&(n+=": "+e),S.call(this,n),this.code=t}function _a(t){this.f=t}function Pa(t,e,n){if(this.c=t,t=e||{},this.l=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.u=t.secureTokenTimeout||Da,this.g=W(t.secureTokenHeaders||La),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.firebaseTimeout||xa,this.a=W(t.firebaseHeaders||Ma),n&&(this.a["X-Client-Version"]=n,this.g["X-Client-Version"]=n),n="Node"==ui(),!(n=l.XMLHttpRequest||n&&fl.INTERNAL.node&&fl.INTERNAL.node.XMLHttpRequest)&&!si())throw new Yi("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0,si()?this.f=new Xo(self):ci()?this.f=new _a(n):this.f=new Co,this.b=null}k(Oa,S),k(_a,Oo),_a.prototype.a=function(){return new this.f},_a.prototype.b=function(){return{}};var Ra,Ca="idToken",Da=new Oi(3e4,6e4),La={"Content-Type":"application/x-www-form-urlencoded"},xa=new Oi(3e4,6e4),Ma={"Content-Type":"application/json"};function ja(t,e){e?t.a["X-Firebase-Locale"]=e:delete t.a["X-Firebase-Locale"]}function Ua(t,e){e?(t.a["X-Client-Version"]=e,t.g["X-Client-Version"]=e):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function Va(t,e,n,i,r,o,a){(t=function(){var t=vi();return!((t=fi(t)!=li?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&t<30)&&(!me||!Ae||9<Ae)}()||si()?I(t.o,t):(Ra=Ra||new qt(function(t,e){!function(t,e){if(((window.gapi||{}).client||{}).request)t();else{l[Ka]=function(){((window.gapi||{}).client||{}).request?t():e(Error("CORS_UNSUPPORTED"))},function(t,e){ma(t,null,e,void 0)}(Ea(nt(Fa,{onload:Ka})),function(){e(Error("CORS_UNSUPPORTED"))})}}(t,e)}),I(t.m,t)))(e,n,i,r,o,a)}Pa.prototype.R=function(){return this.b},Pa.prototype.o=function(t,n,e,i,r,o){if(si()&&(void 0===l.fetch||void 0===l.Headers||void 0===l.Request))throw new Yi("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var a=new Qo(this.f);if(o){a.g=Math.max(0,o);var s=setTimeout(function(){a.dispatchEvent("timeout")},o)}rn(a,"complete",function(){s&&clearTimeout(s);var e=null;try{e=JSON.parse(function(e){try{return e.a?e.a.responseText:""}catch(t){return Wo(e.b,"Can not get responseText: "+t.message),""}}(this))||null}catch(t){e=null}n&&n(e)}),on(a,"ready",function(){s&&clearTimeout(s),le(this)}),on(a,"timeout",function(){s&&clearTimeout(s),le(this),n&&n(null)}),ia(a,t,e,i,r)};var Fa=new Y(Z,"https://apis.google.com/js/client.js?onload=%{onload}"),Ka="__fcb"+Math.floor(1e6*Math.random()).toString();function qa(t){if(!h(t=t.email)||!ii.test(t))throw new Yi("invalid-email")}function Ha(t){"email"in t&&qa(t)}function Ba(t){if(!t[Ca])throw new Yi("internal-error")}function Ga(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new Yi("internal-error")}else{if(!t.sessionInfo)throw new Yi("missing-verification-id");if(!t.code)throw new Yi("missing-verification-code")}}Pa.prototype.m=function(t,n,i,r,o){var a=this;Ra.then(function(){window.gapi.client.setApiKey(a.c);var e=window.gapi.auth.getToken();window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:i,body:r,headers:o,authType:"none",callback:function(t){window.gapi.auth.setToken(e),n&&n(t)}})}).s(function(t){n&&n({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})})},Pa.prototype.ob=function(){return Ns(this,bs,{})},Pa.prototype.rb=function(t,e){return Ns(this,ms,{idToken:t,email:e})},Pa.prototype.sb=function(t,e){return Ns(this,gs,{idToken:t,password:e})};var Wa={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};function Xa(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new Yi("internal-error")}function Ja(t,e){return e.oauthIdToken&&e.providerId&&0==e.providerId.indexOf("oidc.")&&!e.pendingToken&&(t.sessionId?e.nonce=t.sessionId:t.postBody&&(xn(t=new Rn(t.postBody),"nonce")&&(e.nonce=t.get("nonce")))),e}function Ya(t){var e=null;if(t.needConfirmation?(t.code="account-exists-with-different-credential",e=No(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",e=No(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",e=No(t)):t.errorMessage&&(e=Os(t.errorMessage)),e)throw e;if(!t[Ca])throw new Yi("internal-error")}function za(t,e){return e.returnIdpCredential=!0,Ns(t,ys,e)}function $a(t,e){return e.returnIdpCredential=!0,Ns(t,Is,e)}function Za(t,e){return e.returnIdpCredential=!0,e.autoCreate=!1,Ns(t,ws,e)}function Qa(t){if(!t.oobCode)throw new Yi("invalid-action-code")}(t=Pa.prototype).tb=function(t,i){var r={idToken:t},o=[];return B(Wa,function(t,e){var n=i[e];null===n?o.push(t):e in i&&(r[e]=n)}),o.length&&(r.deleteAttribute=o),Ns(this,ms,r)},t.kb=function(t,e){return J(t={requestType:"PASSWORD_RESET",email:t},e),Ns(this,ls,t)},t.lb=function(t,e){return J(t={requestType:"EMAIL_SIGNIN",email:t},e),Ns(this,cs,t)},t.jb=function(t,e){return J(t={requestType:"VERIFY_EMAIL",idToken:t},e),Ns(this,hs,t)},t.Wa=function(t){return Ns(this,ks,t)},t.ab=function(t,e){return Ns(this,ps,{oobCode:t,newPassword:e})},t.Ma=function(t){return Ns(this,es,{oobCode:t})},t.Ya=function(t){return Ns(this,ts,{oobCode:t})};var ts={endpoint:"setAccountInfo",D:Qa,fa:"email",F:!0},es={endpoint:"resetPassword",D:Qa,K:function(t){var e=t.requestType;if(!e||!t.email&&"EMAIL_SIGNIN"!=e)throw new Yi("internal-error")},F:!0},ns={endpoint:"signupNewUser",D:function(t){if(qa(t),!t.password)throw new Yi("weak-password")},K:Ba,T:!0,F:!0},is={endpoint:"createAuthUri",F:!0},rs={endpoint:"deleteAccount",V:["idToken"]},os={endpoint:"setAccountInfo",V:["idToken","deleteProvider"],D:function(t){if(!p(t.deleteProvider))throw new Yi("internal-error")}},as={endpoint:"emailLinkSignin",V:["email","oobCode"],D:qa,K:Ba,T:!0,F:!0},ss={endpoint:"emailLinkSignin",V:["idToken","email","oobCode"],D:qa,K:Ba,T:!0},us={endpoint:"getAccountInfo"},cs={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new Yi("internal-error");qa(t)},fa:"email",F:!0},hs={endpoint:"getOobConfirmationCode",V:["idToken","requestType"],D:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new Yi("internal-error")},fa:"email",F:!0},ls={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(t){if("PASSWORD_RESET"!=t.requestType)throw new Yi("internal-error");qa(t)},fa:"email",F:!0},fs={wb:!0,endpoint:"getProjectConfig",Kb:"GET"},ds={wb:!0,endpoint:"getRecaptchaParam",Kb:"GET",K:function(t){if(!t.recaptchaSiteKey)throw new Yi("internal-error")}},ps={endpoint:"resetPassword",D:Qa,fa:"email",F:!0},vs={endpoint:"sendVerificationCode",V:["phoneNumber","recaptchaToken"],fa:"sessionInfo",F:!0},ms={endpoint:"setAccountInfo",V:["idToken"],D:Ha,T:!0},gs={endpoint:"setAccountInfo",V:["idToken"],D:function(t){if(Ha(t),!t.password)throw new Yi("weak-password")},K:Ba,T:!0},bs={endpoint:"signupNewUser",K:Ba,T:!0,F:!0},ys={endpoint:"verifyAssertion",D:Xa,Ra:Ja,K:Ya,T:!0,F:!0},ws={endpoint:"verifyAssertion",D:Xa,Ra:Ja,K:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new Yi("user-not-found");if(t.errorMessage)throw Os(t.errorMessage);if(!t[Ca])throw new Yi("internal-error")},T:!0,F:!0},Is={endpoint:"verifyAssertion",D:function(t){if(Xa(t),!t.idToken)throw new Yi("internal-error")},Ra:Ja,K:Ya,T:!0},Ts={endpoint:"verifyCustomToken",D:function(t){if(!t.token)throw new Yi("invalid-custom-token")},K:Ba,T:!0,F:!0},Es={endpoint:"verifyPassword",D:function(t){if(qa(t),!t.password)throw new Yi("wrong-password")},K:Ba,T:!0,F:!0},ks={endpoint:"verifyPhoneNumber",D:Ga,K:Ba,F:!0},As={endpoint:"verifyPhoneNumber",D:function(t){if(!t.idToken)throw new Yi("internal-error");Ga(t)},K:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",No(t);Ba(t)}},Ss={Yb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Ga,K:Ba,F:!0};function Ns(t,e,n){if(!function(t,e){if(!e||!e.length)return!0;if(!t)return!1;for(var n=0;n<e.length;n++){var i=t[e[n]];if(null==i||""===i)return!1}return!0}(n,e.V))return zt(new Yi("internal-error"));var i,r=e.Kb||"POST";return Yt(n).then(e.D).then(function(){return e.T&&(n.returnSecureToken=!0),e.F&&t.b&&void 0===n.tenantId&&(n.tenantId=t.b),function(t,e,i,r,o,n){var a=In(t.h+e);yn(a,"key",t.c),n&&yn(a,"cb",E().toString());var s="GET"==i;if(s)for(var u in r)r.hasOwnProperty(u)&&yn(a,u,r[u]);return new qt(function(e,n){Va(t,a.toString(),function(t){t?t.error?n(_s(t,o||{})):e(t):n(new Yi("network-request-failed"))},i,s?void 0:Gn(Ei(r)),t.a,t.i.get())})}(t,e.endpoint,r,n,e.Yb,e.wb||!1)}).then(function(t){return i=t,e.Ra?e.Ra(n,i):i}).then(e.K).then(function(){if(!e.fa)return i;if(!(e.fa in i))throw new Yi("internal-error");return i[e.fa]})}function Os(t){return _s({error:{errors:[{message:t}],code:400,message:t}})}function _s(t,e){var n=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",i={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(n=i[n]?new Yi(i[n]):null)return n;for(var r in n=t.error&&t.error.message||"",J(i={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation"},e||{}),e=(e=n.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<e.length?e[1]:void 0,i)if(0===n.indexOf(r))return new Yi(i[r],e);return!e&&t&&(e=Ti(t)),new Yi("internal-error",e)}function Ps(t){this.b=t,this.a=null,this.gb=function(o){return(Ls=Ls||new qt(function(t,e){function n(){Ni(),mi("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Ni(),e(Error("Network Error"))},timeout:Cs.get()})}if(mi("gapi.iframes.Iframe"))t();else if(mi("gapi.load"))n();else{var i="__iframefcb"+Math.floor(1e6*Math.random()).toString();l[i]=function(){mi("gapi.load")?n():e(Error("Network Error"))},Yt(Ea(i=nt(Rs,{onload:i}))).s(function(){e(Error("Network Error"))})}}).s(function(t){throw Ls=null,t})).then(function(){return new qt(function(i,r){mi("gapi.iframes.getContext")().open({where:document.body,url:o.b,messageHandlersFilter:mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(t){function e(){clearTimeout(n),i()}o.a=t,o.a.restyle({setHideOnLeave:!1});var n=setTimeout(function(){r(Error("Network Error"))},Ds.get());t.ping(e).then(e,function(){r(Error("Network Error"))})})})})}(this)}var Rs=new Y(Z,"https://apis.google.com/js/api.js?onload=%{onload}"),Cs=new Oi(3e4,6e4),Ds=new Oi(5e3,15e3),Ls=null;function xs(t,e,n){this.i=t,this.g=e,this.h=n,this.f=null,this.a=Tn(this.i,"/__/auth/iframe"),yn(this.a,"apiKey",this.g),yn(this.a,"appName",this.h),this.b=null,this.c=[]}function Ms(t,e,n,i,r){this.o=t,this.m=e,this.c=n,this.u=i,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function js(t){try{return fl.app(t).auth().Ca()}catch(t){return[]}}function Us(t,e,n,i,r){this.u=t,this.f=e,this.b=n,this.c=i||null,this.h=r||null,this.m=this.o=this.v=null,this.g=[],this.l=this.a=null}function Vs(t){var s=$n();return function(t){return Ns(t,fs,{}).then(function(t){return t.authorizedDomains||[]})}(t).then(function(t){t:{var e=In(s),n=e.f;e=e.b;for(var i=0;i<t.length;i++){var r=t[i],o=e,a=n;if(o=0==r.indexOf("chrome-extension://")?In(r).b==o&&"chrome-extension"==a:("http"==a||"https"==a)&&(ni.test(r)?o==r:(r=r.split(".").join("\\."),new RegExp("^(.+\\."+r+"|"+r+")$","i").test(o)))){t=!0;break t}}t=!1}if(!t)throw new Ao($n())})}function Fs(r){return r.l||(r.l=ri().then(function(){if(!r.o){var t=r.c,e=r.h,n=js(r.b),i=new xs(r.u,r.f,r.b);i.f=t,i.b=e,i.c=H(n||[]),r.o=i.toString()}r.i=new Ps(r.o),function(i){if(!i.i)throw Error("IfcHandler must be initialized!");!function(t,e){t.gb.then(function(){t.a.register("authEvent",e,mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}(i.i,function(t){var e={};if(t&&t.authEvent){var n=!1;for(t=Io(t.authEvent),e=0;e<i.g.length;e++)n=i.g[e](t)||n;return(e={}).status=n?"ACK":"ERROR",Yt(e)}return e.status="ERROR",Yt(e)})}(r)})),r.l}function Ks(t){return t.m||(t.v=t.c?pi(t.c,js(t.b)):null,t.m=new Pa(t.f,Nr(t.h),t.v)),t.m}function qs(t,e,n,i,r,o,a,s,u,c,h){return(t=new Ms(t,e,n,i,r)).l=o,t.g=a,t.i=s,t.b=W(u||null),t.f=c,t.nb(h).toString()}function Hs(t){if(this.a=t||fl.INTERNAL.reactNative&&fl.INTERNAL.reactNative.AsyncStorage,!this.a)throw new Yi("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}function Bs(t){this.b=t,this.a={},this.f=I(this.c,this)}xs.prototype.toString=function(){return this.f?yn(this.a,"v",this.f):Ln(this.a.a,"v"),this.b?yn(this.a,"eid",this.b):Ln(this.a.a,"eid"),this.c.length?yn(this.a,"fw",this.c.join(",")):Ln(this.a.a,"fw"),this.a.toString()},Ms.prototype.nb=function(t){return this.h=t,this},Ms.prototype.toString=function(){var t=Tn(this.o,"/__/auth/handler");if(yn(t,"apiKey",this.m),yn(t,"appName",this.c),yn(t,"authType",this.u),this.a.isOAuthProvider){var e=this.a;try{var n=fl.app(this.c).auth().ha()}catch(t){n=null}for(var i in e.bb=n,yn(t,"providerId",this.a.providerId),n=Ei((e=this.a).zb))n[i]=n[i].toString();i=e.Fc,n=W(n);for(var r=0;r<i.length;r++){var o=i[r];o in n&&delete n[o]}e.eb&&e.bb&&!n[e.eb]&&(n[e.eb]=e.bb),G(n)||yn(t,"customParameters",Ti(n))}if("function"==typeof this.a.Hb&&((e=this.a.Hb()).length&&yn(t,"scopes",e.join(","))),this.l?yn(t,"redirectUrl",this.l):Ln(t.a,"redirectUrl"),this.g?yn(t,"eventId",this.g):Ln(t.a,"eventId"),this.i?yn(t,"v",this.i):Ln(t.a,"v"),this.b)for(var a in this.b)this.b.hasOwnProperty(a)&&!wn(t,a)&&yn(t,a,this.b[a]);return this.h?yn(t,"tid",this.h):Ln(t.a,"tid"),this.f?yn(t,"eid",this.f):Ln(t.a,"eid"),(a=js(this.c)).length&&yn(t,"fw",a.join(",")),t.toString()},(t=Us.prototype).Fb=function(e,n,t){var i=new Yi("popup-closed-by-user"),r=new Yi("web-storage-unsupported"),o=this,a=!1;return this.ia().then(function(){(function(t){var e={type:"webStorageSupport"};return Fs(t).then(function(){return function(e,n){return e.gb.then(function(){return new qt(function(t){e.a.send(n.type,n,t,mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}(t.i,e)}).then(function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport;throw Error()})})(o).then(function(t){t||(e&&ti(e),n(r),a=!0)})}).s(function(){}).then(function(){if(!a)return function(n){return new qt(function(e){return function t(){un(2e3).then(function(){if(n&&!n.closed)return t();e()})}()})}(e)}).then(function(){if(!a)return un(t).then(function(){n(i)})})},t.Ob=function(){var t=vi();return!Ii(t)&&!Si(t)},t.Jb=function(){return!1},t.Db=function(e,t,n,i,r,o,a,s){if(!e)return zt(new Yi("popup-blocked"));if(a&&!Ii())return this.ia().s(function(t){ti(e),r(t)}),i(),Yt();this.a||(this.a=Vs(Ks(this)));var u=this;return this.a.then(function(){var t=u.ia().s(function(t){throw ti(e),r(t),t});return i(),t}).then(function(){yo(n),a||Zn(qs(u.u,u.f,u.b,t,n,null,o,u.c,void 0,u.h,s),e)}).s(function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t})},t.Eb=function(t,e,n,i){this.a||(this.a=Vs(Ks(this)));var r=this;return this.a.then(function(){yo(e),Zn(qs(r.u,r.f,r.b,t,e,$n(),n,r.c,void 0,r.h,i))}).s(function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t})},t.ia=function(){var t=this;return Fs(this).then(function(){return t.i.gb}).s(function(){throw t.a=null,new Yi("network-request-failed")})},t.Rb=function(){return!0},t.Aa=function(t){this.g.push(t)},t.Na=function(e){K(this.g,function(t){return t==e})},(t=Hs.prototype).get=function(t){return Yt(this.a.getItem(t)).then(function(t){return t&&ki(t)})},t.set=function(t,e){return Yt(this.a.setItem(t,Ti(e)))},t.S=function(t){return Yt(this.a.removeItem(t))},t.$=function(){},t.ea=function(){};var Gs,Ws=[];function Xs(t,e,n){G(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[e]&&(t.a[e]=[]),t.a[e].push(n)}function Js(t){this.a=t}function Ys(t){this.c=t,this.b=!1,this.a=[]}function zs(i,t,e,n){var r,o,a,s,u=e||{},c=null;if(i.b)return zt(Error("connection_unavailable"));var h=n?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null;return new qt(function(e,n){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout(function(){n(Error("unsupported_event"))},h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout(function(){n(Error("timeout"))},3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?e(t.data.response):n(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),n(Error("invalid_response"))))}},i.a.push(c),l.port1.addEventListener("message",o),i.c.postMessage({eventType:t,eventId:r,data:u},[l.port2])):n(Error("connection_unavailable"))}).then(function(t){return $s(i,c),t}).s(function(t){throw $s(i,c),t})}function $s(t,e){if(e){var n=e.messageChannel,i=e.onMessage;n&&(n.port1.removeEventListener("message",i),n.port1.close()),K(t.a,function(t){return t==e})}}function Zs(){if(!eu())throw new Yi("web-storage-unsupported");this.c={},this.a=[],this.b=0,this.u=l.indexedDB,this.type="indexedDB",this.g=this.l=this.f=this.i=null,this.o=!1,this.h=null;var i=this;si()&&self?(this.l=function(){var e=si()?self:null;if(M(Ws,function(t){t.b==e&&(n=t)}),!n){var n=new Bs(e);Ws.push(n)}return n}(),Xs(this.l,"keyChanged",function(t,n){return au(i).then(function(e){return 0<e.length&&M(i.a,function(t){t(e)}),{keyProcessed:V(e,n.key)}})}),Xs(this.l,"ping",function(){return Yt(["keyChanged"])})):function(){var t=l.navigator;return t&&t.serviceWorker?Yt().then(function(){return t.serviceWorker.ready}).then(function(t){return t.active||null}).s(function(){return null}):Yt(null)}().then(function(t){(i.h=t)&&(i.g=new Ys(new Js(t)),zs(i.g,"ping",null,!0).then(function(t){t[0].fulfilled&&V(t[0].value,"keyChanged")&&(i.o=!0)}).s(function(){}))})}function Qs(i){return new qt(function(e,n){var t=i.u.open("firebaseLocalStorageDb",1);t.onerror=function(t){try{t.preventDefault()}catch(t){}n(Error(t.target.error))},t.onupgradeneeded=function(t){t=t.target.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}},t.onsuccess=function(t){(t=t.target.result).objectStoreNames.contains("firebaseLocalStorage")?e(t):function(i){return new qt(function(t,e){var n=i.u.deleteDatabase("firebaseLocalStorageDb");n.onsuccess=function(){t()},n.onerror=function(t){e(Error(t.target.error))}})}(i).then(function(){return Qs(i)}).then(function(t){e(t)}).s(function(t){n(t)})}})}function tu(t){return t.m||(t.m=Qs(t)),t.m}function eu(){try{return!!l.indexedDB}catch(t){return!1}}function nu(t){return t.objectStore("firebaseLocalStorage")}function iu(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly")}function ru(t){return new qt(function(e,n){t.onsuccess=function(t){t&&t.target?e(t.target.result):e()},t.onerror=function(t){n(t.target.error)}})}function ou(t,e){return t.g&&t.h&&function(){var t=l.navigator;return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?zs(t.g,"keyChanged",{key:e},t.o).then(function(){}).s(function(){}):Yt()}function au(i){return tu(i).then(function(t){var r=nu(iu(t,!1));return r.getAll?ru(r.getAll()):new qt(function(e,n){var i=[],t=r.openCursor();t.onsuccess=function(t){(t=t.target.result)?(i.push(t.value),t.continue()):e(i)},t.onerror=function(t){n(t.target.error)}})}).then(function(t){var e={},n=[];if(0==i.b){for(n=0;n<t.length;n++)e[t[n].fbase_key]=t[n].value;n=function t(e,n){var i,r=[];for(i in e)i in n?typeof e[i]!=typeof n[i]?r.push(i):"object"==typeof e[i]&&null!=e[i]&&null!=n[i]?0<t(e[i],n[i]).length&&r.push(i):e[i]!==n[i]&&r.push(i):r.push(i);for(i in n)i in e||r.push(i);return r}(i.c,e),i.c=e}return n})}function su(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function uu(t){var i=this,r=null;this.a=[],this.type="indexedDB",this.c=t,this.b=Yt().then(function(){if(eu()){var e=Ai(),n="__sak"+e;return Gs=Gs||new Zs,(r=Gs).set(n,e).then(function(){return r.get(n)}).then(function(t){if(t!==e)throw Error("indexedDB not supported!");return r.S(n)}).then(function(){return r}).s(function(){return i.c})}return i.c}).then(function(t){return i.type=t.type,t.$(function(e){M(i.a,function(t){t(e)})}),t})}function cu(){this.a={},this.type="inMemory"}function hu(){if(!function(){var t="Node"==ui();if(!(t=lu()||t&&fl.INTERNAL.node&&fl.INTERNAL.node.localStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==ui())throw new Yi("internal-error","The LocalStorage compatibility library was not found.");throw new Yi("web-storage-unsupported")}this.a=lu()||fl.INTERNAL.node.localStorage,this.type="localStorage"}function lu(){try{var t=l.localStorage,e=Ai();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function fu(){this.type="nullStorage"}function du(){if(!function(){var t="Node"==ui();if(!(t=pu()||t&&fl.INTERNAL.node&&fl.INTERNAL.node.sessionStorage))return!1;try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==ui())throw new Yi("internal-error","The SessionStorage compatibility library was not found.");throw new Yi("web-storage-unsupported")}this.a=pu()||fl.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function pu(){try{var t=l.sessionStorage,e=Ai();return t&&(t.setItem(e,"1"),t.removeItem(e)),t}catch(t){return null}}function vu(){var t={};t.Browser=bu,t.Node=yu,t.ReactNative=wu,t.Worker=Iu,this.a=t[ui()]}Bs.prototype.c=function(n){var i=n.data.eventType,r=n.data.eventId,t=this.a[i];if(t&&0<t.length){n.ports[0].postMessage({status:"ack",eventId:r,eventType:i,response:null});var e=[];M(t,function(t){e.push(Yt().then(function(){return t(n.origin,n.data.data)}))}),Zt(e).then(function(t){var e=[];M(t,function(t){e.push({fulfilled:t.Gb,value:t.value,reason:t.reason?t.reason.message:void 0})}),M(e,function(t){for(var e in t)void 0===t[e]&&delete t[e]}),n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:e})})}},Js.prototype.postMessage=function(t,e){this.a.postMessage(t,e)},Ys.prototype.close=function(){for(;0<this.a.length;)$s(this,this.a[0]);this.b=!0},(t=Zs.prototype).set=function(n,i){var r,o=!1,a=this;return tu(this).then(function(t){return ru((t=nu(iu(r=t,!0))).get(n))}).then(function(t){var e=nu(iu(r,!0));return t?(t.value=i,ru(e.put(t))):(a.b++,o=!0,(t={}).fbase_key=n,t.value=i,ru(e.add(t)))}).then(function(){return a.c[n]=i,ou(a,n)}).ka(function(){o&&a.b--})},t.get=function(e){return tu(this).then(function(t){return ru(nu(iu(t,!1)).get(e))}).then(function(t){return t&&t.value})},t.S=function(e){var n=!1,i=this;return tu(this).then(function(t){return n=!0,i.b++,ru(nu(iu(t,!0)).delete(e))}).then(function(){return delete i.c[e],ou(i,e)}).ka(function(){n&&i.b--})},t.$=function(t){0==this.a.length&&function(t){su(t),function e(){t.f=setTimeout(function(){t.i=au(t).then(function(e){0<e.length&&M(t.a,function(t){t(e)})}).then(function(){e()}).s(function(t){"STOP_EVENT"!=t.message&&e()})},800)}()}(this),this.a.push(t)},t.ea=function(e){K(this.a,function(t){return t==e}),0==this.a.length&&su(this)},(t=uu.prototype).get=function(e){return this.b.then(function(t){return t.get(e)})},t.set=function(e,n){return this.b.then(function(t){return t.set(e,n)})},t.S=function(e){return this.b.then(function(t){return t.S(e)})},t.$=function(t){this.a.push(t)},t.ea=function(e){K(this.a,function(t){return t==e})},(t=cu.prototype).get=function(t){return Yt(this.a[t])},t.set=function(t,e){return this.a[t]=e,Yt()},t.S=function(t){return delete this.a[t],Yt()},t.$=function(){},t.ea=function(){},(t=hu.prototype).get=function(t){var e=this;return Yt().then(function(){return ki(e.a.getItem(t))})},t.set=function(e,n){var i=this;return Yt().then(function(){var t=Ti(n);null===t?i.S(e):i.a.setItem(e,t)})},t.S=function(t){var e=this;return Yt().then(function(){e.a.removeItem(t)})},t.$=function(t){l.window&&Be(l.window,"storage",t)},t.ea=function(t){l.window&&Xe(l.window,"storage",t)},(t=fu.prototype).get=function(){return Yt(null)},t.set=function(){return Yt()},t.S=function(){return Yt()},t.$=function(){},t.ea=function(){},(t=du.prototype).get=function(t){var e=this;return Yt().then(function(){return ki(e.a.getItem(t))})},t.set=function(e,n){var i=this;return Yt().then(function(){var t=Ti(n);null===t?i.S(e):i.a.setItem(e,t)})},t.S=function(t){var e=this;return Yt().then(function(){e.a.removeItem(t)})},t.$=function(){},t.ea=function(){};var mu,gu,bu={C:hu,Ta:du},yu={C:hu,Ta:du},wu={C:Hs,Ta:fu},Iu={C:hu,Ta:fu},Tu={ad:"local",NONE:"none",cd:"session"};function Eu(){var t=!(Si(vi())||!ai()),e=Ii(),n=gi();this.m=t,this.h=e,this.l=n,this.a={},t=mu=mu||new vu;try{this.g=!zn()&&Ri()||!l.indexedDB?new t.a.C:new uu(si()?new cu:new t.a.C)}catch(t){this.g=new cu,this.h=!0}try{this.i=new t.a.Ta}catch(t){this.i=new cu}this.u=new cu,this.f=I(this.Pb,this),this.b={}}function ku(){return gu=gu||new Eu}function Au(t,e){switch(e){case"session":return t.i;case"none":return t.u;default:return t.g}}function Su(t,e){return"firebase:"+t.name+(e?":"+e:"")}function Nu(t,e,n){return n=Su(e,n),"local"==e.C&&(t.b[n]=null),Au(t,e.C).S(n)}function Ou(t){t.c&&(clearInterval(t.c),t.c=null)}function _u(t){this.a=t,this.b=ku()}(t=Eu.prototype).get=function(t,e){return Au(this,t.C).get(Su(t,e))},t.set=function(e,t,n){var i=Su(e,n),r=this,o=Au(this,e.C);return o.set(i,t).then(function(){return o.get(i)}).then(function(t){"local"==e.C&&(r.b[i]=t)})},t.addListener=function(t,e,n){t=Su(t,e),this.l&&(this.b[t]=l.localStorage.getItem(t)),G(this.a)&&(Au(this,"local").$(this.f),this.h||(zn()||!Ri())&&l.indexedDB||!this.l||function(i){Ou(i),i.c=setInterval(function(){for(var t in i.a){var e=l.localStorage.getItem(t),n=i.b[t];e!=n&&(i.b[t]=e,e=new De({type:"storage",key:t,target:window,oldValue:n,newValue:e,a:!0}),i.Pb(e))}},1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(n)},t.removeListener=function(t,e,n){t=Su(t,e),this.a[t]&&(K(this.a[t],function(t){return t==n}),0==this.a[t].length&&delete this.a[t]),G(this.a)&&(Au(this,"local").ea(this.f),Ou(this))},t.Pb=function(t){if(t&&t.f){var e=t.a.key;if(null==e)for(var n in this.a){var i=this.b[n];void 0===i&&(i=null);var r=l.localStorage.getItem(n);r!==i&&(this.b[n]=r,this.$a(n))}else if(0==e.indexOf("firebase:")&&this.a[e]){if(void 0!==t.a.a?Au(this,"local").ea(this.f):Ou(this),this.m)if(n=l.localStorage.getItem(e),(i=t.a.newValue)!==n)null!==i?l.localStorage.setItem(e,i):l.localStorage.removeItem(e);else if(this.b[e]===i&&void 0===t.a.a)return;var o=this;n=function(){void 0===t.a.a&&o.b[e]===l.localStorage.getItem(e)||(o.b[e]=l.localStorage.getItem(e),o.$a(e))},me&&Ae&&10==Ae&&l.localStorage.getItem(e)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(n,10):n()}}else M(t,I(this.$a,this))},t.$a=function(t){this.a[t]&&M(this.a[t],function(t){t()})};var Pu,Ru={name:"authEvent",C:"local"};function Cu(){this.a=ku()}function Du(t,e){this.b=Lu,this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=e,this.l=l.Int32Array?new Int32Array(64):Array(64),void 0!==Pu||(Pu=l.Int32Array?new Int32Array(Ku):Ku),this.reset()}k(Du,function(){this.b=-1});for(var Lu=64,xu=Lu-1,Mu=[],ju=0;ju<xu;ju++)Mu[ju]=0;var Uu=q(128,Mu);function Vu(t){for(var e=t.f,n=t.l,i=0,r=0;r<e.length;)n[i++]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r=4*i;for(e=16;e<64;e++){r=0|n[e-15],i=0|n[e-2];var o=(0|n[e-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|n[e-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0;n[e]=o+a|0}i=0|t.a[0],r=0|t.a[1];var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6];for(o=0|t.a[7],e=0;e<64;e++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0;a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|Pu[e])|0)+(0|n[e])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function Fu(t,e,n){void 0===n&&(n=e.length);var i=0,r=t.c;if(h(e))for(;i<n;)t.f[r++]=e.charCodeAt(i++),r==t.b&&(Vu(t),r=0);else{if(!v(e))throw Error("message must be string or array");for(;i<n;){var o=e[i++];if(!("number"==typeof o&&0<=o&&o<=255&&o==(0|o)))throw Error("message must be a byte array");t.f[r++]=o,r==t.b&&(Vu(t),r=0)}}t.c=r,t.g+=n}Du.prototype.reset=function(){this.g=this.c=0,this.a=l.Int32Array?new Int32Array(this.h):H(this.h)};var Ku=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function qu(){Du.call(this,8,Hu)}k(qu,Du);var Hu=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Bu(t,e,n,i,r){this.u=t,this.i=e,this.l=n,this.m=i||null,this.o=r||null,this.h=e+":"+n,this.v=new Cu,this.g=new _u(this.h),this.f=null,this.b=[],this.a=this.c=null}function Gu(t){return new Yi("invalid-cordova-configuration",t)}function Wu(t){var e=new qu;Fu(e,t),t=[];var n=8*e.g;e.c<56?Fu(e,Uu,56-e.c):Fu(e,Uu,e.b-(e.c-56));for(var i=63;56<=i;i--)e.f[i]=255&n,n/=256;for(Vu(e),i=n=0;i<e.i;i++)for(var r=24;0<=r;r-=8)t[n++]=e.a[i]>>r&255;return function(t){return j(t,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join("")}(t)}function Xu(t,e){for(var n=0;n<t.b.length;n++)try{t.b[n](e)}catch(t){}}function Ju(i){return i.f||(i.f=i.ia().then(function(){return new qt(function(n){i.Aa(function t(e){return n(e),i.Na(t),!1}),function(r){function e(i){t=!0,n&&n.cancel(),Yu(r).then(function(t){var e=o;if(t&&i&&i.url){var n=null;-1!=(e=Kr(i.url)).indexOf("/__/auth/callback")&&(n=(n="object"==typeof(n=ki(wn(n=In(e),"firebaseError")||null))?zi(n):null)?new wo(t.c,t.b,null,null,n,null,t.R()):new wo(t.c,t.b,e,t.f,null,null,t.R())),e=n||o}Xu(r,e)})}var o=new wo("unknown",null,null,null,new Yi("no-auth-event")),t=!1,n=un(500).then(function(){return Yu(r).then(function(){t||Xu(r,o)})}),i=l.handleOpenURL;l.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(mi("BuildInfo.packageName",l).toLowerCase()+"://")&&e({url:t}),"function"==typeof i)try{i(t)}catch(t){console.error(t)}},ko=ko||new To,function(t){var n=ko;n.a.push(t),n.b||(n.b=function(t){for(var e=0;e<n.a.length;e++)n.a[e](t)},"function"==typeof(t=mi("universalLinks.subscribe",l))&&t(null,n.b))}(e)}(i)})})),i.f}function Yu(e){var n=null;return function(t){return t.b.get(Ru,t.a).then(function(t){return Io(t)})}(e.g).then(function(t){return n=t,Nu((t=e.g).b,Ru,t.a)}).then(function(){return n})}function zu(t){this.a=t,this.b=ku()}(t=Bu.prototype).ia=function(){return this.Da?this.Da:this.Da=(oi(void 0)?ri().then(function(){return new qt(function(t,e){var n=l.document,i=setTimeout(function(){e(Error("Cordova framework is not ready."))},1e3);n.addEventListener("deviceready",function(){clearTimeout(i),t()},!1)})}):zt(Error("Cordova must run in an Android or iOS file scheme."))).then(function(){if("function"!=typeof mi("universalLinks.subscribe",l))throw Gu("cordova-universal-links-plugin-fix is not installed");if(void 0===mi("BuildInfo.packageName",l))throw Gu("cordova-plugin-buildinfo is not installed");if("function"!=typeof mi("cordova.plugins.browsertab.openUrl",l))throw Gu("cordova-plugin-browsertab is not installed");if("function"!=typeof mi("cordova.InAppBrowser.open",l))throw Gu("cordova-plugin-inappbrowser is not installed")},function(){throw new Yi("cordova-not-ready")})},t.Fb=function(t,e){return e(new Yi("operation-not-supported-in-this-environment")),Yt()},t.Db=function(){return zt(new Yi("operation-not-supported-in-this-environment"))},t.Rb=function(){return!1},t.Ob=function(){return!0},t.Jb=function(){return!0},t.Eb=function(t,e,n,i){if(this.c)return zt(new Yi("redirect-operation-pending"));var r=this,o=l.document,a=null,s=null,u=null,c=null;return this.c=Yt().then(function(){return yo(e),Ju(r)}).then(function(){return function(n,t,e,i,r){var o=function(){for(var t=20,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}(),a=new wo(t,i,null,o,new Yi("no-auth-event"),null,r),s=mi("BuildInfo.packageName",l);if("string"!=typeof s)throw new Yi("invalid-cordova-configuration");var u=mi("BuildInfo.displayName",l),c={};if(vi().toLowerCase().match(/iphone|ipad|ipod/))c.ibi=s;else{if(!vi().toLowerCase().match(/android/))return zt(new Yi("operation-not-supported-in-this-environment"));c.apn=s}u&&(c.appDisplayName=u),o=Wu(o),c.sessionId=o;var h=qs(n.u,n.i,n.l,t,e,null,i,n.m,c,n.o,r);return n.ia().then(function(){var t=n.h;return n.v.a.set(Ru,a.A(),t)}).then(function(){var t=mi("cordova.plugins.browsertab.isAvailable",l);if("function"!=typeof t)throw new Yi("invalid-cordova-configuration");var e=null;t(function(t){if(t){if("function"!=typeof(e=mi("cordova.plugins.browsertab.openUrl",l)))throw new Yi("invalid-cordova-configuration");e(h)}else{if("function"!=typeof(e=mi("cordova.InAppBrowser.open",l)))throw new Yi("invalid-cordova-configuration");t=vi(),n.a=e(h,t.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}})})}(r,t,e,n,i)}).then(function(){return new qt(function(e,t){s=function(){var t=mi("cordova.plugins.browsertab.close",l);return e(),"function"==typeof t&&t(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.Aa(s),u=function(){a=a||un(2e3).then(function(){t(new Yi("redirect-cancelled-by-user"))})},c=function(){_i()&&u()},o.addEventListener("resume",u,!1),vi().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",c,!1)}).s(function(t){return Yu(r).then(function(){throw t})})}).ka(function(){u&&o.removeEventListener("resume",u,!1),c&&o.removeEventListener("visibilitychange",c,!1),a&&a.cancel(),s&&r.Na(s),r.c=null})},t.Aa=function(e){this.b.push(e),Ju(this).s(function(t){"auth/invalid-cordova-configuration"===t.code&&(t=new wo("unknown",null,null,null,new Yi("no-auth-event")),e(t))})},t.Na=function(e){K(this.b,function(t){return t==e})};var $u={name:"pendingRedirect",C:"session"};function Zu(t){return Nu(t.b,$u,t.a)}function Qu(t,e,n){this.i={},this.v=0,this.B=t,this.u=e,this.m=n,this.h=[],this.f=!1,this.l=I(this.o,this),this.b=new dc,this.w=new bc,this.g=new zu(this.u+":"+this.m),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.w,this.c.linkViaPopup=this.w,this.c.reauthViaPopup=this.w,this.a=tc(this.B,this.u,this.m,Ar)}function tc(t,e,n,i){var r=fl.SDK_VERSION||null;return oi()?new Bu(t,e,n,r,i):new Us(t,e,n,r,i)}function ec(e){e.f||(e.f=!0,e.a.Aa(e.l));var n=e.a;return e.a.ia().s(function(t){throw e.a==n&&e.reset(),t})}function nc(n){n.a.Ob()&&ec(n).s(function(t){var e=new wo("unknown",null,null,null,new Yi("operation-not-supported-in-this-environment"));uc(t)&&n.o(e)}),n.a.Jb()||pc(n.b)}function ic(n,t){V(n.h,t)||n.h.push(t),n.f||function(t){return t.b.get($u,t.a).then(function(t){return"pending"==t})}(n.g).then(function(t){t?Zu(n.g).then(function(){ec(n).s(function(t){var e=new wo("unknown",null,null,null,new Yi("operation-not-supported-in-this-environment"));uc(t)&&n.o(e)})}):nc(n)}).s(function(){nc(n)})}function rc(t,e){K(t.h,function(t){return t==e})}Qu.prototype.reset=function(){this.f=!1,this.a.Na(this.l),this.a=tc(this.B,this.u,this.m),this.i={}},Qu.prototype.o=function(t){if(!t)throw new Yi("invalid-auth-event");if(6e5<=E()-this.v&&(this.i={},this.v=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1;for(var e=!1,n=0;n<this.h.length;n++){var i=this.h[n];if(i.xb(t.c,t.b)){(e=this.c[t.c])&&(e.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.v=E())),e=!0;break}}return pc(this.b),e};var oc=new Oi(2e3,1e4),ac=new Oi(3e4,6e4);function sc(t,e,n,i,r,o,a){return t.a.Db(e,n,i,function(){t.f||(t.f=!0,t.a.Aa(t.l))},function(){t.reset()},r,o,a)}function uc(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function cc(e,t,n,i,r){var o;return function(t){return t.b.set($u,"pending",t.a)}(e.g).then(function(){return e.a.Eb(t,n,i,r).s(function(t){if(uc(t))throw new Yi("operation-not-supported-in-this-environment");return o=t,Zu(e.g).then(function(){throw o})}).then(function(){return e.a.Rb()?new qt(function(){}):Zu(e.g).then(function(){return e.oa()}).then(function(){}).s(function(){})})})}function hc(t,e,n,i,r){return t.a.Fb(i,function(t){e.ja(n,null,t,r)},oc.get())}Qu.prototype.oa=function(){return this.b.oa()};var lc={};function fc(t,e,n){var i=e+":"+n;return lc[i]||(lc[i]=new Qu(t,e,n)),lc[i]}function dc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function pc(t){t.g||(t.g=!0,gc(t,!1,null,null))}function vc(t){t.g&&!t.i&&gc(t,!1,null,null)}function mc(t,e){if(t.b=function(){return Yt(e)},t.f.length)for(var n=0;n<t.f.length;n++)t.f[n](e)}function gc(t,e,n,i){e?i?function(t,e){if(t.b=function(){return zt(e)},t.c.length)for(var n=0;n<t.c.length;n++)t.c[n](e)}(t,i):mc(t,n):mc(t,{user:null}),t.f=[],t.c=[]}function bc(){}function yc(){this.vb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.vb},set:function(t){this.vb=t},enumerable:!1})}function wc(t,e){this.a=e,Mi(this,"verificationId",t)}function Ic(t,e,n,i){return new mo(t).Wa(e,n).then(function(t){return new wc(t,i)})}function Tc(t){var e=kr(t);if(!(e&&e.exp&&e.auth_time&&e.iat))throw new Yi("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");ji(this,{token:t,expirationTime:Pi(1e3*e.exp),authTime:Pi(1e3*e.auth_time),issuedAtTime:Pi(1e3*e.iat),signInProvider:e.firebase&&e.firebase.sign_in_provider?e.firebase.sign_in_provider:null,claims:e})}function Ec(t,e,n){if(this.h=t,this.i=e,this.g=n,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function kc(t,e){return e?(t.a=t.c,t.g()):(e=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),e)}function Ac(t){this.f=t,this.b=this.a=null,this.c=0}function Sc(t,e){var n=e[Ca],i=e.refreshToken;e=Nc(e.expiresIn),t.b=n,t.c=e,t.a=i}function Nc(t){return E()+1e3*parseInt(t,10)}function Oc(e,t){return function(t,i){return new qt(function(e,n){"refresh_token"==i.grant_type&&i.refresh_token||"authorization_code"==i.grant_type&&i.code?Va(t,t.l+"?key="+encodeURIComponent(t.c),function(t){t?t.error?n(_s(t)):t.access_token&&t.refresh_token?e(t):n(new Yi("internal-error")):n(new Yi("network-request-failed"))},"POST",Dn(i).toString(),t.g,t.u.get()):n(new Yi("internal-error"))})}(e.f,t).then(function(t){return e.b=t.access_token,e.c=Nc(t.expires_in),e.a=t.refresh_token,{accessToken:e.b,expirationTime:e.c,refreshToken:e.a}}).s(function(t){throw"auth/user-token-expired"==t.code&&(e.a=null),t})}function _c(t,e){this.a=t||null,this.b=e||null,ji(this,{lastSignInTime:Pi(e||null),creationTime:Pi(t||null)})}function Pc(t,e,n,i,r,o){ji(this,{uid:t,displayName:i||null,photoURL:r||null,email:n||null,phoneNumber:o||null,providerId:e})}function Rc(t,e){for(var n in Ce.call(this,t),e)this[n]=e[n]}function Cc(t,e,n){this.I=[],this.l=t.apiKey,this.m=t.appName,this.o=t.authDomain||null,t=fl.SDK_VERSION?pi(fl.SDK_VERSION):null,this.a=new Pa(this.l,Nr(Ar),t),this.b=new Ac(this.a),Vc(this,e[Ca]),Sc(this.b,e),Mi(this,"refreshToken",this.b.a),qc(this,n||{}),nn.call(this),this.J=!1,this.o&&bi()&&(this.i=fc(this.o,this.l,this.m)),this.O=[],this.h=null,this.w=function(e){return new Ec(function(){return e.G(!0)},function(t){return!(!t||"auth/network-request-failed"!=t.code)},function(){var t=e.b.c-E()-3e5;return 0<t?t:0})}(this),this.W=I(this.Ja,this);var i=this;this.ga=null,this.xa=function(t){i.ua(t.g)},this.Z=null,this.P=[],this.wa=function(t){Lc(i,t.c)},this.Y=null}function Dc(t,e){t.Z&&Xe(t.Z,"languageCodeChanged",t.xa),(t.Z=e)&&Be(e,"languageCodeChanged",t.xa)}function Lc(t,e){t.P=e,Ua(t.a,fl.SDK_VERSION?pi(fl.SDK_VERSION,t.P):null)}function xc(t,e){t.Y&&Xe(t.Y,"frameworkChanged",t.wa),(t.Y=e)&&Be(e,"frameworkChanged",t.wa)}function Mc(e){try{return fl.app(e.m).auth()}catch(t){throw new Yi("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+e.m+"'!")}}function jc(t){t.B||t.w.b||(t.w.start(),Xe(t,"tokenChanged",t.W),Be(t,"tokenChanged",t.W))}function Uc(t){Xe(t,"tokenChanged",t.W),t.w.stop()}function Vc(t,e){t.ma=e,Mi(t,"_lat",e)}function Fc(t){for(var e=[],n=0;n<t.O.length;n++)e.push(t.O[n](t));return Zt(e).then(function(){return t})}function Kc(t){t.i&&!t.J&&(t.J=!0,ic(t.i,t))}function qc(t,e){ji(t,{uid:e.uid,displayName:e.displayName||null,photoURL:e.photoURL||null,email:e.email||null,emailVerified:e.emailVerified||!1,phoneNumber:e.phoneNumber||null,isAnonymous:e.isAnonymous||!1,tenantId:e.tenantId||null,metadata:new _c(e.createdAt,e.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Hc(){}function Bc(t){return Yt().then(function(){if(t.B)throw new Yi("app-deleted")})}function Gc(t){return j(t.providerData,function(t){return t.providerId})}function Wc(t,e){e&&(Xc(t,e.providerId),t.providerData.push(e))}function Xc(t,e){K(t.providerData,function(t){return t.providerId==e})}function Jc(t,e,n){("uid"!=e||n)&&t.hasOwnProperty(e)&&Mi(t,e,n)}function Yc(e,t){e!=t&&(ji(e,{uid:t.uid,displayName:t.displayName,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified,phoneNumber:t.phoneNumber,isAnonymous:t.isAnonymous,tenantId:t.tenantId,providerData:[]}),t.metadata?Mi(e,"metadata",function(t){return new _c(t.a,t.b)}(t.metadata)):Mi(e,"metadata",new _c),M(t.providerData,function(t){Wc(e,t)}),function(t,e){t.b=e.b,t.a=e.a,t.c=e.c}(e.b,t.b),Mi(e,"refreshToken",e.b.a))}function zc(n){return n.G().then(function(t){var e=n.isAnonymous;return function(t,e){return Ns(t.a,us,{idToken:e}).then(I(t.zc,t))}(n,t).then(function(){return e||Jc(n,"isAnonymous",!1),t})})}function $c(t,e){e[Ca]&&t.ma!=e[Ca]&&(Sc(t.b,e),t.dispatchEvent(new Rc("tokenChanged")),Vc(t,e[Ca]),Jc(t,"refreshToken",t.b.a))}function Zc(t,e){return zc(t).then(function(){if(V(Gc(t),e))return Fc(t).then(function(){throw new Yi("provider-already-linked")})})}function Qc(t,e,n){return Ui({user:t,credential:bo(e),additionalUserInfo:e=Cr(e),operationType:n})}function th(t,e){return $c(t,e),t.reload().then(function(){return t})}function eh(n,i,t,e,r){if(!bi())return zt(new Yi("operation-not-supported-in-this-environment"));if(n.h&&!r)return zt(n.h);var o=Rr(t.providerId),a=Ai(n.uid+":::"),s=null;(!Ii()||ai())&&n.o&&t.isOAuthProvider&&(s=qs(n.o,n.l,n.m,i,t,null,a,fl.SDK_VERSION||null,null,null,n.tenantId));var u=ei(s,o&&o.sa,o&&o.ra);return e=e().then(function(){if(ih(n),!r)return n.G().then(function(){})}).then(function(){return sc(n.i,u,i,t,a,!!s,n.tenantId)}).then(function(){return new qt(function(t,e){n.ja(i,null,new Yi("cancelled-popup-request"),n.g||null),n.f=t,n.v=e,n.g=a,n.c=hc(n.i,n,i,u,a)})}).then(function(t){return u&&ti(u),t?Ui(t):null}).s(function(t){throw u&&ti(u),t}),rh(n,e,r)}function nh(e,t,n,i,r){if(!bi())return zt(new Yi("operation-not-supported-in-this-environment"));if(e.h&&!r)return zt(e.h);var o=null,a=Ai(e.uid+":::");return i=i().then(function(){if(ih(e),!r)return e.G().then(function(){})}).then(function(){return e.ca=a,Fc(e)}).then(function(t){return e.da&&(t=(t=e.da).b.set(sh,e.A(),t.a)),t}).then(function(){return cc(e.i,t,n,a,e.tenantId)}).s(function(t){if(o=t,e.da)return uh(e.da);throw o}).then(function(){if(o)throw o}),rh(e,i,r)}function ih(t){if(!t.i||!t.J){if(t.i&&!t.J)throw new Yi("internal-error");throw new Yi("auth-domain-config-required")}}function rh(t,e,n){var i=function(e,t,n){return e.h&&!n?(t.cancel(),zt(e.h)):t.s(function(t){throw!t||"auth/user-disabled"!=t.code&&"auth/user-token-expired"!=t.code||(e.h||e.dispatchEvent(new Rc("userInvalidated")),e.h=t),t})}(t,e,n);return t.I.push(i),i.ka(function(){F(t.I,i)}),i}function oh(t){if(!t.apiKey)return null;var e={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName},n={};if(!(t.stsTokenManager&&t.stsTokenManager.accessToken&&t.stsTokenManager.expirationTime))return null;n[Ca]=t.stsTokenManager.accessToken,n.refreshToken=t.stsTokenManager.refreshToken||null,n.expiresIn=(t.stsTokenManager.expirationTime-E())/1e3;var i=new Cc(e,n,t);return t.providerData&&M(t.providerData,function(t){t&&Wc(i,Ui(t))}),t.redirectEventId&&(i.ca=t.redirectEventId),i}function ah(t){this.a=t,this.b=ku()}dc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},dc.prototype.h=function(t,e){if(t){this.reset(),this.g=!0;var n=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code;this.i=!(!r&&!o),"unknown"!=n||r||o?t.a?(gc(this,!0,null,t.a),Yt()):e.Ba(n,i)?function(e,t,n){n=n.Ba(t.c,t.b);var i=t.g,r=t.f,o=t.i,a=t.R(),s=!!t.c.match(/Redirect$/);n(i,r,a,o).then(function(t){gc(e,s,t,null)}).s(function(t){gc(e,s,null,t)})}(this,t,e):zt(new Yi("invalid-auth-event")):(gc(this,!1,null,null),Yt())}else zt(new Yi("invalid-auth-event"))},dc.prototype.oa=function(){var n=this;return new qt(function(t,e){n.b?n.b().then(t,e):(n.f.push(t),n.c.push(e),function(t){var e=new Yi("timeout");t.a&&t.a.cancel(),t.a=un(ac.get()).then(function(){t.b||(t.g=!0,gc(t,!0,null,e))})}(n))})},bc.prototype.h=function(t,e){if(t){var n=t.c,i=t.b;t.a?(e.ja(t.c,null,t.a,t.b),Yt()):e.Ba(n,i)?function(t,e){var n=t.b,i=t.c;e.Ba(i,n)(t.g,t.f,t.R(),t.i).then(function(t){e.ja(i,t,null,n)}).s(function(t){e.ja(i,null,t,n)})}(t,e):zt(new Yi("invalid-auth-event"))}else zt(new Yi("invalid-auth-event"))},wc.prototype.confirm=function(t){return t=go(this.verificationId,t),this.a(t)},Ec.prototype.start=function(){this.a=this.c,function e(n,t){n.stop();n.b=un(kc(n,t)).then(function(){return e=l.document,n=null,_i()||!e?Yt():new qt(function(t){n=function(){_i()&&(e.removeEventListener("visibilitychange",n,!1),t())},e.addEventListener("visibilitychange",n,!1)}).s(function(t){throw e.removeEventListener("visibilitychange",n,!1),t});var e,n}).then(function(){return n.h()}).then(function(){e(n,!0)}).s(function(t){n.i(t)&&e(n,!1)})}(this,!0)},Ec.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},Ac.prototype.A=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}},Ac.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?zt(new Yi("user-token-expired")):t||!this.b||E()>this.c-3e4?this.a?Oc(this,{grant_type:"refresh_token",refresh_token:this.a}):Yt(null):Yt({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})},_c.prototype.A=function(){return{lastLoginAt:this.b,createdAt:this.a}},k(Rc,Ce),k(Cc,nn),Cc.prototype.ua=function(t){this.ga=t,ja(this.a,t)},Cc.prototype.ha=function(){return this.ga},Cc.prototype.Ca=function(){return H(this.P)},Cc.prototype.Ja=function(){this.w.b&&(this.w.stop(),this.w.start())},Mi(Cc.prototype,"providerId","firebase"),(t=Cc.prototype).reload=function(){var t=this;return rh(this,Bc(this).then(function(){return zc(t).then(function(){return Fc(t)}).then(Hc)}))},t.dc=function(t){return this.G(t).then(function(t){return new Tc(t)})},t.G=function(t){var e=this;return rh(this,Bc(this).then(function(){return e.b.getToken(t)}).then(function(t){if(!t)throw new Yi("internal-error");return t.accessToken!=e.ma&&(Vc(e,t.accessToken),e.dispatchEvent(new Rc("tokenChanged"))),Jc(e,"refreshToken",t.refreshToken),t.accessToken}))},t.zc=function(t){if(!(t=t.users)||!t.length)throw new Yi("internal-error");qc(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId});for(var e=function(t){return(t=t.providerUserInfo)&&t.length?j(t,function(t){return new Pc(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)}):[]}(t),n=0;n<e.length;n++)Wc(this,e[n]);Jc(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length))},t.Ac=function(t){return Li("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.hb(t)},t.hb=function(t){var e=this,n=null;return rh(this,t.f(this.a,this.uid).then(function(t){return $c(e,t),n=Qc(e,t,"reauthenticate"),e.h=null,e.reload()}).then(function(){return n}),!0)},t.rc=function(t){return Li("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.fb(t)},t.fb=function(e){var n=this,i=null;return rh(this,Zc(this,e.providerId).then(function(){return n.G()}).then(function(t){return e.b(n.a,t)}).then(function(t){return i=Qc(n,t,"link"),th(n,t)}).then(function(){return i}))},t.sc=function(t,e){var n=this;return rh(this,Zc(this,"phone").then(function(){return Ic(Mc(n),t,e,I(n.fb,n))}))},t.Bc=function(t,e){var n=this;return rh(this,Yt().then(function(){return Ic(Mc(n),t,e,I(n.hb,n))}),!0)},t.rb=function(e){var n=this;return rh(this,this.G().then(function(t){return n.a.rb(t,e)}).then(function(t){return $c(n,t),n.reload()}))},t.Sc=function(e){var n=this;return rh(this,this.G().then(function(t){return e.b(n.a,t)}).then(function(t){return $c(n,t),n.reload()}))},t.sb=function(e){var n=this;return rh(this,this.G().then(function(t){return n.a.sb(t,e)}).then(function(t){return $c(n,t),n.reload()}))},t.tb=function(e){if(void 0===e.displayName&&void 0===e.photoURL)return Bc(this);var n=this;return rh(this,this.G().then(function(t){return n.a.tb(t,{displayName:e.displayName,photoUrl:e.photoURL})}).then(function(t){return $c(n,t),Jc(n,"displayName",t.displayName||null),Jc(n,"photoURL",t.photoUrl||null),M(n.providerData,function(t){"password"===t.providerId&&(Mi(t,"displayName",n.displayName),Mi(t,"photoURL",n.photoURL))}),Fc(n)}).then(Hc))},t.Qc=function(e){var n=this;return rh(this,zc(this).then(function(t){return V(Gc(n),e)?function(t,e,n){return Ns(t,os,{idToken:e,deleteProvider:n})}(n.a,t,[e]).then(function(t){var e={};return M(t.providerUserInfo||[],function(t){e[t.providerId]=!0}),M(Gc(n),function(t){e[t]||Xc(n,t)}),e[mo.PROVIDER_ID]||Mi(n,"phoneNumber",null),Fc(n)}):Fc(n).then(function(){throw new Yi("no-such-provider")})}))},t.delete=function(){var e=this;return rh(this,this.G().then(function(t){return Ns(e.a,rs,{idToken:t})}).then(function(){e.dispatchEvent(new Rc("userDeleted"))})).then(function(){for(var t=0;t<e.I.length;t++)e.I[t].cancel("app-deleted");Dc(e,null),xc(e,null),e.I=[],e.B=!0,Uc(e),Mi(e,"refreshToken",null),e.i&&rc(e.i,e)})},t.xb=function(t,e){return!!("linkViaPopup"==t&&(this.g||null)==e&&this.f||"reauthViaPopup"==t&&(this.g||null)==e&&this.f||"linkViaRedirect"==t&&(this.ca||null)==e||"reauthViaRedirect"==t&&(this.ca||null)==e)},t.ja=function(t,e,n,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.g||null)||(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)},t.Ba=function(t,e){return"linkViaPopup"==t&&e==(this.g||null)?I(this.Bb,this):"reauthViaPopup"==t&&e==(this.g||null)?I(this.Cb,this):"linkViaRedirect"==t&&(this.ca||null)==e?I(this.Bb,this):"reauthViaRedirect"==t&&(this.ca||null)==e?I(this.Cb,this):null},t.tc=function(t){var e=this;return eh(this,"linkViaPopup",t,function(){return Zc(e,t.providerId).then(function(){return Fc(e)})},!1)},t.Cc=function(t){return eh(this,"reauthViaPopup",t,function(){return Yt()},!0)},t.uc=function(t){var e=this;return nh(this,"linkViaRedirect",t,function(){return Zc(e,t.providerId)},!1)},t.Dc=function(t){return nh(this,"reauthViaRedirect",t,function(){return Yt()},!0)},t.Bb=function(e,n,t,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return t=this.G().then(function(t){return $a(r.a,{requestUri:e,postBody:i,sessionId:n,idToken:t})}).then(function(t){return o=Qc(r,t,"link"),th(r,t)}).then(function(){return o}),rh(this,t)},t.Cb=function(t,e,n,i){var r=this;this.c&&(this.c.cancel(),this.c=null);var o=null;return rh(this,Yt().then(function(){return Hr(Za(r.a,{requestUri:t,sessionId:e,postBody:i,tenantId:n}),r.uid)}).then(function(t){return o=Qc(r,t,"reauthenticate"),$c(r,t),r.h=null,r.reload()}).then(function(){return o}),!0)},t.jb=function(e){var n=this,i=null;return rh(this,this.G().then(function(t){return i=t,void 0===e||G(e)?{}:br(new ur(e))}).then(function(t){return n.a.jb(i,t)}).then(function(t){if(n.email!=t)return n.reload()}).then(function(){}))},t.toJSON=function(){return this.A()},t.A=function(){var e={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.A(),redirectEventId:this.ca||null};return this.metadata&&J(e,this.metadata.A()),M(this.providerData,function(t){e.providerData.push(function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}(t))}),e};var sh={name:"redirectUser",C:"session"};function uh(t){return Nu(t.b,sh,t.a)}function ch(t){this.a=t,this.b=ku(),this.c=null,this.f=function(e){var n=fh("local"),i=fh("session"),r=fh("none");return function(n,i,r){var o=Su(i,r),a=Au(n,i.C);return n.get(i,r).then(function(t){var e=null;try{e=ki(l.localStorage.getItem(o))}catch(t){}if(e&&!t)return l.localStorage.removeItem(o),n.set(i,e,r);e&&t&&"localStorage"!=a.type&&l.localStorage.removeItem(o)})}(e.b,n,e.a).then(function(){return e.b.get(i,e.a)}).then(function(t){return t?i:e.b.get(r,e.a).then(function(t){return t?r:e.b.get(n,e.a).then(function(t){return t?n:e.b.get(lh,e.a).then(function(t){return t?fh(t):n})})})}).then(function(t){return e.c=t,hh(e,t.C)}).s(function(){e.c||(e.c=n)})}(this),this.b.addListener(fh("local"),this.a,I(this.g,this))}function hh(t,e){var n,i=[];for(n in Tu)Tu[n]!==e&&i.push(Nu(t.b,fh(Tu[n]),t.a));return i.push(Nu(t.b,lh,t.a)),function(s){return new qt(function(n,e){var i=s.length,r=[];if(i)for(var t=function(t,e){i--,r[t]=e,0==i&&n(r)},o=function(t){e(t)},a=0;a<s.length;a++)$t(s[a],T(t,a),o);else n(r)})}(i)}ch.prototype.g=function(){var e=this,n=fh("local");mh(this,function(){return Yt().then(function(){return e.c&&"local"!=e.c.C?e.b.get(n,e.a):null}).then(function(t){if(t)return hh(e,"local").then(function(){e.c=n})})})};var lh={name:"persistence",C:"session"};function fh(t){return{name:"authUser",C:t}}function dh(t,e){return mh(t,function(){return t.b.set(t.c,e.A(),t.a)})}function ph(t){return mh(t,function(){return Nu(t.b,t.c,t.a)})}function vh(t,e){return mh(t,function(){return t.b.get(t.c,t.a).then(function(t){return t&&e&&(t.authDomain=e),oh(t||{})})})}function mh(t,e){return t.f=t.f.then(e,e),t.f}function gh(t){if(this.l=!1,Mi(this,"settings",new yc),Mi(this,"app",t),!Ah(this).options||!Ah(this).options.apiKey)throw new Yi("invalid-api-key");t=fl.SDK_VERSION?pi(fl.SDK_VERSION):null,this.b=new Pa(Ah(this).options&&Ah(this).options.apiKey,Nr(Ar),t),this.O=[],this.m=[],this.J=[],this.Ub=fl.INTERNAL.createSubscribe(I(this.oc,this)),this.W=void 0,this.Vb=fl.INTERNAL.createSubscribe(I(this.pc,this)),Eh(this,null),this.h=new ch(Ah(this).options.apiKey+":"+Ah(this).name),this.w=new ah(Ah(this).options.apiKey+":"+Ah(this).name),this.Y=_h(this,function(n){var t=Ah(n).options.authDomain,e=function(e){var t=function(t,e){return t.b.get(sh,t.a).then(function(t){return t&&e&&(t.authDomain=e),oh(t||{})})}(e.w,Ah(e).options.authDomain).then(function(t){return(e.B=t)&&(t.da=e.w),uh(e.w)});return _h(e,t)}(n).then(function(){return vh(n.h,t)}).then(function(e){return e?(e.da=n.w,n.B&&(n.B.ca||null)==(e.ca||null)?e:e.reload().then(function(){return dh(n.h,e).then(function(){return e})}).s(function(t){return"auth/network-request-failed"==t.code?e:ph(n.h)})):null}).then(function(t){Eh(n,t||null)});return _h(n,e)}(this)),this.i=_h(this,function(e){return e.Y.then(function(){return Ih(e)}).s(function(){}).then(function(){if(!e.l)return e.ma()}).s(function(){}).then(function(){if(!e.l){e.ga=!0;var t=e.h;t.b.addListener(fh("local"),t.a,e.ma)}})}(this)),this.ga=!1,this.ma=I(this.Nc,this),this.ub=I(this.aa,this),this.wa=I(this.bc,this),this.xa=I(this.mc,this),this.Ja=I(this.nc,this),this.a=null,function(e){var n=Ah(e).options.authDomain,i=Ah(e).options.apiKey;n&&bi()&&(e.Tb=e.Y.then(function(){if(!e.l){if(e.a=fc(n,i,Ah(e).name),ic(e.a,e),Sh(e)&&Kc(Sh(e)),e.B){Kc(e.B);var t=e.B;t.ua(e.ha()),Dc(t,e),Lc(t=e.B,e.I),xc(t,e),e.B=null}return e.a}}))}(this),this.INTERNAL={},this.INTERNAL.delete=I(this.delete,this),this.INTERNAL.logFramework=I(this.vc,this),this.o=0,nn.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ha()},set:function(t){this.ua(t)},enumerable:!1}),t.Z=null,Object.defineProperty(t,"ti",{get:function(){return this.R()},set:function(t){this.nb(t)},enumerable:!1}),t.P=null}(this),this.I=[]}function bh(t){Ce.call(this,"languageCodeChanged"),this.g=t}function yh(t){Ce.call(this,"frameworkChanged"),this.c=t}function wh(t){return t.Tb||zt(new Yi("auth-domain-config-required"))}function Ih(t){if(!bi())return zt(new Yi("operation-not-supported-in-this-environment"));var e=wh(t).then(function(){return t.a.oa()}).then(function(t){return t?Ui(t):null});return _h(t,e)}function Th(e,t){var n={};return n.apiKey=Ah(e).options.apiKey,n.authDomain=Ah(e).options.authDomain,n.appName=Ah(e).name,e.Y.then(function(){return function(t,e,n,i){var r=new Cc(t,e);return n&&(r.da=n),i&&Lc(r,i),r.reload().then(function(){return r})}(n,t,e.w,e.Ca())}).then(function(t){return Sh(e)&&t.uid==Sh(e).uid?Yc(Sh(e),t):(Eh(e,t),Kc(t)),e.aa(t)}).then(function(){Oh(e)})}function Eh(t,e){Sh(t)&&(function(t,e){K(t.O,function(t){return t==e})}(Sh(t),t.ub),Xe(Sh(t),"tokenChanged",t.wa),Xe(Sh(t),"userDeleted",t.xa),Xe(Sh(t),"userInvalidated",t.Ja),Uc(Sh(t))),e&&(e.O.push(t.ub),Be(e,"tokenChanged",t.wa),Be(e,"userDeleted",t.xa),Be(e,"userInvalidated",t.Ja),0<t.o&&jc(e)),Mi(t,"currentUser",e),e&&(e.ua(t.ha()),Dc(e,t),Lc(e,t.I),xc(e,t))}function kh(e,t){var n=null,i=null;return _h(e,t.then(function(t){return n=bo(t),i=Cr(t),Th(e,t)}).then(function(){return Ui({user:Sh(e),credential:n,additionalUserInfo:i,operationType:"signIn"})}))}function Ah(t){return t.app}function Sh(t){return t.currentUser}function Nh(t){return Sh(t)&&Sh(t)._lat||null}function Oh(t){if(t.ga){for(var e=0;e<t.m.length;e++)t.m[e]&&t.m[e](Nh(t));if(t.W!==t.getUid()&&t.J.length)for(t.W=t.getUid(),e=0;e<t.J.length;e++)t.J[e]&&t.J[e](Nh(t))}}function _h(t,e){return t.O.push(e),e.ka(function(){F(t.O,e)}),e}function Ph(){}function Rh(){this.a={},this.b=1e12}ch.prototype.mb=function(e){var n=null,i=this;return function(t){var e=new Yi("invalid-persistence-type"),n=new Yi("unsupported-persistence-type");t:{for(i in Tu)if(Tu[i]==t){var i=!0;break t}i=!1}if(!i||"string"!=typeof t)throw e;switch(ui()){case"ReactNative":if("session"===t)throw n;break;case"Node":if("none"!==t)throw n;break;default:if(!gi()&&"none"!==t)throw n}}(e),mh(this,function(){return e!=i.c.C?i.b.get(i.c,i.a).then(function(t){return n=t,hh(i,e)}).then(function(){if(i.c=fh(e),n)return i.b.set(i.c,n,i.a)}):Yt()})},k(gh,nn),k(bh,Ce),k(yh,Ce),(t=gh.prototype).mb=function(t){return t=this.h.mb(t),_h(this,t)},t.ua=function(t){this.Z===t||this.l||(this.Z=t,ja(this.b,this.Z),this.dispatchEvent(new bh(this.ha())))},t.ha=function(){return this.Z},t.Tc=function(){var t=l.navigator;this.ua(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.vc=function(t){this.I.push(t),Ua(this.b,fl.SDK_VERSION?pi(fl.SDK_VERSION,this.I):null),this.dispatchEvent(new yh(this.I))},t.Ca=function(){return H(this.I)},t.nb=function(t){this.P===t||this.l||(this.P=t,this.b.b=this.P)},t.R=function(){return this.P},t.toJSON=function(){return{apiKey:Ah(this).options.apiKey,authDomain:Ah(this).options.authDomain,appName:Ah(this).name,currentUser:Sh(this)&&Sh(this).A()}},t.xb=function(t,e){switch(t){case"unknown":case"signInViaRedirect":return!0;case"signInViaPopup":return this.g==e&&!!this.f;default:return!1}},t.ja=function(t,e,n,i){"signInViaPopup"==t&&this.g==i&&(n&&this.v?this.v(n):e&&!n&&this.f&&this.f(e),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)},t.Ba=function(t,e){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.g==e&&this.f?I(this.ac,this):null},t.ac=function(t,e,n,i){var r=this;t={requestUri:t,postBody:i,sessionId:e,tenantId:n},this.c&&(this.c.cancel(),this.c=null);var o=null,a=null,s=za(r.b,t).then(function(t){return o=bo(t),a=Cr(t),t});return _h(this,t=r.Y.then(function(){return s}).then(function(t){return Th(r,t)}).then(function(){return Ui({user:Sh(r),credential:o,additionalUserInfo:a,operationType:"signIn"})}))},t.Lc=function(e){if(!bi())return zt(new Yi("operation-not-supported-in-this-environment"));var n=this,t=Rr(e.providerId),i=Ai(),r=null;(!Ii()||ai())&&Ah(this).options.authDomain&&e.isOAuthProvider&&(r=qs(Ah(this).options.authDomain,Ah(this).options.apiKey,Ah(this).name,"signInViaPopup",e,null,i,fl.SDK_VERSION||null,null,null,this.R()));var o=ei(r,t&&t.sa,t&&t.ra);return _h(this,t=wh(this).then(function(t){return sc(t,o,"signInViaPopup",e,i,!!r,n.R())}).then(function(){return new qt(function(t,e){n.ja("signInViaPopup",null,new Yi("cancelled-popup-request"),n.g),n.f=t,n.v=e,n.g=i,n.c=hc(n.a,n,"signInViaPopup",o,i)})}).then(function(t){return o&&ti(o),t?Ui(t):null}).s(function(t){throw o&&ti(o),t}))},t.Mc=function(t){if(!bi())return zt(new Yi("operation-not-supported-in-this-environment"));var e=this;return _h(this,wh(this).then(function(){return function(t){return mh(t,function(){return t.b.set(lh,t.c.C,t.a)})}(e.h)}).then(function(){return cc(e.a,"signInViaRedirect",t,void 0,e.R())}))},t.oa=function(){var e=this;return Ih(this).then(function(t){return e.a&&vc(e.a.b),t}).s(function(t){throw e.a&&vc(e.a.b),t})},t.Rc=function(t){if(!t)return zt(new Yi("null-user"));if(this.P!=t.tenantId)return zt(new Yi("tenant-id-mismatch"));var e=this,n={};n.apiKey=Ah(this).options.apiKey,n.authDomain=Ah(this).options.authDomain,n.appName=Ah(this).name;var i=function(t,e,n,i){e=e||{apiKey:t.l,authDomain:t.o,appName:t.m};var r=t.b,o={};return o[Ca]=r.b,o.refreshToken=r.a,o.expiresIn=(r.c-E())/1e3,e=new Cc(e,o),n&&(e.da=n),i&&Lc(e,i),Yc(e,t),e}(t,n,e.w,e.Ca());return _h(this,this.i.then(function(){if(Ah(e).options.apiKey!=t.l)return i.reload()}).then(function(){return Sh(e)&&t.uid==Sh(e).uid?(Yc(Sh(e),t),e.aa(t)):(Eh(e,i),Kc(i),e.aa(i))}).then(function(){Oh(e)}))},t.pb=function(){var t=this,e=this.i.then(function(){return t.a&&vc(t.a.b),Sh(t)?(Eh(t,null),ph(t.h).then(function(){Oh(t)})):Yt()});return _h(this,e)},t.Nc=function(){var i=this;return vh(this.h,Ah(this).options.authDomain).then(function(t){if(!i.l){var e;if(e=Sh(i)&&t){e=Sh(i).uid;var n=t.uid;e=null!=e&&""!==e&&null!=n&&""!==n&&e==n}if(e)return Yc(Sh(i),t),Sh(i).G();(Sh(i)||t)&&(Eh(i,t),t&&(Kc(t),t.da=i.w),i.a&&ic(i.a,i),Oh(i))}})},t.aa=function(t){return dh(this.h,t)},t.bc=function(){Oh(this),this.aa(Sh(this))},t.mc=function(){this.pb()},t.nc=function(){this.pb()},t.oc=function(t){var e=this;this.addAuthTokenListener(function(){t.next(Sh(e))})},t.pc=function(t){var e=this;!function(t,e){t.J.push(e),_h(t,t.i.then(function(){!t.l&&V(t.J,e)&&t.W!==t.getUid()&&(t.W=t.getUid(),e(Nh(t)))}))}(this,function(){t.next(Sh(e))})},t.xc=function(t,e,n){var i=this;return this.ga&&Promise.resolve().then(function(){m(t)?t(Sh(i)):m(t.next)&&t.next(Sh(i))}),this.Ub(t,e,n)},t.wc=function(t,e,n){var i=this;return this.ga&&Promise.resolve().then(function(){i.W=i.getUid(),m(t)?t(Sh(i)):m(t.next)&&t.next(Sh(i))}),this.Vb(t,e,n)},t.cc=function(t){var e=this,n=this.i.then(function(){return Sh(e)?Sh(e).G(t).then(function(t){return{accessToken:t}}):null});return _h(this,n)},t.Hc=function(t){var n=this;return this.i.then(function(){return kh(n,Ns(n.b,Ts,{token:t}))}).then(function(t){var e=t.user;return Jc(e,"isAnonymous",!1),n.aa(e),t})},t.Ic=function(t,e){var n=this;return this.i.then(function(){return kh(n,Ns(n.b,Es,{email:t,password:e}))})},t.Xb=function(t,e){var n=this;return this.i.then(function(){return kh(n,Ns(n.b,ns,{email:t,password:e}))})},t.Sa=function(t){var e=this;return this.i.then(function(){return kh(e,t.na(e.b))})},t.Gc=function(t){return Li("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Sa(t)},t.ob=function(){var n=this;return this.i.then(function(){var t=Sh(n);return t&&t.isAnonymous?Ui({user:t,credential:null,additionalUserInfo:Ui({providerId:null,isNewUser:!1}),operationType:"signIn"}):kh(n,n.b.ob()).then(function(t){var e=t.user;return Jc(e,"isAnonymous",!0),n.aa(e),t})})},t.getUid=function(){return Sh(this)&&Sh(this).uid||null},t.Wb=function(t){this.addAuthTokenListener(t),this.o++,0<this.o&&Sh(this)&&jc(Sh(this))},t.Ec=function(e){var n=this;M(this.m,function(t){t==e&&n.o--}),this.o<0&&(this.o=0),0==this.o&&Sh(this)&&Uc(Sh(this)),this.removeAuthTokenListener(e)},t.addAuthTokenListener=function(t){var e=this;this.m.push(t),_h(this,this.i.then(function(){e.l||V(e.m,t)&&t(Nh(e))}))},t.removeAuthTokenListener=function(e){K(this.m,function(t){return t==e})},t.delete=function(){this.l=!0;for(var t=0;t<this.O.length;t++)this.O[t].cancel("app-deleted");return this.O=[],this.h&&(t=this.h).b.removeListener(fh("local"),t.a,this.ma),this.a&&(rc(this.a,this),vc(this.a.b)),Promise.resolve()},t.$b=function(t){return _h(this,function(t,e){return Ns(t,is,{identifier:e,continueUri:yi()?$n():"http://localhost"}).then(function(t){return t.signinMethods||[]})}(this.b,t))},t.qc=function(t){return!!lo(t)},t.lb=function(e,n){var i=this;return _h(this,Yt().then(function(){var t=new ur(n);if(!t.c)throw new Yi("argument-error",lr+" must be true when sending sign in link to email");return br(t)}).then(function(t){return i.b.lb(e,t)}).then(function(){}))},t.Uc=function(t){return this.Ma(t).then(function(t){return t.data.email})},t.ab=function(t,e){return _h(this,this.b.ab(t,e).then(function(){}))},t.Ma=function(t){return _h(this,this.b.Ma(t).then(function(t){return new Fi(t)}))},t.Ya=function(t){return _h(this,this.b.Ya(t).then(function(){}))},t.kb=function(e,t){var n=this;return _h(this,Yt().then(function(){return void 0===t||G(t)?{}:br(new ur(t))}).then(function(t){return n.b.kb(e,t)}).then(function(){}))},t.Kc=function(t,e){return _h(this,Ic(this,t,e,I(this.Sa,this)))},t.Jc=function(n,i){var r=this;return _h(this,Yt().then(function(){var t=i||$n(),e=ho(n,t);if(!(t=lo(t)))throw new Yi("argument-error","Invalid email link!");if(t.tenantId!==r.R())throw new Yi("tenant-id-mismatch");return r.Sa(e)}))},Ph.prototype.render=function(){},Ph.prototype.reset=function(){},Ph.prototype.getResponse=function(){},Ph.prototype.execute=function(){};var Ch=null;function Dh(t,e){return(e=Lh(e))&&t.a[e]||null}function Lh(t){return(t=void 0===t?1e12:t)?t.toString():null}function xh(t,e){this.g=!1,this.c=e,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=Fn(t);var n=this;this.i=function(){n.execute()},this.h?this.execute():Be(this.f,"click",this.i)}function Mh(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function jh(){}Rh.prototype.render=function(t,e){return this.a[this.b.toString()]=new xh(t,e),this.b++},Rh.prototype.reset=function(t){var e=Dh(this,t);t=Lh(t),e&&t&&(e.delete(),delete this.a[t])},Rh.prototype.getResponse=function(t){return(t=Dh(this,t))?t.getResponse():null},Rh.prototype.execute=function(t){(t=Dh(this,t))&&t.execute()},xh.prototype.getResponse=function(){return Mh(this),this.b},xh.prototype.execute=function(){Mh(this);var n=this;this.a||(this.a=setTimeout(function(){n.b=function(){for(var t=50,e=[];0<t;)e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return e.join("")}();var t=n.c.callback,e=n.c["expired-callback"];if(t)try{t(n.b)}catch(t){}n.a=setTimeout(function(){if(n.a=null,n.b=null,e)try{e()}catch(t){}n.h&&n.execute()},6e4)},500))},xh.prototype.delete=function(){Mh(this),this.g=!0,clearTimeout(this.a),this.a=null,Xe(this.f,"click",this.i)},jh.prototype.g=function(){return Yt(Ch=Ch||new Rh)},jh.prototype.c=function(){};var Uh=null;function Vh(){this.b=l.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var Fh=new Y(Z,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Kh=new Oi(3e4,6e4);Vh.prototype.g=function(r){var o=this;return new qt(function(t,e){var i=setTimeout(function(){e(new Yi("network-request-failed"))},Kh.get());!l.grecaptcha||r!==o.f&&!o.b?(l[o.a]=function(){if(l.grecaptcha){o.f=r;var n=l.grecaptcha.render;l.grecaptcha.render=function(t,e){return t=n(t,e),o.b++,t},clearTimeout(i),t(l.grecaptcha)}else clearTimeout(i),e(new Yi("internal-error"));delete l[o.a]},Yt(Ea(nt(Fh,{onload:o.a,hl:r||""}))).s(function(){clearTimeout(i),e(new Yi("internal-error","Unable to load external reCAPTCHA dependencies!"))})):(clearTimeout(i),t(l.grecaptcha))})},Vh.prototype.c=function(){this.b--};var qh=null;function Hh(t,e,n,i,r,o,a){if(Mi(this,"type","recaptcha"),this.c=this.f=null,this.B=!1,this.u=e,this.g=null,a=a?Uh=Uh||new jh:qh=qh||new Vh,this.m=a,this.a=n||{theme:"light",type:"image"},this.h=[],this.a[Wh])throw new Yi("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");if(this.i="invisible"===this.a[Xh],!l.document)throw new Yi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");if(!Fn(e)||!this.i&&Fn(e).hasChildNodes())throw new Yi("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.o=new Pa(t,o||null,r||null),this.v=i||function(){return null};var s=this;this.l=[];var u=this.a[Bh];this.a[Bh]=function(t){if(Jh(s,t),"function"==typeof u)u(t);else if("string"==typeof u){var e=mi(u,l);"function"==typeof e&&e(t)}};var c=this.a[Gh];this.a[Gh]=function(){if(Jh(s,null),"function"==typeof c)c();else if("string"==typeof c){var t=mi(c,l);"function"==typeof t&&t()}}}var Bh="callback",Gh="expired-callback",Wh="sitekey",Xh="size";function Jh(t,e){for(var n=0;n<t.l.length;n++)try{t.l[n](e)}catch(t){}}function Yh(t,e){return t.h.push(e),e.ka(function(){F(t.h,e)}),e}function zh(t){if(t.B)throw new Yi("internal-error","RecaptchaVerifier instance has been destroyed.")}function $h(t,e,n){var i=!1;try{this.b=n||fl.app()}catch(t){throw new Yi("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new Yi("invalid-api-key");n=this.b.options.apiKey;var r=this,o=null;try{o=this.b.auth().Ca()}catch(t){}try{i=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}o=fl.SDK_VERSION?pi(fl.SDK_VERSION,o):null,Hh.call(this,n,t,e,function(){try{var e=r.b.auth().ha()}catch(t){e=null}return e},o,Nr(Ar),i)}function Zh(t,e,n,i){t:{n=Array.prototype.slice.call(n);for(var r=0,o=!1,a=0;a<e.length;a++)if(e[a].optional)o=!0;else{if(o)throw new Yi("internal-error","Argument validator encountered a required argument after an optional argument.");r++}if(o=e.length,n.length<r||o<n.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+n.length+".";else{for(r=0;r<n.length;r++)if(o=e[r].optional&&void 0===n[r],!e[r].N(n[r])&&!o){if(e=e[r],r<0||r>=Qh.length)throw new Yi("internal-error","Argument validator received an unsupported number of arguments.");n=Qh[r],i=(i?"":n+" argument ")+(e.name?'"'+e.name+'" ':"")+"must be "+e.M+".";break t}i=null}}if(i)throw new Yi("argument-error",t+" failed: "+i)}(t=Hh.prototype).Da=function(){var e=this;return this.f?this.f:this.f=Yh(this,Yt().then(function(){if(yi()&&!si())return ri();throw new Yi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")}).then(function(){return e.m.g(e.v())}).then(function(t){return e.g=t,Ns(e.o,ds,{})}).then(function(t){e.a[Wh]=t.recaptchaSiteKey}).s(function(t){throw e.f=null,t}))},t.render=function(){zh(this);var n=this;return Yh(this,this.Da().then(function(){if(null===n.c){var t=n.u;if(!n.i){var e=Fn(t);t=Hn("DIV"),e.appendChild(t)}n.c=n.g.render(t,n.a)}return n.c}))},t.verify=function(){zh(this);var r=this;return Yh(this,this.render().then(function(i){return new qt(function(e){var t=r.g.getResponse(i);if(t)e(t);else{var n=function(t){t&&(function(t,e){K(t.l,function(t){return t==e})}(r,n),e(t))};r.l.push(n),r.i&&r.g.execute(r.c)}})}))},t.reset=function(){zh(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){zh(this),this.B=!0,this.m.c();for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){t=Fn(this.u);for(var e;e=t.firstChild;)t.removeChild(e)}},k($h,Hh);var Qh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function tl(t,e){return{name:t||"",M:"a valid string",optional:!!e,N:h}}function el(t,e){return{name:t||"",M:"a boolean",optional:!!e,N:n}}function nl(t,e){return{name:t||"",M:"a valid object",optional:!!e,N:g}}function il(t,e){return{name:t||"",M:"a function",optional:!!e,N:m}}function rl(t,e){return{name:t||"",M:"null",optional:!!e,N:r}}function ol(n){return{name:n?n+"Credential":"credential",M:n?"a valid "+n+" credential":"a valid credential",optional:!1,N:function(t){if(!t)return!1;var e=!n||t.providerId===n;return!(!t.na||!e)}}}function al(){return{name:"applicationVerifier",M:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,N:function(t){return!!(t&&h(t.type)&&m(t.verify))}}}function sl(e,n,t,i){return{name:t||"",M:e.M+" or "+n.M,optional:!!i,N:function(t){return e.N(t)||n.N(t)}}}function ul(t,e){for(var n in e){var i=e[n].name;t[i]=ll(i,t[n],e[n].j)}}function cl(t,e){for(var n in e){var i=e[n].name;i!==n&&Object.defineProperty(t,i,{get:T(function(t){return this[t]},n),set:T(function(t,e,n,i){Zh(t,[n],[i],!0),this[e]=i},i,n,e[n].Za),enumerable:!0})}}function hl(t,e,n,i){t[e]=ll(e,n,i)}function ll(t,e,n){function i(){var t=Array.prototype.slice.call(arguments);return Zh(o,n,t),e.apply(this,t)}if(!n)return e;var r,o=function(t){return(t=t.split("."))[t.length-1]}(t);for(r in e)i[r]=e[r];for(r in e.prototype)i.prototype[r]=e.prototype[r];return i}ul(gh.prototype,{Ya:{name:"applyActionCode",j:[tl("code")]},Ma:{name:"checkActionCode",j:[tl("code")]},ab:{name:"confirmPasswordReset",j:[tl("code"),tl("newPassword")]},Xb:{name:"createUserWithEmailAndPassword",j:[tl("email"),tl("password")]},$b:{name:"fetchSignInMethodsForEmail",j:[tl("email")]},oa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[tl("emailLink")]},wc:{name:"onAuthStateChanged",j:[sl(nl(),il(),"nextOrObserver"),il("opt_error",!0),il("opt_completed",!0)]},xc:{name:"onIdTokenChanged",j:[sl(nl(),il(),"nextOrObserver"),il("opt_error",!0),il("opt_completed",!0)]},kb:{name:"sendPasswordResetEmail",j:[tl("email"),sl(nl("opt_actionCodeSettings",!0),rl(null,!0),"opt_actionCodeSettings",!0)]},lb:{name:"sendSignInLinkToEmail",j:[tl("email"),nl("actionCodeSettings")]},mb:{name:"setPersistence",j:[tl("persistence")]},Gc:{name:"signInAndRetrieveDataWithCredential",j:[ol()]},ob:{name:"signInAnonymously",j:[]},Sa:{name:"signInWithCredential",j:[ol()]},Hc:{name:"signInWithCustomToken",j:[tl("token")]},Ic:{name:"signInWithEmailAndPassword",j:[tl("email"),tl("password")]},Jc:{name:"signInWithEmailLink",j:[tl("email"),tl("emailLink",!0)]},Kc:{name:"signInWithPhoneNumber",j:[tl("phoneNumber"),al()]},Lc:{name:"signInWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Mc:{name:"signInWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Rc:{name:"updateCurrentUser",j:[sl({name:"user",M:"an instance of Firebase User",optional:!1,N:function(t){return!!(t&&t instanceof Cc)}},rl(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[tl(null,!0)]},Tc:{name:"useDeviceLanguage",j:[]},Uc:{name:"verifyPasswordResetCode",j:[tl("code")]}}),cl(gh.prototype,{lc:{name:"languageCode",Za:sl(tl(),rl(),"languageCode")},ti:{name:"tenantId",Za:sl(tl(),rl(),"tenantId")}}),(gh.Persistence=Tu).LOCAL="local",gh.Persistence.SESSION="session",gh.Persistence.NONE="none",ul(Cc.prototype,{delete:{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[el("opt_forceRefresh",!0)]},G:{name:"getIdToken",j:[el("opt_forceRefresh",!0)]},rc:{name:"linkAndRetrieveDataWithCredential",j:[ol()]},fb:{name:"linkWithCredential",j:[ol()]},sc:{name:"linkWithPhoneNumber",j:[tl("phoneNumber"),al()]},tc:{name:"linkWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},uc:{name:"linkWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ac:{name:"reauthenticateAndRetrieveDataWithCredential",j:[ol()]},hb:{name:"reauthenticateWithCredential",j:[ol()]},Bc:{name:"reauthenticateWithPhoneNumber",j:[tl("phoneNumber"),al()]},Cc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Dc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},jb:{name:"sendEmailVerification",j:[sl(nl("opt_actionCodeSettings",!0),rl(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[tl(null,!0)]},Qc:{name:"unlink",j:[tl("provider")]},rb:{name:"updateEmail",j:[tl("email")]},sb:{name:"updatePassword",j:[tl("password")]},Sc:{name:"updatePhoneNumber",j:[ol("phone")]},tb:{name:"updateProfile",j:[nl("profile")]}}),ul(Rh.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),ul(Ph.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),ul(qt.prototype,{ka:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),cl(yc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",Za:el("appVerificationDisabledForTesting")}}),ul(wc.prototype,{confirm:{name:"confirm",j:[tl("verificationCode")]}}),hl(qr,"fromJSON",function(t){t=h(t)?JSON.parse(t):t;for(var e,n=[Yr,uo,po,Wr],i=0;i<n.length;i++)if(e=n[i](t))return e;return null},[sl(tl(),nl(),"json")]),hl(co,"credential",function(t,e){return new so(t,e)},[tl("email"),tl("password")]),ul(so.prototype,{A:{name:"toJSON",j:[tl(null,!0)]}}),ul(Qr.prototype,{ya:{name:"addScope",j:[tl("scope")]},Ga:{name:"setCustomParameters",j:[nl("customOAuthParameters")]}}),hl(Qr,"credential",to,[sl(tl(),nl(),"token")]),hl(co,"credentialWithLink",ho,[tl("email"),tl("emailLink")]),ul(eo.prototype,{ya:{name:"addScope",j:[tl("scope")]},Ga:{name:"setCustomParameters",j:[nl("customOAuthParameters")]}}),hl(eo,"credential",no,[sl(tl(),nl(),"token")]),ul(io.prototype,{ya:{name:"addScope",j:[tl("scope")]},Ga:{name:"setCustomParameters",j:[nl("customOAuthParameters")]}}),hl(io,"credential",ro,[sl(tl(),sl(nl(),rl()),"idToken"),sl(tl(),rl(),"accessToken",!0)]),ul(oo.prototype,{Ga:{name:"setCustomParameters",j:[nl("customOAuthParameters")]}}),hl(oo,"credential",ao,[sl(tl(),nl(),"token"),tl("secret",!0)]),ul(Zr.prototype,{ya:{name:"addScope",j:[tl("scope")]},credential:{name:"credential",j:[sl(tl(),sl(nl(),rl()),"optionsOrIdToken"),sl(tl(),rl(),"accessToken",!0)]},Ga:{name:"setCustomParameters",j:[nl("customOAuthParameters")]}}),ul(Xr.prototype,{A:{name:"toJSON",j:[tl(null,!0)]}}),ul(Br.prototype,{A:{name:"toJSON",j:[tl(null,!0)]}}),hl(mo,"credential",go,[tl("verificationId"),tl("verificationCode")]),ul(mo.prototype,{Wa:{name:"verifyPhoneNumber",j:[tl("phoneNumber"),al()]}}),ul(fo.prototype,{A:{name:"toJSON",j:[tl(null,!0)]}}),ul(Yi.prototype,{toJSON:{name:"toJSON",j:[tl(null,!0)]}}),ul(So.prototype,{toJSON:{name:"toJSON",j:[tl(null,!0)]}}),ul(Ao.prototype,{toJSON:{name:"toJSON",j:[tl(null,!0)]}}),ul($h.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),hl(Qi,"parseLink",sr,[tl("link")]),function(){if(void 0===fl||!fl.INTERNAL||!fl.INTERNAL.registerComponent)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ki,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:gh,AuthCredential:qr,Error:Yi};hl(t,"EmailAuthProvider",co,[]),hl(t,"FacebookAuthProvider",Qr,[]),hl(t,"GithubAuthProvider",eo,[]),hl(t,"GoogleAuthProvider",io,[]),hl(t,"TwitterAuthProvider",oo,[]),hl(t,"OAuthProvider",Zr,[tl("providerId")]),hl(t,"SAMLAuthProvider",$r,[tl("providerId")]),hl(t,"PhoneAuthProvider",mo,[{name:"auth",M:"an instance of Firebase Auth",optional:!0,N:function(t){return!!(t&&t instanceof gh)}}]),hl(t,"RecaptchaVerifier",$h,[sl(tl(),{name:"",M:"an HTML element",optional:!1,N:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),nl("recaptchaParameters",!0),{name:"app",M:"an instance of Firebase App",optional:!0,N:function(t){return!!(t&&t instanceof fl.app.App)}}]),hl(t,"ActionCodeURL",Qi,[]),fl.INTERNAL.registerComponent({name:"auth",instanceFactory:function(t){return new gh(t=t.getProvider("app").getImmediate())},multipleInstances:!1,serviceProps:t,instantiationMode:"LAZY",type:"PUBLIC"}),fl.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(t){return{getUid:I((t=t.getProvider("auth").getImmediate()).getUid,t),getToken:I(t.cc,t),addAuthTokenListener:I(t.Wb,t),removeAuthTokenListener:I(t.Ec,t)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"}),fl.registerVersion("@firebase/auth","0.13.5"),fl.INTERNAL.extendNamespace({User:Cc})}()}.apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.")}});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(nm){"use strict";try{(function(){nm=nm&&nm.hasOwnProperty("default")?nm.default:nm;var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function t(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o,e,l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function p(o,a,s,u){return new(s=s||Promise)(function(t,e){function n(t){try{i(u.next(t))}catch(t){e(t)}}function r(t){try{i(u.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new s(function(t){t(e.value)}).then(n,r)}i((u=u.apply(o,a||[])).next())})}function m(n,r){var i,o,a,t,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&e[0]?o.return:e[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,e[1])).done)return a;switch(o=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,o=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],o=0}finally{i=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function a(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function s(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(e=o=o||{})[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";function n(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString();switch(e){case o.DEBUG:case o.VERBOSE:console.log.apply(console,s(["["+i+"]  "+t.name+":"],n));break;case o.INFO:console.info.apply(console,s(["["+i+"]  "+t.name+":"],n));break;case o.WARN:console.warn.apply(console,s(["["+i+"]  "+t.name+":"],n));break;case o.ERROR:console.error.apply(console,s(["["+i+"]  "+t.name+":"],n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}}}var i=o.INFO,u=(Object.defineProperty(c.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),c.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,s([this,o.DEBUG],t))},c.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,s([this,o.VERBOSE],t))},c.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,s([this,o.INFO],t))},c.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,s([this,o.WARN],t))},c.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._logHandler.apply(this,s([this,o.ERROR],t))},c);function c(t){this.name=t,this._logLevel=i,this._logHandler=n}function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}var h,d=(t(y,h=Error),y);function y(t,e){var n=h.call(this,e)||this;return n.code=t,n.name="FirebaseError",Object.setPrototypeOf(n,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,g.prototype.create),n}var g=(v.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],a=o?function(t,r){return t.replace(b,function(t,e){var n=r[e];return null!=n?n.toString():"<"+e+"?>"})}(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",u=new d(i,s),c=0,h=Object.keys(r);c<h.length;c++){var l=h[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=r[l])}return u},v);function v(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var b=/\{\$([^}]+)}/g,w=(T.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},T.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},T.prototype.setServiceProps=function(t){return this.serviceProps=t,this},T);function T(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var S,E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},I=I||{},C=E;function D(t){return"string"==typeof t}function N(t){return"number"==typeof t}function A(t,e){t=t.split("."),e=e||C;for(var n=0;n<t.length;n++)if(null==(e=e[t[n]]))return null;return e}function k(){}function R(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}function M(t){return"array"==R(t)}function _(t){var e=R(t);return"array"==e||"object"==e&&"number"==typeof t.length}function L(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var O="closure_uid_"+(1e9*Math.random()>>>0),P=0;function x(t,e,n){return t.call.apply(t.bind,arguments)}function F(e,n,t){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,r),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function q(t,e,n){return(q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x:F).apply(null,arguments)}function V(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}var B=Date.now||function(){return+new Date};function U(t,o){function e(){}e.prototype=o.prototype,t.N=o.prototype,t.prototype=new e,(t.prototype.constructor=t).xb=function(t,e,n){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return o.prototype[e].apply(t,r)}}function K(){this.j=this.j,this.i=this.i}K.prototype.j=!1,K.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0))this[O]||(this[O]=++P)},K.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Q=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(D(t))return D(e)&&1==e.length?t.indexOf(e,0):-1;for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},j=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=D(t)?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function G(t){return Array.prototype.concat.apply([],arguments)}function W(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function z(t){return/^[\s\xa0]*$/.test(t)}var H,Y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function X(t,e){return-1!=t.indexOf(e)}function J(t,e){return t<e?-1:e<t?1:0}t:{var Z=C.navigator;if(Z){var $=Z.userAgent;if($){H=$;break t}}H=""}function tt(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function et(t){var e,n={};for(e in t)n[e]=t[e];return n}var nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var o=0;o<nt.length;o++)n=nt[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){return it[" "](t),t}it[" "]=k;var ot,at,st=X(H,"Opera"),ut=X(H,"Trident")||X(H,"MSIE"),ct=X(H,"Edge"),ht=ct||ut,lt=X(H,"Gecko")&&!(X(H.toLowerCase(),"webkit")&&!X(H,"Edge"))&&!(X(H,"Trident")||X(H,"MSIE"))&&!X(H,"Edge"),ft=X(H.toLowerCase(),"webkit")&&!X(H,"Edge");function pt(){var t=C.document;return t?t.documentMode:void 0}t:{var dt="",mt=(at=H,lt?/rv:([^\);]+)(\)|;)/.exec(at):ct?/Edge\/([\d\.]+)/.exec(at):ut?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(at):ft?/WebKit\/(\S+)/.exec(at):st?/(?:Version)[ \/]?(\S+)/.exec(at):void 0);if(mt&&(dt=mt?mt[1]:""),ut){var yt=pt();if(null!=yt&&yt>parseFloat(dt)){ot=String(yt);break t}}ot=dt}var gt,vt={};function bt(s){return function(t,e){var n=vt;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(s,function(){for(var t=0,e=Y(String(ot)).split("."),n=Y(String(s)).split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var o=e[i]||"",a=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=J(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||J(0==o[2].length,0==a[2].length)||J(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t})}var wt=C.document;gt=wt&&ut?pt()||("CSS1Compat"==wt.compatMode?parseInt(ot,10):5):void 0;var Tt=!ut||9<=Number(gt),St=ut&&!bt("9"),Et=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{C.addEventListener("test",k,e),C.removeEventListener("test",k,e)}catch(t){}return t}();function It(t,e){this.type=t,this.a=this.target=e,this.Ia=!0}function Ct(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(lt){t:{try{it(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=D(t.pointerType)?t.pointerType:Dt[t.pointerType]||"",(this.c=t).defaultPrevented&&this.b()}}It.prototype.b=function(){this.Ia=!1},U(Ct,It);var Dt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.b=function(){Ct.N.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,St)try{(t.ctrlKey||112<=t.keyCode&&t.keyCode<=123)&&(t.keyCode=-1)}catch(t){}};var Nt="closure_listenable_"+(1e6*Math.random()|0),At=0;function kt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.da=i,this.key=++At,this.X=this.Z=!1}function Rt(t){t.X=!0,t.listener=null,t.proxy=null,t.src=null,t.da=null}function Mt(t){this.src=t,this.a={},this.b=0}function _t(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],o=Q(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Rt(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function Lt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.X&&o.listener==e&&o.capture==!!n&&o.da==r)return i}return-1}Mt.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++);var a=Lt(t,e,r,i);return-1<a?(e=t[a],n||(e.Z=!1)):((e=new kt(e,this.src,o,!!r,i)).Z=n,t.push(e)),e};var Ot="closure_lm_"+(1e6*Math.random()|0),Pt={};function xt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(M(n)){for(var a=0;a<n.length;a++)t(e,n[a],r,i,o);return null}r=jt(r);return e&&e[Nt]?e.Aa(n,r,L(i)?!!i.capture:!!i,o):Ft(e,n,r,!0,i,o)}(t,e,n,r,i);if(M(e)){for(var o=0;o<e.length;o++)xt(t,e[o],n,r,i);return null}return n=jt(n),t&&t[Nt]?t.za(e,n,L(r)?!!r.capture:!!r,i):Ft(t,e,n,!1,r,i)}function Ft(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var a=L(i)?!!i.capture:!!i;if(a&&!Tt)return null;var s=Kt(t);if(s||(t[Ot]=s=new Mt(t)),(n=s.add(e,n,r,a,o)).proxy)return n;if(r=function(){var e=Ut,n=Tt?function(t){return e.call(n.src,n.listener,t)}:function(t){if(!(t=e.call(n.src,n.listener,t)))return t};return n}(),(n.proxy=r).src=t,r.listener=n,t.addEventListener)Et||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function qt(t){if(!N(t)&&t&&!t.X){var e=t.src;if(e&&e[Nt])_t(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Kt(e))?(_t(n,t),0==n.b&&(n.src=null,e[Ot]=null)):Rt(t)}}}function Vt(t){return t in Pt?Pt[t]:Pt[t]="on"+t}function Bt(t,e){var n=t.listener,r=t.da||t.src;return t.Z&&qt(t),n.call(r,e)}function Ut(t,e){return!!t.X||(Tt?Bt(t,new Ct(e,this)):Bt(t,e=new Ct(e||A("window.event"),this)))}function Kt(t){return(t=t[Ot])instanceof Mt?t:null}var Qt="__closure_events_fn_"+(1e9*Math.random()>>>0);function jt(e){return"function"==R(e)?e:(e[Qt]||(e[Qt]=function(t){return e.handleEvent(t)}),e[Qt])}function Gt(){K.call(this),this.c=new Mt(this),(this.J=this).B=null}function Wt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var a=e[o];if(a&&!a.X&&a.capture==n){var s=a.listener,u=a.da||a.src;a.Z&&_t(t.c,a),i=!1!==s.call(u,r)&&i}}return i&&0!=r.Ia}U(Gt,K),Gt.prototype[Nt]=!0,(S=Gt.prototype).addEventListener=function(t,e,n,r){xt(this,t,e,n,r)},S.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(M(n))for(var a=0;a<n.length;a++)t(e,n[a],r,i,o);else i=L(i)?!!i.capture:!!i,r=jt(r),e&&e[Nt]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=Lt(a=e.a[n],r,i,o))&&(Rt(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete e.a[n],e.b--))):(e=e&&Kt(e))&&(n=e.a[n.toString()],e=-1,n&&(e=Lt(n,r,i,o)),(r=-1<e?n[e]:null)&&qt(r))}(this,t,e,n,r)},S.dispatchEvent=function(t){var e,n=this.B;if(n)for(e=[];n;n=n.B)e.push(n);n=this.J;var r=t.type||t;if(D(t))t=new It(t,n);else if(t instanceof It)t.target=t.target||n;else{var i=t;rt(t=new It(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var a=t.a=e[o];i=Wt(a,r,!0,t)&&i}if(i=Wt(a=t.a=n,r,!0,t)&&i,i=Wt(a,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=Wt(a=t.a=e[o],r,!1,t)&&i;return i},S.G=function(){if(Gt.N.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)Rt(n[r]);delete e.a[t],e.b--}}this.B=null},S.za=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},S.Aa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var zt=C.JSON.stringify;function Ht(t,e){this.c=t,this.f=e,this.b=0,this.a=null}function Yt(){this.b=this.a=null}Ht.prototype.get=function(){if(0<this.b){this.b--;var t=this.a;this.a=t.next,t.next=null}else t=this.c();return t};var Xt,Jt=new Ht(function(){return new Zt},function(t){t.reset()});function Zt(){this.next=this.b=this.a=null}function $t(t){C.setTimeout(function(){throw t},0)}function te(t,e){Xt||function(){var t=C.Promise.resolve(void 0);Xt=function(){t.then(re)}}(),ee||(Xt(),ee=!0),ne.add(t,e)}Yt.prototype.add=function(t,e){var n=Jt.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Zt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null};var ee=!(Zt.prototype.reset=function(){this.next=this.b=this.a=null}),ne=new Yt;function re(){for(var t;r=n=void 0,r=null,(n=ne).a&&(r=n.a,n.a=n.a.next,n.a||(n.b=null),r.next=null),t=r;){try{t.a.call(t.b)}catch(t){$t(t)}var e=Jt;e.f(t),e.b<100&&(e.b++,t.next=e.a,e.a=t)}var n,r;ee=!1}function ie(t,e){Gt.call(this),this.b=t||1,this.a=e||C,this.f=q(this.fb,this),this.g=B()}function oe(t){t.ba=!1,t.L&&(t.a.clearTimeout(t.L),t.L=null)}function ae(t,e,n){if("function"==R(t))n&&(t=q(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=q(t.handleEvent,t)}return 2147483647<Number(e)?-1:C.setTimeout(t,e||0)}function se(t,e,n){K.call(this),this.f=null!=n?q(t,n):t,this.c=e,this.b=q(this.$a,this),this.a=[]}function ue(t){t.U=ae(t.b,t.c),t.f.apply(null,t.a)}function ce(t){K.call(this),this.b=t,this.a={}}U(ie,Gt),(S=ie.prototype).ba=!1,S.L=null,S.fb=function(){if(this.ba){var t=B()-this.g;0<t&&t<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-t):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(oe(this),this.start()))}},S.start=function(){this.ba=!0,this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=B())},S.G=function(){ie.N.G.call(this),oe(this),delete this.a},U(se,K),(S=se.prototype).ea=!1,S.U=null,S.Ta=function(t){this.a=arguments,this.U?this.ea=!0:ue(this)},S.G=function(){se.N.G.call(this),this.U&&(C.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[])},S.$a=function(){this.U=null,this.ea&&(this.ea=!1,ue(this))},U(ce,K);var he=[];function le(t,e,n,r){M(n)||(n&&(he[0]=n.toString()),n=he);for(var i=0;i<n.length;i++){var o=xt(e,n[i],r||t.handleEvent,!1,t.b||t);if(!o)break;t.a[o.key]=o}}function fe(t){tt(t.a,function(t,e){this.a.hasOwnProperty(e)&&qt(t)},t),t.a={}}function pe(){}ce.prototype.G=function(){ce.N.G.call(this),fe(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var de=new Gt;function me(t){It.call(this,"serverreachability",t)}function ye(t){de.dispatchEvent(new me(de,t))}function ge(t){It.call(this,"statevent",t)}function ve(t){de.dispatchEvent(new ge(de,t))}function be(t){It.call(this,"timingevent",t)}function we(t,e){if("function"!=R(t))throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){t()},e)}U(me,It),U(ge,It),U(be,It);var Te={NO_ERROR:0,gb:1,nb:2,mb:3,jb:4,lb:5,ob:6,La:7,TIMEOUT:8,rb:9},Se={ib:"complete",vb:"success",Ma:"error",La:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",kb:"downloadprogress",wb:"uploadprogress"};function Ee(){}function Ie(t){var e;return(e=t.a)||(e=t.a={}),e}function Ce(){}Ee.prototype.a=null;var De,Ne={OPEN:"a",hb:"b",Ma:"c",qb:"d"};function Ae(){It.call(this,"d")}function ke(){It.call(this,"c")}function Re(){}function Me(t,e,n){this.g=t,this.W=e,this.V=n||1,this.I=new ce(this),this.O=_e,t=ht?125:void 0,this.P=new ie(t),this.h=null,this.b=!1,this.l=this.D=this.f=this.F=this.v=this.R=this.i=null,this.j=[],this.a=null,this.A=0,this.c=this.w=null,this.o=-1,this.m=!1,this.J=0,this.B=null,this.s=this.S=this.H=!1}U(Ae,It),U(ke,It),U(Re,Ee),De=new Re;var _e=45e3,Le={},Oe={};function Pe(t,e,n){t.F=1,t.f=sn($e(e)),t.l=n,t.H=!0,Fe(t,null)}function xe(t,e,n,r){t.F=1,t.f=sn($e(e)),t.l=null,t.H=n,Fe(t,r)}function Fe(t,e){t.v=B(),Be(t),t.D=$e(t.f),an(t.D,"t",t.V),t.A=0,t.a=t.g.$(t.g.Y()?e:null),0<t.J&&(t.B=new se(q(t.Ja,t,t.a),t.J)),le(t.I,t.a,"readystatechange",t.cb),e=t.h?et(t.h):{},t.l?(t.w||(t.w="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ca(t.D,t.w,t.l,e)):(t.w="GET",t.a.ca(t.D,t.w,null,e)),ye(1)}function qe(t,e,n){for(var r=!0;!t.m&&t.A<n.length;){var i=Ve(t,n);if(i==Oe){4==e&&(t.c=4,ve(14),r=!1);break}if(i==Le){t.c=4,ve(15),r=!1;break}Ge(t,i)}4==e&&0==n.length&&(t.c=1,ve(16),r=!1),t.b=t.b&&r,r||(je(t),Qe(t))}function Ve(t,e){var n=t.A,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?Le:(r+=1)+n>e.length?Oe:(e=e.substr(r,n),t.A=r+n,e))}function Be(t){t.R=B()+t.O,Ue(t,t.O)}function Ue(t,e){if(null!=t.i)throw Error("WatchDog timer not null");t.i=we(q(t.ab,t),e)}function Ke(t){t.i&&(C.clearTimeout(t.i),t.i=null)}function Qe(t){t.g.Ca()||t.m||t.g.na(t)}function je(t){Ke(t);var e=t.B;e&&"function"==typeof e.la&&e.la(),t.B=null,oe(t.P),fe(t.I),t.a&&(e=t.a,t.a=null,e.abort(),e.la())}function Ge(t,e){try{t.g.Fa(t,e),ye(4)}catch(t){}}function We(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(_(t)||D(t))j(t,e,void 0);else{if(t.K&&"function"==typeof t.K)var n=t.K();else if(t.C&&"function"==typeof t.C)n=void 0;else if(_(t)||D(t)){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.C&&"function"==typeof t.C)return t.C();if(D(t))return t.split("");if(_(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function ze(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ze)for(n=t.K(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t,e){Xe(t.b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Ye(t))}function Ye(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];Xe(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)Xe(i,r=t.a[e])||(i[t.a[n++]=r]=1),e++;t.a.length=n}}function Xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(S=Me.prototype).setTimeout=function(t){this.O=t},S.cb=function(t){t=t.target;var e=this.B;e&&3==$n(t)?e.Ta():this.Ja(t)},S.Ja=function(t){try{if(t==this.a)t:{var e=$n(this.a),n=this.a.ya(),r=this.a.T();if(!(e<3||3==e&&!ht&&!this.a.aa())){this.m||4!=e||7==n||ye(8==n||r<=0?3:2),Ke(this);var i=this.a.T();this.o=i;var o=this.a.aa();if(this.b=200==i){if(this.S&&!this.s){e:{if(this.a){var a=tr(this.a,"X-HTTP-Initial-Response");if(a&&!z(a)){var s=a;break e}}s=null}if(!s){this.b=!1,this.c=3,ve(12),je(this),Qe(this);break t}this.s=!0,Ge(this,s)}this.H?(qe(this,e,o),ht&&this.b&&3==e&&(le(this.I,this.P,"tick",this.bb),this.P.start())):Ge(this,o),4==e&&je(this),this.b&&!this.m&&(4==e?this.g.na(this):(this.b=!1,Be(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.c=3,ve(12)):(this.c=0,ve(13)),je(this),Qe(this)}}}catch(t){}},S.bb=function(){if(this.a){var t=$n(this.a),e=this.a.aa();this.A<e.length&&(Ke(this),qe(this,t,e),this.b&&4!=t&&Be(this))}},S.cancel=function(){this.m=!0,je(this)},S.ab=function(){this.i=null;var t=B();0<=t-this.R?(2!=this.F&&(ye(3),ve(17)),je(this),this.c=2,Qe(this)):Ue(this,this.R-t)},(S=ze.prototype).C=function(){Ye(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},S.K=function(){return Ye(this),this.a.concat()},S.get=function(t,e){return Xe(this.b,t)?this.b[t]:e},S.set=function(t,e){Xe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},S.forEach=function(t,e){for(var n=this.K(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var Je=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ze(t,e){var n;this.b=this.j=this.f="",this.i=null,this.g=this.a="",this.h=!1,t instanceof Ze?(this.h=void 0!==e?e:t.h,tn(this,t.f),this.j=t.j,en(this,t.b),nn(this,t.i),this.a=t.a,rn(this,Tn(t.c)),this.g=t.g):t&&(n=String(t).match(Je))?(this.h=!!e,tn(this,n[1]||"",!0),this.j=un(n[2]||""),en(this,n[3]||"",!0),nn(this,n[4]),this.a=un(n[5]||"",!0),rn(this,n[6]||"",!0),this.g=un(n[7]||"")):(this.h=!!e,this.c=new yn(null,this.h))}function $e(t){return new Ze(t)}function tn(t,e,n){t.f=n?un(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function en(t,e,n){t.b=n?un(e,!0):e}function nn(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.i=e}else t.i=null}function rn(t,e,n){e instanceof yn?(t.c=e,function(t,e){e&&!t.f&&(gn(t),t.c=null,t.a.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(vn(this,e),wn(this,n,t))},t)),t.f=e}(t.c,t.h)):(n||(e=cn(e,dn)),t.c=new yn(e,t.h))}function on(t,e,n){t.c.set(e,n)}function an(t,e,n){M(n)||(n=[String(n)]),wn(t.c,e,n)}function sn(t){return on(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^B()).toString(36)),t}function un(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cn(t,e,n){return D(t)?(t=encodeURI(t).replace(e,hn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ze.prototype.toString=function(){var t=[],e=this.f;e&&t.push(cn(e,ln,!0),":");var n=this.b;return!n&&"file"!=e||(t.push("//"),(e=this.j)&&t.push(cn(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.i)&&t.push(":",String(n))),(n=this.a)&&(this.b&&"/"!=n.charAt(0)&&t.push("/"),t.push(cn(n,"/"==n.charAt(0)?pn:fn,!0))),(n=this.c.toString())&&t.push("?",n),(n=this.g)&&t.push("#",cn(n,mn)),t.join("")},Ze.prototype.resolve=function(t){var e=$e(this),n=!!t.f;n?tn(e,t.f):n=!!t.j,n?e.j=t.j:n=!!t.b,n?en(e,t.b):n=null!=t.i;var r=t.a;if(n)nn(e,t.i);else if(n=!!t.a){if("/"!=r.charAt(0))if(this.b&&!this.a)r="/"+r;else{var i=e.a.lastIndexOf("/");-1!=i&&(r=e.a.substr(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(X(i,"./")||X(i,"/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");for(var o=[],a=0;a<i.length;){var s=i[a++];"."==s?r&&a==i.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&a==i.length&&o.push("")):(o.push(s),r=!0)}r=o.join("/")}else r=i}return n?e.a=r:n=""!==t.c.toString(),n?rn(e,Tn(t.c)):n=!!t.g,n&&(e.g=t.g),e};var ln=/[#\/\?@]/g,fn=/[#\?:]/g,pn=/[#\?]/g,dn=/[#\?@]/g,mn=/#/g;function yn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function gn(n){n.a||(n.a=new ze,n.b=0,n.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(n.c,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}function vn(t,e){gn(t),e=Sn(t,e),Xe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,He(t.a,e))}function bn(t,e){return gn(t),e=Sn(t,e),Xe(t.a.b,e)}function wn(t,e,n){vn(t,e),0<n.length&&(t.c=null,t.a.set(Sn(t,e),W(n)),t.b+=n.length)}function Tn(t){var e=new yn;return e.c=t.c,t.a&&(e.a=new ze(t.a),e.b=t.b),e}function Sn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function En(t){this.a=t,this.b=this.h=null,this.g=!1,this.i=null,this.c=-1,this.l=this.f=null}function In(t){var e=t.a.F.a;if(null!=e)ve(4),e?(ve(10),fr(t.a,t,!1)):(ve(11),fr(t.a,t,!0));else{t.b=new Me(t,void 0,void 0),t.b.h=t.h,e=gr(e=t.a,e.Y()?t.f:null,t.i),ve(4),an(e,"TYPE","xmlhttp");var n=t.a.j,r=t.a.I;n&&r&&on(e,n,r),xe(t.b,e,!1,t.f)}}function Cn(){this.a=this.b=null}function Dn(){this.a=new ze}function Nn(t){var e=typeof t;return"object"==e&&t||"function"==e?"o"+(t[O]||(t[O]=++P)):e.charAt(0)+t}function An(t,e){this.b=t,this.a=e}function kn(t){this.g=t||Rn,t=C.PerformanceNavigationTiming?0<(t=C.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(C.ka&&C.ka.Da&&C.ka.Da()&&C.ka.Da().yb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Dn),this.b=null,this.c=[]}(S=yn.prototype).add=function(t,e){gn(this),this.c=null,t=Sn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},S.forEach=function(n,r){gn(this),this.a.forEach(function(t,e){j(t,function(t){n.call(r,t,e,this)},this)},this)},S.K=function(){gn(this);for(var t=this.a.C(),e=this.a.K(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},S.C=function(t){gn(this);var e=[];if(D(t))bn(this,t)&&(e=G(e,this.a.get(Sn(this,t))));else{t=this.a.C();for(var n=0;n<t.length;n++)e=G(e,t[n])}return e},S.set=function(t,e){return gn(this),this.c=null,bn(this,t=Sn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},S.get=function(t,e){return t&&0<(t=this.C(t)).length?String(t[0]):e},S.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.K(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.C(r);for(var o=0;o<r.length;o++){var a=i;""!==r[o]&&(a+="="+encodeURIComponent(String(r[o]))),t.push(a)}}return this.c=t.join("&")},U(function(){},function(){}),(S=En.prototype).M=null,S.$=function(t){return this.a.$(t)},S.abort=function(){this.b&&(this.b.cancel(),this.b=null),this.c=-1},S.Ca=function(){return!1},S.Fa=function(t,e){if(this.c=t.o,0==this.M){if(!this.a.o&&(t=t.a)){var n=tr(t,"X-Client-Wire-Protocol");this.l=n||null,this.a.j&&(t=tr(t,"X-HTTP-Session-Id"))&&(this.a.I=t)}if(e){try{var r=this.a.ja.a.parse(e)}catch(t){return(e=this.a).m=this.c,void mr(e,2)}this.f=r[0]}else(e=this.a).m=this.c,mr(e,2)}else 1==this.M&&(this.g?ve(6):"11111"==e?(ve(5),this.g=!0,(!ut||10<=Number(gt))&&(this.c=200,this.b.cancel(),ve(11),fr(this.a,this,!0))):(ve(7),this.g=!1))},S.na=function(){if(this.c=this.b.o,this.b.b)0==this.M?(this.M=1,In(this)):1==this.M&&(this.g?(ve(11),fr(this.a,this,!0)):(ve(10),fr(this.a,this,!1)));else{0==this.M?ve(8):1==this.M&&ve(9);var t=this.a;t.m=this.c,mr(t,2)}},S.Y=function(){return this.a.Y()},S.ma=function(){return this.a.ma()},Dn.prototype.add=function(t){this.a.set(Nn(t),t)},Dn.prototype.C=function(){return this.a.C()};var Rn=10;function Mn(t,e){!t.a&&(X(e,"spdy")||X(e,"quic")||X(e,"h2"))&&(t.f=t.g,t.a=new Dn,t.b&&(Pn(t,t.b),t.b=null))}function _n(t){return!!t.b||!!t.a&&t.a.a.c>=t.f}function Ln(t){return t.b?1:t.a?t.a.a.c:0}function On(t,e){return t=t.b?t.b==e:!!t.a&&(e=Nn(e),Xe(t.a.a.b,e))}function Pn(t,e){t.a?t.a.add(e):t.b=e}function xn(t,e){var n;t.b&&t.b==e?t.b=null:((n=t.a)&&(n=Nn(e),n=Xe(t.a.a.b,n)),n&&He(t.a.a,Nn(e)))}function Fn(t){if(null!=t.b)return t.c.concat(t.b.j);if(null==t.a||0==t.a.a.c)return W(t.c);var e=t.c;return j(t.a.C(),function(t){e=e.concat(t.j)}),e}function qn(){}function Vn(){this.a=new qn}function Bn(t,r,e){var i=e||"";try{We(t,function(t,e){var n=t;L(t)&&(n=zt(t)),r.push(i+e+"="+encodeURIComponent(n))})}catch(t){throw r.push(i+"type="+encodeURIComponent("_badmap")),t}}function Un(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}kn.prototype.cancel=function(){this.c=Fn(this),this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(j(this.a.C(),function(t){t.cancel()}),function(t){t.b={},t.a.length=0,t.c=0}(this.a.a))},qn.prototype.stringify=function(t){return C.JSON.stringify(t,void 0)},qn.prototype.parse=function(t){return C.JSON.parse(t,void 0)};var Kn=C.JSON.parse;function Qn(t){Gt.call(this),this.headers=new ze,this.H=t||null,this.b=!1,this.s=this.a=null,this.A="",this.h=0,this.f="",this.g=this.w=this.l=this.v=!1,this.o=0,this.m=null,this.I=jn,this.D=this.F=!1}U(Qn,Gt);var jn="",Gn=/^https?$/i,Wn=["POST","PUT"];function zn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Yn(t),Jn(t)}function Yn(t){t.v||(t.v=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Xn(t){if(t.b&&void 0!==I&&(!t.s[1]||4!=$n(t)||2!=t.T()))if(t.l&&4==$n(t))ae(t.Ea,0,t);else if(t.dispatchEvent("readystatechange"),4==$n(t)){t.b=!1;try{var e,n=t.T();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var o=String(t.A).match(Je)[1]||null;if(!o&&C.self&&C.self.location){var a=C.self.location.protocol;o=a.substr(0,a.length-1)}i=!Gn.test(o?o.toLowerCase():"")}e=i}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success");else{t.h=6;try{var s=2<$n(t)?t.a.statusText:""}catch(t){s=""}t.f=s+" ["+t.T()+"]",Yn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.a){Zn(t);var n=t.a,r=t.s[0]?k:null;t.a=null,t.s=null,e||t.dispatchEvent("ready");try{n.onreadystatechange=r}catch(t){}}}function Zn(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(C.clearTimeout(t.m),t.m=null)}function $n(t){return t.a?t.a.readyState:0}function tr(t,e){return t.a?t.a.getResponseHeader(e):null}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}if(r)return t;if(n=function(t){var n="";return tt(t,function(t,e){n+=e,n+=":",n+=t,n+="\r\n"}),n}(n),D(t)){if(e=encodeURIComponent(String(e)),e+=n=null!=n?"="+encodeURIComponent(String(n)):""){if((n=t.indexOf("#"))<0&&(n=t.length),(r=t.indexOf("?"))<0||n<r){r=n;var i=""}else i=t.substring(r+1,n);n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,t=t[0]+(t[1]?"?"+t[1]:"")+t[2]}return t}return on(t,e,n),t}function nr(t){this.f=[],this.F=new Cn,this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null,this.Qa=this.P=0,this.Oa=!!A("internalChannelParams.failFast",t),this.ia=this.w=this.s=this.l=this.h=this.c=null,this.oa=!0,this.m=this.ra=this.O=-1,this.S=this.v=this.A=0,this.Na=A("internalChannelParams.baseRetryDelayMs",t)||5e3,this.Ra=A("internalChannelParams.retryDelaySeedMs",t)||1e4,this.Pa=A("internalChannelParams.forwardChannelMaxRetries",t)||2,this.qa=A("internalChannelParams.forwardChannelRequestTimeoutMs",t)||2e4,this.Ka=t&&t.zb||void 0,this.D=void 0,this.R=t&&t.supportsCrossDomainXhr||!1,this.H="",this.b=new kn(t&&t.concurrentRequestLimit),this.ja=new Vn,this.o=!t||void 0===t.backgroundChannelTest||t.backgroundChannelTest,(this.W=t&&t.fastHandshake||!1)&&!this.o&&(this.o=!0),t&&t.forceLongPolling&&(this.oa=!1),this.fa=void 0}function rr(t){if(ir(t),3==t.u){var e=t.P++,n=$e(t.B);on(n,"SID",t.H),on(n,"RID",e),on(n,"TYPE","terminate"),ur(t,n),(e=new Me(t,e,void 0)).F=2,e.f=sn($e(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(e.f.toString(),"")),!n&&C.Image&&((new Image).src=e.f,n=!0),n||(e.a=e.g.$(null),e.a.ca(e.f)),e.v=B(),Be(e)}yr(t)}function ir(t){t.w&&(t.w.abort(),t.w=null),t.a&&(t.a.cancel(),t.a=null),t.l&&(C.clearTimeout(t.l),t.l=null),pr(t),t.b.cancel(),t.h&&(N(t.h)&&C.clearTimeout(t.h),t.h=null)}function or(t,e){t.f.push(new An(t.Qa++,e)),3==t.u&&ar(t)}function ar(t){_n(t.b)||t.h||(t.h=!0,te(t.Ha,t),t.A=0)}function sr(t,e){var n;n=e?e.W:t.P++;var r=$e(t.B);on(r,"SID",t.H),on(r,"RID",n),on(r,"AID",t.O),ur(t,r),t.g&&t.i&&er(r,t.g,t.i),n=new Me(t,n,t.A+1),null===t.g&&(n.h=t.i),e&&(t.f=e.j.concat(t.f)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.qa)+Math.round(.5*t.qa*Math.random())),Pn(t.b,n),Pe(n,r,e)}function ur(t,n){t.c&&We({},function(t,e){on(n,e,t)})}function cr(t,e,n){n=Math.min(t.f.length,n);var r=t.c?q(t.c.Sa,t.c,t):null;t:for(var i=t.f,o=-1;;){var a=["count="+n];-1==o?0<n?(o=i[0].b,a.push("ofs="+o)):o=0:a.push("ofs="+o);for(var s=!0,u=0;u<n;u++){var c=i[u].b,h=i[u].a;if((c-=o)<0)o=Math.max(0,i[u].b-100),s=!1;else try{Bn(h,a,"req"+c+"_")}catch(t){r&&r(h)}}if(s){r=a.join("&");break t}}return t=t.f.splice(0,n),e.j=t,r}function hr(t){t.a||t.l||(t.S=1,te(t.Ga,t),t.v=0)}function lr(t){return!(t.a||t.l||3<=t.v)&&(t.S++,t.l=we(q(t.Ga,t),dr(t,t.v)),t.v++,!0)}function fr(t,e,n){var r=e.l;r&&Mn(t.b,r),t.ia=t.oa&&n,t.m=e.c,t.B=gr(t,null,t.ha),ar(t)}function pr(t){null!=t.s&&(C.clearTimeout(t.s),t.s=null)}function dr(t,e){var n=t.Na+Math.floor(Math.random()*t.Ra);return t.ma()||(n*=2),n*e}function mr(t,e){if(2==e){var n=null;t.c&&(n=null);var r=q(t.eb,t);n||(n=new Ze("//www.google.com/images/cleardot.gif"),C.location&&"http"==C.location.protocol||tn(n,"https"),sn(n)),function(t,e){var n=new pe;if(C.Image){var r=new Image;r.onload=V(Un,n,r,"TestLoadImage: loaded",!0,e),r.onerror=V(Un,n,r,"TestLoadImage: error",!1,e),r.onabort=V(Un,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=V(Un,n,r,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else ve(2);t.u=0,t.c&&t.c.ta(e),yr(t),ir(t)}function yr(t){t.u=0,t.m=-1,t.c&&(0==Fn(t.b).length&&0==t.f.length||(t.b.c.length=0,W(t.f),t.f.length=0),t.c.sa())}function gr(t,e,n){var r=function(t){return t instanceof Ze?$e(t):new Ze(t,void 0)}(n);if(""!=r.b)e&&en(r,e+"."+r.b),nn(r,r.i);else{var i,o=C.location;i=e?e+"."+o.hostname:o.hostname,r=function(t,e,n,r){var i=new Ze(null,void 0);return t&&tn(i,t),e&&en(i,e),n&&nn(i,n),r&&(i.a=r),i}(o.protocol,i,+o.port,n)}return t.V&&tt(t.V,function(t,e){on(r,e,t)}),e=t.j,n=t.I,e&&n&&on(r,e,n),on(r,"VER",t.wa),ur(t,r),r}function vr(){}function br(){if(ut&&!(10<=Number(gt)))throw Error("Environmental error: no available transport.")}function wr(t,e){Gt.call(this),this.a=new nr(e),this.g=t,this.m=e&&e.testUrl?e.testUrl:function(t){for(var e=t,n=1;n<arguments.length;n++){var r,i=arguments[n];if(0==i.lastIndexOf("/",0))e=i;else(r=""==e)||(r=0<=(r=e.length-1)&&e.indexOf("/",r)==r),e+=r?i:"/"+i}return e}(this.g,"test"),this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.i=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.xa&&(t?t["X-WebChannel-Client-Profile"]=e.xa:t={"X-WebChannel-Client-Profile":e.xa}),this.a.J=t,(t=e&&e.httpHeadersOverwriteParam)&&!z(t)&&(this.a.g=t),this.l=e&&e.supportsCrossDomainXhr||!1,this.h=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!z(e)&&(this.a.j=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new Er(this)}function Tr(t){Ae.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function Sr(){ke.call(this),this.status=1}function Er(t){this.a=t}(S=Qn.prototype).ca=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+t);e=e?e.toUpperCase():"GET",this.A=t,this.f="",this.h=0,this.v=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?Ie(this.H):Ie(De),this.a.onreadystatechange=q(this.Ea,this);try{this.w=!0,this.a.open(e,String(t),!0),this.w=!1}catch(t){return void Hn(this,t)}t=n||"";var i=new ze(this.headers);r&&We(r,function(t,e){i.set(e,t)}),r=function(t){t:{for(var e=zn,n=t.length,r=D(t)?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return e<0?null:D(t)?t.charAt(e):t[e]}(i.K()),n=C.FormData&&t instanceof C.FormData,0<=Q(Wn,e)&&!r&&!n&&i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.a.setRequestHeader(e,t)},this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{Zn(this),0<this.o&&((this.D=function(t){return ut&&bt(9)&&N(t.timeout)&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=q(this.Ba,this)):this.m=ae(this.Ba,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){Hn(this,t)}},S.Ba=function(){void 0!==I&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},S.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Jn(this))},S.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),Jn(this,!0)),Qn.N.G.call(this)},S.Ea=function(){this.j||(this.w||this.l||this.g?Xn(this):this.Za())},S.Za=function(){Xn(this)},S.T=function(){try{return 2<$n(this)?this.a.status:-1}catch(t){return-1}},S.aa=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},S.Ua=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Kn(e)}},S.ya=function(){return this.h},S.Xa=function(){return D(this.f)?this.f:String(this.f)},(S=nr.prototype).wa=8,S.u=1,S.Ca=function(){return 0==this.u},S.Ha=function(t){if(this.h)if(this.h=null,1==this.u){if(!t){this.P=Math.floor(1e5*Math.random()),t=this.P++;var e,n=new Me(this,t,void 0),r=this.i;if(this.J&&(r?rt(r=et(r),this.J):r=this.J),null===this.g&&(n.h=r),this.W)t:{for(var i=e=0;i<this.f.length;i++){var o=this.f[i];if(void 0===(o="__data__"in o.a&&D(o=o.a.__data__)?o.length:void 0))break;if(4096<(e+=o)){e=i;break t}if(4096===e||i===this.f.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=cr(this,n,e),on(i=$e(this.B),"RID",t),on(i,"CVER",22),this.o&&this.j&&on(i,"X-HTTP-Session-Id",this.j),ur(this,i),this.g&&r&&er(i,this.g,r),Pn(this.b,n),this.W?(on(i,"$req",e),on(i,"SID","null"),n.S=!0,Pe(n,i,null)):Pe(n,i,e),this.u=2}}else 3==this.u&&(t?sr(this,t):0==this.f.length||_n(this.b)||sr(this))},S.Ga=function(){this.l=null,this.a=new Me(this,"rpc",this.S),null===this.g&&(this.a.h=this.i),this.a.J=0;var t=$e(this.pa);on(t,"RID","rpc"),on(t,"SID",this.H),on(t,"CI",this.ia?"0":"1"),on(t,"AID",this.O),ur(this,t),on(t,"TYPE","xmlhttp"),this.g&&this.i&&er(t,this.g,this.i),this.D&&this.a.setTimeout(this.D),xe(this.a,t,!0,this.ga)},S.Fa=function(t,e){if(0!=this.u&&(this.a==t||On(this.b,t)))if(this.m=t.o,!t.s&&On(this.b,t)&&3==this.u){try{var n=this.ja.a.parse(e)}catch(t){n=null}if(M(n)&&3==n.length){if(0==(e=n)[0]){t:if(!this.l){if(this.a){if(!(this.a.v+3e3<t.v))break t;pr(this),this.a.cancel(),this.a=null}lr(this),ve(18)}}else this.ra=e[1],0<this.ra-this.O&&e[2]<37500&&this.ia&&0==this.v&&!this.s&&(this.s=we(q(this.Ya,this),6e3));if(Ln(this.b)<=1&&this.fa){try{this.fa()}catch(t){}this.fa=void 0}}else mr(this,11)}else if(!t.s&&this.a!=t||pr(this),!z(e))for(e=n=this.ja.a.parse(e),n=0;n<e.length;n++){var r=e[n];if(this.O=r[0],r=r[1],2==this.u)if("c"==r[0]){this.H=r[1],this.ga=r[2];var i=r[3];null!=i&&(this.wa=i),null!=(r=r[5])&&N(r)&&0<r&&(this.D=1.5*r),this.o&&(r=t.a)&&((i=tr(r,"X-Client-Wire-Protocol"))&&Mn(this.b,i),this.j&&(r=tr(r,"X-HTTP-Session-Id")))&&(this.I=r,on(this.B,this.j,r)),this.u=3,this.c&&this.c.va(),r=t,this.pa=gr(this,this.Y()?this.ga:null,this.ha),r.s?(xn(this.b,r),(i=this.D)&&r.setTimeout(i),r.i&&(Ke(r),Be(r)),this.a=r):hr(this),0<this.f.length&&ar(this)}else"stop"!=r[0]&&"close"!=r[0]||mr(this,7);else 3==this.u&&("stop"==r[0]||"close"==r[0]?"stop"==r[0]?mr(this,7):rr(this):"noop"!=r[0]&&this.c&&this.c.ua(r),this.v=0)}},S.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,lr(this),ve(19))},S.na=function(t){var e=null;if(this.a==t){pr(this),this.a=null;var n=2}else{if(!On(this.b,t))return;e=t.j,xn(this.b,t),n=1}if(this.m=t.o,0!=this.u)if(t.b)1==n?(e=B()-t.v,de.dispatchEvent(new be(de,t.l?t.l.length:0,e,this.A)),ar(this)):hr(this);else{var r=t.c;if(3==r||0==r&&0<this.m||!(1==n&&function(t,e){return!(Ln(t.b)>=t.b.f-(t.h?1:0))&&(t.h?(t.f=e.j.concat(t.f),!0):!(1==t.u||2==t.u||t.A>=(t.Oa?0:t.Pa))&&(t.h=we(q(t.Ha,t,e),dr(t,t.A)),t.A++,!0))}(this,t)||2==n&&lr(this)))switch(e&&0<e.length&&(t=this.b,t.c=t.c.concat(e)),r){case 1:mr(this,5);break;case 4:mr(this,10);break;case 3:mr(this,6);break;default:mr(this,2)}}},S.eb=function(t){ve(t?2:1)},S.$=function(t){if(t&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new Qn(this.Ka)).F=this.R,t},S.ma=function(){return!!this.c&&!0},S.Y=function(){return this.R},(S=vr.prototype).va=function(){},S.ua=function(){},S.ta=function(){},S.sa=function(){},S.Sa=function(){},br.prototype.a=function(t,e){return new wr(t,e)},U(wr,Gt),(S=wr.prototype).addEventListener=function(t,e,n,r){wr.N.addEventListener.call(this,t,e,n,r)},S.removeEventListener=function(t,e,n,r){wr.N.removeEventListener.call(this,t,e,n,r)},S.Va=function(){this.a.c=this.f,this.l&&(this.a.R=!0);var t=this.a,e=this.m,n=this.g,r=this.b||void 0;ve(0),t.ha=n,t.V=r||{},t.o&&(t.F.b=[],t.F.a=!1),t.w=new En(t),null===t.g&&(t.w.h=t.i),n=e,t.g&&t.i&&(n=er(e,t.g,t.i)),(t=t.w).i=n,e=gr(t.a,null,t.i),ve(3),null!=(n=t.a.F.b)?(t.f=n[0],t.M=1,In(t)):(an(e,"MODE","init"),!t.a.o&&t.a.j&&an(e,"X-HTTP-Session-Id",t.a.j),t.b=new Me(t,void 0,void 0),t.b.h=t.h,xe(t.b,e,!1,null),t.M=0)},S.close=function(){rr(this.a)},S.Wa=function(t){if(D(t)){var e={};e.__data__=t,or(this.a,e)}else this.h?((e={}).__data__=zt(t),or(this.a,e)):or(this.a,t)},S.G=function(){this.a.c=null,delete this.f,rr(this.a),delete this.a,wr.N.G.call(this)},U(Tr,Ae),U(Sr,ke),U(Er,vr),Er.prototype.va=function(){this.a.dispatchEvent("a")},Er.prototype.ua=function(t){this.a.dispatchEvent(new Tr(t))},Er.prototype.ta=function(t){this.a.dispatchEvent(new Sr(t))},Er.prototype.sa=function(){this.a.dispatchEvent("b")};var Ir=V(function(t,e){function n(){}n.prototype=t.prototype;var r=new n;return t.apply(r,Array.prototype.slice.call(arguments,1)),r},br);br.prototype.createWebChannel=br.prototype.a,wr.prototype.send=wr.prototype.Wa,wr.prototype.open=wr.prototype.Va,wr.prototype.close=wr.prototype.close,Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Se.COMPLETE="complete",(Ce.EventType=Ne).OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",Gt.prototype.listen=Gt.prototype.za,Qn.prototype.listenOnce=Qn.prototype.Aa,Qn.prototype.getLastError=Qn.prototype.Xa,Qn.prototype.getLastErrorCode=Qn.prototype.ya,Qn.prototype.getStatus=Qn.prototype.T,Qn.prototype.getResponseJson=Qn.prototype.Ua,Qn.prototype.getResponseText=Qn.prototype.aa,Qn.prototype.send=Qn.prototype.ca;var Cr,Dr,Nr={createWebChannelTransport:Ir,ErrorCode:Te,EventType:Se,WebChannel:Ce,XhrIo:Qn},Ar=Nr.createWebChannelTransport,kr=Nr.ErrorCode,Rr=Nr.EventType,Mr=Nr.WebChannel,_r=Nr.XhrIo,Lr=nm.SDK_VERSION,Or=new u("@firebase/firestore");function Pr(){return Or.logLevel===o.DEBUG?Cr.DEBUG:Or.logLevel===o.SILENT?Cr.SILENT:Cr.ERROR}function xr(t){switch(t){case Cr.DEBUG:Or.logLevel=o.DEBUG;break;case Cr.ERROR:Or.logLevel=o.ERROR;break;case Cr.SILENT:Or.logLevel=o.SILENT;break;default:Or.error("Firestore ("+Lr+"): Invalid value passed to `setLogLevel`")}}function Fr(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(Or.logLevel<=o.DEBUG){var i=n.map(Vr);Or.debug.apply(Or,a(["Firestore ("+Lr+") ["+t+"]: "+e],i))}}function qr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Or.logLevel<=o.ERROR){var r=e.map(Vr);Or.error.apply(Or,a(["Firestore ("+Lr+"): "+t],r))}}function Vr(e){if("string"==typeof e)return e;var t=Kr.getPlatform();try{return t.formatJSON(e)}catch(t){return e}}function Br(t){var e="FIRESTORE ("+Lr+") INTERNAL ASSERTION FAILED: "+t;throw qr(e),new Error(e)}function Ur(t,e){t||Br(e)}(Dr=Cr=Cr||{})[Dr.DEBUG=0]="DEBUG",Dr[Dr.ERROR=1]="ERROR",Dr[Dr.SILENT=2]="SILENT";var Kr=(Qr.setPlatform=function(t){Qr.platform&&Br("Platform already defined"),Qr.platform=t},Qr.getPlatform=function(){return Qr.platform||Br("Platform not set"),Qr.platform},Qr);function Qr(){}function jr(){return Kr.getPlatform().emptyByteString}var Gr,Wr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},zr=(t(Hr,Gr=Error),Hr);function Hr(t,e){var n=Gr.call(this,e)||this;return n.code=t,n.message=e,n.name="FirebaseError",n.toString=function(){return n.name+": [code="+n.code+"]: "+n.message},n}function Yr(t,e){function n(){var t="This constructor is private.";throw e&&(t+=" ",t+=e),new zr(Wr.INVALID_ARGUMENT,t)}for(var r in n.prototype=t.prototype,t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function Xr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jr(t,e){return void 0!==t?t:e}function Zr(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Number(n);isNaN(r)||e(r,t[n])}}function $r(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ti(t){for(var e in Ur(null!=t&&"object"==typeof t,"isEmpty() expects object parameter."),t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(0!==e.length)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+bi(e.length,"argument")+".")}function ni(t,e,n){if(e.length!==n)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires "+bi(n,"argument")+", but was called with "+bi(e.length,"argument")+".")}function ri(t,e,n){if(e.length<n)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires at least "+bi(n,"argument")+", but was called with "+bi(e.length,"argument")+".")}function ii(t,e,n,r){if(e.length<n||e.length>r)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+bi(e.length,"argument")+".")}function oi(t,e,n,r){li(t,e,vi(n)+" argument",r)}function ai(t,e,n,r){void 0!==r&&oi(t,e,n,r)}function si(t,e,n,r){li(t,e,n+" option",r)}function ui(t,e,n,r){void 0!==r&&si(t,e,n,r)}function ci(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+pi(r));for(var o=0;o<r.length;++o)if(!i(r[o]))throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be "+n+", but the value at index "+o+" was: "+pi(r[o]))}(t,e,n,r,i)}function hi(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){for(var o=[],a=0,s=i;a<s.length;a++){var u=s[a];if(u===r)return;o.push(pi(u))}var c=pi(r);throw new zr(Wr.INVALID_ARGUMENT,"Invalid value "+c+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+o.join(", "))}(t,0,n,r,i)}function li(t,e,n,r){if(!("object"===e?fi(r):"non-empty string"===e?"string"==typeof r&&""!==r:typeof r===e)){var i=pi(r);throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+i)}}function fi(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function pi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return 20<t.length&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"!=typeof t)return"function"==typeof t?"a function":Br("Unknown wrong type: "+typeof t);if(t instanceof Array)return"an array";var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&1<e.length)return e[1]}return null}(t);return e?"a custom "+e+" object":"an object"}function di(t,e,n){if(void 0===n)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+vi(e)+" argument, but it was undefined.")}function mi(n,t,r){$r(t,function(t,e){if(r.indexOf(t)<0)throw new zr(Wr.INVALID_ARGUMENT,"Unknown option '"+t+"' passed to function "+n+"(). Available options: "+r.join(", "))})}function yi(t,e,n,r){var i=pi(r);return new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires its "+vi(n)+" argument to be a "+e+", but it was: "+i)}function gi(t,e,n){if(n<=0)throw new zr(Wr.INVALID_ARGUMENT,'Function "'+t+'()" requires its '+vi(e)+" argument to be a positive number, but it was: "+n+".")}function vi(t){switch(t){case 1:return"first";case 2:return"second";case 3:return"third";default:return t+"th"}}function bi(t,e){return t+" "+e+(1===t?"":"s")}var wi=(Ti.newId=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<20;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return Ur(20===e.length,"Invalid auto ID: "+e),e},Ti);function Ti(){}function Si(t,e){return t<e?-1:e<t?1:0}function Ei(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].isEqual(e[n]))return!1;return!0}function Ii(t){return t+"\0"}function Ci(){if("undefined"==typeof Uint8Array)throw new zr(Wr.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function Di(){if(!Kr.getPlatform().base64Available)throw new zr(Wr.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var Ni=(Ai.fromBase64String=function(t){ni("Blob.fromBase64String",arguments,1),oi("Blob.fromBase64String","string",1,t),Di();try{return new Ai(Kr.getPlatform().atob(t))}catch(t){throw new zr(Wr.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},Ai.fromUint8Array=function(t){if(ni("Blob.fromUint8Array",arguments,1),Ci(),!(t instanceof Uint8Array))throw yi("Blob.fromUint8Array","Uint8Array",1,t);return new Ai(Array.prototype.map.call(t,function(t){return String.fromCharCode(t)}).join(""))},Ai.prototype.toBase64=function(){return ni("Blob.toBase64",arguments,0),Di(),Kr.getPlatform().btoa(this._binaryString)},Ai.prototype.toUint8Array=function(){ni("Blob.toUint8Array",arguments,0),Ci();for(var t=new Uint8Array(this._binaryString.length),e=0;e<this._binaryString.length;e++)t[e]=this._binaryString.charCodeAt(e);return t},Ai.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},Ai.prototype.isEqual=function(t){return this._binaryString===t._binaryString},Ai.prototype._approximateByteSize=function(){return 2*this._binaryString.length},Ai.prototype._compareTo=function(t){return Si(this._binaryString,t._binaryString)},Ai);function Ai(t){Di(),this._binaryString=t}var ki=Yr(Ni,"Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),Ri=function(t,e,n,r,i){this.databaseId=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i},Mi="(default)",_i=(Object.defineProperty(Li.prototype,"isDefaultDatabase",{get:function(){return this.database===Mi},enumerable:!0,configurable:!0}),Li.prototype.isEqual=function(t){return t instanceof Li&&t.projectId===this.projectId&&t.database===this.database},Li.prototype.compareTo=function(t){return Si(this.projectId,t.projectId)||Si(this.database,t.database)},Li);function Li(t,e){this.projectId=t,this.database=e||Mi}var Oi=(Pi.prototype.setPreviousValue=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},Pi.prototype.next=function(){var t=++this.previousValue;return this.writeNewSequenceNumber&&this.writeNewSequenceNumber(t),t},Pi.INVALID=-1,Pi);function Pi(t,e){var n=this;this.previousValue=t,e&&(e.sequenceNumberHandler=function(t){return n.setPreviousValue(t)},this.writeNewSequenceNumber=function(t){return e.writeSequenceNumber(t)})}var xi="__name__",Fi=(Object.defineProperty(qi.prototype,"length",{get:function(){return this.len},enumerable:!0,configurable:!0}),qi.prototype.isEqual=function(t){return 0===qi.comparator(this,t)},qi.prototype.child=function(t){var e=this.segments.slice(this.offset,this.limit());return t instanceof qi?t.forEach(function(t){e.push(t)}):e.push(t),this.construct(e)},qi.prototype.limit=function(){return this.offset+this.length},qi.prototype.popFirst=function(t){return t=void 0===t?1:t,Ur(this.length>=t,"Can't call popFirst() with less segments"),this.construct(this.segments,this.offset+t,this.length-t)},qi.prototype.popLast=function(){return Ur(!this.isEmpty(),"Can't call popLast() on empty path"),this.construct(this.segments,this.offset,this.length-1)},qi.prototype.firstSegment=function(){return Ur(!this.isEmpty(),"Can't call firstSegment() on empty path"),this.segments[this.offset]},qi.prototype.lastSegment=function(){return this.get(this.length-1)},qi.prototype.get=function(t){return Ur(t<this.length,"Index out of range"),this.segments[this.offset+t]},qi.prototype.isEmpty=function(){return 0===this.length},qi.prototype.isPrefixOf=function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0},qi.prototype.isImmediateParentOf=function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0},qi.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},qi.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},qi.comparator=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r);if(i<o)return-1;if(o<i)return 1}return t.length<e.length?-1:t.length>e.length?1:0},qi);function qi(t,e,n){void 0===e?e=0:e>t.length&&Br("offset "+e+" out of range "+t.length),void 0===n?n=t.length-e:n>t.length-e&&Br("length "+n+" out of range "+(t.length-e)),this.segments=t,this.offset=e,this.len=n}var Vi,Bi=(t(Ui,Vi=Fi),Ui.prototype.construct=function(t,e,n){return new Ui(t,e,n)},Ui.prototype.canonicalString=function(){return this.toArray().join("/")},Ui.prototype.toString=function(){return this.canonicalString()},Ui.fromString=function(t){if(0<=t.indexOf("//"))throw new zr(Wr.INVALID_ARGUMENT,"Invalid path ("+t+"). Paths must not contain // in them.");return new Ui(t.split("/").filter(function(t){return 0<t.length}))},Ui.EMPTY_PATH=new Ui([]),Ui);function Ui(){return null!==Vi&&Vi.apply(this,arguments)||this}var Ki,Qi=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ji=(t(Gi,Ki=Fi),Gi.prototype.construct=function(t,e,n){return new Gi(t,e,n)},Gi.isValidIdentifier=function(t){return Qi.test(t)},Gi.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),Gi.isValidIdentifier(t)||(t="`"+t+"`"),t}).join(".")},Gi.prototype.toString=function(){return this.canonicalString()},Gi.prototype.isKeyField=function(){return 1===this.length&&this.get(0)===xi},Gi.keyField=function(){return new Gi([xi])},Gi.fromServerFormat=function(t){for(var e=[],n="",r=0,i=function(){if(0===n.length)throw new zr(Wr.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'");e.push(n),n=""},o=!1;r<t.length;){var a=t[r];if("\\"===a){if(r+1===t.length)throw new zr(Wr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);var s=t[r+1];if("\\"!==s&&"."!==s&&"`"!==s)throw new zr(Wr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=s,r+=2}else"`"===a?o=!o:"."!==a||o?n+=a:i(),r++}if(i(),o)throw new zr(Wr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Gi(e)},Gi.EMPTY_PATH=new Gi([]),Gi);function Gi(){return null!==Ki&&Ki.apply(this,arguments)||this}var Wi=(zi.prototype.hasCollectionId=function(t){return 2<=this.path.length&&this.path.get(this.path.length-2)===t},zi.prototype.isEqual=function(t){return null!==t&&0===Bi.comparator(this.path,t.path)},zi.prototype.toString=function(){return this.path.toString()},zi.comparator=function(t,e){return Bi.comparator(t.path,e.path)},zi.isDocumentKey=function(t){return t.length%2==0},zi.fromSegments=function(t){return new zi(new Bi(t.slice()))},zi.fromPathString=function(t){return new zi(Bi.fromString(t))},zi.EMPTY=new zi(new Bi([])),zi);function zi(t){this.path=t,Ur(zi.isDocumentKey(t),"Invalid DocumentKey with an odd number of segments: "+t.toArray().join("/"))}var Hi,Yi,Xi=function(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})};(Yi=Hi=Hi||{}).All="all",Yi.ListenStreamIdle="listen_stream_idle",Yi.ListenStreamConnectionBackoff="listen_stream_connection_backoff",Yi.WriteStreamIdle="write_stream_idle",Yi.WriteStreamConnectionBackoff="write_stream_connection_backoff",Yi.OnlineStateTimeout="online_state_timeout",Yi.ClientMetadataRefresh="client_metadata_refresh",Yi.LruGarbageCollection="lru_garbage_collection",Yi.RetryTransaction="retry_transaction";var Ji=(Zi.createAndSchedule=function(t,e,n,r,i){var o=new Zi(t,e,Date.now()+n,r,i);return o.start(n),o},Zi.prototype.start=function(t){var e=this;this.timerHandle=setTimeout(function(){return e.handleDelayElapsed()},t)},Zi.prototype.skipDelay=function(){return this.handleDelayElapsed()},Zi.prototype.cancel=function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new zr(Wr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},Zi.prototype.handleDelayElapsed=function(){var e=this;this.asyncQueue.enqueueAndForget(function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then(function(t){return e.deferred.resolve(t)})):Promise.resolve()})},Zi.prototype.clearTimeout=function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},Zi);function Zi(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.catch=this.deferred.promise.catch.bind(this.deferred.promise),this.deferred.promise.catch(function(t){})}var $i=(Object.defineProperty(to.prototype,"isShuttingDown",{get:function(){return this._isShuttingDown},enumerable:!0,configurable:!0}),to.prototype.enqueueAndForget=function(t){this.enqueue(t)},to.prototype.enqueueAndForgetEvenAfterShutdown=function(t){this.verifyNotFailed(),this.enqueueInternal(t)},to.prototype.enqueueEvenAfterShutdown=function(t){return this.verifyNotFailed(),this.enqueueInternal(t)},to.prototype.enqueueAndInitiateShutdown=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.verifyNotFailed(),this._isShuttingDown?[3,2]:(this._isShuttingDown=!0,[4,this.enqueueEvenAfterShutdown(e)]);case 1:t.sent(),t.label=2;case 2:return[2]}})})},to.prototype.enqueue=function(t){return this.verifyNotFailed(),this._isShuttingDown?new Promise(function(t){}):this.enqueueInternal(t)},to.prototype.enqueueInternal=function(t){var n=this,e=this.tail.then(function(){return n.operationInProgress=!0,t().catch(function(t){n.failure=t,n.operationInProgress=!1;var e=t.stack||t.message||"";throw qr("INTERNAL UNHANDLED ERROR: ",e),e.indexOf("Firestore Test Simulated Error")<0&&setTimeout(function(){throw t},0),t}).then(function(t){return n.operationInProgress=!1,t})});return this.tail=e},to.prototype.enqueueAfterDelay=function(t,e,n){var r=this;this.verifyNotFailed(),Ur(0<=e,"Attempted to schedule an operation with a negative delay of "+e),-1<this.timerIdsToSkip.indexOf(t)&&(e=0);var i=Ji.createAndSchedule(this,t,e,n,function(t){return r.removeDelayedOperation(t)});return this.delayedOperations.push(i),i},to.prototype.verifyNotFailed=function(){this.failure&&Br("AsyncQueue is already failed: "+(this.failure.stack||this.failure.message))},to.prototype.verifyOperationInProgress=function(){Ur(this.operationInProgress,"verifyOpInProgress() called when no op in progress on this queue.")},to.prototype.drain=function(){return this.enqueueEvenAfterShutdown(function(){return Promise.resolve()})},to.prototype.containsDelayedOperation=function(t){for(var e=0,n=this.delayedOperations;e<n.length;e++)if(n[e].timerId===t)return!0;return!1},to.prototype.runDelayedOperationsEarly=function(r){var i=this;return this.drain().then(function(){Ur(r===Hi.All||i.containsDelayedOperation(r),"Attempted to drain to missing operation "+r),i.delayedOperations.sort(function(t,e){return t.targetTimeMs-e.targetTimeMs});for(var t=0,e=i.delayedOperations;t<e.length;t++){var n=e[t];if(n.skipDelay(),r!==Hi.All&&n.timerId===r)break}return i.drain()})},to.prototype.skipDelaysForTimerId=function(t){this.timerIdsToSkip.push(t)},to.prototype.removeDelayedOperation=function(t){var e=this.delayedOperations.indexOf(t);Ur(0<=e,"Delayed operation not found."),this.delayedOperations.splice(e,1)},to);function to(){this.tail=Promise.resolve(),this._isShuttingDown=!1,this.delayedOperations=[],this.failure=null,this.operationInProgress=!1,this.timerIdsToSkip=[]}var eo="",no="",ro="",io="";function oo(t){for(var e="",n=0;n<t.length;n++)0<e.length&&(e=so(e)),e=ao(t.get(n),e);return so(e)}function ao(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i);switch(o){case"\0":n+=eo+ro;break;case eo:n+=eo+io;break;default:n+=o}}return n}function so(t){return t+eo+no}function uo(t){var e=t.length;if(Ur(2<=e,"Invalid path "+t),2===e)return Ur(t.charAt(0)===eo&&t.charAt(1)===no,"Non-empty path "+t+" had length 2"),Bi.EMPTY_PATH;for(var n=e-2,r=[],i="",o=0;o<e;){var a=t.indexOf(eo,o);switch((a<0||n<a)&&Br('Invalid encoded resource path: "'+t+'"'),t.charAt(a+1)){case no:var s=t.substring(o,a),u=void 0;0===i.length?u=s:(u=i+=s,i=""),r.push(u);break;case ro:i+=t.substring(o,a),i+="\0";break;case io:i+=t.substring(o,a+1);break;default:Br('Invalid encoded resource path: "'+t+'"')}o=a+2}return new Bi(r)}var co=(ho.now=function(){return ho.fromMillis(Date.now())},ho.fromDate=function(t){return ho.fromMillis(t.getTime())},ho.fromMillis=function(t){var e=Math.floor(t/1e3);return new ho(e,1e6*(t-1e3*e))},ho.prototype.toDate=function(){return new Date(this.toMillis())},ho.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},ho.prototype._compareTo=function(t){return this.seconds===t.seconds?Si(this.nanoseconds,t.nanoseconds):Si(this.seconds,t.seconds)},ho.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},ho.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},ho);function ho(t,e){if(this.seconds=t,(this.nanoseconds=e)<0)throw new zr(Wr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(1e9<=e)throw new zr(Wr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new zr(Wr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(253402300800<=t)throw new zr(Wr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}var lo=(fo.fromMicroseconds=function(t){var e=Math.floor(t/1e6);return new fo(new co(e,t%1e6*1e3))},fo.fromTimestamp=function(t){return new fo(t)},fo.forDeletedDoc=function(){return fo.MIN},fo.prototype.compareTo=function(t){return this.timestamp._compareTo(t.timestamp)},fo.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},fo.prototype.toMicroseconds=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},fo.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},fo.prototype.toTimestamp=function(){return this.timestamp},fo.MIN=new fo(new co(0,0)),fo);function fo(t){this.timestamp=t}var po=(mo.prototype.insert=function(t,e){return new mo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vo.BLACK,null,null))},mo.prototype.remove=function(t){return new mo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vo.BLACK,null,null))},mo.prototype.get=function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:0<n&&(e=e.right)}return null},mo.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key);if(0===r)return e+n.left.size;n=r<0?n.left:(e+=n.left.size+1,n.right)}return-1},mo.prototype.isEmpty=function(){return this.root.isEmpty()},Object.defineProperty(mo.prototype,"size",{get:function(){return this.root.size},enumerable:!0,configurable:!0}),mo.prototype.minKey=function(){return this.root.minKey()},mo.prototype.maxKey=function(){return this.root.maxKey()},mo.prototype.inorderTraversal=function(t){return this.root.inorderTraversal(t)},mo.prototype.forEach=function(n){this.inorderTraversal(function(t,e){return n(t,e),!1})},mo.prototype.toString=function(){var n=[];return this.inorderTraversal(function(t,e){return n.push(t+":"+e),!1}),"{"+n.join(", ")+"}"},mo.prototype.reverseTraversal=function(t){return this.root.reverseTraversal(t)},mo.prototype.getIterator=function(){return new yo(this.root,null,this.comparator,!1)},mo.prototype.getIteratorFrom=function(t){return new yo(this.root,t,this.comparator,!1)},mo.prototype.getReverseIterator=function(){return new yo(this.root,null,this.comparator,!0)},mo.prototype.getReverseIteratorFrom=function(t){return new yo(this.root,t,this.comparator,!0)},mo);function mo(t,e){this.comparator=t,this.root=e||vo.EMPTY}var yo=(go.prototype.getNext=function(){Ur(0<this.nodeStack.length,"getNext() called on iterator when hasNext() is false.");var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e},go.prototype.hasNext=function(){return 0<this.nodeStack.length},go.prototype.peek=function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}},go);function go(t,e,n,r){this.isReverse=r,this.nodeStack=[];for(var i=1;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}var vo=(bo.prototype.copy=function(t,e,n,r,i){return new bo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},bo.prototype.isEmpty=function(){return!1},bo.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)},bo.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},bo.prototype.min=function(){return this.left.isEmpty()?this:this.left.min()},bo.prototype.minKey=function(){return this.min().key},bo.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},bo.prototype.insert=function(t,e,n){var r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()},bo.prototype.removeMin=function(){if(this.left.isEmpty())return bo.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()},bo.prototype.remove=function(t,e){var n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return bo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()},bo.prototype.isRed=function(){return this.color},bo.prototype.fixUp=function(){var t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t},bo.prototype.moveRedLeft=function(){var t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t},bo.prototype.moveRedRight=function(){var t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t},bo.prototype.rotateLeft=function(){var t=this.copy(null,null,bo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},bo.prototype.rotateRight=function(){var t=this.copy(null,null,bo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},bo.prototype.colorFlip=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)},bo.prototype.checkMaxDepth=function(){var t=this.check();return Math.pow(2,t)<=this.size+1},bo.prototype.check=function(){if(this.isRed()&&this.left.isRed())throw Br("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed())throw Br("Right child of ("+this.key+","+this.value+") is red");var t=this.left.check();if(t!==this.right.check())throw Br("Black depths differ");return t+(this.isRed()?0:1)},bo.EMPTY=null,bo.RED=!0,bo.BLACK=!1,bo);function bo(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:bo.RED,this.left=null!=r?r:bo.EMPTY,this.right=null!=i?i:bo.EMPTY,this.size=this.left.size+1+this.right.size}var wo=(Object.defineProperty(To.prototype,"key",{get:function(){throw Br("LLRBEmptyNode has no key.")},enumerable:!0,configurable:!0}),Object.defineProperty(To.prototype,"value",{get:function(){throw Br("LLRBEmptyNode has no value.")},enumerable:!0,configurable:!0}),Object.defineProperty(To.prototype,"color",{get:function(){throw Br("LLRBEmptyNode has no color.")},enumerable:!0,configurable:!0}),Object.defineProperty(To.prototype,"left",{get:function(){throw Br("LLRBEmptyNode has no left child.")},enumerable:!0,configurable:!0}),Object.defineProperty(To.prototype,"right",{get:function(){throw Br("LLRBEmptyNode has no right child.")},enumerable:!0,configurable:!0}),To.prototype.copy=function(t,e,n,r,i){return this},To.prototype.insert=function(t,e,n){return new vo(t,e)},To.prototype.remove=function(t,e){return this},To.prototype.isEmpty=function(){return!0},To.prototype.inorderTraversal=function(t){return!1},To.prototype.reverseTraversal=function(t){return!1},To.prototype.minKey=function(){return null},To.prototype.maxKey=function(){return null},To.prototype.isRed=function(){return!1},To.prototype.checkMaxDepth=function(){return!0},To.prototype.check=function(){return 0},To);function To(){this.size=0}vo.EMPTY=new wo;var So=(Eo.fromMapKeys=function(t){var e=new Eo(t.comparator);return t.forEach(function(t){e=e.add(t)}),e},Eo.prototype.has=function(t){return null!==this.data.get(t)},Eo.prototype.first=function(){return this.data.minKey()},Eo.prototype.last=function(){return this.data.maxKey()},Object.defineProperty(Eo.prototype,"size",{get:function(){return this.data.size},enumerable:!0,configurable:!0}),Eo.prototype.indexOf=function(t){return this.data.indexOf(t)},Eo.prototype.forEach=function(n){this.data.inorderTraversal(function(t,e){return n(t),!1})},Eo.prototype.forEachInRange=function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext();if(0<=this.comparator(r.key,t[1]))return;e(r.key)}},Eo.prototype.forEachWhile=function(t,e){var n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return},Eo.prototype.firstAfterOrEqual=function(t){var e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null},Eo.prototype.getIterator=function(){return new Io(this.data.getIterator())},Eo.prototype.getIteratorFrom=function(t){return new Io(this.data.getIteratorFrom(t))},Eo.prototype.add=function(t){return this.copy(this.data.remove(t).insert(t,!0))},Eo.prototype.delete=function(t){return this.has(t)?this.copy(this.data.remove(t)):this},Eo.prototype.isEmpty=function(){return this.data.isEmpty()},Eo.prototype.unionWith=function(t){var e=this;return t.forEach(function(t){e=e.add(t)}),e},Eo.prototype.isEqual=function(t){if(!(t instanceof Eo))return!1;if(this.size!==t.size)return!1;for(var e=this.data.getIterator(),n=t.data.getIterator();e.hasNext();){var r=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0},Eo.prototype.toArray=function(){var e=[];return this.forEach(function(t){e.push(t)}),e},Eo.prototype.toString=function(){var e=[];return this.forEach(function(t){return e.push(t)}),"SortedSet("+e.toString()+")"},Eo.prototype.copy=function(t){var e=new Eo(this.comparator);return e.data=t,e},Eo);function Eo(t){this.comparator=t,this.data=new po(this.comparator)}var Io=(Co.prototype.getNext=function(){return this.iter.getNext().key},Co.prototype.hasNext=function(){return this.iter.hasNext()},Co);function Co(t){this.iter=t}var Do=new po(Wi.comparator);function No(){return Do}function Ao(){return No()}var ko=new po(Wi.comparator);function Ro(){return ko}var Mo=new po(Wi.comparator);function _o(){return Mo}var Lo=new So(Wi.comparator);function Oo(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=Lo,r=0,i=t;r<i.length;r++){var o=i[r];n=n.add(o)}return n}var Po=new So(Si);function xo(){return Po}var Fo=(qo.prototype.applyToRemoteDocument=function(t,e,n){e&&Ur(e.key.isEqual(t),"applyToRemoteDocument: key "+t+" should match maybeDoc key\n        "+e.key);var r=n.mutationResults;Ur(r.length===this.mutations.length,"Mismatch between mutations length\n      ("+this.mutations.length+") and mutation results length\n      ("+r.length+").");for(var i=0;i<this.mutations.length;i++){var o=this.mutations[i];if(o.key.isEqual(t)){var a=r[i];e=o.applyToRemoteDocument(e,a)}}return e},qo.prototype.applyToLocalView=function(t,e){e&&Ur(e.key.isEqual(t),"applyToLocalDocument: key "+t+" should match maybeDoc key\n        "+e.key);for(var n=0,r=this.baseMutations;n<r.length;n++)(s=r[n]).key.isEqual(t)&&(e=s.applyToLocalView(e,e,this.localWriteTime));for(var i=e,o=0,a=this.mutations;o<a.length;o++){var s;(s=a[o]).key.isEqual(t)&&(e=s.applyToLocalView(e,i,this.localWriteTime))}return e},qo.prototype.applyToLocalDocumentSet=function(n){var r=this,i=n;return this.mutations.forEach(function(t){var e=r.applyToLocalView(t.key,n.get(t.key));e&&(i=i.insert(t.key,e))}),i},qo.prototype.keys=function(){return this.mutations.reduce(function(t,e){return t.add(e.key)},Oo())},qo.prototype.isEqual=function(t){return this.batchId===t.batchId&&Ei(this.mutations,t.mutations)&&Ei(this.baseMutations,t.baseMutations)},qo);function qo(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,Ur(0<(this.mutations=r).length,"Cannot create an empty mutation batch")}var Vo=(Bo.from=function(t,e,n,r){Ur(t.mutations.length===n.length,"Mutations sent "+t.mutations.length+" must equal results received "+n.length);for(var i=_o(),o=t.mutations,a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Bo(t,e,n,r,i)},Bo);function Bo(t,e,n,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.streamToken=r,this.docVersions=i}var Uo=(Ko.prototype.catch=function(t){return this.next(void 0,t)},Ko.prototype.next=function(r,i){var o=this;return this.callbackAttached&&Br("Called next() or catch() twice for PersistencePromise"),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(r,this.result):new Ko(function(e,n){o.nextCallback=function(t){o.wrapSuccess(r,t).next(e,n)},o.catchCallback=function(t){o.wrapFailure(i,t).next(e,n)}})},Ko.prototype.toPromise=function(){var n=this;return new Promise(function(t,e){n.next(t,e)})},Ko.prototype.wrapUserFunction=function(t){try{var e=t();return e instanceof Ko?e:Ko.resolve(e)}catch(t){return Ko.reject(t)}},Ko.prototype.wrapSuccess=function(t,e){return t?this.wrapUserFunction(function(){return t(e)}):Ko.resolve(e)},Ko.prototype.wrapFailure=function(t,e){return t?this.wrapUserFunction(function(){return t(e)}):Ko.reject(e)},Ko.resolve=function(n){return new Ko(function(t,e){t(n)})},Ko.reject=function(n){return new Ko(function(t,e){e(n)})},Ko.waitFor=function(t){return new Ko(function(e,n){var r=0,i=0,o=!1;t.forEach(function(t){++r,t.next(function(){++i,o&&i===r&&e()},function(t){return n(t)})}),o=!0,i===r&&e()})},Ko.or=function(t){for(var n=Ko.resolve(!1),e=function(e){n=n.next(function(t){return t?Ko.resolve(t):e()})},r=0,i=t;r<i.length;r++)e(i[r]);return n},Ko.forEach=function(t,n){var r=this,i=[];return t.forEach(function(t,e){i.push(n.call(r,t,e))}),this.waitFor(i)},Ko);function Ko(t){var e=this;this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(function(t){e.isDone=!0,e.result=t,e.nextCallback&&e.nextCallback(t)},function(t){e.isDone=!0,e.error=t,e.catchCallback&&e.catchCallback(t)})}var Qo="SimpleDb",jo=(Go.openOrCreate=function(o,t,a){return Ur(Go.isAvailable(),"IndexedDB not supported in current environment."),Fr(Qo,"Opening database:",o),new Uo(function(n,r){var i=window.indexedDB.open(o,t);i.onsuccess=function(t){var e=t.target.result;n(new Go(e))},i.onblocked=function(){r(new zr(Wr.FAILED_PRECONDITION,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=function(t){var e=t.target.error;"VersionError"===e.name?r(new zr(Wr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):r(e)},i.onupgradeneeded=function(t){Fr(Qo,'Database "'+o+'" requires upgrade from version:',t.oldVersion);var e=t.target.result;a.createOrUpgrade(e,i.transaction,t.oldVersion,fu).next(function(){Fr(Qo,"Database upgrade to version "+fu+" complete")})}}).toPromise()},Go.delete=function(t){return Fr(Qo,"Removing database:",t),Zo(window.indexedDB.deleteDatabase(t)).toPromise()},Go.isAvailable=function(){if("undefined"==typeof window||null==window.indexedDB)return!1;if(Go.isMockPersistence())return!0;if(void 0===window.navigator)return!1;var t=f(),e=Go.getIOSVersion(t),n=0<e&&e<10,r=Go.getAndroidVersion(t),i=0<r&&r<4.5;return!(0<t.indexOf("MSIE ")||0<t.indexOf("Trident/")||0<t.indexOf("Edge/")||n||i)},Go.isMockPersistence=function(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.USE_MOCK_PERSISTENCE)},Go.getStore=function(t,e){return t.store(e)},Go.getIOSVersion=function(t){var e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)},Go.getAndroidVersion=function(t){var e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)},Go.prototype.setVersionChangeListener=function(e){this.db.onversionchange=function(t){return e(t)}},Go.prototype.runTransaction=function(r,c,h){return p(this,void 0,void 0,function(){var o,a,s,e,u,n;return m(this,function(t){switch(t.label){case 0:o=r.startsWith("readonly"),a=r.endsWith("idempotent"),s=0,e=function(){var e,n,r,i;return m(this,function(t){switch(t.label){case 0:++s,e=Ho.open(u.db,o?"readonly":"readwrite",c),t.label=1;case 1:return t.trys.push([1,3,,4]),(n=h(e).catch(function(t){return e.abort(t),Uo.reject(t)}).toPromise()).catch(function(){}),[4,e.completionPromise];case 2:return t.sent(),[2,{value:n}];case 3:return r=t.sent(),i=a&&"FirebaseError"!==r.name&&s<3,Fr(Qo,"Transaction failed with error: %s. Retrying: %s.",r.message,i),i?[3,4]:[2,{value:Promise.reject(r)}];case 4:return[2]}})},u=this,t.label=1;case 1:return[5,e()];case 2:return"object"==typeof(n=t.sent())?[2,n.value]:[3,1];case 3:return[2]}})})},Go.prototype.close=function(){this.db.close()},Go);function Go(t){this.db=t,12.2===Go.getIOSVersion(f())&&qr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}var Wo=(Object.defineProperty(zo.prototype,"isDone",{get:function(){return this.shouldStop},enumerable:!0,configurable:!0}),Object.defineProperty(zo.prototype,"skipToKey",{get:function(){return this.nextKey},enumerable:!0,configurable:!0}),Object.defineProperty(zo.prototype,"cursor",{set:function(t){this.dbCursor=t},enumerable:!0,configurable:!0}),zo.prototype.done=function(){this.shouldStop=!0},zo.prototype.skip=function(t){this.nextKey=t},zo.prototype.delete=function(){return Zo(this.dbCursor.delete())},zo);function zo(t){this.dbCursor=t,this.shouldStop=!1,this.nextKey=null}var Ho=(Yo.open=function(t,e,n){return new Yo(t.transaction(n,e))},Object.defineProperty(Yo.prototype,"completionPromise",{get:function(){return this.completionDeferred.promise},enumerable:!0,configurable:!0}),Yo.prototype.abort=function(t){t&&this.completionDeferred.reject(t),this.aborted||(Fr(Qo,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},Yo.prototype.store=function(t){var e=this.transaction.objectStore(t);return Ur(!!e,"Object store not part of transaction: "+t),new Xo(e)},Yo);function Yo(t){var n=this;this.transaction=t,this.aborted=!1,this.completionDeferred=new Xi,this.transaction.oncomplete=function(){n.completionDeferred.resolve()},this.transaction.onabort=function(){t.error?n.completionDeferred.reject(t.error):n.completionDeferred.resolve()},this.transaction.onerror=function(t){var e=ta(t.target.error);n.completionDeferred.reject(e)}}var Xo=(Jo.prototype.put=function(t,e){return Zo(void 0!==e?(Fr(Qo,"PUT",this.store.name,t,e),this.store.put(e,t)):(Fr(Qo,"PUT",this.store.name,"<auto-key>",t),this.store.put(t)))},Jo.prototype.add=function(t){return Fr(Qo,"ADD",this.store.name,t,t),Zo(this.store.add(t))},Jo.prototype.get=function(e){var n=this;return Zo(this.store.get(e)).next(function(t){return void 0===t&&(t=null),Fr(Qo,"GET",n.store.name,e,t),t})},Jo.prototype.delete=function(t){return Fr(Qo,"DELETE",this.store.name,t),Zo(this.store.delete(t))},Jo.prototype.count=function(){return Fr(Qo,"COUNT",this.store.name),Zo(this.store.count())},Jo.prototype.loadAll=function(t,e){var n=this.cursor(this.options(t,e)),r=[];return this.iterateCursor(n,function(t,e){r.push(e)}).next(function(){return r})},Jo.prototype.deleteAll=function(t,e){Fr(Qo,"DELETE ALL",this.store.name);var n=this.options(t,e);n.keysOnly=!1;var r=this.cursor(n);return this.iterateCursor(r,function(t,e,n){return n.delete()})},Jo.prototype.iterate=function(t,e){var n;e?n=t:(n={},e=t);var r=this.cursor(n);return this.iterateCursor(r,e)},Jo.prototype.iterateSerial=function(i){var t=this.cursor({});return new Uo(function(n,r){t.onerror=function(t){var e=ta(t.target.error);r(e)},t.onsuccess=function(t){var e=t.target.result;e?i(e.primaryKey,e.value).next(function(t){t?e.continue():n()}):n()}})},Jo.prototype.iterateCursor=function(t,a){var s=[];return new Uo(function(o,e){t.onerror=function(t){e(t.target.error)},t.onsuccess=function(t){var e=t.target.result;if(e){var n=new Wo(e),r=a(e.primaryKey,e.value,n);if(r instanceof Uo){var i=r.catch(function(t){return n.done(),Uo.reject(t)});s.push(i)}n.isDone?o():null===n.skipToKey?e.continue():e.continue(n.skipToKey)}else o()}}).next(function(){return Uo.waitFor(s)})},Jo.prototype.options=function(t,e){var n=void 0;return void 0!==t&&("string"==typeof t?n=t:(Ur(void 0===e,"3rd argument must not be defined if 2nd is a range."),e=t)),{index:n,range:e}},Jo.prototype.cursor=function(t){var e="next";if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index);return t.keysOnly?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},Jo);function Jo(t){this.store=t}function Zo(t){return new Uo(function(n,r){t.onsuccess=function(t){var e=t.target.result;n(e)},t.onerror=function(t){var e=ta(t.target.error);r(e)}})}var $o=!1;function ta(t){var e=jo.getIOSVersion(f());if(12.2<=e&&e<13){var n="An internal error was encountered in the Indexed Database server";if(0<=t.message.indexOf(n)){var r=new zr("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+n+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");return $o||($o=!0,setTimeout(function(){throw r},0)),r}}return t}var ea=(na.forUser=function(t,e,n,r){return Ur(""!==t.uid,"UserID must not be an empty string."),new na(t.isAuthenticated()?t.uid:"",e,n,r)},na.prototype.checkEmpty=function(t){var r=!0,e=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return aa(t).iterate({index:wu.userMutationsIndex,range:e},function(t,e,n){r=!1,n.done()}).next(function(){return r})},na.prototype.acknowledgeBatch=function(e,t,n){return this.getMutationQueueMetadata(e).next(function(t){return t.lastStreamToken=oa(n),ua(e).put(t)})},na.prototype.getLastStreamToken=function(t){return this.getMutationQueueMetadata(t).next(function(t){return t.lastStreamToken})},na.prototype.setLastStreamToken=function(e,n){return this.getMutationQueueMetadata(e).next(function(t){return t.lastStreamToken=oa(n),ua(e).put(t)})},na.prototype.addMutationBatch=function(c,h,l,f){var p=this,d=sa(c),m=aa(c);return m.add({}).next(function(t){Ur("number"==typeof t,"Auto-generated key is not a number");for(var e=new Fo(t,h,l,f),n=p.serializer.toDbMutationBatch(p.userId,e),r=[],i=new So(function(t,e){return Si(t.canonicalString(),e.canonicalString())}),o=0,a=f;o<a.length;o++){var s=a[o],u=Su.key(p.userId,s.key.path,t);i=i.add(s.key.path.popLast()),r.push(m.put(n)),r.push(d.put(u,Su.PLACEHOLDER))}return i.forEach(function(t){r.push(p.indexManager.addToCollectionParentIndex(c,t))}),c.addOnCommittedListener(function(){p.documentKeysByBatchId[t]=e.keys()}),Uo.waitFor(r).next(function(){return e})})},na.prototype.lookupMutationBatch=function(t,e){var n=this;return aa(t).get(e).next(function(t){return t?(Ur(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),n.serializer.fromDbMutationBatch(t)):null})},na.prototype.lookupMutationKeys=function(t,n){var r=this;return this.documentKeysByBatchId[n]?Uo.resolve(this.documentKeysByBatchId[n]):this.lookupMutationBatch(t,n).next(function(t){if(t){var e=t.keys();return r.documentKeysByBatchId[n]=e}return null})},na.prototype.getNextMutationBatchAfterBatchId=function(t,e){var r=this,i=e+1,n=IDBKeyRange.lowerBound([this.userId,i]),o=null;return aa(t).iterate({index:wu.userMutationsIndex,range:n},function(t,e,n){e.userId===r.userId&&(Ur(e.batchId>=i,"Should have found mutation after "+i),o=r.serializer.fromDbMutationBatch(e)),n.done()}).next(function(){return o})},na.prototype.getHighestUnacknowledgedBatchId=function(t){var e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return aa(t).iterate({index:wu.userMutationsIndex,range:e,reverse:!0},function(t,e,n){r=e.batchId,n.done()}).next(function(){return r})},na.prototype.getAllMutationBatches=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return aa(t).loadAll(wu.userMutationsIndex,n).next(function(t){return t.map(function(t){return e.serializer.fromDbMutationBatch(t)})})},na.prototype.getAllMutationBatchesAffectingDocumentKey=function(s,u){var c=this,t=Su.prefixForPath(this.userId,u.path),e=IDBKeyRange.lowerBound(t),h=[];return sa(s).iterate({range:e},function(e,t,n){var r=e[0],i=e[1],o=e[2],a=uo(i);if(r===c.userId&&u.path.isEqual(a))return aa(s).get(o).next(function(t){if(!t)throw Br("Dangling document-mutation reference found: "+e+" which points to "+o);Ur(t.userId===c.userId,"Unexpected user '"+t.userId+"' for mutation batch "+o),h.push(c.serializer.fromDbMutationBatch(t))});n.done()}).next(function(){return h})},na.prototype.getAllMutationBatchesAffectingDocumentKeys=function(r,t){var u=this,c=new So(Si),i=[];return t.forEach(function(s){var t=Su.prefixForPath(u.userId,s.path),e=IDBKeyRange.lowerBound(t),n=sa(r).iterate({range:e},function(t,e,n){var r=t[0],i=t[1],o=t[2],a=uo(i);r===u.userId&&s.path.isEqual(a)?c=c.add(o):n.done()});i.push(n)}),Uo.waitFor(i).next(function(){return u.lookupMutationBatches(r,c)})},na.prototype.getAllMutationBatchesAffectingQuery=function(t,e){var s=this;Ur(!e.isDocumentQuery(),"Document queries shouldn't go down this path"),Ur(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView");var u=e.path,c=u.length+1,n=Su.prefixForPath(this.userId,u),r=IDBKeyRange.lowerBound(n),h=new So(Si);return sa(t).iterate({range:r},function(t,e,n){var r=t[0],i=t[1],o=t[2],a=uo(i);r===s.userId&&u.isPrefixOf(a)?a.length===c&&(h=h.add(o)):n.done()}).next(function(){return s.lookupMutationBatches(t,h)})},na.prototype.lookupMutationBatches=function(t,e){var n=this,r=[],i=[];return e.forEach(function(e){i.push(aa(t).get(e).next(function(t){if(null===t)throw Br("Dangling document-mutation reference found, which points to "+e);Ur(t.userId===n.userId,"Unexpected user '"+t.userId+"' for mutation batch "+e),r.push(n.serializer.fromDbMutationBatch(t))}))}),Uo.waitFor(i).next(function(){return r})},na.prototype.removeMutationBatch=function(e,n){var r=this;return ia(e.simpleDbTransaction,this.userId,n).next(function(t){return e.addOnCommittedListener(function(){r.removeCachedMutationKeys(n.batchId)}),Uo.forEach(t,function(t){return r.referenceDelegate.removeMutationReference(e,t)})})},na.prototype.removeCachedMutationKeys=function(t){delete this.documentKeysByBatchId[t]},na.prototype.performConsistencyCheck=function(n){var o=this;return this.checkEmpty(n).next(function(t){if(!t)return Uo.resolve();var e=IDBKeyRange.lowerBound(Su.prefixForUser(o.userId)),i=[];return sa(n).iterate({range:e},function(t,e,n){if(t[0]===o.userId){var r=uo(t[1]);i.push(r)}else n.done()}).next(function(){Ur(0===i.length,"Document leak -- detected dangling mutation references when queue is empty. Dangling keys: "+i.map(function(t){return t.canonicalString()}))})})},na.prototype.containsKey=function(t,e){return ra(t,this.userId,e)},na.prototype.getMutationQueueMetadata=function(t){var e=this;return ua(t).get(this.userId).next(function(t){return t||new vu(e.userId,-1,"")})},na);function na(t,e,n,r){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=r,this.documentKeysByBatchId={}}function ra(t,o,e){var n=Su.prefixForPath(o,e.path),a=n[1],r=IDBKeyRange.lowerBound(n),s=!1;return sa(t).iterate({range:r,keysOnly:!0},function(t,e,n){var r=t[0],i=t[1];t[2];r===o&&i===a&&(s=!0),n.done()}).next(function(){return s})}function ia(t,e,n){var r=t.store(wu.store),i=t.store(Su.store),o=[],a=IDBKeyRange.only(n.batchId),s=0,u=r.iterate({range:a},function(t,e,n){return s++,n.delete()});o.push(u.next(function(){Ur(1===s,"Dangling document-mutation reference found: Missing batch "+n.batchId)}));for(var c=[],h=0,l=n.mutations;h<l.length;h++){var f=l[h],p=Su.key(e,f.key.path,n.batchId);o.push(i.delete(p)),c.push(f.key)}return Uo.waitFor(o).next(function(){return c})}function oa(t){return t instanceof Uint8Array?(Ur(jo.isMockPersistence(),"Persisting non-string stream tokens is only supported with mock persistence."),t.toString()):t}function aa(t){return Cc.getStore(t,wu.store)}function sa(t){return Cc.getStore(t,Su.store)}function ua(t){return Cc.getStore(t,vu.store)}var ca,ha;(ha=ca=ca||{})[ha.QueryCache=0]="QueryCache",ha[ha.SyncEngine=1]="SyncEngine";var la=(fa.prototype.next=function(){var t=this.nextId;return this.nextId+=2,t},fa.prototype.after=function(t){return this.seek(t+2),this.next()},fa.prototype.seek=function(t){Ur((1&t)===this.generatorId,"Cannot supply target ID from different generator ID"),this.nextId=t},fa.forTargetCache=function(){return new fa(ca.QueryCache,2)},fa.forSyncEngine=function(){return new fa(ca.SyncEngine)},fa);function fa(t,e){Ur((1&(this.generatorId=t))===t,"Generator ID "+t+" contains more than 1 reserved bits"),this.seek(void 0!==e?e:this.generatorId)}var pa=(da.prototype.allocateTargetId=function(e){var n=this;return this.retrieveMetadata(e).next(function(t){return t.highestTargetId=n.targetIdGenerator.after(t.highestTargetId),n.saveMetadata(e,t).next(function(){return t.highestTargetId})})},da.prototype.getLastRemoteSnapshotVersion=function(t){return this.retrieveMetadata(t).next(function(t){return lo.fromTimestamp(new co(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))})},da.prototype.getHighestSequenceNumber=function(t){return ga(t.simpleDbTransaction)},da.prototype.setTargetsMetadata=function(e,n,r){var i=this;return this.retrieveMetadata(e).next(function(t){return t.highestListenSequenceNumber=n,r&&(t.lastRemoteSnapshotVersion=r.toTimestamp()),n>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=n),i.saveMetadata(e,t)})},da.prototype.addTargetData=function(e,n){var r=this;return this.saveTargetData(e,n).next(function(){return r.retrieveMetadata(e).next(function(t){return t.targetCount+=1,r.updateMetadataFromTargetData(n,t),r.saveMetadata(e,t)})})},da.prototype.updateTargetData=function(t,e){return this.saveTargetData(t,e)},da.prototype.removeTargetData=function(e,t){var n=this;return this.removeMatchingKeysForTargetId(e,t.targetId).next(function(){return ma(e).delete(t.targetId)}).next(function(){return n.retrieveMetadata(e)}).next(function(t){return Ur(0<t.targetCount,"Removing from an empty target cache"),t.targetCount-=1,n.saveMetadata(e,t)})},da.prototype.removeTargets=function(r,i,o){var a=this,s=0,u=[];return ma(r).iterate(function(t,e){var n=a.serializer.fromDbTarget(e);n.sequenceNumber<=i&&null===o.get(n.targetId)&&(s++,u.push(a.removeTargetData(r,n)))}).next(function(){return Uo.waitFor(u)}).next(function(){return s})},da.prototype.forEachTarget=function(t,r){var i=this;return ma(t).iterate(function(t,e){var n=i.serializer.fromDbTarget(e);r(n)})},da.prototype.retrieveMetadata=function(t){return ya(t.simpleDbTransaction)},da.prototype.saveMetadata=function(t,e){return function(t){return Cc.getStore(t,Ou.store)}(t).put(Ou.key,e)},da.prototype.saveTargetData=function(t,e){return ma(t).put(this.serializer.toDbTarget(e))},da.prototype.updateMetadataFromTargetData=function(t,e){var n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},da.prototype.getTargetCount=function(t){return this.retrieveMetadata(t).next(function(t){return t.targetCount})},da.prototype.getTargetData=function(t,i){var o=this,e=i.canonicalId(),n=IDBKeyRange.bound([e,Number.NEGATIVE_INFINITY],[e,Number.POSITIVE_INFINITY]),a=null;return ma(t).iterate({range:n,index:Ru.queryTargetsIndexName},function(t,e,n){var r=o.serializer.fromDbTarget(e);i.isEqual(r.target)&&(a=r,n.done())}).next(function(){return a})},da.prototype.addMatchingKeys=function(n,t,r){var i=this,o=[],a=va(n);return t.forEach(function(t){var e=oo(t.path);o.push(a.put(new _u(r,e))),o.push(i.referenceDelegate.addReference(n,t))}),Uo.waitFor(o)},da.prototype.removeMatchingKeys=function(n,t,r){var i=this,o=va(n);return Uo.forEach(t,function(t){var e=oo(t.path);return Uo.waitFor([o.delete([r,e]),i.referenceDelegate.removeReference(n,t)])})},da.prototype.removeMatchingKeysForTargetId=function(t,e){var n=va(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)},da.prototype.getMatchingKeysForTargetId=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=va(t),o=Oo();return r.iterate({range:n,keysOnly:!0},function(t,e,n){var r=uo(t[1]),i=new Wi(r);o=o.add(i)}).next(function(){return o})},da.prototype.containsKey=function(t,e){var n=oo(e.path),r=IDBKeyRange.bound([n],[Ii(n)],!1,!0),i=0;return va(t).iterate({index:_u.documentTargetsIndex,keysOnly:!0,range:r},function(t,e,n){var r=t[0];t[1],0!==r&&(i++,n.done())}).next(function(){return 0<i})},da.prototype.getTargetDataForTarget=function(t,e){var n=this;return ma(t).get(e).next(function(t){return t?n.serializer.fromDbTarget(t):null})},da);function da(t,e){this.referenceDelegate=t,this.serializer=e,this.targetIdGenerator=la.forTargetCache()}function ma(t){return Cc.getStore(t,Ru.store)}function ya(t){return jo.getStore(t,Ou.store).get(Ou.key).next(function(t){return Ur(null!==t,"Missing metadata row."),t})}function ga(t){return ya(t).next(function(t){return t.highestListenSequenceNumber})}function va(t){return Cc.getStore(t,_u.store)}var ba=(wa.fromSet=function(t){return new wa(t)},wa.fromArray=function(t){var e=new So(ji.comparator);return t.forEach(function(t){return e=e.add(t)}),new wa(e)},wa.prototype.covers=function(e){var n=!1;return this.fields.forEach(function(t){t.isPrefixOf(e)&&(n=!0)}),n},wa.prototype.isEqual=function(t){return this.fields.isEqual(t.fields)},wa);function wa(t){this.fields=t}var Ta=(Sa.prototype.isEqual=function(t){return this.field.isEqual(t.field)&&this.transform.isEqual(t.transform)},Sa);function Sa(t,e){this.field=t,this.transform=e}var Ea,Ia,Ca=function(t,e){this.version=t,this.transformResults=e};(Ia=Ea=Ea||{})[Ia.Set=0]="Set",Ia[Ia.Patch=1]="Patch",Ia[Ia.Transform=2]="Transform",Ia[Ia.Delete=3]="Delete",Ia[Ia.Verify=4]="Verify";var Da=(Na.exists=function(t){return new Na(void 0,t)},Na.updateTime=function(t){return new Na(t)},Object.defineProperty(Na.prototype,"isNone",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!0,configurable:!0}),Na.prototype.isValidFor=function(t){return void 0!==this.updateTime?t instanceof Ks&&t.version.isEqual(this.updateTime):void 0!==this.exists?this.exists===t instanceof Ks:(Ur(this.isNone,"Precondition should be empty"),!0)},Na.prototype.isEqual=function(t){return function(t,e){return null!=t?!(!e||!t.isEqual(e)):t===e}(this.updateTime,t.updateTime)&&this.exists===t.exists},Na.NONE=new Na,Na);function Na(t,e){this.updateTime=t,this.exists=e,Ur(void 0===t||void 0===e,'Precondition can specify "exists" or "updateTime" but not both')}var Aa=(ka.prototype.verifyKeyMatches=function(t){null!=t&&Ur(t.key.isEqual(this.key),"Can only apply a mutation to a document with the same key")},ka.getPostMutationVersion=function(t){return t instanceof Ks?t.version:lo.MIN},ka);function ka(){}var Ra,Ma=(t(_a,Ra=Aa),_a.prototype.applyToRemoteDocument=function(t,e){this.verifyKeyMatches(t),Ur(null==e.transformResults,"Transform results received by SetMutation.");var n=e.version;return new Ks(this.key,n,{hasCommittedMutations:!0},this.value)},_a.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t;var r=Aa.getPostMutationVersion(t);return new Ks(this.key,r,{hasLocalMutations:!0},this.value)},_a.prototype.extractBaseValue=function(t){return null},_a.prototype.isEqual=function(t){return t instanceof _a&&this.key.isEqual(t.key)&&this.value.isEqual(t.value)&&this.precondition.isEqual(t.precondition)},_a);function _a(t,e,n){var r=Ra.call(this)||this;return r.key=t,r.value=e,r.precondition=n,r.type=Ea.Set,r}var La,Oa=(t(Pa,La=Aa),Pa.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),Ur(null==e.transformResults,"Transform results received by PatchMutation."),!this.precondition.isValidFor(t))return new Hs(this.key,e.version);var n=this.patchDocument(t);return new Ks(this.key,e.version,{hasCommittedMutations:!0},n)},Pa.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t;var r=Aa.getPostMutationVersion(t),i=this.patchDocument(t);return new Ks(this.key,r,{hasLocalMutations:!0},i)},Pa.prototype.extractBaseValue=function(t){return null},Pa.prototype.isEqual=function(t){return t instanceof Pa&&this.key.isEqual(t.key)&&this.fieldMask.isEqual(t.fieldMask)&&this.precondition.isEqual(t.precondition)},Pa.prototype.patchDocument=function(t){var e;return e=t instanceof Ks?t.data():Os.EMPTY,this.patchObject(e)},Pa.prototype.patchObject=function(n){var r=this;return this.fieldMask.fields.forEach(function(t){if(!t.isEmpty()){var e=r.data.field(t);n=null!==e?n.set(t,e):n.delete(t)}}),n},Pa);function Pa(t,e,n,r){var i=La.call(this)||this;return i.key=t,i.data=e,i.fieldMask=n,i.precondition=r,i.type=Ea.Patch,i}var xa,Fa=(t(qa,xa=Aa),qa.prototype.applyToRemoteDocument=function(t,e){if(this.verifyKeyMatches(t),Ur(null!=e.transformResults,"Transform results missing for TransformMutation."),!this.precondition.isValidFor(t))return new Hs(this.key,e.version);var n=this.requireDocument(t),r=this.serverTransformResults(t,e.transformResults),i=e.version,o=this.transformObject(n.data(),r);return new Ks(this.key,i,{hasCommittedMutations:!0},o)},qa.prototype.applyToLocalView=function(t,e,n){if(this.verifyKeyMatches(t),!this.precondition.isValidFor(t))return t;var r=this.requireDocument(t),i=this.localTransformResults(n,t,e),o=this.transformObject(r.data(),i);return new Ks(this.key,r.version,{hasLocalMutations:!0},o)},qa.prototype.extractBaseValue=function(t){for(var e=null,n=0,r=this.fieldTransforms;n<r.length;n++){var i=r[n],o=t instanceof Ks?t.field(i.field):void 0,a=i.transform.computeBaseValue(o||null);null!=a&&(e=null==e?Os.EMPTY.set(i.field,a):e.set(i.field,a))}return e},qa.prototype.isEqual=function(t){return t instanceof qa&&this.key.isEqual(t.key)&&Ei(this.fieldTransforms,t.fieldTransforms)&&this.precondition.isEqual(t.precondition)},qa.prototype.requireDocument=function(t){return Ur(t instanceof Ks,"Unknown MaybeDocument type "+t),Ur(t.key.isEqual(this.key),"Can only transform a document with the same key"),t},qa.prototype.serverTransformResults=function(t,e){var n=[];Ur(this.fieldTransforms.length===e.length,"server transform result count ("+e.length+") should match field transform count ("+this.fieldTransforms.length+")");for(var r=0;r<e.length;r++){var i=this.fieldTransforms[r],o=i.transform,a=null;t instanceof Ks&&(a=t.field(i.field)),n.push(o.applyToRemoteDocument(a,e[r]))}return n},qa.prototype.localTransformResults=function(t,e,n){for(var r=[],i=0,o=this.fieldTransforms;i<o.length;i++){var a=o[i],s=a.transform,u=null;e instanceof Ks&&(u=e.field(a.field)),null===u&&n instanceof Ks&&(u=n.field(a.field)),r.push(s.applyToLocalView(u,t))}return r},qa.prototype.transformObject=function(t,e){Ur(e.length===this.fieldTransforms.length,"TransformResults length mismatch.");for(var n=0;n<this.fieldTransforms.length;n++){var r=this.fieldTransforms[n].field;t=t.set(r,e[n])}return t},qa);function qa(t,e){var n=xa.call(this)||this;return n.key=t,n.fieldTransforms=e,n.type=Ea.Transform,n.precondition=Da.exists(!0),n}var Va,Ba=(t(Ua,Va=Aa),Ua.prototype.applyToRemoteDocument=function(t,e){return this.verifyKeyMatches(t),Ur(null==e.transformResults,"Transform results received by DeleteMutation."),new Gs(this.key,e.version,{hasCommittedMutations:!0})},Ua.prototype.applyToLocalView=function(t,e,n){return this.verifyKeyMatches(t),this.precondition.isValidFor(t)?(t&&Ur(t.key.isEqual(this.key),"Can only apply mutation to document with same key"),new Gs(this.key,lo.forDeletedDoc())):t},Ua.prototype.extractBaseValue=function(t){return null},Ua.prototype.isEqual=function(t){return t instanceof Ua&&this.key.isEqual(t.key)&&this.precondition.isEqual(t.precondition)},Ua);function Ua(t,e){var n=Va.call(this)||this;return n.key=t,n.precondition=e,n.type=Ea.Delete,n}var Ka,Qa,ja,Ga,Wa,za=(t(Ha,Ka=Aa),Ha.prototype.applyToRemoteDocument=function(t,e){Br("VerifyMutation should only be used in Transactions.")},Ha.prototype.applyToLocalView=function(t,e,n){Br("VerifyMutation should only be used in Transactions.")},Ha.prototype.extractBaseValue=function(t){Br("VerifyMutation should only be used in Transactions.")},Ha.prototype.isEqual=function(t){return t instanceof Ha&&this.key.isEqual(t.key)&&this.precondition.isEqual(t.precondition)},Ha);function Ha(t,e){var n=Ka.call(this)||this;return n.key=t,n.precondition=e,n.type=Ea.Verify,n}(ja=Qa=Qa||{})[ja.NullValue=0]="NullValue",ja[ja.BooleanValue=1]="BooleanValue",ja[ja.NumberValue=2]="NumberValue",ja[ja.TimestampValue=3]="TimestampValue",ja[ja.StringValue=4]="StringValue",ja[ja.BlobValue=5]="BlobValue",ja[ja.RefValue=6]="RefValue",ja[ja.GeoPointValue=7]="GeoPointValue",ja[ja.ArrayValue=8]="ArrayValue",ja[ja.ObjectValue=9]="ObjectValue",(Wa=Ga=Ga||{})[Wa.Default=0]="Default",Wa[Wa.Estimate=1]="Estimate",Wa[Wa.Previous=2]="Previous";var Ya=(Xa.fromSnapshotOptions=function(t,e){switch(t.serverTimestamps){case"estimate":return new Xa(Ga.Estimate,e);case"previous":return new Xa(Ga.Previous,e);case"none":case void 0:return new Xa(Ga.Default,e);default:return Br("fromSnapshotOptions() called with invalid options.")}},Xa);function Xa(t,e){this.serverTimestampBehavior=t,this.timestampsInSnapshots=e}var Ja=(Za.prototype.toString=function(){var t=this.value();return null===t?"null":t.toString()},Za.prototype.defaultCompareTo=function(t){return Ur(this.typeOrder!==t.typeOrder,"Default compareTo should not be used for values of same type."),Si(this.typeOrder,t.typeOrder)},Za);function Za(){}var $a,ts=(t(es,$a=Ja),es.prototype.value=function(t){return null},es.prototype.isEqual=function(t){return t instanceof es},es.prototype.compareTo=function(t){return t instanceof es?0:this.defaultCompareTo(t)},es.prototype.approximateByteSize=function(){return 4},es.INSTANCE=new es,es);function es(){var t=$a.call(this)||this;return t.typeOrder=Qa.NullValue,t.internalValue=null,t}var ns,rs=(t(is,ns=Ja),is.prototype.value=function(t){return this.internalValue},is.prototype.isEqual=function(t){return t instanceof is&&this.internalValue===t.internalValue},is.prototype.compareTo=function(t){return t instanceof is?Si(this,t):this.defaultCompareTo(t)},is.prototype.approximateByteSize=function(){return 4},is.of=function(t){return t?is.TRUE:is.FALSE},is.TRUE=new is(!0),is.FALSE=new is(!1),is);function is(t){var e=ns.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.BooleanValue,e}var os,as=(t(ss,os=Ja),ss.prototype.value=function(t){return this.internalValue},ss.prototype.compareTo=function(t){return t instanceof ss?function(t,e){return t<e?-1:e<t?1:t===e?0:isNaN(t)?isNaN(e)?0:-1:1}(this.internalValue,t.internalValue):this.defaultCompareTo(t)},ss.prototype.approximateByteSize=function(){return 8},ss);function ss(t){var e=os.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.NumberValue,e}function us(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}var cs,hs=(t(ls,cs=as),ls.prototype.isEqual=function(t){return t instanceof ls&&us(this.internalValue,t.internalValue)},ls);function ls(){return null!==cs&&cs.apply(this,arguments)||this}var fs,ps=(t(ds,fs=as),ds.prototype.isEqual=function(t){return t instanceof ds&&us(this.internalValue,t.internalValue)},ds.NAN=new ds(NaN),ds.POSITIVE_INFINITY=new ds(1/0),ds.NEGATIVE_INFINITY=new ds(-1/0),ds);function ds(){return null!==fs&&fs.apply(this,arguments)||this}var ms,ys=(t(gs,ms=Ja),gs.prototype.value=function(t){return this.internalValue},gs.prototype.isEqual=function(t){return t instanceof gs&&this.internalValue===t.internalValue},gs.prototype.compareTo=function(t){return t instanceof gs?Si(this.internalValue,t.internalValue):this.defaultCompareTo(t)},gs.prototype.approximateByteSize=function(){return 2*this.internalValue.length},gs);function gs(t){var e=ms.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.StringValue,e}var vs,bs=(t(ws,vs=Ja),ws.prototype.value=function(t){return!t||t.timestampsInSnapshots?this.internalValue:this.internalValue.toDate()},ws.prototype.isEqual=function(t){return t instanceof ws&&this.internalValue.isEqual(t.internalValue)},ws.prototype.compareTo=function(t){return t instanceof ws?this.internalValue._compareTo(t.internalValue):t instanceof Ss?-1:this.defaultCompareTo(t)},ws.prototype.approximateByteSize=function(){return 16},ws);function ws(t){var e=vs.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.TimestampValue,e}var Ts,Ss=(t(Es,Ts=Ja),Es.prototype.value=function(t){return t&&t.serverTimestampBehavior===Ga.Estimate?new bs(this.localWriteTime).value(t):t&&t.serverTimestampBehavior===Ga.Previous&&this.previousValue?this.previousValue.value(t):null},Es.prototype.isEqual=function(t){return t instanceof Es&&this.localWriteTime.isEqual(t.localWriteTime)},Es.prototype.compareTo=function(t){return t instanceof Es?this.localWriteTime._compareTo(t.localWriteTime):t instanceof bs?1:this.defaultCompareTo(t)},Es.prototype.toString=function(){return"<ServerTimestamp localTime="+this.localWriteTime.toString()+">"},Es.prototype.approximateByteSize=function(){return 16+(this.previousValue?this.previousValue.approximateByteSize():0)},Es);function Es(t,e){var n=Ts.call(this)||this;return n.localWriteTime=t,n.previousValue=e,n.typeOrder=Qa.TimestampValue,n}var Is,Cs=(t(Ds,Is=Ja),Ds.prototype.value=function(t){return this.internalValue},Ds.prototype.isEqual=function(t){return t instanceof Ds&&this.internalValue.isEqual(t.internalValue)},Ds.prototype.compareTo=function(t){return t instanceof Ds?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},Ds.prototype.approximateByteSize=function(){return this.internalValue._approximateByteSize()},Ds);function Ds(t){var e=Is.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.BlobValue,e}var Ns,As=(t(ks,Ns=Ja),ks.prototype.value=function(t){return this.key},ks.prototype.isEqual=function(t){return t instanceof ks&&this.key.isEqual(t.key)&&this.databaseId.isEqual(t.databaseId)},ks.prototype.compareTo=function(t){if(t instanceof ks){var e=this.databaseId.compareTo(t.databaseId);return 0!==e?e:Wi.comparator(this.key,t.key)}return this.defaultCompareTo(t)},ks.prototype.approximateByteSize=function(){return this.databaseId.projectId.length+this.databaseId.database.length+this.key.toString().length},ks);function ks(t,e){var n=Ns.call(this)||this;return n.databaseId=t,n.key=e,n.typeOrder=Qa.RefValue,n}var Rs,Ms=(t(_s,Rs=Ja),_s.prototype.value=function(t){return this.internalValue},_s.prototype.isEqual=function(t){return t instanceof _s&&this.internalValue.isEqual(t.internalValue)},_s.prototype.compareTo=function(t){return t instanceof _s?this.internalValue._compareTo(t.internalValue):this.defaultCompareTo(t)},_s.prototype.approximateByteSize=function(){return 16},_s);function _s(t){var e=Rs.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.GeoPointValue,e}var Ls,Os=(t(Ps,Ls=Ja),Ps.prototype.value=function(n){var r={};return this.internalValue.inorderTraversal(function(t,e){r[t]=e.value(n)}),r},Ps.prototype.forEach=function(t){this.internalValue.inorderTraversal(t)},Ps.prototype.isEqual=function(t){if(t instanceof Ps){for(var e=this.internalValue.getIterator(),n=t.internalValue.getIterator();e.hasNext()&&n.hasNext();){var r=e.getNext(),i=n.getNext();if(r.key!==i.key||!r.value.isEqual(i.value))return!1}return!e.hasNext()&&!n.hasNext()}return!1},Ps.prototype.compareTo=function(t){if(t instanceof Ps){for(var e=this.internalValue.getIterator(),n=t.internalValue.getIterator();e.hasNext()&&n.hasNext();){var r=e.getNext(),i=n.getNext(),o=Si(r.key,i.key)||r.value.compareTo(i.value);if(o)return o}return Si(e.hasNext(),n.hasNext())}return this.defaultCompareTo(t)},Ps.prototype.set=function(t,e){if(Ur(!t.isEmpty(),"Cannot set field for empty path on ObjectValue"),1===t.length)return this.setChild(t.firstSegment(),e);var n=this.child(t.firstSegment());n instanceof Ps||(n=Ps.EMPTY);var r=n.set(t.popFirst(),e);return this.setChild(t.firstSegment(),r)},Ps.prototype.delete=function(t){if(Ur(!t.isEmpty(),"Cannot delete field for empty path on ObjectValue"),1===t.length)return new Ps(this.internalValue.remove(t.firstSegment()));var e=this.child(t.firstSegment());if(e instanceof Ps){var n=e.delete(t.popFirst());return new Ps(this.internalValue.insert(t.firstSegment(),n))}return this},Ps.prototype.contains=function(t){return null!==this.field(t)},Ps.prototype.field=function(t){Ur(!t.isEmpty(),"Can't get field of empty path");var e=this;return t.forEach(function(t){e=e instanceof Ps?e.internalValue.get(t):null}),e},Ps.prototype.fieldMask=function(){var i=new So(ji.comparator);return this.internalValue.forEach(function(t,e){var n=new ji([t]);if(e instanceof Ps){var r=e.fieldMask().fields;r.isEmpty()?i=i.add(n):r.forEach(function(t){i=i.add(n.child(t))})}else i=i.add(n)}),ba.fromSet(i)},Ps.prototype.approximateByteSize=function(){var n=0;return this.internalValue.inorderTraversal(function(t,e){n+=t.length+e.approximateByteSize()}),n},Ps.prototype.toString=function(){return this.internalValue.toString()},Ps.prototype.child=function(t){return this.internalValue.get(t)||void 0},Ps.prototype.setChild=function(t,e){return new Ps(this.internalValue.insert(t,e))},Ps.EMPTY=new Ps(new po(Si)),Ps);function Ps(t){var e=Ls.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.ObjectValue,e}var xs,Fs=(t(qs,xs=Ja),qs.prototype.value=function(e){return this.internalValue.map(function(t){return t.value(e)})},qs.prototype.contains=function(t){for(var e=0,n=this.internalValue;e<n.length;e++)if(n[e].isEqual(t))return!0;return!1},qs.prototype.forEach=function(t){this.internalValue.forEach(t)},qs.prototype.isEqual=function(t){if(t instanceof qs){if(this.internalValue.length!==t.internalValue.length)return!1;for(var e=0;e<this.internalValue.length;e++)if(!this.internalValue[e].isEqual(t.internalValue[e]))return!1;return!0}return!1},qs.prototype.compareTo=function(t){if(t instanceof qs){for(var e=Math.min(this.internalValue.length,t.internalValue.length),n=0;n<e;n++){var r=this.internalValue[n].compareTo(t.internalValue[n]);if(r)return r}return Si(this.internalValue.length,t.internalValue.length)}return this.defaultCompareTo(t)},qs.prototype.approximateByteSize=function(){return this.internalValue.reduce(function(t,e){return t+e.approximateByteSize()},0)},qs.prototype.toString=function(){return"["+this.internalValue.map(function(t){return t.toString()}).join(",")+"]"},qs);function qs(t){var e=xs.call(this)||this;return e.internalValue=t,e.typeOrder=Qa.ArrayValue,e}var Vs=(Bs.compareByKey=function(t,e){return Wi.comparator(t.key,e.key)},Bs);function Bs(t,e){this.key=t,this.version=e}var Us,Ks=(t(Qs,Us=Vs),Qs.prototype.field=function(t){if(this.objectValue)return this.objectValue.field(t);this.fieldValueCache||(this.fieldValueCache=new Map);var e=t.canonicalString(),n=this.fieldValueCache.get(e);if(void 0===n){var r=this.getProtoField(t);n=void 0===r?null:this.converter(r),this.fieldValueCache.set(e,n)}return n},Qs.prototype.data=function(){var n=this;if(!this.objectValue){var r=Os.EMPTY;$r(this.proto.fields||{},function(t,e){r=r.set(new ji([t]),n.converter(e))}),this.objectValue=r,this.fieldValueCache=void 0}return this.objectValue},Qs.prototype.value=function(){return this.data().value()},Qs.prototype.isEqual=function(t){return t instanceof Qs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.hasLocalMutations===t.hasLocalMutations&&this.hasCommittedMutations===t.hasCommittedMutations&&this.data().isEqual(t.data())},Qs.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.data().toString()+", {hasLocalMutations: "+this.hasLocalMutations+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(Qs.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!0,configurable:!0}),Qs.prototype.getProtoField=function(t){Ur(void 0!==this.proto,"Can only call getProtoField() when proto is defined");for(var e=this.proto.fields?this.proto.fields[t.firstSegment()]:void 0,n=1;n<t.length;++n){if(!e||!e.mapValue||!e.mapValue.fields)return;e=e.mapValue.fields[t.get(n)]}return e},Qs.compareByField=function(t,e,n){var r=e.field(t),i=n.field(t);return null!==r&&null!==i?r.compareTo(i):Br("Trying to compare documents on fields that don't exist")},Qs);function Qs(t,e,n,r,i,o){var a=Us.call(this,t,e)||this;return a.objectValue=r,a.proto=i,a.converter=o,Ur(void 0!==a.objectValue||void 0!==a.proto&&void 0!==a.converter,"If objectValue is not defined, proto and converter need to be set."),a.hasLocalMutations=!!n.hasLocalMutations,a.hasCommittedMutations=!!n.hasCommittedMutations,a}var js,Gs=(t(Ws,js=Vs),Ws.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(Ws.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!0,configurable:!0}),Ws.prototype.isEqual=function(t){return t instanceof Ws&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},Ws);function Ws(t,e,n){var r=js.call(this,t,e)||this;return r.hasCommittedMutations=!(!n||!n.hasCommittedMutations),r}var zs,Hs=(t(Ys,zs=Vs),Ys.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(Ys.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!0,configurable:!0}),Ys.prototype.isEqual=function(t){return t instanceof Ys&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},Ys);function Ys(){return null!==zs&&zs.apply(this,arguments)||this}var Xs=(Js.prototype.get=function(t){var e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(var r=0,i=n;r<i.length;r++){var o=i[r],a=o[0],s=o[1];if(a.isEqual(t))return s}},Js.prototype.has=function(t){return void 0!==this.get(t)},Js.prototype.set=function(t,e){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(var i=0;i<r.length;i++)if(r[i][0].isEqual(t))return void(r[i]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]},Js.prototype.delete=function(t){var e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(n[r][0].isEqual(t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1},Js.prototype.forEach=function(s){$r(this.inner,function(t,e){for(var n=0,r=e;n<r.length;n++){var i=r[n],o=i[0],a=i[1];s(o,a)}})},Js.prototype.isEmpty=function(){return ti(this.inner)},Js);function Js(t){this.mapKeyFn=t,this.inner={}}var Zs=(Object.defineProperty($s.prototype,"readTime",{get:function(){return Ur(void 0!==this._readTime,"Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."),this._readTime},set:function(t){Ur(void 0===this._readTime||this._readTime.isEqual(t),"All changes in a RemoteDocumentChangeBuffer must have the same read time"),this._readTime=t},enumerable:!0,configurable:!0}),$s.prototype.addEntry=function(t,e){this.assertNotApplied(),this.readTime=e,this.changes.set(t.key,t)},$s.prototype.removeEntry=function(t,e){this.assertNotApplied(),e&&(this.readTime=e),this.changes.set(t,null)},$s.prototype.getEntry=function(t,e){this.assertNotApplied();var n=this.changes.get(e);return void 0!==n?Uo.resolve(n):this.getFromCache(t,e)},$s.prototype.getEntries=function(t,e){return this.getAllFromCache(t,e)},$s.prototype.apply=function(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)},$s.prototype.assertNotApplied=function(){Ur(!this.changesApplied,"Changes have already been applied.")},$s);function $s(){this.changes=new Xs(function(t){return t.toString()}),this.changesApplied=!1}var tu,eu=(nu.prototype.addEntry=function(t,e,n){return ou(t).put(au(e),n)},nu.prototype.removeEntry=function(t,e){var n=ou(t),r=au(e);return n.delete(r)},nu.prototype.updateMetadata=function(e,n){var r=this;return this.getMetadata(e).next(function(t){return t.byteSize+=n,r.setMetadata(e,t)})},nu.prototype.getEntry=function(t,e){var n=this;return ou(t).get(au(e)).next(function(t){return n.maybeDecodeDocument(t)})},nu.prototype.getSizedEntry=function(t,e){var n=this;return ou(t).get(au(e)).next(function(t){var e=n.maybeDecodeDocument(t);return e?{maybeDocument:e,size:su(t)}:null})},nu.prototype.getEntries=function(t,e){var r=this,i=Ao();return this.forEachDbEntry(t,e,function(t,e){var n=r.maybeDecodeDocument(e);i=i.insert(t,n)}).next(function(){return i})},nu.prototype.getSizedEntries=function(t,e){var r=this,i=Ao(),o=new po(Wi.comparator);return this.forEachDbEntry(t,e,function(t,e){var n=r.maybeDecodeDocument(e);o=n?(i=i.insert(t,n),o.insert(t,su(e))):(i=i.insert(t,null),o.insert(t,0))}).next(function(){return{maybeDocuments:i,sizeMap:o}})},nu.prototype.forEachDbEntry=function(t,e,i){if(e.isEmpty())return Uo.resolve();var n=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),o=e.getIterator(),a=o.getNext();return ou(t).iterate({range:n},function(t,e,n){for(var r=Wi.fromSegments(t);a&&Wi.comparator(a,r)<0;)i(a,null),a=o.getNext();a&&a.isEqual(r)&&(i(a,e),a=o.hasNext()?o.getNext():null),a?n.skip(a.path.toArray()):n.done()}).next(function(){for(;a;)i(a,null),a=o.hasNext()?o.getNext():null})},nu.prototype.getDocumentsMatchingQuery=function(t,i,e){var o=this;Ur(!i.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView");var a=Ro(),s=i.path.length+1,n={};if(e.isEqual(lo.MIN)){var r=i.path.toArray();n.range=IDBKeyRange.lowerBound(r)}else{var u=i.path.toArray(),c=this.serializer.toDbTimestampKey(e);n.range=IDBKeyRange.lowerBound([u,c],!0),n.index=Du.collectionReadTimeIndex}return ou(t).iterate(n,function(t,e,n){if(t.length===s){var r=o.serializer.fromDbRemoteDocument(e);i.path.isPrefixOf(r.key.path)?r instanceof Ks&&i.matches(r)&&(a=a.insert(r.key,r)):n.done()}}).next(function(){return a})},nu.prototype.getNewDocumentChanges=function(t,e){var r=this,i=No(),o=this.serializer.toDbTimestampKey(e),n=ou(t),a=IDBKeyRange.lowerBound(o,!0);return n.iterate({index:Du.readTimeIndex,range:a},function(t,e){var n=r.serializer.fromDbRemoteDocument(e);i=i.insert(n.key,n),o=e.readTime}).next(function(){return{changedDocs:i,readTime:r.serializer.fromDbTimestampKey(o)}})},nu.prototype.getLastReadTime=function(t){var r=this,e=ou(t),i=lo.MIN;return e.iterate({index:Du.readTimeIndex,reverse:!0},function(t,e,n){e.readTime&&(i=r.serializer.fromDbTimestampKey(e.readTime)),n.done()}).next(function(){return i})},nu.prototype.newChangeBuffer=function(t){return new nu.RemoteDocumentChangeBuffer(this,!!t&&t.trackRemovals)},nu.prototype.getSize=function(t){return this.getMetadata(t).next(function(t){return t.byteSize})},nu.prototype.getMetadata=function(t){return iu(t).get(Au.key).next(function(t){return Ur(!!t,"Missing document cache metadata"),t})},nu.prototype.setMetadata=function(t,e){return iu(t).put(Au.key,e)},nu.prototype.maybeDecodeDocument=function(t){if(t){var e=this.serializer.fromDbRemoteDocument(t);return e instanceof Gs&&e.version.isEqual(lo.forDeletedDoc())?null:e}return null},nu.RemoteDocumentChangeBuffer=(t(ru,tu=Zs),ru.prototype.applyChanges=function(a){var s=this,u=[],c=0,h=new So(function(t,e){return Si(t.canonicalString(),e.canonicalString())});return this.changes.forEach(function(t,e){var n=s.documentSizes.get(t);if(Ur(void 0!==n,"Cannot modify a document that wasn't read (for "+t+")"),e){Ur(!s.readTime.isEqual(lo.MIN),"Cannot add a document with a read time of zero");var r=s.documentCache.serializer.toDbRemoteDocument(e,s.readTime);h=h.add(t.path.popLast());var i=su(r);c+=i-n,u.push(s.documentCache.addEntry(a,t,r))}else if(c-=n,s.trackRemovals){var o=s.documentCache.serializer.toDbRemoteDocument(new Gs(t,lo.forDeletedDoc()),s.readTime);u.push(s.documentCache.addEntry(a,t,o))}else u.push(s.documentCache.removeEntry(a,t))}),h.forEach(function(t){u.push(s.documentCache.indexManager.addToCollectionParentIndex(a,t))}),u.push(this.documentCache.updateMetadata(a,c)),Uo.waitFor(u)},ru.prototype.getFromCache=function(t,e){var n=this;return this.documentCache.getSizedEntry(t,e).next(function(t){return null===t?(n.documentSizes.set(e,0),null):(n.documentSizes.set(e,t.size),t.maybeDocument)})},ru.prototype.getAllFromCache=function(t,e){var n=this;return this.documentCache.getSizedEntries(t,e).next(function(t){var e=t.maybeDocuments;return t.sizeMap.forEach(function(t,e){n.documentSizes.set(t,e)}),e})},ru),nu);function nu(t,e){this.serializer=t,this.indexManager=e}function ru(t,e){var n=tu.call(this)||this;return n.documentCache=t,n.trackRemovals=e,n.documentSizes=new Xs(function(t){return t.toString()}),n}function iu(t){return Cc.getStore(t,Au.store)}function ou(t){return Cc.getStore(t,Du.store)}function au(t){return t.path.toArray()}function su(t){var e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Br("Unknown remote document type");e=t.noDocument}return JSON.stringify(e).length}var uu=(cu.prototype.addToCollectionParentIndex=function(t,e){return this.collectionParentIndex.add(e),Uo.resolve()},cu.prototype.getCollectionParents=function(t,e){return Uo.resolve(this.collectionParentIndex.getEntries(e))},cu);function cu(){this.collectionParentIndex=new hu}var hu=(lu.prototype.add=function(t){Ur(t.length%2==1,"Expected a collection path.");var e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new So(Bi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i},lu.prototype.has=function(t){var e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)},lu.prototype.getEntries=function(t){return(this.index[t]||new So(Bi.comparator)).toArray()},lu);function lu(){this.index={}}var fu=9,pu=(du.prototype.createOrUpgrade=function(t,e,n,r){var i=this;Ur(n<r&&0<=n&&r<=fu,"Unexpected schema upgrade from v"+n+" to v{toVersion}.");var o=new Ho(e);n<1&&1<=r&&(function(t){t.createObjectStore(yu.store)}(t),function(t){t.createObjectStore(vu.store,{keyPath:vu.keyPath}),t.createObjectStore(wu.store,{keyPath:wu.keyPath,autoIncrement:!0}).createIndex(wu.userMutationsIndex,wu.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Su.store)}(t),qu(t),function(t){t.createObjectStore(Du.store)}(t));var a=Uo.resolve();return n<3&&3<=r&&(0!==n&&(function(t){t.deleteObjectStore(_u.store),t.deleteObjectStore(Ru.store),t.deleteObjectStore(Ou.store)}(t),qu(t)),a=a.next(function(){return function(t){var e=t.store(Ou.store),n=new Ou(0,0,lo.MIN.toTimestamp(),0);return e.put(Ou.key,n)}(o)})),n<4&&4<=r&&(0!==n&&(a=a.next(function(){return function(r,i){return i.store(wu.store).loadAll().next(function(t){r.deleteObjectStore(wu.store),r.createObjectStore(wu.store,{keyPath:wu.keyPath,autoIncrement:!0}).createIndex(wu.userMutationsIndex,wu.userMutationsKeyPath,{unique:!0});var e=i.store(wu.store),n=t.map(function(t){return e.put(t)});return Uo.waitFor(n)})}(t,o)})),a=a.next(function(){!function(t){t.createObjectStore(Vu.store,{keyPath:Vu.keyPath})}(t)})),n<5&&5<=r&&(a=a.next(function(){return i.removeAcknowledgedMutations(o)})),n<6&&6<=r&&(a=a.next(function(){return function(t){t.createObjectStore(Au.store)}(t),i.addDocumentGlobal(o)})),n<7&&7<=r&&(a=a.next(function(){return i.ensureSequenceNumbers(o)})),n<8&&8<=r&&(a=a.next(function(){return i.createCollectionParentIndex(t,o)})),n<9&&9<=r&&(a=a.next(function(){!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){var e=t.objectStore(Du.store);e.createIndex(Du.readTimeIndex,Du.readTimeIndexPath,{unique:!1}),e.createIndex(Du.collectionReadTimeIndex,Du.collectionReadTimeIndexPath,{unique:!1})}(e)})),a},du.prototype.addDocumentGlobal=function(e){var n=0;return e.store(Du.store).iterate(function(t,e){n+=su(e)}).next(function(){var t=new Au(n);return e.store(Au.store).put(Au.key,t)})},du.prototype.removeAcknowledgedMutations=function(r){var i=this,t=r.store(vu.store),e=r.store(wu.store);return t.loadAll().next(function(t){return Uo.forEach(t,function(n){var t=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId]);return e.loadAll(wu.userMutationsIndex,t).next(function(t){return Uo.forEach(t,function(t){Ur(t.userId===n.userId,"Cannot process batch "+t.batchId+" from unexpected user");var e=i.serializer.fromDbMutationBatch(t);return ia(r,n.userId,e).next(function(){})})})})})},du.prototype.ensureSequenceNumbers=function(t){var a=t.store(_u.store),e=t.store(Du.store);return ga(t).next(function(i){var o=[];return e.iterate(function(t,e){var n=new Bi(t),r=function(t){return[0,oo(t)]}(n);o.push(a.get(r).next(function(t){return t?Uo.resolve():function(t){return a.put(new _u(0,oo(t),i))}(n)}))}).next(function(){return Uo.waitFor(o)})})},du.prototype.createCollectionParentIndex=function(t,e){function i(t){if(o.add(t)){var e=t.lastSegment(),n=t.popLast();return r.put({collectionId:e,parent:oo(n)})}}t.createObjectStore(xu.store,{keyPath:xu.keyPath});var r=e.store(xu.store),o=new hu;return e.store(Du.store).iterate({keysOnly:!0},function(t,e){var n=new Bi(t);return i(n.popLast())}).next(function(){return e.store(Su.store).iterate({keysOnly:!0},function(t,e){t[0];var n=t[1],r=(t[2],uo(n));return i(r.popLast())})})},du);function du(t){this.serializer=t}var mu=function(t,e){this.seconds=t,this.nanoseconds=e},yu=(gu.store="owner",gu.key="owner",gu);function gu(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}var vu=(bu.store="mutationQueues",bu.keyPath="userId",bu);function bu(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}var wu=(Tu.store="mutations",Tu.keyPath="batchId",Tu.userMutationsIndex="userMutationsIndex",Tu.userMutationsKeyPath=["userId","batchId"],Tu);function Tu(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}var Su=(Eu.prefixForUser=function(t){return[t]},Eu.prefixForPath=function(t,e){return[t,oo(e)]},Eu.key=function(t,e,n){return[t,oo(e),n]},Eu.store="documentMutations",Eu.PLACEHOLDER=new Eu,Eu);function Eu(){}var Iu=function(t,e){this.path=t,this.readTime=e},Cu=function(t,e){this.path=t,this.version=e},Du=(Nu.store="remoteDocuments",Nu.readTimeIndex="readTimeIndex",Nu.readTimeIndexPath="readTime",Nu.collectionReadTimeIndex="collectionReadTimeIndex",Nu.collectionReadTimeIndexPath=["parentPath","readTime"],Nu);function Nu(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}var Au=(ku.store="remoteDocumentGlobal",ku.key="remoteDocumentGlobalKey",ku);function ku(t){this.byteSize=t}var Ru=(Mu.store="targets",Mu.keyPath="targetId",Mu.queryTargetsIndexName="queryTargetsIndex",Mu.queryTargetsKeyPath=["canonicalId","targetId"],Mu);function Mu(t,e,n,r,i,o,a){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}var _u=(Lu.store="targetDocuments",Lu.keyPath=["targetId","path"],Lu.documentTargetsIndex="documentTargetsIndex",Lu.documentTargetsKeyPath=["path","targetId"],Lu);function Lu(t,e,n){this.targetId=t,this.path=e,Ur(0===t==(void 0!==(this.sequenceNumber=n)),"A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")}var Ou=(Pu.key="targetGlobalKey",Pu.store="targetGlobal",Pu);function Pu(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}var xu=(Fu.store="collectionParents",Fu.keyPath=["collectionId","parent"],Fu);function Fu(t,e){this.collectionId=t,this.parent=e}function qu(t){t.createObjectStore(_u.store,{keyPath:_u.keyPath}).createIndex(_u.documentTargetsIndex,_u.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Ru.store,{keyPath:Ru.keyPath}).createIndex(Ru.queryTargetsIndexName,Ru.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Ou.store)}var Vu=(Bu.store="clientMetadata",Bu.keyPath="clientId",Bu);function Bu(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}var Uu,Ku,Qu=a(a(a([vu.store,wu.store,Su.store,Du.store,Ru.store,yu.store,Ou.store,_u.store],[Vu.store]),[Au.store]),[xu.store]),ju=(Gu.prototype.addToCollectionParentIndex=function(t,e){var n=this;if(Ur(e.length%2==1,"Expected a collection path."),this.collectionParentsCache.has(e))return Uo.resolve();var r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(function(){n.collectionParentsCache.add(e)});var o={collectionId:r,parent:oo(i)};return Wu(t).put(o)},Gu.prototype.getCollectionParents=function(t,i){var o=[],e=IDBKeyRange.bound([i,""],[Ii(i),""],!1,!0);return Wu(t).loadAll(e).next(function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.collectionId!==i)break;o.push(uo(r.parent))}return o})},Gu);function Gu(){this.collectionParentsCache=new hu}function Wu(t){return Cc.getStore(t,xu.store)}(Ku=Uu=Uu||{})[Ku.Listen=0]="Listen",Ku[Ku.ExistenceFilterMismatch=1]="ExistenceFilterMismatch",Ku[Ku.LimboResolution=2]="LimboResolution";var zu=(Hu.prototype.withSequenceNumber=function(t){return new Hu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)},Hu.prototype.withResumeToken=function(t,e){return new Hu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)},Hu.prototype.withLastLimboFreeSnapshotVersion=function(t){return new Hu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)},Hu.prototype.isEqual=function(t){return this.targetId===t.targetId&&this.purpose===t.purpose&&this.sequenceNumber===t.sequenceNumber&&this.snapshotVersion.isEqual(t.snapshotVersion)&&this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion)&&this.resumeToken===t.resumeToken&&this.target.isEqual(t.target)},Hu);function Hu(t,e,n,r,i,o,a){void 0===i&&(i=lo.MIN),void 0===o&&(o=lo.MIN),void 0===a&&(a=jr()),this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}var Yu=(Xu.prototype.fromDbRemoteDocument=function(t){if(t.document)return this.remoteSerializer.fromDocument(t.document,!!t.hasCommittedMutations);if(t.noDocument){var e=Wi.fromSegments(t.noDocument.path),n=this.fromDbTimestamp(t.noDocument.readTime);return new Gs(e,n,{hasCommittedMutations:!!t.hasCommittedMutations})}return t.unknownDocument?(e=Wi.fromSegments(t.unknownDocument.path),n=this.fromDbTimestamp(t.unknownDocument.version),new Hs(e,n)):Br("Unexpected DbRemoteDocument")},Xu.prototype.toDbRemoteDocument=function(t,e){var n=this.toDbTimestampKey(e),r=t.key.path.popLast().toArray();if(t instanceof Ks){var i=t.proto?t.proto:this.remoteSerializer.toDocument(t),o=t.hasCommittedMutations;return new Du(null,null,i,o,n,r)}if(t instanceof Gs){var a=t.key.path.toArray(),s=this.toDbTimestamp(t.version);return o=t.hasCommittedMutations,new Du(null,new Iu(a,s),null,o,n,r)}if(t instanceof Hs){a=t.key.path.toArray();var u=this.toDbTimestamp(t.version);return new Du(new Cu(a,u),null,null,!0,n,r)}return Br("Unexpected MaybeDocument")},Xu.prototype.toDbTimestampKey=function(t){var e=t.toTimestamp();return[e.seconds,e.nanoseconds]},Xu.prototype.fromDbTimestampKey=function(t){var e=new co(t[0],t[1]);return lo.fromTimestamp(e)},Xu.prototype.toDbTimestamp=function(t){var e=t.toTimestamp();return new mu(e.seconds,e.nanoseconds)},Xu.prototype.fromDbTimestamp=function(t){var e=new co(t.seconds,t.nanoseconds);return lo.fromTimestamp(e)},Xu.prototype.toDbMutationBatch=function(t,e){var n=this,r=e.baseMutations.map(function(t){return n.remoteSerializer.toMutation(t)}),i=e.mutations.map(function(t){return n.remoteSerializer.toMutation(t)});return new wu(t,e.batchId,e.localWriteTime.toMillis(),r,i)},Xu.prototype.fromDbMutationBatch=function(t){var e=this,n=(t.baseMutations||[]).map(function(t){return e.remoteSerializer.fromMutation(t)}),r=t.mutations.map(function(t){return e.remoteSerializer.fromMutation(t)}),i=co.fromMillis(t.localWriteTimeMs);return new Fo(t.batchId,i,n,r)},Xu.prototype.toDbResourcePaths=function(t){var e=[];return t.forEach(function(t){e.push(oo(t.path))}),e},Xu.prototype.fromDbResourcePaths=function(t){for(var e=Oo(),n=0,r=t;n<r.length;n++){var i=r[n];e=e.add(new Wi(uo(i)))}return e},Xu.prototype.fromDbTarget=function(t){var e,n=this.fromDbTimestamp(t.readTime),r=void 0!==t.lastLimboFreeSnapshotVersion?this.fromDbTimestamp(t.lastLimboFreeSnapshotVersion):lo.MIN,i=t.resumeToken;return e=function(t){return void 0!==t.documents}(t.query)?this.remoteSerializer.fromDocumentsTarget(t.query):this.remoteSerializer.fromQueryTarget(t.query),new zu(e,t.targetId,Uu.Listen,t.lastListenSequenceNumber,n,r,i)},Xu.prototype.toDbTarget=function(t){Ur(Uu.Listen===t.purpose,"Only queries with purpose "+Uu.Listen+" may be stored, got "+t.purpose);var e,n,r=this.toDbTimestamp(t.snapshotVersion),i=this.toDbTimestamp(t.lastLimboFreeSnapshotVersion);return e=t.target.isDocumentQuery()?this.remoteSerializer.toDocumentsTarget(t.target):this.remoteSerializer.toQueryTarget(t.target),n=t.resumeToken instanceof Uint8Array?(Ur(jo.isMockPersistence(),"Persisting non-string stream tokens is only supported with mock persistence ."),t.resumeToken.toString()):t.resumeToken,new Ru(t.targetId,t.target.canonicalId(),r,n,t.sequenceNumber,i,e)},Xu);function Xu(t){this.remoteSerializer=t}var Ju=(Zu.prototype.getDocument=function(e,n){var r=this;return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e,n).next(function(t){return r.getDocumentInternal(e,n,t)})},Zu.prototype.getDocumentInternal=function(t,r,i){return this.remoteDocumentCache.getEntry(t,r).next(function(t){for(var e=0,n=i;e<n.length;e++)t=n[e].applyToLocalView(r,t);return t})},Zu.prototype.applyLocalMutationsToDocuments=function(t,e,i){var o=Ao();return e.forEach(function(t,e){for(var n=0,r=i;n<r.length;n++)e=r[n].applyToLocalView(t,e);o=o.insert(t,e)}),o},Zu.prototype.getDocuments=function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next(function(t){return n.getLocalViewOfDocuments(e,t)})},Zu.prototype.getLocalViewOfDocuments=function(r,i){var o=this;return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r,i).next(function(t){var e=o.applyLocalMutationsToDocuments(r,i,t),n=No();return e.forEach(function(t,e){e=e||new Gs(t,lo.forDeletedDoc()),n=n.insert(t,e)}),n})},Zu.prototype.getDocumentsMatchingQuery=function(t,e,n){return e.isDocumentQuery()?this.getDocumentsMatchingDocumentQuery(t,e.path):e.isCollectionGroupQuery()?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)},Zu.prototype.getDocumentsMatchingDocumentQuery=function(t,e){return this.getDocument(t,new Wi(e)).next(function(t){var e=Ro();return t instanceof Ks&&(e=e.insert(t.key,t)),e})},Zu.prototype.getDocumentsMatchingCollectionGroupQuery=function(n,r,i){var o=this;Ur(r.path.isEmpty(),"Currently we only support collection group queries at the root.");var a=r.collectionGroup,s=Ro();return this.indexManager.getCollectionParents(n,a).next(function(t){return Uo.forEach(t,function(t){var e=r.asCollectionQueryAtPath(t.child(a));return o.getDocumentsMatchingCollectionQuery(n,e,i).next(function(t){t.forEach(function(t,e){s=s.insert(t,e)})})}).next(function(){return s})})},Zu.prototype.getDocumentsMatchingCollectionQuery=function(e,n,t){var h,l,r=this;return this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,t).next(function(t){return h=t,r.mutationQueue.getAllMutationBatchesAffectingQuery(e,n)}).next(function(t){return l=t,r.addMissingBaseDocuments(e,l,h).next(function(t){h=t;for(var e=0,n=l;e<n.length;e++)for(var r=n[e],i=0,o=r.mutations;i<o.length;i++){var a=o[i],s=a.key,u=h.get(s),c=a.applyToLocalView(u,u,r.localWriteTime);h=c instanceof Ks?h.insert(s,c):h.remove(s)}})}).next(function(){return h.forEach(function(t,e){n.matches(e)||(h=h.remove(t))}),h})},Zu.prototype.addMissingBaseDocuments=function(t,e,n){for(var r=Oo(),i=0,o=e;i<o.length;i++)for(var a=0,s=o[i].mutations;a<s.length;a++){var u=s[a];u instanceof Oa&&null===n.get(u.key)&&(r=r.add(u.key))}var c=n;return this.remoteDocumentCache.getEntries(t,r).next(function(t){return t.forEach(function(t,e){null!==e&&e instanceof Ks&&(c=c.insert(t,e))}),c})},Zu);function Zu(t,e,n){this.remoteDocumentCache=t,this.mutationQueue=e,this.indexManager=n}var $u="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",tc=(ec.prototype.addOnCommittedListener=function(t){this.onCommittedListeners.push(t)},ec.prototype.raiseOnCommittedEvent=function(){this.onCommittedListeners.forEach(function(t){return t()})},ec);function ec(){this.onCommittedListeners=[]}var nc=(rc.prototype.isEmpty=function(){return this.refsByKey.isEmpty()},rc.prototype.addReference=function(t,e){var n=new ic(t,e);this.refsByKey=this.refsByKey.add(n),this.refsByTarget=this.refsByTarget.add(n)},rc.prototype.addReferences=function(t,e){var n=this;t.forEach(function(t){return n.addReference(t,e)})},rc.prototype.removeReference=function(t,e){this.removeRef(new ic(t,e))},rc.prototype.removeReferences=function(t,e){var n=this;t.forEach(function(t){return n.removeReference(t,e)})},rc.prototype.removeReferencesForId=function(t){var e=this,n=Wi.EMPTY,r=new ic(n,t),i=new ic(n,t+1),o=[];return this.refsByTarget.forEachInRange([r,i],function(t){e.removeRef(t),o.push(t.key)}),o},rc.prototype.removeAllReferences=function(){var e=this;this.refsByKey.forEach(function(t){return e.removeRef(t)})},rc.prototype.removeRef=function(t){this.refsByKey=this.refsByKey.delete(t),this.refsByTarget=this.refsByTarget.delete(t)},rc.prototype.referencesForId=function(t){var e=Wi.EMPTY,n=new ic(e,t),r=new ic(e,t+1),i=Oo();return this.refsByTarget.forEachInRange([n,r],function(t){i=i.add(t.key)}),i},rc.prototype.containsKey=function(t){var e=new ic(t,0),n=this.refsByKey.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)},rc);function rc(){this.refsByKey=new So(ic.compareByKey),this.refsByTarget=new So(ic.compareByTargetId)}var ic=(oc.compareByKey=function(t,e){return Wi.comparator(t.key,e.key)||Si(t.targetOrBatchId,e.targetOrBatchId)},oc.compareByTargetId=function(t,e){return Si(t.targetOrBatchId,e.targetOrBatchId)||Wi.comparator(t.key,e.key)},oc);function oc(t,e){this.key=t,this.targetOrBatchId=e}var ac="LocalStore",sc=(uc.prototype.start=function(){return this.synchronizeLastDocumentChangeReadTime()},uc.prototype.handleUserChange=function(i){return p(this,void 0,void 0,function(){var e,y,n,r=this;return m(this,function(t){switch(t.label){case 0:return e=this.mutationQueue,y=this.localDocuments,[4,this.persistence.runTransaction("Handle user change","readonly-idempotent",function(d){var m;return r.mutationQueue.getAllMutationBatches(d).next(function(t){return m=t,e=r.persistence.getMutationQueue(i),y=new Ju(r.remoteDocuments,e,r.persistence.getIndexManager()),e.getAllMutationBatches(d)}).next(function(t){for(var e=[],n=[],r=Oo(),i=0,o=m;i<o.length;i++){var a=o[i];e.push(a.batchId);for(var s=0,u=a.mutations;s<u.length;s++){var c=u[s];r=r.add(c.key)}}for(var h=0,l=t;h<l.length;h++){a=l[h],n.push(a.batchId);for(var f=0,p=a.mutations;f<p.length;f++)c=p[f],r=r.add(c.key)}return y.getDocuments(d,r).next(function(t){return{affectedDocuments:t,removedBatchIds:e,addedBatchIds:n}})})})];case 1:return n=t.sent(),this.mutationQueue=e,this.localDocuments=y,this.queryEngine.setLocalDocumentsView(this.localDocuments),[2,n]}})})},uc.prototype.localWrite=function(s){var u,c=this,h=co.now(),t=s.reduce(function(t,e){return t.add(e.key)},Oo());return this.persistence.runTransaction("Locally write mutations","readwrite-idempotent",function(a){return c.localDocuments.getDocuments(a,t).next(function(t){u=t;for(var e=[],n=0,r=s;n<r.length;n++){var i=r[n],o=i.extractBaseValue(u.get(i.key));null!=o&&e.push(new Oa(i.key,o,o.fieldMask(),Da.exists(!0)))}return c.mutationQueue.addMutationBatch(a,h,e,s)})}).then(function(t){var e=t.applyToLocalDocumentSet(u);return{batchId:t.batchId,changes:e}})},uc.prototype.lookupMutationDocuments=function(t){var n=this;return this.persistence.runTransaction("Lookup mutation documents","readonly-idempotent",function(e){return n.mutationQueue.lookupMutationKeys(e,t).next(function(t){return t?n.localDocuments.getDocuments(e,t):Uo.resolve(null)})})},uc.prototype.acknowledgeBatch=function(r){var i=this;return this.persistence.runTransaction("Acknowledge batch","readwrite-primary-idempotent",function(t){var e=r.batch.keys(),n=i.remoteDocuments.newChangeBuffer({trackRemovals:!0});return i.mutationQueue.acknowledgeBatch(t,r.batch,r.streamToken).next(function(){return i.applyWriteToRemoteDocuments(t,r,n)}).next(function(){return n.apply(t)}).next(function(){return i.mutationQueue.performConsistencyCheck(t)}).next(function(){return i.localDocuments.getDocuments(t,e)})})},uc.prototype.rejectBatch=function(t){var r=this;return this.persistence.runTransaction("Reject batch","readwrite-primary-idempotent",function(e){var n;return r.mutationQueue.lookupMutationBatch(e,t).next(function(t){return Ur(null!==t,"Attempt to reject nonexistent batch!"),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t)}).next(function(){return r.mutationQueue.performConsistencyCheck(e)}).next(function(){return r.localDocuments.getDocuments(e,n)})})},uc.prototype.getHighestUnacknowledgedBatchId=function(){var e=this;return this.persistence.runTransaction("Get highest unacknowledged batch id","readonly-idempotent",function(t){return e.mutationQueue.getHighestUnacknowledgedBatchId(t)})},uc.prototype.getLastStreamToken=function(){var e=this;return this.persistence.runTransaction("Get last stream token","readonly-idempotent",function(t){return e.mutationQueue.getLastStreamToken(t)})},uc.prototype.setLastStreamToken=function(e){var n=this;return this.persistence.runTransaction("Set last stream token","readwrite-primary-idempotent",function(t){return n.mutationQueue.setLastStreamToken(t,e)})},uc.prototype.getLastRemoteSnapshotVersion=function(){var e=this;return this.persistence.runTransaction("Get last remote snapshot version","readonly-idempotent",function(t){return e.targetCache.getLastRemoteSnapshotVersion(t)})},uc.prototype.applyRemoteEvent=function(u){var c=this,h=u.snapshotVersion,l=this.targetDataByTarget;return this.persistence.runTransaction("Apply remote event","readwrite-primary-idempotent",function(o){var i=c.remoteDocuments.newChangeBuffer({trackRemovals:!0});l=c.targetDataByTarget;var a=[];Zr(u.targetChanges,function(t,e){var n=l.get(t);if(n){a.push(c.targetCache.removeMatchingKeys(o,e.removedDocuments,t).next(function(){return c.targetCache.addMatchingKeys(o,e.addedDocuments,t)}));var r=e.resumeToken;if(0<r.length){var i=n.withResumeToken(r,h).withSequenceNumber(o.currentSequenceNumber);l=l.insert(t,i),uc.shouldPersistTargetData(n,i,e)&&a.push(c.targetCache.updateTargetData(o,i))}}});var s=No(),n=Oo();if(u.documentUpdates.forEach(function(t,e){n=n.add(t)}),a.push(i.getEntries(o,n).next(function(r){u.documentUpdates.forEach(function(t,e){var n=r.get(t);e instanceof Gs&&e.version.isEqual(lo.MIN)?(i.removeEntry(t,h),s=s.insert(t,e)):null==n||0<e.version.compareTo(n.version)||0===e.version.compareTo(n.version)&&n.hasPendingWrites?(Ur(!lo.MIN.isEqual(h),"Cannot add a document when the remote version is zero"),i.addEntry(e,h),s=s.insert(t,e)):Fr(ac,"Ignoring outdated watch update for ",t,". Current version:",n.version," Watch version:",e.version),u.resolvedLimboDocuments.has(t)&&a.push(c.persistence.referenceDelegate.updateLimboDocument(o,t))})})),!h.isEqual(lo.MIN)){var t=c.targetCache.getLastRemoteSnapshotVersion(o).next(function(t){return Ur(0<=h.compareTo(t),"Watch stream reverted to previous snapshot?? "+h+" < "+t),c.targetCache.setTargetsMetadata(o,o.currentSequenceNumber,h)});a.push(t)}return Uo.waitFor(a).next(function(){return i.apply(o)}).next(function(){return c.localDocuments.getLocalViewOfDocuments(o,s)})}).then(function(t){return c.targetDataByTarget=l,t})},uc.shouldPersistTargetData=function(t,e,n){return Ur(0<e.resumeToken.length,"Attempted to persist target data with no resume token"),0===t.resumeToken.length||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=this.RESUME_TOKEN_MAX_AGE_MICROS||0<n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size},uc.prototype.notifyLocalViewChanges=function(t){for(var n=this,e=0,r=t;e<r.length;e++){var i=r[e],o=i.targetId;if(this.localViewReferences.addReferences(i.addedKeys,o),this.localViewReferences.removeReferences(i.removedKeys,o),!i.fromCache){var a=this.targetDataByTarget.get(o);Ur(null!==a,"Can't set limbo-free snapshot version for unknown target: "+o);var s=a.snapshotVersion,u=a.withLastLimboFreeSnapshotVersion(s);this.targetDataByTarget=this.targetDataByTarget.insert(o,u)}}return this.persistence.runTransaction("notifyLocalViewChanges","readwrite-idempotent",function(e){return Uo.forEach(t,function(t){return Uo.forEach(t.removedKeys,function(t){return n.persistence.referenceDelegate.removeReference(e,t)})})})},uc.prototype.nextMutationBatch=function(e){var n=this;return this.persistence.runTransaction("Get next mutation batch","readonly-idempotent",function(t){return void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)})},uc.prototype.readDocument=function(e){var n=this;return this.persistence.runTransaction("read document","readonly-idempotent",function(t){return n.localDocuments.getDocument(t,e)})},uc.prototype.allocateTarget=function(r){var i=this;return this.persistence.runTransaction("Allocate target","readwrite-idempotent",function(e){var n;return i.targetCache.getTargetData(e,r).next(function(t){return t?(n=t,Uo.resolve(n)):i.targetCache.allocateTargetId(e).next(function(t){return n=new zu(r,t,Uu.Listen,e.currentSequenceNumber),i.targetCache.addTargetData(e,n).next(function(){return n})})})}).then(function(t){return null===i.targetDataByTarget.get(t.targetId)&&(i.targetDataByTarget=i.targetDataByTarget.insert(t.targetId,t),i.targetIdByTarget.set(r,t.targetId)),t})},uc.prototype.getTargetData=function(t,e){var n=this.targetIdByTarget.get(e);return void 0!==n?Uo.resolve(this.targetDataByTarget.get(n)):this.targetCache.getTargetData(t,e)},uc.prototype.releaseTarget=function(n,r){var i=this,o=this.targetDataByTarget.get(n);Ur(null!==o,"Tried to release nonexistent target: "+n);var t=r?"readwrite-idempotent":"readwrite-primary-idempotent";return this.persistence.runTransaction("Release target",t,function(e){var t=i.localViewReferences.removeReferencesForId(n);return r?Uo.resolve():Uo.forEach(t,function(t){return i.persistence.referenceDelegate.removeReference(e,t)}).next(function(){i.persistence.referenceDelegate.removeTarget(e,o)})}).then(function(){i.targetDataByTarget=i.targetDataByTarget.remove(n),i.targetIdByTarget.delete(o.target)})},uc.prototype.executeQuery=function(t,n){var r=this,i=lo.MIN,o=Oo();return this.persistence.runTransaction("Execute query","readonly-idempotent",function(e){return r.getTargetData(e,t.toTarget()).next(function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.targetCache.getMatchingKeysForTargetId(e,t.targetId).next(function(t){o=t})}).next(function(){return r.queryEngine.getDocumentsMatchingQuery(e,t,n?i:lo.MIN,n?o:Oo())}).next(function(t){return{documents:t,remoteKeys:o}})})},uc.prototype.remoteDocumentKeys=function(e){var n=this;return this.persistence.runTransaction("Remote document keys","readonly-idempotent",function(t){return n.targetCache.getMatchingKeysForTargetId(t,e)})},uc.prototype.getActiveClients=function(){return this.persistence.getActiveClients()},uc.prototype.removeCachedMutationBatchMetadata=function(t){this.mutationQueue.removeCachedMutationKeys(t)},uc.prototype.setNetworkEnabled=function(t){this.persistence.setNetworkEnabled(t)},uc.prototype.applyWriteToRemoteDocuments=function(t,i,o){var e=this,a=i.batch,n=a.keys(),s=Uo.resolve();return n.forEach(function(r){s=s.next(function(){return o.getEntry(t,r)}).next(function(t){var e=t,n=i.docVersions.get(r);Ur(null!==n,"ackVersions should contain every doc in the write."),(!e||e.version.compareTo(n)<0)&&((e=a.applyToRemoteDocument(r,e,i))?o.addEntry(e,i.commitVersion):Ur(!t,"Mutation batch "+a+" applied to document "+t+" resulted in null"))})}),s.next(function(){return e.mutationQueue.removeMutationBatch(t,a)})},uc.prototype.collectGarbage=function(e){var n=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary-idempotent",function(t){return e.collect(t,n.targetDataByTarget)})},uc.prototype.getTarget=function(e){var n=this,t=this.targetDataByTarget.get(e);return t?Promise.resolve(t.target):this.persistence.runTransaction("Get target data","readonly-idempotent",function(t){return n.targetCache.getTargetDataForTarget(t,e).next(function(t){return t?t.target:null})})},uc.prototype.getNewDocumentChanges=function(){var r=this;return this.persistence.runTransaction("Get new document changes","readonly-idempotent",function(t){return r.remoteDocuments.getNewDocumentChanges(t,r.lastDocumentChangeReadTime)}).then(function(t){var e=t.changedDocs,n=t.readTime;return r.lastDocumentChangeReadTime=n,e})},uc.prototype.synchronizeLastDocumentChangeReadTime=function(){return p(this,void 0,void 0,function(){var e,n=this;return m(this,function(t){switch(t.label){case 0:return[4,(e=this).persistence.runTransaction("Synchronize last document change read time","readonly-idempotent",function(t){return n.remoteDocuments.getLastReadTime(t)})];case 1:return e.lastDocumentChangeReadTime=t.sent(),[2]}})})},uc.RESUME_TOKEN_MAX_AGE_MICROS=3e8,uc);function uc(t,e,n){this.persistence=t,this.queryEngine=e,this.localViewReferences=new nc,this.targetDataByTarget=new po(Si),this.targetIdByTarget=new Xs(function(t){return t.canonicalId()}),this.lastDocumentChangeReadTime=lo.MIN,Ur(t.started,"LocalStore was passed an unstarted persistence implementation"),this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences),this.mutationQueue=t.getMutationQueue(n),this.remoteDocuments=t.getRemoteDocumentCache(),this.targetCache=t.getTargetCache(),this.localDocuments=new Ju(this.remoteDocuments,this.mutationQueue,this.persistence.getIndexManager()),this.queryEngine.setLocalDocumentsView(this.localDocuments)}function cc(e){return p(this,void 0,void 0,function(){return m(this,function(t){if(e.code!==Wr.FAILED_PRECONDITION||e.message!==$u)throw e;return Fr(ac,"Unexpectedly lost primary lease"),[2]})})}function hc(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],a=Si(n,i);return 0===a?Si(r,o):a}var lc=(fc.prototype.nextIndex=function(){return++this.previousIndex},fc.prototype.addElement=function(t){var e=[t,this.nextIndex()];if(this.buffer.size<this.maxElements)this.buffer=this.buffer.add(e);else{var n=this.buffer.last();hc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(fc.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!0,configurable:!0}),fc);function fc(t){this.maxElements=t,this.buffer=new So(hc),this.previousIndex=0}var pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dc=(mc.withCacheSize=function(t){return new mc(t,mc.DEFAULT_COLLECTION_PERCENTILE,mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},mc.COLLECTION_DISABLED=-1,mc.MINIMUM_CACHE_SIZE_BYTES=1048576,mc.DEFAULT=new mc(mc.DEFAULT_CACHE_SIZE_BYTES=41943040,mc.DEFAULT_COLLECTION_PERCENTILE=10,mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3),mc.DISABLED=new mc(mc.COLLECTION_DISABLED,0,0),mc);function mc(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}var yc=(gc.prototype.start=function(){Ur(null===this.gcTask,"Cannot start an already started LruScheduler"),this.garbageCollector.params.cacheSizeCollectionThreshold!==dc.COLLECTION_DISABLED&&this.scheduleGC()},gc.prototype.stop=function(){this.gcTask&&(this.gcTask.cancel(),this.gcTask=null)},Object.defineProperty(gc.prototype,"started",{get:function(){return null!==this.gcTask},enumerable:!0,configurable:!0}),gc.prototype.scheduleGC=function(){var t=this;Ur(null===this.gcTask,"Cannot schedule GC while a task is pending");var e=this.hasRun?3e5:6e4;Fr("LruGarbageCollector","Garbage collection scheduled in "+e+"ms"),this.gcTask=this.asyncQueue.enqueueAfterDelay(Hi.LruGarbageCollection,e,function(){return t.gcTask=null,t.hasRun=!0,t.localStore.collectGarbage(t.garbageCollector).then(function(){return t.scheduleGC()}).catch(cc)})},gc);function gc(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.hasRun=!1,this.gcTask=null}var vc=(bc.prototype.calculateTargetCount=function(t,e){return this.delegate.getSequenceNumberCount(t).next(function(t){return Math.floor(e/100*t)})},bc.prototype.nthSequenceNumber=function(t,e){var n=this;if(0===e)return Uo.resolve(Oi.INVALID);var r=new lc(e);return this.delegate.forEachTarget(t,function(t){return r.addElement(t.sequenceNumber)}).next(function(){return n.delegate.forEachOrphanedDocumentSequenceNumber(t,function(t){return r.addElement(t)})}).next(function(){return r.maxValue})},bc.prototype.removeTargets=function(t,e,n){return this.delegate.removeTargets(t,e,n)},bc.prototype.removeOrphanedDocuments=function(t,e){return this.delegate.removeOrphanedDocuments(t,e)},bc.prototype.collect=function(e,n){var r=this;return this.params.cacheSizeCollectionThreshold===dc.COLLECTION_DISABLED?(Fr("LruGarbageCollector","Garbage collection skipped; disabled"),Uo.resolve(pc)):this.getCacheSize(e).next(function(t){return t<r.params.cacheSizeCollectionThreshold?(Fr("LruGarbageCollector","Garbage collection skipped; Cache size "+t+" is lower than threshold "+r.params.cacheSizeCollectionThreshold),pc):r.runGarbageCollection(e,n)})},bc.prototype.getCacheSize=function(t){return this.delegate.getCacheSize(t)},bc.prototype.runGarbageCollection=function(e,n){var r,i,o,a,s,u,c,h=this,l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(function(t){return i=t>h.params.maximumSequenceNumbersToCollect?(Fr("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.maximumSequenceNumbersToCollect+" from "+t),h.params.maximumSequenceNumbersToCollect):t,a=Date.now(),h.nthSequenceNumber(e,i)}).next(function(t){return r=t,s=Date.now(),h.removeTargets(e,r,n)}).next(function(t){return o=t,u=Date.now(),h.removeOrphanedDocuments(e,r)}).next(function(t){return c=Date.now(),Pr()<=Cr.DEBUG&&Fr("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(a-l)+"ms\n\tDetermined least recently used "+i+" in "+(s-a)+"ms\n\tRemoved "+o+" targets in "+(u-s)+"ms\n\tRemoved "+t+" documents in "+(c-u)+"ms\nTotal Duration: "+(c-l)+"ms"),Uo.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:t})})},bc);function bc(t,e){this.delegate=t,this.params=e}var wc,Tc="IndexedDbPersistence",Sc="Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",Ec=(t(Ic,wc=tc),Ic);function Ic(t,e){var n=wc.call(this)||this;return n.simpleDbTransaction=t,n.currentSequenceNumber=e,n}var Cc=(Dc.getStore=function(t,e){if(t instanceof Ec)return jo.getStore(t.simpleDbTransaction,e);throw Br("IndexedDbPersistence must use instances of IndexedDbTransaction")},Dc.createIndexedDbPersistence=function(n){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:if(!Dc.isAvailable())throw new zr(Wr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");return[4,(e=new Dc(n.allowTabSynchronization,n.persistenceKey,n.clientId,n.platform,n.lruParams,n.queue,n.serializer,n.sequenceNumberSyncer)).start()];case 1:return t.sent(),[2,e]}})})},Dc.prototype.start=function(){var e=this;return Ur(!this.started,"IndexedDbPersistence double-started!"),Ur(null!==this.window,"Expected 'window' to be defined"),jo.openOrCreate(this.dbName,fu,new pu(this.serializer)).then(function(t){return e.simpleDb=t,e.updateClientMetadataAndTryBecomePrimary()}).then(function(){return e.attachVisibilityHandler(),e.attachWindowUnloadHook(),e.scheduleClientMetadataAndPrimaryLeaseRefreshes(),e.simpleDb.runTransaction("readonly-idempotent",[Ou.store],function(t){return ga(t)})}).then(function(t){e.listenSequence=new Oi(t,e.sequenceNumberSyncer)}).then(function(){e._started=!0}).catch(function(t){return e.simpleDb&&e.simpleDb.close(),Promise.reject(t)})},Dc.prototype.setPrimaryStateListener=function(n){var t=this;return this.primaryStateListener=function(e){return p(t,void 0,void 0,function(){return m(this,function(t){return this.started?[2,n(e)]:[2]})})},n(this.isPrimary)},Dc.prototype.setDatabaseDeletedListener=function(n){var t=this;this.simpleDb.setVersionChangeListener(function(e){return p(t,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return null!==e.newVersion?[3,2]:[4,n()];case 1:t.sent(),t.label=2;case 2:return[2]}})})})},Dc.prototype.setNetworkEnabled=function(t){var e=this;this.networkEnabled!==t&&(this.networkEnabled=t,this.queue.enqueueAndForget(function(){return p(e,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.started?[4,this.updateClientMetadataAndTryBecomePrimary()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}))},Dc.prototype.updateClientMetadataAndTryBecomePrimary=function(){var n=this;return this.simpleDb.runTransaction("readwrite-idempotent",Qu,function(e){return Ac(e).put(new Vu(n.clientId,Date.now(),n.networkEnabled,n.inForeground)).next(function(){if(n.isPrimary)return n.verifyPrimaryLease(e).next(function(t){t||(n.isPrimary=!1,n.queue.enqueueAndForget(function(){return n.primaryStateListener(!1)}))})}).next(function(){return n.canActAsPrimary(e)}).next(function(t){return n.isPrimary&&!t?n.releasePrimaryLeaseIfHeld(e).next(function(){return!1}):!!t&&n.acquireOrExtendPrimaryLease(e).next(function(){return!0})})}).catch(function(t){if(!n.allowTabSynchronization)throw t;return Fr(Tc,"Releasing owner lease after error during lease refresh",t),!1}).then(function(t){n.isPrimary!==t&&n.queue.enqueueAndForget(function(){return n.primaryStateListener(t)}),n.isPrimary=t})},Dc.prototype.verifyPrimaryLease=function(t){var e=this;return Nc(t).get(yu.key).next(function(t){return Uo.resolve(e.isLocalClient(t))})},Dc.prototype.removeClientMetadata=function(t){return Ac(t).delete(this.clientId)},Dc.prototype.maybeGarbageCollectMultiClientState=function(){return p(this,void 0,void 0,function(){var i=this;return m(this,function(t){switch(t.label){case 0:return!this.isPrimary||this.isWithinAge(this.lastGarbageCollectionTime,18e5)?[3,2]:(this.lastGarbageCollectionTime=Date.now(),[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary-idempotent",function(t){var r=Dc.getStore(t,Vu.store);return r.loadAll().next(function(t){var e=i.filterActiveClients(t,18e5),n=t.filter(function(t){return-1===e.indexOf(t)});return Uo.forEach(n,function(t){return r.delete(t.clientId)}).next(function(){return n})})}).catch(function(){return[]})]);case 1:t.sent().forEach(function(t){i.window.localStorage.removeItem(i.zombiedClientLocalStorageKey(t.clientId))}),t.label=2;case 2:return[2]}})})},Dc.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes=function(){var t=this;this.clientMetadataRefresher=this.queue.enqueueAfterDelay(Hi.ClientMetadataRefresh,4e3,function(){return t.updateClientMetadataAndTryBecomePrimary().then(function(){return t.maybeGarbageCollectMultiClientState()}).then(function(){return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()})})},Dc.prototype.isLocalClient=function(t){return!!t&&t.ownerId===this.clientId},Dc.prototype.canActAsPrimary=function(e){var i=this;return Nc(e).get(yu.key).next(function(t){if(null!==t&&i.isWithinAge(t.leaseTimestampMs,5e3)&&!i.isClientZombied(t.ownerId)){if(i.isLocalClient(t)&&i.networkEnabled)return!0;if(!i.isLocalClient(t)){if(!t.allowTabSynchronization)throw new zr(Wr.FAILED_PRECONDITION,Sc);return!1}}return!(!i.networkEnabled||!i.inForeground)||Ac(e).loadAll().next(function(t){return void 0===i.filterActiveClients(t,5e3).find(function(t){if(i.clientId!==t.clientId){var e=!i.networkEnabled&&t.networkEnabled,n=!i.inForeground&&t.inForeground,r=i.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1})})}).next(function(t){return i.isPrimary!==t&&Fr(Tc,"Client "+(t?"is":"is not")+" eligible for a primary lease."),t})},Dc.prototype.shutdown=function(){return p(this,void 0,void 0,function(){var e=this;return m(this,function(t){switch(t.label){case 0:return this._started=!1,this.markClientZombied(),this.clientMetadataRefresher&&(this.clientMetadataRefresher.cancel(),this.clientMetadataRefresher=null),this.detachVisibilityHandler(),this.detachWindowUnloadHook(),[4,this.simpleDb.runTransaction("readwrite-idempotent",[yu.store,Vu.store],function(t){return e.releasePrimaryLeaseIfHeld(t).next(function(){return e.removeClientMetadata(t)})})];case 1:return t.sent(),this.simpleDb.close(),this.removeClientZombiedEntry(),[2]}})})},Dc.prototype.filterActiveClients=function(t,e){var n=this;return t.filter(function(t){return n.isWithinAge(t.updateTimeMs,e)&&!n.isClientZombied(t.clientId)})},Dc.prototype.getActiveClients=function(){var e=this;return this.simpleDb.runTransaction("readonly-idempotent",[Vu.store],function(t){return Ac(t).loadAll().next(function(t){return e.filterActiveClients(t,18e5).map(function(t){return t.clientId})})})},Dc.clearPersistence=function(n){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return Dc.isAvailable()?(e=n+Dc.MAIN_DATABASE,[4,jo.delete(e)]):[2,Promise.resolve()];case 1:return t.sent(),[2]}})})},Object.defineProperty(Dc.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),Dc.prototype.getMutationQueue=function(t){return Ur(this.started,"Cannot initialize MutationQueue before persistence is started."),ea.forUser(t,this.serializer,this.indexManager,this.referenceDelegate)},Dc.prototype.getTargetCache=function(){return Ur(this.started,"Cannot initialize TargetCache before persistence is started."),this.targetCache},Dc.prototype.getRemoteDocumentCache=function(){return Ur(this.started,"Cannot initialize RemoteDocumentCache before persistence is started."),this.remoteDocumentCache},Dc.prototype.getIndexManager=function(){return Ur(this.started,"Cannot initialize IndexManager before persistence is started."),this.indexManager},Dc.prototype.runTransaction=function(n,t,r){var i=this;Fr(Tc,"Starting transaction:",n);var o,e=t.endsWith("idempotent"),a=t.startsWith("readonly")?e?"readonly-idempotent":"readonly":e?"readwrite-idempotent":"readwrite";return this.simpleDb.runTransaction(a,Qu,function(e){return o=new Ec(e,i.listenSequence.next()),"readwrite-primary"===t||"readwrite-primary-idempotent"===t?i.verifyPrimaryLease(e).next(function(t){return!!t||i.canActAsPrimary(e)}).next(function(t){if(!t)throw qr("Failed to obtain primary lease for action '"+n+"'."),i.isPrimary=!1,i.queue.enqueueAndForget(function(){return i.primaryStateListener(!1)}),new zr(Wr.FAILED_PRECONDITION,$u);return r(o)}).next(function(t){return i.acquireOrExtendPrimaryLease(e).next(function(){return t})}):i.verifyAllowTabSynchronization(e).next(function(){return r(o)})}).then(function(t){return o.raiseOnCommittedEvent(),t})},Dc.prototype.verifyAllowTabSynchronization=function(t){var e=this;return Nc(t).get(yu.key).next(function(t){if(null!==t&&e.isWithinAge(t.leaseTimestampMs,5e3)&&!e.isClientZombied(t.ownerId)&&!e.isLocalClient(t)&&!t.allowTabSynchronization)throw new zr(Wr.FAILED_PRECONDITION,Sc)})},Dc.prototype.acquireOrExtendPrimaryLease=function(t){var e=new yu(this.clientId,this.allowTabSynchronization,Date.now());return Nc(t).put(yu.key,e)},Dc.isAvailable=function(){return jo.isAvailable()},Dc.buildStoragePrefix=function(t){var e=t.databaseId.projectId;return t.databaseId.isDefaultDatabase||(e+="."+t.databaseId.database),"firestore/"+t.persistenceKey+"/"+e+"/"},Dc.prototype.releasePrimaryLeaseIfHeld=function(t){var e=this,n=Nc(t);return n.get(yu.key).next(function(t){return e.isLocalClient(t)?(Fr(Tc,"Releasing primary lease."),n.delete(yu.key)):Uo.resolve()})},Dc.prototype.isWithinAge=function(t,e){var n=Date.now();return!(t<n-e||n<t&&(qr("Detected an update time that is in the future: "+t+" > "+n),1))},Dc.prototype.attachVisibilityHandler=function(){var t=this;null!==this.document&&"function"==typeof this.document.addEventListener&&(this.documentVisibilityHandler=function(){t.queue.enqueueAndForget(function(){return t.inForeground="visible"===t.document.visibilityState,t.updateClientMetadataAndTryBecomePrimary()})},this.document.addEventListener("visibilitychange",this.documentVisibilityHandler),this.inForeground="visible"===this.document.visibilityState)},Dc.prototype.detachVisibilityHandler=function(){this.documentVisibilityHandler&&(Ur(null!==this.document&&"function"==typeof this.document.addEventListener,"Expected 'document.addEventListener' to be a function"),this.document.removeEventListener("visibilitychange",this.documentVisibilityHandler),this.documentVisibilityHandler=null)},Dc.prototype.attachWindowUnloadHook=function(){var t=this;"function"==typeof this.window.addEventListener&&(this.windowUnloadHandler=function(){t.markClientZombied(),t.queue.enqueueAndForget(function(){return t.shutdown()})},this.window.addEventListener("unload",this.windowUnloadHandler))},Dc.prototype.detachWindowUnloadHook=function(){this.windowUnloadHandler&&(Ur("function"==typeof this.window.removeEventListener,"Expected 'window.removeEventListener' to be a function"),this.window.removeEventListener("unload",this.windowUnloadHandler),this.windowUnloadHandler=null)},Dc.prototype.isClientZombied=function(t){try{var e=null!==this.webStorage.getItem(this.zombiedClientLocalStorageKey(t));return Fr(Tc,"Client '"+t+"' "+(e?"is":"is not")+" zombied in LocalStorage"),e}catch(t){return qr(Tc,"Failed to get zombied client id.",t),!1}},Dc.prototype.markClientZombied=function(){try{this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId),String(Date.now()))}catch(t){qr("Failed to set zombie client id.",t)}},Dc.prototype.removeClientZombiedEntry=function(){try{this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))}catch(t){}},Dc.prototype.zombiedClientLocalStorageKey=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},Dc.MAIN_DATABASE="main",Dc);function Dc(t,e,n,r,i,o,a,s){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.queue=o,this.sequenceNumberSyncer=s,this._started=!1,this.isPrimary=!1,this.networkEnabled=!0,this.windowUnloadHandler=null,this.inForeground=!1,this.documentVisibilityHandler=null,this.clientMetadataRefresher=null,this.lastGarbageCollectionTime=Number.NEGATIVE_INFINITY,this.primaryStateListener=function(t){return Promise.resolve()},this.referenceDelegate=new kc(this,i),this.dbName=e+Dc.MAIN_DATABASE,this.serializer=new Yu(a),this.document=r.document,this.targetCache=new pa(this.referenceDelegate,this.serializer),this.indexManager=new ju,this.remoteDocumentCache=new eu(this.serializer,this.indexManager),!r.window||!r.window.localStorage)throw new zr(Wr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");this.window=r.window,this.webStorage=this.window.localStorage}function Nc(t){return t.store(yu.store)}function Ac(t){return t.store(Vu.store)}var kc=(Rc.prototype.getSequenceNumberCount=function(t){var n=this.orphanedDocmentCount(t);return this.db.getTargetCache().getTargetCount(t).next(function(e){return n.next(function(t){return e+t})})},Rc.prototype.orphanedDocmentCount=function(t){var e=0;return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},Rc.prototype.forEachTarget=function(t,e){return this.db.getTargetCache().forEachTarget(t,e)},Rc.prototype.forEachOrphanedDocumentSequenceNumber=function(t,n){return this.forEachOrphanedDocument(t,function(t,e){return n(e)})},Rc.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},Rc.prototype.addReference=function(t,e){return Mc(t,e)},Rc.prototype.removeReference=function(t,e){return Mc(t,e)},Rc.prototype.removeTargets=function(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)},Rc.prototype.removeMutationReference=function(t,e){return Mc(t,e)},Rc.prototype.isPinned=function(t,e){return this.inMemoryPins.containsKey(e)?Uo.resolve(!0):function(e,n){var r=!1;return ua(e).iterateSerial(function(t){return ra(e,t,n).next(function(t){return t&&(r=!0),Uo.resolve(!t)})}).next(function(){return r})}(t,e)},Rc.prototype.removeOrphanedDocuments=function(r,i){var o=this,a=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[],u=0;return this.forEachOrphanedDocument(r,function(e,t){if(t<=i){var n=o.isPinned(r,e).next(function(t){if(!t)return u++,a.getEntry(r,e).next(function(){return a.removeEntry(e),va(r).delete(function(t){return[0,oo(t.path)]}(e))})});s.push(n)}}).next(function(){return Uo.waitFor(s)}).next(function(){return a.apply(r)}).next(function(){return u})},Rc.prototype.removeTarget=function(t,e){var n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)},Rc.prototype.updateLimboDocument=function(t,e){return Mc(t,e)},Rc.prototype.forEachOrphanedDocument=function(t,o){var a,e=va(t),s=Oi.INVALID;return e.iterate({index:_u.documentTargetsIndex},function(t,e){var n=t[0],r=(t[1],e.path),i=e.sequenceNumber;0===n?(s!==Oi.INVALID&&o(new Wi(uo(a)),s),s=i,a=r):s=Oi.INVALID}).next(function(){s!==Oi.INVALID&&o(new Wi(uo(a)),s)})},Rc.prototype.getCacheSize=function(t){return this.db.getRemoteDocumentCache().getSize(t)},Rc);function Rc(t,e){this.db=t,this.inMemoryPins=null,this.garbageCollector=new vc(this,e)}function Mc(t,e){return va(t).put(function(t,e){return new _u(0,oo(t.path),e)}(e,t.currentSequenceNumber))}var _c=Number,Lc=_c.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),Oc=_c.MAX_SAFE_INTEGER||Math.pow(2,53)-1,Pc=_c.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t};function xc(t){return null==t}function Fc(t){return Pc(t)&&t<=Oc&&Lc<=t}var qc,Vc,Bc=(Uc.prototype.canonicalId=function(){if(null===this.memoizedCanonicalId){var t=this.path.canonicalString();null!==this.collectionGroup&&(t+="|cg:"+this.collectionGroup),t+="|f:";for(var e=0,n=this.filters;e<n.length;e++)t+=n[e].canonicalId(),t+=",";t+="|ob:";for(var r=0,i=this.orderBy;r<i.length;r++)t+=i[r].canonicalId(),t+=",";xc(this.limit)||(t+="|l:",t+=this.limit),this.startAt&&(t+="|lb:",t+=this.startAt.canonicalId()),this.endAt&&(t+="|ub:",t+=this.endAt.canonicalId()),this.memoizedCanonicalId=t}return this.memoizedCanonicalId},Uc.prototype.toString=function(){var t=this.path.canonicalString();return null!==this.collectionGroup&&(t+=" collectionGroup="+this.collectionGroup),0<this.filters.length&&(t+=", filters: ["+this.filters.join(", ")+"]"),xc(this.limit)||(t+=", limit: "+this.limit),0<this.orderBy.length&&(t+=", orderBy: ["+this.orderBy.join(", ")+"]"),this.startAt&&(t+=", startAt: "+this.startAt.canonicalId()),this.endAt&&(t+=", endAt: "+this.endAt.canonicalId()),"Target("+t+")"},Uc.prototype.isEqual=function(t){if(this.limit!==t.limit)return!1;if(this.orderBy.length!==t.orderBy.length)return!1;for(var e=0;e<this.orderBy.length;e++)if(!this.orderBy[e].isEqual(t.orderBy[e]))return!1;if(this.filters.length!==t.filters.length)return!1;for(e=0;e<this.filters.length;e++)if(!this.filters[e].isEqual(t.filters[e]))return!1;return this.collectionGroup===t.collectionGroup&&!!this.path.isEqual(t.path)&&!(null!==this.startAt?!this.startAt.isEqual(t.startAt):null!==t.startAt)&&(null!==this.endAt?this.endAt.isEqual(t.endAt):null===t.endAt)},Uc.prototype.isDocumentQuery=function(){return Wi.isDocumentKey(this.path)&&null===this.collectionGroup&&0===this.filters.length},Uc);function Uc(t,e,n,r,i,o,a){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===a&&(a=null),this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.memoizedCanonicalId=null}(Vc=qc=qc||{}).First="F",Vc.Last="L";var Kc=(Qc.atPath=function(t){return new Qc(t)},Object.defineProperty(Qc.prototype,"orderBy",{get:function(){if(null===this.memoizedOrderBy){var t=this.getInequalityFilterField(),e=this.getFirstOrderByField();if(null!==t&&null===e)t.isKeyField()?this.memoizedOrderBy=[gh]:this.memoizedOrderBy=[new mh(t),gh];else{Ur(null===t||null!==e&&t.isEqual(e),"First orderBy should match inequality field.");for(var n=!(this.memoizedOrderBy=[]),r=0,i=this.explicitOrderBy;r<i.length;r++){var o=i[r];this.memoizedOrderBy.push(o),o.field.isKeyField()&&(n=!0)}if(!n){var a=0<this.explicitOrderBy.length?this.explicitOrderBy[this.explicitOrderBy.length-1].dir:lh.ASCENDING;this.memoizedOrderBy.push(a===lh.ASCENDING?gh:vh)}}}return this.memoizedOrderBy},enumerable:!0,configurable:!0}),Qc.prototype.addFilter=function(t){Ur(null==this.getInequalityFilterField()||!(t instanceof Hc)||!t.isInequality()||t.field.isEqual(this.getInequalityFilterField()),"Query must only have one inequality field."),Ur(!this.isDocumentQuery(),"No filtering allowed for document query");var e=this.filters.concat([t]);return new Qc(this.path,this.collectionGroup,this.explicitOrderBy.slice(),e,this.limit,this.limitType,this.startAt,this.endAt)},Qc.prototype.addOrderBy=function(t){Ur(!this.startAt&&!this.endAt,"Bounds must be set after orderBy");var e=this.explicitOrderBy.concat([t]);return new Qc(this.path,this.collectionGroup,e,this.filters.slice(),this.limit,this.limitType,this.startAt,this.endAt)},Qc.prototype.withLimitToFirst=function(t){return new Qc(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),t,qc.First,this.startAt,this.endAt)},Qc.prototype.withLimitToLast=function(t){return new Qc(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),t,qc.Last,this.startAt,this.endAt)},Qc.prototype.withStartAt=function(t){return new Qc(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.limitType,t,this.endAt)},Qc.prototype.withEndAt=function(t){return new Qc(this.path,this.collectionGroup,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.limitType,this.startAt,t)},Qc.prototype.asCollectionQueryAtPath=function(t){return new Qc(t,null,this.explicitOrderBy.slice(),this.filters.slice(),this.limit,this.limitType,this.startAt,this.endAt)},Qc.prototype.matchesAllDocuments=function(){return 0===this.filters.length&&null===this.limit&&null==this.startAt&&null==this.endAt&&(0===this.explicitOrderBy.length||1===this.explicitOrderBy.length&&this.explicitOrderBy[0].field.isKeyField())},Qc.prototype.canonicalId=function(){return this.toTarget().canonicalId()+"|lt:"+this.limitType},Qc.prototype.toString=function(){return"Query(target="+this.toTarget().toString()+"; limitType="+this.limitType+")"},Qc.prototype.isEqual=function(t){return this.toTarget().isEqual(t.toTarget())&&this.limitType===t.limitType},Qc.prototype.docComparator=function(t,e){for(var n=!1,r=0,i=this.orderBy;r<i.length;r++){var o=i[r],a=o.compare(t,e);if(0!==a)return a;n=n||o.field.isKeyField()}return Ur(n,"orderBy used that doesn't compare on key field"),0},Qc.prototype.matches=function(t){return this.matchesPathAndCollectionGroup(t)&&this.matchesOrderBy(t)&&this.matchesFilters(t)&&this.matchesBounds(t)},Qc.prototype.hasLimitToFirst=function(){return!xc(this.limit)&&this.limitType===qc.First},Qc.prototype.hasLimitToLast=function(){return!xc(this.limit)&&this.limitType===qc.Last},Qc.prototype.getFirstOrderByField=function(){return 0<this.explicitOrderBy.length?this.explicitOrderBy[0].field:null},Qc.prototype.getInequalityFilterField=function(){for(var t=0,e=this.filters;t<e.length;t++){var n=e[t];if(n instanceof Hc&&n.isInequality())return n.field}return null},Qc.prototype.findFilterOperator=function(t){for(var e=0,n=this.filters;e<n.length;e++){var r=n[e];if(r instanceof Hc&&0<=t.indexOf(r.op))return r.op}return null},Qc.prototype.isDocumentQuery=function(){return this.toTarget().isDocumentQuery()},Qc.prototype.isCollectionGroupQuery=function(){return null!==this.collectionGroup},Qc.prototype.toTarget=function(){if(!this.memoizedTarget)if(this.limitType===qc.First)this.memoizedTarget=new Bc(this.path,this.collectionGroup,this.orderBy,this.filters,this.limit,this.startAt,this.endAt);else{for(var t=[],e=0,n=this.orderBy;e<n.length;e++){var r=n[e],i=r.dir===lh.DESCENDING?lh.ASCENDING:lh.DESCENDING;t.push(new mh(r.field,i))}var o=this.endAt?new ph(this.endAt.position,!this.endAt.before):null,a=this.startAt?new ph(this.startAt.position,!this.startAt.before):null;this.memoizedTarget=new Bc(this.path,this.collectionGroup,t,this.filters,this.limit,o,a)}return this.memoizedTarget},Qc.prototype.matchesPathAndCollectionGroup=function(t){var e=t.key.path;return null!==this.collectionGroup?t.key.hasCollectionId(this.collectionGroup)&&this.path.isPrefixOf(e):Wi.isDocumentKey(this.path)?this.path.isEqual(e):this.path.isImmediateParentOf(e)},Qc.prototype.matchesOrderBy=function(t){for(var e=0,n=this.explicitOrderBy;e<n.length;e++){var r=n[e];if(!r.field.isKeyField()&&null===t.field(r.field))return!1}return!0},Qc.prototype.matchesFilters=function(t){for(var e=0,n=this.filters;e<n.length;e++)if(!n[e].matches(t))return!1;return!0},Qc.prototype.matchesBounds=function(t){return!(this.startAt&&!this.startAt.sortsBeforeDocument(this.orderBy,t)||this.endAt&&this.endAt.sortsBeforeDocument(this.orderBy,t))},Qc.prototype.assertValidBound=function(t){Ur(t.position.length<=this.orderBy.length,"Bound is longer than orderBy")},Qc);function Qc(t,e,n,r,i,o,a,s){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=qc.First),void 0===a&&(a=null),void 0===s&&(s=null),this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=s,this.memoizedOrderBy=null,this.memoizedTarget=null,this.startAt&&this.assertValidBound(this.startAt),this.endAt&&this.assertValidBound(this.endAt)}function jc(){}var Gc=(Wc.fromString=function(t){switch(t){case"<":return Wc.LESS_THAN;case"<=":return Wc.LESS_THAN_OR_EQUAL;case"==":return Wc.EQUAL;case">=":return Wc.GREATER_THAN_OR_EQUAL;case">":return Wc.GREATER_THAN;case"array-contains":return Wc.ARRAY_CONTAINS;case"in":return Wc.IN;case"array-contains-any":return Wc.ARRAY_CONTAINS_ANY;default:return Br("Unknown FieldFilter operator: "+t)}},Wc.prototype.toString=function(){return this.name},Wc.prototype.isEqual=function(t){return this.name===t.name},Wc.LESS_THAN=new Wc("<"),Wc.LESS_THAN_OR_EQUAL=new Wc("<="),Wc.EQUAL=new Wc("=="),Wc.GREATER_THAN=new Wc(">"),Wc.GREATER_THAN_OR_EQUAL=new Wc(">="),Wc.ARRAY_CONTAINS=new Wc("array-contains"),Wc.IN=new Wc("in"),Wc.ARRAY_CONTAINS_ANY=new Wc("array-contains-any"),Wc);function Wc(t){this.name=t}var zc,Hc=(t(Yc,zc=jc),Yc.create=function(t,e,n){if(t.isKeyField())return e===Gc.IN?(Ur(n instanceof Fs,"Comparing on key with IN, but filter value not an ArrayValue"),Ur(n.internalValue.every(function(t){return t instanceof As}),"Comparing on key with IN, but an array value was not a RefValue"),new th(t,n)):(Ur(n instanceof As,"Comparing on key, but filter value not a RefValue"),Ur(e!==Gc.ARRAY_CONTAINS&&e!==Gc.ARRAY_CONTAINS_ANY,"'"+e.toString()+"' queries don't make sense on document keys."),new Jc(t,e,n));if(n.isEqual(ts.INSTANCE)){if(e!==Gc.EQUAL)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. Null supports only equality comparisons.");return new Yc(t,e,n)}if(n.isEqual(ps.NAN)){if(e!==Gc.EQUAL)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. NaN supports only equality comparisons.");return new Yc(t,e,n)}return e===Gc.ARRAY_CONTAINS?new rh(t,n):e===Gc.IN?(Ur(n instanceof Fs,"IN filter has invalid value: "+n.toString()),new ah(t,n)):e===Gc.ARRAY_CONTAINS_ANY?(Ur(n instanceof Fs,"ARRAY_CONTAINS_ANY filter has invalid value: "+n.toString()),new ch(t,n)):new Yc(t,e,n)},Yc.prototype.matches=function(t){var e=t.field(this.field);return null!==e&&this.value.typeOrder===e.typeOrder&&this.matchesComparison(e.compareTo(this.value))},Yc.prototype.matchesComparison=function(t){switch(this.op){case Gc.LESS_THAN:return t<0;case Gc.LESS_THAN_OR_EQUAL:return t<=0;case Gc.EQUAL:return 0===t;case Gc.GREATER_THAN:return 0<t;case Gc.GREATER_THAN_OR_EQUAL:return 0<=t;default:return Br("Unknown FieldFilter operator: "+this.op)}},Yc.prototype.isInequality=function(){return 0<=[Gc.LESS_THAN,Gc.LESS_THAN_OR_EQUAL,Gc.GREATER_THAN,Gc.GREATER_THAN_OR_EQUAL].indexOf(this.op)},Yc.prototype.canonicalId=function(){return this.field.canonicalString()+this.op.toString()+this.value.toString()},Yc.prototype.isEqual=function(t){return t instanceof Yc&&this.op.isEqual(t.op)&&this.field.isEqual(t.field)&&this.value.isEqual(t.value)},Yc.prototype.toString=function(){return this.field.canonicalString()+" "+this.op+" "+this.value.value()},Yc);function Yc(t,e,n){var r=zc.call(this)||this;return r.field=t,r.op=e,r.value=n,r}var Xc,Jc=(t(Zc,Xc=Hc),Zc.prototype.matches=function(t){var e=this.value,n=Wi.comparator(t.key,e.key);return this.matchesComparison(n)},Zc);function Zc(){return null!==Xc&&Xc.apply(this,arguments)||this}var $c,th=(t(eh,$c=Hc),eh.prototype.matches=function(e){return this.value.internalValue.some(function(t){return e.key.isEqual(t.key)})},eh);function eh(t,e){var n=$c.call(this,t,Gc.IN,e)||this;return n.value=e,n}var nh,rh=(t(ih,nh=Hc),ih.prototype.matches=function(t){var e=t.field(this.field);return e instanceof Fs&&e.contains(this.value)},ih);function ih(t,e){return nh.call(this,t,Gc.ARRAY_CONTAINS,e)||this}var oh,ah=(t(sh,oh=Hc),sh.prototype.matches=function(t){var e=this.value,n=t.field(this.field);return null!==n&&e.contains(n)},sh);function sh(t,e){var n=oh.call(this,t,Gc.IN,e)||this;return n.value=e,n}var uh,ch=(t(hh,uh=Hc),hh.prototype.matches=function(t){var e=this,n=t.field(this.field);return n instanceof Fs&&n.internalValue.some(function(t){return e.value.contains(t)})},hh);function hh(t,e){var n=uh.call(this,t,Gc.ARRAY_CONTAINS_ANY,e)||this;return n.value=e,n}var lh=(fh.prototype.toString=function(){return this.name},fh.ASCENDING=new fh("asc"),fh.DESCENDING=new fh("desc"),fh);function fh(t){this.name=t}var ph=(dh.prototype.canonicalId=function(){for(var t=this.before?"b:":"a:",e=0,n=this.position;e<n.length;e++)t+=n[e].toString();return t},dh.prototype.sortsBeforeDocument=function(t,e){Ur(this.position.length<=t.length,"Bound has more components than query's orderBy");for(var n=0,r=0;r<this.position.length;r++){var i=t[r],o=this.position[r];if(i.field.isKeyField())Ur(o instanceof As,"Bound has a non-key value where the key path is being used."),n=Wi.comparator(o.key,e.key);else{var a=e.field(i.field);Ur(null!==a,"Field should exist since document matched the orderBy already."),n=o.compareTo(a)}if(i.dir===lh.DESCENDING&&(n*=-1),0!==n)break}return this.before?n<=0:n<0},dh.prototype.isEqual=function(t){if(null===t)return!1;if(this.before!==t.before||this.position.length!==t.position.length)return!1;for(var e=0;e<this.position.length;e++){var n=this.position[e],r=t.position[e];if(!n.isEqual(r))return!1}return!0},dh);function dh(t,e){this.position=t,this.before=e}var mh=(yh.prototype.compare=function(t,e){var n=this.isKeyOrderBy?Ks.compareByKey(t,e):Ks.compareByField(this.field,t,e);switch(this.dir){case lh.ASCENDING:return n;case lh.DESCENDING:return-1*n;default:return Br("Unknown direction: "+this.dir)}},yh.prototype.canonicalId=function(){return this.field.canonicalString()+this.dir.toString()},yh.prototype.toString=function(){return this.field.canonicalString()+" ("+this.dir+")"},yh.prototype.isEqual=function(t){return this.dir===t.dir&&this.field.isEqual(t.field)},yh);function yh(t,e){this.field=t,void 0===e&&(e=lh.ASCENDING),this.dir=e,this.isKeyOrderBy=t.isKeyField()}var gh=new mh(ji.keyField(),lh.ASCENDING),vh=new mh(ji.keyField(),lh.DESCENDING),bh=(wh.prototype.setLocalDocumentsView=function(t){this.localDocumentsView=t},wh.prototype.getDocumentsMatchingQuery=function(e,r,i,o){var a=this;return Ur(void 0!==this.localDocumentsView,"setLocalDocumentsView() not called"),r.matchesAllDocuments()?this.executeFullCollectionScan(e,r):i.isEqual(lo.MIN)?this.executeFullCollectionScan(e,r):this.localDocumentsView.getDocuments(e,o).next(function(t){var n=a.applyQuery(r,t);return(r.hasLimitToFirst()||r.hasLimitToLast())&&a.needsRefill(r.limitType,n,o,i)?a.executeFullCollectionScan(e,r):(Pr()<=Cr.DEBUG&&Fr("IndexFreeQueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),r.toString()),a.localDocumentsView.getDocumentsMatchingQuery(e,r,i).next(function(e){return n.forEach(function(t){e=e.insert(t.key,t)}),e}))})},wh.prototype.applyQuery=function(n,t){var r=new So(function(t,e){return n.docComparator(t,e)});return t.forEach(function(t,e){e instanceof Ks&&n.matches(e)&&(r=r.add(e))}),r},wh.prototype.needsRefill=function(t,e,n,r){if(n.size!==e.size)return!0;var i=t===qc.First?e.last():e.first();return!!i&&(i.hasPendingWrites||0<i.version.compareTo(r))},wh.prototype.executeFullCollectionScan=function(t,e){return Pr()<=Cr.DEBUG&&Fr("IndexFreeQueryEngine","Using full collection scan to execute query: %s",e.toString()),this.localDocumentsView.getDocumentsMatchingQuery(t,e,lo.MIN)},wh);function wh(){}var Th=(Sh.prototype.checkEmpty=function(t){return Uo.resolve(0===this.mutationQueue.length)},Sh.prototype.acknowledgeBatch=function(t,e,n){var r=e.batchId,i=this.indexOfExistingBatchId(r,"acknowledged");Ur(0===i,"Can only acknowledge the first batch in the mutation queue");var o=this.mutationQueue[i];return Ur(r===o.batchId,"Queue ordering failure: expected batch "+r+", got batch "+o.batchId),this.lastStreamToken=n,Uo.resolve()},Sh.prototype.getLastStreamToken=function(t){return Uo.resolve(this.lastStreamToken)},Sh.prototype.setLastStreamToken=function(t,e){return this.lastStreamToken=e,Uo.resolve()},Sh.prototype.addMutationBatch=function(t,e,n,r){Ur(0!==r.length,"Mutation batches should not be empty");var i=this.nextBatchId;this.nextBatchId++,0<this.mutationQueue.length&&Ur(this.mutationQueue[this.mutationQueue.length-1].batchId<i,"Mutation batchIDs must be monotonically increasing order");var o=new Fo(i,e,n,r);this.mutationQueue.push(o);for(var a=0,s=r;a<s.length;a++){var u=s[a];this.batchesByDocumentKey=this.batchesByDocumentKey.add(new ic(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast())}return Uo.resolve(o)},Sh.prototype.lookupMutationBatch=function(t,e){return Uo.resolve(this.findMutationBatch(e))},Sh.prototype.lookupMutationKeys=function(t,e){var n=this.findMutationBatch(e);return Ur(null!=n,"Failed to find local mutation batch."),Uo.resolve(n.keys())},Sh.prototype.getNextMutationBatchAfterBatchId=function(t,e){var n=e+1,r=this.indexOfBatchId(n),i=r<0?0:r;return Uo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)},Sh.prototype.getHighestUnacknowledgedBatchId=function(){return Uo.resolve(0===this.mutationQueue.length?-1:this.nextBatchId-1)},Sh.prototype.getAllMutationBatches=function(t){return Uo.resolve(this.mutationQueue.slice())},Sh.prototype.getAllMutationBatchesAffectingDocumentKey=function(t,n){var r=this,e=new ic(n,0),i=new ic(n,Number.POSITIVE_INFINITY),o=[];return this.batchesByDocumentKey.forEachInRange([e,i],function(t){Ur(n.isEqual(t.key),"Should only iterate over a single key's batches");var e=r.findMutationBatch(t.targetOrBatchId);Ur(null!==e,"Batches in the index must exist in the main table"),o.push(e)}),Uo.resolve(o)},Sh.prototype.getAllMutationBatchesAffectingDocumentKeys=function(t,e){var r=this,i=new So(Si);return e.forEach(function(e){var t=new ic(e,0),n=new ic(e,Number.POSITIVE_INFINITY);r.batchesByDocumentKey.forEachInRange([t,n],function(t){Ur(e.isEqual(t.key),"For each key, should only iterate over a single key's batches"),i=i.add(t.targetOrBatchId)})}),Uo.resolve(this.findMutationBatches(i))},Sh.prototype.getAllMutationBatchesAffectingQuery=function(t,e){Ur(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView");var n=e.path,r=n.length+1,i=n;Wi.isDocumentKey(i)||(i=i.child(""));var o=new ic(new Wi(i),0),a=new So(Si);return this.batchesByDocumentKey.forEachWhile(function(t){var e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(a=a.add(t.targetOrBatchId)),!0)},o),Uo.resolve(this.findMutationBatches(a))},Sh.prototype.findMutationBatches=function(t){var n=this,r=[];return t.forEach(function(t){var e=n.findMutationBatch(t);null!==e&&r.push(e)}),r},Sh.prototype.removeMutationBatch=function(n,r){var i=this;Ur(0===this.indexOfExistingBatchId(r.batchId,"removed"),"Can only remove the first entry of the mutation queue"),this.mutationQueue.shift();var o=this.batchesByDocumentKey;return Uo.forEach(r.mutations,function(t){var e=new ic(t.key,r.batchId);return o=o.delete(e),i.referenceDelegate.removeMutationReference(n,t.key)}).next(function(){i.batchesByDocumentKey=o})},Sh.prototype.removeCachedMutationKeys=function(t){},Sh.prototype.containsKey=function(t,e){var n=new ic(e,0),r=this.batchesByDocumentKey.firstAfterOrEqual(n);return Uo.resolve(e.isEqual(r&&r.key))},Sh.prototype.performConsistencyCheck=function(t){return 0===this.mutationQueue.length&&Ur(this.batchesByDocumentKey.isEmpty(),"Document leak -- detected dangling mutation references when queue is empty."),Uo.resolve()},Sh.prototype.indexOfExistingBatchId=function(t,e){var n=this.indexOfBatchId(t);return Ur(0<=n&&n<this.mutationQueue.length,"Batches must exist to be "+e),n},Sh.prototype.indexOfBatchId=function(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId},Sh.prototype.findMutationBatch=function(t){var e=this.indexOfBatchId(t);if(e<0||e>=this.mutationQueue.length)return null;var n=this.mutationQueue[e];return Ur(n.batchId===t,"If found batch must match"),n},Sh);function Sh(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nextBatchId=1,this.lastStreamToken=jr(),this.batchesByDocumentKey=new So(ic.compareByKey)}var Eh,Ih=(Ch.prototype.addEntry=function(t,e,n){Ur(!n.isEqual(lo.MIN),"Cannot add a document with a read time of zero");var r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.sizer(e);return this.docs=this.docs.insert(r,{maybeDocument:e,size:a,readTime:n}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())},Ch.prototype.removeEntry=function(t){var e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)},Ch.prototype.getEntry=function(t,e){var n=this.docs.get(e);return Uo.resolve(n?n.maybeDocument:null)},Ch.prototype.getEntries=function(t,e){var n=this,r=Ao();return e.forEach(function(t){var e=n.docs.get(t);r=r.insert(t,e?e.maybeDocument:null)}),Uo.resolve(r)},Ch.prototype.getDocumentsMatchingQuery=function(t,e,n){Ur(!e.isCollectionGroupQuery(),"CollectionGroup queries should be handled in LocalDocumentsView");for(var r=Ro(),i=new Wi(e.path.child("")),o=this.docs.getIteratorFrom(i);o.hasNext();){var a=o.getNext(),s=a.key,u=a.value,c=u.maybeDocument,h=u.readTime;if(!e.path.isPrefixOf(s.path))break;h.compareTo(n)<=0||c instanceof Ks&&e.matches(c)&&(r=r.insert(c.key,c))}return Uo.resolve(r)},Ch.prototype.forEachDocumentKey=function(t,e){return Uo.forEach(this.docs,function(t){return e(t)})},Ch.prototype.getNewDocumentChanges=function(t,e){throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence")},Ch.prototype.getLastReadTime=function(t){return Uo.resolve(lo.MIN)},Ch.prototype.newChangeBuffer=function(t){return new Ch.RemoteDocumentChangeBuffer(this)},Ch.prototype.getSize=function(t){return Uo.resolve(this.size)},Ch.RemoteDocumentChangeBuffer=(t(Dh,Eh=Zs),Dh.prototype.applyChanges=function(n){var r=this,i=[];return this.changes.forEach(function(t,e){e?i.push(r.documentCache.addEntry(n,e,r.readTime)):r.documentCache.removeEntry(t)}),Uo.waitFor(i)},Dh.prototype.getFromCache=function(t,e){return this.documentCache.getEntry(t,e)},Dh.prototype.getAllFromCache=function(t,e){return this.documentCache.getEntries(t,e)},Dh),Ch);function Ch(t,e){this.indexManager=t,this.sizer=e,this.docs=new po(Wi.comparator),this.size=0}function Dh(t){var e=Eh.call(this)||this;return e.documentCache=t,e}var Nh=(Ah.prototype.forEachTarget=function(t,n){return this.targets.forEach(function(t,e){return n(e)}),Uo.resolve()},Ah.prototype.getLastRemoteSnapshotVersion=function(t){return Uo.resolve(this.lastRemoteSnapshotVersion)},Ah.prototype.getHighestSequenceNumber=function(t){return Uo.resolve(this.highestSequenceNumber)},Ah.prototype.allocateTargetId=function(t){var e=this.targetIdGenerator.after(this.highestTargetId);return this.highestTargetId=e,Uo.resolve(e)},Ah.prototype.setTargetsMetadata=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.highestSequenceNumber&&(this.highestSequenceNumber=e),Uo.resolve()},Ah.prototype.saveTargetData=function(t){this.targets.set(t.target,t);var e=t.targetId;e>this.highestTargetId&&(this.highestTargetId=e),t.sequenceNumber>this.highestSequenceNumber&&(this.highestSequenceNumber=t.sequenceNumber)},Ah.prototype.addTargetData=function(t,e){return Ur(!this.targets.has(e.target),"Adding a target that already exists"),this.saveTargetData(e),this.targetCount+=1,Uo.resolve()},Ah.prototype.updateTargetData=function(t,e){return Ur(this.targets.has(e.target),"Updating a non-existent target"),this.saveTargetData(e),Uo.resolve()},Ah.prototype.removeTargetData=function(t,e){return Ur(0<this.targetCount,"Removing a target from an empty cache"),Ur(this.targets.has(e.target),"Removing a non-existent target from the cache"),this.targets.delete(e.target),this.references.removeReferencesForId(e.targetId),this.targetCount-=1,Uo.resolve()},Ah.prototype.removeTargets=function(n,r,i){var o=this,a=0,s=[];return this.targets.forEach(function(t,e){e.sequenceNumber<=r&&null===i.get(e.targetId)&&(o.targets.delete(t),s.push(o.removeMatchingKeysForTargetId(n,e.targetId)),a++)}),Uo.waitFor(s).next(function(){return a})},Ah.prototype.getTargetCount=function(t){return Uo.resolve(this.targetCount)},Ah.prototype.getTargetData=function(t,e){var n=this.targets.get(e)||null;return Uo.resolve(n)},Ah.prototype.getTargetDataForTarget=function(t,e){return Br("Not yet implemented.")},Ah.prototype.addMatchingKeys=function(e,t,n){this.references.addReferences(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(function(t){i.push(r.addReference(e,t))}),Uo.waitFor(i)},Ah.prototype.removeMatchingKeys=function(e,t,n){this.references.removeReferences(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(function(t){i.push(r.removeReference(e,t))}),Uo.waitFor(i)},Ah.prototype.removeMatchingKeysForTargetId=function(t,e){return this.references.removeReferencesForId(e),Uo.resolve()},Ah.prototype.getMatchingKeysForTargetId=function(t,e){var n=this.references.referencesForId(e);return Uo.resolve(n)},Ah.prototype.containsKey=function(t,e){return Uo.resolve(this.references.containsKey(e))},Ah);function Ah(t){this.persistence=t,this.targets=new Xs(function(t){return t.canonicalId()}),this.lastRemoteSnapshotVersion=lo.MIN,this.highestTargetId=0,this.highestSequenceNumber=0,this.references=new nc,this.targetCount=0,this.targetIdGenerator=la.forTargetCache()}var kh=(Rh.createLruPersistence=function(t,e){return new Rh(t,function(t){return new xh(t,e)})},Rh.createEagerPersistence=function(t){return new Rh(t,function(t){return new Oh(t)})},Rh.prototype.shutdown=function(){return this._started=!1,Promise.resolve()},Object.defineProperty(Rh.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),Rh.prototype.getActiveClients=function(){return p(this,void 0,void 0,function(){return m(this,function(t){return[2,[this.clientId]]})})},Rh.prototype.setPrimaryStateListener=function(t){return t(!0)},Rh.prototype.setDatabaseDeletedListener=function(){},Rh.prototype.setNetworkEnabled=function(t){},Rh.prototype.getIndexManager=function(){return this.indexManager},Rh.prototype.getMutationQueue=function(t){var e=this.mutationQueues[t.toKey()];return e||(e=new Th(this.indexManager,this.referenceDelegate),this.mutationQueues[t.toKey()]=e),e},Rh.prototype.getTargetCache=function(){return this.targetCache},Rh.prototype.getRemoteDocumentCache=function(){return this.remoteDocumentCache},Rh.prototype.runTransaction=function(t,e,n){var r=this;Fr("MemoryPersistence","Starting transaction:",t);var i=new _h(this.listenSequence.next());return this.referenceDelegate.onTransactionStarted(),n(i).next(function(t){return r.referenceDelegate.onTransactionCommitted(i).next(function(){return t})}).toPromise().then(function(t){return i.raiseOnCommittedEvent(),t})},Rh.prototype.mutationQueuesContainKey=function(e,n){return Uo.or(function(t){var n=[];return $r(t,function(t,e){return n.push(e)}),n}(this.mutationQueues).map(function(t){return function(){return t.containsKey(e,n)}}))},Rh);function Rh(t,e){var n=this;this.clientId=t,this.mutationQueues={},this.listenSequence=new Oi(0),this._started=!1,this._started=!0,this.referenceDelegate=e(this),this.targetCache=new Nh(this);this.indexManager=new uu,this.remoteDocumentCache=new Ih(this.indexManager,function(t){return n.referenceDelegate.documentSize(t)})}var Mh,_h=(t(Lh,Mh=tc),Lh);function Lh(t){var e=Mh.call(this)||this;return e.currentSequenceNumber=t,e}var Oh=(Object.defineProperty(Ph.prototype,"orphanedDocuments",{get:function(){if(this._orphanedDocuments)return this._orphanedDocuments;throw Br("orphanedDocuments is only valid during a transaction.")},enumerable:!0,configurable:!0}),Ph.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},Ph.prototype.addReference=function(t,e){return this.orphanedDocuments.delete(e),Uo.resolve()},Ph.prototype.removeReference=function(t,e){return this.orphanedDocuments.add(e),Uo.resolve()},Ph.prototype.removeMutationReference=function(t,e){return this.orphanedDocuments.add(e),Uo.resolve()},Ph.prototype.removeTarget=function(t,e){var n=this,r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(function(t){t.forEach(function(t){return n.orphanedDocuments.add(t)})}).next(function(){return r.removeTargetData(t,e)})},Ph.prototype.onTransactionStarted=function(){this._orphanedDocuments=new Set},Ph.prototype.onTransactionCommitted=function(t){var n=this,r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Uo.forEach(this.orphanedDocuments,function(e){return n.isReferenced(t,e).next(function(t){t||r.removeEntry(e)})}).next(function(){return n._orphanedDocuments=null,r.apply(t)})},Ph.prototype.updateLimboDocument=function(t,e){var n=this;return this.isReferenced(t,e).next(function(t){t?n.orphanedDocuments.delete(e):n.orphanedDocuments.add(e)})},Ph.prototype.documentSize=function(t){return 0},Ph.prototype.isReferenced=function(t,e){var n=this;return Uo.or([function(){return n.persistence.getTargetCache().containsKey(t,e)},function(){return n.persistence.mutationQueuesContainKey(t,e)},function(){return Uo.resolve(n.inMemoryPins.containsKey(e))}])},Ph);function Ph(t){this.persistence=t,this.inMemoryPins=null,this._orphanedDocuments=null}var xh=(Fh.prototype.onTransactionStarted=function(){},Fh.prototype.onTransactionCommitted=function(t){return Uo.resolve()},Fh.prototype.forEachTarget=function(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)},Fh.prototype.getSequenceNumberCount=function(t){var n=this.orphanedDocumentCount(t);return this.persistence.getTargetCache().getTargetCount(t).next(function(e){return n.next(function(t){return e+t})})},Fh.prototype.orphanedDocumentCount=function(t){var e=0;return this.forEachOrphanedDocumentSequenceNumber(t,function(t){e++}).next(function(){return e})},Fh.prototype.forEachOrphanedDocumentSequenceNumber=function(n,r){var i=this;return Uo.forEach(this.orphanedSequenceNumbers,function(t,e){return i.isPinned(n,t,e).next(function(t){return t?Uo.resolve():r(e)})})},Fh.prototype.setInMemoryPins=function(t){this.inMemoryPins=t},Fh.prototype.removeTargets=function(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)},Fh.prototype.removeOrphanedDocuments=function(t,n){var r=this,i=0,e=this.persistence.getRemoteDocumentCache(),o=e.newChangeBuffer();return e.forEachDocumentKey(t,function(e){return r.isPinned(t,e,n).next(function(t){t||(i++,o.removeEntry(e))})}).next(function(){return o.apply(t)}).next(function(){return i})},Fh.prototype.removeMutationReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Uo.resolve()},Fh.prototype.removeTarget=function(t,e){var n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)},Fh.prototype.addReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Uo.resolve()},Fh.prototype.removeReference=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Uo.resolve()},Fh.prototype.updateLimboDocument=function(t,e){return this.orphanedSequenceNumbers.set(e,t.currentSequenceNumber),Uo.resolve()},Fh.prototype.documentSize=function(t){var e=t.key.toString().length;return t instanceof Ks&&(e+=t.data().approximateByteSize()),e},Fh.prototype.isPinned=function(t,e,n){var r=this;return Uo.or([function(){return r.persistence.mutationQueuesContainKey(t,e)},function(){return Uo.resolve(r.inMemoryPins.containsKey(e))},function(){return r.persistence.getTargetCache().containsKey(t,e)},function(){var t=r.orphanedSequenceNumbers.get(e);return Uo.resolve(void 0!==t&&n<t)}])},Fh.prototype.getCacheSize=function(t){return this.persistence.getRemoteDocumentCache().getSize(t)},Fh);function Fh(t,e){this.persistence=t,this.inMemoryPins=null,this.orphanedSequenceNumbers=new Xs(function(t){return oo(t.path)}),this.garbageCollector=new vc(this,e)}var qh=(Vh.prototype.reset=function(){this.currentBaseMs=0},Vh.prototype.resetToMax=function(){this.currentBaseMs=this.maxDelayMs},Vh.prototype.backoffAndRun=function(t){var e=this;this.cancel();var n=Math.floor(this.currentBaseMs+this.jitterDelayMs()),r=Math.max(0,Date.now()-this.lastAttemptTime),i=Math.max(0,n-r);0<this.currentBaseMs&&Fr("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.currentBaseMs+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.timerPromise=this.queue.enqueueAfterDelay(this.timerId,i,function(){return e.lastAttemptTime=Date.now(),t()}),this.currentBaseMs*=this.backoffFactor,this.currentBaseMs<this.initialDelayMs&&(this.currentBaseMs=this.initialDelayMs),this.currentBaseMs>this.maxDelayMs&&(this.currentBaseMs=this.maxDelayMs)},Vh.prototype.cancel=function(){null!==this.timerPromise&&(this.timerPromise.cancel(),this.timerPromise=null)},Vh.prototype.jitterDelayMs=function(){return(Math.random()-.5)*this.currentBaseMs},Vh);function Vh(t,e,n,r,i){void 0===n&&(n=1e3),void 0===r&&(r=1.5),void 0===i&&(i=6e4),this.queue=t,this.timerId=e,this.initialDelayMs=n,this.backoffFactor=r,this.maxDelayMs=i,this.currentBaseMs=0,this.timerPromise=null,this.lastAttemptTime=Date.now(),this.reset()}var Bh,Uh,Kh="PersistentStream";(Uh=Bh=Bh||{})[Uh.Initial=0]="Initial",Uh[Uh.Starting=1]="Starting",Uh[Uh.Open=2]="Open",Uh[Uh.Error=3]="Error",Uh[Uh.Backoff=4]="Backoff";var Qh=(jh.prototype.isStarted=function(){return this.state===Bh.Starting||this.state===Bh.Open||this.state===Bh.Backoff},jh.prototype.isOpen=function(){return this.state===Bh.Open},jh.prototype.start=function(){this.state!==Bh.Error?(Ur(this.state===Bh.Initial,"Already started"),this.auth()):this.performBackoff()},jh.prototype.stop=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.isStarted()?[4,this.close(Bh.Initial)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},jh.prototype.inhibitBackoff=function(){Ur(!this.isStarted(),"Can only inhibit backoff in a stopped state"),this.state=Bh.Initial,this.backoff.reset()},jh.prototype.markIdle=function(){var t=this;this.isOpen()&&null===this.idleTimer&&(this.idleTimer=this.queue.enqueueAfterDelay(this.idleTimerId,6e4,function(){return t.handleIdleCloseTimer()}))},jh.prototype.sendRequest=function(t){this.cancelIdleCheck(),this.stream.send(t)},jh.prototype.handleIdleCloseTimer=function(){return p(this,void 0,void 0,function(){return m(this,function(t){return this.isOpen()?[2,this.close(Bh.Initial)]:[2]})})},jh.prototype.cancelIdleCheck=function(){this.idleTimer&&(this.idleTimer.cancel(),this.idleTimer=null)},jh.prototype.close=function(e,n){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return Ur(this.isStarted(),"Only started streams should be closed."),Ur(e===Bh.Error||xc(n),"Can't provide an error when not in an error state."),this.cancelIdleCheck(),this.backoff.cancel(),this.closeCount++,e!==Bh.Error?this.backoff.reset():n&&n.code===Wr.RESOURCE_EXHAUSTED?(qr(n.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.backoff.resetToMax()):n&&n.code===Wr.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.tearDown(),this.stream.close(),this.stream=null),this.state=e,[4,this.listener.onClose(n)];case 1:return t.sent(),[2]}})})},jh.prototype.tearDown=function(){},jh.prototype.auth=function(){var n=this;Ur(this.state===Bh.Initial,"Must be in initial state to auth"),this.state=Bh.Starting;var t=this.getCloseGuardedDispatcher(this.closeCount),e=this.closeCount;this.credentialsProvider.getToken().then(function(t){n.closeCount===e&&n.startStream(t)},function(e){t(function(){var t=new zr(Wr.UNKNOWN,"Fetching auth token failed: "+e.message);return n.handleStreamClose(t)})})},jh.prototype.startStream=function(t){var e=this;Ur(this.state===Bh.Starting,"Trying to start stream in a non-starting state");var n=this.getCloseGuardedDispatcher(this.closeCount);this.stream=this.startRpc(t),this.stream.onOpen(function(){n(function(){return Ur(e.state===Bh.Starting,"Expected stream to be in state Starting, but was "+e.state),e.state=Bh.Open,e.listener.onOpen()})}),this.stream.onClose(function(t){n(function(){return e.handleStreamClose(t)})}),this.stream.onMessage(function(t){n(function(){return e.onMessage(t)})})},jh.prototype.performBackoff=function(){var t=this;Ur(this.state===Bh.Error,"Should only perform backoff when in Error state"),this.state=Bh.Backoff,this.backoff.backoffAndRun(function(){return p(t,void 0,void 0,function(){return m(this,function(t){return Ur(this.state===Bh.Backoff,"Backoff elapsed but state is now: "+this.state),this.state=Bh.Initial,this.start(),Ur(this.isStarted(),"PersistentStream should have started"),[2]})})})},jh.prototype.handleStreamClose=function(t){return Ur(this.isStarted(),"Can't handle server close on non-started stream"),Fr(Kh,"close with error: "+t),this.stream=null,this.close(Bh.Error,t)},jh.prototype.getCloseGuardedDispatcher=function(e){var n=this;return function(t){n.queue.enqueueAndForget(function(){return n.closeCount===e?t():(Fr(Kh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},jh);function jh(t,e,n,r,i,o){this.queue=t,this.idleTimerId=n,this.connection=r,this.credentialsProvider=i,this.listener=o,this.state=Bh.Initial,this.closeCount=0,this.idleTimer=null,this.stream=null,this.backoff=new qh(t,e)}var Gh,Wh=(t(zh,Gh=Qh),zh.prototype.startRpc=function(t){return this.connection.openStream("Listen",t)},zh.prototype.onMessage=function(t){this.backoff.reset();var e=this.serializer.fromWatchChange(t),n=this.serializer.versionFromListenResponse(t);return this.listener.onWatchChange(e,n)},zh.prototype.watch=function(t){var e={};e.database=this.serializer.encodedDatabaseId,e.addTarget=this.serializer.toTarget(t);var n=this.serializer.toListenRequestLabels(t);n&&(e.labels=n),this.sendRequest(e)},zh.prototype.unwatch=function(t){var e={};e.database=this.serializer.encodedDatabaseId,e.removeTarget=t,this.sendRequest(e)},zh);function zh(t,e,n,r,i){var o=Gh.call(this,t,Hi.ListenStreamConnectionBackoff,Hi.ListenStreamIdle,e,n,i)||this;return o.serializer=r,o}var Hh,Yh=(t(Xh,Hh=Qh),Object.defineProperty(Xh.prototype,"handshakeComplete",{get:function(){return this.handshakeComplete_},enumerable:!0,configurable:!0}),Xh.prototype.start=function(){this.handshakeComplete_=!1,Hh.prototype.start.call(this)},Xh.prototype.tearDown=function(){this.handshakeComplete_&&this.writeMutations([])},Xh.prototype.startRpc=function(t){return this.connection.openStream("Write",t)},Xh.prototype.onMessage=function(t){if(Ur(!!t.streamToken,"Got a write response without a stream token"),this.lastStreamToken=t.streamToken,this.handshakeComplete_){this.backoff.reset();var e=this.serializer.fromWriteResults(t.writeResults,t.commitTime),n=this.serializer.fromVersion(t.commitTime);return this.listener.onMutationResult(n,e)}return Ur(!t.writeResults||0===t.writeResults.length,"Got mutation results for handshake"),this.handshakeComplete_=!0,this.listener.onHandshakeComplete()},Xh.prototype.writeHandshake=function(){Ur(this.isOpen(),"Writing handshake requires an opened stream"),Ur(!this.handshakeComplete_,"Handshake already completed");var t={};t.database=this.serializer.encodedDatabaseId,this.sendRequest(t)},Xh.prototype.writeMutations=function(t){var e=this;Ur(this.isOpen(),"Writing mutations requires an opened stream"),Ur(this.handshakeComplete_,"Handshake must be complete before writing mutations"),Ur(0<this.lastStreamToken.length,"Trying to write mutation without a token");var n={streamToken:this.lastStreamToken,writes:t.map(function(t){return e.serializer.toMutation(t)})};this.sendRequest(n)},Xh);function Xh(t,e,n,r,i){var o=Hh.call(this,t,Hi.WriteStreamConnectionBackoff,Hi.WriteStreamIdle,e,n,i)||this;return o.serializer=r,o.handshakeComplete_=!1,o.lastStreamToken=jr(),o}var Jh=(Zh.prototype.newPersistentWriteStream=function(t){return new Yh(this.queue,this.connection,this.credentials,this.serializer,t)},Zh.prototype.newPersistentWatchStream=function(t){return new Wh(this.queue,this.connection,this.credentials,this.serializer,t)},Zh.prototype.commit=function(t){var e=this,n={database:this.serializer.encodedDatabaseId,writes:t.map(function(t){return e.serializer.toMutation(t)})};return this.invokeRPC("Commit",n).then(function(t){return e.serializer.fromWriteResults(t.writeResults,t.commitTime)})},Zh.prototype.lookup=function(e){var i=this,t={database:this.serializer.encodedDatabaseId,documents:e.map(function(t){return i.serializer.toName(t)})};return this.invokeStreamingRPC("BatchGetDocuments",t).then(function(t){var n=No();t.forEach(function(t){var e=i.serializer.fromMaybeDocument(t);n=n.insert(e.key,e)});var r=[];return e.forEach(function(t){var e=n.get(t);Ur(!!e,"Missing entity in write response for "+t),r.push(e)}),r})},Zh.prototype.invokeRPC=function(e,n){var r=this;return this.credentials.getToken().then(function(t){return r.connection.invokeRPC(e,n,t)}).catch(function(t){throw t.code===Wr.UNAUTHENTICATED&&r.credentials.invalidateToken(),t})},Zh.prototype.invokeStreamingRPC=function(e,n){var r=this;return this.credentials.getToken().then(function(t){return r.connection.invokeStreamingRPC(e,n,t)}).catch(function(t){throw t.code===Wr.UNAUTHENTICATED&&r.credentials.invalidateToken(),t})},Zh);function Zh(t,e,n,r){this.queue=t,this.connection=e,this.credentials=n,this.serializer=r}var $h,tl,el,nl,rl=(il.prototype.lookup=function(r){return p(this,void 0,void 0,function(){var e,n=this;return m(this,function(t){switch(t.label){case 0:if(this.ensureCommitNotCalled(),0<this.mutations.length)throw new zr(Wr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");return[4,this.datastore.lookup(r)];case 1:return(e=t.sent()).forEach(function(t){t instanceof Gs||t instanceof Ks?n.recordVersion(t):Br("Document in a transaction was a "+t.constructor.name)}),[2,e]}})})},il.prototype.set=function(t,e){this.write(e.toMutations(t,this.precondition(t))),this.writtenDocs.add(t)},il.prototype.update=function(t,e){try{this.write(e.toMutations(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t)},il.prototype.delete=function(t){this.write([new Ba(t,this.precondition(t))]),this.writtenDocs.add(t)},il.prototype.commit=function(){return p(this,void 0,void 0,function(){var e,n=this;return m(this,function(t){switch(t.label){case 0:if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;return e=this.readVersions,this.mutations.forEach(function(t){e=e.remove(t.key)}),e.forEach(function(t,e){n.mutations.push(new za(t,n.precondition(t)))}),[4,this.datastore.commit(this.mutations)];case 1:return t.sent(),this.committed=!0,[2]}})})},il.prototype.recordVersion=function(t){var e;if(t instanceof Ks)e=t.version;else{if(!(t instanceof Gs))throw Br("Document in a transaction was a "+t.constructor.name);e=lo.forDeletedDoc()}var n=this.readVersions.get(t.key);if(null!==n){if(!e.isEqual(n))throw new zr(Wr.ABORTED,"Document version changed between two reads.")}else this.readVersions=this.readVersions.insert(t.key,e)},il.prototype.precondition=function(t){var e=this.readVersions.get(t);return!this.writtenDocs.has(t)&&e?Da.updateTime(e):Da.NONE},il.prototype.preconditionForUpdate=function(t){var e=this.readVersions.get(t);if(this.writtenDocs.has(t)||!e)return Da.exists(!0);if(e.isEqual(lo.forDeletedDoc()))throw new zr(Wr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Da.updateTime(e)},il.prototype.write=function(t){this.ensureCommitNotCalled(),this.mutations=this.mutations.concat(t)},il.prototype.ensureCommitNotCalled=function(){Ur(!this.committed,"A transaction object cannot be used after its update callback has been invoked.")},il);function il(t){this.datastore=t,this.readVersions=_o(),this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}(tl=$h=$h||{})[tl.Unknown=0]="Unknown",tl[tl.Online=1]="Online",tl[tl.Offline=2]="Offline",(nl=el=el||{})[nl.RemoteStore=0]="RemoteStore",nl[nl.SharedClientState=1]="SharedClientState";var ol,al,sl=(ul.prototype.handleWatchStreamStart=function(){var t=this;0===this.watchStreamFailures&&(this.setAndBroadcast($h.Unknown),Ur(null===this.onlineStateTimer,"onlineStateTimer shouldn't be started yet"),this.onlineStateTimer=this.asyncQueue.enqueueAfterDelay(Hi.OnlineStateTimeout,1e4,function(){return t.onlineStateTimer=null,Ur(t.state===$h.Unknown,"Timer should be canceled if we transitioned to a different state."),t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."),t.setAndBroadcast($h.Offline),Promise.resolve()}))},ul.prototype.handleWatchStreamFailure=function(t){this.state===$h.Online?(this.setAndBroadcast($h.Unknown),Ur(0===this.watchStreamFailures,"watchStreamFailures must be 0"),Ur(null===this.onlineStateTimer,"onlineStateTimer must be null")):(this.watchStreamFailures++,1<=this.watchStreamFailures&&(this.clearOnlineStateTimer(),this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: "+t.toString()),this.setAndBroadcast($h.Offline)))},ul.prototype.set=function(t){this.clearOnlineStateTimer(),this.watchStreamFailures=0,t===$h.Online&&(this.shouldWarnClientIsOffline=!1),this.setAndBroadcast(t)},ul.prototype.setAndBroadcast=function(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))},ul.prototype.logClientOfflineWarningIfNecessary=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";this.shouldWarnClientIsOffline?(qr(e),this.shouldWarnClientIsOffline=!1):Fr("OnlineStateTracker",e)},ul.prototype.clearOnlineStateTimer=function(){null!==this.onlineStateTimer&&(this.onlineStateTimer.cancel(),this.onlineStateTimer=null)},ul);function ul(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state=$h.Unknown,this.watchStreamFailures=0,this.onlineStateTimer=null,this.shouldWarnClientIsOffline=!0}function cl(t){switch(t){case Wr.OK:return Br("Treated status OK as error");case Wr.CANCELLED:case Wr.UNKNOWN:case Wr.DEADLINE_EXCEEDED:case Wr.RESOURCE_EXHAUSTED:case Wr.INTERNAL:case Wr.UNAVAILABLE:case Wr.UNAUTHENTICATED:return!1;case Wr.INVALID_ARGUMENT:case Wr.NOT_FOUND:case Wr.ALREADY_EXISTS:case Wr.PERMISSION_DENIED:case Wr.FAILED_PRECONDITION:case Wr.ABORTED:case Wr.OUT_OF_RANGE:case Wr.UNIMPLEMENTED:case Wr.DATA_LOSS:return!0;default:return Br("Unknown status code: "+t)}}function hl(t){if(void 0===t)return qr("GRPC error has no .code"),Wr.UNKNOWN;switch(t){case ol.OK:return Wr.OK;case ol.CANCELLED:return Wr.CANCELLED;case ol.UNKNOWN:return Wr.UNKNOWN;case ol.DEADLINE_EXCEEDED:return Wr.DEADLINE_EXCEEDED;case ol.RESOURCE_EXHAUSTED:return Wr.RESOURCE_EXHAUSTED;case ol.INTERNAL:return Wr.INTERNAL;case ol.UNAVAILABLE:return Wr.UNAVAILABLE;case ol.UNAUTHENTICATED:return Wr.UNAUTHENTICATED;case ol.INVALID_ARGUMENT:return Wr.INVALID_ARGUMENT;case ol.NOT_FOUND:return Wr.NOT_FOUND;case ol.ALREADY_EXISTS:return Wr.ALREADY_EXISTS;case ol.PERMISSION_DENIED:return Wr.PERMISSION_DENIED;case ol.FAILED_PRECONDITION:return Wr.FAILED_PRECONDITION;case ol.ABORTED:return Wr.ABORTED;case ol.OUT_OF_RANGE:return Wr.OUT_OF_RANGE;case ol.UNIMPLEMENTED:return Wr.UNIMPLEMENTED;case ol.DATA_LOSS:return Wr.DATA_LOSS;default:return Br("Unknown status code: "+t)}}(al=ol=ol||{})[al.OK=0]="OK",al[al.CANCELLED=1]="CANCELLED",al[al.UNKNOWN=2]="UNKNOWN",al[al.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",al[al.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",al[al.NOT_FOUND=5]="NOT_FOUND",al[al.ALREADY_EXISTS=6]="ALREADY_EXISTS",al[al.PERMISSION_DENIED=7]="PERMISSION_DENIED",al[al.UNAUTHENTICATED=16]="UNAUTHENTICATED",al[al.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",al[al.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",al[al.ABORTED=10]="ABORTED",al[al.OUT_OF_RANGE=11]="OUT_OF_RANGE",al[al.UNIMPLEMENTED=12]="UNIMPLEMENTED",al[al.INTERNAL=13]="INTERNAL",al[al.UNAVAILABLE=14]="UNAVAILABLE",al[al.DATA_LOSS=15]="DATA_LOSS";var ll,fl,pl,dl,ml=(yl.emptySet=function(t){return new yl(t.comparator)},yl.prototype.has=function(t){return null!=this.keyedMap.get(t)},yl.prototype.get=function(t){return this.keyedMap.get(t)},yl.prototype.first=function(){return this.sortedSet.minKey()},yl.prototype.last=function(){return this.sortedSet.maxKey()},yl.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},yl.prototype.indexOf=function(t){var e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1},Object.defineProperty(yl.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!0,configurable:!0}),yl.prototype.forEach=function(n){this.sortedSet.inorderTraversal(function(t,e){return n(t),!1})},yl.prototype.add=function(t){var e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))},yl.prototype.delete=function(t){var e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this},yl.prototype.isEqual=function(t){if(!(t instanceof yl))return!1;if(this.size!==t.size)return!1;for(var e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();e.hasNext();){var r=e.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0},yl.prototype.toString=function(){var e=[];return this.forEach(function(t){e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"},yl.prototype.copy=function(t,e){var n=new yl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n},yl);function yl(n){this.comparator=n?function(t,e){return n(t,e)||Wi.comparator(t.key,e.key)}:function(t,e){return Wi.comparator(t.key,e.key)},this.keyedMap=Ro(),this.sortedSet=new po(this.comparator)}(fl=ll=ll||{})[fl.Added=0]="Added",fl[fl.Removed=1]="Removed",fl[fl.Modified=2]="Modified",fl[fl.Metadata=3]="Metadata",(dl=pl=pl||{})[dl.Local=0]="Local",dl[dl.Synced=1]="Synced";var gl=(vl.prototype.track=function(t){var e=t.doc.key,n=this.changeMap.get(e);n?t.type!==ll.Added&&n.type===ll.Metadata?this.changeMap=this.changeMap.insert(e,t):t.type===ll.Metadata&&n.type!==ll.Removed?this.changeMap=this.changeMap.insert(e,{type:n.type,doc:t.doc}):t.type===ll.Modified&&n.type===ll.Modified?this.changeMap=this.changeMap.insert(e,{type:ll.Modified,doc:t.doc}):t.type===ll.Modified&&n.type===ll.Added?this.changeMap=this.changeMap.insert(e,{type:ll.Added,doc:t.doc}):t.type===ll.Removed&&n.type===ll.Added?this.changeMap=this.changeMap.remove(e):t.type===ll.Removed&&n.type===ll.Modified?this.changeMap=this.changeMap.insert(e,{type:ll.Removed,doc:n.doc}):t.type===ll.Added&&n.type===ll.Removed?this.changeMap=this.changeMap.insert(e,{type:ll.Modified,doc:t.doc}):Br("unsupported combination of changes: "+JSON.stringify(t)+" after "+JSON.stringify(n)):this.changeMap=this.changeMap.insert(e,t)},vl.prototype.getChanges=function(){var n=[];return this.changeMap.inorderTraversal(function(t,e){n.push(e)}),n},vl);function vl(){this.changeMap=new po(Wi.comparator)}var bl=(wl.fromInitialDocuments=function(t,e,n,r){var i=[];return e.forEach(function(t){i.push({type:ll.Added,doc:t})}),new wl(t,e,ml.emptySet(e),i,n,r,!0,!1)},Object.defineProperty(wl.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!0,configurable:!0}),wl.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&this.query.isEqual(t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;var e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0},wl);function wl(t,e,n,r,i,o,a,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s}var Tl=(Sl.createSynthesizedRemoteEventForCurrentChange=function(t,e){var n,r=((n={})[t]=El.createSynthesizedTargetChangeForCurrentChange(t,e),n);return new Sl(lo.MIN,r,xo(),No(),Oo())},Sl);function Sl(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}var El=(Il.createSynthesizedTargetChangeForCurrentChange=function(t,e){return new Il(jr(),e,Oo(),Oo(),Oo())},Il);function Il(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}var Cl,Dl,Nl=function(t,e,n,r){this.updatedTargetIds=t,this.removedTargetIds=e,this.key=n,this.newDoc=r},Al=function(t,e){this.targetId=t,this.existenceFilter=e};(Dl=Cl=Cl||{})[Dl.NoChange=0]="NoChange",Dl[Dl.Added=1]="Added",Dl[Dl.Removed=2]="Removed",Dl[Dl.Current=3]="Current",Dl[Dl.Reset=4]="Reset";var kl=function(t,e,n,r){void 0===n&&(n=jr()),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Rl=(Object.defineProperty(Ml.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(Ml.prototype,"resumeToken",{get:function(){return this._resumeToken},enumerable:!0,configurable:!0}),Object.defineProperty(Ml.prototype,"isPending",{get:function(){return 0!==this.pendingResponses},enumerable:!0,configurable:!0}),Object.defineProperty(Ml.prototype,"hasPendingChanges",{get:function(){return this._hasPendingChanges},enumerable:!0,configurable:!0}),Ml.prototype.updateResumeToken=function(t){0<t.length&&(this._hasPendingChanges=!0,this._resumeToken=t)},Ml.prototype.toTargetChange=function(){var n=Oo(),r=Oo(),i=Oo();return this.documentChanges.forEach(function(t,e){switch(e){case ll.Added:n=n.add(t);break;case ll.Modified:r=r.add(t);break;case ll.Removed:i=i.add(t);break;default:Br("Encountered invalid change type: "+e)}}),new El(this._resumeToken,this._current,n,r,i)},Ml.prototype.clearPendingChanges=function(){this._hasPendingChanges=!1,this.documentChanges=Pl()},Ml.prototype.addDocumentChange=function(t,e){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.insert(t,e)},Ml.prototype.removeDocumentChange=function(t){this._hasPendingChanges=!0,this.documentChanges=this.documentChanges.remove(t)},Ml.prototype.recordPendingTargetRequest=function(){this.pendingResponses+=1},Ml.prototype.recordTargetResponse=function(){this.pendingResponses-=1},Ml.prototype.markCurrent=function(){this._hasPendingChanges=!0,this._current=!0},Ml);function Ml(){this.pendingResponses=0,this.documentChanges=Pl(),this._resumeToken=jr(),this._current=!1,this._hasPendingChanges=!0}var _l=(Ll.prototype.handleDocumentChange=function(t){for(var e=0,n=t.updatedTargetIds;e<n.length;e++){var r=n[e];t.newDoc instanceof Ks?this.addDocumentToTarget(r,t.newDoc):t.newDoc instanceof Gs&&this.removeDocumentFromTarget(r,t.key,t.newDoc)}for(var i=0,o=t.removedTargetIds;i<o.length;i++)r=o[i],this.removeDocumentFromTarget(r,t.key,t.newDoc)},Ll.prototype.handleTargetChange=function(n){var r=this;this.forEachTarget(n,function(t){var e=r.ensureTargetState(t);switch(n.state){case Cl.NoChange:r.isActiveTarget(t)&&e.updateResumeToken(n.resumeToken);break;case Cl.Added:e.recordTargetResponse(),e.isPending||e.clearPendingChanges(),e.updateResumeToken(n.resumeToken);break;case Cl.Removed:e.recordTargetResponse(),e.isPending||r.removeTarget(t),Ur(!n.cause,"WatchChangeAggregator does not handle errored targets");break;case Cl.Current:r.isActiveTarget(t)&&(e.markCurrent(),e.updateResumeToken(n.resumeToken));break;case Cl.Reset:r.isActiveTarget(t)&&(r.resetTarget(t),e.updateResumeToken(n.resumeToken));break;default:Br("Unknown target watch change state: "+n.state)}})},Ll.prototype.forEachTarget=function(t,e){0<t.targetIds.length?t.targetIds.forEach(e):Zr(this.targetStates,e)},Ll.prototype.handleExistenceFilter=function(t){var e=t.targetId,n=t.existenceFilter.count,r=this.targetDataForActiveTarget(e);if(r){var i=r.target;if(i.isDocumentQuery())if(0===n){var o=new Wi(i.path);this.removeDocumentFromTarget(e,o,new Gs(o,lo.forDeletedDoc()))}else Ur(1===n,"Single document existence filter with count: "+n);else this.getCurrentDocumentCountForTarget(e)!==n&&(this.resetTarget(e),this.pendingTargetResets=this.pendingTargetResets.add(e))}},Ll.prototype.createRemoteEvent=function(i){var o=this,a={};Zr(this.targetStates,function(t,e){var n=o.targetDataForActiveTarget(t);if(n){if(e.current&&n.target.isDocumentQuery()){var r=new Wi(n.target.path);null!==o.pendingDocumentUpdates.get(r)||o.targetContainsDocument(t,r)||o.removeDocumentFromTarget(t,r,new Gs(r,i))}e.hasPendingChanges&&(a[t]=e.toTargetChange(),e.clearPendingChanges())}});var r=Oo();this.pendingDocumentTargetMapping.forEach(function(t,e){var n=!0;e.forEachWhile(function(t){var e=o.targetDataForActiveTarget(t);return!e||e.purpose===Uu.LimboResolution||(n=!1)}),n&&(r=r.add(t))});var t=new Tl(i,a,this.pendingTargetResets,this.pendingDocumentUpdates,r);return this.pendingDocumentUpdates=No(),this.pendingDocumentTargetMapping=Ol(),this.pendingTargetResets=new So(Si),t},Ll.prototype.addDocumentToTarget=function(t,e){if(this.isActiveTarget(t)){var n=this.targetContainsDocument(t,e.key)?ll.Modified:ll.Added;this.ensureTargetState(t).addDocumentChange(e.key,n),this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e.key,e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e.key,this.ensureDocumentTargetMapping(e.key).add(t))}},Ll.prototype.removeDocumentFromTarget=function(t,e,n){if(this.isActiveTarget(t)){var r=this.ensureTargetState(t);this.targetContainsDocument(t,e)?r.addDocumentChange(e,ll.Removed):r.removeDocumentChange(e),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(e,this.ensureDocumentTargetMapping(e).delete(t)),n&&(this.pendingDocumentUpdates=this.pendingDocumentUpdates.insert(e,n))}},Ll.prototype.removeTarget=function(t){delete this.targetStates[t]},Ll.prototype.getCurrentDocumentCountForTarget=function(t){var e=this.ensureTargetState(t).toTargetChange();return this.metadataProvider.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size},Ll.prototype.recordPendingTargetRequest=function(t){this.ensureTargetState(t).recordPendingTargetRequest()},Ll.prototype.ensureTargetState=function(t){return this.targetStates[t]||(this.targetStates[t]=new Rl),this.targetStates[t]},Ll.prototype.ensureDocumentTargetMapping=function(t){var e=this.pendingDocumentTargetMapping.get(t);return e||(e=new So(Si),this.pendingDocumentTargetMapping=this.pendingDocumentTargetMapping.insert(t,e)),e},Ll.prototype.isActiveTarget=function(t){var e=null!==this.targetDataForActiveTarget(t);return e||Fr("WatchChangeAggregator","Detected inactive target",t),e},Ll.prototype.targetDataForActiveTarget=function(t){var e=this.targetStates[t];return e&&e.isPending?null:this.metadataProvider.getTargetDataForTarget(t)},Ll.prototype.resetTarget=function(e){var n=this;Ur(!this.targetStates[e].isPending,"Should only reset active targets"),this.targetStates[e]=new Rl,this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(t){n.removeDocumentFromTarget(e,t,null)})},Ll.prototype.targetContainsDocument=function(t,e){return this.metadataProvider.getRemoteKeysForTarget(t).has(e)},Ll);function Ll(t){this.metadataProvider=t,this.targetStates={},this.pendingDocumentUpdates=No(),this.pendingDocumentTargetMapping=Ol(),this.pendingTargetResets=new So(Si)}function Ol(){return new po(Wi.comparator)}function Pl(){return new po(Wi.comparator)}var xl="RemoteStore",Fl=(ql.prototype.start=function(){return this.enableNetwork()},ql.prototype.enableNetwork=function(){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return this.networkEnabled=!0,this.canUseNetwork()?(e=this.writeStream,[4,this.localStore.getLastStreamToken()]):[3,3];case 1:return e.lastStreamToken=t.sent(),this.shouldStartWatchStream()?this.startWatchStream():this.onlineStateTracker.set($h.Unknown),[4,this.fillWritePipeline()];case 2:t.sent(),t.label=3;case 3:return[2]}})})},ql.prototype.disableNetwork=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()];case 1:return t.sent(),this.onlineStateTracker.set($h.Offline),[2]}})})},ql.prototype.disableNetworkInternal=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return[4,this.writeStream.stop()];case 1:return t.sent(),[4,this.watchStream.stop()];case 2:return t.sent(),0<this.writePipeline.length&&(Fr(xl,"Stopping write stream with "+this.writePipeline.length+" pending writes"),this.writePipeline=[]),this.cleanUpWatchStreamState(),[2]}})})},ql.prototype.shutdown=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return Fr(xl,"RemoteStore shutting down."),this.networkEnabled=!1,[4,this.disableNetworkInternal()];case 1:return t.sent(),this.connectivityMonitor.shutdown(),this.onlineStateTracker.set($h.Unknown),[2]}})})},ql.prototype.listen=function(t){Xr(this.listenTargets,t.targetId)||(this.listenTargets[t.targetId]=t,this.shouldStartWatchStream()?this.startWatchStream():this.watchStream.isOpen()&&this.sendWatchRequest(t))},ql.prototype.unlisten=function(t){Ur(Xr(this.listenTargets,t),"unlisten called on target no currently watched: "+t),delete this.listenTargets[t],this.watchStream.isOpen()&&this.sendUnwatchRequest(t),ti(this.listenTargets)&&(this.watchStream.isOpen()?this.watchStream.markIdle():this.canUseNetwork()&&this.onlineStateTracker.set($h.Unknown))},ql.prototype.getTargetDataForTarget=function(t){return this.listenTargets[t]||null},ql.prototype.getRemoteKeysForTarget=function(t){return this.syncEngine.getRemoteKeysForTarget(t)},ql.prototype.sendWatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t.targetId),this.watchStream.watch(t)},ql.prototype.sendUnwatchRequest=function(t){this.watchChangeAggregator.recordPendingTargetRequest(t),this.watchStream.unwatch(t)},ql.prototype.startWatchStream=function(){Ur(this.shouldStartWatchStream(),"startWatchStream() called when shouldStartWatchStream() is false."),this.watchChangeAggregator=new _l(this),this.watchStream.start(),this.onlineStateTracker.handleWatchStreamStart()},ql.prototype.shouldStartWatchStream=function(){return this.canUseNetwork()&&!this.watchStream.isStarted()&&!ti(this.listenTargets)},ql.prototype.canUseNetwork=function(){return this.isPrimary&&this.networkEnabled},ql.prototype.cleanUpWatchStreamState=function(){this.watchChangeAggregator=null},ql.prototype.onWatchStreamOpen=function(){return p(this,void 0,void 0,function(){var n=this;return m(this,function(t){return Zr(this.listenTargets,function(t,e){n.sendWatchRequest(e)}),[2]})})},ql.prototype.onWatchStreamClose=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){return void 0===e&&Ur(!this.shouldStartWatchStream(),"Watch stream was stopped gracefully while still needed."),this.cleanUpWatchStreamState(),this.shouldStartWatchStream()?(this.onlineStateTracker.handleWatchStreamFailure(e),this.startWatchStream()):this.onlineStateTracker.set($h.Unknown),[2]})})},ql.prototype.onWatchStreamChange=function(n,r){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return this.onlineStateTracker.set($h.Online),n instanceof kl&&n.state===Cl.Removed&&n.cause?[2,this.handleTargetError(n)]:(n instanceof Nl?this.watchChangeAggregator.handleDocumentChange(n):n instanceof Al?this.watchChangeAggregator.handleExistenceFilter(n):(Ur(n instanceof kl,"Expected watchChange to be an instance of WatchTargetChange"),this.watchChangeAggregator.handleTargetChange(n)),r.isEqual(lo.MIN)?[3,3]:[4,this.localStore.getLastRemoteSnapshotVersion()]);case 1:return e=t.sent(),0<=r.compareTo(e)?[4,this.raiseWatchSnapshot(r)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})},ql.prototype.raiseWatchSnapshot=function(r){var i=this;Ur(!r.isEqual(lo.MIN),"Can't raise event for unknown SnapshotVersion");var t=this.watchChangeAggregator.createRemoteEvent(r);return Zr(t.targetChanges,function(t,e){if(0<e.resumeToken.length){var n=i.listenTargets[t];n&&(i.listenTargets[t]=n.withResumeToken(e.resumeToken,r))}}),t.targetMismatches.forEach(function(t){var e=i.listenTargets[t];if(e){i.listenTargets[t]=e.withResumeToken(jr(),e.snapshotVersion),i.sendUnwatchRequest(t);var n=new zu(e.target,t,Uu.ExistenceFilterMismatch,e.sequenceNumber);i.sendWatchRequest(n)}}),this.syncEngine.applyRemoteEvent(t)},ql.prototype.handleTargetError=function(t){var n=this;Ur(!!t.cause,"Handling target error without a cause");var r=t.cause,i=Promise.resolve();return t.targetIds.forEach(function(e){i=i.then(function(){return p(n,void 0,void 0,function(){return m(this,function(t){return Xr(this.listenTargets,e)?(delete this.listenTargets[e],this.watchChangeAggregator.removeTarget(e),[2,this.syncEngine.rejectListen(e,r)]):[2]})})})}),i},ql.prototype.fillWritePipeline=function(){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:return this.canAddToWritePipeline()?(e=0<this.writePipeline.length?this.writePipeline[this.writePipeline.length-1].batchId:-1,[4,this.localStore.nextMutationBatch(e)]):[3,4];case 1:return null!==(n=t.sent())?[3,2]:(0===this.writePipeline.length&&this.writeStream.markIdle(),[3,4]);case 2:return this.addToWritePipeline(n),[4,this.fillWritePipeline()];case 3:t.sent(),t.label=4;case 4:return this.shouldStartWriteStream()&&this.startWriteStream(),[2]}})})},ql.prototype.canAddToWritePipeline=function(){return this.canUseNetwork()&&this.writePipeline.length<10},ql.prototype.outstandingWrites=function(){return this.writePipeline.length},ql.prototype.addToWritePipeline=function(t){Ur(this.canAddToWritePipeline(),"addToWritePipeline called when pipeline is full"),this.writePipeline.push(t),this.writeStream.isOpen()&&this.writeStream.handshakeComplete&&this.writeStream.writeMutations(t.mutations)},ql.prototype.shouldStartWriteStream=function(){return this.canUseNetwork()&&!this.writeStream.isStarted()&&0<this.writePipeline.length},ql.prototype.startWriteStream=function(){Ur(this.shouldStartWriteStream(),"startWriteStream() called when shouldStartWriteStream() is false."),this.writeStream.start()},ql.prototype.onWriteStreamOpen=function(){return p(this,void 0,void 0,function(){return m(this,function(t){return this.writeStream.writeHandshake(),[2]})})},ql.prototype.onWriteHandshakeComplete=function(){var r=this;return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function(){for(var t=0,e=r.writePipeline;t<e.length;t++){var n=e[t];r.writeStream.writeMutations(n.mutations)}}).catch(cc)},ql.prototype.onMutationResult=function(t,e){var n=this;Ur(0<this.writePipeline.length,"Got result for empty write pipeline");var r=this.writePipeline.shift(),i=Vo.from(r,t,e,this.writeStream.lastStreamToken);return this.syncEngine.applySuccessfulWrite(i).then(function(){return n.fillWritePipeline()})},ql.prototype.onWriteStreamClose=function(n){return p(this,void 0,void 0,function(){var e=this;return m(this,function(t){return void 0===n&&Ur(!this.shouldStartWriteStream(),"Write stream was stopped gracefully while still needed."),n&&0<this.writePipeline.length?[2,(this.writeStream.handshakeComplete?this.handleWriteError(n):this.handleHandshakeError(n)).then(function(){e.shouldStartWriteStream()&&e.startWriteStream()})]:[2]})})},ql.prototype.handleHandshakeError=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){return cl(e.code)?(Fr(xl,"RemoteStore error before completed handshake; resetting stream token: ",this.writeStream.lastStreamToken),this.writeStream.lastStreamToken=jr(),[2,this.localStore.setLastStreamToken(jr()).catch(cc)]):[2]})})},ql.prototype.handleWriteError=function(r){return p(this,void 0,void 0,function(){var e,n=this;return m(this,function(t){return function(t){return cl(t)&&t!==Wr.ABORTED}(r.code)?(e=this.writePipeline.shift(),this.writeStream.inhibitBackoff(),[2,this.syncEngine.rejectFailedWrite(e.batchId,r).then(function(){return n.fillWritePipeline()})]):[2]})})},ql.prototype.createTransaction=function(){return new rl(this.datastore)},ql.prototype.restartNetwork=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.networkEnabled=!1,[4,this.disableNetworkInternal()];case 1:return t.sent(),this.onlineStateTracker.set($h.Unknown),[4,this.enableNetwork()];case 2:return t.sent(),[2]}})})},ql.prototype.handleCredentialChange=function(){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(Fr(xl,"RemoteStore restarting streams for new credential"),[4,this.restartNetwork()]):[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},ql.prototype.applyPrimaryState=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return(this.isPrimary=e)&&this.networkEnabled?[4,this.enableNetwork()]:[3,2];case 1:return t.sent(),[3,4];case 2:return e?[3,4]:[4,this.disableNetworkInternal()];case 3:t.sent(),this.onlineStateTracker.set($h.Unknown),t.label=4;case 4:return[2]}})})},ql);function ql(t,e,n,r,i){var o=this;this.localStore=t,this.datastore=e,this.writePipeline=[],this.listenTargets={},this.watchChangeAggregator=null,this.networkEnabled=!1,this.isPrimary=!1,this.connectivityMonitor=i,this.connectivityMonitor.addCallback(function(t){n.enqueueAndForget(function(){return p(o,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.canUseNetwork()?(Fr(xl,"Restarting streams for network reachability change."),[4,this.restartNetwork()]):[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})})}),this.onlineStateTracker=new sl(n,r),this.watchStream=this.datastore.newPersistentWatchStream({onOpen:this.onWatchStreamOpen.bind(this),onClose:this.onWatchStreamClose.bind(this),onWatchChange:this.onWatchStreamChange.bind(this)}),this.writeStream=this.datastore.newPersistentWriteStream({onOpen:this.onWriteStreamOpen.bind(this),onClose:this.onWriteStreamClose.bind(this),onHandshakeComplete:this.onWriteHandshakeComplete.bind(this),onMutationResult:this.onMutationResult.bind(this)})}var Vl=(Object.defineProperty(Bl.prototype,"latitude",{get:function(){return this._lat},enumerable:!0,configurable:!0}),Object.defineProperty(Bl.prototype,"longitude",{get:function(){return this._long},enumerable:!0,configurable:!0}),Bl.prototype.isEqual=function(t){return this._lat===t._lat&&this._long===t._long},Bl.prototype._compareTo=function(t){return Si(this._lat,t._lat)||Si(this._long,t._long)},Bl);function Bl(t,e){if(ni("GeoPoint",arguments,2),oi("GeoPoint","number",1,t),oi("GeoPoint","number",2,e),!isFinite(t)||t<-90||90<t)throw new zr(Wr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||180<e)throw new zr(Wr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}var Ul=(Kl.prototype.applyToLocalView=function(t,e){return new Ss(e,t)},Kl.prototype.applyToRemoteDocument=function(t,e){return e},Kl.prototype.computeBaseValue=function(t){return null},Kl.prototype.isEqual=function(t){return t instanceof Kl},Kl.instance=new Kl,Kl);function Kl(){}var Ql=(jl.prototype.applyToLocalView=function(t,e){return this.apply(t)},jl.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},jl.prototype.apply=function(t){for(var n=Yl(t),e=function(e){n.find(function(t){return t.isEqual(e)})||n.push(e)},r=0,i=this.elements;r<i.length;r++)e(i[r]);return new Fs(n)},jl.prototype.computeBaseValue=function(t){return null},jl.prototype.isEqual=function(t){return t instanceof jl&&Ei(t.elements,this.elements)},jl);function jl(t){this.elements=t}var Gl=(Wl.prototype.applyToLocalView=function(t,e){return this.apply(t)},Wl.prototype.applyToRemoteDocument=function(t,e){return this.apply(t)},Wl.prototype.apply=function(t){for(var n=Yl(t),e=function(e){n=n.filter(function(t){return!t.isEqual(e)})},r=0,i=this.elements;r<i.length;r++)e(i[r]);return new Fs(n)},Wl.prototype.computeBaseValue=function(t){return null},Wl.prototype.isEqual=function(t){return t instanceof Wl&&Ei(t.elements,this.elements)},Wl);function Wl(t){this.elements=t}var zl=(Hl.prototype.applyToLocalView=function(t,e){var n=this.computeBaseValue(t);if(n instanceof hs&&this.operand instanceof hs){var r=n.internalValue+this.operand.internalValue;return new hs(r)}return r=n.internalValue+this.operand.internalValue,new ps(r)},Hl.prototype.applyToRemoteDocument=function(t,e){return Ur(null!==e,"Didn't receive transformResult for NUMERIC_ADD transform"),e},Hl.prototype.computeBaseValue=function(t){return t instanceof as?t:new hs(0)},Hl.prototype.isEqual=function(t){return t instanceof Hl&&this.operand.isEqual(t.operand)},Hl);function Hl(t){this.operand=t}function Yl(t){return t instanceof Fs?t.internalValue.slice():[]}var Xl=(Jl.prototype.isEqual=function(t){return t&&t.count===this.count},Jl);function Jl(t){this.count=t}var Zl,$l,tf=((Zl={})[lh.ASCENDING.name]="ASCENDING",Zl[lh.DESCENDING.name]="DESCENDING",Zl),ef=(($l={})[Gc.LESS_THAN.name]="LESS_THAN",$l[Gc.LESS_THAN_OR_EQUAL.name]="LESS_THAN_OR_EQUAL",$l[Gc.GREATER_THAN.name]="GREATER_THAN",$l[Gc.GREATER_THAN_OR_EQUAL.name]="GREATER_THAN_OR_EQUAL",$l[Gc.EQUAL.name]="EQUAL",$l[Gc.ARRAY_CONTAINS.name]="ARRAY_CONTAINS",$l[Gc.IN.name]="IN",$l[Gc.ARRAY_CONTAINS_ANY.name]="ARRAY_CONTAINS_ANY",$l),nf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rf(t,e){Ur(!xc(t),e+" is missing")}function of(t){return"number"==typeof t?t:"string"==typeof t?Number(t):Br("can't parse "+t)}var af=(sf.prototype.emptyByteString=function(){return this.options.useProto3Json?"":new Uint8Array(0)},sf.prototype.unsafeCastProtoByteString=function(t){return t},sf.prototype.fromRpcStatus=function(t){var e=void 0===t.code?Wr.UNKNOWN:hl(t.code);return new zr(e,t.message||"")},sf.prototype.toInt32Value=function(t){return this.options.useProto3Json||xc(t)?t:{value:t}},sf.prototype.fromInt32Value=function(t){var e;return xc(e="object"==typeof t?t.value:t)?null:e},sf.prototype.toTimestamp=function(t){return this.options.useProto3Json?new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")+"."+("000000000"+t.nanoseconds).slice(-9)+"Z":{seconds:""+t.seconds,nanos:t.nanoseconds}},sf.prototype.fromTimestamp=function(t){if("string"==typeof t)return this.fromIso8601String(t);Ur(!!t,"Cannot deserialize null or undefined timestamp.");var e=of(t.seconds||"0"),n=t.nanos||0;return new co(e,n)},sf.prototype.fromIso8601String=function(t){var e=0,n=nf.exec(t);if(Ur(!!n,"invalid timestamp: "+t),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t),o=Math.floor(i.getTime()/1e3);return new co(o,e)},sf.prototype.toBytes=function(t){return this.options.useProto3Json?t.toBase64():this.unsafeCastProtoByteString(t.toUint8Array())},sf.prototype.fromBlob=function(t){return"string"==typeof t?(Ur(this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),Ni.fromBase64String(t)):(Ur(!this.options.useProto3Json,"Expected bytes to be passed in as Uint8Array, but got a string instead."),Ni.fromUint8Array(t))},sf.prototype.toVersion=function(t){return this.toTimestamp(t.toTimestamp())},sf.prototype.fromVersion=function(t){return Ur(!!t,"Trying to deserialize version that isn't set"),lo.fromTimestamp(this.fromTimestamp(t))},sf.prototype.toResourceName=function(t,e){return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()},sf.prototype.fromResourceName=function(t){var e=Bi.fromString(t);return Ur(this.isValidResourceName(e),"Tried to deserialize invalid key "+e.toString()),e},sf.prototype.toName=function(t){return this.toResourceName(this.databaseId,t.path)},sf.prototype.fromName=function(t){var e=this.fromResourceName(t);return Ur(e.get(1)===this.databaseId.projectId,"Tried to deserialize key from different project: "+e.get(1)+" vs "+this.databaseId.projectId),Ur(!e.get(3)&&!this.databaseId.database||e.get(3)===this.databaseId.database,"Tried to deserialize key from different database: "+e.get(3)+" vs "+this.databaseId.database),new Wi(this.extractLocalPathFromResourceName(e))},sf.prototype.toQueryPath=function(t){return this.toResourceName(this.databaseId,t)},sf.prototype.fromQueryPath=function(t){var e=this.fromResourceName(t);return 4===e.length?Bi.EMPTY_PATH:this.extractLocalPathFromResourceName(e)},Object.defineProperty(sf.prototype,"encodedDatabaseId",{get:function(){return new Bi(["projects",this.databaseId.projectId,"databases",this.databaseId.database]).canonicalString()},enumerable:!0,configurable:!0}),sf.prototype.fullyQualifiedPrefixPath=function(t){return new Bi(["projects",t.projectId,"databases",t.database])},sf.prototype.extractLocalPathFromResourceName=function(t){return Ur(4<t.length&&"documents"===t.get(4),"tried to deserialize invalid key "+t.toString()),t.popFirst(5)},sf.prototype.isValidResourceName=function(t){return 4<=t.length&&"projects"===t.get(0)&&"databases"===t.get(2)},sf.prototype.toValue=function(t){if(t instanceof ts)return{nullValue:"NULL_VALUE"};if(t instanceof rs)return{booleanValue:t.value()};if(t instanceof hs)return{integerValue:""+t.value()};if(t instanceof ps){var e=t.value();if(this.options.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:t.value()}}return t instanceof ys?{stringValue:t.value()}:t instanceof Os?{mapValue:this.toMapValue(t)}:t instanceof Fs?{arrayValue:this.toArrayValue(t)}:t instanceof bs?{timestampValue:this.toTimestamp(t.internalValue)}:t instanceof Ms?{geoPointValue:{latitude:t.value().latitude,longitude:t.value().longitude}}:t instanceof Cs?{bytesValue:this.toBytes(t.value())}:t instanceof As?{referenceValue:this.toResourceName(t.databaseId,t.key.path)}:Br("Unknown FieldValue "+JSON.stringify(t))},sf.prototype.fromValue=function(t){var e=this;if("nullValue"in t)return ts.INSTANCE;if("booleanValue"in t)return rs.of(t.booleanValue);if("integerValue"in t)return new hs(of(t.integerValue));if("doubleValue"in t){if(this.options.useProto3Json){if("NaN"===t.doubleValue)return ps.NAN;if("Infinity"===t.doubleValue)return ps.POSITIVE_INFINITY;if("-Infinity"===t.doubleValue)return ps.NEGATIVE_INFINITY}return new ps(t.doubleValue)}if("stringValue"in t)return new ys(t.stringValue);if("mapValue"in t)return this.fromFields(t.mapValue.fields||{});if("arrayValue"in t){rf(t.arrayValue,"arrayValue");var n=t.arrayValue.values||[];return new Fs(n.map(function(t){return e.fromValue(t)}))}if("timestampValue"in t)return rf(t.timestampValue,"timestampValue"),new bs(this.fromTimestamp(t.timestampValue));if("geoPointValue"in t){rf(t.geoPointValue,"geoPointValue");var r=t.geoPointValue.latitude||0,i=t.geoPointValue.longitude||0;return new Ms(new Vl(r,i))}if("bytesValue"in t){rf(t.bytesValue,"bytesValue");var o=this.fromBlob(t.bytesValue);return new Cs(o)}if("referenceValue"in t){rf(t.referenceValue,"referenceValue");var a=this.fromResourceName(t.referenceValue),s=new _i(a.get(1),a.get(3)),u=new Wi(this.extractLocalPathFromResourceName(a));return new As(s,u)}return Br("Unknown Value proto "+JSON.stringify(t))},sf.prototype.toMutationDocument=function(t,e){return{name:this.toName(t),fields:this.toFields(e)}},sf.prototype.toDocument=function(t){return Ur(!t.hasLocalMutations,"Can't serialize documents with mutations."),{name:this.toName(t.key),fields:this.toFields(t.data()),updateTime:this.toTimestamp(t.version.toTimestamp())}},sf.prototype.fromDocument=function(t,e){var n=this,r=this.fromName(t.name),i=this.fromVersion(t.updateTime);return new Ks(r,i,{hasCommittedMutations:!!e},void 0,t,function(t){return n.fromValue(t)})},sf.prototype.toFields=function(t){var n=this,r={};return t.forEach(function(t,e){r[t]=n.toValue(e)}),r},sf.prototype.fromFields=function(t){var n=this,e=t,r=Os.EMPTY;return $r(e,function(t,e){r=r.set(new ji([t]),n.fromValue(e))}),r},sf.prototype.toMapValue=function(t){return{fields:this.toFields(t)}},sf.prototype.toArrayValue=function(t){var e=this,n=[];return t.forEach(function(t){n.push(e.toValue(t))}),{values:n}},sf.prototype.fromFound=function(t){var e=this;Ur(!!t.found,"Tried to deserialize a found document from a missing document."),rf(t.found.name,"doc.found.name"),rf(t.found.updateTime,"doc.found.updateTime");var n=this.fromName(t.found.name),r=this.fromVersion(t.found.updateTime);return new Ks(n,r,{},void 0,t.found,function(t){return e.fromValue(t)})},sf.prototype.fromMissing=function(t){Ur(!!t.missing,"Tried to deserialize a missing document from a found document."),Ur(!!t.readTime,"Tried to deserialize a missing document without a read time.");var e=this.fromName(t.missing),n=this.fromVersion(t.readTime);return new Gs(e,n)},sf.prototype.fromMaybeDocument=function(t){return"found"in t?this.fromFound(t):"missing"in t?this.fromMissing(t):Br("invalid batch get response: "+JSON.stringify(t))},sf.prototype.toWatchTargetChangeState=function(t){switch(t){case Cl.Added:return"ADD";case Cl.Current:return"CURRENT";case Cl.NoChange:return"NO_CHANGE";case Cl.Removed:return"REMOVE";case Cl.Reset:return"RESET";default:return Br("Unknown WatchTargetChangeState: "+t)}},sf.prototype.toTestWatchChange=function(t){if(t instanceof Al)return{filter:{count:t.existenceFilter.count,targetId:t.targetId}};if(t instanceof Nl){if(t.newDoc instanceof Ks){var e=t.newDoc;return{documentChange:{document:{name:this.toName(e.key),fields:this.toFields(e.data()),updateTime:this.toVersion(e.version)},targetIds:t.updatedTargetIds,removedTargetIds:t.removedTargetIds}}}if(t.newDoc instanceof Gs)return e=t.newDoc,{documentDelete:{document:this.toName(e.key),readTime:this.toVersion(e.version),removedTargetIds:t.removedTargetIds}};if(null===t.newDoc)return{documentRemove:{document:this.toName(t.key),removedTargetIds:t.removedTargetIds}}}if(t instanceof kl){var n=void 0;return t.cause&&(n={code:function(t){if(void 0===t)return ol.OK;switch(t){case Wr.OK:return ol.OK;case Wr.CANCELLED:return ol.CANCELLED;case Wr.UNKNOWN:return ol.UNKNOWN;case Wr.DEADLINE_EXCEEDED:return ol.DEADLINE_EXCEEDED;case Wr.RESOURCE_EXHAUSTED:return ol.RESOURCE_EXHAUSTED;case Wr.INTERNAL:return ol.INTERNAL;case Wr.UNAVAILABLE:return ol.UNAVAILABLE;case Wr.UNAUTHENTICATED:return ol.UNAUTHENTICATED;case Wr.INVALID_ARGUMENT:return ol.INVALID_ARGUMENT;case Wr.NOT_FOUND:return ol.NOT_FOUND;case Wr.ALREADY_EXISTS:return ol.ALREADY_EXISTS;case Wr.PERMISSION_DENIED:return ol.PERMISSION_DENIED;case Wr.FAILED_PRECONDITION:return ol.FAILED_PRECONDITION;case Wr.ABORTED:return ol.ABORTED;case Wr.OUT_OF_RANGE:return ol.OUT_OF_RANGE;case Wr.UNIMPLEMENTED:return ol.UNIMPLEMENTED;case Wr.DATA_LOSS:return ol.DATA_LOSS;default:return Br("Unknown status code: "+t)}}(t.cause.code),message:t.cause.message}),{targetChange:{targetChangeType:this.toWatchTargetChangeState(t.state),targetIds:t.targetIds,resumeToken:this.unsafeCastProtoByteString(t.resumeToken),cause:n}}}return Br("Unrecognized watch change: "+JSON.stringify(t))},sf.prototype.fromWatchChange=function(t){var e,n=this;if("targetChange"in t){rf(t.targetChange,"targetChange");var r=this.fromWatchTargetChangeState(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=t.targetChange.resumeToken||this.emptyByteString(),a=t.targetChange.cause,s=a&&this.fromRpcStatus(a);e=new kl(r,i,o,s||null)}else if("documentChange"in t){rf(t.documentChange,"documentChange");var u=t.documentChange;rf(u.document,"documentChange.name"),rf(u.document.name,"documentChange.document.name"),rf(u.document.updateTime,"documentChange.document.updateTime");var c=this.fromName(u.document.name),h=this.fromVersion(u.document.updateTime),l=new Ks(c,h,{},void 0,u.document,function(t){return n.fromValue(t)}),f=u.targetIds||[],p=u.removedTargetIds||[];e=new Nl(f,p,l.key,l)}else if("documentDelete"in t){rf(t.documentDelete,"documentDelete");var d=t.documentDelete;rf(d.document,"documentDelete.document"),c=this.fromName(d.document),h=d.readTime?this.fromVersion(d.readTime):lo.forDeletedDoc(),l=new Gs(c,h),p=d.removedTargetIds||[],e=new Nl([],p,l.key,l)}else if("documentRemove"in t){rf(t.documentRemove,"documentRemove");var m=t.documentRemove;rf(m.document,"documentRemove"),c=this.fromName(m.document),p=m.removedTargetIds||[],e=new Nl([],p,c,null)}else{if(!("filter"in t))return Br("Unknown change type "+JSON.stringify(t));rf(t.filter,"filter");var y=t.filter;rf(y.targetId,"filter.targetId");var g=y.count||0,v=new Xl(g),b=y.targetId;e=new Al(b,v)}return e},sf.prototype.fromWatchTargetChangeState=function(t){return"NO_CHANGE"===t?Cl.NoChange:"ADD"===t?Cl.Added:"REMOVE"===t?Cl.Removed:"CURRENT"===t?Cl.Current:"RESET"===t?Cl.Reset:Br("Got unexpected TargetChange.state: "+t)},sf.prototype.versionFromListenResponse=function(t){if(!("targetChange"in t))return lo.MIN;var e=t.targetChange;return e.targetIds&&e.targetIds.length?lo.MIN:e.readTime?this.fromVersion(e.readTime):lo.MIN},sf.prototype.toMutation=function(t){var e,n=this;if(t instanceof Ma)e={update:this.toMutationDocument(t.key,t.value)};else if(t instanceof Ba)e={delete:this.toName(t.key)};else if(t instanceof Oa)e={update:this.toMutationDocument(t.key,t.data),updateMask:this.toDocumentMask(t.fieldMask)};else if(t instanceof Fa)e={transform:{document:this.toName(t.key),fieldTransforms:t.fieldTransforms.map(function(t){return n.toFieldTransform(t)})}};else{if(!(t instanceof za))return Br("Unknown mutation type "+t.type);e={verify:this.toName(t.key)}}return t.precondition.isNone||(e.currentDocument=this.toPrecondition(t.precondition)),e},sf.prototype.fromMutation=function(t){var e=this,n=t.currentDocument?this.fromPrecondition(t.currentDocument):Da.NONE;if(t.update){rf(t.update.name,"name");var r=this.fromName(t.update.name),i=this.fromFields(t.update.fields||{});if(t.updateMask){var o=this.fromDocumentMask(t.updateMask);return new Oa(r,i,o,n)}return new Ma(r,i,n)}if(t.delete)return r=this.fromName(t.delete),new Ba(r,n);if(t.transform){r=this.fromName(t.transform.document);var a=t.transform.fieldTransforms.map(function(t){return e.fromFieldTransform(t)});return Ur(!0===n.exists,'Transforms only support precondition "exists == true"'),new Fa(r,a)}return t.verify?(r=this.fromName(t.verify),new za(r,n)):Br("unknown mutation proto: "+JSON.stringify(t))},sf.prototype.toPrecondition=function(t){return Ur(!t.isNone,"Can't serialize an empty precondition"),void 0!==t.updateTime?{updateTime:this.toVersion(t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Br("Unknown precondition")},sf.prototype.fromPrecondition=function(t){return void 0!==t.updateTime?Da.updateTime(this.fromVersion(t.updateTime)):void 0!==t.exists?Da.exists(t.exists):Da.NONE},sf.prototype.fromWriteResult=function(t,e){var n=this,r=t.updateTime?this.fromVersion(t.updateTime):this.fromVersion(e);r.isEqual(lo.MIN)&&(r=this.fromVersion(e));var i=null;return t.transformResults&&0<t.transformResults.length&&(i=t.transformResults.map(function(t){return n.fromValue(t)})),new Ca(r,i)},sf.prototype.fromWriteResults=function(t,e){var n=this;return t&&0<t.length?(Ur(void 0!==e,"Received a write result without a commit time"),t.map(function(t){return n.fromWriteResult(t,e)})):[]},sf.prototype.toFieldTransform=function(t){var e=this,n=t.transform;if(n instanceof Ul)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ql)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements.map(function(t){return e.toValue(t)})}};if(n instanceof Gl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements.map(function(t){return e.toValue(t)})}};if(n instanceof zl)return{fieldPath:t.field.canonicalString(),increment:this.toValue(n.operand)};throw Br("Unknown transform: "+t.transform)},sf.prototype.fromFieldTransform=function(t){var e=this,n=null;if("setToServerValue"in t)Ur("REQUEST_TIME"===t.setToServerValue,"Unknown server value transform proto: "+JSON.stringify(t)),n=Ul.instance;else if("appendMissingElements"in t){var r=t.appendMissingElements.values||[];n=new Ql(r.map(function(t){return e.fromValue(t)}))}else if("removeAllFromArray"in t)r=t.removeAllFromArray.values||[],n=new Gl(r.map(function(t){return e.fromValue(t)}));else if("increment"in t){var i=this.fromValue(t.increment);Ur(i instanceof as,"NUMERIC_ADD transform requires a NumberValue"),n=new zl(i)}else Br("Unknown transform proto: "+JSON.stringify(t));var o=ji.fromServerFormat(t.fieldPath);return new Ta(o,n)},sf.prototype.toDocumentsTarget=function(t){return{documents:[this.toQueryPath(t.path)]}},sf.prototype.fromDocumentsTarget=function(t){var e=t.documents.length;Ur(1===e,"DocumentsTarget contained other than 1 document: "+e);var n=t.documents[0];return Kc.atPath(this.fromQueryPath(n)).toTarget()},sf.prototype.toQueryTarget=function(t){var e={structuredQuery:{}},n=t.path;null!==t.collectionGroup?(Ur(n.length%2==0,"Collection Group queries should be within a document path or root."),e.parent=this.toQueryPath(n),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(Ur(n.length%2!=0,"Document queries with filters are not supported."),e.parent=this.toQueryPath(n.popLast()),e.structuredQuery.from=[{collectionId:n.lastSegment()}]);var r=this.toFilter(t.filters);r&&(e.structuredQuery.where=r);var i=this.toOrder(t.orderBy);i&&(e.structuredQuery.orderBy=i);var o=this.toInt32Value(t.limit);return null!==o&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=this.toCursor(t.startAt)),t.endAt&&(e.structuredQuery.endAt=this.toCursor(t.endAt)),e},sf.prototype.fromQueryTarget=function(t){var e=this.fromQueryPath(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null;if(0<r){Ur(1===r,"StructuredQuery.from with more than one collection is not supported.");var o=n.from[0];o.allDescendants?i=o.collectionId:e=e.child(o.collectionId)}var a=[];n.where&&(a=this.fromFilter(n.where));var s=[];n.orderBy&&(s=this.fromOrder(n.orderBy));var u=null;n.limit&&(u=this.fromInt32Value(n.limit));var c=null;n.startAt&&(c=this.fromCursor(n.startAt));var h=null;return n.endAt&&(h=this.fromCursor(n.endAt)),new Kc(e,i,s,a,u,qc.First,c,h).toTarget()},sf.prototype.toListenRequestLabels=function(t){var e=this.toLabel(t.purpose);return null==e?null:{"goog-listen-tags":e}},sf.prototype.toLabel=function(t){switch(t){case Uu.Listen:return null;case Uu.ExistenceFilterMismatch:return"existence-filter-mismatch";case Uu.LimboResolution:return"limbo-document";default:return Br("Unrecognized query purpose: "+t)}},sf.prototype.toTarget=function(t){var e,n=t.target;return(e=n.isDocumentQuery()?{documents:this.toDocumentsTarget(n)}:{query:this.toQueryTarget(n)}).targetId=t.targetId,0<t.resumeToken.length&&(e.resumeToken=this.unsafeCastProtoByteString(t.resumeToken)),e},sf.prototype.toFilter=function(t){var e=this;if(0!==t.length){var n=t.map(function(t){return t instanceof Hc?e.toUnaryOrFieldFilter(t):Br("Unrecognized filter: "+JSON.stringify(t))});return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}},sf.prototype.fromFilter=function(t){var e=this;return t?void 0!==t.unaryFilter?[this.fromUnaryFilter(t)]:void 0!==t.fieldFilter?[this.fromFieldFilter(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(function(t){return e.fromFilter(t)}).reduce(function(t,e){return t.concat(e)}):Br("Unknown filter: "+JSON.stringify(t)):[]},sf.prototype.toOrder=function(t){var e=this;if(0!==t.length)return t.map(function(t){return e.toPropertyOrder(t)})},sf.prototype.fromOrder=function(t){var e=this;return t.map(function(t){return e.fromPropertyOrder(t)})},sf.prototype.toCursor=function(t){var e=this;return{before:t.before,values:t.position.map(function(t){return e.toValue(t)})}},sf.prototype.fromCursor=function(t){var e=this,n=!!t.before,r=t.values.map(function(t){return e.fromValue(t)});return new ph(r,n)},sf.prototype.toDirection=function(t){return tf[t.name]},sf.prototype.fromDirection=function(t){switch(t){case"ASCENDING":return lh.ASCENDING;case"DESCENDING":return lh.DESCENDING;default:return}},sf.prototype.toOperatorName=function(t){return ef[t.name]},sf.prototype.fromOperatorName=function(t){switch(t){case"EQUAL":return Gc.EQUAL;case"GREATER_THAN":return Gc.GREATER_THAN;case"GREATER_THAN_OR_EQUAL":return Gc.GREATER_THAN_OR_EQUAL;case"LESS_THAN":return Gc.LESS_THAN;case"LESS_THAN_OR_EQUAL":return Gc.LESS_THAN_OR_EQUAL;case"ARRAY_CONTAINS":return Gc.ARRAY_CONTAINS;case"IN":return Gc.IN;case"ARRAY_CONTAINS_ANY":return Gc.ARRAY_CONTAINS_ANY;case"OPERATOR_UNSPECIFIED":return Br("Unspecified operator");default:return Br("Unknown operator")}},sf.prototype.toFieldPathReference=function(t){return{fieldPath:t.canonicalString()}},sf.prototype.fromFieldPathReference=function(t){return ji.fromServerFormat(t.fieldPath)},sf.prototype.toPropertyOrder=function(t){return{field:this.toFieldPathReference(t.field),direction:this.toDirection(t.dir)}},sf.prototype.fromPropertyOrder=function(t){return new mh(this.fromFieldPathReference(t.field),this.fromDirection(t.direction))},sf.prototype.fromFieldFilter=function(t){return Hc.create(this.fromFieldPathReference(t.fieldFilter.field),this.fromOperatorName(t.fieldFilter.op),this.fromValue(t.fieldFilter.value))},sf.prototype.toUnaryOrFieldFilter=function(t){if(t.op===Gc.EQUAL){if(t.value.isEqual(ps.NAN))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NAN"}};if(t.value.isEqual(ts.INSTANCE))return{unaryFilter:{field:this.toFieldPathReference(t.field),op:"IS_NULL"}}}return{fieldFilter:{field:this.toFieldPathReference(t.field),op:this.toOperatorName(t.op),value:this.toValue(t.value)}}},sf.prototype.fromUnaryFilter=function(t){switch(t.unaryFilter.op){case"IS_NAN":var e=this.fromFieldPathReference(t.unaryFilter.field);return Hc.create(e,Gc.EQUAL,ps.NAN);case"IS_NULL":var n=this.fromFieldPathReference(t.unaryFilter.field);return Hc.create(n,Gc.EQUAL,ts.INSTANCE);case"OPERATOR_UNSPECIFIED":return Br("Unspecified filter");default:return Br("Unknown filter")}},sf.prototype.toDocumentMask=function(t){var e=[];return t.fields.forEach(function(t){return e.push(t.canonicalString())}),{fieldPaths:e}},sf.prototype.fromDocumentMask=function(t){var e=(t.fieldPaths||[]).map(function(t){return ji.fromServerFormat(t)});return ba.fromArray(e)},sf);function sf(t,e){this.databaseId=t,this.options=e}var uf=function(){this.viewSnap=null,this.targetId=0,this.listeners=[]},cf=(hf.prototype.listen=function(t){var e=t.query,n=!1,r=this.queries.get(e);return r||(n=!0,r=new uf,this.queries.set(e,r)),r.listeners.push(t),Ur(!t.applyOnlineStateChange(this.onlineState),"applyOnlineStateChange() shouldn't raise an event for brand-new listeners."),!r.viewSnap||t.onViewSnapshot(r.viewSnap)&&this.raiseSnapshotsInSyncEvent(),n?this.syncEngine.listen(e).then(function(t){return r.targetId=t}):Promise.resolve(r.targetId)},hf.prototype.unlisten=function(o){return p(this,void 0,void 0,function(){var e,n,r,i;return m(this,function(t){return e=o.query,n=!1,(r=this.queries.get(e))&&0<=(i=r.listeners.indexOf(o))&&(r.listeners.splice(i,1),n=0===r.listeners.length),n?(this.queries.delete(e),[2,this.syncEngine.unlisten(e)]):[2]})})},hf.prototype.onWatchChange=function(t){for(var e=!1,n=0,r=t;n<r.length;n++){var i=r[n],o=i.query,a=this.queries.get(o);if(a){for(var s=0,u=a.listeners;s<u.length;s++)u[s].onViewSnapshot(i)&&(e=!0);a.viewSnap=i}}e&&this.raiseSnapshotsInSyncEvent()},hf.prototype.onWatchError=function(t,e){var n=this.queries.get(t);if(n)for(var r=0,i=n.listeners;r<i.length;r++)i[r].onError(e);this.queries.delete(t)},hf.prototype.onOnlineStateChange=function(i){this.onlineState=i;var o=!1;this.queries.forEach(function(t,e){for(var n=0,r=e.listeners;n<r.length;n++)r[n].applyOnlineStateChange(i)&&(o=!0)}),o&&this.raiseSnapshotsInSyncEvent()},hf.prototype.addSnapshotsInSyncListener=function(t){this.snapshotsInSyncListeners.add(t),t.next()},hf.prototype.removeSnapshotsInSyncListener=function(t){this.snapshotsInSyncListeners.delete(t)},hf.prototype.raiseSnapshotsInSyncEvent=function(){this.snapshotsInSyncListeners.forEach(function(t){t.next()})},hf);function hf(t){this.syncEngine=t,this.queries=new Xs(function(t){return t.canonicalId()}),this.onlineState=$h.Unknown,this.snapshotsInSyncListeners=new Set,this.syncEngine.subscribe(this)}var lf=(ff.prototype.onViewSnapshot=function(t){if(Ur(0<t.docChanges.length||t.syncStateChanged,"We got a new snapshot with no changes?"),!this.options.includeMetadataChanges){for(var e=[],n=0,r=t.docChanges;n<r.length;n++){var i=r[n];i.type!==ll.Metadata&&e.push(i)}t=new bl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}var o=!1;return this.raisedInitialEvent?this.shouldRaiseEvent(t)&&(this.queryObserver.next(t),o=!0):this.shouldRaiseInitialEvent(t,this.onlineState)&&(this.raiseInitialEvent(t),o=!0),this.snap=t,o},ff.prototype.onError=function(t){this.queryObserver.error(t)},ff.prototype.applyOnlineStateChange=function(t){this.onlineState=t;var e=!1;return this.snap&&!this.raisedInitialEvent&&this.shouldRaiseInitialEvent(this.snap,t)&&(this.raiseInitialEvent(this.snap),e=!0),e},ff.prototype.shouldRaiseInitialEvent=function(t,e){if(Ur(!this.raisedInitialEvent,"Determining whether to raise first event but already had first event"),!t.fromCache)return!0;var n=e!==$h.Offline;return this.options.waitForSyncWhenOnline&&n?(Ur(t.fromCache,"Waiting for sync, but snapshot is not from cache"),!1):!t.docs.isEmpty()||e===$h.Offline},ff.prototype.shouldRaiseEvent=function(t){if(0<t.docChanges.length)return!0;var e=this.snap&&this.snap.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges},ff.prototype.raiseInitialEvent=function(t){Ur(!this.raisedInitialEvent,"Trying to raise initial events for second time"),t=bl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.raisedInitialEvent=!0,this.queryObserver.next(t)},ff);function ff(t,e,n){this.query=t,this.queryObserver=e,this.raisedInitialEvent=!1,this.snap=null,this.onlineState=$h.Unknown,this.options=n||{}}var pf=(df.fromSnapshot=function(t,e){for(var n=Oo(),r=Oo(),i=0,o=e.docChanges;i<o.length;i++){var a=o[i];switch(a.type){case ll.Added:n=n.add(a.doc.key);break;case ll.Removed:r=r.add(a.doc.key)}}return new df(t,e.fromCache,n,r)},df);function df(t,e,n,r){this.targetId=t,this.fromCache=e,this.addedKeys=n,this.removedKeys=r}var mf=function(t){this.key=t},yf=function(t){this.key=t},gf=(Object.defineProperty(vf.prototype,"syncedDocuments",{get:function(){return this._syncedDocuments},enumerable:!0,configurable:!0}),vf.prototype.computeDocChanges=function(t,e){var s=this,u=e?e.changeSet:new gl,c=e?e.documentSet:this.documentSet,h=e?e.mutatedKeys:this.mutatedKeys,l=c,f=!1,p=this.query.hasLimitToFirst()&&c.size===this.query.limit?c.last():null,d=this.query.hasLimitToLast()&&c.size===this.query.limit?c.first():null;if(t.inorderTraversal(function(t,e){var n=c.get(t),r=e instanceof Ks?e:null;r&&(Ur(t.isEqual(r.key),"Mismatching keys found in document changes: "+t+" != "+r.key),r=s.query.matches(r)?r:null);var i=!!n&&s.mutatedKeys.has(n.key),o=!!r&&(r.hasLocalMutations||s.mutatedKeys.has(r.key)&&r.hasCommittedMutations),a=!1;n&&r?n.data().isEqual(r.data())?i!==o&&(u.track({type:ll.Metadata,doc:r}),a=!0):s.shouldWaitForSyncedDocument(n,r)||(u.track({type:ll.Modified,doc:r}),a=!0,(p&&0<s.query.docComparator(r,p)||d&&s.query.docComparator(r,d)<0)&&(f=!0)):!n&&r?(u.track({type:ll.Added,doc:r}),a=!0):n&&!r&&(u.track({type:ll.Removed,doc:n}),a=!0,(p||d)&&(f=!0)),a&&(h=r?(l=l.add(r),o?h.add(t):h.delete(t)):(l=l.delete(t),h.delete(t)))}),this.query.hasLimitToFirst()||this.query.hasLimitToLast())for(;l.size>this.query.limit;){var n=this.query.hasLimitToFirst()?l.last():l.first();l=l.delete(n.key),h=h.delete(n.key),u.track({type:ll.Removed,doc:n})}return Ur(!f||!e,"View was refilled using docs that themselves needed refilling."),{documentSet:l,changeSet:u,needsRefill:f,mutatedKeys:h}},vf.prototype.shouldWaitForSyncedDocument=function(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations},vf.prototype.applyChanges=function(t,e,n){var r=this;Ur(!t.needsRefill,"Cannot apply changes that need a refill");var i=this.documentSet;this.documentSet=t.documentSet,this.mutatedKeys=t.mutatedKeys;var o=t.changeSet.getChanges();o.sort(function(t,e){return function(t,e){function n(t){switch(t){case ll.Added:return 1;case ll.Modified:case ll.Metadata:return 2;case ll.Removed:return 0;default:return Br("Unknown ChangeType: "+t)}}return n(t)-n(e)}(t.type,e.type)||r.query.docComparator(t.doc,e.doc)}),this.applyTargetChange(n);var a=e?this.updateLimboDocuments():[],s=0===this.limboDocuments.size&&this.current?pl.Synced:pl.Local,u=s!==this.syncState;return this.syncState=s,0!==o.length||u?{snapshot:new bl(this.query,t.documentSet,i,o,t.mutatedKeys,s===pl.Local,u,!1),limboChanges:a}:{limboChanges:a}},vf.prototype.applyOnlineStateChange=function(t){return this.current&&t===$h.Offline?(this.current=!1,this.applyChanges({documentSet:this.documentSet,changeSet:new gl,mutatedKeys:this.mutatedKeys,needsRefill:!1},!1)):{limboChanges:[]}},vf.prototype.shouldBeInLimbo=function(t){return!this._syncedDocuments.has(t)&&!!this.documentSet.has(t)&&!this.documentSet.get(t).hasLocalMutations},vf.prototype.applyTargetChange=function(t){var e=this;t&&(t.addedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.add(t)}),t.modifiedDocuments.forEach(function(t){return Ur(e._syncedDocuments.has(t),"Modified document "+t+" not found in view.")}),t.removedDocuments.forEach(function(t){return e._syncedDocuments=e._syncedDocuments.delete(t)}),this.current=t.current)},vf.prototype.updateLimboDocuments=function(){var e=this;if(!this.current)return[];var n=this.limboDocuments;this.limboDocuments=Oo(),this.documentSet.forEach(function(t){e.shouldBeInLimbo(t.key)&&(e.limboDocuments=e.limboDocuments.add(t.key))});var r=[];return n.forEach(function(t){e.limboDocuments.has(t)||r.push(new yf(t))}),this.limboDocuments.forEach(function(t){n.has(t)||r.push(new mf(t))}),r},vf.prototype.synchronizeWithPersistedState=function(t){this._syncedDocuments=t.remoteKeys,this.limboDocuments=Oo();var e=this.computeDocChanges(t.documents);return this.applyChanges(e,!0)},vf.prototype.computeInitialSnapshot=function(){return bl.fromInitialDocuments(this.query,this.documentSet,this.mutatedKeys,this.syncState===pl.Local)},vf);function vf(t,e){this.query=t,this._syncedDocuments=e,this.syncState=null,this.current=!1,this.limboDocuments=Oo(),this.mutatedKeys=Oo(),this.documentSet=new ml(t.docComparator.bind(t))}var bf=(wf.prototype.run=function(){this.runWithBackOff()},wf.prototype.runWithBackOff=function(){var t=this;this.backoff.backoffAndRun(function(){return p(t,void 0,void 0,function(){var e,n,r=this;return m(this,function(t){return e=this.remoteStore.createTransaction(),(n=this.tryRunUpdateFunction(e))&&n.then(function(t){r.asyncQueue.enqueueAndForget(function(){return e.commit().then(function(){r.deferred.resolve(t)}).catch(function(t){r.handleTransactionError(t)})})}).catch(function(t){r.handleTransactionError(t)}),[2]})})})},wf.prototype.tryRunUpdateFunction=function(t){try{var e=this.updateFunction(t);return!xc(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}},wf.prototype.handleTransactionError=function(t){var e=this;0<this.retries&&this.isRetryableTransactionError(t)?(this.retries-=1,this.asyncQueue.enqueueAndForget(function(){return e.runWithBackOff(),Promise.resolve()})):this.deferred.reject(t)},wf.prototype.isRetryableTransactionError=function(t){if("FirebaseError"!==t.name)return!1;var e=t.code;return"aborted"===e||"failed-precondition"===e||!cl(e)},wf);function wf(t,e,n,r){this.asyncQueue=t,this.remoteStore=e,this.updateFunction=n,this.deferred=r,this.retries=5,this.backoff=new qh(this.asyncQueue,Hi.RetryTransaction)}var Tf="SyncEngine",Sf=function(t,e,n){this.query=t,this.targetId=e,this.view=n},Ef=function(t){this.key=t,this.receivedDocument=!1},If=(Object.defineProperty(Cf.prototype,"isPrimaryClient",{get:function(){return!0===this.isPrimary},enumerable:!0,configurable:!0}),Cf.prototype.subscribe=function(t){Ur(null!==t,"SyncEngine listener cannot be null"),Ur(null===this.syncEngineListener,"SyncEngine already has a subscriber."),this.syncEngineListener=t},Cf.prototype.listen=function(a){return p(this,void 0,void 0,function(){var e,n,r,i,o;return m(this,function(t){switch(t.label){case 0:return this.assertSubscribed("listen()"),(r=this.queryViewsByQuery.get(a))?(e=r.targetId,this.sharedClientState.addLocalQueryTarget(e),n=r.view.computeInitialSnapshot(),[3,4]):[3,1];case 1:return[4,this.localStore.allocateTarget(a.toTarget())];case 2:return i=t.sent(),o=this.sharedClientState.addLocalQueryTarget(i.targetId),e=i.targetId,[4,this.initializeViewAndComputeSnapshot(a,e,"current"===o)];case 3:n=t.sent(),this.isPrimary&&this.remoteStore.listen(i),t.label=4;case 4:return this.syncEngineListener.onWatchChange([n]),[2,e]}})})},Cf.prototype.initializeViewAndComputeSnapshot=function(s,u,c){return p(this,void 0,void 0,function(){var e,n,r,i,o,a;return m(this,function(t){switch(t.label){case 0:return[4,this.localStore.executeQuery(s,!0)];case 1:return e=t.sent(),n=new gf(s,e.remoteKeys),r=n.computeDocChanges(e.documents),i=El.createSynthesizedTargetChangeForCurrentChange(u,c&&this.onlineState!==$h.Offline),Ur(0===(o=n.applyChanges(r,!0===this.isPrimary,i)).limboChanges.length,"View returned limbo docs before target ack from the server."),Ur(!!o.snapshot,"applyChanges for new view should always return a snapshot"),a=new Sf(s,u,n),this.queryViewsByQuery.set(s,a),this.queriesByTarget[u]||(this.queriesByTarget[u]=[]),this.queriesByTarget[u].push(s),[2,o.snapshot]}})})},Cf.prototype.synchronizeViewAndComputeSnapshot=function(r){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:return[4,this.localStore.executeQuery(r.query,!0)];case 1:return e=t.sent(),n=r.view.synchronizeWithPersistedState(e),this.isPrimary&&this.updateTrackedLimbos(r.targetId,n.limboChanges),[2,n]}})})},Cf.prototype.unlisten=function(i){return p(this,void 0,void 0,function(){var e,n,r=this;return m(this,function(t){switch(t.label){case 0:return this.assertSubscribed("unlisten()"),Ur(!!(e=this.queryViewsByQuery.get(i)),"Trying to unlisten on query not found:"+i),1<(n=this.queriesByTarget[e.targetId]).length?(this.queriesByTarget[e.targetId]=n.filter(function(t){return!t.isEqual(i)}),this.queryViewsByQuery.delete(i),[2]):this.isPrimary?(this.sharedClientState.removeLocalQueryTarget(e.targetId),this.sharedClientState.isActiveQueryTarget(e.targetId)?[3,2]:[4,this.localStore.releaseTarget(e.targetId,!1).then(function(){r.sharedClientState.clearQueryState(e.targetId),r.remoteStore.unlisten(e.targetId),r.removeAndCleanupTarget(e.targetId)}).catch(cc)]):[3,3];case 1:t.sent(),t.label=2;case 2:return[3,5];case 3:return this.removeAndCleanupTarget(e.targetId),[4,this.localStore.releaseTarget(e.targetId,!0)];case 4:t.sent(),t.label=5;case 5:return[2]}})})},Cf.prototype.write=function(n,r){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return this.assertSubscribed("write()"),[4,this.localStore.localWrite(n)];case 1:return e=t.sent(),this.sharedClientState.addPendingMutation(e.batchId),this.addMutationCallback(e.batchId,r),[4,this.emitNewSnapsAndNotifyLocalStore(e.changes)];case 2:return t.sent(),[4,this.remoteStore.fillWritePipeline()];case 3:return t.sent(),[2]}})})},Cf.prototype.runTransaction=function(t,e,n){new bf(t,this.remoteStore,e,n).run()},Cf.prototype.applyRemoteEvent=function(n){return p(this,void 0,void 0,function(){var e,r=this;return m(this,function(t){switch(t.label){case 0:this.assertSubscribed("applyRemoteEvent()"),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this.localStore.applyRemoteEvent(n)];case 2:return e=t.sent(),$r(n.targetChanges,function(t,e){var n=r.limboResolutionsByTarget[Number(t)];n&&(Ur(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,"Limbo resolution for single document contains multiple changes."),0<e.addedDocuments.size?n.receivedDocument=!0:0<e.modifiedDocuments.size?Ur(n.receivedDocument,"Received change for limbo target document without add."):0<e.removedDocuments.size&&(Ur(n.receivedDocument,"Received remove for limbo target document without add."),n.receivedDocument=!1))}),[4,this.emitNewSnapsAndNotifyLocalStore(e,n)];case 3:return t.sent(),[3,6];case 4:return[4,cc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}})})},Cf.prototype.applyOnlineStateChange=function(r,t){if(this.isPrimary&&t===el.RemoteStore||!this.isPrimary&&t===el.SharedClientState){this.assertSubscribed("applyOnlineStateChange()");var i=[];this.queryViewsByQuery.forEach(function(t,e){var n=e.view.applyOnlineStateChange(r);Ur(0===n.limboChanges.length,"OnlineState should not affect limbo documents."),n.snapshot&&i.push(n.snapshot)}),this.syncEngineListener.onOnlineStateChange(r),this.syncEngineListener.onWatchChange(i),this.onlineState=r,this.isPrimary&&this.sharedClientState.setOnlineState(r)}},Cf.prototype.rejectListen=function(s,u){return p(this,void 0,void 0,function(){var e,n,r,i,o,a=this;return m(this,function(t){switch(t.label){case 0:return this.assertSubscribed("rejectListens()"),this.sharedClientState.updateQueryState(s,"rejected",u),e=this.limboResolutionsByTarget[s],(n=e&&e.key)?(this.limboTargetsByKey=this.limboTargetsByKey.remove(n),delete this.limboResolutionsByTarget[s],r=(r=new po(Wi.comparator)).insert(n,new Gs(n,lo.forDeletedDoc())),i=Oo().add(n),o=new Tl(lo.MIN,{},new So(Si),r,i),[2,this.applyRemoteEvent(o)]):[3,1];case 1:return[4,this.localStore.releaseTarget(s,!1).then(function(){return a.removeAndCleanupTarget(s,u)}).catch(cc)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},Cf.prototype.applyBatchState=function(n,r,i){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return this.assertSubscribed("applyBatchState()"),[4,this.localStore.lookupMutationDocuments(n)];case 1:return null===(e=t.sent())?(Fr(Tf,"Cannot apply mutation batch with id: "+n),[2]):"pending"!==r?[3,3]:[4,this.remoteStore.fillWritePipeline()];case 2:return t.sent(),[3,4];case 3:"acknowledged"===r||"rejected"===r?(this.processUserCallback(n,i||null),this.localStore.removeCachedMutationBatchMetadata(n)):Br("Unknown batchState: "+r),t.label=4;case 4:return[4,this.emitNewSnapsAndNotifyLocalStore(e)];case 5:return t.sent(),[2]}})})},Cf.prototype.applySuccessfulWrite=function(r){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:this.assertSubscribed("applySuccessfulWrite()"),e=r.batch.batchId,this.processUserCallback(e,null),this.triggerPendingWritesCallbacks(e),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this.localStore.acknowledgeBatch(r)];case 2:return n=t.sent(),this.sharedClientState.updateMutationState(e,"acknowledged"),[4,this.emitNewSnapsAndNotifyLocalStore(n)];case 3:return t.sent(),[3,6];case 4:return[4,cc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}})})},Cf.prototype.rejectFailedWrite=function(n,r){return p(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:this.assertSubscribed("rejectFailedWrite()"),this.processUserCallback(n,r),this.triggerPendingWritesCallbacks(n),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this.localStore.rejectBatch(n)];case 2:return e=t.sent(),this.sharedClientState.updateMutationState(n,"rejected",r),[4,this.emitNewSnapsAndNotifyLocalStore(e)];case 3:return t.sent(),[3,6];case 4:return[4,cc(t.sent())];case 5:return t.sent(),[3,6];case 6:return[2]}})})},Cf.prototype.registerPendingWritesCallback=function(r){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:return this.remoteStore.canUseNetwork()||Fr(Tf,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),[4,this.localStore.getHighestUnacknowledgedBatchId()];case 1:return-1===(e=t.sent())?r.resolve():((n=this.pendingWritesCallbacks.get(e)||[]).push(r),this.pendingWritesCallbacks.set(e,n)),[2]}})})},Cf.prototype.triggerPendingWritesCallbacks=function(t){(this.pendingWritesCallbacks.get(t)||[]).forEach(function(t){t.resolve()}),this.pendingWritesCallbacks.delete(t)},Cf.prototype.rejectOutstandingPendingWritesCallbacks=function(e){this.pendingWritesCallbacks.forEach(function(t){t.forEach(function(t){t.reject(new zr(Wr.CANCELLED,e))})}),this.pendingWritesCallbacks.clear()},Cf.prototype.addMutationCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()];n=(n=n||new po(Si)).insert(t,e),this.mutationUserCallbacks[this.currentUser.toKey()]=n},Cf.prototype.processUserCallback=function(t,e){var n=this.mutationUserCallbacks[this.currentUser.toKey()];if(n){var r=n.get(t);r&&(Ur(t===n.minKey(),"Mutation callbacks processed out-of-order?"),e?r.reject(e):r.resolve(),n=n.remove(t)),this.mutationUserCallbacks[this.currentUser.toKey()]=n}},Cf.prototype.removeAndCleanupTarget=function(t,e){var n=this;void 0===e&&(e=null),this.sharedClientState.removeLocalQueryTarget(t),Ur(this.queriesByTarget[t]&&0!==this.queriesByTarget[t].length,"There are no queries mapped to target id "+t);for(var r=0,i=this.queriesByTarget[t];r<i.length;r++){var o=i[r];this.queryViewsByQuery.delete(o),e&&this.syncEngineListener.onWatchError(o,e)}if(delete this.queriesByTarget[t],this.isPrimary){var a=this.limboDocumentRefs.referencesForId(t);this.limboDocumentRefs.removeReferencesForId(t),a.forEach(function(t){n.limboDocumentRefs.containsKey(t)||n.removeLimboTarget(t)})}},Cf.prototype.removeLimboTarget=function(t){var e=this.limboTargetsByKey.get(t);null!==e&&(this.remoteStore.unlisten(e),this.limboTargetsByKey=this.limboTargetsByKey.remove(t),delete this.limboResolutionsByTarget[e])},Cf.prototype.updateTrackedLimbos=function(t,e){for(var n=0,r=e;n<r.length;n++){var i=r[n];i instanceof mf?(this.limboDocumentRefs.addReference(i.key,t),this.trackLimboChange(i)):i instanceof yf?(Fr(Tf,"Document no longer in limbo: "+i.key),this.limboDocumentRefs.removeReference(i.key,t),this.limboDocumentRefs.containsKey(i.key)||this.removeLimboTarget(i.key)):Br("Unknown limbo change: "+JSON.stringify(i))}},Cf.prototype.trackLimboChange=function(t){var e=t.key;if(!this.limboTargetsByKey.get(e)){Fr(Tf,"New document in limbo: "+e);var n=this.limboTargetIdGenerator.next(),r=Kc.atPath(e.path);this.limboResolutionsByTarget[n]=new Ef(e),this.remoteStore.listen(new zu(r.toTarget(),n,Uu.LimboResolution,Oi.INVALID)),this.limboTargetsByKey=this.limboTargetsByKey.insert(e,n)}},Cf.prototype.currentLimboDocs=function(){return this.limboTargetsByKey},Cf.prototype.emitNewSnapsAndNotifyLocalStore=function(r,u){return p(this,void 0,void 0,function(){var o,a,e,s=this;return m(this,function(t){switch(t.label){case 0:return o=[],a=[],e=[],this.queryViewsByQuery.forEach(function(t,i){e.push(Promise.resolve().then(function(){var n=i.view.computeDocChanges(r);return n.needsRefill?s.localStore.executeQuery(i.query,!1).then(function(t){var e=t.documents;return i.view.computeDocChanges(e,n)}):n}).then(function(t){var e=u&&u.targetChanges[i.targetId],n=i.view.applyChanges(t,!0===s.isPrimary,e);if(s.updateTrackedLimbos(i.targetId,n.limboChanges),n.snapshot){s.isPrimary&&s.sharedClientState.updateQueryState(i.targetId,n.snapshot.fromCache?"not-current":"current"),o.push(n.snapshot);var r=pf.fromSnapshot(i.targetId,n.snapshot);a.push(r)}}))}),[4,Promise.all(e)];case 1:return t.sent(),this.syncEngineListener.onWatchChange(o),[4,this.localStore.notifyLocalViewChanges(a)];case 2:return t.sent(),[2]}})})},Cf.prototype.assertSubscribed=function(t){Ur(null!==this.syncEngineListener,"Trying to call "+t+" before calling subscribe().")},Cf.prototype.handleCredentialChange=function(r){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:return e=!this.currentUser.isEqual(r),this.currentUser=r,e?(this.rejectOutstandingPendingWritesCallbacks("'waitForPendingWrites' promise is rejected due to a user change."),[4,this.localStore.handleUserChange(r)]):[3,3];case 1:return n=t.sent(),this.sharedClientState.handleUserChange(r,n.removedBatchIds,n.addedBatchIds),[4,this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];case 2:t.sent(),t.label=3;case 3:return[4,this.remoteStore.handleCredentialChange()];case 4:return t.sent(),[2]}})})},Cf.prototype.applyPrimaryState=function(c){return p(this,void 0,void 0,function(){var e,n,r,i,o,a,s,u=this;return m(this,function(t){switch(t.label){case 0:return!0!==c||!0===this.isPrimary?[3,3]:(this.isPrimary=!0,[4,this.remoteStore.applyPrimaryState(!0)]);case 1:return t.sent(),e=this.sharedClientState.getAllActiveQueryTargets(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];case 2:for(n=t.sent(),r=0,i=n;r<i.length;r++)o=i[r],this.remoteStore.listen(o);return[3,7];case 3:return!1!==c||!1===this.isPrimary?[3,7]:(this.isPrimary=!1,a=[],s=Promise.resolve(),Zr(this.queriesByTarget,function(t,e){u.sharedClientState.isLocalQueryTarget(t)?a.push(t):s=s.then(function(){return u.removeAndCleanupTarget(t),u.localStore.releaseTarget(t,!0)}),u.remoteStore.unlisten(t)}),[4,s]);case 4:return t.sent(),[4,this.synchronizeQueryViewsAndRaiseSnapshots(a)];case 5:return t.sent(),this.resetLimboDocuments(),[4,this.remoteStore.applyPrimaryState(!1)];case 6:t.sent(),t.label=7;case 7:return[2]}})})},Cf.prototype.resetLimboDocuments=function(){var e=this;Zr(this.limboResolutionsByTarget,function(t){e.remoteStore.unlisten(t)}),this.limboDocumentRefs.removeAllReferences(),this.limboResolutionsByTarget=[],this.limboTargetsByKey=new po(Wi.comparator)},Cf.prototype.synchronizeQueryViewsAndRaiseSnapshots=function(d){return p(this,void 0,void 0,function(){var e,n,r,i,o,a,s,u,c,h,l,f,p;return m(this,function(t){switch(t.label){case 0:e=[],n=[],r=0,i=d,t.label=1;case 1:return r<i.length?(o=i[r],a=void 0,(s=this.queriesByTarget[o])&&0!==s.length?[4,this.localStore.releaseTarget(o,!0)]:[3,8]):[3,14];case 2:return t.sent(),[4,this.localStore.allocateTarget(s[0].toTarget())];case 3:a=t.sent(),u=0,c=s,t.label=4;case 4:return u<c.length?(h=c[u],Ur(!!(l=this.queryViewsByQuery.get(h)),"No query view found for "+h),[4,this.synchronizeViewAndComputeSnapshot(l)]):[3,7];case 5:(f=t.sent()).snapshot&&n.push(f.snapshot),t.label=6;case 6:return u++,[3,4];case 7:return[3,12];case 8:return Ur(!0===this.isPrimary,"A secondary tab should never have an active target without an active query."),[4,this.localStore.getTarget(o)];case 9:return Ur(!!(p=t.sent()),"Target for id "+o+" not found"),[4,this.localStore.allocateTarget(p)];case 10:return a=t.sent(),[4,this.initializeViewAndComputeSnapshot(this.synthesizeTargetToQuery(p),o,!1)];case 11:t.sent(),t.label=12;case 12:e.push(a),t.label=13;case 13:return r++,[3,1];case 14:return this.syncEngineListener.onWatchChange(n),[2,e]}})})},Cf.prototype.synthesizeTargetToQuery=function(t){return new Kc(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,qc.First,t.startAt,t.endAt)},Cf.prototype.getActiveClients=function(){return this.localStore.getActiveClients()},Cf.prototype.applyTargetState=function(r,i,o){return p(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:if(this.isPrimary)return Fr(Tf,"Ignoring unexpected query state notification."),[2];if(!this.queriesByTarget[r])return[3,7];switch(i){case"current":case"not-current":return[3,1];case"rejected":return[3,4]}return[3,6];case 1:return[4,this.localStore.getNewDocumentChanges()];case 2:return e=t.sent(),n=Tl.createSynthesizedRemoteEventForCurrentChange(r,"current"===i),[4,this.emitNewSnapsAndNotifyLocalStore(e,n)];case 3:return t.sent(),[3,7];case 4:return[4,this.localStore.releaseTarget(r,!0)];case 5:return t.sent(),this.removeAndCleanupTarget(r,o),[3,7];case 6:Br("Unexpected target state: "+i),t.label=7;case 7:return[2]}})})},Cf.prototype.applyActiveTargetsChange=function(l,f){return p(this,void 0,void 0,function(){var e,n,r,i,o,a,s,u,c,h=this;return m(this,function(t){switch(t.label){case 0:if(!this.isPrimary)return[2];e=0,n=l,t.label=1;case 1:return e<n.length?(c=n[e],Ur(!this.queriesByTarget[c],"Trying to add an already active target"),[4,this.localStore.getTarget(c)]):[3,6];case 2:return Ur(!!(r=t.sent()),"Query data for active target "+c+" not found"),[4,this.localStore.allocateTarget(r)];case 3:return i=t.sent(),[4,this.initializeViewAndComputeSnapshot(this.synthesizeTargetToQuery(r),i.targetId,!1)];case 4:t.sent(),this.remoteStore.listen(i),t.label=5;case 5:return e++,[3,1];case 6:o=function(e){return m(this,function(t){switch(t.label){case 0:return a.queriesByTarget[e]?[4,a.localStore.releaseTarget(e,!1).then(function(){h.remoteStore.unlisten(e),h.removeAndCleanupTarget(e)}).catch(cc)]:[2,"continue"];case 1:return t.sent(),[2]}})},a=this,s=0,u=f,t.label=7;case 7:return s<u.length?(c=u[s],[5,o(c)]):[3,10];case 8:t.sent(),t.label=9;case 9:return s++,[3,7];case 10:return[2]}})})},Cf.prototype.enableNetwork=function(){return this.localStore.setNetworkEnabled(!0),this.remoteStore.enableNetwork()},Cf.prototype.disableNetwork=function(){return this.localStore.setNetworkEnabled(!1),this.remoteStore.disableNetwork()},Cf.prototype.getRemoteKeysForTarget=function(t){var e=this.limboResolutionsByTarget[t];if(e&&e.receivedDocument)return Oo().add(e.key);var n=Oo(),r=this.queriesByTarget[t];if(!r)return n;for(var i=0,o=r;i<o.length;i++){var a=o[i],s=this.queryViewsByQuery.get(a);Ur(!!s,"No query view found for "+a),n=n.unionWith(s.view.syncedDocuments)}return n},Cf);function Cf(t,e,n,r){this.localStore=t,this.remoteStore=e,this.sharedClientState=n,this.currentUser=r,this.syncEngineListener=null,this.queryViewsByQuery=new Xs(function(t){return t.canonicalId()}),this.queriesByTarget={},this.limboTargetsByKey=new po(Wi.comparator),this.limboResolutionsByTarget={},this.limboDocumentRefs=new nc,this.mutationUserCallbacks={},this.pendingWritesCallbacks=new Map,this.limboTargetIdGenerator=la.forSyncEngine(),this.isPrimary=void 0,this.onlineState=$h.Unknown}var Df=(Nf.prototype.isAuthenticated=function(){return null!=this.uid},Nf.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},Nf.prototype.isEqual=function(t){return t.uid===this.uid},Nf.UNAUTHENTICATED=new Nf(null),Nf.GOOGLE_CREDENTIALS=new Nf("google-credentials-uid"),Nf.FIRST_PARTY=new Nf("first-party-uid"),Nf);function Nf(t){this.uid=t}var Af="firestore_clients";function kf(t,e){return Ur(-1===e.indexOf("_"),"Client key cannot contain '_', but was '"+e+"'"),Af+"_"+t+"_"+e}var Rf="firestore_mutations";function Mf(t,e,n){var r=Rf+"_"+t+"_"+n;return e.isAuthenticated()&&(r+="_"+e.uid),r}var _f="firestore_targets";function Lf(t,e){return _f+"_"+t+"_"+e}var Of="firestore_online_state";var Pf="firestore_sequence_number";var xf="SharedClientState",Ff=(qf.fromWebStorageEntry=function(t,e,n){var r=JSON.parse(n),i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error),o=void 0;return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(o=new zr(r.error.code,r.error.message)),i?new qf(t,e,r.state,o):(qr(xf,"Failed to parse mutation state for ID '"+e+"': "+n),null)},qf.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},qf);function qf(t,e,n,r){this.user=t,this.batchId=e,this.state=n,Ur(void 0!==(this.error=r)==("rejected"===n),"MutationMetadata must contain an error iff state is 'rejected'")}var Vf=(Bf.fromWebStorageEntry=function(t,e){var n=JSON.parse(e),r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error),i=void 0;return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(i=new zr(n.error.code,n.error.message)),r?new Bf(t,n.state,i):(qr(xf,"Failed to parse target state for ID '"+t+"': "+e),null)},Bf.prototype.toWebStorageJSON=function(){var t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},Bf);function Bf(t,e,n){this.targetId=t,this.state=e,Ur(void 0!==(this.error=n)==("rejected"===e),"QueryTargetMetadata must contain an error iff state is 'rejected'")}var Uf=(Kf.fromWebStorageEntry=function(t,e){for(var n=JSON.parse(e),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=xo(),o=0;r&&o<n.activeTargetIds.length;++o)r=Fc(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return r?new Kf(t,i):(qr(xf,"Failed to parse client data for instance '"+t+"': "+e),null)},Kf);function Kf(t,e){this.clientId=t,this.activeTargetIds=e}var Qf=(jf.fromWebStorageEntry=function(t){var e=JSON.parse(t);return"object"==typeof e&&e.onlineState in $h&&"string"==typeof e.clientId?new jf(e.clientId,$h[e.onlineState]):(qr(xf,"Failed to parse online state: "+t),null)},jf);function jf(t,e){this.clientId=t,this.onlineState=e}var Gf=(Wf.prototype.addQueryTarget=function(t){this.activeTargetIds=this.activeTargetIds.add(t)},Wf.prototype.removeQueryTarget=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},Wf.prototype.toWebStorageJSON=function(){var t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)},Wf);function Wf(){this.activeTargetIds=xo()}var zf=(Hf.isAvailable=function(t){return!(!t.window||null==t.window.localStorage)},Hf.prototype.start=function(){return p(this,void 0,void 0,function(){var e,n,r,i,o,a,s,u,c,h,l,f=this;return m(this,function(t){switch(t.label){case 0:return Ur(!this.started,"WebStorageSharedClientState already started"),Ur(null!==this.syncEngine,"syncEngine property must be set before calling start()"),Ur(null!==this.onlineStateHandler,"onlineStateHandler property must be set before calling start()"),[4,this.syncEngine.getActiveClients()];case 1:for(e=t.sent(),n=0,r=e;n<r.length;n++)(i=r[n])!==this.localClientId&&(o=this.getItem(kf(this.persistenceKey,i)))&&(a=Uf.fromWebStorageEntry(i,o))&&(this.activeClients[a.clientId]=a);for(this.persistClientState(),(s=this.storage.getItem(this.onlineStateKey))&&(u=this.fromWebStorageOnlineState(s))&&this.handleOnlineStateEvent(u),c=0,h=this.earlyEvents;c<h.length;c++)l=h[c],this.handleWebStorageEvent(l);return this.earlyEvents=[],this.platform.window.addEventListener("unload",function(){return f.shutdown()}),this.started=!0,[2]}})})},Hf.prototype.writeSequenceNumber=function(t){this.setItem(this.sequenceNumberKey,JSON.stringify(t))},Hf.prototype.getAllActiveQueryTargets=function(){var n=xo();return $r(this.activeClients,function(t,e){n=n.unionWith(e.activeTargetIds)}),n},Hf.prototype.isActiveQueryTarget=function(t){for(var e in this.activeClients)if(this.activeClients.hasOwnProperty(e)&&this.activeClients[e].activeTargetIds.has(t))return!0;return!1},Hf.prototype.addPendingMutation=function(t){this.persistMutationState(t,"pending")},Hf.prototype.updateMutationState=function(t,e,n){this.persistMutationState(t,e,n),this.removeMutationState(t)},Hf.prototype.addLocalQueryTarget=function(t){var e="not-current";if(this.isActiveQueryTarget(t)){var n=this.storage.getItem(Lf(this.persistenceKey,t));if(n){var r=Vf.fromWebStorageEntry(t,n);r&&(e=r.state)}}return this.localClientState.addQueryTarget(t),this.persistClientState(),e},Hf.prototype.removeLocalQueryTarget=function(t){this.localClientState.removeQueryTarget(t),this.persistClientState()},Hf.prototype.isLocalQueryTarget=function(t){return this.localClientState.activeTargetIds.has(t)},Hf.prototype.clearQueryState=function(t){this.removeItem(Lf(this.persistenceKey,t))},Hf.prototype.updateQueryState=function(t,e,n){this.persistQueryTargetState(t,e,n)},Hf.prototype.handleUserChange=function(t,e,n){var r=this;e.forEach(function(t){r.removeMutationState(t)}),this.currentUser=t,n.forEach(function(t){r.addPendingMutation(t)})},Hf.prototype.setOnlineState=function(t){this.persistOnlineState(t)},Hf.prototype.shutdown=function(){this.started&&(this.platform.window.removeEventListener("storage",this.storageListener),this.removeItem(this.localClientStorageKey),this.started=!1)},Hf.prototype.getItem=function(t){var e=this.storage.getItem(t);return Fr(xf,"READ",t,e),e},Hf.prototype.setItem=function(t,e){Fr(xf,"SET",t,e),this.storage.setItem(t,e)},Hf.prototype.removeItem=function(t){Fr(xf,"REMOVE",t),this.storage.removeItem(t)},Hf.prototype.handleWebStorageEvent=function(s){var t=this;if(s.storageArea===this.storage){if(Fr(xf,"EVENT",s.key,s.newValue),s.key===this.localClientStorageKey)return void qr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.queue.enqueueAndForget(function(){return p(t,void 0,void 0,function(){var e,n,r,i,o,a;return m(this,function(t){if(!this.started)return this.earlyEvents.push(s),[2];if(null===s.key)return[2];if(this.clientStateKeyRe.test(s.key)){if(null==s.newValue)return n=this.fromWebStorageClientStateKey(s.key),[2,this.handleClientStateEvent(n,null)];if(e=this.fromWebStorageClientState(s.key,s.newValue))return[2,this.handleClientStateEvent(e.clientId,e)]}else if(this.mutationBatchKeyRe.test(s.key)){if(null!==s.newValue&&(r=this.fromWebStorageMutationMetadata(s.key,s.newValue)))return[2,this.handleMutationBatchEvent(r)]}else if(this.queryTargetKeyRe.test(s.key)){if(null!==s.newValue&&(i=this.fromWebStorageQueryTargetMetadata(s.key,s.newValue)))return[2,this.handleQueryTargetEvent(i)]}else if(s.key===this.onlineStateKey){if(null!==s.newValue&&(o=this.fromWebStorageOnlineState(s.newValue)))return[2,this.handleOnlineStateEvent(o)]}else s.key===this.sequenceNumberKey&&(Ur(!!this.sequenceNumberHandler,"Missing sequenceNumberHandler"),(a=function(t){var e=Oi.INVALID;if(null!=t)try{var n=JSON.parse(t);Ur("number"==typeof n,"Found non-numeric sequence number"),e=n}catch(t){qr(xf,"Failed to read sequence number from WebStorage",t)}return e}(s.newValue))!==Oi.INVALID&&this.sequenceNumberHandler(a));return[2]})})})}},Object.defineProperty(Hf.prototype,"localClientState",{get:function(){return this.activeClients[this.localClientId]},enumerable:!0,configurable:!0}),Hf.prototype.persistClientState=function(){this.setItem(this.localClientStorageKey,this.localClientState.toWebStorageJSON())},Hf.prototype.persistMutationState=function(t,e,n){var r=new Ff(this.currentUser,t,e,n),i=Mf(this.persistenceKey,this.currentUser,t);this.setItem(i,r.toWebStorageJSON())},Hf.prototype.removeMutationState=function(t){var e=Mf(this.persistenceKey,this.currentUser,t);this.removeItem(e)},Hf.prototype.persistOnlineState=function(t){var e={clientId:this.localClientId,onlineState:$h[t]};this.storage.setItem(this.onlineStateKey,JSON.stringify(e))},Hf.prototype.persistQueryTargetState=function(t,e,n){var r=Lf(this.persistenceKey,t),i=new Vf(t,e,n);this.setItem(r,i.toWebStorageJSON())},Hf.prototype.fromWebStorageClientStateKey=function(t){var e=this.clientStateKeyRe.exec(t);return e?e[1]:null},Hf.prototype.fromWebStorageClientState=function(t,e){var n=this.fromWebStorageClientStateKey(t);return Ur(null!==n,"Cannot parse client state key '"+t+"'"),Uf.fromWebStorageEntry(n,e)},Hf.prototype.fromWebStorageMutationMetadata=function(t,e){var n=this.mutationBatchKeyRe.exec(t);Ur(null!==n,"Cannot parse mutation batch key '"+t+"'");var r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ff.fromWebStorageEntry(new Df(i),r,e)},Hf.prototype.fromWebStorageQueryTargetMetadata=function(t,e){var n=this.queryTargetKeyRe.exec(t);Ur(null!==n,"Cannot parse query target key '"+t+"'");var r=Number(n[1]);return Vf.fromWebStorageEntry(r,e)},Hf.prototype.fromWebStorageOnlineState=function(t){return Qf.fromWebStorageEntry(t)},Hf.prototype.handleMutationBatchEvent=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){return e.user.uid!==this.currentUser.uid?(Fr(xf,"Ignoring mutation for non-active user "+e.user.uid),[2]):[2,this.syncEngine.applyBatchState(e.batchId,e.state,e.error)]})})},Hf.prototype.handleQueryTargetEvent=function(t){return this.syncEngine.applyTargetState(t.targetId,t.state,t.error)},Hf.prototype.handleClientStateEvent=function(t,e){var n=this,r=this.getAllActiveQueryTargets();e?this.activeClients[t]=e:delete this.activeClients[t];var i=this.getAllActiveQueryTargets(),o=[],a=[];return i.forEach(function(e){return p(n,void 0,void 0,function(){return m(this,function(t){return r.has(e)||o.push(e),[2]})})}),r.forEach(function(e){return p(n,void 0,void 0,function(){return m(this,function(t){return i.has(e)||a.push(e),[2]})})}),this.syncEngine.applyActiveTargetsChange(o,a)},Hf.prototype.handleOnlineStateEvent=function(t){this.activeClients[t.clientId]&&this.onlineStateHandler(t.onlineState)},Hf);function Hf(t,e,n,r,i){if(this.queue=t,this.platform=e,this.persistenceKey=n,this.localClientId=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.activeClients={},this.storageListener=this.handleWebStorageEvent.bind(this),this.started=!1,this.earlyEvents=[],!Hf.isAvailable(this.platform))throw new zr(Wr.UNIMPLEMENTED,"LocalStorage is not available on this platform.");var o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.platform.window.localStorage,this.currentUser=i,this.localClientStorageKey=kf(this.persistenceKey,this.localClientId),this.sequenceNumberKey=function(t){return Pf+"_"+t}(this.persistenceKey),this.activeClients[this.localClientId]=new Gf,this.clientStateKeyRe=new RegExp("^"+Af+"_"+o+"_([^_]*)$"),this.mutationBatchKeyRe=new RegExp("^"+Rf+"_"+o+"_(\\d+)(?:_(.*))?$"),this.queryTargetKeyRe=new RegExp("^"+_f+"_"+o+"_(\\d+)$"),this.onlineStateKey=function(t){return Of+"_"+t}(this.persistenceKey),this.platform.window.addEventListener("storage",this.storageListener)}var Yf=(Xf.prototype.addPendingMutation=function(t){},Xf.prototype.updateMutationState=function(t,e,n){},Xf.prototype.addLocalQueryTarget=function(t){return this.localState.addQueryTarget(t),this.queryState[t]||"not-current"},Xf.prototype.updateQueryState=function(t,e,n){this.queryState[t]=e},Xf.prototype.removeLocalQueryTarget=function(t){this.localState.removeQueryTarget(t)},Xf.prototype.isLocalQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},Xf.prototype.clearQueryState=function(t){delete this.queryState[t]},Xf.prototype.getAllActiveQueryTargets=function(){return this.localState.activeTargetIds},Xf.prototype.isActiveQueryTarget=function(t){return this.localState.activeTargetIds.has(t)},Xf.prototype.start=function(){return this.localState=new Gf,Promise.resolve()},Xf.prototype.handleUserChange=function(t,e,n){},Xf.prototype.setOnlineState=function(t){},Xf.prototype.shutdown=function(){},Xf.prototype.writeSequenceNumber=function(t){},Xf);function Xf(){this.localState=new Gf,this.queryState={},this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null}var Jf="FirestoreClient",Zf=($f.prototype.lruParams=function(){return dc.withCacheSize(this.cacheSizeBytes)},$f);function $f(t,e){this.cacheSizeBytes=t,this.synchronizeTabs=e}var tp=function(){},ep=(np.prototype.start=function(t){var n=this;this.verifyNotTerminated();var r=new Xi,i=new Xi,o=!1;return this.credentials.setChangeListener(function(e){o?n.asyncQueue.enqueueAndForget(function(){return n.handleCredentialChange(e)}):(o=!0,n.initializePersistence(t,i,e).then(function(t){return n.initializeRest(e,t)}).then(r.resolve,r.reject))}),this.asyncQueue.enqueueAndForget(function(){return r.promise}),i.promise},np.prototype.enableNetwork=function(){var t=this;return this.verifyNotTerminated(),this.asyncQueue.enqueue(function(){return t.syncEngine.enableNetwork()})},np.prototype.initializePersistence=function(t,e,n){var r=this;return t instanceof Zf?this.startIndexedDbPersistence(n,t).then(function(t){return e.resolve(),t}).catch(function(t){if(e.reject(t),!r.canFallback(t))throw t;return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.startMemoryPersistence()}):(e.resolve(),this.startMemoryPersistence())},np.prototype.canFallback=function(t){return t instanceof zr?t.code===Wr.FAILED_PRECONDITION||t.code===Wr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},np.prototype.verifyNotTerminated=function(){if(this.asyncQueue.isShuttingDown)throw new zr(Wr.FAILED_PRECONDITION,"The client has already been terminated.")},np.prototype.startIndexedDbPersistence=function(r,i){var t=this,o=Cc.buildStoragePrefix(this.databaseInfo),a=new af(this.databaseInfo.databaseId,{useProto3Json:!0});return Promise.resolve().then(function(){return p(t,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:if(i.synchronizeTabs&&!zf.isAvailable(this.platform))throw new zr(Wr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");return e=i.lruParams(),this.sharedClientState=i.synchronizeTabs?new zf(this.asyncQueue,this.platform,o,this.clientId,r):new Yf,[4,Cc.createIndexedDbPersistence({allowTabSynchronization:i.synchronizeTabs,persistenceKey:o,clientId:this.clientId,platform:this.platform,queue:this.asyncQueue,serializer:a,lruParams:e,sequenceNumberSyncer:this.sharedClientState})];case 1:return n=t.sent(),[2,(this.persistence=n).referenceDelegate.garbageCollector]}})})})},np.prototype.startMemoryPersistence=function(){return this.persistence=kh.createEagerPersistence(this.clientId),this.sharedClientState=new Yf,Promise.resolve(null)},np.prototype.initializeRest=function(c,h){var t=this;return Fr(Jf,"Initializing. user=",c.uid),this.platform.loadConnection(this.databaseInfo).then(function(u){return p(t,void 0,void 0,function(){var e,n,r,i,o,a,s=this;return m(this,function(t){switch(t.label){case 0:return e=new bh,this.localStore=new sc(this.persistence,e,c),[4,this.localStore.start()];case 1:return t.sent(),h&&(this.lruScheduler=new yc(h,this.asyncQueue,this.localStore)),n=this.platform.newConnectivityMonitor(),r=this.platform.newSerializer(this.databaseInfo.databaseId),i=new Jh(this.asyncQueue,u,this.credentials,r),o=function(t){return s.syncEngine.applyOnlineStateChange(t,el.RemoteStore)},a=function(t){return s.syncEngine.applyOnlineStateChange(t,el.SharedClientState)},this.remoteStore=new Fl(this.localStore,i,this.asyncQueue,o,n),this.syncEngine=new If(this.localStore,this.remoteStore,this.sharedClientState,c),this.sharedClientState.onlineStateHandler=a,this.remoteStore.syncEngine=this.syncEngine,this.sharedClientState.syncEngine=this.syncEngine,this.eventMgr=new cf(this.syncEngine),[4,this.sharedClientState.start()];case 2:return t.sent(),[4,this.remoteStore.start()];case 3:return t.sent(),[4,this.persistence.setPrimaryStateListener(function(e){return p(s,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return[4,this.syncEngine.applyPrimaryState(e)];case 1:return t.sent(),this.lruScheduler&&(e&&!this.lruScheduler.started?this.lruScheduler.start():e||this.lruScheduler.stop()),[2]}})})})];case 4:return t.sent(),[4,this.persistence.setDatabaseDeletedListener(function(){return p(s,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return[4,this.terminate()];case 1:return t.sent(),[2]}})})})];case 5:return t.sent(),[2]}})})})},np.prototype.handleCredentialChange=function(t){return this.asyncQueue.verifyOperationInProgress(),Fr(Jf,"Credential Changed. Current user: "+t.uid),this.syncEngine.handleCredentialChange(t)},np.prototype.disableNetwork=function(){var t=this;return this.verifyNotTerminated(),this.asyncQueue.enqueue(function(){return t.syncEngine.disableNetwork()})},np.prototype.terminate=function(){var t=this;return this.asyncQueue.enqueueAndInitiateShutdown(function(){return p(t,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.lruScheduler&&this.lruScheduler.stop(),[4,this.remoteStore.shutdown()];case 1:return t.sent(),[4,this.sharedClientState.shutdown()];case 2:return t.sent(),[4,this.persistence.shutdown()];case 3:return t.sent(),this.credentials.removeChangeListener(),[2]}})})})},np.prototype.waitForPendingWrites=function(){var t=this;this.verifyNotTerminated();var e=new Xi;return this.asyncQueue.enqueueAndForget(function(){return t.syncEngine.registerPendingWritesCallback(e)}),e.promise},np.prototype.listen=function(t,e,n){var r=this;this.verifyNotTerminated();var i=new lf(t,e,n);return this.asyncQueue.enqueueAndForget(function(){return r.eventMgr.listen(i)}),i},np.prototype.unlisten=function(t){var e=this;this.clientTerminated||this.asyncQueue.enqueueAndForget(function(){return e.eventMgr.unlisten(t)})},np.prototype.getDocumentFromLocalCache=function(t){var e=this;return this.verifyNotTerminated(),this.asyncQueue.enqueue(function(){return e.localStore.readDocument(t)}).then(function(t){if(t instanceof Ks)return t;if(t instanceof Gs)return null;throw new zr(Wr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")})},np.prototype.getDocumentsFromLocalCache=function(i){var t=this;return this.verifyNotTerminated(),this.asyncQueue.enqueue(function(){return p(t,void 0,void 0,function(){var e,n,r;return m(this,function(t){switch(t.label){case 0:return[4,this.localStore.executeQuery(i,!0)];case 1:return e=t.sent(),n=new gf(i,e.remoteKeys),r=n.computeDocChanges(e.documents),[2,n.applyChanges(r,!1).snapshot]}})})})},np.prototype.write=function(t){var e=this;this.verifyNotTerminated();var n=new Xi;return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.write(t,n)}),n.promise},np.prototype.databaseId=function(){return this.databaseInfo.databaseId},np.prototype.addSnapshotsInSyncListener=function(t){var e=this;this.verifyNotTerminated(),this.asyncQueue.enqueueAndForget(function(){return e.eventMgr.addSnapshotsInSyncListener(t),Promise.resolve()})},np.prototype.removeSnapshotsInSyncListener=function(t){this.clientTerminated||this.eventMgr.removeSnapshotsInSyncListener(t)},Object.defineProperty(np.prototype,"clientTerminated",{get:function(){return this.asyncQueue.isShuttingDown},enumerable:!0,configurable:!0}),np.prototype.transaction=function(t){var e=this;this.verifyNotTerminated();var n=new Xi;return this.asyncQueue.enqueueAndForget(function(){return e.syncEngine.runTransaction(e.asyncQueue,t,n),Promise.resolve()}),n.promise},np);function np(t,e,n,r){this.platform=t,this.databaseInfo=e,this.credentials=n,this.asyncQueue=r,this.clientId=wi.newId()}var rp=(ip.prototype.next=function(t){this.scheduleEvent(this.observer.next,t)},ip.prototype.error=function(t){this.scheduleEvent(this.observer.error,t)},ip.prototype.mute=function(){this.muted=!0},ip.prototype.scheduleEvent=function(t,e){var n=this;this.muted||setTimeout(function(){n.muted||t(e)},0)},ip);function ip(t){this.observer=t,this.muted=!1}var op=(ap.documentId=function(){return ap._DOCUMENT_ID},ap.prototype.isEqual=function(t){if(!(t instanceof ap))throw yi("isEqual","FieldPath",1,t);return this._internalPath.isEqual(t._internalPath)},ap._DOCUMENT_ID=new ap(ji.keyField().canonicalString()),ap);function ap(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];!function(t,e,n,r){if(!(e instanceof Array)||e.length<r)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" argument to be an array with at least "+bi(r,"element")+".")}("FieldPath",t,"fieldNames",1);for(var n=0;n<t.length;++n)if(oi("FieldPath","string",n,t[n]),0===t[n].length)throw new zr(Wr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ji(t)}var sp=new RegExp("[~\\*/\\[\\]]");var up=function(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t},cp=(hp.prototype.getToken=function(){return Promise.resolve(null)},hp.prototype.invalidateToken=function(){},hp.prototype.setChangeListener=function(t){Ur(!this.changeListener,"Can only call setChangeListener() once."),(this.changeListener=t)(Df.UNAUTHENTICATED)},hp.prototype.removeChangeListener=function(){Ur(null!==this.changeListener,"removeChangeListener() when no listener registered"),this.changeListener=null},hp);function hp(){this.changeListener=null}var lp=(fp.prototype.getToken=function(){var e=this;Ur(null!=this.tokenListener,"getToken cannot be called after listener removed.");var n=this.tokenCounter,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(function(t){if(e.tokenCounter!==n)throw new zr(Wr.ABORTED,"getToken aborted due to token change.");return t?(Ur("string"==typeof t.accessToken,"Invalid tokenData returned from getToken():"+t),new up(t.accessToken,e.currentUser)):null}):Promise.resolve(null)},fp.prototype.invalidateToken=function(){this.forceRefresh=!0},fp.prototype.setChangeListener=function(t){Ur(!this.changeListener,"Can only call setChangeListener() once."),this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)},fp.prototype.removeChangeListener=function(){Ur(null!=this.tokenListener,"removeChangeListener() called twice"),Ur(null!==this.changeListener,"removeChangeListener() called when no listener registered"),this.auth&&this.auth.removeAuthTokenListener(this.tokenListener),this.tokenListener=null,this.changeListener=null},fp.prototype.getUser=function(){var t=this.auth&&this.auth.getUid();return Ur(null===t||"string"==typeof t,"Received invalid UID: "+t),new Df(t)},fp);function fp(t){var e=this;this.tokenListener=null,this.currentUser=Df.UNAUTHENTICATED,this.receivedInitialUser=!1,this.tokenCounter=0,this.changeListener=null,this.forceRefresh=!1,this.tokenListener=function(){e.tokenCounter++,e.currentUser=e.getUser(),e.receivedInitialUser=!0,e.changeListener&&e.changeListener(e.currentUser)},this.tokenCounter=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.tokenListener):(this.tokenListener(null),t.get().then(function(t){e.auth=t,e.tokenListener&&e.auth.addAuthTokenListener(e.tokenListener)},function(){}))}var pp=(Object.defineProperty(dp.prototype,"authHeaders",{get:function(){var t={"X-Goog-AuthUser":this.sessionIndex},e=this.gapi.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),t},enumerable:!0,configurable:!0}),dp);function dp(t,e){this.gapi=t,this.sessionIndex=e,this.type="FirstParty",this.user=Df.FIRST_PARTY}var mp=(yp.prototype.getToken=function(){return Promise.resolve(new pp(this.gapi,this.sessionIndex))},yp.prototype.setChangeListener=function(t){t(Df.FIRST_PARTY)},yp.prototype.removeChangeListener=function(){},yp.prototype.invalidateToken=function(){},yp);function yp(t,e){this.gapi=t,this.sessionIndex=e}function gp(t){return function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=t,r=0,i=e;r<i.length;r++){var o=i[r];if(o in n&&"function"==typeof n[o])return!0}return!1}(t,["next","error","complete"])}var vp=(bp.delete=function(){return ei("FieldValue.delete",arguments),Tp.instance},bp.serverTimestamp=function(){return ei("FieldValue.serverTimestamp",arguments),Ip.instance},bp.arrayUnion=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ri("FieldValue.arrayUnion",arguments,1),new Np(t)},bp.arrayRemove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ri("FieldValue.arrayRemove",arguments,1),new Rp(t)},bp.increment=function(t){return oi("FieldValue.increment","number",1,t),ni("FieldValue.increment",arguments,1),new Lp(t)},bp.prototype.isEqual=function(t){return this===t},bp);function bp(t){this._methodName=t}var wp,Tp=(t(Sp,wp=vp),Sp.instance=new Sp,Sp);function Sp(){return wp.call(this,"FieldValue.delete")||this}var Ep,Ip=(t(Cp,Ep=vp),Cp.instance=new Cp,Cp);function Cp(){return Ep.call(this,"FieldValue.serverTimestamp")||this}var Dp,Np=(t(Ap,Dp=vp),Ap);function Ap(t){var e=Dp.call(this,"FieldValue.arrayUnion")||this;return e._elements=t,e}var kp,Rp=(t(Mp,kp=vp),Mp);function Mp(t){var e=kp.call(this,"FieldValue.arrayRemove")||this;return e._elements=t,e}var _p,Lp=(t(Op,_p=vp),Op);function Op(t){var e=_p.call(this,"FieldValue.increment")||this;return e._operand=t,e}var Pp=Yr(vp,"Use FieldValue.<field>() instead."),xp=/^__.*__$/,Fp=(qp.prototype.toMutations=function(t,e){var n=[];return null!==this.fieldMask?n.push(new Oa(t,this.data,this.fieldMask,e)):n.push(new Ma(t,this.data,e)),0<this.fieldTransforms.length&&n.push(new Fa(t,this.fieldTransforms)),n},qp);function qp(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}var Vp,Bp,Up=(Kp.prototype.toMutations=function(t,e){var n=[new Oa(t,this.data,this.fieldMask,e)];return 0<this.fieldTransforms.length&&n.push(new Fa(t,this.fieldTransforms)),n},Kp);function Kp(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}function Qp(t){switch(t){case Vp.Set:case Vp.MergeSet:case Vp.Update:return!0;case Vp.Argument:case Vp.ArrayArgument:return!1;default:throw Br("Unexpected case for UserDataSource: "+t)}}(Bp=Vp=Vp||{})[Bp.Set=0]="Set",Bp[Bp.Update=1]="Update",Bp[Bp.MergeSet=2]="MergeSet",Bp[Bp.Argument=3]="Argument",Bp[Bp.ArrayArgument=4]="ArrayArgument";var jp=(Gp.prototype.childContextForField=function(t){var e=null==this.path?null:this.path.child(t),n=new Gp(this.dataSource,this.methodName,e,!1,this.fieldTransforms,this.fieldMask);return n.validatePathSegment(t),n},Gp.prototype.childContextForFieldPath=function(t){var e=null==this.path?null:this.path.child(t),n=new Gp(this.dataSource,this.methodName,e,!1,this.fieldTransforms,this.fieldMask);return n.validatePath(),n},Gp.prototype.childContextForArray=function(t){return new Gp(this.dataSource,this.methodName,null,!0,this.fieldTransforms,this.fieldMask)},Gp.prototype.createError=function(t){var e=null===this.path||this.path.isEmpty()?"":" (found in field "+this.path.toString()+")";return new zr(Wr.INVALID_ARGUMENT,"Function "+this.methodName+"() called with invalid data. "+t+e)},Gp.prototype.contains=function(e){return void 0!==this.fieldMask.find(function(t){return e.isPrefixOf(t)})||void 0!==this.fieldTransforms.find(function(t){return e.isPrefixOf(t.field)})},Gp.prototype.validatePath=function(){if(null!==this.path)for(var t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))},Gp.prototype.validatePathSegment=function(t){if(0===t.length)throw this.createError("Document fields must not be empty");if(Qp(this.dataSource)&&xp.test(t))throw this.createError('Document fields cannot begin and end with "__"')},Gp);function Gp(t,e,n,r,i,o){this.dataSource=t,this.methodName=e,this.path=n,this.arrayElement=r,void 0===i&&this.validatePath(),this.arrayElement=void 0!==r&&r,this.fieldTransforms=i||[],this.fieldMask=o||[]}var Wp=function(t,e){this.databaseId=t,this.key=e},zp=(Hp.prototype.parseSetData=function(t,e){var n=new jp(Vp.Set,t,ji.EMPTY_PATH);Xp("Data must be an object, but it was:",n,e);var r=this.parseData(e,n);return new Fp(r,null,n.fieldTransforms)},Hp.prototype.parseMergeData=function(t,e,n){var r=new jp(Vp.MergeSet,t,ji.EMPTY_PATH);Xp("Data must be an object, but it was:",r,e);var i,o,a=this.parseData(e,r);if(n){for(var s=new So(ji.comparator),u=0,c=n;u<c.length;u++){var h=c[u],l=void 0;if(h instanceof op)l=h._internalPath;else{if("string"!=typeof h)throw Br("Expected stringOrFieldPath to be a string or a FieldPath");l=Zp(t,h)}if(!r.contains(l))throw new zr(Wr.INVALID_ARGUMENT,"Field '"+l+"' is specified in your field mask but missing from your input data.");s=s.add(l)}i=ba.fromSet(s),o=r.fieldTransforms.filter(function(t){return i.covers(t.field)})}else i=ba.fromArray(r.fieldMask),o=r.fieldTransforms;return new Fp(a,i,o)},Hp.prototype.parseUpdateData=function(o,t){var a=this,s=new jp(Vp.Update,o,ji.EMPTY_PATH);Xp("Data must be an object, but it was:",s,t);var u=new So(ji.comparator),c=Os.EMPTY;$r(t,function(t,e){var n=Zp(o,t),r=s.childContextForFieldPath(n);if((e=a.runPreConverter(e,r))instanceof Tp)u=u.add(n);else{var i=a.parseData(e,r);null!=i&&(u=u.add(n),c=c.set(n,i))}});var e=ba.fromSet(u);return new Up(c,e,s.fieldTransforms)},Hp.prototype.parseUpdateVarargs=function(t,e,n,r){var i=new jp(Vp.Update,t,ji.EMPTY_PATH),o=[Jp(t,e)],a=[n];if(r.length%2!=0)throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() needs to be called with an even number of arguments that alternate between field names and values.");for(var s=0;s<r.length;s+=2)o.push(Jp(t,r[s])),a.push(r[s+1]);var u=new So(ji.comparator),c=Os.EMPTY;for(s=0;s<o.length;++s){var h=o[s],l=i.childContextForFieldPath(h),f=this.runPreConverter(a[s],l);if(f instanceof Tp)u=u.add(h);else{var p=this.parseData(f,l);null!=p&&(u=u.add(h),c=c.set(h,p))}}var d=ba.fromSet(u);return new Up(c,d,i.fieldTransforms)},Hp.prototype.parseQueryValue=function(t,e,n){void 0===n&&(n=!1);var r=new jp(n?Vp.ArrayArgument:Vp.Argument,t,ji.EMPTY_PATH),i=this.parseData(e,r);return Ur(null!=i,"Parsed data should not be null."),Ur(0===r.fieldTransforms.length,"Field transforms should have been disallowed."),i},Hp.prototype.runPreConverter=function(t,e){try{return this.preConverter(t)}catch(t){var n=$p(t);throw e.createError(n)}},Hp.prototype.parseData=function(t,e){if(Yp(t=this.runPreConverter(t,e)))return Xp("Unsupported field value:",e,t),this.parseObject(t,e);if(t instanceof vp)return this.parseSentinelFieldValue(t,e),null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.arrayElement&&e.dataSource!==Vp.ArrayArgument)throw e.createError("Nested arrays are not supported");return this.parseArray(t,e)}return this.parseScalarValue(t,e)},Hp.prototype.parseObject=function(t,r){var i=this,o=new po(Si);return ti(t)?r.path&&0<r.path.length&&r.fieldMask.push(r.path):$r(t,function(t,e){var n=i.parseData(e,r.childContextForField(t));null!=n&&(o=o.insert(t,n))}),new Os(o)},Hp.prototype.parseArray=function(t,e){for(var n=[],r=0,i=0,o=t;i<o.length;i++){var a=o[i],s=this.parseData(a,e.childContextForArray(r));null==s&&(s=ts.INSTANCE),n.push(s),r++}return new Fs(n)},Hp.prototype.parseSentinelFieldValue=function(t,e){if(!Qp(e.dataSource))throw e.createError(t._methodName+"() can only be used with update() and set()");if(null===e.path)throw e.createError(t._methodName+"() is not currently supported inside arrays");if(t instanceof Tp){if(e.dataSource!==Vp.MergeSet)throw e.dataSource===Vp.Update?(Ur(0<e.path.length,"FieldValue.delete() at the top level should have already been handled."),e.createError("FieldValue.delete() can only appear at the top level of your update data")):e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");e.fieldMask.push(e.path)}else if(t instanceof Ip)e.fieldTransforms.push(new Ta(e.path,Ul.instance));else if(t instanceof Np){var n=this.parseArrayTransformElements(t._methodName,t._elements),r=new Ql(n);e.fieldTransforms.push(new Ta(e.path,r))}else if(t instanceof Rp){n=this.parseArrayTransformElements(t._methodName,t._elements);var i=new Gl(n);e.fieldTransforms.push(new Ta(e.path,i))}else if(t instanceof Lp){var o=this.parseQueryValue("FieldValue.increment",t._operand),a=new zl(o);e.fieldTransforms.push(new Ta(e.path,a))}else Br("Unknown FieldValue type: "+t)},Hp.prototype.parseScalarValue=function(t,e){if(null===t)return ts.INSTANCE;if("number"==typeof t)return Fc(t)?new hs(t):new ps(t);if("boolean"==typeof t)return rs.of(t);if("string"==typeof t)return new ys(t);if(t instanceof Date)return new bs(co.fromDate(t));if(t instanceof co)return new bs(new co(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)));if(t instanceof Vl)return new Ms(t);if(t instanceof Ni)return new Cs(t);if(t instanceof Wp)return new As(t.databaseId,t.key);throw e.createError("Unsupported field value: "+pi(t))},Hp.prototype.parseArrayTransformElements=function(r,t){var i=this;return t.map(function(t,e){var n=new jp(Vp.Argument,r,ji.EMPTY_PATH);return i.parseData(t,n.childContextForArray(e))})},Hp);function Hp(t){this.preConverter=t}function Yp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof co||t instanceof Vl||t instanceof Ni||t instanceof Wp||t instanceof vp)}function Xp(t,e,n){if(!Yp(n)||!fi(n)){var r=pi(n);throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Jp(t,e){if(e instanceof op)return e._internalPath;if("string"==typeof e)return Zp(t,e);throw new zr(Wr.INVALID_ARGUMENT,"Function "+t+"() called with invalid data. Field path arguments must be of type string or FieldPath.")}function Zp(e,t){try{return function(e){if(0<=e.search(sp))throw new zr(Wr.INVALID_ARGUMENT,"Invalid field path ("+e+"). Paths must not contain '~', '*', '/', '[', or ']'");try{return new(op.bind.apply(op,a([void 0],e.split("."))))}catch(t){throw new zr(Wr.INVALID_ARGUMENT,"Invalid field path ("+e+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(t)._internalPath}catch(t){var n=$p(t);throw new zr(Wr.INVALID_ARGUMENT,"Function "+e+"() called with invalid data. "+n)}}function $p(t){return t instanceof Error?t.message:t.toString()}var td=dc.COLLECTION_DISABLED,ed=(nd.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.forceLongPolling===t.forceLongPolling},nd);function nd(t){if(void 0===t.host){if(void 0!==t.ssl)throw new zr(Wr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else si("settings","non-empty string","host",t.host),this.host=t.host,ui("settings","boolean","ssl",t.ssl),this.ssl=Jr(t.ssl,!0);if(mi("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling"]),ui("settings","object","credentials",t.credentials),this.credentials=t.credentials,ui("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),!0===t.timestampsInSnapshots?qr("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."):!1===t.timestampsInSnapshots&&qr("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."),this.timestampsInSnapshots=Jr(t.timestampsInSnapshots,!0),ui("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=dc.DEFAULT_CACHE_SIZE_BYTES;else{if(t.cacheSizeBytes!==td&&t.cacheSizeBytes<dc.MINIMUM_CACHE_SIZE_BYTES)throw new zr(Wr.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+dc.MINIMUM_CACHE_SIZE_BYTES);this.cacheSizeBytes=t.cacheSizeBytes}ui("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.forceLongPolling=void 0!==t.experimentalForceLongPolling&&t.experimentalForceLongPolling}var rd=(id.prototype.settings=function(t){if(ni("Firestore.settings",arguments,1),oi("Firestore.settings","object",1,t),Xr(t,"persistence"))throw new zr(Wr.INVALID_ARGUMENT,'"persistence" is now specified with a separate call to firestore.enablePersistence().');var e=new ed(t);if(this._firestoreClient&&!this._settings.isEqual(e))throw new zr(Wr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");void 0!==(this._settings=e).credentials&&(this._credentials=function(t){if(!t)return new cp;switch(t.type){case"gapi":var e=t.client;return Ur(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty),"unexpected gapi interface"),new mp(e,t.sessionIndex||"0");case"provider":return t.client;default:throw new zr(Wr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},id.prototype.enableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.enableNetwork()},id.prototype.disableNetwork=function(){return this.ensureClientConfigured(),this._firestoreClient.disableNetwork()},id.prototype.enablePersistence=function(t){if(this._firestoreClient)throw new zr(Wr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");var e=!1;return t&&(void 0!==t.experimentalTabSynchronization&&qr("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."),e=Jr(void 0!==t.synchronizeTabs?t.synchronizeTabs:t.experimentalTabSynchronization,!1)),this.configureClient(new Zf(this._settings.cacheSizeBytes,e))},id.prototype.clearPersistence=function(){var t=this,n=Cc.buildStoragePrefix(this.makeDatabaseInfo()),r=new Xi;return this._queue.enqueueAndForgetEvenAfterShutdown(function(){return p(t,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:if(t.trys.push([0,2,,3]),void 0!==this._firestoreClient&&!this._firestoreClient.clientTerminated)throw new zr(Wr.FAILED_PRECONDITION,"Persistence cannot be cleared after this Firestore instance is initialized.");return[4,Cc.clearPersistence(n)];case 1:return t.sent(),r.resolve(),[3,3];case 2:return e=t.sent(),r.reject(e),[3,3];case 3:return[2]}})})}),r.promise},id.prototype.terminate=function(){return this.app._removeServiceInstance("firestore"),this.INTERNAL.delete()},Object.defineProperty(id.prototype,"_isTerminated",{get:function(){return this.ensureClientConfigured(),this._firestoreClient.clientTerminated},enumerable:!0,configurable:!0}),id.prototype.waitForPendingWrites=function(){return this.ensureClientConfigured(),this._firestoreClient.waitForPendingWrites()},id.prototype.onSnapshotsInSync=function(t){if(this.ensureClientConfigured(),gp(t))return this.onSnapshotsInSyncInternal(t);oi("Firestore.onSnapshotsInSync","function",1,t);var e={next:t};return this.onSnapshotsInSyncInternal(e)},id.prototype.onSnapshotsInSyncInternal=function(t){var e=this,n=new rp({next:function(){t.next&&t.next()},error:function(t){throw Br("Uncaught Error in onSnapshotsInSync")}});return this._firestoreClient.addSnapshotsInSyncListener(n),function(){n.mute(),e._firestoreClient.removeSnapshotsInSyncListener(n)}},id.prototype.ensureClientConfigured=function(){return this._firestoreClient||this.configureClient(new tp),this._firestoreClient},id.prototype.makeDatabaseInfo=function(){return new Ri(this._databaseId,this._persistenceKey,this._settings.host,this._settings.ssl,this._settings.forceLongPolling)},id.prototype.configureClient=function(t){Ur(!!this._settings.host,"FirestoreSettings.host is not set"),Ur(!this._firestoreClient,"configureClient() called multiple times");var e=this.makeDatabaseInfo();return this._firestoreClient=new ep(Kr.getPlatform(),e,this._credentials,this._queue),this._firestoreClient.start(t)},id.prototype.createDataConverter=function(r){return new zp(function(t){if(t instanceof cd){var e=r,n=t.firestore._databaseId;if(!n.isEqual(e))throw new zr(Wr.INVALID_ARGUMENT,"Document reference is for database "+n.projectId+"/"+n.database+" but should be for database "+e.projectId+"/"+e.database);return new Wp(r,t._key)}return t})},id.databaseIdFromApp=function(t){var e=t.options;if(!Xr(e,"projectId"))throw new zr(Wr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');var n=e.projectId;if(!n||"string"!=typeof n)throw new zr(Wr.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options");return new _i(n)},Object.defineProperty(id.prototype,"app",{get:function(){if(!this._firebaseApp)throw new zr(Wr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._firebaseApp},enumerable:!0,configurable:!0}),id.prototype.collection=function(t){return ni("Firestore.collection",arguments,1),oi("Firestore.collection","non-empty string",1,t),this.ensureClientConfigured(),new Ed(Bi.fromString(t),this)},id.prototype.doc=function(t){return ni("Firestore.doc",arguments,1),oi("Firestore.doc","non-empty string",1,t),this.ensureClientConfigured(),cd.forPath(Bi.fromString(t),this)},id.prototype.collectionGroup=function(t){if(ni("Firestore.collectionGroup",arguments,1),oi("Firestore.collectionGroup","non-empty string",1,t),0<=t.indexOf("/"))throw new zr(Wr.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");return this.ensureClientConfigured(),new vd(new Kc(Bi.EMPTY_PATH,t),this)},id.prototype.runTransaction=function(e){var n=this;return ni("Firestore.runTransaction",arguments,1),oi("Firestore.runTransaction","function",1,e),this.ensureClientConfigured().transaction(function(t){return e(new od(n,t))})},id.prototype.batch=function(){return this.ensureClientConfigured(),new sd(this)},Object.defineProperty(id,"logLevel",{get:function(){switch(Pr()){case Cr.DEBUG:return"debug";case Cr.ERROR:return"error";case Cr.SILENT:return"silent";default:return Br("Unknown log level: "+Pr())}},enumerable:!0,configurable:!0}),id.setLogLevel=function(t){switch(ni("Firestore.setLogLevel",arguments,1),oi("Firestore.setLogLevel","non-empty string",1,t),t){case"debug":xr(Cr.DEBUG);break;case"error":xr(Cr.ERROR);break;case"silent":xr(Cr.SILENT);break;default:throw new zr(Wr.INVALID_ARGUMENT,"Invalid log level: "+t)}},id.prototype._areTimestampsInSnapshotsEnabled=function(){return this._settings.timestampsInSnapshots},id);function id(t,e){var n=this;if(this._firebaseApp=null,this._queue=new $i,this.INTERNAL={delete:function(){return p(n,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return this.ensureClientConfigured(),[4,this._firestoreClient.terminate()];case 1:return t.sent(),[2]}})})}},"object"==typeof t.options){var r=t;this._firebaseApp=r,this._databaseId=id.databaseIdFromApp(r),this._persistenceKey=r.name,this._credentials=new lp(e)}else{var i=t;if(!i.projectId)throw new zr(Wr.INVALID_ARGUMENT,"Must provide projectId");this._databaseId=new _i(i.projectId,i.database),this._persistenceKey="[DEFAULT]",this._credentials=new cp}this._settings=new ed({}),this._dataConverter=this.createDataConverter(this._databaseId)}var od=(ad.prototype.get=function(t){var n=this;ni("Transaction.get",arguments,1);var r=Ad("Transaction.get",t,this._firestore);return this._transaction.lookup([r._key]).then(function(t){if(!t||1!==t.length)return Br("Mismatch in docs returned from document lookup.");var e=t[0];if(e instanceof Gs)return new pd(n._firestore,r._key,null,!1,!1,r._converter);if(e instanceof Ks)return new pd(n._firestore,r._key,e,!1,!1,r._converter);throw Br("BatchGetDocumentsRequest returned unexpected document type: "+e.constructor.name)})},ad.prototype.set=function(t,e,n){ii("Transaction.set",arguments,2,3);var r=Ad("Transaction.set",t,this._firestore);n=Cd("Transaction.set",n);var i=kd(r._converter,e,"Transaction.set"),o=i[0],a=i[1],s=n.merge||n.mergeFields?this._firestore._dataConverter.parseMergeData(a,o,n.mergeFields):this._firestore._dataConverter.parseSetData(a,o);return this._transaction.set(r._key,s),this},ad.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a];return i="string"==typeof e||e instanceof op?(ri("Transaction.update",arguments,3),r=Ad("Transaction.update",t,this._firestore),this._firestore._dataConverter.parseUpdateVarargs("Transaction.update",e,n,o)):(ni("Transaction.update",arguments,2),r=Ad("Transaction.update",t,this._firestore),this._firestore._dataConverter.parseUpdateData("Transaction.update",e)),this._transaction.update(r._key,i),this},ad.prototype.delete=function(t){ni("Transaction.delete",arguments,1);var e=Ad("Transaction.delete",t,this._firestore);return this._transaction.delete(e._key),this},ad);function ad(t,e){this._firestore=t,this._transaction=e}var sd=(ud.prototype.set=function(t,e,n){ii("WriteBatch.set",arguments,2,3),this.verifyNotCommitted();var r=Ad("WriteBatch.set",t,this._firestore);n=Cd("WriteBatch.set",n);var i=kd(r._converter,e,"WriteBatch.set"),o=i[0],a=i[1],s=n.merge||n.mergeFields?this._firestore._dataConverter.parseMergeData(a,o,n.mergeFields):this._firestore._dataConverter.parseSetData(a,o);return this._mutations=this._mutations.concat(s.toMutations(r._key,Da.NONE)),this},ud.prototype.update=function(t,e,n){for(var r,i,o=[],a=3;a<arguments.length;a++)o[a-3]=arguments[a];return this.verifyNotCommitted(),i="string"==typeof e||e instanceof op?(ri("WriteBatch.update",arguments,3),r=Ad("WriteBatch.update",t,this._firestore),this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update",e,n,o)):(ni("WriteBatch.update",arguments,2),r=Ad("WriteBatch.update",t,this._firestore),this._firestore._dataConverter.parseUpdateData("WriteBatch.update",e)),this._mutations=this._mutations.concat(i.toMutations(r._key,Da.exists(!0))),this},ud.prototype.delete=function(t){ni("WriteBatch.delete",arguments,1),this.verifyNotCommitted();var e=Ad("WriteBatch.delete",t,this._firestore);return this._mutations=this._mutations.concat(new Ba(e._key,Da.NONE)),this},ud.prototype.commit=function(){return p(this,void 0,void 0,function(){return m(this,function(t){return this.verifyNotCommitted(),this._committed=!0,0<this._mutations.length?[2,this._firestore.ensureClientConfigured().write(this._mutations)]:[2]})})},ud.prototype.verifyNotCommitted=function(){if(this._committed)throw new zr(Wr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},ud);function ud(t){this._firestore=t,this._mutations=[],this._committed=!1}var cd=(hd.forPath=function(t,e,n){if(t.length%2!=0)throw new zr(Wr.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+t.canonicalString()+" has "+t.length);return new hd(new Wi(t),e,n)},Object.defineProperty(hd.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(hd.prototype,"parent",{get:function(){return new Ed(this._key.path.popLast(),this.firestore,this._converter)},enumerable:!0,configurable:!0}),Object.defineProperty(hd.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!0,configurable:!0}),hd.prototype.collection=function(t){if(ni("DocumentReference.collection",arguments,1),oi("DocumentReference.collection","non-empty string",1,t),!t)throw new zr(Wr.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()");var e=Bi.fromString(t);return new Ed(this._key.path.child(e),this.firestore)},hd.prototype.isEqual=function(t){if(!(t instanceof hd))throw yi("isEqual","DocumentReference",1,t);return this.firestore===t.firestore&&this._key.isEqual(t._key)&&this._converter===t._converter},hd.prototype.set=function(t,e){ii("DocumentReference.set",arguments,1,2),e=Cd("DocumentReference.set",e);var n=kd(this._converter,t,"DocumentReference.set"),r=n[0],i=n[1],o=e.merge||e.mergeFields?this.firestore._dataConverter.parseMergeData(i,r,e.mergeFields):this.firestore._dataConverter.parseSetData(i,r);return this._firestoreClient.write(o.toMutations(this._key,Da.NONE))},hd.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return n="string"==typeof t||t instanceof op?(ri("DocumentReference.update",arguments,2),this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update",t,e,r)):(ni("DocumentReference.update",arguments,1),this.firestore._dataConverter.parseUpdateData("DocumentReference.update",t)),this._firestoreClient.write(n.toMutations(this._key,Da.exists(!0)))},hd.prototype.delete=function(){return ni("DocumentReference.delete",arguments,0),this._firestoreClient.write([new Ba(this._key,Da.NONE)])},hd.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];ii("DocumentReference.onSnapshot",arguments,1,4);var n,r={includeMetadataChanges:!1},i=0;"object"!=typeof t[i]||gp(t[i])||(mi("DocumentReference.onSnapshot",r=t[i],["includeMetadataChanges"]),ui("DocumentReference.onSnapshot","boolean","includeMetadataChanges",r.includeMetadataChanges),i++);var o={includeMetadataChanges:r.includeMetadataChanges};return n=gp(t[i])?t[i]:(oi("DocumentReference.onSnapshot","function",i,t[i]),ai("DocumentReference.onSnapshot","function",i+1,t[i+1]),ai("DocumentReference.onSnapshot","function",i+2,t[i+2]),{next:t[i],error:t[i+1],complete:t[i+2]}),this.onSnapshotInternal(o,n)},hd.prototype.onSnapshotInternal=function(t,n){var r=this,e=function(t){console.error("Uncaught Error in onSnapshot:",t)};n.error&&(e=n.error.bind(n));var i=new rp({next:function(t){if(n.next){Ur(t.docs.size<=1,"Too many documents returned on a document query");var e=t.docs.get(r._key);n.next(new pd(r.firestore,r._key,e,t.fromCache,t.hasPendingWrites,r._converter))}},error:e}),o=this._firestoreClient.listen(Kc.atPath(this._key.path),i,t);return function(){i.mute(),r._firestoreClient.unlisten(o)}},hd.prototype.get=function(n){var r=this;return ii("DocumentReference.get",arguments,0,1),Nd("DocumentReference.get",n),new Promise(function(e,t){n&&"cache"===n.source?r.firestore.ensureClientConfigured().getDocumentFromLocalCache(r._key).then(function(t){e(new pd(r.firestore,r._key,t,!0,t instanceof Ks&&t.hasLocalMutations,r._converter))},t):r.getViaSnapshotListener(e,t,n)})},hd.prototype.getViaSnapshotListener=function(e,n,r){var i=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(t){i(),!t.exists&&t.metadata.fromCache?n(new zr(Wr.UNAVAILABLE,"Failed to get document because the client is offline.")):t.exists&&t.metadata.fromCache&&r&&"server"===r.source?n(new zr(Wr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):e(t)},error:n})},hd.prototype.withConverter=function(t){return new hd(this._key,this.firestore,t)},hd);function hd(t,e,n){this._key=t,this.firestore=e,this._converter=n,this._firestoreClient=this.firestore.ensureClientConfigured()}var ld=(fd.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},fd);function fd(t,e){this.hasPendingWrites=t,this.fromCache=e}var pd=(dd.prototype.data=function(t){if(ii("DocumentSnapshot.data",arguments,0,1),t=Dd("DocumentSnapshot.data",t),this._document){if(this._converter){var e=new yd(this._firestore,this._key,this._document,this._fromCache,this._hasPendingWrites);return this._converter.fromFirestore(e,t)}return this.toJSObject(this._document.data(),Ya.fromSnapshotOptions(t,this._firestore._areTimestampsInSnapshotsEnabled()))}},dd.prototype.get=function(t,e){if(ii("DocumentSnapshot.get",arguments,1,2),e=Dd("DocumentSnapshot.get",e),this._document){var n=this._document.data().field(Jp("DocumentSnapshot.get",t));if(null!==n)return this.toJSValue(n,Ya.fromSnapshotOptions(e,this._firestore._areTimestampsInSnapshotsEnabled()))}},Object.defineProperty(dd.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(dd.prototype,"ref",{get:function(){return new cd(this._key,this._firestore,this._converter)},enumerable:!0,configurable:!0}),Object.defineProperty(dd.prototype,"exists",{get:function(){return null!==this._document},enumerable:!0,configurable:!0}),Object.defineProperty(dd.prototype,"metadata",{get:function(){return new ld(this._hasPendingWrites,this._fromCache)},enumerable:!0,configurable:!0}),dd.prototype.isEqual=function(t){if(!(t instanceof dd))throw yi("isEqual","DocumentSnapshot",1,t);return this._firestore===t._firestore&&this._fromCache===t._fromCache&&this._key.isEqual(t._key)&&(null===this._document?null===t._document:this._document.isEqual(t._document))&&this._converter===t._converter},dd.prototype.toJSObject=function(t,n){var r=this,i={};return t.forEach(function(t,e){i[t]=r.toJSValue(e,n)}),i},dd.prototype.toJSValue=function(t,e){if(t instanceof Os)return this.toJSObject(t,e);if(t instanceof Fs)return this.toJSArray(t,e);if(t instanceof As){var n=t.value(e),r=this._firestore.ensureClientConfigured().databaseId();return t.databaseId.isEqual(r)||qr("Document "+this._key.path+" contains a document reference within a different database ("+t.databaseId.projectId+"/"+t.databaseId.database+") which is not supported. It will be treated as a reference in the current database ("+r.projectId+"/"+r.database+") instead."),new cd(n,this._firestore,this._converter)}return t.value(e)},dd.prototype.toJSArray=function(t,e){var n=this;return t.internalValue.map(function(t){return n.toJSValue(t,e)})},dd);function dd(t,e,n,r,i,o){this._firestore=t,this._key=e,this._document=n,this._fromCache=r,this._hasPendingWrites=i,this._converter=o}var md,yd=(t(gd,md=pd),gd.prototype.data=function(t){var e=md.prototype.data.call(this,t);return Ur(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e},gd);function gd(){return null!==md&&md.apply(this,arguments)||this}var vd=(bd.prototype.where=function(t,e,n){var r;ni("Query.where",arguments,3),di("Query.where",3,n),function(t,e,n,r){if(!e.some(function(t){return t===r}))throw new zr(Wr.INVALID_ARGUMENT,"Invalid value "+pi(r)+" provided to function "+t+"() for its "+vi(n)+" argument. Acceptable values: "+e.join(", "))}("Query.where",["<","<=","==",">=",">","array-contains","in","array-contains-any"],2,e);var i=Jp("Query.where",t),o=Gc.fromString(e);if(i.isKeyField()){if(o===Gc.ARRAY_CONTAINS||o===Gc.ARRAY_CONTAINS_ANY)throw new zr(Wr.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+o.toString()+"' queries on FieldPath.documentId().");if(o===Gc.IN){this.validateDisjunctiveFilterElements(n,o);for(var a=[],s=0,u=n;s<u.length;s++){var c=u[s];a.push(this.parseDocumentIdValue(c))}r=new Fs(a)}else r=this.parseDocumentIdValue(n)}else o!==Gc.IN&&o!==Gc.ARRAY_CONTAINS_ANY||this.validateDisjunctiveFilterElements(n,o),r=this.firestore._dataConverter.parseQueryValue("Query.where",n,o===Gc.IN);var h=Hc.create(i,o,r);return this.validateNewFilter(h),new bd(this._query.addFilter(h),this.firestore,this._converter)},bd.prototype.orderBy=function(t,e){var n;if(ii("Query.orderBy",arguments,1,2),ai("Query.orderBy","non-empty string",2,e),void 0===e||"asc"===e)n=lh.ASCENDING;else{if("desc"!==e)throw new zr(Wr.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+e+"', expected 'asc' or 'desc'.");n=lh.DESCENDING}if(null!==this._query.startAt)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");if(null!==this._query.endAt)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");var r=Jp("Query.orderBy",t),i=new mh(r,n);return this.validateNewOrderBy(i),new bd(this._query.addOrderBy(i),this.firestore,this._converter)},bd.prototype.limit=function(t){return ni("Query.limit",arguments,1),oi("Query.limit","number",1,t),gi("Query.limit",1,t),new bd(this._query.withLimitToFirst(t),this.firestore,this._converter)},bd.prototype.limitToLast=function(t){return ni("Query.limitToLast",arguments,1),oi("Query.limitToLast","number",1,t),gi("Query.limitToLast",1,t),new bd(this._query.withLimitToLast(t),this.firestore,this._converter)},bd.prototype.startAt=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ri("Query.startAt",arguments,1);var r=this.boundFromDocOrFields("Query.startAt",t,e,!0);return new bd(this._query.withStartAt(r),this.firestore,this._converter)},bd.prototype.startAfter=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ri("Query.startAfter",arguments,1);var r=this.boundFromDocOrFields("Query.startAfter",t,e,!1);return new bd(this._query.withStartAt(r),this.firestore,this._converter)},bd.prototype.endBefore=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ri("Query.endBefore",arguments,1);var r=this.boundFromDocOrFields("Query.endBefore",t,e,!0);return new bd(this._query.withEndAt(r),this.firestore,this._converter)},bd.prototype.endAt=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ri("Query.endAt",arguments,1);var r=this.boundFromDocOrFields("Query.endAt",t,e,!1);return new bd(this._query.withEndAt(r),this.firestore,this._converter)},bd.prototype.isEqual=function(t){if(!(t instanceof bd))throw yi("isEqual","Query",1,t);return this.firestore===t.firestore&&this._query.isEqual(t._query)},bd.prototype.withConverter=function(t){return new bd(this._query,this.firestore,t)},bd.prototype.boundFromDocOrFields=function(t,e,n,r){if(di(t,1,e),e instanceof pd){if(0<n.length)throw new zr(Wr.INVALID_ARGUMENT,"Too many arguments provided to "+t+"().");var i=e;if(!i.exists)throw new zr(Wr.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+t+"().");return this.boundFromDocument(t,i._document,r)}var o=[e].concat(n);return this.boundFromFields(t,o,r)},bd.prototype.boundFromDocument=function(t,e,n){for(var r=[],i=0,o=this._query.orderBy;i<o.length;i++){var a=o[i];if(a.field.isKeyField())r.push(new As(this.firestore._databaseId,e.key));else{var s=e.field(a.field);if(s instanceof Ss)throw new zr(Wr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===s){var u=a.field.canonicalString();throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+u+"' (used as the orderBy) does not exist.")}r.push(s)}}return new ph(r,n)},bd.prototype.boundFromFields=function(t,e,n){var r=this._query.explicitOrderBy;if(e.length>r.length)throw new zr(Wr.INVALID_ARGUMENT,"Too many arguments provided to "+t+"(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");for(var i=[],o=0;o<e.length;o++){var a=e[o];if(r[o].field.isKeyField()){if("string"!=typeof a)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+t+"(), but got a "+typeof a);if(!this._query.isCollectionGroupQuery()&&-1!==a.indexOf("/"))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+t+"() must be a plain document ID, but '"+a+"' contains a slash.");var s=this._query.path.child(Bi.fromString(a));if(!Wi.isDocumentKey(s))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+t+"() must result in a valid document path, but '"+s+"' is not because it contains an odd number of segments.");var u=new Wi(s);i.push(new As(this.firestore._databaseId,u))}else{var c=this.firestore._dataConverter.parseQueryValue(t,a);i.push(c)}}return new ph(i,n)},bd.prototype.onSnapshot=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];ii("Query.onSnapshot",arguments,1,4);var n,r={},i=0;return"object"!=typeof t[i]||gp(t[i])||(mi("Query.onSnapshot",r=t[i],["includeMetadataChanges"]),ui("Query.onSnapshot","boolean","includeMetadataChanges",r.includeMetadataChanges),i++),n=gp(t[i])?t[i]:(oi("Query.onSnapshot","function",i,t[i]),ai("Query.onSnapshot","function",i+1,t[i+1]),ai("Query.onSnapshot","function",i+2,t[i+2]),{next:t[i],error:t[i+1],complete:t[i+2]}),this.validateHasExplicitOrderByForLimitToLast(this._query),this.onSnapshotInternal(r,n)},bd.prototype.onSnapshotInternal=function(t,e){var n=this,r=function(t){console.error("Uncaught Error in onSnapshot:",t)};e.error&&(r=e.error.bind(e));var i=new rp({next:function(t){e.next&&e.next(new wd(n.firestore,n._query,t,n._converter))},error:r}),o=this.firestore.ensureClientConfigured(),a=o.listen(this._query,i,t);return function(){i.mute(),o.unlisten(a)}},bd.prototype.validateHasExplicitOrderByForLimitToLast=function(t){if(t.hasLimitToLast()&&0===t.explicitOrderBy.length)throw new zr(Wr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")},bd.prototype.get=function(n){var r=this;return ii("Query.get",arguments,0,1),Nd("Query.get",n),this.validateHasExplicitOrderByForLimitToLast(this._query),new Promise(function(e,t){n&&"cache"===n.source?r.firestore.ensureClientConfigured().getDocumentsFromLocalCache(r._query).then(function(t){e(new wd(r.firestore,r._query,t,r._converter))},t):r.getViaSnapshotListener(e,t,n)})},bd.prototype.getViaSnapshotListener=function(e,n,r){var i=this.onSnapshotInternal({includeMetadataChanges:!0,waitForSyncWhenOnline:!0},{next:function(t){i(),t.metadata.fromCache&&r&&"server"===r.source?n(new zr(Wr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e(t)},error:n})},bd.prototype.parseDocumentIdValue=function(t){if("string"==typeof t){if(""===t)throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!this._query.isCollectionGroupQuery()&&-1!==t.indexOf("/"))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+t+"' contains a '/' character.");var e=this._query.path.child(Bi.fromString(t));if(!Wi.isDocumentKey(e))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+e+"' is not because it has an odd number of segments ("+e.length+").");return new As(this.firestore._databaseId,new Wi(e))}if(t instanceof cd){var n=t;return new As(this.firestore._databaseId,n._key)}throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+pi(t)+".")},bd.prototype.validateDisjunctiveFilterElements=function(t,e){if(!Array.isArray(t)||0===t.length)throw new zr(Wr.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.");if(10<t.length)throw new zr(Wr.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.");if(0<=t.indexOf(null))throw new zr(Wr.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.");if(0<t.filter(function(t){return Number.isNaN(t)}).length)throw new zr(Wr.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")},bd.prototype.validateNewFilter=function(t){if(t instanceof Hc){var e=[Gc.ARRAY_CONTAINS,Gc.ARRAY_CONTAINS_ANY],n=[Gc.IN,Gc.ARRAY_CONTAINS_ANY],r=0<=e.indexOf(t.op),i=0<=n.indexOf(t.op);if(t.isInequality()){var o=this._query.getInequalityFilterField();if(null!==o&&!o.isEqual(t.field))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+o.toString()+"' and '"+t.field.toString()+"'");var a=this._query.getFirstOrderByField();null!==a&&this.validateOrderByAndInequalityMatch(t.field,a)}else if(i||r){var s=null;if(i&&(s=this._query.findFilterOperator(n)),null===s&&r&&(s=this._query.findFilterOperator(e)),null!=s)throw s===t.op?new zr(Wr.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+t.op.toString()+"' filter."):new zr(Wr.INVALID_ARGUMENT,"Invalid query. You cannot use '"+t.op.toString()+"' filters with '"+s.toString()+"' filters.")}}},bd.prototype.validateNewOrderBy=function(t){if(null===this._query.getFirstOrderByField()){var e=this._query.getInequalityFilterField();null!==e&&this.validateOrderByAndInequalityMatch(e,t.field)}},bd.prototype.validateOrderByAndInequalityMatch=function(t,e){if(!e.isEqual(t))throw new zr(Wr.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+t.toString()+"' and so you must also use '"+t.toString()+"' as your first Query.orderBy(), but your first Query.orderBy() is on field '"+e.toString()+"' instead.")},bd);function bd(t,e,n){this._query=t,this.firestore=e,this._converter=n}var wd=(Object.defineProperty(Td.prototype,"docs",{get:function(){var e=[];return this.forEach(function(t){return e.push(t)}),e},enumerable:!0,configurable:!0}),Object.defineProperty(Td.prototype,"empty",{get:function(){return this._snapshot.docs.isEmpty()},enumerable:!0,configurable:!0}),Object.defineProperty(Td.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!0,configurable:!0}),Td.prototype.forEach=function(e,n){var r=this;ii("QuerySnapshot.forEach",arguments,1,2),oi("QuerySnapshot.forEach","function",1,e),this._snapshot.docs.forEach(function(t){e.call(n,r.convertToDocumentImpl(t))})},Object.defineProperty(Td.prototype,"query",{get:function(){return new vd(this._originalQuery,this._firestore,this._converter)},enumerable:!0,configurable:!0}),Td.prototype.docChanges=function(t){t&&(mi("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),ui("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges));var e=!(!t||!t.includeMetadataChanges);if(e&&this._snapshot.excludesMetadataChanges)throw new zr(Wr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,e,o,a){if(o.oldDocs.isEmpty()){var n,r=0;return o.docChanges.map(function(t){var e=new yd(i,t.doc.key,t.doc,o.fromCache,o.mutatedKeys.has(t.doc.key),a);return Ur(t.type===ll.Added,"Invalid event type for first snapshot"),Ur(!n||o.query.docComparator(n,t.doc)<0,"Got added events in wrong order"),n=t.doc,{type:"added",doc:e,oldIndex:-1,newIndex:r++}})}var s=o.oldDocs;return o.docChanges.filter(function(t){return e||t.type!==ll.Metadata}).map(function(t){var e=new yd(i,t.doc.key,t.doc,o.fromCache,o.mutatedKeys.has(t.doc.key),a),n=-1,r=-1;return t.type!==ll.Added&&(Ur(0<=(n=s.indexOf(t.doc.key)),"Index for document not found"),s=s.delete(t.doc.key)),t.type!==ll.Removed&&(r=(s=s.add(t.doc)).indexOf(t.doc.key)),{type:function(t){switch(t){case ll.Added:return"added";case ll.Modified:case ll.Metadata:return"modified";case ll.Removed:return"removed";default:return Br("Unknown change type: "+t)}}(t.type),doc:e,oldIndex:n,newIndex:r}})}(this._firestore,e,this._snapshot,this._converter),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges},Td.prototype.isEqual=function(t){if(!(t instanceof Td))throw yi("isEqual","QuerySnapshot",1,t);return this._firestore===t._firestore&&this._originalQuery.isEqual(t._originalQuery)&&this._snapshot.isEqual(t._snapshot)&&this._converter===t._converter},Td.prototype.convertToDocumentImpl=function(t){return new yd(this._firestore,t.key,t,this.metadata.fromCache,this._snapshot.mutatedKeys.has(t.key),this._converter)},Td);function Td(t,e,n,r){this._firestore=t,this._originalQuery=e,this._snapshot=n,this._converter=r,this._cachedChanges=null,this._cachedChangesIncludeMetadataChanges=null,this.metadata=new ld(n.hasPendingWrites,n.fromCache)}a(["length","forEach","map"],"undefined"!=typeof Symbol?[Symbol.iterator]:[]).forEach(function(t){try{Object.defineProperty(wd.prototype.docChanges,t,{get:function(){return function(){throw new zr(Wr.INVALID_ARGUMENT,'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')}()}})}catch(t){}});var Sd,Ed=(t(Id,Sd=vd),Object.defineProperty(Id.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!0,configurable:!0}),Object.defineProperty(Id.prototype,"parent",{get:function(){var t=this._query.path.popLast();return t.isEmpty()?null:new cd(new Wi(t),this.firestore)},enumerable:!0,configurable:!0}),Object.defineProperty(Id.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!0,configurable:!0}),Id.prototype.doc=function(t){if(ii("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=wi.newId()),oi("CollectionReference.doc","non-empty string",1,t),""===t)throw new zr(Wr.INVALID_ARGUMENT,"Document path must be a non-empty string");var e=Bi.fromString(t);return cd.forPath(this._query.path.child(e),this.firestore,this._converter)},Id.prototype.add=function(t){ni("CollectionReference.add",arguments,1),oi("CollectionReference.add","object",1,this._converter?this._converter.toFirestore(t):t);var e=this.doc();return e.set(t).then(function(){return e})},Id.prototype.withConverter=function(t){return new Id(this._path,this.firestore,t)},Id);function Id(t,e,n){var r=Sd.call(this,Kc.atPath(t),e,n)||this;if((r._path=t).length%2!=1)throw new zr(Wr.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+t.canonicalString()+" has "+t.length);return r}function Cd(t,e){if(void 0===e)return{merge:!1};if(mi(t,e,["merge","mergeFields"]),ui(t,"boolean","merge",e.merge),ci(t,"mergeFields","a string or a FieldPath",e.mergeFields,function(t){return"string"==typeof t||t instanceof op}),void 0!==e.mergeFields&&void 0!==e.merge)throw new zr(Wr.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".');return e}function Dd(t,e){return void 0===e?{}:(mi(t,e,["serverTimestamps"]),hi(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function Nd(t,e){ai(t,"object",1,e),e&&(mi(t,e,["source"]),hi(t,0,"source",e.source,["default","server","cache"]))}function Ad(t,e,n){if(e instanceof cd){if(e.firestore!==n)throw new zr(Wr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}throw yi(t,"DocumentReference",1,e)}function kd(t,e,n){var r;return t?(r=t.toFirestore(e),n="toFirestore() in "+n):r=e,[r,n]}var Rd=Yr(rd,"Use firebase.firestore() instead."),Md=Yr(od,"Use firebase.firestore().runTransaction() instead."),_d=Yr(sd,"Use firebase.firestore().batch() instead."),Ld=Yr(cd,"Use firebase.firestore().doc() instead."),Od=Yr(pd),Pd=Yr(yd),xd=Yr(vd),Fd=Yr(wd),qd=Yr(Ed,"Use firebase.firestore().collection() instead."),Vd={Firestore:Rd,GeoPoint:Vl,Timestamp:co,Blob:ki,Transaction:Md,WriteBatch:_d,DocumentReference:Ld,DocumentSnapshot:Od,Query:xd,QueryDocumentSnapshot:Pd,QuerySnapshot:Fd,CollectionReference:qd,FieldPath:op,FieldValue:Pp,setLogLevel:rd.setLogLevel,CACHE_SIZE_UNLIMITED:td};function Bd(t){t.INTERNAL.registerComponent(new w("firestore",function(t){var e=t.getProvider("app").getImmediate();return new rd(e,t.getProvider("auth-internal"))},"PUBLIC").setServiceProps(function(t){Ur(t&&"object"==typeof t,"shallowCopy() expects object parameter.");var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}(Vd)))}var Ud=(Kd.prototype.addCallback=function(t){},Kd.prototype.shutdown=function(){},Kd);function Kd(){}var Qd="ConnectivityMonitor",jd=(Gd.prototype.addCallback=function(t){this.callbacks.push(t)},Gd.prototype.shutdown=function(){window.removeEventListener("online",this.networkAvailableListener),window.removeEventListener("offline",this.networkUnavailableListener)},Gd.prototype.configureNetworkMonitoring=function(){window.addEventListener("online",this.networkAvailableListener),window.addEventListener("offline",this.networkUnavailableListener)},Gd.prototype.onNetworkAvailable=function(){Fr(Qd,"Network connectivity changed: AVAILABLE");for(var t=0,e=this.callbacks;t<e.length;t++)(0,e[t])(0)},Gd.prototype.onNetworkUnavailable=function(){Fr(Qd,"Network connectivity changed: UNAVAILABLE");for(var t=0,e=this.callbacks;t<e.length;t++)(0,e[t])(1)},Gd.isAvailable=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},Gd);function Gd(){var t=this;this.networkAvailableListener=function(){return t.onNetworkAvailable()},this.networkUnavailableListener=function(){return t.onNetworkUnavailable()},this.callbacks=[],this.configureNetworkMonitoring()}var Wd=(zd.prototype.onOpen=function(t){Ur(!this.wrappedOnOpen,"Called onOpen on stream twice!"),this.wrappedOnOpen=t},zd.prototype.onClose=function(t){Ur(!this.wrappedOnClose,"Called onClose on stream twice!"),this.wrappedOnClose=t},zd.prototype.onMessage=function(t){Ur(!this.wrappedOnMessage,"Called onMessage on stream twice!"),this.wrappedOnMessage=t},zd.prototype.close=function(){this.closeFn()},zd.prototype.send=function(t){this.sendFn(t)},zd.prototype.callOnOpen=function(){Ur(void 0!==this.wrappedOnOpen,"Cannot call onOpen because no callback was set"),this.wrappedOnOpen()},zd.prototype.callOnClose=function(t){Ur(void 0!==this.wrappedOnClose,"Cannot call onClose because no callback was set"),this.wrappedOnClose(t)},zd.prototype.callOnMessage=function(t){Ur(void 0!==this.wrappedOnMessage,"Cannot call onMessage because no callback was set"),this.wrappedOnMessage(t)},zd);function zd(t){this.sendFn=t.sendFn,this.closeFn=t.closeFn}var Hd="Connection",Yd={BatchGetDocuments:"batchGet",Commit:"commit"},Xd="gl-js/ fire/"+Lr,Jd=(Zd.prototype.modifyHeadersForRequest=function(t,e){if(e)for(var n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n]);t["X-Goog-Api-Client"]=Xd},Zd.prototype.invokeRPC=function(s,r,u){var c=this,h=this.makeUrl(s);return new Promise(function(i,o){var a=new _r;a.listenOnce(Rr.COMPLETE,function(){try{switch(a.getLastErrorCode()){case kr.NO_ERROR:var t=a.getResponseJson();Fr(Hd,"XHR received:",JSON.stringify(t)),i(t);break;case kr.TIMEOUT:Fr(Hd,'RPC "'+s+'" timed out'),o(new zr(Wr.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:var e=a.getStatus();if(Fr(Hd,'RPC "'+s+'" failed with status:',e,"response text:",a.getResponseText()),0<e){var n=a.getResponseJson().error;if(n&&n.status&&n.message){var r=function(t){var e=t.toLowerCase().replace("_","-");return 0<=Object.values(Wr).indexOf(e)?e:Wr.UNKNOWN}(n.status);o(new zr(r,n.message))}else o(new zr(Wr.UNKNOWN,"Server responded with status "+a.getStatus()))}else Fr(Hd,'RPC "'+s+'" failed'),o(new zr(Wr.UNAVAILABLE,"Connection failed."));break;default:Br('RPC "'+s+'" failed with unanticipated webchannel error '+a.getLastErrorCode()+": "+a.getLastError()+", giving up.")}}finally{Fr(Hd,'RPC "'+s+'" completed.')}});var t=l({},r);delete t.database;var e=JSON.stringify(t);Fr(Hd,"XHR sending: ",h+" "+e);var n={"Content-Type":"text/plain"};c.modifyHeadersForRequest(n,u),a.send(h,"POST",e,n,15)})},Zd.prototype.invokeStreamingRPC=function(t,e,n){return this.invokeRPC(t,e,n)},Zd.prototype.openStream=function(t,e){var n=[this.baseUrl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ar(),i={backgroundChannelTest:!0,httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling};this.modifyHeadersForRequest(i.initMessageHeaders,e),"object"==typeof navigator&&"ReactNative"===navigator.product||0<=f().indexOf("Electron/")||function(){var t=f();return 0<=t.indexOf("MSIE ")||0<=t.indexOf("Trident/")}()||0<=f().indexOf("MSAppHost/")||function(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(i.httpHeadersOverwriteParam="$httpHeaders");var o=n.join("");function a(t,e){u.listen(t,function(t){try{e(t)}catch(t){setTimeout(function(){throw t},0)}})}Fr(Hd,"Creating WebChannel: "+o+" "+i);var u=r.createWebChannel(o,i),s=!1,c=!1,h=new Wd({sendFn:function(t){c?Fr(Hd,"Not sending because WebChannel is closed:",t):(s||(Fr(Hd,"Opening WebChannel transport."),u.open(),s=!0),Fr(Hd,"WebChannel sending:",t),u.send(t))},closeFn:function(){return u.close()}});return a(Mr.EventType.OPEN,function(){c||Fr(Hd,"WebChannel transport opened.")}),a(Mr.EventType.CLOSE,function(){c||(c=!0,Fr(Hd,"WebChannel transport closed"),h.callOnClose())}),a(Mr.EventType.ERROR,function(t){c||(c=!0,Fr(Hd,"WebChannel transport errored:",t),h.callOnClose(new zr(Wr.UNAVAILABLE,"The operation could not be completed")))}),a(Mr.EventType.MESSAGE,function(t){var e;if(!c){var n=t.data[0];Ur(!!n,"Got a webchannel message without data.");var r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Fr(Hd,"WebChannel received error:",i);var o=i.status,a=function(t){var e=ol[t];if(void 0!==e)return hl(e)}(o),s=i.message;void 0===a&&(a=Wr.INTERNAL,s="Unknown error status: "+o+" with message "+i.message),c=!0,h.callOnClose(new zr(a,s)),u.close()}else Fr(Hd,"WebChannel received:",n),h.callOnMessage(n)}}),setTimeout(function(){h.callOnOpen()},0),h},Zd.prototype.makeUrl=function(t){var e=Yd[t];return Ur(void 0!==e,"Unknown REST mapping for: "+t),this.baseUrl+"/v1/projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents:"+e},Zd);function Zd(t){this.databaseId=t.databaseId;var e=t.ssl?"https":"http";this.baseUrl=e+"://"+t.host,this.forceLongPolling=t.forceLongPolling}var $d=(Object.defineProperty(tm.prototype,"document",{get:function(){return"undefined"!=typeof document?document:null},enumerable:!0,configurable:!0}),Object.defineProperty(tm.prototype,"window",{get:function(){return"undefined"!=typeof window?window:null},enumerable:!0,configurable:!0}),tm.prototype.loadConnection=function(t){return Promise.resolve(new Jd(t))},tm.prototype.newConnectivityMonitor=function(){return jd.isAvailable()?new jd:new Ud},tm.prototype.newSerializer=function(t){return new af(t,{useProto3Json:!0})},tm.prototype.formatJSON=function(t){return JSON.stringify(t)},tm.prototype.atob=function(t){return atob(t)},tm.prototype.btoa=function(t){return btoa(t)},tm);function tm(){this.emptyByteString="",this.base64Available="undefined"!=typeof atob}Kr.setPlatform(new $d);var em;Bd(em=nm),em.registerVersion("@firebase/firestore","1.10.2")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.")}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(wt){"use strict";try{(function(){wt=wt&&wt.hasOwnProperty("default")?wt.default:wt;var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function e(r,n){var o,i,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function d(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var t,n,o,h=(o=Error,r(t=a,n=o),void(t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)),a);function i(){this.constructor=t}function a(e,t){var r=o.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,s.prototype.create),r}var s=(u.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?function(e,n){return e.replace(f,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})}(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new h(o,s),c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];"_"!==p.slice(-1)&&(p in u&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),u[p]=n[p])}return u},u);function u(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var f=/\{\$([^}]+)}/g,c=(l.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},l.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},l.prototype.setServiceProps=function(e){return this.serviceProps=e,this},l);function l(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var p="firebasestorage.googleapis.com",_="storageBucket",m=(v.prototype.codeProp=function(){return this.code},v.prototype.codeEquals=function(e){return g(e)===this.codeProp()},v.prototype.serverResponseProp=function(){return this.serverResponse_},v.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(v.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(v.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),v);function v(e,t){this.code_=g(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}var b={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function g(e){return"storage/"+e}function y(){return new m(b.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function w(){return new m(b.CANCELED,"User canceled the upload/download.")}function R(){return new m(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function T(e,t,r){return new m(b.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function E(){return new m(b.APP_DELETED,"The Firebase app was deleted.")}function k(e,t){return new m(b.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function O(e){throw new m(b.INTERNAL_ERROR,"Internal error: "+e)}var U={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function A(e){switch(e){case U.RAW:case U.BASE64:case U.BASE64URL:case U.DATA_URL:return;default:throw"Expected one of the event types: ["+U.RAW+", "+U.BASE64+", "+U.BASE64URL+", "+U.DATA_URL+"]."}}var x=function(e,t){this.data=e,this.contentType=t||null};function P(e,t){switch(e){case U.RAW:return new x(S(t));case U.BASE64:case U.BASE64URL:return new x(C(e,t));case U.DATA_URL:return new x(function(e){var t=new N(e);return t.base64?C(U.BASE64,t.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw k(U.DATA_URL,"Malformed data URL.")}return S(t)}(t.rest)}(t),function(e){return new N(e).contentType}(t))}throw y()}function S(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function C(t,e){switch(t){case U.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n)throw k(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case U.BASE64URL:var o=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(o||i)throw k(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(e)}catch(e){throw k(t,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var N=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw k(U.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=function(e,t){return e.length>=t.length&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)};var I,L,D={STATE_CHANGED:"state_changed"},M="running",W="pausing",B="paused",j="success",q="canceling",F="canceled",H="error",z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function G(e){switch(e){case M:case W:case q:return z.RUNNING;case B:return z.PAUSED;case j:return z.SUCCESS;case F:return z.CANCELED;case H:default:return z.ERROR}}function X(e){return null!=e}function V(e){return void 0!==e}function K(e){return"function"==typeof e}function Z(e){return"object"==typeof e}function J(e){return"string"==typeof e||e instanceof String}function $(e){return"number"==typeof e||e instanceof Number}function Q(e){return Y()&&e instanceof Blob}function Y(){return"undefined"!=typeof Blob}(L=I=I||{})[L.NO_ERROR=0]="NO_ERROR",L[L.NETWORK_ERROR=1]="NETWORK_ERROR",L[L.ABORT=2]="ABORT";var ee=(te.prototype.send=function(e,t,r,n){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),X(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return X(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},te.prototype.getErrorCode=function(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_},te.prototype.getStatus=function(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},te.prototype.getResponseText=function(){if(!this.sent_)throw O("cannot .getResponseText() before sending");return this.xhr_.responseText},te.prototype.abort=function(){this.xhr_.abort()},te.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},te.prototype.addUploadProgressListener=function(e){X(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},te.prototype.removeUploadProgressListener=function(e){X(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},te);function te(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=I.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=I.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}var re=(ne.prototype.createXhrIo=function(){return new ee},ne);function ne(){}function oe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(Y())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}var ie=(ae.prototype.size=function(){return this.size_},ae.prototype.type=function(){return this.type_},ae.prototype.slice=function(e,t){if(Q(this.data_)){var r=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,e,t);return null===r?null:new ae(r)}return new ae(new Uint8Array(this.data_.buffer,e,t-e),!0)},ae.getBlob=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(Y()){var r=e.map(function(e){return e instanceof ae?e.data_:e});return new ae(oe.apply(null,r))}var n=e.map(function(e){return J(e)?P(U.RAW,e).data:e.data_}),o=0;n.forEach(function(e){o+=e.byteLength});var i=new Uint8Array(o),a=0;return n.forEach(function(e){for(var t=0;t<e.length;t++)i[a++]=e[t]}),new ae(i,!0)},ae.prototype.uploadData=function(){return this.data_},ae);function ae(e,t){var r=0,n="";Q(e)?(r=(this.data_=e).size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}var se=(Object.defineProperty(ue.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(ue.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),ue.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},ue.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},ue.makeFromBucketSpec=function(t){var e;try{e=ue.makeFromUrl(t)}catch(e){return new ue(t,"")}if(""===e.path)return e;throw function(e){return new m(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}(t)},ue.makeFromUrl=function(e){for(var t=null,r="([A-Za-z0-9.\\-_]+)",n=new RegExp("^gs://"+r+"(/(.*))?$","i"),o=p.replace(/[.]/g,"\\."),i=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+o+"/v[A-Za-z0-9_]+/b/"+r+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],a=0;a<i.length;a++){var s=i[a],u=s.regex.exec(e);if(u){var c=u[s.indices.bucket],l=u[s.indices.path];t=new ue(c,l=l||""),s.postModify(t);break}}if(null==t)throw function(e){return new m(b.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return t},ue);function ue(e,t){this.bucket=e,this.path_=t}function ce(e){var t;try{t=JSON.parse(e)}catch(e){return null}return function(e){return Z(e)&&!Array.isArray(e)}(t)?t:null}function le(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function pe(e){return"https://"+p+"/v0"+e}function he(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}function fe(e,t){return t}var de=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||fe},_e=null;function ve(){if(_e)return _e;var e=[];e.push(new de("bucket")),e.push(new de("generation")),e.push(new de("metageneration")),e.push(new de("name","fullPath",!0));var t=new de("name");t.xform=function(e,t){return function(e){return!J(e)||e.length<2?e:le(e)}(t)},e.push(t);var r=new de("size");return r.xform=function(e,t){return X(t)?Number(t):t},e.push(r),e.push(new de("timeCreated")),e.push(new de("updated")),e.push(new de("md5Hash",null,!0)),e.push(new de("cacheControl",null,!0)),e.push(new de("contentDisposition",null,!0)),e.push(new de("contentEncoding",null,!0)),e.push(new de("contentLanguage",null,!0)),e.push(new de("contentType",null,!0)),e.push(new de("metadata","customMetadata",!0)),_e=e}function me(n,o){Object.defineProperty(n,"ref",{get:function(){var e=n.bucket,t=n.fullPath,r=new se(e,t);return o.makeStorageReference(r)}})}function be(e,t,r){var n=ce(t);return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return me(n,e),n}(e,n,r)}function ge(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function ye(e){if(!Z(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!Z(r))throw"Expected object for 'customMetadata' mapping."}else if(Z(n=r)&&null!==n)throw"Mapping for '"+t+"' cannot be an object."}var n}var we="maxResults",Re=1e3,Te="pageToken",Ee="prefixes",ke="items";function Oe(e,t){var r={prefixes:[],items:[],nextPageToken:t.nextPageToken},n=e.bucket();if(null===n)throw new m(b.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_+"' property when initializing the app?");if(t[Ee])for(var o=0,i=t[Ee];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new se(n,a));r.prefixes.push(s)}if(t[ke])for(var u=0,c=t[ke];u<c.length;u++){var l=c[u];s=e.makeStorageReference(new se(n,l.name));r.items.push(s)}return r}function Ue(e){if(!Z(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===we){if(!$(r=e[we])||!Number.isInteger(r)||e[we]<=0)throw"Expected maxResults to be a positive number.";if(1e3<e[we])throw"Expected maxResults to be less than or equal to "+Re+"."}else{if(t!==Te)throw"Unknown option: "+t;if(e[Te]&&!J(e[Te]))throw"Expected pageToken to be string."}var r}var Ae=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function xe(e){if(!e)throw y()}function Pe(n,o){return function(e,t){var r=be(n,t,o);return xe(null!==r),r}}function Se(n){return function(e,t){var r=function(e,t){var r=ce(t);return null===r?null:Oe(e,r)}(n,t);return xe(null!==r),r}}function Ce(n,o){return function(e,t){var r=be(n,t,o);return xe(null!==r),function(n,e){var t=ce(e);if(null===t)return null;if(!J(t.downloadTokens))return null;var r=t.downloadTokens;if(0===r.length)return null;var o=encodeURIComponent;return r.split(",").map(function(e){var t=n.bucket,r=n.fullPath;return pe("/b/"+o(t)+"/o/"+o(r))+he({alt:"media",token:e})})[0]}(r,t)}}function Ne(n){return function(e,t){var r;return(r=401===e.getStatus()?new m(b.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?function(e){return new m(b.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}(n.bucket):403===e.getStatus()?function(e){return new m(b.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}(n.path):t).setServerResponseProp(t.serverResponseProp()),r}}function Ie(n){var o=Ne(n);return function(e,t){var r=o(e,t);return 404===e.getStatus()&&(r=function(e){return new m(b.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}(n.path)),r.setServerResponseProp(t.serverResponseProp()),r}}function Le(e,t,r){var n=pe(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new Ae(n,"GET",Pe(e,r),o);return i.errorHandler=Ie(t),i}function De(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}function Me(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=De(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ge(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",p=ie.getBlob(c,n,l);if(null===p)throw R();var h={name:u.fullPath},f=pe(i),d=e.maxUploadRetryTime(),_=new Ae(f,"POST",Pe(e,r),d);return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=Ne(t),_}var We=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Be(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){xe(!1)}return xe(!!r&&-1!==(t||["active"]).indexOf(r)),r}function je(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=De(t,n,o),s={name:a.fullPath},u=pe(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ge(a,r),p=e.maxUploadRetryTime();var h=new Ae(u,"POST",function(e){var t;Be(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){xe(!1)}return xe(J(t)),t},p);return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=Ne(t),h}function qe(e,t,r,o){var n=e.maxUploadRetryTime(),i=new Ae(r,"POST",function(e){var t=Be(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){xe(!1)}r||xe(!1);var n=Number(r);return xe(!isNaN(n)),new We(n,o.size(),"final"===t)},n);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Ne(t),i}function Fe(e,a,t,s,r,u,n,o){var c=new We(0,0);if(n?(c.current=n.current,c.total=n.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw new m(b.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var i=c.total-c.current,l=i;0<r&&(l=Math.min(l,r));var p=c.current,h=p+l,f={"X-Goog-Upload-Command":l===i?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},d=s.slice(p,h);if(null===d)throw R();var _=a.maxUploadRetryTime(),v=new Ae(t,"POST",function(e,t){var r,n=Be(e,["active","final"]),o=c.current+l,i=s.size();return r="final"===n?Pe(a,u)(e,t):null,new We(o,i,"final"===n,r)},_);return v.headers=f,v.body=d.uploadData(),v.progressCallback=o||null,v.errorHandler=Ne(e),v}var He=function(e,t,r){if(K(e)||X(t)||X(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},ze=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};function Ge(t,e,r){for(var n=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){n=i;break}if(!(n<=r.length&&r.length<=o))throw function(e,t,r,n){var o,i;return i=e===t?1===(o=e)?"argument":"arguments":(o="between "+e+" and "+t,"arguments"),new m(b.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}(n,o,t,r.length);for(i=0;i<r.length;i++)try{e[i].validator(r[i])}catch(e){throw e instanceof Error?T(i,t,e.message):T(i,t,e)}}var Xe=function(t,e){var r=this;this.validator=function(e){r.optional&&!V(e)||t(e)},this.optional=!!e};function Ve(e,t){function r(e){if(!J(e))throw"Expected string."}var n;return n=e?function(t,r){return function(e){t(e),r(e)}}(r,e):r,new Xe(n,t)}function Ke(){return new Xe(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||Y()&&e instanceof Blob))throw"Expected Blob or File."})}function Ze(e){return new Xe(ye,e)}function Je(){return new Xe(function(e){if(!($(e)&&0<=e))throw"Expected a number 0 or greater."})}function $e(t,e){return new Xe(function(e){if(!(null===e||X(e)&&e instanceof Object))throw"Expected an Object.";null!=t&&t(e)},e)}function Qe(e){return new Xe(function(e){if(!(null===e||K(e)))throw"Expected a Function."},e)}function Ye(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve().then(function(){return r.apply(void 0,e)})}}var et=(tt.prototype.makeProgressCallback_=function(){var t=this,r=this.transferred_;return function(e){return t.updateProgress_(r+e)}},tt.prototype.shouldDoResumable_=function(e){return 262144<e.size()},tt.prototype.start_=function(){this.state_===M&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},tt.prototype.resolveToken_=function(t){var r=this;this.authWrapper_.getAuthToken().then(function(e){switch(r.state_){case M:t(e);break;case q:r.transition_(F);break;case W:r.transition_(B)}})},tt.prototype.createResumable_=function(){var n=this;this.resolveToken_(function(e){var t=je(n.authWrapper_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.uploadUrl_=e,n.needToFetchStatus_=!1,n.completeTransitions_()},n.errorHandler_)})},tt.prototype.fetchStatus_=function(){var n=this,o=this.uploadUrl_;this.resolveToken_(function(e){var t=qe(n.authWrapper_,n.location_,o,n.blob_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){e=e,n.request_=null,n.updateProgress_(e.current),n.needToFetchStatus_=!1,e.finalized&&(n.needToFetchMetadata_=!0),n.completeTransitions_()},n.errorHandler_)})},tt.prototype.continueUpload_=function(){var n=this,o=262144*this.chunkMultiplier_,i=new We(this.transferred_,this.blob_.size()),a=this.uploadUrl_;this.resolveToken_(function(e){var t;try{t=Fe(n.location_,n.authWrapper_,a,n.blob_,o,n.mappings_,i,n.makeProgressCallback_())}catch(e){return n.error_=e,void n.transition_(H)}var r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.increaseMultiplier_(),n.request_=null,n.updateProgress_(e.current),e.finalized?(n.metadata_=e.metadata,n.transition_(j)):n.completeTransitions_()},n.errorHandler_)})},tt.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},tt.prototype.fetchMetadata_=function(){var n=this;this.resolveToken_(function(e){var t=Le(n.authWrapper_,n.location_,n.mappings_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.transition_(j)},n.metadataErrorHandler_)})},tt.prototype.oneShotUpload_=function(){var n=this;this.resolveToken_(function(e){var t=Me(n.authWrapper_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.updateProgress_(n.blob_.size()),n.transition_(j)},n.errorHandler_)})},tt.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},tt.prototype.transition_=function(e){if(this.state_!==e)switch(e){case q:case W:this.state_=e,null!==this.request_&&this.request_.cancel();break;case M:var t=this.state_===B;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case B:this.state_=e,this.notifyObservers_();break;case F:this.error_=w(),this.state_=e,this.notifyObservers_();break;case H:case j:this.state_=e,this.notifyObservers_()}},tt.prototype.completeTransitions_=function(){switch(this.state_){case W:this.transition_(B);break;case q:this.transition_(F);break;case M:this.start_()}},Object.defineProperty(tt.prototype,"snapshot",{get:function(){var e=G(this.state_);return new ze(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),tt.prototype.on=function(e,t,r,i){var n="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=Qe(!0).validator,a=$e(null,!0).validator;function s(e){try{return void o(e)}catch(e){}try{if(a(e),!(V(e.next)||V(e.error)||V(e.complete)))throw"";return}catch(e){throw n}}Ge("on",[Ve(function(){if(e!==D.STATE_CHANGED)throw"Expected one of the event types: ["+D.STATE_CHANGED+"]."}),$e(s,!0),Qe(!0),Qe(!0)],arguments);var u=this;function c(o){return function(e,t,r){null!==o&&Ge("on",o,arguments);var n=new He(e,t,i);return u.addObserver_(n),function(){u.removeObserver_(n)}}}var l=[$e(function(e){if(null===e)throw n;s(e)}),Qe(!0),Qe(!0)];return V(t)||V(r)||V(i)?c(null)(t,r,i):c(l)},tt.prototype.then=function(e,t){return this.promise_.then(e,t)},tt.prototype.catch=function(e){return this.then(null,e)},tt.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},tt.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},tt.prototype.notifyObservers_=function(){var t=this;this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},tt.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(G(this.state_)){case z.SUCCESS:Ye(this.resolve_.bind(null,this.snapshot))();break;case z.CANCELED:case z.ERROR:Ye(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},tt.prototype.notifyObserver_=function(e){switch(G(this.state_)){case z.RUNNING:case z.PAUSED:e.next&&Ye(e.next.bind(e,this.snapshot))();break;case z.SUCCESS:e.complete&&Ye(e.complete.bind(e))();break;case z.CANCELED:case z.ERROR:e.error&&Ye(e.error.bind(e,this.error_))();break;default:e.error&&Ye(e.error.bind(e,this.error_))()}},tt.prototype.resume=function(){Ge("resume",[],arguments);var e=this.state_===B||this.state_===W;return e&&this.transition_(M),e},tt.prototype.pause=function(){Ge("pause",[],arguments);var e=this.state_===M;return e&&this.transition_(W),e},tt.prototype.cancel=function(){Ge("cancel",[],arguments);var e=this.state_===M||this.state_===W;return e&&this.transition_(q),e},tt);function tt(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=M,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(b.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(H))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(b.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(H))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}var rt=(nt.prototype.toString=function(){return Ge("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},nt.prototype.newRef=function(e,t){return new nt(e,t)},nt.prototype.mappings=function(){return ve()},nt.prototype.child=function(e){Ge("child",[Ve()],arguments);var t=function(e,t){var r=t.split("/").filter(function(e){return 0<e.length}).join("/");return 0===e.length?r:e+"/"+r}(this.location.path,e),r=new se(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(nt.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new se(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(nt.prototype,"root",{get:function(){var e=new se(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(nt.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(nt.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(nt.prototype,"name",{get:function(){return le(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(nt.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),nt.prototype.put=function(e,t){return void 0===t&&(t=null),Ge("put",[Ke(),Ze(!0)],arguments),this.throwIfRoot_("put"),new et(this,this.authWrapper,this.location,this.mappings(),new ie(e),t)},nt.prototype.putString=function(e,t,r){void 0===t&&(t=U.RAW),Ge("putString",[Ve(),Ve(A,!0),Ze(!0)],arguments),this.throwIfRoot_("putString");var n=P(t,e),o=Object.assign({},r);return!X(o.contentType)&&X(n.contentType)&&(o.contentType=n.contentType),new et(this,this.authWrapper,this.location,this.mappings(),new ie(n.data,!0),o)},nt.prototype.delete=function(){var r=this;return Ge("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(e){var t=function(e,t){var r=pe(t.fullServerUrl()),n=e.maxOperationRetryTime(),o=new Ae(r,"DELETE",function(e,t){},n);return o.successCodes=[200,204],o.errorHandler=Ie(t),o}(r.authWrapper,r.location);return r.authWrapper.makeRequest(t,e).getPromise()})},nt.prototype.listAll=function(){Ge("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then(function(){return e})},nt.prototype.listAllHelper=function(i,a){return function(i,a,s,u){return new(s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})}(this,void 0,void 0,function(){var t,r,n,o;return e(this,function(e){switch(e.label){case 0:return t={pageToken:a},[4,this.list(t)];case 1:return r=e.sent(),(n=i.prefixes).push.apply(n,r.prefixes),(o=i.items).push.apply(o,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(i,r.nextPageToken)];case 2:e.sent(),e.label=3;case 3:return[2]}})})},nt.prototype.list=function(n){Ge("list",[function(e){return new Xe(Ue,e)}(!0)],arguments);var o=this;return this.authWrapper.getAuthToken().then(function(e){var t=n||{},r=function(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&0<r.length&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=pe(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new Ae(a,"GET",Se(e),s);return u.urlParams=i,u.errorHandler=Ne(t),u}(o.authWrapper,o.location,"/",t.pageToken,t.maxResults);return o.authWrapper.makeRequest(r,e).getPromise()})},nt.prototype.getMetadata=function(){var r=this;return Ge("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(e){var t=Le(r.authWrapper,r.location,r.mappings());return r.authWrapper.makeRequest(t,e).getPromise()})},nt.prototype.updateMetadata=function(r){var n=this;return Ge("updateMetadata",[Ze()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(e){var t=function(e,t,r,n){var o=pe(t.fullServerUrl()),i=ge(r,n),a=e.maxOperationRetryTime(),s=new Ae(o,"PATCH",Pe(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=Ie(t),s}(n.authWrapper,n.location,r,n.mappings());return n.authWrapper.makeRequest(t,e).getPromise()})},nt.prototype.getDownloadURL=function(){var r=this;return Ge("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(e){var t=function(e,t,r){var n=pe(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new Ae(n,"GET",Ce(e,r),o);return i.errorHandler=Ie(t),i}(r.authWrapper,r.location,r.mappings());return r.authWrapper.makeRequest(t,e).getPromise().then(function(e){if(null===e)throw new m(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})},nt.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new m(b.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},nt);function nt(e,t){this.authWrapper=e,this.location=t instanceof se?t:se.makeFromUrl(t)}var ot=(it.prototype.getPromise=function(){return this.promise_},it.prototype.cancel=function(e){},it);function it(e){this.promise_=Promise.reject(e)}var at=(st.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then(function(){return t.map.delete(r)},function(){return t.map.delete(r)})},st.prototype.clear=function(){this.map.forEach(function(e){e&&e.cancel(!0)}),this.map.clear()},st);function st(){this.map=new Map,this.id=-9007199254740991}var ut=(ct.extractBucket_=function(e){var t=e[_]||null;return null==t?null:se.makeFromBucketSpec(t).bucket},ct.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then(function(e){return null!==e?e.accessToken:null},function(){return null}):Promise.resolve(null)},ct.prototype.bucket=function(){if(this.deleted_)throw E();return this.bucket_},ct.prototype.service=function(){return this.service_},ct.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},ct.prototype.makeRequest=function(e,t){if(this.deleted_)return new ot(E());var r=this.requestMaker_(e,t,this.pool_);return this.requestMap_.addRequest(r),r},ct.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},ct.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},ct.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},ct.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},ct.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},ct);function ct(e,t,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;X(a)&&(this.bucket_=ct.extractBucket_(a))}this.authProvider_=t,this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requestMap_=new at}var lt=(pt.prototype.start_=function(){var s=this;function e(e,t){var r,n=s.resolve_,o=s.reject_,i=t.xhr;if(t.wasSuccessCode)try{var a=s.callback_(i,i.getResponseText());V(a)?n(a):n()}catch(e){o(e)}else null!==i?((r=y()).setServerResponseProp(i.getResponseText()),s.errorCallback_?o(s.errorCallback_(i,r)):o(r)):t.canceled?o(r=s.appDelete_?E():w()):o(r=new m(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?e(0,new ht(!1,null,!0)):this.backoffId_=function(t,r,e){var n=1,o=null,i=!1,a=0;function s(){return 2===a}var u=!1;function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];u||(u=!0,r.apply(null,e))}function l(e){o=setTimeout(function(){o=null,t(p,s())},e)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];u||(e?c.call.apply(c,d([null,e],t)):s()||i?c.call.apply(c,d([null,e],t)):(n<64&&(n*=2),l(1===a?(a=2,0):1e3*(n+Math.random()))))}var h=!1;function f(e){h||(h=!0,u||(null!==o?(e||(a=2),clearTimeout(o),l(0)):e||(a=1)))}return l(0),setTimeout(function(){f(i=!0)},e),f}(function(i,e){if(e)i(!1,new ht(!1,null,!0));else{var t=s.pool_.createXhrIo();s.pendingXhr_=t,null!==s.progressCallback_&&t.addUploadProgressListener(a),t.send(s.url_,s.method_,s.body_,s.headers_).then(function(e){null!==s.progressCallback_&&e.removeUploadProgressListener(a),s.pendingXhr_=null;var t=(e=e).getErrorCode()===I.NO_ERROR,r=e.getStatus();if(t&&!s.isRetryStatusCode_(r)){var n=-1!==s.successCodes_.indexOf(r);i(!0,new ht(n,e))}else{var o=e.getErrorCode()===I.ABORT;i(!1,new ht(!1,null,o))}})}function a(e){var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==s.progressCallback_&&s.progressCallback_(t,r)}},e,this.timeout_)},pt.prototype.getPromise=function(){return this.promise_},pt.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&function(e){e(!1)}(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},pt.prototype.isRetryStatusCode_=function(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},pt);function pt(e,t,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){p.resolve_=e,p.reject_=t,p.start_()})}var ht=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function ft(e,t,r){var n=he(e.urlParams),o=e.url+n,i=Object.assign({},e.headers);return function(e,t){null!==t&&0<t.length&&(e.Authorization="Firebase "+t)}(i,t),function(e){var t=void 0!==wt?wt.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}(i),new lt(o,e.method,i,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}var dt=(_t.prototype.ref=function(e){if(Ge("ref",[Ve(function(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var t=new rt(this.authWrapper_,this.bucket_);return null!=e?t.child(e):t},_t.prototype.refFromURL=function(e){return Ge("refFromURL",[Ve(function(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{se.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new rt(this.authWrapper_,e)},Object.defineProperty(_t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),_t.prototype.setMaxUploadRetryTime=function(e){Ge("setMaxUploadRetryTime",[Je()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},_t.prototype.setMaxOperationRetryTime=function(e){Ge("setMaxOperationRetryTime",[Je()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(_t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(_t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),_t);function _t(e,t,r,n){if(this.bucket_=null,this.authWrapper_=new ut(e,t,function(e,t){return new rt(e,t)},ft,this,r),this.app_=e,null!=n)this.bucket_=se.makeFromBucketSpec(n);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new se(o,""))}this.internals_=new vt(this)}var vt=(mt.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},mt);function mt(e){this.service_=e}var bt,gt;function yt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new dt(r,n,new re,t)}gt={TaskState:z,TaskEvent:D,StringFormat:U,Storage:dt,Reference:rt},(bt=wt).INTERNAL.registerComponent(new c("storage",yt,"PUBLIC").setServiceProps(gt).setMultipleInstances(!0)),bt.registerVersion("@firebase/storage","0.3.26")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}});

// ********************************************************** //
// Description: This is a standalone debounce function extracted from
// lodash core. It is useful when the page only needs 
// debounce function not complete lodash. 
// Don't add this script if the page already use lodash.
// ********************************************************** //

;(function() {
    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var reIsBinary = '/^0b[01]+$/i';
    var now = Date.now;
    

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Detect free variable `exports`. */
    var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
      ? exports
      : undefined;

    /** Detect free variable `module`. */
    var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
      ? module
      : undefined;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = (freeModule && freeModule.exports === freeExports)
      ? freeExports
      : undefined;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

    /** Detect free variable `self`. */
    var freeSelf = checkGlobal(objectTypes[typeof self] && self);

    /** Detect free variable `window`. */
    var freeWindow = checkGlobal(objectTypes[typeof window] && window);

    /** Detect `this` as the global object. */
    var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

    var root = freeGlobal ||
    ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
      freeSelf || thisGlobal || Function('return this')();

    function debounce(func, wait, options) {
        var lastArgs,
            lastThis,
            result,
            timerId,
            lastCallTime = 0,
            lastInvokeTime = 0,
            leading = false,
            maxWait = false,
            trailing = true;

        if (typeof func != 'function') {
            throw new TypeError('Expected a function');
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
            leading = !!options.leading;
            maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;

            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
        }

        function leadingEdge(time) {
            // Reset any `maxWait` timer.
            lastInvokeTime = time;
            // Start the timer for the trailing edge.
            timerId = setTimeout(timerExpired, wait);
            // Invoke the leading edge.
            return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;

            return maxWait === false ? result : nativeMin(result, maxWait - timeSinceLastInvoke);
        }

        function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;

            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (!lastCallTime || (timeSinceLastCall >= wait) ||
              (timeSinceLastCall < 0) || (maxWait !== false && timeSinceLastInvoke >= maxWait));
        }

        function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // Restart the timer.
            timerId = setTimeout(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
            clearTimeout(timerId);
            timerId = undefined;

            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs) {
                return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
        }

        function cancel() {
            if (timerId !== undefined) {
                clearTimeout(timerId);
            }
            lastCallTime = lastInvokeTime = 0;
            lastArgs = lastThis = timerId = undefined;
        }

        function flush() {
            return timerId === undefined ? result : trailingEdge(now());
        }

        function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);

            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;

            if (isInvoking) {
                if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                }
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
            return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
    }

    function throttle(func, wait, options) {
        var leading = true,
            trailing = true;

        if (typeof func != 'function') {
            throw new TypeError('Expected a function');
        }
        if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
        });
    }

    function isFunction(value) {
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 8 which returns 'object' for typed array constructors, and
        // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
        var tag = isObject(value) ? objectToString.call(value) : '';
        return tag == funcTag || tag == genTag;
    }


    function isObject(value) {
        var type = typeof value;
        return !!value && (type == 'object' || type == 'function');
    }

    function toNumber(value) {
        if (typeof value == 'number') {
            return value;
        }
        if (isSymbol(value)) {
            return NAN;
        }
        if (isObject(value)) {
            var other = isFunction(value.valueOf) ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
            return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value))
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : (reIsBadHex.test(value) ? NAN : +value);
    }

    function checkGlobal(value) {
        return (value && value.Object === Object) ? value : null;
    }

    var _ = {};
    _.debounce = debounce;
    _.throttle = throttle;
    // Expose lodash on the free variable `window` or `self` when available. This
    // prevents errors in cases where lodash is loaded by a script tag in the presence
    // of an AMD loader. See http://requirejs.org/docs/errors.html#mismatch for more details.
    (freeWindow || freeSelf || {})._ = _;

    // Some AMD build optimizers like r.js check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function () {
            return _;
        });
    }
        // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for Node.js.
        if (moduleExports) {
            (freeModule.exports = _)._ = _;
        }
        // Export for CommonJS support.
        freeExports._ = _;
    }
    else {
        // Export to the global object.
        root._ = _;
    }
}.call(this));
/*! markdown-it 12.2.0 https://github.com/markdown-it/markdown-it @license MIT */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).markdownit=r()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105",in:"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba",int:"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"\t",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"},t=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,n={};function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),void 0===t&&(t=!0),l=function(e){var r,t,s=n[e];if(s)return s;for(s=n[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?s.push(t):s.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)s[e.charCodeAt(r)]=e[r];return s}(r),o=0,i=e.length;o<i;o++)if(a=e.charCodeAt(o),t&&37===a&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(a<128)u+=l[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i&&(c=e.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o]);return u}s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()";var o=s,i={};function a(e,r){var t;return"string"!=typeof r&&(r=a.defaultChars),t=function(e){var r,t,n=i[e];if(n)return n;for(n=i[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)n[t=e.charCodeAt(r)]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}(r),e.replace(/(%[a-f0-9]{2})+/gi,(function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;r<n;r+=3)(s=parseInt(e.slice(r+1,r+3),16))<128?l+=t[s]:192==(224&s)&&r+3<n&&128==(192&(o=parseInt(e.slice(r+4,r+6),16)))?(l+=(c=s<<6&1984|63&o)<128?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224==(240&s)&&r+6<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128==(192&o)&&128==(192&i))?(l+=(c=s<<12&61440|o<<6&4032|63&i)<2048||c>=55296&&c<=57343?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240==(248&s)&&r+9<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128==(192&o)&&128==(192&i)&&128==(192&a))?((c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a)<65536||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l}))}a.defaultChars=";/?:@&=+$,#",a.componentChars="";var c=a;function l(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var u=/^([a-z0-9.+-]+:)/i,p=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,f=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),d=["'"].concat(f),m=["%","/","?",";","#"].concat(d),g=["/","?","#"],_=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,k={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};l.prototype.parse=function(e,r){var t,n,s,o,i,a=e;if(a=a.trim(),!r&&1===e.split("#").length){var c=h.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=u.exec(a);if(l&&(s=(l=l[0]).toLowerCase(),this.protocol=l,a=a.substr(l.length)),(r||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(i="//"===a.substr(0,2))||l&&k[l]||(a=a.substr(2),this.slashes=!0)),!k[l]&&(i||l&&!v[l])){var p,f,d=-1;for(t=0;t<g.length;t++)-1!==(o=a.indexOf(g[t]))&&(-1===d||o<d)&&(d=o);for(-1!==(f=-1===d?a.lastIndexOf("@"):a.lastIndexOf("@",d))&&(p=a.slice(0,f),a=a.slice(f+1),this.auth=p),d=-1,t=0;t<m.length;t++)-1!==(o=a.indexOf(m[t]))&&(-1===d||o<d)&&(d=o);-1===d&&(d=a.length),":"===a[d-1]&&d--;var C=a.slice(0,d);a=a.slice(d),this.parseHost(C),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y){var A=this.hostname.split(/\./);for(t=0,n=A.length;t<n;t++){var x=A[t];if(x&&!x.match(_)){for(var D="",w=0,E=x.length;w<E;w++)x.charCodeAt(w)>127?D+="x":D+=x[w];if(!D.match(_)){var q=A.slice(0,t),S=A.slice(t+1),F=x.match(b);F&&(q.push(F[1]),S.unshift(F[2])),S.length&&(a=S.join(".")+a),this.hostname=q.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=a.indexOf("#");-1!==L&&(this.hash=a.substr(L),a=a.slice(0,L));var z=a.indexOf("?");return-1!==z&&(this.search=a.substr(z),a=a.slice(0,z)),a&&(this.pathname=a),v[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},l.prototype.parseHost=function(e){var r=p.exec(e);r&&(":"!==(r=r[0])&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)};var C={encode:o,decode:c,format:function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",e.hostname&&-1!==e.hostname.indexOf(":")?r+="["+e.hostname+"]":r+=e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""},parse:function(e,r){if(e&&e instanceof l)return e;var t=new l;return t.parse(e,r),t}},y=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,A=/[\0-\x1F\x7F-\x9F]/,x=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,D={Any:y,Cc:A,Cf:/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,P:t,Z:x},w=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,n){var s=Object.prototype.hasOwnProperty;function o(e,r){return s.call(e,r)}function i(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function a(e){if(e>65535){var r=55296+((e-=65536)>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}var c=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,l=new RegExp(c.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),u=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;var p=/[&<>"]/,h=/[&<>"]/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function d(e){return f[e]}var m=/[.?*+^$[\]\\(){}|-]/g;n.lib={},n.lib.mdurl=C,n.lib.ucmicro=D,n.assign=function(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach((function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach((function(t){e[t]=r[t]}))}})),e},n.isString=function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},n.has=o,n.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(c,"$1")},n.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(l,(function(e,t,n){return t||function(e,t){var n=0;return o(r,t)?r[t]:35===t.charCodeAt(0)&&u.test(t)&&i(n="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?a(n):e}(e,n)}))},n.isValidEntityCode=i,n.fromCodePoint=a,n.escapeHtml=function(e){return p.test(e)?e.replace(h,d):e},n.arrayReplaceAt=function(e,r,t){return[].concat(e.slice(0,r),t,e.slice(r+1))},n.isSpace=function(e){switch(e){case 9:case 32:return!0}return!1},n.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},n.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},n.isPunctChar=function(e){return t.test(e)},n.escapeRE=function(e){return e.replace(m,"\\$&")},n.normalizeReference=function(e){return e=e.trim().replace(/\s+/g," "),"\u1e7e"==="\u1e9e".toLowerCase()&&(e=e.replace(/\u1e9e/g,"\xdf")),e.toLowerCase().toUpperCase()}})),E=w.unescapeAll,q=w.unescapeAll,S={parseLinkLabel:function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(93===(o=e.src.charCodeAt(e.pos))&&0===--n){s=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a},parseLinkDestination:function(e,r,t){var n,s,o=r,i={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(10===(n=e.charCodeAt(r)))return i;if(60===n)return i;if(62===n)return i.pos=r+1,i.str=E(e.slice(o+1,r)),i.ok=!0,i;92===n&&r+1<t?r+=2:r++}return i}for(s=0;r<t&&32!==(n=e.charCodeAt(r))&&!(n<32||127===n);)if(92===n&&r+1<t){if(32===e.charCodeAt(r+1))break;r+=2}else{if(40===n&&++s>32)return i;if(41===n){if(0===s)break;s--}r++}return o===r||0!==s||(i.str=E(e.slice(o,r)),i.lines=0,i.pos=r,i.ok=!0),i},parseLinkTitle:function(e,r,t){var n,s,o=0,i=r,a={ok:!1,pos:0,lines:0,str:""};if(r>=t)return a;if(34!==(s=e.charCodeAt(r))&&39!==s&&40!==s)return a;for(r++,40===s&&(s=41);r<t;){if((n=e.charCodeAt(r))===s)return a.pos=r+1,a.lines=o,a.str=q(e.slice(i+1,r)),a.ok=!0,a;if(40===n&&41===s)return a;10===n?o++:92===n&&r+1<t&&(r++,10===e.charCodeAt(r)&&o++),r++}return a}},F=w.assign,L=w.unescapeAll,z=w.escapeHtml,T={};function I(){this.rules=F({},T)}T.code_inline=function(e,r,t,n,s){var o=e[r];return"<code"+s.renderAttrs(o)+">"+z(e[r].content)+"</code>"},T.code_block=function(e,r,t,n,s){var o=e[r];return"<pre"+s.renderAttrs(o)+"><code>"+z(e[r].content)+"</code></pre>\n"},T.fence=function(e,r,t,n,s){var o,i,a,c,l,u=e[r],p=u.info?L(u.info).trim():"",h="",f="";return p&&(h=(a=p.split(/(\s+)/g))[0],f=a.slice(2).join("")),0===(o=t.highlight&&t.highlight(u.content,h,f)||z(u.content)).indexOf("<pre")?o+"\n":p?(i=u.attrIndex("class"),c=u.attrs?u.attrs.slice():[],i<0?c.push(["class",t.langPrefix+h]):(c[i]=c[i].slice(),c[i][1]+=" "+t.langPrefix+h),l={attrs:c},"<pre><code"+s.renderAttrs(l)+">"+o+"</code></pre>\n"):"<pre><code"+s.renderAttrs(u)+">"+o+"</code></pre>\n"},T.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},T.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},T.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},T.text=function(e,r){return z(e[r].content)},T.html_block=function(e,r){return e[r].content},T.html_inline=function(e,r){return e[r].content},I.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return"";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+z(e.attrs[r][0])+'="'+z(e.attrs[r][1])+'"';return n},I.prototype.renderToken=function(e,r,t){var n,s="",o=!1,i=e[r];return i.hidden?"":(i.block&&-1!==i.nesting&&r&&e[r-1].hidden&&(s+="\n"),s+=(-1===i.nesting?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=!0,1===i.nesting&&r+1<e.length&&("inline"===(n=e[r+1]).type||n.hidden||-1===n.nesting&&n.tag===i.tag)&&(o=!1)),s+=o?">\n":">")},I.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;i<a;i++)void 0!==o[n=e[i].type]?s+=o[n](e,i,r,t,this):s+=this.renderToken(e,i,r);return s},I.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=0,o=e.length;s<o;s++)"text"===e[s].type?n+=e[s].content:"image"===e[s].type?n+=this.renderInlineAsText(e[s].children,r,t):"softbreak"===e[s].type&&(n+="\n");return n},I.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;n<s;n++)"inline"===(o=e[n].type)?i+=this.renderInline(e[n].children,r,t):void 0!==a[o]?i+=a[e[n].type](e,n,r,t,this):i+=this.renderToken(e,n,r,t);return i};var M=I;function R(){this.__rules__=[],this.__cache__=null}R.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return-1},R.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach((function(e){e.enabled&&e.alt.forEach((function(e){r.indexOf(e)<0&&r.push(e)}))})),e.__cache__={},r.forEach((function(r){e.__cache__[r]=[],e.__rules__.forEach((function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn))}))}))},R.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null},R.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},R.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},R.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null},R.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach((function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e)}),this),this.__cache__=null,t},R.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach((function(e){e.enabled=!1})),this.enable(e,r)},R.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach((function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e)}),this),this.__cache__=null,t},R.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]};var B=R,N=/\r\n?|\n/g,O=/\0/g,P=w.arrayReplaceAt;function j(e){return/^<\/a\s*>/i.test(e)}var U=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,V=/\((c|tm|r|p)\)/i,Z=/\((c|tm|r|p)\)/gi,G={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};function $(e,r){return G[r.toLowerCase()]}function H(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||n||(t.content=t.content.replace(Z,$)),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++}function J(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)"text"!==(t=e[r]).type||n||U.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1\u2014").replace(/(^|\s)--(?=\s|$)/gm,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1\u2013")),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++}var W=w.isWhiteSpace,Y=w.isPunctChar,K=w.isMdAsciiPunct,Q=/['"]/,X=/['"]/g;function ee(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function re(e,r){var t,n,s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k,v,C,y;for(v=[],t=0;t<e.length;t++){for(n=e[t],c=e[t].level,b=v.length-1;b>=0&&!(v[b].level<=c);b--);if(v.length=b+1,"text"===n.type){i=0,a=(s=n.content).length;e:for(;i<a&&(X.lastIndex=i,o=X.exec(s));){if(g=_=!0,i=o.index+1,k="'"===o[0],u=32,o.index-1>=0)u=s.charCodeAt(o.index-1);else for(b=t-1;b>=0&&("softbreak"!==e[b].type&&"hardbreak"!==e[b].type);b--)if(e[b].content){u=e[b].content.charCodeAt(e[b].content.length-1);break}if(p=32,i<a)p=s.charCodeAt(i);else for(b=t+1;b<e.length&&("softbreak"!==e[b].type&&"hardbreak"!==e[b].type);b++)if(e[b].content){p=e[b].content.charCodeAt(0);break}if(h=K(u)||Y(String.fromCharCode(u)),f=K(p)||Y(String.fromCharCode(p)),d=W(u),(m=W(p))?g=!1:f&&(d||h||(g=!1)),d?_=!1:h&&(m||f||(_=!1)),34===p&&'"'===o[0]&&u>=48&&u<=57&&(_=g=!1),g&&_&&(g=h,_=f),g||_){if(_)for(b=v.length-1;b>=0&&(l=v[b],!(v[b].level<c));b--)if(l.single===k&&v[b].level===c){l=v[b],k?(C=r.md.options.quotes[2],y=r.md.options.quotes[3]):(C=r.md.options.quotes[0],y=r.md.options.quotes[1]),n.content=ee(n.content,o.index,y),e[l.token].content=ee(e[l.token].content,l.pos,C),i+=y.length-1,l.token===t&&(i+=C.length-1),a=(s=n.content).length,v.length=b;continue e}g?v.push({token:t,pos:o.index,single:k,level:c}):_&&k&&(n.content=ee(n.content,o.index,"\u2019"))}else k&&(n.content=ee(n.content,o.index,"\u2019"))}}}}function te(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}te.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return-1;for(t=0,n=(r=this.attrs).length;t<n;t++)if(r[t][0]===e)return t;return-1},te.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},te.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n},te.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},te.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r};var ne=te;function se(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r}se.prototype.Token=ne;var oe=se,ie=[["normalize",function(e){var r;r=(r=e.src.replace(N,"\n")).replace(O,"\ufffd"),e.src=r}],["block",function(e){var r;e.inlineMode?((r=new e.Token("inline","",0)).content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}],["inline",function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;t<n;t++)"inline"===(r=s[t]).type&&e.md.inline.parse(r.content,e.md,e.env,r.children)}],["linkify",function(e){var r,t,n,s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k=e.tokens;if(e.md.options.linkify)for(t=0,n=k.length;t<n;t++)if("inline"===k[t].type&&e.md.linkify.pretest(k[t].content))for(f=0,r=(s=k[t].children).length-1;r>=0;r--)if("link_close"!==(i=s[r]).type){if("html_inline"===i.type&&(b=i.content,/^<a[>\s]/i.test(b)&&f>0&&f--,j(i.content)&&f++),!(f>0)&&"text"===i.type&&e.md.linkify.test(i.content)){for(l=i.content,_=e.md.linkify.match(l),a=[],h=i.level,p=0,c=0;c<_.length;c++)d=_[c].url,m=e.md.normalizeLink(d),e.md.validateLink(m)&&(g=_[c].text,g=_[c].schema?"mailto:"!==_[c].schema||/^mailto:/i.test(g)?e.md.normalizeLinkText(g):e.md.normalizeLinkText("mailto:"+g).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+g).replace(/^http:\/\//,""),(u=_[c].index)>p&&((o=new e.Token("text","",0)).content=l.slice(p,u),o.level=h,a.push(o)),(o=new e.Token("link_open","a",1)).attrs=[["href",m]],o.level=h++,o.markup="linkify",o.info="auto",a.push(o),(o=new e.Token("text","",0)).content=g,o.level=h,a.push(o),(o=new e.Token("link_close","a",-1)).level=--h,o.markup="linkify",o.info="auto",a.push(o),p=_[c].lastIndex);p<l.length&&((o=new e.Token("text","",0)).content=l.slice(p),o.level=h,a.push(o)),k[t].children=s=P(s,r,a)}}else for(r--;s[r].level!==i.level&&"link_open"!==s[r].type;)r--}],["replacements",function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(V.test(e.tokens[r].content)&&H(e.tokens[r].children),U.test(e.tokens[r].content)&&J(e.tokens[r].children))}],["smartquotes",function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&Q.test(e.tokens[r].content)&&re(e.tokens[r].children,e)}]];function ae(){this.ruler=new B;for(var e=0;e<ie.length;e++)this.ruler.push(ie[e][0],ie[e][1])}ae.prototype.process=function(e){var r,t,n;for(r=0,t=(n=this.ruler.getRules("")).length;r<t;r++)n[r](e)},ae.prototype.State=oe;var ce=ae,le=w.isSpace;function ue(e,r){var t=e.bMarks[r]+e.tShift[r],n=e.eMarks[r];return e.src.substr(t,n-t)}function pe(e){var r,t=[],n=0,s=e.length,o=!1,i=0,a="";for(r=e.charCodeAt(n);n<s;)124===r&&(o?(a+=e.substring(i,n-1),i=n):(t.push(a+e.substring(i,n)),a="",i=n+1)),o=92===r,n++,r=e.charCodeAt(n);return t.push(a+e.substring(i)),t}var he=w.isSpace,fe=w.isSpace,de=w.isSpace;function me(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],42!==(t=e.src.charCodeAt(n++))&&45!==t&&43!==t||n<s&&(o=e.src.charCodeAt(n),!de(o))?-1:n}function ge(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return-1;if((t=e.src.charCodeAt(s++))<48||t>57)return-1;for(;;){if(s>=o)return-1;if(!((t=e.src.charCodeAt(s++))>=48&&t<=57)){if(41===t||46===t)break;return-1}if(s-n>=10)return-1}return s<o&&(t=e.src.charCodeAt(s),!de(t))?-1:s}var _e=w.normalizeReference,be=w.isSpace,ke="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",ve="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Ce={HTML_TAG_RE:new RegExp("^(?:"+ke+"|"+ve+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),HTML_OPEN_CLOSE_TAG_RE:new RegExp("^(?:"+ke+"|"+ve+")")},ye=Ce.HTML_OPEN_CLOSE_TAG_RE,Ae=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"].join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(ye.source+"\\s*$"),/^$/,!1]],xe=w.isSpace,De=w.isSpace;function we(e,r,t,n){var s,o,i,a,c,l,u,p;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",p=!1,i=a=l=u=0,c=(o=this.src).length;a<c;a++){if(s=o.charCodeAt(a),!p){if(De(s)){l++,9===s?u+=4-u%4:u++;continue}p=!0}10!==s&&a!==c-1||(10!==s&&a++,this.bMarks.push(i),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),p=!1,l=0,u=0,i=a+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}we.prototype.push=function(e,r,t){var n=new ne(e,r,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},we.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},we.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},we.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),De(r));e++);return e},we.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!De(this.src.charCodeAt(--e)))return e+1;return e},we.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},we.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},we.prototype.getLines=function(e,r,t,n){var s,o,i,a,c,l,u,p=e;if(e>=r)return"";for(l=new Array(r-e),s=0;p<r;p++,s++){for(o=0,u=a=this.bMarks[p],c=p+1<r||n?this.eMarks[p]+1:this.eMarks[p];a<c&&o<t;){if(i=this.src.charCodeAt(a),De(i))9===i?o+=4-(o+this.bsCount[p])%4:o++;else{if(!(a-u<this.tShift[p]))break;o++}a++}l[s]=o>t?new Array(o-t+1).join(" ")+this.src.slice(a,c):this.src.slice(a,c)}return l.join("")},we.prototype.Token=ne;var Ee=we,qe=[["table",function(e,r,t,n){var s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k,v,C;if(r+2>t)return!1;if(l=r+1,e.sCount[l]<e.blkIndent)return!1;if(e.sCount[l]-e.blkIndent>=4)return!1;if((i=e.bMarks[l]+e.tShift[l])>=e.eMarks[l])return!1;if(124!==(v=e.src.charCodeAt(i++))&&45!==v&&58!==v)return!1;if(i>=e.eMarks[l])return!1;if(124!==(C=e.src.charCodeAt(i++))&&45!==C&&58!==C&&!le(C))return!1;if(45===v&&le(C))return!1;for(;i<e.eMarks[l];){if(124!==(s=e.src.charCodeAt(i))&&45!==s&&58!==s&&!le(s))return!1;i++}for(u=(o=ue(e,r+1)).split("|"),f=[],a=0;a<u.length;a++){if(!(d=u[a].trim())){if(0===a||a===u.length-1)continue;return!1}if(!/^:?-+:?$/.test(d))return!1;58===d.charCodeAt(d.length-1)?f.push(58===d.charCodeAt(0)?"center":"right"):58===d.charCodeAt(0)?f.push("left"):f.push("")}if(-1===(o=ue(e,r).trim()).indexOf("|"))return!1;if(e.sCount[r]-e.blkIndent>=4)return!1;if((u=pe(o)).length&&""===u[0]&&u.shift(),u.length&&""===u[u.length-1]&&u.pop(),0===(p=u.length)||p!==f.length)return!1;if(n)return!0;for(_=e.parentType,e.parentType="table",k=e.md.block.ruler.getRules("blockquote"),(h=e.push("table_open","table",1)).map=m=[r,0],(h=e.push("thead_open","thead",1)).map=[r,r+1],(h=e.push("tr_open","tr",1)).map=[r,r+1],a=0;a<u.length;a++)h=e.push("th_open","th",1),f[a]&&(h.attrs=[["style","text-align:"+f[a]]]),(h=e.push("inline","",0)).content=u[a].trim(),h.children=[],h=e.push("th_close","th",-1);for(h=e.push("tr_close","tr",-1),h=e.push("thead_close","thead",-1),l=r+2;l<t&&!(e.sCount[l]<e.blkIndent);l++){for(b=!1,a=0,c=k.length;a<c;a++)if(k[a](e,l,t,!0)){b=!0;break}if(b)break;if(!(o=ue(e,l).trim()))break;if(e.sCount[l]-e.blkIndent>=4)break;for((u=pe(o)).length&&""===u[0]&&u.shift(),u.length&&""===u[u.length-1]&&u.pop(),l===r+2&&((h=e.push("tbody_open","tbody",1)).map=g=[r+2,0]),(h=e.push("tr_open","tr",1)).map=[l,l+1],a=0;a<p;a++)h=e.push("td_open","td",1),f[a]&&(h.attrs=[["style","text-align:"+f[a]]]),(h=e.push("inline","",0)).content=u[a]?u[a].trim():"",h.children=[],h=e.push("td_close","td",-1);h=e.push("tr_close","tr",-1)}return g&&(h=e.push("tbody_close","tbody",-1),g[1]=l),h=e.push("table_close","table",-1),m[1]=l,e.parentType=_,e.line=l,!0},["paragraph","reference"]],["code",function(e,r,t){var n,s,o;if(e.sCount[r]-e.blkIndent<4)return!1;for(s=n=r+1;n<t;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;s=++n}return e.line=s,(o=e.push("code_block","code",0)).content=e.getLines(r,s,4+e.blkIndent,!1)+"\n",o.map=[r,e.line],!0}],["fence",function(e,r,t,n){var s,o,i,a,c,l,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(h+3>f)return!1;if(126!==(s=e.src.charCodeAt(h))&&96!==s)return!1;if(c=h,(o=(h=e.skipChars(h,s))-c)<3)return!1;if(u=e.src.slice(c,h),i=e.src.slice(h,f),96===s&&i.indexOf(String.fromCharCode(s))>=0)return!1;if(n)return!0;for(a=r;!(++a>=t)&&!((h=c=e.bMarks[a]+e.tShift[a])<(f=e.eMarks[a])&&e.sCount[a]<e.blkIndent);)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s))-c<o||(h=e.skipSpaces(h))<f)){p=!0;break}return o=e.sCount[r],e.line=a+(p?1:0),(l=e.push("fence","code",0)).info=i,l.content=e.getLines(r+1,a,o,!0),l.markup=u,l.map=[r,e.line],!0},["paragraph","reference","blockquote","list"]],["blockquote",function(e,r,t,n){var s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k,v,C,y,A,x=e.lineMax,D=e.bMarks[r]+e.tShift[r],w=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(62!==e.src.charCodeAt(D++))return!1;if(n)return!0;for(a=h=e.sCount[r]+1,32===e.src.charCodeAt(D)?(D++,a++,h++,s=!1,k=!0):9===e.src.charCodeAt(D)?(k=!0,(e.bsCount[r]+h)%4==3?(D++,a++,h++,s=!1):s=!0):k=!1,f=[e.bMarks[r]],e.bMarks[r]=D;D<w&&(o=e.src.charCodeAt(D),he(o));)9===o?h+=4-(h+e.bsCount[r]+(s?1:0))%4:h++,D++;for(d=[e.bsCount[r]],e.bsCount[r]=e.sCount[r]+1+(k?1:0),l=D>=w,_=[e.sCount[r]],e.sCount[r]=h-a,b=[e.tShift[r]],e.tShift[r]=D-e.bMarks[r],C=e.md.block.ruler.getRules("blockquote"),g=e.parentType,e.parentType="blockquote",p=r+1;p<t&&(A=e.sCount[p]<e.blkIndent,!((D=e.bMarks[p]+e.tShift[p])>=(w=e.eMarks[p])));p++)if(62!==e.src.charCodeAt(D++)||A){if(l)break;for(v=!1,i=0,c=C.length;i<c;i++)if(C[i](e,p,t,!0)){v=!0;break}if(v){e.lineMax=p,0!==e.blkIndent&&(f.push(e.bMarks[p]),d.push(e.bsCount[p]),b.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}f.push(e.bMarks[p]),d.push(e.bsCount[p]),b.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]=-1}else{for(a=h=e.sCount[p]+1,32===e.src.charCodeAt(D)?(D++,a++,h++,s=!1,k=!0):9===e.src.charCodeAt(D)?(k=!0,(e.bsCount[p]+h)%4==3?(D++,a++,h++,s=!1):s=!0):k=!1,f.push(e.bMarks[p]),e.bMarks[p]=D;D<w&&(o=e.src.charCodeAt(D),he(o));)9===o?h+=4-(h+e.bsCount[p]+(s?1:0))%4:h++,D++;l=D>=w,d.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(k?1:0),_.push(e.sCount[p]),e.sCount[p]=h-a,b.push(e.tShift[p]),e.tShift[p]=D-e.bMarks[p]}for(m=e.blkIndent,e.blkIndent=0,(y=e.push("blockquote_open","blockquote",1)).markup=">",y.map=u=[r,0],e.md.block.tokenize(e,r,p),(y=e.push("blockquote_close","blockquote",-1)).markup=">",e.lineMax=x,e.parentType=g,u[1]=e.line,i=0;i<b.length;i++)e.bMarks[i+r]=f[i],e.tShift[i+r]=b[i],e.sCount[i+r]=_[i],e.bsCount[i+r]=d[i];return e.blkIndent=m,!0},["paragraph","reference","blockquote","list"]],["hr",function(e,r,t,n){var s,o,i,a,c=e.bMarks[r]+e.tShift[r],l=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(42!==(s=e.src.charCodeAt(c++))&&45!==s&&95!==s)return!1;for(o=1;c<l;){if((i=e.src.charCodeAt(c++))!==s&&!fe(i))return!1;i===s&&o++}return!(o<3)&&(n||(e.line=r+1,(a=e.push("hr","hr",0)).map=[r,e.line],a.markup=Array(o+1).join(String.fromCharCode(s))),!0)},["paragraph","reference","blockquote","list"]],["list",function(e,r,t,n){var s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k,v,C,y,A,x,D,w,E,q,S,F,L,z=!1,T=!0;if(e.sCount[r]-e.blkIndent>=4)return!1;if(e.listIndent>=0&&e.sCount[r]-e.listIndent>=4&&e.sCount[r]<e.blkIndent)return!1;if(n&&"paragraph"===e.parentType&&e.tShift[r]>=e.blkIndent&&(z=!0),(w=ge(e,r))>=0){if(u=!0,q=e.bMarks[r]+e.tShift[r],g=Number(e.src.slice(q,w-1)),z&&1!==g)return!1}else{if(!((w=me(e,r))>=0))return!1;u=!1}if(z&&e.skipSpaces(w)>=e.eMarks[r])return!1;if(m=e.src.charCodeAt(w-1),n)return!0;for(d=e.tokens.length,u?(L=e.push("ordered_list_open","ol",1),1!==g&&(L.attrs=[["start",g]])):L=e.push("bullet_list_open","ul",1),L.map=f=[r,0],L.markup=String.fromCharCode(m),b=r,E=!1,F=e.md.block.ruler.getRules("list"),C=e.parentType,e.parentType="list";b<t;){for(D=w,_=e.eMarks[b],l=k=e.sCount[b]+w-(e.bMarks[r]+e.tShift[r]);D<_;){if(9===(s=e.src.charCodeAt(D)))k+=4-(k+e.bsCount[b])%4;else{if(32!==s)break;k++}D++}if((c=(o=D)>=_?1:k-l)>4&&(c=1),a=l+c,(L=e.push("list_item_open","li",1)).markup=String.fromCharCode(m),L.map=p=[r,0],u&&(L.info=e.src.slice(q,w-1)),x=e.tight,A=e.tShift[r],y=e.sCount[r],v=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=a,e.tight=!0,e.tShift[r]=o-e.bMarks[r],e.sCount[r]=k,o>=_&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,!0),e.tight&&!E||(T=!1),E=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=v,e.tShift[r]=A,e.sCount[r]=y,e.tight=x,(L=e.push("list_item_close","li",-1)).markup=String.fromCharCode(m),b=r=e.line,p[1]=b,o=e.bMarks[r],b>=t)break;if(e.sCount[b]<e.blkIndent)break;if(e.sCount[r]-e.blkIndent>=4)break;for(S=!1,i=0,h=F.length;i<h;i++)if(F[i](e,b,t,!0)){S=!0;break}if(S)break;if(u){if((w=ge(e,b))<0)break;q=e.bMarks[b]+e.tShift[b]}else if((w=me(e,b))<0)break;if(m!==e.src.charCodeAt(w-1))break}return(L=u?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(m),f[1]=b,e.line=b,e.parentType=C,T&&function(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}(e,d),!0},["paragraph","reference","blockquote"]],["reference",function(e,r,t,n){var s,o,i,a,c,l,u,p,h,f,d,m,g,_,b,k,v=0,C=e.bMarks[r]+e.tShift[r],y=e.eMarks[r],A=r+1;if(e.sCount[r]-e.blkIndent>=4)return!1;if(91!==e.src.charCodeAt(C))return!1;for(;++C<y;)if(93===e.src.charCodeAt(C)&&92!==e.src.charCodeAt(C-1)){if(C+1===y)return!1;if(58!==e.src.charCodeAt(C+1))return!1;break}for(a=e.lineMax,b=e.md.block.ruler.getRules("reference"),f=e.parentType,e.parentType="reference";A<a&&!e.isEmpty(A);A++)if(!(e.sCount[A]-e.blkIndent>3||e.sCount[A]<0)){for(_=!1,l=0,u=b.length;l<u;l++)if(b[l](e,A,a,!0)){_=!0;break}if(_)break}for(y=(g=e.getLines(r,A,e.blkIndent,!1).trim()).length,C=1;C<y;C++){if(91===(s=g.charCodeAt(C)))return!1;if(93===s){h=C;break}(10===s||92===s&&++C<y&&10===g.charCodeAt(C))&&v++}if(h<0||58!==g.charCodeAt(h+1))return!1;for(C=h+2;C<y;C++)if(10===(s=g.charCodeAt(C)))v++;else if(!be(s))break;if(!(d=e.md.helpers.parseLinkDestination(g,C,y)).ok)return!1;if(c=e.md.normalizeLink(d.str),!e.md.validateLink(c))return!1;for(o=C=d.pos,i=v+=d.lines,m=C;C<y;C++)if(10===(s=g.charCodeAt(C)))v++;else if(!be(s))break;for(d=e.md.helpers.parseLinkTitle(g,C,y),C<y&&m!==C&&d.ok?(k=d.str,C=d.pos,v+=d.lines):(k="",C=o,v=i);C<y&&(s=g.charCodeAt(C),be(s));)C++;if(C<y&&10!==g.charCodeAt(C)&&k)for(k="",C=o,v=i;C<y&&(s=g.charCodeAt(C),be(s));)C++;return!(C<y&&10!==g.charCodeAt(C))&&(!!(p=_e(g.slice(1,h)))&&(n||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[p]&&(e.env.references[p]={title:k,href:c}),e.parentType=f,e.line=r+v+1),!0))}],["html_block",function(e,r,t,n){var s,o,i,a,c=e.bMarks[r]+e.tShift[r],l=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(c))return!1;for(a=e.src.slice(c,l),s=0;s<Ae.length&&!Ae[s][0].test(a);s++);if(s===Ae.length)return!1;if(n)return Ae[s][2];if(o=r+1,!Ae[s][1].test(a))for(;o<t&&!(e.sCount[o]<e.blkIndent);o++)if(c=e.bMarks[o]+e.tShift[o],l=e.eMarks[o],a=e.src.slice(c,l),Ae[s][1].test(a)){0!==a.length&&o++;break}return e.line=o,(i=e.push("html_block","",0)).map=[r,o],i.content=e.getLines(r,o,e.blkIndent,!0),!0},["paragraph","reference","blockquote"]],["heading",function(e,r,t,n){var s,o,i,a,c=e.bMarks[r]+e.tShift[r],l=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return!1;if(35!==(s=e.src.charCodeAt(c))||c>=l)return!1;for(o=1,s=e.src.charCodeAt(++c);35===s&&c<l&&o<=6;)o++,s=e.src.charCodeAt(++c);return!(o>6||c<l&&!xe(s))&&(n||(l=e.skipSpacesBack(l,c),(i=e.skipCharsBack(l,35,c))>c&&xe(e.src.charCodeAt(i-1))&&(l=i),e.line=r+1,(a=e.push("heading_open","h"+String(o),1)).markup="########".slice(0,o),a.map=[r,e.line],(a=e.push("inline","",0)).content=e.src.slice(c,l).trim(),a.map=[r,e.line],a.children=[],(a=e.push("heading_close","h"+String(o),-1)).markup="########".slice(0,o)),!0)},["paragraph","reference","blockquote"]],["lheading",function(e,r,t){var n,s,o,i,a,c,l,u,p,h,f=r+1,d=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return!1;for(h=e.parentType,e.parentType="paragraph";f<t&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(c=e.bMarks[f]+e.tShift[f])<(l=e.eMarks[f])&&(45===(p=e.src.charCodeAt(c))||61===p)&&(c=e.skipChars(c,p),(c=e.skipSpaces(c))>=l)){u=61===p?1:2;break}if(!(e.sCount[f]<0)){for(s=!1,o=0,i=d.length;o<i;o++)if(d[o](e,f,t,!0)){s=!0;break}if(s)break}}return!!u&&(n=e.getLines(r,f,e.blkIndent,!1).trim(),e.line=f+1,(a=e.push("heading_open","h"+String(u),1)).markup=String.fromCharCode(p),a.map=[r,e.line],(a=e.push("inline","",0)).content=n,a.map=[r,e.line-1],a.children=[],(a=e.push("heading_close","h"+String(u),-1)).markup=String.fromCharCode(p),e.parentType=h,!0)}],["paragraph",function(e,r){var t,n,s,o,i,a,c=r+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax;for(a=e.parentType,e.parentType="paragraph";c<u&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(n=!1,s=0,o=l.length;s<o;s++)if(l[s](e,c,u,!0)){n=!0;break}if(n)break}return t=e.getLines(r,c,e.blkIndent,!1).trim(),e.line=c,(i=e.push("paragraph_open","p",1)).map=[r,e.line],(i=e.push("inline","",0)).content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,!0}]];function Se(){this.ruler=new B;for(var e=0;e<qe.length;e++)this.ruler.push(qe[e][0],qe[e][1],{alt:(qe[e][2]||[]).slice()})}Se.prototype.tokenize=function(e,r,t){for(var n,s=this.ruler.getRules(""),o=s.length,i=r,a=!1,c=e.md.options.maxNesting;i<t&&(e.line=i=e.skipEmptyLines(i),!(i>=t))&&!(e.sCount[i]<e.blkIndent);){if(e.level>=c){e.line=t;break}for(n=0;n<o&&!s[n](e,i,t,!1);n++);e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(i=e.line)<t&&e.isEmpty(i)&&(a=!0,i++,e.line=i)}},Se.prototype.parse=function(e,r,t,n){var s;e&&(s=new this.State(e,r,t,n),this.tokenize(s,s.line,s.lineMax))},Se.prototype.State=Ee;var Fe=Se;function Le(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}for(var ze=w.isSpace,Te=w.isSpace,Ie=[],Me=0;Me<256;Me++)Ie.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e){Ie[e.charCodeAt(0)]=1}));function Re(e,r){var t,n,s,o,i,a=[],c=r.length;for(t=0;t<c;t++)126===(s=r[t]).marker&&-1!==s.end&&(o=r[s.end],(i=e.tokens[s.token]).type="s_open",i.tag="s",i.nesting=1,i.markup="~~",i.content="",(i=e.tokens[o.token]).type="s_close",i.tag="s",i.nesting=-1,i.markup="~~",i.content="","text"===e.tokens[o.token-1].type&&"~"===e.tokens[o.token-1].content&&a.push(o.token-1));for(;a.length;){for(n=(t=a.pop())+1;n<e.tokens.length&&"s_close"===e.tokens[n].type;)n++;t!==--n&&(i=e.tokens[n],e.tokens[n]=e.tokens[t],e.tokens[t]=i)}}var Be={tokenize:function(e,r){var t,n,s,o,i=e.pos,a=e.src.charCodeAt(i);if(r)return!1;if(126!==a)return!1;if(s=(n=e.scanDelims(e.pos,!0)).length,o=String.fromCharCode(a),s<2)return!1;for(s%2&&(e.push("text","",0).content=o,s--),t=0;t<s;t+=2)e.push("text","",0).content=o+o,e.delimiters.push({marker:a,length:0,jump:t/2,token:e.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},postProcess:function(e){var r,t=e.tokens_meta,n=e.tokens_meta.length;for(Re(e,e.delimiters),r=0;r<n;r++)t[r]&&t[r].delimiters&&Re(e,t[r].delimiters)}};function Ne(e,r){var t,n,s,o,i,a;for(t=r.length-1;t>=0;t--)95!==(n=r[t]).marker&&42!==n.marker||-1!==n.end&&(s=r[n.end],a=t>0&&r[t-1].end===n.end+1&&r[t-1].token===n.token-1&&r[n.end+1].token===s.token+1&&r[t-1].marker===n.marker,i=String.fromCharCode(n.marker),(o=e.tokens[n.token]).type=a?"strong_open":"em_open",o.tag=a?"strong":"em",o.nesting=1,o.markup=a?i+i:i,o.content="",(o=e.tokens[s.token]).type=a?"strong_close":"em_close",o.tag=a?"strong":"em",o.nesting=-1,o.markup=a?i+i:i,o.content="",a&&(e.tokens[r[t-1].token].content="",e.tokens[r[n.end+1].token].content="",t--))}var Oe={tokenize:function(e,r){var t,n,s=e.pos,o=e.src.charCodeAt(s);if(r)return!1;if(95!==o&&42!==o)return!1;for(n=e.scanDelims(e.pos,42===o),t=0;t<n.length;t++)e.push("text","",0).content=String.fromCharCode(o),e.delimiters.push({marker:o,length:n.length,jump:t,token:e.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},postProcess:function(e){var r,t=e.tokens_meta,n=e.tokens_meta.length;for(Ne(e,e.delimiters),r=0;r<n;r++)t[r]&&t[r].delimiters&&Ne(e,t[r].delimiters)}},Pe=w.normalizeReference,je=w.isSpace,Ue=w.normalizeReference,Ve=w.isSpace,Ze=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Ge=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,$e=Ce.HTML_TAG_RE;var He=w.has,Je=w.isValidEntityCode,We=w.fromCodePoint,Ye=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Ke=/^&([a-z][a-z0-9]{1,31});/i;function Qe(e,r){var t,n,s,o,i,a,c,l,u={},p=r.length;for(t=0;t<p;t++)if((s=r[t]).length=s.length||0,s.close){for(u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]),i=u[s.marker][(s.open?3:0)+s.length%3],(n=t-s.jump-1)<-1&&(n=-1),a=n;n>i;n-=o.jump+1)if((o=r[n]).marker===s.marker&&o.open&&o.end<0&&(c=!1,(o.close||s.open)&&(o.length+s.length)%3==0&&(o.length%3==0&&s.length%3==0||(c=!0)),!c)){l=n>0&&!r[n-1].open?r[n-1].jump+1:0,s.jump=t-n+l,s.open=!1,o.end=t,o.jump=l,o.close=!1,a=-1;break}-1!==a&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=a)}}var Xe=w.isWhiteSpace,er=w.isPunctChar,rr=w.isMdAsciiPunct;function tr(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}tr.prototype.pushPending=function(){var e=new ne("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},tr.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new ne(e,r,t),s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(s),n},tr.prototype.scanDelims=function(e,r){var t,n,s,o,i,a,c,l,u,p=e,h=!0,f=!0,d=this.posMax,m=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;p<d&&this.src.charCodeAt(p)===m;)p++;return s=p-e,n=p<d?this.src.charCodeAt(p):32,c=rr(t)||er(String.fromCharCode(t)),u=rr(n)||er(String.fromCharCode(n)),a=Xe(t),(l=Xe(n))?h=!1:u&&(a||c||(h=!1)),a?f=!1:c&&(l||u||(f=!1)),r?(o=h,i=f):(o=h&&(!f||c),i=f&&(!h||u)),{can_open:o,can_close:i,length:s}},tr.prototype.Token=ne;var nr=tr,sr=[["text",function(e,r){for(var t=e.pos;t<e.posMax&&!Le(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}],["newline",function(e,r){var t,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;for(t=e.pending.length-1,n=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),s++;s<n&&ze(e.src.charCodeAt(s));)s++;return e.pos=s,!0}],["escape",function(e,r){var t,n=e.pos,s=e.posMax;if(92!==e.src.charCodeAt(n))return!1;if(++n<s){if((t=e.src.charCodeAt(n))<256&&0!==Ie[t])return r||(e.pending+=e.src[n]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),n++;n<s&&(t=e.src.charCodeAt(n),Te(t));)n++;return e.pos=n,!0}}return r||(e.pending+="\\"),e.pos++,!0}],["backticks",function(e,r){var t,n,s,o,i,a,c,l,u=e.pos;if(96!==e.src.charCodeAt(u))return!1;for(t=u,u++,n=e.posMax;u<n&&96===e.src.charCodeAt(u);)u++;if(c=(s=e.src.slice(t,u)).length,e.backticksScanned&&(e.backticks[c]||0)<=t)return r||(e.pending+=s),e.pos+=c,!0;for(i=a=u;-1!==(i=e.src.indexOf("`",a));){for(a=i+1;a<n&&96===e.src.charCodeAt(a);)a++;if((l=a-i)===c)return r||((o=e.push("code_inline","code",0)).markup=s,o.content=e.src.slice(u,i).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=a,!0;e.backticks[l]=i}return e.backticksScanned=!0,r||(e.pending+=s),e.pos+=c,!0}],["strikethrough",Be.tokenize],["emphasis",Oe.tokenize],["link",function(e,r){var t,n,s,o,i,a,c,l,u="",p="",h=e.pos,f=e.posMax,d=e.pos,m=!0;if(91!==e.src.charCodeAt(e.pos))return!1;if(i=e.pos+1,(o=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return!1;if((a=o+1)<f&&40===e.src.charCodeAt(a)){for(m=!1,a++;a<f&&(n=e.src.charCodeAt(a),je(n)||10===n);a++);if(a>=f)return!1;if(d=a,(c=e.md.helpers.parseLinkDestination(e.src,a,e.posMax)).ok){for(u=e.md.normalizeLink(c.str),e.md.validateLink(u)?a=c.pos:u="",d=a;a<f&&(n=e.src.charCodeAt(a),je(n)||10===n);a++);if(c=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&d!==a&&c.ok)for(p=c.str,a=c.pos;a<f&&(n=e.src.charCodeAt(a),je(n)||10===n);a++);}(a>=f||41!==e.src.charCodeAt(a))&&(m=!0),a++}if(m){if(void 0===e.env.references)return!1;if(a<f&&91===e.src.charCodeAt(a)?(d=a+1,(a=e.md.helpers.parseLinkLabel(e,a))>=0?s=e.src.slice(d,a++):a=o+1):a=o+1,s||(s=e.src.slice(i,o)),!(l=e.env.references[Pe(s)]))return e.pos=h,!1;u=l.href,p=l.title}return r||(e.pos=i,e.posMax=o,e.push("link_open","a",1).attrs=t=[["href",u]],p&&t.push(["title",p]),e.md.inline.tokenize(e),e.push("link_close","a",-1)),e.pos=a,e.posMax=f,!0}],["image",function(e,r){var t,n,s,o,i,a,c,l,u,p,h,f,d,m="",g=e.pos,_=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(a=e.pos+2,(i=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return!1;if((c=i+1)<_&&40===e.src.charCodeAt(c)){for(c++;c<_&&(n=e.src.charCodeAt(c),Ve(n)||10===n);c++);if(c>=_)return!1;for(d=c,(u=e.md.helpers.parseLinkDestination(e.src,c,e.posMax)).ok&&(m=e.md.normalizeLink(u.str),e.md.validateLink(m)?c=u.pos:m=""),d=c;c<_&&(n=e.src.charCodeAt(c),Ve(n)||10===n);c++);if(u=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<_&&d!==c&&u.ok)for(p=u.str,c=u.pos;c<_&&(n=e.src.charCodeAt(c),Ve(n)||10===n);c++);else p="";if(c>=_||41!==e.src.charCodeAt(c))return e.pos=g,!1;c++}else{if(void 0===e.env.references)return!1;if(c<_&&91===e.src.charCodeAt(c)?(d=c+1,(c=e.md.helpers.parseLinkLabel(e,c))>=0?o=e.src.slice(d,c++):c=i+1):c=i+1,o||(o=e.src.slice(a,i)),!(l=e.env.references[Ue(o)]))return e.pos=g,!1;m=l.href,p=l.title}return r||(s=e.src.slice(a,i),e.md.inline.parse(s,e.md,e.env,f=[]),(h=e.push("image","img",0)).attrs=t=[["src",m],["alt",""]],h.children=f,h.content=s,p&&t.push(["title",p])),e.pos=c,e.posMax=_,!0}],["autolink",function(e,r){var t,n,s,o,i,a,c=e.pos;if(60!==e.src.charCodeAt(c))return!1;for(i=e.pos,a=e.posMax;;){if(++c>=a)return!1;if(60===(o=e.src.charCodeAt(c)))return!1;if(62===o)break}return t=e.src.slice(i+1,c),Ge.test(t)?(n=e.md.normalizeLink(t),!!e.md.validateLink(n)&&(r||((s=e.push("link_open","a",1)).attrs=[["href",n]],s.markup="autolink",s.info="auto",(s=e.push("text","",0)).content=e.md.normalizeLinkText(t),(s=e.push("link_close","a",-1)).markup="autolink",s.info="auto"),e.pos+=t.length+2,!0)):!!Ze.test(t)&&(n=e.md.normalizeLink("mailto:"+t),!!e.md.validateLink(n)&&(r||((s=e.push("link_open","a",1)).attrs=[["href",n]],s.markup="autolink",s.info="auto",(s=e.push("text","",0)).content=e.md.normalizeLinkText(t),(s=e.push("link_close","a",-1)).markup="autolink",s.info="auto"),e.pos+=t.length+2,!0))}],["html_inline",function(e,r){var t,n,s,o=e.pos;return!!e.md.options.html&&(s=e.posMax,!(60!==e.src.charCodeAt(o)||o+2>=s)&&(!(33!==(t=e.src.charCodeAt(o+1))&&63!==t&&47!==t&&!function(e){var r=32|e;return r>=97&&r<=122}(t))&&(!!(n=e.src.slice(o).match($e))&&(r||(e.push("html_inline","",0).content=e.src.slice(o,o+n[0].length)),e.pos+=n[0].length,!0))))}],["entity",function(e,t){var n,s,o=e.pos,i=e.posMax;if(38!==e.src.charCodeAt(o))return!1;if(o+1<i)if(35===e.src.charCodeAt(o+1)){if(s=e.src.slice(o).match(Ye))return t||(n="x"===s[1][0].toLowerCase()?parseInt(s[1].slice(1),16):parseInt(s[1],10),e.pending+=Je(n)?We(n):We(65533)),e.pos+=s[0].length,!0}else if((s=e.src.slice(o).match(Ke))&&He(r,s[1]))return t||(e.pending+=r[s[1]]),e.pos+=s[0].length,!0;return t||(e.pending+="&"),e.pos++,!0}]],or=[["balance_pairs",function(e){var r,t=e.tokens_meta,n=e.tokens_meta.length;for(Qe(0,e.delimiters),r=0;r<n;r++)t[r]&&t[r].delimiters&&Qe(0,t[r].delimiters)}],["strikethrough",Be.postProcess],["emphasis",Oe.postProcess],["text_collapse",function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;r<o;r++)s[r].nesting<0&&n--,s[r].level=n,s[r].nesting>0&&n++,"text"===s[r].type&&r+1<o&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t)}]];function ir(){var e;for(this.ruler=new B,e=0;e<sr.length;e++)this.ruler.push(sr[e][0],sr[e][1]);for(this.ruler2=new B,e=0;e<or.length;e++)this.ruler2.push(or[e][0],or[e][1])}ir.prototype.skipToken=function(e){var r,t,n=e.pos,s=this.ruler.getRules(""),o=s.length,i=e.md.options.maxNesting,a=e.cache;if(void 0===a[n]){if(e.level<i)for(t=0;t<o&&(e.level++,r=s[t](e,!0),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos}else e.pos=a[n]},ir.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;t<s&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},ir.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),i=(o=this.ruler2.getRules("")).length,s=0;s<i;s++)o[s](a)},ir.prototype.State=nr;var ar=ir;function cr(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach((function(r){r&&Object.keys(r).forEach((function(t){e[t]=r[t]}))})),e}function lr(e){return Object.prototype.toString.call(e)}function ur(e){return"[object Function]"===lr(e)}function pr(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var hr={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};var fr={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]||r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},dr="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function mr(e){var r=e.re=function(e){var r={};return r.src_Any=y.source,r.src_Cc=A.source,r.src_Z=x.source,r.src_P=t.source,r.src_ZPCc=[r.src_Z,r.src_P,r.src_Cc].join("|"),r.src_ZCc=[r.src_Z,r.src_Cc].join("|"),r.src_pseudo_letter="(?:(?![><\uff5c]|"+r.src_ZPCc+")"+r.src_Any+")",r.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",r.src_auth="(?:(?:(?!"+r.src_ZCc+"|[@/\\[\\]()]).)+@)?",r.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",r.src_host_terminator="(?=$|[><\uff5c]|"+r.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+r.src_ZPCc+"))",r.src_path="(?:[/?#](?:(?!"+r.src_ZCc+"|[><\uff5c]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+r.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+r.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+r.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+r.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+r.src_ZCc+"|[']).)+\\'|\\'(?="+r.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+r.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+r.src_ZCc+").|\\!+(?!"+r.src_ZCc+"|[!]).|\\?(?!"+r.src_ZCc+"|[?]).)+|\\/)?",r.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',r.src_xn="xn--[a-z0-9\\-]{1,59}",r.src_domain_root="(?:"+r.src_xn+"|"+r.src_pseudo_letter+"{1,63})",r.src_domain="(?:"+r.src_xn+"|(?:"+r.src_pseudo_letter+")|(?:"+r.src_pseudo_letter+"(?:-|"+r.src_pseudo_letter+"){0,61}"+r.src_pseudo_letter+"))",r.src_host="(?:(?:(?:(?:"+r.src_domain+")\\.)*"+r.src_domain+"))",r.tpl_host_fuzzy="(?:"+r.src_ip4+"|(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%)))",r.tpl_host_no_ip_fuzzy="(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%))",r.src_host_strict=r.src_host+r.src_host_terminator,r.tpl_host_fuzzy_strict=r.tpl_host_fuzzy+r.src_host_terminator,r.src_host_port_strict=r.src_host+r.src_port+r.src_host_terminator,r.tpl_host_port_fuzzy_strict=r.tpl_host_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_port_no_ip_fuzzy_strict=r.tpl_host_no_ip_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+r.src_ZPCc+"|>|$))",r.tpl_email_fuzzy='(^|[><\uff5c]|"|\\(|'+r.src_ZCc+")("+r.src_email_name+"@"+r.tpl_host_fuzzy_strict+")",r.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+r.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+r.tpl_host_port_fuzzy_strict+r.src_path+")",r.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+r.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+r.tpl_host_port_no_ip_fuzzy_strict+r.src_path+")",r}(e.__opts__),n=e.__tlds__.slice();function s(e){return e.replace("%TLDS%",r.src_tlds)}e.onCompile(),e.__tlds_replaced__||n.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),n.push(r.src_xn),r.src_tlds=n.join("|"),r.email_fuzzy=RegExp(s(r.tpl_email_fuzzy),"i"),r.link_fuzzy=RegExp(s(r.tpl_link_fuzzy),"i"),r.link_no_ip_fuzzy=RegExp(s(r.tpl_link_no_ip_fuzzy),"i"),r.host_fuzzy_test=RegExp(s(r.tpl_host_fuzzy_test),"i");var o=[];function i(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}e.__compiled__={},Object.keys(e.__schemas__).forEach((function(r){var t=e.__schemas__[r];if(null!==t){var n={validate:null,link:null};if(e.__compiled__[r]=n,"[object Object]"===lr(t))return!function(e){return"[object RegExp]"===lr(e)}(t.validate)?ur(t.validate)?n.validate=t.validate:i(r,t):n.validate=function(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}(t.validate),void(ur(t.normalize)?n.normalize=t.normalize:t.normalize?i(r,t):n.normalize=function(e,r){r.normalize(e)});!function(e){return"[object String]"===lr(e)}(t)?i(r,t):o.push(r)}})),o.forEach((function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)})),e.__compiled__[""]={validate:null,normalize:function(e,r){r.normalize(e)}};var a=Object.keys(e.__compiled__).filter((function(r){return r.length>0&&e.__compiled__[r]})).map(pr).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><\uff5c]|"+r.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><\uff5c]|"+r.src_ZPCc+"))("+a+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),function(e){e.__index__=-1,e.__text_cache__=""}(e)}function gr(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s}function _r(e,r){var t=new gr(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function br(e,r){if(!(this instanceof br))return new br(e,r);var t;r||(t=e,Object.keys(t||{}).reduce((function(e,r){return e||hr.hasOwnProperty(r)}),!1)&&(r=e,e={})),this.__opts__=cr({},hr,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=cr({},fr,e),this.__compiled__={},this.__tlds__=dr,this.__tlds_replaced__=!1,this.re={},mr(this)}br.prototype.add=function(e,r){return this.__schemas__[e]=r,mr(this),this},br.prototype.set=function(e){return this.__opts__=cr(this.__opts__,e),this},br.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,t,n,s,o,i,a,c;if(this.re.schema_test.test(e))for((a=this.re.schema_search).lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i)),this.__index__>=0},br.prototype.pretest=function(e){return this.re.pretest.test(e)},br.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},br.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(_r(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(_r(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},br.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter((function(e,r,t){return e!==t[r-1]})).reverse(),mr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,mr(this),this)},br.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},br.prototype.onCompile=function(){};var kr=br,vr=2147483647,Cr=36,yr=/^xn--/,Ar=/[^\x20-\x7E]/,xr=/[\x2E\u3002\uFF0E\uFF61]/g,Dr={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},wr=Math.floor,Er=String.fromCharCode;
/*! https://mths.be/punycode v1.4.1 by @mathias */function qr(e){throw new RangeError(Dr[e])}function Sr(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function Fr(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),n+Sr((e=e.replace(xr,".")).split("."),r).join(".")}function Lr(e){for(var r,t,n=[],s=0,o=e.length;s<o;)(r=e.charCodeAt(s++))>=55296&&r<=56319&&s<o?56320==(64512&(t=e.charCodeAt(s++)))?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--):n.push(r);return n}function zr(e){return Sr(e,(function(e){var r="";return e>65535&&(r+=Er((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=Er(e)})).join("")}function Tr(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function Ir(e,r,t){var n=0;for(e=t?wr(e/700):e>>1,e+=wr(e/r);e>455;n+=Cr)e=wr(e/35);return wr(n+36*e/(e+38))}function Mr(e){var r,t,n,s,o,i,a,c,l,u,p,h=[],f=e.length,d=0,m=128,g=72;for((t=e.lastIndexOf("-"))<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&qr("not-basic"),h.push(e.charCodeAt(n));for(s=t>0?t+1:0;s<f;){for(o=d,i=1,a=Cr;s>=f&&qr("invalid-input"),((c=(p=e.charCodeAt(s++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:Cr)>=Cr||c>wr((vr-d)/i))&&qr("overflow"),d+=c*i,!(c<(l=a<=g?1:a>=g+26?26:a-g));a+=Cr)i>wr(vr/(u=Cr-l))&&qr("overflow"),i*=u;g=Ir(d-o,r=h.length+1,0==o),wr(d/r)>vr-m&&qr("overflow"),m+=wr(d/r),d%=r,h.splice(d++,0,m)}return zr(h)}function Rr(e){var r,t,n,s,o,i,a,c,l,u,p,h,f,d,m,g=[];for(h=(e=Lr(e)).length,r=128,t=0,o=72,i=0;i<h;++i)(p=e[i])<128&&g.push(Er(p));for(n=s=g.length,s&&g.push("-");n<h;){for(a=vr,i=0;i<h;++i)(p=e[i])>=r&&p<a&&(a=p);for(a-r>wr((vr-t)/(f=n+1))&&qr("overflow"),t+=(a-r)*f,r=a,i=0;i<h;++i)if((p=e[i])<r&&++t>vr&&qr("overflow"),p==r){for(c=t,l=Cr;!(c<(u=l<=o?1:l>=o+26?26:l-o));l+=Cr)m=c-u,d=Cr-u,g.push(Er(Tr(u+m%d,0))),c=wr(m/d);g.push(Er(Tr(c,0))),o=Ir(t,f,n==s),t=0,++n}++t,++r}return g.join("")}function Br(e){return Fr(e,(function(e){return yr.test(e)?Mr(e.slice(4).toLowerCase()):e}))}function Nr(e){return Fr(e,(function(e){return Ar.test(e)?"xn--"+Rr(e):e}))}var Or="1.4.1",Pr={decode:Lr,encode:zr},jr={version:Or,ucs2:Pr,toASCII:Nr,toUnicode:Br,encode:Rr,decode:Mr},Ur=e(Object.freeze({__proto__:null,decode:Mr,encode:Rr,toUnicode:Br,toASCII:Nr,version:Or,ucs2:Pr,default:jr})),Vr={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},Zr=/^(vbscript|javascript|file|data):/,Gr=/^data:image\/(gif|png|jpeg|webp);/;function $r(e){var r=e.trim().toLowerCase();return!Zr.test(r)||!!Gr.test(r)}var Hr=["http:","https:","mailto:"];function Jr(e){var r=C.parse(e,!0);if(r.hostname&&(!r.protocol||Hr.indexOf(r.protocol)>=0))try{r.hostname=Ur.toASCII(r.hostname)}catch(e){}return C.encode(C.format(r))}function Wr(e){var r=C.parse(e,!0);if(r.hostname&&(!r.protocol||Hr.indexOf(r.protocol)>=0))try{r.hostname=Ur.toUnicode(r.hostname)}catch(e){}return C.decode(C.format(r),C.decode.defaultChars+"%")}function Yr(e,r){if(!(this instanceof Yr))return new Yr(e,r);r||w.isString(e)||(r=e||{},e="default"),this.inline=new ar,this.block=new Fe,this.core=new ce,this.renderer=new M,this.linkify=new kr,this.validateLink=$r,this.normalizeLink=Jr,this.normalizeLinkText=Wr,this.utils=w,this.helpers=w.assign({},S),this.options={},this.configure(e),r&&this.set(r)}return Yr.prototype.set=function(e){return w.assign(this.options,e),this},Yr.prototype.configure=function(e){var r,t=this;if(w.isString(e)&&!(e=Vr[r=e]))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach((function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2)})),this},Yr.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(r){t=t.concat(this[r].ruler.enable(e,!0))}),this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter((function(e){return t.indexOf(e)<0}));if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},Yr.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(r){t=t.concat(this[r].ruler.disable(e,!0))}),this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter((function(e){return t.indexOf(e)<0}));if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},Yr.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},Yr.prototype.parse=function(e,r){if("string"!=typeof e)throw new Error("Input data should be a String");var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},Yr.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},Yr.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},Yr.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},Yr}));
let dom = {
  create: function(attr = {}, parent) {

    var el = attr.el
      ? document.createElement(attr.el)
      : document.createElement("div");

    if (attr.el === "path" || attr.el === "svg") {
      el = document.createElementNS("http://www.w3.org/2000/svg", attr.el);
    }
    
    for (let key in attr) {
      var isAttr = key !== 'el' && key !== 'html';
      if (isAttr) el.setAttribute(key, attr[key]);
    }

    if (attr.html) el.innerHTML = attr.html;

    if (parent) parent.appendChild(el);

    return el;
  },
  empty: function(el){
    el.innerHTML = "";
    return el;
  },
  qs: function(selector, ctx){
    const el = ctx 
      ? ctx.querySelector(selector)
      : document.querySelector(selector);
    return el;
  },
  qsa: function(selector, ctx){
    const els = ctx 
      ? Array.from(ctx.querySelectorAll(selector))
      : Array.from(document.querySelectorAll(selector));
    return els;
  },
  gid: function(id) {
    return document.getElementById(id);
  },
  update: function(type, value) {
    var els = Array.from(document.querySelectorAll(`[data-type=${type}]`));
    els.forEach(el => el.innerHTML = value);
  },
  body: document.body
}

;(function(){ 

const dict = {
  "Your text will be cleared, are you sure?": "El text será borrado ¿estás seguro?",
  "Text cleared": "Texto borrado",
  "Restore?": "¿Deshacer?",
  "Switch to darkmode": "Cambiar a modo oscuro",
  "Switch to lightmode": "Cambiar a modo claro",
  "By": "Por",
  "to submit your prompt.": "para enviar tu ejercicio",
  "New blank page": "Nueva página en blanco",
  "Page is blank": "Página en blanco",
  "Number of words": "Número de palabras",
  "Fullscreen": "Pantalla completa",
  "Configure": "Ajustar",
  "Preview": "Previsualizar",
  "Spellcheck": "Corrector",
  "Theme": "Esquema de colores",
  "About": "Acerca de",
  "Start typing...": "Empieza a escribir...",
  "Word goal": "Objetivo de palabras",
  "Time limit": "Límite de tiempo",
  "Word": "Palabra",
  "Words": "Palabras",
  "word": "palabra",
  "words": "palabras",
  "in": "en",
  "Time": "Tiempo",
  "min": "min",
  "Enter a": "Introduce un",
  "in minutes": "en minutos",
  "Your name": "Tu nombre",
  "Your email": "Tu email",
  "No time limit": "Sin límite de tiempo",
  "No goal": "Sin objetivo",
  "Write during": "Escribe durante",
  "Write": "Escribe",
  "Write at least": "Escribe por lo menos",
  "Learn more": "Leer más",
  "min": "min",
  "sec": "seg",
  "seconds": "segundos",
  "The time is up!": "¡Se acabó el tiempo!",
  "Sending": "Enviando",
  "Sending reply to": "Enviando respuesta a",
  "from": "desde",
  "Copied link to clipboard": "Enlace copiado al portapapeles",
  "You've written during": "Has escrito durante",
  "minutes": "minutos",
  "You've reached": "Has alcanzado",
  "Pasting is not allowed": "No se permite copiar y pegar",
  "Copied to clipboard": "Texto copiado al portapapeles",
  "Copied all text to clipboard": "Texto copiado al portapapeles",
  "You ran out of time before completing the exercise. \n\n You'll have to start again.": "Se acabó el tiempo antes de completar el ejercicio. \n\n Tendrás que comenzar de nuevo.",
  "Log in or sign up to view this exercise": " Entra a tu cuenta o regístrate para poder ver este ejercicio",
  "Something went wrong, please submit your assignment again": "No se pudo enviar tu ejercicio, por favor inténtalo de nuevo",
  "Open in Blank Page": "Abrir en Blank Page",
  "Anonymous": "Anónimo",
  "Assignment will be available on": "El ejercicio estará disponible el",
  "at midnight (local time)": "a la media noche (hora local)",
  "Assignment expired. It was due": "El ejercicio ha expirado. La fecha límite para enviarlo fue el",
  "Submit": "Enviar",
  "for print": "para imprimir",
  "Your reply will be emailed to": "Tu ejercicio será enviado a",
  "Your submission is private.<br> You can choose to share it in the next step.": "Tu ejercicio es privado. Si quieres, puedes compartirlo en el siguiente paso.",
  "Create prompt (coming soon)": "Crear ejercicio (pronto)",
  "Language": "Idioma",
  "Spellcheck enabled": "Corrector habilitado",
  "Spellcheck disabled": "Corrector deshabilitado",
  "https://blank.page/etc/thanks": "https://blank.page/etc/gracias",
  "Color": "Color",
  "Time in minutes": "Tiempo en minutos",
  "Update": "Actualizar",
  "Your email will be sent to": "Tu email se enviará a",
  "Retry?" : "Reintentar",
  "Copy" : "Copiar",
  "Save" : "Guardar",
  "Download" : "Descargar",
  "Clear" : "Borrar",
  "before midnight (local time)" : "antes de la media noche (hora local)",
  "Build prompt" : "Crear ejercicio",
  "Update prompt" : "Actualizar ejercicio",
  "None" : "Ninguno",
  "Content saved" : "Texto guardado",
  "Copy URL" : "Copiar URL",
}

const englishWords = Object.keys(dict);
const spanishWords = Object.values(dict);

function t(key, reverse){
  var lang = state.get("pageLanguage") || state.get("language");
  var englishWord = key;
  var spanishWord = dict[key];

  if (reverse) {
    englishWord = englishWords[spanishWords.indexOf(key)];
    spanishWord = key;
  }

  if (!englishWord || !spanishWord) {
    console.log( "translation missing: " + key);
    return key;
  }

  const translation = lang === "en" ? key : dict[key]// english input;
  return translation

}

 function tDate(date) {
    const monthNames = {
      "January": "Enero", 
      "February": "Febrero",
      "March": "Marzo",
      "April": "Abril",
      "May": "Mayo",
      "June": "Junio",
      "July": "Julio",
      "August": "Agosto",
      "September": "Septiembre",
      "October": "Octubre",
      "November": "Noviembre",
      "December": "Diciembre"
    }
    var lang = typeof state === "undefined" ? "en" : state.get("pageLanguage");
    if (state.get("pageLanguage")) lang = state.get("pageLanguage"); 
    const months = lang === "en" ? Object.keys(monthNames) : Object.values(monthNames); 
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return lang === "en" 
      ? `${month} ${day}, ${year}`
      : `${day} de ${month} ${year}`;
  };

  window.t = t;
  window.tDate = tDate;
})();

const utils = {};

utils.isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;

utils.generatePageUrl = function() {
  const collection = state.get("pageCollection");
  const pageUrl = `https://blank.page/${collection}/${state.get("pageId")}`;
  return pageUrl;
}

utils.copyText = function(txt){
    navigator.clipboard.writeText(txt).then(function() {
      writeFlash.show({ message: 'Copied ' + txt +' to clipboard' });
    }, function(err) {
      writeFlash.show({ message: 'Could not copy text: ' + err });
  });
}

// senseless feature requested
utils.fixUrl = function(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  else return  "https://" + url
}

utils.linkHelper = function(txt, url) {
  if (txt === undefined) return dom.create();
  if (!url) return dom.create({html: txt});
  return dom.create({el: "a", href: url, html: txt, target: "_blank"});
}

utils.msToMin = function(ms) {
  return ms/1000/60;
}

utils.minsToMs = function(mins) {
  return mins*1000*60;
}

utils.msToString = function(ms) {
  const min = utils.msToMin(ms);
  return min > 1 ? `${min} ${t("minutes")}`  : `${ms/1000} ${t("seconds")}`
}

utils.pickRandom = function(arr) {
  if (!arr) throw "Empty Array";
  return arr[Math.floor(Math.random() * arr.length)];
}

utils.dirify = function(word){
  word = word.split(" ").join("-");
  word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  word = word.replace(/[^a-zA-Z0-9-]/g,'');
  return word.toLowerCase();
}

utils.pluralize = function pluralize(word, wordCount) {
  return word + (wordCount === 1 ? '' : 's');
}

utils.wordCount = function(string){
  if (!string) return 0;
  const arr = string.split(" ")
      .map(function(word){
        if (!word) return false;
        return word.split("\n");
    });
  return [].concat.apply([], arr).filter(Boolean).length;
}

utils.metaKey = function(){
  return navigator.platform.toUpperCase().indexOf('MAC')>=0 ? "⌘" : "Ctrl + "
}

utils.findGetParameter = function(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

utils.humanize = function() {
  const wordGoal = state.get("pageWordGoal");
  const timeLimit = state.get("pageTimeLimit");
  if (!wordGoal && !timeLimit) return "";
  if (!wordGoal && timeLimit) return `${t('Write during')} ${timeLimit > 60000 ? utils.msToMin(timeLimit) + " min" : timeLimit/1000 + " " + t("seconds")}`;
  if (wordGoal && !timeLimit) return `${t('Write')} ${wordGoal} ${t('word', true)}`;
  const secs = timeLimit/1000;
  const label = secs > 60 ? `${secs/60} ${t('min')}` : `${secs} ${t('sec')}`;

  return `${t('Write')} ${wordGoal} ${t('word', true)} ${t('in')} ${label}`;
}

utils.ajax = function(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

utils.throttle = _.throttle;
utils.debounce = _.debounce;

utils.download = function() {
  const data = writeSheet.getContent();
  if (!data) return false;
  const filename = state.get("pageTitle") || data.split(" ").filter((word, i) => i < 5).join("-");
  const type = 'text/plain';
  var file = new Blob([data], {type: type});
  writeLog("Download");
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 0);
  }
}

utils.openFile = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    writeSheet.setContent(text);
  };
  reader.readAsText(input.files[0]);
}

utils.simulateClick = function (elem) {
  // Create our event (with options)
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // If cancelled, don't dispatch our event
  var canceled = !elem.dispatchEvent(evt);
};

utils.isDev = function(){
  return window.location.protocol === "file:" || window.location.hostname === "localhost"
}

utils.language = function(){
  var language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf("-") !== -1) language = language.split("-")[0];
  return language || "en";
}

var ajax = {};

ajax.send = function (url, callback, method, data, async=true, credentials) {
  var x = new XMLHttpRequest();
  x.open(method, url, async);
  x.onreadystatechange = function() { if (x.readyState == 4) callback(x.responseText)};
  if (credentials) x.setRequestHeader('Authorization', 'Basic ' + credentials);
  if (method == 'POST') x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  x.send(data)
};

ajax.get = function (url, data, callback = function(){}, async) {
  var query = [];
  for (var key in data) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  var credentials = data.username ? window.btoa(data.username + ':' + data.password) : false;
  ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async, credentials)
};

ajax.post = function (url, data, callback = function(){}, async) {
  var query = [];
  for (var key in data) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  var credentials = data.username ? window.btoa(data.username + ':' + data.password) : false;
  ajax.send(url, callback, 'POST', query.join('&'), async , credentials)
};

utils.generateUID = function(size = 20) {
  return new Array(size).join().replace(/(.|$)/g, function() {
    return ((Math.random() * 36) | 0)
      .toString(36)
      [Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
  });
}

utils.isValidEmail = function(email) { return /^.+@.+\..+$/.test(email); }
utils.isValidDate = function(date)   { return (date instanceof Date && isFinite(date)) }
utils.isObject = function(value)     { return (typeof value === "object" && value !== null) }

utils.throttle = function(callback, limit=1000) {
  var waiting = false;                      // Initially, we're not waiting
  return function () {                      // We return a throttled function
      if (!waiting) {                       // If we're not waiting
          callback.apply(this, arguments);  // Execute users function
          waiting = true;                   // Prevent future invocations
          setTimeout(function () {          // After a period of time
              waiting = false;              // And allow future invocations
          }, limit);
      }
  }
};

utils.rulesToString = function(rules) {
  var message = "";

  if (rules.length > 1) {
    message = `${t("Write")} ${state.get("pageWordGoal")} ${t("words")} ${t("in")} ${utils.msToMin(state.get("pageTimeLimit"))} ${t("minutes")}`
  }
  
  else message = rules.reduce((acc, rule) => {
      const prop = Object.keys(rule)[0];
      const val = Object.values(rule)[0];
      if (prop === "pageTimeLimit") 
        return acc + t("Write during") + " " + utils.msToMin(state.get("pageTimeLimit")) + " " + t("minutes") + "\n";
      if (prop === "pageWordGoal")
        return acc + t("Write at least") + " " + state.get("pageWordGoal") + " " + t("words") + "\n";
    }, "");

    return message
}

utils.getRules = function(){
  return ["pageTimeLimit", "pageWordGoal"].map(key => {
      if (!state.get(key)) return false;
      else return { [key]: state.get(key) };
    }).filter(Boolean);
}

utils.isEmbedded = function() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

utils.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

utils.tryJson = function(jsonString){
  try {
    var o = JSON.parse(jsonString);
    if (o && typeof o === "object") return o;
  }
  catch (e) { }

  return {};
};

// todo doesn't work yet
utils.restore = function(){
  const backup = state.get("pageBackup");
  if (!backup) return;

  const data = JSON.parse(backup);

  const values = Object.values(data);

  const keys = Object.keys(data).forEach((key, i) => {
    const prop = key.split("-")[0];
    if (key === "pageContent") { 
      writeSheet.setContent(values[i]);
    } 
    state.set(prop, values[i]);
  });

  writeSheet.change();
}
var actions = {
  copy: (e) => {
    e.preventDefault();
    e.stopPropagation();
    writeConfigure.hide()
    const enabled = writeSheet.enabled();
    writeSheet.enable();
    writeSheet.select();
    document.execCommand('copy');
    writeSheet.deselect();
    writeFlash.show({ message: t("Copied all text to clipboard") });
    writeLog("Button Copy");
    writeCursor.reset();
    if (!enabled) writeSheet.disable();
  },
  spellcheck: (e) => {
    e.preventDefault();
    e.stopPropagation();
    writeConfigure.hide()
    const bool = state.set("spellcheck", !state.get("spellcheck"))
    writeLog("Spellcheck", {props: {type: bool ? "enabled" : "disabled"}});
    writeFlash.show({ message: t("Spellcheck " + (bool ? "enabled" : "disabled")) });
  },
  preview: (e) => {
    e.preventDefault();
    e.stopPropagation();
    writeConfigure.hide();
    const bool = state.set("preview", !state.get("preview"));
    writeLog("Preview", {props: {type: bool ? "Enter preview" : "Exit preview"}});
    writePreview.toggle(bool);
    //if (bool) writeFlash.show({message: "Previewing"})
  },
  retry: (e) => {
    e.preventDefault();
    e.stopPropagation();
    writeConfigure.hide();
    const confirmation = confirm(t("Your text will be cleared, are you sure?"));
    if (!confirmation) return;
    const failedFlashMessage = dom.gid("failed");
    writeLog("Button Retry");
    if (failedFlashMessage) failedFlashMessage.parentNode.removeChild(failedFlashMessage);
    write.reset();
  },
  fullscreen: () => {
    writeFullscreen.toggleFullscreen();
  },
  download: utils.download,
  restore: utils.restore,
  copyUrl: () => { 
    navigator.clipboard.writeText(window.location.href.split('?')[0]);
    writeFlash.show({ message: t("URL copied to clipboard") });
  }
}

// these are the homepage defaults which are overridden when a page is loaded

function WriteSettings(){

  const lang = navigator.language.substring(0,2).toLowerCase() === "es" ? "es" : "en";
  const englishDescription = `
A simple text editor that's always in your browser.

All your content is private and nothing is stored on a server. Be sure to save your text somewhere else when you're done.

If you are enjoying it, please consider a donation to help us keep it free.

**[Donate now](https://www.gofundme.com/f/keep-blank-page-free)**
**[Feedback](https://forms.reform.app/ZCfKMr/feedback/yhb9tc)**
**[Blog](https://worklogs.blank.page)**
**[Contact](https://blank.page/p/contact)**
`;

    const spanishDescription = `

El editor de texto que siempre está en tu navegador.

Todo lo que escribes es privado y nunca se guarda en un servidor. Asegúrate de guardar tu texto en otro lugar.

Si lo estás disfrando, por favor considera una donación para ayudarnos a mantenerlo libre para todos.

**[Donar ahora](https://www.gofundme.com/f/keep-blank-page-free)**
**[Feedback](https://forms.reform.app/ZCfKMr/feedback/yhb9tc)**
**[Blog](https://worklogs.blank.page)**
**[Contacto](https://blank.page/p/contact)**
`;

  const emptyIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-editor">
    <style>
        path { fill: black; }
        @media (prefers-color-scheme: dark) { path { fill: white; }}
    </style>
    <path d="M10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z"/>
  </svg>`;

  const populatedIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-editor">
    <style>
      path { fill: black; }
      @media (prefers-color-scheme: dark) { path { fill: white; }}
    </style>
    <path d="M4 14H12V16H4V14ZM4 10H12V12H4V10ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z" />
  </svg>`;

  return {
    pageTitle: (window.location.pathname.split("/").length - 1) > 1 
                  ? lang === "es" ? "Cargando..." : "Loading..."
                  : lang === "es" ? "Página en blanco" : "New blank page",
    pageTheme: "d", // [a,b,c,d,e,f,g]
    pageId: "",
    pageCollection: "",
    pagePlaceholder: "",
    pageDestinationEmail: "",
    pageRedirectUrl: "",
    pageConfirmationTitle: lang === "es" ? "¡Éxito!": "Success!",
    pageConfirmationMessage: lang === "es" ? "Guardamos tu contenido": "Your content was saved",
    pageConfirmationAction: "custom",
    pageConfirmationActionButtonLabel: "OK",
    pageConfirmationActionButtonUrl: "",
    pageSubmitLabel: "Submit",
    pageContent: "",
    pageDescription: lang === "es" ? englishDescription : spanishDescription,
    pageImageUrl: "",
    pageWordGoal: 0,
    pageTimeLimit: 0,
    pageLanguage: "",
    pageStartDate: false,
    pageEndDate: false,
    pageShare: false,
    pageDisablePaste: false,
    pageSpellcheck: false,
    pageDisableBackspace: false,
    pageSpaceId: 0,
    pageAuthorName: false,
    pageAuthorEmail: false,
    pageCreationDate: Date.now(),
    pageElapsed: 0,
    pageWordCount: 0,
    pageScroll: 0,
    pageSelectionStart: 0,
    pageSelectionEnd: 0,
    pageCaretXY: [0,0],
    pageVisited: false,
    pageUrl: "https://blank.page",
    darkmode: window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false,
    language: lang,
    builder: false,
    keyboardIdle: 0,
    pageAuthorId: 0,
    belongsToPage: "",
    userEmail: "",
    userName: "",
    spellcheck: false,
    preview: false,
    // not builder
    configureOptions: [
      { label: "Word goal",  type: "pageWordGoal",  cb: (val)=> { writeLog("Word Goal", {props: {Count: val}}); state.set("pageWordGoal", val); } },
      { label: "Time limit", type: "pageTimeLimit", cb: (val)=> { writeLog("Time Limit", {props: {Mins: val}}); state.set("pageTimeLimit", utils.minsToMs(val)); } },
      { label: "Language",   type: "pageLanguage",  cb: (val)=> { writeLog("Language", {props: {Language: val}}); state.set("pageLanguage", val); } },
      // { label: "separator"},
      // { label: "Create prompt (coming soon)",  cb: (val)=> state.set("pageWordGoal", val)  }  
    ],
    wordcountOptions: [
      { label: "Clear", shortcut: utils.isMac ? "⇧⌘X" : "Shift Ctrl—X",  cb: actions.retry },
      { label: "Copy", shortcut: utils.isMac ? "⇧⌘C" : "Shift Ctrl—C", cb: actions.copy  },
      { label: "Download", shortcut: utils.isMac ? "⌘S" : "Ctrl—S", cb: actions.download }
    ],
    enDescription: englishDescription,
    esDescription: spanishDescription,
    emptyIcon: emptyIcon,
    populatedIcon: populatedIcon,
  }

}


const settings = new WriteSettings()

const dao = [

  // public, appears in builder

  // The title of the page
  {
    name: "pageTitle",
    label: "Title",
    type: "string",
    default: settings.pageTitle,
    private: false,
    save: false
  },

  {
    name: "pageTheme",
    label: "Theme",
    type: "string",
    default: settings.pageTheme, 
    private: false,
    save: false
  },

  {
    name: "pageId",
    label: "URL",
    type: "id",
    default: settings.pageId,
    private: false,
    save: true
  },

  {
    name: "pageCollection",
    label: "Collection",
    type: "string",
    default: settings.pageCollection,
    private: false,
    save: false,
  },

  // The prompt for this exercise
  {
    name: "pagePlaceholder",
    label: "Placeholder",
    type: "string",
    default: settings.pagePlaceholder,
    private: false,
    save: false
  },

  {
    name: "pageDestinationEmail",
    label: "Email reply to",
    type: "email",
    default: settings.pageDestinationEmail,
    private: false,
    save: false,
  },

  // after the user submits, where do we send him?
  {
    name: "pageRedirectUrl",
    label: "Redirect after submission",
    type: "url",
    default: settings.pageRedirectUrl,
    private: false,
    save: false
  },

  {
    name: "pageConfirmationAction",
    label: "Action",
    type: "string",
    default: settings.pageConfirmationAction,
    private: false,
    save: false
  },

  {
    name: "pageConfirmationActionButtonLabel",
    label: "Button label",
    type: "string",
    default: settings.pageConfirmationActionButtonLabel,
    private: false,
    save: false
  },

  {
    name: "pageConfirmationActionButtonUrl",
    label: "Button link",
    type: "string",
    default: settings.pageConfirmationActionButtonUrl,
    private: false,
    save: false
  },

  {
    name: "pageConfirmationTitle",
    label: "Confirmation Title",
    type: "url",
    default: settings.pageConfirmationTitle,
    private: false,
    save: false
  },

  {
    name: "pageConfirmationMessage",
    label: "Confirmation Message",
    type: "string",
    default: settings.pageConfirmationMessage,
    private: false,
    save: false
  },




  // Text on the submit button
  {
    name: "pageSubmitLabel",
    label: "Submit button text",
    type: "url",
    default: settings.pageSubmitLabel,
    private: false,
    save: false
  },

  // The content of the exercise
  {
    name: "pageContent",
    label: "Page Content",
    type: "string",
    default: settings.pageContent,
    private: true,
    save: true
  },

  // The description of this exercise
  {
    name: "pageDescription",
    label: "Description",
    type: "string",
    default: settings.pageDescription,
    private: false,
    save: false
  },
  // An accompanying image for the description
  // TODO change to pageDescriptionImageUrl
  {
    name: "pageImageUrl",
    label: "Description image",
    type: "url",
    default: settings.pageImageUrl,
    private: false,
    save: false,
  },
  // How many words are suggested for this exercise (soft requirement)
  {
    name: "pageWordGoal",
    label: "Word goal",
    type: "number",
    default: settings.pageWordGoal,
    private: false,
    save: true
  },
  // How much time is allowed to complete the exercise
  {
    name: "pageTimeLimit",
    label: "Time limit",
    type: "number",
    default: settings.pageTimeLimit,
    private: false,
    save: true
  },

  // The laguage of the page
  {
    name: "pageLanguage",
    label: "Language",
    type: "string",
    default: "",
    private: false,
    save: false
  },

  // when the page is available for submissions
  {
    name: "pageStartDate",
    label: "Start date",
    type: "date",
    default: settings.pageStartDate,
    private: false,
    save: false
  },

  // when the page is blocked for submissions
  {
    name: "pageEndDate",
    label: "End date",
    type: "date",
    default: settings.pageEndDate,
    private: false,
    save: false
  },

  {
    name: "pageShare",
    label: "Enable sharing",
    type: "boolean",
    default: settings.pageShare,
    private: false,
    save: false
  },

  // Can the user paste?
  {
    name: "pageDisablePaste",
    label: "Disable paste",
    type: "boolean",
    default: settings.pageDisablePaste,
    private: false,
    save: false
  },

  // Enable spellcheck
  {
    name: "pageSpellcheck",
    label: "Enable spellcheck",
    type: "boolean",
    default: settings.pageSpellcheck,
    private: false,
    save: false
  },

  // Disable backspace
  {
    name: "pageDisableBackspace",
    label: "Disable backspace",
    type: "boolean",
    default: settings.pageDisableBackspace,
    private: false,
    save: false
  },

  // Page integration
  {
    name: "pageDestination",
    label: "Destination",
    type: "string",
    default: false,
    private: false,
    save: false
  },
  
  /* Private, does not appear in builder */

  // author metadata
   {
    name: "pageAuthorName",
    label: "Page Author Name",
    type: "string",
    default: settings.pageAuthorName,
    private: true,
    save: true,
  },
  {
    name: "pageAuthorEmail",
    label: "Page Author Email",
    type: "email",
    default: settings.pageAuthorEmail,
    private: true,
    save: true,
  },


  // When this page was created
  {
    name: "pageCreationDate",
    label: "Page Creation Date",
    type: "string",
    default: settings.pageCreationDate,
    private: true,
    save: false
  },
  // How many seconds have ellapsed since the user begun writing
  {
    name: "pageElapsed",
    label: "Page Elapsed",
    type: "number",
    default: settings.pageElapsed,
    private: true,
    save: true
  },
  // How many words are in the exercise
  {
    name: "pageWordCount",
    label: "Page Word Count",
    type: "number",
    default: settings.pageWordCount,
    private: true,
    save: true
  },
  // Scroll offset of the sheet
  {
    name: "pageScroll",
    label: "Page Scroll",
    type: "number",
    default: settings.pageScroll,
    private: true,
    save: true
  },
  // Where does the selection start (or caret position)
  {
    name: "pageSelectionStart",
    label: "Page Selection Start",
    type: "number",
    default: settings.pageSelectionStart,
    private: true,
    save: true
  },
  // Where the selection ends
  {
    name: "pageSelectionEnd",
    label: "Page Selection End",
    type: "number",
    default: settings.pageSelectionEnd,
    private: true,
    save: true
  },

  // Page URL
  {
    name: "pageUrl",
    label: "Page URL",
    type: "url",
    default: settings.pageUrl,
    private: true,
    save: false
  },

    // if it is the first time visitor we onboard them
  {
    name: "pageVisited",
    label: "Has visited before",
    type: "boolean",
    default: settings.pageVisited,
    private: true,
    save: true,
  },
  // system level fields
  {
    name: "darkmode",
    label: "Dark Mode",
    type: "boolean",
    default: settings.darkmode,
    private: true,
    save: true,
  },
  // internal, to display the builder sidebar
  {
    name: "builder",
    label: "Builder",
    type: "boolean",
    default: settings.builder,
    private: true,
    save: true
  },

  // how many seconds have passed since the user typed something
  // mostly for showing UI, but we could also use it for stream of
  // thought exercises where you can't pause while writing.
  {
    name: "keyboardIdle",
    label: "Keyboard Idle",
    type: "number",
    default: settings.keyboardIdle,
    private: true,
    save: false,
  },
  
  // we need a page author
  {
    name: "pageAuthorId",
    label: "Page Author Id",
    type: "string",
    default: settings.pageAuthorId,
    private: true,
    save: false,
  },

  // in order to save completed exercises 
  // in the correct collection within a page 
  {
    name: "belongsToPage",
    label: "Belongs to page",
    type: "string",
    default: settings.belongsToPage,
    private: true,
    save: false,
  },
  
  {
    name: "userEmail",
    label: "Email",
    type: "email",
    default: settings.userEmail,
    private: true,
    save: true
  },

  {
    name: "userName",
    label: "Name",
    type: "string",
    default: settings.userName,
    private: true,
    save: true
  },

  {
    name: "spellcheck",
    label: "Spellcheck",
    type: "boolean",
    default: settings.spellcheck,
    private: true,
    save: true
  },

  // don't need to save previewing state
  {
    name: "preview",
    label: "Preview",
    type: "boolean",
    default: false,
    private: true,
    save: false
  },

    // public editor default language
  {
    name: "language",
    label: "Language",
    type: "string",
    default: settings.language,
    private: true,
    save: true
  },

];

dao.forEach(thing => {
  thing.clean = function(value){
     if (thing.type === "number") return isNaN(value) ? 0 : parseInt(value, 10);
     if (thing.type === "string") return value  || "";
     if (thing.type === "email") return value  || "";
     if (thing.type === "boolean") return value === "true" || value === true ? true : false;
     if (thing.type === "url") return value || "";
     if (thing.type === "id") return value || 0;
     if (thing.type === "array") return Array.isArray(value) ? value : value ? value.split(",") : [];
     if (thing.type === "object") return utils.isObject(value) ? utils.tryJson(value) : {};
     if (thing.type === "date") return typeof value === "string" ? new Date(value) : value;
     else throw "type " + thing.type + " does not exist";
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyC6vp-bqRRU2HM8f9FutJR0fyrvq8tQK_4",
  authDomain: "blankpage2021.firebaseapp.com",
  projectId: "blankpage2021",
  storageBucket: "blankpage2021.appspot.com",
  messagingSenderId: "994147611219",
  appId: "1:994147611219:web:a5d3c3721fc97b3c4e4ca6"
};

function FirebaseApp(config) {
  firebase.initializeApp(config);
  const db = firebase.firestore();

  function signIn(cb) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        state.set('pageAuthorId', user.uid);
        if (cb) cb();
      } else {
        return firebase
          .auth()
          .signInAnonymously()
          .then(function(user) {
            state.set('pageAuthorId', user.uid);
            if (cb) cb();
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    });
  }

  function checkIfDocExists(id) {
    return db
      .collection('pages')
      .doc(id)
      .get()
      .then(function(res) {
        return res.exists;
      });
  }

  // pages are saved from builder
  function savePage(data, requestedUrl = '') {
    const docId = state.get("pageId");
    const user = firebase.auth().currentUser;
    const collection = state.get("pageCollection");
    if (!user) throw "No user";
    console.log("saving " + docId);
    const pageRef = db.collection(collection).doc(docId)
    
    pageRef.get()
      .then(page => {
        if (page.exists) {
          const ok = confirm("This page already exists, should it be updated?");
          if (!ok) return Promise.reject("cancel"); 
          pageRef.set({
            ...data,
            pageAuthorId: user.uid,
          })
        }
        else {
          pageRef.set({
            ...data,
            pageAuthorId: user.uid,
          })
        }
      })
      .then(function(res) {
        if (res !== "cancel") window.open(data.pageUrl);
      })
      .catch(function(error) {
        if (res === "cancel") return;
        window.alert(
          'The page could not be saved',
        );
      });
     return docId
  }

  function writeToDB(data, cb) {
    const user = firebase.auth().currentUser;
    if (!user) throw "No user";
    console.log("saving: " + data.pageId + " in document " + data.belongsToPage);
    db
      .collection(data.pageCollection)
      .doc(data.belongsToPage)
      .collection("completed")
      .doc(data.pageId)
      .set({...data})
      .then(function(w) {
        cb("success")
      })
      .catch(function(error) {
        console.log(error)
        cb("error")
      });
     return data.pageId
  }

  function getNestedDataFromDB(collection, pageId, exerciseId) {
    

    return db.collection(collection)
      .doc(pageId)
      .collection("completed")
      .doc(exerciseId)
      .get()
      .then(configure);
  }

  function getAssignments(collection, name) {

    if (!collection) return false;

    return db.collection(collection).orderBy('pageTitle').get().then((querySnapshot) => {
      let content = `<div class="prompt-list">
        <div class="prompt-header">
          <h2>${name}</h2>
          <div>
            <a href="https://build.blank.page/${collection}" class="button accent">${t("Build prompt")}</a> 
          </div>
        </div>
        <table class="prompt-table">
          <tr><th>Prompts</th><th colspan="2">Replies</th></tr>
      `;


      querySnapshot.forEach((doc) => {
        const data = doc.data();

        doc.ref.collection('completed').get().then(snap => {
          const link = dom.gid("replies-" + data.pageId);
          if (link) link.textContent = snap.size;
        });

        if (data.pageUrl) {
          content += `<tr>
            <td><a href="${data.pageUrl}">${data.pageTitle}</a></td>
            <td class="prompt-actions">
              <a target="_blank" href="${data.pageUrl.replace("https://blank.page/", "https://build.blank.page/")}">Edit</a>
              <a href="${data.pageUrl}" title="Copy link" onclick="event.preventDefault(); utils.copyText('${data.pageUrl}')">🔗</a>
            </td>
            <td><a href="${data.pageUrl}/replies" id="replies-${data.pageId}">--</a></td>
          </tr>
        `;
        }
        return data
      });

      content += `</table>
      </div>
      <div class="prompt-list-footer">
        <a href="https://cursos.blank.page/ayuda">Help</a>
        <a href="https://cursos.blank.page/contacto">Feedback</a>
      </div>`;

      writeSheet.setContent(content); 
      writeReader.enable(content);
      writePage.remove("loading");
      dom.qs(".header-icons").style.display = "none";
      dom.qs(".page-title").style.display = "none";
      state.set("pageTitle", "Writing prompts for " + name)
    });

  }

  function getReplies(collection, pageId, exerciseId) {
    return db.collection(collection)
      .doc(pageId)
      .collection("completed")
      .get()
      .then((querySnapshot) => {
        let content = "### " + pageId + "\n";
        content += "\n";
        content += "**Writing prompts**\n";
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          content += `* [${data.pageAuthorName}](${data.pageUrl})
`
          return data
        });

        writeSheet.setContent(content); 
        writeReader.enable(content); 
        state.set("pageTitle", "Replies for " + pageId)

      });
  }

  function getDataFromDB(collection, pageId) {

    if (!pageId || !collection) return false;

    return db.collection(collection)
      .doc(pageId)
      .get()
      .then(configure);
  }

  function configure(res) {
    const data = res.data();
    
    if (!data) {
      alert('Page does not exist');
      return window.location = window.location.origin
    }

    Object.keys(data).forEach(function(key) {
      // because we don't want to trigger a pageContent change through state
      if (key === "pageContent") { 
        writeSheet.setContent(data[key]); 
        writeReader.enable(data[key]); 
      }
      state.set(key, data[key]);
    });

    dom.qs("body").classList.remove("loading");

    writeBuilder.update();

    write.hydrate();
    writeSheet.focus();
  }

  this.signIn = signIn;
  this.checkIfDocExists = checkIfDocExists;
  this.writeToDB = writeToDB;
  this.getDataFromDB = getDataFromDB;
  this.getAssignments = getAssignments;
  this.getReplies = getReplies;
  this.getNestedDataFromDB = getNestedDataFromDB;
  this.savePage = savePage;
}

function State(){

  const _self = this;
  const paramId = window.location.pathname;
  const ID = "-" + (paramId || 0);
  const tenThousandThings = dao.map(thing => thing.name);
  const saveableKeys = dao.filter(thing => thing.save).map(thing => thing.name);

  this.data = _loadData();
  
  this.set = (key, val) => {
    key = key.split("-")[0] || key;
    if (tenThousandThings.indexOf(key) === -1) return console.warn( key + " not in dao");
    const archetype = dao.find(thing => thing.name === key);
    val = _self.data[_getKey(key)] = archetype.clean(val);
    if (~saveableKeys.indexOf(key)) _save(_getKey(key), val);
    if (!_self[key]) return console.warn( key + " not implemented") 
    _self[key](val);
    return val;
  }

  this.get = (key) => {
    return _self.data[_getKey(key)];
  }

  this.refresh = ()     => { dao.forEach(thing => this[thing.name]( this.get(thing.name) ) ); }
  this.pageId  = (id)   => { }

  // assignments
  this.pageIntegration = (name)         => {/* noop */}

  // page data
  this.pageCollection = (id)      => {/* noop */}
  this.pageAuthorId = (user)      => {/* noop */}
  this.pageDestinationEmail = (email)  => { writeSidebar.destinationEmail(email) }
  this.pageUrl = (url)            => { writeMeta.og("og:url", url) }
  this.pageAuthorEmail = (email)  => {/* noop */}
  this.pageAuthorName = (name)    => { writePage.pageAuthorName(name); }
  this.pageDescription = (desc)   => { writeSidebar.description(desc); }
  this.pageTitle = (title)        => { writeTitle.set(title); writeMeta.og("og:title", title); }
  this.pageImageUrl = (url)       => { writeSidebar.image(url); }
  this.pagePlaceholder = (string) => { writeSheet.placeholder(string); }
  this.pageCreationDate = (date)  => {/* noop */}
  this.pageWordCount = (val)      => { writeCount.update(); }
  this.pageRedirectUrl = (url)    => { writePage.pageRedirectUrl(url); }
  this.pageTheme = (letter)       => { writePage.pageTheme(letter); }
  this.pageShare = (bool)         => { writePage.pageShare(bool); }
  this.pageDestination = (bool)  => {  }
  this.pageConfirmationTitle = (bool)  => {  }
  this.pageConfirmationMessage = (bool)  => {  }
  this.pageConfirmationAction = (bool)  => {  }
  this.pageConfirmationActionButtonLabel = (bool)  => {  }
  this.pageConfirmationActionButtonUrl = (bool)  => {  }
  
  // page constraints
  this.pageElapsed = (ms)          => { writePage.tick(ms);}
  this.pageTimeLimit = (limit)     => { writePage.setTimeLimit(limit); }
  this.pageDisablePaste = (bool)   => { writePage.disablePaste(bool); }
  this.pageWordGoal = (goal)       => { writePage.setWordGoal(goal); }
  this.pageScroll = (scroll)       => { /* noop */ }
  this.pageSelectionStart = (start)=> { /* noop */ }
  this.pageSelectionEnd =(end)     => { writeSheet.scrollToBottom(end); }
  this.pageSpellcheck = (bool)     => { writeSheet.spellcheck(bool); }
  this.pageStartDate = (date)      => { writePage.setStartDate(date); }
  this.pageEndDate = (date)        => { writePage.setEndDate(date); }
  this.pageDisableBackspace = (bool) => { /* noop */ }
  this.pageLanguage = (lang)       => { writePage.setLanguage(lang); }
  this.language     = (lang)       => { writePage.setLanguage(lang); }
  this.pageSubmitLabel = (string)  => { writeSubmit.label(string) }
  this.pageVisited = (bool)        => { /* noop */ }
  this.darkmode = (bool)           => { writePage.darkMode(bool); }
  this.pasted = ()                 => { /* noop */}
  this.spellcheck = (bool)         => { writeSheet.spellcheck(bool); }
  this.keyboardIdle = (ms)         => { writePage.keyboardIdleTick(ms);}
  this.userEmail = (email)         => {/* noop */}
  this.userName = (name)           => {/* noop */}
  this.belongsToPage = (pageSlug)  => {/* noop */}
  this.preview = (bool)            => { writePreview.toggle(bool); }
  this.builder = (bool)            => { writeBuilder.toggle(bool); }

  this.pageContent = (value) => {
    state.set("pageWordCount", utils.wordCount(value));
    if (value) write.start();
    else writeSheet.clear();
    write.change();
  }

  this.clean = (warn = true) => {
    if (warn) {
      const confirmed = confirm("Deletes all configuration and text, are you sure?");
      if (!confirmed) return;
    }

    Object.keys(localStorage).forEach(key => localStorage.removeItem(key));
    write.reset();
    window.location.reload();
  }

  // INNER UTILS

  function _save(key, val) {
      if (val === undefined || val === null) throw "wont save nuthin, " + key + " " + val;
      localStorage.setItem("write" + "-" + key, val.toString());
  }

  function _getKey(name) {
    const key = name.indexOf("page") !== -1
          || name.indexOf("assignment") !== -1
          ? name + ID
          : name + "-0"; // system
     return key;
  }

  function _loadData() {

    const data = dao.map(thing => {
      return {
        [_getKey(thing.name)]: _getValue(_getKey(thing.name), utils.findGetParameter(thing.name) || thing.default)
      }
    });
    return Object.assign({}, ...data);
  };

  function _getValue(key, def) {
    const item = localStorage.getItem("write-" + key) || def;
    const archetype = dao.find(thing => thing.name === key.split("-")[0]);
    if (archetype) return archetype.clean(item);
    else throw "Unkown archetype";
  }

}
function WriteCursor(selector){
  // cant bind el because it is removed and replaced

  function select(start, end) {
    const el = dom.qs(selector);
    el.focus();
    if (!start) start = 0;
    if (!end) end = el.value.length;
    el.selectionStart = start;
    el.selectionEnd = end; 
  }

  function hide(start, end) {
    const el = dom.qs(selector);
    el.blur();
    if (!start) start = 0;
    if (!end) end = el.value.length;
    el.selectionStart = start;
    el.selectionEnd = end; 
  }

  function place(pos) {
    if (!pos) return;
    const el = dom.qs(selector);
    el.focus();
    el.selectionStart = pos;
    el.selectionEnd = pos;
  }

  function deselect(){
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
  }

  function reset(){
    select(state.get("pageSelectionStart"), state.get("pageSelectionEnd"));
    writeSheet.el.scrollTop = state.get("pageScroll");
  }

  function set(){
    const el = dom.qs(selector);
    state.set("pageSelectionStart", el.selectionStart);
    state.set("pageSelectionEnd", el.selectionEnd);
  }

  this.select = select;
  this.place = place;
  this.deselect = deselect;
  this.reset = reset;
  this.set = set;
  return this;
}
function WriteSheet(){

  var el = dom.create({
    el: "textarea",
    id: "sheet",
    tabindex: 0,
    class: "sheet"
  }, dom.gid("page"));

  const spellcheckButton = dom.gid("spellcheck");

  if (!el) return;

  function focus(){
    el.focus();
  }

  function blur() {
    el.blur();
  }

  function scrollToBottom(caretPos){
    // if there's a selection don't scroll to bottom
    if (el.selectionStart !== el.selectionEnd) return;
    if (caretPos === state.get("pageContent").length) 
      el.scrollTop = el.scrollHeight;
  }

  function spellcheck(bool){
    // in order for the spellcheck to properly show/hide underlines we need
    // to add/remove the textarea and readd event listeners.
    spellcheckButton.classList.toggle("active", bool);
    const classNames = el.getAttribute("class");
    const ph = el.getAttribute("placeholder");
    const clone = el.cloneNode(true);
    el.parentNode.removeChild(el);
    el = clone;
    el.setAttribute("spellcheck", Boolean(bool));
    dom.gid("page").appendChild(el);

    // todo should remove addeventlisteners these upon deletion

    el.addEventListener("input", (e) => {
      const command = navigator.platform.toUpperCase().indexOf('MAC')>=0 ? e.metaKey : e.ctrlKey;
      const shift = e.shiftKey;
  
      const disableBackspace = state.get("pageDisableBackspace") ;
      if (e.inputType === "deleteContentBackward" && disableBackspace) {
        e.preventDefault();
        const content = state.get("pageContent");
        const lastChar = content[content.length-1];
        const beforeLastChar = content[content.length-2]
        if (lastChar === " " && beforeLastChar !== " ") {
          writeFlash.show({
            class: "deleting-not-allowed",
            duration: 2000,
            message: t("Deleting words is not allowed")
          });
          el.value = content;
        }
      }

      state.set("pageContent", el.value);
    });

    const focus = _.debounce(function(){writePage.focus()}, 50);
    const activate = utils.throttle(function(){ focus.cancel(); writePage.activate()}, 750);

    // focus = writing mode
    // activate = ui mode

    el.addEventListener("mousemove", focus);
    dom.gid("page-ui").addEventListener("mousemove", activate);

    el.addEventListener("paste", (e) => {
      cancelAnimatedScrolling(1000);
      state.set("pageContent", el.value);
      writePage.pasted(e);
    });

    const scrollFn = utils.debounce(()=> state.set("pageScroll", el.scrollTop), 50);
    el.addEventListener("scroll", scrollFn);

    // set caret and scroll to the correct position on load
    cancelAnimatedScrolling(50);
    setTimeout(function(){
      if (writeBuilder.active) return;
      writeCursor.reset();
      scroll(state.get("pageScroll"));}
    , 0);
  }

  function placeholder(string){
    if (!string || writeReader.enabled) return el.getAttribute("placeholder");
    writeMeta.og("og:description", string);
    writeMeta.set("description", string);
    el.setAttribute("placeholder", string);
  }

  function disable(){
    writeCursor.place(0);
    el.readOnly = true;
    el.classList.add("disabled");
  }

  function readonly(bool){
    if (bool) el.setAttribute("readonly", "readonly");
    else el.removeAttribute("readonly");
  }

  function enable(){
    el.removeAttribute("readonly");
    el.classList.remove("disabled");
  }

  function enabled(){
    return !el.readOnly;
  }

  function select(){
    el.select();
  }

  function deselect(){
    window.getSelection().removeAllRanges();
  }

  function setContent(text) {
    el.value = text;
  }

  function getSelection(){
    return el.value.substring(el.selectionStart, el.selectionEnd);
  }

  function replaceSelection(string){
    const start = el.selectionStart;
    const end = el.selectionEnd;
    if (start === end) return false;
    const val = el.value;
    const begin = val.slice(0, start);
    const finish = val.slice(end, val.length-1);
    const pageContent = begin + string + finish;
    const scrollPos = el.scrollTop;
    setContent(pageContent);
    state.set("pageContent", pageContent);
    el.selectionStart = (begin + string).length;
    el.selectionEnd = (begin + string).length;
    el.scrollTop = scrollPos;
    return pageContent;
  }

  function pasteImage(data, altText) {
    
    firebaseApp.signIn( ()=> uploadImage(data) );

    function uploadImage(data){
      var storage = firebase.storage().ref();
      let uId = Date.now().toString(36) + Math.random().toString(36).substring(2);
      let fileExtension = false;

      writeLog("Paste upload denied", {props: {type: data.split(":")[1].split(";")[0]}});

      // file upload disabled because bandwidth

      // let fileExtension = data.includes("image/png") ? "png" 
      //   : data.includes("image/jpeg") || data.includes("image/jpg") ? "jpg"
      //   : data.includes("image/svg") ? "svg"
      //   : data.includes("video/quicktime") ? "mov"
      //   : data.includes("video/mp4") ? "m4v"
      //   : false;
      if (!fileExtension) {
        writeFlash.show({
          class: "upload",
          duration: 2000,
          message: data.split(":")[1].split(";")[0] + " not allowed"
        });
        return false;
      }
      var fileName  = uId + "." + fileExtension;
      var imageRef = storage.child(fileName);
      var uploadTask = imageRef.putString(data, 'data_url');
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
          if (writeFlash.el.classList.contains("hidden")) {
            writeFlash.show({
              class: "upload",
              duration: 10000,
              message: progress + '% uploaded'
            });
          }
          else writeFlash.el.innerHTML = "<span>" + progress + '% uploaded</span>';
  
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              writeFlash.show({
                class: "upload",
                duration: 2000,
                message: 'Upload is paused'
              });
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            break;
          }
        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          writeFlash.el.innerHTML
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(downloadURL)
            var img=new Image();
            img.src=downloadURL;
            writeFlash.hide();
            const message = `${getContent()}\n![${altText ? altText : "alt text"}](${downloadURL})`;
            setContent(message);
            state.set("pageContent", message);
          });
        }
      );
    }
  }

  function getContent() {
    return el.value;
  }

  function tick(s){
     // noop yet
  }

  function idleTick(s){
     // noop yet
  }

  function clear(){
    el.value = "";
  }

  function newLine(){
    document.execCommand("insertText", false, "\n");
    scroll(state.get("pageScroll"));
  }

  function newTab(){
    const start = el.selectionStart;
    const end =  el.selectionEnd;
    const content = getSelection();
    const tabKey = "    ";
    document.execCommand("insertText", false, tabKey);
  }

  function cancelAnimatedScrolling(ms){
    el.classList.add("jump");
    setTimeout(function(){
      el.classList.remove("jump");
    }, ms);
  }

  function scroll(amount) {
    cancelAnimatedScrolling(50);
    el.scrollTop = amount;
  }

  function toggle(bool) {
    el.style.display = bool ? "block" : "none";
  }

  enable();
  spellcheck(state.get("spellcheck"));
  cancelAnimatedScrolling(50);
  scroll(state.get("pageScroll"));


  el.addEventListener('mouseup', writeCursor.set);
  el.addEventListener('selectionchange', writeCursor.set);

  this.focus = focus;
  this.spellcheck = spellcheck;
  this.placeholder = placeholder;
  this.disable = disable;
  this.enable = enable;
  this.enabled = enabled;
  this.readonly = readonly;
  this.select = select;
  this.getSelection = getSelection;
  this.replaceSelection = replaceSelection;
  this.deselect = deselect;
  this.setContent = setContent;
  this.pasteImage = pasteImage;
  this.tick = tick;
  this.getContent = getContent;
  this.el = el;
  this.clear = clear;
  this.protected = false
  this.scroll = scroll;
  this.scrollToBottom = scrollToBottom;
  this.cancelAnimatedScrolling = cancelAnimatedScrolling;
  this.toggle = toggle;
  this.newLine = newLine;
  this.newTab = newTab;
}

function WriteCount(selector) {

  const el = dom.qs(selector);
  if (!el) throw "el is missing";

  const wordCount = dom.create({
    el: "span", 
    class: "word-count",
    html: `0 ${t("words")}`
  }, el);

  const wpmCount = dom.create({
    el: "span", 
    class: "wpm-count",
    html: "0 wpm"
  }, el);

  function hide(){
    el.classList.add("hidden")
  }

  function show(){
    el.classList.remove("hidden")
  }

  function update(){
    const count = state.get("pageWordCount");
    const elapsed = state.get("pageElapsed")/1000;
    wordCount.innerHTML = `${count} ${t("words")}`;
    const wpmCountNumber = (count > 2 && elapsed > 1 )
     ? `${Math.floor(count/(elapsed/60))} wpm`
     : "0 wpm";
    wpmCount.innerHTML = wpmCountNumber;
  }

  this.update = update;
  this.show = show;
  this.hide = hide;

}
function Write(selector){

  const el = dom.qs(selector);

  function hydrate(data = {}) {
    
    // rules
    const rules = utils.getRules();
    const isPrompt = state.get("pageCollection");

    //translate 
    writePage.setIcon(state.get("pageContent"));
    writePage.setLanguage(state.get("pageLanguage"));
    writePage.pageTheme(state.get("pageTheme"));
    writeSidebar.destinationEmail(state.get("pageDestinationEmail"));
    writePage.setTitle();
    
    if (state.get("belongsToPage") ) {
      writeSidebar.toggle(false);
    }
    if (isPrompt) {
      writeSidebar.toggle(data.trigger !== "reset" && !writeReader.enabled && !state.get("pageContent").length);
      writeButtons.copy.toggle("hidden", true);
      writeButtons.download.toggle("hidden", true);
    }
    else {} // dig into localstorage to see if the homepage has been visited?
    
    const hasSubmit = state.get("pageCollection");

    //share
    if (!dom.gid("social-share")) {
      if  (state.get("pageShare") || writeBuilder.active) {
        dom.create({
          el: "script",
          type: "text/javascript",
          id: "social-share",
          src: "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60b20948966aec83"
        }, document.body);
      }
    }

    if (writeReader.enabled) return hydrateReader();
    const pageContent = state.get("pageContent") || "";

    //app
    writeSheet.cancelAnimatedScrolling(1000);
    writePage.toggle("populated", pageContent.length);
    writePage.toggle("empty", !pageContent.length);
    writePage.toggle("iframe", utils.isEmbedded());
    writePage.setWordGoal(state.get("pageWordGoal"));
    writePage.setTimeLimit(state.get("pageTimeLimit"));

    //sheet
    const content = state.get("pageContent");
    writeSheet.setContent(content);
    writeSheet.placeholder(state.get("pagePlaceholder"));
    writeSheet.focus();

    writeCount.update();
    writeProgress.update();

    // word count
    const wordCount = utils.wordCount(pageContent);
    state.set("pageWordCount", wordCount);

    //header
    state.set("pageTitle", state.get("pageTitle"));
    writePage.pageRedirectUrl(state.get("pageRedirectUrl"));

    if (hasSubmit) {
      writeConfigure.hide();
      writeConfigure.disable();
    }
 
    //timers
    elapsedTimer.set(state.get("pageElapsed"));

    //progress
    writeProgress.cancelTransitions();
    writeProgress.update();

      
    writeSubmit.applyRules(rules);
    
    if (!hasSubmit) 
      writeSubmit.hide();
    else
      writeSubmit.show();

    writeSheet.focus();
    writePage.tick();
    if (pageContent.length) change();
  }

  function hydrateReader(){
    const param = window.location.search;
    writeAfterSubmit.build(param);
    writePage.activate();
    writeSheet.readonly(true);
  }

  function reset(){
    if (writeReader.enabled) return;
    const pageId = utils.generateUID();
    write.started = false;
    write.finished = false;
    state.set("pageContent", "");
    state.set("pageElapsed", 0);
    state.set("pageWordCount", 0);
    state.set('pageId', pageId);
    writeProgress.reset();
    elapsedTimer.stop();
    writeFlash.hide();
    writeSheet.enable();
    writeSheet.focus();
    // todo shorten
    writePage.activate();
    writePage.remove("populated")
    writePage.remove("failed")
    writePage.remove("finished");
    write.hydrate({trigger: "reset"});
  }

  function start(){
    if (write.started === true  || writeReader.enabled) return;
    write.finished = false;
    elapsedTimer.start();
    write.started = true;
    change();
  }

  function change(){
    if (writeReader.enabled) return;
    const pageContent = state.get("pageContent");
    writePage.setIcon(pageContent);
    writePage.focus();
    writeConfigure.hide();

    // todo hack to reset the elapsed time after reload,
    // and delete
    if(!pageContent) state.set("pageElapsed", 0);
    if (!pageContent && write.started && !writeSheet.placeholder().includes(t("Sending"))) reset();
    
    const isEmpty = !pageContent.trim().length;
    const wordGoal = state.get("pageWordGoal");
    const count = state.get("pageWordCount");
    const timeLimit = state.get("pageTimeLimit");
    const elapsed = state.get("pageElapsed");
    const charWidth = 64;
    
    const isFinished = 
      wordGoal
        ? count > wordGoal
      : timeLimit
        ? elapsed > timeLimit
      : false;

    writeCount.update();
    if (isEmpty) writePage.activate();
    writePage.toggle("empty", isEmpty);
    writePage.toggle("populated", !isEmpty);
    writeProgress.update();
    writeCount.update();
    writePage.setTitle();

    if (isFinished) {
      var trigger = "wordGoal";
      if (timeLimit && elapsed > timeLimit) trigger = "timeLimit";
      write.finish(trigger);
    }
  }

  function finish(trigger) {
    if (write.finished === true) return;

    writeSubmit.enable();
    write.finished = true;
    writePage.add("finished");
    elapsedTimer.stop();

    const wordGoal = isNaN(state.get("pageWordGoal")) ? 0 : state.get("pageWordGoal");
    const timeLimit =  state.get("pageTimeLimit");
    const elapsed = state.get("pageElapsed");
    const wordCount =  state.get("pageWordCount");

    writePage.activate();

    // todo this will not be restored when the challenge is reset
    state.set("pageDisableBackspace", false);

    if (trigger === "timeLimit") {
      writeSheet.disable();
      writeSheet.spellcheck(false);
      setTimeout(writeCursor.deselect, 0); // deselect
      writeSheet.disable();
      writeFlash.spawn({
        id: "failed",
        duration: false,
        message: `${t("The time is up!")}<a onclick="javascript:actions.retry(event)">${ t("Retry?")}</a>` + " "
      });

      if (state.get("pageWordCount") < state.get("pageWordGoal")) {
        writeSubmit.disable();
      }
    }
    else {
      const message = `${t("You've reached")} ${wordGoal} ${t("words")}`;
      writeFlash.show({ duration: 3000, message: message});
    }

  }

  this.hydrate = hydrate;
  this.reset = reset;
  this.start = start;
  this.change = change;
  this.finish = finish;
  return this;
}
function WriteFlash(selector){

  const el = dom.qs(selector);

  function show(attr){
    el.classList.add(attr.class, "hidden");
    el.style.zIndex = 1000;
    setTimeout( () => el.classList.remove("hidden"), 0);
    el.innerHTML = "<span>" + attr.message + "</span>"; 

    if (attr.duration !== false) {
      if (!attr.duration) attr.duration = 2000;
      setTimeout(hide, attr.duration);
    }

    dom.qsa(".flash-persistent").forEach(flashEl => {
      flashEl.classList.add("hidden");
      setTimeout(function(){
        flashEl.classList.remove("hidden");
      }, attr.duration || 2000);
    })

  }

  function spawn(attr){
    // don't know how to conditionally add the id
    const obj = attr.id ? {class: "flash hidden", id: attr.id } : {class: "flash hidden" };
    const clone = dom.gid(attr.id) || dom.create(obj , writePage.el);
    if (attr.duration === false) clone.classList.add("flash-persistent");
    if (attr.class) clone.classList.add(attr.class);
    setTimeout( () => clone.classList.remove("hidden"), 0);
    clone.innerHTML = "<span>" + attr.message + "</span>"; 
    
    if (attr.duration !== false) {
      if (!attr.duration) attr.duration = 2000;
      setTimeout(hide, attr.duration);
      setTimeout(function(){ 
        clone.parentNode.removeChild(clone);
      }, attr.duration + 10);
    }

    click(clone, attr.click);
    
  }

  function click(el, cb){
    if (!cb) return el.style.cursor = "default";
    el.style.cursor = "pointer";
    el.addEventListener("click", (e)=> {
      e.stopPropagation();
      cb();
    });
  }
   
  function hide(){
    // todo hardcoded
    el.classList.remove("top");
    el.className = "flash hidden";
    el.style.zIndex = 0;
  }

  function clear(){
    span.innerHTML = "";
  }

  this.spawn = spawn;
  this.show = show;
  this.hide = hide;
  this.el = el;
}
function WriteTimer(elapsed, fn, fq) {
  
  var interval = null;
  if (!fq) fq = 500;

  function start(){
    if (interval) return;
    interval = setInterval(tick, fq);

    function tick(){
      if (!elapsed) elapsed = 0;
      elapsed += fq;
      if (fn) fn(elapsed);
    }
  }

  function reset(){
    stop();
    start();
  }

  function stop(){
    elapsed = 0;
    clearInterval(interval);
    interval = null;
  }

  function pause(){
    clearInterval(interval);
  }

  function set(s){
    elapsed = s;
  }

  this.reset = reset;
  this.pause = pause;
  this.stop = stop;
  this.start = start;
  this.set = set;
}
function WriteFullscreen(selector){

  const el = dom.qs(selector);
  const app = dom.qs("body");

  function detectFullscreen(){
    return document['fullscreenElement'] ||
           document['webkitFullscreenElement'] ||
           document['mozFullScreenElement'] ||
           document['msFullscreenElement'];
  }

  function fullscreenListener(){
    const isInFullscreen = detectFullscreen();
    app.classList.toggle("fullscreen", isInFullscreen);
  }

  /* todo DRY */

  /* View in fullscreen */
  function toggleFullscreen(e) {
    if (e) e.stopPropagation();

    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (!isInFullscreen){
      if (docEl.requestFullscreen)               docEl.requestFullscreen();
      else if (docEl['mozRequestFullScreen'])    docEl['mozRequestFullScreen']();
      else if (docEl['webkitRequestFullscreen']) docEl['webkitRequestFullscreen']();
      else if (docEl['msRequestFullscreen'])     docEl['msRequestFullscreen']();
    }

    else {
      if (document.exitFullscreen)               document.exitFullscreen();
      else if (document['webkitExitFullscreen']) document['webkitExitFullscreen']();
      else if (document['mozCancelFullScreen'])  document['mozCancelFullScreen']();
      else if (document['msExitFullscreen'])     document['msExitFullscreen']();
    }

    writeLog("Fullscreen", {props: {type: !isInFullscreen ? "Enter" : "Exit"}});


    writeSheet.focus();

  }

  function enterFullscreen(){


    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (isInFullscreen) return false;
    
    if (docEl.requestFullscreen)               docEl.requestFullscreen();
    else if (docEl['mozRequestFullScreen'])    docEl['mozRequestFullScreen']();
    else if (docEl['webkitRequestFullscreen']) docEl['webkitRequestFullscreen']();
    else if (docEl['msRequestFullscreen'])     docEl['msRequestFullscreen']();
    writeLog("Fullscreen", {props: {type: 'Enter'}});
    writeSheet.focus();

  }

  function exitFullscreen(){

    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (!isInFullscreen) return false;
    
    if (document.exitFullscreen)               document.exitFullscreen();
    else if (document['webkitExitFullscreen']) document['webkitExitFullscreen']();
    else if (document['mozCancelFullScreen'])  document['mozCancelFullScreen']();
    else if (document['msExitFullscreen'])     document['msExitFullscreen']();
    writeLog("Fullscreen", {props: {type: 'Exit'}});
    writeSheet.focus();
  
  }
  
  ["", "webkit", "moz", "ms"].forEach(prefix => {
    document.addEventListener(prefix+"fullscreenchange", fullscreenListener);
  });

  this.toggleFullscreen = toggleFullscreen;
  this.enterFullscreen = enterFullscreen;
  this.exitFullscreen = exitFullscreen;
  return this;

}
function WriteSubmit(selector) {
  const el = dom.qs(selector);
  
  el.addEventListener("click", submit);

  function applyRules(rules){
    if (!rules || !rules.length) return enable();
    // [ {pageTimeLimit: 20}, {pageWordGoal: 20}, ]
    const failed = rules.filter((rule) => {
      const prop = Object.keys(rule)[0];
      const val = Object.values(rule)[0];
      // todo change when there are more conditions
      if (prop === "pageTimeLimit") return false;
      const condition = prop === "pageTimeLimit" ? state.get("pageElapsed") : state.get("pageWordCount")
      return rule[prop] > condition;
    });
    if (failed.length) disable(failed)
    else enable();
  }

  function enable(){
    el.classList.remove("disabled");
    el.removeAttribute("data-tooltip");
  }

  function disable(){
    const rules = utils.getRules();
    const tooltip = utils.rulesToString(rules);
    el.setAttribute("data-tooltip", tooltip + " " + t("to submit your prompt."));
    el.classList.add("disabled");
  }

  function toggle(bool){
    // todo obviously wrong
    const hasTimeLimit = Boolean(bool);
    if (hasTimeLimit) disable();
    else enable();
  }

  function submit(){
    if (el.classList.contains("disabled")) return;
        
    if (document.body.classList.contains("failed")) {
      const confirmed = confirm(t("You ran out of time before completing the exercise. \n\n You'll have to start again."));
      if (!confirmed) return;
      return reset();
    }

    el.classList.add("disabled");

    writePreview.toggle(false);

    const collection = state.get("pageCollection");
    
    // prompt for name and email
    const name = prompt(t("Your name"), state.get("userName"));
    if (!name) return enable();
    const email = prompt(t("Your email"), state.get("userEmail"));
    if (!email) return enable();
    state.set("userName", name);
    state.set("userEmail", email);
    state.set("pageAuthorName", name);
    state.set("pageAuthorEmail", email);
    if (!utils.isValidEmail(email)) {
      //retrigger process, bad email
      enable();
      submit(); 
    }

    const md = new markdownit();
    const url = window.location.href.split('/');
    const lastSegment = url.pop() || url.pop();  // handle potential trailing slash

    state.set("belongsToPage", lastSegment);
    state.set("pageId", utils.generateUID());
    state.set("pageUrl", `https://blank.page/${collection}/${state.get('belongsToPage')}/${state.get("pageId")}`);

    // todo just forward all the data?
    const blankpageData = {
      pageId: state.get("pageId"),
      pageAuthorEmail: state.get("pageAuthorEmail"),
      pageAuthorName: state.get("pageAuthorName") || t("Anonymous"),
      pageDestinationEmail: state.get("pageDestinationEmail"),
      pageContent: state.get("pageContent"),
      pageDescription: state.get('pageDescription'),
      pageImageUrl: state.get('pageImageUrl'),
      pagePlaceholder: state.get('pagePlaceholder'),
      pageTimeLimit: state.get('pageTimeLimit'),
      pageTitle: state.get('pageTitle') + " — " + t("By").toLowerCase() + " " + (state.get("pageAuthorName") || t("Anonymous")),
      pageWordGoal: state.get('pageWordGoal'),
      pageCreationDate: Date.now(),
      pageCollection: state.get('pageCollection'),
      pageRedirectUrl: state.get('pageRedirectUrl'),
      pageTheme: state.get('pageTheme'),
      pageConfirmationAction: state.get('pageConfirmationAction'),
      pageConfirmationActionButtonLabel: state.get('pageConfirmationActionButtonLabel'),
      pageConfirmationActionButtonUrl: state.get('pageConfirmationActionButtonUrl'),
      pageConfirmationTitle: state.get('pageConfirmationTitle'),
      pageConfirmationMessage: state.get('pageConfirmationMessage'),
      pageUrl: state.get('pageUrl'),
      belongsToPage: state.get('belongsToPage'),
    }

    const mailgunData = {
      pageTitle: state.get('pageTitle'),
      pageContent: state.get("pageContent"),
      pageContentHtml: md.render(state.get("pageContent")),
      pageAuthorEmail: state.get("pageAuthorEmail"),
      pageAuthorName: state.get("pageAuthorName") || t("Anonymous"),
      pageDestinationEmail: state.get("pageDestinationEmail"),
      pagePlaceholder: state.get('pagePlaceholder'),
      pageUrl: state.get('pageUrl'),
      pageParentUrl: state.get("pageUrl").substring(0, state.get("pageUrl").lastIndexOf('/')),
    }

    const openInBlankPage =
      `<p><a href="https://blank.page/${collection}/${state.get("belongsToPage")}/${state.get("pageId")}">
        ${t("Open in Blank Page")} →
       </a></p>`;

     const circleData = {
       community_id: 2344,
       space_id: state.get("assignmentSpaceId"),
       body: blankpageData.pageContentHtml + openInBlankPage,
       is_comments_enabled: true,
       is_liking_enabled: false,
       is_truncation_disabled: false,
       hide_meta_info: false,
       user_email: blankpageData.pageAuthorEmail
     }

     const sendToCircle = new Promise((resolve) => {
       if (!circleData.space_id) return resolve("success");
       ajax.post("/.netlify/functions/sendToCircle", circleData, resolve);
     });

     const sendToFirebase = new Promise((resolve) => {
       firebaseApp.writeToDB(blankpageData, resolve)
     });
   
     const sendToMailgun = new Promise((resolve, reject) => {
       if (!blankpageData.pageAuthorEmail) 
         reject("No email provided");
       else {
         ajax.post("/.netlify/functions/sendmail", mailgunData, resolve);
       }
     });

//    const sendToFirebase = new Promise((resolve) => { return resolve("success"); });
//    const sendToMailgun = new Promise((resolve, reject) => { return resolve("success"); });

    var message = t("Sending") + "...";
    writeSheet.placeholder(message);
    
    // sending flash message
    //if (state.get("pageDestinationEmail")) 
    //  message = `${t("Sending reply to")} ${state.get("pageDestinationEmail")} ${t("from")} ${state.get("pageAuthorEmail")}`;
    //
    //writeFlash.spawn({
    //  message: message,
    //  duration: false,
    //  class: "sending"
    //});

    const i = setInterval(() => writeSheet.placeholder(writeSheet.placeholder() + "."), 200);
    // Promise.all([sendToMailgun, sendToFirebase])
    Promise.all([sendToMailgun, sendToFirebase])
      .then( values => {
        const errors = values.map(msg => {
          const success = msg.includes("success");
          if (!success) {
            console.log(msg);
            if (msg.includes("(")) msg = msg.split("(")[0];
            writeFlash.show({
                class: "error",
                duration: 10000,
                message: msg
            });
          }
          return !success;
        });
        const hasErrors = errors.filter(Boolean).length;
        
        if (!hasErrors) {  
          // clear content, then redirect
          state.set("pageContent", "");
          writeSheet.setContent("");
          
          const integration = state.get("pageConfirmationAction");
          let redirectUrl = state.get("pageRedirectUrl") || `${state.get("pageUrl")}/${blankpageData.pageId}`;
          console.log(integration)
          if (redirectUrl === state.get("pageRedirectUrl")) window.location = redirectUrl;
          else window.location = `${redirectUrl}?${integration || "saved"}`;
        }
        else catchError();
      })
      // TODO these resolves will not actually fail if there's an error
      // but I do not know how to implement at this time.
      .catch(catchError)

      function catchError(error) {
        clearInterval(i);
        console.log(error)
        el.classList.remove("disabled");
        writeSheet.setContent(state.get("pageContent"));
        writeSheet.placeholder(state.get("pagePlaceholder"));
        window.alert(t("Something went wrong, please submit your assignment again"))
      }
  }

  function label(label) {
    if (!label) return label = settings.pageSubmitLabel;
    el.textContent = label;
  }

  function hide(){
    el.classList.add("hidden");
  }

  function show(){
    el.classList.remove("hidden");
  }

  this.toggle = toggle;
  this.label = label;
  this.applyRules = applyRules;
  this.disable = disable;
  this.enable = enable;
  this.submit = submit;
  this.hide = hide;
  this.show = show;
}
function WriteProgress(selector){

  const el = dom.qs(selector);

  const wordGoalProgress = dom.create({class: "progress-bar wordGoal"}, el);
  const timeLimitProgress = dom.create({class: "progress-bar timeLimit"}, el);

  function reset(){
    cancelTransitions();
    wordGoalProgress.removeAttribute("style");
    timeLimitProgress.removeAttribute("style");
  }

  function cancelTransitions(){
    el.classList.add("no-transition");
    setTimeout(function(){
      el.classList.remove("no-transition");
    }, 10)
  }

  function offsetBar(elapsed, total) {
    var pct = total === 0 ? -100 : Math.min(elapsed/total*100-100, 0);
    return "translate(" + pct + "%, 0)";
  }

  function parse(bar){
    if (!bar.style.transform) return 0;
    return parseFloat(bar.style.transform.split("%")[0].split("(")[1]);
  }

  function update(){
    const elapsed     = state.get("pageElapsed");
    const timeLimit   = state.get("pageTimeLimit");
    const words       = state.get("pageWordCount");
    const wordGoal    = state.get("pageWordGoal");
    const isChallenge = Boolean(timeLimit || wordGoal);
    const isBehind    = 
        !timeLimit ? false 
      : !wordGoal ? true 
      : Boolean(elapsed/timeLimit > words/wordGoal);
    el.classList.toggle("hide", !isChallenge);
    el.classList.toggle("alert", isBehind);
    timeLimitProgress.style.transform = offsetBar(elapsed, timeLimit);
    wordGoalProgress.style.transform = offsetBar(words, wordGoal);
  }

  function hide(){ el.classList.add("hide"); }
  function show(){ el.classList.remove("hide"); }

  this.reset = reset;
  this.update = update;
  this.hide = hide;
  this.show = show;
  this.cancelTransitions = cancelTransitions;
}
function WriteSelect(selector, options){
  if (!options) throw "options are required";
  const _self = this;
  const triggerElement = dom.qs(selector);
  const el = dom.create({class: "select " + selector.slice(1)}, triggerElement);

  function render(){
    if (selector === "#configure") {
      // trigger element is blue if timelimit or wordgoal are set
      triggerElement.classList.toggle("active", state.get("pageTimeLimit") || state.get("pageWordGoal"));
    }

    let optionGroupEl = dom.qs(".select-options", el) || dom.create({class: "select-options"});
    dom.empty(optionGroupEl);

    options.forEach(option => {
      if (option.label === "separator") 
        return dom.create({ class: "select-separator"}, optionGroupEl);

      const optionEl = dom.create({
        class: "select-option option-" + (option.type || utils.dirify(option.label)), 
        html: `<div class='select-option-label'>${t(option.label)}</div>` }, 
      optionGroupEl);

      if (selector === "#configure") return renderConfigureOption(option, optionEl);

      optionEl.addEventListener("click", function(e){
        hide();
        return option.cb(e);
      });

      if (option.shortcut) 
        dom.create({ class: "select-option-value", html: option.shortcut }, optionEl);
    });

    el.appendChild(optionGroupEl);
  }

  function renderConfigureOption(option, optionEl){

    function validate(type, val){
      if (type === "pageTimeLimit" || type === "pageWordGoal") {
        if (isNaN(val) || val < 0) return false;
      }
      return true;
    }

    function getValue(e){
      if (e) e.stopPropagation();        
      const props = {
        "pageWordGoal": {
          label: t("Number of words") ,
          default: state.get("pageWordGoal") || 500
        },
        "pageTimeLimit": {
          label: t("Time in minutes"),
          default: utils.msToMin(state.get("pageTimeLimit")) || 10
        },
        "pageLanguage": {
          label: t("Language") + "(en/es)",
          default: state.get("pageLanguage")
        },
      }
      
      let val = prompt(props[option.type].label, props[option.type].default);
      hide(500);
      writeSheet.focus();
      if (val === null) return false;
      if (val === "") val = 0;
      if (!validate(option.type, val)) {
        getValue();
        return false;
      }
      return option.cb(val);
    }

    var value = option.type ? state.get(option.type) : ""; 
    const isPrompt = state.get("pageCollection");
    const caret = '<svg width="6" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M.195 9.471a.667.667 0 010-.942L3.724 5 .195 1.471A.667.667 0 011.138.53l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 01-.943 0z" /></svg>';
    if (value == 0) value = (isPrompt ? t("None") : caret);
    else value = `
      <div class='select-option-clear' onclick="javascript:event.stopPropagation();state.set('${option.type}', 0)">&times;</div>
      <div class='select-option-value-value'>
        ${option.type === "pageTimeLimit" ? utils.msToMin(value) : value}
      </div>`;
      dom.create({ class: "select-option-value", html: value }, optionEl);
      optionEl.addEventListener("click", getValue);
  }

  render();

  function show() {
    el.classList.add("open");
    triggerElement.classList.add("open");
    // hack to remove > caret if already started writing on free editor
    const isPrompt = state.get("pageCollection");
    if (!isPrompt) {
      if (state.get("pageContent").length) {
        const timeLimit = state.get("pageTimeLimit"); 
        const wordGoal = state.get("pageWordGoal");
        if (!timeLimit) dom.qs(".option-pageTimeLimit .select-option-value").innerHTML = t("None");
        if (!wordGoal) dom.qs(".option-pageWordGoal .select-option-value").innerHTML = t("None");
      }
      else {
        const caret = '<svg width="6" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M.195 9.471a.667.667 0 010-.942L3.724 5 .195 1.471A.667.667 0 011.138.53l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 01-.943 0z" /></svg>';
        const timeLimit = state.get("pageTimeLimit"); 
        const wordGoal = state.get("pageWordGoal");
        if (!timeLimit) dom.qs(".option-pageTimeLimit .select-option-value").innerHTML = caret;
        if (!wordGoal) dom.qs(".option-pageWordGoal .select-option-value").innerHTML = caret;
      }
    }

  }; 
  
  function hide(to=0) {
    setTimeout(function(){
      el.classList.remove("open");
      triggerElement.classList.remove("open"); 
    }, to);
  };

  function toggle(className, bool){
    triggerElement.classList.toggle(className, bool);
  }

  function enable(){
    triggerElement.classList.toggle("disabled", false);
    el.classList.toggle("disabled", false);
  }

  function disable(){
    triggerElement.classList.toggle("disabled", true);
    el.classList.toggle("disabled", false);
  }

  triggerElement.addEventListener("click", function(e){
    e.stopPropagation();
    if (triggerElement.classList.contains("open"))
      hide()
    else 
      show();
    writeSheet.focus();
    writeSheet.scroll(state.get("pageScroll"));
  });

  this.render = render;
  this.show = show;
  this.hide = hide;
  this.enable = enable;
  this.disable = disable;
  this.toggle = toggle;

  return this;

}

var DarkMode = function(selector) {
  
  const el = dom.qs(selector);

  el.addEventListener("click", toggleDarkMode);

  function toggleDarkMode(e){
    e.stopPropagation();
    var isDark = state.get("darkmode");
    writePage.pageTheme(state.get("pageTheme"));
    state.set("darkmode", !isDark);
    writeLog("Color mode switch", {props: {type: state.get("darkmode") ? "dark" : "light"}});
    writeButtons.darkmode.translate(!isDark ? "Switch to lightmode" : "Switch to darkmode")
    // to replace the textarea so selections works
    writeSheet.focus();
    writeCursor.reset();
  }

  this.toggleDarkMode = toggleDarkMode;

  state.set("darkmode", state.get("darkmode"));

}


function WriteButton(selector, txt, shortcut, cb) {
  
  const el = dom.qs(selector);
  el.addEventListener("click", cb);
  
  function toggle(className, bool) {
    if (bool === undefined) console.error("define bool in toggle button");
    el.classList.toggle(className, bool);
  }

  function translate(newText){
    
    // todo better handle exceptions
    const label = state.get("pageSubmitLabel");
    if (el.id === "submit" && label !== "Submit" && label !== "Enviar") return;

    if (newText) txt = newText;
    const isIcon = el.children.length > 0;
    if (isIcon) 
      el.setAttribute("title", t(txt) + " " + shortcut);
    else {
      el.setAttribute("title", shortcut);
      el.innerHTML = t(txt);
    }
    
  }

  translate();

  this.toggle = toggle;
  this.translate = translate;
}
window.userTouched = false;

window.addEventListener("keydown", function(e){
  
  const key = e.key;
  const command = navigator.platform.toUpperCase().indexOf('MAC')>=0 ? e.metaKey : e.ctrlKey;
  const enter = e.key === "Enter" || e.key === "Return"
  const commandLabel = navigator.platform.toUpperCase().indexOf('MAC')>=0 ? "⌘" : "Ctrl"
  const shift = e.shiftKey;
  const backspace = key === "Delete" || key === "Backspace";

  // track if user typed something

  if (!window.userTouched) {
    if (!e.metaKey  && !e.ctrlKey) {
      writeLog("User wrote something");
      window.userTouched  = true;
    }
  }

  if (enter) {
    e.preventDefault();
    writeSheet.newLine();
  }

  if (key === "Tab") {
    e.preventDefault();
    writeSheet.newTab();
  }

  if (key === "s" && command) {
    e.preventDefault();
    utils.download();
  }

  if (key === "o" && command) {
    e.preventDefault();
    utils.simulateClick(dom.gid("open"));
  }

  if (shift && key === "c" && command) {
    actions.copy(e);
  }

  if (shift && key === "x" && command) {
    actions.retry(e);
  }

  if (key === "d" && command) {
    e.preventDefault();
    state.set("darkmode", !state.get("darkmode"))
  }

  if (key === "k" && command) {
    actions.spellcheck(e);
  }

  if (key === "p" && command && !shift) {
    e.preventDefault();
    if (writeReader.enabled) return
    const showPreview = !state.get("preview")
    state.set("preview", showPreview);
    if (showPreview) {
      writeFlash.show({
        class: "shortcut-tip",
        duration: 2000,
        message: `${commandLabel} + Shift + P ${t("for print")}`
      });
    }
  }

  if (key === "p" && command && shift) {
    window.print();
  }

  if (key === "l" && command && shift) {
    e.preventDefault();
    writeDarkmode.toggleDarkMode(e);
  }

  if (key === "Enter" && command) {
    e.preventDefault();
    writeSubmit.submit();
  }

  if (key === "Escape") {
    e.preventDefault();
    writeSidebar.toggle(false);
  }

  if (key === "e" && command && !shift) {
    e.preventDefault();
    const enterLanguage = state.get("pageLanguage") === "en" ? "es" : "en";
    state.set("pageLanguage", enterLanguage);
  }

  if (key === "e" && command && shift) {
    e.preventDefault();
    if (!state.get("pageCollection")) return;
    writeBuilder.toggle(!dom.body.classList.contains("panel-open"));
  }

  if (!event.getModifierState(e.key)) writeSidebar.toggle(false);
  
});

window.addEventListener("keyup", function(e){
  if (!event.getModifierState(e.key) && !writeBuilder.active) writeCursor.set();
})

dom.qsa(".metaKey").forEach(function(metaKey){
  metaKey.innerHTML = utils.metaKey();
});
function WritePreview(){
  
  var md = new markdownit({
    html: true,
    breaks: true,
    linkify: true,
  });

  var el = dom.create({el: "article", id: "preview", class: "preview hidden"}, writePage.el);

  // todo refactor
  const button = dom.gid("markdown");
  if (!el) throw "Preview initialized without el";

  function toggle(bool, content){
    const isPreviewing = bool;
    button.classList.toggle("active", isPreviewing);
    writeSheet.toggle(!isPreviewing);
    if (isPreviewing) {
      el.innerHTML = md.render(content || state.get("pageContent")) || `<div class="preview-empty">${t("Page is blank")}</div>`;
    }
    else if (!writeBuilder.active) {
      writeCursor.reset()
    }
    el.classList.toggle("hidden", !isPreviewing);
  }

  this.toggle = toggle;
  return this;
}
var courses = [
  
  {
    name: "Blank Page",
    collection: "p",
  },

  {
    name: "Cafe de los viernes",
    collection: "cafe",
  },
  
  {
    name: "Beta",
    collection: "beta",
  },

  {
    name: "Tests",
    collection: "test",
  }, 
  
];



function Builder() {

  const _self = this;

  const things = dao
    .filter(thing => !thing.private)
    .map(function(thing) {
      return {
         name: thing.name,
         value: state.get(thing.name),
         label: thing.label,
         type: thing.type
       }
     });

  const sections = {
    "Setup": [
      "pageTitle", 
      "pageId",
      "pageLanguage", 
      "pageCollection", 
      "pageTheme",
    ],
    "Content": [
      "pagePlaceholder",
      "pageDescription",
      "pageImageUrl",
    ],
    "Conditions": [
      "pageWordGoal",
      "pageTimeLimit",
      "pageStartDate",
      "pageEndDate",
    ],
    "Outcome": [
      "pageSubmitLabel",
      "pageDestinationEmail",
      "pageDestination",
      "pageRedirectUrl",
      "pageConfirmationAction",
      "pageConfirmationTitle",
      "pageConfirmationMessage",
      "pageConfirmationActionButtonLabel",
      "pageConfirmationActionButtonUrl",
      
    ],
    "Advanced": [
    ],

  }

  // add everything else into advanced
  const categorizedThings = [].concat.apply([], Object.values(sections));
  sections.Advanced = things
    .filter(thing => {
      return !categorizedThings.find(thingName => thing.name === thingName);
    })
    .map(thing => thing.name);

  state.set("pageId", utils.generateUID());

  const panel = dom.create({ 
    class: "panel", 
    id: "panel", 
    html: ` <div class="container">
              <div class="panel-header">
              <div class="panel-title">Build prompt</div>  
               <div class="action submit button" id="publish">Publish</div>
              </div>
              <div class="panel-body"></div>
             </div>`
   }, document.body);

  var panelEl = panel.querySelector(".panel-body");
  panel.addEventListener("click", (e)=> e.stopPropagation());

  for (key in sections) {
    const section = sections[key];
    const fieldset = dom.create({el: "fieldset", class: key.toLowerCase()}, panelEl);
    const legend = dom.create({el: "legend", html: key}, fieldset);
    section.forEach(thingName => {
      const thing = things.find(thing => thingName === thing.name);
      if (!thing) console.error(thingName + " not found");
      else createField(thing, fieldset)
    })
  }

  function getPlaceholder(key) {
    const dict = {
      "pageTitle": "Untitled",
      "pagePlaceholder": t("Start typing..."),
      "pageDescription": "This page is about...",
      "pageWordGoal": "0",
      "pageTimeLimit": "0",
      "pageImageUrl": "https://...",
      "pageDestinationEmail": "example@gmail.com",
      "pageRedirectUrl": "https://...",
      "pageSubmitLabel": t("Submit"),
      "pageConfirmationActionButtonUrl": "https://...",
    }

    if (dict[key]) return dict[key]
    else return "";
  }

  function createField(thing, fieldset){
    if (thing.name === "pageId") thing.value = utils.generateUID();
    const field = dom.create({class: `field active admin ${thing.name}` }, fieldset);
    const label = dom.create({el: "label", class: "field-label", for: thing.name, html: thing.label}, field);
    const fieldValue = dom.create({class: "field-value"}, field);

    if (thing.name === "pageCollection") { createCollectionDropdown(thing, fieldValue)}
    else if (thing.name === "pageLanguage") createLanguageDropdown(thing, fieldValue)
    else if (thing.type === "boolean") createToggle(thing, fieldValue)
    else if (thing.name === "pageTheme") createAccentColor(thing, fieldValue);
    else if (thing.name === "pagePlaceholder") createTextarea(thing, fieldValue);
    else if (thing.name === "pageDescription") createTextarea(thing, fieldValue);
    else if (thing.name === "pageDestination") createDestinationsDropdown(thing, fieldValue);
    else if (thing.name === "pageConfirmationMessage") createTextarea(thing, fieldValue);
    else if (thing.name === "pageConfirmationAction") createConfirmationActions(thing, fieldValue);
    else createTextfield(thing, fieldValue)
  }

  function createTextfield(thing, fieldValue) {

    let value = setValue(thing.name, thing.value);

    if (thing.name === "pageStartDate" || thing.name === "pageEndDate") {
      if (!utils.isValidDate(value)) 
      value = convertDate(value);
    }

    const textField = dom.create({
      el: "input",
      value: thing.value ? value : thing.value || "",
      class: "field-input",
      name: thing.name,
      type: /number|email|date/.test(thing.type) ? thing.type : "text",
      placeholder: thing.placeholder || getPlaceholder(thing.name)
    }, fieldValue);

    if (thing.type === "number") {
      textField.setAttribute("min", 0);
    }

    if (thing.type === "date") {
      const clear = dom.create({
        html: "×",
        class: "field-clear",    
      }, fieldValue);
      clear.addEventListener("click", function(e){
        clear.previousSibling.value = "";
        render(e);
      })
    }

    textField.addEventListener("input", (e) => {e.stopPropagation(); render(e)});
    textField.addEventListener("keydown", (e) => {e.stopPropagation(); render(e)});
    textField.addEventListener("focus", (e) => {e.stopPropagation(); render(e)});

    if (thing.name === "pageSubmitLabel") {
      textField.addEventListener("focus", (e) => { 
        state.set("pageContent", "Lorem ipsum dolor sit amet"); 
        write.finish(); 
        writeSubmit.show(); 
      });
      textField.addEventListener("blur", (e) => { 
        state.set("pageContent", ""); 
        write.reset();
        writeSidebar.toggle(false);
        writeSubmit.hide(); 
      });
    }
  }

  function createTextarea(thing, fieldValue){
    let value = setValue(thing.name, thing.value);

        // don't display pageDescription if it's the default
    if (thing.name === "pageDescription") {
      const lang = state.get("pageLanguage") || "es";
      if (value === settings[lang === "es" ? "esDescription" : "enDescription"])
        value = "";
    }

    const textField = dom.create({
      el: "textarea",
      value: thing.value ? value : thing.value,
      html: thing.value ? value : thing.value,
      class: "field-input",
      name: thing.name,
      placeholder: getPlaceholder(thing.name)
    }, fieldValue);

    textField.addEventListener("input", (e) =>   { e.stopPropagation(); render(e); });
    textField.addEventListener("keydown", (e) => { e.stopPropagation(); render(e); });
  }

  function createAccentColor(thing, fieldValue){
    const value = setValue(thing.name, thing.value);
    fieldValue.classList.add("field-select");
    var selectField = dom.create({
      el: "select",
      class: "shortcut field-input",
      value: thing.value,
      name: thing.name
    }, fieldValue);

    const letters = {
      "a": "Red",
      "b": "Orange",
      "c": "Green",
      "d": "Blue",
      "e": "Grapes",
      "f": "Purple",
      "g": "Pink",
    }
    Object.keys(letters).forEach((letter) => dom.create({ el: "option", value: letter, html: letters[letter] }, selectField));
    selectField.selectedIndex = Object.keys(letters).indexOf(value);
    selectField.addEventListener("change", (e) =>{
      const selectedValue = selectField.children[selectField.selectedIndex].value;
      selectField.setAttribute("value", selectedValue);
      render(e);
    });
    selectField.addEventListener("click", (e) =>{e.stopPropagation();})
  }

  function createToggle(thing, fieldValue){
    const value = setValue(thing.name, thing.value);
    const onOffSwitch = dom.create({class: "onoffswitch"}, fieldValue)
    const checkboxField = dom.create({
      el: "input",
      type: "checkbox",
      name: thing.name,
      id: "check-" + thing.name,
      value: value,
      class: "onoffswitch-checkbox field-input",
    }, onOffSwitch);
    if (value) checkboxField.setAttribute("checked", true);
    else checkboxField.removeAttribute("checked");
    const label = dom.create({
      el: "label",
      for:  "check-" + thing.name,
      class: "onoffswitch-label"
    }, onOffSwitch);
    checkboxField.addEventListener("change", function(e){
      const value = checkboxField.checked;
      checkboxField.setAttribute("value", value);
      render(e);
    });
    checkboxField.addEventListener("click", (e) =>{e.stopPropagation();})
  }

  function createLanguageDropdown(thing, fieldValue) {
    const value = setValue(thing.name, thing.value) || "en";
    fieldValue.classList.add("field-select");
    var selectField = dom.create({
      el: "select",
      class: "shortcut field-input",
      value: thing.value,
      name: thing.name
    }, fieldValue);
    ["en", "es"].forEach((lang) => dom.create({ el: "option", value: lang, html: lang }, selectField));
    selectField.selectedIndex = value === "en" ? 0 : 1;
    selectField.addEventListener("change", (e) =>{
      const selectedValue = selectField.children[selectField.selectedIndex].value;
      selectField.setAttribute("value", selectedValue);
      render(e);
    });
    selectField.addEventListener("click", (e) =>{e.stopPropagation();})
  }

  function getValue(name, value) {
    if (value === "false") value = false;
    return name === "pageTimeLimit" ? value * 1000 * 60 : value;
  }

  dom.gid("publish").addEventListener("click", savePage);

  function daoToFirebase(things){
    var fbThings = things
      .map((thing) => {
        const isEmpty = getInputValue(thing.name) && getInputValue(thing.name) !== ""
        const value = isEmpty ? getInputValue(thing.name) : false;
        return value || value===0 ? {[thing.name] : value} : false;
      })
      .filter(Boolean)
        .reduce(function(result, current) {
        return Object.assign(result, current);
      }, {});
    return fbThings
  }

  function savePage(){
    const data = daoToFirebase(things);
    data.pageUrl = `https://blank.page/${data.pageCollection}/${state.get("pageId")}`;
    if (JSON.stringify(data) === JSON.stringify({})) return alert("Page is not configured")
    firebaseApp.savePage(data);
  }

  function getInputValue(name) {
    var value = dom.qs(".field-input[name=" + name + "]").value;
    if (name.indexOf("Url") != -1)
      value = utils.fixUrl(value);
    return name === "pageTimeLimit" ? value * 60 * 1000 : value;
  }

  function render(e){

    dom.qsa(".field-input").forEach(input => {
      const thing = things.find(thing => input.name === thing.name);
      if (!thing) return;

      var value = getValue(thing.name, input.value);

      // when the user updates the title, the slug is updated
      if (thing.name === "pageTitle" && e && e.target.name === "pageTitle") {
        set("pageId", utils.dirify(value))
      }

      // set the address bar
      if (thing.name === "pageId" && state.get("pageTitle") !== "New blank page") {
        setTimeout(function(){
          window.history.pushState("", "", `/${state.get("pageCollection")}/${state.get("pageId")}`);
        }, 0);
      }

      const isModal = [
        "pageConfirmationAction",
        "pageConfirmationTitle",
        "pageConfirmationMessage",
        "pageConfirmationActionButtonLabel",
        "pageConfirmationActionButtonUrl"].includes(e.srcElement.name);
      
      if (!isModal) writeShare.hide();
      else {
        const selectField = dom.qs("[name='pageConfirmationAction']");
        const selectedValue = selectField.children[selectField.selectedIndex].value;
        writeAfterSubmit.build("?" + selectedValue);
      }

      //const isSidebar = [
      //  "pageDescription",
      //  "pageImageUrl"
      //].includes(e.srcElement.name);
    
    //writeSidebar.toggle(isSidebar);


      state.set(thing.name, value);
    });

  }

  function convertDate(value) {
    const d = new Date(value);
    if (utils.isValidDate(value)) {
      return new Date(value).toISOString().split("T")[0];
    }

    else return ""
  }

  function set(key, value) {
    const el = dom.qs(`*[name=${key}]`);
    if (key === "pageStartDate" || key === "pageEndDate") {
      value = convertDate(value);
    }
    if (el) {
      el.value = setValue(key, value);
      if (el.getAttribute("type") === "checkbox") {
        if (value) el.setAttribute("checked", value)
        else el.removeAttribute("checked")
      }
    } 
  }

  function update(){
    dom.gid("publish").innerHTML = "Update";
    const things = dao
    .filter(thing => !thing.private)
    .map(function(thing) {
      return {
         name: thing.name,
         value: state.get(thing.name),
         label: thing.label,
         type: thing.type
       }
     });
    things.forEach(thing => {
      if (thing.name === "pageDestination") { dom.qs("fieldset.outcome").setAttribute("outcome", utils.dirify(thing.value))}
      if (thing.name === "pageConfirmationAction") { dom.qs("fieldset.outcome").setAttribute("action", utils.dirify(thing.value))}
      set(thing.name, thing.value);
    })
  }

  function setValue(name, value) {

    if (value === "false") value = false;
    if (value === "true") value = true;

    // fix urls without protocol
    if (
      value &&
      utils.isObject(value) &&
      name.indexOf("Url") != -1 && 
      !value.startsWith("http") 
    ) value = "http://" + value;

    // convert ms to minutes
    if (name === "pageTimeLimit")
      value = value / 1000 / 60

    if (name === "pageWordGoal") {
      value = parseInt(value, 10);
    }

    return  value;
  }

  function createConfirmationActions(thing, fieldValue) {
    const value = setValue(thing.name, thing.value) || "en";
    fieldValue.classList.add("field-select");
    var selectField = dom.create({
      el: "select",
      class: "shortcut field-input",
      value: thing.value,
      name: thing.name
    }, fieldValue);
    
    writeAfterSubmit.services.forEach((service) => {
      dom.create({ el: "option", value: service.value, html: service.name }, selectField)
    });

    const fieldset = selectField.closest("fieldset");
    fieldset.setAttribute("action", writeAfterSubmit.services[0].value);

    selectField.addEventListener("change", (e) =>{
      const selectedValue = selectField.children[selectField.selectedIndex].value;
      fieldset.setAttribute("action", selectedValue);
      writeAfterSubmit.build("?" + selectedValue);
      render(e);
    });
    selectField.addEventListener("click", (e) =>{e.stopPropagation();})
  }

  function createDestinationsDropdown(thing, fieldValue){
    const value = setValue(thing.name, thing.value);
    fieldValue.classList.add("field-select");
    
    var selectField = dom.create({
      el: "select",
      class: "shortcut field-input",
      value: thing.value,
      name: thing.name
    }, fieldValue);

    const fieldset = selectField.closest("fieldset");

    var selectFieldDetails = dom.create({
      class: "field-details"
    }, fieldValue.parentNode);

    const services = ["Reader", "Reader with message", "Redirect to URL"];

    fieldset.setAttribute("outcome", utils.dirify(services[0]));

    services.forEach((service, i) => {
      dom.create({ el: "option", value: service, html: service }, selectField)
    });

    selectField.selectedIndex = services.includes(fieldValue) ? services.indexOf(fieldValue) : 0;

    selectField.addEventListener("change", (e) =>{
      dom.empty(selectFieldDetails);
      const selectedValue = selectField.children[selectField.selectedIndex].value;
      fieldset.setAttribute("outcome", utils.dirify(selectedValue));
      if (selectedValue === "Redirect to URL") {
        fieldset.querySelector('[name="pageRedirectUrl"]').focus();
      }
      if (selectedValue === "Reader with message") {
        writeAfterSubmit.build("?custom");
      }
      selectField.setAttribute("value", selectedValue);
    });
  }

  function createCollectionDropdown(thing, fieldValue){
    const value = setValue(thing.name, thing.value);
    fieldValue.classList.add("field-select");
    var selectField = dom.create({
      el: "select",
      class: "shortcut field-input",
      value: thing.value,
      name: thing.name
    }, fieldValue);
    courses.forEach((course, i) => {
      dom.create({ el: "option", value: course.collection, html: course.collection }, selectField)
    });
    selectField.selectedIndex = isNaN(thing.value) || thing.value > courses.length-1 ? 0 : parseInt(thing.value, 10);
    selectField.addEventListener("change", (e) =>{
      const selectedValue = selectField.children[selectField.selectedIndex].value;
      selectField.setAttribute("value", selectedValue === "0" ? "" : selectedValue);
      render(e);
    });
  }

  this.update = update;
  this.set = set;
  this.render = render;
  this.toggle = function(bool){
    dom.body.classList.toggle("panel-open", bool);
    _self.active = bool;
  }
  this.active = false;
  this.toggle(window.location.href.includes("build."))

  // single collection
  setTimeout(function(){
    if (!_self.active) return
    var paths = window.location.pathname.split("/").filter(Boolean);
    const course = paths.find(path => courses.find(course => course.collection === path));
    const loc = window.location.href.replace("build.", "");
    if (course) {
      state.set("pageCollection", course);
      const fieldEl = dom.qs(".field.pageCollection");
      fieldEl.style.display = "none";
      const selectEl = dom.qs(".field-input", fieldEl);
      selectEl.setAttribute("value", course);
      selectEl.selectedIndex = Array
        .from(selectEl.options)
        .findIndex(option => option.textContent === course) || 0;

      dom.create({
        el: "a",
        href:  "https://blank.page/" + course + "/",
        html: "Dashboard →",
        class: "dashboard-link",
      }, document.body);
    }
  },0)
  
}

/* Currently disabled */

// function createSpacesDropdown(thing, fieldValue){
//   let spaces;
//   const value = setValue(thing.name, thing.value);
//   const selectField = dom.create({
//     el: "select",
//     class: "shortcut field-input",
//     value: thing.value,
//     name: thing.name,
//     html: "<option value='0'>Does not belong to course</option>"
//   }, fieldValue);
// 
//   function callback(data){
//     spaces = JSON.parse(data);
//     console.log(spaces)
//     if (spaces.status === "unauthorized") return false;
//     const spaceGroups = spaces.reduce(function (r, a) {
//         r[a.space_group_name] = r[a.space_group_name] || [];
//         r[a.space_group_name].push(a);
//         return r;
//     }, Object.create(null));
// 
//     selectField.innerHTML = "<option value='0'>Does not belong to space</option>";
//     selectField.addEventListener("click", (e) =>{e.stopPropagation();})
// 
//     const frag = document.createDocumentFragment();
//     
//     for (key in spaceGroups) {
//       const optgroup = dom.create({el: "optgroup", label: key}, frag);
//       spaceGroups[key].forEach(space => {
//         dom.create({el: "option", value: space.id, html: space.name}, optgroup)
//       });
//     }
//     selectField.appendChild(frag);
// 
//   }
// 
//   //ajax.get("/.netlify/functions/spaces", {}, callback);
// 
//   selectField.selectedIndex = isNaN(thing.value) ? 0 : parseInt(thing.value, 10);
// 
//   selectField.addEventListener("change", (e) => {
//     const spaceId = parseInt(selectField.value, 10);
//     const space = spaces.find(space => space.id === spaceId);
//     dom.qs("input[name=assignmentRedirectUrl]").value = space ? space.url : "";
//     render(e);
//   });
// }


function WritePage(selector){
  
  const el = dom.qs(selector);

  function add(className) { dom.body.classList.add(className); }
  function remove(className) { dom.body.classList.remove(className);}
  function toggle(className, bool) { dom.body.classList.toggle(className, bool); }

  function tick(s){
    const timeLimit = state.get("pageTimeLimit");
    if (!timeLimit || writeReader.enabled) return;
    writeCount.update();
    writeProgress.update();
    if (state.get("pageElapsed") > state.get("pageTimeLimit")) {
      writePage.finished = false;
      write.finish("timeLimit");
    }
    else {
      writeSubmit.disable();
    }
  }

  function _displayRules(){
    const rules = utils.getRules();
    const message = utils.rulesToString(rules);
    writeFlash.spawn({
      id: "flash-rules",
      message,
      duration: false
    })
  }

  function setWordGoal(value) {
    writeConfigure.render();
    _displayRules();
  }

  function setTimeLimit(value) {
    writeConfigure.render();
    _displayRules();
  }

  function setTitle(){
    const content = state.get("pageContent");
    //if (!state.get("pageCollection") && content) {
    //  const arr = content.split("\n").filter(Boolean)[0].split(" ");
    //  if (arr.length > 1) {
    //    document.title = arr.slice(0,8).join(" ") 
    //    if (arr.length > 8) document.title = document.title.trim() + "...";
    //  }
    //  else 
    //    document.title = t("New blank page");
    //}
    document.title = content ? content.substring(0, 32) : t("New blank page");

  }

  function setWpmLimit(value) {
    const label = value > 0 ? value + " WPM" : "WPM";
    //dom.update("timeLimit", label);
  }

  function darkMode(bool=false){
    document.body.classList.toggle("inverted", bool);
  }

  function pageAuthorName(name) {
    if (!name) return;
    writeMeta.og("article:author", name);
    var span = dom.qs("#author");
    span.innerHTML = t("By")  + " " + name;
  }

  function pageRedirectUrl(){
    // todo ?
  }

  function getCourse(collection){
    const course = courses.find(course => course.collection === collection) || courses[0];
    return course;
  }

  function setLanguage(lang){
    dom.body.setAttribute("lang", lang);
    writeCount.update();
    writeSheet.placeholder(state.get("pagePlaceholder") || t("Start typing..."));
    writeConfigure.render();
    writeCounterSelect.render();
    writeSubmit.label(state.get("pageSubmitLabel"));

    if (!state.get("pageCollection")) {
      state.set("pageDescription", lang === "es" ? settings.esDescription : settings.enDescription);
    }

    setTimeLimit(state.get("pageTimeLimit"));
    setWordGoal(state.get("pageWordGoal"));
    for (button in writeButtons) {
      writeButtons[button].translate();
    }
  }

  function setIcon(content){
    const linkEl = dom.qs("link[rel=icon]");
    const iconIsEmpty = linkEl.getAttribute("data-type") === "empty";
    
    // updating the link is expensive to only do if needed
    if (!content && iconIsEmpty) return;
    if (content && !iconIsEmpty) return;

    linkEl.setAttribute("data-type", content ? "populated" : "empty")
    const svg = content ? settings.populatedIcon : settings.emptyIcon; 
    linkEl.setAttribute("href", `data:image/svg+xml,${encodeURI(svg)}`);
    writeTitle.icon(svg);
  }

  function disablePaste(bool){
    writeSheet.protected = bool;
  }

  // actions
  function pasted(e){
    if (writeSheet.protected) {
      e.preventDefault();
      writeFlash.show({
        class: "paste-not-allowed",
        duration: 2000,
        message: t("Pasting is not allowed")
      });
      return false;
    }

    var items = (event.clipboardData || event.originalEvent.clipboardData).items;

    for (index in items) {
      var item = items[index];
      
      // image upload
      if (item.kind === 'file') {
        e.preventDefault();
        const clipboardData = e.clipboardData || window.clipboardData;
        var altText = clipboardData.getData('Text');
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onload = function(event){
          const dataUrl = event.target.result;
          writeSheet.pasteImage(dataUrl, altText);
        };
        reader.readAsDataURL(blob);
      }

      const isSelected = writeSheet.getSelection().length;
      // markdown links
      if (item.kind === 'string' && isSelected) {
        const clipboardData = e.clipboardData || window.clipboardData;
        var url = clipboardData.getData('Text').trim();
        if ( url.startsWith("http://") || url.startsWith("https://") ) {
          // replace pasted text with markdown link
          e.preventDefault();
          const text = writeSheet.getSelection();
          const link = `[${text}](${url})`;
          writeLog("Paste URL", {props: {url: link}});
          writeSheet.replaceSelection(link);
        }
      }
    }
  }

  function keyboardIdleTick(s) {
    // noop
  }

  function copyurl(){
    var dummy = document.createElement('input');
    var url = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    writeFlash.show({
      class: "copied-to-clipboard",
      duration: 2000,
      message: t("Copied link to clipboard") 
    });
  }

  function share(){
    const text = state.get("pageContent");
    const email = prompt("Email it to:", "example@mail.com");
    const url = `mailto:${email}?subject=${encodeURIComponent('Written in blank.page')}&body=${encodeURIComponent(text)}`;
    if (email) window.open(url);
  }

  function comment(){
    writeComments.show();
  }

  function setStartDate(date) {
    const isValid = utils.isValidDate(date);
    if (!isValid) {
      writeSheet.setContent(state.get("pageContent"))
      writeSheet.enable(); 
      writePreview.toggle(false);
      return;
    };
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    date = new Date(date.getTime() + userTimezoneOffset);
    const currentDate = new Date();
    if (currentDate.getTime() < date.getTime()) {
      // todo improve
      dom.gid("flash-rules").style.display = "none";
      dom.gid("markdown").style.display = "none";
      writeSidebar.toggle(false, {block: true});

      setTimeout(function(){
        const content = `${t("Assignment will be available on")} ${tDate(date)}.`;
        writePreview.toggle(true, content);
      }, 10)
    }
    else {
      writeSheet.setContent(state.get("pageContent"))
      writeSheet.enable();
    }
  }

  function setEndDate(date) {
    const isValid = (date instanceof Date && isFinite(date));
    if (!isValid) {
      writeSheet.setContent(state.get("pageContent"))
      writeSheet.enable();
      writePreview.toggle(false)
      return;
    };
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    date = new Date(date.getTime() + userTimezoneOffset);
    const currentDate = new Date();
    if (currentDate.getTime() > date.getTime() || !isValid) {
      dom.gid("flash-rules").style.display = "none";
      dom.gid("markdown").style.display = "none";
      writeSidebar.toggle(false, {block: true});

      setTimeout(function(){
        const content = `${t("Page expired. It was due")} ${tDate(date)} ${t("before midnight (local time)")}`;
        writePreview.toggle(true, content);
      }, 10);
    }
    else {
      writeSheet.setContent(state.get("pageContent"))
      writeSheet.enable();
    }
  }

  function pageTheme(letter) {
    const inverted = state.get("darkmode");
    const style = inverted && !writeBuilder.active ? document.body.style : document.documentElement.style;
    const steps = [...Array(16).keys()];
    steps.forEach(number => {
      style.setProperty('--accent' + number, `rgb(var(--${letter}${number}))`);
    });
  }

  function pageShare(bool) {
    toggle("social-show", bool);
  }

  function activate(){
    el.classList.add("ui-active");
  }

  function focus(){
    const exceptions = dom.body.classList.contains("finished") || dom.qs(".select.open");
    if (exceptions) return;
    el.classList.remove("ui-active");
  }

  this.activate = activate;
  this.focus = focus;
  this.pasted = pasted;
  this.copyurl = copyurl;
  this.share = share;
  this.setLanguage = setLanguage;
  this.add = add;
  this.remove = remove;
  this.tick = tick;
  this.keyboardIdleTick = keyboardIdleTick;
  this.toggle = toggle;
  this.disablePaste = disablePaste;
  this.setTimeLimit = setTimeLimit;
  this.setWordGoal = setWordGoal;
  this.darkMode = darkMode;
  this.pageAuthorName = pageAuthorName;
  this.pageRedirectUrl = pageRedirectUrl;
  this.getCourse = getCourse;
  this.setStartDate = setStartDate;
  this.setEndDate = setEndDate;
  this.setIcon = setIcon;
  this.pageTheme = pageTheme;
  this.pageShare = pageShare;
  this.comment = comment;
  this.download = utils.download;
  this.setTitle = setTitle;
  this.isBlocked = false;
  this.markdown = () => state.set("preview", !state.get("preview"));
  this.el = el;
}

function WriteModal(config = {dismissable: true, fade: true}){

  const overlay = dom.create({class: "modal-overlay hidden" + (!config.fade ? " modal-overlay-no-transition" : "")}, document.body);
  const el = dom.create({class: `modal ${config.class || ''}`}, overlay);
  const content = dom.create({class: "modal-content"}, el);
  
  if (config.dismissable) {
    const close = dom.create({class: "modal-close", html: "×"}, el);
    [overlay, close].forEach(el => {
      el.addEventListener("click", (e)=> {
        e.stopPropagation();
        hide();
      });
    });
  }
   
  el.addEventListener("click", (e)=> {
    e.stopPropagation();
  });

  function show(){
    overlay.classList.remove("hidden");
    setTimeout(function(){
        el.classList.add("modal-animate");
    },1)
  }

  function hide(){
    el.classList.remove("modal-animate");
    overlay.classList.add("hidden");
  }

  function html(blob){
    content.innerHTML = blob;
  }

  this.show = show;
  this.hide = hide;
  this.html = html;
}
function WriteReader() {

  function enable(content){
    this.enabled = true;
    writePreview.toggle(true, content);
    writePage.pageAuthorName(state.get("pageAuthorName") || state.get("pageAuthorEmail"));
    writeProgress.hide();
    writePage.add("reader");
    writeSubmit.hide();
    
    const hContainer = dom.gid("hypothesis") || dom.create({id: "hypothesis", class: "panel inverted-undo hidden"}, document.body);

    window.hypothesisConfig = function () {
      const accentColor = window.getComputedStyle(dom.gid("submit")).backgroundColor;
      
      return {
        showHighlights: true,
        theme: "clean",
        branding: {
          accentColor: accentColor,
          appBackgroundColor: 'white',
          ctaBackgroundColor: accentColor,
          ctaTextColor: 'white',
          selectionFontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace'
        },
        externalContainerSelector: "#hypothesis",
        onLayoutChange: function(e){
          if (!hContainer.classList.contains("hidden") && !e.expanded) return;
          hContainer.classList.toggle("hidden", !e.expanded);
          const isHidden = hContainer.classList.contains("hidden"); 
          dom.gid("preview").classList.toggle("show-annotations", !isHidden);
        }
      };
    };

    var script = document.createElement('script');
    script.onload = hypothesLoaded;
    script.src = "//hypothes.is/embed.js";
    script.async = true;
    document.head.appendChild(script); 
  }

  function hypothesLoaded(e){

    // already created
    if (dom.gid("comment")) return true

    dom.gid("hypothesis").addEventListener("click", (e)=> e.stopPropagation());
      
    const commentIcon = dom.create({
      id: "comment",
      class: "comment header-icon"
    });

    dom.qs(".header-icons").prepend(commentIcon);

    const svgCommentIcon = dom.create({
      el: "svg",
      width: 24,
      height: 24,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, commentIcon);

    const commentCount = dom.create({
      "class": "comment-count",
      "data-hypothesis-annotation-count": true
    }, commentIcon);

    observe(commentCount);

    dom.create({
      el: "path",
      d: "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
    }, svgCommentIcon);

    commentIcon.addEventListener("click", function(e){
      e.stopPropagation();
      dom.gid("hypothesis").classList.toggle("hidden");
      const isHidden = dom.gid("hypothesis").classList.contains("hidden");
      commentIcon.classList.toggle("open", !isHidden)
      dom.gid("preview").classList.toggle("show-annotations", !isHidden);
    });

    dom.body.addEventListener("click", function(){
      dom.gid("hypothesis").classList.add("hidden");
      dom.gid("comment").classList.remove("open");
    });

  }

  function observe(targetNode){
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                targetNode.classList.toggle("empty", targetNode.textContent === "0");
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }


  this.enabled = false;
  this.enable = enable;
  return this;
}
function WriteMeta(){

  function og(tag, value){
    const el = document.querySelector(`meta[property="${tag}"]`);
    if (!el) throw "Meta tag property " + tag + " not found";
    if (!value) return;
    el.setAttribute("content", value);
  }

  function set(tag, value){
    const el = document.querySelector(`meta[name="${tag}"]`);
    if (!el) throw "Meta tag property " + tag + " not found";
    if (!value) return;
    el.setAttribute("content", value);
  }

  this.set = set;
  this.og = og;
  return this;
}
function WriteSidebar(){

  const _self = this;
  const page = dom.gid("page");

  const sidebar = dom.create({ 
  class: "sidebar", 
  id: "sidebar",
  html: ` <div class="sidebar-overlay"></div>
          <div class="sidebar-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
              </svg>
          </div>
          <div class="container">
            <div class="sidebar-content">
              <div id="sidebar-image" class="sidebar-image"></div>
              <div id="sidebar-body" class="sidebar-body"></div>
            </div>
            <div id="container-footer" class="container-footer">
              <div id="container-footer-text"></div>
            </div>
          </div>

           `
  }, page);

  sidebar.addEventListener("click", (e)=> e.stopPropagation());
  
  const closeSidebar = (e) => { writePage.focus(); toggle(false);}
  dom.qs(".sidebar-overlay").addEventListener("click", closeSidebar);
  dom.qs(".sidebar-close").addEventListener("click", closeSidebar);


  function toggle(bool, opts={}){

    if (opts.block) {
      this.blocked = true;
      dom.gid("page-title").style.pointerEvents = "none";
    }
    const open = bool;
    if (open) {
      if (this.blocked) return;
      page.classList.add("sidebar-open");
      writePage.activate();
      setTimeout(function(){
        writeSheet.focus();
        writeCursor.reset();
      },0)
    }
    else {
      page.classList.remove("sidebar-open", "panel-open");
      if (state.get("pageVisited")) return;
      state.set("pageVisited", true);
      
      state.set("pageTitle", state.get("pageTitle"));
      setTimeout(function(){
        writeSheet.focus();
        writeCursor.reset();
      },0)
    }
  }

  function description(txt){
    const txtEl = dom.gid("sidebar-body");
    const md = new markdownit({
      html: true,
      breaks: true,
      linkify: true,
    });

    var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    
    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      // If you are sure other plugins can't add `target` - drop check below
      var aIndex = tokens[idx].attrIndex('target');

      if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self);
    };

    txtEl.innerHTML = md.render(txt);
    fitVid();
  }

  function fitVid(){

    // List of Video Vendors embeds you want to support
    var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];

    // Select videos
    var fitVids = document.querySelectorAll(players.join(","));

    // If there are videos on the page...
    if (fitVids.length) {
      // Loop through videos
      for (var i = 0; i < fitVids.length; i++) {
        // Get Video Information
        var fitVid = fitVids[i];
        var width = fitVid.getAttribute("width");
        var height = fitVid.getAttribute("height");
        var aspectRatio = height / width;
        var parentDiv = fitVid.parentNode;

        // Wrap it in a DIV
        var div = document.createElement("div");
        div.className = "video-wrapper";
        div.style.paddingBottom = aspectRatio * 100 + "%";
        parentDiv.insertBefore(div, fitVid);
        fitVid.remove();
        div.appendChild(fitVid);

        // Clear height/width from fitVid
        fitVid.removeAttribute("height");
        fitVid.removeAttribute("width");
      }
    }
  }

  function image(url){
    const container = dom.gid("sidebar-image");
    
    // prevent this from reloading on builder

    const img = dom.qs("img", container);

    if (!img && url) {
      const img = dom.create({el: "img", src: url, alt: ""}, container);
      writeMeta.og("og:image", url);
    }
    else if (!url) {
      dom.empty(container);
    }
    else if (img.src !== url) {
      img.src = url;
    }
  }

  function destinationEmail(email) {
    const footerEl = dom.gid("container-footer");
    const hasSubmit = state.get("pageCollection");
    footerEl.style.display = hasSubmit ? "block" : "none";
    const message = email 
      ? `${t("Your reply will be emailed to")}<br /><a href="mailto:${email}">${email}</a>`
      : t("Your submission is private.<br> You can choose to share it in the next step.")
    dom.gid("container-footer-text").innerHTML = message;
  }

  this.blocked = false;
  this.description = description;
  this.image = image;
  this.destinationEmail = destinationEmail;
  this.toggle = toggle;
}
function WriteTitle(selector){
  const pageTitle = dom.qs(selector);

  function set(title){
    const txtEl = dom.qs(".page-title-txt", pageTitle);
    if (title !== settings.pageTitle) txtEl.textContent = title;
    document.title = title;
  }

  function icon(svg){
    const existing = dom.qs("svg", pageTitle);
    existing.parentNode.removeChild(existing);
    const parser = new DOMParser();
    svg = parser.parseFromString(svg, "image/svg+xml");
    const svgStyles = dom.qs("style", svg);
    svgStyles.parentNode.removeChild(svgStyles);
    pageTitle.prepend(svg.documentElement);
  }

  pageTitle.addEventListener("click",(e) => {
    e.stopPropagation();
    // if you click on the icon with alt, it will fill the sidebar with the page content
    // as a hack/easter egg to preview the sidebar
    if (e.altKey) { state.set("pageDescription", writeSheet.getContent()); }
    
    setTimeout(function(){
      writeSheet.focus();
      writeCursor.reset()
    },0)
    const isOpen = page.classList.contains("sidebar-open");
    writeLog("Sidebar", !isOpen);
    writeSidebar.toggle(!isOpen);
  });

  this.set = set;
  this.icon = icon;
}




function WriteAfterSubmit(){

  const fbRenderFn = utils.debounce(()=> FB.XFBML.parse(dom.gid("button-facebook").parentNode), 200);
  const gcRenderFn = utils.debounce(()=> gapi.sharetoclassroom.go(dom.gid("button-gclassroom").parentNode), 200);
  const twRenderFn = utils.debounce(()=> twttr.widgets.load(), 200);

  function build(param){
    
    if (!param) return;
    
    // if (param === "?redirect") {
    //   const email = state.get("pageDestinationEmail") || state.get("pageAuthorEmail"); 
    //   writeFlash.show({
    //     message: `Response sent to ${email}`,
    //     duration: 4000
    //   });
    //   return;
    // }

    let integration = param.substring(1);

    if (integration) {
      writeFlash.show({ message: `${t("Content saved")} <a onclick="javascript:actions.copyUrl(event)">${ t("Copy URL")}</a>`, duration: 5000 });
      if (integration  === "saved") return;
    };

    // start integrations

    let content = `
        <h2>${state.get("pageConfirmationTitle")}</h2>
        ${markdown(state.get("pageConfirmationMessage"))}
    `;

    const buttons = {
      "facebook": `
        <div id="button-facebook" class="fb-share-button" data-href="https://blank.page" data-layout="button" data-size="large">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblank.page%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share on Facebook</a>
        </div>`,
      "gclassroom": `
        <div class="g-sharetoclassroom" 
          id="button-gclassroom"
          data-title="by ${state.get("pageAuthorName")}" 
          data-onsharecomplete="writeAfterSubmit.shareComplete" 
          data-itemtype="assignment" 
          data-size="32" 
          data-url="${state.get("pageUrl")}"
        >
      `,
      "twitter": `
        <a class="twitter-share-button"
            id="button-twitter"
            href="https://twitter.com/intent/tweet"
            data-size="large"
            data-text="I wrote this on blank.page"
            data-url="${state.get("pageUrl")}"
          >
          Tweet
        </a>`,
      "custom": `
        <a id="button-custom" class="button accent" href="${state.get("pageConfirmationActionButtonUrl") || "#"}">
          ${state.get("pageConfirmationActionButtonLabel")}
        </a>`
    };

    const scripts = {
      "facebook": {
        id: "script-facebook",
        el: "script", 
        nonce: "SImoZ4S2", 
        src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=3359666180768236&autoLogAppEvents=1"
      },
      "gclassroom": {
        id: "script-gclassroom",
        el: "script", 
        src: "https://apis.google.com/js/platform.js"
      },
      "twitter": {
        id: "script-twitter",
        el: "script", 
        src: "https://platform.twitter.com/widgets.js"
      }
    };

    if (buttons[integration]) 
      content += dom.create({class: "modal-footer", html: buttons[integration]}).outerHTML;
    if ( scripts[integration] && !dom.gid("script-" + integration) ) {
      if (integration === "gclassroom") dom.create({el: "script", html: "window.___gcfg = { parsetags: 'explicit'};" }, document.body);
      const script = dom.create(scripts[integration], document.body);
      if (integration === "gclassroom") script.onload = () => gapi.sharetoclassroom.go(dom.gid("button-gclassroom").parentNode); 
    }

    writeShare.html(content);


    if (dom.gid("script-" + integration)) {
      if (integration === "twitter" && window.twttr) twRenderFn()
      if (integration === "facebook" && window.FB) fbRenderFn()
      if (integration === "gclassroom" && window.gapi) gcRenderFn()
    }

    writeShare.show();
  }

  function markdown(content) {
    const md = new markdownit({
      html: true,
      breaks: true,
      linkify: true,
    });

    var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    
    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      // If you are sure other plugins can't add `target` - drop check below
      var aIndex = tokens[idx].attrIndex('target');

      if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self);
    };

    return md.render(content);
  }


  function shareComplete(){
    const redirect = state.get("pageRedirectUrl");
    const link = redirect 
      ? `<a href="#" onclick="function(){ writeShare.hide(); window.location=${redirect};}">Go to classroom</a>`
      : `<a href="#" onclick="writeShare.hide">Dismiss</a>`
    content = `
        <h2>Your assignment was sent</h2>
        <div style="margin-top: var(--x4); text-align: center; color: var(--base9)">
          ${link}
        </div> 
    `;
    writeShare.html(content);
  }

  this.services = [
    {name: "Custom", value: "custom" },
    {name: "Google Classroom", value: "gclassroom" },
    {name: "Facebook",         value: "facebook" },
    {name: "Twitter",          value: "twitter" },
  ];
  
  this.build = build;
  this.shareComplete = shareComplete;
}
function WriteLog(){
  return function(key, props) {

    if (!window.plausible || writeBuilder.active) return;
    
    const dev = true;

    if (!props) {
      console.log("plausible", key)
      plausible(key)
    }

    else {
      console.log("plausible", key, props)
      plausible(key, props)
    }

  }
}

function WriteCampaign(){
  
  const hasSeenCampaign = window.localStorage.getItem("2023campaign");

  // GoFundMe Widget
  if (!dom.qs(".gfm-embed")  && window.location.pathname === "/") {

    const widget = dom.create({
      class: "gfm-embed",
      "data-url": "https://www.gofundme.com/f/keep-blank-page-free/widget/medium/"
    }, dom.qs('.sidebar-content'));

    const script = dom.create({
      el: "script",
      src: "https://www.gofundme.com/static/js/embed.js"
    }, dom.body);

    script.addEventListener("load", function(){
      window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
      }));
    })

  }
  // exit if campaign has been seen
  window.resetCampaign = function() {
    window.localStorage.removeItem("2023campaign");
    window.location.reload();
  }
  campaignFlash();
  if (hasSeenCampaign) return;

  const prompts = [
    "Help me keep this page running!",
    "Enjoying this page? Donate to keep it running.",
    "I need your help to keep this page free.",
    "If every visitor donated $1, this campaign would end in 8 hours."
  ]

  dom.body.classList.add("campaign");

  const isBar = true;
  if (isBar) dom.body.classList.add("campaign-bar");

  const alert = dom.create({
    class: "campaign-alert",
    html: `
      <div class='campaign-prompt'>${prompts[prompts.length * Math.random() | 0]}</div>
      ${ dom.create({
        el: "a",
        href: "https://www.gofundme.com/f/keep-blank-page-free",
        target: "_blank",
        onclick: "writeCampaign.click('" +(dom.body.classList.contains("campaign-bar") ? "bar donate" : "notification donate") + "')",
        html: "<img src='/img/gofundme.svg' width='60' alt='gofundme' />"
      }).outerHTML}
    <div>
      ${ dom.create({
        el: "a",
        class: "button gofundme",
        href: "https://www.gofundme.com/f/keep-blank-page-free",
        target: "_blank",
        onclick: "writeCampaign.click('" +(dom.body.classList.contains("campaign-bar") ? "bar donate" : "notification donate") + "')",
        html: "Donate now",
      }).outerHTML}`
    
  });

  const close = dom.create({
    class: "campaign-alert-close",
    html: "×"
  });

  let plea = new WriteModal({dismissable: false, class: "campaign-plea-modal modal-transition"});
  let thanks = new WriteModal({dismissable: true, class: "campaign-thanks-modal modal-transition"});
  var originalPlaceholder = writeSheet.placeholder();

  close.addEventListener("click", (e) => {
    e.stopPropagation();
    writeCampaign.click(dom.body.classList.contains("campaign-bar") ? "bar dismiss" : "notification dismiss");
  });

  alert.appendChild(close);
  dom.body.appendChild(alert);

  setTimeout(function(){
    originalPlaceholder = writeSheet.placeholder();
    if (!isBar) writeSheet.placeholder(prompts[prompts.length * Math.random() | 0]);
  }, 0)

  function showPlea(){
    writeSheet.placeholder(originalPlaceholder);
    dom.body.classList.remove("campaign", "campaign-bar");
    alert.classList.add("hidden");

    setTimeout(function(){
    plea.html(`
      <p>Hi, dear user.</p>

      <p>Behind this page, there's a real person. It's me: René. I've poured my time (and savings) to keep this page free.</p>

      <p>Free of advertising. Free of paywalls. Free of sign-ups and forgotten passwords. Free of downloads behind walled AppStores. Free of investor's growth ambitions.</p>

      <p>Where's the catch? Where's the ad? Where's the limit to unlock the “Pro” features?</p>
      
      <p>There is no catch. But I need your help to keep it that way.</p>

      <p>Sincerely,<br>
      René Galindo</p>
      ${dom.create({
        class: "modal-footer modal-footer-campaign", 
        html: `
          <div>
            <a class='button gofundme' href='https://www.gofundme.com/f/keep-blank-page-free' target="_blank" onclick='writeCampaign.click("modal donate")'>Donate now</a>
            <a href='https://www.gofundme.com/f/keep-blank-page-free/' target='_blank' onclick='writeCampaign.click("modal donate")'><img src='/img/gofundme.svg' width='60' alt='gofundme' /></a>
          </div>
          <div>
             <a class='button button-text' onclick='writeCampaign.click("modal dismiss")'>I don't want to support you</a></div>
          </div>
            `}).outerHTML
      }
    `);
    plea.show();
    }, 1000);
  }

  function showThanks(e){

    plea.hide();
    if (e) e.stopPropagation();

    dom.body.classList.remove("campaign", "campaign-bar");
    writeSheet.placeholder(originalPlaceholder);
    alert.classList.add("hidden");
    
    thanks.html(`
      <p><strong>Well, thank you anyways.</strong></p>
      <p>Would you mind telling me a bit more about you how use this page?</p>
      ${dom.create({
        class: "modal-footer modal-footer-campaign", 
        html: "<div><a class='button accent' href='https://forms.reform.app/ZCfKMr/feedback/yhb9tc' target='_blank' onclick='writeCampaign.click(\"modal survey\")'>Sure, let's do it</a></div>"}).outerHTML
      }
    `);
    thanks.show();
  }

  function click(type) {

    const actions = {
      "notification donate": function(){ 
        writeLog("Notification: Click Donate Button"); 
        plea.hide();
        thanks.hide();
        window.localStorage.setItem("2023campaign", "true");
        dom.body.classList.remove("campaign", "campaign-bar");
        campaignFlash();
      },
      "bar donate": function(){
        writeLog("Announcement bar: Click Donate Button"); 
        plea.hide();
        thanks.hide();
        window.localStorage.setItem("2023campaign", "true");
        dom.body.classList.remove("campaign", "campaign-bar");
        campaignFlash();
      },
      "modal donate": function(){ 
        writeLog("Modal: Click Donate Button"); 
        plea.hide();
        thanks.hide();
        window.localStorage.setItem("2023campaign", "true");
        dom.body.classList.remove("campaign", "campaign-bar");
        campaignFlash();
      },
      "notification dismiss": function(){ 
        writeLog("Notification: Dismiss");
        showPlea();
      },
      "bar dismiss": function(){ 
        writeLog("Announcement bar: Dismiss");
        showPlea();
      },
      "modal dismiss": function(){
        writeLog("Modal: Dismiss");
        plea.hide();
        showThanks();
        window.localStorage.setItem("2023campaign", "true");
        campaignFlash();
      },
      "modal survey": function(){
        writeLog("Modal: Click Survey Button");
        plea.hide();
        showThanks();
      },
    };
    if (!actions[type]) console.warn(type + " not found in campaign actions")
    else !actions[type]();
  }

  // Toggles between bar and alert styles, used only in /campaign

      window.toggleCampaign = function() {
      const hasPlaceholder = !dom.body.classList.contains('campaign-bar');
      dom.body.classList.toggle('campaign-bar');
      
      if (hasPlaceholder) {
        dom.qs(".campaign-prompt").innerHTML = writeSheet.placeholder();
        writeSheet.placeholder(originalPlaceholder); 
      }

      else {
        writeSheet.placeholder(dom.qs(".campaign-prompt").innerHTML);
      }

    }

    function campaignFlash(){
        if (window.location.pathname.split("/").pop() === "campaign") {
        const action = window.localStorage.getItem("2023campaign") ? '<a onclick="resetCampaign()">Restore</a>' : '<a onclick="toggleCampaign()">Toggle</a>';

        writeFlash.spawn({
          duration: false,
          message: `Fundraiser bar/alert ${action}`
        });
      }
    }

  // End toggle

  this.showThanks = showThanks;
  this.click = click;

}

let state = new State();
let writeFlash = new WriteFlash("#flash");
let write = new Write();
let writeCursor = new WriteCursor("#sheet");
let writeSheet = new WriteSheet();
let writeCount = new WriteCount("#counter");
let writeTitle = new WriteTitle("#page-title");
let writeAfterSubmit = new WriteAfterSubmit();
let writeBuilder = new Builder();
let writeProgress = new WriteProgress("#progress");

let writeButtons = {
  copy:       new WriteButton( "#copy",       "Copy",       utils.isMac ? "⇧⌘C" : "Shift Ctrl—C", actions.copy ),
  submit:     new WriteButton( "#submit",     "Submit",     utils.isMac ? "⌘↵" : "Ctrl—Enter", actions.submit ),
  download:   new WriteButton( "#download",   "Save",       utils.isMac ? "⌘S" : "Ctrl—S", actions.download ),
  darkmode:   new WriteButton( "#contrast",   "Switch to " + (state.get("darkmode") ? "lightmode" : "darkmode") , utils.isMac ? "⌘D" : "Ctrl—D", actions.darkmode ),
  fullscreen: new WriteButton( "#fullscreen", "Fullscreen", utils.isMac ? "⌃⌘F" : "F11", actions.fullscreen),
  configure:  new WriteButton( "#configure",  "Configure", "" ),
  preview:    new WriteButton( "#markdown",   "Preview",    utils.isMac ? "⌘P" : "Ctrl—P", actions.preview ),
  spellcheck: new WriteButton( "#spellcheck", "Spellcheck", utils.isMac ? "⌘K" : "F7", actions.spellcheck ),
}

let writeFullscreen = new WriteFullscreen("#fullscreen");
let writePage = new WritePage("#page");
let writePreview = new WritePreview("#preview");
let writeSubmit = new WriteSubmit("#submit");
let writeReader = new WriteReader();
let writeDarkmode = new DarkMode("#contrast");
let writeMeta = new WriteMeta();
let writeSidebar = new WriteSidebar("#page");
let writeConfigure = new WriteSelect("#configure", settings.configureOptions);
let writeCounterSelect = new WriteSelect("#counter", settings.wordcountOptions);
let writeShare = new WriteModal();
let writeLog = new WriteLog();
// let writeCampaign = new WriteCampaign();


startApp();

//stats
//writeLog("Color mode on load", {props: {type: state.get("darkmode") ? "dark" : "light"}});
//writeLog("Word count on load", {props: {count: state.get("pageWordCount")}});
//writeLog("Language on load", {props: {lang: state.get("language")}});
//writeLog("Language browser", {props: {lang: navigator.language.substring(0,2)}});


function startApp(){
  let signInRequired = (window.location.pathname !== "/" || window.location.href.indexOf("build."));
  window.firebaseApp = signInRequired ? new FirebaseApp(firebaseConfig) : false;
  let openFile = dom.gid("open").addEventListener("change", utils.openFile);

  //todo refactor
  const pathName = window.location.pathname !== "/" ? window.location.pathname.split("/")[1] : false;
  const course = courses.find(course => course.collection === pathName) || false;
  const pageId = course ? window.location.pathname.split("/")[2] : false;
  const exerciseId = course ? window.location.pathname.split("/")[3] : false;

  const afterSignIn = function(){
    if (!pageId && course && !writeBuilder.active) firebaseApp.getAssignments(course.collection, course.name);
    else if (pageId && !exerciseId) firebaseApp.getDataFromDB(course.collection, pageId);
    else if (exerciseId === "replies") firebaseApp.getReplies(course.collection, pageId, exerciseId);
    else if (exerciseId) firebaseApp.getNestedDataFromDB(course.collection, pageId, exerciseId);
    if (writeBuilder.active)  {
      const pageTitle = pageId ? t("Update prompt") : t("Build prompt");
      document.title = pageTitle;
      dom.qs("body").classList.remove("loading");
    }
  }

  if (course || writeBuilder.active) {
    firebaseApp.signIn(afterSignIn);
  }
  else {
    writePage.toggle("loading", false);
    // todo this is just to test feasibility
    setTimeout(function(){writePage.toggle("empty", false);}, 0)
    writePage.focus();
  }

  // don't need to set timers for reader stuff
  if (writeReader.isEnabed) return false

  window.elapsedTimer = new WriteTimer(state.get("pageElapsed"), function(elapsed){
    state.set("pageElapsed", elapsed);
  }, 500);

  write.hydrate();
  writeSheet.focus();
}

document.body.addEventListener("click", () => {
  writeConfigure.hide();
  writeCounterSelect.hide();
  if (!writeReader.enabled) writeSheet.focus();
});

// window.addEventListener('beforeunload', function (e) {
//   const count = state.get("pageWordCount");
//   writeLog("Word Count on leave", {props: {count: count}});
// });

// Disable scrolling.
document.body.ontouchmove = function (e) {
  e.preventDefault();
}
