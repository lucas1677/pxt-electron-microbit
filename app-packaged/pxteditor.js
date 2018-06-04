var pxt;!function(e){var t,o;t=e.editor||(e.editor={}),(o=t.FilterState||(t.FilterState={}))[o.Hidden=0]="Hidden",o[o.Visible=1]="Visible",o[o.Disabled=2]="Disabled",t.initExtensionsAsync=function(e){return Promise.resolve({})},t.initFieldExtensionsAsync=function(e){return Promise.resolve({})}}(pxt||(pxt={})),function(w){!function(e){var y={};function v(e,t,o,r){e.response&&window.parent.postMessage({type:e.type,id:e.id,resp:t,success:o,error:r},"*")}function s(r){return new Promise(function(e,t){var o=w.Util.clone(r);o.id=ts.pxtc.Util.guidGen(),r.response&&(y[o.id]={resolve:e,reject:t}),window.parent.postMessage(o,"*"),r.response||e(void 0)})}e.bindEditorMessages=function(m){var g=(w.appTarget.appTheme.allowParentController||w.shell.isControllerMode())&&w.BrowserUtils.isIFrame(),b=w.appTarget.appTheme.allowPackageExtensions,h=w.appTarget.appTheme.allowSimulatorTelemetry;(g||b||h)&&window.addEventListener("message",function(e){var t=e.data;if(!t||!/^pxt(host|editor|pkgext|sim)$/.test(t.type))return!1;if("pxtpkgext"===t.type&&b)m.handleExtensionRequest(t);else if("pxtsim"===t.type&&h){var o=t;"event"===o.action&&(o.category||o.message?w.reportError(o.category,o.message,o.data):w.tickEvent(o.tick,o.data))}else if(g){var r=Promise.resolve(),n=void 0;if("pxthost"==t.type){var s=y[t.id];s?r=r.then(function(){return s.resolve(t)}):w.debug("pxthost: unknown request "+t.id)}else if("pxteditor"==t.type){var a=t;switch(w.debug("pxteditor: "+a.action),a.action.toLowerCase()){case"switchjavascript":r=r.then(function(){return m.openJavaScript()});break;case"switchblocks":r=r.then(function(){return m.openBlocks()});break;case"startsimulator":r=r.then(function(){return m.startSimulator()});break;case"restartsimulator":r=r.then(function(){return m.restartSimulator()});break;case"hidesimulator":r=r.then(function(){return m.collapseSimulator()});break;case"showsimulator":r=r.then(function(){return m.expandSimulator()});break;case"closeflyout":r=r.then(function(){return m.closeFlyout()});break;case"redo":r=r.then(function(){var e=m.editor;e&&e.hasRedo()&&e.redo()});break;case"undo":r=r.then(function(){var e=m.editor;e&&e.hasUndo()&&e.undo()});break;case"setscale":var i=t;r=r.then(function(){return m.editor.setScale(i.scale)});break;case"stopsimulator":var c=t;r=r.then(function(){return m.stopSimulator(c.unload)});break;case"newproject":var l=t;r=r.then(function(){return m.newProject(l.options)});break;case"importproject":var p=t;r=r.then(function(){return m.importProjectAsync(p.project,{filters:p.filters,searchBar:p.searchBar})});break;case"proxytosim":var u=t;r=r.then(function(){return m.proxySimulatorMessage(u.content)});break;case"renderblocks":var d=t;r=r.then(function(){return m.renderBlocksAsync(d)}).then(function(e){n=e.xml});break;case"toggletrace":var f=t;r=r.then(function(){return m.toggleTrace(f.intervalSpeed)})}}r.done(function(){return v(t,n,!0,void 0)},function(e){return v(t,n,!1,e)})}return!0},!1)},e.enableControllerAnalytics=function(){if(w.appTarget.appTheme.allowParentController&&w.BrowserUtils.isIFrame()){var o=w.tickEvent;w.tickEvent=function(e,t){o&&o(e,t),s({type:"pxthost",action:"event",tick:e,response:!1,data:t})};var r=w.reportException;w.reportException=function(e,t){r&&r(e,t);try{s({type:"pxthost",action:"event",tick:"error",message:e.message,response:!1,data:t})}catch(e){}};var n=w.reportError;w.reportError=function(e,t,o){n&&n(e,t,o),s({type:"pxthost",action:"event",tick:"error",category:e,message:t,data:o})}}},e.postHostMessageAsync=s}(w.editor||(w.editor={}))}(pxt||(pxt={})),function(e){var t,o;t=e.editor||(e.editor={}),(o=t.PermissionResponses||(t.PermissionResponses={}))[o.Granted=0]="Granted",o[o.Denied=1]="Denied",o[o.NotAvailable=2]="NotAvailable"}(pxt||(pxt={})),function(i){!function(e){var o,r=function(){function e(){this.items={}}return e.prototype.removeItem=function(e){delete this.items[e]},e.prototype.getItem=function(e){return this.items[e]},e.prototype.setItem=function(e,t){this.items[e]=t},e.prototype.clear=function(){this.items={}},e}(),n=function(){function e(e){this.storageId=e}return e.prototype.targetKey=function(e){return this.storageId+"/"+e},e.prototype.removeItem=function(e){window.localStorage.removeItem(this.targetKey(e))},e.prototype.getItem=function(e){return window.localStorage[this.targetKey(e)]},e.prototype.setItem=function(e,t){window.localStorage[this.targetKey(e)]=t},e.prototype.clear=function(){for(var e=this.targetKey(""),t=[],o=0;o<window.localStorage.length;++o){var r=window.localStorage.key(o);0==r.indexOf(e)&&t.push(r)}t.forEach(function(e){return window.localStorage.removeItem(e)})},e}();function s(){return i.appTarget?i.appTarget.id:window.pxtConfig?window.pxtConfig.targetId:""}function a(){if(!o){var e=s(),t=!1;if(!i.shell.isSandboxMode())try{window.localStorage[e]="1";window.localStorage[e];t=!0}catch(e){}t?(o=new n(e),i.debug("storage: local under "+e)):(o=new r,i.debug("storage: in memory"))}}e.storageId=s,e.setLocal=function(e,t){a(),o.setItem(e,t)},e.getLocal=function(e){return a(),o.getItem(e)},e.removeLocal=function(e){a(),o.removeItem(e)},e.clearLocal=function(){a(),o.clear()}}(i.storage||(i.storage={}))}(pxt||(pxt={})),function(r){!function(e){function a(e){var t=r.appTarget.appTheme.invertedMonaco,o=monaco.editor.create(e,{model:null,ariaLabel:r.Util.lf("JavaScript editor"),fontFamily:"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'monospace'",scrollBeyondLastLine:!1,language:"typescript",mouseWheelZoom:!1,wordBasedSuggestions:!0,lineNumbersMinChars:3,formatOnPaste:!0,minimap:{enabled:!1},autoIndent:!0,dragAndDrop:!0,matchBrackets:!0,occurrencesHighlight:!1,quickSuggestionsDelay:200,theme:t?"vs-dark":"vs",accessibilityHelpUrl:""});return o.layout(),o}e.syncModels=function(e,n,s,t){if(!t){var o=monaco.languages.typescript.typescriptDefaults.getExtraLibs(),a={};e.sortedDeps().forEach(function(r){r.getFiles().forEach(function(e){var t=r.id+"/"+e;if(/\.(ts)$/.test(e)&&t!=s){if(!monaco.languages.typescript.typescriptDefaults.getExtraLibs()[t]){var o=r.readFile(e)||" ";n[t]=monaco.languages.typescript.typescriptDefaults.addExtraLib(o,t)}a[t]="1"}})}),Object.keys(o).filter(function(e){return/\.(ts)$/.test(e)&&!a[e]}).forEach(function(e){n[e].dispose()})}},e.initMonacoAsync=function(s){return new Promise(function(t,e){if("object"!=typeof window.monaco){var o=window.MonacoPaths,r=function(){var e=window.require;e.config({paths:o}),e(["vs/editor/editor.main"],function(){monaco.languages.typescript&&(monaco.languages.register({id:"asm",extensions:[".asm"]}),monaco.languages.setMonarchTokensProvider("asm",{tokenPostfix:"",keywords:["movs","mov","adds","add","adcs","adr","subs","sbcs","sub","rsbs","muls","cmp","cmn","ands","eors","orrs","bics","mvns","tst","lsls","lsrs","asrs","rors","ldr","ldrh","ldrb","ldrsh","ldrsb","ldm","str","strh","strb","stm","push","pop","cbz","cbnz","b","bl","bx","blx","sxth","sxtb","uxth","uxtb","rev","rev16","revsh","svc","cpsid","cpsie","setend","bkpt","nop","sev","wfe","wfi","yield","beq","bne","bcs","bhs","bcc","blo","bmi","bpl","bvs","bvc","bhi","bls","bge","blt","bgt","ble","bal","r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","pc","sp","lr"],typeKeywords:[".startaddr",".hex",".short",".space",".section",".string",".byte"],operators:[],symbols:/[:\*]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/(\.)?[a-z_$\.][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation"}],[/(#|(0[xX]))?[0-9a-fA-F]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/;.*$/,"comment"]]}}),monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0}),monaco.languages.typescript.typescriptDefaults.setCompilerOptions({allowUnreachableCode:!0,noImplicitAny:!0,allowJs:!1,allowUnusedLabels:!0,target:monaco.languages.typescript.ScriptTarget.ES5,outDir:"built",rootDir:".",noLib:!0,mouseWheelZoom:!1}),monaco.languages.typescript.typescriptDefaults.setMaximunWorkerIdleTime(12e5)),t(a(s))})};if(window.require)r();else{var n=document.createElement("script");n.type="text/javascript",n.src=o["vs/loader"],n.addEventListener("load",r),document.body.appendChild(n)}}else t(a(s))})},e.createEditor=a}(r.vs||(r.vs={}))}(pxt||(pxt={})),function(i){!function(e){var n,t,s;function o(){if(void 0===s){var e=/sandbox=1|#sandbox|#sandboxproject/i.test(window.location.href)||i.BrowserUtils.isIFrame(),t=/nosandbox=1/i.test(window.location.href),o=/controller=1/i.test(window.location.href)&&i.BrowserUtils.isIFrame(),r=/editorlayout=(widget|sandbox|ide)/i.exec(window.location.href);if(s=n.IDE,t?s=n.Widget:o?s=n.Controller:e&&(s=n.Sandbox),r)switch(r[1].toLowerCase()){case"widget":s=n.Widget;break;case"sandbox":s=n.Sandbox;break;case"ide":s=n.IDE}i.debug("shell: layout type "+n[s]+", readonly "+a())}}function r(){return o(),s==n.Sandbox}function a(){return r()&&!/[?&]edit=1/i.test(window.location.href)}(t=n=e.EditorLayoutType||(e.EditorLayoutType={}))[t.IDE=0]="IDE",t[t.Sandbox=1]="Sandbox",t[t.Widget=2]="Widget",t[t.Controller=3]="Controller",e.layoutTypeClass=function(){return o(),i.shell.EditorLayoutType[s].toLowerCase()},e.isSandboxMode=r,e.isReadOnly=a,e.isControllerMode=function(){return o(),s==n.Controller}}(i.shell||(i.shell={}))}(pxt||(pxt={}));