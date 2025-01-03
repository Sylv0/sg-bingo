(function(){"use strict";var e={5822:function(e,t,n){var r=n(5130),i=n(6768),a=n(4232);const o={id:"primary-header"},s=["value"],l={id:"primary-main"},u={key:0},c={key:1};function g(e,t,n,g,m,d){const h=(0,i.g2)("GameBoard");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("header",o,[t[3]||(t[3]=(0,i.Lk)("h1",null,"SG Bingo",-1)),(0,i.bo)((0,i.Lk)("select",{onChange:t[0]||(t[0]=(...t)=>e.changeData&&e.changeData(...t)),"onUpdate:modelValue":t[1]||(t[1]=e=>m.selectedData=e)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(Object.keys(this.data),(e=>((0,i.uX)(),(0,i.CE)("option",{value:e,key:e},(0,a.v_)(e),9,s)))),128))],544),[[r.u1,m.selectedData]]),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>d.newGame&&d.newGame(...e))},"New game")]),(0,i.Lk)("main",l,[m.items.length>0?((0,i.uX)(),(0,i.CE)("section",u,[(0,i.bF)(h,{items:m.items,bingos:m.bingos,onUpdateItem:d.updateItem},null,8,["items","bingos","onUpdateItem"])])):((0,i.uX)(),(0,i.CE)("section",c,t[4]||(t[4]=[(0,i.Lk)("p",null,"Select a set...",-1)])))]),t[5]||(t[5]=(0,i.Lk)("footer",{id:"primary-footer"},[(0,i.Lk)("p",null,"Svenska Gamers Squad Bingo")],-1))],64)}n(4114);const m={class:"grid"},d=["onClick"];function h(e,t,n,r,o,s){return(0,i.uX)(),(0,i.CE)("ul",m,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.items,((t,n)=>((0,i.uX)(),(0,i.CE)("li",{class:(0,a.C4)(["grid-item",{selected:t.selected,bingo:t.bingo}]),onClick:t=>e.$emit("updateItem",n),key:n},(0,a.v_)(t.value),11,d)))),128))])}var f={name:"GameBoard",props:["items","bingos"],emits:["updateItem"],methods:{}},p=n(1241);const b=(0,p.A)(f,[["render",h]]);var v=b,k=JSON.parse('{"SG":["20+ revives","Din squad blir MVP","Du blir top medic ","Du blir top supplyrunner","Du hugger någon med kniv","30+ kills(inte incapacitated)","Du spränger ett fordon med C4","Du blir skickad till Townhall","Du spränger ett fordon med mina","Någon glömmer rally","Någon får TK med mina","Någon hämtar/äter mat","Någon lämnar mitt i match","Någon kommenterar Sylv0s tagg","Någon blir ivägslängd av fordon","Någon blir TK bannad av artilleri","Någon säger att vi behöver balansera","\\"Han fuskar\\"","\\"Han är död\\"","\\"Saknar gamla MGn\\"","\\"Jag kollar kartan\\"","\\"Vem är det som kör?\\"","\\"Kan någon flytta mig?\\"","\\"Är inte matchen över snart?\\"","QUACK","Åka båt","Blå älg","Noodle arms","Pirat revive","EOS äter chip","Fordon välter","Förare är AFK","SG balanserar","SG på försvar","15+ i SquadRum","Server krashar","Spelet krashar","MBT i närstrid","Admin är taskig","Rom och julmust","Klagar på laget","SG tappar försvar","Danne är olämplig","HAB mitt på målet","Linsbågar och vin","Klingan säger träd","HAB långt från målet","Heli tappar stjärtrotor","...så har jag inget sagt","Klagomål på nästa karta","Yeho 3 gånger samma kväll","Marksman blir kallad sniper","Ingen koll på \'arming-distance\'","10+ från clan lämnar efter match","Blåbär misslyckas med enkel uppgift","Får inte revive innan tiden tar slut","Lågt med tickets, men folk ger upp direkt"],"SI":["Example"],"n47":["Example"]}');const y=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},w=(e=[])=>{const t=e.length;return t>=25?e:[...e,...Array(25-t)]},S=e=>y(w(e)).splice(0,25).map((e=>({value:e,selected:!1,bingo:!1}))),C=e=>[e%5,Math.floor(e/5)],T=(e,t)=>e+5*t,D=e=>e%6===0,G=e=>e>=4&&e<=20&&e%4===0;var L={name:"App",components:{GameBoard:v},data(){return{data:k,selectedData:"SG",items:[],bingos:{row:new Set,column:new Set,leftToRight:!1,rightToLeft:!1}}},methods:{newGame(){void 0!==this.selectedData&&(this.items=S([...k[this.selectedData]]),this.bingos.column.clear(),this.bingos.row.clear(),this.bingos.leftToRight=!1,this.bingos.rightToLeft=!1)},updateItem(e){const{value:t,selected:n}=this.items[e];this.items[e]={value:t,selected:!n},this.checkForBingo(e,!n),this.updateBoardStates()},checkForBingo(e,t){const[n,r]=C(e),i=[],a=[],o=[],s=[],l=D(e),u=G(e);if(t){for(let e=0;e<5;e++){const t=T(e,r);this.items[t].selected&&i.push(t);const c=T(n,e);this.items[c].selected&&a.push(c),l&&this.items[6*e].selected&&s.push(6*e),u&&this.items[4*e+4].selected&&o.push(4*e+4)}5===i.length&&this.bingos.row.add(r),5===a.length&&this.bingos.column.add(n),5===s.length&&(this.bingos.leftToRight=!0),5===o.length&&(this.bingos.rightToLeft=!0)}else this.bingos.row.delete(r),this.bingos.column.delete(n),l&&(this.bingos.leftToRight=!1),u&&(this.bingos.rightToLeft=!1)},updateBoardStates(){for(const e in this.items){const[t,n]=C(e),r=D(e)&&this.bingos.leftToRight,i=G(e)&&this.bingos.rightToLeft;this.items[e].bingo=this.bingos.row.has(n)||this.bingos.column.has(t)||r||i}}},mounted(){this.newGame()}};const B=(0,p.A)(L,[["render",g],["__scopeId","data-v-5ac57e95"]]);var O=B;(0,r.Ef)(O).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunksg_bingo"]=self["webpackChunksg_bingo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5822)}));r=n.O(r)})();
//# sourceMappingURL=app.40fcf41d.js.map