(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"archer",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-h-jon-benjamin.jpg"},{id:2,name:"cheryl",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-judy-greer.jpg"},{id:3,name:"cyril",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-chris-parnell.jpg"},{id:4,name:"krieger",src:"https://memegenerator.net/img/images/300x300/16642495.jpg"},{id:5,name:"lana",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-lana-kane.jpg"},{id:6,name:"mallory",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-jessica-walter.jpg"},{id:7,name:"pam",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-amber-nash.jpg"},{id:8,name:"ray",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-adam-reed.jpg"}]},,,,,,,,function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),c=t.n(r),i=(t(15),t(4)),l=t(5),m=t(7),o=t(6),f=t(8);t(16);var u=function(e){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand",href:"/",id:"logo"},"Created by: Adam Karman"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},s.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link",id:"reset-button",onClick:function(){return e.resetGame()}},"Reset Game")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link"},"Score: ",e.score)),s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link"},"Wins: ",e.wins)),s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link"},"Losses: ",e.losses))))))};t(17);var g=function(e){return s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.src,key:e.id,className:"img-thumbnail",height:"300px",width:"300px",onClick:function(){return e.guess(e.id)}}))};t(18);var d=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)};t(19);var h=function(e){return s.a.createElement("h1",{className:"title"},e.children)};t(20);var p=function(e){return s.a.createElement("div",{className:"alert alert-success"},"You Win!")};t(21);var v,b,E,k,w=function(e){return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Game Over!")},N=t(1),y=(t(22),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).shuffleImages=function(){var e=[],a=t.state.images;for(var n in a){for(var s=Math.floor(Math.random()*a.length);e.includes(a[s]);)s=Math.floor(Math.random()*a.length);e[n]=a[s],t.setState({images:e})}},t.makeGuess=function(e){(t.state.gameLoss||t.state.gameWin)&&t.newRound();var a=[];t.state.guessedArray.includes(e)?(t.setState({gameLoss:!0,gameWin:!1}),t.incrementLosses()):(a.push(e),t.incrementScore(),t.setState({guessedArray:a}),t.shuffleImages())},t.newRound=function(){t.setState({images:N,guessedArray:[],score:0,gameLoss:!1,gameWin:!1})},t.incrementScore=function(){t.checkWin(),v=t.state.score,v++,t.setState({score:v})},t.incrementLosses=function(){E=t.state.losses,E++,t.setState({losses:E})},t.incrementWins=function(){b=t.state.wins,b++,t.setState({wins:b})},t.checkWin=function(){8===t.state.score&&(t.incrementWins(),t.setState({score:0,gameWin:!0,gameLoss:!1}))},t.resetGame=function(){t.setState({images:N,guessedArray:[],score:0,losses:0,wins:0,gameLoss:!1,gameWin:!1})},t.state={images:N,guessedArray:[],score:0,losses:0,wins:0,gameLoss:!1,gameWin:!1},t}return Object(f.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.gameLoss,t=this.state.gameWin;return a?k=s.a.createElement(w,null):t?k=s.a.createElement(p,null):t||a||(k=null),s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{score:this.state.score,wins:this.state.wins,losses:this.state.losses,resetGame:this.resetGame}),s.a.createElement("div",null,s.a.createElement(d,null,s.a.createElement(h,null,"Archer Memory Game!",k),this.state.images.map(function(a){return s.a.createElement(g,{src:a.src,key:a.id,id:a.id,guess:e.makeGuess})}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.828dcfb1.chunk.js.map