webpackJsonp([4],{21:function(e,t,r){e.exports=r.p+"static/media/logo1.0435963c.png"},25:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=o(n),l=r(4),a=[{id:1,name:"Vêtements"},{id:2,name:"Retouches"},{id:3,name:"RDV"},{id:4,name:"Coordonnées"}],u=function(e){var t=e.step;return s.default.createElement(l.ProgressBar,null,a.map(function(e){return s.default.createElement(l.Progress,{key:e.id,isActive:t===e.id},s.default.createElement(l.ProgressDot,null,e.id),s.default.createElement(l.ProgressText,null,e.name))}))};u.propTypes={step:n.PropTypes.number.isRequired},t.default=u},57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={mant:"jacket",jupe:"skirt-1",chem:"shirt-1",pant:"jeans",robe:"dress-3",div:""};t.default=r},292:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){var o=r.alterations&&r.alterations[e.id];return l.default.createElement(a.Choice,{isSelected:o,onClick:function(){return t(e.id)},key:e.id},e.name,l.default.createElement(a.Price,null,e.price,"€"))}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),l=o(s),a=r(4),u=function(e){var t=e.cloth,r=e.openedCategory,o=e.openCategory,s=e.close,u=e.toggleAlteration,i=e.orderItem;return l.default.createElement(a.Categories,null,t.categories.map(function(e){return l.default.createElement("div",{key:e.name},l.default.createElement(a.Category,{onClick:function(){return o(e.name)}},l.default.createElement(a.Header3,null,l.default.createElement(a.Title4,null,r===e.name?l.default.createElement("img",{src:"https://icon.now.sh/chevron/up/12",alt:"chevron icon"}):l.default.createElement("img",{src:"https://icon.now.sh/chevron/down/12",alt:"chevron icon"})," "+e.name))),r===e.name&&e.items.map(function(e){return n(e,u,i)}))}),l.default.createElement(a.Center,null,l.default.createElement(a.Button,{onClick:s},"Valider ce vêtement")))};u.propTypes={cloth:s.PropTypes.shape({}).isRequired,openCategory:s.PropTypes.func.isRequired,openedCategory:s.PropTypes.string,close:s.PropTypes.func.isRequired,toggleAlteration:s.PropTypes.func.isRequired,orderItem:s.PropTypes.shape({}).isRequired},t.default=u},298:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=o(n),l=r(4),a=r(59),u=o(a),i=r(57),c=o(i),d=function(e){var t=e.orderItem,r=e.itemNumber,o=e.toggleChoices,n=c.default[t.slug],a=t.slug,i=u.default.find(function(e){return e.slug===a}),d=Object.keys(t.alterations||{}).length;return s.default.createElement(l.Cloth,{onClick:function(){return o(i)}},s.default.createElement(l.Icon,{className:"flaticon-"+n}),s.default.createElement(l.ClothText,null,i.cloth," n°",r),s.default.createElement(l.Bubble,null,d))};d.propTypes={itemNumber:n.PropTypes.number.isRequired,orderItem:n.PropTypes.shape({}).isRequired,toggleChoices:n.PropTypes.func.isRequired},t.default=d},312:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=o(n),l=r(18),a=r(298),u=o(a),i=r(292),c=o(i),d=r(4),p=r(25),f=o(p),h=r(21),m=o(h),y=function(e){var t=e.orderItems,r=e.toggleAlteration,o=e.total,n=e.showChoicesCloth,a=e.openedCategory,i=e.openCategory,p=e.setChoicesCloth,h=e.close,y=e.showChoicesItemIndex,C=e.isButtonValid,g=e.goNext,E=e.hasError;return s.default.createElement(d.Wrapper,null,s.default.createElement(d.Block,{id:"alterations"},s.default.createElement(d.Header2,null,s.default.createElement(d.Logo,{src:m.default}),s.default.createElement(f.default,{step:2}),s.default.createElement(d.Title2,null,"Je choisis les retouches pour chacun de mes vêtements")),s.default.createElement(d.ClothesList,null,t.map(function(e,r){var o=t.filter(function(t,o){return t.slug===e.slug&&r>=o}).length;return s.default.createElement(u.default,{itemNumber:o,orderItem:e,toggleChoices:function(e){return p(e,r)},key:e.slug+"-"+o})}),n?s.default.createElement(c.default,{cloth:n,openedCategory:a,openCategory:i,close:h,orderItem:t[y],toggleAlteration:function(e){return r(y,e)}}):null,s.default.createElement(d.Cloth,{onClick:function(){return l.browserHistory.push("/order/step1")}},s.default.createElement(d.ClothText,null,"Ajouter un"),s.default.createElement(d.ClothText,null,"vêtement"),s.default.createElement(d.Add,null,"+"))),s.default.createElement(d.Total,null,"Total : ",o.toFixed(2),"€"),E&&s.default.createElement(d.ErrorText,null,"Merci de sélectionner des retouches pour tous les vêtements"),s.default.createElement(d.Center,null,s.default.createElement(d.Button3,{isNotValid:!C,onClick:g},"> Valider <"))))};y.propTypes={orderItems:n.PropTypes.arrayOf(n.PropTypes.shape()).isRequired,toggleAlteration:n.PropTypes.func.isRequired,total:n.PropTypes.number.isRequired,showChoicesCloth:n.PropTypes.shape({}),showChoicesItemIndex:n.PropTypes.number,openCategory:n.PropTypes.func.isRequired,openedCategory:n.PropTypes.string,setChoicesCloth:n.PropTypes.func.isRequired,close:n.PropTypes.func.isRequired,goNext:n.PropTypes.func.isRequired,isButtonValid:n.PropTypes.bool.isRequired,hasError:n.PropTypes.bool},y.defaultProps={showChoicesCloth:void 0,showChoicesItemIndex:void 0,openedCategory:void 0,hasError:!1},t.default=y},320:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(2),i=o(u),c=r(86),d=r(18),p=r(312),f=o(p),h=function(e){function t(){n(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.openCategory=e.openCategory.bind(e),e.setChoicesCloth=e.setChoicesCloth.bind(e),e.goNext=e.goNext.bind(e),e}return l(t,e),a(t,[{key:"setChoicesCloth",value:function(e,t){this.setState({showChoicesCloth:e,showChoicesItemIndex:t})}},{key:"openCategory",value:function(e){this.setState({openedCategory:e})}},{key:"toggleAlteration",value:function(e,t){this.props.dispatch({type:"ORDER.TOGGLE_ALTERATION",itemIndex:e,alterationId:t})}},{key:"goNext",value:function(){this.isOrderValid()?d.browserHistory.push("/order/step3"):this.setState({hasError:!0})}},{key:"isOrderValid",value:function(){return this.props.orderItems&&this.props.orderItems.length>0&&!this.props.orderItems.find(function(e){return!e.alterations||0===e.alterations.length})}},{key:"render",value:function(){var e=this,t=this.isOrderValid();return i.default.createElement(f.default,{orderItems:this.props.orderItems,total:this.props.total,toggleAlteration:function(t,r){return e.toggleAlteration(t,r)},showChoicesCloth:this.state.showChoicesCloth,showChoicesItemIndex:this.state.showChoicesItemIndex,openedCategory:this.state.openedCategory,openCategory:this.openCategory,close:function(){return e.setChoicesCloth()},setChoicesCloth:this.setChoicesCloth,isButtonValid:t,goNext:this.goNext,hasError:this.state.hasError})}}]),t}(u.Component);h.propTypes={orderItems:u.PropTypes.arrayOf(u.PropTypes.shape({})).isRequired,dispatch:u.PropTypes.func.isRequired,total:u.PropTypes.number.isRequired,openedCategory:u.PropTypes.shape({}),showChoicesCloth:u.PropTypes.shape({})},h.defaultProps={openedCategory:void 0,showChoicesCloth:void 0};var m=function(e){return{orderItems:e.order.orderItems,total:e.order.total,openedCategory:e.order.openedCategory}},y=function(e){return{dispatch:e}};t.default=(0,c.connect)(m,y)(h)}});
//# sourceMappingURL=4.af51c87f.chunk.js.map