document.getElementById('openLetterBtn').onclick = function() {
    var letter = document.getElementById('letter');
    letter.style.display = 'flex';
    
    setTimeout(function() {
        letter.classList.add('show');
    }, 10);
};

document.getElementById('closeLetterBtn').onclick = function() {
    var letter = document.getElementById('letter');
    letter.classList.remove('show');
    
    setTimeout(function() {
        letter.style.display = 'none';
    }, 500);
};

window.onclick = function(event) {
    var letter = document.getElementById('letter');
    if (event.target == letter) {
        letter.classList.remove('show');
        setTimeout(function() {
            letter.style.display = 'none';
        }, 500);
    }
};
