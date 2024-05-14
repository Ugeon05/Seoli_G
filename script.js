document.addEventListener("DOMContentLoaded", function () {
    const seolIcon = document.querySelector(".seol-icon");
    const munchIcon = document.querySelector(".munch-icon");
    const selectContainer = document.querySelector(".select-container");
    const imgPop = document.querySelector('.img-pop');
    const catGallery = document.querySelector('.cat-gallery');

    seolIcon.addEventListener("click", function () {
        selectContainer.style.display = "none";
        catsImg();
    });

    munchIcon.addEventListener("click", function () {
        selectContainer.style.display = "none";
        dogsImg();
    });

    function catsImg() {
        const gallerys = document.getElementById('articles');
        for (let i = 1; i <= 30; i++) {
            const article = document.createElement('article');
            const img = document.createElement('img');
            img.src = `img/cats/cat${i}.jpg`;
            img.alt = `cat${i}`;
            article.appendChild(img);
            gallerys.appendChild(article);
        }
    }

    function dogsImg() {
        const gallerys = document.getElementById('articles');
        for (let i = 1; i <= 30; i++) {
            const article = document.createElement('article');
            const img = document.createElement('img');
            img.src = `img/dogs/dog${i}.jpg`;
            img.alt = `dog${i}`;
            article.appendChild(img);
            gallerys.appendChild(article);
        }
    }

    const imgArticles = document.getElementById('articles');

    imgArticles.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const imgSrc = event.target.src;
            const imgAlt = event.target.alt;

            imgPop.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            imgPop.style.display = 'block';

            imgPop.querySelector('img').style.width = '100%';
            imgPop.querySelector('img').style.height = 'auto';
            imgPop.style.overflow = 'hidden';

            catGallery.style.transition = 'opacity 0.5s';
            catGallery.style.opacity = '0.3';

            imgPop.style.opacity = '1';
        }
    });

    imgPop.addEventListener('click', function () {
        imgPop.style.opacity = '0';

        setTimeout(() => {
            imgPop.style.display = 'none';
            catGallery.style.opacity = '1';
        }); 
    });
});






