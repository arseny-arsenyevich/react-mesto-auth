(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),i=n.n(s),r=n(8),o=(n(28),n(23)),l=n(2),u=n(3),d=n.p+"static/media/logo.abb64ac9.svg",h=n.p+"static/media/auth-success.1b6082f8.svg",j=n.p+"static/media/auth-fail.7c6a020b.svg",b=n(0);var m=function(e){var t=e.logoPic,n=e.headerLink,c=e.headerLinkTitle,s=e.headerBurger,i=e.setLoggedIn,o=e.email,u=e.loading,d=Object(a.useState)(!1),h=Object(l.a)(d,2),j=h[0],m=h[1],p=function(){i&&i(!1),i&&localStorage.removeItem("token")};return Object(b.jsxs)("header",{className:"header header_position_center","aria-label":"\u0448\u0430\u043f\u043a\u0430",children:[s&&Object(b.jsxs)("div",{className:"header__burger \n                header__burger_res_mobile \n                ".concat(j&&"header__burger_opened"),children:[s&&Object(b.jsx)("p",{className:"header__email",children:o}),Object(b.jsx)(r.b,{to:n,className:"header__link header__link_theme_dark",onClick:p,children:c})]}),Object(b.jsx)("div",{className:"header__loading ".concat(u&&"header__loading_active")}),Object(b.jsxs)("div",{className:"header__container",children:[Object(b.jsx)(r.b,{to:"".concat(!u&&"/cards"),className:"header__link ".concat(u&&"header__link_loading"),children:Object(b.jsx)("img",{className:"header__logo ".concat(u&&"header__logo_loading"),src:t,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(b.jsxs)("div",{className:"header__burger ".concat(s&&"header__burger_res_desktop"),children:[s&&Object(b.jsx)("p",{className:"header__email",children:o}),Object(b.jsx)(r.b,{to:n,className:"header__link ".concat(s&&"header__link_theme_dark"),onClick:p,children:c})]}),s&&Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),m(!j)},type:"button",className:"header__burger-icon ".concat(j&&"header__burger-icon_opened"),children:Object(b.jsx)("span",{})})]})]})},p=c.a.createContext();var _=function(e){var t=e.card,n=e.onDelete,c=e.onCardClick,s=e.onCardLike,i=Object(a.useContext)(p),r=t.owner._id===i._id,o="elements__trash ".concat(r?"":"elements__trash_hidden"),l=t.likes.some((function(e){return e._id===i._id})),u="elements__like-button ".concat(l?"elements__like-button_active":"");return Object(b.jsxs)("li",{className:"elements__card",children:[Object(b.jsx)("button",{onClick:function(){n(t)},className:o,children:Object(b.jsx)("div",{className:"elements__trash-icon"})}),Object(b.jsx)("div",{className:"elements__background",children:Object(b.jsx)("img",{className:"elements__picture",onClick:function(){c([t.link,t.name])},src:t.link,alt:"\u043f\u0435\u0439\u0437\u0430\u0436"})}),Object(b.jsxs)("div",{className:"elements__text-area",children:[Object(b.jsx)("h2",{className:"elements__title",children:t.name}),Object(b.jsxs)("div",{className:"elements__like",children:[Object(b.jsx)("button",{onClick:function(){s(t)},className:u,type:"button"}),Object(b.jsx)("p",{className:"elements__like-counter",children:t.likes.length})]})]})]})};var f=function(e){var t=e.cards,n=e.onEditAvatar,c=e.onEditProfile,s=e.onAddPlace,i=e.onCardLike,r=e.onCardDelete,o=e.onCardClick,l=Object(a.useContext)(p);return Object(b.jsxs)("main",{className:"main",children:[Object(b.jsxs)("section",{className:"profile profile_position_center",children:[Object(b.jsxs)("div",{className:"profile__picture-edit",children:[Object(b.jsx)("img",{className:"profile__picture",src:l.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(b.jsx)("button",{className:"profile__picture-edit-button",type:"button",onClick:n})]}),Object(b.jsxs)("div",{className:"profile__name-box",children:[Object(b.jsx)("h1",{className:"profile__name",children:l.name}),Object(b.jsx)("button",{className:"profile__edit-button",type:"button",onClick:c}),Object(b.jsx)("p",{className:"profile__profession",children:l.about})]}),Object(b.jsx)("button",{className:"profile__add-button",type:"button",onClick:s})]}),Object(b.jsxs)("section",{className:"elements","aria-label":"\u043c\u0435\u0441\u0442\u0430",children:[Object(b.jsx)("p",{className:"elements__empty ".concat(!t.length&&"elements__empty_active"),children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(b.jsx)("ul",{className:"elements__table",children:t.map((function(e){return Object(b.jsx)(_,{onCardLike:i,onDelete:r,onCardClick:o,card:e},e._id)}))})]})]})};var O=function(){return Object(b.jsx)("footer",{className:"footer footer_position_center",children:Object(b.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Mesto Russia"})})};var v=function(e){var t=e.name,n=e.isOpen,a=e.onClose,c=e.onSubmit,s=e.title,i=e.children,r=e.buttonTxt,o=e.buttonState;return Object(b.jsx)("div",{className:"popup ".concat(n&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&a()},children:Object(b.jsxs)("div",{className:"popup__container popup__container_position_center",children:[Object(b.jsx)("button",{className:"popup__exit",type:"button",onClick:a}),Object(b.jsx)("h2",{className:"popup__heading",children:s}),Object(b.jsxs)("form",{onSubmit:c,className:"form",name:t,children:[Object(b.jsx)("fieldset",{className:"form__input-container",children:i}),Object(b.jsx)("button",{disabled:o,type:"submit",className:"form__save-button",children:r})]})]})})};var x=function(e){var t,n,c,s=e.name,i=e.type,r=e.inputRef,o=e.validities,d=e.setButtonState,h=e.placeholder,j=e.minLength,m=e.maxLength,p=e.isOpen,_=e.additionalClass,f=Object(a.useState)(""),O=Object(l.a)(f,2),v=O[0],x=O[1],g=Object(a.useState)(null),k=Object(l.a)(g,2),N=k[0],C=k[1],S=Object(a.useState)(!1),y=Object(l.a)(S,2),L=y[0],T=y[1],R=Object(u.g)(),E=Object(a.useCallback)((function(e){var t;clearTimeout(c),T(!1),c=setTimeout((function(){return T(!0)}),1e3),C(!0),t=e,o.some((function(e){return!e.current.validity.valid}))?(x(t.target.validationMessage),d(!0)):(x(""),d(!1))}),[]);return Object(a.useEffect)((function(){return C(null),r.current.addEventListener("input",E),function(){var e;return null===r||void 0===r||null===(e=r.current)||void 0===e?void 0:e.removeEventListener("input",E)}}),[p,R]),Object(b.jsxs)("label",{className:"form__field",children:[Object(b.jsx)("input",{type:i,className:"form__input ".concat(_," ").concat(L&&null!==N&&!(null===(t=o[0].current)||void 0===t?void 0:t.validity.valid)&&"form__input-invalid"),id:"form-".concat(s),placeholder:h,minLength:j,maxLength:m,ref:r,required:!0}),Object(b.jsx)("span",{className:"form__error ".concat(L&&null!==N&&!(null===(n=o[0].current)||void 0===n?void 0:n.validity.valid)&&"form__error_active"),children:v})]})};var g=function(e){var t=e.onUpdateUser,n=e.isOpen,c=e.onClose,s=Object(a.useContext)(p),i=Object(a.useRef)(),r=Object(a.useRef)(),o=Object(a.useState)(!1),u=Object(l.a)(o,2),d=u[0],h=u[1];return Object(a.useEffect)((function(){h(!1),i.current.value=s.name,r.current.value=s.about}),[s,n]),Object(b.jsxs)(v,{name:"name",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t({name:i.current.value,about:r.current.value},h)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTxt:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonState:d,children:[Object(b.jsx)(x,{name:"name",type:"text",inputRef:i,validities:[i,r],setButtonState:h,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",isOpen:n}),Object(b.jsx)(x,{name:"description",type:"text",inputRef:r,validities:[r,i],setButtonState:h,placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",isOpen:n})]})};var k=function(e){var t=e.onUpdateAvatar,n=e.isOpen,c=e.onClose,s=Object(a.useRef)(),i=Object(a.useState)(!1),r=Object(l.a)(i,2),o=r[0],u=r[1];return Object(a.useEffect)((function(){u(!0),s.current.value=""}),[n]),Object(b.jsx)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTxt:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t({avatar:s.current.value},u)},buttonState:o,children:Object(b.jsx)(x,{name:"avatar",type:"url",inputRef:s,validities:[s],setButtonState:u,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isOpen:n})})};var N=function(e){var t=e.onAddPlace,n=e.isOpen,c=e.onClose,s=Object(a.useRef)(),i=Object(a.useRef)(),r=Object(a.useState)(!0),o=Object(l.a)(r,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){d(!0),s.current.value="",i.current.value=""}),[n]),Object(b.jsxs)(v,{name:"card",onSubmit:function(e){e.preventDefault(),t({name:s.current.value,link:i.current.value},d)},isOpen:n,onClose:function(){s.current.value="",i.current.value="",c()},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTxt:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",buttonState:u,children:[Object(b.jsx)(x,{name:"place",type:"text",inputRef:s,validities:[s,i],setButtonState:d,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",isOpen:n}),Object(b.jsx)(x,{name:"place-link",type:"url",inputRef:i,validities:[i,s],setButtonState:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isOpen:n})]})};var C=function(e){var t=e.isOpen,n=e.card,a=e.onClose,c=e.cardName;return Object(b.jsx)("div",{className:"popup popup_content_picture  ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&a()},children:Object(b.jsxs)("div",{className:"popup__pic-container",children:[Object(b.jsx)("button",{className:"popup__exit",onClick:a,type:"button"}),Object(b.jsx)("img",{className:"popup__picture",src:n,alt:"\u043f\u0435\u0439\u0437\u0430\u0436"}),Object(b.jsx)("p",{className:"popup__picture-title",children:c})]})})};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onDelete,s=Object(a.useState)(!1),i=Object(l.a)(s,2),r=i[0],o=i[1];return Object(b.jsx)(v,{name:"delete",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(o)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTxt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",buttonState:r})};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.statusPic,c=e.statusText;return Object(b.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&n()},children:Object(b.jsxs)("div",{className:"popup__container popup__container_position_center",children:[Object(b.jsx)("button",{onClick:n,className:"popup__exit",type:"button"}),Object(b.jsx)("img",{className:"popup__message-pic",alt:"auth result message",src:a}),Object(b.jsx)("h2",{className:"popup__message",children:c})]})})},L=n(13),T=n(14),R=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(L.a)(this,e),this._url=n,this._headers=a}return Object(T.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"redactProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"redactAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t)})}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"43e71961-3715-4de8-9b86-f45dfa570664","Content-Type":"application/json"}});var E=function(e){var t=e.path,n=e.loggedIn,a=e.children;return Object(b.jsx)(u.b,{path:t,children:null!==n&&(n?a:Object(b.jsx)(u.a,{to:"/sign-up"}))})};var P=function(e){var t=e.onSubmit,n=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useState)(!0),i=Object(l.a)(s,2),r=i[0],o=i[1];return Object(b.jsxs)("div",{className:"auth",children:[Object(b.jsx)("h2",{className:"auth__heading",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:n.current.value,password:c.current.value},o)},className:"form",children:[Object(b.jsxs)("fieldset",{className:"form__input-container form__input-container_theme_dark",children:[Object(b.jsx)(x,{name:"email-login",type:"email",inputRef:n,validities:[n,c],setButtonState:o,placeholder:"Email",minLength:"4",maxLength:"30",additionalClass:"form__input_theme_dark"}),Object(b.jsx)(x,{name:"password-login",type:"password",inputRef:c,validities:[c,n],setButtonState:o,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",maxLength:"30",additionalClass:"form__input_theme_dark"})]}),Object(b.jsx)("button",{disabled:r,type:"submit",className:"form__save-button form__save-button_theme_dark",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var w=function(e){var t=e.onSubmit,n=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useState)(!0),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(b.jsxs)("div",{className:"auth",children:[Object(b.jsx)("h2",{className:"auth__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:n.current.value,password:c.current.value},u)},className:"form",children:[Object(b.jsxs)("fieldset",{className:"form__input-container form__input-container_theme_dark",children:[Object(b.jsx)(x,{name:"email-register",type:"email",inputRef:n,validities:[n,c],setButtonState:u,placeholder:"Email",minLength:"4",maxLength:"30",additionalClass:"form__input_theme_dark"}),Object(b.jsx)(x,{name:"password-register",type:"password",inputRef:c,validities:[c,n],setButtonState:u,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",maxLength:"30",additionalClass:"form__input_theme_dark"})]}),Object(b.jsx)("button",{disabled:o,type:"submit",className:"form__save-button form__save-button_theme_dark",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(b.jsx)(r.b,{to:"/sign-in",className:"auth__if-registred",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},D=n(19),A=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(L.a)(this,e),this._url=n,this._headers=a}return Object(T.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"signUp",value:function(e){var t=e.password,n=e.email;return fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({password:"".concat(t),email:"".concat(n)})}).then(this._checkResponse)}},{key:"signIn",value:function(e){var t=e.password,n=e.email;return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({password:"".concat(t),email:"".concat(n)})}).then(this._checkResponse)}},{key:"checkToken",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:Object(D.a)(Object(D.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}});var B=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),r=i[0],_=i[1],v=Object(a.useState)(!1),x=Object(l.a)(v,2),L=x[0],T=x[1],D=Object(a.useState)(!1),B=Object(l.a)(D,2),I=B[0],U=B[1],J=Object(a.useState)(null),F=Object(l.a)(J,2),G=F[0],M=F[1],z=Object(a.useState)(null),H=Object(l.a)(z,2),q=H[0],K=H[1],Q=Object(a.useState)(!1),V=Object(l.a)(Q,2),W=V[0],X=V[1],Y=Object(a.useState)(null),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(""),ie=Object(l.a)(se,2),re=ie[0],oe=ie[1],le=Object(a.useState)(""),ue=Object(l.a)(le,2),de=ue[0],he=ue[1],je=Object(a.useState)([]),be=Object(l.a)(je,2),me=be[0],pe=be[1],_e=Object(a.useState)({name:"",about:"",avatar:""}),fe=Object(l.a)(_e,2),Oe=fe[0],ve=fe[1],xe=Object(a.useState)(""),ge=Object(l.a)(xe,2),ke=ge[0],Ne=ge[1],Ce=Object(a.useState)(null),Se=Object(l.a)(Ce,2),ye=Se[0],Le=Se[1],Te=Object(a.useState)(!0),Re=Object(l.a)(Te,2),Ee=Re[0],Pe=Re[1],we=Object(u.g)(),De=Object(a.useCallback)((function(e){"Escape"===e.key&&Ae()}),[]),Ae=function(){c(!1),_(!1),T(!1),U(!1),X(!1),ce(!1),document.removeEventListener("keydown",De)},Be=function(e){var t=e.result,n=e.text;ce(!0),oe(t?h:j),he(n),document.addEventListener("keydown",De)},Ie=function(){A.checkToken().then((function(e){Le(!0),Ne(e.data.email),we.push("/cards")})).catch((function(e){Le(!1),localStorage.removeItem("token"),console.log(e)}))},Ue=function(e){localStorage.setItem("token",e.token),Ie()};return Object(a.useEffect)((function(){Ie()}),[]),Object(a.useEffect)((function(){Pe(!0),Promise.all([R.getUserInfo(),R.getCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];ve(n),pe(a)})).catch((function(e){return console.log(e)})).finally((function(){return Pe(!1)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"page",children:Object(b.jsxs)(p.Provider,{value:Oe,children:[Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",children:Object(b.jsx)(u.a,{to:"/cards"})}),Object(b.jsxs)(u.b,{path:"/sign-up",children:[Object(b.jsx)(m,{logoPic:d,headerLinkTitle:"\u0412\u043e\u0439\u0442\u0438",headerLink:"/sign-in"}),Object(b.jsx)(w,{onSubmit:function(e,t){var n=e.email,a=e.password;t(!0),A.signUp({email:n,password:a}).then((function(){Be({result:!0,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),setTimeout((function(){return A.signIn({email:n,password:a}).then((function(e){return Ue(e)})).catch((function(){return we.push("/sign-in")}))}),500)})).catch((function(e){Be({result:!1,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),console.log(e)})).finally((function(){return t(!1)}))}})]}),Object(b.jsxs)(u.b,{path:"/sign-in",children:[Object(b.jsx)(m,{logoPic:d,headerLinkTitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",headerLink:"/sign-up"}),Object(b.jsx)(P,{onSubmit:function(e,t){var n=e.email,a=e.password;t(!0),A.signIn({email:n,password:a}).then((function(e){return Ue(e)})).catch((function(e){Be({result:!1,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),console.log(e)})).finally((function(){return t(!1)}))}})]}),Object(b.jsxs)(E,{path:"/cards",loggedIn:ye,children:[Object(b.jsx)(m,{setLoggedIn:Le,logoPic:d,headerLinkTitle:"\u0412\u044b\u0439\u0442\u0438",headerLink:"/sign-in",email:ke,loading:Ee,headerBurger:!0}),Object(b.jsx)(f,{cards:me,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Oe._id}));R.changeLikeCardStatus(e._id,t).then((function(t){return pe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){X(!0),ee(e)},onEditProfile:function(){_(!0),document.addEventListener("keydown",De)},onEditAvatar:function(){c(!0),document.addEventListener("keydown",De)},onAddPlace:function(){T(!0),document.addEventListener("keydown",De)},onCardClick:function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];U(!0),M(n),K(a),document.addEventListener("keydown",De)}}),Object(b.jsx)(O,{})]}),Object(b.jsxs)(u.b,{path:"*",children:[Object(b.jsx)(m,{logoPic:d,headerLinkTitle:"\u0412\u043e\u0439\u0442\u0438",headerLink:"/sign-in"}),Object(b.jsx)("h1",{className:"not-found",children:"404:("})]})]}),Object(b.jsxs)("section",{className:"popups","aria-label":"\u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043e\u043a\u043d\u0430",children:[Object(b.jsx)(g,{isOpen:r,onClose:Ae,onUpdateUser:function(e,t){t(!0),R.redactProfile(e).then((function(e){ve(e),Ae()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(b.jsx)(k,{isOpen:n,onClose:Ae,onUpdateAvatar:function(e,t){t(!0),R.redactAvatar(e).then((function(e){ve(e),Ae()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(b.jsx)(N,{isOpen:L,onClose:Ae,onAddPlace:function(e,t){return t(!0),R.addCard(e).then((function(e){pe([e].concat(Object(o.a)(me))),Ae()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(b.jsx)(C,{isOpen:I,onClose:Ae,card:G,cardName:q}),Object(b.jsx)(S,{isOpen:W,onClose:Ae,onDelete:function(e){e(!0),R.deleteCard($._id).then((function(){return pe((function(e){return e.filter((function(e){return e._id!==$._id}))}))})).catch((function(e){return console.log(e)})).finally((function(){Ae(),e(!1)}))}}),Object(b.jsx)(y,{isOpen:ae,onClose:Ae,onAuthStatus:Be,statusPic:re,statusText:de})]})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(r.a,{basename:"/react-mesto-auth/",children:Object(b.jsx)(B,{})})}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.042a49b2.chunk.js.map