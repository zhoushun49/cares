KISSY.add("gallery/kcharts/1.1/scatterchart/index",function(g,m,o,j,q,r,p,u,s,v,t,k){var h=g.all,l=g.Event,i="ks-chart-default",n,m=function(a){this._cfg=a;this._cfg.zoomType="xy";this.init()};g.extend(m,j,{init:function(){j.prototype.init.call(this,this._cfg);this.chartType="scatterchart";if(this._$ctnNode[0]){var a={themeCls:i,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},
points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}",opacity:0.6},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0,opacity:0.6}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px",position:"absolute"}},xAxis:{isShow:!0,css:{}},yAxis:{isShow:!0,css:{},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},
boundryDetect:!0}};this._finished=[];i=this._cfg.themeCls||a.themeCls;this._cfg=g.mix(g.mix(a,s[i],k,k,!0),this._cfg,k,k,!0);this.color=n=new r({themeCls:i});0<this._cfg.colors.length&&n.removeAllColors();for(var b in this._cfg.colors)n.setColor(this._cfg.colors[b]);this._cfg.autoRender&&this.render(!0)}},drawTitle:function(){var a=this.htmlPaper,b=i+"-title",c=this._cfg,d=0.6*this._innerContainer.y;c.title.isShow&&""!=c.title.content&&(this._title=a.rect(0,0,this._$ctnNode.width(),d).addClass(b).css(g.mix({"line-height":d+
"px"},c.title.css)).html(c.title.content))},drawSubTitle:function(){var a=this.htmlPaper,b=i+"-subtitle",c=this._cfg,d=this._innerContainer,f=0.4*d.y;c.subTitle.isShow&&""!=c.subTitle.content&&(this._subTitle=a.rect(0,0.6*d.y,this._$ctnNode.width(),f).addClass(b).css(g.mix({"line-height":f+"px"},c.subTitle.css)).html(c.subTitle.content))},processAttr:function(a,b){var c=g.clone(a),d;for(d in c)c[d]&&"string"==typeof c[d]&&(c[d]=c[d].replace("{COLOR}",b));return c},diffStocksSize:function(){var a=
this._cfg.points.attr.r,b=this._datas.cur,c=[],d;for(d in b)c=c.concat(j.prototype.getArrayByKey.call(null,b[d].data,2));g.log(c);if(c.length)for(d in Math.min.apply(null,c),this._points){var c=j.prototype.getArrayByKey.call(null,b[d].data,2),f;for(f in this._points[d])0<c.length&&(this._points[d][f].r=c[f]*a)}},drawStocks:function(){this._stocks={};for(var a in this._points){var b=[],c;for(c in this._points[a]){var d=this.color.getColor(a).DEFAULT;b[c]=this.drawStock(this._points[a][c].x,this._points[a][c].y,
this._points[a][c].r,g.mix(this._cfg.points.attr,{stroke:d,fill:d,r:this._points[a][c].r}))}this._stocks[a]={stocks:b}}},drawStock:function(a,b,c,d){var f=this._cfg.points.attr;return this.paper.circle(a,b,c,d).attr(f).attr(d)},drawGridsX:function(){for(var a=this._centerPoints,b=0,c=a.length;b<c;b++)this._gridsX.push(this.drawGridX(a[b]));return this._gridsX},drawGridX:function(a){var b=this._cfg.themeCls+"-gridsx";return this.htmlPaper.lineY(a.x,this._innerContainer.tl.y,this._innerContainer.height).addClass(b).css(this._cfg.xGrids.css)},
drawGridY:function(a,b){var c=this._innerContainer.width,b=b||this._cfg.yGrids.css,d=this._cfg.themeCls+"-gridsy";return this.htmlPaper.lineX(a.x,a.y,c).addClass(d).css(b)},drawGridsY:function(){for(var a=this._innerContainer.tl.x,b=this._pointsY,c=0,d=b.length;c<d;c++)this._gridsY[c]={"0":this.drawGridY({x:a,y:b[c].y}),num:this.coordNum[c]}},drawAxisX:function(){var a=this._innerContainer,b=a.bl,c=this._cfg.themeCls+"-axisx";return this._axisX=this.htmlPaper.lineX(b.x,b.y,a.width).addClass(c).css(this._cfg.xAxis.css||
{})},drawAxisY:function(){var a=this._innerContainer,b=a.tl,c=this._cfg.themeCls+"-axisy";return this._axisY=this.htmlPaper.lineY(b.x,b.y,a.height).addClass(c).css(this._cfg.yAxis.css||{})},drawLabelsX:function(){for(var a in this._pointsX)this._labelX[a]=this.drawLabelX(a,this._pointsX[a].number)},drawLabelsY:function(){for(var a in this._pointsY)this._labelY[a]={"0":this.drawLabelY(a,this._pointsY[a].number),num:this._pointsY[a].number};return this._labelY},drawLabelX:function(a,b){var c=this.htmlPaper,
d=this._pointsX,f=this._cfg.themeCls+"-xlabels",e;e="";if(a<(d.length||0))return e=this._cfg.xLabels.template||"{{data}}",e=g.isFunction(e)?e(a,b):o(e).render({data:b}),d=d[a],d[0]=c.text(d.x,d.y,"<span class="+f+">"+e+"</span>","center").children().css(this._cfg.xLabels.css),d[0]},drawLabelY:function(a,b){var c=this.htmlPaper,d=this._cfg.themeCls+"-ylabels";tpl="{{data}}";content="";tpl=this._cfg.yLabels.template||tpl;return(content=g.isFunction(tpl)?tpl(a,b):o(tpl).render({data:b}))&&c.text(this._pointsY[a].x,
this._pointsY[a].y,"<span class="+d+">"+content+"</span>","right","middle").children().css(this._cfg.yLabels.css)},renderTip:function(){var a=this._cfg,b=this._innerContainer,a=g.mix(a.tip,{rootNode:this._$ctnNode,clsName:a.themeCls,boundry:a.tip.boundryDetect?{x:b.tl.x,y:b.tl.y,width:b.width,height:b.height}:{}});return this.tip=new t(a)},renderEvtLayout:function(){var a=this._cfg,b=this._innerContainer,c=b.height,d=this._evtEls._rects=[],b=this._evtEls.paper?this._evtEls.paper:this._evtEls.paper=
new p(this._$ctnNode,{clsName:"ks-chart-evtlayout",prependTo:!1,width:b.width,height:c,left:b.tl.x,top:b.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":0.01,"-khtml-opacity":0.01,opacity:0.01}}),f;for(f in this._points){var d=[],e;for(e in this._points[f])c=2*(this._points[f][e].r||a.points.attr.r),d[e]=b.rect(this._points[f][e].x-c/2,this._points[f][e].y-c/2,c,c).attr({line_index:f,index:e}).addClass("ks-chart-evtlayout-rects");this._evtEls._rects[f]=d}},clearEvtLayout:function(){if(this._evtEls._rects)for(var a in this._evtEls._rects)for(var b in this._evtEls._rects[a])this._evtEls._rects[a][b].remove()},
render:function(a){var b=this._cfg,c=b.themeCls;a&&this._$ctnNode.html("");this.paper=q(this._$ctnNode[0],b.width,b.height,{position:"absolute"});this.htmlPaper=new p(this._$ctnNode,{clsName:c});this.drawTitle();this.drawSubTitle();b.tip.isShow&&this.renderTip();b.xGrids.isShow&&this.drawGridsX();b.yGrids.isShow&&this.drawGridsY();b.xAxis.isShow&&this.drawAxisX();b.yAxis.isShow&&this.drawAxisY();b.xLabels.isShow&&this.drawLabelsX();b.yLabels.isShow&&this.drawLabelsY();this.diffStocksSize();this.drawStocks();
this.renderEvtLayout();this.afterRender();this.bindEvt();g.log(this)},bindEvt:function(){var a=this,b=a._evtEls;l.detach(h(".ks-chart-evtlayout-rects",h(".ks-chart-evtlayout",a._$ctnNode)),"mouseenter");l.on(h(".ks-chart-evtlayout-rects",h(".ks-chart-evtlayout",a._$ctnNode)),"mouseenter",function(b){var d=h(b.currentTarget),b=d.attr("index"),d=d.attr("line_index");a._points[d][b].dataInfo&&(a.stockChange(d,b),a._cfg.tip.isShow&&a.tipHandler(d,b))});l.detach(b.paper.$paper,"mouseleave");l.on(b.paper.$paper,
"mouseleave",function(){a.tip&&a.tip.hide();a.paperLeave()})},stockChange:function(a,b){var c=this._stocks[a];this.fire("stockChange",{target:c.stocks[b],currentTarget:c.stocks[b],lineIndex:Math.round(a),stockIndex:Math.round(b)})},tipHandler:function(a,b){var c=this.color.getColor(a).DEFAULT,d=this.tip,f=this._cfg,e=f.tip.template,i=d.getInstance(),h;e&&(h=this._points[a][b].dataInfo,g.isFunction(e)?d.setContent(e(h)):d.renderTemplate(e,h),e=this._points[a][b],d.isVisable()?d.animateTo(e.x,e.y):
d.moveTo(e.x,e.y),i.css(this.processAttr(f.tip.css,c)))},paperLeave:function(){this.fire("paperLeave",this)},afterRender:function(){this.fire("afterRender",this)},getPaper:function(){return this.htmlPaper},clear:function(){this.paper.clear()}});return m},{requires:"base,gallery/template/1.0/index,../basechart/index,../raphael/index,../tools/color/index,../tools/htmlpaper/index,../legend/index,./theme,../tools/touch/index,../tip/index".split(",")});
KISSY.add("gallery/kcharts/1.1/scatterchart/theme",function(){return{"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},
xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{border:"2px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",
r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{background:"{COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",
color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLines:{css:{color:"#ccc"}},tip:{css:{background:"{COLOR}"}}}}});
