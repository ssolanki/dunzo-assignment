"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_socket-channel_ts"],{96993(a,b,c){c.d(b,{G:()=>y});var d=c(21461),e=c(5690);class AliveSession extends d.a2{getUrlFromRefreshUrl(){return f(this.refreshUrl)}constructor(a,b,c,d){super(a,()=>this.getUrlFromRefreshUrl(),c,d),this.refreshUrl=b}}async function f(a){let b=await g(a);return b&&b.url&&b.token?h(b.url,b.token):null}async function g(a){let b=await fetch(a,{headers:{Accept:"application/json"}});if(b.ok)return b.json();if(404===b.status)return null;throw Error("fetch error")}async function h(a,b){let c=await fetch(a,{method:"POST",mode:"same-origin",headers:{"Scoped-CSRF-Token":b}});if(c.ok)return c.text();throw Error("fetch error")}var i=c(67825);let j=[],k=i.n4?.hidden||!1,l;i.n4?.addEventListener("visibilitychange",()=>{let a=i.n4?.hidden||!1;void 0!==l&&clearTimeout(l),l=setTimeout(()=>{if(a!==k)for(let b of(k=a,l=void 0,j))b(k)},a?3e4:0)});var m=c(36071),n=c(46263),o=c(9343),p=c(98002),q=c(24465),r=c(92309);function s(a){return null!=a}function t(a,{channel:b,type:c,data:d}){for(let e of a)e.dispatchEvent(new CustomEvent(`socket:${c}`,{bubbles:!1,cancelable:!1,detail:{name:b,data:d}}))}let u=class AliveSessionProxy{subscribe(a){let b=this.subscriptions.add(...a);b.length&&this.worker.port.postMessage({subscribe:b});let c=new Set(b.map(a=>a.name)),e=a.reduce((a,b)=>{let e=b.topic.name;return(0,d.A)(e)&&!c.has(e)&&a.add(e),a},new Set);e.size&&this.worker.port.postMessage({requestPresence:Array.from(e)})}unsubscribeAll(...a){let b=this.subscriptions.drain(...a);b.length&&this.worker.port.postMessage({unsubscribe:b});let c=this.presenceMetadata.removeSubscribers(a);this.sendPresenceMetadataUpdate(c)}updatePresenceMetadata(a){let b=new Set;for(let c of a)this.presenceMetadata.setMetadata(c),b.add(c.channelName);this.sendPresenceMetadataUpdate(b)}sendPresenceMetadataUpdate(a){if(!a.size)return;let b=[];for(let c of a)b.push({channelName:c,metadata:this.presenceMetadata.getChannelMetadata(c)});this.worker.port.postMessage({updatePresenceMetadata:b})}online(){this.worker.port.postMessage({online:!0})}offline(){this.worker.port.postMessage({online:!1})}hangup(){this.worker.port.postMessage({hangup:!0})}receive(a){let{channel:b}=a;if("presence"===a.type){let c=this.notifyPresenceDebouncedByChannel.get(b);c||(c=(0,n.D)((a,c)=>{this.notify(a,c),this.notifyPresenceDebouncedByChannel.delete(b)},100),this.notifyPresenceDebouncedByChannel.set(b,c)),c(this.subscriptions.subscribers(b),a);return}this.notify(this.subscriptions.subscribers(b),a)}constructor(a,b,c,e,f){this.subscriptions=new d.vk,this.presenceMetadata=new d.ah,this.notifyPresenceDebouncedByChannel=new Map,this.notify=f,this.worker=new SharedWorker(a,`github-socket-worker-v2-${e}`),this.worker.port.onmessage=({data:a})=>this.receive(a),this.worker.port.postMessage({connect:{url:b,refreshUrl:c}})}};async function v(){let a=function(){try{return r.eZ.createScriptURL("shared-web-socket-src")}catch(a){if(a instanceof r.c_)return null;throw a}}();if(!a)return;let b=document.head.querySelector("link[rel=shared-web-socket]")?.href??null;if(!b)return;let c=document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-refresh-url")??null;if(!c)return;let f=document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-session-id")??null;if(!f)return;let g=()=>{if("SharedWorker"in window&&"true"!==(0,p.Z)("localStorage").getItem("bypassSharedWorker"))try{return new u(a,b,c,f,t)}catch(d){}return new AliveSession(b,c,!1,t)},h=g(),i=(0,q.g)(a=>h.subscribe(a.flat())),l=(0,q.g)(a=>h.unsubscribeAll(...a)),n=(0,q.g)(a=>h.updatePresenceMetadata(a));return(0,m.N7)(".js-socket-channel[data-channel]",{subscribe(a){var b;let c=(function a(b){let c=(b.getAttribute("data-channel")||"").trim().split(/\s+/);return c.map(d.Zf.parse).filter(s)})(b=a).map(a=>({subscriber:b,topic:a})),f=c.map(a=>a.topic.name).filter(a=>(0,d.A)(a)),g={unsubscribe(){}};if(f.length){let h,l,m=()=>{let b=[];for(let c of(h&&b.push(h),void 0!==l&&b.push({[d.ZE]:l?1:0}),f))n({subscriber:a,channelName:c,metadata:b})};g=(0,e.qC)((0,e.RB)(a,"socket:set-presence-metadata",a=>{let{detail:b}=a;h=b,m()}),function(a){return a(k),j.push(a),new e.w0(()=>{let b=j.indexOf(a);-1!==b&&j.splice(b,1)})}(a=>{l=a,m()}))}return i(c),g},remove:a=>l(a)}),window.addEventListener("online",()=>h.online()),window.addEventListener("offline",()=>h.offline()),window.addEventListener("pagehide",()=>{"hangup"in h&&h.hangup()}),h}async function w(){return await o.x,v()}let x=w();function y(){return x}},24465(a,b,c){function d(){return Promise.resolve()}function e(){return new Promise(window.requestAnimationFrame)}async function f(a,b){let c,d=new Promise(b=>{c=self.setTimeout(b,a)});if(!b)return d;try{await Promise.race([d,g(b)])}catch(e){throw self.clearTimeout(c),e}}function g(a){return new Promise((b,c)=>{let d=Error("aborted");d.name="AbortError",a.aborted?c(d):a.addEventListener("abort",()=>c(d))})}function h(a){let b=[];return function(c){b.push(c),1===b.length&&queueMicrotask(()=>{let c=b.slice(0);b.length=0,a(c)})}}c.d(b,{Dc:()=>f,g:()=>h,gJ:()=>d,rs:()=>e})},5690(a,b,c){c.d(b,{RB:()=>d,qC:()=>e,w0:()=>Subscription});class Subscription{constructor(a){this.closed=!1,this.unsubscribe=()=>{a(),this.closed=!0}}}function d(a,b,c,d={capture:!1}){return a.addEventListener(b,c,d),new Subscription(()=>{a.removeEventListener(b,c,d)})}function e(...a){return new Subscription(()=>{for(let b of a)b.unsubscribe()})}},92309(a,b,c){c.d(b,{c_:()=>SourceRelNotFoundError,eZ:()=>i,h6:()=>j});var d=c(67825);function e(a){return()=>{throw TypeError(`The policy does not implement the function ${a}`)}}let f={createHTML:e("createHTML"),createScript:e("createScript"),createScriptURL:e("createScriptURL")},g=globalThis.trustedTypes??{createPolicy:(a,b)=>({name:a,...f,...b})},h=!1;d.n4?.addEventListener("securitypolicyviolation",a=>{"require-trusted-types-for"!==a.violatedDirective||h||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),h=!0)});class SourceRelNotFoundError extends Error{}let i=g.createPolicy("worker-src-rel",{createScriptURL(a){if(!a.match(/[A-Za-z0-9-]+/))throw Error("Invalid rel");let b=d.n4?.head.querySelector(`link[rel=${a}]`)?.href;if(!b)throw new SourceRelNotFoundError("No href found for rel");return b}}),j=g.createPolicy("jtml-no-op",{createHTML:a=>a})}}])
//# sourceMappingURL=app_assets_modules_github_behaviors_socket-channel_ts-b8be447e7376.js.map