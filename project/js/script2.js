document.addEventListener('DOMContentLoaded', function() {
    var arrowUp = document.querySelector('.arrow_up');
    window.onscroll = function() {
        if(document.documentElement.scrollTop > 400) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    };

    function up() {
        window.scrollBy(0,-30);
        if (window.pageYOffset > 0) {
        requestAnimationFrame(up);
        }
    };
    arrowUp.addEventListener('click', function(e) {
        e.preventDefault();
        up();
    }, false);

    var dataNews = [
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и ',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
        title: 'Lorem Ipsum - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и ',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.',
        title: 'Lorem Ipsum - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и ',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.',
        title: 'Lorem Ipsum - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    }
    ];


    var newsWrapper = document.querySelector('.news_wrapper');

    for (var i = 0; i < dataNews.length; i++) {
        var newsImg = document.createElement('img');
        newsImg.classList.add('col-lg-4');
        newsImg.classList.add('col-md-4');
        newsImg.classList.add('col-sm-4');
        newsImg.classList.add('col-xs-4');
        newsImg.src = dataNews[i].img;
        var divNewsWrapper = document.createElement('div');
        divNewsWrapper.classList.add('col-lg-8');
        divNewsWrapper.classList.add('col-md-8');
        divNewsWrapper.classList.add('col-sm-8');
        divNewsWrapper.classList.add('col-xs-8');
        var newsTitle = document.createElement('h3');
        newsTitle.innerHTML = dataNews[i].title;
        var newsText = document.createElement('p');
        newsText.innerHTML = dataNews[i].text;
        var newsTextHidden = document.createElement('span');
        newsTextHidden.innerHTML = dataNews[i].textHidden;
        newsTextHidden.style.display = 'none';
        var newsLink = document.createElement('span');
        newsLink.innerHTML = ' читать дальше';
        newsLink.style.fontWeight = "bold";
        newsLink.style.color = "blue";
        var newsLinkClose = document.createElement('span');
        newsLinkClose.innerHTML = ' свернуть';
        newsLinkClose.style.fontWeight = "bold";
        newsLinkClose.style.color = "red";
        
        newsText.appendChild(newsTextHidden);
        newsTextHidden.appendChild(newsLinkClose);
        newsText.appendChild(newsLink);
        divNewsWrapper.appendChild(newsTitle);
        divNewsWrapper.appendChild(newsText);
        newsWrapper.appendChild(newsImg);
        newsWrapper.appendChild(divNewsWrapper);

        newsLink.addEventListener('click', function(){
            this.style.display = 'none';
            this.previousElementSibling.style.display = 'inline';

            this.previousElementSibling.firstElementChild.style.display = 'inline';
        });

        newsLinkClose.addEventListener('click', function(){
            this.style.display = 'none';
            this.parentElement.style.display = 'none';
            this.parentElement.nextElementSibling.style.display = 'inline';
        });
    };


});