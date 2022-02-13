// returns total number of tabs in windows
chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})

// returns all the tabs in windows
chrome.tabs.query({}, function (data) {
    data.forEach(element => {
        // console.log(element.url)
        document.getElementById('url_links').innerHTML += "<ul><li>" + element.title + "</li></ul>"
        document.getElementById('id').textContent += data.id
    });
})

// Checks if a particular URL is present.
chrome.tabs.query({url:[
    "*://*.facebook.com/*"
]}, function(tabs){
    // console.log(tabs[0].url);
    tabs.forEach(element => {
        console.log(typeof(element))
    })
});

findTabs = (data) => {
    return data.length
}
// findURL = (data) => {
//     return data.url === "*://*.youtube.com/*"
// }