(this["webpackJsonptasty-road-wfp"]=this["webpackJsonptasty-road-wfp"]||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(4),r=a.n(n),l=a(57),o=a.n(l),i=(a(141),a.p,a(142),a.p+"static/media/tmapLogo.3634d587.jpg"),s=a.p+"static/media/wfpStandardLogo.bedfca1a.svg",j=function(){return Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:i,className:"App-logo",alt:"TMap Logo"}),Object(c.jsx)("span",{className:"tab",children:" "}),"X",Object(c.jsx)("span",{className:"tab",children:" "}),Object(c.jsx)("img",{src:s,className:"App-logo",alt:"WFP Logo"})]})},u=function(e){var t=e.backgroundColor,a=e.children,n=e.flex;return Object(c.jsx)("div",{className:"section-container",style:{backgroundColor:t,flex:n},children:a})},d=function(e){var t=e.backgroundColor,a=e.flex,n=e.left,r=e.right;return Object(c.jsxs)(u,{style:{flexDirection:"row"},backgroundColor:t,flex:a,children:[Object(c.jsx)(u,{children:n}),Object(c.jsx)(u,{children:r})]})},b=a(2),f=a(21),x=a(6),h=function(e){var t=e.data,a=e.index,n=e.createArc,r=e.colors,l=e.format,o=e.onClick;return Object(c.jsxs)("g",{className:"arc",children:[Object(c.jsx)("path",{className:"arc",d:n(t),fill:r(a),onClick:o}),Object(c.jsxs)("text",{transform:"translate(".concat(n.centroid(t),")"),textAnchor:"middle",alignmentBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"bold",onClick:o,children:[t.data.label,": ",l(t.value)]})]},a)},O=300,g=300,v=150,p=function(){var e=Object(n.useState)([{label:"\uc2dd\uc0ac\ub7c9",value:70},{label:"\uac74\uac15",value:30}]),t=Object(f.a)(e,2),a=t[0],r=t[1],l=x.c().value((function(e){return e.value})).sort(null),o=x.a().innerRadius(v/2).outerRadius(v),i=x.d(x.e),s=x.b(".2f"),j=l(a);return Object(c.jsx)("svg",{width:g,height:O,children:Object(c.jsx)("g",{transform:"translate(".concat(v," ").concat(v,")"),children:j.map((function(e,t){return Object(c.jsx)(h,{data:e,index:t,createArc:o,colors:i,format:s,onClick:(n=e,function(){var e=function(e){return e.value<99},t=function(e){var t=e.label,a=e.value;return"\uc2dd\uc0ac\ub7c9"===t?a>40:a>1},c=Object(f.a)(a,2),l=c[0],o=c[1];"\uac74\uac15"===n.data.label&&e(o)&&t(l)?r([Object(b.a)(Object(b.a)({},l),{},{value:l.value-1}),Object(b.a)(Object(b.a)({},o),{},{value:o.value+1})]):"\uc2dd\uc0ac\ub7c9"===n.data.label&&t(o)&&e(l)&&r([Object(b.a)(Object(b.a)({},l),{},{value:l.value+1}),Object(b.a)(Object(b.a)({},o),{},{value:o.value-1})])})},"health-info-arc-".concat(t));var n}))})})},m=function(){return Object(c.jsx)("div",{children:"health info text"})},C=function(){return console.log(p),Object(c.jsx)(d,{backgroundColor:"white",flex:1,left:Object(c.jsx)(p,{}),right:Object(c.jsx)(m,{})})},k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsx)(C,{}),["red","white","red"].map((function(e,t){return Object(c.jsx)(d,{backgroundColor:e,flex:2===t?t:1},"container".concat(t))}))]})]})};var w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(k,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,145)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),r(e),l(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),N()}},[[144,1,2]]]);
//# sourceMappingURL=main.9b511e16.chunk.js.map