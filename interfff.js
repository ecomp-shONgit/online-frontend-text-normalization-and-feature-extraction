//******************************************************************************
//
// 2021 tonline tool text normalization / decomposition 
// Author: Prof. Ch. Schubert, KHK
// Frontend to the textnorm / text decomposition (features) libraries. 
// Input txt via copy and paste or select files (txt, xml) to save the input to 
// normalized and decomposed text (text features).
//******************************************************************************

/*
GPLv3 copyrigth

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*HELPER*/
function dodownit( contentof, nameoffile, type ){
    var af = new Blob( [ contentof ], {type: type} );
    var theIE = false || !!document.documentMode;
    if ( theIE ){
        window.navigator.msSaveOrOpenBlob( af, nameoffile );
    } else {
        var alink = document.createElement( 'a' );
        alink.href = URL.createObjectURL( af );
        alink.download = nameoffile;
        document.body.appendChild( alink )
        alink.click( );
        document.body.removeChild( alink );
    }
}

function parseBool( str ){
    boolrex = /^\s*(true|1|on)\s*$/i
    return boolrex.test( str );
}


function sisa(){
    console.log("Autosave selection.")
    localStorage.setItem( "nfdbutt", document.getElementById("nfdbutt").checked);
    localStorage.setItem( "nfcbutt", document.getElementById("nfcbutt").checked);
    localStorage.setItem( "nfkdbutt", document.getElementById("nfkdbutt").checked);
    localStorage.setItem( "nfkcbutt", document.getElementById("nfkcbutt").checked);
    localStorage.setItem( "disambidiak", document.getElementById("disambidiak").checked);
    localStorage.setItem( "disambidashes", document.getElementById("disambidashes").checked);
    localStorage.setItem( "uv", document.getElementById("uv").checked);
    localStorage.setItem( "ji", document.getElementById("ji").checked);
    localStorage.setItem( "womarkup", document.getElementById("womarkup").checked);
    localStorage.setItem( "delpunktu", document.getElementById("delpunktu").checked);
    localStorage.setItem( "delnewl", document.getElementById("delnewl").checked);
    localStorage.setItem( "elisions", document.getElementById("elisions").checked);
    localStorage.setItem( "alphapriv", document.getElementById("alphapriv").checked);
    localStorage.setItem( "delnumber", document.getElementById("delnumber").checked);
    localStorage.setItem( "hyph", document.getElementById("hyph").checked);
    localStorage.setItem( "iota", document.getElementById("iota").checked);
    localStorage.setItem( "sigma", document.getElementById("sigma").checked);
    localStorage.setItem( "deldiak", document.getElementById("deldiak").checked);
    localStorage.setItem( "unkown", document.getElementById("unkown").checked);
    localStorage.setItem( "ligatu", document.getElementById("ligatu").checked);
    localStorage.setItem( "eqcase", document.getElementById("eqcase").checked);
    localStorage.setItem( "delbrackets", document.getElementById("delbrackets").checked);
    localStorage.setItem( "basictextnorm", document.getElementById("basictextnorm").checked);
    localStorage.setItem( "delall", document.getElementById("delall").checked);
    localStorage.setItem( "combi3", document.getElementById("combi3").checked);
    localStorage.setItem( "translgrla", document.getElementById("translgrla").checked);
    localStorage.setItem( "transllagr", document.getElementById("transllagr").checked);

    localStorage.setItem( "sepdiak", document.getElementById("sepdiak").checked);
    localStorage.setItem( "wconsos", document.getElementById("wconsos").checked);
    localStorage.setItem( "wvocal", document.getElementById("wvocal").checked);
    localStorage.setItem( "justklein", document.getElementById("justklein").checked);
    localStorage.setItem( "justgrosz", document.getElementById("justgrosz").checked);
    localStorage.setItem( "ngram", document.getElementById("ngram").checked); 
    localStorage.setItem( "gramsel", document.getElementById("gramsel").value); //value selected 0 1
    localStorage.setItem( "nofgram", document.getElementById("nofgram").value); //String as number
    localStorage.setItem( "padsel", document.getElementById("padsel").value); // value selected 0 1
    localStorage.setItem( "silb", document.getElementById("silb").checked);
    localStorage.setItem( "kkc1", document.getElementById("kkc1").checked);
    localStorage.setItem( "kkc2", document.getElementById("kkc2").checked);
    localStorage.setItem( "nachbarsch", document.getElementById("nachbarsch").checked);
}

