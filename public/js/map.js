var greenIcon = L.icon({
	iconUrl: 'public/yum.png',

	iconSize:     [100, 100], // size of the icon
	iconAnchor:   [-5, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [50, 50] // point from which the popup should open relative to the iconAnchor
});


var blueIcon = L.icon({
	iconUrl: 'public/yum.png',

	iconSize:     [200, 200], // size of the icon
	iconAnchor:   [75, 100], // point of the icon which will correspond to marker's location
	popupAnchor:  [50, 50] // point from which the popup should open relative to the iconAnchor
});

window.markerLayers={};

function onClick(e) {
	//console.log(this.options.win_url);
	window.open("http://google.com");
}


function onMapClick(e) {
	map = window.theMap;
	//    mLayers = window.markerLayers;
	zoom = map.getZoom();

	//   if (_.isUndefined(mLayers[zoom])) {
	//        mLayers[zoom]=L.layerGroup();
	//   }
	//   marker = L.marker(e.latlng);
	//   mLayers[zoom].addLayer(marker);
}

function onZoomEnd(e) {
	map = window.theMap;
	//    mLayers = window.markerLayers;
	zoom = map.getZoom();
	if (zoom==7){
		console.log(zoom);
		map.addLayer(window.theCities);
		map.removeLayer(window.theGuitar);
	}
	//    if (! _.isUndefined(mLayers[zoom])){
	//        map.addLayer(mLayers[zoom]);
	//    }
}

function onZoomStart(e){
	map = window.theMap;
	//    mLayers = window.markerLayers;
	zoom = map.getZoom();
	if (zoom==7){
		console.log(zoom);
		map.removeLayer(window.theCities);
		map.addLayer(window.theGuitar);
	}
}

var map = L.map('map').setView([51.505, -0.09], 6);

//map.on('draw:created', function (e) {
//	L.TileLayer.boundaryCanvas(osmUrl, {
//		boundary: e.layer.toGeoJSON(),
//		attribution: osmAttribution
//	}).addTo(map);
//});

L.graticule({ interval: 1 }).addTo(map);

map.on('click', onMapClick);
map.on('zoomend', onZoomEnd);
map.on('zoomstart',onZoomStart);

window.theMap = map;


 var x = new L.marker([51.003156, -1.643342], {icon: greenIcon})
.bindLabel('strumming', { noHide: true });
 var y = new L.marker([52.103856, -0.308940], {icon: greenIcon}) 
.bindLabel('fingering', { noHide: true });   
 var z = new L.marker([51.206502, 1.335734], {icon: greenIcon})
.bindLabel('ear training', { noHide: true }).on('mouseover', onClick);

var xs = L.layerGroup([x,y,z]);

map.addLayer(xs);
map.removeLayer(xs);

var a = new L.marker([51.5025, -0.1], {icon: blueIcon})
	.bindLabel('Guitar', { noHide: true });

var as = L.layerGroup([a]);

map.addLayer(as);

window.theCities=xs;
window.theGuitar=as;
