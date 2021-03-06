/**
 * Make Your Own Bookmarklets With jQuery - http://goo.gl/OgL379
 */
(function () {
  function getScript (url, success) {
    var head = document.getElementsByTagName('head')[0]
    var done = false
    var script = document.createElement('script')
    script.src = url

    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true
        success()
      }
    }

    head.appendChild(script)
  }

  // check prior inclusion and version
  var v = '1.3.2'
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    getScript('http://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js', initMyBookmarklet)
  } else {
    initMyBookmarklet()
  }

  function initMyBookmarklet () {
    // your JavaScript code goes here!
    console.log('Hello Bookmarklet!')
  }
})()
