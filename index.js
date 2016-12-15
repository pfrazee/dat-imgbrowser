const DEFAULT_URL = 'dat://96f65b2a611bd6d71f8c7ecf3d0251c1af398346c626895eec2e487ec124bf89/'

var ctrlsEl = document.querySelector('img-browser-ctrls')
var gridEl = document.querySelector('img-browser-grid')

ctrlsEl.addEventListener('url-change', e => {
  gridEl.setAttribute('url', e.detail)
})
ctrlsEl.setAttribute('url', DEFAULT_URL)