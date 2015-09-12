window.markerLayers={};

function onMapClick(e) {
    map = window.theMap;
    mLayers = window.markerLayers;
    zoom = map.getZoom();

    if (_.isUndefined(mLayers[zoom])) {
        mLayers[zoom]=L.layerGroup();
    }
    marker = L.marker(e.latlng);
    mLayers[zoom].addLayer(marker);
}

function onZoomEnd(e) {
    map = window.theMap;
    mLayers = window.markerLayers;
    zoom = map.getZoom();

    if (! _.isUndefined(mLayers[zoom])){
        map.addLayer(mLayers[zoom]);
    }
}

function onZoomStart(e){
    map = window.theMap;
    mLayers = window.markerLayers;
    zoom = map.getZoom();

    if (! _.isUndefined(mLayers[zoom])){
        map.removeLayer(mLayers[zoom]); 
    }
}

function createMap() {
    var map = L.map('map', {
                    center: [44.973333, -93.266667],
                    zoom: 12,
                    maxBounds: [[44.86463, -93.42773],
                                [45.12587, -93.03497]]});
    window.theMap = map;


    // This is kind of busy, but OSM is cool and I like the map otherwise
    // http://{s}.tile.osm.org/{z}/{x}/{y}.png
    // This looks like it was printed dot-matrix style
    // http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png
    // This b/w tile set is pretty nice and should give context
    // https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png
    // XXX: If you don't have an internet connection, comment this block and reload
    L.tileLayer('http://a.tile.osm.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            }).addTo(map);

    map.on('click', onMapClick);
    map.on('zoomend', onZoomEnd);
    map.on('zoomstart',onZoomStart);
}

// Make sure that the DOM is available, then do map related stuff
$( document ).ready(createMap);

// vim: set et ts=4 sw=4
