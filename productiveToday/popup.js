// returns total number of tabs in windows
// Display in front "popup.html"
chrome.tabs.query({}, function (tabs) {
    let tabsNumber = findTabs(tabs)
    document.getElementById('total_tabs').textContent += " " + tabsNumber
})

// Get element <h6 id="url_links">Links:</h6> from popup.html
let myList = document.getElementById('url_links')

// Create new element <ul> </ul>
let myUlList = document.createElement('ul')
// Create this: <li> {text} </li>
function createListItem(text) {
    let li = document.createElement('li')
    li.innerHTML = text
    return li
}
// Append <ul> tag inside of <h6> tag in popup.html
appendChildren(myList, myUlList)

// returns all the tabs in windows
chrome.tabs.query({}, function (tabs) {
    tabs.reverse().forEach(function (element) {
        // Append <li> tag inside of <ul> tag in popup.html
        appendChildren(myUlList, createListItem(`<a href='#'>` + `${element.title}` + `</a>`))
    })
})

// Function to append children element to parent element
function appendChildren(parent, children) {
    parent.appendChild(children)
}
getIdURLLinks = (data) => {
    return document.getElementById('url_links').innerHTML += data
}

// // Click on links to do something
// chrome.tabs.query({}, function (data) {
//     data.forEach(element => {
//         document.getElementById('url_links').onclick = function () {
//             alert("This works" + element.title)
//         }
//     });
// })


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
