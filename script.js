for (let i = 1; i <= 30; i++) {
    document.getElementById('articles').innerHTML += `<article><img src="img/cats/cat${i}.jpg" alt="cat${i}"></article>`;
}



document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('#articles article');
    const imgPop = document.querySelector('.img-pop');
    const catGallery = document.querySelector('.cat-gallery');
    
    articles.forEach(article => {
        article.addEventListener('click', function() {
            // 이미지 불러오기
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            imgPop.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            imgPop.style.display = 'block';
            
            // 이미지 크기 조정
            imgPop.querySelector('img').style.width = '100%';
            imgPop.querySelector('img').style.height = 'auto';
            imgPop.style.overflow = 'hidden';

            // .cat-gallery 숨김
            catGallery.style.transition = 'opacity 0.5s';
            catGallery.style.opacity = '0.3';

            // 이미지 팝업 페이드 인
            setTimeout(() => {
                imgPop.style.opacity = '1';
            }, 50); 
        });
    });
    
    imgPop.addEventListener('click', function() {
        // 이미지 팝업 페이드 아웃
        imgPop.style.opacity = '0';

        // 사라진후 팝업 숨기기
        setTimeout(() => {
            imgPop.style.display = 'none';

            // cat-gallery 다시 표시
            catGallery.style.opacity = '1';
        }, 0); 
    });
});






