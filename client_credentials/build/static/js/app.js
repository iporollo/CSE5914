!function(e){function t(t){for(var n,o,c=t[0],u=t[1],s=t[2],d=0,h=[];d<c.length;d++)o=c[d],r[o]&&h.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);h.length;)h.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={1:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([28,0,3]),a()}({13:function(e,t,a){"use strict";var n=a(2),r=a(3),i=a(5),o=a(4),c=a(6),u=a(1),s=a(0),l=a.n(s),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).canvas=l.a.createRef(),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props.audioData,t=this.canvas.current,a=t.height,n=t.width,r=t.getContext("2d"),i=0,o=1*n/e.length;r.lineWidth=2,r.strokeStyle="#000000",r.clearRect(0,0,n,a),r.beginPath(),r.moveTo(0,a/2);var c=!0,u=!1,s=void 0;try{for(var l,d=e[Symbol.iterator]();!(c=(l=d.next()).done);c=!0){var h=l.value/255*a;r.lineTo(i,h),i+=o}}catch(p){u=!0,s=p}finally{try{c||null==d.return||d.return()}finally{if(u)throw s}}r.lineTo(i,a/2),r.stroke()}},{key:"render",value:function(){return l.a.createElement("canvas",{width:"300",height:"300",ref:this.canvas})}}]),t}(s.Component);a.d(t,"a",function(){return h});var h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).audioContext=void 0,a.analyser=void 0,a.dataArray=void 0,a.source=void 0,a.rafId=void 0,a.state={audioData:new Uint8Array(0)},a.tick=a.tick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.audioContext=new window.AudioContext,this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(this.props.audio),this.source.connect(this.analyser),this.rafId=requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rafId),this.analyser.disconnect(),this.source.disconnect()}},{key:"tick",value:function(){this.analyser.getByteTimeDomainData(this.dataArray),this.setState({audioData:this.dataArray}),this.rafId=requestAnimationFrame(this.tick)}},{key:"render",value:function(){return l.a.createElement(d,{audioData:this.state.audioData})}}]),t}(l.a.Component)},22:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},28:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n,r=a(7),i=a.n(r),o=a(10),c=a(2),u=a(3),s=a(5),l=a(4),d=a(6),h=a(1),p=a(0),f=a.n(p),m=a(13),v=a(22),b=a.n(v),y=a(15),g=a(25),S=Object(g.a)([function(e){return e.mediaStream}],function(e){return e.mediaStream});!function(e){e.SET_MEDIASTREAM="[Media] SET_MEDIASTREAM"}(n||(n={}));a(36);var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={audio:null},a.toggleMicrophone=a.toggleMicrophone.bind(Object(h.a)(Object(h.a)(a))),a._handleSubmit=a._handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"setAudioLocalStore",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:t=e.sent,this.setState({audio:t},function(){a._handleSubmit()});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMicrophone",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.mediaStream?((t=this.props.mediaStream).getTracks().forEach(function(e){e.enabled=!0}),this.setState({audio:t},function(){a._handleSubmit()})):this.setAudioLocalStore();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"stopMicrophone",value:function(){this.state.audio.getTracks().forEach(function(e){e.enabled=!1}),this._handleSubmit(),this.setState({audio:null})}},{key:"toggleMicrophone",value:function(){this.state.audio?this.stopMicrophone():this.getMicrophone()}},{key:"_handleSubmit",value:function(){this.props.handleSubmit(this.state.audio)}},{key:"render",value:function(){return f.a.createElement("div",{className:"App"},f.a.createElement("header",{className:"App-header"},f.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),f.a.createElement("p",null,"Edit ",f.a.createElement("code",null,"src/App.tsx")," and save to reload."),f.a.createElement("p",null,"Testing Travis"),f.a.createElement("p",null,"Testing the text input"),f.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),f.a.createElement("button",{onClick:this.toggleMicrophone},this.state.audio?"Stop microphone":"Get microphone input"),this.state.audio?f.a.createElement(m.a,{audio:this.state.audio}):"")}}]),t}(f.a.Component),O={handleSubmit:function(e){return{type:n.SET_MEDIASTREAM,payload:{mediaStream:e}}}},E=Object(y.b)(function(e){return{mediaStream:S(e)}},O)(j),k=a(12),A=a.n(k),M=a(26),w=a.n(M),x=a(9),T=a(27),_={mediaStream:null};var D={mediaStream:_},C=Object(x.c)({mediaStream:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_MEDIASTREAM:var a=t.payload.mediaStream;return Object(T.a)({},e,{mediaStream:a});default:return _}}}),I=Object(x.d)(C,D,Object(x.a)(w.a));a(41);A.a.render(f.a.createElement(y.a,{store:I},f.a.createElement(E,null)),document.getElementById("root"))}});
//# sourceMappingURL=app.js.map