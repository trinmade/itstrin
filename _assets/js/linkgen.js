function makeLinks() {
    // links to make
    pages = [
        {
            path: 'index',
            label: 'home',
        },
        {
            path: 'tutoring'
        },
        {
            path: 'recipes'
        },
        {
            path: 'birds'
        },
        {
            path: 'resume'
        },
        {
            path: 'contact'
        }
    ]

    // Check page for link containers
    linksGoHere = document.getElementsByClassName("links")

    // If any
    if (linksGoHere.length) {
        linkHtml = '<ul>'
        currPage = window.location.href.toString()
        console.log(currPage)
        for (let page of pages) {
            if (currPage.includes(page.path)) {
                linkHtml += `
                <li>
                    [<a class="strikethrough">${page.label || page.path}</a>]
                </li>
            `
            } else {
                linkHtml += `
                <li>
                    [<a href="./${page.path}">${page.label || page.path}</a>]
                </li>
            `
            }
        }
        linkHtml += `</ul>`

        // Add the links
        for (linkBox of linksGoHere) {
            linkBox.innerHTML = linkHtml
        }

        console.log(linksGoHere)
    }

}