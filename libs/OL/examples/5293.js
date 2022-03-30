"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5293],{7313:function(e,r,n){function t(e,r){var n=e.length-r,t=0;do{for(var a=r;a>0;a--)e[t+r]+=e[t],t++;n-=r}while(n>0)}function a(e,r,n){for(var t=0,a=e.length,o=a/n;a>r;){for(var i=r;i>0;--i)e[t+r]+=e[t],++t;a-=r}for(var s=e.slice(),f=0;f<o;++f)for(var c=0;c<n;++c)e[n*f+c]=s[(n-c-1)*o+f]}function o(e,r,n,o,i,s){if(!r||1===r)return e;for(var f=0;f<i.length;++f){if(i[f]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[f]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var c=i[0]/8,u=2===s?1:i.length,l=0;l<o&&!(l*u*n*c>=e.byteLength);++l){var h=void 0;if(2===r){switch(i[0]){case 8:h=new Uint8Array(e,l*u*n*c,u*n*c);break;case 16:h=new Uint16Array(e,l*u*n*c,u*n*c/2);break;case 32:h=new Uint32Array(e,l*u*n*c,u*n*c/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(i[0]," bits per sample."))}t(h,u)}else 3===r&&a(h=new Uint8Array(e,l*u*n*c,u*n*c),u,c)}return e}function i(e,r,n,t,a,o,i){try{var s=e[o](i),f=s.value}catch(e){return void n(e)}s.done?r(f):Promise.resolve(f).then(t,a)}function s(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}n.d(r,{Z:function(){return f}});var f=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n,t,a,f;return r=e,(n=[{key:"decode",value:(a=regeneratorRuntime.mark((function e(r,n){var t,a,i,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.decodeBlock(n);case 2:if(t=e.sent,1===(a=r.Predictor||1)){e.next=9;break}return i=!r.StripOffsets,s=i?r.TileWidth:r.ImageWidth,f=i?r.TileLength:r.RowsPerStrip||r.ImageLength,e.abrupt("return",o(t,a,s,f,r.BitsPerSample,r.PlanarConfiguration));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,r=arguments;return new Promise((function(n,t){var o=a.apply(e,r);function s(e){i(o,n,t,s,f,"next",e)}function f(e){i(o,n,t,s,f,"throw",e)}s(void 0)}))},function(e,r){return f.apply(this,arguments)})}])&&s(r.prototype,n),t&&s(r,t),Object.defineProperty(r,"prototype",{writable:!1}),e}()},5293:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t=n(7313);function a(e,r){return(a=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=s(e);if(r){var a=s(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return i(this,n)}}function i(e,r){if(r&&("object"===l(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,r,n){return r&&c(e.prototype,r),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),v=4017,p=799,b=3406,d=2276,m=1567,y=3784,w=5793,k=2896;function g(e,r){for(var n=0,t=[],a=16;a>0&&!e[a-1];)--a;t.push({children:[],index:0});for(var o,i=t[0],s=0;s<a;s++){for(var f=0;f<e[s];f++){for((i=t.pop()).children[i.index]=r[n];i.index>0;)i=t.pop();for(i.index++,t.push(i);t.length<=s;)t.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o;n++}s+1<a&&(t.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o)}return t[0].children}function P(e,r,n,t,a,o,i,s,f){var c=n.mcusPerLine,u=n.progressive,v=r,p=r,b=0,d=0;function m(){if(d>0)return d--,b>>d&1;if(255===(b=e[p++])){var r=e[p++];if(r)throw new Error("unexpected marker: ".concat((b<<8|r).toString(16)))}return d=7,b>>>7}function y(e){for(var r,n=e;null!==(r=m());){if("number"==typeof(n=n[r]))return n;if("object"!==l(n))throw new Error("invalid huffman sequence")}return null}function w(e){for(var r=e,n=0;r>0;){var t=m();if(null===t)return;n=n<<1|t,--r}return n}function k(e){var r=w(e);return r>=1<<e-1?r:r+(-1<<e)+1}var g=0;var P,T=0;function C(e,r,n,t,a){var o=n%c,i=(n/c|0)*e.v+t,s=o*e.h+a;r(e,e.blocks[i][s])}function x(e,r,n){var t=n/e.blocksPerLine|0,a=n%e.blocksPerLine;r(e,e.blocks[t][a])}var O,A,E,L,j,I,S=t.length;I=u?0===o?0===s?function(e,r){var n=y(e.huffmanTableDC),t=0===n?0:k(n)<<f;e.pred+=t,r[0]=e.pred}:function(e,r){r[0]|=m()<<f}:0===s?function(e,r){if(g>0)g--;else for(var n=o,t=i;n<=t;){var a=y(e.huffmanTableAC),s=15&a,c=a>>4;if(0===s){if(c<15){g=w(c)+(1<<c)-1;break}n+=16}else r[h[n+=c]]=k(s)*(1<<f),n++}}:function(e,r){for(var n=o,t=i,a=0;n<=t;){var s=h[n],c=r[s]<0?-1:1;switch(T){case 0:var u=y(e.huffmanTableAC),l=15&u;if(a=u>>4,0===l)a<15?(g=w(a)+(1<<a),T=4):(a=16,T=1);else{if(1!==l)throw new Error("invalid ACn encoding");P=k(l),T=a?2:3}continue;case 1:case 2:r[s]?r[s]+=(m()<<f)*c:0==--a&&(T=2===T?3:0);break;case 3:r[s]?r[s]+=(m()<<f)*c:(r[s]=P<<f,T=0);break;case 4:r[s]&&(r[s]+=(m()<<f)*c)}n++}4===T&&0==--g&&(T=0)}:function(e,r){var n=y(e.huffmanTableDC),t=0===n?0:k(n);e.pred+=t,r[0]=e.pred;for(var a=1;a<64;){var o=y(e.huffmanTableAC),i=15&o,s=o>>4;if(0===i){if(s<15)break;a+=16}else r[h[a+=s]]=k(i),a++}};var D,R,U=0;R=1===S?t[0].blocksPerLine*t[0].blocksPerColumn:c*n.mcusPerColumn;for(var q=a||R;U<R;){for(A=0;A<S;A++)t[A].pred=0;if(g=0,1===S)for(O=t[0],j=0;j<q;j++)x(O,I,U),U++;else for(j=0;j<q;j++){for(A=0;A<S;A++){var z=O=t[A],_=z.h,M=z.v;for(E=0;E<M;E++)for(L=0;L<_;L++)C(O,I,U,E,L)}if(++U===R)break}if(d=0,(D=e[p]<<8|e[p+1])<65280)throw new Error("marker was not found");if(!(D>=65488&&D<=65495))break;p+=2}return p-v}function T(e,r){var n=[],t=r.blocksPerLine,a=r.blocksPerColumn,o=t<<3,i=new Int32Array(64),s=new Uint8Array(64);function f(e,n,t){var a,o,i,s,f,c,u,l,h,g,P=r.quantizationTable,T=t;for(g=0;g<64;g++)T[g]=e[g]*P[g];for(g=0;g<8;++g){var C=8*g;0!==T[1+C]||0!==T[2+C]||0!==T[3+C]||0!==T[4+C]||0!==T[5+C]||0!==T[6+C]||0!==T[7+C]?(a=w*T[0+C]+128>>8,o=w*T[4+C]+128>>8,i=T[2+C],s=T[6+C],f=k*(T[1+C]-T[7+C])+128>>8,l=k*(T[1+C]+T[7+C])+128>>8,c=T[3+C]<<4,u=T[5+C]<<4,h=a-o+1>>1,a=a+o+1>>1,o=h,h=i*y+s*m+128>>8,i=i*m-s*y+128>>8,s=h,h=f-u+1>>1,f=f+u+1>>1,u=h,h=l+c+1>>1,c=l-c+1>>1,l=h,h=a-s+1>>1,a=a+s+1>>1,s=h,h=o-i+1>>1,o=o+i+1>>1,i=h,h=f*d+l*b+2048>>12,f=f*b-l*d+2048>>12,l=h,h=c*p+u*v+2048>>12,c=c*v-u*p+2048>>12,u=h,T[0+C]=a+l,T[7+C]=a-l,T[1+C]=o+u,T[6+C]=o-u,T[2+C]=i+c,T[5+C]=i-c,T[3+C]=s+f,T[4+C]=s-f):(h=w*T[0+C]+512>>10,T[0+C]=h,T[1+C]=h,T[2+C]=h,T[3+C]=h,T[4+C]=h,T[5+C]=h,T[6+C]=h,T[7+C]=h)}for(g=0;g<8;++g){var x=g;0!==T[8+x]||0!==T[16+x]||0!==T[24+x]||0!==T[32+x]||0!==T[40+x]||0!==T[48+x]||0!==T[56+x]?(a=w*T[0+x]+2048>>12,o=w*T[32+x]+2048>>12,i=T[16+x],s=T[48+x],f=k*(T[8+x]-T[56+x])+2048>>12,l=k*(T[8+x]+T[56+x])+2048>>12,c=T[24+x],u=T[40+x],h=a-o+1>>1,a=a+o+1>>1,o=h,h=i*y+s*m+2048>>12,i=i*m-s*y+2048>>12,s=h,h=f-u+1>>1,f=f+u+1>>1,u=h,h=l+c+1>>1,c=l-c+1>>1,l=h,h=a-s+1>>1,a=a+s+1>>1,s=h,h=o-i+1>>1,o=o+i+1>>1,i=h,h=f*d+l*b+2048>>12,f=f*b-l*d+2048>>12,l=h,h=c*p+u*v+2048>>12,c=c*v-u*p+2048>>12,u=h,T[0+x]=a+l,T[56+x]=a-l,T[8+x]=o+u,T[48+x]=o-u,T[16+x]=i+c,T[40+x]=i-c,T[24+x]=s+f,T[32+x]=s-f):(h=w*t[g+0]+8192>>14,T[0+x]=h,T[8+x]=h,T[16+x]=h,T[24+x]=h,T[32+x]=h,T[40+x]=h,T[48+x]=h,T[56+x]=h)}for(g=0;g<64;++g){var O=128+(T[g]+8>>4);n[g]=O<0?0:O>255?255:O}}for(var c=0;c<a;c++){for(var u=c<<3,l=0;l<8;l++)n.push(new Uint8Array(o));for(var h=0;h<t;h++){f(r.blocks[c][h],s,i);for(var g=0,P=h<<3,T=0;T<8;T++)for(var C=n[u+T],x=0;x<8;x++)C[P+x]=s[g++]}}return n}var C=function(){function e(){f(this,e),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return u(e,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(e){var r=0;function n(){var n=e[r]<<8|e[r+1];return r+=2,n}function t(e){var r,n,t=0,a=0;for(n in e.components)e.components.hasOwnProperty(n)&&(t<(r=e.components[n]).h&&(t=r.h),a<r.v&&(a=r.v));var o=Math.ceil(e.samplesPerLine/8/t),i=Math.ceil(e.scanLines/8/a);for(n in e.components)if(e.components.hasOwnProperty(n)){r=e.components[n];for(var s=Math.ceil(Math.ceil(e.samplesPerLine/8)*r.h/t),f=Math.ceil(Math.ceil(e.scanLines/8)*r.v/a),c=o*r.h,u=i*r.v,l=[],h=0;h<u;h++){for(var v=[],p=0;p<c;p++)v.push(new Int32Array(64));l.push(v)}r.blocksPerLine=s,r.blocksPerColumn=f,r.blocks=l}e.maxH=t,e.maxV=a,e.mcusPerLine=o,e.mcusPerColumn=i}var a,o,i=n();if(65496!==i)throw new Error("SOI not found");for(i=n();65497!==i;){switch(i){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var s=(a=void 0,o=void 0,a=n(),o=e.subarray(r,r+a-2),r+=o.length,o);65504===i&&74===s[0]&&70===s[1]&&73===s[2]&&70===s[3]&&0===s[4]&&(this.jfif={version:{major:s[5],minor:s[6]},densityUnits:s[7],xDensity:s[8]<<8|s[9],yDensity:s[10]<<8|s[11],thumbWidth:s[12],thumbHeight:s[13],thumbData:s.subarray(14,14+3*s[12]*s[13])}),65518===i&&65===s[0]&&100===s[1]&&111===s[2]&&98===s[3]&&101===s[4]&&0===s[5]&&(this.adobe={version:s[6],flags0:s[7]<<8|s[8],flags1:s[9]<<8|s[10],transformCode:s[11]});break;case 65499:for(var f=n()+r-2;r<f;){var c=e[r++],u=new Int32Array(64);if(c>>4==0)for(var l=0;l<64;l++){u[h[l]]=e[r++]}else{if(c>>4!=1)throw new Error("DQT: invalid table spec");for(var v=0;v<64;v++){u[h[v]]=n()}}this.quantizationTables[15&c]=u}break;case 65472:case 65473:case 65474:n();for(var p={extended:65473===i,progressive:65474===i,precision:e[r++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[]},b=e[r++],d=void 0,m=0;m<b;m++){d=e[r];var y=e[r+1]>>4,w=15&e[r+1],k=e[r+2];p.componentsOrder.push(d),p.components[d]={h:y,v:w,quantizationIdx:k},r+=3}t(p),this.frames.push(p);break;case 65476:for(var T=n(),C=2;C<T;){for(var x=e[r++],O=new Uint8Array(16),A=0,E=0;E<16;E++,r++)O[E]=e[r],A+=O[E];for(var L=new Uint8Array(A),j=0;j<A;j++,r++)L[j]=e[r];C+=17+A,x>>4==0?this.huffmanTablesDC[15&x]=g(O,L):this.huffmanTablesAC[15&x]=g(O,L)}break;case 65501:n(),this.resetInterval=n();break;case 65498:n();for(var I=e[r++],S=[],D=this.frames[0],R=0;R<I;R++){var U=D.components[e[r++]],q=e[r++];U.huffmanTableDC=this.huffmanTablesDC[q>>4],U.huffmanTableAC=this.huffmanTablesAC[15&q],S.push(U)}var z=e[r++],_=e[r++],M=e[r++],B=P(e,r,D,S,this.resetInterval,z,_,M>>4,15&M);r+=B;break;case 65535:255!==e[r]&&r--;break;default:if(255===e[r-3]&&e[r-2]>=192&&e[r-2]<=254){r-=3;break}throw new Error("unknown JPEG marker ".concat(i.toString(16)))}i=n()}}},{key:"getResult",value:function(){var e=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var r=0;r<this.frames.length;r++)for(var n=this.frames[r].components,t=0,a=Object.keys(n);t<a.length;t++){var o=a[t];n[o].quantizationTable=this.quantizationTables[n[o].quantizationIdx],delete n[o].quantizationIdx}for(var i=e[0],s=i.components,f=i.componentsOrder,c=[],u=i.samplesPerLine,l=i.scanLines,h=0;h<f.length;h++){var v=s[f[h]];c.push({lines:T(0,v),scaleX:v.h/i.maxH,scaleY:v.v/i.maxV})}for(var p=new Uint8Array(u*l*c.length),b=0,d=0;d<l;++d)for(var m=0;m<u;++m)for(var y=0;y<c.length;++y){var w=c[y];p[b]=w.lines[0|d*w.scaleY][0|m*w.scaleX],++b}return p}}]),e}(),x=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&a(e,r)}(n,e);var r=o(n);function n(e){var t;return f(this,n),(t=r.call(this)).reader=new C,e.JPEGTables&&t.reader.parse(e.JPEGTables),t}return u(n,[{key:"decodeBlock",value:function(e){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(e)),this.reader.getResult().buffer}}]),n}(t.Z)}}]);
//# sourceMappingURL=5293.js.map