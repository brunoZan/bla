(function(win, doc) {

const containerPai = doc.querySelector('#YtKevlarVisibilityIdentifier');
const containerFilho = doc.querySelector('#top-container');
const anuncio = doc.querySelector('.style-scope ytd-rich-section-renderer');

containerPai.removeChild(containerFilho);

const interval = setInterval(() =>{
    const barra = doc.querySelector('#end');
    if(barra) {
        clearInterval(interval);
        console.log('barra carregado');

        const button = doc.createElement('button');
    //    const link = doc.createElement('a');
   //     link.setAttribute('href', 'https://i.imgur.com/WQVLAEg.png');

      //  button.appendChild(link)
        button.innerHTML = "I";
        barra.appendChild(button);
    }
}, 1000);

})(window, document);