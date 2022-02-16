// returns total number of tabs in windows
// Display in front "popup.html"
chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})

// returns all the tabs in windows
chrome.tabs.query({}, function (data) {

    ulStart = '<ul>'
    ulEnd = '</ul>'
    data.reverse().forEach(element => {
        links = `<li><a href='#' class="presentLinks">` + `${element.title}` + `</a></li>`
        document.getElementById('url_links').innerHTML += links
    });
})

// Click on links to do something
chrome.tabs.query({}, function (data) {
    data.forEach(element => {
        document.getElementById('url_links').onclick = function () {
            alert("This works ")
        }
    });
})


// Checks if a particular URL is present.
// And close facebook if present.
chrome.tabs.query({
    url: [
        "*://*.facebook.com/*"
    ]
}, function (tabs) {
    console.log(tabs)
    // TODO: close the tab if facebook is present.
});

findTabs = (data) => {
    return data.length
}
// findURL = (data) => {
//     return data.url === "*://*.youtube.com/*"
// }
