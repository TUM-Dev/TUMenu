(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{9783:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[id]",function(){return t(4150)}])},787:function(e,n,t){"use strict";t.d(n,{Z:function(){return Banner}});var a=t(5893),i=t(2734),s=t(5861),l=t(3738),r=t(7304),o=t(9755),c=t.n(o),d=t(1163);t(9467);var u=t(6886),x=t(1664),p=t.n(x),h=t(9318),LanguageSwitcher=e=>{let{locale:n,...t}=e,l=(0,d.useRouter)(),o=(0,i.Z)(),{t:c}=(0,r.$G)("common"),handleLanguageChange=e=>{l.push(l.pathname,l.asPath,{locale:e});let n=new CustomEvent("languageChange",{detail:{locale:e}});window.dispatchEvent(n)},x=t.href||l.asPath,g=l.pathname;return Object.keys(l.query).forEach(e=>{if("locale"===e){g=g.replace("[".concat(e,"]"),n);return}g=g.replace("[".concat(e,"]"),l.query[e])}),n&&(x=t.href?"/".concat(n).concat(t.href):g),(0,a.jsxs)(u.ZP,{container:!0,alignItems:"center",justifyContent:"center",sx:{position:"absolute",top:o.spacing(2),right:{xs:0,sm:o.spacing(4)},width:o.spacing(28)},children:[(0,a.jsx)(u.ZP,{item:!0,xs:8,children:(0,a.jsx)(s.Z,{variant:"subtitle1",sx:{color:o.palette.primary.main},children:c("language")})}),(0,a.jsx)(u.ZP,{item:!0,xs:4,children:(0,a.jsx)(p(),{href:x,onClick:()=>handleLanguageChange(n),children:(0,a.jsx)("button",{style:{fontSize:o.spacing(3),backgroundColor:"transparent",cursor:"pointer",border:"none"},children:"de"===n?(0,a.jsx)(h.Z,{countryCode:"DE",svg:!0}):(0,a.jsx)(h.Z,{countryCode:"GB",svg:!0})})})})]})},g=t(5400),m=t.n(g);function Banner(){let e=(0,d.useRouter)(),n=(0,i.Z)(),{t}=(0,r.$G)("common"),o=e.query.locale||m().i18n.defaultLocale;return(0,a.jsxs)(l.Z,{sx:{position:"relative",width:"100%",height:n.spacing(44),zIndex:n.zIndex.drawer+1},children:[(0,a.jsx)(c(),{src:"".concat("","/MGA-8.jpg"),objectFit:"cover",layout:"fill",quality:100,objectPosition:"bottom",style:{filter:"brightness(60%)"},priority:!0,alt:"Mensa Garching"}),(0,a.jsxs)(l.Z,{sx:{position:"absolute",left:{sm:n.spacing(7),xs:"50%"},top:{sm:n.spacing(7),xs:"50%"},color:n.palette.primary.main,maxWidth:n.spacing(80),width:{xs:"90%",sm:"unset"},textAlign:{sm:"left",xs:"center"},transform:{xs:"translate(-50%,-50%)",sm:"unset"}},children:[(0,a.jsxs)(s.Z,{variant:"h2",sx:{color:n.palette.primary.light,fontWeight:600},children:["TUM",(0,a.jsx)("span",{style:{color:n.palette.primary.main},children:"enu"})]}),(0,a.jsx)(s.Z,{variant:"h5",sx:{paddingLeft:n.spacing(1)},children:t("subtitleBanner")})]}),(0,a.jsx)(s.Z,{variant:"body2",sx:{position:"absolute",right:"5px",bottom:"5px",color:n.palette.primary.main,fontSize:n.spacing(.85)},children:"Copyright: https://www.meck-architekten.de/projekte/id/2019-mensa-campus-garching/"}),m().i18n.locales.map(e=>e===o?null:(0,a.jsx)(LanguageSwitcher,{locale:e},e))]})}},561:function(e,n,t){"use strict";t.d(n,{Z:function(){return NotFound}});var a=t(5893),i=t(2734),s=t(8396),l=t(3738),r=t(5861),o=t(7304),c=t(5675),d=t.n(c);function NotFound(e){let{imageSource:n,translationString:t}=e,c=(0,i.Z)(),{t:u}=(0,o.$G)("common"),x=(0,s.Z)("(min-width:37.5em)");return(0,a.jsx)(l.Z,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",columnGap:c.spacing(4),rowGap:c.spacing(4),flexWrap:"wrap",my:c.spacing(4)},children:(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:c.spacing(2)},children:[(0,a.jsx)(r.Z,{variant:"h4",sx:{color:c.palette.primary.dark,fontWeight:600},children:u(t)}),(0,a.jsx)(d(),{src:""+n,quality:100,height:x?400:300,width:x?400:300,priority:!0,alt:"Not Found"})]})})}},2424:function(e,n,t){"use strict";t.d(n,{Z:function(){return Sidebar}});var a=t(5893),i=t(7294),s=t(5152),l=t.n(s),r=t(5813),o=t(7304),c=t(2734),d=t(3738),u=t(9417),x=t(5861),p=t(8462),h=t(9140),g=t(7212),m=t(8619),f=t(9334),j=t(7594),y=t(7922),b=t(3508),Z=t(181),C=t(1664),v=t.n(C),S=t(1163),D=t(9657);function LinkComponent(e){let{children:n,skipLocaleHandling:t,...s}=e,{setTriggerSidebarMobile:l}=(0,i.useContext)(D.Z),r=(0,c.Z)(),o=(0,S.useRouter)(),d=s.locale||o.query.locale||"",u=s.href||o.asPath;return 0===u.indexOf("http")&&(t=!0),d&&!t&&(u=u?"/".concat(d).concat(u):o.pathname.replace("[locale]",d)),(0,a.jsx)(v(),{href:u,legacyBehavior:!0,scroll:!1,children:(0,a.jsx)("a",{...s,style:{textDecoration:"none",color:r.palette.primary.main},onClick:()=>l(!1),children:n})})}function SidebarSubmenu(e){let{foodPlace:n}=e,[t,s]=(0,i.useState)(!1),l=(0,c.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.ZP,{disablePadding:!0,children:(0,a.jsxs)(m.Z,{onClick:()=>s(!t),children:[(0,a.jsx)(f.Z,{disableTypography:!0,primary:n.city,sx:{fontSize:l.spacing(2.5)}}),(0,a.jsx)(j.Z,{children:t?(0,a.jsx)(Z.Z,{sx:{color:l.palette.primary.main}}):(0,a.jsx)(b.Z,{sx:{color:l.palette.primary.main}})})]})},n.city),(0,a.jsx)(y.Z,{in:t,timeout:"auto",unmountOnExit:!0,children:(0,a.jsx)(p.Z,{component:"div",disablePadding:!0,children:n.foodPlaces.map(e=>(0,a.jsx)(LinkComponent,{href:"/".concat(e.canteen_id),skipLocaleHandling:!1,children:(0,a.jsx)(m.Z,{sx:{pl:4},children:(0,a.jsx)(f.Z,{disableTypography:!0,primary:e.name,sx:{fontSize:l.spacing(2)}})})},e.canteen_id))})})]})}let P=l()(()=>Promise.all([t.e(269),t.e(492),t.e(482)]).then(t.bind(t,7037)),{loadableGenerated:{webpack:()=>[7037]},ssr:!1});function Sidebar(e){let{foodPlaces:n}=e,[t,s]=(0,i.useState)(!1),{triggerSidebarMobile:l,setTriggerSidebarMobile:g}=(0,i.useContext)(D.Z),{t:m}=(0,o.$G)("common"),f=[{city:"Garching",foodPlaces:[]},{city:"Munich",foodPlaces:[]},{city:"Straubing",foodPlaces:[]},{city:"Weihenstephan",foodPlaces:[]},{city:"Rosenheim",foodPlaces:[]}];n.forEach(e=>{var n,t,a,i,s;let{address:l}=e.location;l.includes("Garching")?null===(n=f.find(e=>"Garching"===e.city))||void 0===n||n.foodPlaces.push(e):l.includes("M\xfcnchen")||l.includes("Plategg")||l.includes("Planegg-Martinsried")?null===(t=f.find(e=>"Munich"===e.city))||void 0===t||t.foodPlaces.push(e):l.includes("Freising")?null===(a=f.find(e=>"Weihenstephan"===e.city))||void 0===a||a.foodPlaces.push(e):l.includes("Rosenheim")?null===(i=f.find(e=>"Rosenheim"===e.city))||void 0===i||i.foodPlaces.push(e):l.includes("Straubing")&&(null===(s=f.find(e=>"Straubing"===e.city))||void 0===s||s.foodPlaces.push(e))});let j=(0,c.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.Z,{sx:{display:{lg:"flex",xs:l?"flex":"none"},position:{lg:"relative",xs:"absolute"},minHeight:{lg:"auto",xs:"100%"},width:j.spacing(30),flexDirection:"column",bgcolor:j.palette.primary.light,color:j.palette.primary.main,borderBottomRightRadius:"12px",zIndex:9999,backgroundColor:j.palette.primary.light},children:[(0,a.jsx)(d.Z,{sx:{display:{lg:"none",xs:"flex"},justifyContent:"flex-end",backgroundColor:j.palette.primary.light,height:j.spacing(3),pt:j.spacing(.5),px:j.spacing(.5)},children:(0,a.jsx)(r.Z,{fontSize:"small",sx:{color:j.palette.primary.main,cursor:"pointer"},onClick:()=>g(!1)})}),(0,a.jsx)(u.Z,{onClick:()=>{s(!0),g(!1)},variant:"text",endIcon:(0,a.jsx)(h.Z,{}),sx:{justifyContent:"flex-start",pl:j.spacing(2)},children:(0,a.jsx)(x.Z,{variant:"h6",children:m("showAllCanteens")})}),(0,a.jsx)(p.Z,{component:"nav",children:f.map(e=>(0,a.jsx)(SidebarSubmenu,{foodPlace:e},e.city))})]}),(0,a.jsx)(P,{open:t,setOpen:s,foodPlaces:n,mapOpenCoordinates:[48.132264,11.57743],zoom:11})]})}},9467:function(e,n,t){"use strict";var a=t(9515),i=t(5400),s=t.n(i);n.Z=(0,a.Z)({supportedLngs:s().i18n.locales,fallbackLng:s().i18n.defaultLocale})},5400:function(e){"use strict";e.exports={i18n:{defaultLocale:"de",locales:["en","de"],localeDetection:!0}}},4150:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return ei},default:function(){return CanteenPage}});var a,i,s=t(5893),l=t(9008),r=t.n(l),o=t(7294),c=t(2734),d=t(3738),u=t(787),x=t(7304),p=t(8396),h=t(1703),g=t(44),m=t(5861),f=t(9417),j=t(8162),y=t(7484),b=t.n(y),Z=t(5183),C=t.n(Z),v=t(7181),S=t.n(v),D=t(6886),P=t(9657);t(790),t(5054);var E=t(5046),w=t(6829),k=t(2359),A=t(718);function disableWeekends(e){return 0===e.get("day")||6===e.get("day")}function HeaderDatePicker(e){let{datePickerValue:n,datePickerSetValue:t,minDate:a,maxDate:i}=e,l=(0,c.Z)(),[r,d]=(0,o.useState)("en");return(0,o.useEffect)(()=>{let handleLanguageChange=e=>{let n=e.detail.locale;d(n),b().locale(n)};window.addEventListener("languageChange",handleLanguageChange);let e=localStorage.getItem("i18nextLng")||"en";return d(e),b().locale(e),()=>{window.removeEventListener("languageChange",handleLanguageChange)}},[]),(0,s.jsx)(k._,{dateAdapter:w.y,locale:r,children:(0,s.jsx)(A.M,{closeOnSelect:!0,minDate:a,maxDate:i,shouldDisableDate:disableWeekends,value:n,onChange:e=>{b()(e).isValid()&&t(e)},inputFormat:"de"===r?"DD.MM.YYYY":"DD/MM/YYYY",renderInput:e=>(0,s.jsx)(E.Z,{...e,sx:{backgroundColor:l.palette.secondary.main}})})})}var L=t(5152),_=t.n(L),I=t(8441),M=t(4386),F=t(8962),G=t(1496),R=t(9308);let T=["mon","tue","wed","thu","fri"];var N=t(2492),O=t(5813);function OpeningHours(e){let{foodPlaceData:n,open:t,setOpen:a}=e,{t:i}=(0,x.$G)("common"),l=(0,c.Z)();return(0,s.jsxs)(N.Z,{open:t,onClose:()=>a(!1),PaperProps:{style:{borderRadius:"12px"}},disableScrollLock:!0,children:[(0,s.jsx)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",backgroundColor:l.palette.primary.light,height:l.spacing(5),pt:l.spacing(.5),px:l.spacing(.5)},children:(0,s.jsx)(O.Z,{fontSize:"small",sx:{color:l.palette.primary.main,cursor:"pointer"},onClick:()=>a(!1)})}),(0,s.jsxs)(D.ZP,{container:!0,rowSpacing:2,flexDirection:"column",sx:{px:{xs:l.spacing(3),sm:l.spacing(5)},pb:l.spacing(5),width:{xs:l.spacing(37),sm:l.spacing(50)},textAlign:"center",backgroundColor:l.palette.primary.light,color:l.palette.primary.main},children:[(0,s.jsxs)(D.ZP,{item:!0,xs:12,sx:{borderBottom:"2px solid #fff"},children:[(0,s.jsx)(m.Z,{variant:"h4",children:n.name}),(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{mt:l.spacing(1)},children:i("openingHours")})]}),(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("monday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(n.open_hours.mon.start," - ").concat(n.open_hours.mon.end)})]})}),(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("tuesday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(n.open_hours.tue.start," - ").concat(n.open_hours.tue.end)})]})}),(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("wednesday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(n.open_hours.wed.start," - ").concat(n.open_hours.wed.end)})]})}),(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("thursday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(n.open_hours.thu.start," - ").concat(n.open_hours.thu.end)})]})}),(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("friday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(n.open_hours.fri.start," - ").concat(n.open_hours.fri.end)})]})})]})]})}let W=(0,o.createContext)({foodPlaceMenu:{},foodPlaceData:{},labels:[],queueData:{}}),H=_()(()=>Promise.all([t.e(269),t.e(37)]).then(t.bind(t,7037)),{loadableGenerated:{webpack:()=>[7037]},ssr:!1});function FoodPlaceTitleContainer(e){let{datePickerValue:n}=e,{foodPlaceData:t,queueData:a}=(0,o.useContext)(W),[i,l]=(0,o.useState)(!1),[r,u]=(0,o.useState)(!1),p=(0,c.Z)(),{t:h}=(0,x.$G)("common"),g=(null==n?void 0:n.get("day"))===6||(null==n?void 0:n.get("day"))===0,j=(0,G.ZP)(I.Z)(()=>({["&.".concat(F.Z.colorPrimary)]:{backgroundColor:p.palette.secondary.main},["& .".concat(F.Z.bar)]:{borderRadius:5,backgroundColor:"light"===p.palette.mode?"#1a90ff":"#308fe8"}}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D.ZP,{container:!0,rowSpacing:1,alignItems:"center",justifyContent:"center",flexDirection:"row",sx:{width:"100%",position:"relative"},children:[(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,s.jsx)(m.Z,{variant:"h4",sx:{fontWeight:600,textAlign:{xs:"center",sm:"right"}},children:t.name}),(0,s.jsx)(R.Z,{onClick:()=>u(!0),sx:{fontSize:p.spacing(6),color:p.palette.secondary.dark,cursor:"pointer"}})]})}),null!==a&&b()(b()().format("MM/DD/YYYY")).isSame(b()(null==n?void 0:n.format("MM/DD/YYYY")))?(0,s.jsx)(D.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.ZP,{container:!0,justifyContent:"center",alignItems:"center",spacing:1,flexDirection:"row",children:[(0,s.jsx)(D.ZP,{item:!0,sd:3,xs:5,children:(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:h("queueStatus")})}),(0,s.jsx)(D.ZP,{item:!0,xs:7,children:(0,s.jsx)(M.Z,{title:"".concat(h("people"),": ").concat(a.count,", ").concat(h("percent"),": ").concat(a.percent.toFixed(2)),arrow:!0,placement:"bottom-end",children:(0,s.jsx)(j,{variant:"determinate",value:a.percent,sx:{borderRadius:"12px",height:p.spacing(2.75),backgroundColor:p.palette.primary.light}})})})]})}):"",(0,s.jsx)(D.ZP,{item:!0,sm:9,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:p.spacing(1)},children:[(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{textAlign:{xs:"center",sm:"right"}},children:g?h("intlDateTimeClosed",{val:n,formatParams:{val:{weekday:"long"}}}):"".concat(h("intlDateTimeOpen",{val:n,formatParams:{val:{weekday:"long"}}})," ").concat(t.open_hours["".concat(T[(null==n?void 0:n.get("day"))-1])].start," - ").concat(t.open_hours["".concat(T[(null==n?void 0:n.get("day"))-1])].end)}),(0,s.jsx)(f.Z,{onClick:()=>l(!0),variant:"contained",size:"medium",sx:{backgroundColor:p.palette.primary.light,color:p.palette.primary.main},children:h("openingHours")})]})})]}),(0,s.jsx)(OpeningHours,{foodPlaceData:t,open:i,setOpen:l}),(0,s.jsx)(H,{open:r,setOpen:u,foodPlaces:[t],mapOpenCoordinates:[t.location.latitude,t.location.longitude],zoom:15})]})}function LayoutContainerHeader(e){let{datePickerValue:n,datePickerSetValue:t,minDate:a,maxDate:i}=e,{triggerSidebarMobile:l,setTriggerSidebarMobile:r}=(0,o.useContext)(P.Z),u=(0,c.Z)(),{t:p}=(0,x.$G)("common");return(0,s.jsxs)(D.ZP,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[(0,s.jsx)(D.ZP,{item:!0,lg:9,xs:12,children:(0,s.jsx)(FoodPlaceTitleContainer,{datePickerValue:n})}),(0,s.jsx)(D.ZP,{item:!0,lg:0,md:3,sm:4,xs:6,sx:{display:{lg:"none",xs:"block"}},children:(0,s.jsx)(d.Z,{sx:{display:"center",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(f.Z,{variant:"contained",onClick:()=>r(!l),size:"medium",sx:{backgroundColor:u.palette.primary.light,color:u.palette.primary.main},children:p("selectCanteen")})})}),(0,s.jsx)(D.ZP,{item:!0,lg:3,md:3,sm:4,xs:6,children:(0,s.jsx)(d.Z,{sx:{display:"center",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(HeaderDatePicker,{datePickerValue:n,datePickerSetValue:t,minDate:a,maxDate:i})})})]})}var z=t(5820),Y=t(129);(a=i||(i={})).GLUTEN="#DDCC66",a.WHEAT="#F5DEB3",a.RYE="#d1ae7b",a.BARLEY="#F3E1B6",a.OAT="#d8c29d",a.SPELT="#A38C6B",a.HYBRIDS="#CFCDAA",a.SHELLFISH="#D9C2B8",a.CHICKEN_EGGS="#ffa631",a.FISH="#00ffb5",a.PEANUTS="#eeddc3",a.SOY="#d7c49e",a.MILK="#fdfff5",a.LACTOSE="#e9cca4",a.ALMONDS="#EADDCA",a.HAZELNUTS="#ae9f80",a.WALNUTS="#773f1a",a.CASHEWS="#d4b797",a.PECAN="#c1b094",a.PISTACHIOES="#93C572",a.MACADAMIA="#d5c6ac",a.CELERY="#9DCE5C",a.MUSTARD="#FFDB58",a.SESAME="#f9f0d5",a.SULPHURS="#E8DE35",a.SULFITES="#d9d9d9",a.LUPIN="#bea0c8",a.MOLLUSCS="#bcd3bd",a.SHELL_FRUITS="#dcc13a",a.BAVARIA="#0098D4",a.MSC="#005DAA",a.DYESTUFF="#ffc0cb",a.PRESERVATIVES="#b92962",a.ANTIOXIDANTS="#d9d9d1",a.FLAVOR_ENHANCER="#dffbfb",a.WAXED="#f3e3c2",a.PHOSPATES="#FFA500",a.SWEETENERS="#944a00",a.PHENYLALANINE="#664667",a.COCOA_CONTAINING_GREASE="#D2691E",a.GELATIN="#bd6e84",a.ALCOHOL="#d5101d",a.PORK="#FCD7DE",a.BEEF="#f9906f",a.VEAL="#a16868",a.WILD_MEAT="#c38a8a",a.LAMB="#d5c3af",a.GARLIC="#f2e9d2",a.POULTRY="#ddc252",a.CEREAL="#efd7ab",a.MEAT="#f9906f",a.VEGAN="#8ec298",a.VEGETARIAN="#22aa00";var B=t(7918);function Label(e){let{bgColor:n,text:t}=e,a=(0,c.Z)();return(0,s.jsx)(M.Z,{title:t,arrow:!0,children:(0,s.jsx)(B.Z,{label:t,sx:{backgroundColor:n,color:a.palette.secondary.light,fontWeight:"600",width:a.spacing(13),height:a.spacing(3)}})})}function DishCard(e){var n;let{meal:t,labels:a}=e,l=(0,c.Z)(),{i18n:r,t:o}=(0,x.$G)("common"),getLabelText=(e,n)=>{let t=a.find(n=>n.enum_name===e);return t?"de"===n?null==t?void 0:t.text.DE.toUpperCase():null==t?void 0:t.text.EN.toUpperCase():""};return(0,s.jsxs)(Y.E.div,{variants:{present:{scale:1,opacity:1},exit:{scale:.8,opacity:0}},initial:"exit",animate:"present",exit:"exit",layout:!0,style:{display:"flex",flexDirection:"column",gap:l.spacing(2),backgroundColor:l.palette.primary.light,color:l.palette.primary.main,padding:l.spacing(2),borderRadius:"12px",width:l.spacing(45),height:l.spacing(45)},children:[(0,s.jsx)(m.Z,{variant:"h5",children:t.name}),(0,s.jsx)(D.ZP,{container:!0,alignItems:"center",justifyContent:"flex-start",spacing:1,children:t.labels.map((e,n)=>(0,s.jsx)(D.ZP,{item:!0,xs:4,children:(0,s.jsx)(Label,{bgColor:i[e],text:getLabelText(e,r.language)},e)},n.toLocaleString()))}),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:"auto"},children:[(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:o("price")}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:null==(n=t.prices.students)?o("unknown"):0!==n.base_price?0!==n.price_per_unit&&null!=n.price_per_unit?"".concat(n.base_price.toFixed(2),"€ + ").concat(n.price_per_unit.toFixed(2),"€/").concat(n.unit):"".concat(n.base_price.toFixed(2),"€"):null!==n.price_per_unit?"".concat(n.price_per_unit.toFixed(2),"€/").concat(n.unit):o("unknown")})]})]})}function CardGrid(e){let{dailyMeals:n,labels:t}=e,a=(0,c.Z)();return(0,s.jsx)(d.Z,{sx:{display:"flex",alignContent:"flex-start",justifyContent:{xs:"center",sd:"flex-start"},columnGap:a.spacing(4),rowGap:a.spacing(4),flexWrap:"wrap",my:a.spacing(4)},children:(0,s.jsx)(z.M,{initial:!1,children:n.map(e=>(0,s.jsx)(DishCard,{meal:e,labels:t},e.name))})})}var U=t(561);let V=(0,G.ZP)("div")(e=>{let{theme:n}=e;return{color:n.palette.primary.main,backgroundColor:n.palette.primary.light,borderRadius:"50%",width:n.spacing(4),height:n.spacing(4),textAlign:"center"}}),$=(0,G.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",justifyContent:"center",gap:n.spacing(1),fontWeight:600,color:n.palette.primary.dark,backgroundColor:n.palette.primary.main,width:"fit-content"}});function GeneratedMenu(e){let{setFilteredValue:n,setShowMenu:t,meals:a,rerender:i}=e,{labels:l}=(0,o.useContext)(W),[r,u]=(0,o.useState)(),p=(0,c.Z)(),{t:h}=(0,x.$G)("common"),getDishSuggestions=e=>a.filter(n=>e.includes(n.dish_type)),getRandomDish=(e,n)=>{let t=Math.floor(e);return 0===t?null:n[Math.floor(Math.random()*(t-0)+0)]},generateMenu=()=>{n("Disable"),t(!0);let e=getDishSuggestions(["Studitopf","Beilagen"]),a=getDishSuggestions(["Grill","Vegetarisch","Fleisch","Wok","Pasta","Pizza"]),i=getDishSuggestions(["S\xfc\xdfspeise"]),s={firstDish:getRandomDish(e.length,e),secondDish:getRandomDish(a.length,a),thirdDish:getRandomDish(i.length,i)};u(s)};return((0,o.useEffect)(()=>{generateMenu()},[i]),r&&(r.firstDish||r.secondDish||r.thirdDish))?(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:{xs:"center",sd:"flex-start"},gap:p.spacing(4),my:p.spacing(4)},children:[r&&r.firstDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"1"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:h("firstDish")})]}),r&&(0,s.jsx)(DishCard,{meal:r.firstDish,labels:l})]}),r&&r.secondDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"2"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:h("secondDish")})]}),(0,s.jsx)(DishCard,{meal:r.secondDish,labels:l})]}),r&&r.thirdDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"3"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:"Dessert"})]}),(0,s.jsx)(DishCard,{meal:r.thirdDish,labels:l})]})]}):(0,s.jsx)(U.Z,{translationString:"noMenu",imageSource:"/no_menu.svg"})}var q=t(8364),X=t(8831),K=t(6514),J=t(629),Q=t(3926),ee=t(4118),en=t(4178),et=t(5071);function FilterDropdown(e){let{open:n,anchorRef:t,handleClose:a,selectedLabels:i,setSelectedLabels:l,handleCheck:r}=e,{labels:d}=(0,o.useContext)(W),u=(0,c.Z)(),{t:p,i18n:h}=(0,x.$G)("common"),getLabelText=(e,n)=>"de"===n?e.text.DE.toUpperCase():e.text.EN.toUpperCase(),g=(0,o.useMemo)(()=>d.sort((e,n)=>"en"===h.language?e.text.EN.localeCompare(n.text.EN):e.text.DE.localeCompare(n.text.DE)),[h.language,d]);return(0,s.jsx)(X.Z,{className:"container-dropdown",sx:{maxHeight:u.spacing(50),overflowY:"scroll"},open:n,anchorEl:t.current,role:void 0,placement:"bottom-end",transition:!0,disablePortal:!1,modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!0,options:{boundariesElement:"scrollParent"}}],children:e=>{let{TransitionProps:t}=e;return(0,s.jsx)(K.Z,{...t,style:{transformOrigin:"left top"},children:(0,s.jsx)(J.Z,{sx:{marginTop:u.spacing(.1),backgroundColor:u.palette.secondary.main,borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"},children:(0,s.jsx)(Q.d,{onClickAway:a,children:(0,s.jsxs)(ee.Z,{autoFocusItem:n,id:"composition-menu","aria-labelledby":"composition-button",children:[(0,s.jsxs)(en.Z,{disableTouchRipple:!0,onClick:()=>l([]),sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:u.spacing(1)},children:[p("deleteFilters"),(0,s.jsx)(q.Z,{sx:{color:"#545454",padding:"0 !important"}})]}),g.map((e,n)=>(0,s.jsxs)(en.Z,{disableTouchRipple:!0,onClick:()=>r(e.enum_name),sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:u.spacing(1)},children:[getLabelText(e,h.language),(0,s.jsx)(et.Z,{checked:i.includes(e.enum_name),onChange:()=>r(e.enum_name),color:"primary",sx:{padding:"0 !important"}})]},n.toLocaleString()))]})})})})}})}function LayoutContainer(){let e=(0,c.Z)(),{t:n}=(0,x.$G)("common"),{foodPlaceMenu:t,labels:a}=(0,o.useContext)(W),[i,l]=(0,o.useState)(b()()),[r,u]=(0,o.useState)(b()()),[y,Z]=(0,o.useState)(b()()),[C,v]=(0,o.useState)([]),[S,D]=(0,o.useState)([]),[P,E]=(0,o.useState)([]),[w,k]=(0,o.useState)([]),[A,L]=(0,o.useState)("All"),[_,I]=(0,o.useState)(!1),[M,F]=(0,o.useState)(Math.random()),[G,R]=(0,o.useState)(!0),[T,N]=(0,o.useState)(!1),O=(0,o.useRef)(null),H=0===S.length,z=(0,p.Z)("(min-width:28.125em)"),Y=(0,o.useRef)(T);(0,o.useEffect)(()=>{!0===Y.current&&!1===T&&O.current.focus(),Y.current=T},[T]);let handleChange=(e,n)=>{if("All"!==n&&"Disable"!==n){let e=P.filter(e=>e.dish_type===n);v(e),I(!1)}else _&&"All"!==n?F(Math.random()):(v(P),I(!1));L(n)};return(0,o.useEffect)(()=>{if(0!==t.weeks.length){let e=t.weeks.filter(e=>e.year===(null==i?void 0:i.year())&&e.number===i.week()).map(e=>e.days.filter(e=>b()(e.date).isSame(i,"day"))).flat(1).map(e=>e.dishes.map(e=>e)).flat(1);D(e),0!==w.length&&(e=e.filter(e=>e.labels.every(e=>!w.includes(e)))),E(e),v(e);let n=Math.max(...t.weeks.map(e=>e.number)),a=Math.min(...t.weeks.map(e=>e.number)),s=b().max(t.weeks.filter(e=>e.number===n)[0].days.map(e=>b()(e.date))),l=b().min(t.weeks.filter(e=>e.number===a)[0].days.map(e=>b()(e.date)));Z(l),u(s)}else v([]),D([]);L("All"),I(!1)},[i,t]),(0,o.useEffect)(()=>{if(!G){let e=S.filter(e=>e.labels.every(e=>!w.includes(e)));E(e)}},[w]),(0,o.useEffect)(()=>{handleChange({},A)},[P]),(0,o.useEffect)(()=>{R(!1)},[]),(0,s.jsxs)(d.Z,{sx:{minHeight:"100%",px:e.spacing(4),py:e.spacing(2),backgroundColor:"".concat(e.palette.primary.main," !important"),zoom:1},children:[(0,s.jsx)(LayoutContainerHeader,{datePickerValue:i,datePickerSetValue:l,minDate:y,maxDate:r}),(0,s.jsx)(d.Z,{sx:{borderBottom:2,borderColor:"divider",display:"flex",justifyContent:"center"},children:(0,s.jsxs)(h.Z,{value:A,onChange:handleChange,sx:{mt:e.spacing(1)},variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[(0,s.jsx)(g.Z,{value:"All",label:n("all"),disabled:H}),(0,s.jsx)(g.Z,{value:"Fleisch",label:n("meat"),disabled:H}),(0,s.jsx)(g.Z,{value:"Vegetarisch",label:n("vegetarian"),disabled:H}),(0,s.jsx)(g.Z,{value:"Wok",label:"Wok",disabled:H}),(0,s.jsx)(g.Z,{value:"Grill",label:"Grill",disabled:H}),(0,s.jsx)(g.Z,{value:"Pasta",label:"Pasta",disabled:H}),(0,s.jsx)(g.Z,{value:"Pizza",label:"Pizza",disabled:H}),(0,s.jsx)(g.Z,{value:"Studitopf",label:n("studyPot"),disabled:H}),(0,s.jsx)(g.Z,{value:"Beilagen",label:n("sideDish"),disabled:H}),(0,s.jsx)(g.Z,{value:"S\xfc\xdfspeise",label:n("dessert"),disabled:H}),(0,s.jsx)(g.Z,{value:"Disable",label:"Disabled",sx:{display:"none",pointerEvents:"none"}})]})}),(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:{xs:"center",sd:"space-between"},gap:{xs:e.spacing(1),sd:"0"},mt:e.spacing(2)},children:[(0,s.jsx)(m.Z,{variant:"h5",sx:{fontWeight:600},children:n("cardGridHeading")}),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:e.spacing(2)},children:[(0,s.jsx)(f.Z,{variant:"contained",size:z?"medium":"small",disabled:H,onClick:()=>{I(!0),F(Math.random())},sx:{backgroundColor:e.palette.primary.light,color:e.palette.primary.main},children:n("generateMenu")}),(0,s.jsx)(f.Z,{startIcon:(0,s.jsx)(j.Z,{}),variant:"contained",size:z?"medium":"small",disabled:H,ref:O,"aria-controls":T?"composition-menu":void 0,"aria-expanded":T?"true":void 0,"aria-haspopup":"true",onClick:()=>{N(e=>!e)},sx:{backgroundColor:e.palette.primary.light,color:e.palette.primary.main},children:"".concat(n("labelFilter"),"(").concat(w.length,")")})]})]}),0===C.length||_?(0,s.jsx)(s.Fragment,{children:!_&&(0,s.jsx)(U.Z,{translationString:"notFound",imageSource:"/not_found.svg"})}):(0,s.jsx)(CardGrid,{dailyMeals:C,labels:a}),_&&(0,s.jsx)(GeneratedMenu,{setFilteredValue:L,setShowMenu:I,meals:P,rerender:M}),T&&(0,s.jsx)(FilterDropdown,{open:T,anchorRef:O,handleClose:e=>{O.current&&O.current.contains(e.target)||N(!1)},handleCheck:e=>{w.includes(e)?k(w.filter(n=>n!==e)):k([...w,e])},selectedLabels:w,setSelectedLabels:k})]})}b().extend(C()),b().extend(S());var ea=t(2424),ei=!0;function CanteenPage(e){let{foodPlaces:n,foodPlaceMenu:t,labels:a,queueData:i}=e,l=(0,c.Z)(),x=n.find(e=>e.canteen_id===t.canteen_id),p=(0,o.useMemo)(()=>({foodPlaceMenu:t,foodPlaceData:x,labels:a,queueData:i}),[t,x,a,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsxs)("title",{children:["TUMenu – ",x.name]}),(0,s.jsx)("meta",{name:"description",content:"Entdecke hier die t\xe4glichen Men\xfcs der ".concat(x.name,". Finde jetzt dein n\xe4chstes Mahlzeit!")})]}),(0,s.jsxs)(W.Provider,{value:p,children:[(0,s.jsx)(u.Z,{}),(0,s.jsxs)(d.Z,{sx:{display:"grid",gridTemplateColumns:{lg:"".concat(l.spacing(30)," calc(100% - ").concat(l.spacing(30),")"),xs:"100%"}},children:[(0,s.jsx)(ea.Z,{foodPlaces:n}),x&&(0,s.jsx)(LayoutContainer,{})]})]})]})}}},function(e){e.O(0,[970,492,155,774,888,179],function(){return e(e.s=9783)}),_N_E=e.O()}]);