document.addEventListener("DOMContentLoaded", function () {
    const seolIcon = document.querySelector(".seol-icon");
    const munchIcon = document.querySelector(".munch-icon");
    const selectContainer = document.querySelector(".select-container");
    const imgPop = document.querySelector('.img-pop');
    const catGallery = document.querySelector('.cat-gallery');
    const exitButton = document.querySelector('.exit');
    const backImageBox1 = document.querySelector('.back-img1');
    const backImageBox2 = document.querySelector('.back-img2');
    const backImageBox3 = document.querySelector('.back-img3');
    const backImage1 = document.querySelector('.back-img1 > img');
    const backImage2 = document.querySelector('.back-img2 > img');
    const backImage3 = document.querySelector('.back-img3 > img');
    const backImage4 = document.querySelector('.back-img4');
    const seoliImf = document.querySelector(".seoli-imf");
    const munchImf = document.querySelector(".munch-imf");
    const logoClicker = document.querySelector(".logo");

    function handleExit() {
        exitButton.style.display = "none";
        imgPop.style.display = "none";
        seoliImf.style.display = "none";
        munchImf.style.display = "none";
        catGallery.style.opacity = '1';
        backImage4.style.display = 'none';
        backImageBox1.style.display = 'block';
        backImageBox2.style.display = 'block';
        backImageBox3.style.display = 'block';
        backImage3.style.display = "block";
        setTimeout(() => {
            backImage2.style.display = "block";
            backImage2.style.animation = "backFadeIn 0.5s ease forwards";
            const checkOpacity = setInterval(() => {
                if (window.getComputedStyle(backImage2).opacity === "1") {
                    clearInterval(checkOpacity);     
                    setTimeout(() => {
                        backImage1.style.display = "block";
                        backImage1.style.animation = "backFadeIn 0.5s ease forwards";
                    }); 
                }
            });
        });
        removeArticles();
    }
    
    logoClicker.addEventListener("click", function () {
        handleExit();
    });
    
    exitButton.addEventListener("click", function () {
        handleExit();
    });
    

    function handleIconClick(imageElement, imageFunction) {
        selectContainer.style.display = "none";
        exitButton.style.display = "block";
        backImage1.style.display = "none";
        backImage2.style.display = "none";
        backImage3.style.display = "none";
        backImageBox1.style.display = 'none';
        backImageBox2.style.display = 'none';
        backImageBox3.style.display = 'none';
        backImage4.style.display = "block";
        imageElement.style.display = "block";
        imageFunction();
    }
    
    seolIcon.addEventListener("click", function () {
        handleIconClick(seoliImf, catsImg);
    });
    
    munchIcon.addEventListener("click", function () {
        handleIconClick(munchImf, dogsImg);
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
            setTimeout(() => {
                article.classList.add('fadeIn');
            });
        }
    }

    function removeArticles() {
        const parentElement = document.getElementById('articles');
        const articles = parentElement.querySelectorAll('article');
        articles.forEach((article, index) => {
            article.style.animation = "fadeOut 0.3s ease forwards";
            article.addEventListener('animationend', function () {
                parentElement.removeChild(article);
                if (index === articles.length - 1) {
                    const selectContainer = document.querySelector(".select-container");
                    selectContainer.style.display = "block";
                    selectContainer.style.animation = "fadeIn 0.5s ease forwards";
                }
            });
        });
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






