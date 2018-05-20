// Chornogor ridge trip area 
const chornogoraTripArea = L.polygon([
  [48.103878, 24.730396],
  [48.01186, 24.615555],
  [48.153146, 24.459171],
  [48.170436, 24.3857],
  [48.200079, 24.415226],
  [48.169635, 24.564743],
  [48.103878, 24.730396]
], {
  color: '#92AD94',
  fillColor: '#555344',
  fillOpacity: 0.1,
}).addTo(mymap);

// Private estate "Kyiv Camp"
const estateKyivCamp = L.marker([48.098144,24.678287]).addTo(mymap);

estateKyivCamp.bindPopup(`<h1>Клубний будинок “Київська оселя”</h1>
                          <h2>Private estate "Kyiv Camp"</h2>
                          <img class="popup-image" src="images/chornohora/kyiv-camp-estate.jpg" alt="Kyiv camp estate">
                          <p>Початок та завершення маршруту</p>
                          <a href="https://dzembronya.blogspot.com/p/blog-page_17.html" target="blank">Детальніше</a>`);


// Dzembronsky waterfalls
const waterfallDzembronsky = L.marker([48.076688, 24.644936]).addTo(mymap);

waterfallDzembronsky.bindPopup(`<h1>Дзембронські водоспади</h1>
                                <h2>Dzembronsky waterfalls</h2>
                                <img class="popup-image" src="images/chornohora/dzembronsky-waterfalls.jpg" alt="Dzembronsky waterfalls">`);

// Smotrych mountain
const mountainSmotrych = L.marker([48.069319, 24.644769]).addTo(mymap);

mountainSmotrych.bindPopup(`<h1>Смотрич (гора)</h1>
                            <h2>Smotrych mountain</h2>
                            <img class="popup-image" src="images/chornohora/smotrych-mountain.jpg" alt="Smotrych mountain">
                            <p>Висота - 1898 м</p>
                            <p>Altitude - 1898 m</p>`);

// Vuchaty Kamin mountain
const mountainVuchatyKamin = L.marker([48.075072, 24.632099]).addTo(mymap);

mountainVuchatyKamin.bindPopup(`<h1>Вухатий Камінь (гора)</h1>
                                <h2>Vuchaty Kamin mountain</h2>
                                <img class="popup-image" src="images/chornohora/vuchaty-kamin-mountain.jpg" alt="Vuchaty kamin mountain">
                                <p>Висота - 1864 м</p>
                                <p>Altitude - 1864 m</p>`);

// Pip Ivan mountain
const mountainPipIvan = L.marker([48.047189, 24.627485]).addTo(mymap);

mountainPipIvan.bindPopup(`<h1>Піп Іван Чорногорський (гора)</h1>
                           <h2>Pip Ivan mountain</h2>
                           <img class="popup-image" src="images/chornohora/pip-ivan-mountain.jpg" alt="Pip Ivan mountain">
                           <p>Висота - 2020,5 м</p>
                           <p>Altitude - 2020,5 m</p>`);

// Menchul mountain
const mountainMenchul = L.marker([48.090618, 24.595669]).addTo(mymap);

mountainMenchul.bindPopup(`<h1>Менчул (гора)</h1>
                           <h2>Menchul mountain</h2>
                           <img class="popup-image" src="images/chornohora/menchul-mountain.jpg" alt="Menchul mountain">
                           <p>Висота - 1998 м</p>
                           <p>Altitude - 1998 m</p>`);

// Brebeneschool mountain
const mountainBrebeneschool = L.marker([48.097748, 24.580262]).addTo(mymap);

mountainBrebeneschool.bindPopup(`<h1>Бребенескул (гора)</h1>
                                 <h2>Brebeneschool mountain</h2>
                                 <img class="popup-image" src="images/chornohora/brebeneskul-mountain.jpg" alt="Brebeneskul mountain">
                                 <p>Висота - 2035 м</p>
                                 <p>Altitude - 2035 m</p>`);

// Brebenschool lake
const lakeBrebenschool = L.marker([48.101821, 24.562517]).addTo(mymap);

lakeBrebenschool.bindPopup(`<h1>Бребенескул (озеро)</h1>
                            <h2>Brebenschool lake</h2>
                            <img class="popup-image" src="images/chornohora/brebeneschool-lake.jpg" alt="Brebeneschool lake">
                            <p>Висота - 1801 м</p>
                            <p>Altitude - 1801 m</p>`);

// Gutyn Tomnatyk mountain
const mountainGutynTomnatyk = L.marker([48.099432, 24.556664]).addTo(mymap);

