(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2371df"],{fa6d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticStyle:{"padding-bottom":"10px"}},[e._v(e._s(e.$t("exclude_tips1")))]),r("p",{staticStyle:{"padding-bottom":"10px"}},[e._v(e._s(e.$t("exclude_tips2")))]),r("List",{attrs:{header:e.$t("exclude_tips3"),"item-layout":"vertical",size:"small"}},[e._l(e.cfg.Excludes,(function(t,n){return r("ListItem",{key:t},[e._v("\n          "+e._s(t)+"\n          "),r("template",{slot:"extra"},[r("li",[r("a",{on:{click:function(t){return e.remove(n)}}},[e._v(e._s(e.$t("delete")))])])])],2)})),r("ListItem",[r("Input",{attrs:{search:"","enter-button":e.$t("add"),placeholder:"Photoshop.exe"},on:{"on-search":e.add},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],2)],1)},c=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("5880");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"exclude",data:function(){return{value:""}},computed:i({},Object(o["mapGetters"])(["cfg"])),methods:{remove:function(e){this.cfg.Excludes.splice(e,1)},add:function(){-1!==this.value.indexOf(".")?(this.cfg.Excludes.push(this.value),this.value=""):this.$Message.error(this.$t("exclude_warning"))}}},u=l,p=r("2877"),d=Object(p["a"])(u,n,c,!1,null,null,null);t["default"]=d.exports}}]);