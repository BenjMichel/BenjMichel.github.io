webpackJsonp([4],{26:function(e,t,r){e.exports=r.p+"static/media/logo1.0435963c.png"},71:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={mant:"jacket",jupe:"skirt-1",chem:"shirt-1",pant:"jeans",robe:"dress-3",div:""};t.default=r},328:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){var o=r.alterations&&r.alterations[e.id];return s.default.createElement(a.Choice,{isSelected:o,onClick:function(){return t(e.id)},key:e.id},e.name,s.default.createElement(a.Price,null,e.price,"€"))}Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),s=o(l),a=r(6),u=function(e){var t=e.cloth,r=e.openedCategory,o=e.openCategory,l=e.close,u=e.toggleAlteration,i=e.orderItem;return s.default.createElement(a.Categories,null,t.categories.map(function(e){return s.default.createElement("div",{key:e.name},s.default.createElement(a.Category,{onClick:function(){return o(e.name)}},s.default.createElement(a.Header3,null,s.default.createElement(a.Title4,null,r===e.name?s.default.createElement("img",{src:"https://icon.now.sh/chevron/up/12",alt:"chevron icon"}):s.default.createElement("img",{src:"https://icon.now.sh/chevron/down/12",alt:"chevron icon"})," "+e.name))),r===e.name&&e.items.map(function(e){return n(e,u,i)}))}),s.default.createElement(a.Center,null,s.default.createElement(a.Button,{onClick:l},"Valider ce vêtement")))};u.propTypes={cloth:l.PropTypes.shape({}).isRequired,openCategory:l.PropTypes.func.isRequired,openedCategory:l.PropTypes.string,close:l.PropTypes.func.isRequired,toggleAlteration:l.PropTypes.func.isRequired,orderItem:l.PropTypes.shape({}).isRequired},t.default=u},330:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),l=o(n),s=r(6),a=r(54),u=o(a),i=r(71),c=o(i),d=function(e){var t=e.orderItem,r=e.itemNumber,o=e.toggleChoices,n=c.default[t.slug],a=t.slug,i=u.default.find(function(e){return e.slug===a}),d=Object.keys(t.alterations||{}).length;return l.default.createElement(s.Cloth,{onClick:function(){return o(i)}},l.default.createElement(s.Icon,{className:"flaticon-"+n}),l.default.createElement(s.ClothText,null,i.cloth," n°",r),l.default.createElement(s.Bubble,null,d))};d.propTypes={itemNumber:n.PropTypes.number.isRequired,orderItem:n.PropTypes.shape({}).isRequired,toggleChoices:n.PropTypes.func.isRequired},t.default=d},346:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),l=o(n),s=r(29),a=r(330),u=o(a),i=r(328),c=o(i),d=r(6),p=r(26),f=o(p),h=function(e){var t=e.orderItems,r=e.toggleAlteration,o=e.total,n=e.showChoicesCloth,a=e.openedCategory,i=e.openCategory,p=e.setChoicesCloth,h=e.close,m=e.showChoicesItemIndex,y=e.isButtonValid,g=e.goNext,C=e.hasError;return l.default.createElement(d.Wrapper,null,l.default.createElement(d.Block,{id:"alterations"},l.default.createElement(d.Header2,null,l.default.createElement(d.Logo,{src:f.default}),l.default.createElement(d.ProgressBar,null,l.default.createElement(d.Progress,null,l.default.createElement(d.ProgressDot,null,"1"),l.default.createElement(d.ProgressText,null,"Vetements")),l.default.createElement(d.ProgressActive,null,l.default.createElement(d.ProgressDot,null,"2"),l.default.createElement(d.ProgressText,null,"Retouches")),l.default.createElement(d.Progress,null,l.default.createElement(d.ProgressDot,null,"3"),l.default.createElement(d.ProgressText,null,"Mon RDV"))),l.default.createElement(d.Title2,null,"Je choisis les retouches pour chacun de mes vêtements")),l.default.createElement(d.ClothesList,null,t.map(function(e,r){var o=t.filter(function(t,o){return t.slug===e.slug&&r>=o}).length;return l.default.createElement(u.default,{itemNumber:o,orderItem:e,toggleChoices:function(e){return p(e,r)},key:e.slug+"-"+o})}),n?l.default.createElement(c.default,{cloth:n,openedCategory:a,openCategory:i,close:h,orderItem:t[m],toggleAlteration:function(e){return r(m,e)}}):null,l.default.createElement(d.Cloth,{onClick:function(){return s.browserHistory.push("/order/step1")}},l.default.createElement(d.ClothText,null,"Ajouter un"),l.default.createElement(d.ClothText,null,"vêtement"),l.default.createElement(d.Add,null,"+"))),l.default.createElement(d.Total,null,"Total : ",o.toFixed(2),"€"),C&&l.default.createElement(d.ErrorText,null,"Merci de sélectionner des retouches pour tous les vêtements"),l.default.createElement(d.Center,null,l.default.createElement(d.Button3,{isNotValid:!y,onClick:g},"> Valider <"))))};h.propTypes={orderItems:n.PropTypes.arrayOf(n.PropTypes.shape()).isRequired,toggleAlteration:n.PropTypes.func.isRequired,total:n.PropTypes.number.isRequired,showChoicesCloth:n.PropTypes.shape({}),showChoicesItemIndex:n.PropTypes.number,openCategory:n.PropTypes.func.isRequired,openedCategory:n.PropTypes.string,setChoicesCloth:n.PropTypes.func.isRequired,close:n.PropTypes.func.isRequired,goNext:n.PropTypes.func.isRequired,isButtonValid:n.PropTypes.bool.isRequired,hasError:n.PropTypes.bool},h.defaultProps={showChoicesCloth:void 0,showChoicesItemIndex:void 0,openedCategory:void 0,hasError:!1},t.default=h},353:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),i=o(u),c=r(104),d=r(29),p=r(346),f=o(p),h=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.openCategory=e.openCategory.bind(e),e.setChoicesCloth=e.setChoicesCloth.bind(e),e.goNext=e.goNext.bind(e),e}return s(t,e),a(t,[{key:"setChoicesCloth",value:function(e,t){this.setState({showChoicesCloth:e,showChoicesItemIndex:t})}},{key:"openCategory",value:function(e){this.setState({openedCategory:e})}},{key:"toggleAlteration",value:function(e,t){this.props.dispatch({type:"ORDER.TOGGLE_ALTERATION",itemIndex:e,alterationId:t})}},{key:"goNext",value:function(){this.isOrderValid()?d.browserHistory.push("/order/step3"):this.setState({hasError:!0})}},{key:"isOrderValid",value:function(){return this.props.orderItems&&this.props.orderItems.length>0&&!this.props.orderItems.find(function(e){return!e.alterations||0===e.alterations.length})}},{key:"render",value:function(){var e=this,t=this.isOrderValid();return i.default.createElement(f.default,{orderItems:this.props.orderItems,total:this.props.total,toggleAlteration:function(t,r){return e.toggleAlteration(t,r)},showChoicesCloth:this.state.showChoicesCloth,showChoicesItemIndex:this.state.showChoicesItemIndex,openedCategory:this.state.openedCategory,openCategory:this.openCategory,close:function(){return e.setChoicesCloth()},setChoicesCloth:this.setChoicesCloth,isButtonValid:t,goNext:this.goNext,hasError:this.state.hasError})}}]),t}(u.Component);h.propTypes={orderItems:u.PropTypes.arrayOf(u.PropTypes.shape({})).isRequired,dispatch:u.PropTypes.func.isRequired,total:u.PropTypes.number.isRequired,openedCategory:u.PropTypes.shape({}),showChoicesCloth:u.PropTypes.shape({})},h.defaultProps={openedCategory:void 0,showChoicesCloth:void 0};var m=function(e){return{orderItems:e.order.orderItems,total:e.order.total,openedCategory:e.order.openedCategory}},y=function(e){return{dispatch:e}};t.default=(0,c.connect)(m,y)(h)}});
//# sourceMappingURL=4.d931d87c.chunk.js.map