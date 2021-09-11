const script = document.createElement('script')
;
script.setAttribute('src', chrome.extension.getURL("js/customloader.js"));

document.body.appendChild(script);



