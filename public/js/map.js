var greenIcon = L.icon({
	iconUrl: 'public/Blue2.png',

	iconSize:     [60, 60], // size of the icon
	iconAnchor:   [0, 72], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


var blueIcon = L.icon({
	iconUrl: 'public/green3.png',

	iconSize:     [90, 90], // size of the icon
	iconAnchor:   [-12, 82], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
                

var blueclearIcon = L.icon({
	iconUrl: 'public/Blue2.png',

	iconSize:     [600, 600], // size of the icon
	iconAnchor:   [300, 300], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


function onClick(e) {
    //console.log(this.options.win_url);
    $('.drawer').drawer('toggle');
}


window.markerLayers={};

var map = L.map('map').setView([51.505, -0.09], 4);
                                          
map.options.maxZoom=7
map.options.minZoom=4
              
             

//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a>href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a //href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 10,
//    id: 'rmiddlehouse.ciehb2ddu00a0shm3hqgl5mte',
//    accessToken: 'pk.eyJ1Ijoicm1pZGRsZWhvdXNlIiwiYSI6ImNpZWhiMmRvazAwYWxzdmtnNGl1OGhtcjQifQ.BI0NDrCeXTBA8N4wQ07bvw'
//}).addTo(map);

L.graticule({ interval: 1 }).addTo(map);



 var v = new L.marker([51.203156, -0.443342], {icon: blueIcon})
.bindLabel('Styles', { noHide: true }).on('click', onClick);       
 var w = new L.marker([50.403156, -0.443342], {icon: greenIcon})
.bindLabel('Boom-Chick', { noHide: true }).on('click', onClick);
 var x = new L.marker([51.203156, -1.443342], {icon: greenIcon})
.bindLabel('Blues', { noHide: true }).on('click', onClick);
 var y = new L.marker([52.003856, -0.308940], {icon: greenIcon}) 
.bindLabel('Bo Diddley', { noHide: true }).on('click', onClick);   
 var z = new L.marker([51.206502, 0.805734], {icon: greenIcon})
.bindLabel('Modern Rock', { noHide: true }).on('click', onClick);     


                              
 var a = new L.marker([51.852556, 5.384597], {icon: blueIcon})
.bindLabel('Chords', { noHide: true }).on('click', onClick);    
 var e = new L.marker([51.352556, 6.284597], {icon: greenIcon})
.bindLabel('C', { noHide: true }).on('click', onClick);


 var b = new L.marker([52.352556, 4.784597], {icon: greenIcon}) 
.bindLabel('A', { noHide: true }).on('click', onClick);   
 var c = new L.marker([51.752556, 4.314597], {icon: greenIcon})
.bindLabel('G', { noHide: true }).on('click', onClick);    
 var d = new L.marker([52.002556, 6.784597], {icon: greenIcon})
.bindLabel('D', { noHide: true }).on('click', onClick);   
 var f = new L.marker([51.252556, 4.884597], {icon: greenIcon})
.bindLabel('E', { noHide: true }).on('click', onClick);    
 var g = new L.marker([52.452556, 6.284597], {icon: greenIcon})
.bindLabel('F', { noHide: true }).on('click', onClick);

                    
   var ki = new L.marker([-27.257553, -100.691666], {icon: blueclearIcon,title: "Hey Jude"})
.bindLabel('Hey Jude', { noHide: true}).on('click', onClick);





var xs = L.layerGroup([v,w,x,y,z,a,b,c,d,e,f,g]);  
var xt = L.layerGroup([ki]);         
                                                       
map.addControl( new L.Control.Search({layer: xt}) );   
L.control.defaultExtent()
  .addTo(map); 

var markers = new L.MarkerClusterGroup({
    iconCreateFunction: function(cluster) {   
	var childCount = cluster.getChildCount();
	if (childCount == 5) {
		c = 'Strumming';
	} else if (childCount == 7) {
		c = 'Fingering';
	} else {
		c = 'Guitar';
	}
        return new L.DivIcon({ html: '<div><span>'+ c +'</span></div>', className: 'marker-cluster marker-cluster-large', iconSize: new L.Point(100, 100)});
    }
});
markers.addLayer(xs);
//map.addLayer(markers);         
var markerswrapper= L.layerGroup([markers])                           


var supermarkers = new L.MarkerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({ html: '<div><span>yummiest</span></div>', className: 'marker-cluster marker-cluster-large',iconSize: new L.Point(100, 100)});
    }
});
        
supermarkers.addLayer(markerswrapper);
map.addLayer(supermarkers);         


//var a = new L.marker([51.5025, -0.1], {icon: blueIcon})
//	.bindLabel('Guitar', { noHide: true });

//var as = L.layerGroup([a]);

//map.addLayer(as);

window.theCities=xs;
//window.theGuitar=as;