function getlastselection(){
    if( parseBool(localStorage.getItem( "nfdbutt") ) ){
        document.getElementById("nfdbutt").checked = parseBool(localStorage.getItem( "nfdbutt"));
        document.getElementById("nfcbutt").checked = localStorage.getItem( "nfcbutt");
        document.getElementById("nfkdbutt").checked = localStorage.getItem( "nfkdbutt");
        document.getElementById("nfkcbutt").checked = localStorage.getItem( "nfkcbutt");
        document.getElementById("disambidiak").checked = localStorage.getItem( "disambidiak");
        document.getElementById("disambidashes").checked = localStorage.getItem( "disambidashes");
        document.getElementById("uv").checked = localStorage.getItem( "uv");
        document.getElementById("ji").checked = localStorage.getItem( "ji");
        document.getElementById("womarkup").checked = localStorage.getItem( "womarkup");
        document.getElementById("delpunktu").checked = localStorage.getItem( "delpunktu");
        document.getElementById("delnewl").checked = localStorage.getItem( "delnewl");
        document.getElementById("elisions").checked = localStorage.getItem( "elisions");
        document.getElementById("alphapriv").checked = localStorage.getItem( "alphapriv");
        document.getElementById("delnumber").checked = localStorage.getItem( "delnumber");
        document.getElementById("hyph").checked = localStorage.getItem( "hyph");
        document.getElementById("iota").checked = localStorage.getItem( "iota");
        document.getElementById("sigma").checked = localStorage.getItem( "sigma");
        document.getElementById("deldiak").checked = localStorage.getItem( "deldiak");
        document.getElementById("unkown").checked = localStorage.getItem( "unkown");
        document.getElementById("ligatu").checked = localStorage.getItem( "ligatu");
        document.getElementById("eqcase").checked = localStorage.getItem( "eqcase");
        document.getElementById("delbrackets").checked = localStorage.getItem( "delbrackets" );
        document.getElementById("basictextnorm").checked = localStorage.getItem( "basictextnorm");
        document.getElementById("delall").checked = localStorage.getItem( "delall");
        document.getElementById("combi3").checked = localStorage.getItem( "combi3");
        document.getElementById("translgrla").checked = localStorage.getItem( "translgrla");
        document.getElementById("transllagr").checked = localStorage.getItem( "transllagr");
        document.getElementById("sepdiak").checked = localStorage.getItem( "sepdiak");
        document.getElementById("wconsos").checked = localStorage.getItem( "wconsos");
        document.getElementById("wvocal").checked = localStorage.getItem( "wvocal");
        document.getElementById("justklein").checked = localStorage.getItem( "justklein");
        document.getElementById("justgrosz").checked = localStorage.getItem( "justgrosz");
        document.getElementById("ngram").checked = localStorage.getItem( "ngram"); 
        document.getElementById("gramsel").value = localStorage.getItem( "gramsel"); //value selected 0 1
        document.getElementById("nofgram").value = localStorage.getItem( "nofgram"); //String as number
        document.getElementById("padsel").value = localStorage.getItem( "padsel"); // value selected 0 1
        document.getElementById("silb").checked = localStorage.getItem( "silb");
        document.getElementById("kkc1").checked = localStorage.getItem( "kkc1");
        document.getElementById("kkc2").checked = localStorage.getItem( "kkc2");
        document.getElementById("nachbarsch").checked = localStorage.getItem( "nachbarsch");
    }
}

/*application of normalization*/
function applnorm( ainp ){
    let binp = normatext( ainp, analysisNormalform );
    if( document.getElementById("disambidiak").checked ){
        binp = disambiguDIAkritika( binp );
    }
    if( document.getElementById("disambidashes").checked ){
        binp = disambiguadashes( binp );
    }
    if( document.getElementById("uv").checked ){
        binp = deluv( binp );
    }
    if( document.getElementById("ji").checked ){
        binp = delji( binp );
    }   
    if( document.getElementById("womarkup").checked ){
        binp = delmakup( binp );
    }
    
    
    if( document.getElementById("elisions").checked ){
        binp = ExpandelisionText( binp );
    }
    if( document.getElementById("alphapriv").checked ){
        binp = normatext( AlphaPrivativumCopulativumText( normatext( binp, "NFC" ) ), "NFKD" );
    }
    if( document.getElementById("delnumber").checked ){
        binp = delnumbering( binp );
    }
    if( document.getElementById("hyph").checked ){
        binp = Trennstricheraus( disambiguadashes( binp ).split( " " ) ).join( " " );
    }
    if( document.getElementById("delpunktu").checked ){
        binp = delinterp( binp );
    }
    if( document.getElementById("delnewl").checked ){
        binp = delumbrbine( binp );
    }

    if( document.getElementById("basictextnorm" ).checked){
        binp = basClean( binp );
    } else if( document.getElementById("delall" ).checked){
        binp = delall( binp );
    } else if( document.getElementById("combi3" ).checked){ 
        binp = GRvorbereitungT( binp );
    } else {
        if( document.getElementById("iota" ).checked){
            binp = iotasubiotoad( binp );
        }
        if( document.getElementById("sigma" ).checked){
            binp = sigmaistgleich( binp );
        }
        if( document.getElementById("deldiak" ).checked){
            binp = deldiak( binp );
        }
        if( document.getElementById("unkown" ).checked){
            binp = delunknown( binp );
        }
        if( document.getElementById("ligatu" ).checked){
            binp = delligaturen( binp );
        }
        if( document.getElementById("eqcase" ).checked){
            binp = delgrkl( binp );
        }
        if( document.getElementById("delbrackets").checked ){
            binp = delklammern( binp );
        }
    }

    if( document.getElementById("transllagr").checked ){
        binp = TranslitLatinGreekLetters( binp );
    } else if( document.getElementById("translgrla").checked ){
        binp = TraslitAncientGreekLatin( binp );
    }
    
    if( document.getElementById("nfdbutt").checked ){
        binp = normatext( binp, "NFD" );
    } else if( document.getElementById("nfcbutt").checked ){
        binp = normatext( binp, "NFC" );
    } else if( document.getElementById("nfkdbutt").checked ){
        binp = normatext( binp, "NFKD" );
    } else if( document.getElementById("nfkcbutt").checked ){
        binp = normatext( binp, "NFKC" );
    } 

    return binp;

}

