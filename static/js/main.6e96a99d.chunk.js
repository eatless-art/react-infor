(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{105:function(e,a,t){e.exports=t.p+"static/media/u2_normal.64523657.gif"},122:function(e,a,t){e.exports=t(209)},127:function(e,a,t){},128:function(e,a,t){},190:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){},206:function(e,a,t){},207:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(10),r=t.n(i),l=(t(127),t(4)),m=t(5),o=t(7),s=t(6),u=t(8),d=t(211),h=t(214),p=t(41),v=t(215),E=(t(27),t(128),t(105)),g=t.n(E),f=t(3),b=t(34),y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).out=function(){localStorage.clear()},t.one=function(){console.log(21343254)},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.location.pathname,a=c.a.createElement(d.a,null,c.a.createElement(d.a.Item,null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},c.a.createElement(f.c,{className:"/customer"===e?"active":"",to:"/customer"},"\u5ba2\u6237\u7ba1\u7406"))),c.a.createElement(d.a.Item,null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},c.a.createElement("span",{className:"/huodongguanli"===e?"active":"",to:"/huodongguanli"},"\u6d3b\u52a8\u7ba1\u7406"))),c.a.createElement(d.a.Item,null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},c.a.createElement("span",null,"\u67e5\u770b\u62a5\u544a"))));return c.a.createElement("div",{className:"header-wrap"},c.a.createElement("div",{className:"header-top"},c.a.createElement("img",{src:g.a,alt:""}),c.a.createElement("div",{className:"nav"},c.a.createElement("div",null,"jdchen2006@126.com "),c.a.createElement(f.c,{to:"/shezhi"},"\u7528\u6237\u8bbe\u7f6e"),c.a.createElement(f.c,{to:"/helpcenter"},"\u5e2e\u52a9\u4e2d\u5fc3"),c.a.createElement(f.c,{to:"/connectus"},"\u8054\u7cfb\u6211\u4eec"),c.a.createElement(h.a,{overlay:a},c.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"\u529f\u80fd ",c.a.createElement(v.a,null))),"/"===this.props.location.pathname?"":c.a.createElement(f.c,{to:"/"},c.a.createElement(p.a,{type:"primary",onClick:this.out},"\u9000\u51fa\u767b\u9646")))),"/header"===e||-1!==e.indexOf("/huodongguanli")||"/shezhi"===e||"/bianji"===e||"/add"===e||"/addactivity"===e||"/customer"===e?c.a.createElement("div",{className:"downnav"}):"",c.a.createElement("div",{className:"first-page"},c.a.createElement(f.c,{to:"/header"})," ",("/helpcenter"===e||"/customer"===e||"/add"===e||"/bianji"===e||e.indexOf("/huodongguanli"),"")))}}]),a}(n.Component),N=Object(b.e)(y),j=t(213),C=(t(190),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={usernameVal:"",passwordVal:"",isLogin:!1},t.change=function(e){t.setState({usernameVal:e.target.value})},t.change2=function(e){t.setState({passwordVal:e.target.value})},t.Judge=function(){var e=t.state,a=e.usernameVal,n=e.passwordVal;"xiaopan"===a&&"aaaaa"===n||t.setState({isLogin:!0})},t.Judge2=function(){t.setState({isLogin:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.usernameVal,n=a.passwordVal,i=a.isLogin;return c.a.createElement("div",{className:"login"},i?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8d26\u53f7\u6216\u8005\u5bc6\u7801\u9519\u8bef"),c.a.createElement(p.a,{type:"primary",onClick:this.Judge2},"\u786e\u5b9a"))):"",c.a.createElement("div",{className:"center"},c.a.createElement("h4",null,"\u7528\u6237\u4e2d\u5fc3"),c.a.createElement("div",{className:"zhangbox"}," ",c.a.createElement("label",{className:"username-label",htmlFor:"username"},"\u8d26\u53f7:"),c.a.createElement(j.a,{className:"username-box",onChange:function(a){return e.change(a)},value:t,id:"username",type:"text"})),c.a.createElement("div",{className:"mimabox"}," ",c.a.createElement("label",{htmlFor:"mima",className:"password-label"},"\u5bc6\u7801:"),c.a.createElement(j.a.Password,{className:"password-box",onChange:function(a){return e.change2(a)},value:n,id:"mima",type:"password"})),c.a.createElement("div",{className:"loginbtnbox"},c.a.createElement(f.c,{to:"xiaopan"===t&&"aaaaa"===n?"/header":"/"},c.a.createElement(p.a,{type:"primary",onClick:this.Judge,className:"loginbtn"},"\u767b\u5f55")))))}}]),a}(n.Component)),O=(t(199),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home-word"},c.a.createElement("h2",null,"SunMedia\u76d1\u6d4b\u7cfb\u7edf\u5df2\u6b63\u5f0f\u4e0a\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u4f7f\u7528\uff01"),c.a.createElement("p",null,"\u7ecf\u8fc7\u7cbe\u5fc3\u7684\u7814\u53d1\uff0cSunMedia\u91c7\u7528\u6700\u65b0\u7684\u56fd\u9645\u5316\u76d1\u6d4b\u7406\u5ff5\u7814\u53d1\u6210\u529f\u7684\u76d1\u6d4b\u7cfb\u7edf\u5df2\u6b63\u5f0f\u4e0a\u7ebf\uff0c\u5728\u6b64\u8fc7\u7a0b\u4e2d\u60a8\u5982\u679c\u9047\u5230\u4efb\u4f55\u95ee\u9898\u6216\u6709\u4efb\u4f55\u610f\u89c1\u6216\u5efa\u8bae\uff0c\u8bf7\u968f\u65f6\u70b9\u51fb\u6700\u4e0a\u65b9\u7684\u201c\u8054\u7cfb\u6211\u4eec\u201d\u6216\u70b9\u51fb\u8fd9\u91cc\u6765\u7ed9\u6211\u4eec\u7559\u8a00\u3002")))}}]),a}(n.Component)),k=(t(200),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"setup"},c.a.createElement("div",{className:"user-setup"},c.a.createElement("h2",null,"\u7528\u6237\u8bbe\u7f6e"),c.a.createElement("div",{className:"z1  set-box"}," ",c.a.createElement("label",{htmlFor:"o1"},"\u7528\u6237\u540d\uff1a"),c.a.createElement(j.a,{id:"o1",type:"text"})),c.a.createElement("div",{className:"z2  set-box"}," ",c.a.createElement("label",{htmlFor:"o2"},"\u5bc6\u7801:"),c.a.createElement(j.a,{id:"o2",type:"text"})),c.a.createElement("div",{className:"z3  set-box"},c.a.createElement("label",{htmlFor:"o3"},"\u65b0\u5bc6\u7801\uff1a"),c.a.createElement(j.a,{id:"o3",type:"text"})),c.a.createElement("div",{className:"z4 set-box"},c.a.createElement("label",{htmlFor:"o4"},"\u786e\u8ba4\u65b0\u5bc6\u7801\uff1a"),c.a.createElement(j.a,{autoSize:!1,id:"o4",type:"text"})),c.a.createElement("div",{className:"z5 set-box"}," ",c.a.createElement("label",{htmlFor:"o5"},"Email\uff1a"),c.a.createElement(j.a,{id:"o5",type:"text"})),c.a.createElement("div",{className:"z6 set-box"}," ",c.a.createElement("label",{htmlFor:"o6"},"\u59d3\u540d\uff1a"),c.a.createElement(j.a,{id:"o6",type:"text"})),c.a.createElement("div",{className:"z7 set-box"}," ",c.a.createElement("label",{htmlFor:"o7"},"\u7535\u8bdd\uff1a"),c.a.createElement(j.a,{id:"o7",type:"text"})),c.a.createElement("div",{className:"z8"},c.a.createElement(f.c,{to:"/header"}," ",c.a.createElement(p.a,{type:"primary"},"\u63d0\u4ea4")))))}}]),a}(n.Component)),x=(t(201),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"helpcenter"},c.a.createElement("div",{className:"title clearfix"},c.a.createElement("h4",{className:"left"},"\u5e2e\u52a9\u4e2d\u5fc3:"),c.a.createElement("div",{className:"right"},c.a.createElement("span",null,"\u76d1\u6d4b\u672f\u8bed"),c.a.createElement("span",null,"\u4f7f\u7528\u6559\u7a0b"),c.a.createElement("span",null,"\u5f55\u50cf\u6f14\u793a"))),c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"\u4ec0\u4e48\u662fCPA\u3001CPC\u3001CPS\u3001CPL\u3001CPM\u3001CPO\u3001PPC\u3001PPL\u3001CPTM\uff1f"),c.a.createElement("p",null,"\u5728\u6709\u5173\u7f51\u7edc\u5e7f\u544a\u7684\u672f\u8bed\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230CPA\u3001CPC\u3001CPM\u3001CPO\u3001PPC\u3001PPL\u3001CPTM\u7b49\u7f29\u5199\u5b57\u6bcd\uff0c\u8fd9\u4e9b\u90fd\u662f\u6709\u5173\u7f51\u7edc\u5e7f\u544a\u5b9a\u4ef7\u65b9\u5f0f\u7684\u7f29\u5199\u77ed\u8bed\uff0c\u4e0b\u9762\u662f\u5173\u4e8e\u7f51\u7edc\u5e7f\u544a\u5b9a\u4ef7\u6a21\u5f0f\u7684\u4e00\u7ec4\u5e38\u7528\u672f\u8bed\uff1a \u3000\u3000CPA (Cost-per-Action) \uff1a\u6bcf\u6b21\u884c\u52a8\u7684\u8d39\u7528\uff0c\u5373\u6839\u636e\u6bcf\u4e2a\u8bbf\u95ee\u8005\u5bf9\u7f51\u7edc\u5e7f\u544a\u6240\u91c7\u53d6\u7684\u884c\u52a8\u6536\u8d39\u7684\u5b9a\u4ef7\u6a21\u5f0f\u3002\u5bf9\u4e8e\u7528\u6237\u884c\u52a8\u6709\u7279\u522b\u7684\u5b9a\u4e49\uff0c\u5305\u62ec\u5f62\u6210\u4e00\u6b21\u4ea4\u6613\u3001\u83b7\u5f97\u4e00\u4e2a\u6ce8\u518c\u7528\u6237\u3001\u6216\u8005\u5bf9\u7f51\u7edc\u5e7f\u544a\u7684\u4e00\u6b21\u70b9\u51fb\u7b49\u3002 \u3000\u3000CPC (Cost-per-click)\uff1a \u6bcf\u6b21\u70b9\u51fb\u7684\u8d39\u7528\u3002\u6839\u636e\u5e7f\u544a\u88ab\u70b9\u51fb\u7684\u6b21\u6570\u6536\u8d39\u3002\u5982\u5173\u952e\u8bcd\u5e7f\u544a\u4e00\u822c\u91c7\u7528\u8fd9\u79cd\u5b9a\u4ef7\u6a21\u5f0f\u3002"),c.a.createElement("p",null,"CPL(Cost for Per Lead)\uff1a\u6309\u6ce8\u518c\u6210\u529f\u652f\u4ed8\u4f63\u91d1\u3002 \u3000\u3000CPM\uff08Cost per Thousand Impressions\uff09\uff1a\u6bcf\u5343\u6b21\u5370\u8c61\u8d39\u7528\u3002\u5e7f\u544a\u6761\u6bcf\u663e\u793a1000\u6b21\uff08\u5370\u8c61\uff09\u7684\u8d39\u7528\u3002CPM\u662f\u6700\u5e38\u7528\u7684\u7f51\u7edc\u5e7f\u544a\u5b9a\u4ef7\u6a21\u5f0f\u4e4b\u4e00\u3002 \u3000\u3000CPO (Cost-per-Order) \uff1a\u4e5f\u79f0\u4e3aCost-per-Transaction\uff0c\u5373\u6839\u636e\u6bcf\u4e2a\u8ba2\u5355/\u6bcf\u6b21\u4ea4\u6613\u6765\u6536\u8d39\u7684\u65b9\u5f0f\u3002 \u3000\u3000CPS(Cost for Per Sale)\uff1a\u8425\u9500\u6548\u679c\u662f\u6307\uff0c\u9500\u552e\u989d\u3002 \u3000\u3000PPC\uff08Pay-per-Click\uff09\uff1a\u662f\u6839\u636e\u70b9\u51fb\u5e7f\u544a\u6216\u8005\u7535\u5b50\u90ae\u4ef6\u4fe1\u606f\u7684\u7528\u6237\u6570\u91cf\u6765\u4ed8\u8d39\u7684\u4e00\u79cd\u7f51\u7edc\u5e7f\u544a\u5b9a\u4ef7\u6a21\u5f0f\u3002 \u3000\u3000PPL\uff08Pay-per-Lead\uff09\uff1a\u6839\u636e\u6bcf\u6b21\u901a\u8fc7\u7f51\u7edc\u5e7f\u544a\u4ea7\u751f\u7684\u5f15\u5bfc\u4ed8\u8d39\u7684\u5b9a\u4ef7\u6a21\u5f0f\u3002\u4f8b\u5982\uff0c\u5e7f\u544a\u5ba2\u6237\u4e3a\u8bbf\u95ee\u8005\u70b9\u51fb\u5e7f\u544a\u5b8c\u6210\u4e86\u5728\u7ebf\u8868\u5355\u800c\u5411\u5e7f\u544a\u670d\u52a1\u5546\u4ed8\u8d39\u3002\u8fd9\u79cd\u6a21\u5f0f\u5e38\u7528\u4e8e\u7f51\u7edc\u4f1a\u5458\u5236\u8425\u9500\u6a21\u5f0f\u4e2d\u4e3a\u8054\u76df\u7f51\u7ad9\u5236\u5b9a\u7684\u4f63\u91d1\u6a21\u5f0f\u3002"),c.a.createElement("p",null,"PPS\uff08Pay-per-Sale\uff09\uff1a\u6839\u636e\u7f51\u7edc\u5e7f\u544a\u6240\u4ea7\u751f\u7684\u76f4\u63a5\u9500\u552e\u6570\u91cf\u800c\u4ed8\u8d39\u7684\u4e00\u79cd\u5b9a\u4ef7\u6a21\u5f0f \u3002 \u3000\u3000CPTM (Cost per Targeted Thousand Impressions) \uff1a\u7ecf\u8fc7\u5b9a\u4f4d\u7684\u7528\u6237\uff08\u5982\u6839\u636e\u4eba\u53e3\u7edf\u8ba1\u4fe1\u606f\u5b9a\u4f4d\uff09\u7684\u5343\u6b21\u5370\u8c61\u8d39\u7528\u3002CPTM\u4e0eCPM\u7684\u533a\u522b\u5728\u4e8e\uff0cCPM\u662f\u6240\u6709\u7528\u6237\u7684\u5370\u8c61\u6570\uff0c\u800cCPTM\u53ea\u662f\u7ecf\u8fc7\u5b9a\u4f4d\u7684\u7528\u6237\u7684\u5370\u8c61\u6570\u3002")))}}]),a}(n.Component)),w=(t(202),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"callme"},c.a.createElement("div",{className:"title"},"\u8bf7\u5728\u4e0b\u9762\u7559\u4e0b\u60a8\u7684\u4efb\u4f55\u610f\u89c1\u3001\u5efa\u8bae\u3001\u60f3\u6cd5\u6216\u6295\u8bc9\uff0c\u6211\u4eec\u4f1a\u672c\u7740\u670d\u52a1\u81f3\u4e0a\u7684\u539f\u5219\u5c3d\u5feb\u5904\u7406\uff1a"),c.a.createElement("div",{className:"callcontent"},c.a.createElement("div",{className:"clearfix"}," ",c.a.createElement("label",{htmlFor:"b1"}," \u60a8\u7684\u59d3\u540d\uff1a")," ",c.a.createElement(j.a,{id:"b1",type:"text"})),c.a.createElement("div",{className:"clearfix"}," ",c.a.createElement("label",{htmlFor:"b2"},"\u60a8\u7684Email\uff1a"),c.a.createElement(j.a,{id:"b2",type:"text"})),c.a.createElement("div",{className:"clearfix"}," ",c.a.createElement("label",{htmlFor:"b3"},"\u60a8\u7684\u7535\u8bdd\uff1a"),c.a.createElement(j.a,{id:"b3",type:"text"})),c.a.createElement("div",{className:"clearfix"}," ",c.a.createElement("label",{htmlFor:"b4"},"\u60a8\u7684\u7559\u8a00\uff1a")," ",c.a.createElement("textarea",{className:"liuyan",name:"",id:"b4",cols:"50",rows:"10"}))),c.a.createElement("div",{className:"btnbox"},c.a.createElement(f.c,{to:"/header"}," ",c.a.createElement(p.a,{type:"primary"},"\u63d0\u4ea4"))))}}]),a}(n.Component)),P=t(26),S=t(67),z=Object(S.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{arr:[{dui:!1,num:"100861",name:"HP Computers",mianshu:"HP\u516c\u53f8\u4e92\u52a8\u90e8\u4ee3\u7406",activenum:"3",customer:"Solar, Helen",id:12,huodong:[{gou:!1,huodongid:"3333",hudongmingcheng:"FY2018",biegntime:"2007-3-1",endtime:"2007-10-1",huodongcontent:[{id:"33889",name:"\u65b0\u673a\u578bXPS\u4e0a\u5e02",miaoshu:"2007\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408",jiancedian:"53",zhuangtai:"\u8fd0\u884c",fangke:"2323",num:"32",biegntime:"2007-3-1",endtime:"2007-10-1",leixing:"\u7f51\u7ad9"},{id:"3349917",name:"\u7b2c\u4e8c\u7f51\u7ad9",miaoshu:"2008\u8d22\u5e74\u6d3b\u662f\u771f\u7684",jiancedian:"522",zhuangtai:"\u8349\u7a3f",fangke:"23",num:"342",biegntime:"2006-3-1",endtime:"2008-10-1",leixing:"\u7f51\u7ad9"},{id:"387499",name:"\u7b2c\u4e09\u7f51\u7ad9",miaoshu:"2008\u54e6\u54c1\u5e74\u6d3b\u662f\u771f\u7684",jiancedian:"512",zhuangtai:"\u6682\u505c",fangke:"24",num:"312",biegntime:"2005-3-1",endtime:"2007-10-1",leixing:"\u5e7f\u544a\u6295\u653e"}]},{gou:!1,huodongid:"122233",hudongmingcheng:"FY2019",biegntime:"2009-3-1",endtime:"2010-10-1",huodongcontent:[{id:"3119",name:"\u65b0\u673a\u578bXPS\u4e0a\u5e02",miaoshu:"2007\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408",jiancedian:"53",zhuangtai:"\u8fd0\u884c",fangke:"2323",num:"32",biegntime:"2007-3-1",endtime:"2007-10-1",leixing:"\u7f51\u7ad9"},{id:"1227",name:"\u7b2c\u4e8c\u7f51\u7ad9",miaoshu:"2008\u8d22\u5e74\u6d3b\u662f\u771f\u7684",jiancedian:"522",zhuangtai:"\u8349\u7a3f",fangke:"23",num:"342",biegntime:"2006-3-1",endtime:"2008-10-1",leixing:"\u7535\u5b50\u6742\u5fd7"},{id:"55599",name:"\u7b2c\u4e09\u7f51\u7ad9",miaoshu:"2008\u54e6\u54c1\u5e74\u6d3b\u662f\u771f\u7684",jiancedian:"512",zhuangtai:"\u6682\u505c",fangke:"24",num:"312",biegntime:"2005-3-1",endtime:"2007-10-1",leixing:"\u7f51\u7ad9"}]}]},{dui:!1,num:"100862",name:"DELL Computers",mianshu:"Dell\u516c\u53f8\u4e92\u52a8\u90e8\u4ee3\u7406",activenum:"4",customer:"Sanzhi",id:32,huodong:[{gou:!1,huodongid:"3355",hudongmingcheng:"FY2019",biegntime:"2009-8-1",endtime:"2010-10-1",huodongcontent:[{id:"300499",name:"\u65b0\u673a\u578boppo\u4e0a\u5e02",miaoshu:"2009\u5339\u914d\u6d3b\u52a8\u96c6\u5408",jiancedian:"53",zhuangtai:"\u8fd0\u884c",fangke:"2323",num:"32",biegntime:"2006-3-1",endtime:"2007-10-1",leixing:"\u7535\u5b50\u6742\u5fd7"},{id:"39499",name:"\u7b2c\u56db\u7f51\u7ad9",miaoshu:"2000\u8d22\u5e74\u6d3b\u662f",jiancedian:"522",zhuangtai:"\u8349\u7a3f",fangke:"23",num:"342",biegntime:"2006-3-1",endtime:"2008-10-1",leixing:"\u7f51\u7ad9"},{id:"13499",name:"\u7b2c\u4e94\u7f51\u7ad9",miaoshu:"\u54c1\u5e74\u6d3b\u662f\u771f\u7684",jiancedian:"512",zhuangtai:"\u6682\u505c",fangke:"24",num:"312",biegntime:"2005-3-1",endtime:"2007-10-1",leixing:"\u5e7f\u544a\u6295\u653e"}]}]},{dui:!1,num:"100863",name:"Huawei Computers",mianshu:"Huawei\u516c\u53f8\u4e92\u52a8\u90e8\u4ee3\u7406",activenum:"5",customer:"Renzhengfei",id:43,huodong:[{gou:!1,huodongid:"3383",hudongmingcheng:"FY2018",biegntime:"2007-3-1",endtime:"2007-10-1",huodongcontent:[{id:"33499",name:"\u65b0\u4e0a\u5e02",miaoshu:"2022\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408",jiancedian:"53",zhuangtai:"\u8fd0\u884c",fangke:"2323",num:"32",biegntime:"2007-3-1",endtime:"2007-10-1",leixing:"\u7f51\u7ad9"},{id:"33490",name:"\u7b2c\u516d\u7f51\u7ad9",miaoshu:"2008\u55ef\u55ef\u662f\u771f\u7684",jiancedian:"522",zhuangtai:"\u8349\u7a3f",fangke:"23",num:"342",biegntime:"2006-3-1",endtime:"2008-10-1",leixing:"\u5e7f\u544a\u6295\u653e"},{id:"3199",name:"\u7b2c\u4e03\u7f51\u7ad9",miaoshu:"2008\u771f\u7684",jiancedian:"512",zhuangtai:"\u6682\u505c",fangke:"24",num:"312",biegntime:"2005-3-1",endtime:"2007-10-1",leixing:"\u7f51\u7ad9"}]}]}]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHAI":var t=e.arr;if("mingcheng"===a.val)var n=t.filter((function(e){if(-1!==e.name.indexOf(a.cha))return e}));else if("bianhao"===a.val)n=t.filter((function(e){if(-1!==e.num.indexOf(a.cha))return e}));return console.log(n),{arr:n};case"ALL":var c=e.arr,i=c.map((function(e){return e.dui=a.checked,e}));return{arr:i};case"ALLL":var r=e.arr.filter((function(e){return e.id==a.id2})),l=r[0].huodong,m=l.map((function(e){return e.gou=a.checked,e})),o=[].concat(Object(P.a)(l),[m]),s=[].concat(Object(P.a)(r),[o]);return{arr:s};case"DEL":var u=e.arr,d=u.filter((function(e){return!0!==e.dui}));return{arr:d};case"DELLL":var h=e.arr.filter((function(e){return e.id==a.id})),p=h[0].huodong,v=p.filter((function(e){return!0!==e.gou})),E=[].concat(Object(P.a)(h),[v]);return{arr:E};case"GAI":var g=e.arr.reduce((function(e,t){return t.id===a.id&&(t.dui=!t.dui),[].concat(Object(P.a)(e),[t])}),[]);return{arr:g};case"GAII":var f=e.arr.filter((function(e){return e.id==a.id2})),b=f[0].huodong,y=b.reduce((function(e,t){return t.huodongid===a.id&&(t.gou=!t.gou),[].concat(Object(P.a)(e),[t])}),[]),N=[].concat(Object(P.a)(b),[y]),j=[].concat(Object(P.a)(f),[N]);return{arr:j};case"ADD":var C=e.arr,O=(new Date).getTime();return C.push({dui:!1,num:a.inputVal,name:a.val,mianshu:a.vall,activenum:"5",customer:a.valw,id:O}),{arr:C};case"ADDH":var k=e.arr.filter((function(e){return e.id==a.id4})),x=k[0].huodong,w=(new Date).getTime();x.push({gou:!1,huodongid:w,hudongmingcheng:a.c1,biegntime:"2020-3-1",endtime:"2030-10-1",huodongcontent:[{id:"33889",name:"\u65b0\u673a\u578bXPS\u4e0a\u5e02",miaoshu:"2007\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408",jiancedian:"53",zhuangtai:"\u8fd0\u884c",fangke:"2323",num:"32",biegntime:"2007-3-1",endtime:"2007-10-1"}]});var S=[].concat(Object(P.a)(k),[x]);return{arr:S};default:return e}})),L=(t(204),t(12)),A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={val:"mingcheng",checked:!1,cha:"",shi:!1},t.tianjia=function(){!0===t.props.arr.every((function(e){return!1===e.dui}))&&t.setState({shi:!0})},t.panduan2=function(){t.setState({shi:!1})},t.chazhao=function(){var e=t.state,a=e.val,n=e.cha;z.dispatch({type:"SHAI",val:a,cha:n})},t.cha=function(e){t.setState({cha:e.target.value})},t.allchange=function(e){t.setState({checked:!t.state.checked});var a=e.target.checked;z.dispatch({type:"ALL",checked:a})},t.handleChange=function(e){t.setState({val:e.target.value}),console.log(t.props.arr)},t.change=function(e){z.dispatch({type:"GAI",id:e})},t.del=function(){z.dispatch({type:"DEL"})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.val,n=a.checked,i=a.cha,r=a.shi,l=this.props.arr,m=l.every((function(e){return!1===e.dui}));return c.a.createElement("div",{className:"customer"},r?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8bf7\u52fe\u9009\u4e0b\u9762\u4e00\u9879"),c.a.createElement(p.a,{onClick:this.panduan2,type:"primary"},"\u786e\u5b9a"))):"",c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"add "},c.a.createElement(f.c,{to:"/add",className:"tianjia"},"\u6dfb\u52a0\u7528\u6237"),c.a.createElement("span",{className:"daochu"},"[\u5bfc\u51fa\u5217\u8868]")),c.a.createElement("div",{className:"xuanze "},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,"\u64cd\u4f5c:"),c.a.createElement(f.c,{className:"bian",to:!0===m?"/customer":"/add"},c.a.createElement("span",{onClick:this.tianjia},"\u7f16\u8f91")),c.a.createElement("span",{onClick:this.del,className:"del"},"\u5220\u9664")),c.a.createElement("div",{className:"right"},c.a.createElement("label",{htmlFor:"p1"},"\u5728\u6b64\u5904"),c.a.createElement("select",{value:t,onChange:this.handleChange.bind(this.event)},c.a.createElement("option",{value:"mingcheng"},"\u5ba2\u6237\u540d\u79f0"),c.a.createElement("option",{value:"bianhao"},"\u5ba2\u6237\u7f16\u53f7")),c.a.createElement("label",{htmlFor:"p2"},"\u67e5\u627e"),c.a.createElement("input",{value:i,onChange:function(a){return e.cha(a)},id:"p2",type:"text"}),c.a.createElement("button",{onClick:this.chazhao},"\u67e5\u627e"))),c.a.createElement("div",{className:"bianhaocontent"},l.length?c.a.createElement("div",{className:"ban"},c.a.createElement("div",{className:"input"},c.a.createElement("input",{onChange:function(a){return e.allchange(a)},checked:n,type:"checkbox"}),l.map((function(a){return c.a.createElement("input",{className:"chose",key:a.id,onChange:e.change.bind(e,a.id),type:"checkbox",checked:a.dui})}))),c.a.createElement("div",{className:"bianhao0"},c.a.createElement("div",null,"\u5ba2\u6237\u7f16\u53f7"),l.map((function(e){return c.a.createElement(f.c,{to:"/activitymange/".concat(e.id),key:e.id},e.num)}))),c.a.createElement("div",{className:"mingcheng3"},c.a.createElement("div",null,"\u5ba2\u6237\u540d\u79f0"),l.map((function(e){return c.a.createElement(f.c,{to:"/activitymange/".concat(e.id),key:e.id,className:""},e.name)}))),c.a.createElement("div",{className:"miaoshu2"},c.a.createElement("div",null,"\u63cf\u8ff0"),l.map((function(e){return c.a.createElement("div",{key:e.id},e.mianshu)}))),c.a.createElement("div",{className:"huodongshu"},c.a.createElement("div",null,"\u6d3b\u52a8\u6570"),l.map((function(e){return c.a.createElement("div",{key:e.id},e.activenum)}))),c.a.createElement("div",{className:"yonghufenpei"},c.a.createElement("div",null,"\u7528\u6237\u5206\u914d"),l.map((function(e){return c.a.createElement("div",{key:e.id},e.customer)})))):c.a.createElement("span",null,"\u65e0"))))}}]),a}(n.Component),F=Object(L.b)((function(e){return{arr:e.arr}}))(A),D=t(121),I=(t(205),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={inputVal:"",val:"",vall:"",valw:"\u7ba1\u7406\u8005",shi:!1},t.change=function(e,a){t.setState(Object(D.a)({},e,a.target.value))},t.handleChange=function(e){t.setState({valw:e.target.value})},t.tijiao=function(e,a,n,c){e.trim()&&a.trim()&&n.trim()&&c.trim()?(z.dispatch({type:"ADD",inputVal:e,val:a,vall:n,valw:c}),t.props.history.push("/customer")):t.setState({shi:!0})},t.panduan2=function(){t.setState({shi:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.inputVal,n=a.val,i=a.vall,r=a.valw,l=a.shi;return c.a.createElement("div",{className:"addye"},l?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8f93\u5165\u6846\u4e0d\u80fd\u4e3a\u7a7a"),c.a.createElement(p.a,{type:"primary",onClick:this.panduan2},"\u786e\u5b9a"))):"",c.a.createElement("h2",{className:"title"},"\u6dfb\u52a0\u65b0\u5ba2\u6237"),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"bianhao"},c.a.createElement("label",{htmlFor:"m1"},"\u5ba2\u6237\u7f16\u53f7:"),c.a.createElement(j.a,{onChange:function(a){return e.change("inputVal",a)},id:"m1",value:t,type:"text"})),c.a.createElement("div",{className:"mingcheng"},c.a.createElement("label",{htmlFor:"m2"},"\u5ba2\u6237\u540d\u79f0:"),c.a.createElement(j.a,{onChange:function(a){return e.change("val",a)},id:"m2",value:n,type:"text"})),c.a.createElement("div",{className:"miaoshu"},c.a.createElement("label",{htmlFor:"m3"},"\u63cf\u8ff0:"),c.a.createElement(j.a,{id:"m3",onChange:function(a){return e.change("vall",a)},value:i,type:"text"})),c.a.createElement("div",{className:"feipei"},c.a.createElement("label",{htmlFor:"m5"},"\u7528\u6237\u5206\u914d\uff1a"),c.a.createElement("select",{id:"m5",value:r,onChange:this.handleChange.bind(this.event)},c.a.createElement("option",{value:"\u7ba1\u7406\u8005"},"\u7ba1\u7406\u5458"),c.a.createElement("option",{value:"Sherry"},"Sherry"),c.a.createElement("option",{value:"Solar"},"Solar"),c.a.createElement("option",{value:"Andy"},"Andy"))),c.a.createElement("div",{className:"btnbox"},c.a.createElement(p.a,{type:"primary",onClick:function(){return e.tijiao(t,n,i,r)}},"\u63d0\u4ea4"),c.a.createElement(f.c,{to:"/customer"},c.a.createElement(p.a,{type:"primary"},"\u53d6\u6d88")))))}}]),a}(n.Component)),M=Object(L.b)((function(e){return{arr:e.arr}}))(I),V=(t(206),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={val:"mingcheng",checked:!1,cha:"",shi:!1},t.del=function(){t.props.arr;var e=t.props.match.params.id;z.dispatch({type:"DELLL",id:e})},t.jump=function(){var e=t.props.arr,a=t.props.match.params.id,n=e.filter((function(e){return e.id==a}))[0].huodong.every((function(e){return!1===e.gou}));console.log(n),n?t.setState({shi:!0}):t.props.history.push("/bianjihuodong/".concat(a))},t.change=function(e){var a=t.props.match.params.id;z.dispatch({type:"GAII",id:e,id2:a})},t.handleChange=function(e){t.setState({val:e.target.value})},t.cha=function(e){t.setState({cha:e.target.value})},t.chazhao=function(){var e=t.state,a=e.val,n=e.cha;console.log(a,n)},t.chchange=function(e){t.setState({checked:!t.state.checked});var a=e.target.checked,n=t.props.match.params.id;z.dispatch({type:"ALLL",checked:a,id2:n})},t.panduan2=function(){t.setState({shi:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.checked,n=a.shi,i=this.props.arr,r=this.props.match.params.id,l=i.filter((function(e){return e.id==r}));return c.a.createElement("div",{className:"acitivity-mange"},n?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8bf7\u52fe\u9009"),c.a.createElement(p.a,{type:"primary",onClick:this.panduan2},"\u786e\u5b9a"))):"",c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"uptitle"},c.a.createElement(f.c,{to:"/addactivity/".concat(r),className:"left"},"\u6dfb\u52a0\u6d3b\u52a8\u96c6"),c.a.createElement("div",{className:"right"},"[\u5bfc\u51fa\u5217\u8868]")),c.a.createElement("div",{className:"miantitle "},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,"\u64cd\u4f5c\uff1a"),c.a.createElement("span",{className:"jump",onClick:this.jump},"\u7f16\u8f91"),c.a.createElement("span",{onClick:this.del},"\u5220\u9664")),c.a.createElement("div",{className:"number-content"},l[0].huodong.length?c.a.createElement("div",{className:"ban"},c.a.createElement("div",{className:"input"},c.a.createElement("input",{onChange:function(a){return e.chchange(a)},checked:t,type:"checkbox"}),l[0].huodong.map((function(a){return c.a.createElement("input",{key:a.huodongid,onChange:e.change.bind(e,a.huodongid),type:"checkbox",checked:a.gou})}))),c.a.createElement("div",{className:"bianhao0"},c.a.createElement("div",null,"\u6d3b\u52a8\u96c6\u540d\u79f0"),l[0].huodong.map((function(e){return c.a.createElement(f.c,{to:"/activity/".concat(r),key:e.huodongid},e.hudongmingcheng)}))),c.a.createElement("div",{className:"miaoshu2"},c.a.createElement("div",null,"\u63cf\u8ff0"),l[0].huodong.map((function(e){return c.a.createElement("div",{key:e.huodongid},"2007\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408")}))),c.a.createElement("div",{className:"activenum"},c.a.createElement("div",null,"\u6d3b\u52a8\u6570"),l[0].huodong.map((function(e){return c.a.createElement("div",{key:e.huodongid},e.huodongcontent.length)}))),c.a.createElement("div",{className:"begintime"},c.a.createElement("div",null,"\u5f00\u59cb\u65f6\u95f4"),l[0].huodong.map((function(e){return c.a.createElement("div",{key:e.huodongid},e.biegntime)}))),c.a.createElement("div",{className:"endtime"},c.a.createElement("div",null,"\u7ed3\u675f\u65f6\u95f4"),l[0].huodong.map((function(e){return c.a.createElement("div",{key:e.huodongid},e.endtime)})))):c.a.createElement("span",null,"\u8bf7\u6dfb\u52a0")))))}}]),a}(n.Component)),T=Object(L.b)((function(e){return{arr:e.arr}}))(V),H=(t(207),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={c1:"",c2:"",shi:!1},t.add=function(){var e=t.state,a=e.c1,n=e.c2,c=t.props.match.params.id;a.trim()&&n.trim()?(z.dispatch({type:"ADDH",c1:a,c2:n,id4:c}),t.props.history.push("/activitymange/".concat(c))):t.setState({shi:!0}),z.dispatch({type:"ADDH",c1:a,c2:n,id4:c})},t.ca=function(e){t.setState({c1:e.target.value})},t.cb=function(e){t.setState({c2:e.target.value})},t.panduan2=function(){t.setState({shi:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.c1,n=a.c2,i=a.shi,r=this.props.match.params.id;return c.a.createElement("div",{className:"addhuodong"},i?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8f93\u5165\u6846\u4e0d\u80fd\u4e3a\u7a7a"),c.a.createElement(p.a,{type:"primary",onClick:this.panduan2},"\u786e\u5b9a"))):"",c.a.createElement("h3",{className:"title"},"\u6dfb\u52a0\u65b0\u6d3b\u52a8\u96c6"),c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"c1"},"\u6d3b\u52a8\u540d\u79f0:"),c.a.createElement(j.a,{onChange:function(a){return e.ca(a)},value:t,id:"c1",type:"text"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"c2"},"\u6d3b\u52a8\u63cf\u8ff0:"),c.a.createElement(j.a,{onChange:function(a){return e.cb(a)},value:n,id:"c2",type:"text"})),c.a.createElement("div",null,c.a.createElement(p.a,{onClick:this.add,type:"primary"},"\u63d0\u4ea4"),c.a.createElement(f.c,{to:"/activitymange/".concat(r)},c.a.createElement(p.a,{type:"primary"},"\u53d6\u6d88")))))}}]),a}(n.Component)),J=Object(L.b)((function(e){return{arr:e.arr}}))(H),Y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={c1:"FY2007",c2:"2007\u8d22\u5e74\u6d3b\u52a8\u96c6\u5408",shi:!1},t.add=function(){var e=t.state,a=e.c1,n=e.c2,c=t.props.match.params.id;a.trim()&&n.trim()?t.props.history.push("/activitymange/".concat(c)):t.setState({shi:!0})},t.ca=function(e){t.setState({c1:e.target.value})},t.cb=function(e){t.setState({c2:e.target.value})},t.panduan2=function(){t.setState({shi:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.c1,n=a.c2,i=a.shi,r=this.props.match.params.id;return c.a.createElement("div",{className:"bianjihuodong"}," ",i?c.a.createElement("div",{className:"yin"},c.a.createElement("div",{className:"yin-box"},c.a.createElement("div",null,"\u8f93\u5165\u6846\u4e0d\u80fd\u4e3a\u7a7a"),c.a.createElement("button",{onClick:this.panduan2},"\u786e\u5b9a"))):"",c.a.createElement("h3",{className:"title"},"\u6dfb\u52a0\u65b0\u6d3b\u52a8\u96c6"),c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"c1"},"\u6d3b\u52a8\u540d\u79f0:"),c.a.createElement("input",{onChange:function(a){return e.ca(a)},value:t,id:"c1",type:"text"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"c2"},"\u6d3b\u52a8\u63cf\u8ff0:"),c.a.createElement("input",{onChange:function(a){return e.cb(a)},value:n,id:"c2",type:"text"})),c.a.createElement("div",null,c.a.createElement("button",{onClick:this.add},"\u63d0\u4ea4"),c.a.createElement(f.c,{to:"/activitymange/".concat(r)},c.a.createElement("button",null,"\u53d6\u6d88")))))}}]),a}(n.Component),G=Object(L.b)((function(e){return{arr:e.arr}}))(Y),_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={val:"mingcheng",cha:""},t.handleChange=function(e){t.setState({val:e.target.value})},t.cha=function(e){t.setState({cha:e.target.value})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.endtime,t=e.biegntime,n=e.num,i=e.fangke,r=e.zhuangtai,l=e.jiancedian,m=e.miaoshu,o=e.name,s=e.leixing;return c.a.createElement("div",{className:"small"},c.a.createElement("div",{className:"small-top"}," ",c.a.createElement("div",{className:"title"},s)),c.a.createElement("div",{className:"one"},c.a.createElement("div",{className:"top"},"\u6d3b\u52a8\u540d\u79f0"),c.a.createElement("div",{className:"down"},o)),c.a.createElement("div",{className:"two"},c.a.createElement("div",{className:"top"},"\u63cf\u8ff0"),c.a.createElement("div",{className:"down"},m)),c.a.createElement("div",{className:"three"},c.a.createElement("div",{className:"top"},"\u76d1\u6d4b\u70b9"),c.a.createElement("div",{className:"down"},l)),c.a.createElement("div",{className:"four"},c.a.createElement("div",{className:"top"},"\u6d3b\u52a8\u72b6\u6001"),c.a.createElement("div",{className:"down"},r)),c.a.createElement("div",{className:"five"},c.a.createElement("div",{className:"top"},"\u552f\u4e00\u8bbf\u5ba2"),c.a.createElement("div",{className:"down"},i)),c.a.createElement("div",{className:"six"},c.a.createElement("div",{className:"top"},"\u8bbf\u5ba2\u91cf"),c.a.createElement("div",{className:"down"},n)),c.a.createElement("div",{className:"seven"},c.a.createElement("div",{className:"top"},"\u5f00\u59cb\u65f6\u95f4"),c.a.createElement("div",{className:"down"},t)),c.a.createElement("div",{className:"eight"},c.a.createElement("div",{className:"top"}," \u7ed3\u675f\u65f6\u95f4"),c.a.createElement("div",{className:"down"},a)),c.a.createElement("div",{className:"nine"},c.a.createElement("div",{className:"top"},"\u64cd\u4f5c"),c.a.createElement("div",{className:"down"},"\u67e5\u770b\u62a5\u544a")))}}]),a}(n.Component),X=(t(208),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.arr,a=this.props.match.params.id,t=e.filter((function(e){return e.id==a}))[0].huodong[0].huodongcontent;return c.a.createElement("div",{className:"activity-page"},t.length?t.map((function(e){return c.a.createElement(_,{endtime:e.endtime,biegntime:e.biegntime,num:e.num,fangke:e.fangke,zhuangtai:e.zhuangtai,jiancedian:e.jiancedian,miaoshu:e.miaoshu,name:e.name,leixing:e.leixing,key:e.id})})):c.a.createElement("span",null,"\u8bf7\u6dfb\u52a0\u6d3b\u52a8"))}}]),a}(n.Component)),B=Object(L.b)((function(e){return{arr:e.arr}}))(X),W=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement(N,null),c.a.createElement(b.a,{exact:!0,path:"/",component:C}),c.a.createElement(b.a,{path:"/header",component:O}),c.a.createElement(b.a,{path:"/shezhi",component:k}),c.a.createElement(b.a,{path:"/helpcenter",component:x}),c.a.createElement(b.a,{path:"/connectus",component:w}),c.a.createElement(b.a,{path:"/customer",component:F}),c.a.createElement(b.a,{path:"/add",component:M}),c.a.createElement(b.a,{path:"/activitymange/:id",component:T}),c.a.createElement(b.a,{path:"/addactivity/:id",component:J}),c.a.createElement(b.a,{path:"/bianjihuodong/:id",component:G}),c.a.createElement(b.a,{path:"/activity/:id",component:B}))}}]),a}(n.Component);var R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f.b,null,c.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(L.a,{store:z},c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.6e96a99d.chunk.js.map