var pesq = document.getElementById('loadVideo');
var menu = document.getElementById('menu')
var mnstt = false

pesq.setAttribute('onclick', 'pesqs()');

function pesqs() {
    var url = document.getElementById('videoUrl').value;

    var videoId = extractVideoId(url);

    if (videoId) {
        var iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

        document.getElementById('videoContainer').style.display = 'block'
        document.getElementById('videoContainer').innerHTML = iframe;

    } else {
        alert('URL inválida. Por favor, insira uma URL válida do YouTube.');
    }
};

function extractVideoId(url) {
    var regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    var match = url.match(regex);

    return match ? match[1] : null;
}

menu.addEventListener('click', menut)

function menut() {

    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')

    if (mnstt) {
        line1.style.transform = ''

        line2.style.width = '30px'
        line2.style.opacity='1'

        line3.style.transform = ''

        options.style.right = '-200px'
        mnstt = false
    } else {
        line1.style.transform = 'rotate(-45deg) translate(-7px, 5.2px)'
        
        line2.style.width = '0px'
        line2.style.opacity='0'
        
        line3.style.transform = 'rotate(45deg) translate(-7px, -5.2px)'
        
        options.style.right = '0px'
        mnstt = true
    }
}