"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1050],{1138:function(t,n,e){var o=e(1376),a=e(9847),i=e(2010),r=e(4354),c=e(3193),u=e(2810),m=(0,u.mi)([-.12755,51.507222]),f=(0,u.mi)([37.6178,55.7517]),s=(0,u.mi)([28.9744,41.0128]),l=(0,u.mi)([12.5,41.9]),h=(0,u.mi)([7.4458,46.95]),g=new r.ZP({center:s,zoom:6});new o.Z({target:"map",layers:[new i.Z({preload:4,source:new a.Z})],view:g});function d(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375}function v(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}function p(t,n){document.getElementById(t).addEventListener("click",n)}function w(t,n){var e=2e3,o=g.getZoom(),a=2,i=!1;function r(t){--a,i||0!==a&&t||(i=!0,n(t))}g.animate({center:t,duration:e},r),g.animate({zoom:o-1,duration:1e3},{zoom:o,duration:1e3},r)}p("rotate-left",(function(){g.animate({rotation:g.getRotation()+Math.PI/2})})),p("rotate-right",(function(){g.animate({rotation:g.getRotation()-Math.PI/2})})),p("rotate-around-rome",(function(){var t=g.getRotation();g.animate({rotation:t+Math.PI,anchor:l,easing:c.YQ},{rotation:t+2*Math.PI,anchor:l,easing:c.Vv})})),p("pan-to-london",(function(){g.animate({center:m,duration:2e3})})),p("elastic-to-moscow",(function(){g.animate({center:f,duration:2e3,easing:v})})),p("bounce-to-istanbul",(function(){g.animate({center:s,duration:2e3,easing:d})})),p("spin-to-rome",(function(){var t=g.getCenter();g.animate({center:[t[0]+(l[0]-t[0])/2,t[1]+(l[1]-t[1])/2],rotation:Math.PI,easing:c.YQ},{center:l,rotation:2*Math.PI,easing:c.Vv})})),p("fly-to-bern",(function(){w(h,(function(){}))})),p("tour",(function(){var t=[m,h,l,f,s],n=-1;!function e(o){o?++n<t.length?setTimeout((function(){w(t[n],e)}),0===n?0:750):alert("Tour complete"):alert("Tour cancelled")}(!0)}))}},function(t){var n=function(n){return t(t.s=n)};n(9877),n(1138)}]);
//# sourceMappingURL=animation.js.map