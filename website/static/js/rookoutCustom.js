<!-- Global site tag (gtag.js) - Google Analytics -->
if (document.getElementById) document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-104510371-3"></script>');


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-104510371-3');


window.addEventListener('load', function () {
  const originalSearchContainer = document.querySelector("ul.nav-site > .navSearchWrapper.reactNavSearchWrapper");

  if (originalSearchContainer !== null) {
    originalSearchContainer.parentElement.removeChild(originalSearchContainer);
  }

  const docNavbarElem = document.querySelector("section.navWrapper.wrapper");

  if (docNavbarElem !== null) {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('rook-searchBar', 'rook-docNav');

    const searchBarInput = document.createElement('input');
    searchBarInput.setAttribute('type', 'text');
    searchBarInput.setAttribute('placeholder', 'Search...');
    searchBarInput.setAttribute('id', 'rookout-search');

    const searchBarIcon = document.createElement('img');
    searchBarIcon.setAttribute('src', '/img/icons/search.svg');

    searchContainer.appendChild(searchBarInput);
    searchContainer.appendChild(searchBarIcon);

    docNavbarElem.insertBefore(searchContainer, docNavbarElem.children.item(0));
  }

  docsearch({
    apiKey: 'c4a6a6e1d94fba2757ec2969d13ac547',
    indexName: 'rookout',
    inputSelector: '#rookout-search'
  });
});
