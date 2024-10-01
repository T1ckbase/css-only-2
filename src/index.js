document.querySelector('#rotate-test-x').addEventListener('input', function(e) {
    document.querySelector(':root').style.setProperty('--rotate-test-x', `${this.value}deg`);
});

document.querySelector('#rotate-test-y').addEventListener('input', function(e) {
    document.querySelector(':root').style.setProperty('--rotate-test-y', `${this.value}deg`);
});