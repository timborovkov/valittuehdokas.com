$(document).ready(function() {
    $("#slideShow").skeletonSlideShow({
        animation: 'slide',
        easingMethod: 'linear',
        height: 700,
        transitionSpeed: 500,
        visibleFor: 5000,
        markupNavigation: true,
        navigationContainer: '#sliderNavigation',
        pluginLoaded: function() {
            $('#sliderNavigation .previous_page').html('<div class="six columns left"><i class="fa fa-chevron-left"></i></div>');
            $('#sliderNavigation .next_page').html('<div class="six columns right"><i class="fa fa-chevron-right"></i></div>');
        }
    });

    $(".puolue").click(function() {
        var puolue = $(this).attr('id');
        switch (puolue) {
            case "kokoomus":
                $('.puoluePopup').find('h1').html('Kokoomus');
                $('.puoluePopup').find('p.details').html('Jos olet Kokoomuksen ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Kokoomus on aito kansanliike, jonka tavoitteena on luoda mahdollisuuksien tasa-arvon Suomi. Haluamme säilyttää hyvinvoinnin ja toivon paremmasta myös vaikeina aikoina. Tervetuloa talkoisiin paremminvointivaltion puolesta, olitpa sitten puolesta, vastaan tai jotain siltä väliltä!"');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/kokoomus');
                $('.puoluePopup').find('a.more').attr('href', 'http://kokoomus.fi');
                break;
            case "rkp":
                $('.puoluePopup').find('h1').html('SFP / RKP');
                $('.puoluePopup').find('p.details').html('Jos olet RKP:n ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Suomen ruotsalainen kansanpuolue r.p. koostuu jäsenyhdistyksistä, joita ovat puolueen paikallisosastot, erityisyhdistykset ja alueelliset piirit. Piirien tehtävänä on helpottaa ja tukea paikallisosastojen toimintaa paikallisten  tarpeiden ja esiin nousevien kysymysten pohjalta. RKP on jaettu viiteen piiriin: Helsinki, Uusimaa, Varsinais-Suomi, Pohjanmaa ja Muu Suomi."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/rkp');
                $('.puoluePopup').find('a.more').attr('href', 'http://www.sfp.fi/fi');
                break;
            case "keskusta":
                $('.puoluePopup').find('h1').html('Keskusta');
                $('.puoluePopup').find('p.details').html('Jos olet Keskustan ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Keskustaan mahtuu monenlaisia ihmisiä, mutta yhteistä meille on samanlainen tapa ajatella ja toimia: kantaa vastuuta itsestämme, toisistamme ja ympäristöstämme. Keskustan aatetta ja arvoja kuvaa parhaiten vastuullinen vapaus. Ihminen on vastuussa omista tekemistään ja valinnoistaan ennen kaikkea itselleen. Kuitenkin kaikessa hän kantaa vastuuta ja ottaa huomioon myös toiset."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/keskusta');
                $('.puoluePopup').find('a.more').attr('href', 'http://www.keskusta.fi/Suomeksi/Etusivu');
                break;
            case "peruss":
                $('.puoluePopup').find('h1').html('Perus Suomalaiset');
                $('.puoluePopup').find('p.details').html('Jos olet Perus Suomalaisten ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Perussuomalaisten toiminnan perustana ovat rehellisyys, oikeudenmukaisuus, inhimillisyys, tasa-arvo, työn ja yrittämisen kunnioittaminen sekä henkinen kasvu. Sukupolvet ylittävänä tavoitteenamme on kestävä kehitys kaikilla hyvinvoinnin mittareilla tarkasteltuna: Maamme tulee jättää uusille sukupolville sosiaalisesti, taloudellisesti, sivistyksellisesti ja ekologisesti sekä moraaliselta tasoltaan paremmassa kunnossa kuin se on tänä päivänä."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/peruss');
                $('.puoluePopup').find('a.more').attr('href', 'https://www.perussuomalaiset.fi/');
                break;
            case "vihreat":
                $('.puoluePopup').find('h1').html('Vihreät');
                $('.puoluePopup').find('p.details').html('Jos olet Vihreiden ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Vihreällä liitolla on noin 200 jäsenyhdistystä. Puolueeseen kuulutaan aina jonkin yhdistyksen kautta, liitttyessäsi jäseneksi voit valita sinulle sopivimman. Yhdistykset toimivat joko tietyllä paikkakunnalla tai alueella tai valtakunnallisesti, kaikkiin voit liittyä kotipaikkakunnastasi riippumatta."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/vihret');
                $('.puoluePopup').find('a.more').attr('href', 'https://www.vihreat.fi/');
                break;
            case "vasemmisto":
                $('.puoluePopup').find('h1').html('Vasemmistoliitto');
                $('.puoluePopup').find('p.details').html('Jos olet Vasemmistoliiton ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Vasemmistoliitto on Suomen viidenneksi suurin puolue. Tavoitteenamme on oikeudenmukainen ja ekologisesti tasapainoinen maailma. Vasemmistoliitto rp on puolueen virallinen rekisteröity nimi. Sen rinnalla on käytössä lyhyempi ja jo yleiseksi vakiintunut versio Vasemmisto."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/vihreat');
                $('.puoluePopup').find('a.more').attr('href', 'http://www.vasemmisto.fi/');
                break;
            case "sdp":
                $('.puoluePopup').find('h1').html('SDP');
                $('.puoluePopup').find('p.details').html('Jos olet SDPn ehdokas joka tarvitsee nettisivuja, mielellämme autamme sinua! Ottamalla meihin yhteyttä ole valmis kertomaan minkälaisen nettisivun haluaisit ja mitä sisältöä sinne laitetaan! Voit vaikka katsoa esimerkkiehdokan nettisivun painamalla "Katso Demo".');
                $('.puoluePopup').find('p.lainaus').html('"Social democracy has assigned as its goal the establishment of a society founded on freedom, equality and solidarity. Within such a society, everyone, according to one=s capabilities, contributes to the advancement of one´s own well being and to the furtherance of the common welfare. Every person as well as the environment are cared for. Justice is generated by the balance between rights and responsibility."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/sdp');
                $('.puoluePopup').find('a.more').attr('href', 'http://sdp.fi/en/');
                break;
            case "kd":
                $('.puoluePopup').find('h1').html('Kristillisdemokraattit');
                $('.puoluePopup').find('p.lainaus').html('"Haluamme uudistaa työmarkkinat sekä yksinkertaistaa sosiaaliturvajärjestelmää.  Työmarkkinoille tarvitaan joustavuutta, turvaa ja parempia aktivointitoimia. Nykyinen usean tuen tilanne synnyttää kannustinloukkuja ja työttömyyttä. Yhteensovitetaan työ ja sosiaaliturva nykyistä joustavammalla tukimuodolla, jonka suuruus määräytyy kotitalouden elämäntilanteen mukaan. Työtön voi olla varma siitä, että työnteko kannattaa aina taloudellisesti."');
                $('.puoluePopup').find('a.demo').attr('href', 'demo/kd');
                $('.puoluePopup').find('a.more').attr('href', 'http://www.kd.fi/');
                break;
        }
        $('.popupWrapper').fadeIn(200);
    });

    $('a.closePopup').click(function() {
        $('.popupWrapper').fadeOut(200);
    });

    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".menubar").css('background-color', 'rgba(0, 0, 0, 0.8)');
                $(".menubtn").css('color', '#fff');
                $('.menubar .barpagelogo').show();
            } else {
                $('.menubar').css('background-color', 'transparent');
                $(".menubtn").css('color', '#000');
                $('.menubar .barpagelogo').hide();
            }
        });
    }
});

/* Open */
window.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close */
window.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
}
