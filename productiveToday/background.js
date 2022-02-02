chrome.tabs.query({}, function(tabs) {
    let tabsNumber = findTabs(tabs)
    console.log("Total tabs in window: " + tabsNumber)
    console.log(tabs)
    console.log(tabs[1])
    console.log(new Array(tabs.url))
    // tabs.forEach(function (tab){
    //     console.log(new Array(tab.url))
    //     // console.log(tab.url)
    //     // console.log(findURL(tab))
    // })
})

findTabs = (data) => {
    return data.length
}

findURL = (data) => {
    return data.url == "*://*.youtube.com/*"
}