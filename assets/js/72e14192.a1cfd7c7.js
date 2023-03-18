"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=l??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var y=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162),s=n(4996);const l={id:"avail-quick-start",title:"How to use Avail",sidebar_label:"Quick Start",sidebar_position:2,description:"Learn how to use Avail",keywords:["docs","avail","data","availability","how-to","extrinsic","explorer","use"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-quick-start"},c="How to use Avail",p={unversionedId:"avail-quick-start",id:"avail-quick-start",title:"How to use Avail",description:"Learn how to use Avail",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/avail-quick-start",permalink:"/avail-quick-start",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"avail-quick-start",title:"How to use Avail",sidebar_label:"Quick Start",sidebar_position:2,description:"Learn how to use Avail",keywords:["docs","avail","data","availability","how-to","extrinsic","explorer","use"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-quick-start"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Consensus",permalink:"/Architecture/avail-consensus"}},u={},d=[{value:"Generate an Avail Account",id:"generate-an-avail-account",level:2},{value:"Receive AVL Testnet Tokens",id:"receive-avl-testnet-tokens",level:2},{value:"Submit a New Transaction",id:"submit-a-new-transaction",level:2},{value:"Receive AVL Testnet Tokens",id:"receive-avl-testnet-tokens-1",level:2},{value:"Balance Check with <code>@polkadot/api</code>",id:"balance-check-with-polkadotapi",level:3},{value:"Submit a New Transaction",id:"submit-a-new-transaction-1",level:2}],m={toc:d},h="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-avail"},"How to use Avail"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We are working on improving many of the current features. We appreciate you using our testnet and encourage your valuable feedback through one of our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/y6fHnxZQX8"},(0,o.kt)("ins",null,"community channels")),".")),(0,o.kt)("h2",{id:"generate-an-avail-account"},"Generate an Avail Account"),(0,o.kt)("p",null,"You can generate an account using one of two methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.polygonavail.net/"},"Avail Explorer")),(0,o.kt)("li",{parentName:"ul"},"Console/Typescript")),(0,o.kt)(r.Z,{defaultValue:"explorer",values:[{label:"Avail Explorer",value:"explorer"},{label:"@polkadot/api",value:"library"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"explorer",mdxType:"TabItem"},(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.polygonavail.net/"},"Avail Explorer"),"."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/avail-explorer.png"),width:"100%",height:"100%"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://testnet.polygonavail.net/"},"Avail Explorer"))," is a fork\nof ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/"},"Polkadot-JS Apps")),". The interface and navigation are the same\nif you are familiar with Polkadot-JS Apps.")),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Accounts")," tab and click on the ",(0,o.kt)("strong",{parentName:"p"},"Accounts")," sub-tab."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/account.png"),width:"100%",height:"100%"}),(0,o.kt)("admonition",{title:"Address Format",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As Avail is implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),", generic Substrate addresses\nalways start with a 5 and follow the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.substrate.io/v3/advanced/ss58/"},"SS58 address format")),".")),(0,o.kt)("p",null,"On the Accounts page, click on the ",(0,o.kt)("strong",{parentName:"p"},"Add account")," button and follow the steps in the pop-up window."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/add-account.png"),width:"100%",height:"100%"}),(0,o.kt)("admonition",{title:"Key Management",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The seed phrase is your account key, which controls your account.\nYou should not store your seed phrase on a device that has or may have access to\nan internet connection. The seed phrase should be written down and stored on a non-digital\nmedium."),(0,o.kt)("p",{parentName:"admonition"},"Storing your account's JSON file does not have to be as rigourous as storing the seed phrase,\nas long as you use a strong password to encrypt the file. You can import the JSON file to\naccess your account.")),(0,o.kt)("h2",{id:"receive-avl-testnet-tokens"},"Receive AVL Testnet Tokens"),(0,o.kt)("p",null,"On the Avail Explorer, click on the icon next to your account name to\ncopy your address.  Alternatively, you can copy the address manually."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/account-icon.png"),align:"center",width:"100%",height:"100%"}),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology"},"faucet"),"."),(0,o.kt)("p",null,"On the faucet page, select ",(0,o.kt)("inlineCode",{parentName:"p"},"DA Network"),"  and  ",(0,o.kt)("inlineCode",{parentName:"p"},"DA (Test Token)")," as the network and token.\nPaste your account address and click on ",(0,o.kt)("strong",{parentName:"p"},"Submit"),". The transfer will up to one\nminute to complete."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/faucet.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Upon successful transfer, your account should now have a non-zero balance. If you face any issues\nobtaining tokens from the faucet, please reach out on\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/y6fHnxZQX8"},"Discord"),"."),(0,o.kt)("h2",{id:"submit-a-new-transaction"},"Submit a New Transaction"),(0,o.kt)("p",null,"On the Avail Explorer, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Developer")," tab and click on\nthe ",(0,o.kt)("strong",{parentName:"p"},"Extrinsics")," sub-tab."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/developer.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Select your newly created account."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/developer-account.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"There are many extrinsics to choose from; go ahead and select\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"dataAvailability")," extrinsic from the ",(0,o.kt)("strong",{parentName:"p"},"extrinsic dropdown menu"),"."),(0,o.kt)("admonition",{title:"What are extrinsics?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Extrinsics are a form of external information and can either be inherents, signed transactions,\nor unsigned Transactions. More details about extrinsics are available in the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"Substrate documentation"),".")),(0,o.kt)("p",null,"You can then use the dropdown menu on the right-hand side to create an application key or\nsubmit data."),(0,o.kt)(r.Z,{defaultValue:"key",values:[{label:"Create an application key",value:"key"},{label:"Submit data",value:"data"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"key",mdxType:"TabItem"},(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"createApplicationKey")," is used to create an application key."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/da-app-key.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Enter the value you wish to submit as part of this transaction using the ",(0,o.kt)("inlineCode",{parentName:"p"},"App_ID"),", or\nwithout a default key value as ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/da-app-data.png"),width:"100%",height:"100%"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before sending a transaction using ",(0,o.kt)("inlineCode",{parentName:"p"},"App_ID"),", it must be created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"createApplicationKey")," field.")),(0,o.kt)("p",null,"Submit the transaction. Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.polygonavail.net/#/explorer"},"Avail Explorer"),".\nThe recent event list should list your transaction. You can click on the event and expand it to check out\nthe transaction details.")),(0,o.kt)(i.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"submitBlockLengthProposal")," is used to submit data."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/extrinsic-da.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Enter the values you wish to submit as part of this transaction for ",(0,o.kt)("inlineCode",{parentName:"p"},"row")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"col"),"."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/da-row-col.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Submit the transaction. Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.polygonavail.net/#/explorer"},"Avail Explorer"),".\nThe recent event list should list your transaction. You can click on the event and expand it to check out\nthe transaction details."))),(0,o.kt)("admonition",{title:"How to get guarantees that the data behind the transaction is available?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We have abstracted out the nitty-gritty of verifying data availability and have hosted a light client\nfor your use. All you need to do is click on the block number against your desired transaction and\nsee all of the block details."),(0,o.kt)("p",{parentName:"admonition"},"You will also see a ",(0,o.kt)("strong",{parentName:"p"},"confidence factor"),". If it shows ",(0,o.kt)("inlineCode",{parentName:"p"},"0%"),", give it some time and recheck it later.\nOtherwise, it should show a non-zero confidence level indicating the probability with which the underlying data\nis available."))),(0,o.kt)(i.Z,{value:"library",mdxType:"TabItem"},(0,o.kt)("p",null,"Alternatively, you can use the console/typescript to generate an Avail account\nvia ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},(0,o.kt)("inlineCode",{parentName:"a"},"@polkadot/api")),". Create a new folder and add the\nJS library using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/api")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @polkadot/api")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure Typescript dependencies are added for running the script. Here,\n",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," version ",(0,o.kt)("inlineCode",{parentName:"p"},"7.9.1")," is used."),(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," to execute Typescript files in the console. Either use\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add ts-node typescript '@types/node'")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i ts-node typescript '@types/node'"),"\nto install the packages."),(0,o.kt)("p",{parentName:"admonition"},"For instance, if you create a script called ",(0,o.kt)("inlineCode",{parentName:"p"},"account.ts"),", you can execute the script\nin the command line by running:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nts-node account.ts\n\n")),(0,o.kt)("p",{parentName:"admonition"},"You will also need to ",(0,o.kt)("strong",{parentName:"p"},"[connect to a node]","(../Running Avail/avail-node-management.md)")," before running\nthe scripts.")),(0,o.kt)("p",null,"To generate an account, run the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');\nconst {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');\n\nconst keyring = new Keyring({ type: 'sr25519' });\n\nasync function createApi() {\n\n  // Create the API and wait until ready\n  return ApiPromise.create({\n    types: {\n        AccountInfo: 'AccountInfoWithRefCount',\n    },\n  });\n}\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await createApi();\n\n  const keyring = new Keyring({ type: 'sr25519'});\n  const mnemonic = mnemonicGenerate();\n\n  const pair = keyring.createFromUri(mnemonic, { name: 'test_pair' },'sr25519');\n  console.log(pair.meta.name, 'has address', pair.address, 'and the mnemonic is', mnemonic);\n  process.exit(0);\n\n}\nmain().catch(console.error)\n\n")),(0,o.kt)("p",null,"Sample Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ntest_pair has address 5Gq1hKAiSKFkdmcFjTt3U8KEaxDHp613hbdSmqJCRswMkwCB and the mnemonic is decrease lunar scatter pattern spoil alpha index trend vacant sorry scatter never\n\n")),(0,o.kt)("admonition",{title:"Address Format",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As Avail is implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),", generic Substrate addresses\nalways start with a 5 and follow the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.substrate.io/v3/advanced/ss58/"},"SS58 address format")),".")),(0,o.kt)("admonition",{title:"Key derivation and signing algorithm",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The reasons for using ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," are outlined ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://wiki.polkadot.network/docs/learn-cryptography#keypairs-and-signing"},"here")),".")),(0,o.kt)("p",null,"Save the newly generated address and mnemonic phrase for next steps."),(0,o.kt)("admonition",{title:"Key Management",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The seed phrase is your account key, which controls your account.\nYou should not store your seed phrase on a device that has or may have access to\nan internet connection. The seed phrase should be written down and stored on a non-digital\nmedium.")),(0,o.kt)("h2",{id:"receive-avl-testnet-tokens-1"},"Receive AVL Testnet Tokens"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology"},"faucet"),"."),(0,o.kt)("p",null,"On the faucet page, select ",(0,o.kt)("inlineCode",{parentName:"p"},"DA (Test Token)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DA Network")," as the token and network,\nrespectively. Paste your account address and click on ",(0,o.kt)("strong",{parentName:"p"},"Submit"),". The transfer will take up to one\nminute to complete."),(0,o.kt)("img",{src:(0,s.Z)("img/avail/faucet.png"),width:"100%",height:"100%"}),(0,o.kt)("p",null,"Upon successful transfer, your account should now have a non-zero balance. If you face any issues obtaining tokens from the faucet, please reach out on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/y6fHnxZQX8"},"Discord"),"."),(0,o.kt)("h3",{id:"balance-check-with-polkadotapi"},"Balance Check with ",(0,o.kt)("inlineCode",{parentName:"h3"},"@polkadot/api")),(0,o.kt)("p",null,"Use the following script to check the balance of the account you just created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');\nconst {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');\n\nimport type { ISubmittableResult} from '@polkadot/types/types';\n\nconst keyring = new Keyring({ type: 'sr25519' });\n\nasync function createApi() {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('wss://testnet.polygonavail.net/ws');\n\n  // Create the API and wait until ready\n  return ApiPromise.create({\n    provider,\n    types: {\n        DataLookup: {\n          size: 'u32',\n          index: 'Vec<(u32,u32)>'\n        },\n        KateExtrinsicRoot: {\n          hash: 'Hash',\n          commitment: 'Vec<u8>',\n          rows: 'u16',\n          cols: 'u16'\n        },\n        KateHeader: {\n          parentHash: 'Hash',\n          number: 'Compact<BlockNumber>',\n          stateRoot: 'Hash',\n          extrinsicsRoot: 'KateExtrinsicRoot',\n          digest: 'Digest',\n          app_data_lookup: 'DataLookup'\n        },\n        Header: 'KateHeader',\n        AppId: 'u32',\n        CheckAppId: {\n            extra: {\n                appId: 'u32',\n            },\n            types: {}\n        }\n    },\n    signedExtensions: {\n      CheckAppId: {\n        extrinsic: {\n          appId: 'u32'\n        },\n        payload: {}\n      },\n    },\n  });\n}\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await createApi();\n\n  // Retrieve the chain & node information information via rpc calls\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    api.rpc.system.chain(),\n    api.rpc.system.name(),\n    api.rpc.system.version()\n  ]);\n\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n\n    //address which is generated from previous step\ud83d\udc47\n    let ADDRESS = '_ADDRESS_';\n    console.log(ADDRESS);\n    try{\n      let { data: { free:balance}} = await api.query.system.account(ADDRESS)\n      console.log(`${ADDRESS} has balance of ${balance}`)\n    }catch (e){\n      console.log(e)\n    }finally{\n      process.exit(0)\n    }\n}\nmain().catch(console.error)\n\n")),(0,o.kt)("p",null,"Sample Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You are connected to chain Avail-Testnet using Avail Node v3.0.0-6c8781e-x86_64-linux-gnu\n5HBCFfAs5gfqYgSinsr5s1nSZY2uRCh8MhYhXXp6Y9jNRJFB\n5HBCFfAs5gfqYgSinsr5s1nSZY2uRCh8MhYhXXp6Y9jNRJFB has balance of 0\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should get balance as ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if the account is newly created and you have not used the faucet.\nYou should also see the confirmation of the transaction.")),(0,o.kt)("admonition",{title:"Using The Avail Explorer",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For convenience, you can add the account you generated with\n",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," on the Avail Explorer UI to perform account actions.")),(0,o.kt)("h2",{id:"submit-a-new-transaction-1"},"Submit a New Transaction"),(0,o.kt)("p",null,"You can use the provided scripts in this section to sign and submit transactions."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_ID")," with those you want to submit.\nAlso, replace the mnemonic string with your own.")),(0,o.kt)(r.Z,{defaultValue:"key-script",values:[{label:"Create an application key",value:"key-script"},{label:"Submit data",value:"data-script"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"key-script",mdxType:"TabItem"},(0,o.kt)("p",null,"The following script creates an application key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');\nconst {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');\n\nimport type { ISubmittableResult} from '@polkadot/types/types';\n\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nconst keyring = new Keyring({ type: 'sr25519' });\n\nasync function createApi() {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('ws://127.0.0.1:9944');\n\n  // Create the API and wait until ready\n  return ApiPromise.create({\n    provider,\n    types: {\n        DataLookup: {\n          size: 'u32',\n          index: 'Vec<(u32,u32)>'\n        },\n        KateExtrinsicRoot: {\n          hash: 'Hash',\n          commitment: 'Vec<u8>',\n          rows: 'u16',\n          cols: 'u16'\n        },\n        KateHeader: {\n          parentHash: 'Hash',\n          number: 'Compact<BlockNumber>',\n          stateRoot: 'Hash',\n          extrinsicsRoot: 'KateExtrinsicRoot',\n          digest: 'Digest',\n          app_data_lookup: 'DataLookup'\n        },\n        Header: 'KateHeader',\n        AppId: 'u32',\n        CheckAppId: {\n            extra: {\n                appId: 'u32',\n            },\n            types: {}\n        }\n    },\n    signedExtensions: {\n      CheckAppId: {\n        extrinsic: {\n          appId: 'u32'\n        },\n        payload: {}\n      },\n    },\n  });\n}\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await createApi();\n\n  //enter your mnemonic generated from the previous step and replace below.\n  const pair = keyring.addFromUri( 'put your mnemonic', { name: 'test pair' }, 'sr25519');\n  // Retrieve the chain & node information information via rpc calls\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    api.rpc.system.chain(),\n    api.rpc.system.name(),\n    api.rpc.system.version()\n  ]);\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n    try{\n        let KEY = 1;\n        let createId = api.tx.dataAvailability.createApplicationKey(KEY);\n        const unsub = await createId\n            .signAndSend(\n            pair,\n            { app_id: 0},\n            ( result: ISubmittableResult ) => {\n                console.log(`Tx status: ${result.status}`);\n\n                if (result.status.isInBlock) {\n                    console.log(`Tx included at block hash ${result.status.asInBlock}`);\n                } else if (result.status.isFinalized) {\n                    console.log(`Tx included at blockHash ${result.status.asFinalized}`);\n\n                    result.events.forEach(({ phase, event: { data, method, section } }) => {\n                        console.log(`\\t' ${phase}: ${section}.${method}:: ${data}`);\n                    });\n                    unsub\n                    process.exit(0);\n                }\n            });\n    }catch(e){\n        console.error(e);\n    }\n}\nmain().catch(console.error)\n\n"))),(0,o.kt)(i.Z,{value:"data-script",mdxType:"TabItem"},(0,o.kt)("p",null,"The following script submits data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');\nconst {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');\n\nimport type { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';\nimport type { ISubmittableResult} from '@polkadot/types/types';\n\nconst keyring = new Keyring({ type: 'sr25519' });\n\nasync function createApi() {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('wss://testnet.polygonavail.net/ws');\n\n  // Create the API and wait until ready\n  return ApiPromise.create({\n    provider,\n    types: {\n        DataLookup: {\n          size: 'u32',\n          index: 'Vec<(u32,u32)>'\n        },\n        KateExtrinsicRoot: {\n          hash: 'Hash',\n          commitment: 'Vec<u8>',\n          rows: 'u16',\n          cols: 'u16'\n        },\n        KateHeader: {\n          parentHash: 'Hash',\n          number: 'Compact<BlockNumber>',\n          stateRoot: 'Hash',\n          extrinsicsRoot: 'KateExtrinsicRoot',\n          digest: 'Digest',\n          app_data_lookup: 'DataLookup'\n        },\n        Header: 'KateHeader',\n        AppId: 'u32',\n        CheckAppId: {\n            extra: {\n                appId: 'u32',\n            },\n            types: {}\n        }\n    },\n    signedExtensions: {\n      CheckAppId: {\n        extrinsic: {\n          appId: 'u32'\n        },\n        payload: {}\n      },\n    },\n  });\n}\n\nasync function main () {\n  // Create the API and wait until ready\n  const api = await createApi();\n\n  //enter your mnemonic generated from the previous step and replace below \ud83d\udc47.\n  const pair = keyring.addFromUri( 'enter mnemonic here', { name: 'test pair' }, 'sr25519');\n  // Retrieve the chain & node information information via rpc calls\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    api.rpc.system.chain(),\n    api.rpc.system.name(),\n    api.rpc.system.version()\n  ]);\n\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n\n    try{\n        let APP_ID = 1;\n        let VALUE = `iucakcbak`;\n        let transfer = api.tx.dataAvailability.submitData(VALUE);\n        const unsub = await transfer\n            .signAndSend(\n            pair,\n            { app_id: APP_ID},\n            ( result: ISubmittableResult ) => {\n                console.log(`Tx status: ${result.status}`);\n\n                if (result.status.isInBlock) {\n                    console.log(`Tx included at block hash ${result.status.asInBlock}`);\n                } else if (result.status.isFinalized) {\n                    console.log(`Tx included at blockHash ${result.status.asFinalized}`);\n\n                    result.events.forEach(({ phase, event: { data, method, section } }) => {\n                        console.log(`\\t' ${phase}: ${section}.${method}:: ${data}`);\n                    });\n\n                    process.exit(0);\n                }\n            });\n    }catch(e){\n        console.error(e);\n    }\n}\nmain().catch(console.error)\n\n")))),(0,o.kt)("p",null,"You can head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.polygonavail.net/#/explorer"},"Avail Explorer"),", and the\nrecent event list should list your transaction. You can click on the event and expand it to check out\nthe transaction details."),(0,o.kt)("admonition",{title:"How to get guarantees that the data behind the transaction is available?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can use the following curl request to check out the confidence level. Just replace the block number with the\none you wish to get availability guarantees for."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl -s -H \'Content-Type: application/json\' -d \'{"jsonrpc":"2.0","method":"get_blockConfidence","params": {"number": block_number_here}, "id": 1}\' \'https://polygon-da-light.matic.today/v1/json-rpc\'\n\n'))))))}k.isMDXComponent=!0}}]);