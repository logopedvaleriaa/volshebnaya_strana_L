(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Pe=[{id:"home",name:"Дом потерянных игрушек",short:"Дом игрушек",color:"#c98d72",reward:"Лампа",purpose:"Осветит скрытую дорожку к мосту.",intro:"Ветер Путаницы сломал мост и закрутил волчок наоборот. Дорога домой закрыта! Соберём пять находок, чтобы всё починить. Начнём с дома игрушек: вернём вещи на свои места.",outro:"В доме снова порядок! Хозяева подарили лампу: она осветит путь к большому мосту. А на станции поезд ждёт помощи с маршрутом.",words:["лампа","мыло","пила","лук","салат","халат","лопата","пенал"],places:["На тумбу","К раковине","В мастерскую","В кухонную корзину","На стол","На крючок","К садовым инструментам","К школьным принадлежностям"],icons:["лампа","мыло","пила","лук","салат","халат","лопата","пенал"]},{id:"train",name:"Поезд без маршрута",short:"Железная дорога",color:"#8fa9b6",reward:"Флаг",purpose:"Поможет подать машинисту сигнал к отправлению.",intro:"Ветер перепутал маршрут поезда. Здесь три станции: начало, середина и конец слова. Назови груз и найди, где слышится Л, — так поезд узнает дорогу.",outro:"Поезд снова знает маршрут! Машинист подарил флаг: им подадим сигнал, когда можно будет ехать через мост. Он подсказал, что дорогу дальше знает робот из Домика игр.",words:["лодка","лошадь","кукла","белка","волк","пила","стул","стол"]},{id:"ttt",name:"Домик игр",short:"Домик игр",color:"#c4ad70",reward:"Стрелка",purpose:"Покажет путь к театру, а затем повернёт указатели у моста.",intro:"Робот приготовил для нас две игры! Сыграем с ним в крестики-нолики, а потом найдём пары картинок.",outro:"Робот благодарит за игру и дарит стрелку. Она указывает на театр: ветер перепутал там все тени. Поможем и его жителям!",words:["лампа","лук","лужа","лапа","мыло","пила","салат","халат","бокал"]},{id:"shadow",name:"Театр потерянных теней",short:"Театр теней",color:"#9e9ab7",reward:"Молоток",purpose:"Поможет починить мост и восстановить его опоры.",intro:"Стрелка привела нас в театр. Без своих теней игрушки не могут начать спектакль. Найди каждому предмету его силуэт.",outro:"Спектакль спасён! Мастер театра подарил молоток для ремонта. Он просит заглянуть в мастерскую: рядом кукла не может перейти реку.",words:["кукла","белка","волк","полка","иголка","палатка","мел","пенал"]},{id:"bridge",name:"Мастерская моста",short:"Мастерская моста",color:"#98ad83",reward:"Деталь-пазл",purpose:"Запустит механизм волшебного волчка.",intro:"Мы принесли молоток в мастерскую. Почини мост через реку: по нему кукла вернётся к своему домику, а наш поезд проедет к волчку.",outro:"Мост готов, кукла вернулась в свой домик! Мастер подарил деталь для волчка. Теперь можно проехать к волчку и остановить путаницу.",words:["стол","стул","пол","мел","пенал","бокал","футбол","гол"]}],xn=[{id:"smile",name:"Улыбка",art:"солнышко",child:"Улыбнись и покажи зубы.",adult:"Губы в улыбке, челюсти не сжимать."},{id:"spade",name:"Лопаточка",art:"лопата",child:"Положи широкий язычок на нижнюю губу. Пусть он немного отдохнёт.",adult:"Язык широкий и расслабленный; нижнюю губу не подворачивать."},{id:"swing",name:"Качели",art:"качели",child:"Открой рот. Подними язычок за верхние зубы, потом опусти за нижние.",adult:"Движения выполняет язык; челюсть по возможности остаётся неподвижной."},{id:"horse",name:"Лошадка",art:"лошадь",child:"Поцокай язычком, как лошадка.",adult:"Выполнять медленно, без активного движения нижней челюсти."},{id:"sail",name:"Парус",art:"лодка",child:"Открой рот. Подними широкий язычок за верхние зубы и немного подержи.",adult:"Кончик языка касается области за верхними резцами; рот остаётся открытым, язык не зажимается зубами."},{id:"brush",name:"Чистим верхние зубки",art:"щётка",child:"Проведи язычком по верхним зубам с внутренней стороны — вправо и влево.",adult:"Следить за подъёмом кончика языка и спокойным положением челюсти."}],lu=[["Включить лампу","Мост уже готов! Лампа осветит дорожку к нему.","Лампа"],["Установить стрелку","Повернём указатели к волчку, чтобы поезд не заблудился.","Стрелка"],["Поднять флаг","Поднимем флаг — это сигнал машинисту: путь свободен, можно ехать к волчку!","Флаг"],["Освободить крышку","Крышка механизма застряла. Легонько постучим игрушечным молотком, чтобы её открыть.","Молоток"],["Вставить деталь","Вставим светящуюся деталь в механизм волчка.","Деталь-пазл"],["Запустить волчок","Нажми большую кнопку! Волчок остановит путаницу и откроет нам дорогу домой.","Волчок"]],uu=["лампа","лодка","кукла","белка","стул","пенал"],hu={лодка:0,лошадь:0,кукла:1,белка:1,волк:1,пила:1,стул:2,стол:2},Ho={лампа:"lamp.png",мыло:"soap.png",пила:"saw.png",лук:"onion.png",салат:"salad.png",халат:"robe.png",лопата:"shovel.png",пенал:"pencil-case.png",лодка:"boat.png",лошадь:"horse.png",кукла:"doll.png",белка:"squirrel.png",волк:"wolf.png",стул:"chair.png",стол:"table.png",лужа:"puddle.png",лапа:"paw.png",бокал:"glass.png",полка:"shelf.png",иголка:"needle.png",палатка:"tent.png",мел:"chalk.png",пол:"floor.png",футбол:"football.png",гол:"goal.png",солнышко:"sun.png",качели:"swing.png",щётка:"brush.png",флаг:"flag.png",молоток:"hammer.png",стрелка:"arrow.png",пазл:"puzzle.png",волчок:"top.png",портрет:"portrait.png",поезд:"train.png",комната0:"room-0.png",комната1:"room-1.png",комната2:"room-2.png",комната3:"room-3.png",комната4:"room-4.png",комната5:"room-5.png",комната6:"room-6.png",комната7:"room-7.png"},ko={флаг:'<path d="M46 139V22"/><path fill="#c18b70" d="M49 23h82l-21 25 21 25H49z"/><path d="M30 140h35"/>',молоток:'<path fill="#ba926b" d="M73 52h16v90H73z"/><path fill="#96a7a4" d="M32 30h91v36H32z"/><path fill="#b4bfba" d="M35 34h18v28H35z"/>',стрелка:'<path fill="#a68a62" d="M73 69h13v73H73z"/><path fill="#95aa7d" d="M24 47h76V29l37 32-37 32V76H24z"/>',пазл:'<path fill="#e4c470" d="M37 43h30q-9-27 13-27t13 27h29v31q27-10 27 13t-27 13v28H92q10-27-13-27t-13 27H37V99q27 10 27-13T37 73z"/>',волчок:'<path fill="#c78c70" d="M29 70h102l-51 65z"/><ellipse fill="#e2c36e" cx="80" cy="70" rx="52" ry="17"/><path fill="#a88a61" d="M73 24h14v44H73z"/><path d="M43 76l37 42 37-42"/>',лампа:'<path fill="#d5ad60" d="M52 30h56l18 53H34z"/><path d="M80 84v43M55 130h50"/><ellipse fill="#efcf79" cx="80" cy="83" rx="45" ry="8"/>',мыло:'<rect fill="#cfabb6" x="29" y="59" width="102" height="57" rx="23"/><ellipse fill="#ecd2d6" cx="80" cy="72" rx="35" ry="12"/><circle fill="#a9c7cc" cx="112" cy="34" r="13"/><circle fill="#a9c7cc" cx="40" cy="40" r="8"/>',пила:'<path fill="#b2bdba" d="M20 100L111 49l16 25-12 14-10-3-3 12-12-3-4 12-12-3-4 12-12-3-4 12z"/><path fill="#bc8866" d="M110 46q28-22 39 1l-9 34-18-4-2-12 12-13-9-3-9 13z"/>',лук:'<path fill="#b68a53" d="M80 54c-62 21-58 79 0 79s62-58 0-79"/><path d="M80 56Q56 28 67 18M80 56Q91 22 102 17M80 58Q76 98 80 130M80 62Q37 100 65 128M80 62q44 38 16 66"/>',салат:'<path fill="#82a078" d="M35 85Q8 45 45 47q-5-38 31-19 32-28 39 12 42-3 22 44z"/><path fill="#a9bec1" d="M25 81h110q-5 50-55 50T25 81"/><path d="M52 58l15 26m31-38-10 37"/>',халат:'<path fill="#91afba" d="M55 31L25 49 12 91l23 8 14-30v66h65V69l13 30 23-8-15-42-30-18-25 17z"/><path d="M57 33l24 29 23-29M80 64v69M48 91h65M85 93l20 18"/>',лопата:'<path fill="#ad805b" d="M74 39h13v64H74z"/><path fill="#9baeb2" d="M55 94h51v25q-25 38-51 0z"/><path fill="#ad805b" d="M60 15h40v28H60z"/><path fill="#f2e7d1" d="M71 23h18v12H71z"/>',пенал:'<rect fill="#c88769" x="22" y="57" width="116" height="52" rx="15"/><path d="M29 73h103m-18-4v13M47 90h20"/><circle fill="#ddbd71" cx="119" cy="85" r="5"/>',лодка:'<path fill="#b88061" d="M18 100h126l-27 31H46z"/><path d="M77 21v79"/><path fill="#eee1ba" d="M72 25L24 91h48z"/><path fill="#94adb9" d="M84 35l45 56H84z"/><path d="M15 142q15-10 30 0t30 0 30 0 30 0"/>',лошадь:'<path fill="#b98c6d" d="M39 78h54l5-33 21-19 13 10 4 33-19 4-6 35-3 29H94l-3-27H62l-4 27H44l-2-34-17-9-9 18-8-5 15-34z"/><path fill="#6c6250" d="M98 46l4-20 12 3 2 15M40 78l-15-8-9 19"/><circle cx="122" cy="49" r="3"/>',кукла:'<circle fill="#e8bd99" cx="80" cy="40" r="23"/><path fill="#9e7e52" d="M56 32q18-34 46 0l-12-2-10-11-10 13z"/><path fill="#b68e9c" d="M65 65h30l21 48H44z"/><path d="M63 73L36 93m61-20 27 20M67 115v23m26-23v23"/><circle cx="72" cy="40" r="2"/><circle cx="88" cy="40" r="2"/><path d="M73 49q7 7 14 0"/>',белка:'<path fill="#b47c50" d="M91 103q50 12 47-34-2-34-25-35-29 2-10 28 26 20-3 20"/><ellipse fill="#c59468" cx="76" cy="102" rx="30" ry="31"/><path fill="#c59468" d="M51 70l-5-34 19 14 19-15 6 36z"/><circle fill="#ddbd71" cx="42" cy="98" r="13"/><path d="M58 91l-12 8m14 31H39"/><circle cx="62" cy="65" r="3"/>',волк:'<path fill="#929d9f" d="M35 77l55-2 12-38 14 17 19-3 14 19-30 13-6 48H98l-3-29H58l-9 29H34V99L13 84l2-13z"/><path fill="#929d9f" d="M101 47l-2-24 17 24"/><circle cx="122" cy="64" r="3"/>',стул:'<path fill="#b39064" d="M44 26h70v57H44zM37 84h88v15H37zM43 99h12v38H43zM108 99h12v38h-12z"/><path d="M55 41h47m-47 15h47"/>',стол:'<path fill="#b39064" d="M20 55h120v25H20zM32 80h14v58H32zM114 80h14v58h-14z"/><path fill="#ccb18a" d="M20 55l20-19h82l18 19z"/>',лужа:'<path fill="#8cbdc9" d="M20 89q-5-23 27-21 18-32 38-7 45-20 43 11 35 18 6 39-12 12-48 4-28 20-41 0-37 3-25-26"/><path d="M42 90q15-13 28-4m22 16 25-5"/>',лапа:'<ellipse fill="#b99472" cx="81" cy="101" rx="39" ry="28"/><ellipse fill="#b99472" cx="34" cy="62" rx="14" ry="20"/><ellipse fill="#b99472" cx="64" cy="42" rx="14" ry="20"/><ellipse fill="#b99472" cx="98" cy="42" rx="14" ry="20"/><ellipse fill="#b99472" cx="127" cy="64" rx="14" ry="20"/>',бокал:'<path fill="#adc6c4" d="M49 21h62v36Q111 89 80 89T49 57z"/><path d="M80 89v41m-24 2h48M52 52h56"/>',полка:'<path fill="#b18e67" d="M19 41h122v16H19zM19 104h122v16H19zM26 57h11v47H26zM123 57h11v47h-11z"/><path fill="#94a77e" d="M48 65h15v37H48z"/><path fill="#c18c76" d="M69 71h16v31H69z"/><path fill="#97adb7" d="M90 63h17v39H90z"/>',иголка:'<path fill="#b1babc" d="M42 141L92 27q10-22 22-14 12 8 0 29z"/><path fill="#f2e7d1" d="M98 28q7-13 9-7 4 3-3 15z"/><path d="M105 21q29-16 31 12t-6 43"/>',палатка:'<path fill="#9bac80" d="M15 129L77 26l67 103z"/><path fill="#cbb775" d="M77 26l17 103h50z"/><path fill="#606b60" d="M45 129l30-61 10 61z"/><path d="M8 137l10-18m129 18-4-18"/>',мел:'<path fill="#eee9dc" d="M41 119l49-91 27 15-49 91z"/><ellipse fill="#fff8e8" cx="103" cy="35" rx="15" ry="7" transform="rotate(28 103 35)"/><path d="M27 140h45"/>',пол:'<path fill="#c7a47a" d="M18 65l62-35 64 35v61H18z"/><path d="M18 85h126M18 105h126M52 65v20m50 0v20m-50 0v20M80 31v34"/>',футбол:'<circle fill="#dcb894" cx="64" cy="29" r="13"/><path fill="#8da6b7" d="M53 46h25l10 37H46z"/><path d="M52 52L31 72m47-18 20 10M54 84l-9 43m33-43 24 25 19-5"/><circle fill="#f1e9d6" cx="130" cy="120" r="17"/><path d="M123 111l13 1 5 12-11 7-10-9z"/>',гол:'<path fill="#f1e9d6" d="M25 36h108v95h-9V46H35v85H25z"/><path d="M38 56h83M38 73h83M38 90h83M38 107h83M51 48v76m19-76v76m19-76v76m19-76v76"/><circle fill="#eee4cf" cx="96" cy="109" r="20"/><path d="M88 99h14l5 13-12 9-11-10z"/><path d="M5 102h22M8 119h30"/>',солнышко:'<circle fill="#dbb664" cx="80" cy="78" r="40"/><path d="M80 15v12m0 103v13M17 78h12m102 0h12M35 33l9 9m72 72 9 9M35 123l9-9m72-72 9-9"/><circle cx="65" cy="68" r="3"/><circle cx="95" cy="68" r="3"/><path fill="#fff4db" d="M56 86h48q-24 30-48 0z"/>',качели:'<path d="M20 137L48 25h64l28 112M40 43h80M60 45v57m40-57v57"/><path fill="#bd8a6c" d="M46 102h68v14H46z"/>',щётка:'<path fill="#99b3b6" d="M30 128l62-73 15 13-62 73z"/><path fill="#ebdec0" d="M86 52l29-33 23 20-29 33z"/><path d="M97 50l19-21m-11 28 19-21"/>'},fu="./";function du(i){const t=`${fu}art/items/${i}`;return typeof document>"u"?t:new URL(t,document.baseURI).href}function be(i,{shadow:t=!1,cls:e=""}={}){if(Ho[i]){const n=du(Ho[i]),r=t?`<span class="item-sprite" style="--image:url('${n}')"></span>`:`<img class="item-image" src="${n}" alt="" draggable="false">`;return`<span class="art realistic-art ${e} ${t?"realistic-shadow":""}" role="img" aria-label="${t?"Силуэт":i}">${r}</span>`}return`<svg class="art ${e} ${t?"silhouette":""}" viewBox="0 0 160 160" role="img" aria-label="${t?"Силуэт":i}"><g stroke="#615c4d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${ko[i]||ko.кукла}</g></svg>`}function Li(i){const t=[...i];for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function il(i,t){return Li([i,...Li(t.filter(e=>e!==i)).slice(0,2)])}const pu=["лампа","флаг","стрелка","молоток","пазл"];function mu(i){return be("комната"+i,{cls:"room-art"})}const fs=[{id:"lola",name:"Лола",title:"Кукла Лола",description:"Косички, комбинезон и фонарик",image:"art/lola.png",portrait:"art/lola.png"},{id:"luka",name:"Лука",title:"Исследователь Лука",description:"Рюкзак, компас и фонарик",image:"art/luka.png",portrait:"art/luka.png"}],Vi=i=>fs.find(t=>t.id===i)||fs[0],rl=i=>`./${i}`;function gu(i){const t=Vi(i);return`<img class="art lola-art hero-art" src="${rl(t.portrait)}" alt="${t.title}" draggable="false">`}function sl(i){return`<div class="character-picker"><h3>Выбери героя</h3><div class="character-options" role="group" aria-label="Выбор персонажа">${fs.map(t=>`<button type="button" class="character-option ${t.id===i?"selected":""}" data-character="${t.id}" aria-pressed="${t.id===i}"><img src="${rl(t.image)}" alt="${t.title}" draggable="false"><strong>${t.name}</strong><small>${t.description}</small><span class="character-check" aria-hidden="true">${t.id===i?"✓":""}</span></button>`).join("")}</div></div>`}const al="toy-country-v1";function uo(){return{version:1,character:"lola",name:"",completed:[],finale:0,finished:!1,started:!1,settings:{labels:!0,repeats:1,sound:!0,effects:!0,exercises:xn.map(i=>i.id)}}}function _u(i){const t=uo();return!i||i.version!==1?t:{...t,...i,character:Vi(i.character).id,name:typeof i.name=="string"?i.name.slice(0,32):"",completed:[...new Set((i.completed||[]).filter(e=>Pe.some(n=>n.id===e)))],finale:Math.max(0,Math.min(6,Number(i.finale)||0)),settings:{...t.settings,...i.settings,repeats:[1,2,3].includes(i.settings?.repeats)?i.settings.repeats:1,exercises:Array.isArray(i.settings?.exercises)?i.settings.exercises.filter(e=>xn.some(n=>n.id===e)):t.settings.exercises}}}function vu(){try{return _u(JSON.parse(localStorage.getItem(al)))}catch{return uo()}}function xu(i){try{return localStorage.setItem(al,JSON.stringify(i)),!0}catch{return!1}}function Mu(i,t){return!Pe.some(e=>e.id===t)||i.completed.includes(t)?!1:(i.completed.push(t),!0)}function Di(i){return Pe.every(t=>i.completed.includes(t.id))}const ho="180",yu=0,Vo=1,Su=2,ol=1,cl=2,vn=3,zn=0,Le=1,nn=2,Un=0,Ri=1,Jn=2,Go=3,Wo=4,Eu=5,Kn=100,bu=101,Tu=102,wu=103,Au=104,Ru=200,Cu=201,Pu=202,Lu=203,ua=204,ha=205,Du=206,Iu=207,Uu=208,Nu=209,Fu=210,Ou=211,zu=212,Bu=213,Hu=214,fa=0,da=1,pa=2,Ii=3,ma=4,ga=5,_a=6,va=7,ll=0,ku=1,Vu=2,Nn=0,Gu=1,Wu=2,Xu=3,ul=4,qu=5,$u=6,Yu=7,hl=300,Ui=301,Ni=302,xa=303,Ma=304,ys=306,ur=1e3,ti=1001,ya=1002,je=1003,Zu=1004,Lr=1005,sn=1006,As=1007,ei=1008,cn=1009,fl=1010,dl=1011,hr=1012,fo=1013,ri=1014,Mn=1015,Er=1016,po=1017,mo=1018,fr=1020,pl=35902,ml=35899,gl=1021,_l=1022,Je=1023,dr=1026,pr=1027,vl=1028,go=1029,xl=1030,_o=1031,vo=1033,os=33776,cs=33777,ls=33778,us=33779,Sa=35840,Ea=35841,ba=35842,Ta=35843,wa=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,za=37817,Ba=37818,Ha=37819,ka=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,qa=36283,$a=36284,Ya=36285,Za=36286,Ju=3200,Ku=3201,Ml=0,ju=1,In="",Be="srgb",Fi="srgb-linear",ds="linear",ae="srgb",li=7680,Xo=519,Qu=512,th=513,eh=514,yl=515,nh=516,ih=517,rh=518,sh=519,Ja=35044,qo="300 es",an=2e3,ps=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,Ka=180/Math.PI;function En(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function ah(i,t){return(i%t+t)%t}function Cs(i,t,e){return(1-e)*i+e*t}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),A=Math.atan2(T,p*E);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}const x=o*E;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ps.copy(this).projectOnVector(t),this.sub(Ps)}reflect(t){return this.sub(Ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new U,$o=new br;class Yt{constructor(t,e,n,r,s,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],E=r[1],v=r[4],x=r[7],T=r[2],A=r[5],C=r[8];return s[0]=a*_+o*E+l*T,s[3]=a*m+o*v+l*A,s[6]=a*p+o*x+l*C,s[1]=c*_+u*E+h*T,s[4]=c*m+u*v+h*A,s[7]=c*p+u*x+h*C,s[2]=f*_+d*E+g*T,s[5]=f*m+d*v+g*A,s[8]=f*p+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Yt;function Sl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=ms("canvas");return i.style.display="block",i}const Yo={};function mr(i){i in Yo||(Yo[i]=!0,console.warn(i))}function ch(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Zo=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ae&&(r.r=bn(r.r),r.g=bn(r.g),r.b=bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const ie=lh();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class uh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=ms("canvas")),ui.width=t.width,ui.height=t.height;const r=ui.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ds(r[a].image)):s.push(Ds(r[a]))}else s=Ds(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;const Is=new U;class De extends Gi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ti,r=ti,s=sn,a=ei,o=Je,l=cn,c=De.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=En(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Is).x}get height(){return this.source.getSize(Is).y}get depth(){return this.source.getSize(Is).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=hl;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(d+1)/2,T=(p+1)/2,A=(u+f)/4,C=(h+_)/4,I=(g+m)/4;return v>x&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=C/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=I/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=C/s,r=I/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new De(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new xo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class El extends De{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends De{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(s,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Ir.subVectors(this.max,Zi),hi.subVectors(t.a,Zi),fi.subVectors(t.b,Zi),di.subVectors(t.c,Zi),An.subVectors(fi,hi),Rn.subVectors(di,fi),Vn.subVectors(hi,di);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Vn.z,Vn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Vn.z,0,-Vn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Vn.y,Vn.x,0];return!Us(e,hi,fi,di,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,hi,fi,di,Ir))?!1:(Ur.crossVectors(An,Rn),e=[Ur.x,Ur.y,Ur.z],Us(e,hi,fi,di,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const dn=[new U,new U,new U,new U,new U,new U,new U,new U],qe=new U,Dr=new Tr,hi=new U,fi=new U,di=new U,An=new U,Rn=new U,Vn=new U,Zi=new U,Ir=new U,Ur=new U,Gn=new U;function Us(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gn.fromArray(i,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mh=new Tr,Ji=new U,Ns=new U;class Ss{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ji,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Ns)),this.expandByPoint(Ji.copy(t.center).sub(Ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pn=new U,Fs=new U,Nr=new U,Cn=new U,Os=new U,Fr=new U,zs=new U;class Mo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fs.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Fs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=Cn.dot(this.direction),l=-Cn.dot(Nr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fs).addScaledVector(Nr,f),d}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,r,s){Os.subVectors(e,t),Fr.subVectors(n,t),zs.crossVectors(Os,Fr);let a=this.direction.dot(zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(Cn,Fr));if(l<0)return null;const c=o*this.direction.dot(Os.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(zs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,r,s,a,o,l,c,u,h,f,d,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,f,d,g,_,m)}set(t,e,n,r,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/pi.setFromMatrixColumn(t,0).length(),s=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,_h)}lookAt(t,e,n){const r=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Pn.crossVectors(n,Oe),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Pn.crossVectors(n,Oe)),Pn.normalize(),Or.crossVectors(Oe,Pn),r[0]=Pn.x,r[4]=Or.x,r[8]=Oe.x,r[1]=Pn.y,r[5]=Or.y,r[9]=Oe.y,r[2]=Pn.z,r[6]=Or.z,r[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],v=n[7],x=n[11],T=n[15],A=r[0],C=r[4],I=r[8],S=r[12],y=r[1],D=r[5],B=r[9],W=r[13],Q=r[2],Y=r[6],$=r[10],lt=r[14],X=r[3],N=r[7],k=r[11],j=r[15];return s[0]=a*A+o*y+l*Q+c*X,s[4]=a*C+o*D+l*Y+c*N,s[8]=a*I+o*B+l*$+c*k,s[12]=a*S+o*W+l*lt+c*j,s[1]=u*A+h*y+f*Q+d*X,s[5]=u*C+h*D+f*Y+d*N,s[9]=u*I+h*B+f*$+d*k,s[13]=u*S+h*W+f*lt+d*j,s[2]=g*A+_*y+m*Q+p*X,s[6]=g*C+_*D+m*Y+p*N,s[10]=g*I+_*B+m*$+p*k,s[14]=g*S+_*W+m*lt+p*j,s[3]=E*A+v*y+x*Q+T*X,s[7]=E*C+v*D+x*Y+T*N,s[11]=E*I+v*B+x*$+T*k,s[15]=E*S+v*W+x*lt+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+_*(+e*l*d-e*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+m*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-e*l*h+e*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,v=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,x=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,T=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=e*E+n*v+r*x+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*C,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*C,t[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*C,t[4]=v*C,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*C,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*p-e*l*p)*C,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*d+e*l*d)*C,t[8]=x*C,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*C,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*C,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*C,t[12]=T*C,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*C,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,E=l*c,v=l*u,x=l*h,T=n.x,A=n.y,C=n.z;return r[0]=(1-(_+p))*T,r[1]=(d+x)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(f+p))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+v)*C,r[9]=(m-E)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],$e.copy(this);const c=1/s,u=1/a,h=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=an,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===an)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ps)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=an,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===an)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ps)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new U,$e=new he,gh=new U(0,0,0),_h=new U(1,1,1),Pn=new U,Or=new U,Oe=new U,Ko=new he,jo=new br;class ln{constructor(t=0,e=0,n=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const Qo=new U,mi=new br,mn=new he,zr=new U,Ki=new U,xh=new U,Mh=new br,tc=new U(1,0,0),ec=new U(0,1,0),nc=new U(0,0,1),ic={type:"added"},yh={type:"removed"},gi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class xe extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new U,e=new ln,n=new br,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new Yt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Qo.copy(t).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ki,zr,this.up):mn.lookAt(zr,Ki,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(mn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new U(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new U,gn=new U,Hs=new U,_n=new U,_i=new U,vi=new U,rc=new U,ks=new U,Vs=new U,Gs=new U,Ws=new ce,Xs=new ce,qs=new ce;class Xe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ye.subVectors(t,e),r.cross(Ye);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ye.subVectors(r,e),gn.subVectors(n,e),Hs.subVectors(t,e);const a=Ye.dot(Ye),o=Ye.dot(gn),l=Ye.dot(Hs),c=gn.dot(gn),u=gn.dot(Hs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ws.setScalar(0),Xs.setScalar(0),qs.setScalar(0),Ws.fromBufferAttribute(t,e),Xs.fromBufferAttribute(t,n),qs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ws,s.x),a.addScaledVector(Xs,s.y),a.addScaledVector(qs,s.z),a}static isFrontFacing(t,e,n,r){return Ye.subVectors(n,e),gn.subVectors(t,e),Ye.cross(gn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ye.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,n),vi.subVectors(s,n),ks.subVectors(t,n);const l=_i.dot(ks),c=vi.dot(ks);if(l<=0&&c<=0)return e.copy(n);Vs.subVectors(t,r);const u=_i.dot(Vs),h=vi.dot(Vs);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(_i,a);Gs.subVectors(t,s);const d=_i.dot(Gs),g=vi.dot(Gs);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(vi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return rc.subVectors(s,r),o=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(rc,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Br={h:0,s:0,l:0};function $s(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=ah(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=$s(a,s,t+1/3),this.g=$s(a,s,t),this.b=$s(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ie.workingToColorSpace(we.copy(this),t),Math.round(jt(we.r*255,0,255))*65536+Math.round(jt(we.g*255,0,255))*256+Math.round(jt(we.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(we.copy(this),e);const n=we.r,r=we.g,s=we.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Be){ie.workingToColorSpace(we.copy(this),t);const e=we.r,n=we.g,r=we.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Br);const n=Cs(Ln.h,Br.h,e),r=Cs(Ln.s,Br.s,e),s=Cs(Ln.l,Br.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Kt;Kt.NAMES=bl;let Sh=0;class oi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Ri,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fn extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,Hr=new bt;let Eh=0;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Tl extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wl extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bh=0;const Ge=new he,Ys=new xe,xi=new U,ze=new Tr,ji=new Tr,Ee=new U;class Me extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sl(t)?wl:Tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ze.min,ji.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,ji.max),ze.expandByPoint(Ee)):(ze.expandByPoint(ji.min),ze.expandByPoint(ji.max))}ze.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),Ee.add(xi)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;const c=new U,u=new U,h=new U,f=new bt,d=new bt,g=new bt,_=new U,m=new U;function p(I,S,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[I].add(_),o[S].add(_),o[y].add(_),l[I].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,S=E.length;I<S;++I){const y=E[I],D=y.start,B=y.count;for(let W=D,Q=D+B;W<Q;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const v=new U,x=new U,T=new U,A=new U;function C(I){T.fromBufferAttribute(r,I),A.copy(T);const S=o[I];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(A,S);const D=x.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,D)}for(let I=0,S=E.length;I<S;++I){const y=E[I],D=y.start,B=y.count;for(let W=D,Q=D+B;W<Q;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new he,Wn=new Mo,kr=new Ss,ac=new U,Vr=new U,Gr=new U,Wr=new U,Zs=new U,Xr=new U,oc=new U,qr=new U;class ee extends xe{constructor(t=new Me,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Zs.fromBufferAttribute(h,t),a?Xr.addScaledVector(Zs,u):Xr.addScaledVector(Zs.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),Wn.copy(t.ray).recast(t.near),!(kr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(kr,ac)===null||Wn.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(sc.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,T=v;x<T;x+=3){const A=o.getX(x),C=o.getX(x+1),I=o.getX(x+2);r=$r(this,p,t,n,c,u,h,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);r=$r(this,a,t,n,c,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,T=v;x<T;x+=3){const A=x,C=x+1,I=x+2;r=$r(this,p,t,n,c,u,h,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,v=m+1,x=m+2;r=$r(this,a,t,n,c,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Th(i,t,e,n,r,s,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===zn,o),l===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:i}}function $r(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Vr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);const u=Th(i,t,e,n,Vr,Gr,Wr,oc);if(u){const h=new U;Xe.getBarycoord(oc,Vr,Gr,Wr,h),r&&(u.uv=Xe.getInterpolatedAttribute(r,o,l,c,h,new bt)),s&&(u.uv1=Xe.getInterpolatedAttribute(s,o,l,c,h,new bt)),a&&(u.normal=Xe.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Xe.getNormal(Vr,Gr,Wr,f.normal),u.face=f,u.barycoord=h}return u}class Wi extends Me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function g(_,m,p,E,v,x,T,A,C,I,S){const y=x/C,D=T/I,B=x/2,W=T/2,Q=A/2,Y=C+1,$=I+1;let lt=0,X=0;const N=new U;for(let k=0;k<$;k++){const j=k*D-W;for(let F=0;F<Y;F++){const vt=F*y-B;N[_]=vt*E,N[m]=j*v,N[p]=Q,c.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[p]=A>0?1:-1,u.push(N.x,N.y,N.z),h.push(F/C),h.push(1-k/I),lt+=1}}for(let k=0;k<I;k++)for(let j=0;j<C;j++){const F=f+j+Y*k,vt=f+j+Y*(k+1),q=f+(j+1)+Y*(k+1),ot=f+(j+1)+Y*k;l.push(F,vt,ot),l.push(vt,q,ot),X+=6}o.addGroup(d,X,S),d+=X,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const r in n)t[r]=n[r]}return t}function wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Al(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Ah={clone:Oi,merge:Ce};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new U,cc=new bt,lc=new bt;class He extends Rl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,lc),e.subVectors(lc,cc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,yi=1;class Ph extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new He(Mi,yi,t,e);r.layers=this.layers,this.add(r);const s=new He(Mi,yi,t,e);s.layers=this.layers,this.add(s);const a=new He(Mi,yi,t,e);a.layers=this.layers,this.add(a);const o=new He(Mi,yi,t,e);o.layers=this.layers,this.add(o);const l=new He(Mi,yi,t,e);l.layers=this.layers,this.add(l);const c=new He(Mi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cl extends De{constructor(t=[],e=Ui,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Cl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wi(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Un});s.uniforms.tEquirect.value=e;const a=new ee(r,s),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=sn),new Ph(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Jt extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class So{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new So(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ih extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new U;class gs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _s extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Si;const Qi=new U,Ei=new U,bi=new U,Ti=new bt,tr=new bt,Pl=new he,Yr=new U,er=new U,Zr=new U,uc=new bt,Ks=new bt,hc=new bt;class ja extends xe{constructor(t=new _s){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new gs(n,3,0,!1)),Si.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=Si,this.material=t,this.center=new bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Pl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-bi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Jr(Yr.set(-.5,-.5,0),bi,a,Ei,r,s),Jr(er.set(.5,-.5,0),bi,a,Ei,r,s),Jr(Zr.set(.5,.5,0),bi,a,Ei,r,s),uc.set(0,0),Ks.set(1,0),hc.set(1,1);let o=t.ray.intersectTriangle(Yr,er,Zr,!1,Qi);if(o===null&&(Jr(er.set(-.5,.5,0),bi,a,Ei,r,s),Ks.set(0,1),o=t.ray.intersectTriangle(Yr,Zr,er,!1,Qi),o===null))return;const l=t.ray.origin.distanceTo(Qi);l<t.near||l>t.far||e.push({distance:l,point:Qi.clone(),uv:Xe.getInterpolation(Qi,Yr,er,Zr,uc,Ks,hc,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,r,s){Ti.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(tr.x=s*Ti.x-r*Ti.y,tr.y=r*Ti.x+s*Ti.y):tr.copy(Ti),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Pl)}const js=new U,Nh=new U,Fh=new Yt;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=js.subVectors(n,e).cross(Nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fh.getNormalMatrix(t),r=this.coplanarPoint(js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Ss,Oh=new bt(.5,.5),Kr=new U;class Eo{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],v=s[13],x=s[14],T=s[15];if(r[0].setComponents(c-a,d-u,p-g,T-E).normalize(),r[1].setComponents(c+a,d+u,p+g,T+E).normalize(),r[2].setComponents(c+o,d+h,p+_,T+v).normalize(),r[3].setComponents(c-o,d-h,p-_,T-v).normalize(),n)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,d-f,p-m,T-x).normalize();else if(r[4].setComponents(c-l,d-f,p-m,T-x).normalize(),e===an)r[5].setComponents(c+l,d+f,p+m,T+x).normalize();else if(e===ps)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);const e=Oh.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Kr.x=r.normal.x>0?t.max.x:t.min.x,Kr.y=r.normal.y>0?t.max.y:t.min.y,Kr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qa extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fc=new he,to=new Mo,jr=new Ss,Qr=new U;class dc extends xe{constructor(t=new Me,e=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=s,t.ray.intersectsSphere(jr)===!1)return;fc.copy(r).invert(),to.copy(t.ray).applyMatrix4(fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Qr.fromBufferAttribute(h,m),pc(Qr,m,l,r,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Qr.fromBufferAttribute(h,g),pc(Qr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pc(i,t,e,n,r,s,a){const o=to.distanceSqToPoint(i);if(o<e){const l=new U;to.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ar extends De{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends De{constructor(t,e,n=ri,r,s,a,o=je,l=je,c,u=dr,h=1){if(u!==dr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dl extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zi extends Me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(d,2));function E(){const x=new U,T=new U;let A=0;const C=(e-t)/n;for(let I=0;I<=s;I++){const S=[],y=I/s,D=y*(e-t)+t;for(let B=0;B<=r;B++){const W=B/r,Q=W*l+o,Y=Math.sin(Q),$=Math.cos(Q);T.x=D*Y,T.y=-y*n+m,T.z=D*$,h.push(T.x,T.y,T.z),x.set(Y,C,$).normalize(),f.push(x.x,x.y,x.z),d.push(W,1-y),S.push(g++)}_.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const y=_[S][I],D=_[S+1][I],B=_[S+1][I+1],W=_[S][I+1];(t>0||S!==0)&&(u.push(y,D,W),A+=3),(e>0||S!==s-1)&&(u.push(D,B,W),A+=3)}c.addGroup(p,A,0),p+=A}function v(x){const T=g,A=new bt,C=new U;let I=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=r;B++){const Q=B/r*l+o,Y=Math.cos(Q),$=Math.sin(Q);C.x=S*$,C.y=m*y,C.z=S*Y,h.push(C.x,C.y,C.z),f.push(0,y,0),A.x=Y*.5+.5,A.y=$*.5*y+.5,d.push(A.x,A.y),g++}for(let B=0;B<r;B++){const W=T+B,Q=D+B;x===!0?u.push(Q,Q+1,W):u.push(Q+1,Q,W),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ni extends zi{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ni(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bo extends Me{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const v=new U,x=new U,T=new U;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],x),d(e[A+2],T),l(v,x,T,E)}function l(E,v,x,T){const A=T+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const S=E.clone().lerp(x,I/A),y=v.clone().lerp(x,I/A),D=A-I;for(let B=0;B<=D;B++)B===0&&I===A?C[I][B]=S:C[I][B]=S.clone().lerp(y,B/D)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const y=Math.floor(S/2);S%2===0?(f(C[I][y+1]),f(C[I+1][y]),f(C[I][y])):(f(C[I][y+1]),f(C[I+1][y+1]),f(C[I+1][y]))}}function c(E){const v=new U;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(E),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function u(){const E=new U;for(let v=0;v<s.length;v+=3){E.x=s[v+0],E.y=s[v+1],E.z=s[v+2];const x=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;a.push(x,1-T)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const v=a[E+0],x=a[E+2],T=a[E+4],A=Math.max(v,x,T),C=Math.min(v,x,T);A>.9&&C<.1&&(v<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,v){const x=E*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const E=new U,v=new U,x=new U,T=new U,A=new bt,C=new bt,I=new bt;for(let S=0,y=0;S<s.length;S+=9,y+=6){E.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),T.copy(E).add(v).add(x).divideScalar(3);const D=m(T);_(A,y+0,E,D),_(C,y+2,v,D),_(I,y+4,x,D)}}function _(E,v,x,T){T<0&&E.x===1&&(a[v]=E.x-1),x.x===0&&x.z===0&&(a[v]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.vertices,t.indices,t.radius,t.details)}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new bt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,r=[],s=[],a=[],o=new U,l=new he;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(jt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class To extends hn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new bt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zh extends To{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wo(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ts=new U,Qs=new wo,ta=new wo,ea=new wo;class Il extends hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(ts.subVectors(r[0],r[1]).add(r[0]),c=ts);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ts.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qs.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),ta.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),ea.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Qs.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ta.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ea.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Qs.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Bh(i,t){const e=1-i;return e*e*t}function Hh(i,t){return 2*(1-i)*i*t}function kh(i,t){return i*i*t}function or(i,t,e,n){return Bh(i,t)+Hh(i,e)+kh(i,n)}function Vh(i,t){const e=1-i;return e*e*e*t}function Gh(i,t){const e=1-i;return 3*e*e*i*t}function Wh(i,t){return 3*(1-i)*i*i*t}function Xh(i,t){return i*i*i*t}function cr(i,t,e,n,r){return Vh(i,t)+Gh(i,e)+Wh(i,n)+Xh(i,r)}class Ul extends hn{constructor(t=new bt,e=new bt,n=new bt,r=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,r.x,s.x,a.x,o.x),cr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends hn{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,r.x,s.x,a.x,o.x),cr(t,r.y,s.y,a.y,o.y),cr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nl extends hn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends hn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fl extends hn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ol extends hn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y),or(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(mc(o,l.x,c.x,u.x,h.x),mc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new bt().fromArray(r))}return this}}var vs=Object.freeze({__proto__:null,ArcCurve:zh,CatmullRomCurve3:Il,CubicBezierCurve:Ul,CubicBezierCurve3:qh,EllipseCurve:To,LineCurve:Nl,LineCurve3:$h,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:Ol,SplineCurve:zl});class Yh extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new vs[r.type]().fromJSON(r))}return this}}class gc extends Yh{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nl(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Fl(this.currentPoint.clone(),new bt(t,e),new bt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ul(this.currentPoint.clone(),new bt(t,e),new bt(n,r),new bt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new To(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gr extends gc{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new gc().fromJSON(r))}return this}}function Zh(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Bl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=tf(i,t,s,e)),i.length>80*e){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return _r(s,a,e,o,l,c,0),a}function Bl(i,t,e,n,r){let s;if(r===ff(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=_c(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=_c(a/n|0,i[a],i[a+1],s);return s&&Bi(s,s.next)&&(xr(s),s=s.next),s}function ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bi(e,e.next)||ge(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(i,t,e,n,r,s,a){if(!i)return;!a&&s&&af(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Kh(i,n,r,s):Jh(i)){t.push(l.i,i.i,c.i),xr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=jh(ai(i),t),_r(i,t,e,n,r,s,2)):a===2&&Qh(i,t,e,n,r,s):_r(ai(i),t,e,n,r,s,1);break}}}function Jh(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(r,s,a),h=Math.min(o,l,c),f=Math.max(r,s,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&rr(r,o,s,l,a,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kh(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ge(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,d=Math.min(o,l,c),g=Math.min(u,h,f),_=Math.max(o,l,c),m=Math.max(u,h,f),p=eo(d,g,t,e,n),E=eo(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=E;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&rr(o,u,l,h,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&rr(o,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&rr(o,u,l,h,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&rr(o,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jh(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Bi(n,r)&&kl(n,e,e.next,r)&&vr(n,r)&&vr(r,n)&&(t.push(n.i,e.i,r.i),xr(e),xr(e.next),e=i=r),e=e.next}while(e!==i);return ai(e)}function Qh(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lf(a,o)){let l=Vl(a,o);a=ai(a,a.next),l=ai(l,l.next),_r(a,t,e,n,r,s,0),_r(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function tf(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=Bl(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(cf(c))}r.sort(ef);for(let s=0;s<r.length;s++)e=nf(r[s],e);return e}function ef(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function nf(i,t){const e=rf(i,t);if(!e)return t;const n=Vl(e,i);return ai(n,n.next),ai(e,e.next)}function rf(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Bi(i,e))return e;do{if(Bi(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hl(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);vr(e,i)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&sf(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function sf(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function af(i,t,e,n){let r=i;do r.z===0&&(r.z=eo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,of(r)}function of(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function eo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hl(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function rr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Hl(i,t,e,n,r,s,a,o)}function lf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uf(i,t)&&(vr(i,t)&&vr(t,i)&&hf(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Bi(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bi(i,t){return i.x===t.x&&i.y===t.y}function kl(i,t,e,n){const r=ns(ge(i,t,e)),s=ns(ge(i,t,n)),a=ns(ge(e,n,i)),o=ns(ge(e,n,t));return!!(r!==s&&a!==o||r===0&&es(i,e,t)||s===0&&es(i,n,t)||a===0&&es(e,i,n)||o===0&&es(e,t,n))}function es(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ns(i){return i>0?1:i<0?-1:0}function uf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function hf(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vl(i,t){const e=no(i.i,i.x,i.y),n=no(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function _c(i,t,e,n){const r=no(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function no(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ff(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class df{static triangulate(t,e,n=2){return Zh(t,e,n)}}class yn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];vc(t),xc(n,t);let a=t.length;e.forEach(vc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,xc(n,e[l]);const o=df.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function vc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xs extends Me{constructor(t=new gr([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:pf;let v,x=!1,T,A,C,I;p&&(v=p.getSpacedPoints(u),x=!0,f=!1,T=p.computeFrenetFrames(u,!1),A=new U,C=new U,I=new U),f||(m=0,d=0,g=0,_=0);const S=o.extractPoints(c);let y=S.shape;const D=S.holes;if(!yn.isClockWise(y)){y=y.reverse();for(let dt=0,ht=D.length;dt<ht;dt++){const ct=D[dt];yn.isClockWise(ct)&&(D[dt]=ct.reverse())}}function W(dt){const ct=10000000000000001e-36;let st=dt[0];for(let wt=1;wt<=dt.length;wt++){const yt=wt%dt.length,At=dt[yt],$t=At.x-st.x,Ht=At.y-st.y,w=$t*$t+Ht*Ht,M=Math.max(Math.abs(At.x),Math.abs(At.y),Math.abs(st.x),Math.abs(st.y)),V=ct*M*M;if(w<=V){dt.splice(yt,1),wt--;continue}st=At}}W(y),D.forEach(W);const Q=D.length,Y=y;for(let dt=0;dt<Q;dt++){const ht=D[dt];y=y.concat(ht)}function $(dt,ht,ct){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(ht,ct)}const lt=y.length;function X(dt,ht,ct){let st,wt,yt;const At=dt.x-ht.x,$t=dt.y-ht.y,Ht=ct.x-dt.x,w=ct.y-dt.y,M=At*At+$t*$t,V=At*w-$t*Ht;if(Math.abs(V)>Number.EPSILON){const tt=Math.sqrt(M),mt=Math.sqrt(Ht*Ht+w*w),nt=ht.x-$t/tt,Nt=ht.y+At/tt,Tt=ct.x-w/mt,Ot=ct.y+Ht/mt,It=((Tt-nt)*w-(Ot-Nt)*Ht)/(At*w-$t*Ht);st=nt+At*It-dt.x,wt=Nt+$t*It-dt.y;const R=st*st+wt*wt;if(R<=2)return new bt(st,wt);yt=Math.sqrt(R/2)}else{let tt=!1;At>Number.EPSILON?Ht>Number.EPSILON&&(tt=!0):At<-Number.EPSILON?Ht<-Number.EPSILON&&(tt=!0):Math.sign($t)===Math.sign(w)&&(tt=!0),tt?(st=-$t,wt=At,yt=Math.sqrt(M)):(st=At,wt=$t,yt=Math.sqrt(M/2))}return new bt(st/yt,wt/yt)}const N=[];for(let dt=0,ht=Y.length,ct=ht-1,st=dt+1;dt<ht;dt++,ct++,st++)ct===ht&&(ct=0),st===ht&&(st=0),N[dt]=X(Y[dt],Y[ct],Y[st]);const k=[];let j,F=N.concat();for(let dt=0,ht=Q;dt<ht;dt++){const ct=D[dt];j=[];for(let st=0,wt=ct.length,yt=wt-1,At=st+1;st<wt;st++,yt++,At++)yt===wt&&(yt=0),At===wt&&(At=0),j[st]=X(ct[st],ct[yt],ct[At]);k.push(j),F=F.concat(j)}let vt;if(m===0)vt=yn.triangulateShape(Y,D);else{const dt=[],ht=[];for(let ct=0;ct<m;ct++){const st=ct/m,wt=d*Math.cos(st*Math.PI/2),yt=g*Math.sin(st*Math.PI/2)+_;for(let At=0,$t=Y.length;At<$t;At++){const Ht=$(Y[At],N[At],yt);Mt(Ht.x,Ht.y,-wt),st===0&&dt.push(Ht)}for(let At=0,$t=Q;At<$t;At++){const Ht=D[At];j=k[At];const w=[];for(let M=0,V=Ht.length;M<V;M++){const tt=$(Ht[M],j[M],yt);Mt(tt.x,tt.y,-wt),st===0&&w.push(tt)}st===0&&ht.push(w)}}vt=yn.triangulateShape(dt,ht)}const q=vt.length,ot=g+_;for(let dt=0;dt<lt;dt++){const ht=f?$(y[dt],F[dt],ot):y[dt];x?(C.copy(T.normals[0]).multiplyScalar(ht.x),A.copy(T.binormals[0]).multiplyScalar(ht.y),I.copy(v[0]).add(C).add(A),Mt(I.x,I.y,I.z)):Mt(ht.x,ht.y,0)}for(let dt=1;dt<=u;dt++)for(let ht=0;ht<lt;ht++){const ct=f?$(y[ht],F[ht],ot):y[ht];x?(C.copy(T.normals[dt]).multiplyScalar(ct.x),A.copy(T.binormals[dt]).multiplyScalar(ct.y),I.copy(v[dt]).add(C).add(A),Mt(I.x,I.y,I.z)):Mt(ct.x,ct.y,h/u*dt)}for(let dt=m-1;dt>=0;dt--){const ht=dt/m,ct=d*Math.cos(ht*Math.PI/2),st=g*Math.sin(ht*Math.PI/2)+_;for(let wt=0,yt=Y.length;wt<yt;wt++){const At=$(Y[wt],N[wt],st);Mt(At.x,At.y,h+ct)}for(let wt=0,yt=D.length;wt<yt;wt++){const At=D[wt];j=k[wt];for(let $t=0,Ht=At.length;$t<Ht;$t++){const w=$(At[$t],j[$t],st);x?Mt(w.x,w.y+v[u-1].y,v[u-1].x+ct):Mt(w.x,w.y,h+ct)}}}G(),Z();function G(){const dt=r.length/3;if(f){let ht=0,ct=lt*ht;for(let st=0;st<q;st++){const wt=vt[st];Et(wt[2]+ct,wt[1]+ct,wt[0]+ct)}ht=u+m*2,ct=lt*ht;for(let st=0;st<q;st++){const wt=vt[st];Et(wt[0]+ct,wt[1]+ct,wt[2]+ct)}}else{for(let ht=0;ht<q;ht++){const ct=vt[ht];Et(ct[2],ct[1],ct[0])}for(let ht=0;ht<q;ht++){const ct=vt[ht];Et(ct[0]+lt*u,ct[1]+lt*u,ct[2]+lt*u)}}n.addGroup(dt,r.length/3-dt,0)}function Z(){const dt=r.length/3;let ht=0;et(Y,ht),ht+=Y.length;for(let ct=0,st=D.length;ct<st;ct++){const wt=D[ct];et(wt,ht),ht+=wt.length}n.addGroup(dt,r.length/3-dt,1)}function et(dt,ht){let ct=dt.length;for(;--ct>=0;){const st=ct;let wt=ct-1;wt<0&&(wt=dt.length-1);for(let yt=0,At=u+m*2;yt<At;yt++){const $t=lt*yt,Ht=lt*(yt+1),w=ht+st+$t,M=ht+wt+$t,V=ht+wt+Ht,tt=ht+st+Ht;Ft(w,M,V,tt)}}}function Mt(dt,ht,ct){l.push(dt),l.push(ht),l.push(ct)}function Et(dt,ht,ct){Vt(dt),Vt(ht),Vt(ct);const st=r.length/3,wt=E.generateTopUV(n,r,st-3,st-2,st-1);L(wt[0]),L(wt[1]),L(wt[2])}function Ft(dt,ht,ct,st){Vt(dt),Vt(ht),Vt(st),Vt(ht),Vt(ct),Vt(st);const wt=r.length/3,yt=E.generateSideWallUV(n,r,wt-6,wt-3,wt-2,wt-1);L(yt[0]),L(yt[1]),L(yt[3]),L(yt[1]),L(yt[2]),L(yt[3])}function Vt(dt){r.push(l[dt*3+0]),r.push(l[dt*3+1]),r.push(l[dt*3+2])}function L(dt){s.push(dt.x),s.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mf(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new vs[r.type]().fromJSON(r)),new xs(n,t.options)}}const pf={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new bt(s,a),new bt(o,l),new bt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new bt(a,1-l),new bt(c,1-h),new bt(f,1-g),new bt(_,1-p)]:[new bt(o,1-l),new bt(u,1-h),new bt(d,1-g),new bt(m,1-p)]}};function mf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ao extends bo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class Xi extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-E,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const v=E+c*p,x=E+c*(p+1),T=E+1+c*(p+1),A=E+1+c*p;d.push(v,x,A),d.push(x,T,A)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ro extends Me{constructor(t=new gr([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(s,3)),this.setAttribute("uv",new le(a,2));function c(u){const h=r.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;yn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];yn.isClockWise(E)===!0&&(g[m]=E.reverse())}const _=yn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];r.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=_.length;m<p;m++){const E=_[m],v=E[0]+h,x=E[1]+h,T=E[2]+h;n.push(v,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gf(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Ro(n,t.curveSegments)}}function gf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class qi extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],v=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const A=T/e;h.x=-t*Math.cos(r+A*s)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(r+A*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-v),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const v=u[p][E+1],x=u[p][E],T=u[p+1][E],A=u[p+1][E+1];(p!==0||a>0)&&d.push(v,x,A),(p!==n-1||l<Math.PI)&&d.push(x,T,A)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class On extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new U,h=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,E=(r+1)*d+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Co extends Me{constructor(t=new Ol(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new bt;let u=new U;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(d,2));function _(){for(let v=0;v<e;v++)m(v);m(s===!1?e:0),E(),p()}function m(v){u=t.getPointAt(v/e,u);const x=a.normals[v],T=a.binormals[v];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,I=Math.sin(C),S=-Math.cos(C);l.x=S*x.x+I*T.x,l.y=S*x.y+I*T.y,l.z=S*x.z+I*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=r;x++){const T=(r+1)*(v-1)+(x-1),A=(r+1)*v+(x-1),C=(r+1)*v+x,I=(r+1)*(v-1)+x;g.push(T,A,I),g.push(A,C,I)}}function E(){for(let v=0;v<=e;v++)for(let x=0;x<=r;x++)c.x=v/e,c.y=x/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Co(new vs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ze extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vf extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Po extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xf extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new he,Mc=new U,yc=new U;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sc=new he,nr=new U,ia=new U;class Mf extends Gl{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),r.makeTranslation(-nr.x,-nr.y,-nr.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,n.coordinateSystem,n.reversedDepth)}}class Ec extends Po{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Mf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wl extends Rl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yf extends Gl{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new yf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ef extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const bc=new he;class bf{constructor(t,e,n=0,r=1/0){this.ray=new Mo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bc),this}intersectObject(t,e=!0,n=[]){return io(t,this,n,e),n.sort(Tc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)io(t[r],this,n,e);return n.sort(Tc),n}}function Tc(i,t){return i.distance-t.distance}function io(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)io(s[a],t,e,!0)}}function wc(i,t,e,n){const r=Tf(n);switch(e){case gl:return i*t;case vl:return i*t/r.components*r.byteLength;case go:return i*t/r.components*r.byteLength;case xl:return i*t*2/r.components*r.byteLength;case _o:return i*t*2/r.components*r.byteLength;case _l:return i*t*3/r.components*r.byteLength;case Je:return i*t*4/r.components*r.byteLength;case vo:return i*t*4/r.components*r.byteLength;case os:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ls:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tf(i){switch(i){case cn:case fl:return{byteLength:1,components:1};case hr:case dl:case Er:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case ri:case fo:case Mn:return{byteLength:4,components:1};case pl:case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function Xl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function wf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:Df,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:zf,bsdfs:Bf,iridescence_fragment:Hf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:$f,color_pars_vertex:Yf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:rd,envmap_fragment:sd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:cd,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:ud,fog_pars_vertex:hd,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:vd,lights_toon_fragment:Md,lights_toon_pars_fragment:yd,lights_phong_fragment:Sd,lights_phong_pars_fragment:Ed,lights_physical_fragment:bd,lights_physical_pars_fragment:Td,lights_fragment_begin:wd,lights_fragment_maps:Ad,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Id,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:zd,morphinstance_vertex:Bd,morphcolor_vertex:Hd,morphnormal_vertex:kd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:$d,normal_vertex:Yd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:rp,dithering_pars_fragment:sp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:lp,shadowmap_vertex:up,shadowmask_pars_fragment:hp,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:xp,transmission_fragment:Mp,transmission_pars_fragment:yp,uv_pars_fragment:Sp,uv_pars_vertex:Ep,uv_vertex:bp,worldpos_vertex:Tp,background_vert:wp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Lp,depth_vert:Dp,depth_frag:Ip,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:zp,linedashed_frag:Bp,meshbasic_vert:Hp,meshbasic_frag:kp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:$p,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Kp,meshtoon_vert:jp,meshtoon_frag:Qp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:rm,sprite_frag:sm},Ct={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},en={basic:{uniforms:Ce([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ce([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ce([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ce([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ce([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ce([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ce([Ct.points,Ct.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ce([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ce([Ct.common,Ct.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ce([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ce([Ct.sprite,Ct.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ce([Ct.common,Ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ce([Ct.lights,Ct.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const is={r:0,b:0,g:0},qn=new ln,am=new he;function om(i,t,e,n,r,s,a){const o=new Kt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?p(o,l):T&&T.isColor&&(p(T,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===ys)?(u===void 0&&(u=new ee(new Wi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Oi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(qn)),u.material.toneMapped=ie.getTransfer(T.colorSpace)!==ae,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ee(new Xi(2,2),new wn({name:"BackgroundMaterial",uniforms:Oi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ie.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(is,Al(i)),n.buffers.color.setClear(is.r,is.g,is.b,x,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m,dispose:E}}function cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(y,D,B,W,Q){let Y=!1;const $=h(W,B,D);s!==$&&(s=$,c(s.object)),Y=d(y,W,B,Q),Y&&g(y,W,B,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(y,D,B,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,B){const W=B.wireframe===!0;let Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let Y=Q[D.id];Y===void 0&&(Y={},Q[D.id]=Y);let $=Y[W];return $===void 0&&($=f(l()),Y[W]=$),$}function f(y){const D=[],B=[],W=[];for(let Q=0;Q<e;Q++)D[Q]=0,B[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:W,object:y,attributes:{},index:null}}function d(y,D,B,W){const Q=s.attributes,Y=D.attributes;let $=0;const lt=B.getAttributes();for(const X in lt)if(lt[X].location>=0){const k=Q[X];let j=Y[X];if(j===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),k===void 0||k.attribute!==j||j&&k.data!==j.data)return!0;$++}return s.attributesNum!==$||s.index!==W}function g(y,D,B,W){const Q={},Y=D.attributes;let $=0;const lt=B.getAttributes();for(const X in lt)if(lt[X].location>=0){let k=Y[X];k===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(k=y.instanceColor));const j={};j.attribute=k,k&&k.data&&(j.data=k.data),Q[X]=j,$++}s.attributes=Q,s.attributesNum=$,s.index=W}function _(){const y=s.newAttributes;for(let D=0,B=y.length;D<B;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const B=s.newAttributes,W=s.enabledAttributes,Q=s.attributeDivisors;B[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),Q[y]!==D&&(i.vertexAttribDivisor(y,D),Q[y]=D)}function E(){const y=s.newAttributes,D=s.enabledAttributes;for(let B=0,W=D.length;B<W;B++)D[B]!==y[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function v(y,D,B,W,Q,Y,$){$===!0?i.vertexAttribIPointer(y,D,B,Q,Y):i.vertexAttribPointer(y,D,B,W,Q,Y)}function x(y,D,B,W){_();const Q=W.attributes,Y=B.getAttributes(),$=D.defaultAttributeValues;for(const lt in Y){const X=Y[lt];if(X.location>=0){let N=Q[lt];if(N===void 0&&(lt==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),lt==="instanceColor"&&y.instanceColor&&(N=y.instanceColor)),N!==void 0){const k=N.normalized,j=N.itemSize,F=t.get(N);if(F===void 0)continue;const vt=F.buffer,q=F.type,ot=F.bytesPerElement,G=q===i.INT||q===i.UNSIGNED_INT||N.gpuType===fo;if(N.isInterleavedBufferAttribute){const Z=N.data,et=Z.stride,Mt=N.offset;if(Z.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)p(X.location+Et,Z.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Et=0;Et<X.locationSize;Et++)v(X.location+Et,j/X.locationSize,q,k,et*ot,(Mt+j/X.locationSize*Et)*ot,G)}else{if(N.isInstancedBufferAttribute){for(let Z=0;Z<X.locationSize;Z++)p(X.location+Z,N.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Z=0;Z<X.locationSize;Z++)m(X.location+Z);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Z=0;Z<X.locationSize;Z++)v(X.location+Z,j/X.locationSize,q,k,j*ot,j/X.locationSize*Z*ot,G)}}else if($!==void 0){const k=$[lt];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(X.location,k);break;case 3:i.vertexAttrib3fv(X.location,k);break;case 4:i.vertexAttrib4fv(X.location,k);break;default:i.vertexAttrib1fv(X.location,k)}}}}E()}function T(){I();for(const y in n){const D=n[y];for(const B in D){const W=D[B];for(const Q in W)u(W[Q].object),delete W[Q];delete D[B]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const B in D){const W=D[B];for(const Q in W)u(W[Q].object),delete W[Q];delete D[B]}delete n[y.id]}function C(y){for(const D in n){const B=n[D];if(B[y.id]===void 0)continue;const W=B[y.id];for(const Q in W)u(W[Q].object),delete W[Q];delete B[y.id]}}function I(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function lm(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function um(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Je&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function hm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Yn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,v=E*4;let x=p.clippingState||null;l.value=x,x=u(g,f,v,d);for(let T=0;T!==v;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fm(i){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=Ui:o===Ma&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===Ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ai=4,Ac=[.125,.215,.35,.446,.526,.582],jn=20,ra=new Wl,Rc=new Kt;let sa=null,aa=0,oa=0,ca=!1;const Zn=(1+Math.sqrt(5))/2,wi=1/Zn,Cc=[new U(-Zn,wi,0),new U(Zn,wi,0),new U(-wi,0,Zn),new U(wi,0,Zn),new U(0,Zn,-wi),new U(0,Zn,wi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],dm=new U;class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=dm}=s;sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,aa,oa),this._renderer.xr.enabled=ca,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Er,format:Je,colorSpace:Fi,depthBuffer:!1},r=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(s)),this._blurMaterial=mm(s,t,e)}return r}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,r,s){const l=new He(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rc),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new Fn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new ee(new Wi,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(Rc),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const T=this._cubeSize;rs(r,x*T,v>2?T:0,T,T),h.setRenderTarget(r),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ui||t.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cc[(r-s-1)%Cc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*jn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):jn;m>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let E=0;for(let C=0;C<jn;++C){const I=C/_,S=Math.exp(-I*I/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[r],T=3*x*(r>v-Ai?r-v+Ai:0),A=4*(this._cubeSize-x);rs(e,T,A,3*x,2*x),l.setRenderTarget(e),l.render(h,ra)}}function pm(i){const t=[],e=[],n=[];let r=i;const s=i-Ai+1+Ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Ai?l=Ac[a-i+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];E.set(S,_*g*A),v.set(f,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const T=new Me;T.setAttribute("position",new Ue(E,_)),T.setAttribute("uv",new Ue(v,m)),T.setAttribute("faceIndex",new Ue(x,p)),t.push(T),r>Ai&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new si(i,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function mm(i,t,e){const n=new Float32Array(jn),r=new U(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Dc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ic(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xa||l===Ma,u=l===Ui||l===Ni;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Pc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Pc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _m(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vm(i,t,e,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let v=0,x=E.length;v<x;v+=3){const T=E[v+0],A=E[v+1],C=E[v+2];f.push(T,A,A,C,C,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,x=E.length/3-1;v<x;v+=3){const T=v+0,A=v+1,C=v+2;f.push(T,A,A,C,C,T)}}else return;const m=new(Sl(f)?wl:Tl)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xm(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ym(i,t,e){const n=new WeakMap,r=new ce;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*A*4*h),I=new El(C,T,A,h);I.type=Mn,I.needsUpdate=!0;const S=x*4;for(let D=0;D<h;D++){const B=p[D],W=E[D],Q=v[D],Y=T*A*4*D;for(let $=0;$<B.count;$++){const lt=$*S;g===!0&&(r.fromBufferAttribute(B,$),C[Y+lt+0]=r.x,C[Y+lt+1]=r.y,C[Y+lt+2]=r.z,C[Y+lt+3]=0),_===!0&&(r.fromBufferAttribute(W,$),C[Y+lt+4]=r.x,C[Y+lt+5]=r.y,C[Y+lt+6]=r.z,C[Y+lt+7]=0),m===!0&&(r.fromBufferAttribute(Q,$),C[Y+lt+8]=r.x,C[Y+lt+9]=r.y,C[Y+lt+10]=r.z,C[Y+lt+11]=Q.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new bt(T,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Sm(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const ql=new De,Uc=new Ll(1,1),$l=new El,Yl=new ph,Zl=new Cl,Nc=[],Fc=[],Oc=new Float32Array(16),zc=new Float32Array(9),Bc=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Nc[r];if(s===void 0&&(s=new Float32Array(r),Nc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),Se(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Se(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),Se(e,n)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function zm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=yl,s=Uc):s=ql,e.setTexture2D(t||s,r)}function Bm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Yl,r)}function Hm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Zl,r)}function km(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||$l,r)}function Vm(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return Tm;case 35666:return wm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return km}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function $m(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ym(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jm(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function jm(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ql,s[a])}function sg(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Yl,s[a])}function ag(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Zl,s[a])}function og(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||$l,s[a])}function cg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return $m;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){const n=i.name,r=n.length;for(la.lastIndex=0;;){const s=la.exec(n),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hc(e,c===void 0?new lg(o,i,t):new ug(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new hg(o),Hc(e,h)),e=h}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);fg(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function kc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dg=37297;let pg=0;function mg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vc=new Yt;function gg(i){ie._getMatrix(Vc,ie.workingColorSpace,i);const t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+mg(i.getShaderSource(t),o)}else return s}function _g(i,t){const e=gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vg(i,t){let e;switch(t){case Gu:e="Linear";break;case Wu:e="Reinhard";break;case Xu:e="Cineon";break;case ul:e="ACESFilmic";break;case $u:e="AgX";break;case Yu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ss=new U;function xg(){ie.getLuminanceCoefficients(ss);const i=ss.x.toFixed(4),t=ss.y.toFixed(4),e=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function Wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Eg,Tg)}const bg=new Map;function Tg(i,t){let e=Zt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(wg,Ag)}function Ag(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ni&&(t="ENVMAP_MODE_REFRACTION"),t}function Lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Rg(e),c=Cg(e),u=Pg(e),h=Lg(e),f=Dg(e),d=Mg(e),g=yg(s),_=r.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=ro(a),a=Wc(a,e),a=Xc(a,e),o=ro(o),o=Wc(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+a,x=E+p+o,T=kc(r,r.VERTEX_SHADER,v),A=kc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,T),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",W=r.getShaderInfoLog(T)||"",Q=r.getShaderInfoLog(A)||"",Y=B.trim(),$=W.trim(),lt=Q.trim();let X=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,A);else{const k=Gc(r,T,"vertex"),j=Gc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+k+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||lt==="")&&(N=!1);N&&(D.diagnostics={runnable:X,programLog:Y,vertexShader:{log:$,prefix:m},fragmentShader:{log:lt,prefix:p}})}r.deleteShader(T),r.deleteShader(A),I=new hs(r,_),S=Sg(r,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,dg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fg(t),e.set(t,n)),n}}class Fg{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}}function Og(i,t,e,n,r,s,a){const o=new yo,l=new Ng,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,B,W){const Q=B.fog,Y=W.geometry,$=S.isMeshStandardMaterial?B.environment:null,lt=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),X=lt&&lt.mapping===ys?lt.image.height:null,N=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const k=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,j=k!==void 0?k.length:0;let F=0;Y.morphAttributes.position!==void 0&&(F=1),Y.morphAttributes.normal!==void 0&&(F=2),Y.morphAttributes.color!==void 0&&(F=3);let vt,q,ot,G;if(N){const te=en[N];vt=te.vertexShader,q=te.fragmentShader}else vt=S.vertexShader,q=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),G=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),Mt=W.isInstancedMesh===!0,Et=W.isBatchedMesh===!0,Ft=!!S.map,Vt=!!S.matcap,L=!!lt,dt=!!S.aoMap,ht=!!S.lightMap,ct=!!S.bumpMap,st=!!S.normalMap,wt=!!S.displacementMap,yt=!!S.emissiveMap,At=!!S.metalnessMap,$t=!!S.roughnessMap,Ht=S.anisotropy>0,w=S.clearcoat>0,M=S.dispersion>0,V=S.iridescence>0,tt=S.sheen>0,mt=S.transmission>0,nt=Ht&&!!S.anisotropyMap,Nt=w&&!!S.clearcoatMap,Tt=w&&!!S.clearcoatNormalMap,Ot=w&&!!S.clearcoatRoughnessMap,It=V&&!!S.iridescenceMap,R=V&&!!S.iridescenceThicknessMap,O=tt&&!!S.sheenColorMap,rt=tt&&!!S.sheenRoughnessMap,gt=!!S.specularMap,at=!!S.specularColorMap,_t=!!S.specularIntensityMap,P=mt&&!!S.transmissionMap,it=mt&&!!S.thicknessMap,xt=!!S.gradientMap,ft=!!S.alphaMap,pt=S.alphaTest>0,ut=!!S.alphaHash,Lt=!!S.extensions;let Xt=Nn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const re={shaderID:N,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:q,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Et,batchingColor:Et&&W._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&W.instanceColor!==null,instancingMorph:Mt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Fi,alphaToCoverage:!!S.alphaToCoverage,map:Ft,matcap:Vt,envMap:L,envMapMode:L&&lt.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:ht,bumpMap:ct,normalMap:st,displacementMap:f&&wt,emissiveMap:yt,normalMapObjectSpace:st&&S.normalMapType===ju,normalMapTangentSpace:st&&S.normalMapType===Ml,metalnessMap:At,roughnessMap:$t,anisotropy:Ht,anisotropyMap:nt,clearcoat:w,clearcoatMap:Nt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,dispersion:M,iridescence:V,iridescenceMap:It,iridescenceThicknessMap:R,sheen:tt,sheenColorMap:O,sheenRoughnessMap:rt,specularMap:gt,specularColorMap:at,specularIntensityMap:_t,transmission:mt,transmissionMap:P,thicknessMap:it,gradientMap:xt,opaque:S.transparent===!1&&S.blending===Ri&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:pt,alphaHash:ut,combine:S.combine,mapUv:Ft&&_(S.map.channel),aoMapUv:dt&&_(S.aoMap.channel),lightMapUv:ht&&_(S.lightMap.channel),bumpMapUv:ct&&_(S.bumpMap.channel),normalMapUv:st&&_(S.normalMap.channel),displacementMapUv:wt&&_(S.displacementMap.channel),emissiveMapUv:yt&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:$t&&_(S.roughnessMap.channel),anisotropyMapUv:nt&&_(S.anisotropyMap.channel),clearcoatMapUv:Nt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:O&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(S.sheenRoughnessMap.channel),specularMapUv:gt&&_(S.specularMap.channel),specularColorMapUv:at&&_(S.specularColorMap.channel),specularIntensityMapUv:_t&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(st||Ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(Ft||ft),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:et,skinning:W.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:F,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(y,S),v(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const y=g[S.type];let D;if(y){const B=en[y];D=Ah.clone(B.uniforms)}else D=S.uniforms;return D}function T(S,y){let D;for(let B=0,W=u.length;B<W;B++){const Q=u[B];if(Q.cacheKey===y){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new Ig(i,y,S,s),u.push(D)),D}function A(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:I}}function zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Bg),n.length>1&&n.sort(f||Yc),r.length>1&&r.sort(f||Yc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Hg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Zc,i.set(n,[a])):r>=s.length?(a=new Zc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xg(i){const t=new kg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new he,a=new he;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,v=0,x=0,T=0,A=0,C=0;c.sort(Wg);for(let S=0,y=c.length;S<y;S++){const D=c[S],B=D.color,W=D.intensity,Q=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*W,h+=B.g*W,f+=B.b*W;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],W);C++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const lt=D.shadow,X=e.get(D);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=$,d++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(W),$.distance=Q,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[_]=$;const lt=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,lt.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=lt.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Y,x++}_++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(B).multiplyScalar(W),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const lt=D.shadow,X=e.get(D);X.shadowIntensity=lt.intensity,X.shadowBias=lt.bias,X.shadowNormalBias=lt.normalBias,X.shadowRadius=lt.radius,X.shadowMapSize=lt.mapSize,X.shadowCameraNear=lt.camera.near,X.shadowCameraFar=lt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=$,g++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(W),$.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==v||I.numSpotShadows!==x||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=T,I.numLightProbes=C,n.version=Gg++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Jc(i){const t=new Xg(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Jc(i),t.set(r,[o])):s>=a.length?(o=new Jc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zg(i,t,e){let n=new Eo;const r=new bt,s=new bt,a=new ce,o=new _f({depthPacking:Ku}),l=new vf,c={},u=e.maxTextureSize,h={[zn]:Le,[Le]:zn,[nn]:nn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:$g,fragmentShader:Yg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=p!==vn&&this.type===vn,Q=p===vn&&this.type!==vn;for(let Y=0,$=A.length;Y<$;Y++){const lt=A[Y],X=lt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const N=X.getFrameExtents();if(r.multiply(N),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/N.x),r.x=s.x*N.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/N.y),r.y=s.y*N.y,X.mapSize.y=s.y)),X.map===null||W===!0||Q===!0){const j=this.type!==vn?{minFilter:je,magFilter:je}:{};X.map!==null&&X.map.dispose(),X.map=new si(r.x,r.y,j),X.map.texture.name=lt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const k=X.getViewportCount();for(let j=0;j<k;j++){const F=X.getViewport(j);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),B.viewport(a),X.updateMatrices(lt,j),n=X.getFrustum(),x(C,I,X.camera,lt,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&E(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,D)};function E(A,C){const I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,I,d,_,null)}function v(A,C,I,S){let y=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=y.uuid,W=C.uuid;let Q=c[B];Q===void 0&&(Q={},c[B]=Q);let Y=Q[W];Y===void 0&&(Y=y.clone(),Q[W]=Y,C.addEventListener("dispose",T)),y=Y}if(y.visible=C.visible,y.wireframe=C.wireframe,S===vn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=I}return y}function x(A,C,I,S,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const W=t.update(A),Q=A.material;if(Array.isArray(Q)){const Y=W.groups;for(let $=0,lt=Y.length;$<lt;$++){const X=Y[$],N=Q[X.materialIndex];if(N&&N.visible){const k=v(A,N,S,y);A.onBeforeShadow(i,A,C,I,W,k,X),i.renderBufferDirect(I,null,W,k,A,X),A.onAfterShadow(i,A,C,I,W,k,X)}}}else if(Q.visible){const Y=v(A,Q,S,y);A.onBeforeShadow(i,A,C,I,W,Y,null),i.renderBufferDirect(I,null,W,Y,A,null),A.onAfterShadow(i,A,C,I,W,Y,null)}}const B=A.children;for(let W=0,Q=B.length;W<Q;W++)x(B[W],C,I,S,y)}function T(A){A.target.removeEventListener("dispose",T);for(const I in c){const S=c[I],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Jg={[fa]:da,[pa]:_a,[ma]:va,[Ii]:ga,[da]:fa,[_a]:pa,[va]:ma,[ga]:Ii};function Kg(i,t){function e(){let P=!1;const it=new ce;let xt=null;const ft=new ce(0,0,0,0);return{setMask:function(pt){xt!==pt&&!P&&(i.colorMask(pt,pt,pt,pt),xt=pt)},setLocked:function(pt){P=pt},setClear:function(pt,ut,Lt,Xt,re){re===!0&&(pt*=Xt,ut*=Xt,Lt*=Xt),it.set(pt,ut,Lt,Xt),ft.equals(it)===!1&&(i.clearColor(pt,ut,Lt,Xt),ft.copy(it))},reset:function(){P=!1,xt=null,ft.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,xt=null,ft=null,pt=null;return{setReversed:function(ut){if(it!==ut){const Lt=t.get("EXT_clip_control");ut?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),it=ut;const Xt=pt;pt=null,this.setClear(Xt)}},getReversed:function(){return it},setTest:function(ut){ut?Z(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(ut){xt!==ut&&!P&&(i.depthMask(ut),xt=ut)},setFunc:function(ut){if(it&&(ut=Jg[ut]),ft!==ut){switch(ut){case fa:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){P=ut},setClear:function(ut){pt!==ut&&(it&&(ut=1-ut),i.clearDepth(ut),pt=ut)},reset:function(){P=!1,xt=null,ft=null,pt=null,it=!1}}}function r(){let P=!1,it=null,xt=null,ft=null,pt=null,ut=null,Lt=null,Xt=null,re=null;return{setTest:function(te){P||(te?Z(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(te){it!==te&&!P&&(i.stencilMask(te),it=te)},setFunc:function(te,fn,Qe){(xt!==te||ft!==fn||pt!==Qe)&&(i.stencilFunc(te,fn,Qe),xt=te,ft=fn,pt=Qe)},setOp:function(te,fn,Qe){(ut!==te||Lt!==fn||Xt!==Qe)&&(i.stencilOp(te,fn,Qe),ut=te,Lt=fn,Xt=Qe)},setLocked:function(te){P=te},setClear:function(te){re!==te&&(i.clearStencil(te),re=te)},reset:function(){P=!1,it=null,xt=null,ft=null,pt=null,ut=null,Lt=null,Xt=null,re=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,v=null,x=null,T=null,A=null,C=new Kt(0,0,0),I=0,S=!1,y=null,D=null,B=null,W=null,Q=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,lt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=lt>=1):X.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=lt>=2);let N=null,k={};const j=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),vt=new ce().fromArray(j),q=new ce().fromArray(F);function ot(P,it,xt,ft){const pt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<xt;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(it+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ut}const G={};G[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ii),ct(!1),st(Vo),Z(i.CULL_FACE),dt(Un);function Z(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function et(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Mt(P,it){return h[P]!==it?(i.bindFramebuffer(P,it),h[P]=it,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Et(P,it){let xt=d,ft=!1;if(P){xt=f.get(it),xt===void 0&&(xt=[],f.set(it,xt));const pt=P.textures;if(xt.length!==pt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Lt=pt.length;ut<Lt;ut++)xt[ut]=i.COLOR_ATTACHMENT0+ut;xt.length=pt.length,ft=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(xt)}function Ft(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Vt={[Kn]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Vt[wu]=i.MIN,Vt[Au]=i.MAX;const L={[Ru]:i.ZERO,[Cu]:i.ONE,[Pu]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(P,it,xt,ft,pt,ut,Lt,Xt,re,te){if(P===Un){_===!0&&(et(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),P!==Eu){if(P!==m||te!==S){if((p!==Kn||x!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,x=Kn),te)switch(P){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,v=null,T=null,A=null,C.set(0,0,0),I=0,m=P,S=te}return}pt=pt||it,ut=ut||xt,Lt=Lt||ft,(it!==p||pt!==x)&&(i.blendEquationSeparate(Vt[it],Vt[pt]),p=it,x=pt),(xt!==E||ft!==v||ut!==T||Lt!==A)&&(i.blendFuncSeparate(L[xt],L[ft],L[ut],L[Lt]),E=xt,v=ft,T=ut,A=Lt),(Xt.equals(C)===!1||re!==I)&&(i.blendColor(Xt.r,Xt.g,Xt.b,re),C.copy(Xt),I=re),m=P,S=!1}function ht(P,it){P.side===nn?et(i.CULL_FACE):Z(i.CULL_FACE);let xt=P.side===Le;it&&(xt=!xt),ct(xt),P.blending===Ri&&P.transparent===!1?dt(Un):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),yt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function st(P){P!==yu?(Z(i.CULL_FACE),P!==D&&(P===Vo?i.cullFace(i.BACK):P===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),D=P}function wt(P){P!==B&&($&&i.lineWidth(P),B=P)}function yt(P,it,xt){P?(Z(i.POLYGON_OFFSET_FILL),(W!==it||Q!==xt)&&(i.polygonOffset(it,xt),W=it,Q=xt)):et(i.POLYGON_OFFSET_FILL)}function At(P){P?Z(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function $t(P){P===void 0&&(P=i.TEXTURE0+Y-1),N!==P&&(i.activeTexture(P),N=P)}function Ht(P,it,xt){xt===void 0&&(N===null?xt=i.TEXTURE0+Y-1:xt=N);let ft=k[xt];ft===void 0&&(ft={type:void 0,texture:void 0},k[xt]=ft),(ft.type!==P||ft.texture!==it)&&(N!==xt&&(i.activeTexture(xt),N=xt),i.bindTexture(P,it||G[P]),ft.type=P,ft.texture=it)}function w(){const P=k[N];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(P){vt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),vt.copy(P))}function rt(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function gt(P,it){let xt=c.get(it);xt===void 0&&(xt=new WeakMap,c.set(it,xt));let ft=xt.get(P);ft===void 0&&(ft=i.getUniformBlockIndex(it,P.name),xt.set(P,ft))}function at(P,it){const ft=c.get(it).get(P);l.get(it)!==ft&&(i.uniformBlockBinding(it,ft,P.__bindingPointIndex),l.set(it,ft))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},N=null,k={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,v=null,x=null,T=null,A=null,C=new Kt(0,0,0),I=0,S=!1,y=null,D=null,B=null,W=null,Q=null,vt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:et,bindFramebuffer:Mt,drawBuffers:Et,useProgram:Ft,setBlending:dt,setMaterial:ht,setFlipSided:ct,setCullFace:st,setLineWidth:wt,setPolygonOffset:yt,setScissorTest:At,activeTexture:$t,bindTexture:Ht,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:It,texImage3D:R,updateUBOMapping:gt,uniformBlockBinding:at,texStorage2D:Tt,texStorage3D:Ot,texSubImage2D:tt,texSubImage3D:mt,compressedTexSubImage2D:nt,compressedTexSubImage3D:Nt,scissor:O,viewport:rt,reset:_t}}function jg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):ms("canvas")}function _(w,M,V){let tt=1;const mt=Ht(w);if((mt.width>V||mt.height>V)&&(tt=V/Math.max(mt.width,mt.height)),tt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(tt*mt.width),Nt=Math.floor(tt*mt.height);h===void 0&&(h=g(nt,Nt));const Tt=M?g(nt,Nt):h;return Tt.width=nt,Tt.height=Nt,Tt.getContext("2d").drawImage(w,0,0,nt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+nt+"x"+Nt+")."),Tt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,M,V,tt,mt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=M;if(M===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),M===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),M===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),M===i.RGBA){const Nt=mt?ds:ie.getTransfer(tt);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=Nt===ae?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(w,M){let V;return w?M===null||M===ri||M===fr?V=i.DEPTH24_STENCIL8:M===Mn?V=i.DEPTH32F_STENCIL8:M===hr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ri||M===fr?V=i.DEPTH_COMPONENT24:M===Mn?V=i.DEPTH_COMPONENT32F:M===hr&&(V=i.DEPTH_COMPONENT16),V}function T(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),y(M)}function I(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,tt=f.get(V);if(tt){const mt=tt[M.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&S(w),Object.keys(tt).length===0&&f.delete(V)}n.remove(w)}function S(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const V=w.source,tt=f.get(V);delete tt[M.__cacheKey],a.memory.textures--}function y(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let mt=0;mt<M.__webglFramebuffer[tt].length;mt++)i.deleteFramebuffer(M.__webglFramebuffer[tt][mt]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let tt=0,mt=V.length;tt<mt;tt++){const nt=n.get(V[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(V[tt])}n.remove(w)}let D=0;function B(){D=0}function W(){const w=D;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function Q(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Y(w,M){const V=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,w,M);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function $(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){G(V,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function lt(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){G(V,w,M);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function X(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Z(V,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const N={[ur]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},k={[je]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[As]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},j={[Qu]:i.NEVER,[sh]:i.ALWAYS,[th]:i.LESS,[yl]:i.LEQUAL,[eh]:i.EQUAL,[rh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function F(w,M){if(M.type===Mn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===As||M.magFilter===Lr||M.magFilter===ei||M.minFilter===sn||M.minFilter===As||M.minFilter===Lr||M.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,N[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,k[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,k[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===je||M.minFilter!==Lr&&M.minFilter!==ei||M.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function vt(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const tt=M.source;let mt=f.get(tt);mt===void 0&&(mt={},f.set(tt,mt));const nt=Q(M);if(nt!==w.__cacheKey){mt[nt]===void 0&&(mt[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),mt[nt].usedTimes++;const Nt=mt[w.__cacheKey];Nt!==void 0&&(mt[w.__cacheKey].usedTimes--,Nt.usedTimes===0&&S(M)),w.__cacheKey=nt,w.__webglTexture=mt[nt].texture}return V}function q(w,M,V){return Math.floor(Math.floor(w/V)/M)}function ot(w,M,V,tt){const nt=w.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,tt,M.data);else{nt.sort((R,O)=>R.start-O.start);let Nt=0;for(let R=1;R<nt.length;R++){const O=nt[Nt],rt=nt[R],gt=O.start+O.count,at=q(rt.start,M.width,4),_t=q(O.start,M.width,4);rt.start<=gt+1&&at===_t&&q(rt.start+rt.count-1,M.width,4)===at?O.count=Math.max(O.count,rt.start+rt.count-O.start):(++Nt,nt[Nt]=rt)}nt.length=Nt+1;const Tt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let R=0,O=nt.length;R<O;R++){const rt=nt[R],gt=Math.floor(rt.start/4),at=Math.ceil(rt.count/4),_t=gt%M.width,P=Math.floor(gt/M.width),it=at,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,_t,P,it,xt,V,tt,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Tt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function G(w,M,V){let tt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=i.TEXTURE_3D);const mt=vt(w,M),nt=M.source;e.bindTexture(tt,w.__webglTexture,i.TEXTURE0+V);const Nt=n.get(nt);if(nt.version!==Nt.__version||mt===!0){e.activeTexture(i.TEXTURE0+V);const Tt=ie.getPrimaries(ie.workingColorSpace),Ot=M.colorSpace===In?null:ie.getPrimaries(M.colorSpace),It=M.colorSpace===In||Tt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let R=_(M.image,!1,r.maxTextureSize);R=$t(M,R);const O=s.convert(M.format,M.colorSpace),rt=s.convert(M.type);let gt=v(M.internalFormat,O,rt,M.colorSpace,M.isVideoTexture);F(tt,M);let at;const _t=M.mipmaps,P=M.isVideoTexture!==!0,it=Nt.__version===void 0||mt===!0,xt=nt.dataReady,ft=T(M,R);if(M.isDepthTexture)gt=x(M.format===pr,M.type),it&&(P?e.texStorage2D(i.TEXTURE_2D,1,gt,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,gt,R.width,R.height,0,O,rt,null));else if(M.isDataTexture)if(_t.length>0){P&&it&&e.texStorage2D(i.TEXTURE_2D,ft,gt,_t[0].width,_t[0].height);for(let pt=0,ut=_t.length;pt<ut;pt++)at=_t[pt],P?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,at.width,at.height,O,rt,at.data):e.texImage2D(i.TEXTURE_2D,pt,gt,at.width,at.height,0,O,rt,at.data);M.generateMipmaps=!1}else P?(it&&e.texStorage2D(i.TEXTURE_2D,ft,gt,R.width,R.height),xt&&ot(M,R,O,rt)):e.texImage2D(i.TEXTURE_2D,0,gt,R.width,R.height,0,O,rt,R.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,_t[0].width,_t[0].height,R.depth);for(let pt=0,ut=_t.length;pt<ut;pt++)if(at=_t[pt],M.format!==Je)if(O!==null)if(P){if(xt)if(M.layerUpdates.size>0){const Lt=wc(at.width,at.height,M.format,M.type);for(const Xt of M.layerUpdates){const re=at.data.subarray(Xt*Lt/at.data.BYTES_PER_ELEMENT,(Xt+1)*Lt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Xt,at.width,at.height,1,O,re)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,at.width,at.height,R.depth,O,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,gt,at.width,at.height,R.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,at.width,at.height,R.depth,O,rt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,gt,at.width,at.height,R.depth,0,O,rt,at.data)}else{P&&it&&e.texStorage2D(i.TEXTURE_2D,ft,gt,_t[0].width,_t[0].height);for(let pt=0,ut=_t.length;pt<ut;pt++)at=_t[pt],M.format!==Je?O!==null?P?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,at.width,at.height,O,at.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,gt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,at.width,at.height,O,rt,at.data):e.texImage2D(i.TEXTURE_2D,pt,gt,at.width,at.height,0,O,rt,at.data)}else if(M.isDataArrayTexture)if(P){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,R.width,R.height,R.depth),xt)if(M.layerUpdates.size>0){const pt=wc(R.width,R.height,M.format,M.type);for(const ut of M.layerUpdates){const Lt=R.data.subarray(ut*pt/R.data.BYTES_PER_ELEMENT,(ut+1)*pt/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,R.width,R.height,1,O,rt,Lt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,O,rt,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,R.width,R.height,R.depth,0,O,rt,R.data);else if(M.isData3DTexture)P?(it&&e.texStorage3D(i.TEXTURE_3D,ft,gt,R.width,R.height,R.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,O,rt,R.data)):e.texImage3D(i.TEXTURE_3D,0,gt,R.width,R.height,R.depth,0,O,rt,R.data);else if(M.isFramebufferTexture){if(it)if(P)e.texStorage2D(i.TEXTURE_2D,ft,gt,R.width,R.height);else{let pt=R.width,ut=R.height;for(let Lt=0;Lt<ft;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,gt,pt,ut,0,O,rt,null),pt>>=1,ut>>=1}}else if(_t.length>0){if(P&&it){const pt=Ht(_t[0]);e.texStorage2D(i.TEXTURE_2D,ft,gt,pt.width,pt.height)}for(let pt=0,ut=_t.length;pt<ut;pt++)at=_t[pt],P?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,O,rt,at):e.texImage2D(i.TEXTURE_2D,pt,gt,O,rt,at);M.generateMipmaps=!1}else if(P){if(it){const pt=Ht(R);e.texStorage2D(i.TEXTURE_2D,ft,gt,pt.width,pt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,O,rt,R)}else e.texImage2D(i.TEXTURE_2D,0,gt,O,rt,R);m(M)&&p(tt),Nt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Z(w,M,V){if(M.image.length!==6)return;const tt=vt(w,M),mt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const nt=n.get(mt);if(mt.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const Nt=ie.getPrimaries(ie.workingColorSpace),Tt=M.colorSpace===In?null:ie.getPrimaries(M.colorSpace),Ot=M.colorSpace===In||Nt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const It=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,O=[];for(let ut=0;ut<6;ut++)!It&&!R?O[ut]=_(M.image[ut],!0,r.maxCubemapSize):O[ut]=R?M.image[ut].image:M.image[ut],O[ut]=$t(M,O[ut]);const rt=O[0],gt=s.convert(M.format,M.colorSpace),at=s.convert(M.type),_t=v(M.internalFormat,gt,at,M.colorSpace),P=M.isVideoTexture!==!0,it=nt.__version===void 0||tt===!0,xt=mt.dataReady;let ft=T(M,rt);F(i.TEXTURE_CUBE_MAP,M);let pt;if(It){P&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,_t,rt.width,rt.height);for(let ut=0;ut<6;ut++){pt=O[ut].mipmaps;for(let Lt=0;Lt<pt.length;Lt++){const Xt=pt[Lt];M.format!==Je?gt!==null?P?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Xt.width,Xt.height,gt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,_t,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Xt.width,Xt.height,gt,at,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,_t,Xt.width,Xt.height,0,gt,at,Xt.data)}}}else{if(pt=M.mipmaps,P&&it){pt.length>0&&ft++;const ut=Ht(O[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,_t,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(R){P?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,O[ut].width,O[ut].height,gt,at,O[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,_t,O[ut].width,O[ut].height,0,gt,at,O[ut].data);for(let Lt=0;Lt<pt.length;Lt++){const re=pt[Lt].image[ut].image;P?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,re.width,re.height,gt,at,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,_t,re.width,re.height,0,gt,at,re.data)}}else{P?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,gt,at,O[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,_t,gt,at,O[ut]);for(let Lt=0;Lt<pt.length;Lt++){const Xt=pt[Lt];P?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,gt,at,Xt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,_t,gt,at,Xt.image[ut])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),nt.__version=mt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function et(w,M,V,tt,mt,nt){const Nt=s.convert(V.format,V.colorSpace),Tt=s.convert(V.type),Ot=v(V.internalFormat,Nt,Tt,V.colorSpace),It=n.get(M),R=n.get(V);if(R.__renderTarget=M,!It.__hasExternalTextures){const O=Math.max(1,M.width>>nt),rt=Math.max(1,M.height>>nt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,nt,Ot,O,rt,M.depth,0,Nt,Tt,null):e.texImage2D(mt,nt,Ot,O,rt,0,Nt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),yt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,mt,R.__webglTexture,0,wt(M)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,mt,R.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(w,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const tt=M.depthTexture,mt=tt&&tt.isDepthTexture?tt.type:null,nt=x(M.stencilBuffer,mt),Nt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=wt(M);yt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,nt,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,nt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,nt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,w)}else{const tt=M.textures;for(let mt=0;mt<tt.length;mt++){const nt=tt[mt],Nt=s.convert(nt.format,nt.colorSpace),Tt=s.convert(nt.type),Ot=v(nt.internalFormat,Nt,Tt,nt.colorSpace),It=wt(M);V&&yt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ot,M.width,M.height):yt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(M.depthTexture);tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const mt=tt.__webglTexture,nt=wt(M);if(M.depthTexture.format===dr)yt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(M.depthTexture.format===pr)yt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Ft(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const tt=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){const mt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",mt)};tt.addEventListener("dispose",mt),M.__depthDisposeCallback=mt}M.__boundDepthTexture=tt}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const tt=w.texture.mipmaps;tt&&tt.length>0?Et(M.__webglFramebuffer[0],w):Et(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=i.createRenderbuffer(),Mt(M.__webglDepthbuffer[tt],w,!1);else{const mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,nt)}}else{const tt=w.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Mt(M.__webglDepthbuffer,w,!1);else{const mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(w,M,V){const tt=n.get(w);M!==void 0&&et(tt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ft(w)}function L(w){const M=w.texture,V=n.get(w),tt=n.get(M);w.addEventListener("dispose",C);const mt=w.textures,nt=w.isWebGLCubeRenderTarget===!0,Nt=mt.length>1;if(Nt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=M.version,a.memory.textures++),nt){V.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[Tt]=[];for(let Ot=0;Ot<M.mipmaps.length;Ot++)V.__webglFramebuffer[Tt][Ot]=i.createFramebuffer()}else V.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)V.__webglFramebuffer[Tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let Tt=0,Ot=mt.length;Tt<Ot;Tt++){const It=n.get(mt[Tt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&yt(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Tt=0;Tt<mt.length;Tt++){const Ot=mt[Tt];V.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Tt]);const It=s.convert(Ot.format,Ot.colorSpace),R=s.convert(Ot.type),O=v(Ot.internalFormat,It,R,Ot.colorSpace,w.isXRRenderTarget===!0),rt=wt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,O,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),F(i.TEXTURE_CUBE_MAP,M);for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ot=0;Ot<M.mipmaps.length;Ot++)et(V.__webglFramebuffer[Tt][Ot],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot);else et(V.__webglFramebuffer[Tt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let Tt=0,Ot=mt.length;Tt<Ot;Tt++){const It=mt[Tt],R=n.get(It);let O=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,R.__webglTexture),F(O,It),et(V.__webglFramebuffer,w,It,i.COLOR_ATTACHMENT0+Tt,O,0),m(It)&&p(O)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,tt.__webglTexture),F(Tt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ot=0;Ot<M.mipmaps.length;Ot++)et(V.__webglFramebuffer[Ot],w,M,i.COLOR_ATTACHMENT0,Tt,Ot);else et(V.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Tt,0);m(M)&&p(Tt),e.unbindTexture()}w.depthBuffer&&Ft(w)}function dt(w){const M=w.textures;for(let V=0,tt=M.length;V<tt;V++){const mt=M[V];if(m(mt)){const nt=E(w),Nt=n.get(mt).__webglTexture;e.bindTexture(nt,Nt),p(nt),e.unbindTexture()}}}const ht=[],ct=[];function st(w){if(w.samples>0){if(yt(w)===!1){const M=w.textures,V=w.width,tt=w.height;let mt=i.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(w),Tt=M.length>1;if(Tt)for(let It=0;It<M.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ot=w.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let It=0;It<M.length;It++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);const R=n.get(M[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,mt,i.NEAREST),l===!0&&(ht.length=0,ct.length=0,ht.push(i.COLOR_ATTACHMENT0+It),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ht.push(nt),ct.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let It=0;It<M.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);const R=n.get(M[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function wt(w){return Math.min(r.maxSamples,w.samples)}function yt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function $t(w,M){const V=w.colorSpace,tt=w.format,mt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Fi&&V!==In&&(ie.getTransfer(V)===ae?(tt!==Je||mt!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=lt,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=yt}function Qg(i,t){function e(n,r=In){let s;const a=ie.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fl)return i.BYTE;if(n===dl)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Er)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===_l)return i.RGB;if(n===Je)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===go)return i.RED_INTEGER;if(n===xl)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===os||n===cs||n===ls||n===us)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===ba||n===Ta)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Aa||n===Ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wa||n===Aa)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===Ha||n===ka||n===Va)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ga)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===$a||n===Ya||n===Za)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:t0,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i0 extends Gi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new n0,p={},E=e.getContextAttributes();let v=null,x=null;const T=[],A=[],C=new bt;let I=null;const S=new He;S.viewport=new ce;const y=new He;y.viewport=new ce;const D=[S,y],B=new Ef;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=T[G];return Z===void 0&&(Z=new Js,T[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=T[G];return Z===void 0&&(Z=new Js,T[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=T[G];return Z===void 0&&(Z=new Js,T[G]=Z),Z.getHandSpace()};function Y(G){const Z=A.indexOf(G.inputSource);if(Z===-1)return;const et=T[Z];et!==void 0&&(et.update(G.inputSource,G.frame,c||a),et.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",lt);for(let G=0;G<T.length;G++){const Z=A[G];Z!==null&&(A[G]=null,T[G].disconnect(Z))}W=null,Q=null,m.reset();for(const G in p)delete p[G];t.setRenderTarget(v),d=null,f=null,h=null,r=null,x=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",$),r.addEventListener("inputsourceschange",lt),E.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Mt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=E.stencil?pr:dr,Mt=E.stencil?fr:ri);const Ft={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ft),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new si(f.textureWidth,f.textureHeight,{format:Je,type:cn,depthTexture:new Ll(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const et={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new si(d.framebufferWidth,d.framebufferHeight,{format:Je,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(G){for(let Z=0;Z<G.removed.length;Z++){const et=G.removed[Z],Mt=A.indexOf(et);Mt>=0&&(A[Mt]=null,T[Mt].disconnect(et))}for(let Z=0;Z<G.added.length;Z++){const et=G.added[Z];let Mt=A.indexOf(et);if(Mt===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=A.length){A.push(et),Mt=Ft;break}else if(A[Ft]===null){A[Ft]=et,Mt=Ft;break}if(Mt===-1)break}const Et=T[Mt];Et&&Et.connect(et)}}const X=new U,N=new U;function k(G,Z,et){X.setFromMatrixPosition(Z.matrixWorld),N.setFromMatrixPosition(et.matrixWorld);const Mt=X.distanceTo(N),Et=Z.projectionMatrix.elements,Ft=et.projectionMatrix.elements,Vt=Et[14]/(Et[10]-1),L=Et[14]/(Et[10]+1),dt=(Et[9]+1)/Et[5],ht=(Et[9]-1)/Et[5],ct=(Et[8]-1)/Et[0],st=(Ft[8]+1)/Ft[0],wt=Vt*ct,yt=Vt*st,At=Mt/(-ct+st),$t=At*-ct;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($t),G.translateZ(At),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Et[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ht=Vt+At,w=L+At,M=wt-$t,V=yt+(Mt-$t),tt=dt*L/w*Ht,mt=ht*L/w*Ht;G.projectionMatrix.makePerspective(M,V,tt,mt,Ht,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function j(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Z=G.near,et=G.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(et=m.depthFar)),B.near=y.near=S.near=Z,B.far=y.far=S.far=et,(W!==B.near||Q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,Q=B.far),B.layers.mask=G.layers.mask|6,S.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Mt=G.parent,Et=B.cameras;j(B,Mt);for(let Ft=0;Ft<Et.length;Ft++)j(Et[Ft],Mt);Et.length===2?k(B,S,y):B.projectionMatrix.copy(S.projectionMatrix),F(G,B,Mt)};function F(G,Z,et){et===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(et.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ka*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(G){return p[G]};let vt=null;function q(G,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const et=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Mt=!1;et.length!==B.cameras.length&&(B.cameras.length=0,Mt=!0);for(let L=0;L<et.length;L++){const dt=et[L];let ht=null;if(d!==null)ht=d.getViewport(dt);else{const st=h.getViewSubImage(f,dt);ht=st.viewport,L===0&&(t.setRenderTargetTextures(x,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(x))}let ct=D[L];ct===void 0&&(ct=new He,ct.layers.enable(L),ct.viewport=new ce,D[L]=ct),ct.matrix.fromArray(dt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(dt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ht.x,ht.y,ht.width,ht.height),L===0&&(B.matrix.copy(ct.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Mt===!0&&B.cameras.push(ct)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(et[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<et.length;L++){const dt=et[L].camera;if(dt){let ht=p[dt];ht||(ht=new Dl,p[dt]=ht);const ct=h.getCameraImage(dt);ht.sourceTexture=ct}}}}for(let et=0;et<T.length;et++){const Mt=A[et],Et=T[et];Mt!==null&&Et!==void 0&&Et.update(Mt,Z,c||a)}vt&&vt(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ot=new Xl;ot.setAnimationLoop(q),this.setAnimationLoop=function(G){vt=G},this.dispose=function(){}}}const $n=new ln,r0=new he;function s0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Al(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),v=E.envMap,x=E.envMapRotation;v&&(m.envMap.value=v,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler($n)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){const x=v.program;n.uniformBlockBinding(E,x)}function c(E,v){let x=r[E.id];x===void 0&&(g(E),x=u(E),r[E.id]=x,E.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(E,T);const A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const v=h();E.__bindingPointIndex=v;const x=i.createBuffer(),T=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const v=r[E.id],x=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,C=x.length;A<C;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=I.length;S<y;S++){const D=I[S];if(d(D,A,S,T)===!0){const B=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let Y=0;Y<W.length;Y++){const $=W[Y],lt=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,B+Q,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,Q),Q+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,v,x,T){const A=E.value,C=v+"_"+x;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const I=T[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){const v=E.uniforms;let x=0;const T=16;for(let C=0,I=v.length;C<I;C++){const S=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,D=S.length;y<D;y++){const B=S[y],W=Array.isArray(B.value)?B.value:[B.value];for(let Q=0,Y=W.length;Q<Y;Q++){const $=W[Q],lt=_($),X=x%T,N=X%lt.boundary,k=X+N;x+=N,k!==0&&T-k<lt.storage&&(x+=T-k),B.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=lt.storage}}}const A=x%T;return A>0&&(x+=T-A),E.__size=x,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class o0{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=Be;let A=0,C=0,I=null,S=-1,y=null;const D=new ce,B=new ce;let W=null;const Q=new Kt(0);let Y=0,$=e.width,lt=e.height,X=1,N=null,k=null;const j=new ce(0,0,$,lt),F=new ce(0,0,$,lt);let vt=!1;const q=new Eo;let ot=!1,G=!1;const Z=new he,et=new U,Mt=new ce,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Vt(){return I===null?X:1}let L=n;function dt(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const z="webgl2";if(L=dt(z,b),L===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ct,st,wt,yt,At,$t,Ht,w,M,V,tt,mt,nt,Nt,Tt,Ot,It,R,O,rt,gt,at,_t;function P(){ht=new _m(L),ht.init(),gt=new Qg(L,ht),ct=new um(L,ht,t,gt),st=new Kg(L,ht),ct.reversedDepthBuffer&&f&&st.buffers.depth.setReversed(!0),wt=new Mm(L),yt=new zg,At=new jg(L,ht,st,yt,ct,gt,wt),$t=new fm(x),Ht=new gm(x),w=new wf(L),at=new cm(L,w),M=new vm(L,w,wt,at),V=new Sm(L,M,w,wt),R=new ym(L,ct,At),Tt=new hm(yt),tt=new Og(x,$t,Ht,ht,ct,at,Tt),mt=new s0(x,yt),nt=new Hg,Nt=new qg(ht),It=new om(x,$t,Ht,st,V,d,l),Ot=new Zg(x,V,ct),_t=new a0(L,wt,ct,st),O=new lm(L,ht,wt),rt=new xm(L,ht,wt),wt.programs=tt.programs,x.capabilities=ct,x.extensions=ht,x.properties=yt,x.renderLists=nt,x.shadowMap=Ot,x.state=st,x.info=wt}P();const it=new i0(x,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,lt,!1))},this.getSize=function(b){return b.set($,lt)},this.setSize=function(b,z,J=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,lt=z,e.width=Math.floor(b*X),e.height=Math.floor(z*X),J===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set($*X,lt*X).floor()},this.setDrawingBufferSize=function(b,z,J){$=b,lt=z,X=J,e.width=Math.floor(b*J),e.height=Math.floor(z*J),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,z,J,K){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,z,J,K),st.viewport(D.copy(j).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(F)},this.setScissor=function(b,z,J,K){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,z,J,K),st.scissor(B.copy(F).multiplyScalar(X).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(b){st.setScissorTest(vt=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,J=!0){let K=0;if(b){let H=!1;if(I!==null){const St=I.texture.format;H=St===vo||St===_o||St===go}if(H){const St=I.texture.type,Pt=St===cn||St===ri||St===hr||St===fr||St===po||St===mo,Bt=It.getClearColor(),Dt=It.getClearAlpha(),Wt=Bt.r,qt=Bt.g,kt=Bt.b;Pt?(g[0]=Wt,g[1]=qt,g[2]=kt,g[3]=Dt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=qt,_[2]=kt,_[3]=Dt,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}z&&(K|=L.DEPTH_BUFFER_BIT),J&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),It.dispose(),nt.dispose(),Nt.dispose(),yt.dispose(),$t.dispose(),Ht.dispose(),V.dispose(),at.dispose(),_t.dispose(),tt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Qe),it.removeEventListener("sessionend",Uo),Hn.stop()};function xt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=wt.autoReset,z=Ot.enabled,J=Ot.autoUpdate,K=Ot.needsUpdate,H=Ot.type;P(),wt.autoReset=b,Ot.enabled=z,Ot.autoUpdate=J,Ot.needsUpdate=K,Ot.type=H}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ut(b){const z=b.target;z.removeEventListener("dispose",ut),Lt(z)}function Lt(b){Xt(b),yt.remove(b)}function Xt(b){const z=yt.get(b).programs;z!==void 0&&(z.forEach(function(J){tt.releaseProgram(J)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,J,K,H,St){z===null&&(z=Et);const Pt=H.isMesh&&H.matrixWorld.determinant()<0,Bt=iu(b,z,J,K,H);st.setMaterial(K,Pt);let Dt=J.index,Wt=1;if(K.wireframe===!0){if(Dt=M.getWireframeAttribute(J),Dt===void 0)return;Wt=2}const qt=J.drawRange,kt=J.attributes.position;let Qt=qt.start*Wt,se=(qt.start+qt.count)*Wt;St!==null&&(Qt=Math.max(Qt,St.start*Wt),se=Math.min(se,(St.start+St.count)*Wt)),Dt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,Dt.count)):kt!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,kt.count));const _e=se-Qt;if(_e<0||_e===1/0)return;at.setup(H,K,Bt,J,Dt);let fe,ue=O;if(Dt!==null&&(fe=w.get(Dt),ue=rt,ue.setIndex(fe)),H.isMesh)K.wireframe===!0?(st.setLineWidth(K.wireframeLinewidth*Vt()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(H.isLine){let Gt=K.linewidth;Gt===void 0&&(Gt=1),st.setLineWidth(Gt*Vt()),H.isLineSegments?ue.setMode(L.LINES):H.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else H.isPoints?ue.setMode(L.POINTS):H.isSprite&&ue.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,pe=H._multiDrawCounts,ne=H._multiDrawCount,Ne=Dt?w.get(Dt).bytesPerElement:1,ci=yt.get(K).currentProgram.getUniforms();for(let Fe=0;Fe<ne;Fe++)ci.setValue(L,"_gl_DrawID",Fe),ue.render(Gt[Fe]/Ne,pe[Fe])}else if(H.isInstancedMesh)ue.renderInstances(Qt,_e,H.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,pe=Math.min(J.instanceCount,Gt);ue.renderInstances(Qt,_e,pe)}else ue.render(Qt,_e)};function re(b,z,J){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Pr(b,z,J),b.side=zn,b.needsUpdate=!0,Pr(b,z,J),b.side=nn):Pr(b,z,J)}this.compile=function(b,z,J=null){J===null&&(J=b),p=Nt.get(J),p.init(z),v.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),b!==J&&b.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const St=H.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Bt=St[Pt];re(Bt,J,H),K.add(Bt)}else re(St,J,H),K.add(St)}),p=v.pop(),K},this.compileAsync=function(b,z,J=null){const K=this.compile(b,z,J);return new Promise(H=>{function St(){if(K.forEach(function(Pt){yt.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){H(b);return}setTimeout(St,10)}ht.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let te=null;function fn(b){te&&te(b)}function Qe(){Hn.stop()}function Uo(){Hn.start()}const Hn=new Xl;Hn.setAnimationLoop(fn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(b){te=b,it.setAnimationLoop(b),b===null?Hn.stop():Hn.start()},it.addEventListener("sessionstart",Qe),it.addEventListener("sessionend",Uo),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(z),z=it.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,z,I),p=Nt.get(b,v.length),p.init(z),v.push(p),Z.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(Z,an,z.reversedDepth),G=this.localClippingEnabled,ot=Tt.init(this.clippingPlanes,G),m=nt.get(b,E.length),m.init(),E.push(m),it.enabled===!0&&it.isPresenting===!0){const St=x.xr.getDepthSensingMesh();St!==null&&Ts(St,z,-1/0,x.sortObjects)}Ts(b,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(N,k),Ft=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ft&&It.addToRenderList(m,b),this.info.render.frame++,ot===!0&&Tt.beginShadows();const J=p.state.shadowsArray;Ot.render(J,b,z),ot===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const St=z.cameras;if(H.length>0)for(let Pt=0,Bt=St.length;Pt<Bt;Pt++){const Dt=St[Pt];Fo(K,H,b,Dt)}Ft&&It.render(b);for(let Pt=0,Bt=St.length;Pt<Bt;Pt++){const Dt=St[Pt];No(m,b,Dt,Dt.viewport)}}else H.length>0&&Fo(K,H,b,z),Ft&&It.render(b),No(m,b,z);I!==null&&C===0&&(At.updateMultisampleRenderTarget(I),At.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(x,b,z),at.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],ot===!0&&Tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ts(b,z,J,K){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){K&&Mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const Pt=V.update(b),Bt=b.material;Bt.visible&&m.push(b,Pt,Bt,J,Mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Pt=V.update(b),Bt=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Mt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Mt.copy(Pt.boundingSphere.center)),Mt.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Bt)){const Dt=Pt.groups;for(let Wt=0,qt=Dt.length;Wt<qt;Wt++){const kt=Dt[Wt],Qt=Bt[kt.materialIndex];Qt&&Qt.visible&&m.push(b,Pt,Qt,J,Mt.z,kt)}}else Bt.visible&&m.push(b,Pt,Bt,J,Mt.z,null)}}const St=b.children;for(let Pt=0,Bt=St.length;Pt<Bt;Pt++)Ts(St[Pt],z,J,K)}function No(b,z,J,K){const H=b.opaque,St=b.transmissive,Pt=b.transparent;p.setupLightsView(J),ot===!0&&Tt.setGlobalState(x.clippingPlanes,J),K&&st.viewport(D.copy(K)),H.length>0&&Cr(H,z,J),St.length>0&&Cr(St,z,J),Pt.length>0&&Cr(Pt,z,J),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Fo(b,z,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new si(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Er:cn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const St=p.state.transmissionRenderTarget[K.id],Pt=K.viewport||D;St.setSize(Pt.z*x.transmissionResolutionScale,Pt.w*x.transmissionResolutionScale);const Bt=x.getRenderTarget(),Dt=x.getActiveCubeFace(),Wt=x.getActiveMipmapLevel();x.setRenderTarget(St),x.getClearColor(Q),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&It.render(J);const qt=x.toneMapping;x.toneMapping=Nn;const kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ot===!0&&Tt.setGlobalState(x.clippingPlanes,K),Cr(b,J,K),At.updateMultisampleRenderTarget(St),At.updateRenderTargetMipmap(St),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let se=0,_e=z.length;se<_e;se++){const fe=z[se],ue=fe.object,Gt=fe.geometry,pe=fe.material,ne=fe.group;if(pe.side===nn&&ue.layers.test(K.layers)){const Ne=pe.side;pe.side=Le,pe.needsUpdate=!0,Oo(ue,J,K,Gt,pe,ne),pe.side=Ne,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(At.updateMultisampleRenderTarget(St),At.updateRenderTargetMipmap(St))}x.setRenderTarget(Bt,Dt,Wt),x.setClearColor(Q,Y),kt!==void 0&&(K.viewport=kt),x.toneMapping=qt}function Cr(b,z,J){const K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,St=b.length;H<St;H++){const Pt=b[H],Bt=Pt.object,Dt=Pt.geometry,Wt=Pt.group;let qt=Pt.material;qt.allowOverride===!0&&K!==null&&(qt=K),Bt.layers.test(J.layers)&&Oo(Bt,z,J,Dt,qt,Wt)}}function Oo(b,z,J,K,H,St){b.onBeforeRender(x,z,J,K,H,St),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,z,J,K,b,St),H.transparent===!0&&H.side===nn&&H.forceSinglePass===!1?(H.side=Le,H.needsUpdate=!0,x.renderBufferDirect(J,z,K,H,b,St),H.side=zn,H.needsUpdate=!0,x.renderBufferDirect(J,z,K,H,b,St),H.side=nn):x.renderBufferDirect(J,z,K,H,b,St),b.onAfterRender(x,z,J,K,H,St)}function Pr(b,z,J){z.isScene!==!0&&(z=Et);const K=yt.get(b),H=p.state.lights,St=p.state.shadowsArray,Pt=H.state.version,Bt=tt.getParameters(b,H.state,St,z,J),Dt=tt.getProgramCacheKey(Bt);let Wt=K.programs;K.environment=b.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(b.isMeshStandardMaterial?Ht:$t).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",ut),Wt=new Map,K.programs=Wt);let qt=Wt.get(Dt);if(qt!==void 0){if(K.currentProgram===qt&&K.lightsStateVersion===Pt)return Bo(b,Bt),qt}else Bt.uniforms=tt.getUniforms(b),b.onBeforeCompile(Bt,x),qt=tt.acquireProgram(Bt,Dt),Wt.set(Dt,qt),K.uniforms=Bt.uniforms;const kt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Bo(b,Bt),K.needsLights=su(b),K.lightsStateVersion=Pt,K.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=qt,K.uniformsList=null,qt}function zo(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Bo(b,z){const J=yt.get(b);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function iu(b,z,J,K,H){z.isScene!==!0&&(z=Et),At.resetTextureUnits();const St=z.fog,Pt=K.isMeshStandardMaterial?z.environment:null,Bt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fi,Dt=(K.isMeshStandardMaterial?Ht:$t).get(K.envMap||Pt),Wt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),kt=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,se=!!J.morphAttributes.color;let _e=Nn;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=x.toneMapping);const fe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=fe!==void 0?fe.length:0,Gt=yt.get(K),pe=p.state.lights;if(ot===!0&&(G===!0||b!==y)){const Ae=b===y&&K.id===S;Tt.setState(K,b,Ae)}let ne=!1;K.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==pe.state.version||Gt.outputColorSpace!==Bt||H.isBatchedMesh&&Gt.batching===!1||!H.isBatchedMesh&&Gt.batching===!0||H.isBatchedMesh&&Gt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Gt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Gt.instancing===!1||!H.isInstancedMesh&&Gt.instancing===!0||H.isSkinnedMesh&&Gt.skinning===!1||!H.isSkinnedMesh&&Gt.skinning===!0||H.isInstancedMesh&&Gt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Gt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Gt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Gt.instancingMorph===!1&&H.morphTexture!==null||Gt.envMap!==Dt||K.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Tt.numPlanes||Gt.numIntersection!==Tt.numIntersection)||Gt.vertexAlphas!==Wt||Gt.vertexTangents!==qt||Gt.morphTargets!==kt||Gt.morphNormals!==Qt||Gt.morphColors!==se||Gt.toneMapping!==_e||Gt.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Gt.__version=K.version);let Ne=Gt.currentProgram;ne===!0&&(Ne=Pr(K,z,H));let ci=!1,Fe=!1,Yi=!1;const me=Ne.getUniforms(),ke=Gt.uniforms;if(st.useProgram(Ne.program)&&(ci=!0,Fe=!0,Yi=!0),K.id!==S&&(S=K.id,Fe=!0),ci||y!==b){st.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",b.projectionMatrix),me.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ie=me.map.cameraPosition;Ie!==void 0&&Ie.setValue(L,et.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&me.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Fe=!0,Yi=!0)}if(H.isSkinnedMesh){me.setOptional(L,H,"bindMatrix"),me.setOptional(L,H,"bindMatrixInverse");const Ae=H.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),me.setValue(L,"boneTexture",Ae.boneTexture,At))}H.isBatchedMesh&&(me.setOptional(L,H,"batchingTexture"),me.setValue(L,"batchingTexture",H._matricesTexture,At),me.setOptional(L,H,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",H._indirectTexture,At),me.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",H._colorsTexture,At));const Ve=J.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&R.update(H,J,Ne),(Fe||Gt.receiveShadow!==H.receiveShadow)&&(Gt.receiveShadow=H.receiveShadow,me.setValue(L,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ke.envMap.value=Dt,ke.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ke.envMapIntensity.value=z.environmentIntensity),Fe&&(me.setValue(L,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&ru(ke,Yi),St&&K.fog===!0&&mt.refreshFogUniforms(ke,St),mt.refreshMaterialUniforms(ke,K,X,lt,p.state.transmissionRenderTarget[b.id]),hs.upload(L,zo(Gt),ke,At)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(hs.upload(L,zo(Gt),ke,At),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&me.setValue(L,"center",H.center),me.setValue(L,"modelViewMatrix",H.modelViewMatrix),me.setValue(L,"normalMatrix",H.normalMatrix),me.setValue(L,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ae=K.uniformsGroups;for(let Ie=0,ws=Ae.length;Ie<ws;Ie++){const kn=Ae[Ie];_t.update(kn,Ne),_t.bind(kn,Ne)}}return Ne}function ru(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function su(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,z,J){const K=yt.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),yt.get(b.texture).__webglTexture=z,yt.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const J=yt.get(b);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const au=L.createFramebuffer();this.setRenderTarget=function(b,z=0,J=0){I=b,A=z,C=J;let K=!0,H=null,St=!1,Pt=!1;if(b){const Dt=yt.get(b);if(Dt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)At.setupRenderTarget(b);else if(Dt.__hasExternalTextures)At.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const kt=b.depthTexture;if(Dt.__boundDepthTexture!==kt){if(kt!==null&&yt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");At.setupDepthRenderbuffer(b)}}const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const qt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[z])?H=qt[z][J]:H=qt[z],St=!0):b.samples>0&&At.useMultisampledRTT(b)===!1?H=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?H=qt[J]:H=qt,D.copy(b.viewport),B.copy(b.scissor),W=b.scissorTest}else D.copy(j).multiplyScalar(X).floor(),B.copy(F).multiplyScalar(X).floor(),W=vt;if(J!==0&&(H=au),st.bindFramebuffer(L.FRAMEBUFFER,H)&&K&&st.drawBuffers(b,H),st.viewport(D),st.scissor(B),st.setScissorTest(W),St){const Dt=yt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,J)}else if(Pt){const Dt=z;for(let Wt=0;Wt<b.textures.length;Wt++){const qt=yt.get(b.textures[Wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,J,Dt)}}else if(b!==null&&J!==0){const Dt=yt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(b,z,J,K,H,St,Pt,Bt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){st.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const Wt=b.textures[Bt],qt=Wt.format,kt=Wt.type;if(!ct.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-K&&J>=0&&J<=b.height-H&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(z,J,K,H,gt.convert(qt),gt.convert(kt),St))}finally{const Wt=I!==null?yt.get(I).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,z,J,K,H,St,Pt,Bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(z>=0&&z<=b.width-K&&J>=0&&J<=b.height-H){st.bindFramebuffer(L.FRAMEBUFFER,Dt);const Wt=b.textures[Bt],qt=Wt.format,kt=Wt.type;if(!ct.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,St.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(z,J,K,H,gt.convert(qt),gt.convert(kt),0);const se=I!==null?yt.get(I).__webglFramebuffer:null;st.bindFramebuffer(L.FRAMEBUFFER,se);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ch(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,St),L.deleteBuffer(Qt),L.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,J=0){const K=Math.pow(2,-J),H=Math.floor(b.image.width*K),St=Math.floor(b.image.height*K),Pt=z!==null?z.x:0,Bt=z!==null?z.y:0;At.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Pt,Bt,H,St),st.unbindTexture()};const ou=L.createFramebuffer(),cu=L.createFramebuffer();this.copyTextureToTexture=function(b,z,J=null,K=null,H=0,St=null){St===null&&(H!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=H,H=0):St=0);let Pt,Bt,Dt,Wt,qt,kt,Qt,se,_e;const fe=b.isCompressedTexture?b.mipmaps[St]:b.image;if(J!==null)Pt=J.max.x-J.min.x,Bt=J.max.y-J.min.y,Dt=J.isBox3?J.max.z-J.min.z:1,Wt=J.min.x,qt=J.min.y,kt=J.isBox3?J.min.z:0;else{const Ve=Math.pow(2,-H);Pt=Math.floor(fe.width*Ve),Bt=Math.floor(fe.height*Ve),b.isDataArrayTexture?Dt=fe.depth:b.isData3DTexture?Dt=Math.floor(fe.depth*Ve):Dt=1,Wt=0,qt=0,kt=0}K!==null?(Qt=K.x,se=K.y,_e=K.z):(Qt=0,se=0,_e=0);const ue=gt.convert(z.format),Gt=gt.convert(z.type);let pe;z.isData3DTexture?(At.setTexture3D(z,0),pe=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(At.setTexture2DArray(z,0),pe=L.TEXTURE_2D_ARRAY):(At.setTexture2D(z,0),pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=L.getParameter(L.UNPACK_ROW_LENGTH),Ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Fe=L.getParameter(L.UNPACK_SKIP_ROWS),Yi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);const me=b.isDataArrayTexture||b.isData3DTexture,ke=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Ve=yt.get(b),Ae=yt.get(z),Ie=yt.get(Ve.__renderTarget),ws=yt.get(Ae.__renderTarget);st.bindFramebuffer(L.READ_FRAMEBUFFER,Ie.__webglFramebuffer),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let kn=0;kn<Dt;kn++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,H,kt+kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(z).__webglTexture,St,_e+kn)),L.blitFramebuffer(Wt,qt,Pt,Bt,Qt,se,Pt,Bt,L.DEPTH_BUFFER_BIT,L.NEAREST);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||yt.has(b)){const Ve=yt.get(b),Ae=yt.get(z);st.bindFramebuffer(L.READ_FRAMEBUFFER,ou),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,cu);for(let Ie=0;Ie<Dt;Ie++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,H,kt+Ie):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,H),ke?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,St,_e+Ie):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,St),H!==0?L.blitFramebuffer(Wt,qt,Pt,Bt,Qt,se,Pt,Bt,L.COLOR_BUFFER_BIT,L.NEAREST):ke?L.copyTexSubImage3D(pe,St,Qt,se,_e+Ie,Wt,qt,Pt,Bt):L.copyTexSubImage2D(pe,St,Qt,se,Wt,qt,Pt,Bt);st.bindFramebuffer(L.READ_FRAMEBUFFER,null),st.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ke?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(pe,St,Qt,se,_e,Pt,Bt,Dt,ue,Gt,fe.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,St,Qt,se,_e,Pt,Bt,Dt,ue,fe.data):L.texSubImage3D(pe,St,Qt,se,_e,Pt,Bt,Dt,ue,Gt,fe):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,St,Qt,se,Pt,Bt,ue,Gt,fe.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,St,Qt,se,fe.width,fe.height,ue,fe.data):L.texSubImage2D(L.TEXTURE_2D,St,Qt,se,Pt,Bt,ue,Gt,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yi),St===0&&z.generateMipmaps&&L.generateMipmap(pe),st.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&At.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?At.setTextureCube(b,0):b.isData3DTexture?At.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?At.setTexture2DArray(b,0):At.setTexture2D(b,0),st.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,st.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const so=3.8,ao=1.2;function oo(i,t){return Math.atan2(Math.sin(t-i),Math.cos(t-i))}function c0(i,t){return Math.hypot(i,t)<=30}function l0(i,t,e=0){if(e<4)return .15;const r=c=>(c=Math.max(0,Math.min(1,c)),c*c*(3-2*c)),s=(c,u,h,f)=>r(Math.min(h-Math.abs(i-c),f-Math.abs(t-u))/.9),a=s(0,-15.1,1.5,4.1),o=s(2.05,-19.5,1.45,1.7),l=r((3.1-Math.hypot(i,t+22))/.9);return .15+Math.max((.57-.15)*a,(.58-.15)*o,(.61-.15)*l)}function u0(){let i=0,t=0,e=0;return{reset(n=e){i=t=0,e=n},step(n,r,s,a,o){const l=Math.hypot(r.x,r.z),c=l>1?1/l:1,u=r.x*c,h=r.z*c,f=(u*Math.cos(s)+h*Math.sin(s))*so,d=(-u*Math.sin(s)+h*Math.cos(s))*so,g=Math.max(1,Math.ceil(n/.0125));let _=0;for(let m=0;m<g;m++){const p=n/g,E=1-Math.exp(-p*(l>.03?9:16));i+=(f-i)*E,t+=(d-t)*E,l<.03&&Math.hypot(i,t)<.015&&(i=t=0);const v=Math.hypot(i,t);let x=1;if(v>.01){const y=Math.atan2(i,t),D=oo(e,y);e+=Math.max(-p*7,Math.min(p*7,D)),x=Math.max(0,Math.min(1,(Math.cos(oo(e,y))-.2)/.8))}const T=i*p*x,A=t*p*x,C=a.x,I=a.z;o(a.x+T,a.z)?a.x+=T:i=0,o(a.x,a.z+A)?a.z+=A:t=0;const S=Math.hypot(a.x-C,a.z-I);_+=S}return{distance:_,speed:n?_/n:0,heading:e}}}}function h0(i,t=1){const e=(i%1+1)%1,n=.56,r=ao*n/2;if(e<n){const o=e/n;return{fore:(r-ao*e)*t,lift:0,pitch:(o<.2?-.08*(1-o/.2):o>.8?.13*(o-.8)/.2:0)*t,stance:!0}}const s=(e-n)/(1-n),a=s*s*(3-2*s);return{fore:(-r+2*r*a)*t,lift:Math.sin(Math.PI*s)*.105*t,pitch:-.12*Math.sin(Math.PI*s)*t,stance:!1}}function f0(i,t,e=.32,n=.32){const r=Math.max(.01,Math.min(e+n-1e-4,Math.hypot(i,t))),s=Math.PI-Math.acos(Math.max(-1,Math.min(1,(e*e+n*n-r*r)/(2*e*n)))),a=Math.atan2(-i,t)-Math.acos(Math.max(-1,Math.min(1,(e*e+r*r-n*n)/(2*e*r))));return{hip:a,knee:s,ankle:-a-s}}function d0(i){return .09*Math.sin(i)+Math.hypot(.1008*Math.cos(i),.216*Math.sin(i))}const ir=new U;function We(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ir.copy(t),ir[n]=0,ir.normalize();const c=.5*a/(a+o),u=1-ir.angleTo(i)/l;return Math.sign(ir[e])===1?u*c:o/(a+o)+c+c*(1-u)}class wr extends Wi{constructor(t=1,e=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new U,c=new U,u=new U(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,_=new U,m=.5/a;for(let p=0,E=0;p<h.length;p+=3,E+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*s,h[p+1]=u.y*Math.sign(l.y)+c.y*s,h[p+2]=u.z*Math.sign(l.z)+c.z*s,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[E+0]=We(_,c,"z","y",s,n),d[E+1]=1-We(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),d[E+0]=1-We(_,c,"z","y",s,n),d[E+1]=1-We(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),d[E+0]=1-We(_,c,"x","z",s,t),d[E+1]=We(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),d[E+0]=1-We(_,c,"x","z",s,t),d[E+1]=1-We(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),d[E+0]=1-We(_,c,"x","y",s,t),d[E+1]=1-We(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),d[E+0]=We(_,c,"x","y",s,t),d[E+1]=1-We(_,c,"y","x",s,e);break}}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.segments,t.radius)}}function p0(i="lola"){const t=new Jt;t.name="Лола",t.userData.character="lola";const e=new Jt;e.name="Тело Лолы",t.add(e);const n=[],r=new Map,s=[],a=[],o=[],l=document.createElement("canvas");l.width=l.height=64;const c=l.getContext("2d");c.fillStyle="#ccc",c.fillRect(0,0,64,64),c.strokeStyle="#999",c.lineWidth=.6;for(let q=0;q<64;q+=3)c.beginPath(),c.moveTo(q,0),c.lineTo(q,64),c.moveTo(0,q),c.lineTo(64,q),c.stroke();const u=new ar(l);u.wrapS=u.wrapT=ur,u.repeat.set(3,3);const h={};function f(q,ot=!1){const G=q+":"+ot;return h[G]||(h[G]=new Ze({color:q,roughness:ot?.95:.62,bumpMap:ot?u:null,bumpScale:ot?.009:0}))}const d=f(15189159,!0),g=f(7358510,!0),_=f(9659972,!0),m=f(7900770,!0),p=f(16773852,!0),E=f(8411196),v=f(14136173);function x(q,ot,G,Z,et,Mt=e){const Et=new ee(q,ot);return Et.position.set(G,Z,et),Et.castShadow=!0,Et.receiveShadow=!0,Mt.add(Et),Et}function T(q,ot,G,Z,et,Mt,Et=e){const Ft=x(new qi(Z,24,18),Mt,q,ot,G,Et);return Ft.scale.set(...et),Ft}function A(q,ot,G,Z,et,Mt,Et,Ft=e){return x(new wr(Z,et,Mt,3,Math.min(Z,et,Mt)*.22),Et,q,ot,G,Ft)}function C(q,ot,G,Z=e){return x(new Co(new Il(q.map(et=>new U(...et))),20,ot,6,!1),G,0,0,0,Z)}T(0,1.02,0,.32,[1,1.15,.77],p),T(0,.75,0,.31,[1.05,.67,.85],m);for(const q of[-1,1]){const ot=new Jt;ot.position.set(q*.15,.73,0),ot.name=q<0?"Левая нога":"Правая нога",t.add(ot),T(0,-.16,0,.14,[.85,1.3,.93],m,ot);const G=new Jt;G.position.y=-.32,ot.add(G),T(0,-.15,0,.13,[.85,1.3,.95],m,G),A(0,-.26,.015,.22,.09,.25,p,G);const Z=new Jt;Z.position.y=-.32,G.add(Z),T(0,0,.09,.16,[.88,.63,1.35],E,Z),a.push(A(0,.07,.15,.24,.045,.06,E,Z));for(let Mt=0;Mt<3;Mt++)o.push(A(0,.085,.1+Mt*.04,.13,.012,.012,p,Z));n.push({hip:ot,knee:G,ankle:Z,side:q});const et=new Jt;et.position.set(q*.34,1.17,0),e.add(et),r.set(q,et),T(0,-.04,0,.16,[1,1.12,1],p,et),C([[q*.04,-.05,0],[q*.12,-.18,.06],[q*.15,-.27,.12]],.075,p,et),T(q*.15,-.29,.12,.095,[.82,1,.85],d,et)}A(0,1.02,.25,.39,.4,.08,m);for(const q of[-1,1])A(q*.15,1.23,.2,.065,.3,.05,m),T(q*.15,1.15,.3,.034,[1,1,.4],v);A(0,.93,.3,.18,.14,.03,m);for(let q=-2;q<=2;q++)A(q*.033,.869,.322,.015,.008,.005,p);const I=new Jt;e.add(I);for(let q=0;q<5;q++){const ot=q/5*Math.PI*2;T(Math.sin(ot)*.035,1.033+Math.cos(ot)*.035,.305,.022,[.6,1,.25],p,I)}T(0,1.033,.315,.018,[1,1,.3],v,I);const S=new Jt;e.add(S),S.name="Рюкзак и компас Луки";const y=f(12093797,!0);A(0,1.04,-.3,.46,.49,.24,y,S),A(0,1.19,-.44,.4,.13,.045,E,S),A(0,.94,-.44,.28,.17,.055,y,S);for(const q of[-1,1])C([[q*.19,.88,-.24],[q*.24,1.23,-.19],[q*.19,1.28,.12]],.025,E,S);T(0,1.03,.32,.045,[1,1,.2],v,S),C([[-.025,1.005,.333],[.025,1.055,.333]],.007,p,S);const D=new Jt;e.add(D);const B=new Set(e.children),W=T(0,1.66,-.13,.39,[1.08,1.13,.82],g);T(0,1.65,.015,.35,[1,1.06,.94],d);for(const q of[-1,1]){T(q*.34,1.6,.01,.065,[.7,1,.7],d);const ot=new Jt;ot.position.set(q*.355,1.7,0),e.add(ot),s.push({braid:ot,side:q});for(let et=0;et<10;et++){const Mt=-et*.068,Et=q*Math.sin(et*.58)*.045;T(Et,Mt,.035+Math.cos(et*2.4)*.025,.082,[.9,.82,.8],et%2?g:_,ot)}const G=q*.015,Z=-.66;T(G-q*.045,Z,.06,.065,[1,.55,.42],m,ot),T(G+q*.045,Z,.06,.065,[1,.55,.42],m,ot),T(G,Z,.09,.026,[1,1,.65],v,ot)}for(let q=0;q<8;q++){const ot=(q-3.5)*.072;C([[ot*.25,2,-.01],[ot,1.97,.17],[ot*1.05,1.86+Math.abs(ot)*.13,.275]],.043,q%2?_:g)}const Q=new Jt;e.add(Q);for(let q=0;q<5;q++){const ot=(q-2)*.1;T(ot,1.995+Math.sin(q)*.025,.045,.1,[1.1,.63,1],q%2?g:_,Q)}const Y=f(16776434),$=f(7111786),lt=f(3156514),X=f(13866889);for(const q of[-1,1])T(q*.13,1.68,.316,.078,[.83,1,.36],Y),T(q*.13,1.675,.345,.053,[.87,1,.42],$),T(q*.13,1.675,.363,.033,[.85,1,.32],lt),T(q*.13-.013,1.696,.375,.013,[1,1,.3],Y),T(q*.13+.016,1.659,.375,.006,[1,1,.3],Y),C([[q*.07,1.797,.3],[q*.13,1.817,.302],[q*.19,1.795,.28]],.009,g),C([[q*.18,1.71,.34],[q*.205,1.731,.33],[q*.215,1.735,.32]],.007,g),T(q*.235,1.565,.27,.062,[1,.57,.1],X);T(0,1.595,.352,.036,[.8,.8,.7],d),C([[-.075,1.515,.301],[0,1.493,.324],[.075,1.515,.301]],.009,f(11169635));for(const q of[...e.children])B.has(q)||D.attach(q);const N=new Jt;N.position.set(.2,-.48,.13),r.get(1).add(N),A(0,0,0,.21,.055,.21,v,N),A(0,.26,0,.21,.05,.21,v,N);const k=new Ze({color:16768908,emissive:16104275,emissiveIntensity:.65,roughness:.4});T(0,.13,0,.07,[.75,1.4,.75],k,N);for(const q of[-.085,.085])for(const ot of[-.085,.085])A(q,.13,ot,.025,.25,.025,v,N);C([[-.07,.29,0],[-.07,.38,0],[0,.41,0],[.07,.38,0],[.07,.29,0]],.014,v,N);let j=0,F=0,vt=0;return t.userData.rig={body:e,legs:n,arms:r,braids:s,lantern:N},t.userData.animate=(q,{distance:ot=0,speed:G=0,seated:Z=!1}={})=>{vt+=q;const et=Z?0:Math.min(1,G/so);F+=(et-F)*(1-Math.exp(-q*14)),Z||(j=(j+ot/ao)%1);const Mt=j*Math.PI*2,Et=Math.cos(Mt*2)*.009*F;e.position.y=Z?0:.03-.1*F+Et+Math.sin(vt*1.8)*.004*(1-F),e.position.x=Math.sin(Mt)*.018*F,e.rotation.set(Z?-.035:.025*F,Math.sin(Mt)*.035*F,Math.sin(Mt)*.025*F);for(const{hip:Ft,knee:Vt,ankle:L,side:dt}of n){if(Z){Ft.position.y=.7,Ft.rotation.x=-1.35,Vt.rotation.x=1.5,L.rotation.x=-.15;continue}Ft.position.y=.73-.1*F+Et;const ht=h0(j+(dt>0?.5:0),F),ct=f0(ht.fore,Ft.position.y-d0(ht.pitch)-ht.lift);Ft.rotation.x=ct.hip,Vt.rotation.x=ct.knee,L.rotation.x=ct.ankle+ht.pitch}r.get(-1).rotation.x=Z?-.35:Math.sin(Mt)*.28*F,r.get(1).rotation.x=Z?-.2:-Math.sin(Mt)*.11*F,N.rotation.x=-r.get(1).rotation.x*.9+Math.sin(Mt-.4)*.035*F,D.rotation.y=-Math.sin(Mt)*.022*F,D.rotation.z=-Math.sin(Mt)*.012*F;for(const{braid:Ft,side:Vt}of s)Ft.rotation.x=Math.sin(Mt-.35)*.035*F,Ft.rotation.z=Vt*Math.cos(Mt)*.025*F},t.userData.resetPose=()=>{j=F=0,t.userData.animate(0)},t.userData.setCharacter=q=>{const ot=q==="luka";t.name=ot?"Лука":"Лола",t.userData.character=ot?"luka":"lola",e.name=ot?"Тело Луки":"Тело Лолы",m.color.setHex(ot?8101294:7900770),I.visible=!ot,S.visible=ot,Q.visible=ot,W.scale.set(1.08,ot?1.03:1.13,.82),s.forEach(({braid:G})=>G.visible=!ot),a.forEach(G=>G.visible=!ot),o.forEach(G=>G.visible=ot)},t.userData.setCharacter(i),t.userData.resetPose(),t}const tn=[10351577,11122431,15903965,11921146,16765843];function m0({scene:i,player:t,paths:e,locations:n,collisions:r,stars:s,rewardGroups:a,groundHeight:o}){const l=new Jt;l.name="Волшебная подсветка",i.add(l);const c=new Jt;c.name="Неоновые тени и светлячки",l.add(c);let u=!0,h=0,f=0;const d=matchMedia("(prefers-reduced-motion: reduce)").matches,g=document.createElement("canvas");g.width=g.height=128;const _=g.getContext("2d"),m=_.createRadialGradient(64,64,0,64,64,64);m.addColorStop(0,"rgba(255,255,255,.65)"),m.addColorStop(.24,"rgba(255,255,255,.42)"),m.addColorStop(.6,"rgba(255,255,255,.16)"),m.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=m,_.fillRect(0,0,128,128);const p=new ar(g);function E(F,vt,q,ot,G,Z,et=.3,Mt=c){const Et=new Fn({map:p,color:Z,transparent:!0,opacity:et,blending:Jn,depthWrite:!1,toneMapped:!1}),Ft=new ee(new Xi(1,1),Et);return Ft.rotation.x=-Math.PI/2,Ft.position.set(F,vt,q),Ft.scale.set(ot,G,1),Ft.renderOrder=2,Ft.raycast=()=>{},Mt.add(Ft),Ft}function v(F,vt,q,ot,G,Z=l){const et=new ee(new On(ot,.027,6,72),new Fn({color:G,transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));return et.rotation.x=-Math.PI/2,et.position.set(F,vt,q),et.raycast=()=>{},Z.add(et),et}const x=new ee(new qi(200,32,20),new wn({side:Le,depthWrite:!1,toneMapped:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vDirection;void main(){vDirection=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vDirection;void main(){
   vec3 d=normalize(vDirection);float h=smoothstep(-.1,.85,d.y);
   vec3 horizon=vec3(.16,.18,.32),zenith=vec3(.025,.035,.10);
   vec3 c=mix(horizon,zenith,h);
   float ribbon=pow(max(0.,sin(d.x*5.+d.y*8.+sin(d.z*4.+uTime*.018)*.65)),10.);
   ribbon*=smoothstep(.08,.4,d.y)*(1.-smoothstep(.7,1.,d.y));
   c+=vec3(.055,.11,.105)*ribbon;
   gl_FragColor=vec4(c,1.);
   #include <colorspace_fragment>
  }`}));x.renderOrder=-100,x.frustumCulled=!1,x.raycast=()=>{},i.add(x),r.forEach((F,vt)=>E(F.x+.65,.161,F.z+.4,F.w*1.8,F.d*1.9,tn[vt%tn.length],.3)),n.forEach((F,vt)=>{E(F.x,.149,F.z,10,10,tn[vt],.26),v(F.x,.17,F.z,3.96,tn[vt]),F.ring.material.color.setHex(tn[vt]),F.ring.material.emissive.setHex(tn[vt]),F.ring.material.emissiveIntensity=.9}),v(0,.175,0,7.12,13026047),v(0,-.02,0,32.7,9428439),E(0,.157,0,15,15,11118063,.16);const T=new Jt;T.name="Знаки на площади",l.add(T);for(let F=0;F<12;F++){const vt=F/12*Math.PI*2,q=6.65,ot=new ee(new Ao(.065,0),new Fn({color:tn[F%5],toneMapped:!1}));ot.position.set(Math.sin(vt)*q,.2,Math.cos(vt)*q),ot.scale.y=.2,ot.raycast=()=>{},T.add(ot)}a.forEach(F=>E(F.position.x,.17,F.position.z,1.8,1.8,tn[a.indexOf(F)],.25));const A=new Jt;A.name="Неоновая тень героя",c.add(A),E(-.19,.014,.15,1.65,1.05,3602904,.55,A),E(.22,.016,.3,1.25,.95,11953663,.48,A);const C=new Ec(12301055,11,21,2);C.position.set(0,4,0),l.add(C);const I=new Ec(16765323,2.5,5.5,2);I.position.set(0,.13,0),t.userData.rig.lantern.add(I);const S=new ja(new _s({map:p,color:16766346,transparent:!0,opacity:.65,blending:Jn,depthWrite:!1,toneMapped:!1}));S.position.y=.13,S.scale.set(.65,.65,1),S.raycast=()=>{},t.userData.rig.lantern.add(S);const y=[{color:10403282,glow:8429501},{color:11717012,glow:9350764}].map(F=>({resting:new Ze({color:F.color,roughness:.67,emissive:F.glow,emissiveIntensity:.16}),guided:new Ze({color:F.color,roughness:.67,emissive:F.glow,emissiveIntensity:.4}),active:new Ze({color:F.color,roughness:.67,emissive:F.glow,emissiveIntensity:.65})}));e.forEach(F=>{F.material=y[0].resting});const D=new Float32Array(162),B=new Float32Array(162),W=[];for(let F=0;F<54;F++){const vt=F*2.39996,q=3+F%13*1.65,ot=Math.sin(vt)*q,G=Math.cos(vt)*q,Z=.8+F%7*.56;W.push({x:ot,y:Z,z:G}),D.set([ot,Z,G],F*3),new Kt(tn[F%5]).toArray(B,F*3)}const Q=new Me;Q.setAttribute("position",new Ue(D,3)),Q.setAttribute("color",new Ue(B,3));const Y=new dc(Q,new Qa({map:p,size:.19,transparent:!0,opacity:.9,vertexColors:!0,blending:Jn,depthWrite:!1,toneMapped:!1}));Y.frustumCulled=!1,Y.raycast=()=>{},c.add(Y);const $=[];for(let F=0;F<100;F++){const vt=F*2.39996,q=.12+F%23/27,ot=Math.sqrt(1-q*q)*90;$.push(Math.cos(vt)*ot,q*90,Math.sin(vt)*ot)}const lt=new Me;lt.setAttribute("position",new le($,3));const X=new dc(lt,new Qa({map:p,color:15132415,size:.34,transparent:!0,opacity:.75,blending:Jn,depthWrite:!1,toneMapped:!1,fog:!1}));X.raycast=()=>{},l.add(X);const N=[];for(let F=0;F<12;F++){const vt=E(0,.01,0,.34,.52,tn[F%2?0:2],0);N.push({m:vt,age:10})}const k=new U;s.forEach(F=>{F.material=F.material.clone(),F.material.emissive=new Kt(16762485),F.material.emissiveIntensity=.65});const j=s.map(F=>{const vt=new ja(new _s({map:p,color:16765833,transparent:!0,opacity:.28,blending:Jn,depthWrite:!1,toneMapped:!1}));return vt.scale.set(1.55,1.55,1),vt.raycast=()=>{},c.add(vt),vt});return{group:l,setEnabled(F){u=F,c.visible=F,C.intensity=F?11:5,I.intensity=F?2.5:1.5,S.visible=F,X.visible=F},update(F,vt,q,ot=!1,G=null,Z=[]){if(x.material.uniforms.uTime.value=d?0:vt,A.position.set(t.position.x,o(t.position.x,t.position.z)+.006,t.position.z),A.visible=!ot,e.forEach(et=>{const Mt=Math.hypot(et.position.x-t.position.x,et.position.z-t.position.z)<2.2,Et=y[Z.includes(et.userData.routeId)?1:0];et.material=Et[Mt?"active":et.userData.routeId===G?"guided":"resting"]}),j.forEach((et,Mt)=>{et.position.copy(s[Mt].position),et.material.opacity=.25+(d?0:Math.sin(vt*.65+Mt)*.045)}),!!u){if(!d){for(let et=0;et<W.length;et++){const Mt=W[et];D[et*3]=Mt.x+Math.sin(vt*.24+et)*.28,D[et*3+1]=Mt.y+Math.sin(vt*.6+et*1.8)*.22,D[et*3+2]=Mt.z+Math.cos(vt*.27+et)*.24}Q.attributes.position.needsUpdate=!0}if(h+=q.distance||0,!ot&&h>.55&&!d){h=0;const et=t.userData.rig.legs[f%2].ankle;t.updateMatrixWorld(!0),et.getWorldPosition(k);const Mt=N[f%N.length];Mt.m.position.set(k.x,o(k.x,k.z)+.017,k.z+.05),Mt.m.rotation.z=-t.rotation.y,Mt.age=0,f++}N.forEach(et=>{et.age+=F,et.m.material.opacity=Math.max(0,1-et.age/1.65)*.48})}}}}function g0(i,t,e,n=[]){const r=new Jt;r.name="Звёздная дорожка к поручению",i.add(r);const s=new gr;for(let u=0;u<10;u++){const h=u*Math.PI/5,f=u%2?.075:.17,d=Math.sin(h)*f,g=Math.cos(h)*f;u?s.lineTo(d,g):s.moveTo(d,g)}s.closePath();const a=new Ro(s),o=new Fn({color:16768913,side:nn,depthWrite:!1,toneMapped:!1}),l=Array.from({length:32},()=>{const u=new ee(a,o);return u.rotation.x=-Math.PI/2,u.raycast=()=>{},r.add(u),u}),c=new ee(a,o);return c.scale.setScalar(3),c.raycast=()=>{},r.add(c),{group:r,update(u,h=!1){if(r.visible=!!u&&!h,!r.visible)return;const f=n.filter(g=>g.userData.routeId===u.id),d=Math.hypot(u.x,u.z);l.forEach((g,_)=>{if(u.id){const m=f[_];if(g.visible=!!m,!m)return;g.position.set(m.position.x,m.position.y+m.geometry.parameters.height/2+.018,m.position.z),g.rotation.z=-m.rotation.y}else{const m=2+_*.9;if(g.visible=m<d-.7,!g.visible)return;const p=u.x/d*m,E=u.z/d*m;g.position.set(p,e(p,E)+.065,E),g.rotation.z=0}}),c.position.set(u.x,e(u.x,u.z)+1.8,u.z),c.lookAt(t.position.x,c.position.y+2,t.position.z+6)}}}function Jl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Me;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Kc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const g=Kc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Kc(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Ue(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);o.setComponent(f+h,g,_)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}function _0(i){const t=new Jt;t.name="Дальние земли Страны игрушек",i.add(t);const e=new Jt,n=new Jt;t.add(e,n);const r={grass:6654855,hill:8956053,sage:10794397,blue:9415874,lavender:10657983,cream:15327183,wood:11371875,terra:12883074,leaf:7705986,water:8631231,metal:9543855,gold:14403725},s=new Map,a=new Map,o=(N,k=!1)=>{const j=N+":"+k;return s.has(j)||s.set(j,new Ze({color:N,roughness:.95,emissive:k?N:0,emissiveIntensity:k?.65:0})),s.get(j)},l=(N,k)=>(a.has(N)||a.set(N,k()),a.get(N));function c(N,k,j,F,vt,q,ot=1,G=1,Z=1,et=0,Mt=!1){const Et=new ee(k,o(j,Mt));return Et.position.set(F,vt,q),Et.scale.set(ot,G,Z),Et.rotation.y=et,Et.raycast=()=>{},N.add(Et),Et}const u=l("box",()=>new wr(1,1,1,2,.08)),h=l("ball",()=>new qi(1,16,10)),f=l("cylinder",()=>new zi(1,1,1,12)),d=l("roof",()=>new ni(Math.SQRT1_2,1,4)),g=l("cone",()=>new ni(1,1,16)),_=(N,k,j,F,vt,q,ot,G,Z=0,et=!1)=>c(N,u,G,k,j,F,vt,q,ot,Z,et),m=(N,k,j,F,vt,q,ot,G)=>c(N,h,G,k,j,F,vt,q,ot),p=(N,k,j,F,vt,q,ot)=>c(N,f,ot,k,j,F,vt,q,vt);function E(N,k,j=e){const F=new Jt;return F.position.set(Math.sin(N)*k,0,Math.cos(N)*k),F.rotation.y=N+Math.PI,j.add(F),F}function v(N,k,j,F,vt,q){_(N,k,vt/2-.1,j,F,vt,F*.85,q),c(N,d,r.terra,k,vt+.55,j,F*1.18,1.3,F*1.04,Math.PI/4),_(N,k,.65,j+F*.43,.58,1.3,.07,r.wood);for(const ot of[-1,1])_(N,k+ot*F*.29,vt*.63,j+F*.435,.48,.63,.075,r.gold,0,!0);_(N,k+F*.25,vt+1.15,j-.25,.32,1,.35,r.wood)}function x(N,k,j,F,vt=r.leaf){p(N,k,F*.45-.2,j,.12*F,F*.9,r.wood),m(N,k,F*1.02,j,F*.56,F*.8,F*.52,vt)}const T=c(e,new zi(145,145,2,128),r.grass,0,-1.28,0);T.name="Земля за пределами игровой зоны";for(let N=0;N<3;N++)for(let k=0;k<18;k++){const j=k/18*Math.PI*2+N*.13,F=44+N*24+k%3*2,vt=N===0?6.5:11+N*2,q=N===0?2.7+k%4:5+k%4*1.6;m(e,Math.sin(j)*F,-1.5,Math.cos(j)*F,vt,q,vt*.85,[r.hill,r.sage,r.blue,r.lavender][(k+N)%4])}for(let N=0;N<92;N++){const k=N*2.399963,j=37+N%13*3.8;x(e,Math.sin(k)*j,Math.cos(k)*j,1.6+N%5*.35,N%3?r.leaf:r.sage)}for(let N=0;N<7;N++){const k=E(N/7*Math.PI*2+.18,46+N%3*5);k.name="Дальняя игрушечная деревня "+(N+1);for(let j=0;j<4;j++)v(k,(j-1.5)*3.5,Math.sin(j*1.8)*2,2.3+j%2*.5,2.6+j%3*.6,[r.cream,r.blue,r.sage,r.lavender][(N+j)%4]);_(k,0,-.12,3.4,15,.08,1.1,r.cream)}const A=E(Math.PI+.28,77);A.name="Замок на дальнем холме",m(A,0,-1.5,0,14,5,10,r.lavender),_(A,0,3.4,0,11,7,4,r.cream);for(const N of[-5.5,5.5]){p(A,N,5,0,1.55,10,r.blue),c(A,g,r.lavender,N,11.1,0,2,3,2);for(let k=0;k<3;k++)_(A,N,3+k*2,1.5,.55,.85,.1,r.gold,0,!0)}for(let N=-4;N<=4;N+=2)_(A,N,7.4,0,1.1,1.2,4,r.cream);_(A,0,2.1,2.04,2,4,.1,r.wood);const C=E(-1.37,52);C.name="Озеро с парусниками",m(C,0,-.24,0,9,.1,6,r.water);for(const[N,k]of[[-3,0],[3,1]]){_(C,N,.06,k,2,.35,.8,r.wood),p(C,N,1.1,k,.045,2.1,r.wood);const j=new ee(new ni(1,1.8,3),o(r.cream));j.position.set(N+.38,1.2,k),j.scale.z=.07,j.rotation.z=-.15,j.raycast=()=>{},C.add(j)}const I=E(2.05,49);I.name="Ветряная мельница",p(I,0,2.9,0,1.5,6,r.cream),c(I,g,r.terra,0,6.6,0,1.9,2.1,1.9);const S=E(2.05,49,n),y=new Jt;y.position.set(0,4.8,1.6),S.add(y);for(let N=0;N<4;N++){const k=new Jt;k.rotation.z=N*Math.PI/2,y.add(k),_(k,0,1.4,0,.32,3,.16,r.wood),_(k,.35,2.05,.03,.65,1.5,.09,r.cream)}for(const N of[-4,4])for(let k=0;k<4;k++)m(I,N,-.02,k*1.2-2,.75,.35,.45,r.sage);const D=E(.85,55);D.name="Дальняя игрушечная ярмарка";for(const N of[-2,2]){const k=_(D,N,3,0,.3,6,.4,r.wood);k.rotation.z=N>0?.3:-.3}const B=new ee(new On(3.8,.12,6,48),o(r.cream));B.position.set(0,6,.1),B.raycast=()=>{},D.add(B);for(let N=0;N<8;N++){const k=N/8*Math.PI*2,j=Math.sin(k)*3.8,F=6+Math.cos(k)*3.8,vt=_(D,j/2,6+(F-6)/2,.1,.07,3.8,.08,r.gold);vt.rotation.z=-k,_(D,j,F-.35,.1,1.1,.7,.8,N%2?r.blue:r.terra)}for(const N of[41.5,42.5]){const k=new ee(new On(N,.045,4,192),o(r.metal));k.rotation.x=-Math.PI/2,k.position.y=-.02,k.raycast=()=>{},e.add(k)}for(let N=0;N<180;N++){const k=N/180*Math.PI*2;_(e,Math.sin(k)*42,-.1,Math.cos(k)*42,1.55,.12,.19,r.wood,k)}const W=new Jt;W.name="Дальний поезд",n.add(W),_(W,0,.55,0,1,.6,1.8,r.blue),_(W,0,1,-.45,1,.65,.75,r.terra),_(W,0,1.4,-.45,1.3,.12,.95,r.cream),p(W,0,1.03,.53,.13,.7,r.wood);for(const N of[-2.4,-4.1])_(W,0,.53,N,1.05,.6,1.25,r.sage),_(W,0,.92,N,1.2,.12,1.4,r.cream);for(const N of[-.6,.5,-2.7,-2.1,-4.4,-3.8])for(const k of[-.52,.52]){const j=p(W,k,.22,N,.23,.12,r.wood);j.rotation.z=Math.PI/2}const Q=[];for(let N=0;N<9;N++){const k=E(N/9*Math.PI*2,83+N%3*8,n);k.position.y=20+N%3*3,Q.push(k);for(let j=0;j<4;j++)m(k,(j-1.5)*3,Math.sin(j)*.65,0,3,1.45+j%2*.5,1.5,13026775)}function Y(N){N.updateWorldMatrix(!0,!0);const k=N.matrixWorld.clone().invert(),j=new Map;N.traverse(F=>{if(F.isMesh){const vt=k.clone().multiply(F.matrixWorld),q=F.geometry.index?F.geometry.toNonIndexed():F.geometry.clone();q.applyMatrix4(vt);const ot=j.get(F.material)||[];ot.push(q),j.set(F.material,ot)}}),N.clear();for(const[F,vt]of j){const q=new ee(Jl(vt),F);q.raycast=()=>{},N.add(q),vt.forEach(ot=>ot.dispose())}return j.size}const $=Y(e);Y(W),Y(y),Q.forEach(Y),t.userData.scenery={villages:7,trees:92,staticBatches:$};let lt=!0;const X=matchMedia("(prefers-reduced-motion: reduce)").matches;return{group:t,setEnabled(N){lt=N},update(N,k){lt&&!X&&(y.rotation.z+=N*.2);const j=(lt&&!X?k:0)*.035+.6;W.position.set(Math.sin(j)*42,-.03,Math.cos(j)*42),W.rotation.y=j+Math.PI/2,Q.forEach((F,vt)=>{F.rotation.y=vt/9*Math.PI*2+Math.PI+(lt&&!X?Math.sin(k*.035+vt)*.035:0)})}}}const zt={cream:15984590,green:9677180,wood:11962978,blue:9547195,terra:13012082,yellow:15255671};function v0(i){const t=new o0({canvas:i,antialias:!0,alpha:!1});t.setPixelRatio(Math.min(devicePixelRatio,1.6)),t.shadowMap.enabled=!0,t.shadowMap.type=cl,t.setClearColor(5397122),t.outputColorSpace=Be,t.toneMapping=ul,t.toneMappingExposure=1.08;const e=new Ih;e.fog=new So(5397122,45,145);const n=new He(48,1,.1,280);e.add(new xf(12569087,4538488,1.35));const r=new Sf(16767421,1.1);r.position.set(-15,28,14),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-35,right:35,top:35,bottom:-35,far:90}),r.shadow.normalBias=.04,e.add(r);const s=[],a=[],o=[],l=[],c=document.createElement("canvas");c.width=64,c.height=64;const u=c.getContext("2d");u.fillStyle="#ccc",u.fillRect(0,0,64,64),u.strokeStyle="#999",u.lineWidth=1;for(let R=0;R<64;R+=4)u.beginPath(),u.moveTo(R,0),u.lineTo(R,64),u.moveTo(0,R),u.lineTo(64,R),u.stroke();const h=new ar(c);h.wrapS=h.wrapT=ur,h.repeat.set(3,3);const f=R=>new Ze({color:R,emissive:[zt.yellow,16768134].includes(R)?R:0,emissiveIntensity:.8,roughness:.83,bumpMap:[zt.green,zt.terra,zt.blue,15121813].includes(R)?h:null,bumpScale:.025}),d={};function g(R){return d[R]||(d[R]=f(R))}function _(R,O,rt,gt,at,_t,P,it,xt=0){const ft=new ee(new wr(at,_t,P,2,Math.min(.1,at/5,_t/5,P/5)),g(it));return ft.position.set(O,rt,gt),ft.rotation.y=xt,ft.castShadow=!0,ft.receiveShadow=!0,R.add(ft),ft}function m(R,O,rt,gt,at,_t,P=[1,1,1]){const it=new ee(new qi(at,16,12),g(_t));return it.position.set(O,rt,gt),it.scale.set(...P),it.castShadow=!0,it.receiveShadow=!0,R.add(it),it}function p(R,O,rt,gt,at,_t,P,it=at){const xt=new ee(new zi(it,at,_t,24),g(P));return xt.position.set(O,rt,gt),xt.castShadow=!0,xt.receiveShadow=!0,R.add(xt),xt}function E(R,O,rt,gt,at=3){const _t=document.createElement("canvas");_t.width=768,_t.height=128;const P=_t.getContext("2d");P.fillStyle="#f6edd9",P.beginPath(),P.roundRect(0,0,768,128,24),P.fill(),P.font="600 42px Montserrat",P.textAlign="center",P.textBaseline="middle",P.fillStyle="#4f5b4c",P.fillText(R,384,64);const it=new ja(new _s({map:new ar(_t),depthTest:!0,toneMapped:!1}));return it.position.set(O,rt,gt),it.scale.set(at,at/6,1),e.add(it),s.push(it),it}const v=p(e,0,-.48,0,33,1.2,zt.green);v.material.color.setHex(5406340),v.receiveShadow=!0,v.name="Рельеф страны";const x=p(e,0,.07,0,7.4,.12,11840204);x.name="Край площади";const T=p(e,0,.095,0,6.9,.1,14076887);T.name="Покрытие площади";const A=[[-17,-11],[-15,10],[0,19],[16,10],[17,-11]],C=Pe.map((R,O)=>{const[rt,gt]=A[O],at=Math.atan2(-rt,-gt);return{id:R.id,x:rt,z:gt,name:R.name,facing:at,entryX:rt+Math.sin(at)*2.6,entryZ:gt+Math.cos(at)*2.6}}),I=[];C.forEach((R,O)=>{const rt=R.entryX,gt=R.entryZ,at=Math.hypot(rt,gt);for(let ft=7;ft<at-.8;ft+=1.2){const pt=_(e,rt*ft/at,.09,gt*ft/at,.85,.12,1.05,13682089,Math.atan2(rt,gt));pt.userData.routeId=R.id,I.push(pt)}const _t=new Jt;_t.position.set(R.x,0,R.z),_t.rotation.y=R.facing;const P=a.length;e.add(_t),p(_t,0,.08,0,4.1,.13,14406847);const it=new Kt(Pe[O].color).getHex();if(O===0){_(_t,0,2.3,-1.5,5.2,4.5,3.5,it);const ft=new ee(new ni(4,2,4),g(zt.cream));ft.rotation.y=Math.PI/4,ft.position.set(0,5.4,-1.5),_t.add(ft),_(_t,0,1.1,.29,1.25,2.3,.12,zt.wood),[-1.65,1.65].forEach(pt=>{const ut=_(_t,pt,3,.3,.95,1.1,.15,zt.yellow);l.push(ut),_(_t,pt,3,.42,.08,1.1,.08,zt.wood)}),a.push({x:R.x,z:R.z-1.5,w:5.5,d:3.8})}if(O===1){_(_t,0,1.3,-2,5.5,2.6,2.5,it),_(_t,0,2.85,-2,6.3,.5,3.2,zt.cream),_(_t,0,1.3,-.7,1.2,1.8,.15,zt.wood);for(let ft=-2;ft<=2;ft+=4)_(_t,ft,1.7,-.7,1,.8,.1,zt.yellow);a.push({x:R.x,z:R.z-2,w:5.8,d:2.7})}if(O===2){_(_t,0,2,-1.7,5.4,4,3.6,it);const ft=new ee(new ni(4.3,2.1,4),g(zt.blue));ft.rotation.y=Math.PI/4,ft.position.set(0,5,-1.7),ft.castShadow=!0,_t.add(ft),_(_t,0,1.15,.15,1.3,2.3,.16,zt.wood),m(_t,.4,1.1,.27,.07,zt.yellow);for(const ut of[-1.8,1.8])_(_t,ut,2.25,.17,1.05,1.2,.15,zt.yellow),_(_t,ut,2.25,.28,.07,1.2,.06,zt.cream),_(_t,ut,2.25,.28,1.05,.07,.06,zt.cream);_(_t,0,3.45,.2,2.2,.65,.14,zt.cream);for(const ut of[-Math.PI/4,Math.PI/4]){const Lt=_(_t,-.5,3.45,.31,.08,.4,.06,zt.terra);Lt.rotation.z=ut}const pt=new ee(new On(.19,.04,6,20),g(zt.blue));pt.position.set(.5,3.45,.32),_t.add(pt),a.push({x:R.x,z:R.z-1.7,w:5.6,d:3.8})}if(O===3){_(_t,0,.3,-1.8,6,.6,3.5,zt.wood),_(_t,0,2.6,-3.3,6,4.6,.3,7828106);for(const ft of[-2.7,2.7])p(_t,ft,2.3,-1.8,.5,4.4,it),_(_t,ft,4.6,-1.8,1.3,.4,2,zt.cream);_(_t,0,4.6,-1.8,6,.5,2,it);for(let ft=-2;ft<=2;ft++)m(_t,ft,3.8,-3,.1,zt.yellow);a.push({x:R.x,z:R.z-2,w:6,d:3})}if(O===4){_(_t,0,.65,-1.5,5.8,1.3,3.5,zt.wood);for(const ft of[-2.4,2.4])_(_t,ft,2.7,-2,.3,4,3,zt.wood);_(_t,0,4.7,-2,6,.5,4,it);for(let ft=0;ft<5;ft++)_(_t,-1.6+ft*.8,1.5,-1.5,.6,.35,1.7,ft%2?zt.cream:it);a.push({x:R.x,z:R.z-1.5,w:6,d:3.5})}for(const ft of a.slice(P)){const pt=ft.x-R.x,ut=ft.z-R.z,Lt=Math.cos(R.facing),Xt=Math.sin(R.facing),re=ft.w,te=ft.d;ft.x=R.x+pt*Lt+ut*Xt,ft.z=R.z-pt*Xt+ut*Lt,ft.w=Math.abs(Lt)*re+Math.abs(Xt)*te,ft.d=Math.abs(Xt)*re+Math.abs(Lt)*te}E(Pe[O].short,R.x,6.6,R.z,5.8);const xt=new ee(new On(.8,.07,8,32),new Ze({color:15387515,emissive:12886107,emissiveIntensity:.3}));xt.rotation.x=-Math.PI/2,xt.position.set(R.entryX,.24,R.entryZ),e.add(xt),R.ring=xt});for(let R=0;R<29;R++){const O=R/29*Math.PI*2,rt=26+Math.sin(R*7)*2,gt=Math.sin(O)*rt,at=Math.cos(O)*rt;if(at<-22&&Math.abs(gt)<8)continue;const _t=new Jt;_t.position.set(gt,0,at),e.add(_t),p(_t,0,1,0,.2,2.5,zt.wood),m(_t,0,2.9,0,1.3,R%3===0?11910547:8165752,[1,1.3,1]);for(let P=-1;P<=1;P++)_(_t,P*.4,2.9,1.05,.07,.12,.04,14146493);R%4===0&&m(e,gt,-.6,at,3,10990987,[1,.5,1])}for(let R=0;R<7;R++){const O=-23+R*7,rt=-21-Math.abs(Math.sin(R))*3;Math.abs(O)<7||(_(e,O,1.2,rt,2.7,2.4,2.7,[zt.blue,zt.terra,zt.cream][R%3]),_(e,O,1.4,rt+1.4,.8,1,.1,zt.yellow),a.push({x:O,z:rt,w:3,d:3}))}const S=_0(e),y=p0(),D=y;y.position.set(0,.15,4),e.add(y);const B=[];for(let R=0;R<6;R++){const O=R/6*Math.PI*2,rt=m(y.userData.rig.lantern,Math.cos(O)*.3,.16+Math.sin(O)*.3,.15,.035,zt.yellow);rt.material=new Fn({color:16767107}),rt.visible=!1,B.push(rt)}let W={distance:0,speed:0};function Q(R,O,rt=Ht){return l0(R,O,rt?.completed.includes("bridge")?4:0)}const Y=document.createElement("canvas");Y.width=512,Y.height=384;const $=Y.getContext("2d");$.fillStyle="#eee5cb",$.fillRect(0,0,512,384);const lt=[[95,95],[95,275],[256,310],[417,275],[417,95]];$.lineWidth=14,$.strokeStyle="#c4c5a1",lt.forEach(([R,O])=>{$.beginPath(),$.moveTo(256,180),$.lineTo(R,O),$.stroke()}),$.fillStyle="#a9b788",$.beginPath(),$.arc(256,180,37,0,7),$.fill(),lt.forEach(([R,O],rt)=>{$.fillStyle=Pe[rt].color,$.beginPath(),$.arc(R,O,25,0,7),$.fill(),$.font="600 25px Montserrat",$.fillStyle="#fff8e9",$.textAlign="center",$.fillText(String(rt+1),R,O+8)});const X={x:8,z:0};_(e,X.x,1.5,X.z,2.5,1.9,.2,zt.wood),_(e,X.x-.8,.6,X.z,.13,1.2,.13,zt.wood),_(e,X.x+.8,.6,X.z,.13,1.2,.13,zt.wood);const N=new ee(new Xi(2.25,1.65),new Ze({map:new ar(Y),roughness:1}));N.position.set(X.x,1.5,X.z+.12),e.add(N),E("Карта страны",X.x,2.9,X.z,2.8),a.push({x:X.x,z:X.z,w:2.5,d:.3});for(let R=0;R<5;R++){const O=(R-2)*1.45;p(e,O,.32,-4,.5,.65,zt.cream);const rt=new Jt;rt.position.set(O,.75,-4),e.add(rt),o.push(rt),E(String(R+1),O,.4,-3.48,.45)}const k=new gr;for(let R=0;R<10;R++){const O=R*Math.PI/5,rt=R%2?.23:.5,gt=Math.sin(O)*rt,at=Math.cos(O)*rt;R?k.lineTo(gt,at):k.moveTo(gt,at)}k.closePath();const j=new xs(k,{depth:.12,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.035,bevelThickness:.035});o.forEach(R=>{const O=new ee(j,new Ze({color:7831947,roughness:.6}));O.position.y=.5,R.add(O),R.userData.star=O}),_(e,0,.105,-15,13,.08,5.5,5536427);const F=new Jt;e.add(F);const vt=[];for(let R=0;R<11;R++){const O=_(F,0,.42,-11.9-R*.7,3,.3,.61,zt.wood);vt.push(O)}const q=[];for(const R of[-1.3,1.3])for(const O of[-12,-17.5])q.push(_(e,R,.5,O,.25,1.1,.25,zt.cream));const ot=[];for(const R of[-1.4,1.4])ot.push(_(e,R,1.1,-15.2,.12,.12,7,zt.cream));for(const R of[-.5,.5])ot.push(_(e,R,.62,-15.4,.065,.07,7.8,10133137));const G=[_(e,2,.47,-19.5,2.5,.2,3,zt.wood)],Z=new Jt;Z.position.set(0,0,-22),e.add(Z),p(Z,0,.3,0,3,.6,zt.cream);const et=new Jt;et.position.y=1.2,Z.add(et),p(et,0,.3,0,1.3,1,zt.terra,.1),p(et,0,.87,0,1.3,.2,zt.yellow),p(et,0,1.15,0,.13,.5,zt.wood);const Mt=p(Z,0,.73,2,.45,.2,9677433);E("Волшебный волчок",0,4,-22,5);const Et=[];C.forEach((R,O)=>{const rt=new Jt;rt.name="Указатель у обочины";const gt=R.entryX,at=R.entryZ,_t=Math.hypot(gt,at),P=1.8;rt.position.set(gt*.48+at/_t*P,0,at*.48-gt/_t*P),p(rt,0,.7,0,.07,1.4,zt.wood),_(rt,.2,1.4,0,1,.35,.12,zt.cream),rt.rotation.y=O*2,e.add(rt),Et.push(rt)});const Ft=[],Vt=new Jt;Vt.name="Игрушечный поезд",_(Vt,0,.65,0,1.1,.65,2,zt.blue),_(Vt,0,1.1,-.5,1.15,.7,.8,zt.terra),p(Vt,0,1.2,.65,.16,.6,zt.wood),_(Vt,0,1.55,-.5,1.4,.15,1,zt.cream);for(const R of[-.56,.56])for(const O of[-.65,.65]){const rt=p(Vt,R,.32,O,.28,.13,zt.wood);rt.rotation.z=Math.PI/2,Ft.push(rt)}_(Vt,0,.38,-2.4,1.45,.16,1.65,zt.wood),_(Vt,0,.7,-2.4,1.2,.16,.7,zt.terra),_(Vt,0,.95,-2.77,1.3,.5,.1,zt.cream),_(Vt,0,.36,-1.3,.15,.12,.9,zt.wood);for(const R of[-.59,.59])for(const O of[-1.9,-2.9]){const rt=p(Vt,R,.23,O,.2,.13,zt.wood);rt.rotation.z=Math.PI/2,Ft.push(rt)}e.add(Vt);const L=new Jt;e.add(L);for(let R=0;R<160;R++){const O=R/160*Math.PI*2,rt=Math.sin(O)*23,gt=Math.cos(O)*23;_(L,rt,.12,gt,1.7,.12,.15,zt.wood,O);for(const at of[22.5,23.5])_(L,Math.sin(O)*at,.22,Math.cos(O)*at,.08,.09,.97,10133137,O)}const dt=[...L.children];for(const R of new Set(dt.map(O=>O.material))){const O=dt.filter(at=>at.material===R),rt=O.map(at=>(at.updateMatrix(),at.geometry.clone().applyMatrix4(at.matrix))),gt=new ee(Jl(rt),R);gt.receiveShadow=!0,L.add(gt),O.forEach(at=>{L.remove(at),at.geometry.dispose()}),rt.forEach(at=>at.dispose())}const ht=new Jt;e.add(ht);for(let R=0;R<7;R++){const O=_(ht,0,.11,-6.4-R*.75,.75,.08,.5,15321976);O.material=new Ze({color:15321976,emissive:13409859,emissiveIntensity:.7,roughness:.8})}const ct=new ee(new On(6.5,.09,8,80),new Fn({color:15257222}));ct.rotation.x=-Math.PI/2,ct.position.y=.21,e.add(ct),ct.visible=!1;let st=null,wt=!1;const yt=[];for(let R=0;R<7;R++){const O=new gr;for(let gt=0;gt<10;gt++){const at=gt/10*Math.PI*2,_t=gt%2?.2:.45,P=Math.sin(at)*_t,it=Math.cos(at)*_t;gt?O.lineTo(P,it):O.moveTo(P,it)}O.closePath();const rt=new ee(new xs(O,{depth:.12,bevelEnabled:!1}),g(zt.yellow));rt.position.set(Math.sin(R*2)*5,5.5+Math.cos(R),Math.cos(R*2)*5),e.add(rt),yt.push(rt)}const At=m0({scene:e,player:y,paths:I,locations:C,collisions:a,stars:yt,rewardGroups:o,groundHeight:Q}),$t=g0(e,y,Q,I);let Ht,w=null,M=-20,V=0;function tt(R){Ht=R,y.userData.character!==(R.character||"lola")&&y.userData.setCharacter(R.character),R.finished&&(wt=!1),ht.visible=R.finale>=1,ct.visible=R.finished,o.forEach((O,rt)=>{const gt=R.completed.includes(Pe[rt].id);O.visible=!0;const at=O.userData.star.material;at.color.setHex(gt?16766326:7831947),at.emissive.setHex(gt?16759874:0),at.emissiveIntensity=gt?.85:0}),vt.forEach((O,rt)=>{O.visible=R.completed.includes("bridge")||rt%3===0,O.rotation.z=R.completed.includes("bridge")?0:rt%2?.18:-.2}),q.forEach(O=>O.visible=R.completed.includes("bridge")),ot.forEach(O=>O.visible=R.completed.includes("bridge")),G.forEach(O=>O.visible=R.completed.includes("bridge")),Et.forEach((O,rt)=>O.rotation.y=R.finale>=2?Math.atan2(C[rt].x,C[rt].z):rt*2),Mt.material=g(R.finished?zt.yellow:zt.green),l.forEach(O=>O.material=g(R.finished?16768134:zt.yellow))}const mt=new U,nt=new U,Nt=R=>(R=Math.max(0,Math.min(1,R)),R*R*(3-2*R));function Tt(R,O){s.forEach(P=>{const it=Math.hypot(P.position.x-y.position.x,P.position.z-y.position.z);P.visible=it<7,P.material.opacity=Math.max(0,Math.min(1,(7-it)/2)),P.material.transparent=!0}),S.update(R,O),V=O,et.rotation.y+=R*(Ht?.finished?1.4:-.55),yt.forEach((P,it)=>{P.rotation.y=O*.18+it,P.position.y=5.5+Math.cos(it)+Math.sin(O+it)*.17}),mt.copy(Vt.position);let rt=!1,gt=W;if(st)if(st.elapsed+=R,st.elapsed<=4.5){const P=Nt(st.elapsed/4.5),it=2.15*Nt((P-.65)/.35),xt=-7-P*14.4;Vt.position.set(it,xt<-11?Math.min(.55,.22+(-xt-11)*.1):.22,xt),Vt.rotation.y=Math.PI,Vt.updateMatrixWorld(!0),nt.set(0,.08,-2.4),Vt.localToWorld(nt),y.position.copy(nt),y.rotation.y=Math.PI,rt=!0,gt={distance:0,speed:0}}else{st.exitStart||(st.exitStart=y.position.clone());const P=Nt((st.elapsed-4.5)/1.7),it=y.position.clone();y.position.lerpVectors(st.exitStart,new U(-.5,.61,-20.1),P);const xt=y.position.distanceTo(it),ft=Math.atan2(-.5-st.exitStart.x,-20.1-st.exitStart.z);if(y.rotation.y+=oo(y.rotation.y,ft)*(1-Math.exp(-R*10)),gt={distance:xt,speed:xt/Math.max(R,.001)},P>=1){const pt=st.done;st=null,wt=!0,W={distance:0,speed:0},pt()}}else if(!wt){const P=O*.065;Vt.position.set(Math.sin(P)*23,.22,Math.cos(P)*23),Vt.rotation.y=P+Math.PI/2}const at=mt.distanceTo(Vt.position);at<2&&Ft.forEach(P=>P.rotateY(at/(P.geometry.parameters.radiusTop||.25))),y.userData.animate(R,{...gt,seated:rt}),o.forEach((P,it)=>{P.rotation.y=Math.sin(O*.5+it)*.15;const xt=Math.min(1,Math.max(.01,(O-M)*2));P.scale.setScalar(P.userData.new?1+Math.sin(xt*Math.PI)*.35:1)}),At.update(R,O,gt,rt,w,Ht?.completed||[]);const _t=C.find(P=>P.id===w);$t.update(_t?{id:_t.id,x:_t.entryX,z:_t.entryZ}:Ht?.completed.length===5&&!Ht.finished?{x:0,z:Ht.finale>=3?-19:-6}:null,rt),C.forEach(P=>P.ring.scale.setScalar(1+Math.sin(O*2)*.08))}function Ot(R){t.shadowMap.enabled=R,At.setEnabled(R),S.setEnabled(R),t.setPixelRatio(Math.min(devicePixelRatio,R?1.6:1))}function It(){t.setSize(innerWidth,innerHeight),n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}return It(),window.addEventListener("resize",It),{scene:e,camera:n,renderer:t,player:y,lola:D,mapPosition:X,locations:C,collisions:a,groundHeight:Q,setMotion(R){W=R},update:Tt,sync:tt,effects:Ot,resize:It,warmLights(R){B.forEach((O,rt)=>O.visible=rt<R)},rideToTop(){return new Promise(R=>{st={elapsed:0,done:R}})},select(R){w=R},award(R){M=V,o.forEach((O,rt)=>O.userData.new=Pe[rt].id===R)},teleport(R=0,O=4){y.position.set(R,Q(R,O),O),W={distance:0,speed:0},y.userData.resetPose()},render(){t.render(e,n)}}}function x0(i,t,e,n){const r=new Set,s={x:0,y:0};let a=0,o=.42,l=null,c=null;const u=i.renderer.domElement,h=document.querySelector("#camera-pad"),f=document.querySelector("#stick");window.addEventListener("keydown",v=>{/INPUT|SELECT|TEXTAREA/.test(v.target.tagName)||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(v.key)&&v.preventDefault(),r.add(v.code),!v.repeat&&(v.code==="KeyE"&&!t()&&e(),v.code==="Escape"&&n()))}),window.addEventListener("keyup",v=>r.delete(v.code)),window.addEventListener("blur",()=>{r.clear(),s.x=s.y=0});function d(v){t()||(l={id:v.pointerId,x:v.clientX,y:v.clientY},v.target.setPointerCapture(v.pointerId))}function g(v){l?.id===v.pointerId&&(a-=(v.clientX-l.x)*.007,o=Math.max(.35,Math.min(1.05,o+(v.clientY-l.y)*.004)),l.x=v.clientX,l.y=v.clientY)}function _(){l=null}[u,h].forEach(v=>{v.addEventListener("pointerdown",d),v.addEventListener("pointermove",g),v.addEventListener("pointerup",_),v.addEventListener("pointercancel",_)});function m(v){const x=f.getBoundingClientRect();s.x=Math.max(-1,Math.min(1,(v.clientX-x.left-x.width/2)/40)),s.y=Math.max(-1,Math.min(1,(v.clientY-x.top-x.height/2)/40)),f.firstElementChild.style.transform=`translate(${s.x*30}px,${s.y*30}px)`}f.addEventListener("pointerdown",v=>{t()||(c=v.pointerId,f.setPointerCapture(v.pointerId),m(v))}),f.addEventListener("pointermove",v=>{v.pointerId===c&&m(v)});for(const v of["pointerup","pointercancel"])f.addEventListener(v,()=>{c=null,s.x=s.y=0,f.firstElementChild.style.transform=""});const p=u0();function E(){r.clear(),s.x=s.y=0,f.firstElementChild.style.transform="",p.reset(i.player.rotation.y),i.setMotion({distance:0,speed:0})}return{get yaw(){return a},get pitch(){return o},clear:E,update(v,x){if(t()){p.reset(i.player.rotation.y),i.setMotion({distance:0,speed:0});return}const T={x:(r.has("KeyD")||r.has("ArrowRight")?1:0)-(r.has("KeyA")||r.has("ArrowLeft")?1:0)+s.x,z:(r.has("KeyS")||r.has("ArrowDown")?1:0)-(r.has("KeyW")||r.has("ArrowUp")?1:0)+s.y},A=p.step(v,T,a,i.player.position,(I,S)=>c0(I,S));i.player.rotation.y=A.heading;const C=i.groundHeight(i.player.position.x,i.player.position.z,x);i.player.position.y+=(C-i.player.position.y)*(1-Math.exp(-v*18)),i.setMotion(A)}}}function M0(i,t){const e=new U,n=new U,r=new U,s=new U,a=new bf;let o=!0;const l=new Map,c=new WeakMap;function u(){for(const[f,d]of l)f.material=d;l.clear()}function h(f){if(!f.isMesh||l.has(f))return;const d=Array.isArray(f.material)?f.material:[f.material];d.every(g=>g.transparent)||(l.set(f,f.material),f.material=d.map(g=>{let _=c.get(g);return _||(_=g.clone(),_.transparent=!0,_.opacity=.16,_.depthWrite=!1,c.set(g,_)),_}),Array.isArray(l.get(f))||(f.material=f.material[0]))}return{reset(){o=!0,u()},update(f){n.copy(i.player.position).y+=1.1;const d=o?1:1-Math.exp(-f*8);e.lerp(n,d);const g=13.5,_=t.pitch,m=t.yaw;r.set(e.x+Math.sin(m)*Math.cos(_)*g,e.y+Math.sin(_)*g,e.z+Math.cos(m)*Math.cos(_)*g),i.camera.position.lerp(r,d),i.camera.lookAt(e),o=!1,u(),i.scene.updateMatrixWorld(!0),s.copy(e).sub(i.camera.position),a.set(i.camera.position,s.clone().normalize()),a.far=s.length();const p=i.scene.children.filter(v=>v!==i.player&&v.type!=="Sprite"),E=new Set;for(const v of a.intersectObjects(p,!0)){if(!v.object.isMesh||v.point.y<.5)continue;let x=v.object;for(;x.parent&&x.parent!==i.scene;)x=x.parent;E.add(x)}for(const v of E)v.traverse(h)}}}function y0(i){const t=i.player.position;let e=null;for(const n of i.locations){const r=Math.hypot(t.x-(n.entryX??n.x),t.z-(n.entryZ??n.z+2.6));r<4&&(!e||r<e.distance)&&(e={...n,distance:r})}return Math.hypot(t.x-(i.mapPosition?.x??8),t.z-((i.mapPosition?.z??0)+1.1))<2&&!e?{id:"map",name:"Открыть карту"}:Math.hypot(t.x,t.z+20)<2.8&&!e?{id:"top",name:"Волшебный волчок"}:e}function S0(){const i=new Set;function t(e,n,r=0){const s=e.x-n.x,a=e.z-n.z,o=n.facing||0,l=s*Math.cos(o)-a*Math.sin(o),c=s*Math.sin(o)+a*Math.cos(o);return Math.abs(l)<3.3+r&&c>-4.2-r&&c<.9+r||Math.hypot(l,c-2.6)<1.35+r}return(e,n=!1)=>{if(n)return null;const r=e.player.position;for(const a of e.locations)t(r,a,.65)||i.delete(a.id);const s=e.locations.find(a=>t(r,a));return!s||i.has(s.id)?null:(i.add(s.id),s.id)}}const E0=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function b0(){const i=document.querySelector("#modal-root");let t=!1,e=null,n=null;return i.addEventListener("keydown",r=>{if(r.key!=="Tab")return;const s=[...i.querySelectorAll('button:not(:disabled),input,select,summary,[tabindex="0"]')],a=s[0],o=s.at(-1);r.shiftKey&&document.activeElement===a?(r.preventDefault(),o?.focus()):!r.shiftKey&&document.activeElement===o&&(r.preventDefault(),a?.focus())}),{get active(){return t},show(r,{wide:s=!1,onClose:a=null,closable:o=!0}={}){e?.(),e=null,t=!0,n=o?a:null,i.innerHTML=`<div class="scrim"><section class="modal ${s?"wide":""}" role="dialog" aria-modal="true" aria-label="Волшебная страна игрушек">${o?'<button class="close" aria-label="Закрыть">×</button>':""}${r}</section></div>`,o&&(i.querySelector(".close").onclick=()=>{this.close(),a?.()}),queueMicrotask(()=>i.querySelector("button,input")?.focus({preventScroll:!0}))},close(){e?.(),e=null,i.innerHTML="",t=!1,n=null},onCleanup(r){e=r},escape(){if(!t)return!1;if(i.querySelector(".close")){const r=n;this.close(),r?.()}return!0},el(r){return i.querySelector(r)},all(r){return[...i.querySelectorAll(r)]},click(r,s){const a=i.querySelector(r);a&&(a.onclick=s)},toast(r){const s=document.createElement("div");s.className="toast",s.textContent=r,document.body.append(s),setTimeout(()=>s.remove(),4200)}}}function T0(){let i;return{unlock(){try{i||(i=new(window.AudioContext||window.webkitAudioContext)),i.resume()}catch{}},play(t,e="ok"){if(!t||!i)return;const n=i.currentTime;[0,1,2].slice(0,e==="ok"?3:1).forEach(r=>{const s=i.createOscillator(),a=i.createGain();s.type="sine",s.frequency.value=[392,494,587][r],a.gain.setValueAtTime(0,n+r*.12),a.gain.linearRampToValueAtTime(.035,n+r*.12+.02),a.gain.exponentialRampToValueAtTime(.001,n+r*.12+.5),s.connect(a).connect(i.destination),s.start(n+r*.12),s.stop(n+r*.12+.55)})}}}const Kl=Object.fromEntries(fs.map(i=>{const t=new Image;return t.src=`./${i.portrait}`,[i.id,t]})),Qn={};for(const i of["train","lamp","flag","hammer","arrow","puzzle","bridge"]){const t=new Image;t.src=`./art/${i==="bridge"?"bridge.png":"items/"+i+".png"}`,Qn[i]=t}function w0(i="",t="lola"){const e=Kl[Vi(t).id],n=document.createElement("canvas");n.width=1400,n.height=1e3;const r=n.getContext("2d");if(r.fillStyle="#edf0df",r.fillRect(0,0,1400,1e3),r.fillStyle="#fcf4e1",r.beginPath(),r.roundRect(45,45,1310,910,40),r.fill(),r.fillStyle="#51634e",r.textAlign="center",r.font="600 60px Montserrat",r.fillText("Волшебная страна игрушек",700,155),r.font="400 34px Montserrat",r.fillText("Спасибо за помощь!",700,238),r.fillText("В Стране игрушек снова порядок",700,290),r.fillStyle="#c4d0ac",r.beginPath(),r.ellipse(700,665,570,155,0,0,Math.PI*2),r.fill(),Qn.bridge.complete&&r.drawImage(Qn.bridge,485,440,460,345),e.complete&&e.naturalWidth){const s=Math.min(310/e.naturalWidth,405/e.naturalHeight),a=e.naturalWidth*s,o=e.naturalHeight*s;r.drawImage(e,150+(310-a)/2,335+(405-o)/2,a,o)}Qn.train.complete&&r.drawImage(Qn.train,910,420,270,270);for(const[s,a]of["lamp","flag","hammer","arrow","puzzle"].entries()){const o=Qn[a];o.complete&&r.drawImage(o,400+s*120,737,120,120)}return r.fillStyle="#67725b",r.font="400 23px Montserrat",r.fillText("Логопед Валерия Выстороп",700,914),n}async function A0(i,t,e,n){await Promise.all([document.fonts.ready,Kl[Vi(t.character).id].decode().catch(()=>{}),...Object.values(Qn).map(s=>s.decode().catch(()=>{}))]);function r(){i.show('<div class="eyebrow">БОЛЬШАЯ ПУТАНИЦА ПОЗАДИ</div><h2>Дорога домой открыта!</h2><p>«Мост восстановлен, волчок вращается правильно! Теперь можно вернуться домой. Спасибо, что помогал и не сдавался».</p><p>«Ты помогал, пробовал и довёл наше дело до конца!»</p><div id="postcard-preview"></div><div class="actions"><button id="download">Сохранить открытку · PNG</button><button id="walk" class="secondary">Погулять по стране</button><button id="again" class="quiet">Сыграть ещё раз</button></div>',{wide:!0,closable:!1});function s(){i.el("#postcard-preview").replaceChildren(w0("",t.character))}i.click("#download",()=>{const a=document.createElement("a");a.download="strana-igrushek.png",a.href=i.el("#postcard-preview canvas").toDataURL("image/png"),a.click()}),i.click("#walk",e),i.click("#again",n),s()}r()}function R0(i,t,e,n){return`<div class="eyebrow">ПОРУЧЕНИЕ · ${e} из ${n}</div><h2>${i.name}</h2><div class="progress"><i style="width:${e/n*100}%"></i></div>${t}<p id="feedback" class="feedback" aria-live="polite"></p><button id="leave" class="quiet">На площадь</button>`}function Ke(i,t){i.ui.el("#feedback").textContent=t}function bs(i){i.complete(i.task)}function Ar(i,t,e,n){i.ui.show(R0(i.task,t,e,n),{wide:!0,onClose:i.exit}),i.ui.click("#leave",i.exit)}function Rr(i,t,e){const n=setTimeout(t,e);i.ui.onCleanup(()=>clearTimeout(n))}function C0(i){let t=0,e=!1;const{task:n,ui:r}=i;function s(){a()}function a(){e=!1;const o=n.words[t],l=il(o,n.words).map(d=>n.words.indexOf(d));Ar(i,`<p class="instruction">Выбери место для предмета.</p><div class="move-item" id="item" draggable="true" tabindex="0" role="button" aria-label="Выбрать предмет">${be(o)}</div><div class="choices rooms">${l.map(d=>`<button class="destination" data-i="${d}">${mu(d)}<strong>${n.places[d]}</strong><small>${["Спальня: тумба у кровати","Ванная: вода и полотенце","Мастерская: верстак и доски","Кухня: корзина для овощей","Столовая: готовый обед","Прихожая: крючок для одежды","Сад: инструменты для земли","Школа: тетради и карандаши"][d]}</small></button>`).join("")}</div>`,t+1,8);const c=r.el("#item");function u(){e=!0,c.classList.add("selected"),Ke(i,"Теперь выбери подходящее место.")}c.onclick=u,c.onkeydown=d=>{(d.key==="Enter"||d.key===" ")&&u()},c.ondragstart=d=>{u(),d.dataTransfer.setData("text/plain",o)};let h=!1;function f(d){if(!h){if(!e){Ke(i,"Сначала нажми на предмет.");return}if(Number(d.dataset.i)!==t){Ke(i,`Посмотри: ${o} нужно ${n.places[t].toLowerCase()}. Попробуй ещё раз.`),d.classList.add("hint");return}h=!0,d.innerHTML=be(o)+'<strong>На своём месте!</strong><span class="window-lit"></span>',c.classList.add("placed"),Ke(i,"Окно зажглось! Всё на своём месте."),i.chime(),Rr(i,()=>{t++,t===8?bs(i):s()},950)}}r.all(".destination").forEach(d=>{d.onclick=()=>f(d),d.ondragover=g=>{g.preventDefault(),g.dataTransfer.dropEffect="move"},d.ondrop=g=>{g.preventDefault(),f(d)}})}s()}const as=["В начале","В середине","В конце"],jc=i=>`./art/railway/${i}.png`;function P0(i){let t=0;const{task:e,ui:n}=i,r=Li(e.words);function s(){a()}function a(){const o=r[t],l=hu[o];Ar(i,`<p class="instruction">Где в слове слышится звук Л?</p><div class="train-word">${be(o)}${i.state.settings.labels?`<strong>${o}</strong>`:""}</div><div class="choices stations watercolor-stations sound-stations">${as.map((d,g)=>`<button data-position="${g}" data-track="${g}" aria-label="Звук Л ${d.toLowerCase()} слова"><span class="sound-position" aria-hidden="true">${[0,1,2].map(_=>`<i class="${_===g?"sound-here":""}"></i>`).join("")}</span><strong>${d}</strong><span class="sound-platform"></span></button>`).join("")}</div><div class="rail-yard watercolor-rail-yard"><img class="watercolor-rails" src="${jc("rails")}" alt="Три ветки железной дороги" draggable="false"><div id="little-train" class="little-train watercolor-train" role="img" aria-label="Игрушечный поезд с грузом"><img class="watercolor-engine" src="${jc("train-front")}" alt="" draggable="false"><div class="cargo watercolor-cargo">${be(o)}</div></div></div>`,t+1,r.length);let c=0,u=!1,h=0,f=0;n.onCleanup(()=>{cancelAnimationFrame(h),clearTimeout(f)}),n.all(".stations button").forEach(d=>d.onclick=()=>{if(u)return;if(Number(d.dataset.position)!==l){c++,Ke(i,c===1?"Произнеси слово медленно и прислушайся к звуку Л. Попробуй ещё раз.":`В слове «${o}» звук Л ${as[l].toLowerCase()}. Выбери это окошко.`),d.classList.remove("hint"),d.offsetWidth,d.classList.add("hint");return}u=!0,i.chime(),n.all(".stations button").forEach(v=>v.disabled=!0),d.classList.add("receiving");const g=n.el("#little-train"),_=n.el(".rail-yard"),m=Number(d.dataset.track)-1,p=performance.now();g.classList.add("depart"),g.dataset.route=d.dataset.track,Ke(i,`Верно! Звук Л ${as[l].toLowerCase()} слова.`);function E(v){const x=Math.min(1,(v-p)/1600),T=x*x*(3-2*x),A=.5+m*.3*(3*T*T-2*T*T*T),C=.78*(1-T)**3+3*.38*(1-T)*(1-T)*T+3*.38*(1-T)*T*T+.2*T*T*T,I=m*.3*6*T*(1-T)*_.clientWidth,S=(3*(.38-.78)*(1-T)*(1-T)+3*(.2-.38)*T*T)*_.clientHeight;g.style.left=`${A*100}%`,g.style.top=`${C*100}%`,g.style.setProperty("--train-angle",`${Math.atan2(I,-S)*180/Math.PI}deg`),x<1?h=requestAnimationFrame(E):(g.querySelector(".cargo").classList.add("cargo-delivered"),g.setAttribute("aria-label","Игрушечный поезд: груз доставлен"),d.querySelector(".sound-platform").innerHTML=be(o),d.classList.remove("receiving"),d.classList.add("correct","delivered"),Ke(i,t===r.length-1?"Все слова на своих станциях! Получаем сигнальный флаг.":`«${o}»: звук Л ${as[l].toLowerCase()}.`),f=setTimeout(()=>{t++,t===r.length?bs(i):s()},1500))}h=requestAnimationFrame(E)})}s()}function L0(i){const{ui:t,state:e,chime:n,exit:r,task:s,complete:a}=i,o=Li(uu.flatMap(g=>[g,g]));let l=[],c=new Set,u=!1,h=0;function f(){t.show(`<div class="eyebrow">ПОРУЧЕНИЕ РОБОТА · ${h} ИЗ 6 ПАР</div><h2>Мемори</h2><p>Найди пару.</p><div class="memory-grid">${o.map((g,_)=>`<button class="memory-card ${c.has(_)?"matched":""} ${l.includes(_)?"flipped":""}" data-memory="${_}" aria-label="${c.has(_)||l.includes(_)?g:"Открыть карточку "+(_+1)}" ${c.has(_)||l.includes(_)||u?"disabled":""}>${c.has(_)||l.includes(_)?be(g):'<span class="memory-back" aria-hidden="true"><svg viewBox="0 0 100 100"><path d="M50 12 61 37 89 40 68 59 74 87 50 73 26 87 32 59 11 40 39 37Z"/><circle cx="17" cy="17" r="3"/><circle cx="84" cy="77" r="3"/></svg></span>'}</button>`).join("")}</div><p class="small">Без спешки — можно пробовать снова.</p><button id="memory-exit" class="quiet">На площадь</button>`,{wide:!0,onClose:r}),t.click("#memory-exit",r),t.all("[data-memory]").forEach(g=>g.onclick=()=>d(Number(g.dataset.memory)))}function d(g){if(!(u||c.has(g)||l.includes(g))&&(l.push(g),f(),!(l.length<2)))if(u=!0,o[l[0]]===o[l[1]])l.forEach(_=>c.add(_)),h++,l=[],u=h===6,n(),f(),h===6&&Rr(i,()=>a(s),1400);else{f();const _=setTimeout(()=>{l=[],u=!1,f()},1300);t.onCleanup(()=>clearTimeout(_))}}f()}const D0=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function Pi(i){for(const t of D0)if(i[t[0]]&&t.every(e=>i[e]===i[t[0]]))return i[t[0]];return i.every(Boolean)?"draw":null}function I0(i,t=Math.random){const e=i.map((o,l)=>o?null:l).filter(o=>o!==null);if(!e.length||Pi(i))return null;const n=o=>o[Math.min(o.length-1,Math.floor(t()*o.length))];for(const o of["O","X"]){const l=e.filter(c=>{const u=[...i];return u[c]=o,Pi(u)===o});if(l.length)return n(l)}if(t()>.8)return n(e);function r(o,l,c){const u=Pi(o);if(u)return u==="O"?10-c:u==="X"?c-10:0;const h=[];for(let f=0;f<9;f++)o[f]||(o[f]=l,h.push(r(o,l==="O"?"X":"O",c+1)),o[f]=null);return l==="O"?Math.max(...h):Math.min(...h)}const s=e.map(o=>{const l=[...i];return l[o]="O",{i:o,value:r(l,"X",0)}}),a=Math.max(...s.map(o=>o.value));return n(s.filter(o=>o.value===a).map(o=>o.i))}function U0(i){let t=0,e,n,r=!1;const{ui:s,task:a}=i;function o(){e=Array(9).fill(null),n=Li(a.words),r=!1,l()}function l(){const c=Pi(e);Ar(i,`<div class="match-top"><span>Ты — <b>×</b></span><span>Партия ${t+1} из 3</span><span>Робот — <b>○</b></span></div><p class="instruction" aria-live="polite">${c?c==="draw"?"Дружеская ничья!":c==="X"?"Победа!":"Победил робот!":r?"Робот думает…":"Выбери свободную картинку для своего хода."}</p><div class="tic-board">${e.map((u,h)=>`<button data-cell="${h}" ${u||r||c?"disabled":""} aria-label="${n[h]}${u?": "+(u==="X"?"крестик":"нолик"):""}">${be(n[h])}${u?`<span class="mark ${u}" aria-hidden="true"><svg viewBox="0 0 100 100" focusable="false">${u==="X"?'<path d="M22 22 78 78M78 22 22 78"/>':'<circle cx="50" cy="50" r="32"/>'}</svg></span>`:""}</button>`).join("")}</div>${c?'<button id="next-game">'+(t===2?"Мемори →":"Следующая партия →")+"</button>":""}`,t+1,3),s.all("[data-cell]:not(:disabled)").forEach(u=>u.onclick=()=>{const h=Number(u.dataset.cell);r||e[h]||Pi(e)||(e[h]="X",i.chime(),r=!Pi(e),l(),r&&Rr(i,()=>{const f=I0(e);f!==null&&(e[f]="O"),r=!1,l()},650))}),s.click("#next-game",()=>{t++,t===3?L0(i):o()})}o()}const N0={кукла:"две косички и круглую голову",белка:"пышный загнутый хвост",волк:"острые уши и длинную морду",полка:"длинную доску и две опоры",иголка:"тонкий кончик и ушко",палатка:"треугольную крышу",мел:"длинную наклонную палочку",пенал:"прямоугольник с закруглёнными углами"};function F0(i){let t=0;const{task:e,ui:n}=i;function r(){s()}function s(){const a=e.words[t];Ar(i,`<div class="theatre"><div class="curtain left"></div><div class="curtain right"></div><div id="actor">${be(a)}</div><div class="footlights">${Array.from({length:8},(l,c)=>`<i class="${c<t?"on":""}"></i>`).join("")}</div></div><p class="instruction">Какая тень принадлежит этому предмету?</p><div class="choices shadows">${il(a,e.words).map(l=>`<button data-shadow="${l}" aria-label="Выбрать силуэт">${be(l,{shadow:!0})}</button>`).join("")}</div>`,t+1,8);let o=!1;n.all("[data-shadow]").forEach(l=>l.onclick=()=>{if(!o){if(l.dataset.shadow!==a){Ke(i,`Посмотри на ${N0[a]}. Найди такой же контур.`),l.classList.remove("shadow-wrong"),l.offsetWidth,l.classList.add("shadow-wrong"),n.el("#actor").classList.add("detail-hint");return}o=!0,l.classList.remove("shadow-wrong"),l.classList.add("shadow-correct","correct"),Ke(i,"Тень вернулась к своему хозяину!"),i.chime(),Rr(i,()=>{t++,t===8?bs(i):r()},1e3)}})}r()}const Qc=["●","▲","■","◆","●●","▲▲","■■","◆◆"];function O0(i){const{task:t,ui:e}=i,n=new Set,r=Li(t.words.map((l,c)=>c));let s=null,a=!1;function o(){const l=n.size===t.words.length;Ar(i,`<p class="instruction">${l?"Мост готов! Кукла возвращается домой.":s===null?"Помоги кукле перейти реку. Выбери доску внизу.":"Положи доску на место с такой же картинкой."}</p><div class="repair-scene ${l?"bridge-repaired":""}"><div class="repair-water"></div><div class="repair-bank bank-start">${l?"":be("кукла")}</div><div class="repair-bank bank-end"><img class="doll-cottage" src="./art/scenes/doll-cottage.svg" alt="Домик куклы на другом берегу" draggable="false"></div><div class="repair-deck">${t.words.map((c,u)=>`<button class="slot repair-slot ${n.has(u)?"built":""} ${s===u?"matching-slot":""}" data-slot="${u}" ${n.has(u)||a?"disabled":""} aria-label="Место для доски: ${c}">${be(c)}<span>${Qc[u]}</span></button>`).join("")}</div>${l?`<div class="bridge-traveller">${be("кукла")}</div>`:""}</div><p class="bridge-count">Доски: ${n.size} из 8</p><div class="piece-tray">${r.map(c=>`<button class="piece ${c===s?"selected":""}" data-piece="${c}" ${n.has(c)||a?"disabled":""} aria-label="Выбрать доску ${t.words[c]}">${be(t.words[c])}<span>${n.has(c)?"✓":Qc[c]}</span></button>`).join("")}</div>`,Math.min(n.size+1,8),8),e.all("[data-piece]").forEach(c=>c.onclick=()=>{a||n.has(Number(c.dataset.piece))||(s=Number(c.dataset.piece),o())}),e.all("[data-slot]").forEach(c=>c.onclick=()=>{const u=Number(c.dataset.slot);if(!(a||n.has(u))){if(s===null){Ke(i,"Выбери доску внизу и назови картинку.");return}if(u!==s){Ke(i,"Посмотри на картинку и отметку на доске."),c.classList.add("hint");return}n.add(u),s=null,i.chime(),a=n.size===8,o(),a&&Rr(i,()=>bs(i),3e3)}})}o()}const Bn=i=>Pe.find(t=>!i.completed.includes(t.id)),co=(i,t)=>i.completed.includes(t)||Bn(i)?.id===t;function z0({ui:i,world:t,state:e,camera:n,onSquare:r,onChoose:s}){const a=Bn(e),o=t.player.position,l=50+o.x*1.3,c=43+o.z*1.25;i.show(`<div class="eyebrow">НАШ МАРШРУТ</div><h2>Карта Страны игрушек</h2><p class="map-next">${a?`Следующая остановка: ${Pe.indexOf(a)+1}. ${a.short}`:"Пять находок собраны — идём к волчку!"}</p><div class="route-map"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="map-river" d="M20 19Q50 27 80 19"/>${t.locations.map(h=>`<path class="map-road" d="M50 43L${50+h.x*1.3} ${43+h.z*1.25}"/>`).join("")}<path class="map-tour" d="M28 29Q10 49 30 63Q50 90 71 63Q90 49 72 29"/><circle cx="50" cy="43" r="5" fill="#e0c18a"/><circle cx="${l}" cy="${c}" r="2" fill="#6a65aa" stroke="white" stroke-width=".8"/></svg><span class="map-center">Площадь</span><span class="you-here" style="left:${l}%;top:${c}%">Вы здесь</span>${Pe.map((h,f)=>{const d=t.locations[f];return`<button class="route-pin ${e.completed.includes(h.id)?"done":""} ${a?.id===h.id?"next":""}" ${co(e,h.id)?"":"disabled"} data-pin="${h.id}" style="left:${50+d.x*1.3}%;top:${43+d.z*1.25}%"><b>${e.completed.includes(h.id)?"✓":f+1}</b><span>${h.short}</span><small>${e.completed.includes(h.id)?"Готово":a?.id===h.id?"Идём сюда":"После предыдущего"}</small></button>`}).join("")}<span class="map-top">Волшебный волчок</span></div><p class="small">Идём по номерам: одно поручение — одна звезда.</p><div id="map-destination"></div><button id="square" class="quiet">На площадь</button>`,{wide:!0});function u(h){if(!co(e,h))return;const f=t.locations.find(d=>d.id===h);t.select(h),s(h),i.all("[data-pin]").forEach(d=>d.classList.toggle("selected",d.dataset.pin===h)),i.el("#map-destination").innerHTML=`<strong>${f.name}</strong><div class="actions"><button id="walk-road">Идти по огонькам</button><button id="go" class="secondary">Перенестись к входу</button></div>`,i.click("#go",()=>{i.close(),t.teleport(f.entryX+Math.sin(f.facing)*2.1,f.entryZ+Math.cos(f.facing)*2.1),n.reset()}),i.click("#walk-road",()=>i.close())}i.all("[data-pin]").forEach(h=>h.onclick=()=>u(h.dataset.pin)),i.click("#square",r),a&&u(a.id)}function B0({ui:i,state:t,persist:e,start:n}){function r(){i.show(`<div class="eyebrow">ГОТОВИМ ЯЗЫЧОК К ЗВУКУ Л</div><h2>Артикуляционная гимнастика</h2><p>Выберите упражнения для занятия.</p><div class="gym-grid">${xn.map(s=>`<label class="gym-option ${t.settings.exercises.includes(s.id)?"chosen":""}"><input type="checkbox" data-gym="${s.id}" ${t.settings.exercises.includes(s.id)?"checked":""}>${be(s.art)}<strong>${s.name}</strong></label>`).join("")}</div><div class="gym-selection"><span>Выбрано: ${t.settings.exercises.length} из ${xn.length}</span><button id="gym-all" class="quiet">Выбрать все</button><button id="gym-none" class="quiet">Снять выбор</button></div><div class="actions"><button id="gym-start" ${t.settings.exercises.length?"":"disabled"}>Начать упражнения →</button><button id="gym-close" class="secondary">Вернуться в страну</button></div>`,{wide:!0}),i.all("[data-gym]").forEach(s=>s.onchange=()=>{const a=s.dataset.gym;t.settings.exercises=s.checked?[...t.settings.exercises,a]:t.settings.exercises.filter(l=>l!==a),e(),s.closest("label").classList.toggle("chosen",s.checked),i.el(".gym-selection span").textContent=`Выбрано: ${t.settings.exercises.length} из ${xn.length}`,i.el("#gym-start").disabled=!t.settings.exercises.length}),i.click("#gym-all",()=>{t.settings.exercises=xn.map(s=>s.id),e(),r()}),i.click("#gym-none",()=>{t.settings.exercises=[],e(),r()}),i.click("#gym-start",n),i.click("#gym-close",()=>i.close())}r()}const H0=S0();let un=null,Rt=vu(),de;const Ut=b0(),Mr=T0();window.addEventListener("pointerdown",()=>Mr.unlock(),{once:!0});window.addEventListener("keydown",()=>Mr.unlock(),{once:!0});let lr=!1,ii=!1,Sn=null,Hi="",tl=!1;function on(){!xu(Rt)&&!tl&&(tl=!0,Ut.toast("Браузер не разрешил сохранение. Прогресс доступен до закрытия страницы.")),de?.sync(Rt)}function k0(){return Vi(Rt.character)}function jl(){Ut.all("[data-character]").forEach(i=>i.onclick=()=>{Rt.character=Vi(i.dataset.character).id,on(),Ut.all("[data-character]").forEach(t=>{const e=t.dataset.character===Rt.character;t.classList.toggle("selected",e),t.setAttribute("aria-pressed",String(e)),t.querySelector(".character-check").textContent=e?"✓":""})})}function Ql(){Mr.play(Rt.settings.sound)}function yr(){Ut.close(),de.teleport(),ki.reset(),Tn.clear(),Hi=""}function tu(){Rt.started?(Ut.show('<div class="eyebrow">НОВОЕ ПРИКЛЮЧЕНИЕ</div><h2>Начать сначала?</h2><p>Собранные находки и шаги финала будут удалены. Герой и настройки останутся.</p><div class="actions"><button id="confirm">Да, новая игра</button><button id="cancel" class="secondary">Отмена</button></div>'),Ut.click("#confirm",el),Ut.click("#cancel",Do)):el()}function el(){const{settings:i,name:t,character:e}=Rt;Rt={...uo(),settings:i,name:t,character:e},on(),V0()}function Do(){Ut.show(`<div class="start-screen"><h1>Волшебная<br><em>страна игрушек</em></h1>${sl(Rt.character)}<div class="actions">${Rt.started?'<button id="continue">Продолжить →</button>':""}<button id="new" class="${Rt.started?"secondary":""}">${Rt.started?"Новая игра":"Начать игру →"}</button></div></div>`,{closable:!1,wide:!0}),jl(),Ut.click("#new",()=>{Mr.unlock(),tu()}),Ut.click("#continue",()=>{Mr.unlock(),lr=!0,Ut.close(),de.sync(Rt),Di(Rt)&&!Rt.finished&&lo()})}function V0(){un=Bn(Rt)?.id,de.select(un),lr=!0,Rt.started=!0,on(),de.teleport(),ki.reset(),Tn.clear(),Ut.close(),Hi=""}function G0(){Ms()}function W0(i=!1){let t=0;const e=Rt.settings.exercises.map(s=>xn.find(a=>a.id===s)).filter(Boolean);function n(){de.warmLights(0),i?G0():Ut.close(),Ut.toast("Готовы к приключению!")}function r(){if(!e.length){Ut.show('<h2>Упражнения пока не выбраны</h2><p>Выберите их в настройках взрослого или начните приключение.</p><button id="finish-warm">Завершить разминку</button>',{onClose:n}),Ut.click("#finish-warm",n);return}const s=e[t];de.warmLights(t+1),Ut.show(`<div class="eyebrow">УПРАЖНЕНИЕ ${t+1} ИЗ ${e.length}</div><div class="warm-image">${be(s.art)}<div class="fireflies">${e.map((a,o)=>`<i class="${o<=t?"on":""}"></i>`).join("")}</div></div><h2>${s.name}</h2><p class="dialogue">${s.child}</p><details><summary>Для логопеда</summary><p>${s.adult}</p><p>Длительность выбирает логопед. Выполняйте спокойно, без боли и усилия.</p></details><div class="actions"><button id="prev" class="secondary" ${t===0?"disabled":""}>Назад</button><button id="next">${t===e.length-1?"Готово":"Дальше"}</button><button id="finish-warm" class="quiet">Завершить разминку</button></div>`,{onClose:n}),Ut.click("#prev",()=>{t--,r()}),Ut.click("#next",()=>{t===e.length-1?n():(t++,r())}),Ut.click("#finish-warm",n)}r()}function X0(i=()=>Ut.close()){function t(){Ut.show(`<div class="eyebrow">ДЛЯ СОПРОВОЖДАЮЩЕГО ВЗРОСЛОГО</div><h2>Настроим приключение</h2><p>Произношение оцениваете вы. Микрофон не используется.</p><label class="check"><input id="labels" type="checkbox" ${Rt.settings.labels?"checked":""}> Показывать подписи предметов</label><label class="check">Повторять слово <select id="repeats">${[1,2,3].map(e=>`<option ${Rt.settings.repeats===e?"selected":""}>${e}</option>`).join("")}</select> раз(а)</label><label class="check"><input id="sound" type="checkbox" ${Rt.settings.sound?"checked":""}> Мягкие звуки событий</label><label class="check"><input id="effects" type="checkbox" ${Rt.settings.effects?"checked":""}> Тени и огоньки</label>${sl(Rt.character)}<h3>Упражнения разминки</h3><p class="small">Отметьте нужные. Стрелки меняют порядок.</p><div class="exercise-settings">${[...Rt.settings.exercises,...xn.map(e=>e.id).filter(e=>!Rt.settings.exercises.includes(e))].map((e,n,r)=>{const s=xn.find(a=>a.id===e);return`<div><label><input type="checkbox" data-ex="${e}" ${Rt.settings.exercises.includes(e)?"checked":""}> ${s.name}</label><button class="quiet reorder" data-up="${e}" aria-label="${s.name}: выше" ${!Rt.settings.exercises.includes(e)||n===0?"disabled":""}>↑</button><button class="quiet reorder" data-down="${e}" aria-label="${s.name}: ниже" ${!Rt.settings.exercises.includes(e)||n>=Rt.settings.exercises.length-1?"disabled":""}>↓</button></div>`}).join("")}</div><button id="done">Сохранить настройки</button>`,{onClose:i}),jl(),["labels","sound","effects"].forEach(e=>Ut.el("#"+e).onchange=n=>{Rt.settings[e]=n.target.checked,on(),de.effects(Rt.settings.effects)}),Ut.el("#repeats").onchange=e=>{Rt.settings.repeats=Number(e.target.value),on()},Ut.all("[data-ex]").forEach(e=>e.onchange=()=>{const n=e.dataset.ex;e.checked?Rt.settings.exercises.push(n):Rt.settings.exercises=Rt.settings.exercises.filter(r=>r!==n),on(),t()});for(const[e,n]of[["up",-1],["down",1]])Ut.all(`[data-${e}]`).forEach(r=>r.onclick=()=>{const s=Rt.settings.exercises,a=s.indexOf(r.dataset[e]);[s[a],s[a+n]]=[s[a+n],s[a]],on(),t()});Ut.click("#done",i)}t()}function Ms(){z0({ui:Ut,world:de,state:Rt,camera:ki,onSquare:yr,onChoose:i=>{un=i,Hi=""}})}function q0(){B0({ui:Ut,state:Rt,persist:on,start:()=>W0()})}function eu(i){if(!co(Rt,i)){un=Bn(Rt)?.id,de.select(un),Hi="",Ut.toast("Сначала: "+Bn(Rt)?.short);return}const t=Pe.find(r=>r.id===i);if(!t)return;Tn.clear();const e={task:t,state:Rt,ui:Ut,chime:Ql,exit:yr,complete:$0},n={home:C0,train:P0,ttt:U0,shadow:F0,bridge:O0};Ut.show(`<div class="eyebrow">${Rt.completed.includes(i)?"МОЖНО СЫГРАТЬ СНОВА":"НОВОЕ ПОРУЧЕНИЕ"}</div><h2>${t.name}</h2><p class="dialogue">${t.intro}</p><button id="play">Начнём →</button>`,{onClose:yr}),Ut.click("#play",()=>n[i](e))}function lo(){!Di(Rt)||Rt.finished||(Tn.clear(),Ut.show(`<div class="lola-portrait">${gu(Rt.character)}</div><div class="eyebrow">ПОСЛЕДНЕЕ ОБЩЕЕ ДЕЛО</div><h2>Пора домой!</h2><p class="dialogue">«Мост уже починен! Теперь поезд отвезёт нас к волчку. Запустим его — и дорога домой откроется».</p><button id="start-finale">${Rt.finale?"Продолжить финал":"Отправиться к волчку"} →</button>`,{closable:!1}),Ut.el(".modal").classList.add("final-invitation"),Ut.click("#start-finale",()=>{de.teleport(Rt.finale>=3?-.5:0,Rt.finale>=3?-20.1:-6),ki.reset(),Sr()}))}function $0(i){const t=Mu(Rt,i.id);on(),yr(),un=Bn(Rt)?.id,de.select(un),de.award(i.id);const e=Di(Rt)&&!Rt.finished;Ut.show(`<div class="eyebrow">${t?"НОВАЯ НАХОДКА":"ПОРУЧЕНИЕ ПОВТОРЕНО"}</div><div class="reward-large">${be(pu[Pe.indexOf(i)])}</div><h2>${i.reward}</h2><p class="dialogue">«${i.outro}»</p><p>${i.purpose}</p><p class="small">${Rt.completed.length} из 5 находок</p><button id="back">${e?"Все находки собраны! К финалу →":"Вернуться на площадь"}</button>`,{onClose:()=>{e&&lo()}}),Ut.click("#back",()=>{Ut.close(),e&&lo()})}function Sr(){if(!Di(Rt)){Ut.toast("Для большого дела нужны все пять находок.");return}if(Rt.finished){nl();return}const i=Rt.finale,[t,e,n]=lu[i];Ut.show(`<div class="eyebrow">ВОЗВРАЩАЕМ ПОРЯДОК · ${i+1} ИЗ 6</div><h2>${t}</h2><p class="dialogue">${k0().name}: «${e}»</p><div class="finale-find">${be(i===5?"волчок":{Лампа:"лампа",Стрелка:"стрелка",Молоток:"молоток","Деталь-пазл":"пазл",Флаг:"флаг"}[n])}<span>${n}</span></div><p class="small">${i===5?"Большая кнопка на основании волчка ждёт тебя.":"Посмотри: мир меняется с каждым действием."}</p><button id="apply">${t}</button>`,{onClose:()=>{}}),Ut.click("#apply",()=>{if(Rt.finale++,Rt.finale===6&&(Rt.finished=!0),on(),Ql(),Ut.close(),Rt.finale===3&&(ii=!0,Tn.clear(),document.body.classList.add("boarding"),setTimeout(()=>{de.rideToTop().then(()=>{ii=!1,Tn.clear(),Sr()}),setTimeout(()=>document.body.classList.remove("boarding"),150)},450)),Rt.finished)document.body.classList.add("celebrate"),setTimeout(()=>document.body.classList.remove("celebrate"),4500),nl();else if(Rt.finale!==3){const r=Rt.finale;setTimeout(()=>{Rt.finale===r&&!Rt.finished&&!Ut.active&&Sr()},750)}})}function nl(){A0(Ut,Rt,()=>Ut.close(),tu)}function Io(){Ut.show('<div class="eyebrow">МОЖНО НЕМНОГО ОТДОХНУТЬ</div><h2>Приключение подождёт</h2><div class="actions"><button id="resume">Продолжить</button><button id="settings" class="secondary">Настройки взрослого</button><button id="menu" class="quiet">В начало</button></div>'),Ut.click("#resume",()=>Ut.close()),Ut.click("#settings",()=>X0(Io)),Ut.click("#menu",Do)}function Y0(){const i=[Sn?.id,Rt.completed.join(","),Rt.finale,Rt.finished].join("|");if(i===Hi)return;Hi=i,document.querySelector("#hud").innerHTML=`<header class="topbar"><div class="author-brand"><div class="author-logo"><span>Логопед</span><span class="author-divider" aria-hidden="true">|</span><strong>Валерия Выстороп</strong></div></div><div class="find-count"><b>${Rt.completed.length}</b> из 5 находок</div><button id="map">Карта и маршрут</button><button id="pause" class="icon-button" aria-label="Пауза">Ⅱ</button><button id="warm-short" class="warm-short">Гимнастика</button></header><a id="games-site" class="author-games" href="${E0("#")}" target="_blank" rel="noopener noreferrer">Все игры <span aria-hidden="true">↗</span></a><footer class="world-footer"><button id="route" class="route-hint">${Rt.finished?"Можно погулять":Di(Rt)?"Дальше: к волчку":"Дальше: "+(Pe.find(e=>e.id===un)||Bn(Rt))?.short}</button><button id="hud-square" class="secondary">На площадь</button><button id="interact" ${Sn?"":"disabled"}>${Sn?Sn.name+" · E":"Подойди к огоньку"}</button>${Di(Rt)?`<button id="finale">${Rt.finished?"Открытка":"К волчку →"}</button>`:""}</footer>`;const t=document.querySelector("#hud");t.querySelector("#map").onclick=()=>{Ut.active||Ms()},t.querySelector("#pause").onclick=()=>{Ut.active||Io()},t.querySelector("#games-site").onclick=e=>{e.preventDefault(),Ut.toast("Ссылку на сайт добавим позже.")},t.querySelector("#hud-square").onclick=()=>{Ut.active||yr()},t.querySelector("#warm-short").onclick=()=>{Ut.active||q0()},t.querySelector("#route").onclick=()=>{Ut.active||Ms()},t.querySelector("#interact").onclick=()=>{Ut.active||nu()},t.querySelector("#finale")?.addEventListener("click",()=>{!Ut.active&&!ii&&Sr()})}function nu(){if(!ii){if(Sn?.id==="map"){Ms();return}if(Sn?.id==="top"){Sr();return}Sn&&eu(Sn.id)}}let Tn,ki;async function Z0(){try{let n=function(r){requestAnimationFrame(n);const s=Math.min(.04,(r-t)/1e3);t=r,Tn.update(s,Rt);const a=H0(de,Ut.active||!lr||ii);a&&eu(a),de.update(s,r/1e3),ki.update(s),Sn=y0(de),Y0(),(!Ut.active||r-e>90)&&(de.render(),e=r),document.body.classList.toggle("in-modal",Ut.active||ii)};var i=n;await Promise.all([document.fonts.load("600 18px Montserrat"),document.fonts.load("600 18px Montserrat","Страна игрушек Лола")]),de=v0(document.querySelector("#world")),Tn=x0(de,()=>Ut.active||!lr||ii,nu,()=>{!Ut.escape()&&lr&&Io()}),ki=M0(de,Tn),de.sync(Rt),un=Bn(Rt)?.id,de.select(un),de.effects(Rt.settings.effects),document.querySelector("#loading").remove(),Do();let t=performance.now(),e=0;requestAnimationFrame(n)}catch(t){console.error(t),document.querySelector("#loading").innerHTML='<h2>Не получилось открыть 3D-мир</h2><p>Для игры нужен WebGL. Попробуйте современный браузер с включённым аппаратным ускорением.</p><button onclick="location.reload()">Попробовать снова</button>'}}Z0();
