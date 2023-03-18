"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return a?i.createElement(m,l(l({ref:t},u),{},{components:a})):i.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const o={id:"faq",title:"FAQ",sidebar_label:"FAQ",description:"Frequently asked questions about Polygon Avail",keywords:["docs","polygon","avail","availability","client","consensus","faq"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"faq"},l="Frequently Asked Questions",r={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently asked questions about Polygon Avail",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"FAQ",sidebar_label:"FAQ",description:"Frequently asked questions about Polygon Avail",keywords:["docs","polygon","avail","availability","client","consensus","faq"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"faq"},sidebar:"defaultSidebar",previous:{title:"Data Availability",permalink:"/Running Avail/avail-data-avail"}},s={},c=[{value:"What is a light client?",id:"what-is-a-light-client",level:2},{value:"What is a popular use case of a light client?",id:"what-is-a-popular-use-case-of-a-light-client",level:2},{value:"What is data availability sampling?",id:"what-is-data-availability-sampling",level:2},{value:"How is erasure coding used to increase data availability guarantees?",id:"how-is-erasure-coding-used-to-increase-data-availability-guarantees",level:2},{value:"What are Kate commitments?",id:"what-are-kate-commitments",level:2},{value:"Since Avail is used by multiple applications, does that mean chains have to download transactions from other chains?",id:"since-avail-is-used-by-multiple-applications-does-that-mean-chains-have-to-download-transactions-from-other-chains",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you do not find your question on this page, please submit your question on the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://discord.gg/jXbK2DDeNt"},(0,n.kt)("ins",null,"Polygon Avail Discord server"))),".")),(0,n.kt)("h2",{id:"what-is-a-light-client"},"What is a light client?"),(0,n.kt)("p",null,"Light clients allow users to interact with a blockchain network without having to sync the full blockchain while maintaining decentralization and security. Generally, they download the blockchain headers, but not the contents of each block. Avail (DA) light clients additionally verify that block contents are available by performing Data Availability Sampling, a technique where small random sections of a block are downloaded."),(0,n.kt)("h2",{id:"what-is-a-popular-use-case-of-a-light-client"},"What is a popular use case of a light client?"),(0,n.kt)("p",null,"There are many use-cases which today rely on an intermediary to maintain a full node, such that end users of a blockchain do not communicate directly with the blockchain but instead through the intermediary. Light clients have until now not been a suitable replacement for this architecture because they lacked data\navailability guarantees. Avail solves this issue, thus enabling more applications to directly participate on the blockchain network without intermediaries. Although Avail does support full nodes, we expect most applications will not need to run one, or will need to run fewer."),(0,n.kt)("h2",{id:"what-is-data-availability-sampling"},"What is data availability sampling?"),(0,n.kt)("p",null,"Avail light clients, like other light clients, only download the headers of the blockchain. However, they additional perform data availability sampling: a technique that randomly samples small sections of the block data and verifies they are correct. When combined with erasure coding and Kate polynomial commitments, Avail clients are able to provide strong (nearly 100%) guarantees of availability without relying on fraud proofs, and with only a small constant number of queries."),(0,n.kt)("h2",{id:"how-is-erasure-coding-used-to-increase-data-availability-guarantees"},"How is erasure coding used to increase data availability guarantees?"),(0,n.kt)("p",null,'Erasure coding is a technique that encodes data in a way that spreads out the information over multiple "shards", such that the loss of some number of those shards can be tolerated. That is, the information can be reconstructed from the other shards. Applied to the blockchain, this means that we effectively increase the size of each block, but we prevent a malicious actor from being able to hide any part of a block up to the redundant shard size.'),(0,n.kt)("p",null,"Since a malicious actor needs to hide a large part of the block in order to attempt to hide even a single transaction, it makes it much more likely that random sampling would catch the large gaps in the data. Effectively, erasure coding makes the data availibility sampling technique much more powerful."),(0,n.kt)("h2",{id:"what-are-kate-commitments"},"What are Kate commitments?"),(0,n.kt)("p",null,"Kate commitments, introduced by Aniket Kate, Gregory M. Zaverucha, and Ian Goldberg in 2010, provide a\nway to commit to polynomials in a succinct manner. Recently, polynomial commitments came to the forefront,\nbeing primarily used as commitments in PLONK-like zero knowledge constructions."),(0,n.kt)("p",null,"In our construction, we use Kate commitments for the following reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It allows us to commit to values in a succinct manner to be kept inside the block header."),(0,n.kt)("li",{parentName:"ul"},"Short openings are possible which helps a light client verify availability."),(0,n.kt)("li",{parentName:"ul"},"The cryptographic binding property helps us avoid fraud proofs by making it computationally infeasible\nto produce wrong commitments.")),(0,n.kt)("p",null,"In the future, we might use other polynomial commitment schemes, if that gives us better bounds or guarantees."),(0,n.kt)("h2",{id:"since-avail-is-used-by-multiple-applications-does-that-mean-chains-have-to-download-transactions-from-other-chains"},"Since Avail is used by multiple applications, does that mean chains have to download transactions from other chains?"),(0,n.kt)("p",null,"No. Avail headers contain an index that allows a given application to determine and download only the sections of a block that have data for that application. Thus, they are largely unaffected by other chains using Avail at the same time or by block sizes."),(0,n.kt)("p",null,"The only exception is data availability sampling. In order to verify that data is available (and due to the nature of erasure coding), clients sample small parts of the block at random, including possibly sections that contain data for other applications."))}d.isMDXComponent=!0}}]);