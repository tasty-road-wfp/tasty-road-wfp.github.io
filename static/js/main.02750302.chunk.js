(this["webpackJsonptasty-road-wfp"]=this["webpackJsonptasty-road-wfp"]||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),a=n.n(i),r=n(13),o=n.n(r),s=(n(183),n.p,n(184),n.p+"static/media/tmapLogo2.47e9b5d1.png"),l=n.p+"static/media/wfpStandardLogo.bedfca1a.svg",d=n(16),h=function(){var e="object"===typeof window,t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},n=Object(i.useState)(t),c=Object(d.a)(n,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){if(!e)return!1;var n=function(){r(t())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),a},j=870,u=300,f=function(){var e={height:h().width>j?60:40};return Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:s,alt:"TMap Logo",style:e}),Object(c.jsx)("span",{className:"tab",children:" "}),"\ubbf8\uc2dd\ub85c\ub4dc",Object(c.jsx)("span",{className:"tab",children:" "}),Object(c.jsx)("span",{className:"tab",children:" "}),Object(c.jsx)("span",{className:"tab",children:" "}),Object(c.jsx)("img",{src:l,alt:"WFP Logo",style:e})]})},b=function(e){var t=e.backgroundColor,n=e.color,i=e.children,a=e.flex,r=e.flexDirection;return Object(c.jsx)("div",{className:"section-container",style:{backgroundColor:t,color:n,flex:a,flexDirection:r},children:i})},x=function(e){var t=e.backgroundColor,n=e.color,i=e.flex,a=e.left,r=e.right,o=e.flexLeft,s=e.flexRight,l=h().width>j?"row":"column";return Object(c.jsxs)(b,{backgroundColor:t,flex:i,flexDirection:l,color:n,children:[Object(c.jsx)(b,{flex:o,children:a}),Object(c.jsx)(b,{flex:s,children:r})]})},g=n(18),O=n(10),m=function(e){var t=e.isNotMobile,n=e.data,i=e.index,a=e.createArc,r=e.colors,o=e.format,s=e.onClick,l=(e.onStart,e.onFinish,t?20:10);return Object(c.jsxs)("g",{className:"arc",children:[Object(c.jsx)("path",{className:"arc",d:a(n),fill:r(i),onClick:s,opacity:.75}),Object(c.jsxs)("text",{transform:"translate(".concat(a.centroid(n),")"),textAnchor:"middle",alignmentBaseline:"middle",fill:"white",fontSize:l,fontWeight:"bold",onClick:s,children:[n.data.label,": ",o(n.value)]})]},i)},v=300,w=n.p+"static/media/steak.c2f5d215.png",p=function(){var e=h(),t=e.width/2,n=e.width>j,a=n?{height:t,width:t,pieRadius:t/3,plateRadius:t/2}:{height:v,width:v,pieRadius:100,plateRadius:150},r=Object(i.useState)([{label:"\uc2dd\uc0ac\ub7c9",value:70},{label:"\uac74\uac15",value:30}]),o=Object(d.a)(r,2),s=o[0],l=o[1],u=O.f().value((function(e){return e.value})).sort(null),f=O.a().innerRadius(.4*a.pieRadius).outerRadius(a.pieRadius),b=O.i(O.j),x=O.e(".2f"),p=u(s);return Object(c.jsxs)("svg",{width:a.width,height:a.height,style:{margin:20},children:[Object(c.jsx)("image",{xlinkHref:w,x:"0",y:"0",width:2*a.plateRadius}),Object(c.jsx)("g",{transform:"translate(".concat(a.width/2," ").concat(a.height/2,")"),children:p.map((function(e,t){return Object(c.jsx)(m,{data:e,index:t,isNotMobile:n,createArc:f,colors:b,format:x,onClick:(i=e,function(){var e=function(e){return e.value<99},t=function(e){var t=e.label,n=e.value;return"\uc2dd\uc0ac\ub7c9"===t?n>40:n>1},n=Object(d.a)(s,2),c=n[0],a=n[1];"\uac74\uac15"===i.data.label&&e(a)&&t(c)?l([Object(g.a)(Object(g.a)({},c),{},{value:c.value-1}),Object(g.a)(Object(g.a)({},a),{},{value:a.value+1})]):"\uc2dd\uc0ac\ub7c9"===i.data.label&&t(a)&&e(c)&&l([Object(g.a)(Object(g.a)({},c),{},{value:c.value+1}),Object(g.a)(Object(g.a)({},a),{},{value:a.value-1})])})},"health-info-arc-".concat(t));var i}))})]})},y=function(){var e=h().width>j?30:16,t=1.5*e;return Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:20},children:[Object(c.jsx)("h2",{className:"dohyeon-font-text",style:{marginBottom:0,fontSize:t},children:"\uadf8 \uc18c\uc2dd \ub4e4\uc73c\uc168\uc5b4\uc694?"}),Object(c.jsx)("h2",{className:"dohyeon-font-text",style:{marginTop:0,fontSize:t},children:"\uc18c\uc2dd(\u5c11\u98df)\ud558\uba74\u2026 \uac74\uac15\ud574\uc9c4\ub300\uc694!"}),Object(c.jsx)("p",{className:"jua-font-text",style:{fontSize:e},children:"\ubbf8\uad6d \uc704\uc2a4\ucf58\uc2e0\ub300\ud559\uad50 \ub9e4\ub514\uc2a8 \ucea0\ud37c\uc2a4 \uc5f0\uad6c\ud300\uacfc \ubbf8\uad6d\uad6d\ub9bd\ub178\ud654\uc5f0\uad6c\uc18c \uc5f0\uad6c\ud300\uc740 \uc5f4\ub7c9 \uc12d\ucde8\ub97c \uc81c\ud55c\ud568\uc73c\ub85c\uc368 \ub354 \uac74\uac15\ud558\uac8c \uc7a5\uc218\ub97c \ub204\ub9b4 \uc218 \uc788\ub294 \ubc29\ubc95\uc774\ub77c\uace0 \ubc1c\ud45c\ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc7a6\uc740 \uc678\uc2dd\uc744 \ud558\ub2e4 \ubcf4\uba74 \uba54\ub274\uc758 \uc815\ub7c9 \ub54c\ubb38\uc5d0 \uc758\ub3c4\uce58 \uc54a\uac8c \ub9ce\uc740 \uc74c\uc2dd\uc744 \uba39\uac70\ub098 \uc74c\uc2dd\uc744 \ub0a8\uae30\ub294 \uacbd\uc6b0\uac00 \uc788\ub294\ub370\uc694."}),Object(c.jsx)("p",{className:"jua-font-text",style:{fontSize:e},children:"\uacb0\uad6d \ubcf8\uc778\uc758 \uc2dd\uc0ac\ub7c9\ubcf4\ub2e4 \ub9ce\uc740 \uc74c\uc2dd\uc744 \uad6c\ub9e4\ud558\uba74\uc11c, \uc7a5\uae30\uc801\uc73c\ub85c \uac74\uac15\uae4c\uc9c0 \ud574\uce58\ub294 \uaf34\uc774 \ub418\ub294 \uac81\ub2c8\ub2e4."})]})},N=function(){return Object(c.jsx)(x,{backgroundColor:"white",flex:1,left:Object(c.jsx)(p,{}),right:Object(c.jsx)(y,{}),flexLeft:1,flexRight:1})},k=function(){var e=h().width>j?30:16,t=1.5*e;return Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:20},children:[Object(c.jsx)("h2",{className:"dohyeon-font-text",style:{marginBottom:0,fontSize:t},children:"\uadf8 \uc18c\uc2dd \ub4e4\uc73c\uc168\uc5b4\uc694?"}),Object(c.jsx)("h2",{className:"dohyeon-font-text",style:{marginTop:0,fontSize:t},children:"\uc18c\uc2dd(\u5c11\u98df)\ud558\uba74\u2026 \ub204\uad70\uac00\ub294 \ubc30\uace0\ud514\uc744 \ud574\uacb0\ud560 \uc218 \uc788\ub300\uc694!"}),Object(c.jsx)("p",{className:"jua-font-text",style:{fontSize:e},children:"\uc9c0\uad6c\uc5d0 \ud604\uc7ac \uc804 \uc138\uacc4\uc758 \ubaa8\ub4e0 \uc0ac\ub78c\ub4e4\uc774 \uba39\uc744 \uc218 \uc788\ub294 \ub9cc\ud07c\uc758 \ucda9\ubd84\ud55c \uc74c\uc2dd\uc774 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc544\uc2dc\ub098\uc694? \ud558\uc9c0\ub9cc \uc804\uccb4 \uc74c\uc2dd\uc758 1/3 \uc815\ub3c4\uc758 \uc591\uc740 \uc12d\ucde8\ub418\uc9c0 \ubabb\ud55c \ucc44 \ubc84\ub824\uc9c0\uac70\ub098, \uc6b4\uc1a1/\ubcf4\uad00 \uacfc\uc815\uc5d0\uc11c \uc369\ub294\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),Object(c.jsx)("p",{className:"jua-font-text",style:{fontSize:e},children:"\ucda9\ubd84\ud55c \uc74c\uc2dd\uc774 \uc788\ub294\ub370\ub3c4 \ubd88\uad6c\ud558\uace0 \uc804\uc138\uacc4 \uc57d 7\uc5b5 \uba85\uc758 \uc0ac\ub78c\ub4e4\uc774 \uad76\uc8fc\ub9b0 \ucc44 \ud558\ub8e8\ub97c \ub9c8\ubb34\ub9ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."})]})},S=function(e,t){var n=Object(i.useRef)();return Object(i.useEffect)((function(){return e(O.k(n.current)),function(){}}),t),n},C=13e8,z=8e8,T=975e6,R="starvation-info-chart-d3-x-axis",W="starvation-info-chart-d3-y-axis",L="starvation-info-chart-d3-bar-chart",I=30,F=0,A=30,D=80,P=function(e){var t=e.foodWasteInTons,n=h(),i=n.width/2-100,a=n.width>j,r=a?{height:.75*i,width:i}:{height:225,width:u},o=S((function(e){!function(e){var n=[{name:"\uc74c\uc2dd\ubb3c \uc4f0\ub808\uae30 \uc591",value:t,color:"orange"},{name:"\uad76\uc8fc\ub9b0 \uc0ac\ub78c\ub4e4",value:t>T?z-(C-t)/.40625:0,color:"gray"},{name:"\ub0a8\ub294 \uc2dd\ub7c9",value:t>T?0:T-t,color:"green"}],c=O.g().domain(n.map((function(e){return e.name}))).range([D,r.width-F]).padding(.2),i=O.h().domain([0,14e8]).nice().range([r.height-A,I]),o=a?O.c(i):O.c(i).ticks(7,"f");e.select("#".concat(R)).call((function(e){return e.attr("transform","translate(0, ".concat(r.height-A,")")).call(O.b(c).tickSizeOuter(0))})),e.select("#".concat(W)).call((function(e){return e.attr("transform","translate(".concat(D,", 0)")).call(o).call((function(e){return e.select(".domain").remove()}))})),e.select("#".concat(L)).selectAll(".bar").data(n).join("rect").attr("class","bar").attr("fill",(function(e){return e.color})).attr("x",(function(e){return c(e.name)})).attr("y",(function(e){return i(e.value)})).attr("height",(function(e){return i(0)-i(e.value)})).attr("width",c.bandwidth())}(e)}),[t,n.width]);return Object(c.jsx)("div",{children:Object(c.jsxs)("svg",{ref:o,width:r.width,height:r.height,children:[Object(c.jsx)("g",{id:R}),Object(c.jsx)("g",{id:W}),Object(c.jsx)("g",{id:L})]})})},B=n(222),E=n(94),M=Object(E.a)({root:{color:"white",colorPrimary:"white"}}),H=[{value:0,label:"0T"},{value:C,label:"1.3T"}],J=function(e){var t=e.foodWasteInTons,n=e.setFoodWasteInTons,i=M();return Object(c.jsx)(B.a,{className:i.root,value:t,min:0,step:1,max:C,marks:H,onChange:function(e,t){n(t)}})},q=function(){var e=Object(i.useState)(13e8),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(P,{foodWasteInTons:n}),Object(c.jsx)(J,{foodWasteInTons:n,setFoodWasteInTons:a})]})},G=function(){return Object(c.jsx)(x,{backgroundColor:"#ea002c",color:"white",flex:1,left:Object(c.jsx)(k,{}),right:Object(c.jsx)(q,{})})},K=n(97),Q=n.n(K),U=n(210),V=Object(U.a)({image:{maxWidth:"800px",width:"80vw"}}),X=function(e){var t=e.img,n=V(),i=.8*h().width,a=i>800?800:i;return Object(c.jsx)("div",{style:{height:a},children:Object(c.jsx)("img",{className:n.image,src:t,alt:"A card news slide"})})},Y=[n.p+"static/media/cardNews1.73074dc8.png",n.p+"static/media/cardNews2.79b4f128.png",n.p+"static/media/cardNews3.3745e11d.png",n.p+"static/media/cardNews4.6e0a77ac.png",n.p+"static/media/cardNews5.1ec577ce.png"],Z=function(e){var t=e.enabled,n=Y.map((function(e,t){return Object(c.jsx)(X,{img:e},"campaign-info-slide-".concat(t))}));return t?Object(c.jsx)(Q.a,{autoPlay:!1,children:n}):Object(c.jsx)(b,{flex:1,flexDirection:"column",children:n})},$=function(){return Object(c.jsx)(b,{flex:1,children:Object(c.jsx)(Z,{enabled:!0})})},_=function(){return Object(c.jsx)("div",{children:"service info text"})},ee=(n.p,n.p+"static/media/wfp-logo-emblem-white.e404a606.svg"),te="service-info-viz-d3-clip-path-id",ne=function(){var e=h(),t=e.width/2-100,n=e.width>j?{height:.75*t,width:t}:{height:225,width:u},i=n.width/6,a=.75*i,r={x:i,y:n.height/2},o={x:r.x-a,y:r.y-a,height:2*a,width:2*a*.65},s=S((function(e){var t=O.d().on("drag",(function(t){var n=2*a,c=2*a*.65,i=e.select("#".concat(te," rect")),r=0,o=Number.parseInt(i.attr("width"),10)+t.dx;r=o>n?n:o<c?c:o,i.attr("width",r)}));e.select("#food").call(t)}),[e.width]);return Object(c.jsx)("div",{children:Object(c.jsxs)("svg",{ref:s,width:n.width,height:n.height,children:[Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:te,children:Object(c.jsx)("rect",{x:o.x,y:o.y,height:o.height,width:o.width})})}),Object(c.jsx)("circle",{id:"plate",cx:r.x,cy:r.y,r:i,strokeWidth:"0",fill:"white"}),Object(c.jsx)("circle",{id:"food",cx:r.x,cy:r.y,r:a,strokeWidth:"0",fill:"orange",clipPath:"url(#".concat(te,")")}),Object(c.jsx)("image",{xlinkHref:ee,x:"200",y:n.height/2,width:"200"})]})})},ce=function(){return Object(c.jsx)(x,{backgroundColor:"#ea002c",color:"white",flex:1,left:Object(c.jsx)(_,{}),right:Object(c.jsx)(ne,{})})},ie=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{}),Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsx)(N,{}),Object(c.jsx)(G,{}),Object(c.jsx)($,{}),Object(c.jsx)(ce,{})]})]})};var ae=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(ie,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ae,{})}),document.getElementById("root")),re()}},[[203,1,2]]]);
//# sourceMappingURL=main.02750302.chunk.js.map