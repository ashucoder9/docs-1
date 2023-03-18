"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(4996);const l={id:"avail-light-client-da",title:"Build and Run a Light Client with Data Availability",sidebar_label:"Run a Light Client",description:"Learn about building and running a Light Client with Data Availability",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-light-client-da"},r=void 0,o={unversionedId:"Running Avail/avail-light-client-da",id:"Running Avail/avail-light-client-da",title:"Build and Run a Light Client with Data Availability",description:"Learn about building and running a Light Client with Data Availability",source:"@site/docs/Running Avail/avail-light-client-da.md",sourceDirName:"Running Avail",slug:"/Running Avail/avail-light-client-da",permalink:"/Running Avail/avail-light-client-da",draft:!1,tags:[],version:"current",frontMatter:{id:"avail-light-client-da",title:"Build and Run a Light Client with Data Availability",sidebar_label:"Run a Light Client",description:"Learn about building and running a Light Client with Data Availability",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-light-client-da"},sidebar:"defaultSidebar",previous:{title:"System Overview",permalink:"/Architecture/avail-system-overview"},next:{title:"Run an Avail node",permalink:"/Running Avail/avail-node-management"}},d={},s=[{value:"Build &amp; Run <code>avail-light</code> &amp; <code>data-avail</code>",id:"build--run-avail-light--data-avail",level:2},{value:"Using Monk templates",id:"using-monk-templates",level:2},{value:"Testnet using three validators",id:"testnet-using-three-validators",level:3},{value:"Step 1: Build images",id:"step-1-build-images",level:3},{value:"Step 2: Load Monk templates",id:"step-2-load-monk-templates",level:3},{value:"Step 3: Run templates",id:"step-3-run-templates",level:3},{value:"Purge Node State",id:"purge-node-state",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build--run-avail-light--data-avail"},"Build & Run ",(0,i.kt)("inlineCode",{parentName:"h2"},"avail-light")," & ",(0,i.kt)("inlineCode",{parentName:"h2"},"data-avail")),(0,i.kt)("p",null,"First, build the Docker images, ",(0,i.kt)("inlineCode",{parentName:"p"},"client:asdr")," (using branch ",(0,i.kt)("inlineCode",{parentName:"p"},"feature/app-specific-data-retrieval_2"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"da:asdr"),"\n(using branch ",(0,i.kt)("inlineCode",{parentName:"p"},"feature/app-specific-data-retrieval"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export DOCKER_BUILDKIT = 1\ndocker build --ssh default -t client:asdr --build-arg BRANCH=feature/app-specific-data-retrieval_2 -f images/client/Dockerfile images/client/\n")),(0,i.kt)("p",null,"Next, run the services using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.light-client.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f docker-compose.light-client.yml up\n")),(0,i.kt)("h2",{id:"using-monk-templates"},"Using Monk templates"),(0,i.kt)("h3",{id:"testnet-using-three-validators"},"Testnet using three validators"),(0,i.kt)("p",null,"On the testnet, validators use the development accounts: ",(0,i.kt)("inlineCode",{parentName:"p"},"Alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Bob"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Charlie"),"."),(0,i.kt)("h3",{id:"step-1-build-images"},"Step 1: Build images"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export DOCKER_BUILDKIT=1\ndocker build -t da:ava-33  --build-arg BRANCH=miguel/ava-33-create-monk-template-for-da-testnet -f images/da/Dockerfile images/da/\n")),(0,i.kt)("h3",{id:"step-2-load-monk-templates"},"Step 2: Load Monk templates"),(0,i.kt)("p",null,"The testnet only need to load two monk templates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"monk/polygon-da-base.matic.today.yaml"),", which contains common definitions for DevNet & TestNet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"monk/polygon-da-devnet.matic.today.yaml"),", where validators are defined.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"monk s ns-delete /templates/local/polygon\nmonk load monk/polygon-da-base.matic.today.yaml\nmonk load monk/polygon-da-devnet.matic.today.yaml\n")),(0,i.kt)("h3",{id:"step-3-run-templates"},"Step 3: Run templates"),(0,i.kt)("p",null,"Once templates are loaded, we only need to run three nodes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"monk run polygon/da-dev-validator-1 polygon/da-dev-validator-2 polygon/da-dev-validator-3\n")),(0,i.kt)("p",null,"Now you can check logs using ",(0,i.kt)("inlineCode",{parentName:"p"},"monk logs"),", i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"monk logs -f -l 100 polygon/da-dev-validator-1\n")),(0,i.kt)("p",null,"You should expect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022-03-22 10:52:20 \u2728 Imported #9 (0x911b\u2026bdf5)\n2022-03-22 10:52:23 \ud83d\udca4 Idle (2 peers), best: #9 (0x911b\u2026bdf5), finalized #7 (0x6309\u20260366), \u2b07 1.5kiB/s \u2b06 1.8kiB/s\n2022-03-22 10:52:28 \ud83d\udca4 Idle (2 peers), best: #9 (0x911b\u2026bdf5), finalized #7 (0x6309\u20260366), \u2b07 1.2kiB/s \u2b06 1.2kiB/s\n2022-03-22 10:52:33 \ud83d\udca4 Idle (2 peers), best: #9 (0x911b\u2026bdf5), finalized #7 (0x6309\u20260366), \u2b07 1.2kiB/s \u2b06 1.2kiB/s\n2022-03-22 10:52:38 \ud83d\udca4 Idle (2 peers), best: #9 (0x911b\u2026bdf5), finalized #7 (0x6309\u20260366), \u2b07 1.1kiB/s \u2b06 1.1kiB/s\n2022-03-22 10:52:40 Rows: 1 Cols: 4 Size: 128\n2022-03-22 10:52:40 Time to extend block 150.509\xb5s\n2022-03-22 10:52:40 Time to prepare 181.938\xb5s\n2022-03-22 10:52:40 Number of CPU cores: 16\n2022-03-22 10:52:40 Time to build a commitment 1.766672ms\n2022-03-22 10:52:40 \u2728 Imported #10 (0x64f4\u202684b5)\n2022-03-22 10:52:43 \ud83d\udca4 Idle (2 peers), best: #10 (0x64f4\u202684b5), finalized #8 (0x3c88\u2026cfe1), \u2b07 1.6kiB/s \u2b06 1.6kiB/s\n2022-03-22 10:52:48 \ud83d\udca4 Idle (2 peers), best: #10 (0x64f4\u202684b5), finalized #8 (0x3c88\u2026cfe1), \u2b07 1.1kiB/s \u2b06 1.1kiB/s\n2022-03-22 10:52:53 \ud83d\udca4 Idle (2 peers), best: #10 (0x64f4\u202684b5), finalized #8 (0x3c88\u2026cfe1), \u2b07 1.2kiB/s \u2b06 1.2kiB/s\n2022-03-22 10:52:58 \ud83d\udca4 Idle (2 peers), best: #10 (0x64f4\u202684b5), finalized #8 (0x3c88\u2026cfe1), \u2b07 1.2kiB/s \u2b06 1.2kiB/s\n2022-03-22 10:53:00 Rows: 1 Cols: 4 Size: 128\n2022-03-22 10:53:00 Time to extend block 146.593\xb5s\n2022-03-22 10:53:00 Time to prepare 175.756\xb5s\n2022-03-22 10:53:00 Number of CPU cores: 16\n2022-03-22 10:53:00 Time to build a commitment 1.891133ms\n2022-03-22 10:53:00 \u2728 Imported #11 (0x0a5e\u202643d6)\n")),(0,i.kt)("h3",{id:"purge-node-state"},"Purge Node State"),(0,i.kt)("p",null,"In this configuration, the state of the node is stored at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/monkd/volumes/dev/validator"),", so\nyou can remove these folders or just use ",(0,i.kt)("inlineCode",{parentName:"p"},"monk purge"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"monk purge polygon/da-dev-validator-1 polygon/da-dev-validator-2 polygon/da-dev-validator-3\n")))}c.isMDXComponent=!0}}]);