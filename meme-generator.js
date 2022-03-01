const form = document.querySelector('#meme-form');
const imgContainer = document.querySelector('.img-container');
const url = form.elements.url;
const topText = form.elements.toptext;
const bottomText = form.elements.bottomtext;

function createMeme(){
    const meme = document.createElement('div');
    const img = document.createElement('img');
    meme.classList.add('meme')
    img.src = url.value;
    meme.append(img);

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('topText');
    topTextDiv.innerText = topText.value.toUpperCase();
    meme.append(topTextDiv);

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottomText');
    bottomTextDiv.innerText = bottomText.value.toUpperCase();
    meme.append(bottomTextDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = "X";
    meme.append(deleteBtn);

    imgContainer.append(meme);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createMeme();
    form.reset();
})

imgContainer.addEventListener('click', function(e) {
    if (e.target.nodeName === 'BUTTON') {
        e.target.closest('div').remove();
    };
})