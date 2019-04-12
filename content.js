var blocks;
var webappUrl;
var output;
var companyName;
var description;
var phoneNumber;
var emailContact;
var numOfEmployees;
var city;
var profileUrl;
var specialties;


blocks = document.getElementsByClassName("provider-row");

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrape_results() {
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
    let chartArray = chartText.match(/data-content="(.*?"/gm);
//     let chartDataDirty = /data-content="(.*?)"/gm.(chartText);
    specialities = "";
    for (let y = 0; y < chartArray.length; y++) {
        // Positive Lookbehind (?<=<i>)
        let newRatio = /(?<=<i>).+?(?=<\/i>)/.exec(chartArray[y]);
        // newRatio[0] now equals the ratio we want
        let newSpecialty = /(?<=<b>).+?(?=<\/b>)/.exec(chartArray[y]);
        // newSpecialty[0] now equals the specialty we want
        specialities = specialities + newSpecialty[0] + ": " + newRatio[0] + ".  ";
    }

    companyName = "&co=" + tempCompanyName.replace(/&/g, "and");
    description = "&des=" + tempDescription.replace(/&/g, "and");
    phoneNumber = "&phone=" + tempPhoneNumber;
    numOfEmployees = "&emp=" + tempNumOfEmployees;
    city = "&cs=" + tempCity;
    profileUrl = "&pro=" + profileUrl;
    specialties = "&spe=" + specialties;

    output = webappUrl+"?"+companyName+city+numOfEmployees+description+specialties+phoneNumber+emailContact+profileUrl; 

	try {
		chrome.runtime.sendMessage({ message: output });
		} catch(err) {
		console.log(err);
		}


	}
}
