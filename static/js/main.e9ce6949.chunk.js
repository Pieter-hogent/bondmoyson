(this.webpackJsonpbondmoyson=this.webpackJsonpbondmoyson||[]).push([[0],{146:function(r,t,e){},147:function(r,t,e){},178:function(r,t){},180:function(r,t){},190:function(r,t){},192:function(r,t){},219:function(r,t){},220:function(r,t){},225:function(r,t){},227:function(r,t){},234:function(r,t){},253:function(r,t){},271:function(r,t,e){"use strict";e.r(t);var a=e(0),s=e(9),c=e.n(s),n=e(139),o=e.n(n),i=(e(146),e(70)),p=e(71),m=(e(147),e(33)),l=e(17);function f(r){var t=r.handleChange,e=r.person;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("input",{className:"p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md",name:"name",value:e.name,onChange:t,placeholder:"naam"})}),Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("input",{className:"p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md",name:"age",value:e.age,onChange:t,type:"number"})}),Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsx)("input",{className:"p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md ",name:"startAge",value:0===Number(e.startAge)?"":e.startAge,onChange:t,type:"number",placeholder:e.age})})]})}function d(r){var t=r.price,e=r.active,s=r.toggle,c=e&&0!==t?" bg-red-200":" bg-gray-50 ",n=0===t?"opacity-40":"";return Object(a.jsx)("td",{className:c+" px-6 py-4 whitespace-nowrap cursor-pointer transition-colors",children:Object(a.jsxs)("span",{className:n+" inline-grid grid-rows-3 gap-y-2 p-2 m-2",onClick:s,children:[Object(a.jsxs)("span",{className:"font-mono",children:[" \u20ac ",t.toFixed(2)]}),Object(a.jsxs)("span",{className:"font-mono",children:[" \u20ac ",(t/4).toFixed(2)]}),Object(a.jsxs)("span",{className:"font-mono",children:[" \u20ac ",(t/12).toFixed(2)]})]})})}var u=e(140),j={bijdrage:[{start:999,from:0,to:999,price:91.8}],zorgkas:[{start:999,from:0,to:25,price:0},{start:999,from:26,to:999,price:54}],kliniplan:[{start:60,from:0,to:25,price:50.16},{start:60,from:26,to:59,price:125.52},{start:60,from:60,to:70,price:238.68},{start:60,from:70,to:999,price:352.8},{start:66,from:60,to:70,price:286.68},{start:66,from:70,to:999,price:423.36},{from:66,to:70,price:323.28},{from:70,to:999,price:478.32}],kliniplanplus:[{start:60,from:0,to:19,price:60.96},{start:60,from:20,to:24,price:85.92},{start:60,from:25,to:34,price:201.48},{start:60,from:35,to:49,price:240.12},{start:60,from:50,to:64,price:434.28},{start:60,from:65,to:999,price:805.08},{start:66,from:60,to:64,price:434.28},{start:66,from:65,to:999,price:805.08},{from:66,to:999,price:1095.96}],dentaplan:[{start:45,from:0,to:3,price:0},{start:45,from:4,to:6,price:19.68},{start:45,from:7,to:17,price:62.28},{start:45,from:18,to:29,price:97.56},{start:45,from:30,to:44,price:132.36},{start:45,from:45,to:49,price:168.36},{start:45,from:50,to:59,price:186.48},{start:45,from:60,to:999,price:199.56},{start:49,from:45,to:49,price:247.92},{start:49,from:50,to:59,price:277.68},{start:49,from:60,to:999,price:297.36},{start:59,from:50,to:59,price:280.08},{start:59,from:60,to:999,price:299.76},{from:60,to:999,price:339.96}],viviplan:[{start:45,from:0,to:3,price:0},{start:45,from:4,price:100.32},{start:45,from:5,price:102.96},{start:45,from:6,price:105.6},{start:45,from:7,price:108.24},{start:45,from:8,price:111.12},{start:45,from:9,price:113.76},{start:45,from:10,price:116.76},{start:45,from:11,price:120},{start:45,from:12,price:123},{start:45,from:13,price:126.24},{start:45,from:14,price:129.48},{start:45,from:15,price:132.72},{start:45,from:16,price:136.32},{start:45,from:17,price:139.8},{start:45,from:18,price:143.4},{start:45,from:19,price:147},{start:45,from:20,price:150.96},{start:45,from:21,price:154.92},{start:45,from:22,price:159},{start:45,from:23,price:163.08},{start:45,from:24,price:167.4},{start:45,from:25,price:171.84},{start:45,from:26,price:176.16},{start:45,from:27,price:180.72},{start:45,from:28,price:185.52},{start:45,from:29,price:190.2},{start:45,from:30,price:195.12},{start:45,from:31,price:200.4},{start:45,from:32,price:205.68},{start:45,from:33,price:210.96},{start:45,from:34,price:216.36},{start:45,from:35,price:222.12},{start:45,from:36,price:227.76},{start:45,from:37,price:233.88},{start:45,from:38,price:240.12},{start:45,from:39,price:246.24},{start:45,from:40,price:252.84},{start:45,from:41,price:259.44},{start:45,from:42,price:266.16},{start:45,from:43,price:273.36},{start:45,from:44,price:280.44},{start:45,from:45,price:287.88},{start:45,from:46,price:295.44},{start:45,from:47,price:303.24},{start:45,from:48,price:311.04},{start:45,from:49,price:319.32},{start:45,from:50,price:327.6},{start:45,from:51,price:336.36},{start:45,from:52,price:345.12},{start:45,from:53,price:354.24},{start:45,from:54,price:363.6},{start:45,from:55,price:373.2},{start:45,from:56,price:382.92},{start:45,from:57,price:393},{start:45,from:58,price:403.32},{start:45,from:59,price:413.76},{start:45,from:60,price:424.8},{start:45,from:61,price:435.96},{start:45,from:62,price:447.48},{start:45,from:63,price:459.36},{start:45,from:64,price:471.36},{start:45,from:65,price:483.84},{start:45,from:66,price:496.56},{start:45,from:67,price:509.64},{start:45,from:68,price:523.08},{start:45,from:69,price:536.88},{start:45,from:70,to:999,price:564.12},{start:50,from:45,price:334.92},{start:50,from:46,price:342.48},{start:50,from:47,price:350.4},{start:50,from:48,price:358.56},{start:50,from:49,price:366.6},{start:50,from:50,price:375.12},{start:50,from:51,price:383.64},{start:50,from:52,price:392.64},{start:50,from:53,price:401.52},{start:50,from:54,price:410.88},{start:50,from:55,price:420.24},{start:50,from:56,price:429.84},{start:50,from:57,price:439.8},{start:50,from:58,price:449.76},{start:50,from:59,price:460.08},{start:50,from:60,price:470.76},{start:50,from:61,price:481.56},{start:50,from:62,price:492.72},{start:50,from:63,price:503.88},{start:50,from:64,price:515.52},{start:50,from:65,price:527.28},{start:50,from:66,price:539.4},{start:50,from:67,price:551.64},{start:50,from:68,price:564.36},{start:50,from:69,price:577.44},{start:50,from:70,to:999,price:592.32},{start:70,from:50,price:442.2},{start:70,from:51,price:449.64},{start:70,from:52,price:457.44},{start:70,from:53,price:465},{start:70,from:54,price:473.04},{start:70,from:55,price:480.96},{start:70,from:56,price:489.24},{start:70,from:57,price:497.52},{start:70,from:58,price:506.04},{start:70,from:59,price:514.44},{start:70,from:60,price:523.44},{start:70,from:61,price:532.32},{start:70,from:62,price:541.56},{start:70,from:63,price:550.68},{start:70,from:64,price:560.16},{start:70,from:65,price:569.52},{start:70,from:66,price:579.36},{start:70,from:67,price:589.32},{start:70,from:68,price:599.28},{start:70,from:69,price:609.6},{start:70,from:70,to:999,price:621.72},{from:70,to:999,price:653.16}]},b=function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!t)return 0;if(e||(e=t),!j[r])return console.error("I do not have prices for ".concat(r," (got: ").concat(j.keys(),")")),0;var a,s=Object(u.a)(j[r]);try{for(s.s();!(a=s.n()).done;){var c=a.value;if((!c.start||Number(e)<=Number(c.start))&&(!c.to&&Number(t)===Number(c.from)||Number(t)>=Number(c.from)&&Number(t)<=Number(c.to)))return c.price}}catch(n){s.e(n)}finally{s.f()}return console.error("Could not find a price for age ".concat(t," in ").concat(r," (with start age ").concat(e,")")),0},x=function(r){var t=0;return Object.keys(r.insurances).map((function(e,a){r.insurances[e]&&(t+=b(e,r.age,r.startAge))})),t};function g(r){var t=r.person,e=r.onChange,s=function(r){return function(a){var s=Object(l.a)(Object(l.a)({},t),{},{insurances:Object(l.a)(Object(l.a)({},t.insurances),{},Object(m.a)({},r,!t.insurances[r]))});e(s)}};return Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{handleChange:function(r){var a=r.target,s=a.name,c=a.value,n="number"===a.type&&c?Number(c):c;e(Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},s,n)))},person:t}),Object.keys(t.insurances).map((function(r,e){var c=b(r,t.age,t.startAge);return Object(a.jsx)(d,{price:c,active:t.insurances[r],toggle:s(r)},e)})),Object(a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(a.jsxs)("span",{className:(0===x(t)?"opacity-40":"")+" inline-grid grid-rows-3 gap-y-2",children:[Object(a.jsxs)("span",{className:"font-mono",children:[" ","\u20ac ",x(t).toFixed(2)," / j"]}),Object(a.jsxs)("span",{className:"font-mono",children:[" ","\u20ac ",(x(t)/4).toFixed(2)," / 3m"]}),Object(a.jsxs)("span",{className:"font-mono",children:[" ","\u20ac ",(x(t)/12).toFixed(2)," / m"]})]})})]})}var h=e(39),O=e.n(h),v=O.a.ExcelFile,w=O.a.ExcelFile.ExcelSheet,N=O.a.ExcelFile.ExcelColumn;function k(r){var t=r.data,e=r.filename;return Object(a.jsx)(v,{filename:e,element:Object(a.jsx)("button",{className:"p-3",children:Object(a.jsx)("img",{src:"/bondmoyson/excel_download.png",alt:"",width:"48",height:"48"})}),children:Object(a.jsxs)(w,{data:t,name:"bond moyson",children:[Object(a.jsx)(N,{label:"naam",value:"name"}),Object(a.jsx)(N,{label:"leeftijd",value:"age"}),Object(a.jsx)(N,{label:"bijdrage",value:"bijdrage"}),Object(a.jsx)(N,{label:"zorgkas",value:"zorgkas"}),Object(a.jsx)(N,{label:"kliniplan",value:"kliniplan"}),Object(a.jsx)(N,{label:"kliniplanplus",value:"kliniplanplus"}),Object(a.jsx)(N,{label:"dentaplan",value:"dentaplan"}),Object(a.jsx)(N,{label:"viviplan",value:"viviplan"}),Object(a.jsx)(N,{label:"totaal",value:"totaal"})]})})}var y=["bijdrage","zorgkas","kliniplan","kliniplanplus","dentaplan","viviplan"],F={name:"",age:0,startAge:0,insurances:{}};var C=function(){var r=Object(s.useState)([]),t=Object(p.a)(r,2),e=t[0],c=t[1],n=Object(s.useState)(!0),o=Object(p.a)(n,2),m=o[0];o[1],Object(s.useEffect)((function(){y.map((function(r){return F.insurances[r]=!1})),F.insurances.zorgkas=!0,F.insurances.bijdrage=!0,c([F,F,F,F])}),[]);var l=function(r){return function(t){var a=e.map((function(e,a){return a===r?(e.insurances.kliniplan!==t.insurances.kliniplan&&t.insurances.kliniplan&&(t.insurances.kliniplanplus=!1),e.insurances.kliniplanplus!==t.insurances.kliniplanplus&&t.insurances.kliniplanplus&&(t.insurances.kliniplan=!1),e.age!==t.age&&(t.insurances.bijdrage=t.age>=25),t):e}));c(a)}},f=function(){return e.reduce((function(r,t){return r+x(t)}),0)},d=function(r){return"zorgkas"===r||"bijdrage"===r?null:"kliniplanplus"===r?"/bondmoyson/icon-kliniplan.svg":"/bondmoyson/icon-"+r+".svg"};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:"flex flex-row flex-none",children:[Object(a.jsxs)("span",{className:"inline-grid grid-cols-2 gap-x-3 p-5 self-start ",children:[Object(a.jsx)("button",{type:"button",onClick:function(){c([].concat(Object(i.a)(e),[F]))},className:"inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:Object(a.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),Object(a.jsx)("button",{type:"button",onClick:function(){var r=Object(i.a)(e);r.pop(),c(r)},className:"inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:Object(a.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 12m0 6m0-6h6m-6 0H6"})})})]}),Object(a.jsx)("span",{className:"ml-auto",children:m?Object(a.jsx)(k,{data:e.filter((function(r){return r.age>0})).map((function(r){var t={name:r.name,age:r.age};return Object.keys(r.insurances).map((function(e){return t[e]=r.insurances[e]?b(e,r.age,r.startAge):0,e})),t.totaal=x(r),t})),filename:e[0]?"bond_moyson_".concat(e[0].name):"bond_moyson_empty"}):""}),Object(a.jsx)("span",{className:"ml-auto ",children:Object(a.jsxs)("span",{className:"inline-grid grid-rows-3 gap-y-2 self-end mr-4 m-2 p-2 border-2 rounded-xl border-red-200",children:[Object(a.jsxs)("span",{className:"font-mono text-lg",children:["\u20ac ",f().toFixed(2)," / j"]}),Object(a.jsxs)("span",{className:"font-mono text-lg",children:[" ","\u20ac ",(f()/4).toFixed(2)," / 3m"]}),Object(a.jsxs)("span",{className:"font-mono text-lg",children:[" ","\u20ac ",(f()/12).toFixed(2)," / m"]})]})})]}),Object(a.jsx)("div",{className:"flex flex-col",children:Object(a.jsx)("div",{className:"overflow-x-auto  ",children:Object(a.jsx)("div",{className:" align-middle inline-block min-w-full ",children:Object(a.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(a.jsx)("thead",{className:"bg-gray-50",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"naam"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"leeftijd"}),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"instap"}),y.map((function(r){return Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase  ",children:Object(a.jsxs)("span",{className:"inline-grid grid-cols-3 gap-x-1 align-middle",children:[d(r)?Object(a.jsx)("img",{src:d(r),width:"16px",height:"16px"}):"",Object(a.jsx)("span",{className:"align-middle",children:(t=r,"kliniplanplus"===t?"kliniplan+":t)})]})});var t})),Object(a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"totaal"})]})}),Object(a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map((function(r,t){return Object(a.jsx)(g,{person:r,onChange:l(t)},t)}))})]})})})})})]})},A=function(r){r&&r instanceof Function&&e.e(3).then(e.bind(null,272)).then((function(t){var e=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;e(r),a(r),s(r),c(r),n(r)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),A()}},[[271,1,2]]]);
//# sourceMappingURL=main.e9ce6949.chunk.js.map