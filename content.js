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


document.body.style = "background: #f00";
webappUrl = "https://script.google.com/macros/s/AKfycbxBtPROgI4HGkXiJW7fugiQFh95yd5ijRaembSdD4uMTw7TF4w/exec"
blocks = document.getElementsByClassName("provider-row");

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function scrape_results() {
for (let i = 0; i < blocks.length; i++) {
    try {
    console.log("Scraping block # " + i);
    let tempCompanyName = blocks[i].getElementsByTagName("a")[1].innerText;
    let companyName = "&co=" + tempCompanyName.replace(/&/g, "and");

    let tempTagLine = blocks[i].getElementsByClassName("tagline")[0].innerText;
    let tagLine = "&tag=" + tempTagLine.replace(/&/g, "and"); 

    let tempCompanyProfileURL = blocks[i].querySelector("a").getAttribute("href");
    console.log("Profile URL is: " + tempCompanyProfileURL); 
    let companyProfileURL = "&profile=" + tempCompanyProfileURL;

    let tempCompanyWebsite = blocks[i].getElementsByClassName("website-link website-link-a")[0].innerHTML.match(/href=".+?(?=\?)/)[0];
    let companyWebsite = "&web=" + tempCompanyWebsite;

    
    output = encodeURI(webappUrl + "?" + companyName + tagLine + companyProfileURL + companyWebsite);
    await sleep(2500);
        
    console.log("output is " + output);
    } catch(e) {
    console.log(e);
    }

	try {
		chrome.runtime.sendMessage({ message: output });
		} catch(err) {
		console.log(err);
		}
	}
}
scrape_results();

setTimeout(function(){document.body.style = "background: #fff";}, 500);
