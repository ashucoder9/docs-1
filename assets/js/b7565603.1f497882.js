"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[3819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4866:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var k=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function b(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},8689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(4866);const i={id:"dymension",title:"How to Deploy Dymension RollApps with Avail",sidebar_label:"RollApps",description:"Discover how to utilize the Avail Goldberg testnet as a DA layer to build RollApps with the Dymension Froopyland testnet.",keywords:["documentation","avail","develop","build","data availability","da","dymension"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},l=void 0,s={unversionedId:"clash-of-nodes/dymension",id:"clash-of-nodes/dymension",title:"How to Deploy Dymension RollApps with Avail",description:"Discover how to utilize the Avail Goldberg testnet as a DA layer to build RollApps with the Dymension Froopyland testnet.",source:"@site/docs/clash-of-nodes/dymension.md",sourceDirName:"clash-of-nodes",slug:"/clash-of-nodes/dymension",permalink:"/clash-of-nodes/dymension",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/clash-of-nodes/dymension.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1705957220,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{id:"dymension",title:"How to Deploy Dymension RollApps with Avail",sidebar_label:"RollApps",description:"Discover how to utilize the Avail Goldberg testnet as a DA layer to build RollApps with the Dymension Froopyland testnet.",keywords:["documentation","avail","develop","build","data availability","da","dymension"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Terms & Conditions",permalink:"/clash-of-nodes/terms-and-conditions"},next:{title:"FAQs",permalink:"/clash-of-nodes/faqs"}},p={},u=[{value:"Introduction",id:"introduction",level:3},{value:"How to Participate",id:"how-to-participate",level:3},{value:"How to Migrate an Existing RollApp",id:"how-to-migrate-an-existing-rollapp",level:3},{value:"How to Create a New RollApp",id:"how-to-create-a-new-rollapp",level:3}],c=(d="TabItem",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:u},h="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'The "Dymension RollApps" challenge, part of the groundbreaking ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/category/clash-of-nodes/"},(0,r.kt)("ins",null,"Clash of Nodes campaign"))),", represents an exciting collaboration between ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://dymension.xyz/"},(0,r.kt)("ins",null,"Dymension")))," and Avail. This guide offers developers comprehensive instructions to deploy rollups using Avail as the data availability (DA) layer on the Dymension Froopyland testnet."),(0,r.kt)("h3",{id:"how-to-participate"},"How to Participate"),(0,r.kt)("p",null,"Key Steps to participating include the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy on Avail's Goldberg Testnet"),": Opt to post your rollup data to the Avail Goldberg Testnet, part of the Clash of Nodes."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fund Your Account"),": Use the Avail Goldberg faucet to acquire tokens for the Goldberg Incentivized Testnet."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Update Your Rollup Listing"),": Ensure your rollup is listed correctly on the Dymension dashboard with a PR update."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Earn Points"),": Your rollup accrues points on the Clash of Nodes leaderboard based on usage.")),(0,r.kt)("admonition",{title:"What Qualifies as an Avail-Powered RollApp?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ensure your RollApp aligns with these essential criteria:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Uses Avail"),": Integrate Avail as the data availability solution."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Operational and Accessible"),": The RollApp should be actively running and hosted in a publicly accessible environment, not confined to a private network."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Functionality"),": It must be more than a bare node; the RollApp should possess operational features or capabilities."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Public Interface"),": Provide a publicly accessible webpage for user interaction with the RollApp, or detailed instructions for its usage."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Passport Verification"),': The team member managing the RollApp must have the "Passport verified" role within the community.'))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c,{value:"existing",label:"Already Have a RollApp?",mdxType:"TabItem"},(0,r.kt)("h3",{id:"how-to-migrate-an-existing-rollapp"},"How to Migrate an Existing RollApp"),(0,r.kt)("p",null,"For developers who previously ran RollApps and are looking to migrate to the Avail Goldberg network, the following guide outlines how to do so."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stop All Roller Services"),": Before initiating the migration, ensure that all Roller services associated with your RollApp are halted. This is crucial to prevent any conflicts or data corruption during the transition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Switch DA to Avail"),': You must switch your DA configuration to use "avail".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update Avail Network Endpoint"),": Run the following command, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLER_HOME_DIR")," with your Roller home directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's|wss://dymension-devnet.avail.tools/ws|wss://goldberg.avail.tools/ws|g' <ROLLER_HOME_DIR>/rollapp/config/dymint.toml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Retrieve Your Avail Address"),": To proceed with the migration, you need your Avail address. Obtain this by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"roller keys list\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fund Your Avail Address"),": With your Avail address in hand, head to the Avail faucet to secure the necessary funding for your RollApp on the Goldberg network. Follow the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/about/faucet"},(0,r.kt)("ins",null,"faucet guide instructions")))," to deposit testnet tokens into your Avail address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Restart All Services"),": Once the Avail address is funded and the network endpoint updated, you can restart all Roller services.\nThis restart will initiate your RollApp on the Avail Goldberg network, completing the migration process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update Your RollApp in the Dymension Registry"),": Assuming your app is already registered in the Dymension registry, you will need to submit a new PR to amend the existing entry."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"da": "Avail"')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"goldberg": true')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"availAddress": "<avail address of your RollApp>"'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click for JSON Template"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chainId": "your_chain_id",\n  "chainName": "Your Chain Name",\n  "rpc": "http://your.rpc.url:port",\n  "rest": "http://your.rest.url:port",\n  "bech32Prefix": "your_prefix",\n  "currencies": [\n    {\n      "displayDenom": "YOUR_TOKEN",\n      "baseDenom": "uYOUR_TOKEN",\n      "decimals": 18,\n      "logo": "/path/to/your/logo.png",\n      "type": "main"\n    }\n  ],\n  "coinType": 60,\n  "faucetUrl": "http://link.to.your.faucet",\n  "website": "http://link.to.your.website",\n  "logo": "/path/to/your/logo.png",\n  "ibc": {\n    "hubChannel": "your_hub_channel",\n    "channel": "your_channel",\n    "timeout": 172800000\n  },\n  "evm": {\n    "chainId": "your_evm_chain_id",\n    "rpc": "http://your.evm.rpc.url:port"\n  },\n  "type": "RollApp",\n  "da": "Avail",\n  "description": "Description of your RollApp",\n  "analytics": true,\n  "goldberg": true,\n  "availAddress": "Your RollApp\'s Avail address"\n}\n')))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify Your RollApp"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MANDATORY RollApp Verification"),": A moderator will examine the RollApp's webpage to confirm that it is operational and functional. If the RollApp is not verifiable or if there are any uncertainties regarding its operation, a moderator will reach out to the development team for further clarification. The team may be asked to make necessary updates to the RollApp and resubmit for review. Clear instructions will be provided if this is the case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MANDATORY Ownership Verification"),": As part of the PR submission, ",(0,r.kt)("strong",{parentName:"p"},"a verification transaction using the sequencer is required to prove ownership of the RollApp"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Ticket in #rollapp-verification"),": Navigate to the #rollap-verification channel on the Avail Discord and create a ticket. A moderator will provide a specific amount needed for the verification transaction. This amount will be unique to each verification process to ensure authenticity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Export the Sequencer's Private Key"),": Carefully export the private key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hub_sequencer")," address. Remember to excerise caution as this is a sensitive operation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"roller keys export hub_sequencer\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Import Key into any EVM Wallet"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open your wallet application, such as MetaMask."),(0,r.kt)("li",{parentName:"ul"},"Select the option to import an account."),(0,r.kt)("li",{parentName:"ul"},"Enter the sequencer's private key when prompted. Then, switch to that account; you should see the balance of your RollApp on the Dymension Hub."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Send the Verification Transaction"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After importing the sequencer's address into your wallet, conduct a transaction by sending the specified amount to the designated verification address."),(0,r.kt)("li",{parentName:"ul"},"Ensure the transaction details match the amount and destination address: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"0x1eB169bEC2725475153F493aAcDaad4E9CA1e32E")),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Submit Proof of Transaction to Moderator"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Visit the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://fl.dym.fyi/"},(0,r.kt)("ins",null,"Dymension explorer")))," and obtain the transaction ID link of the completed transfer. Depending on your wallet, you may need to retrieve the transaction ID link directly from its corresponding explorer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Please submit the URL to the moderator you are in contact with"),". The moderator will verify the transaction using this link. Upon successful verification, the PR will be approved. Keep an eye on the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://portal.dymension.xyz/rollapps"},(0,r.kt)("ins",null,"Dymension Portal")))," for the gold Avail logo next to your RollApp. This icon indicates successful integration with the Goldberg testnet.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/dymension/dy-portal-avail.png",alt:"Avail RollApp Icon on Portal",width:"90%"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Notify Moderator of Verification"),": After your PR is approved, inform the moderator with whom you've been coordinating to confirm successful ownership verification of your RollApp and adherence to the RollApp criteria; ",(0,r.kt)("strong",{parentName:"p"},"your RollApp will not be recognized as part of the Clash of Nodes campaign until you do so"),". Upon verification and PR merger, your app will be listed on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://leaderboard.availproject.org/"},(0,r.kt)("ins",null,"Clash of Nodes Leaderboard"))),".")))))))),(0,r.kt)(c,{value:"new",label:"Create a New RollApp",mdxType:"TabItem"},(0,r.kt)("h3",{id:"how-to-create-a-new-rollapp"},"How to Create a New RollApp"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create Configuration Files"),": Navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.dymension.xyz/build/quick-start/roller-quick/install"},(0,r.kt)("ins",null,"official Dymension documentation")))," to install ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.dymension.xyz/build/roller/"},(0,r.kt)("ins",null,"roller")))," and create a new RollApp instance. The guided setup is recommended for ease of use, while the manual method offers more customization for experienced developers. ",(0,r.kt)("strong",{parentName:"p"},'In either case, ensure you select "Avail" as the DA layer'),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Upon initialization, you will receive the following addresses (take note of them):"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sequencer ",(0,r.kt)("inlineCode",{parentName:"strong"},"<network>")),": This address is used to publish state updates to the Dymension Hub."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Relayer ",(0,r.kt)("inlineCode",{parentName:"strong"},"<network>")),": This address handles the relaying of IBC packets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DA ",(0,r.kt)("inlineCode",{parentName:"strong"},"<network>")),": This address is used to publish data on-chain to the DA network (in this case, Avail).")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fund Your RollApp Addresses"),": To fund the the Dymension addresses, follow these steps in the official ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.dymension.xyz/build/quick-start/roller-quick/initialize#address-funding"},(0,r.kt)("ins",null,"Dymension documentation"))),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fund Your Avail Account"),": You'll also need to fund your Avail account using the Avail faucet available on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discord.com/invite/availproject"},(0,r.kt)("ins",null,"official Avail Discord"))),". For detailed guidance, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/about/faucet"},(0,r.kt)("ins",null,"Avail Faucet Guide")))," and follow the provided instructions."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Avoid the ",(0,r.kt)("strong",{parentName:"p"},"#dymension-faucet")," channel on the Avail Discord and the ",(0,r.kt)("strong",{parentName:"p"},"#avail-faucet")," channel on the Dymension Discord, as they provide tokens for an old devnet and not for the Goldberg network.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The faucet requires meeting a mandatory threshold using the Gitcoin passport. If necessary, you can link your Avail account on your machine with the wallet you are using for this process. Exercise caution when exporting your account's key for any reason."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run Your RollApp in Production"),": After initializing and funding your RollApp accounts, we're ready to start running the RollApp in production, leveraging Avail for data availability. To do so, follow the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.dymension.xyz/build/production/run"},(0,r.kt)("ins",null,"Dymension guide"))),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add Your RollApp to the Dymension Registry"),": To register your RollApp on the Dymension Hub, follow the instructions in the README file of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/dymensionxyz/rollapp-registry"},(0,r.kt)("ins",null,"RollApp Registry repository")))," on GitHub."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"This registration process introduces a dedicated namespace in the Dymension Hub for your RollApp. Once registered, the RollApp is recognized by the Dymension Hub, allowing Sequencers to publish state updates on-chain and enhancing the interoperability across different ecosystems.")),(0,r.kt)("p",{parentName:"li"},"This process involves raising a pull request with the necessary details and configurations. The PR must include the following Avail-specific configurations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"da": "Avail"')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"goldberg": true')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'"availAddress": "<avail address of your RollApp>"'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click for JSON Template"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chainId": "your_chain_id",\n  "chainName": "Your Chain Name",\n  "rpc": "http://your.rpc.url:port",\n  "rest": "http://your.rest.url:port",\n  "bech32Prefix": "your_prefix",\n  "currencies": [\n    {\n      "displayDenom": "YOUR_TOKEN",\n      "baseDenom": "uYOUR_TOKEN",\n      "decimals": 18,\n      "logo": "/path/to/your/logo.png",\n      "type": "main"\n    }\n  ],\n  "coinType": 60,\n  "faucetUrl": "http://link.to.your.faucet",\n  "website": "http://link.to.your.website",\n  "logo": "/path/to/your/logo.png",\n  "ibc": {\n    "hubChannel": "your_hub_channel",\n    "channel": "your_channel",\n    "timeout": 172800000\n  },\n  "evm": {\n    "chainId": "your_evm_chain_id",\n    "rpc": "http://your.evm.rpc.url:port"\n  },\n  "type": "RollApp",\n  "da": "Avail",\n  "description": "Description of your RollApp",\n  "analytics": true,\n  "goldberg": true,\n  "availAddress": "Your RollApp\'s Avail address"\n}\n'))))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/dymension/rollapps-register.png",alt:"Register RollApp",width:"80%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MANDATORY RollApp Verification"),": A moderator will examine the RollApp's webpage to confirm that it is operational and functional. If the RollApp is not verifiable or if there are any uncertainties regarding its operation, a moderator will reach out to the development team for further clarification. The team may be asked to make necessary updates to the RollApp and resubmit for review. Clear instructions will be provided if this is the case."),(0,r.kt)("p",{parentName:"li"},"After your PR is approved, inform a moderator to confirm adherence to the RollApp criteria and verification process; ",(0,r.kt)("strong",{parentName:"p"},"your RollApp will not be recognized as part of the Clash of Nodes campaign until you do so"),". Upon verification and PR merger, your app will be listed on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://leaderboard.availproject.org/"},(0,r.kt)("ins",null,"Clash of Nodes Leaderboard"))),"."),(0,r.kt)("p",{parentName:"li"},"Look out for the gold Avail logo next to your RollApp on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://portal.dymension.xyz/rollapps"},(0,r.kt)("ins",null,"Dymension Portal"))),", signaling your integration with the Goldberg testnet. Once the PR is merged, the app will also appear on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://leaderboard.availproject.org/"},(0,r.kt)("ins",null,"Clash of Nodes Leaderboard"))),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/dymension/dy-portal-avail.png",alt:"Avail RollApp Icon on Portal",width:"90%"})))))))}g.isMDXComponent=!0}}]);