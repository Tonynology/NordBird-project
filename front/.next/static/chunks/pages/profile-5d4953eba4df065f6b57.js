_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"W+IF":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return ce}));var r=n("q1tI"),i=n.n(r),o=n("vDqi"),u=n.n(o),a=Object.prototype.hasOwnProperty;var c=new WeakMap,f=0;var s=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):c.has(e[n])?r=c.get(e[n]):(r=f,c.set(e[n],f++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),l=!0,d={isOnline:function(){return l},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){l=!0,e()}),!1),window.addEventListener("offline",(function(){return l=!1}),!1))}},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},h=new s;var p="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),y=v({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(p?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(p?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(a.call(t,r)&&++i&&!a.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},d),g="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),b=g?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},m=g?r.useEffect:r.useLayoutEffect,w=Object(r.createContext)({});w.displayName="SWRConfigContext";var O=w,j=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},C={},k={},R={},S={},x={},V={},T={},M=function(){var e=0;return function(){return++e}}();if(!g){var I=function(e){if(y.isDocumentVisible()&&y.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof y.registerOnFocus&&y.registerOnFocus((function(){return I(R)})),"function"===typeof y.registerOnReconnect&&y.registerOnReconnect((function(){return I(S)}))}var P=function(e,t){void 0===t&&(t=!0);var n=h.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=x[r];if(r&&u){for(var a=h.get(r),c=h.get(i),f=h.get(o),s=[],l=0;l<u.length;++l)s.push(u[l](t,a,c,f,l>0));return Promise.all(s).then((function(){return h.get(r)}))}return Promise.resolve(h.get(r))},D=function(e,t,n,r){var i=x[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},_=function(e,t,n){return void 0===n&&(n=!0),j(void 0,void 0,void 0,(function(){var r,i,o,u,a,c,f,s,l,d,v,p,y;return E(this,(function(g){switch(g.label){case 0:if(r=h.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,P(e,n)];if(V[i]=M()-1,T[i]=0,u=V[i],a=k[i],s=!1,t&&"function"===typeof t)try{t=t(h.get(i))}catch(b){t=void 0,f=b}if(!t||"function"!==typeof t.then)return[3,5];s=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return c=g.sent(),[3,4];case 3:return l=g.sent(),f=l,[3,4];case 4:return[3,6];case 5:c=t,g.label=6;case 6:if((d=function(){if(u!==V[i]||a!==k[i]){if(f)throw f;return!0}})())return[2,c];if("undefined"!==typeof c&&h.set(i,c),h.set(o,f),T[i]=M()-1,!s&&d())return[2,c];if(v=x[i]){for(p=[],y=0;y<v.length;++y)p.push(v[y](!!n,c,f,void 0,y>0));return[2,Promise.all(p).then((function(){if(f)throw f;return h.get(i)}))]}if(f)throw f;return[2,c]}}))}))};Object.defineProperty(O.Provider,"default",{value:y});O.Provider;var z=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},y,Object(r.useContext)(O),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,a=h.serializeKey(i),c=a[0],f=a[1],s=a[2],l=a[3],d=Object(r.useRef)(o);m((function(){d.current=o}));var v=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},p=function(){var e=h.get(c);return"undefined"===typeof e?o.initialData:e},w=function(){return!!h.get(l)||c&&v()},I=p(),P=h.get(s),z=w(),L=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),F=Object(r.useRef)({data:I,error:P,isValidating:z});Object(r.useDebugValue)(F.current.data);var K,N,W=Object(r.useState)({})[1],A=Object(r.useCallback)((function(e){var t=!1;for(var n in e)F.current[n]!==e[n]&&(F.current[n]=e[n],L.current[n]&&(t=!0));if(t){if(B.current||!q.current)return;W({})}}),[]),B=Object(r.useRef)(!1),H=Object(r.useRef)(c),q=Object(r.useRef)(!1),X=Object(r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];B.current||q.current&&c===H.current&&(t=d.current)[e].apply(t,n)}),[c]),G=Object(r.useCallback)((function(e,t){return _(H.current,e,t)}),[]),J=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Y=Object(r.useCallback)((function(t){return void 0===t&&(t={}),j(e,void 0,void 0,(function(){var e,n,r,i,a,v,p,y,g,b;return E(this,(function(m){switch(m.label){case 0:if(!c||!u)return[2,!1];if(B.current)return[2,!1];if(d.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,i=void 0!==r&&r,a=!0,v="undefined"!==typeof C[c]&&i,m.label=1;case 1:return m.trys.push([1,6,,7]),A({isValidating:!0}),h.set(l,!0),v||D(c,F.current.data,F.current.error,!0),p=void 0,y=void 0,v?(y=k[c],[4,C[c]]):[3,3];case 2:return p=m.sent(),[3,5];case 3:return o.loadingTimeout&&!h.get(c)&&setTimeout((function(){a&&X("onLoadingSlow",c,o)}),o.loadingTimeout),C[c]=null!==f?u.apply(void 0,f):u(c),k[c]=y=M(),[4,C[c]];case 4:p=m.sent(),setTimeout((function(){delete C[c],delete k[c]}),o.dedupingInterval),X("onSuccess",p,c,o),m.label=5;case 5:return k[c]>y?[2,!1]:V[c]&&(y<=V[c]||y<=T[c]||0===T[c])?(A({isValidating:!1}),[2,!1]):(h.set(s,void 0),h.set(l,!1),g={isValidating:!1},"undefined"!==typeof F.current.error&&(g.error=void 0),o.compare(F.current.data,p)||(g.data=p),o.compare(h.get(c),p)||h.set(c,p),A(g),v||D(c,p,g.error,!1),[3,7]);case 6:return b=m.sent(),delete C[c],delete k[c],d.current.isPaused()?(A({isValidating:!1}),[2,!1]):(h.set(s,b),F.current.error!==b&&(A({isValidating:!1,error:b}),v||D(c,void 0,b,!1)),X("onError",b,c,o),o.shouldRetryOnError&&X("onErrorRetry",b,c,o,Y,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(m((function(){if(c){B.current=!1;var e=q.current;q.current=!0;var t=F.current.data,n=p();H.current=c,o.compare(t,n)||A({data:n});var r=function(){return Y({dedupe:!0})};(e||v())&&("undefined"===typeof n||g?r():b(r));var i=!1,u=J(R,(function(){!i&&d.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),d.current.focusThrottleInterval))})),a=J(S,(function(){d.current.revalidateOnReconnect&&r()})),f=J(x,(function(e,t,n,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||o.compare(F.current.data,t)||(a.data=t,c=!0),F.current.error!==n&&(a.error=n,c=!0),"undefined"!==typeof i&&F.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&A(a),!!e&&(u?r():Y())}));return function(){A=function(){return null},B.current=!0,u(),a(),f()}}}),[c,Y]),m((function(){var t=null,n=function(){return j(e,void 0,void 0,(function(){return E(this,(function(e){switch(e.label){case 0:return F.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,Y({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&t&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,Y]),o.suspense){if(K=h.get(c),N=h.get(s),"undefined"===typeof K&&(K=I),"undefined"===typeof N&&(N=P),"undefined"===typeof K&&"undefined"===typeof N){if(C[c]||Y(),C[c]&&"function"===typeof C[c].then)throw C[c];K=C[c]}if("undefined"===typeof K&&N)throw N}var Q=Object(r.useMemo)((function(){var e={revalidate:Y,mutate:G};return Object.defineProperties(e,{error:{get:function(){return L.current.error=!0,o.suspense?N:H.current===c?F.current.error:P},enumerable:!0},data:{get:function(){return L.current.data=!0,o.suspense?K:H.current===c?F.current.data:I},enumerable:!0},isValidating:{get:function(){return L.current.isValidating=!0,!!c&&F.current.isValidating},enumerable:!0}}),e}),[Y,I,P,G,c,o.suspense,N,K]);return Q};var L=z,F=n("1zst"),K=n("8Kt/"),N=n.n(K),W=n("ODXe"),A=n("Vl3Y"),B=n("5rEg"),H=n("LAVF"),q=n("/MKj"),X=n("3zrx"),G=i.a.createElement,J=function e(){var t=Object(r.useMemo)((function(){return{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"}}),[]),n=Object(q.c)((function(e){return e.user})).me,i=Object(X.a)((null===n||void 0===n?void 0:n.nickname)||""),o=Object(W.a)(i,2),u=o[0],a=o[1],c=Object(q.b)(),f=Object(r.useCallback)((function(){c({type:H.c,data:e})}),[u]);return G(A.a,{style:t},G(B.a.Search,{value:u,onChange:a,addonBefore:"Nickname",enterButton:"Edit",onSearch:f}))},Y=n("VXEj"),Q=n("2/Rp"),U=n("bx4M"),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},$=n("6VBw"),ee=function(e,t){return r.createElement($.a,Object.assign({},e,{ref:t,icon:Z}))};ee.displayName="StopOutlined";var te=r.forwardRef(ee),ne=i.a.createElement,re=function(e){var t=e.header,n=e.data,r=e.onClickMore,i=e.loading,o=Object(q.b)();return ne(Y.b,{style:{marginBottom:20},grid:{gutter:4,xs:2,md:3},size:"small",header:ne("div",null,t),loadMore:ne("div",{style:{textAlign:"center",margin:"10px 0"}},ne(Q.a,{onClick:r,loading:i},"More")),bordered:!0,dataSource:n,renderItem:function(e){return ne(Y.b.Item,{style:{marginTop:20}},ne(U.a,{actions:[ne(te,{key:"stop",onClick:(n=e.id,function(){"Followings"===t&&o({type:H.H,data:n}),o({type:H.A,data:n})})})]},ne(U.a.Meta,{description:e.nickname})));var n}})},ie=n("nOHt"),oe=n.n(ie),ue=i.a.createElement,ae=function(e){return u.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))},ce=!0;t.default=function(){Object(q.b)();var e=Object(q.c)((function(e){return e.user})).me,t=Object(r.useState)(3),n=t[0],i=t[1],o=Object(r.useState)(3),u=o[0],a=o[1],c=L("http://localhost:3000/user/followers?limit=".concat(n),ae),f=c.data,s=c.error,l=L("http://localhost:3000/user/followings?limit=".concat(u),ae),d=l.data,v=l.error;Object(r.useEffect)((function(){e&&e.id||oe.a.push("/")}),[e&&e.id]);var h=Object(r.useCallback)((function(){a((function(e){return e+3}))}),[]),p=Object(r.useCallback)((function(){i((function(e){return e+3}))}),[]);return e?s||v?(console.error(v||v),"During loading, following / follower error is occured"):ue("div",null,ue(N.a,null,ue("title",null,"My Profile | NodeBird")),ue(F.a,null,ue(J,null),ue(re,{header:"following list",data:d,onClickMore:h,loading:!d&&!v}),ue(re,{header:"follower list",data:f,onClickMore:p,loading:!f&&!s}))):"Loading My Information..."}},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",0,1,2,3,5,4,6,8,11]]]);