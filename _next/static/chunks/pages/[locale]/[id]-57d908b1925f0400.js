(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{9783:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[id]",function(){return n(4150)}])},4150:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ei},default:function(){return CanteenPage}});var a,i,s=n(5893),l=n(9008),r=n.n(l),o=n(7294),c=n(2734),d=n(3738),x=n(787),u=n(7304),p=n(8396),h=n(1703),g=n(44),m=n(5861),f=n(9417),j=n(8162),b=n(7484),C=n.n(b),Z=n(5183),y=n.n(Z),D=n(7181),v=n.n(D),S=n(6886),E=n(9657);n(790),n(5054);var P=n(5046),w=n(6829),A=n(2359),k=n(718);function disableWeekends(e){return 0===e.get("day")||6===e.get("day")}function HeaderDatePicker(e){let{datePickerValue:t,datePickerSetValue:n,minDate:a,maxDate:i}=e,l=(0,c.Z)(),[r,d]=(0,o.useState)("en");return(0,o.useEffect)(()=>{let handleLanguageChange=e=>{let t=e.detail.locale;d(t),C().locale(t)};window.addEventListener("languageChange",handleLanguageChange);let e=localStorage.getItem("i18nextLng")||"en";return d(e),C().locale(e),()=>{window.removeEventListener("languageChange",handleLanguageChange)}},[]),(0,s.jsx)(A._,{dateAdapter:w.y,locale:r,children:(0,s.jsx)(k.M,{closeOnSelect:!0,minDate:a,maxDate:i,shouldDisableDate:disableWeekends,value:t,onChange:e=>{C()(e).isValid()&&n(e)},inputFormat:"de"===r?"DD.MM.YYYY":"DD/MM/YYYY",renderInput:e=>(0,s.jsx)(P.Z,{...e,sx:{backgroundColor:l.palette.secondary.main}})})})}var _=n(5152),L=n.n(_),I=n(8441),M=n(4386),T=n(8962),F=n(1496),R=n(9308);let N=["mon","tue","wed","thu","fri"];var G=n(2492),O=n(5813);function OpeningHours(e){let{foodPlaceData:t,open:n,setOpen:a}=e,{t:i}=(0,u.$G)("common"),l=(0,c.Z)();return(0,s.jsxs)(G.Z,{open:n,onClose:()=>a(!1),PaperProps:{style:{borderRadius:"12px"}},disableScrollLock:!0,children:[(0,s.jsx)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",backgroundColor:l.palette.primary.light,height:l.spacing(5),pt:l.spacing(.5),px:l.spacing(.5)},children:(0,s.jsx)(O.Z,{fontSize:"small",sx:{color:l.palette.primary.main,cursor:"pointer"},onClick:()=>a(!1)})}),(0,s.jsxs)(S.ZP,{container:!0,rowSpacing:2,flexDirection:"column",sx:{px:{xs:l.spacing(3),sm:l.spacing(5)},pb:l.spacing(5),width:{xs:l.spacing(37),sm:l.spacing(50)},textAlign:"center",backgroundColor:l.palette.primary.light,color:l.palette.primary.main},children:[(0,s.jsxs)(S.ZP,{item:!0,xs:12,sx:{borderBottom:"2px solid #fff"},children:[(0,s.jsx)(m.Z,{variant:"h4",children:t.name}),(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{mt:l.spacing(1)},children:i("openingHours")})]}),(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("monday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(t.open_hours.mon.start," - ").concat(t.open_hours.mon.end)})]})}),(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("tuesday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(t.open_hours.tue.start," - ").concat(t.open_hours.tue.end)})]})}),(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("wednesday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(t.open_hours.wed.start," - ").concat(t.open_hours.wed.end)})]})}),(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("thursday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(t.open_hours.thu.start," - ").concat(t.open_hours.thu.end)})]})}),(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(m.Z,{variant:"h6",children:i("friday")}),(0,s.jsx)(m.Z,{variant:"h6",children:"".concat(t.open_hours.fri.start," - ").concat(t.open_hours.fri.end)})]})})]})]})}let H=(0,o.createContext)({foodPlaceMenu:{},foodPlaceData:{},labels:[],queueData:{}}),Y=L()(()=>Promise.all([n.e(269),n.e(37)]).then(n.bind(n,7037)),{loadableGenerated:{webpack:()=>[7037]},ssr:!1});function FoodPlaceTitleContainer(e){let{datePickerValue:t}=e,{foodPlaceData:n,queueData:a}=(0,o.useContext)(H),[i,l]=(0,o.useState)(!1),[r,x]=(0,o.useState)(!1),p=(0,c.Z)(),{t:h}=(0,u.$G)("common"),g=(null==t?void 0:t.get("day"))===6||(null==t?void 0:t.get("day"))===0,j=(0,F.ZP)(I.Z)(()=>({["&.".concat(T.Z.colorPrimary)]:{backgroundColor:p.palette.secondary.main},["& .".concat(T.Z.bar)]:{borderRadius:5,backgroundColor:"light"===p.palette.mode?"#1a90ff":"#308fe8"}}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(S.ZP,{container:!0,rowSpacing:1,alignItems:"center",justifyContent:"center",flexDirection:"row",sx:{width:"100%",position:"relative"},children:[(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,s.jsx)(m.Z,{variant:"h4",sx:{fontWeight:600,textAlign:{xs:"center",sm:"right"}},children:n.name}),(0,s.jsx)(R.Z,{onClick:()=>x(!0),sx:{fontSize:p.spacing(6),color:p.palette.secondary.dark,cursor:"pointer"}})]})}),null!==a&&C()(C()().format("MM/DD/YYYY")).isSame(C()(null==t?void 0:t.format("MM/DD/YYYY")))?(0,s.jsx)(S.ZP,{item:!0,xs:12,children:(0,s.jsxs)(S.ZP,{container:!0,justifyContent:"center",alignItems:"center",spacing:1,flexDirection:"row",children:[(0,s.jsx)(S.ZP,{item:!0,sd:3,xs:5,children:(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:h("queueStatus")})}),(0,s.jsx)(S.ZP,{item:!0,xs:7,children:(0,s.jsx)(M.Z,{title:"".concat(h("people"),": ").concat(a.count,", ").concat(h("percent"),": ").concat(a.percent.toFixed(2)),arrow:!0,placement:"bottom-end",children:(0,s.jsx)(j,{variant:"determinate",value:a.percent,sx:{borderRadius:"12px",height:p.spacing(2.75),backgroundColor:p.palette.primary.light}})})})]})}):"",(0,s.jsx)(S.ZP,{item:!0,sm:9,xs:12,children:(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:p.spacing(1)},children:[(0,s.jsx)(m.Z,{variant:"subtitle1",sx:{textAlign:{xs:"center",sm:"right"}},children:g?h("intlDateTimeClosed",{val:t,formatParams:{val:{weekday:"long"}}}):"".concat(h("intlDateTimeOpen",{val:t,formatParams:{val:{weekday:"long"}}})," ").concat(n.open_hours["".concat(N[(null==t?void 0:t.get("day"))-1])].start," - ").concat(n.open_hours["".concat(N[(null==t?void 0:t.get("day"))-1])].end)}),(0,s.jsx)(f.Z,{onClick:()=>l(!0),variant:"contained",size:"medium",sx:{backgroundColor:p.palette.primary.light,color:p.palette.primary.main},children:h("openingHours")})]})})]}),(0,s.jsx)(OpeningHours,{foodPlaceData:n,open:i,setOpen:l}),(0,s.jsx)(Y,{open:r,setOpen:x,foodPlaces:[n],mapOpenCoordinates:[n.location.latitude,n.location.longitude],zoom:15})]})}function LayoutContainerHeader(e){let{datePickerValue:t,datePickerSetValue:n,minDate:a,maxDate:i}=e,{triggerSidebarMobile:l,setTriggerSidebarMobile:r}=(0,o.useContext)(E.Z),x=(0,c.Z)(),{t:p}=(0,u.$G)("common");return(0,s.jsxs)(S.ZP,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[(0,s.jsx)(S.ZP,{item:!0,lg:9,xs:12,children:(0,s.jsx)(FoodPlaceTitleContainer,{datePickerValue:t})}),(0,s.jsx)(S.ZP,{item:!0,lg:0,md:3,sm:4,xs:6,sx:{display:{lg:"none",xs:"block"}},children:(0,s.jsx)(d.Z,{sx:{display:"center",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(f.Z,{variant:"contained",onClick:()=>r(!l),size:"medium",sx:{backgroundColor:x.palette.primary.light,color:x.palette.primary.main},children:p("selectCanteen")})})}),(0,s.jsx)(S.ZP,{item:!0,lg:3,md:3,sm:4,xs:6,children:(0,s.jsx)(d.Z,{sx:{display:"center",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(HeaderDatePicker,{datePickerValue:t,datePickerSetValue:n,minDate:a,maxDate:i})})})]})}var W=n(5820),B=n(129);(a=i||(i={})).GLUTEN="#DDCC66",a.WHEAT="#F5DEB3",a.RYE="#d1ae7b",a.BARLEY="#F3E1B6",a.OAT="#d8c29d",a.SPELT="#A38C6B",a.HYBRIDS="#CFCDAA",a.SHELLFISH="#D9C2B8",a.CHICKEN_EGGS="#ffa631",a.FISH="#00ffb5",a.PEANUTS="#eeddc3",a.SOY="#d7c49e",a.MILK="#fdfff5",a.LACTOSE="#e9cca4",a.ALMONDS="#EADDCA",a.HAZELNUTS="#ae9f80",a.WALNUTS="#773f1a",a.CASHEWS="#d4b797",a.PECAN="#c1b094",a.PISTACHIOES="#93C572",a.MACADAMIA="#d5c6ac",a.CELERY="#9DCE5C",a.MUSTARD="#FFDB58",a.SESAME="#f9f0d5",a.SULPHURS="#E8DE35",a.SULFITES="#d9d9d9",a.LUPIN="#bea0c8",a.MOLLUSCS="#bcd3bd",a.SHELL_FRUITS="#dcc13a",a.BAVARIA="#0098D4",a.MSC="#005DAA",a.DYESTUFF="#ffc0cb",a.PRESERVATIVES="#b92962",a.ANTIOXIDANTS="#d9d9d1",a.FLAVOR_ENHANCER="#dffbfb",a.WAXED="#f3e3c2",a.PHOSPATES="#FFA500",a.SWEETENERS="#944a00",a.PHENYLALANINE="#664667",a.COCOA_CONTAINING_GREASE="#D2691E",a.GELATIN="#bd6e84",a.ALCOHOL="#d5101d",a.PORK="#FCD7DE",a.BEEF="#f9906f",a.VEAL="#a16868",a.WILD_MEAT="#c38a8a",a.LAMB="#d5c3af",a.GARLIC="#f2e9d2",a.POULTRY="#ddc252",a.CEREAL="#efd7ab",a.MEAT="#f9906f",a.VEGAN="#8ec298",a.VEGETARIAN="#22aa00";var U=n(7918);function Label(e){let{bgColor:t,text:n}=e,a=(0,c.Z)();return(0,s.jsx)(M.Z,{title:n,arrow:!0,children:(0,s.jsx)(U.Z,{label:n,sx:{backgroundColor:t,color:a.palette.secondary.light,fontWeight:"600",width:a.spacing(13),height:a.spacing(3)}})})}function DishCard(e){var t;let{meal:n,labels:a}=e,l=(0,c.Z)(),{i18n:r,t:o}=(0,u.$G)("common"),getLabelText=(e,t)=>{let n=a.find(t=>t.enum_name===e);return n?"de"===t?null==n?void 0:n.text.DE.toUpperCase():null==n?void 0:n.text.EN.toUpperCase():""};return(0,s.jsxs)(B.E.div,{variants:{present:{scale:1,opacity:1},exit:{scale:.8,opacity:0}},initial:"exit",animate:"present",exit:"exit",layout:!0,style:{display:"flex",flexDirection:"column",gap:l.spacing(2),backgroundColor:l.palette.primary.light,color:l.palette.primary.main,padding:l.spacing(2),borderRadius:"12px",width:l.spacing(45),height:l.spacing(45)},children:[(0,s.jsx)(m.Z,{variant:"h5",children:n.name}),(0,s.jsx)(S.ZP,{container:!0,alignItems:"center",justifyContent:"flex-start",spacing:1,children:n.labels.map((e,t)=>(0,s.jsx)(S.ZP,{item:!0,xs:4,children:(0,s.jsx)(Label,{bgColor:i[e],text:getLabelText(e,r.language)},e)},t.toLocaleString()))}),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:"auto"},children:[(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:o("price")}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:null==(t=n.prices.students)?o("unknown"):0!==t.base_price?0!==t.price_per_unit&&null!=t.price_per_unit?"".concat(t.base_price.toFixed(2),"€ + ").concat(t.price_per_unit.toFixed(2),"€/").concat(t.unit):"".concat(t.base_price.toFixed(2),"€"):null!==t.price_per_unit?"".concat(t.price_per_unit.toFixed(2),"€/").concat(t.unit):o("unknown")})]})]})}function CardGrid(e){let{dailyMeals:t,labels:n}=e,a=(0,c.Z)();return(0,s.jsx)(d.Z,{sx:{display:"flex",alignContent:"flex-start",justifyContent:{xs:"center",sd:"flex-start"},columnGap:a.spacing(4),rowGap:a.spacing(4),flexWrap:"wrap",my:a.spacing(4)},children:(0,s.jsx)(W.M,{initial:!1,children:t.map(e=>(0,s.jsx)(DishCard,{meal:e,labels:n},e.name))})})}var z=n(561);let V=(0,F.ZP)("div")(e=>{let{theme:t}=e;return{color:t.palette.primary.main,backgroundColor:t.palette.primary.light,borderRadius:"50%",width:t.spacing(4),height:t.spacing(4),textAlign:"center"}}),$=(0,F.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",gap:t.spacing(1),fontWeight:600,color:t.palette.primary.dark,backgroundColor:t.palette.primary.main,width:"fit-content"}});function GeneratedMenu(e){let{setFilteredValue:t,setShowMenu:n,meals:a,rerender:i}=e,{labels:l}=(0,o.useContext)(H),[r,x]=(0,o.useState)(),p=(0,c.Z)(),{t:h}=(0,u.$G)("common"),getDishSuggestions=e=>a.filter(t=>e.includes(t.dish_type)),getRandomDish=(e,t)=>{let n=Math.floor(e);return 0===n?null:t[Math.floor(Math.random()*(n-0)+0)]},generateMenu=()=>{t("Disable"),n(!0);let e=getDishSuggestions(["Studitopf","Beilagen"]),a=getDishSuggestions(["Grill","Vegetarisch","Fleisch","Wok","Pasta","Pizza"]),i=getDishSuggestions(["S\xfc\xdfspeise"]),s={firstDish:getRandomDish(e.length,e),secondDish:getRandomDish(a.length,a),thirdDish:getRandomDish(i.length,i)};x(s)};return((0,o.useEffect)(()=>{generateMenu()},[i]),r&&(r.firstDish||r.secondDish||r.thirdDish))?(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:{xs:"center",sd:"flex-start"},gap:p.spacing(4),my:p.spacing(4)},children:[r&&r.firstDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"1"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:h("firstDish")})]}),r&&(0,s.jsx)(DishCard,{meal:r.firstDish,labels:l})]}),r&&r.secondDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"2"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:h("secondDish")})]}),(0,s.jsx)(DishCard,{meal:r.secondDish,labels:l})]}),r&&r.thirdDish&&(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",rowGap:p.spacing(5),alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)($,{children:[(0,s.jsx)(V,{children:(0,s.jsx)(m.Z,{variant:"h6",children:"3"})}),(0,s.jsx)(m.Z,{variant:"h6",sx:{fontWeight:600},children:"Dessert"})]}),(0,s.jsx)(DishCard,{meal:r.thirdDish,labels:l})]})]}):(0,s.jsx)(z.Z,{translationString:"noMenu",imageSource:"/no_menu.svg"})}var X=n(8364),K=n(8831),q=n(6514),J=n(629),Q=n(3926),ee=n(4118),et=n(4178),en=n(5071);function FilterDropdown(e){let{open:t,anchorRef:n,handleClose:a,selectedLabels:i,setSelectedLabels:l,handleCheck:r}=e,{labels:d}=(0,o.useContext)(H),x=(0,c.Z)(),{t:p,i18n:h}=(0,u.$G)("common"),getLabelText=(e,t)=>"de"===t?e.text.DE.toUpperCase():e.text.EN.toUpperCase(),g=(0,o.useMemo)(()=>d.sort((e,t)=>"en"===h.language?e.text.EN.localeCompare(t.text.EN):e.text.DE.localeCompare(t.text.DE)),[h.language,d]);return(0,s.jsx)(K.Z,{className:"container-dropdown",sx:{maxHeight:x.spacing(50),overflowY:"scroll"},open:t,anchorEl:n.current,role:void 0,placement:"bottom-end",transition:!0,disablePortal:!1,modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!0,options:{boundariesElement:"scrollParent"}}],children:e=>{let{TransitionProps:n}=e;return(0,s.jsx)(q.Z,{...n,style:{transformOrigin:"left top"},children:(0,s.jsx)(J.Z,{sx:{marginTop:x.spacing(.1),backgroundColor:x.palette.secondary.main,borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"},children:(0,s.jsx)(Q.d,{onClickAway:a,children:(0,s.jsxs)(ee.Z,{autoFocusItem:t,id:"composition-menu","aria-labelledby":"composition-button",children:[(0,s.jsxs)(et.Z,{disableTouchRipple:!0,onClick:()=>l([]),sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:x.spacing(1)},children:[p("deleteFilters"),(0,s.jsx)(X.Z,{sx:{color:"#545454",padding:"0 !important"}})]}),g.map((e,t)=>(0,s.jsxs)(et.Z,{disableTouchRipple:!0,onClick:()=>r(e.enum_name),sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:x.spacing(1)},children:[getLabelText(e,h.language),(0,s.jsx)(en.Z,{checked:i.includes(e.enum_name),onChange:()=>r(e.enum_name),color:"primary",sx:{padding:"0 !important"}})]},t.toLocaleString()))]})})})})}})}function LayoutContainer(){let e=(0,c.Z)(),{t}=(0,u.$G)("common"),{foodPlaceMenu:n,labels:a}=(0,o.useContext)(H),[i,l]=(0,o.useState)(C()()),[r,x]=(0,o.useState)(C()()),[b,Z]=(0,o.useState)(C()()),[y,D]=(0,o.useState)([]),[v,S]=(0,o.useState)([]),[E,P]=(0,o.useState)([]),[w,A]=(0,o.useState)([]),[k,_]=(0,o.useState)("All"),[L,I]=(0,o.useState)(!1),[M,T]=(0,o.useState)(Math.random()),[F,R]=(0,o.useState)(!0),[N,G]=(0,o.useState)(!1),O=(0,o.useRef)(null),Y=0===v.length,W=(0,p.Z)("(min-width:28.125em)"),B=(0,o.useRef)(N);(0,o.useEffect)(()=>{!0===B.current&&!1===N&&O.current.focus(),B.current=N},[N]);let handleChange=(e,t)=>{if("All"!==t&&"Disable"!==t){let e=E.filter(e=>e.dish_type===t);D(e),I(!1)}else L&&"All"!==t?T(Math.random()):(D(E),I(!1));_(t)};return(0,o.useEffect)(()=>{if(0!==n.weeks.length){let e=n.weeks.filter(e=>e.year===(null==i?void 0:i.year())&&e.number===i.week()).map(e=>e.days.filter(e=>C()(e.date).isSame(i,"day"))).flat(1).map(e=>e.dishes.map(e=>e)).flat(1);S(e),0!==w.length&&(e=e.filter(e=>e.labels.every(e=>!w.includes(e)))),P(e),D(e);let t=Math.max(...n.weeks.map(e=>e.number)),a=Math.min(...n.weeks.map(e=>e.number)),s=C().max(n.weeks.filter(e=>e.number===t)[0].days.map(e=>C()(e.date))),l=C().min(n.weeks.filter(e=>e.number===a)[0].days.map(e=>C()(e.date)));Z(l),x(s)}else D([]),S([]);_("All"),I(!1)},[i,n]),(0,o.useEffect)(()=>{if(!F){let e=v.filter(e=>e.labels.every(e=>!w.includes(e)));P(e)}},[w]),(0,o.useEffect)(()=>{handleChange({},k)},[E]),(0,o.useEffect)(()=>{R(!1)},[]),(0,s.jsxs)(d.Z,{sx:{minHeight:"100%",px:e.spacing(4),py:e.spacing(2),backgroundColor:"".concat(e.palette.primary.main," !important"),zoom:1},children:[(0,s.jsx)(LayoutContainerHeader,{datePickerValue:i,datePickerSetValue:l,minDate:b,maxDate:r}),(0,s.jsx)(d.Z,{sx:{borderBottom:2,borderColor:"divider",display:"flex",justifyContent:"center"},children:(0,s.jsxs)(h.Z,{value:k,onChange:handleChange,sx:{mt:e.spacing(1)},variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[(0,s.jsx)(g.Z,{value:"All",label:t("all"),disabled:Y}),(0,s.jsx)(g.Z,{value:"Fleisch",label:t("meat"),disabled:Y}),(0,s.jsx)(g.Z,{value:"Vegetarisch",label:t("vegetarian"),disabled:Y}),(0,s.jsx)(g.Z,{value:"Wok",label:"Wok",disabled:Y}),(0,s.jsx)(g.Z,{value:"Grill",label:"Grill",disabled:Y}),(0,s.jsx)(g.Z,{value:"Pasta",label:"Pasta",disabled:Y}),(0,s.jsx)(g.Z,{value:"Pizza",label:"Pizza",disabled:Y}),(0,s.jsx)(g.Z,{value:"Studitopf",label:t("studyPot"),disabled:Y}),(0,s.jsx)(g.Z,{value:"Beilagen",label:t("sideDish"),disabled:Y}),(0,s.jsx)(g.Z,{value:"S\xfc\xdfspeise",label:t("dessert"),disabled:Y}),(0,s.jsx)(g.Z,{value:"Disable",label:"Disabled",sx:{display:"none",pointerEvents:"none"}})]})}),(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:{xs:"center",sd:"space-between"},gap:{xs:e.spacing(1),sd:"0"},mt:e.spacing(2)},children:[(0,s.jsx)(m.Z,{variant:"h5",sx:{fontWeight:600},children:t("cardGridHeading")}),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:e.spacing(2)},children:[(0,s.jsx)(f.Z,{variant:"contained",size:W?"medium":"small",disabled:Y,onClick:()=>{I(!0),T(Math.random())},sx:{backgroundColor:e.palette.primary.light,color:e.palette.primary.main},children:t("generateMenu")}),(0,s.jsx)(f.Z,{startIcon:(0,s.jsx)(j.Z,{}),variant:"contained",size:W?"medium":"small",disabled:Y,ref:O,"aria-controls":N?"composition-menu":void 0,"aria-expanded":N?"true":void 0,"aria-haspopup":"true",onClick:()=>{G(e=>!e)},sx:{backgroundColor:e.palette.primary.light,color:e.palette.primary.main},children:"".concat(t("labelFilter"),"(").concat(w.length,")")})]})]}),0===y.length||L?(0,s.jsx)(s.Fragment,{children:!L&&(0,s.jsx)(z.Z,{translationString:"notFound",imageSource:"/not_found.svg"})}):(0,s.jsx)(CardGrid,{dailyMeals:y,labels:a}),L&&(0,s.jsx)(GeneratedMenu,{setFilteredValue:_,setShowMenu:I,meals:E,rerender:M}),N&&(0,s.jsx)(FilterDropdown,{open:N,anchorRef:O,handleClose:e=>{O.current&&O.current.contains(e.target)||G(!1)},handleCheck:e=>{w.includes(e)?A(w.filter(t=>t!==e)):A([...w,e])},selectedLabels:w,setSelectedLabels:A})]})}C().extend(y()),C().extend(v());var ea=n(2424),ei=!0;function CanteenPage(e){let{foodPlaces:t,foodPlaceMenu:n,labels:a,queueData:i}=e,l=(0,c.Z)(),u=t.find(e=>e.canteen_id===n.canteen_id),p=(0,o.useMemo)(()=>({foodPlaceMenu:n,foodPlaceData:u,labels:a,queueData:i}),[n,u,a,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsxs)("title",{children:["TUMenu – ",u.name]}),(0,s.jsx)("meta",{name:"description",content:"Entdecke hier die t\xe4glichen Men\xfcs der ".concat(u.name,". Finde jetzt dein n\xe4chstes Mahlzeit!")})]}),(0,s.jsxs)(H.Provider,{value:p,children:[(0,s.jsx)(x.Z,{}),(0,s.jsxs)(d.Z,{sx:{display:"grid",gridTemplateColumns:{lg:"".concat(l.spacing(30)," calc(100% - ").concat(l.spacing(30),")"),xs:"100%"}},children:[(0,s.jsx)(ea.Z,{foodPlaces:t}),u&&(0,s.jsx)(LayoutContainer,{})]})]})]})}}},function(e){e.O(0,[970,492,155,925,774,888,179],function(){return e(e.s=9783)}),_N_E=e.O()}]);