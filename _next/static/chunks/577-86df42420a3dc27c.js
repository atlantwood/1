(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{9126:function(e,t,n){"use strict";n.r(t);var o,s=n(2846);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}t.default=function(e){return s.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 32 32"},e),o||(o=s.createElement("path",{d:"M26.531 10.47a.75.75 0 0 0-1.062 0L16 19.939 6.53 10.47a.75.75 0 0 0-1.06 1.061l10 10.001a.75.75 0 0 0 1.06 0l10.001-10.001a.75.75 0 0 0 0-1.06z"})))}},3577:function(e,t,n){Promise.resolve().then(n.t.bind(n,4002,23)),Promise.resolve().then(n.t.bind(n,8810,23)),Promise.resolve().then(n.bind(n,6881)),Promise.resolve().then(n.t.bind(n,3098,23)),Promise.resolve().then(n.t.bind(n,8361,23)),Promise.resolve().then(n.t.bind(n,5983,23)),Promise.resolve().then(n.bind(n,3113)),Promise.resolve().then(n.t.bind(n,5250,23))},6881:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(3827),s=n(4232),a=n(4090);let l=["81e19546-e59b-4f44-b06d-293c60eb0913","652d0c60-801b-40ac-9613-158b3b32cc51"],r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return Promise.all(t.map(t=>fetch("https://post.1fix.me/api/v2/feedback",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({checkboxes:{},additionalFields:[],...e,accountId:t})}).then(e=>{if(e.status>=400)throw e.status;return e})))},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;return async s=>{s.preventDefault();let a=new FormData(s.currentTarget);r(await e(a),o).then(t).catch(n)}};var u=e=>{let t=e.replace(/^(\+61|\+6|\+)/,"").replaceAll(/[^0-9]/g,"").slice(0,12).split(""),n="+61 xxx xxx xxx xxx";for(let e of t)n=n.replace("x",e);return n.split("x")[0].trim().replace(/[^0-9]*$/,"")};n(4840),n(6369);var d=()=>(0,o.jsxs)("label",{className:"privacy-policy-agreement",children:[(0,o.jsx)("input",{type:"checkbox",name:"privacy-policy",value:"privacy-policy",required:!0}),(0,o.jsxs)("span",{children:["I agree to the processing of personal data."," ",(0,o.jsx)("a",{href:"/information/privacy-policy/",target:"_blank",children:"Privacy policy"})]})]}),c=n(8939);n(4158);var p=e=>{let{label:t,showSpinner:n,className:s=""}=e;return(0,o.jsx)("button",{type:"submit",className:(0,c.Z)("submit-button",...s.split(" ")),children:n?(0,o.jsx)(h,{}):t})};let h=e=>(0,o.jsx)("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e,children:(0,o.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,o.jsx)("g",{fill:"currentColor",fillRule:"nonzero",children:(0,o.jsx)("path",{d:"M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z"})})})}),f=(0,s.default)(()=>n.e(355).then(n.bind(n,5402)),{loadableGenerated:{webpack:()=>[5402]}}),m=(0,s.default)(()=>n.e(47).then(n.bind(n,8047)),{loadableGenerated:{webpack:()=>[8047]}});var g=()=>{let[e,t]=(0,a.useState)("none"),n=i(e=>{var n,o,s,a;return t("sending"),{name:null===(n=e.get("name"))||void 0===n?void 0:n.toString(),phone:null===(o=e.get("phone"))||void 0===o?void 0:o.toString(),email:null===(s=e.get("email"))||void 0===s?void 0:s.toString(),message:null===(a=e.get("message"))||void 0===a?void 0:a.toString(),additionalFields:[["Page",window.location.href]]}},()=>t("success"),()=>t("error"));return(0,o.jsx)(f,{status:e,successMessage:"Form has been submitted successfully",errorMessage:"Something went worng, please try again later",children:(0,o.jsxs)("form",{onSubmit:n,className:"blind-form",children:[(0,o.jsx)(m,{name:"name",label:"Name",required:!0}),(0,o.jsx)(m,{name:"phone",label:"Phone",required:!0,formatFunction:u,initialValue:"+61"}),(0,o.jsx)(m,{name:"email",label:"Email",required:!0}),(0,o.jsx)(m,{name:"message",label:"Message",textarea:!0}),(0,o.jsx)(d,{}),(0,o.jsx)(p,{label:"Send Request",showSpinner:"sending"===e})]})})}},3113:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(3827),s=n(7907),a=n(4090),l=n(8426),r=n(9126);let i=n(5154).Z.URL;n(1869);var u=n(8939),d=e=>{let{path:t,className:n=""}=e,d=(0,s.usePathname)(),p=(0,a.useMemo)(()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:t.map((e,t)=>{let n=c(d||""),o=(0,l.EQ)(e).with("Home",()=>"/").otherwise(()=>"/"+n.slice(0,t).join("/"));return{"@type":"ListItem",position:t+1,name:e,item:i+o}})}),[t,d]),h=(0,a.useMemo)(()=>t.map((e,n)=>{let s=c(d||""),a=(0,l.EQ)(e).with("Home",()=>"/").otherwise(()=>"/"+s.slice(0,n).join("/"));return(0,o.jsx)("li",{children:n!=t.length-1?(0,o.jsx)("a",{href:a,dangerouslySetInnerHTML:{__html:e}}):(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})},a)}).flatMap((e,t)=>(0,l.EQ)(t).with(0,()=>e).otherwise(()=>[(0,o.jsx)(r.default,{className:"-rotate-90 w-5 "},"chevron-".concat(t)),e])),[t,d]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(p)}}),(0,o.jsx)("ul",{className:(0,u.Z)("breadcrumbs",...n.split(" ")),children:h})]})};let c=e=>e.split("/").slice(1)},5154:function(e,t){"use strict";t.Z={name:"Solace Shades",logo:"https://wp.solaceshades.com.au/wp-content/uploads/2023/11/logo-solaceshades-new.svg",square_logo:"https://wp.solaceshades.com.au/wp-content/uploads/2024/01/solaceshades-kv-logo.jpeg",STN:"35721794708",domain:"solaceshades.com.au",URL:"https://solaceshades.com.au",email:"info@solaceshades.com.au",person:"Alexander Duganov",phone:"+61402328228",phoneview:"0402 328 228",phoneland:"+61402328228",phonelandview:"+61 402 328 228",phoneland2:"+61402328228",phonelandview2:"+61 402 328 228",phonefax:"+61402328228",phonefaxview:"+61 402 328 228",phonefax2:"+61402328228",phonefaxview2:"+61 402 328 228",address1:"5 Borrodale Road Kingsford NSW",address2:"",city:"Sydney",zip:"2032",country:"Australia",countryCode:"AU",openingTime:"Mon-Sat 07:00 - 22:00",timeZone:"+11:00",social:{instagram:"https://www.instagram.com/solace_shades/",facebook:"https://www.facebook.com/SolaceShadesSydney",google:"https://www.google.com/maps?cid=1256305765288136885",pinterest:"https://pinterest.com/99promome/solace-shades-sydney-blinds-shutters-curtains/",youtube:"https://www.youtube.com/@SolaceShadesSydney"},latitude:"-33.9217038",longitude:"151.2230031",geo:"-33.9217038,151.2230031",geobusinesslatitude:"-33.8464886",geobusinesslongitude:"150.2725555",radius:"100000",photo1:"https://wp.solaceshades.com.au/wp-content/uploads/2023/11/wooden-plantation-shutters-sydney.webp",photo2:"https://wp.solaceshades.com.au/wp-content/uploads/2023/11/wooden-shutters-solaceshades-main.webp",photo3:"https://wp.solaceshades.com.au/wp-content/uploads/2023/11/zebra-blinds-north-sydney.webp",photo4:"https://wp.solaceshades.com.au/wp-content/uploads/2023/11/skylight-blinds-sydney-cbd.webp",priceRange:"AUD 200 - 5000",fulladdress:"5 Borrodale Road Kingsford NSW 2032, Sydney",hasMap:"https://www.google.com/maps?cid=17614416971471380439",businessDescription:"Our company in Sydney is your trusted partner in the world of window solutions, offering a diverse range of blinds and curtains to add coziness and style to your home or office. Our assortment includes not only elegant roller blinds but also practical vertical and horizontal blinds, as well as exquisite fabric curtains. We not only guarantee professional installation but also provide an individualized approach to selecting materials, textures, and colors to bring your unique preferences to life and create a space that perfectly blends comfort and style.",businessName:"Solace Shades",locale:"en-AU",geoRegion:"NSW",geoPlacename:"Sydney",geoPosition:"",geoServices:"Within a 30 kilometre radius of Sydney",geoServices2:"Sydney and surrounding areas 30km away",autorBlog:"Helena Tajurska",autorLink:"https://www.linkedin.com/in/elena-taiurskaia/"}},4232:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var o=n(4930),s=n.n(o)},4930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=n(6921);n(3827),n(4090);let s=o._(n(4795));function a(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,s.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9721:function(e,t,n){"use strict";function o(e){let{reason:t,children:n}=e;return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}}),n(9775)},4795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let o=n(3827),s=n(4090),a=n(9721);function l(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let r={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},i=function(e){let t={...r,...e},n=(0,s.lazy)(()=>t.loader().then(l)),i=t.loading;function u(e){let l=i?(0,o.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,r=t.ssr?(0,o.jsx)(n,{...e}):(0,o.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(n,{...e})});return(0,o.jsx)(s.Suspense,{fallback:l,children:r})}return u.displayName="LoadableComponent",u}},4002:function(){},5983:function(){},8810:function(){},8361:function(){},4840:function(){},6369:function(){},4158:function(){},3098:function(){},1869:function(){}}]);