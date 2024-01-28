"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[8020],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return o?n.createElement(f,r(r({ref:t},d),{},{components:o})):n.createElement(f,r({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3199:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),i=o(4996);const r={id:"npos",title:"Overview of the Avail NPoS",sidebar_label:"NPoS",description:"Avail's mechanism for establishing  distributed consensus",keywords:["docs","avail","npos","consensus"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},s=void 0,l={unversionedId:"about/consensus/npos",id:"about/consensus/npos",title:"Overview of the Avail NPoS",description:"Avail's mechanism for establishing  distributed consensus",source:"@site/docs/about/consensus/npos-explained.md",sourceDirName:"about/consensus",slug:"/about/consensus/npos",permalink:"/about/consensus/npos",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/consensus/npos-explained.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1703141549,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{id:"npos",title:"Overview of the Avail NPoS",sidebar_label:"NPoS",description:"Avail's mechanism for establishing  distributed consensus",keywords:["docs","avail","npos","consensus"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"GRANDPA",permalink:"/about/consensus/grandpa"},next:{title:"Operate a Node",permalink:"/category/operate-a-node"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Nominated Proof of Stake (NPOS)",id:"nominated-proof-of-stake-npos",level:3},{value:"Nominated Proof of Stake (NPOS) validator work allocation",id:"nominated-proof-of-stake-npos-validator-work-allocation",level:3}],u={toc:d},h="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before delving into Avail's consensus, it's crucial to grasp the concept of consensus and its role. Consensus serves as a method to reach agreement on a shared state. For the\ncontinuous progression of the blockchain's state, all nodes within the network must collectively agree and achieve consensus. This consensus mechanism is essential for decentralized\nnetworks, ensuring synchronization among nodes. In the absence of consensus in a decentralized blockchain network, there is no guarantee that the state acknowledged by one node\naligns with the perspectives of other nodes. Consensus strives to establish an objective representation of the state within a network where participants hold subjective views.\nIt is the mechanism through which nodes communicate, reach agreement, and collaboratively generate new blocks."),(0,a.kt)("p",null,"In order to cover Avails concensus we must cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nominated Proof of Stake (NPOS)")," which focuses on who is allowed to take part in concensus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GRANDPA")," which focuses on what is the last and final change/block"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BABE")," which focuses on who will propose the next change/block")),(0,a.kt)("p",null,"Lets dig deeper into Nominated Proof of Stake (NPOS) first."),(0,a.kt)("h3",{id:"nominated-proof-of-stake-npos"},"Nominated Proof of Stake (NPOS)"),(0,a.kt)("p",null,'Nominated Proof of Stake (NPoS) represents a variation of Delegated Proof of Stake (DPoS), which functions as a consensus algorithm within blockchain networks to establish\ndistributed consensus. DPoS entails a set of guidelines for selecting the validator set on blockchains. Instead of all token holders having eligibility to create and validate blocks,\na specific number of validators, referred to as "delegates" or "witnesses," are chosen to produce blocks and validate transactions. Typically, token holders cast votes to elect these\nvalidators through a delegation process. In a DPoS system, token holders possess the authority to vote for their preferred delegates, who subsequently take turns producing blocks and\nvalidating transactions.'),(0,a.kt)("p",null,'The purpose of NPoS aligns with DPoS, aiming to select trustworthy validators for consensus execution. However, the selection mechanism differs. In NPoS, rather than a delegator\nchoosing a single validator or specifying which validator their token supports, they nominate a predetermined quantity of validators they are comfortable seeing elected.\nThis nomination process gives rise to the term "Nominate Proof of Stake," where the individual staking tokens is referred to as a nominator.'),(0,a.kt)("p",null,"In simple terms, within the Avail ecosystem, you can act as a nominator (or delegator/staker) and nominate up to 16 validators. You do not need to select all 16, you may select any qty under 16."),(0,a.kt)("img",{src:(0,i.Z)("img/avail/nominator.png"),width:"100%",height:"100%"}),(0,a.kt)("p",null,"As a participant with a stake in the network, your contribution may be directed towards endorsing a single validator during a particular era. The illustration below highlights the\npotential scenario where your stake is utilized to back and support a specific validator within the given timeframe"),(0,a.kt)("img",{src:(0,i.Z)("img/avail/nominator-elected-1.png"),width:"100%",height:"100%"}),(0,a.kt)("p",null,"Alternatively, your stake may be diversified among multiple validators from the pool of 16 nominees. For instance, in the presented scenario, your stake has been distributed across\nthree different validators. This diversification allows you to participate in supporting and securing multiple validators, contributing to the overall resilience and decentralization\nof the network."),(0,a.kt)("img",{src:(0,i.Z)("img/avail/nominator-elected-3.png"),width:"100%",height:"100%"}),(0,a.kt)("p",null,"The goal is to utilize your tokens effectively, backing validators that enable the highest staking of AVL (Avail's native token) and bring the maximum number of validators online."),(0,a.kt)("h3",{id:"nominated-proof-of-stake-npos-validator-work-allocation"},"Nominated Proof of Stake (NPOS) validator work allocation"),(0,a.kt)("p",null,"In certain Proof of Stake (PoS) protocols, such as Tendermint, the likelihood of a validator being chosen for block production or network work allocation increases with the amount of\nstake they hold. Essentially, the higher the stake a validator possesses, the more opportunities they have to participate in key network activities. However, in Nominated Proof of Stake (NPoS),\na different approach is taken, where all elected validators are treated on an equal footing. Regardless of their stake size or the quantity of nominators supporting them, NPoS\nensures that every validator receives similar workloads without any preferential treatment based on stake size or the number of supporters."),(0,a.kt)("p",null,"It's crucial to note that, in the NPoS model, the equality in workload distribution doesn't imply an identical chance of being elected for all validators. Validators with larger\nstakes and a higher number of nominators still hold a greater probability of being elected. The democratic nature of NPoS lies in the fact that once elected, all validators,\nirrespective of their individual stake size, share an equitable workload, fostering a fair and balanced participation framework within the network."),(0,a.kt)("p",null,"Therefore, while the selection process may favor validators with more substantial stakes and broader support among nominators, the subsequent allocation of work is conducted\nimpartially, ensuring that elected validators contribute to the network in a manner that aligns with the principles of fairness and inclusivity."))}p.isMDXComponent=!0}}]);