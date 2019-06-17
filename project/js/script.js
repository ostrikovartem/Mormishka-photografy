document.addEventListener('DOMContentLoaded', function() {
    var arrowUp = document.querySelector('.arrow_up');
    window.onscroll = function() {
        if(document.documentElement.scrollTop > 400) {
            arrowUp.style.display = 'block';
            console.log(this);
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




    var dataBlog = [
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
        title: 'Lorem Ipsum1 - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.',
        title: 'Lorem Ipsum2 - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.',
        title: 'Lorem Ipsum3 - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    },
    {
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и',
        textHidden: ', в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.',
        title: 'Lorem Ipsum4 - это текст-"рыба"',
        img: '../assets/images/temporary_img.jpg'
    }
    ];

    var blogWrapper = document.querySelector('.blog_wrapper');

    for (var i = 0; i < dataBlog.length; i++) {
        var blogImg = document.createElement('img');
        blogImg.classList.add('col-lg-4');
        blogImg.classList.add('col-md-4');
        blogImg.classList.add('col-sm-4');
        blogImg.classList.add('col-xs-4');
        blogImg.src = dataBlog[i].img;
        var divWrapper = document.createElement('div');
        divWrapper.classList.add('col-lg-8');
        divWrapper.classList.add('col-md-8');
        divWrapper.classList.add('col-sm-8');
        divWrapper.classList.add('col-xs-8');
        var blogTitle = document.createElement('h3');
        blogTitle.innerHTML = dataBlog[i].title;
        var blogText = document.createElement('p');
        blogText.innerHTML = dataBlog[i].text;
        var blogTextHidden = document.createElement('span');
        blogTextHidden.innerHTML = dataBlog[i].textHidden;
        blogTextHidden.classList.add('hideText');
        blogTextHidden.style.display = 'none';
       // blogTextHidden.style.opacity = '0';
       // blogTextHidden.style.transition = 'opacity .8s linear';
        var blogLink = document.createElement('span');
        blogLink.innerHTML = ' читать дальше';
        blogLink.style.fontWeight = "bold";
        blogLink.style.color = "blue";
        var blogLinkClose = document.createElement('span');
        blogLinkClose.innerHTML = ' свернуть';
        blogLinkClose.style.fontWeight = "bold";
        blogLinkClose.style.color = "red";

        blogText.appendChild(blogTextHidden);
        blogTextHidden.appendChild(blogLinkClose);
        blogText.appendChild(blogLink);
        divWrapper.appendChild(blogTitle);
        divWrapper.appendChild(blogText);
        blogWrapper.appendChild(blogImg);
        blogWrapper.appendChild(divWrapper);

        
        
        blogLink.addEventListener('click', function(){
            this.style.display = 'none';
            this.previousElementSibling.style.display = 'inline';
            //this.previousElementSibling.style.opacity = '1';
            this.previousElementSibling.firstElementChild.style.display = 'inline';
        });

        blogLinkClose.addEventListener('click', function(){
            var hidden = this.parentElement;
            var readMore = this.parentElement.nextElementSibling;
            this.style.display = 'none';
            hidden.style.display = 'none';
            readMore.style.display = 'inline';
            /*this.parentElement.style.opacity = '0'
            if (this.parentElement.style.opacity = '0') {
                setTimeout(function(){ 
                    hidden.style.display = 'none';
                    readMore.style.display = 'inline';
                 }, 500);
        }*/
            //this.parentElement.nextElementSibling.style.display = 'inline';
        });
    

    };
    

    


});