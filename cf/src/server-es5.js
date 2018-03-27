module.exports=function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-grid-system")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("reactstrap")},function(e,t){e.exports=require("react-image")},function(e,t){e.exports=require("react-scroll")},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=n(7),a=l(r),o=n(8),i=n(9),u=l(i),s=n(0),c=l(s),d=n(10),f=n(2),m=n(11),p=new u.default,g=new o.Server(p);p.set("view engine","ejs"),p.set("views",a.default.join(__dirname,"views")),p.use(u.default.static(a.default.join(__dirname,"static"))),p.get("*",function(e,t){var n="",l=200;if(process.env.UNIVERSAL){var r={};if(n=(0,d.renderToString)(c.default.createElement(f.StaticRouter,{location:e.url,context:r},c.default.createElement(m.App,null))),r.url)return t.redirect(302,r.url);r.is404&&(l=404)}return t.status(l).render("index",{markup:n})});var v=process.env.PORT||3e3;g.listen(v,function(e){return e?console.error(e):console.info("\n      Server running on http://localhost:"+v+" [production]\n      Universal rendering: "+(process.env.UNIVERSAL?"enabled":"disabled")+"\n    ")})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=n(0),a=l(r),o=n(2),i=n(12),u=n(13),s=l(u),c=n(14),d=l(c),f=n(15),m=l(f),p=n(16),g=l(p),v=n(21),h=l(v),E=n(22),y=l(E),x=t.App=function(){return a.default.createElement(i.Layout,null,a.default.createElement(s.default,null),a.default.createElement(o.Switch,null,a.default.createElement(o.Route,{exact:!0,path:"/",component:d.default}),a.default.createElement(o.Route,{exact:!0,path:"/salles",component:d.default}),a.default.createElement(o.Route,{exact:!0,path:"/valeurs",component:m.default}),a.default.createElement(o.Route,{exact:!0,path:"/avis",component:d.default}),a.default.createElement(o.Route,{exact:!0,path:"/media",component:g.default}),a.default.createElement(o.Route,{exact:!0,path:"/contacts",component:h.default}),a.default.createElement(o.Route,{path:"*",component:y.default})))};t.default=x},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var l=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(l),a=t.Layout=function(e){return r.default.createElement("div",{className:"app-container"},r.default.createElement("div",{className:"app-content"},e.children))};t.default=a},function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c={backgroundColor:"rgba(0, 0, 0, 0.5)",position:"fixed",minWidth:"100%",zIndex:"4",padding:"0 .5rem 0 .5rem"},d={color:"#F7F9F9",display:"table-cell",verticalAlign:"middle"},f={color:"#F7F9F9",textAlign:"center"},m={color:"#3A3333",textAlign:"center"},p=function(e){function t(){l(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toggle=e.toggle.bind(e),e.updateDimensions=e.updateDimensions.bind(e),e.state={isOpen:!1,isHovered1:!1,isHovered2:!1,isHovered3:!1,isHovered4:!1,isHovered5:!1,isHovered6:!1},e}return a(t,e),o(t,[{key:"updateDimensions",value:function(){window.matchMedia("(max-width: 768px)").matches?this.setState({alignTextNav:{textAlign:"center",minHeight:"55px",display:"grid",verticalAlign:"middle"},colorTextNavHover:{backgroundColor:"#F7F9F9",verticalAlign:"middle"}}):window.matchMedia("(min-width: 769px)").matches&&this.setState({alignTextNav:{textAlign:"center",minHeight:"55px",display:"table",verticalAlign:"middle"},colorTextNavHover:{backgroundColor:"#F7F9F9",verticalAlign:"middle",display:"table-cell"}})}},{key:"componentDidMount",value:function(){window.matchMedia("(max-width: 768px)").matches?this.setState({alignTextNav:{textAlign:"center",minHeight:"55px",display:"grid",verticalAlign:"middle"},colorTextNavHover:{backgroundColor:"#F7F9F9",verticalAlign:"middle"}}):window.matchMedia("(min-width: 769px)").matches&&this.setState({alignTextNav:{textAlign:"center",minHeight:"55px",display:"table",verticalAlign:"middle"},colorTextNavHover:{backgroundColor:"#F7F9F9",verticalAlign:"middle",display:"table-cell"}}),window.addEventListener("resize",this.updateDimensions)}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"setButtonHovered",value:function(e,t){"1"===e?this.setState({isHovered1:t}):"2"===e?this.setState({isHovered2:t}):"3"===e?this.setState({isHovered3:t}):"4"===e?this.setState({isHovered4:t}):"5"===e?this.setState({isHovered5:t}):"6"===e&&this.setState({isHovered6:t})}},{key:"setColorHovered",value:function(e,t){"1"===e?this.setState({isHovered1:t}):"2"===e?this.setState({isHovered2:t}):"3"===e?this.setState({isHovered3:t}):"4"===e?this.setState({isHovered4:t}):"5"===e?this.setState({isHovered5:t}):"6"===e&&this.setState({isHovered6:t})}},{key:"render",value:function(){var e=this;return u.default.createElement("div",null,u.default.createElement(s.Navbar,{color:"faded",light:!0,expand:"md",style:c},u.default.createElement(s.NavbarBrand,{href:"/",width:"190px",style:d},"Centrale Fitness ",u.default.createElement("img",{src:"../img/logo_cf_header.png",height:"45px"})),u.default.createElement(s.NavbarToggler,{onClick:this.toggle,style:{color:"white!important"}}),u.default.createElement(s.Collapse,{isOpen:this.state.isOpen,navbar:!0},u.default.createElement(s.Nav,{className:"ml-auto",navbar:!0,style:this.state.alignTextNav},u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("1",!0)},onMouseLeave:function(){return e.setButtonHovered("1",!1)},style:this.state.isHovered1?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/",onMouseEnter:function(){return e.setColorHovered("1",!0)},onMouseLeave:function(){return e.setColorHovered("1",!1)},style:this.state.isHovered1?m:f},"Présentation de la solution")),u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("2",!0)},onMouseLeave:function(){return e.setButtonHovered("2",!1)},style:this.state.isHovered2?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/salles",onMouseEnter:function(){return e.setColorHovered("2",!0)},onMouseLeave:function(){return e.setColorHovered("2",!1)},style:this.state.isHovered2?m:f},"Nos salles")),u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("3",!0)},onMouseLeave:function(){return e.setButtonHovered("3",!1)},style:this.state.isHovered3?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/valeurs",onMouseEnter:function(){return e.setColorHovered("3",!0)},onMouseLeave:function(){return e.setColorHovered("3",!1)},style:this.state.isHovered3?m:f},"L'équipe")),u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("4",!0)},onMouseLeave:function(){return e.setButtonHovered("4",!1)},style:this.state.isHovered4?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/avis",onMouseEnter:function(){return e.setColorHovered("4",!0)},onMouseLeave:function(){return e.setColorHovered("4",!1)},style:this.state.isHovered4?m:f},"Avis des utilisateurs")),u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("5",!0)},onMouseLeave:function(){return e.setButtonHovered("5",!1)},style:this.state.isHovered5?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/media",onMouseEnter:function(){return e.setColorHovered("5",!0)},onMouseLeave:function(){return e.setColorHovered("5",!1)},style:this.state.isHovered5?m:f},"Photos/Vidéos")),u.default.createElement(s.NavItem,{onMouseEnter:function(){return e.setButtonHovered("6",!0)},onMouseLeave:function(){return e.setButtonHovered("6",!1)},style:this.state.isHovered6?this.state.colorTextNavHover:d},u.default.createElement(s.NavLink,{href:"/contacts",onMouseEnter:function(){return e.setColorHovered("6",!0)},onMouseLeave:function(){return e.setColorHovered("6",!1)},style:this.state.isHovered6?m:f},"Contacts"))))))}}]),t}(i.PureComponent);t.default=p},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(0),s=l(u),c=n(4),d=l(c),f=n(1),m=n(5),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setLinkHovered=n.setLinkHovered.bind(n),n.state={isHovered1:!1,isHovered2:!1,isHovered3:!1,isHovered4:!1},n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){m.Events.scrollEvent.register("begin",function(e,t){}),m.Events.scrollEvent.register("end",function(e,t){}),m.scrollSpy.update()}},{key:"setLinkHovered",value:function(e){"1"===e?this.setState({isHovered1:!this.state.isHovered1}):"2"===e?this.setState({isHovered2:!this.state.isHovered2}):"3"===e?this.setState({isHovered3:!this.state.isHovered3}):"4"===e&&this.setState({isHovered4:!this.state.isHovered4})}},{key:"componentWillUnmount",value:function(){m.Events.scrollEvent.remove("begin"),m.Events.scrollEvent.remove("end")}},{key:"scrollToTop",value:function(){m.animateScroll.scrollToTop()}},{key:"scrollToBottom",value:function(){m.animateScroll.scrollToBottom()}},{key:"scrollTo",value:function(){m.animateScroll.scrollTo(100)}},{key:"scrollMore",value:function(){m.animateScroll.scrollMore(100)}},{key:"handleSetActive",value:function(e){console.log("ready to add css")}},{key:"render",value:function(){var e=this,t={color:"#F7F9F9",display:"table-cell",padding:"0",textAlign:"center",verticalAlign:"middle",cursor:"default",marginTop:"50px"},n={display:"flex",justifyContent:"center",alignItems:"center"},l={minWidth:"230px",maxHeight:"620px"},r={textAlign:"center",fontSize:"3em",marginBottom:"30px",letterSpacing:"-0.02em !important"},a={marginBottom:"60px",letterSpacing:"-0.02em !important",fontSize:"40px"},o={fontSize:"1.2em",marginBottom:"30px",letterSpacing:"-0.02em !important"},i={fontSize:"1.2em",letterSpacing:"-0.02em !important"},u={borderRadius:"50%",height:"12px",width:"12px",backgroundColor:"rgba(255, 255, 255, 0.5)",border:"none",verticalAlign:"middle",display:"inline-block",outline:"none",cursor:"pointer"},c={backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50%",height:"12px",width:"12px",border:"none",verticalAlign:"middle",display:"inline-block",outline:"none",cursor:"pointer"};return s.default.createElement(f.Container,{fluid:!0,style:t},s.default.createElement(f.Row,{style:{paddingTop:"60px"}},s.default.createElement(f.Col,{className:"rowFirstImg",style:{padding:"0"}},"Centrale Fitness une solution innovante... (A completer)")),s.default.createElement(m.Link,{style:{position:"fixed",zIndex:"3",bottom:"30px"},className:"test6",to:"anchor3",isDynamic:!0,spy:!0,smooth:!0,duration:500},s.default.createElement(d.default,{src:"../img/down-arrow.png",height:"20px"})),s.default.createElement("nav",{style:{position:"fixed",zIndex:"3",right:"30px",top:"calc(50% - 51.5px)"}},s.default.createElement("ul",{style:{listStyleType:"none"}},s.default.createElement("li",null,s.default.createElement(m.Link,{style:{top:"15px"},className:"test6",to:"anchor1",activeClass:"active",isDynamic:!0,spy:!0,smooth:!0,duration:500},s.default.createElement("input",{onMouseEnter:function(){return e.setLinkHovered("1")},onMouseLeave:function(){return e.setLinkHovered("1")},style:this.state.isHovered1?c:u,type:"button"}))),s.default.createElement("li",null,s.default.createElement(m.Link,{style:{top:"15px"},className:"test6",to:"anchor2",activeClass:"active",isDynamic:!0,spy:!0,smooth:!0,duration:500},s.default.createElement("input",{onMouseEnter:function(){return e.setLinkHovered("2")},onMouseLeave:function(){return e.setLinkHovered("2")},style:this.state.isHovered2?c:u,type:"button"}))),s.default.createElement("li",null,s.default.createElement(m.Link,{style:{top:"15px"},className:"test6",to:"anchor3",activeClass:"active",isDynamic:!0,spy:!0,smooth:!0,duration:500},s.default.createElement("input",{onMouseEnter:function(){return e.setLinkHovered("3")},onMouseLeave:function(){return e.setLinkHovered("3")},style:this.state.isHovered3?c:u,type:"button"}))),s.default.createElement("li",null,s.default.createElement(m.Link,{style:{top:"15px"},className:"test6",to:"anchor4",activeClass:"active",isDynamic:!0,spy:!0,smooth:!0,duration:500},s.default.createElement("input",{onMouseEnter:function(){return e.setLinkHovered("4")},onMouseLeave:function(){return e.setLinkHovered("4")},style:this.state.isHovered4?c:u,type:"button"}))))),s.default.createElement(f.Row,{id:"anchor1",style:{marginTop:"10px"}}),s.default.createElement(f.Row,{style:{marginTop:"50px"}},s.default.createElement(f.Col,{style:n,xl:8,lg:8,md:8,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0}},s.default.createElement(f.Col,null,s.default.createElement("h1",{style:r},"Centrale Fitness"),s.default.createElement("h2",{style:a},"Le sport ludique qui met en avant l'écologie et la fidélisation"),s.default.createElement("h3",{style:o},"Centrale fitness est une solution destinée aux salles de sport. Cette écosystème permet de récupérer l’énergie produite par les sportifs, sous forme d’électricité afin d'avantager les clients ainsi que les gérants des salles de sport."),s.default.createElement("h3",{style:i},"Notre objectif à long terme est de réduire la consommation des salles de sport qui sont des infrastructures particulièrement consommatrices en énergie."))),s.default.createElement(f.Col,{style:Object.assign(n,{textAlign:"Center"}),xl:4,lg:4,md:4,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0}},s.default.createElement(f.Col,null,s.default.createElement(d.default,{style:l,className:"img-fluid img-responsive",alt:"Responsive image",src:"../img/iphone_1.png"})))),s.default.createElement(f.Row,{id:"anchor2",style:{paddingTop:"80px"}},s.default.createElement(f.Col,{xl:8,lg:8,md:8,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0},push:{xl:4,lg:4,md:4},style:n},s.default.createElement(f.Col,null,s.default.createElement("h2",{style:a},"Le module de récupération d'énergie."),s.default.createElement("h3",{style:o},"Ce module permettra à son utilisateur de convertir l'énergie mécanique en électricité viable et utilisable directement."),s.default.createElement("h3",{style:i},"A terme l'électricité produite sera directement réinjectée dans la salle de sport afin de baisser le coût globale de l'électricité consommée par la salle."),s.default.createElement("h3",{style:i},"Cette productivité pourra être consulter par l'utilisateur directement et en temps réel sur son application smartphone."))),s.default.createElement(f.Col,{style:Object.assign(n,{textAlign:"Center"}),xl:4,lg:4,md:4,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0},pull:{xl:8,lg:8,md:8}},s.default.createElement(f.Col,null,s.default.createElement(d.default,{style:l,className:"img-fluid img-responsive",alt:"Responsive image",src:"../img/module.png"})))),s.default.createElement(f.Row,{id:"anchor3",style:{paddingTop:"80px"}},s.default.createElement(f.Col,{style:n,xl:8,lg:8,md:8,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0}},s.default.createElement(f.Col,null,s.default.createElement("h2",{style:a},"L'écologie : un pilier de l'écosystème Centrale Fitness"),s.default.createElement("h3",{style:o},"Depuis les préquelles de sa création, les fondateurs de Centrale Fitness voulaient répondre aux problématiques actuelles et futurs de l'environnement."),s.default.createElement("h3",{style:i},"Produire une énergie renouvelable et réutilisable directement en salle de sport permet de répondre en partie à ce problème."),s.default.createElement("h3",{style:i},"Cette acte sportif en faveur de l'environnement permet aussi de sensibiliser les populations à ce que représente en terme d'énergie l'éclairage par le biais d'une ampoule ou bien un écran de télévision allumée."))),s.default.createElement(f.Col,{style:Object.assign(n,{textAlign:"Center"}),xl:4,lg:4,md:4,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0}},s.default.createElement(f.Col,null,s.default.createElement(d.default,{style:l,className:"img-fluid img-responsive",alt:"Responsive image",src:"../img/green.png"})))),s.default.createElement(f.Row,{id:"anchor4",style:{paddingTop:"80px"}},s.default.createElement(f.Col,{style:n,xl:8,lg:8,md:8,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0},push:{xl:4,lg:4,md:4}},s.default.createElement(f.Col,null,s.default.createElement("h2",{style:a},"Pédalez plus pour économisez plus"),s.default.createElement("h3",{style:o},"Outre le fais que Centrale Fitness vous propose un rabais proportionnel sur votre abonnement en salle, cette écosystème vous propose aussi une autre forme d'avantage."),s.default.createElement("h3",{style:i},"Les partenaires sportifs de Centrales Fitness vous propose un ensemble de promotions et de réductions sur un ensemble de produits sportifs. "),s.default.createElement("h3",{style:i},"Les rabais économiques auprès de nos partenaires ainsi que la ludification du sport grâce à un fondement écologique vous rendront accro à cette nouvelle façon de pratiquer le sport."))),s.default.createElement(f.Col,{style:Object.assign(n,{textAlign:"Center"}),name:"test1",xl:4,lg:4,md:4,sm:10,xs:10,offset:{sm:1,xs:1,md:0,xl:0,lg:0},pull:{xl:8,lg:8,md:8}},s.default.createElement(f.Col,null,s.default.createElement(d.default,{style:l,className:"img-fluid img-responsive",alt:"Responsive image",src:"../img/piggybank.png"})))),s.default.createElement(f.Row,{id:"anchor4",style:{paddingTop:"20px"}},s.default.createElement(f.Col,{style:n},s.default.createElement(f.Col,null,s.default.createElement("h1",{style:r},"pédalons pour l'écosystème économique et écologique mis à profit pour les sportifs.")))))}}]),t}(u.PureComponent);t.default=p},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(0),s=l(u),c=n(1),d=n(3),f=(n(5),n(4)),m=l(f),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e={fontSize:"3em",color:"white",marginBottom:"30px",letterSpacing:"-0.02em !important"},t={color:"white",letterSpacing:"-0.02em !important",marginBottom:"50px"};return s.default.createElement(c.Container,null,s.default.createElement(c.Row,{style:{paddingTop:"100px"}},s.default.createElement(c.Col,null,s.default.createElement("h1",{style:e},"L'équipe Centrale Fitness"))),s.default.createElement(c.Row,null,s.default.createElement(c.Col,null,s.default.createElement("h4",{style:t},"Sur cet espace vous pouvez visualiser les différents étudiants que regroupe cette idée. Cette équipe a fait le pari fou de rendre le sport à la fois ludique et écologique afin de promouvoir les énergies renouvelables au service du sport."))),s.default.createElement(c.Row,{style:{paddingTop:"30px",color:"white"}},s.default.createElement(c.Col,{xl:4,lg:4,md:4,sm:12,xs:12,offset:{sm:0,xs:0,md:0,xl:0,lg:0}},s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right bottom, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Nils Peritore")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Développeur du site vitrine"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/photo3.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"Pleins d'idées et enthousiaste, il développe le site vitrine afin de promouvoir leur projet ambitieux et innovant à un large public.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,'"Choisissez un travail que vous aimez et vous n\'aurez pas à travailler un seul jour de votre vie."')," - Confucius"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))),s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right top, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Christelle Baumier")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"En charge du système embarqué"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/christelle.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"Consciencieuse, elle fait attention aux moindres détails qui semblent anodins mais essentiels pour la cohérence d'un projet. Elle peut gérer toutes les situations en restant toujours zen.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,'"L\'expérience nous enseigne à être prudent, le jugement seul nous apprend à être sage."')," - H. de Charency"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))),s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to left bottom, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Léo Poulin")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Dev Back End Python & Architecture Embarquée"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/leo.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"En charge de la coordination des systèmes embarqués et de l'architecture logicielle, Léo permet de créer une solution performante et respectueuse de l'environnement.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,'"La seule chose meilleure qu\'une pizza est une pizza gratuite"')," - léo"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus"))))),s.default.createElement(c.Col,{xl:4,lg:4,md:4,sm:12,xs:12,offset:{sm:0,xs:0,md:0,xl:0,lg:0}},s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right bottom, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Hadrien Daures")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Architecte et ingénieur serveur"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/hadrien.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"Avec des années d'expériences dans la conception et la mise en place de serveurs, Hadrien traite les requêtes des clients issus des applications smartphones, mais il gère aussi l'appairage et l'envoie de données du module au serveur.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,"\"La communication est une science difficile. Ce n'est pas une science exacte. Ca s'apprend et ça se cultive.\"")," - Jean-Luc Lagardère"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))),s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right top, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Rémy Villulles")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Développeur Android"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/remy.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"Leader du groupe depuis le début, il travail sur l'application android.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,'"La meilleure condition de travail, c\'est les vacances."')," - Jean-Marie Gourio"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))),s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to left bottom, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Fabien Santoni")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Développeur IOS"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/fabien.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"En charge du développement de l'application IOS, Fabien conforte aussi l'équipe sur le développement et les choix du design.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,"\"La chose la plus importante en communication, c'est d'entendre ce qui n'est pas dit.\"")," - Peter Drucker"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus"))))),s.default.createElement(c.Col,{xl:4,lg:4,md:4,sm:12,xs:12,offset:{sm:0,xs:0,md:0,xl:0,lg:0}},s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right bottom, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Julien Longayrou")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Développeur de l'intranet-gérant"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/julien.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"En charge de la plateforme pour les gérants de salles, Julien réfléchis et optimise une plateforme parfaitement conçus pour un administrateur de salle de sport.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,"\"C'est dans l'effort que l'on trouve la satisfaction et non dans la réussite. Un plein effort est une pleine victoire.\"")," - Gandhi"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))),s.default.createElement(c.Col,{style:{marginBottom:"40px"}},s.default.createElement(d.Card,{style:{background:"linear-gradient(to right top, #EACB87, #E95C57)",border:"none"}},s.default.createElement(d.CardBody,null,s.default.createElement(d.CardTitle,null,s.default.createElement("h3",{style:{marginBottom:"30px"}},"Alexandre Rocat")),s.default.createElement(d.CardSubtitle,null,s.default.createElement("h4",null,"Développeur de l'intranet-gérant"))),s.default.createElement(m.default,{width:"100%",src:"../img/team/rocat.jpg",alt:"Card image cap"}),s.default.createElement(d.CardBody,null,s.default.createElement(d.CardText,null,s.default.createElement("h5",null,"En charge du développement front de l'intranet gérant et de la partie business intelligence.")),s.default.createElement(d.CardText,null,"Proverbe favoris :"),s.default.createElement(d.CardText,null,s.default.createElement("i",null,'"Développer c\'est passer du temps à en gagner."')," - Rocat"),s.default.createElement(d.CardLink,{href:"#"},"Voir plus")))))))}}]),t}(u.PureComponent);t.default=p},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(0),s=l(u),c=n(17),d=l(c),f=n(18),m=l(f),p=n(19),g=l(p),v=n(20),h=n(1),E=[{src:"../img/caroussel/1.jpg",width:5,height:3},{src:"../img/caroussel/2.jpg",width:5,height:3},{src:"../img/caroussel/7.JPG",width:2,height:3},{src:"../img/caroussel/3.jpg",width:5,height:3},{src:"../img/caroussel/4.jpg",width:5,height:3},{src:"../img/caroussel/5.jpg",width:5,height:3},{src:"../img/caroussel/6.jpg",width:5,height:3},{src:"../img/caroussel/8.jpg",width:5,height:3},{src:"../img/caroussel/9.jpg",width:4,height:5}],y={marginBottom:"30px",marginLeft:"10px",letterSpacing:"-0.02em !important",color:"white"},x={marginTop:"50px",marginBottom:"30px",marginLeft:"10px",letterSpacing:"-0.02em !important",color:"white"},b=function(e){function t(e,n){r(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return l.state={width:-1,currentImage:0,isToggleOn:!0},l.closeLightbox=l.closeLightbox.bind(l),l.openLightbox=l.openLightbox.bind(l),l.gotoNext=l.gotoNext.bind(l),l.gotoPrevious=l.gotoPrevious.bind(l),l.handleClick=l.handleClick.bind(l),l}return o(t,e),i(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"handleClick",value:function(){console.log("This is a test"),this.setState({isToggleOn:!1})}},{key:"render",value:function(){var e=this,t=this.state.width;return s.default.createElement("div",null,s.default.createElement(m.default,{bounds:!0,onResize:function(t){return e.setState({width:t.bounds.width})}},function(n){var l=n.measureRef;if(t<1)return s.default.createElement("div",{ref:l});var r=1;return t>=480&&(r=2),t>=1024&&(r=3),t>=1824&&(r=4),s.default.createElement("div",{style:{paddingTop:"80px"}},s.default.createElement("h1",{style:y},"Photos"),s.default.createElement(h.Container,null,s.default.createElement(h.Row,null,s.default.createElement(h.Col,{widths:{lg:12,xl:12},offset:{sm:0,xs:0,md:0,xl:0,lg:0}},s.default.createElement(d.default,{photos:E,columns:r,onClick:e.openLightbox})))),s.default.createElement(g.default,{images:E,onClose:e.closeLightbox,onClickPrev:e.gotoPrevious,onClickNext:e.gotoNext,currentImage:e.state.currentImage,isOpen:e.state.lightboxIsOpen}))}),s.default.createElement("h1",{style:x},"Vidéo"),s.default.createElement(h.Container,{style:{marginBottom:"100px"}},s.default.createElement(h.Row,null,s.default.createElement(h.Col,null,s.default.createElement(v.DefaultPlayer,{controls:["PlayPause","Seek","Time","Volume","Fullscreen"],poster:"/img/posterVideo.jpg"},s.default.createElement("source",{src:"/video/firstVideo.mp4",type:"video/mp4"}))))))}}]),t}(u.PureComponent);t.default=b},function(e,t){e.exports=require("react-photo-gallery")},function(e,t){e.exports=require("react-measure")},function(e,t){e.exports=require("react-images")},function(e,t){e.exports=require("react-html5video")},function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(0),c=l(s),d=n(1),f=n(3),m=n(4),p=l(m),g=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e={color:"white",letterSpacing:"-0.02em !important",marginTop:"30px"};return c.default.createElement(f.Jumbotron,{style:{paddingTop:"100px",color:"white",background:"none"}},c.default.createElement("h1",{style:{textAlign:"center"},className:"display-3"},"La Centrale Fitness reste à votre écoute !"),c.default.createElement("h4",r({style:e},"style",{textAlign:"center"}),"Afin de vous fournir les meilleurs réponses à vos questions la Centrale Fitness met à votre disposition plusieurs services."),c.default.createElement("hr",{className:"my-2"}),c.default.createElement(d.Container,null,c.default.createElement(d.Row,{style:{paddingTop:"50px",textAlign:"center"}},c.default.createElement(d.Col,{xl:6,lg:6,md:6,sm:12,xs:12,offset:{sm:0,xs:0,md:0,xl:0,lg:0}},c.default.createElement(d.Col,null,c.default.createElement(p.default,{width:"35%",src:"../img/contacts/004-envelope.png"})),c.default.createElement(d.Col,null,c.default.createElement("h5",{style:{marginTop:"15px"}},"Par mail:"),c.default.createElement("h5",{style:{marginBottom:"100px"}},"centrale@fitness.com"))),c.default.createElement(d.Col,{style:{textAlign:"center"},xl:6,lg:6,md:6,sm:12,xs:12,offset:{sm:0,xs:0,md:0,xl:0,lg:0}},c.default.createElement(d.Col,null,c.default.createElement(p.default,{width:"35%",src:"../img/contacts/001-phone-number.png"})),c.default.createElement(d.Col,null,c.default.createElement("h5",{style:{marginTop:"15px"}},"Par téléphone:"),c.default.createElement("h5",null,"+000-000-000"))))))}}]),t}(s.PureComponent);t.default=g},function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(2),c=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"404"),u.default.createElement("p",null,"Page not found. Go to ",u.default.createElement(s.Link,{to:"/"},"Main Page")))}}]),t}(i.Component);t.default=c}]);