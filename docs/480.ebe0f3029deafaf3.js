"use strict";(self.webpackChunkcountry_app=self.webpackChunkcountry_app||[]).push([[480],{480:(oe,C,a)=>{a.r(C),a.d(C,{CountriesModule:()=>te});var h=a(551),e=a(256),v=a(262),Z=a(646),A=a(4),u=a(505);const g_apiUrl="https://restcountries.com/v3.1";var S=a(529);let m=(()=>{class n{constructor(t){this.http=t,this.cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{region:void 0,countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStorage",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStorage")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStorage")))}getCountriesRequest(t){return this.http.get(t).pipe((0,v.K)(()=>(0,Z.of)([])))}searchCountryByAlphaCode(t){return this.http.get(`${g_apiUrl}/alpha/${t}`).pipe((0,A.U)(i=>i.length>0?i[0]:null),(0,v.K)(()=>(0,Z.of)(null)))}searchByCapital(t){return this.getCountriesRequest(`${g_apiUrl}/capital/${t}`).pipe((0,u.b)(r=>{this.cacheStore.byCapital={term:t,countries:r}}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${g_apiUrl}/name/${t}`).pipe((0,u.b)(r=>{this.cacheStore.byCountry={term:t,countries:r}}),(0,u.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${g_apiUrl}/region/${t}`).pipe((0,u.b)(r=>{this.cacheStore.byRegion={region:t,countries:r}}),(0,u.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=a(895);let q=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["share-loadingSpinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #000}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();var U=a(579),w=a(727);class B extends w.w0{constructor(o,t){super()}schedule(o,t=0){return this}}const y={setInterval(n,o,...t){const{delegate:i}=y;return i?.setInterval?i.setInterval(n,o,...t):setInterval(n,o,...t)},clearInterval(n){const{delegate:o}=y;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var O=a(737);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class d{constructor(o,t=d.now){this.schedulerActionCtor=o,this.now=t}schedule(o,t=0,i){return new this.schedulerActionCtor(this,o).schedule(i,t)}}d.now=b.now;const V=new class P extends d{constructor(o,t=d.now){super(o,t),this.actions=[],this._active=!1}flush(o){const{actions:t}=this;if(this._active)return void t.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=t.shift());if(this._active=!1,i){for(;o=t.shift();)o.unsubscribe();throw i}}}(class I extends B{constructor(o,t){super(o,t),this.scheduler=o,this.work=t,this.pending=!1}schedule(o,t=0){var i;if(this.closed)return this;this.state=o;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(s,this.id,t),this}requestAsyncId(o,t,i=0){return y.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&y.clearInterval(t)}execute(o,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,t){let r,i=!1;try{this.work(o)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,O.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(t,o,null)),this.delay=null,super.unsubscribe()}}});var J=a(482),R=a(403);const M=["txtSearchText"];let x=(()=>{class n{constructor(){this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.debouncer=new U.x}onChangeValue(){this.onValue.emit(this.txtSearch.nativeElement.value)}onKeyPress(t){this.debouncer.next(t)}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function F(n,o=V){return(0,J.e)((t,i)=>{let r=null,s=null,l=null;const _=()=>{if(r){r.unsubscribe(),r=null;const p=s;s=null,i.next(p)}};function ne(){const p=l+n,T=o.now();if(T<p)return r=this.schedule(void 0,p-T),void i.add(r);_()}t.subscribe((0,R.x)(i,p=>{s=p,l=o.now(),r||(r=o.schedule(ne,n),i.add(r))},()=>{_(),i.complete()},void 0,()=>{s=r=null}))})}(500)).subscribe(()=>{this.onChangeValue()})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],viewQuery:function(t,i){if(1&t&&e.Gf(M,5),2&t){let r;e.iGM(r=e.CRH())&&(i.txtSearch=r.first)}},inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue"},decls:2,vars:2,consts:[["title","Search","type","text",1,"form-control",3,"placeholder","value","keyup.enter","keyup"],["txtSearchText",""]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup.enter",function(){return i.onChangeValue()})("keyup",function(){e.CHM(r);const l=e.MAs(1);return e.KtG(i.onKeyPress(l.value))}),e.qZA()}2&t&&e.Q6J("placeholder",i.placeholder)("value",i.initialValue)}}),n})();function N(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1,"No hay paises que mostrar"),e.qZA())}const L=function(n){return["/countries/by",n]};function k(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"button",6)(16,"a",7),e._uU(17,"Info"),e.qZA()()()()),2&n){const t=o.$implicit,i=o.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.flag),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.Oqu(t.name.common),e.xp6(2),e.Oqu(t.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,t.population)),e.xp6(4),e.Q6J("routerLink",e.VKq(10,L,t.cca3))}}function Q(n,o){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Icono"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblacion"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,k,18,12,"tr",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.countries)}}let f=(()=>{class n{constructor(){this.countries=[]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["title","bandera",3,"src","alt"],[1,"btn","btn-outline-info"],[1,"nav-link",3,"routerLink"]],template:function(t,i){if(1&t&&(e.YNc(0,N,2,0,"div",0),e.YNc(1,Q,18,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",0==i.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:35px}"]}),n})();function E(n,o){1&n&&e._UZ(0,"share-loadingSpinner")}let Y=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}searchByCapital(t){this.isLoading=!0,this.countriesService.searchByCapital(t).subscribe(i=>{this.countries=i,this.isLoading=!1})}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:10,vars:4,consts:[[1,"row"],[1,"col"],[3,"placeholder","initialValue","onValue"],[1,"row","mt-2"],[4,"ngIf"],[3,"countries"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onValue",function(s){return i.searchByCapital(s)}),e.qZA()(),e.TgZ(6,"div",3)(7,"div",1),e.YNc(8,E,1,0,"share-loadingSpinner",4),e._UZ(9,"countries-table",5),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("placeholder","Buscar por capital")("initialValue",i.initialValue),e.xp6(3),e.Q6J("ngIf",i.isLoading),e.xp6(1),e.Q6J("countries",i.countries))},dependencies:[c.O5,q,x,f]}),n})(),$=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.initialValue=""}searchByCountry(t){this.countriesService.searchCountry(t).subscribe(i=>{this.countries=i})}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountry.countries,this.initialValue=this.countriesService.cacheStore.byCountry.term}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:9,vars:3,consts:[[1,"row"],[1,"col"],[3,"placeholder","initialValue","onValue"],[1,"row","mt-2"],[3,"countries"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onValue",function(s){return i.searchByCountry(s)}),e.qZA()(),e.TgZ(6,"div",3)(7,"div",1),e._UZ(8,"countries-table",4),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("placeholder","Buscar por capital")("initialValue",i.initialValue),e.xp6(3),e.Q6J("countries",i.countries))},dependencies:[x,f]}),n})();const K=function(n){return{"btn-outline-success":n}};function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.searchByRegion(s))}),e._uU(1),e.qZA()}if(2&n){const t=o.$implicit,i=e.oxw();e.Q6J("ngClass",e.VKq(2,K,t==i.selectedRegion)),e.xp6(1),e.hij(" ",t,"\n")}}let j=(()=>{class n{constructor(t){this._countriesService=t,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.initialValue=""}ngOnInit(){this.countries=this._countriesService.cacheStore.byRegion.countries,this.selectedRegion=this._countriesService.cacheStore.byRegion.region}searchByRegion(t){this.selectedRegion=t,this._countriesService.searchRegion(t).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:9,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"row","mt-2"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Regi\xf3n"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,X,2,4,"button",2),e.qZA(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"countries-table",5),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",i.regions),e.xp6(3),e.Q6J("countries",i.countries))},dependencies:[c.mk,c.sg,f]}),n})();var H=a(900);function z(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function G(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds:"),e.TgZ(5,"strong"),e._uU(6),e.qZA()(),e._UZ(7,"hr"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",5)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",6),e.qZA(),e.TgZ(13,"div",7)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),e._uU(19,"Poblaci\xf3n:"),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",9)(23,"strong"),e._uU(24,"C\xf3digo:"),e.qZA(),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",3)(27,"div",7)(28,"h3"),e._uU(29,"Traducciones"),e.qZA(),e.TgZ(30,"div",10)(31,"span",11),e._uU(32),e.qZA(),e.TgZ(33,"span",11),e._uU(34),e.qZA(),e.TgZ(35,"span",11),e._uU(36),e.qZA(),e.TgZ(37,"span",11),e._uU(38),e.qZA(),e.TgZ(39,"span",11),e._uU(40),e.qZA(),e.TgZ(41,"span",11),e._uU(42),e.qZA(),e.TgZ(43,"span",11),e._uU(44),e.qZA(),e.TgZ(45,"span",11),e._uU(46),e.qZA(),e.TgZ(47,"span",11),e._uU(48),e.qZA(),e.TgZ(49,"span",11),e._uU(50),e.qZA()()()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.country.name.common),e.xp6(6),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(21,15,t.country.population)," "),e.xp6(5),e.hij(" ",t.country.cca3," "),e.xp6(7),e.Oqu(t.country.translations.ara.common),e.xp6(2),e.Oqu(t.country.translations.bre.common),e.xp6(2),e.Oqu(t.country.translations.ces.common),e.xp6(2),e.Oqu(t.country.translations.cym.common),e.xp6(2),e.Oqu(t.country.translations.deu.common),e.xp6(2),e.Oqu(t.country.translations.est.common),e.xp6(2),e.Oqu(t.country.translations.fin.common),e.xp6(2),e.Oqu(t.country.translations.ita.common),e.xp6(2),e.Oqu(t.country.translations.kor.common),e.xp6(2),e.Oqu(t.country.translations.per.common)}}const D=[{path:"by-capital",component:Y},{path:"by-country",component:$},{path:"by-region",component:j},{path:"by/:id",component:(()=>{class n{constructor(t,i,r){this.route=t,this._countriesService=i,this.router=r}ngOnInit(){this.route.params.pipe((0,H.w)(({id:t})=>this._countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(m),e.Y36(h.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,i){if(1&t&&(e.YNc(0,z,2,0,"ng-template",null,0,e.W1O),e.YNc(2,G,51,17,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",i.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ]}),n})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(D),h.Bz]}),n})();var ee=a(466);let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,W,ee.m]}),n})()}}]);