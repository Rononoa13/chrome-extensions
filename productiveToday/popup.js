chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    // console.log(tabsNumber)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})

findTabs = (data) => {
    return data.length
}
