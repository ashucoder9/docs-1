"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[4182],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=l.createContext({}),s=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?l.createElement(k,i(i({ref:e},d),{},{components:a})):l.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6876:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(7462),n=(a(7294),a(3905));a(4996);const r={id:"quickstart",title:"Get Started with Avail",sidebar_label:"Quickstart",description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,o={unversionedId:"build/quickstart",id:"build/quickstart",title:"Get Started with Avail",description:"Discover how to utilize Avail as a data availability layer.",source:"@site/docs/build/quickstart.md",sourceDirName:"build",slug:"/build/quickstart",permalink:"/build/quickstart",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/build/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Marko Petrlic",lastUpdatedAt:1701328761,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{id:"quickstart",title:"Get Started with Avail",sidebar_label:"Quickstart",description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Network Info",permalink:"/networks"},next:{title:"New User Guide",permalink:"/category/new-user-guide"}},p={},s=[{value:"Start Operating",id:"start-operating",level:2},{value:"Start Building",id:"start-building",level:2},{value:"Sample Workflow",id:"sample-workflow",level:3},{value:"Step 1: Establishing Connection",id:"step-1-establishing-connection",level:4},{value:"Step 2: Submitting Data",id:"step-2-submitting-data",level:4},{value:"Step 3: Dispatching Data Root (Optional)",id:"step-3-dispatching-data-root-optional",level:4},{value:"Step 4: Querying Data and Proofs",id:"step-4-querying-data-and-proofs",level:4},{value:"Step 5: Monitoring and Metrics",id:"step-5-monitoring-and-metrics",level:4},{value:"API Examples",id:"api-examples",level:3}],d={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"start-operating"},"Start Operating"),(0,n.kt)("p",null,"To run an Avail light client, simply run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL1 avail.sh | sh\n")),(0,n.kt)("p",null,"or, with ",(0,n.kt)("inlineCode",{parentName:"p"},"wget"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget --https-only --secure-protocol=TLSv1_2 --quiet -O - avail.sh | sh\n")),(0,n.kt)("p",null,"That's it!"),(0,n.kt)("p",null,"If you're seeking more control over the configuration or are interested in running a full node, check out the deployment guides below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:null},"Tokens Needed"),(0,n.kt)("th",{parentName:"tr",align:null},"Staking"),(0,n.kt)("th",{parentName:"tr",align:null},"Technical Skill Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Client Binary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/operate/node/light-client"},(0,n.kt)("ins",null,"Run a Light Client"))),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Basic"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail-light/releases/tag/v1.7.4"},(0,n.kt)("ins",null,"v1.7.4")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/category/full-node/"},(0,n.kt)("ins",null,"Run a Full Node"))),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/releases/tag/v1.8.0.3"},(0,n.kt)("ins",null,"v1.8.0.3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/category/become-a-validator/"},(0,n.kt)("ins",null,"Become a Validator"))),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Advanced"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/releases/tag/v1.8.0.3"},(0,n.kt)("ins",null,"v1.8.0.3")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"start-building"},"Start Building"),(0,n.kt)("p",null,"The Avail API offers a robust set of features that enable application developers to interact\nseamlessly with the Avail network. This guide provides a curated list of example code snippets in\nJavaScript/TypeScript, Rust, and Go. These examples cover essential tasks such as establishing a\nconnection to a local node, querying data from the network, and executing transactions on the\nblockchain."),(0,n.kt)("p",null,"Before diving into the examples, ensure you have a local Avail node running or configure your settings to align with an existing network."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Detailed instructions on how to execute these examples are available in the Avail GitHub repository:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/blob/develop/examples/ts/README.md"},(0,n.kt)("ins",null,"TypeScript Instructions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/blob/develop/examples/go/README.md"},(0,n.kt)("ins",null,"Go Instructions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/blob/develop/avail-subxt/examples/README.md"},(0,n.kt)("ins",null,"Rust Instructions")))),(0,n.kt)("h3",{id:"sample-workflow"},"Sample Workflow"),(0,n.kt)("p",null,"Follow these steps to understand a sample end-to-end flow of data availability in Avail. Examples are provided for JavaScript, Go, and Rust."),(0,n.kt)("h4",{id:"step-1-establishing-connection"},"Step 1: Establishing Connection"),(0,n.kt)("p",null,"Before you can interact with the Avail network, you need to establish a connection to a node."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/connect.ts"},(0,n.kt)("ins",null,"Establishing Connection")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Go"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/connect"},(0,n.kt)("ins",null,"Establishing Connection")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/headers.rs"},(0,n.kt)("ins",null,"Headers")))))),(0,n.kt)("h4",{id:"step-2-submitting-data"},"Step 2: Submitting Data"),(0,n.kt)("p",null,"Once connected, the next step is to submit data to the network. This could be any blob of data that you want to make available."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/data_submit.ts"},(0,n.kt)("ins",null,"Submitting Blob Data")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Go"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmit"},(0,n.kt)("ins",null,"Submitting Blob Data")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data.rs"},(0,n.kt)("ins",null,"Submitting Blob Data")))))),(0,n.kt)("h4",{id:"step-3-dispatching-data-root-optional"},"Step 3: Dispatching Data Root (Optional)"),(0,n.kt)("p",null,"If you need to dispatch the data root, you can do so at this stage. This is optional and depends on your use case."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/dispatch_data_root.ts"},(0,n.kt)("ins",null,"Dispatching Data Root")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data_and_dispatch_data_root.rs"},(0,n.kt)("ins",null,"Submit Data and Dispatch Data Root")))))),(0,n.kt)("h4",{id:"step-4-querying-data-and-proofs"},"Step 4: Querying Data and Proofs"),(0,n.kt)("p",null,"After submitting your data, you might want to query it to ensure it's been properly stored and is retrievable."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof_data.ts"},(0,n.kt)("ins",null,"Querying Data Proof")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Go"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/queryProofData"},(0,n.kt)("ins",null,"Querying Data Proof")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/democracy_external.rs"},(0,n.kt)("ins",null,"Democracy External")))))),(0,n.kt)("h4",{id:"step-5-monitoring-and-metrics"},"Step 5: Monitoring and Metrics"),(0,n.kt)("p",null,"Finally, you can monitor the network and your data by listening for new blocks and other metrics."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/listen_new_blocks.ts"},(0,n.kt)("ins",null,"Listening for New Blocks")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Go"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/listenNewBlocks"},(0,n.kt)("ins",null,"Listening for New Blocks")))))),(0,n.kt)("h3",{id:"api-examples"},"API Examples"),(0,n.kt)("p",null,"The following table lists various code examples for interacting with the Avail network. These examples are organized by functionality and the supported programming languages."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Functionality"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Languages"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Submission"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/data_submit.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmit"},(0,n.kt)("ins",null,"Go")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data_and_dispatch_data_root.rs"},(0,n.kt)("ins",null,"Rust")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dispatching Data Root"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/dispatch_data_root.ts"},(0,n.kt)("ins",null,"TypeScript")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Creating Application Key"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/app_id.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/create_app_key.rs"},(0,n.kt)("ins",null,"Rust")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Asset Transfer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/transfer.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/transfer"},(0,n.kt)("ins",null,"Go")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Querying Proof/Data Proof"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/queryProofData"},(0,n.kt)("ins",null,"Go")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Querying Application Data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_app_data.ts"},(0,n.kt)("ins",null,"TypeScript")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Event Monitoring (Blocks/Data Submission)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/listen_new_blocks.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/listenNewBlocks"},(0,n.kt)("ins",null,"Go")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmitWatch"},(0,n.kt)("ins",null,"Go")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Network Connection & Info"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/connect.ts"},(0,n.kt)("ins",null,"TypeScript")),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/connect"},(0,n.kt)("ins",null,"Go")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Internal Operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/tree/old_develop/examples/go/internal"},(0,n.kt)("ins",null,"Go")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust + & Substrate Examples"),(0,n.kt)("td",{parentName:"tr",align:null},"Various ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/"},(0,n.kt)("ins",null,"Rust"))," examples like Data Availability Bridge Actor, Democracy External, etc.")))))}m.isMDXComponent=!0}}]);