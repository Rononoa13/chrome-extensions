// returns total number of tabs in windows
// Display in front "popup.html"
chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})

const findTabs = (data) => {
    return data.length
}

// Get element <h6 id="url_links">Links:</h6> from popup.html
let myList = document.getElementById('url_links')
// Create new element <ul> </ul>
let myUlList = document.createElement('ul')
// Create this: <li> {text} </li>
function createListItem(text) {
    let li = document.createElement('li')
    li.innerHTML = `<a href='#'>${text}</a>`
    return li
}
// Append <ul> tag inside of <h6> tag in popup.html
appendChildren(myList, myUlList)

// Function to append children element to parent element
function appendChildren(parent, children) {
    parent.appendChild(children)
}
// returns all the tabs in windows
chrome.tabs.query({}, function (tabs) {
    tabs.reverse().forEach(function (element) {
        // Append <li> tag inside of <ul> tag in popup.html
        let myListItem = createListItem(element.title)
        appendChildren(myUlList, myListItem)
        // Click on links to do something
        myListItem.onclick = function () {
            chrome.windows.getCurrent(function (currentWindow) {
                if (currentWindow.id === element.windowId) {
                    chrome.tabs.update(element.id, { active: true })
            // } else {
                chrome.windows.update(element.windowId, { focused: true }, function () {
                            // Activate the tab within the window
                            chrome.tabs.update(element.id, { active: true });
                })}
            })
            // let windowId = element.windowId;
            
            // if (windowId === chrome.windows.WINDOW_ID_CURRENT) {
            //     chrome.tabs.update(element.id, { active: true })
            // } else {
            //     chrome.windows.update(element.windowId, { focused: true }, function () {
            //                 // Activate the tab within the window
            //                 chrome.tabs.update(element.id, { active: true });
            // })}
        }
    })
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


// findURL = (data) => {
//     return data.url === "*://*.youtube.com/*"
// }