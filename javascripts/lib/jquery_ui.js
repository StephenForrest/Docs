/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(r){}s(e)},t.widget=function(i,n,s){var r,a,o,u,h={},d=i.split(".")[0];i=i.split(".")[1],r=d+"-"+i,s||(s=n,n=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[d]=t[d]||{},a=t[d][i],o=t[d][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new o(t,i)},t.extend(o,a,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),u=new n,u.options=t.widget.extend({},u.options),t.each(s,function(i,s){return t.isFunction(s)?(h[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,r=this._superApply;return this._super=t,this._superApply=e,i=s.apply(this,arguments),this._super=n,this._superApply=r,i}}(),e):(h[i]=s,e)}),o.prototype=t.widget.extend(u,{widgetEventPrefix:a?u.widgetEventPrefix:i},h,{constructor:o,namespace:d,widgetName:i,widgetFullName:r}),a?(t.each(a._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete a._childConstructors):n._childConstructors.push(o),t.widget.bridge(i,o)},t.widget.extend=function(i){for(var s,r,a=n.call(arguments,1),o=0,u=a.length;u>o;o++)for(s in a[o])r=a[o][s],a[o].hasOwnProperty(s)&&r!==e&&(i[s]=t.isPlainObject(r)?t.isPlainObject(i[s])?t.widget.extend({},i[s],r):t.widget.extend({},r):r);return i},t.widget.bridge=function(i,s){var r=s.prototype.widgetFullName||i;t.fn[i]=function(a){var o="string"==typeof a,u=n.call(arguments,1),h=this;return a=!o&&u.length?t.widget.extend.apply(null,[a].concat(u)):a,this.each(o?function(){var n,s=t.data(this,r);return s?t.isFunction(s[a])&&"_"!==a.charAt(0)?(n=s[a].apply(s,u),n!==s&&n!==e?(h=n&&n.jquery?h.pushStack(n.get()):n,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}:function(){var e=t.data(this,r);e?e.option(a||{})._init():t.data(this,r,new s(a,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,r,a,o=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(o={},s=i.split("."),i=s.shift(),s.length){for(r=o[i]=t.widget.extend({},this.options[i]),a=0;s.length-1>a;a++)r[s[a]]=r[s[a]]||{},r=r[s[a]];if(i=s.pop(),n===e)return r[i]===e?null:r[i];r[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];o[i]=n}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,s){var r,a=this;"boolean"!=typeof i&&(s=n,n=i,i=!1),s?(n=r=t(n),this.bindings=this.bindings.add(n)):(s=n,n=this.element,r=this.widget()),t.each(s,function(s,o){function u(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):e}"string"!=typeof o&&(u.guid=o.guid=o.guid||u.guid||t.guid++);var h=s.match(/^(\w+)\s*(.*)$/),d=h[1]+a.eventNamespace,l=h[2];l?r.delegate(l,d,u):n.bind(d,u)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,r,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(s in r)s in i||(i[s]=r[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,r){"string"==typeof s&&(s={effect:s});var a,o=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=r,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[o]?n[e](s):o!==e&&n[o]?n[o](s.duration,s.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}})}(jQuery);