//My first API
let APIKEY = "PXF0UFvNKUitBnxN3KFQ6PRN01bRq1to";
document.addEventListener("DOMContentLoaded", init);
function init(){
    document.getElementById("srchbttn").addEventListener('click', ev => {
        ev.preventDefault();
        let url = ''
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);
        console.log(url);
    });

}