(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{1023:function(e,t,a){"use strict";var i=a(4836);t.Z=void 0;var s=i(a(4938)),l=a(5893),n=(0,s.default)((0,l.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=n},3730:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/studio",function(){return a(7196)}])},6:function(e,t,a){"use strict";var i=a(5893),s=a(3985),l=a(2004),n=(a(8334),a(6375),a(594)),r=a(6010),c=a(7294),o=a(1163);t.Z=function(e){var t=e.articleProp,a=e.toggleDetails,_=e.setArticleChosen,d=e.styles,u=e.path,p=(0,o.useRouter)();return(0,c.useEffect)((function(){console.log(t)}),[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"btn_close",onClick:function(){a(),_(null),p.push("/lesalon/".concat(u))},children:(0,i.jsx)(n.Z,{})}),(0,i.jsxs)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"description_sec",children:[(0,i.jsxs)("div",{className:(0,r.Z)([d["salon-card"],"article_body"]),children:[t.TypeDeMedia&&"video"===t.TypeDeMedia[0]?(0,i.jsx)(l.Z,{controls:!0,url:t.MediaURL,className:"videocontainer"}):t.MediaImageGoogleDrive||"audio"===t.TypeDeMedia[0]?(0,i.jsx)("img",{className:"articleImg",style:{marginTop:"20px",width:"600px",height:"400px"},src:t.MediaImageGoogleDrive[0].url,alt:""}):null,(0,i.jsxs)("div",{className:"article_title",children:[(0,i.jsx)("h1",{children:t.Titre}),(0,i.jsx)("h3",{children:null===t||void 0===t?void 0:t.DateDepublication}),"audio"===t.TypeDeMedia[0]?(0,i.jsx)("div",{className:"embed-container",children:(0,i.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})}):null,"balado"===t.type&&(0,i.jsx)("div",{className:"embed-container",children:(0,i.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})})]})]}),(0,i.jsx)("div",{className:d["salon-card__description"],children:(0,i.jsx)(s.D,{children:t.Contenu})})]})]})}},6041:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var i=a(5893),s=a(7294),l=a(1023),n=(a(8334),a(8498)),r=a(594),c=a(4863),o=a(9940),_=a(1163),d=function(e){var t=e.data,a=e.filterData,s=e.pageKey,l=(0,_.useRouter)(),n=(0,o.Z)(t,a,s);return(0,i.jsxs)("div",{className:"info",children:[(0,i.jsxs)("button",{className:"btn_close",onClick:function(){l.back()},children:[" ",(0,i.jsx)(r.Z,{})]}),(0,i.jsx)("h1",{children:n.Name}),(0,i.jsx)(c.Z,{className:"simpleContainer",children:(0,i.jsx)("p",{className:"articleText",children:n.Contenu})})]})},u=a(6),p=a(4038),m=a.n(p),f=a(3547),h=a.n(f);function y(e){var t=e.searchPath;return(0,i.jsx)("div",{className:h().root,children:(0,i.jsx)("div",{className:h().content,children:(0,i.jsxs)("h1",{children:["Error 404: ",t||""," Not Found"]})})})}var b=a(1664),x=a.n(b),v=/[, ]+/g,D=function(e){return e.replace(v,"")},g=function(e){var t=e.isOpenMenu,a=e.baseArticles,r=e.aboutUsData,c=e.path,o=e.filterData,p=e.filteredArticle,f=(0,s.useState)(!1),h=f[0],b=f[1],v=(0,s.useState)([]),g=v[0],j=v[1],k=(0,s.useState)(!1),N=k[0],S=k[1],C=(0,s.useState)(!1),T=C[0],Z=C[1],A=(0,s.useState)(null),M=A[0],I=A[1],w=(0,s.useState)(null),E=w[0],L=w[1],R=(0,s.useState)(!0),O=R[0],P=R[1],U=(0,_.useRouter)(),F=function(){0!==g.length&&b(!h)},K=function(e){0!==a.length&&j(a.filter((function(t){return!!t.SectionDuMenu&&t.SectionDuMenu[0]===e})))};return(0,s.useEffect)((function(){if(c||0!==a.length||0!==r.length)switch(c){case"location":I(n.iD.location),Z(!0);break;case"studio":I(n.iD.studio),Z(!0);break;case"formation":I(n.iD.formation),K(n.iD.formation),Z(!1),S(!0);break;case"benevolat":I(n.iD.benevolat),K(n.iD.benevolat),Z(!1),S(!0);break;case"balado":I(n.iD.balado),K(n.iD.balado),Z(!1),S(!0);break;case"video":I(n.iD.video),K(n.iD.video),Z(!1),S(!0);break;case"expositions":I(n.iD.exposition),K(n.iD.exposition),Z(!1),S(!0);break;case"appels":I(n.iD.appels),K(n.iD.appels),Z(!1),S(!0);break;case"communiqueDePresse":I(n.iD.pressRelease),K(n.iD.pressRelease),Z(!1),S(!0);break;case"dossier":I(n.iD.dossier),K(n.iD.dossier),Z(!1),S(!0)}}),[c,a,r]),(0,s.useEffect)((function(){if(p){var e=D(p),t=g.filter((function(t){return D(t.Titre)===e}));console.log({filteredData:t}),F(),L(t[0])}}),[p,g]),(0,s.useEffect)((function(){setTimeout((function(){P(!1)}),200)}),[]),T?(0,i.jsx)(d,{isOpenMenu:t,data:r,filterData:o,pageKey:M}):O?null:N?!t&&(0,i.jsx)(i.Fragment,{children:h||0===g.length?(0,i.jsx)(i.Fragment,{children:p&&(0,i.jsx)("div",{className:m().article,children:E&&(0,i.jsx)(u.Z,{articleProp:E,toggleDetails:F,setArticleChosen:L,styles:m(),path:c})})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"btn_close",onClick:function(){U.push("/")},children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)("h1",{className:"generalTitle",children:localStorage.getItem("title")}),(0,i.jsx)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"generalContent",children:g.map((function(e){return(0,i.jsx)(x(),{href:"".concat(c,"/").concat(D(e.Titre)),children:(0,i.jsx)("li",{className:m().itemArticles,children:(0,i.jsx)("button",{onClick:function(){b(!0),L(e)},children:(0,i.jsx)("h1",{children:e.Titre})})})},e.ID)}))})]})}):(0,i.jsx)(y,{searchPath:c})}},7196:function(e,t,a){"use strict";a.r(t);var i=a(5893),s=a(6041);t.default=function(e){var t=e.baseArticles,a=e.aboutUsData,l=e.filterData;return(0,i.jsx)(s.Z,{path:"studio",aboutUsData:a,baseArticles:t,filterData:l})}},4038:function(e){e.exports={App:"style_App___hpxu","salon-card":"style_salon-card__gOs7K","salon-card__description":"style_salon-card__description__Wtc4N","simplebar-scrollbar":"style_simplebar-scrollbar__YyUe_","simplebar-visible":"style_simplebar-visible__44dhK",expocontent:"style_expocontent__6F_fk",generalContent:"style_generalContent__ZbgYZ",generalContainer:"style_generalContainer__YRGyu",card:"style_card__JY5vD",cardEchantillon:"style_cardEchantillon__ymMiV",eventDate:"style_eventDate__QleZ3",blockInfoSuplEvent:"style_blockInfoSuplEvent__Zt2S8",infoSupl:"style_infoSupl__rAZZ4","h1--card":"style_h1--card__DW8tx","h3--card":"style_h3--card__kuL_q","p--card":"style_p--card__j6zmt",detail:"style_detail__ofk2h",block2:"style_block2__BhkPM",title:"style_title__S_AzW",datedetail:"style_datedetail__jpgDq",generalTitle:"style_generalTitle__KG8NY",article:"style_article__8I4oc",article_title:"style_article_title__10vea","embed-container":"style_embed-container__3TMcx",audio_player:"style_audio_player__G_6J0",article_body:"style_article_body__BUdx_",articleImg:"style_articleImg__plJAX",videocontainer:"style_videocontainer__Lrr_s",description_sec:"style_description_sec__lkGWn","simplebar-content-wrapper":"style_simplebar-content-wrapper__nqV7V","simplebar-content":"style_simplebar-content__eSwi3",cardContainer:"style_cardContainer__KxIru",itemArticles:"style_itemArticles__lxKS5",center:"style_center__gX_aZ",carousel:"style_carousel__th0ak","carousel-inner":"style_carousel-inner__pW2lk",right:"style_right__W3__B",left:"style_left__dbHI4",error:"style_error__u_Emg",correct:"style_correct__30iz2",audioframe:"style_audioframe__l3mD5",devenir:"style_devenir__Qd1SV",devenir_prevImg:"style_devenir_prevImg__cDtu9",principal:"style_principal__Oxsh8",container_form:"style_container_form__F0DiS",mediaContainer:"style_mediaContainer__IQAmS",mediaContainerLabel:"style_mediaContainerLabel__huvsw","custom-file-upload":"style_custom-file-upload__lrg24",formDescription:"style_formDescription__whb5S",nom:"style_nom__k3xBW",mediaItem:"style_mediaItem__Oh2D_",formText:"style_formText__wTlVa","form-control":"style_form-control__TwtuL",socialMediaLabel:"style_socialMediaLabel___jEb2"}},3547:function(e){e.exports={App:"style_App__2c_zd",root:"style_root__cdy4Y",content:"style_content__OAS_L"}}},function(e){e.O(0,[210,494,863,774,888,179],(function(){return t=3730,e(e.s=t);var t}));var t=e.O();_N_E=t}]);