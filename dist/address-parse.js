!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.ZhAddressParse=r():e.ZhAddressParse=r()}(this,(function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('["赵","钱","孙","李","周","吴","郑","王","冯","陈","楮","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","魏","陶","姜","戚","谢","邹","喻","柏","水","窦","章","云","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","酆","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","安","常","乐","于","时","傅","皮","卞","齐","康","伍","余","元","卜","顾","孟","平","黄","和","穆","萧","尹","姚","邵","湛","汪","祁","毛","禹","狄","米","贝","明","臧","计","伏","成","戴","谈","宋","茅","庞","熊","纪","舒","屈","项","祝","董","梁","杜","阮","蓝","闽","席","季","麻","强","贾","路","娄","危","江","童","颜","郭","梅","盛","林","刁","锺","徐","丘","骆","高","夏","蔡","田","樊","胡","凌","霍","虞","万","支","柯","昝","管","卢","莫","经","房","裘","缪","干","解","应","宗","丁","宣","贲","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","钮","龚","程","嵇","邢","滑","裴","陆","荣","翁","荀","羊","於","惠","甄","麹","家","封","芮","羿","储","靳","汲","邴","糜","松","井","段","富","巫","乌","焦","巴","弓","牧","隗","山","谷","车","侯","宓","蓬","全","郗","班","仰","秋","仲","伊","宫","宁","仇","栾","暴","甘","斜","厉","戎","祖","武","符","刘","景","詹","束","龙","叶","幸","司","韶","郜","黎","蓟","薄","印","宿","白","怀","蒲","邰","从","鄂","索","咸","籍","赖","卓","蔺","屠","蒙","池","乔","阴","郁","胥","能","苍","双","闻","莘","党","翟","谭","贡","劳","逄","姬","申","扶","堵","冉","宰","郦","雍","郤","璩","桑","桂","濮","牛","寿","通","边","扈","燕","冀","郏","浦","尚","农","温","别","庄","晏","柴","瞿","阎","充","慕","连","茹","习","宦","艾","鱼","容","向","古","易","慎","戈","廖","庾","终","暨","居","衡","步","都","耿","满","弘","匡","国","文","寇","广","禄","阙","东","欧","殳","沃","利","蔚","越","夔","隆","师","巩","厍","聂","晁","勾","敖","融","冷","訾","辛","阚","那","简","饶","空","曾","毋","沙","乜","养","鞠","须","丰","巢","关","蒯","相","查","后","荆","红","游","竺","权","逑","盖","益","桓","公","万俟","司马","上官","欧阳","夏侯","诸葛","闻人","东方","赫连","皇甫","尉迟","公羊","澹台","公冶","宗政","濮阳","淳于","单于","太叔","申屠","公孙","仲孙","轩辕","令狐","锺离","宇文","长孙","慕容","鲜于","闾丘","司徒","司空","丌官","司寇","仉","督","子车","颛孙","端木","巫马","公西","漆雕","乐正","壤驷","公良","拓拔","夹谷","宰父","谷梁","晋","楚","阎","法","汝","鄢","涂","钦","段干","百里","东郭","南门","呼延","归","海","羊舌","微生","岳","帅","缑","亢","况","后","有","琴","梁丘","左丘","东门","西门","商","牟","佘","佴","伯","赏","南宫","墨","哈","谯","笪","年","爱","阳","佟","第五","言","福"]')},function(e,r,n){"use strict";n.r(r);var t,o,i,a,c,u,f=n(0),l=["children"],d=["children"],p=["children"];function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){h(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function h(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,r||"default");if("object"!==x(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===x(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function g(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function b(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){if(e){if("string"==typeof e)return O(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,r):void 0}}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var S={"北京":"北京","天津":"天津","河北":"河北省","山西":"山西省","内蒙":"内蒙古自治区","辽宁":"辽宁省","吉林":"吉林省","黑龙":"黑龙江省","上海":"上海","江苏":"江苏省","浙江":"浙江省","安徽":"安徽省","福建":"福建省","江西":"江西省","山东":"山东省","河南":"河南省","湖北":"湖北省","湖南":"湖南省","广东":"广东省","广西":"广西壮族自治区","海南":"海南省","重庆":"重庆","四川":"四川省","贵州":"贵州省","云南":"云南省","西藏":"西藏自治区","陕西":"陕西省","甘肃":"甘肃省","青海":"青海省","宁夏":"宁夏回族自治区","新疆":"新疆维吾尔自治区","台湾":"台湾","香港":"香港特别行政区","澳门":"澳门特别行政区","海外":"海外"},j=function e(r,n){var t="object"===x(n)?n:"number"==typeof n?{type:n}:{},o=t.type,i=void 0===o?1:o,a=t.extraGovData,c=void 0===a?{}:a,u=t.textFilter,f=void 0===u?[]:u,l=t.nameMaxLength,d=void 0===l?4:l;if(!e.isInit)return{};if(!r)return{};w(c);var p={phone:"",province:[],city:[],area:[],detail:[],name:""};r=J(r,f);var s=N(r);r=s.address,p.phone=s.phone;var v=A(r);r=v.address,p.postalCode=v.postalCode;var h=r.split(" ").filter((function(e){return e&&!/^\d+$/.test(e)})).map((function(e){return e.trim()}));h=E(h);(new Date).getTime();h.forEach((function(e,r){if(p.province[0]&&p.city[0]&&p.area[0])p.detail.push(e);else{var n,t={};1===i&&(t=k(e,p)),0===i&&(t=P(e,p));var o=t,a=o.province,c=o.city,u=o.area,f=o.detail;p.province=a||[],p.area=u||[],p.city=c||[],p.detail=p.detail.concat(f||[]),p.areaCode=(null===(n=p.area[0])||void 0===n?void 0:n.code)||""}}));(new Date).getTime();var g=p.province[0],y=p.city[0],m=p.area[0],O=p.detail;if(O=O.map((function(e){return e.replace(new RegExp("".concat(g&&g.name,"|").concat(y&&y.name,"|").concat(m&&m.name),"g"),"")})),(O=Array.from(new Set(O)))&&O.length>0){var S=b(O).filter((function(e){return!!e}));S.sort((function(e,r){return e.length-r.length}));var j=S.findIndex((function(e){return C(e,d)})),I="";~j?I=S[j]:S[0]&&S[0].length<=d&&/[\u4E00-\u9FA5]/.test(S[0])&&(I=S[0]),I&&(p.name=I,O.splice(O.findIndex((function(e){return e===I})),1))}JSON.stringify(p);var R=g&&g.name,$=y&&y.name;return~["市辖区","区","县","镇"].indexOf($)&&($=R),Object.assign(p,{province:R||"",city:$||"",area:m&&m.name||"",detail:O&&O.length>0&&O.join("")||""})},w=function(e){var r,n,f,l=e.province,d=e.city,p=e.area;l&&((r=t).push.apply(r,b(l)),a=JSON.stringify(t));l&&((n=o).push.apply(n,b(d)),c=JSON.stringify(o));l&&((f=i).push.apply(f,b(p)),u=JSON.stringify(i))},E=function(e){var r=[];return["省","市","区","县","镇"].forEach((function(n){var t,o=(t=n,e.findIndex((function(e){return~e.indexOf(t)})));~o&&r.push(e.splice(o,1)[0])})),[].concat(r,b(e))},P=function(e,r){var n=r.province||[],t=r.city||[],o=r.area||[],i=[],f="";if(0===n.length){for(var l=1;l<e.length;l++){var d=e.substring(0,l+1),p=new RegExp('{"code":"[0-9]{1,6}","name":"'.concat(d,'[一-龥]*?"}'),"g"),s=a.match(p);if(!s)break;var v=JSON.parse(s[0]);1===s.length&&(f=d,(n=[]).push(v))}n[0]&&(e=e.replace(new RegExp(f,"g"),""))}if(0===t.length){for(var h=1;h<e.length;h++){var g=e.substring(0,h+1),y=new RegExp('{"code":"[0-9]{1,6}","name":"'.concat(g,'[一-龥]*?","provinceCode":"').concat(n[0]?"".concat(n[0].code):"[0-9]{1,6}",'"}'),"g"),b=c.match(y);if(!b)break;var m=JSON.parse(b[0]);1===b.length&&(f=g,(t=[]).push(m))}if(t[0]){var O=t[0].provinceCode;if(e=e.replace(new RegExp(f,"g"),""),0===n.length){var x=new RegExp('{"code":"'.concat(O,'","name":"[一-龥]+?"}'),"g"),S=a.match(x);n.push(JSON.parse(S[0]))}}}if(0===o.length){for(var j=1;j<e.length;j++){var w=e.substring(0,j+1),E=new RegExp('{"code":"[0-9]{1,9}","name":"'.concat(w,'[一-龥]*?","cityCode":"').concat(t[0]?t[0].code:"[0-9]{1,6}",'","provinceCode":"').concat(n[0]?"".concat(n[0].code):"[0-9]{1,6}",'"}'),"g"),P=u.match(E);if(!P)break;var k=JSON.parse(P[0]);1===P.length&&(f=w,(o=[]).push(k))}if(o[0]){var C=o[0],N=C.provinceCode,A=C.cityCode;if(e=e.replace(f,""),0===n.length){var J=new RegExp('{"code":"'.concat(N,'","name":"[一-龥]+?"}'),"g"),I=a.match(J);n.push(JSON.parse(I[0]))}if(0===t.length){var R=new RegExp('{"code":"'.concat(A,'","name":"[一-龥]+?","provinceCode":"').concat(N,'"}'),"g"),$=c.match(R);t.push(JSON.parse($[0]))}}}return e.length>0&&i.push(e),{province:n,city:t,area:o,detail:i}},k=function(e,r){var n=[],a=[],c=[],u=[];if(r.province[0])n=r.province;else{var f,l=y(t);try{for(l.s();!(f=l.n()).done;){for(var d=f.value,p=d.name,s="",v=p.length;v>1;v--){var h=p.substring(0,v);if(0===e.indexOf(h)){s=h;break}}if(s){n.push(d),e=e.replace(new RegExp(s),"");break}}}catch(e){l.e(e)}finally{l.f()}}if(r.city[0])a=r.city;else{var g,b=y(o);try{var m=function(){var r=g.value,o=r.name,i=r.provinceCode,c=n[0];if(c){if(c.code===i){for(var u="",f=o.length;f>1;f--){var l=o.substring(0,f);if(0===e.indexOf(l)){u=l;break}}if(u)return a.push(r),e=e.replace(new RegExp(u,"g"),""),"break"}}else{for(var d=o.length;d>1;d--){var p=o.substring(0,d);if(0===e.indexOf(p)){a.push(r),n.push(t.find((function(e){return e.code===i}))),e=e.replace(p,"");break}}if(a.length>0)return"break"}};for(b.s();!(g=b.n()).done;){if("break"===m())break}}catch(e){b.e(e)}finally{b.f()}}var O,x=y(i);try{var S=function(){var r=O.value,i=r.name,u=r.provinceCode,f=r.cityCode,l=n[0],d=a[0];if(l||d){if(l&&l.code===u||(d&&d.code)===f){for(var p="",s=i.length;s>1;s--){var v=i.substring(0,s);if(0===e.indexOf(v)){p=v;break}}if(p)return c.push(r),!d&&a.push(o.find((function(e){return e.code===f}))),!l&&n.push(t.find((function(e){return e.code===u}))),e=e.replace(p,""),"break"}}else{for(var h=i.length;h>1;h--){var g=i.substring(0,h);if(0===e.indexOf(g)){c.push(r),a.push(o.find((function(e){return e.code===f}))),n.push(t.find((function(e){return e.code===u}))),e=e.replace(g,"");break}}if(c.length>0)return"break"}};for(x.s();!(O=x.n()).done;){if("break"===S())break}}catch(e){x.e(e)}finally{x.f()}return e.length>0&&u.push(e),{province:n,city:a,area:c,detail:u}},C=function(e,r){if(!e||!/[\u4E00-\u9FA5]/.test(e))return"";if(["先生","小姐","同志","哥哥","姐姐","妹妹","弟弟","妈妈","爸爸","爷爷","奶奶","姑姑","舅舅"].find((function(r){return~e.indexOf(r)})))return e;if(~["街道","乡镇","镇","乡"].findIndex((function(r){return~e.indexOf(r)})))return"";var n=e.substring(0,1);return e.length<=r&&e.length>1&&~f.indexOf(n)?e:""},N=function(e){var r="";e=(e=(e=(e=e.replace(/(\d{3})-(\d{4})-(\d{4})/g,"$1$2$3")).replace(/(\d{3}) (\d{4}) (\d{4})/g,"$1$2$3")).replace(/(\d{4}) \d{4} \d{4}/g,"$1$2$3")).replace(/(\d{4})/g,"$1");var n=/(0|\+?86-?|17951|)?1[3456789]\d{9}(-\d{4})?/g.exec(e);return n&&(r=n[0],e=e.replace(n[0]," ")),{address:e,phone:r.replace(/^\+?86-?/g,"")}},A=function(e){var r="",n=/[1-9]\d{5}(?!\d)/g.exec(e);return n&&(r=n[0],e=e.replace(n[0]," ")),{address:e,postalCode:r}},J=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e=e.replace(/\r\n/g," ").replace(/\n/g," ").replace(/\t/g," ");var n=["详细地址","收货地址","收件地址","地址","所在地区","姓名","收货人","收件人","联系人","收","邮编","联系电话","电话","联系人手机号码","手机号码","手机号","自治区直辖县级行政区划","省直辖县级行政区划"].concat(r);n.forEach((function(r){e=e.replace(new RegExp(r,"g")," ")}));var t=new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“’。，、？]","g");return e=(e=e.replace(t," ")).replace(/ {2,}/g," ")};j.init=function(e){var r=[];for(var n in e){var f=[];for(var s in e[n]){var h,b=[],m=y(e[n][s]);try{for(m.s();!(h=m.n()).done;){var O=h.value;b.push({code:O,name:O})}}catch(e){m.e(e)}finally{m.f()}f.push({code:s,name:s,children:b})}r.push({code:S[n],name:S[n],children:f})}var x=["行政区划"];r.forEach((function(e){e.children&&e.children.forEach((function(r,n){~x.findIndex((function(e){return~r.name.indexOf(e)}))&&(e.children=e.children.concat(r.children||[]),e.children.splice(n,1))}))})),t=r.reduce((function(e,r){r.children;var n=g(r,l);return e.concat(n)}),[]),o=r.reduce((function(e,r){return e.concat(r.children?r.children.map((function(e){e.children;return v(v({},g(e,d)),{},{provinceCode:r.code})})):[])}),[]),i=r.reduce((function(e,r){var n=r.code;return e.concat(r.children?r.children.reduce((function(e,r){var t=r.code;return e.concat(r.children?r.children.map((function(e){e.children;return v(v({},g(e,p)),{},{cityCode:t,provinceCode:n})})):[])}),[]):[])}),[]),a=JSON.stringify(t),c=JSON.stringify(o),u=JSON.stringify(i),t.length,o.length,i.length,j.isInit=!0,j.provinces=t,j.cities=o,j.areas=i},r.default=j}]).default}));