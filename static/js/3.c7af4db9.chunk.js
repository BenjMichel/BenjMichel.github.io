webpackJsonp([3],{24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var i=o(["\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  width: 100%;\n  align-items: baseline;\n  justify-content: space-around;\n  margin: 20px 0 30px 0;\n  padding: 0 80px;\n  @media (max-width: ",") {\n    padding: 0px;\n    margin: 0px;\n  }\n"],["\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  width: 100%;\n  align-items: baseline;\n  justify-content: space-around;\n  margin: 20px 0 30px 0;\n  padding: 0 80px;\n  @media (max-width: ",") {\n    padding: 0px;\n    margin: 0px;\n  }\n"]),l=o(["\n  flex: 1;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  text-align center;\n  width: 33%;\n  opacity: ",";\n  ",";\n"],["\n  flex: 1;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  text-align center;\n  width: 33%;\n  opacity: ",";\n  ",";\n"]),a=o(["\n  display: inline-block;\n  text-align: center;\n  font-size: 13px;\n  background: white;\n  border: 1px solid #333;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin-bottom: 4px;\n  width: auto;\n"],["\n  display: inline-block;\n  text-align: center;\n  font-size: 13px;\n  background: white;\n  border: 1px solid #333;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin-bottom: 4px;\n  width: auto;\n"]),s=o(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n"],["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n"]),u=n(2),d=r(u),c=n(7),p=r(c),f=n(4),h=p.default.div(i,f.mobileThresholdPixels),m=p.default.div(l,function(e){return e.isActive?"1":"0.5"},function(e){return e.isActive?"transform: scale(1.1)":""}),g=p.default.span(a),y=p.default.div(s),b=[{id:1,name:"Vêtements"},{id:2,name:"Retouches"},{id:3,name:"RDV"},{id:4,name:"Coordonnées"}],x=function(e){var t=e.step;return d.default.createElement(h,null,b.map(function(e){return d.default.createElement(m,{key:e.id,isActive:t===e.id},d.default.createElement(g,null,e.id),d.default.createElement(y,null,e.name))}))};x.propTypes={step:u.PropTypes.number.isRequired},t.default=x},57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={mant:"jacket-3",jupe:"skirt",chem:"shirt-1",pant:"jeans",robe:"dress",div:""};t.default=n},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t,n){var r=n.alterations&&n.alterations[e.id];return s.default.createElement(c.Choice,{isSelected:r,onClick:function(){return t(e.id)},key:e.id},e.name,s.default.createElement(c.Price,null,e.price,"€"))}Object.defineProperty(t,"__esModule",{value:!0});var l=o(["\n  padding: 0 20px;\n  @media (max-width: ",") {\n    margin: 5px 10px;\n    padding: 0px;\n  }\n"],["\n  padding: 0 20px;\n  @media (max-width: ",") {\n    margin: 5px 10px;\n    padding: 0px;\n  }\n"]),a=n(2),s=r(a),u=n(7),d=r(u),c=n(4),p=d.default.h4(l,c.mobileThresholdPixels),f=function(e){var t=e.cloth,n=e.openedCategory,r=e.openCategory,o=e.close,l=e.toggleAlteration,a=e.orderItem;return s.default.createElement(c.Categories,null,t.categories.map(function(e){return s.default.createElement("div",{key:e.name},s.default.createElement(c.Category,{onClick:function(){return r(e.name)}},s.default.createElement(c.Header3,null,s.default.createElement(p,null,n===e.name?s.default.createElement("img",{src:"https://icon.now.sh/chevron/up/12",alt:"chevron icon"}):s.default.createElement("img",{src:"https://icon.now.sh/chevron/down/12",alt:"chevron icon"})," "+e.name))),n===e.name&&e.items.map(function(e){return i(e,l,a)}))}),s.default.createElement(c.Center,null,s.default.createElement(c.Button,{onClick:o},"Valider ce vêtement")))};f.propTypes={cloth:a.PropTypes.shape({}).isRequired,openCategory:a.PropTypes.func.isRequired,openedCategory:a.PropTypes.string,close:a.PropTypes.func.isRequired,toggleAlteration:a.PropTypes.func.isRequired,orderItem:a.PropTypes.shape({}).isRequired},t.default=f},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),l=n(4),a=n(61),s=r(a),u=n(57),d=r(u),c=function(e){var t=e.orderItem,n=e.itemNumber,r=e.toggleChoices,o=e.deleteCloth,a=d.default[t.slug],u=t.slug,c=s.default.find(function(e){return e.slug===u}),p=Object.keys(t.alterations||{}).length;return i.default.createElement("div",{style:{position:"relative"}},i.default.createElement(l.Cloth,{onClick:function(){return r(c)}},i.default.createElement(l.Icon,{className:"flaticon-"+a}),i.default.createElement(l.ClothText,null,c.cloth," n°",n),i.default.createElement(l.Bubble,null,p)),"function"==typeof o&&i.default.createElement(l.Delete,{onClick:o},"-"))};c.propTypes={itemNumber:o.PropTypes.number.isRequired,orderItem:o.PropTypes.shape({}).isRequired,toggleChoices:o.PropTypes.func.isRequired,deleteCloth:o.PropTypes.func},c.defaultProps={deleteCloth:function(){}},t.default=c},315:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var i=o(["\n  padding: 20px 20px 0px;\n  background-color: white;\n  min-width: 300px;\n"],["\n  padding: 20px 20px 0px;\n  background-color: white;\n  min-width: 300px;\n"]),l=o(["\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  min-height: 100vh;\n  z-index: 1;\n  background-color: rgba(0,0,0,0.35);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  min-height: 100vh;\n  z-index: 1;\n  background-color: rgba(0,0,0,0.35);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),a=n(2),s=r(a),u=n(7),d=r(u),c=d.default.div(i),p=d.default.div(l),f=function(e){var t=e.show,n=e.children;return t?s.default.createElement(p,null,s.default.createElement(c,null,n)):null};f.propTypes={show:a.PropTypes.bool,children:a.PropTypes.node.isRequired},f.defaultProps={show:!1},t.default=f},318:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var i=o(["\n  font-size: 12px;\n  color: ",";\n  text-align: justify;\n"],["\n  font-size: 12px;\n  color: ",";\n  text-align: justify;\n"]),l=n(2),a=r(l),s=n(16),u=n(7),d=r(u),c=n(303),p=r(c),f=n(297),h=r(f),m=n(4),g=n(315),y=r(g),b=n(24),x=r(b),C=n(37),v=r(C),E=d.default.p(i,m.colors.navy),w=function(e){var t=e.orderItems,n=e.toggleAlteration,r=e.total,o=e.showChoicesCloth,i=e.openedCategory,l=e.openCategory,u=e.setChoicesCloth,d=e.close,c=e.showChoicesItemIndex,f=e.isButtonValid,g=e.goNext,b=e.hasError,C=e.deleteCloth;return a.default.createElement(m.Wrapper,null,a.default.createElement(y.default,{show:o},a.default.createElement(h.default,{cloth:o,openedCategory:i,openCategory:l,close:d,orderItem:t[c],toggleAlteration:function(e){return n(c,e)}})),a.default.createElement(m.Block,{id:"alterations"},a.default.createElement(m.Header2,null,a.default.createElement(m.Logo,{src:v.default}),a.default.createElement(x.default,{step:2}),a.default.createElement(m.Title2,null,"Je choisis les retouches pour chacun de mes vêtements")),a.default.createElement(m.ClothesList,null,t.map(function(e,n){var r=t.filter(function(t,r){return t.slug===e.slug&&n>=r}).length;return a.default.createElement(p.default,{itemNumber:r,orderItem:e,toggleChoices:function(e){return u(e,n)},deleteCloth:function(){return C(n)},key:e.slug+"-"+r})}),a.default.createElement(m.Cloth,{onClick:function(){return s.browserHistory.push("/order/step1")}},a.default.createElement(m.ClothText,null,"Ajouter un"),a.default.createElement(m.ClothText,null,"vêtement"),a.default.createElement(m.Add,null,"+"))),a.default.createElement(m.Total,null,"Total : ",r.toFixed(2),"€"),b&&a.default.createElement(m.ErrorText,null,"Merci de sélectionner des retouches pour tous les vêtements"),a.default.createElement(m.Center,null,a.default.createElement(m.Button3,{isNotValid:!f,onClick:g},"> Valider <")),a.default.createElement(E,null,"Le couturier possède les basiques (bobines, zips, élastiques, boutons, doublures) dans les couleurs principales (noir, blanc, bleu marine, rouge, marron, beige, vert). Si vous souhaitez une couleur ou un tissu partculier ou que votre retouche nécessite un tissu non présent dans les basiques, pensez à l'acheter avant le premier RDV avec votre couturier. En cas de doute, vous pouvez contacter: ",a.default.createElement("u",null,"contact@tilli.fr"))))};w.propTypes={orderItems:l.PropTypes.arrayOf(l.PropTypes.shape()).isRequired,toggleAlteration:l.PropTypes.func.isRequired,total:l.PropTypes.number.isRequired,showChoicesCloth:l.PropTypes.shape({}),showChoicesItemIndex:l.PropTypes.number,openCategory:l.PropTypes.func.isRequired,openedCategory:l.PropTypes.string,setChoicesCloth:l.PropTypes.func.isRequired,close:l.PropTypes.func.isRequired,deleteCloth:l.PropTypes.func.isRequired,goNext:l.PropTypes.func.isRequired,isButtonValid:l.PropTypes.bool.isRequired,hasError:l.PropTypes.bool},w.defaultProps={showChoicesCloth:void 0,showChoicesItemIndex:void 0,openedCategory:void 0,hasError:!1},t.default=w},327:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),u=r(s),d=n(88),c=n(16),p=n(318),f=r(p),h=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.openCategory=e.openCategory.bind(e),e.setChoicesCloth=e.setChoicesCloth.bind(e),e.goNext=e.goNext.bind(e),e.deleteItem=e.deleteItem.bind(e),e}return l(t,e),a(t,[{key:"setChoicesCloth",value:function(e,t){this.setState({showChoicesCloth:e,showChoicesItemIndex:t})}},{key:"openCategory",value:function(e){this.setState({openedCategory:e})}},{key:"toggleAlteration",value:function(e,t){this.props.dispatch({type:"ORDER.TOGGLE_ALTERATION",itemIndex:e,alterationId:t})}},{key:"deleteItem",value:function(e){this.props.dispatch({type:"ORDER.DELETE_ITEM",itemId:e})}},{key:"goNext",value:function(){this.isOrderValid()?c.browserHistory.push("/order/step3"):this.setState({hasError:!0})}},{key:"isOrderValid",value:function(){return this.props.orderItems&&this.props.orderItems.length>0&&!this.props.orderItems.find(function(e){return!e.alterations||0===e.alterations.length})}},{key:"render",value:function(){var e=this,t=this.isOrderValid();return u.default.createElement(f.default,{orderItems:this.props.orderItems,total:this.props.total,toggleAlteration:function(t,n){return e.toggleAlteration(t,n)},showChoicesCloth:this.state.showChoicesCloth,showChoicesItemIndex:this.state.showChoicesItemIndex,openedCategory:this.state.openedCategory,openCategory:this.openCategory,close:function(){return e.setChoicesCloth()},setChoicesCloth:this.setChoicesCloth,isButtonValid:t,goNext:this.goNext,hasError:this.state.hasError,deleteCloth:this.deleteItem})}}]),t}(s.Component);h.propTypes={orderItems:s.PropTypes.arrayOf(s.PropTypes.shape({})).isRequired,dispatch:s.PropTypes.func.isRequired,total:s.PropTypes.number.isRequired,openedCategory:s.PropTypes.shape({}),showChoicesCloth:s.PropTypes.shape({})},h.defaultProps={openedCategory:void 0,showChoicesCloth:void 0};var m=function(e){return{orderItems:e.order.orderItems,total:e.order.total,openedCategory:e.order.openedCategory}},g=function(e){return{dispatch:e}};t.default=(0,d.connect)(m,g)(h)}});
//# sourceMappingURL=3.c7af4db9.chunk.js.map