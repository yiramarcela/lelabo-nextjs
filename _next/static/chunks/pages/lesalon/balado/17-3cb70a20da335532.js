(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{1023:function(e,t,a){"use strict";var l=a(4836);t.Z=void 0;var i=l(a(4938)),s=a(5893),n=(0,i.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=n},9334:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lesalon/balado/17",function(){return a(8457)}])},6:function(e,t,a){"use strict";var l=a(5893),i=a(3985),s=a(2004),n=(a(8334),a(6375),a(594)),r=a(6010),o=a(7294),c=a(1163);t.Z=function(e){var t=e.articleProp,a=e.toggleDetails,_=e.setArticleChosen,d=e.styles,u=e.path,p=(0,c.useRouter)();return(0,o.useEffect)((function(){console.log(t)}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"btn_close",onClick:function(){a(),_(null),p.push("/lesalon/".concat(u))},children:(0,l.jsx)(n.Z,{})}),(0,l.jsxs)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"description_sec",children:[(0,l.jsxs)("div",{className:(0,r.Z)([d["salon-card"],"article_body"]),children:[t.TypeDeMedia&&"video"===t.TypeDeMedia[0]?(0,l.jsx)(s.Z,{controls:!0,url:t.MediaURL,className:"videocontainer"}):t.MediaImageGoogleDrive||"audio"===t.TypeDeMedia[0]?(0,l.jsx)("img",{className:"articleImg",style:{marginTop:"20px",width:"600px",height:"400px"},src:t.MediaImageGoogleDrive[0].url,alt:""}):null,(0,l.jsxs)("div",{className:"article_title",children:[(0,l.jsx)("h1",{children:t.Titre}),(0,l.jsx)("h3",{children:null===t||void 0===t?void 0:t.DateDepublication}),"audio"===t.TypeDeMedia[0]?(0,l.jsx)("div",{className:"embed-container",children:(0,l.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})}):null,"balado"===t.type&&(0,l.jsx)("div",{className:"embed-container",children:(0,l.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})})]})]}),(0,l.jsx)("div",{className:d["salon-card__description"],children:(0,l.jsx)(i.D,{children:t.Contenu})})]})]})}},6041:function(e,t,a){"use strict";a.d(t,{Z:function(){return D}});var l=a(5893),i=a(7294),s=a(1023),n=(a(8334),a(8498)),r=a(594),o=a(4863),c=a(9940),_=a(1163),d=function(e){var t=e.data,a=e.filterData,i=e.pageKey,s=(0,_.useRouter)(),n=(0,c.Z)(t,a,i);return(0,l.jsxs)("div",{className:"info",children:[(0,l.jsxs)("button",{className:"btn_close",onClick:function(){s.back()},children:[" ",(0,l.jsx)(r.Z,{})]}),(0,l.jsx)("h1",{children:n.Name}),(0,l.jsx)(o.Z,{className:"simpleContainer",children:(0,l.jsx)("p",{className:"articleText",children:n.Contenu})})]})},u=a(6),p=a(4038),m=a.n(p),f=a(3547),h=a.n(f);function y(e){var t=e.searchPath;return(0,l.jsx)("div",{className:h().root,children:(0,l.jsx)("div",{className:h().content,children:(0,l.jsxs)("h1",{children:["Error 404: ",t||""," Not Found"]})})})}var b=a(1664),x=a.n(b),v=/[, ]+/g,g=function(e){return e.replace(v,"")},D=function(e){var t=e.isOpenMenu,a=e.baseArticles,r=e.aboutUsData,o=e.path,c=e.filterData,p=e.filteredArticle,f=(0,i.useState)(!1),h=f[0],b=f[1],v=(0,i.useState)([]),D=v[0],j=v[1],k=(0,i.useState)(!1),N=k[0],S=k[1],C=(0,i.useState)(!1),A=C[0],T=C[1],Z=(0,i.useState)(null),M=Z[0],E=Z[1],I=(0,i.useState)(null),w=I[0],L=I[1],R=(0,i.useState)(!0),O=R[0],P=R[1],F=(0,_.useRouter)(),G=function(){0!==D.length&&b(!h)},K=function(e){0!==a.length&&j(a.filter((function(t){return!!t.SectionDuMenu&&t.SectionDuMenu[0]===e})))};return(0,i.useEffect)((function(){console.log({menuElements:D})}),[D]),(0,i.useEffect)((function(){if(o||0!==a.length||0!==r.length)switch(o){case"location":E(n.iD.location),T(!0);break;case"studio":E(n.iD.studio),T(!0);break;case"formation":E(n.iD.formation),K(n.iD.formation),T(!1),S(!0);break;case"benevolat":E(n.iD.benevolat),K(n.iD.benevolat),T(!1),S(!0);break;case"balado":E(n.iD.balado),K(n.iD.balado),T(!1),S(!0);break;case"video":E(n.iD.video),K(n.iD.video),T(!1),S(!0);break;case"expositions":E(n.iD.exposition),K(n.iD.exposition),T(!1),S(!0);break;case"appels":E(n.iD.appels),K(n.iD.appels),T(!1),S(!0);break;case"communiqueDePresse":E(n.iD.pressRelease),K(n.iD.pressRelease),T(!1),S(!0);break;case"dossier":E(n.iD.dossier),K(n.iD.dossier),T(!1),S(!0)}}),[o,a,r]),(0,i.useEffect)((function(){if(p){var e=g(p);console.log(e);var t=D.filter((function(t){return g(t.Titre)===e}));console.log({filteredData:t}),G(),L(t[0])}}),[p,D]),(0,i.useEffect)((function(){setTimeout((function(){P(!1)}),200)}),[]),A?(0,l.jsx)(d,{isOpenMenu:t,data:r,filterData:c,pageKey:M}):O?null:N?!t&&(0,l.jsx)(l.Fragment,{children:h||0===D.length?(0,l.jsx)(l.Fragment,{children:p&&(0,l.jsx)("div",{className:m().article,children:w&&(0,l.jsx)(u.Z,{articleProp:w,toggleDetails:G,setArticleChosen:L,styles:m(),path:o})})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"btn_close",onClick:function(){F.push("/")},children:(0,l.jsx)(s.Z,{})}),(0,l.jsx)("h1",{className:"generalTitle",children:localStorage.getItem("title")}),(0,l.jsx)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"generalContent",children:D.map((function(e){return(0,l.jsx)(x(),{href:"".concat(o,"/").concat(e.ID),children:(0,l.jsx)("li",{className:m().itemArticles,children:(0,l.jsx)("button",{onClick:function(){b(!0),L(e)},children:(0,l.jsx)("h1",{children:e.Titre})})})},e.ID)}))})]})}):(0,l.jsx)(y,{searchPath:o})}},8457:function(e,t,a){"use strict";a.r(t);var l=a(5893),i=a(6041);t.default=function(e){var t=e.baseArticles;return(0,l.jsx)(i.Z,{path:"balado",baseArticles:t,filteredArticle:"LaGangfranco-ontarienne\xe9pisode1"})}},4038:function(e){e.exports={App:"style_App___hpxu","salon-card":"style_salon-card__gOs7K","salon-card__description":"style_salon-card__description__Wtc4N","simplebar-scrollbar":"style_simplebar-scrollbar__YyUe_","simplebar-visible":"style_simplebar-visible__44dhK",expocontent:"style_expocontent__6F_fk",generalContent:"style_generalContent__ZbgYZ",generalContainer:"style_generalContainer__YRGyu",card:"style_card__JY5vD",cardEchantillon:"style_cardEchantillon__ymMiV",eventDate:"style_eventDate__QleZ3",blockInfoSuplEvent:"style_blockInfoSuplEvent__Zt2S8",infoSupl:"style_infoSupl__rAZZ4","h1--card":"style_h1--card__DW8tx","h3--card":"style_h3--card__kuL_q","p--card":"style_p--card__j6zmt",detail:"style_detail__ofk2h",block2:"style_block2__BhkPM",title:"style_title__S_AzW",datedetail:"style_datedetail__jpgDq",generalTitle:"style_generalTitle__KG8NY",article:"style_article__8I4oc",article_title:"style_article_title__10vea","embed-container":"style_embed-container__3TMcx",audio_player:"style_audio_player__G_6J0",article_body:"style_article_body__BUdx_",articleImg:"style_articleImg__plJAX",videocontainer:"style_videocontainer__Lrr_s",description_sec:"style_description_sec__lkGWn","simplebar-content-wrapper":"style_simplebar-content-wrapper__nqV7V","simplebar-content":"style_simplebar-content__eSwi3",cardContainer:"style_cardContainer__KxIru",itemArticles:"style_itemArticles__lxKS5",center:"style_center__gX_aZ",carousel:"style_carousel__th0ak","carousel-inner":"style_carousel-inner__pW2lk",right:"style_right__W3__B",left:"style_left__dbHI4",error:"style_error__u_Emg",correct:"style_correct__30iz2",audioframe:"style_audioframe__l3mD5",devenir:"style_devenir__Qd1SV",devenir_prevImg:"style_devenir_prevImg__cDtu9",principal:"style_principal__Oxsh8",container_form:"style_container_form__F0DiS",mediaContainer:"style_mediaContainer__IQAmS",mediaContainerLabel:"style_mediaContainerLabel__huvsw","custom-file-upload":"style_custom-file-upload__lrg24",formDescription:"style_formDescription__whb5S",nom:"style_nom__k3xBW",mediaItem:"style_mediaItem__Oh2D_",formText:"style_formText__wTlVa","form-control":"style_form-control__TwtuL",socialMediaLabel:"style_socialMediaLabel___jEb2"}},3547:function(e){e.exports={App:"style_App__2c_zd",root:"style_root__cdy4Y",content:"style_content__OAS_L"}}},function(e){e.O(0,[158,998,494,774,888,179],(function(){return t=9334,e(e.s=t);var t}));var t=e.O();_N_E=t}]);