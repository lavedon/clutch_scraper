var blocks;
var webappUrl;



blocks = document.getElementsByClassName("provider-row");

for (let i = 0; i < blocks.length; i++) {
    let tempCompanyName = blocks[i].getElementsByTagName("a")[1].innerText;
    let tempDescription = blocks[i].getElementsByTagName("p")[1].innerText;
    let tempWebAddressHTML = blocks[i].getElementsByTagName("a")[6].parentNode.innerHTML;
    let resultWeb = /"(.*?)"/.exec(tempWebAddressHTML);
    let url = resultWeb[1];
    let tempEmailContact = blocks[i].getElementsByTagName("a")[10].innerText;
    let tempMinimumProjectSize = blocks[i].getElementsByClassName("list-item")[0].innerText;
    let tempNumOfEmployees = blocks[i].getElementsByClassName("list-item")[2].innerText;
    let tempCity = blocks[i].getElementsByClassName("list-item")[3].innerText;
    let tempClutchProfileHTML = blocks[i].getElementsByTagName("li")[2].innerHTML;
    let resultProfile = /"(.*?)"/.exec(tempWebAddressHTML);
    let tempProfileUrl = resultProfile[1];
    let tempPhoneNumber = blocks[i].getElementsByTagName("li")[3].getElementsByClassName("item __color6a")[0].innerText;
    let chartText = blocks[1].getElementsByClassName("chartAreaContainer")[0].innerHTML;
    let chartDataDirty = chartText.match(/data-content="(.*?"/gm);
//     let chartDataDirty = /data-content="(.*?)"/gm.(chartText);
    let specialities = [];
    for (let i = 0; i < ratio_before; i++)
    {
         
    }
    let ratio_before; 
    let specialty;


undefined
}