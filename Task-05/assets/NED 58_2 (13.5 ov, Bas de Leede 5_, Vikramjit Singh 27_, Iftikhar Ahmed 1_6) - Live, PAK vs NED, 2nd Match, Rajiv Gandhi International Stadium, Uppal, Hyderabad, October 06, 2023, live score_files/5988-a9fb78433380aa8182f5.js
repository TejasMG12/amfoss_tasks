"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5988],{72131:function(t,e,n){var o=n(27378),i=n(11012),a=n(39156),r=n(9091),s=n(60042),c=n.n(s),p=n(15140),u=n(98878),d=n(71244),l=n(17979),b=n(28496),m=n(24246),v=(0,o.forwardRef)((function(t,e){var n,s,g=t.children,A=t.placement,y=t.className,f=t.arrow,k=void 0===f||f,h=t.columns,I=void 0===h?1:h,E=t.options,P=t.trigger,T=void 0===P?i.f.HOVER:P,N=t.distance,S=t.columnMinWidth,R=void 0===S?220:S,_=t.closeOnSelect,w=void 0===_||_,U=t.limitHeight,W=void 0===U||U,F=t.itemSizeType,G=void 0===F?a.tC.MD:F,O=t.disableFlip,x=void 0!==O&&O,C=t.zIndex,V=t.data,Z=t.wrapperClassName,Y=(0,o.useContext)(p.ZP).device.isMobile,j=(0,o.useState)((function(){var t=0;return Y||(t=R*I),t})),D=j[0],M=j[1],L=(0,d.Z)(e),B=c()("ds-text-typo-mid2 ds-justify-center ds-overflow-ellipsis",y);(0,u.Z)((function(){if(L.current){var t=L.current.getElement().clientWidth;t>D&&M(t)}}),[]),E.length>0&&(n=null,s=null,E[0].title?s=E:E[0].anchorType&&(n=E));return(0,m.jsx)(i.Z,{wrapperClassName:Z,className:"ds-dropdown",ref:L,placement:A,arrow:k,trigger:T,contentClassName:"ds-bg-fill-content-prime ds-shadow-elevated ds-rounded-lg",content:n?(0,m.jsx)("div",{className:c()({"ds-w-full":1===I,"ds-px-2":I>1},"ds-py-2"),style:{minWidth:D,zIndex:1},children:(0,m.jsx)(a.ZP,{className:c()(B,"ds-w-full ds-grid ds-grid-cols-".concat(I," ds-items-center ds-gap-x-2"),{"ds-max-h-96 ds-overflow-y-auto":W}),size:G,children:n.map((function(t,e){var n,o,s,p;return t.options?(0,m.jsx)(a.ZP.Item,{anchorType:t.anchorType,title:null!==(n=null===(o=t.data)||void 0===o?void 0:o.altText)&&void 0!==n?n:t.label,children:(0,m.jsx)(v,{className:c()(["ds-grid ds-grid-cols-".concat(I," ds-items-center"),{"ds-font-bold":t.selected}]),options:t.options,trigger:i.f.HOVER,placement:r.zJ.LEFT,nested:!0,children:(0,m.jsx)("div",{className:"ds-w-full",children:t.label})},e)}):(0,m.jsx)(a.ZP.Item,{title:null!==(s=null===(p=t.data)||void 0===p?void 0:p.altText)&&void 0!==s?s:t.label,anchorType:(0,l.k)(t.anchorType,(function(){L.current&&w&&L.current.close()})),className:t.selected?"ds-font-bold":"",children:t.label},e)}))})}):s?(0,m.jsx)("div",{className:c()(B,{"ds-max-h-96 ds-overflow-y-auto":W,"ds-w-full":1===I}),style:{minWidth:D,zIndex:1},children:s.map((function(t,e){return(0,m.jsxs)("div",{children:[(0,m.jsx)(b.Z,{title:t.title,size:b.t.MD,className:"ds-py-3 ds-px-4 ds-border-b ds-border-line-default-translucent ds-mb-2"}),(0,m.jsx)(a.ZP,{className:c()(B,"ds-w-full"),size:G,children:t.options.map((function(t,e){var n,o;return(0,m.jsx)(a.ZP.Item,{title:null!==(n=null===(o=t.data)||void 0===o?void 0:o.altText)&&void 0!==n?n:t.label,anchorType:(0,l.k)(t.anchorType,(function(){L.current&&w&&L.current.close()})),className:t.selected?"ds-font-bold":"",children:t.label},e)}))})]},e)}))}):null,distance:{y:N},closeOnSelect:w,disableFlip:x,zIndex:C,data:V,children:g})}));v.displayName="DSDropdown",e.Z=v},54304:function(t,e,n){n.d(e,{s:function(){return i}});var o=n(17452),i={exclusions:{unit:"exclusions",type:o.Ft.OUT_OF_PAGE,attributes:{pos:"exclusions"}},overlay:{unit:"overlay",type:o.Ft.OUT_OF_PAGE,attributes:{pos:"outofpage"}},wallpaper:{unit:"wallpaper",type:o.Ft.IN_PAGE,attributes:{pos:"wallpaper"}},scoresCarousel:{unit:"scoresCarousel",type:o.Ft.IN_PAGE,attributes:{pos:"scoresCarousel"}},presbyHeader:{unit:"presbyHeader",type:o.Ft.IN_PAGE,attributes:{pos:"presbyHeader"}},bannerTop:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerTopRoW:{unit:"bannerRoW",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerBottom:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottom2:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom2"}},bannerNewBottom:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"newbottom"}},bannerBottomRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},longstrip:{unit:"longstrip",type:o.Ft.IN_PAGE,attributes:{pos:"longstrip"}},longstrip2:{unit:"longstrip2",type:o.Ft.IN_PAGE,attributes:{pos:"longstrip2"}},incontentstrip:{unit:"incontentstrip",type:o.Ft.IN_PAGE,attributes:{pos:"incontentstrip"}},incontent:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentNewBottom:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"newbottom",kvpos:"top"}},incontentNewTop:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"newtop",kvpos:"newtop"}},incontentRoW:{unit:"incontentRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},promobox:{unit:"promobox",type:o.Ft.IN_PAGE,attributes:{pos:"promobox"}},promoboxTop:{unit:"promobox",type:o.Ft.IN_PAGE,attributes:{pos:"promobox",kvpos:"top"}},incontent2:{unit:"incontent2",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent2RoW:{unit:"incontent2RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent3:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3RoW:{unit:"incontent3RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3Bottom2:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom2"}},incontent4:{unit:"incontent4",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"newtop"}},incontentStory:{unit:"incontentStory",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentStoryRoW:{unit:"incontentStoryRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},promoboxBottom:{unit:"promobox",type:o.Ft.IN_VIEW,attributes:{pos:"promobox",kvpos:"bottom"}},bannerSticky:{unit:"bannerSticky",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},bannerStickyRoW:{unit:"bannerStickyRoW",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},scoresCarouselApp:{unit:"scoresCarouselApp",type:o.Ft.IN_PAGE,attributes:{pos:"scoresCarouselApp",kvpos:"hsb"}},incontentApp:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentAppRoW:{unit:"incontentRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentApp2:{unit:"incontent2",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp2RoW:{unit:"incontent2RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp3:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontentApp3RoW:{unit:"incontent3RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},bannerTopApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerTopAppRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerBottomApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottomAppRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerNewBottomApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"newbottom"}}}},61261:function(t,e,n){n.d(e,{B:function(){return a},o:function(){return r}});var o=n(92438),i=n(8325),a=function(t){return"".concat((0,i.P_)(t),"/espncricinfo-writers-index")},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,o.ij)("".concat((0,i.P_)(t),"/author/").concat(e.slug,"-").concat(e.id),n)}},45672:function(t,e,n){n.d(e,{H0:function(){return m},Rm:function(){return v},KY:function(){return g},dz:function(){return A},RM:function(){return y},UU:function(){return f},PE:function(){return k},o5:function(){return h},tG:function(){return I},Yu:function(){return E},K$:function(){return P},Sm:function(){return T},Qs:function(){return N},WS:function(){return S},sJ:function(){return R},bh:function(){return _},rr:function(){return w},tK:function(){return U},IN:function(){return W}});var o,i=n(1717),a=n(73627),r=n(54304),s=n(17452),c=n(6129),p=n(47010);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=(o={},(0,i.Z)(o,c.nA.HOME,{webAdUnitPath:"game",appAdUnitPath:"game",videoAdUnitPath:"game/game",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.SCORECARD,{webAdUnitPath:"game/scorecard",appAdUnitPath:"game/scorecard",videoAdUnitPath:"game/scorecard",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.COMMENTARY,{webAdUnitPath:"game/commentary",appAdUnitPath:"game/commentary",videoAdUnitPath:"game/commentary",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.REPORT,{webAdUnitPath:"game/report",appAdUnitPath:"game/report",videoAdUnitPath:"game/report",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.ARTICLE}),(0,i.Z)(o,c.nA.PREVIEW,{webAdUnitPath:"game/preview",appAdUnitPath:"game/preview",videoAdUnitPath:"game/preview",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.ARTICLE}),(0,i.Z)(o,c.nA.LIVE_BLOG,{webAdUnitPath:"game/liveblog",appAdUnitPath:"game/liveblog",videoAdUnitPath:"game/liveblog",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.STATISTICS,{webAdUnitPath:"game/statistics",appAdUnitPath:"game/statistics",videoAdUnitPath:"game/statistics",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.INNING_OVERS,{webAdUnitPath:"game/overs-comparison",appAdUnitPath:"game/overs-comparison",videoAdUnitPath:"game/overs-comparison",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.FANTASY_PICK,{webAdUnitPath:"game/fantasy-xi",appAdUnitPath:"game/fantasy-xi",videoAdUnitPath:"game/fantasy-xi",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.COVERAGE,{webAdUnitPath:"game/coverage",appAdUnitPath:"game/coverage",videoAdUnitPath:"game/coverage",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.VIDEOS,{webAdUnitPath:"game/video",appAdUnitPath:"game/video",videoAdUnitPath:"game/video",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.GALLERIES,{webAdUnitPath:"game/galleries",appAdUnitPath:"game/galleries",videoAdUnitPath:"game/galleries",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.IMAGES,{webAdUnitPath:"game/photos",appAdUnitPath:"game/photos",videoAdUnitPath:"game/photos",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.TEAM_PLAYERS,{webAdUnitPath:"game/playingxi",appAdUnitPath:"game/playingxi",videoAdUnitPath:"game/playingxi",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.SQUAD_PLAYERS,{webAdUnitPath:"game/squads",appAdUnitPath:"game/squads",videoAdUnitPath:"game/squads",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.SMART_SCORECARD,{webAdUnitPath:"game/mvp",appAdUnitPath:"game/mvp",videoAdUnitPath:"game/mvp",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),(0,i.Z)(o,c.nA.STANDINGS,{webAdUnitPath:"game/table",appAdUnitPath:"game/table",videoAdUnitPath:"game/table",videoSiteSection:"espn:cricinfo:cricket:gamepackage",taboolaType:s.gT.CATEGORY}),o),b=function(t,e,n){var o=l[t],i=(0,p.VS)(e);return{gpt:{webAdUnitPath:o.webAdUnitPath,appAdUnitPath:o.appAdUnitPath,attributes:d({pgtyp:"game",kvpt:"livescorecard",kvsite:e.series.slug,kvseriesid:e.series.objectId,kvmatchid:e.objectId,kvbattingteam:null===i||void 0===i?void 0:i.slug},n),units:d(d({},r.s),{},{longstripGamepackageLeft:{unit:"longstripGamepackage",type:s.Ft.IN_PAGE,attributes:{pos:"longstripGamepackage",kvpos:"left"}},longstripGamepackageRight:{unit:"longstripGamepackage",type:s.Ft.IN_PAGE,attributes:{pos:"longstripGamepackage",kvpos:"right"}},presbyMobile:{unit:"presbyMobile",type:s.Ft.IN_PAGE,attributes:{pos:"presbyMobile",kvpos:"top"}},instream:{unit:"instream",type:s.Ft.IN_PAGE,attributes:{pos:"instream"}},nativeText:{unit:"nativeText",type:s.Ft.IN_VIEW,attributes:{pos:"nativeText",kvpos:"top"}},nativeText2:{unit:"nativeText",type:s.Ft.IN_VIEW,attributes:{pos:"nativeText",kvpos:"middle"}},nativeText3:{unit:"nativeText",type:s.Ft.IN_VIEW,attributes:{pos:"nativeText",kvpos:"bottom"}},bannerNative:{unit:"bannerNative",type:s.Ft.IN_VIEW,attributes:{pos:"bannerNative",kvpos:"newbottom"}}})},video:{adUnitPath:o.videoAdUnitPath,siteSection:o.videoSiteSection},taboola:{type:o.taboolaType}}},m=function(t){var e=t.match;return b(c.nA.HOME,e)},v=function(t){var e,n=t.match;return n.state===a.xdB.POST&&(e={kvpt:"archivedscorecard"}),b(c.nA.SCORECARD,n,e)},g=function(t){var e=t.match;return b(c.nA.COMMENTARY,e)},A=function(t){var e,n=t.match,o=t.content,i=null===(e=o.storyDetails.story.storyGenre)||void 0===e?void 0:e.slug;return o.storyDetails.story.genreType===a.MzU.FANTASY_PICK&&(i="fantasypicks"),b(c.nA.REPORT,n,{kvsite:i})},y=function(t){var e,n=t.match,o=t.content,i=null===(e=o.storyDetails.story.storyGenre)||void 0===e?void 0:e.slug;return o.storyDetails.story.genreType===a.MzU.FANTASY_PICK&&(i="fantasypicks"),b(c.nA.PREVIEW,n,{kvsite:i})},f=function(t){var e,n=t.match,o=t.content,i=null===(e=o.storyDetails.story.storyGenre)||void 0===e?void 0:e.slug;return o.storyDetails.story.genreType===a.MzU.FANTASY_PICK&&(i="fantasypicks"),b(c.nA.LIVE_BLOG,n,{kvsite:i})},k=function(t){var e=t.match;return b(c.nA.STATISTICS,e)},h=function(t){var e=t.match;return b(c.nA.INNING_OVERS,e)},I=function(t){var e=t.match;return b(c.nA.FANTASY_PICK,e,{kvsite:"fantasypicks"})},E=function(t){var e=t.match;return b(c.nA.COVERAGE,e)},P=function(t){var e=t.match;return b(c.nA.VIDEOS,e)},T=function(t){var e=t.match;return b(c.nA.GALLERIES,e)},N=function(t){var e=t.match;return b(c.nA.IMAGES,e)},S=function(t){var e=t.match;return b(c.nA.TEAM_PLAYERS,e)},R=function(t){var e=t.match;return b(c.nA.SQUAD_PLAYERS,e)},_=function(t){var e=t.match;return b(c.nA.SMART_SCORECARD,e)},w=function(t){var e=t.match;return b(c.nA.STANDINGS,e)},U=function(t){var e=null,n=(0,p.VS)(t.match);return n&&(e=n.slug),e},W=function(t,e){var n=null,o=e.match,i=e.content,r=i.recentBallCommentary,s=i.innings,c=i.supportInfo.liveSummary,p=o.stage,u=o.teams,d=o.tossWinnerTeamId,l=o.statusEng;if(p!==a.ZfS.RUNNING)return n;var b=u.some((function(t){return!!t.score}));d!==t.tossWinnerTeamId&&d&&!b&&(n="toss"),t.tossWinnerTeamId=d;var m=((null===r||void 0===r?void 0:r.ballComments)||[]).slice(0,6).reverse(),v=null;if(null!==o.liveInning&&s[o.liveInning-1]){var g=s[o.liveInning-1],A="team-".concat(g.inningNumber);t[A]<200&&g.runs&&g.runs>=200?v="team200":t[A]<300&&g.runs&&g.runs>=300?v="team300":t[A]<400&&g.runs&&g.runs>=400&&(v="team400"),t[A]=g.runs,c&&c.batsmen.forEach((function(e){var n="".concat(e.player.id,"-bat50");t[n]<50&&e.runs>=50&&(v="bat50"),t[n]=e.runs;var o="".concat(e.player.id,"-bat100");t[o]<100&&e.runs>=100&&(v="bat100"),t[o]=e.runs}));var y=g.wickets;t.wickets<3&&3===y?v="3wicket":t.wickets<5&&5===y?v="5wicket":t.wickets<8&&8===y?v="8wicket":t.wickets<10&&10===y&&(v="allout"),t.wickets=y}m.forEach((function(t){t.isSix&&(v="six"),t.isFour&&(v="four"),t.isWicket&&(v="wicket")})),null!==v&&(t.recentBallEvent=v,n=v);var f=(null===l||void 0===l?void 0:l.toLowerCase())||"";return n||("innings break"===f?n="inningsbreak":"drinks"===f?n="drinksbreak":"tea"===f?n="teabreak":"lunch"===f?n="lunchbreak":"dinner"===f&&(n="dinnerbreak")),t.kvEvent=n,n}}}]);