"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7042],{5582:function(e,t,n){var o=n(1376),r=n(492),i=n(2010),p=n(4354),a=n(1998),c=n(2810),u=n(2932),s=document.getElementById("popup"),l=document.getElementById("popup-content"),m=document.getElementById("popup-closer"),w=new r.Z({element:s,autoPan:{animation:{duration:250}}});m.onclick=function(){return w.setPosition(void 0),m.blur(),!1};new o.Z({layers:[new i.Z({source:new a.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512})})],overlays:[w],target:"map",view:new p.ZP({center:[0,0],zoom:2})}).on("singleclick",(function(e){var t=e.coordinate,n=(0,u.V7)((0,c.bU)(t));l.innerHTML="<p>You clicked here:</p><code>"+n+"</code>",w.setPosition(t)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(5582)}]);
//# sourceMappingURL=popup.js.map