console.log('welcome');

let body = document.querySelector('body');

let div = document.createElement('div')
div.classList.add('imageDisplay');
body.append(div);

let p = document.createElement('p');
p.innerHTML='Coffee image from public api';
div.append(p);

randomCoffeeApi = 'https://coffee.alexflipnote.dev/random'

let img = document.createElement('img');
img.setAttribute('src', randomCoffeeApi);
img.setAttribute('alt','cofee image');
div.append(img);


