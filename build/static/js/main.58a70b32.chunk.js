(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo",logo:"Header_logo__3Cuqg","main-image":"Header_main-image__2Q3So"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),o=n.n(r),s=n.p+"static/media/food.7ee431c9.jpg",l=n.p+"static/media/logo.955f17f3.png",m=n(10),d=n.n(m),u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=n(8),p=n.n(O),x=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(b),s=o.items,l=o.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(p.a.button," ").concat(a?p.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(u.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(u.jsx)("span",{className:p.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:p.a.badge,children:l})]})},_=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:d.a.header,children:[Object(u.jsx)("div",{className:d.a.logo,children:Object(u.jsx)("img",{src:l,alt:"Table of food"})}),Object(u.jsx)(x,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:d.a["main-image"],children:Object(u.jsx)("img",{src:s,alt:"Table of food"})})]})},f=n(15),h=n.n(f),v=n(16),C=n.n(v),g=function(e){return Object(u.jsx)("div",{className:C.a.card,children:e.children})},N=n(11),A=n.n(N),y=n(17),I=n.n(y),w=n(2),M=n(18),k=n.n(M),H=o.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:k.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(w.a)({ref:t},e.input))]})})),F=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(u.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||n>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(H,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:" Add"}),!a&&Object(u.jsx)("p",{children:" Please enter a valid amount (1-5) "})]})},S=function(e){var t=Object(r.useContext)(b),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:A.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:A.a.description,children:e.description}),Object(u.jsx)("div",{className:A.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(F,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],D=function(){var e=B.map((function(e){return Object(u.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:h.a.meals,children:Object(u.jsx)(g,{children:Object(u.jsx)("ul",{children:e})})})},T=n(19),E=n.n(T),P=function(){return Object(u.jsxs)("section",{className:E.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(P,{}),Object(u.jsx)(D,{})]})},z=n(4),U=n.n(z),V=n(12),q=n.n(V),J=function(e){return Object(u.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},L=function(e){return Object(u.jsx)("div",{className:q.a.modal,children:Object(u.jsx)("div",{className:q.a.content,children:e.children})})},Q=document.getElementById("overlays"),Y=function(e){return Object(u.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(u.jsx)(J,{onClose:e.onClose}),Q),c.a.createPortal(Object(u.jsxs)(L,{children:[" ",e.children]}),Q)]})},X=n(5),Z=n.n(X),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Z.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:Z.a.summary,children:[Object(u.jsx)("span",{className:Z.a.price,children:t}),Object(u.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:Z.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=function(e){var t=Object(r.useContext)(b),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},o=Object(u.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(Y,{onClose:e.onClose,children:[o,Object(u.jsxs)("div",{className:U.a.total,children:[Object(u.jsx)("span",{children:"Total amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:U.a.actions,children:[Object(u.jsx)("button",{className:U.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(u.jsx)("button",{className:U.a.button,children:" Order"})]})]})},K=n(14),W={items:[],totalAmount:0},ee=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(w.a)(Object(w.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(K.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],m=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(o=Object(K.a)(e.items))[s]=d}return{items:o,totalAmount:m}}return W},te=function(e){var t=Object(r.useReducer)(ee,W),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(b.Provider,{value:o,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(te,{children:[n&&Object(u.jsx)(G,{onClose:function(){a(!1)}}),Object(u.jsx)(_,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(R,{})})]})};c.a.render(Object(u.jsx)(ne,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.58a70b32.chunk.js.map