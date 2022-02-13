chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})
chrome.tabs.query({}, function(data){
    data.forEach(element => {
        // console.log(element.url)
        document.getElementById('url_links').innerHTML += "<li>" + element.title + "</li>"
    });
    
})

findTabs = (data) => {
    return data.length
}
// findURL = (data) => {
//     return data.url === "*://*.youtube.com/*"
// }