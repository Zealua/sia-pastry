(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,r){e.exports=r(297)},117:function(e,t,r){},296:function(e,t,r){},297:function(e,t,r){"use strict";r.r(t);var a=r(53),n=r(54),s=r(56),l=r(55),i=r(57),o=r(0),c=r.n(o),p=(r(117),r(113)),u=r(28),m=r(114),h=(r(291),{apiKey:"AIzaSyAPysSsIa14Q9XjwykIA20T8CXSVV4L0Jc",authDomain:"testflayhit.firebaseapp.com",databaseURL:"https://testflayhit.firebaseio.com",projectId:"testflayhit",storageBucket:"testflayhit.appspot.com",messagingSenderId:"710115011937"}),g=r(29),P=r.n(g),w=r(80),E=(r(296),function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={person:null,setSensetive:1,setFront:1},r.setSens=function(e){var t=e.target.value;console.log("event"+t),r.setState({setSensetive:t})},r.setFrontF=function(e){r.setState({setFront:e.target.value})},r}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.a,{type:"push",path:"hits"},function(t){var r=t.runMutation;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",size:"12",className:"butnSens",onChange:e.setSens}),c.a.createElement("button",{"data-testid":"test-push",onClick:Object(w.a)(P.a.mark(function t(){var a,n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({PARAM:e.state.setSensetive});case 2:a=t.sent,n=a.key,e.setState({pushedKey:n}),console.log("key"+n);case 6:case"end":return t.stop()}},t)}))}," set SenSyvity"),c.a.createElement("br",null),c.a.createElement("input",{type:"number",size:"17",className:"butnSens",onChange:e.setFrontF}),c.a.createElement("button",{"data-testid":"test-push",onClick:Object(w.a)(P.a.mark(function t(){var a,n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({FRONT:e.state.setFront});case 2:a=t.sent,n=a.key,e.setState({pushedKey:n}),console.log("key"+n);case 6:case"end":return t.stop()}},t)}))}," set Front"))}))}}]),t}(o.Component));r.d(t,"default",function(){return b});var f={fontFamily:"sans-serif"},b=function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={pushedKey:""},r.hitProper={part:0,power:0,long:0,span:0,time:0,counter:0},r.power={Part1:0,Part2:0,Part3:0,Part4:0},r}return Object(i.a)(t,e),Object(n.a)(t,[{key:"destructuring",value:function(e){console.log("String"+e),void 0!==e&&0===e.indexOf(":")&&(this.hitProper.part=e.slice(1,2),this.hitProper.long=e.slice(3,e.indexOf(":",3)),this.hitProper.power=e.slice(e.indexOf(":",3)+1,e.indexOf(":",10)),this.hitProper.span=e.slice(e.indexOf(":",9)+1)),this.setPowerProgress(this.hitProper.part)}},{key:"setPowerProgress",value:function(e){switch(e){case"1":for(var t in this.power)this.power[t]=0;this.power.Part1=this.hitProper.power;break;case"2":for(var r in this.power)this.power[r]=0;this.power.Part2=this.hitProper.power;break;case"3":for(var a in this.power)this.power[a]=0;this.power.Part3=this.hitProper.power;break;case"4":for(var n in this.power)this.power[n]=0;this.power.Part4=this.hitProper.power}}},{key:"destructuringJson",value:function(e){console.log("string"+e),this.hitProper.part=e.part,this.hitProper.long=e.long,this.hitProper.power=e.power,this.hitProper.span=e.incr,this.hitProper.time=e.time,this.setPowerProgress(this.hitProper.part)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:f},c.a.createElement(u.c,Object.assign({firebase:m},h),c.a.createElement(u.b,{path:"hits/",orderByKey:!0},function(t){e.hitProper.counter++;var r=t.value,a=[],n=[],s=[],l="";if(null!==r){for(var i in r)for(var o in a.push(r[i]),console.log("hitdata"),console.log(a),r[i])"original"===o||("PARAM"===o?n.push(r[i].PARAM):"FRONT"===o&&s.push(r[i].FRONT));console.log(n),console.log("check"+a[a.length-1]),e.destructuringJson(a[a.length-1]),l=e.hitProper.span<150?"HIT":"PUSH !!!"}return c.a.createElement("div",{className:"bigText"},c.a.createElement("h1",null,"HIT SYSTEM"),c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"http://www.finsmes.com/wp-content/uploads/2018/11/visiblebody.png",alt:""}),c.a.createElement("ul",{className:"list-group list-group-horizontal"},c.a.createElement("li",{className:"list-group-item marg"},c.a.createElement("ul",{className:"list-group marg "},c.a.createElement("li",{className:"list-group-item marg "},"  Part:      "),c.a.createElement("li",{className:"list-group-item marg"},"    Distance:  "),c.a.createElement("li",{className:"list-group-item marg"},"    Power:     "),c.a.createElement("li",{className:"list-group-item marg"},"    Span:      "),c.a.createElement("li",{className:"list-group-item marg"},"    Time:      "))),c.a.createElement("li",{className:"list-group-item marg"},c.a.createElement("ul",{className:"list-group marg"},c.a.createElement("li",{className:"list-group-item marg"},"  ",e.hitProper.part,"  "),c.a.createElement("li",{className:"list-group-item marg"},"  ",e.hitProper.long,"  "),c.a.createElement("li",{className:"list-group-item marg"},"   ",e.hitProper.power," "),c.a.createElement("li",{className:"list-group-item marg"},"   ",e.hitProper.span,"  "),c.a.createElement("li",{className:"list-group-item marg"},"   ",e.hitProper.time,"  ")))),c.a.createElement(E,null)),c.a.createElement("br",null),c.a.createElement("h2",{className:"margin bigText"},"This is ",l," "),c.a.createElement("br",null),c.a.createElement("h3",{className:"red"},"Hit count: ",a.length," "),c.a.createElement("br",null),c.a.createElement("br",null)," ",c.a.createElement("label",{for:"Part1"},"Hit Part1:"),c.a.createElement("progress",{id:"Part1",max:"100",value:e.power.Part1/50}," ",e.power.Part1," % "),c.a.createElement("output",null," ",e.power.Part1," "),c.a.createElement("br",null),c.a.createElement("label",{for:"Part2"},"Hit Part2:"),c.a.createElement("progress",{id:"Part2",max:"100",value:e.power.Part2/50}," ",e.power.Part2," % "),c.a.createElement("output",null," ",e.power.Part2," "),c.a.createElement("br",null),c.a.createElement("label",{for:"Part3"},"Hit Part3:"),c.a.createElement("progress",{id:"Part3",max:"100",value:e.power.Part3/50}," ",e.power.Part3," %"),c.a.createElement("output",null," ",e.power.Part3," "),c.a.createElement("br",null),c.a.createElement("label",{for:"Part4"},"Hit Part4:"),c.a.createElement("progress",{id:"Part4",max:"100",value:e.power.Part4/50}," ",e.power.Part4," %"),c.a.createElement("output",null," ",e.power.Part4," "))})))}}]),t}(c.a.Component);Object(p.render)(c.a.createElement(b,null),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.3a114c32.chunk.js.map