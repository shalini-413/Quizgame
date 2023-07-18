function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    var score = 0;

    if (answers.q1 === 'a') {
        score += 1;
    }

    if (answers.q2 === 'b') {
        score += 1;
    }

    if (answers.q3 === 'a') {
        score += 1;
    }

    var feedback = document.getElementById('feedback');

    if (score === 3) {
        feedback.innerHTML = 'All answers are correct! You scored ' + score + ' out of 3!';
        feedback.style.backgroundColor = 'yellowgreen';
        feedback.style.color='black'

    } else if (score > 0) {
        feedback.innerHTML = 'Some answers are correct. You scored ' + score + ' out of 3.';
        feedback.style.backgroundColor = 'palevioletred';
        feedback.style.color='white'
    } else {
        feedback.innerHTML = 'None of the answers are correct. You scored ' + score + ' out of 3.';
        feedback.style.backgroundColor = 'red';
        feedback.style.color='white'
    }

    // Start the animation
    feedback.style.animationPlayState = 'running';

    // Play submit sound
    playSound('submitSound');
});