mountainGutynTomnatyk.bindPopup(`<h1>Гутин Томнатик (гора)</h1>
                                 <h2>Gutyn Tomnatyk mountain</h2>
                                 <img class="popup-image" src="images/chornohora/gutin-tomnatyk-mountain.jpg" alt="Gutin Tomnatyk mountain">
                                 <p>Висота - 2016 м</p>
                                 <p>Altitude - 2016 m</p>`);

// Rebra mountain
const mountainRebra = L.marker([48.111475, 24.558713]).addTo(mymap);

mountainRebra.bindPopup(`<h1>Ребра (гора)</h1>
                         <h2>Rebra mountain</h2>
                         <img class="popup-image" src="images/chornohora/rebra-mountain.jpg" alt="Rebra mountain">
                         <p>Висота - 2001,1 м</p>
                         <p>Altitude - 2001,1 m</p>`);

// Nesamovyite lake
const lakeNesamovyite = L.marker([48.122724, 24.539466]).addTo(mymap);

lakeNesamovyite.bindPopup(`<h1>Несамовите (озеро)</h1>
                           <h2>Nesamovyite lake</h2>
                           <img class="popup-image" src="images/chornohora/nesamovyte-lake.jpg" alt="Nesamovyte lake">
                           <p>Висота - 1750 м</p>
                           <p>Altitude - 1750 m</p>`);

// Turkul mountain
const mountainTurkul = L.marker([48.124278, 24.530228]).addTo(mymap);

mountainTurkul.bindPopup(`<h1>Туркул (гора)</h1>
                          <h2>Turkul mountain</h2>
                          <img class="popup-image" src="images/chornohora/turkul-mountain.jpg" alt="Turkul mountain">
                          <p>Висота - 1933,2 м</p>
                          <p>Altitude - 1933,2 m</p>`);

// Dantsyzh mountain
const mountainDantsyzh = L.marker([48.135106, 24.531285]).addTo(mymap);

mountainDantsyzh.bindPopup(`<h1>Данціж (гора)</h1>
                            <h2>Dantsyzh mountain</h2>
                            <img class="popup-image" src="images/chornohora/dantsyzh-mountain.jpg" alt="Dantsyzh mountain">
                            <p>Висота - 1850 м</p>
                            <p>Altitude - 1850 m</p>`);

// Pozhyzhevska mountain
const mountainPozhyzhevska = L.marker([48.144316, 24.523614]).addTo(mymap);

mountainPozhyzhevska.bindPopup(`<h1>Пожижевська (гора)</h1>
                                <h2>Pozhyzhevska mountain</h2>
                                <img class="popup-image" src="images/chornohora/pozyzewska-mountain.jpg" alt="Pozyzewska mountain">
                                <p>Висота - 1822 м</p>
                                <p>Altitude - 1822 m</p>`);

// Breschool mountain
const mountainBreschool = L.marker([48.150362, 24.511684]).addTo(mymap);

mountainBreschool.bindPopup(`<h1>Брескул (гора)</h1>
                             <h2>Breschool mountain</h2>
                             <img class="popup-image" src="images/chornohora/breskul-mountain.jpg" alt="Breskul mountain">
                             <p>Висота - 1911 м</p>
                             <p>Altitude - 1911 m</p>`);

// Hoverla mountain
const mountainHoverla = L.marker([48.160221, 24.49993]).addTo(mymap);

mountainHoverla.bindPopup(`<h1>Говерла (гора)</h1>
                           <h2>Hoverla mountain</h2>
                           <img class="popup-image" src="images/chornohora/hoverla-mountain.jpg" alt="Hoverla mountain">
                           <p>Висота - 2061 м</p>
                           <p>Altitude - 2061 m</p>`);

// Source of Prut river
const sourceOfPrutRiver = L.marker([48.154578, 24.508835]).addTo(mymap);

sourceOfPrutRiver.bindPopup(`<h1>Витік ріки Прут</h1>
                             <h2>Source of Prut River</h2>
                             <img class="popup-image" src="images/chornohora/source-of-prut-river.jpg" alt="Source of Prut river">`);
                          
// Prut waterfall
const waterfallPrut = L.marker([48.159938, 24.517027]).addTo(mymap);

waterfallPrut.bindPopup(`<h1>Прутський водоспад</h1>
                         <h2>Prut waterfall</h2>
                         <img class="popup-image" src="images/chornohora/prut-waterfall.jpg" alt="Prut waterfall">`);

// Zaroslyak base
const baseZaroslyak = L.marker([48.164253, 24.535882]).addTo(mymap);

baseZaroslyak.bindPopup(`<h1>База «Заросляк»</h1>
                         <h2>Zaroslyak base</h2>
                         <img class="popup-image" src="images/chornohora/zarosliak-base.jpg" alt="Zarosliak base">`);
