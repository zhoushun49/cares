KISSY.add("gallery/wwgroup/1.0/index",function(b,d){return d},{requires:["./wwgroup"]});
KISSY.add("gallery/wwgroup/1.0/wwgroup",function(b){function d(a){switch(a.attr("data-icon")){case "mini":a=e;break;case "small":a=c;break;case "medium":a=f;break;case "large":a=g;break;default:a=c}return a}var e="wwg-mini",c="wwg-small",f="wwg-medium",g="wwg-large";return function(){b.one("head").append("<style>.wwg-mini,.wwg-small,.wwg-medium,.wwg-large{cursor:pointer;display:inline-block;vertical-align:middle;overflow:hidden;}.wwg-mini{background:url(http://img02.taobaocdn.com/tps/i2/T1m206XhdDXXXXXXXX-25-20.gif) no-repeat;width:25px;height:20px;overflow:hidden;}.wwg-small{background:url(http://img04.taobaocdn.com/tps/i4/T1fdykXgtiXXXXXXXX-63-20.gif) no-repeat;width:63px;height:20px;overflow:hidden;}.wwg-medium{background:url(http://img03.taobaocdn.com/tps/i3/T1QLB6XgVDXXXXXXXX-42-33.gif) no-repeat;width:42px;height:33px;overflow:hidden;}.wwg-large{background:url(http://img01.taobaocdn.com/tps/i1/T1o2J6XoFFXXXXXXXX-84-33.gif) no-repeat;width:84px;height:33px;overflow:hidden;}.wwg-hack-for-ie{background:none;}</style>");b.all(".J_WWGroup").each(function(a){var c=
d(a);a.addClass(c);a.attr("title","\u70b9\u51fb\u8fd9\u91cc\u56f4\u89c2\u8be5\u7fa4");a.on("click",function(a){a=b.one(a.currentTarget).attr("data-group");window.open("aliim:tribevisit?uid=&tribeid="+a,"_self");b.UA.ie&&(b.all(".J_WWGroup").addClass("wwg-hack-for-ie"),b.all(".J_WWGroup").removeClass("wwg-hack-for-ie"))})})}});
