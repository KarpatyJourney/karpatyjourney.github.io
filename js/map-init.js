// Create layers for the map
const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
});

const openTopoMap = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap (CC-BY-SA)</a>',
  maxZoom: 17,
});

// Init map
const mymap = L.map('mapid', {
  center: [48.153719, 24.822922],
  zoom: 11,
  layers: [openStreetMap, openTopoMap],
});

const baseMaps = {
  'Open Street Map': openStreetMap,
  'Open Topo Map': openTopoMap,
};

// Add control switcher
L.control.layers(baseMaps).addTo(mymap);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//   maxZoom: 18,
// }).addTo(mymap);

// Add Open topomap layer
// L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//   attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap (CC-BY-SA)</a>',
//   maxZoom: 17,
// }).addTo(mymap);

const vizhenkaTripArea = L.polygon([
  [48.240795, 25.176973],
  [48.238209, 25.178819],
  [48.234421, 25.178561],
  [48.22786, 25.176651],
  [48.222643, 25.174892],
  [48.214064, 25.182209],
  [48.209517, 25.181179],
  [48.201037, 25.166266],
  [48.193814, 25.15764],
  [48.178764, 25.158112],
  [48.171252, 25.168626],
  [48.155121, 25.171309],
  [48.144041, 25.175471],
  [48.143611, 25.159593],
  [48.155751, 25.154014],
  [48.163939, 25.138435],
  [48.167717, 25.140023],
  [48.177762, 25.127449],
  [48.185374, 25.137234],
  [48.196331, 25.13968],
  [48.204798, 25.144787],
  [48.214779, 25.130324],
  [48.223672, 25.121956],
  [48.241453, 25.138135],
  [48.244168, 25.143585],
  [48.240795, 25.176973],
], {
  color: '#92AD94',
  fillColor: '#555344',
  fillOpacity: 0.1,
}).addTo(mymap);

// Rest by Marichka
const restByMarichka = L.marker([48.2071543,25.1704945]).addTo(mymap);

restByMarichka.bindPopup(`<h1>Відпочинок у Марічки</h1>
                          <h2>Rest by Marichka</h2>
                          <img class="popup-image" src="images/rest-of-marichka-1.jpeg" alt="Rest of Marichka">
                          <p>Початок та завершення маршруту</p>`);

// Nymchych pass add marker
const passNymchych = L.marker([48.18981, 25.15691]).addTo(mymap);

passNymchych.bindPopup(`<h1>Перевал Німчич</h1>
                        <h2>Nymchych pass</h2>
                        <img class="popup-image" src="images/nymchych-pass.jpg" alt="Nymchych pass">`);

// Protyate stone add marker
const protyateStone = L.marker([48.16372, 25.16431]).addTo(mymap);

protyateStone.bindPopup(`<h1>Протяте каміння</h1>
                         <h2>Protyate Stones</h2>
                         <img class="popup-image" src="images/protyate-kaminnya.jpg" alt="Protyate kaminnya">`);

// Eye of Falcon add marker
const eyeOfFalcon = L.marker([48.165391, 25.160376]).addTo(mymap);

eyeOfFalcon.bindPopup(`<h1>Соколине око</h1>
                       <h2>Eye of Falcon rock</h2>
                       <img class="popup-image" src="images/falcon-eye.jpg" alt="Eye of Falcon rock">`);

// Vyivtshavovskaya mountain add marker
const vyivtshavovskayaMountain = L.marker([48.14842, 25.16173]).addTo(mymap);

vyivtshavovskayaMountain.bindPopup(`<h1>Гора Вивчавівська</h1>
                                    <h2>Vyivtshavovskaya mountain</h2>
                                    <p>Висота - 965,6 метрів над рівнем моря</p>`);

// Upper Guk waterfall add marker
const waterfallUpperGuk = L.marker([48.161033, 25.155323]).addTo(mymap);

waterfallUpperGuk.bindPopup(`<h1>Водоспад Верхній Гук</h1>
                             <h2>Upper Guk waterfall</h2>
                             <img class="popup-image" src="images/upper-guk-waterfall.jpg" alt="Upper Guk waterfall">`);

// Great Guk waterfall add marker
const waterfallGreatGuk = L.marker([48.162865, 25.149529]).addTo(mymap);

waterfallGreatGuk.bindPopup(`<h1>Водоспад Великий Гук</h1>
                             <h2>Great Guk waterfall</h2>
                             <img class="popup-image" src="images/great-guk-waterfall.jpg" alt="Great Guk waterfall">`);

// Middle Guk waterfall add marker
const waterfallMiddleGuk = L.marker([48.164926, 25.144647]).addTo(mymap);

waterfallMiddleGuk.bindPopup(`<h1>Водоспад Середній Гук</h1>
                              <h2>Middle Guk waterfall</h2>
                              <img class="popup-image" src="images/middle-guk-waterfall.jpg" alt="Middle Guk waterfall">`);

// Gates waterfall add marker
const waterfallGates = L.marker([48.16674, 25.142931]).addTo(mymap);

waterfallGates.bindPopup(`<h1>Водоспад Ворота</h1>
                          <h2>Gates waterfall</h2>
                          <img class="popup-image" src="images/gates-waterfall.jpg" alt="Gates waterfall">`);

// Lower Guk waterfall add marker
const waterfallLowerGuk = L.marker([48.171681, 25.137116]).addTo(mymap);

waterfallLowerGuk.bindPopup(`<h1>Водоспад Нижній Гук</h1>
                             <h2>Lower Guk waterfall</h2>
                             <img class="popup-image" src="images/lower-guk-waterfall.jpg" alt="Lower guk waterfall">`);

// Owl waterfall add marker
const waterfallOwl =L.marker([48.174979, 25.131156]).addTo(mymap);

waterfallOwl.bindPopup(`<h1>Водоспад Сич</h1>
                        <h2>Owl waterfall</h2>
                        <img class="popup-image" src="images/owl-waterfall.png" alt="Owl waterfall">`);

// Kovber waterfall add marker
const waterfallKovber = L.marker([48.174894, 25.130909]).addTo(mymap);

waterfallKovber.bindPopup(`<h1>Водоспад Ковбер</h1>
                           <h2>Kovber waterfall</h2>
                           <img class="popup-image" src="images/kovber-waterfall.png" alt="Kovber waterfall">`);

// Cave of Dovbush add marker
const caveOfDovbush = L.marker([48.216389, 25.133889]).addTo(mymap);

caveOfDovbush.bindPopup(`<h1>Печера Довбуша</h1>
                         <h2>Cave of Dovbush</h2>
                         <img class="popup-image" src="images/cave-of-dovbush.jpg" alt="Cave of Dovbush">`);

// temporary latitude longitude
var popup = L.popup();

function onMapClick(e) {
  popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
}

mymap.on('click', onMapClick);