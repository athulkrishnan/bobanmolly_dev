var consonants={"ക":"ക","ഖ":"ഖ","ഗ":"ഗ","ഘ":"ഘ","ങ":"ങ","ച":"ച","ഛ":"ഛ","ജ":"ജ","ഝ":"ഝ","ഞ":"ഞ","ട":"ട","ഠ":"ഠ","ഡ":"ഡ","ഢ":"ഢ","ണ":"ണ","ത":"ത","ഥ":"ഥ","ദ":"ദ","ധ":"ധ","ന":"ന","പ":"പ","ഫ":"ഫ","ബ":"ബ","ഭ":"ഭ","മ":"മ","യ":"യ","ര":"ര","ല":"ല","വ":"വ","ശ":"ശ","ഷ":"ഷ","സ":"സ","ഹ":"ഹ","ള":"ള","ഴ":"ഴ","റ":"റ","റ്റ":"റ്റ"};var chillaksharam={"ണ്‍":"ണ","ന്‍":"ന","ം":"മ","ര്‍":"ര","ല്‍":"ല","ള്‍":"ള","്\\u200D":""};var vowels='"്a":"","്e":"െ","്i":"ി","്o":"ൊ","്u":"ു","്A":"ാ","്E":"േ","്I":"ീ","്O":"ോ","്U":"ൂ","്Y":"ൈ","െe":"ീ","ൊo":"ൂ","ിi":"ീ","ിe":"ീ","ുu":"ൂ","ുo":"ൂ","്r":"്ര്",';var roman='"k":"ക്","ക്h":"ഖ്","g":"ഗ്","ഗ്h":"ഘ്","ന്‍g":"ങ്","c":"ക്\\u200D","ക്\\u200Dh":"ച്","ച്h":"ഛ്","j":"ജ്","ജ്h":"ഝ്","ന്‍j":"ഞ്","ന്‍h":"ഞ്","T":"ട്","ട്h":"ഠ്","D":"ഡ്","ഡ്h":"ഢ്","റ്റ്h":"ത്","ത്h":"ഥ്","d":"ദ്","ദ്h":"ധ്","p":"പ്","പ്h":"ഫ്","f":"ഫ്","b":"ബ്","ബ്h":"ഭ്","y":"യ്","v":"വ്","w":"വ്","z":"ശ്","S":"ശ്","സ്h":"ഷ്","s":"സ്","h":"ഹ്","ശ്h":"ഴ്","x":"ക്ഷ്","R":"റ്","t":"റ്റ്",';var chill='"N":"ണ്‍","n":"ന്‍","m":"ം","r":"ര്‍","l":"ല്‍","L":"ള്‍",';var swaram='"a":"അ","അa":"ആ","A":"ആ","e":"എ","E":"ഏ","എe":"ഈ","i":"ഇ","ഇi":"ഈ","ഇe":"ഈ","അi":"ഐ","I":"ഐ","o":"ഒ","ഒo":"ഊ","O":"ഓ","അu":"ഔ","ഒu":"ഔ","u":"ഉ","ഉu":"ഊ","U":"ഊ","H":"ഃ","റ്h":"ഋ","ര്‍^":"ഋ","ഋ^":"ൠ","ല്‍^":"ഌ","ഌ^":"ൡ",';var numerals='"1":"൧","2":"൨","3":"൩","4":"൪","5":"൫","6":"൬","7":"൭","8":"൮","9":"൯","0":"൦",';var conjuncts='"ന്‍t":"ന്റ്","ന്റ്h":"ന്ത്","ന്‍k":"ങ്ക്","ന്‍n":"ന്ന്","ണ്‍N":"ണ്ണ്","ള്‍L":"ള്ള്","ല്‍l":"ല്ല്","ംm":"മ്മ്","ന്‍m":"ന്മ്","ന്ന്g":"ങ്ങ്","ന്‍d":"ന്ദ്","ണ്‍m":"ണ്മ്","ല്‍p":"ല്പ്","ംp":"മ്പ്","റ്റ്t":"ട്ട്","ന്‍T":"ണ്ട്","ണ്‍T":"ണ്ട്","്ര്^":"ൃ","ന്‍c":"ന്‍\\u200D","ന്‍\\u200Dh":"ഞ്ച്","ണ്‍D":"ണ്ഡ്",';var others='"്L":"്ല്","~":"്\\u200C","്~":"്\\u200C","\\u200C~":"\\u200C","ം~":"മ്","ക്\\u200Dc":"ക്ക്\\u200D","ക്ക്\\u200Dh":"ച്ച്","q":"ക്യൂ",';var caps='"B":"ബ്ബ്","C":"ക്ക്\\u200D","F":"ഫ്","G":"ഗ്ഗ്","J":"ജ്ജ്","K":"ക്ക്","M":"മ്മ്","P":"പ്പ്","Q":"ക്യൂ","V":"വ്വ്","W":"വ്വ്","X":"ക്ഷ്","Y":"യ്യ്","Z":"ശ്ശ്",';var ZWNJ='"_":"\\u200C"';function cyr_translit(src){return to_cyrillic(src);}
var conversionHash=undefined;var maxcyrlength=0;function getConversionHash(){if(conversionHash==undefined){var opr="{"+vowels+roman+chill+swaram+numerals+conjuncts+caps+others;for(var consonant in consonants){opr+='"'+consonant+'a":"'+consonant+'ാ",';opr+='"'+consonant+'e":"'+consonant+'േ",';opr+='"'+consonant+'i":"'+consonant+'ൈ",';opr+='"'+consonant+'o":"'+consonant+'ോ",';opr+='"'+consonant+'u":"'+consonant+'ൗ",';}
for(var chk in chillaksharam){opr+='"'+chk+'a":"'+chillaksharam[chk]+'",';opr+='"'+chk+'e":"'+chillaksharam[chk]+'െ",';opr+='"'+chk+'i":"'+chillaksharam[chk]+'ി",';opr+='"'+chk+'o":"'+chillaksharam[chk]+'ൊ",';opr+='"'+chk+'u":"'+chillaksharam[chk]+'ു",';opr+='"'+chk+'A":"'+chillaksharam[chk]+'ാ",';opr+='"'+chk+'E":"'+chillaksharam[chk]+'േ",';opr+='"'+chk+'I":"'+chillaksharam[chk]+'ീ",';opr+='"'+chk+'O":"'+chillaksharam[chk]+'ോ",';opr+='"'+chk+'U":"'+chillaksharam[chk]+'ൂ",';opr+='"'+chk+'Y":"'+chillaksharam[chk]+'ൈ",';opr+='"'+chk+'r":"'+chillaksharam[chk]+'്ര്",';opr+='"'+chk+'y":"'+chillaksharam[chk]+'്യ്",';opr+='"'+chk+'v":"'+chillaksharam[chk]+'്വ്",';opr+='"'+chk+'w":"'+chillaksharam[chk]+'്വ്",';opr+='"'+chk+'~":"'+chillaksharam[chk]+'്\\u200C",';}
opr+=ZWNJ+"}";conversionHash=eval("("+opr+")");maxcyrlength=6;}
return conversionHash;}
function to_cyrillic(src,output,chunks){if(src==undefined||src==""||src==null)
return src;if(output==undefined)
output=new String();var hash=getConversionHash();var location=0;while(location<src.length){var len=Math.min(maxcyrlength,src.length-location);var arr=undefined;var sub;while(len>0){sub=src.substr(location,len);arr=hash[sub];if(arr!=undefined)
break;else
len--;}
if(chunks!=undefined)
chunks[chunks.length]=sub;if(arr==undefined){output+=sub;location++;}
else{var newChar=arr;if(sub.toLowerCase()==sub.toUpperCase()&&arr.length>1&&arr[1]&&(newChar.toUpperCase()!=newChar.toLowerCase())){var prevCh=output.length==0?null:output.substr(output.length-1,1);var prevDud=!prevCh||!getTranslitString(prevCh);var prevCap=(!prevDud&&prevCh==prevCh.toUpperCase());if(prevDud||!prevCap){output+=newChar.toLowerCase();prevCap=false;}
else{var next=" ";if(location+len<src.length)
next=src.substr(location+len,1);if(next!=next.toUpperCase()&&next==next.toLowerCase()){output+=newChar.toLowerCase();}
else if(next==next.toUpperCase()&&next!=next.toLowerCase()){output+=newChar.toUpperCase();}
else{var pprevCh=output.length==1?null:output.substr(output.length-2,1);var pprevDud=!pprevCh||!getTranslitString(pprevCh);if(!pprevDud&&(pprevCh==pprevCh.toUpperCase())){output+=newChar.toUpperCase();}
else{output+=newChar.toLowerCase();}}}}
else if((sub.toLowerCase()==sub.toUpperCase())&&(arr.length<2||!arr[1])){output+=newChar;}
else if(sub!=sub.toLowerCase()){output+=newChar.toUpperCase();}
else{output+=newChar.toLowerCase();}
location+=len;}}
return output;}
function convertIt(src,converter){var resultbuffer="";for(var i=0;i<src.length;i++){resultbuffer=converter(resultbuffer+src[i]);}
return converter(resultbuffer);}
var translitHash=undefined;function initTranslit(){if(translitHash==undefined){translitHash=new Array();for(var i=0;i<conversionHash.length;i++){var ch=conversionHash[i][1];if(conversionHash[i][0].toUpperCase()!=conversionHash[i][0].toLowerCase())
ch=ch.toUpperCase();if(translitHash[ch]==undefined)
translitHash[ch]=conversionHash[i][0];}}}
function replaceValue(node,value,stepback){if(stepback==undefined)
stepback=0;if(isExplorer()){var range=document.selection.createRange();range.moveStart("character",-stepback);range.text=value;range.collapse(false);range.select();}
else{var scrollTop=node.scrollTop;var cursorLoc=node.selectionStart;node.value=node.value.substring(0,node.selectionStart-stepback)+value+
node.value.substring(node.selectionEnd,node.value.length);node.scrollTop=scrollTop;node.selectionStart=cursorLoc+value.length-stepback;node.selectionEnd=cursorLoc+value.length-stepback;}}
function positionIsEqual(other){if(isExplorer())
return this.position.isEqual(other.position);else
return this.position==other.position;}
function Position(node){if(node.selectionStart!=undefined)
this.position=node.selectionStart;else if(document.selection&&document.selection.createRange())
this.position=document.selection.createRange();this.isEqual=positionIsEqual;}
function resetState(){this.position=new Position(this.node);this.transBuffer="";this.cyrBuffer="";}
function StateObject(node){this.node=node;this.reset=resetState;this.cyrBuffer="";this.transBuffer="";this.position=new Position(node);}
var stateHash=new Array();function isExplorer(){return(document.selection!=undefined&&document.selection.createRange().isEqual!=undefined);}
function pressedKey(event){if(isExplorer())
return event.keyCode;else
return event.which;}
function transliterateKey(event){if(event==undefined)
event=window.event;var node=null;if(event.target){node=event.target;}
else if(event.srcElement){node=event.srcElement;}
var state=stateHash[node];if(state==null){state=new StateObject(node);stateHash[node]=state;}
if((pressedKey(event)>20)&&!event.ctrlKey&&!event.altKey&&!event.metaKey){var c=String.fromCharCode(pressedKey(event));var result=process_translit(state,c);if(c!=result.out||result.replace!=0){if(isExplorer())
event.returnValue=false;else
event.preventDefault();replaceValue(node,result.out,result.replace);state.position=new Position(node);}}}
function TranslitResult(){this.out="";this.replace=0;}
function process_translit(state,c){if(!state.position.isEqual(new Position(state.node)))
state.reset();var result=new TranslitResult();var backbuffer=getBackBuffer(state.node,state.cyrBuffer.length,2);var chunks=new Array();state.transBuffer=state.transBuffer+c
var str=to_cyrillic(state.cyrBuffer+c,backbuffer,chunks);str=str.substr(backbuffer.length);result.out=str;for(var i=0;i<Math.min(state.cyrBuffer.length,result.out.length);i++){if(state.cyrBuffer.substr(i,1)!=result.out.substr(i,1)){result.replace=state.cyrBuffer.length-i;result.out=result.out.substr(i);break;}}
if(result.replace==0){if(result.out.length<state.cyrBuffer.length)
result.replace=state.cyrBuffer.length-result.out.length;result.out=result.out.substr(Math.min(state.cyrBuffer.length,result.out.length));}
if(chunks.length>0&&chunks[chunks.length-1]==result.out.substr(result.out.length-1)){state.reset();}
else{while(state.transBuffer.length>maxcyrlength){state.transBuffer=state.transBuffer.substr(chunks[0].length);chunks.shift();str=str.substr(1);}
state.cyrBuffer=str;}
return result;}
function getBackBuffer(node,offset,count){if(isExplorer()){var range=document.selection.createRange();range.moveStart("character",-offset);var result=range.text.substr(-count);if(!result)
result="";return result;}else{return node.value.substring(0,node.selectionStart-offset).substr(-count);}}
function getSelectedNode(){if(document.activeElement)
return document.activeElement;else
if(window.getSelection&&window.getSelection()&&window.getSelection().rangeCount>0){var range=window.getSelection().getRangeAt(0);if(range.startContainer&&range.startContainer.childNodes&&range.startContainer.childNodes.length>range.startOffset)
return range.startContainer.childNodes[range.startOffset]}
return null;}
function toggleCyrMode(){var node=getSelectedNode();if(node){if(stateHash[node]){if(removeKeyEventListener(node))
delete stateHash[node];}
else{if(addKeyEventListener(node))
stateHash[node]=new StateObject(node);}}}
function addKeyEventListener(node){if(node.addEventListener)
node.addEventListener("keypress",transliterateKey,false);else if(node.attachEvent)
node.attachEvent("onkeypress",transliterateKey);else return false;return true;}
function removeKeyEventListener(node){if(node.removeEventListener)
node.removeEventListener("keypress",transliterateKey,false);else if(node.detachEvent)
node.detachEvent("onkeypress",transliterateKey);else return false;return true;}
function getSelectedText(){if(isExplorer()){return document.selection.createRange().text;}
else{var node=getSelectedNode();if(node&&node.value&&node.selectionStart!=undefined&&node.selectionEnd!=undefined)
return node.value.substring(node.selectionStart,node.selectionEnd);}
return"";}
function addLoadEvent(func){if(window.addEventListener)
window.addEventListener("load",func,false);else if(window.attachEvent)
window.attachEvent("onload",func);}
function addTranslit(editForm,textBox){checkrt(editForm);if(textBox.addEventListener)
textBox.addEventListener("keypress",processKeys,false);else if(textBox.attachEvent)
textBox.attachEvent("onkeypress",processKeys);}
function addTextEvent(){var editForm=document.getElementById('editform');if(editForm!=null){var textBox=document.getElementById('textAddArea');var textSummary=document.getElementById('wpSummary');addTranslit(editForm,textBox);addCheckbox(editForm,textBox);if(textSummary){addTranslit(editForm,textSummary);}}
var searchform=document.getElementById('searchform');var searchInput=document.getElementById('searchInput');if(searchInput){addTranslit(searchform,searchInput);}}
function addCheckbox(editform,textBox){var element=document.createElement("input");element.setAttribute("type","checkbox");element.setAttribute("id","realtime");if(element.addEventListener)
element.addEventListener("click",rtClick,false);else if(element.attachEvent)
element.attachEvent("onclick",rtClick);$(document).on('keydown',textBox,function(e){if(e.ctrlKey&&e.keyCode==77){e.preventDefault();rtClick();element.checked=realTime;}});var h=document.createElement("label")
var labelcheckBox=document.createTextNode(' Type in Malayalam[ctrl+m]');editform.insertBefore(element,textBox);document.getElementById("realtime").checked=realTime;editform.insertBefore(labelcheckBox,textBox);var p=document.createElement("p");p.setAttribute("style","width:100%;height:1px;");editform.insertBefore(p,textBox);}
var imeStatus=false;function processKeys(event){if(rtsupported){e=event||window.event;if((e.keyCode==13&&e.ctrlKey)||(e.which==109&&e.ctrlKey))
{realTime=!realTime;var chk=document.getElementById('realtime');if(chk){chk.checked=realTime;}
return false;}
else if((e.keyCode>=3328&&e.keyCode<=3455)||(e.which>=3328&&e.which<=3455)){var chk=document.getElementById('realtime');if(imeStatus==false||realTime){realTime=false;if(chk){chk.checked=realTime;}
imeStatus=true;alert('A Malayalam input tool was detected. Disabling in-built transliteration. To turn it on again use Ctrl+M');return false;}}
else if(realTime){imeStatus=false;transliterateKey(event);}}}
var realTime=true;function rtClick(event){realTime=!realTime;}
var rtsupported=false;var error;function checkrt(editform){try{rtsupported=(document.selection!=undefined)
if(!rtsupported){var element=document.createElement("TEXTAREA");editform.appendChild(element);if(element.selectionStart!=undefined)
rtsupported=true;editform.removeChild(element);}}catch(error){}}
addLoadEvent(addTextEvent);