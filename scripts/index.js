(()=>{var t={32:(t,e)=>{"use strict";e.__esModule=!0;e.default=function(t,e){this.token=t,this.name=e}},444:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=function(t){function e(e,r){var a=t.call(this,e,"Declaration")||this;return a.props=r,a}return s(e,t),e.prototype.execute=function(t){var e=this;this.props.assignments.map((function(r){return r.execute(t,e.props.type)}))},e}(r(32).default);e.default=n},94:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=r(371),o=r(158),i=function(t){function e(e,r){var a=t.call(this,e,r.id)||this;return a.props=r,a}return s(e,t),e.prototype.execute=function(e,r){var a,s=this.getValue(e,r);t.prototype.setValue.call(this,e,null!=r?r:null===(a=e.getVar(this.props.id))||void 0===a?void 0:a.getType(e),s,void 0!==r)},e.prototype.getValue=function(t,e){return this.props.exp?this.props.exp.getValue(t):new o.default(this.token,{value:(0,n.defaultValues)(e),type:e})},e}(r(748).default);e.default=i},504:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=r(27),o=r(469),i=r(158),l=function(t){function e(e,r){var a=t.call(this,e,r.id)||this;return a.props=r,a}return s(e,t),e.prototype.execute=function(e){var r,a=e.getVar(null!==(r=this.id)&&void 0!==r?r:""),s=a.getType(e);a?s===n.default.INTEGER||s===n.default.DOUBLE?t.prototype.setValue.call(this,e,s,this.getValue(e),!1):(0,o.addError)(this.token,"La variable ".concat(this.id," debe ser del tipo ").concat(n.default.INTEGER," | ").concat(n.default.DOUBLE)):(0,o.addError)(this.token,"La variable ".concat(this.id," no existe."))},e.prototype.getValue=function(t){var e,r=t.getVar(null!==(e=this.id)&&void 0!==e?e:"");return r?new i.default(this.token,{value:((null==r?void 0:r.getValue(t))+(this.props.operator===n.Operator.PLUSPLUS?1:-1)).toString(),type:r.getType(t)}):new i.default(this.token,{value:null,type:n.default.NULL})},e}(r(748).default);e.default=l},748:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=r(27),o=r(469),i=function(t){function e(e,r){var a=t.call(this,e,"Assignment")||this;return a.id=r,a}return s(e,t),e.prototype.setValue=function(t,e,r,a){var s;if(void 0===a&&(a=!0),null===(s=this.id)||void 0===s?void 0:s.length){var i=r.getType(t),l=e===n.default.DOUBLE&&i===n.default.INTEGER||e===n.default.INTEGER&&i===n.default.DOUBLE;e===i||l?a?t.addVar(this.id,e,r):t.setVar(this.id,r):e?(0,o.addError)(this.token,"No se puede asignar el tipo ".concat(i," a ").concat(e,".")):(0,o.addError)(this.token,"Es posible que la variable ".concat(this.id," no este declarada."))}},e.prototype.execute=function(t,e){},e}(r(32).default);e.default=i},58:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=r(32),o=r(371),i=function(t){function e(e,r){var a=t.call(this,e,"Expression")||this;return a.props=r,a.childToken=e,a}return s(e,t),e.prototype.execute=function(t){},e.prototype.getValue=function(t){var e,r,a,s=null===(e=this.props.left)||void 0===e?void 0:e.getValue(t),n=null===(r=this.props.right)||void 0===r?void 0:r.getValue(t),i=null===(a=this.props.condition)||void 0===a?void 0:a.getValue(t);if(s){if(!this.props.operator)return s;var l=(0,o.default)(t,this.childToken,s,this.props.operator,n,i);if(l)return l}else if(this.props.value)return this.props.value},e}(n.default);e.default=i},371:(t,e,r)=>{"use strict";e.__esModule=!0,e.defaultValues=void 0;var a=r(27),s=r(469),n=r(158);e.defaultValues=function(t){switch(t){case a.default.INTEGER:case a.default.DOUBLE:return 0;case a.default.STRING:return"";case a.default.BOOLEAN:return!0;case a.default.CHARACTER:return"0";case a.default.NULL:return null;default:return""}},e.default=function(t,e,r,o,i,l){var c,u,h,p,f=null!==(c=r.getValue(t))&&void 0!==c?c:void 0,d=r.getType(t),y=null!==(u=null==i?void 0:i.getValue(t))&&void 0!==u?u:void 0,E=null==i?void 0:i.getType(t),O=null==l?void 0:l.getValue(t);switch(o){case a.Operator.PLUS:switch(d){case a.default.INTEGER:switch(E){case a.default.INTEGER:h=f+y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f+y,p=a.default.DOUBLE;break;case a.default.BOOLEAN:h=f+(y?1:0),p=a.default.INTEGER;break;case a.default.CHARACTER:h=f+y.charCodeAt(0),p=a.default.INTEGER;break;case a.default.STRING:h=f+y,p=a.default.STRING}break;case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=f+y,p=a.default.DOUBLE;break;case a.default.BOOLEAN:h=f+(y?1:0),p=a.default.DOUBLE;break;case a.default.CHARACTER:h=f+y.charCodeAt(0),p=a.default.DOUBLE;break;case a.default.STRING:h=f+y,p=a.default.STRING}break;case a.default.BOOLEAN:switch(E){case a.default.INTEGER:h=(y?1:0)+y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=(y?1:0)+y,p=a.default.DOUBLE;break;case a.default.STRING:h=f?"true":"false"+y,p=a.default.STRING}break;case a.default.CHARACTER:switch(E){case a.default.INTEGER:h=f.charCodeAt(0)+y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f.charCodeAt(0)+y,p=a.default.DOUBLE;break;case a.default.STRING:h=f+y,p=a.default.STRING}break;case a.default.STRING:h=f+y,p=a.default.STRING}break;case a.Operator.MINUS:switch(d){case a.default.INTEGER:switch(E){case a.default.INTEGER:h=f-y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f-y,p=a.default.DOUBLE;break;case a.default.BOOLEAN:h=f-(y?1:0),p=a.default.INTEGER;break;case a.default.CHARACTER:h=f-y.charCodeAt(0),p=a.default.INTEGER}break;case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=f-y,p=a.default.DOUBLE;break;case a.default.BOOLEAN:h=f-(y?1:0),p=a.default.DOUBLE;break;case a.default.CHARACTER:h=f-y.charCodeAt(0),p=a.default.DOUBLE}break;case a.default.BOOLEAN:switch(E){case a.default.INTEGER:h=(y?1:0)-y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=(y?1:0)-y,p=a.default.DOUBLE}break;case a.default.CHARACTER:switch(E){case a.default.INTEGER:h=f.charCodeAt(0)-y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f.charCodeAt(0)-y,p=a.default.DOUBLE}}break;case a.Operator.TIMES:switch(d){case a.default.INTEGER:switch(E){case a.default.INTEGER:h=f*y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f*y,p=a.default.DOUBLE;break;case a.default.CHARACTER:h=f*y.charCodeAt(0),p=a.default.INTEGER}break;case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=f*y,p=a.default.DOUBLE;break;case a.default.CHARACTER:h=f*y.charCodeAt(0),p=a.default.DOUBLE}break;case a.default.CHARACTER:switch(E){case a.default.INTEGER:h=f.charCodeAt(0)*y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f.charCodeAt(0)*y,p=a.default.DOUBLE}}break;case a.Operator.DIVISION:if(0!==y)switch(d){case a.default.INTEGER:case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=f/y,p=a.default.DOUBLE;break;case a.default.CHARACTER:h=f/y.charCodeAt(0),p=a.default.DOUBLE}break;case a.default.CHARACTER:switch(E){case a.default.INTEGER:h=f.charCodeAt(0)/y,p=a.default.INTEGER;break;case a.default.DOUBLE:h=f.charCodeAt(0)/y,p=a.default.DOUBLE}}break;case a.Operator.POWER:switch(d){case a.default.INTEGER:switch(E){case a.default.INTEGER:h=Math.pow(f,y),p=a.default.INTEGER;break;case a.default.DOUBLE:h=Math.pow(f,y),p=a.default.DOUBLE}break;case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=Math.pow(f,y),p=a.default.DOUBLE}}break;case a.Operator.MODULE:switch(d){case a.default.INTEGER:case a.default.DOUBLE:switch(E){case a.default.INTEGER:case a.default.DOUBLE:h=f%y,p=a.default.DOUBLE}}break;case a.Operator.NEGATION:switch(d){case a.default.INTEGER:h=-1*f,p=a.default.INTEGER;break;case a.default.DOUBLE:h=-1*f,p=a.default.DOUBLE}break;case a.Operator.OR:case a.Operator.AND:h=f||y,p=a.default.BOOLEAN;break;case a.Operator.TERNARY:O&&void 0!==O?(h=f,p=d):(h=y,p=E);break;case a.Operator.EQUALSEQUALS:h=f===y,p=a.default.BOOLEAN;break;case a.Operator.NONEQUALS:h=f!==y,p=a.default.BOOLEAN;break;case a.Operator.MOREOREQUALS:h=f>=y,p=a.default.BOOLEAN;break;case a.Operator.LESSOREQUALS:h=f<=y,p=a.default.BOOLEAN;break;case a.Operator.MAJOR:h=f>y,p=a.default.BOOLEAN;break;case a.Operator.MINOR:h=f<y,p=a.default.BOOLEAN}return void 0!==h&&void 0!==p?new n.default(e,{value:h,type:p}):((0,s.addError)(e,"No es posible operar la expresion ".concat(d," ").concat(o," ").concat(E,".")),new n.default(e,{value:null,type:a.default.NULL}))}},158:function(t,e,r){"use strict";var a,s=this&&this.__extends||(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var n=r(27),o=function(t){function e(e,r){var a=t.call(this,e,"Value")||this;return a.props=r,a}return s(e,t),e.prototype.execute=function(t){},e.prototype.getType=function(t){var e;if(this.props.type===n.default.ID){var r=t.getVar(this.props.value);return null!==(e=null==r?void 0:r.getType(t))&&void 0!==e?e:n.default.NULL}return this.props.type},e.prototype.getValue=function(t){if(t){if("object"==typeof this.props.value)return this.props.value;switch(this.props.type){case n.default.STRING:return this.props.value;case n.default.INTEGER:return"string"==typeof this.props.value?parseInt(this.props.value,10):this.props.value;case n.default.DOUBLE:return"string"==typeof this.props.value?parseFloat(this.props.value):this.props.value;case n.default.BOOLEAN:return"string"==typeof this.props.value?"true"===this.props.value.toLowerCase():this.props.value;case n.default.CHARACTER:return this.props.value.charAt(0);case n.default.ID:return this.props.value;case n.default.NULL:return null;default:return this.props.value}}},e}(r(32).default);e.default=o},533:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},981:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},274:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},469:(t,e,r)=>{"use strict";e.__esModule=!0,e.addError=void 0;var a=r(533);e.addError=function(t,e,r){void 0===r&&(r="Semantic"),a.default.push({token:t,msg:e,type:r})},e.default=function(t){return{line:t.first_line,col:t.first_column+1}}},27:(t,e)=>{"use strict";var r;e.__esModule=!0,e.Operator=void 0,function(t){t.ID="ID",t.NULL="NULL",t.INTEGER="INT",t.ARRAY="ARRAY",t.STRUCT="STRUCT",t.STRING="STRING",t.DOUBLE="DOUBLE",t.BOOLEAN="BOOLEAN",t.CHARACTER="CHARACTER"}(r||(r={})),function(t){t.PLUS="+",t.MINUSMINUS="--",t.PLUSPLUS="++",t.MINUS="-",t.NEGATION="-*",t.DIVISION="/",t.TIMES="*",t.MODULE="%",t.POWER="^",t.TERNARY="?:",t.EQUALSEQUALS="==",t.MOREOREQUALS=">=",t.MAJOR=">",t.LESSOREQUALS="<=",t.MINOR="<",t.NOT="!",t.NONEQUALS="!=",t.AND="&&",t.OR="||"}(e.Operator||(e.Operator={})),e.default=r},629:(t,e,r)=>{var a;void 0===(a=function(t){var e=function(t,e,r,a){for(r=r||{},a=t.length;a--;r[t[a]]=e);return r},a=[1,9],s=[1,10],n=[1,11],o=[1,12],i=[1,13],l=[1,7],c=[5,7,8,9,10,11,18],u=[14,17],h=[1,32],p=[1,27],f=[1,26],d=[1,28],y=[1,30],E=[1,31],O=[1,33],g=[1,34],_=[1,35],b=[1,36],k=[1,37],v=[1,39],T=[1,40],m=[1,41],N=[1,42],R=[1,43],L=[1,44],I=[1,45],A=[1,46],w=[1,47],S=[1,48],U=[1,49],B=[1,50],x=[1,51],D=[1,52],G=[1,53],C=[14,17,25,26,27,28,29,30,31,32,33,34,35,36,37,38,41,43,44],$=[14,17,25,26,27,28,29,34,35,36,41,43,44],M=[14,17,26,27,28,29,35,36,41,43,44],P=[14,17,25,26,27,28,29,30,31,32,33,34,35,36,41,43,44],V={trace:function(){},yy:{},symbols_:{error:2,START:3,INSTRUCTIONS:4,EOF:5,TYPE:6,intType:7,dblType:8,boolType:9,charType:10,strType:11,INSTRUCTION:12,DECLARATION:13,semicolom:14,ASSIGNMENT:15,ASSIGNMENTS:16,comma:17,id:18,equals:19,EXPRESSIONS:20,TERNARY:21,INCREMENTALASSIGNMENT:22,plusPlus:23,minusMinus:24,plus:25,equalsEquals:26,moreOrEquals:27,lessOrEquals:28,nonEquals:29,division:30,module:31,power:32,times:33,minus:34,minor:35,major:36,and:37,or:38,not:39,openParenthesis:40,closeParenthesis:41,VARVALUE:42,questionMark:43,colom:44,decimal:45,text:46,integer:47,character:48,trBool:49,flBool:50,nullType:51,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",14:"semicolom",17:"comma",18:"id",19:"equals",23:"plusPlus",24:"minusMinus",25:"plus",26:"equalsEquals",27:"moreOrEquals",28:"lessOrEquals",29:"nonEquals",30:"division",31:"module",32:"power",33:"times",34:"minus",35:"minor",36:"major",37:"and",38:"or",39:"not",40:"openParenthesis",41:"closeParenthesis",43:"questionMark",44:"colom",45:"decimal",46:"text",47:"integer",48:"character",49:"trBool",50:"flBool",51:"nullType"},productions_:[0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[4,2],[4,1],[12,2],[12,2],[13,2],[16,3],[16,1],[15,1],[15,3],[15,3],[15,1],[22,2],[22,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,2],[20,3],[20,1],[20,3],[21,5],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1]],performAction:function(t,e,r,a,s,n,o){var i=n.length-1;switch(s){case 1:return n[i-1];case 2:this.$=H.INTEGER;break;case 3:this.$=H.DOUBLE;break;case 4:this.$=H.BOOLEAN;break;case 5:this.$=H.CHARACTER;break;case 6:this.$=H.STRING;break;case 7:this.$=n[i-1],this.$.push(n[i]);break;case 8:case 13:this.$=[n[i]];break;case 9:case 10:case 38:this.$=n[i-1];break;case 11:this.$=new z(Q(o[i-1]),{type:n[i-1],assignments:n[i]});break;case 12:this.$=n[i-2],this.$.push(n[i]);break;case 14:this.$=new F(Q(o[i]),{id:n[i]});break;case 15:case 16:this.$=new F(Q(o[i-2]),{id:n[i-2],exp:n[i]});break;case 17:this.$=n[i];break;case 18:this.$=new Y(Q(o[i-1]),{id:n[i-1],operator:Operator.PLUSPLUS});break;case 19:this.$=new Y(Q(o[i-1]),{id:n[i-1],operator:Operator.MINUSMINUS});break;case 20:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.PLUS});break;case 21:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.EQUALSEQUALS});break;case 22:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.MOREOREQUALS});break;case 23:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.LESSOREQUALS});break;case 24:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.NONEQUALS});break;case 25:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.DIVISION});break;case 26:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.MODULE});break;case 27:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.POWER});break;case 28:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.TIMES});break;case 29:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.MINUS});break;case 30:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.MINOR});break;case 31:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.MAJOR});break;case 32:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.AND});break;case 33:this.$=new J(Q(o[i-2]),{left:n[i-2],right:n[i],operator:Operator.OR});break;case 34:this.$=new J(Q(o[i-1]),{left:n[i],operator:Operator.NOT});break;case 35:this.$=new J(Q(o[i-1]),{left:n[i],operator:Operator.NEGATION});break;case 36:this.$=new J(Q(o[i-2]),{left:n[i-1]});break;case 37:this.$=new J(Q(o[i]),{value:n[i]});break;case 39:this.$=new J(Q(o[i-4]),{left:n[i-2],right:n[i],condition:n[i-4],operator:Operator.TERNARY});break;case 40:this.$=new K(Q(o[i]),{value:n[i],type:H.DOUBLE});break;case 41:this.$=new K(Q(o[i]),{value:n[i],type:H.STRING});break;case 42:this.$=new K(Q(o[i]),{value:n[i],type:H.ID});break;case 43:this.$=new K(Q(o[i]),{value:n[i],type:H.INTEGER});break;case 44:this.$=new K(Q(o[i]),{value:n[i],type:H.CHARACTER});break;case 45:case 46:this.$=new K(Q(o[i]),{value:n[i],type:H.BOOLEAN});break;case 47:this.$=new K(Q(o[i]),{value:n[i],type:H.NULL})}},table:[{3:1,4:2,6:6,7:a,8:s,9:n,10:o,11:i,12:3,13:4,15:5,18:l,22:8},{1:[3]},{5:[1,14],6:6,7:a,8:s,9:n,10:o,11:i,12:15,13:4,15:5,18:l,22:8},e(c,[2,8]),{14:[1,16]},{14:[1,17]},{15:19,16:18,18:l,22:8},e(u,[2,14],{19:[1,20],23:[1,21],24:[1,22]}),e(u,[2,17]),{18:[2,2]},{18:[2,3]},{18:[2,4]},{18:[2,5]},{18:[2,6]},{1:[2,1]},e(c,[2,7]),e(c,[2,9]),e(c,[2,10]),{14:[2,11],17:[1,23]},e(u,[2,13]),{18:h,20:24,21:25,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},e(u,[2,18]),e(u,[2,19]),{15:38,18:l,22:8},e(u,[2,15],{25:v,26:T,27:m,28:N,29:R,30:L,31:I,32:A,33:w,34:S,35:U,36:B,37:x,38:D,43:G}),e(u,[2,16]),{18:h,20:54,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:55,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:56,21:57,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},e(C,[2,37]),e(C,[2,40]),e(C,[2,41]),e(C,[2,42]),e(C,[2,43]),e(C,[2,44]),e(C,[2,45]),e(C,[2,46]),e(C,[2,47]),e(u,[2,12]),{18:h,20:58,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:59,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:60,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:61,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:62,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:63,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:64,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:65,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:66,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:67,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:68,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:69,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:70,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:71,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},{18:h,20:72,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},e(C,[2,34]),e($,[2,35],{30:L,31:I,32:A,33:w,37:x,38:D}),{25:v,26:T,27:m,28:N,29:R,30:L,31:I,32:A,33:w,34:S,35:U,36:B,37:x,38:D,41:[1,73],43:G},{41:[1,74]},e($,[2,20],{30:L,31:I,32:A,33:w,37:x,38:D}),e(M,[2,21],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(M,[2,22],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(M,[2,23],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(M,[2,24],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(P,[2,25],{37:x,38:D}),e(P,[2,26],{37:x,38:D}),e(P,[2,27],{37:x,38:D}),e(P,[2,28],{37:x,38:D}),e($,[2,29],{30:L,31:I,32:A,33:w,37:x,38:D}),e(M,[2,30],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(M,[2,31],{25:v,30:L,31:I,32:A,33:w,34:S,37:x,38:D}),e(C,[2,32]),e(C,[2,33]),{25:v,26:T,27:m,28:N,29:R,30:L,31:I,32:A,33:w,34:S,35:U,36:B,37:x,38:D,44:[1,75]},e(C,[2,36]),e(C,[2,38]),{18:h,20:76,34:p,39:f,40:d,42:29,45:y,46:E,47:O,48:g,49:_,50:b,51:k},e([14,17,41],[2,39],{25:v,26:T,27:m,28:N,29:R,30:L,31:I,32:A,33:w,34:S,35:U,36:B,37:x,38:D})],defaultActions:{9:[2,2],10:[2,3],11:[2,4],12:[2,5],13:[2,6],14:[2,1]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=this,r=[0],a=[null],s=[],n=this.table,o="",i=0,l=0,c=0,u=2,h=1,p=s.slice.call(arguments,1),f=Object.create(this.lexer),d={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(d.yy[y]=this.yy[y]);f.setInput(t,d.yy),d.yy.lexer=f,d.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var E=f.yylloc;s.push(E);var O=f.options&&f.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,b,k,v,T,m,N,R,L=function(){var t;return"number"!=typeof(t=f.lex()||h)&&(t=e.symbols_[t]||t),t},I={};;){if(b=r[r.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==g&&(g=L()),k=n[b]&&n[b][g]),void 0===k||!k.length||!k[0]){var A="";for(T in R=[],n[b])this.terminals_[T]&&T>u&&R.push("'"+this.terminals_[T]+"'");A=f.showPosition?"Parse error on line "+(i+1)+":\n"+f.showPosition()+"\nExpecting "+R.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(i+1)+": Unexpected "+(g==h?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(A,{text:f.match,token:this.terminals_[g]||g,line:f.yylineno,loc:E,expected:R})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g);switch(k[0]){case 1:r.push(g),a.push(f.yytext),s.push(f.yylloc),r.push(k[1]),g=null,_?(g=_,_=null):(l=f.yyleng,o=f.yytext,i=f.yylineno,E=f.yylloc,c>0&&c--);break;case 2:if(m=this.productions_[k[1]][1],I.$=a[a.length-m],I._$={first_line:s[s.length-(m||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(m||1)].first_column,last_column:s[s.length-1].last_column},O&&(I._$.range=[s[s.length-(m||1)].range[0],s[s.length-1].range[1]]),void 0!==(v=this.performAction.apply(I,[o,l,i,d.yy,k[1],a,s].concat(p))))return v;m&&(r=r.slice(0,-1*m*2),a=a.slice(0,-1*m),s=s.slice(0,-1*m)),r.push(this.productions_[k[1]][0]),a.push(I.$),s.push(I._$),N=n[r[r.length-2]][r[r.length-1]],r.push(N);break;case 3:return!0}}return!0}};const j=r(981).default,q=r(533).default,H=r(27).default,Q=r(469).default,Y=r(504).default,F=r(94).default,z=r(444).default,J=r(58).default,K=r(158).default,W=(t,e)=>(j.push({...Q(t),name:e}),e);var Z={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===a.length?this.yylloc.first_column:0)+a[a.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,a,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in s)this[n]=s[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),n=0;n<s.length;n++)if((r=this._input.match(this.rules[s[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,a=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,s[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,a){switch(r){case 0:case 1:case 2:case 39:case 40:case 41:case 42:case 43:case 44:case 45:break;case 3:return W(e.yylloc,"charType");case 4:return W(e.yylloc,"boolType");case 5:return W(e.yylloc,"nullType");case 6:return W(e.yylloc,"strType");case 7:return W(e.yylloc,"dblType");case 8:return W(e.yylloc,"intType");case 9:return W(e.yylloc,"trBool");case 10:return W(e.yylloc,"flBool");case 11:return W(e.yylloc,"lessOrEquals");case 12:return W(e.yylloc,"moreOrEquals");case 13:return W(e.yylloc,"equalsEquals");case 14:return W(e.yylloc,"minusMinus");case 15:return W(e.yylloc,"nonEquals");case 16:return W(e.yylloc,"plusPlus");case 17:return W(e.yylloc,"questionMark");case 18:return W(e.yylloc,"colom");case 19:return W(e.yylloc,"division");case 20:return W(e.yylloc,"module");case 21:return W(e.yylloc,"times");case 22:return W(e.yylloc,"power");case 23:return W(e.yylloc,"equals");case 24:return W(e.yylloc,"minor");case 25:return W(e.yylloc,"major");case 26:return W(e.yylloc,"minus");case 27:return W(e.yylloc,"plus");case 28:return W(e.yylloc,"and");case 29:return W(e.yylloc,"not");case 30:return W(e.yylloc,"or");case 31:return W(e.yylloc,"comma");case 32:return W(e.yylloc,"semicolom");case 33:return W(e.yylloc,"openBracket");case 34:return W(e.yylloc,"closeBracket");case 35:return W(e.yylloc,"openParenthesis");case 36:return W(e.yylloc,"closeParenthesis");case 37:return W(e.yylloc,"openSquareBracket");case 38:return W(e.yylloc,"closeSquareBracket");case 46:return e.yytext=e.yytext.substr(1,e.yyleng-2),W(e.yylloc,"text");case 47:return e.yytext=e.yytext.substr(1,e.yyleng-2),W(e.yylloc,"character");case 48:return W(e.yylloc,"decimal");case 49:return W(e.yylloc,"integer");case 50:return W(e.yylloc,"id");case 51:return 5;case 52:q.push({type:"Lexical",token:{line:e.yylloc.first_line,col:e.yylloc.fist_column},msg:`${e.yytext} no reconocido`})}},rules:[/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return V.lexer=Z,V}.call(e,r,e,t))||(t.exports=a)}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,r),n.exports}(()=>{"use strict";var t,e,a,s,n,o,i,l=r(981),c=r(533),u=r(629),h=r(274),p=[],f=!1,d=function(){var t=editor.getValue();l.default.length=0,c.default.length=0,h.default.length=0;try{p=u.parse(t),console.log(p),c.default.length&&console.log(c.default.join("\n"))}catch(t){console.log(t)}},y=function(){document.getElementById("console").value=""},E=function(){var t=document.getElementById("console"),e=document.getElementById("chevron");t.style.height=f?"0px":"40vh",t.style.padding=f?"33px 12px 12px 12px":"54px 12px 12px 12px",e.style.transform="rotate(".concat(f?180:0,"deg)"),setTimeout((function(){editor.resize(!0)}),f?250:450),f=!f},O=function(){var t=editor.getValue();window.localStorage.setItem("code",t)};o=document.getElementById("console"),i=window.console.log,window.console.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,t),o&&t.forEach((function(t){o&&(o.value+="".concat(JSON.stringify(t).substring(1,JSON.stringify(t).length-1),"\n"))}))},t=document.getElementById("cleanBtn"),e=document.getElementById("runtimeBtn"),a=document.getElementById("collapseBtn"),s=document.getElementById("terminalBtn"),n=document.getElementById("saveBtn"),null==e||e.addEventListener("click",d),null==t||t.addEventListener("click",y),null==a||a.addEventListener("click",E),null==s||s.addEventListener("click",E),null==n||n.addEventListener("click",O),window.addEventListener("keydown",(function(t){if(t.ctrlKey||t.metaKey){var e=!1;"p"===t.key?(d(),e=!0):"r"===t.key?(y(),e=!0):"m"===t.key?(E(),e=!0):"s"===t.key&&(O(),e=!0),e&&t.preventDefault()}}))})()})();