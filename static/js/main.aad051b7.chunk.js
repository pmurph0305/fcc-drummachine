(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(18)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(7),c=n.n(o),r=(n(14),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),d=(n(15),function(e){function a(){var e,n;Object(r.a)(this,a);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).onKeyDown=function(e){e.key.toUpperCase()===n.props.keyVal&&n.onClick()},n.onClick=function(){document.getElementById(n.props.keyVal).play(),n.props.onPlaySound(n.props.keyIndex)},n}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props,a=e.keyVal,n=e.audioDesc,t=e.fileName;return i.a.createElement("button",{className:"drum-pad",id:n,onClick:this.onClick},a,i.a.createElement("audio",{className:"clip",id:a,src:"/fcc-drummachine/DrumSamples/"+t,type:"audio/wav"}))}}]),a}(i.a.Component)),p=(n(16),[{key:"Q",audioDesc:"Clap Clap",fileName:"Clap-clap.wav"},{key:"W",audioDesc:"Quarter Clap",fileName:"Quarter-clap.wav"},{key:"E",audioDesc:"Taxi Clap",fileName:"Taxi-clap.wav"},{key:"A",audioDesc:"Damn Hat",fileName:"Damn-hat.wav"},{key:"S",audioDesc:"Kraft Hat",fileName:"Kraft-hat.wav"},{key:"D",audioDesc:"Superb Hat",fileName:"Superb-hat.wav"},{key:"Z",audioDesc:"Dynamite Snare",fileName:"Dynamite-snare.wav"},{key:"X",audioDesc:"Lame Snare",fileName:"Lame-snare.wav"},{key:"C",audioDesc:"Hashbrown Kick",fileName:"Hashbrown-kick.wav"}]),y=function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(s.a)(this,Object(u.a)(a).call(this,e))).onPlaySound=function(e){e<p.length&&n.setState({display:p[e].audioDesc})},n.state={display:"None"},n}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"drum-machine",id:"drum-machine"},i.a.createElement("div",{className:"drum-key-container"},i.a.createElement("div",{className:"drum-key-grid"},p.map(function(a,n){return i.a.createElement(d,{key:a.key,keyVal:a.key,audioDesc:a.audioDesc,fileName:a.fileName,onPlaySound:e.onPlaySound,keyIndex:n})}))),i.a.createElement("div",{className:"drum-display-container"},i.a.createElement("label",{htmlFor:"display",className:"drum-display-label"},"Last Sound"),i.a.createElement("p",{className:"drum-display",id:"display"},this.state.display)))}}]),a}(i.a.Component),k=(n(17),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.aad051b7.chunk.js.map