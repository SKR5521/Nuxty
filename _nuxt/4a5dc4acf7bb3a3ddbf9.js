(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{315:function(t,e,n){var content=n(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("b34ef056",content,!0,{sourceMap:!1})},316:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".v-speed-dial{position:relative}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top:not(.v-speed-dial--absolute){top:16px}.v-speed-dial--top.v-speed-dial--absolute{top:50%;transform:translateY(-50%)}.v-speed-dial--bottom:not(.v-speed-dial--absolute){bottom:16px}.v-speed-dial--bottom.v-speed-dial--absolute{bottom:50%;transform:translateY(50%)}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;position:absolute}",""])},317:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("c0e04dbe",content,!0,{sourceMap:!1})},318:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}.v-tooltip__content--fixed{position:fixed}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}",""])},343:function(t,e,n){"use strict";n(12),n(317);var o=n(13),r=n(135),l=n(55),c=n(76),d=n(136),h=n(27),v=n(1),f=n(6);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={name:"v-tooltip",mixins:[o.a,r.a,l.a,c.a,d.a,h.a],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=this.isAttached?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),this.calcXOverflow(r,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=this.isAttached?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),this.calcYOverflow(o+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.b)(this.maxWidth),minWidth:Object(v.b)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.h)(this,"activator",!0)&&Object(f.a)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===Object(v.h)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,n=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},m(e,this.contentClass,!0),m(e,"menuable__content__active",this.isActive),m(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[n]),this.genActivator()])}}},344:function(t,e,n){"use strict";n(32),n(75),n(30),n(31),n(315);var o=n(27),r=n(52),l=n(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=n(54);e.a={name:"v-speed-dial",directives:{ClickOutside:c.a},mixins:[r.a,o.a,l],props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},e="v-speed-dial--direction-"+this.direction,n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return b.tag&&void 0!==b.componentOptions&&"v-btn"===b.componentOptions.Ctor.options.name?t("div",{style:{transitionDelay:.05*++o+"s"},key:i},[b]):(b.key=i,b)}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,r])}}},460:function(t,e,n){var content=n(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("21208c01",content,!0,{sourceMap:!1})},461:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".application--is-rtl .v-carousel__prev{left:auto;right:5px}.application--is-rtl .v-carousel__next{left:5px;right:auto}.v-carousel{width:100%;position:relative;overflow:hidden;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-carousel__next,.v-carousel__prev{position:absolute;top:50%;z-index:1;transform:translateY(-50%)}.v-carousel__next .v-btn,.v-carousel__prev .v-btn{margin:0;height:auto;width:auto}.v-carousel__next .v-btn i,.v-carousel__prev .v-btn i{font-size:48px}.v-carousel__next .v-btn:hover,.v-carousel__prev .v-btn:hover{background:none}.v-carousel__prev{left:5px}.v-carousel__next{right:5px}.v-carousel__controls{background:rgba(0,0,0,.5);align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px!important}.v-carousel__controls__item .v-icon{opacity:.5;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}",""])},462:function(t,e,n){var content=n(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("00acd671",content,!0,{sourceMap:!1})},463:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".v-window__container{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""])},464:function(t,e,n){var content=n(465);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("039e4037",content,!0,{sourceMap:!1})},465:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".v-item-group{flex:0 1 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group>*{cursor:pointer;flex:1 1 auto}",""])},510:function(t,e,n){"use strict";n(12),n(460),n(177),n(462),n(30),n(31),n(464);var o=n(0);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.a.extend({name:"proxyable",model:{prop:t,event:e},props:r({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:r({},t,(function(t){this.internalLazyValue=t}))})}(),c=n(8),d=n(3),h=n(6),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},f=Object(d.a)(l,c.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return v({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(h.b)("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t,n)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),m=(f.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),n(138)),w=f.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:m.a},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){return this.isBooted?"v-window-"+(this.vertical?"y":"x")+(this.internalReverse===!this.$vuetify.rtl?"-reverse":"")+"-transition":""},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick((function(){return t.isBooted=!0}))},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var data={staticClass:"v-window",directives:[]};if(!this.touchless){var e=this.touch||{left:this.next,right:this.prev};data.directives.push({name:"touch",value:e})}return t("div",data,[this.genContainer()])}}),x=n(64),y=n(41),_=f.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return f.options.computed.classes.call(this)}}}),V=n(1);e.a=w.extend({name:"v-carousel",props:{cycle:{type:Boolean,default:!0},delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideControls:Boolean,hideDelimiters:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"}},data:function(){return{changedByDelimiters:!1,internalHeight:this.height,slideTimeout:void 0}},computed:{isDark:function(){return this.dark||!this.light}},watch:{internalValue:function(t){this.restartTimeout(),this.$listeners.input&&this.$emit("input",t)},interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},mounted:function(){this.$listeners.input&&Object(h.c)("@input","@change",this),this.startTimeout()},methods:{genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls"},[this.genItems()])},genIcon:function(t,e,n){var o=this;return this.$createElement("div",{staticClass:"v-carousel__"+t},[this.$createElement(x.a,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.t("$vuetify.carousel."+t)},on:{click:function(){o.changedByDelimiters=!0,n()}}},[this.$createElement(y.a,{props:{size:"46px"}},e)])])},genIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;e&&"string"==typeof e&&t.push(this.genIcon("prev",e,this.prev));var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;return n&&"string"==typeof n&&t.push(this.genIcon("next",n,this.next)),t},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var o=this.$createElement(x.a,{class:{"v-carousel__controls__item":!0},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(y.a,{props:{size:18}},this.delimiterIcon)]);n.push(o)}return this.$createElement(_,{props:{value:this.internalValue},on:{change:function(e){t.internalValue=e}}},n)},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,(requestAnimationFrame||setTimeout)(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:w.options.methods.updateReverse.call(this,t,e)}},render:function(t){var e=[],data={staticClass:"v-window v-carousel",style:{height:Object(V.b)(this.height)},directives:[]};return this.touchless||data.directives.push({name:"touch",value:{left:this.next,right:this.prev}}),this.hideControls||e.push(this.genIcons()),this.hideDelimiters||e.push(this.genDelimiters()),t("div",data,[this.genContainer(),e])}})},511:function(t,e,n){"use strict";var o=n(95),r=n(164),l=n(138),c=n(1),d=n(3),h=Object(d.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:l.a},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame((function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1}))},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(c.b)(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var n=this,o=this.windowGroup.isBooted;o&&(this.done=e),requestAnimationFrame((function(){if(!n.computedTransition)return e();n.windowGroup.internalHeight=Object(c.b)(t.clientHeight),!o&&setTimeout(e,100)}))},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var div=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[div])}}),v=n(175),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=h.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(v.a,{staticClass:"v-carousel__item",props:f({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners},this.$slots.default)]},onBeforeEnter:function(){},onEnter:function(){},onAfterEnter:function(){},onBeforeLeave:function(){},onEnterCancelled:function(){}}})}}]);