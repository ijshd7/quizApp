(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5Wrh":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.buttonText,a=e.buttonActions,n=e.isTrueButton;return r.a.createElement("button",{className:n?"focus:outline-none cursor-pointer no-underline mt-4 mr-8 ml-8 py-3 px-6 border-2 border-green-300 rounded-full text-green-300 bg-white hover:text-white hover:bg-green-300 transition-all duration-300 ease-linear":"focus:outline-none cursor-pointer no-underline mt-4 mr-8 ml-8 py-3 px-6 border-2 border-red-500 rounded-full text-red-500 bg-white hover:text-white hover:bg-red-500 transition-all duration-300 ease-linear",onClick:a},t)}},GCOq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),u=a("ufmL"),c=a("ktc5"),l=a.n(c),i=a("5Wrh");t.default=function(){return r.a.createElement(u.b.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,e.state.data[0].category&&e.page<10?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-4xl text-indigo-500 mb-8"},e.state.data[e.page-1].category),r.a.createElement("p",{className:"text-red-500"},"Difficulty: ",e.state.data[e.page-1].difficulty),r.a.createElement("p",{className:"text-lg my-4"},l.a.decode(""+e.state.data[e.page-1].question)),r.a.createElement("p",{className:"text-sm text-indigo-500"},e.page," of 10"),r.a.createElement(i.a,{buttonText:"TRUE",isTrueButton:!0,buttonActions:function(){return e.hitTrue()}}),r.a.createElement(i.a,{buttonText:"FALSE",buttonActions:function(){return e.hitFalse()}})):null,10===e.page&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-4xl text-indigo-500 mb-8"},e.state.data[e.page-1].category),r.a.createElement("p",{className:"text-red-500"},"Difficulty: ",e.state.data[e.page-1].difficulty),r.a.createElement("p",{className:"text-lg my-4"},l.a.decode(""+e.state.data[e.page-1].question)),r.a.createElement("p",{className:"text-sm text-indigo-500"},"10 of 10"),r.a.createElement(i.a,{buttonText:"TRUE",isTrueButton:!0,buttonActions:function(){e.hitTrue(),e.calculateScore(),e.updateScore(),e.updateRight(),e.updateWrong(),Object(o.c)("/results/")}}),r.a.createElement(i.a,{buttonText:"FALSE",buttonActions:function(){e.hitFalse(),e.calculateScore(),e.updateScore(),e.updateRight(),e.updateWrong(),Object(o.c)("/results/")}})))}))}}}]);
//# sourceMappingURL=component---src-pages-quiz-js-f366e16f7417b44421cd.js.map