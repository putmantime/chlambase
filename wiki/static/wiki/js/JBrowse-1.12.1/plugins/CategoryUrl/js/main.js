//>>built
require({cache:{"JBrowse/Plugin":function(){define("JBrowse/Plugin",["dojo/_base/declare","JBrowse/Component"],function(i,k){return i(k,{constructor:function(c){this.name=c.name;this.cssLoaded=c.cssLoaded;this._finalizeConfig(c.config)},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})}}});
define("CategoryUrl/main",["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","JBrowse/Plugin","JBrowse/Util"],function(i,k,c,l,m){return i(l,{constructor:function(){var j=this;this.browser.oldShowTracks=this.browser.showTracks;this.browser.showTracks=function(d){var f=0,g=j.browser.config.tracks,a=j.getUrlParam("cat");if(null!=a){for(var h=a.split("/"),a=0;a<h.length;a++)h[a]=h[a].replace(/^[ ]+|[ ]+$/g,"");f=h.length}if(f){for(a=0;a<g.length;a++){var e=[],b=0;if("undefined"!==typeof g[a].metadata&&
"undefined"!==typeof g[a].metadata.category)e=g[a].metadata.category.split("/"),b=e.length;if("undefined"!==typeof g[a].category)e=g[a].category.split("/"),b=e.length;if(f<=b){for(b=0;b<e.length;b++)e[b]=e[b].replace(/^[ ]+|[ ]+$/g,"");for(var c=!0,b=0;b<f;b++)h[b]!=e[b]&&(c=!1);!0==c&&d.push(g[a].label)}}d=m.uniq(d)}j.browser.oldShowTracks(d)}},getUrlParam:function(c,d){if(!d)d=window.location.href;var c=c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),f=RegExp("[\\?&]"+c+"=([^&#]*)").exec(d);return null==
f?null:decodeURIComponent(f[1])}})});