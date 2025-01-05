var pesq = document.getElementById('loadVideo');

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
