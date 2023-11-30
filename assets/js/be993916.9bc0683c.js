"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[1908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));n(4996);const a={id:"docker",title:"How to Run a Full Node with Docker",sidebar_label:"Using Docker",description:"This step-by-step guide will walk you through the process of setting up and running an Avail full node using Docker.",keywords:["docs","avail","node","full node","data availability","da","docker"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"operate/node/docker",id:"operate/node/docker",title:"How to Run a Full Node with Docker",description:"This step-by-step guide will walk you through the process of setting up and running an Avail full node using Docker.",source:"@site/docs/operate/node/0030-full-node-docker.md",sourceDirName:"operate/node",slug:"/operate/node/docker",permalink:"/operate/node/docker",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/node/0030-full-node-docker.md",tags:[],version:"current",lastUpdatedBy:"Marko Petrlic",lastUpdatedAt:1701328761,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:30,frontMatter:{id:"docker",title:"How to Run a Full Node with Docker",sidebar_label:"Using Docker",description:"This step-by-step guide will walk you through the process of setting up and running an Avail full node using Docker.",keywords:["docs","avail","node","full node","data availability","da","docker"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Using Binaries",permalink:"/operate/node/binaries"},next:{title:"RPC Node",permalink:"/operate/node/rpc"}},s={},d=[{value:"Step 1: Launch Your Avail Node",id:"step-1-launch-your-avail-node",level:2},{value:"Step 2: Verify Node Functionality",id:"step-2-verify-node-functionality",level:2},{value:"Inspect Node Logs",id:"inspect-node-logs",level:3},{value:"Monitor Your Node",id:"monitor-your-node",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides step-by-step instructions for setting up and running a full node on the Avail network using Docker. Whether you're new to node operation or have prior experience, this guide is designed to make the setup process straightforward."),(0,r.kt)("admonition",{title:"Before you start",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Ensure that you meet the ",(0,r.kt)("a",{parentName:"strong",href:"/operate/system-requirements"},(0,r.kt)("ins",null,"system requirements")),".")," We recommend downloading the pre-compiled binary for speed and convenience.")),(0,r.kt)("h2",{id:"step-1-launch-your-avail-node"},"Step 1: Launch Your Avail Node"),(0,r.kt)("p",null,"To launch your Avail node, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/avail")," directory and execute the following Docker command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd /mnt/avail\nsudo docker run -v $(pwd)/state:/da/state:rw -p 30333:30333 -p 9615:9615 -p 9944:9944 -d --restart unless-stopped availj/avail:v1.8.0.3 --chain goldberg --name "MyAweasomeInContainerAvailAnode" -d /da/state\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Docker command performs several important steps:")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Map the state directory, providing read-write permissions for data persistence."),(0,r.kt)("li",{parentName:"ul"},"Opens various ports for different functionalities, including P2P connections, metrics, and HTTP RPC."),(0,r.kt)("li",{parentName:"ul"},"Utilizes the Avail image from Docker Hub and sets it to restart unless manually stopped."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Sample output"),(0,r.kt)("p",null,"You should see an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2023-11-07 17:35:19 Avail Node\n2023-11-07 17:35:19 \u270c\ufe0f  version 1.8.0-9c5f37b9230\n2023-11-07 17:35:19 \u2764\ufe0f  by Anonymous, 2017-2023\n2023-11-07 17:35:19 \ud83d\udccb Chain specification: Avail Goldberg Testnet\n2023-11-07 17:35:19 \ud83c\udff7  Node name: fresh-fan-5502\n2023-11-07 17:35:19 \ud83d\udc64 Role: FULL\n2023-11-07 17:35:19 \ud83d\udcbe Database: RocksDb at /tmp/substrateCTFPb5/chains/avail_goldberg_testnet/db/full\n2023-11-07 17:35:20 \ud83d\udd28 Initializing Genesis block/state (state: 0x6bc7\u2026ec83, header-hash: 0x6f09\u2026a7ae)\n2023-11-07 17:35:20 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.\n2023-11-07 17:35:21 \ud83d\udc76 Creating empty BABE epoch changes on what appears to be first startup.\n2023-11-07 17:35:21 \ud83c\udff7  Local node identity is: 12D3KooWEEa9iNANi6PUeXGaDqTgTR9T5YcP3A69nwbT4VXnG5R1\n2023-11-07 17:35:21 Prometheus metrics extended with avail metrics\n2023-11-07 17:35:21 \ud83d\udcbb Operating system: linux\n2023-11-07 17:35:21 \ud83d\udcbb CPU architecture: x86_64\n2023-11-07 17:35:21 \ud83d\udcbb Target environment: gnu\n2023-11-07 17:35:21 \ud83d\udcbb CPU: 13th Gen Intel(R) Core(TM) i7-13700K\n2023-11-07 17:35:21 \ud83d\udcbb CPU cores: 16\n2023-11-07 17:35:21 \ud83d\udcbb Memory: 31863MB\n2023-11-07 17:35:21 \ud83d\udcbb Kernel: 6.5.8-100.fc37.x86_64\n2023-11-07 17:35:21 \ud83d\udcbb Linux distribution: Fedora Linux 37 (Workstation Edition)\n2023-11-07 17:35:21 \ud83d\udcbb Virtual machine: no\n2023-11-07 17:35:21 \ud83d\udce6 Highest known block at #0\n2023-11-07 17:35:21 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2023-11-07 17:35:21 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-11-07 17:35:21 \ud83c\udfc1 CPU score: 1.62 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Memory score: 22.99 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Disk score (seq. writes): 6.78 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Disk score (rand. writes): 2.67 GiBs\n2023-11-07 17:35:21 \ud83d\udd0d Discovered new external address for our node: /ip4/176.61.156.176/tcp/30333/ws/p2p/12D3KooWEEa9iNANi6PUeXGaDqTgTR9T5YcP3A69nwbT4VXnG5R1\n'))),(0,r.kt)("h2",{id:"step-2-verify-node-functionality"},"Step 2: Verify Node Functionality"),(0,r.kt)("h3",{id:"inspect-node-logs"},"Inspect Node Logs"),(0,r.kt)("p",null,"To confirm that your node is operating as expected, inspect the Docker logs by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu:/mnt/avail# docker ps\nubuntu:/mnt/avail# docker logs 5b3978de8f35  # 5b3978de8f35 is the container id\n")),(0,r.kt)("h3",{id:"monitor-your-node"},"Monitor Your Node"),(0,r.kt)("p",null,"You can monitor the status of your node on the ",(0,r.kt)("a",{parentName:"p",href:"http://telemetry.avail.tools/"},(0,r.kt)("ins",null,"Avail Telemetry"))," website."))}u.isMDXComponent=!0}}]);