__NUXT_JSONP__("/plugins/messagesniffer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{document:{slug:t,title:t,position:59,category:"Plugins",toc:[{id:u,depth:i,text:v},{id:w,depth:i,text:x},{id:y,depth:i,text:z}],body:{type:"root",children:[{type:c,tag:d,props:{},children:[{type:a,value:"This plugin provides integration with the commerical Anti-Spam product "},{type:c,tag:g,props:{href:"http:\u002F\u002Farmresearch.com\u002Fproducts\u002Fsniffer.jsp",rel:[j,k,l],target:m},children:[{type:a,value:"MessageSniffer"}]},{type:a,value:" by Arm Research Labs using its XML Client interface "},{type:c,tag:g,props:{href:"http:\u002F\u002Farmresearch.com\u002Fsupport\u002Farticles\u002Fsoftware\u002FsnfServer\u002Fxci\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"XCI"}]},{type:a,value:" over TCP."}]},{type:a,value:b},{type:c,tag:n,props:{id:u},children:[{type:c,tag:g,props:{href:"#installation",ariaHidden:o,tabIndex:p},children:[{type:c,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Install the SNF Client\u002FServer package for your platform as per the instructions on the MessageSniffer website."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Modify your SNFServer.xml file and under the 'xheaders' section set:"}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"output mode='api'"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"This prevents MessageSniffer from adding additional headers to the temporary file used to send it the message data which is\nunnecessary as Haraka reads the headers from the XCI response."}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"rulebase on-off='on'"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"result on-off='on'"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"black on-off='on'"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"while on-off='on'"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"clean on-off='on'"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"all symbol on-off='on'"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"These cause SNFServer to send Haraka additional headers that are inserted into all messages scanned by MessageSniffer and\nwill aid debugging and troubleshooting."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Once this is done start\u002Frestart the SNF server."}]},{type:a,value:b},{type:c,tag:n,props:{id:w},children:[{type:c,tag:g,props:{href:"#configuration",ariaHidden:o,tabIndex:p},children:[{type:c,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:x}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"This plugin uses "},{type:c,tag:f,props:{},children:[{type:a,value:"messagesniffer.ini"}]},{type:a,value:" for configuration.  The "},{type:c,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:" section is for global configuration, the "},{type:c,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:"\nsection is used to specify the action that should be taken based on the GBUdb result which is checked at the start of the\nconnection and the "},{type:c,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:" section is used to specify the action to be taken based on the main scan result."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:f,props:{},children:[{type:a,value:A}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"port"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: 9001\nTCP port to use when communicating to the SNFServer daemon.\nThis needs to match the "},{type:c,tag:f,props:{},children:[{type:a,value:"\u003Cxci on-off='on' port='9001'\u002F\u003E"}]},{type:a,value:" value in the SNFServer.xml file."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"tmpdir"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: \u002Ftmp\nTemporary directory used to write temporary message files to that are read by the SNFServer daemon.\nThis directory and the files within need to be readable by the user that SNFServer is running as."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"gbudb_report_deny = [ true | false | 0 | 1 ]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: false\nThis is an experimental option that will record a GBUdb 'bad' encounter for a connected IP address when a client\ndisconnects with no message having been sent or seen by MessageSniffer but Haraka has recorded a hard rejection at\nsome point during the session.  The idea behind this option is that it allows other Haraka plugins rejections influence\nGBUdb IP reputation where MessageSniffer isn't seeing the actual message because it is being rejected pre-DATA."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"tag_string"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: [SPAM]\nString to prepend to the Subject line if the 'tag' action is applied."}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:f,props:{},children:[{type:a,value:B}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: accept\nAction to take when GBUdb reports a 'white' result."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: continue\nAction to take when GBUdb reports a 'caution' result."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: continue\nAction to take when GBUdb reports a 'black' result."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: reject\nAction to take when GBUdb reports a 'truncate' result."}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:f,props:{},children:[{type:a,value:C}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: continue\nAction to take when MessageSniffer reports a 'white' result (result code: 0)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"local_white = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: accept\nAction to take when MessageSniffer reports a local whitelist result (result code: 1).\nNOTE: You will not see this result unless you Arm support have customized your rulebase and added white rules for you."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: reject\nAction to take when MessageSniffer reports a GBUdb result of 'truncate' (result code: 20).\nNOTE: GBUdb IP lookups during the data phase can be different than the connecting IP address if you have configured\nSource and DrillDown options in the Training section of SNFServer.xml."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: continue\nAction to take when MessageSniffer reports a GBUdb result of 'caution' (result code: 40).\nNOTE: GBUdb IP lookups during the data phase can be different than the connecting IP address if you have configured\nSource and DrillDown options in the Training section of SNFServer.xml."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Default: continue\nAction to take when MessageSniffer reports a GBUdb result of 'black' (result code: 63).\nNOTE: GBUdb IP lookups during the data phase can be different than the connecting IP address if you have configured\nSource and DrillDown options in the Training section of SNFServer.xml."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"code_NN = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"NOTE: replace NN with the numeric MessageSniffer "},{type:c,tag:g,props:{href:"http:\u002F\u002Farmresearch.com\u002Fsupport\u002Farticles\u002Fsoftware\u002FsnfServer\u002Fcore.jsp",rel:[j,k,l],target:m},children:[{type:a,value:"result code"}]},{type:a,value:"\nAction to take when MessageSniffer reports a result code other than those explicitly defined above."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"nonzero = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Defalt: reject\nAction to take for any non-zero result code other than those explicity defined above.  This is a catch-all result that\nis checked last after all other settings have been checked so you can define a code_NN value to prevent this action from\nbeing taken."}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:n,props:{id:y},children:[{type:c,tag:g,props:{href:"#actions",ariaHidden:o,tabIndex:p},children:[{type:c,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:z}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"accept"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Accept the message and skip further plugins (whitelist)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"allow | continute"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Continue to the next plugin."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"retry | tempfail"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Reject the message with a temporary failure message (DENYSOFT)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"reject"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Reject the message with a permanent failure message (DENY)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"quarantine"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Continue to the next plugin.  If the message isn't rejected by another plugin - it will cause the message to be quarantined\nand the message will not be delivered to the recipient(s)."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"NOTE: this option requires the queue\u002Fquarantine plugin in your config\u002Fplugins files and it must be listed before any\nother queue plugins."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"tag"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Tag the subject with the default 'tag_string' defined in the "},{type:c,tag:f,props:{},children:[{type:a,value:"main"}]},{type:a,value:" section above, this will also set X-Spam-Flag: YES in\nthe message headers.   Once tagged, processing will continue to the next plugin."}]},{type:a,value:b}]},{type:a,value:b}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fmessagesniffer",extension:".md",createdAt:H,updatedAt:H,to:"\u002Fplugins\u002Fmessagesniffer"},prev:{slug:I,title:I,to:"\u002Fplugins\u002Flimit"},next:{slug:J,title:J,to:"\u002Fplugins\u002Flog.elasticsearch"}}],fetch:[],mutations:[]}}("text","\n","element","p","li","code","a","ul",2,"nofollow","noopener","noreferrer","_blank","h2","true",-1,"span","icon","icon-link","messagesniffer","installation","Installation","configuration","Configuration","actions","Actions","[main]","[gbudb]","[message]","white = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]","caution = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]","black = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]","truncate = [ accept | allow | continue | retry | tempfail | reject | quarantine | tag ]","2020-12-20T00:08:08.864Z","limit","log.elasticsearch")));