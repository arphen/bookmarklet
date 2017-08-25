/**
 * MyBookmark
 *
 * javascript:(function(){var e=window,t=document,o=encodeURIComponent,n=e.getSelection?e.getSelection():t.selection?t.selection.createRange():"",i=n.toString().trim(),c="https://script.google.com/macros/s/AKfycbxk98ryU6nBoOwDG8m9UH2U9_Gh2_CpJxSaMIPSwkQ/dev",a=e.open(c+"?title="+o(t.title)+"&url="+o(t.location)+"&note="+o(i),"myBookmark","left=0,top=0,height=600px,width=650px,resizable=1,alwaysRaised=1");e.setTimeout(function(){a.focus()},300)})();
 */
(function () {
  var e = window,
    t = document,
    o = encodeURIComponent,
    n = e.getSelection ? e.getSelection() : t.selection ? t.selection.createRange() : '',
    c = n.toString().trim(),
    i = 'https://script.google.com/macros/s/AKfycbxk98ryU6nBoOwDG8m9UH2U9_Gh2_CpJxSaMIPSwkQ/dev',
    s = e.open(i + '?title=' + o(t.title) + '&url=' + o(t.location) + '&note=' + o(c),
      'myBookmark', 'left=0,top=0,height=600px,width=650px,resizable=1,alwaysRaised=1')
  e.setTimeout(function () {
    s.focus()
  }, 300)
})()
