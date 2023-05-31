(function(){
    if(!window.bookmarklet) {
        let bookmarklet_js = document.body.appendChild(document.createElement('script'));
        console.log(bookmarklet_js);
        bookmarklet_js.src = '//bookmarks.ru:8000/static/js/bookmarklet.js?r=' +
            Math.floor(Math.random() * 9999999999999999);
        window.bookmarklet = true;
    }
    else {
        bookmarkletLaunch();
    }
})();