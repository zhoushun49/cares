KISSY.add("gallery/form/1.3/uploader/themes/uploadify/index",function(c,b,a){var f="",e=b.all;function d(h){var g=this;d.superclass.constructor.call(g,h)}c.extend(d,a,{afterUploaderRender:function(g){},_addFileHandler:function(g){},_getStatusWrapper:function(g){return g.children(".J_FileStatus")},_waitingHandler:function(g){},_startHandler:function(k){var h=this,l=k.uploader,i=k.index,g=h.get("queue"),j=l.get("type");if(j=="ajax"||j=="flash"){}},_progressHandler:function(j){var h=j.file,g=j.loaded,i=j.total,k=Math.ceil((g/i)*100)},_successHandler:function(g){},_errorHandler:function(h){var g=this,i=h.msg,j=h.id;e(".J_ErrorMsg_"+j).html(i);g._setDisplayMsg(true,h.file);c.log(i)},getFilesLen:function(h){if(!h){h="success"}var i=this,g=i.get("queue"),j=g.getFiles(h);return j.length}},{ATTRS:{name:{value:"uploadify"},cssUrl:{value:"gallery/form/1.3/uploader/themes/uploadify/style.css"},fileTpl:{value:'<li id="queue-file-{id}" class="clearfix queue-file" data-name="{name}"><div class="f-l file-name">{name}</div><div class="f-r file-status status-wrapper J_FileStatus"><div class="status waiting-status start-status progress-status success-status clearfix"><div class="f-l J_ProgressNum_{id}">0%</div><div class="f-l uploader-icon del-icon J_Del_{id"></div></div><div class="status error-status tips-upload-error">{msg}<a href="#fileDel" class="J_FileDel">点此删除</a></div></div><div class="f-r file-size">{textSize}</div></li>'},plugins:{value:["progressBar"]},elCount:{value:"#J_UploadCount"}}});return d},{requires:["node","../../theme"]});