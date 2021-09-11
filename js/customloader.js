const script = document.createElement('script')
script.setAttribute('type', 'module');
script.setAttribute('src', 'https://unpkg.com/pose-viewer@0.2.3/dist/pose-viewer/pose-viewer.esm.js');
script.onload = function() {


    verifyCustomElements().then(fn=>{

        console.log('defined')
        console.log(window.customElements)
    })


}
document.body.appendChild(script);


async function  verifyCustomElements(){


    while (!window.customElements.get('pose-viewer')) {

        await new Promise(resolve => requestAnimationFrame(resolve))
        consol.log("checking")
        console.log(window.customElements.get('pose-viewer'))
    }

}


