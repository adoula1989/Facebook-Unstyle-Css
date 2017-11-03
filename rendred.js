var UnstyleFb = {

    unstyleDocFb: function (oDoc) {
        try {
            if (oDoc != null && oDoc.body != null && oDoc.location != null) {
                if (UnstyleFb.IsFacebookUrl(oDoc)) {
					document.body.style = "background-color:transparent !important";
					//console.log('ad');
                    
					oDivCont = oDoc.getElementById("pagelet_sidebar");
					if(oDivCont) {
						oDivCont.style.display = 'none';
					}
					oDivCont = oDoc.getElementById("rightCol");
					if(oDivCont) {
						oDivCont.style.display = 'none';
					}
					oDivCont = oDoc.getElementById("pagelet_bluebar");
					if(oDivCont) {
						oDivCont.parentNode.removeChild(oDivCont);
					}
					oDivCont = oDoc.getElementById("contentArea");
					if(oDivCont) {
						oDivCont.style = "right : 0px !important; width: 700px !important;";
					}
					
					oDivCont = oDoc.getElementById("pageTitle");
					if(oDivCont) {
						var aa = function(oDivCont) {
							oDivCont.innerHTML = "zzz";
						}
						//setInterval(aa(oDivCont), 1000);
					}
					
					/**oDivCont = oDoc.getElementById("pagelet_composer");
					oDivCont.parentNode.removeChild(oDivCont);*/
					
					/**oDivCont = oDivCont.children[0].children[0].children[0];
					oDivCont.style.backgroundColor = 'transparent !important';
					oDivCont.style.borderBottom = 'transparent !important';*/
					
					
					//    /* background-color: #4267b2; */
    /* border-bottom: 1px solid #29487d; */
	
					/**var elements = oDoc.getElementsByClassName("_2t-a _50tj");
					if(elements && elements.length > 0) {
						var elm = elements[0];
						elm.style.backgroundColor = 'transparent';
						elm.style.borderBottom = 'transparent';
					}*/
                    /*if (oDivCont != null) {
                        //get and add command button
                        var oCommandButton = UnstyleFb.GetCommandButton();
                        oDivCont.appendChild(oCommandButton);
                    }*/
					
					var oDivCont = oDoc.getElementById("pagelet_navigation");
					if(oDivCont) {
						oDivCont.parentNode.removeChild(oDivCont);
					}
					
                }
            }
        }
        catch (e) {
            console.log("aaaa " + e);
        }
    },
    IsFacebookUrl: function (oDoc) {
        if (oDoc.location.toString().toLowerCase().indexOf("facebook.com") != -1 /* && oDoc.location.toString().toLowerCase().indexOf("watch?v=") != -1*/)
            return true;
        else
            return false;
    }
};

window.addEventListener("DOMNodeInserted", function() {UnstyleFb.unstyleDocFb(document);}, true);
