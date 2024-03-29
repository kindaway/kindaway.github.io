"using strict";

window.onload = () => {

    // disablePreloader();

    var satellitesElements = document.getElementsByClassName('satellite');

    var current = document.getElementById('distro_info');
    console.log(current);

    console.log(satellitesElements);

    let active = -1,
        previous;

    for (let i = 0; i < satellitesElements.length; i++) {
        satellitesElements[i].addEventListener('click', () => {
            setInfo(i);
        });     
    }  
    
    function setInfo(id) {
        
        console.log("CLICKED");
        console.log(id);

        if (satellitesElements[previous] != undefined) {
            satellitesElements[previous].style.scale="";
            satellitesElements[previous].classList.remove('enlarge');
            satellitesElements[previous].classList.remove('sat_color');
        }
        previous = id;
        satellitesElements[previous].classList.add('enlarge');
        satellitesElements[previous].classList.add('sat_color');


        switch(id) {
            case 0:
                current.innerHTML = '<h1 class="ds_h">Pop_OS!</h1><ul><li>общепризнанно «геймерская ОС от мира Linux»: встроенная поддержка большинства драйверов, подходит к NVIDIA и AMD</li><br><li>работает из «коробки»</li><br><li>подходит для ноутбуков из-за низкого энергопотребления</li></ul>';
                break;
            case 1:
                current.innerHTML = '<h1 class="ds_h">Manjaro</h1><ul><li>это Arch, но попроще, и сразу с GUI</li><br><li>невероятная гибкость кастомизации (настройки) рабочего стола и окружения</li></ul>';
                break;
            case 2:
                current.innerHTML = "<h1 class='ds_h'>Debian</h4><ul><li>с широкой поддержкой драйверов.</li><br><li>обладает высокой надежностью, поэтому используется в таких сферах как суперколлайдеры, фондовые биржи и автомобильная промышленность</li></ul>";
                break;
            case 3:                
                current.innerHTML = '<h1 class="ds_h">Arch</h1><ul><li>гол как сокол: поставляется только с минимальным набором системных программ, даже без драйверов,  что даёт большую свободу в выборе ПО</li><br><li>Arch Wiki - сборник информации о системе, решений всех возможных проблем и задач. С Arch вы всегда будете знать, что делать.</li></ul>';
                break;
            case 4:               
                current.innerHTML = '<h1 class="ds_h">Cent OS</h1><ul><li>обладает одним из лучших менеджером пакетов</li><br><li>высокая степень поддержки виртуализации (можно эмулировать Windows, Mac и др. ОС с высокой производительностью)</li></ul>';
                break;
            case 5:               
                current.innerHTML = '<h1 class="ds_h">Lubuntu</h1><ul><li>то же самое, что Ubuntu, но легковесная - меньше размер, выше производительность</li><br><li>использует новейшие разработки в сфере графического окружения</li></ul>';
                break;
            case 6:
                current.innerHTML = '<h1 class="ds_h">Mint</h1><ul><li>ориентирован на новичков в Linux: навигация, установка программ выполнено очень легко, целиком графически</li><br><li>предустановленный набор программ подходит для офисной работы</li></ul>';
                break;
            case 7:
                current.innerHTML = '<h1 class="ds_h">Sabayon</h1><ul><li>еще один очень удобный пакетный менеджер</li><br><li>99% совместим по конфигурациям с другими Linux устройствами</li></ul>';
                break;
            case 8:
                current.innerHTML = '<h1 class="ds_h">Elementary OS</h1><ul><li>создан специально для бывших пользователей Mac OS от Apple, мимикрирует под него внешним видом и набором программ</li><br><li>обладает высоким быстродействием</li></ul>';
                break;
            case 9:
                current.innerHTML = '<h1 class="ds_h">Ubuntu</h1><ul><li>простая и понятная ОС</li><br><li>можно загружать с flash-носителя и использовать на ПК без жесткого диска</li><br><li>самая популярная из всех дистрибутивов, вследствие этого имеет огромную базу материалов и дружелюбное сообщество пользователей</li></ul>';
                break;
        }
    }
};

window.onscroll = () => {
    // console.log("scroll");
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   document.getElementById("header").style.padding = "5px 10px";
    //   document.getElementById("t1").style.fontSize = "15px";
    //   document.getElementById("t2").style.fontSize = "15px";
    //   document.getElementById("logo_img").style.height="40px";

    //   for (let element of document.getElementsByClassName('nav_link')) {
    //     element.style = "font-size: 11px";
    //   }

    // } else {
    //   document.getElementById("header").style.padding = "10px 10px";
    //   document.getElementById("t1").style.fontSize = "20px";
    //   document.getElementById("t2").style.fontSize = "20px";
    //   document.getElementById("logo_img").style.height="50px";

    //   for (let element of document.getElementsByClassName('nav_link')) {
    //     element.style = "font-size: 15px";
    //   }
    // }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("tothetop").style = "bottom: 50px";
    }

    else {
        document.getElementById("tothetop").style = "bottom: -90px";
    }
};

function disablePreloader() {
    document.getElementById("preload_overlay").remove();
    document.getElementById("page").style = 'overflow-y: visible;';
}