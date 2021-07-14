

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

var words = document.querySelector
('.words'), p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', function(event){
    p.textContent = Array.from(event.results)
    .map(function(result){
        return result[0];
    })
    .map(function(result){
        return result.transcript;
    })
    .join('');
    
    if(event.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();