/*application of decomposition and saveing to file*/
function appldecomp( fn, ainp ){
    let binp = ainp;

    //at first save just normed text
    dodownit( binp, fn+"-normed.txt", "text/txt" );

    //maybe save additional decompositions
    if( document.getElementById("sepdiak").checked ){
        dodownit( JSON.stringify(ExtractDiafromBuchstText( binp )), fn+"-diabuchsep.txt", "text/txt" );
    }
    if( document.getElementById("wconsos").checked  ){
        dodownit( ohneKon( binp ), fn+"-woconso.txt", "text/txt" );
    }
    if( document.getElementById("wvocal").checked ){
        dodownit(ohnVoka( binp ), fn+"-wovoca.txt", "text/txt" );
    }
    if( document.getElementById("justklein").checked  ){
        dodownit(justKLEIN( binp ), fn+"-smallwords.txt", "text/txt" );
    }
    if( document.getElementById("justgrosz").checked  ){
        dodownit(justGROSZ( binp ), fn+"-notsamllewords.txt", "text/txt" );
    }
    if( document.getElementById("ngram").checked  ){
        let N = parseInt( document.getElementById("nofgram").value );
        let P = false;
        if( document.getElementById("padsel").value == "1" ){
            P = true;
        }
        if( document.getElementById("gramsel").value == 0 ){
            dodownit(JSON.stringify(genngram( binp.split( " " ), N )), fn+"-word"+N+"grams.txt", "text/txt" );
        } else if( document.getElementById("gramsel").value == 1 ){
            dodownit( JSON.stringify(ngramWords( binp.split( " " ), N, P )), fn+"-wordsign"+N+"grams+.txt", "text/txt" );
        } else if( document.getElementById("gramsel").value == 2 ){
            dodownit( JSON.stringify(ngramWhole( binp, N )), fn+"-sign"+N+"grams.txt", "text/txt" );
        }
    }
    if( document.getElementById("silb").checked  ){
        dodownit( JSON.stringify(silben( binp.normalize( analysisNormalform ) )), fn+"-syllab.txt", "text/txt" );
    }
    if( document.getElementById("kkc1").checked ){
        dodownit(JSON.stringify(toKKC( binp )), fn+"-kkc.txt", "text/txt" );
    } 
    if( document.getElementById("kkc2").checked  ){
        dodownit(JSON.stringify(toKKCnSufixWords( binp )), fn+"-kkc2.txt", "text/txt" );
    }
    if( document.getElementById("nachbarsch").checked  ){
        dodownit(JSON.stringify(fnb( binp )), fn+"-flatneighbours.txt", "text/txt" );
    }


    
        

}

/*GUI FKT*/
function run( elm ){
    //gather input
    if( elm === null ){
        let rawinp = document.getElementById( "myriad" ).value;
        rawinp = applnorm( rawinp );
        let nameoffile = "nameoffile";
        nameoffile = prompt("Name the result file:");
        appldecomp( nameoffile, rawinp ); //save to the same time
    } else {
        for( let f = 0; f < elm.files.length; f += 1 ){
            if( elm.files[f].type.indexOf("text") !== -1 ){
                console.log(elm.files[f].type, elm.files[f].name);
                let freader = new FileReader( );
                freader.onload = ( 
                    function( theFile ){
                               return function(e) {
                                    //console.log( e.target.result, theFile.name);
                                    let rawinp = e.target.result;
                                    rawinp = applnorm( rawinp );
                                    let nameoffile = theFile.name;
                                    appldecomp( nameoffile, rawinp ); 
                                };
                     }   
                )( elm.files[f] );
                freader.readAsText( elm.files[f] );
            }
        }
    }
}

//eoffoe
