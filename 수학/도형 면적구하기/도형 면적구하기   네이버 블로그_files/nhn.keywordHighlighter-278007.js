nhn=nhn||{};nhn.keywordHighlighter=(function(){var o="span",i="highlight";var m=(function(){var c=false,d=navigator.appName,b=navigator.userAgent,a=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(d=="Microsoft Internet Explorer"&&a.exec(b)!=null&&parseFloat(RegExp.$1)<9){c=true}return c}());var n=function(b,a){var c=document.createElement(o);c.className=a;c.appendChild(b);return c};var p=function(g,b,c){var a=0,u,e,w,v;if(g.nodeType==3){u=g.data.toLowerCase().indexOf(b.toLowerCase());if(u>-1){e=g.splitText(u);w=e.splitText(b.length);v=n(e.cloneNode(true),c);e.parentNode.replaceChild(v,e);a=1}}else{if(g.nodeType==1&&g.childNodes&&!/(script|style)/i.test(g.tagName)&&g.className!=c){for(var d=0,h=g.childNodes,f;f=h[d];d++){d+=p(f,b,c)}}}return a};var k=function(f,g){var f=f||document;if(f.getElementsByClassName){var e=[],c=f.getElementsByClassName(g);for(var a=0,d;d=c[a];a++){e.push(d)}return e}else{if(f.querySelectorAll){return f.querySelectorAll(o+"."+g)}else{var e=[],c=f.getElementsByTagName(o),b=new RegExp("(^|\\s)"+g+"(\\s|$)");for(var a=0,d;d=c[a];a++){if(b.test(d.className)){e.push(d)}}return e}}};var j=function(c){if(m){var a=c.firstChild,b;while(a){if(a.nodeType==3){while((b=a.nextSibling)&&b.nodeType==3){a.appendData(b.data);c.removeChild(b)}}else{j(a)}a=a.nextSibling}}else{c.normalize()}};var l=function(a,e){var c=k(a,e);for(var b=0,d;d=c[b];b++){elNode=d.parentNode;elNode.replaceChild(d.firstChild,d);j(elNode)}};return{on:function(f,c,e){var e=e||i;for(var a=0,b=f.childNodes,d;d=b[a];a++){p(d,c,e)}},off:function(b,a){var a=a||i;l(b,a)}}}());if(jindo&&jindo.$Element){jindo.$Element.prototype.xHighlight=function(d,c){nhn.keywordHighlighter.on(this._element,d,c);return this};jindo.$Element.prototype.xRemoveHighlight=function(b){nhn.keywordHighlighter.off(this._element,b);return this}}var SearchKeywordHighlighter=function(b,a){this.arrayTerms=b;$("highlight_notice_layer").onclick=$Fn(function(d){var c=$Event(d);c.stopDefault();if($Element(c.element).hasClass("_hightlightClose")){this._removeHightlitAndButton();this._saveRepository(false)}},this).bind();$("highlight_turn_on").onclick=$Fn(function(d){var c=$Event(d);c.stopDefault();if($Element(c.element).hasClass("_hightlightOpen")){this._highlight();this._saveRepository(true)}},this).bind();this._highlight=function(){if(this.arrayTerms==null||this.arrayTerms.length==0){return}var d=this.arrayTerms,e=d.length;if(e>0){for(var c=0;c<e;c++){if(d[c]){$Element("postListBody").xHighlight(decodeURIComponent(d[c]),"highlight-style");$Element("adPostInjectArea_"+a).xRemoveHighlight("highlight-style")}}}$Element("highlight_notice_layer").show();$Element("highlight_turn_on").hide();$Element("body").addClass("on_highlight");$Element("blog-gnb").removeClass("on_btn_op")};this._removeHightlitAndButton=function(){$Element("postListBody").xRemoveHighlight("highlight-style");$Element("highlight_notice_layer").hide();$Element("highlight_turn_on").show();$Element("body").removeClass("on_highlight");$Element("blog-gnb").addClass("on_btn_op")};this._saveRepository=function(c){new $Ajax("/HighlightQueryAsync.nhn",{method:"POST",onload:function(d){}}).request({blogId:blogId,highlight:c})};window.onload=$Fn(function(c){if(highlighting){this._highlight();return}this._removeHightlitAndButton()},this).bind()};new SearchKeywordHighlighter(top&&top.opener?top.opener.blog_terms:[],firstPostLogNo);if(typeof(window.defineNHNJS)=="undefined"){window.defineNHNJS={}}window.defineNHNJS["nhn.keywordHighlighter-278007_js"]=true;