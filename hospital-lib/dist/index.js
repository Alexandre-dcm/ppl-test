!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("hospitalLib",[],e):"object"==typeof exports?exports.hospitalLib=e():t.hospitalLib=e()}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1);e.Quarantine=i.Quarantine;var n=s(3);e.formatPatientsInput=n.formatPatientsInput},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(2);e.Quarantine=class{constructor(t){this.drugs=[],this.patients=t,this.drugs=[]}setDrugs(t){this.drugs=t}wait40Days(){const t=new i.DrugsHandler(this.drugs,this.patients);this.patients=t.applyEffects()}report(){return this.patients}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{constructor(t,e){this.drugs=[],this.badMixes=[{functionName:"paracetamolAndAspirin",drugs:[i.drugsMap.Aspirin,i.drugsMap.Paracetamol]},{functionName:"insulinAndAntibiotic",drugs:[i.drugsMap.Insulin,i.drugsMap.Antibiotic]}],this.drugs=t,this.patientsRegister=e,this.oldPatientsRegister=Object.assign({},this.patientsRegister)}applyEffects(){return this.checkBadMixes(),this.checkInsulin(),this.drugs.forEach(t=>{for(const[e,s]of Object.entries(i.drugsMap))if(s===t){const t=e.toLowerCase();"function"==typeof this[t]&&this[t]()}}),this.patientsRegister}antibiotic(){this.switchState(i.states.Tuberculosis,i.states.Healthy)}aspirin(){this.switchState(i.states.Fever,i.states.Healthy)}paracetamol(){this.switchState(i.states.Fever,i.states.Healthy)}checkInsulin(){this.drugs.includes(i.drugsMap.Insulin)||this.switchState(i.states.Diabetes,i.states.Dead)}checkBadMixes(){this.badMixes.forEach(t=>{this.drugs.filter(e=>t.drugs.includes(e)).length===t.drugs.length&&this[t.functionName]()})}insulinAndAntibiotic(){this.switchState(i.states.Healthy,i.states.Fever)}paracetamolAndAspirin(){for(const[t,e]of Object.entries(this.patientsRegister))this.switchState(t,i.states.Dead)}switchState(t,e){let s;if(this.patientsRegister[e]!==this.oldPatientsRegister[e]&&(s=this.oldPatientsRegister[t]),0!==this.patientsRegister[t]&&t!==i.states.Dead){const i=s||this.patientsRegister[t];this.patientsRegister[e]+=i,this.patientsRegister[t]-=i}}}i.drugsMap={Aspirin:"As",Antibiotic:"An",Insulin:"I",Paracetamol:"P"},i.states={Fever:"F",Healthy:"H",Diabetes:"D",Tuberculosis:"T",Dead:"X"},e.DrugsHandler=i},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.formatPatientsInput=function(t){const e={};return t.forEach(t=>{e[t]?e[t]++:e[t]=1}),e}}])});