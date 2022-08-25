var mymap = L.map('map').setView([48.1515066, 17.0734882], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGtvdmFjaWthMSIsImEiOiJja3ZqaWFueDkwMXl5MzFtazh5bW5ja2tyIn0.7x-3711CFlqWcEbQEQ667w'

}).addTo(mymap);

var blackIcon = L.icon({
    iconUrl: 'img/Black_marker.png',
    iconSize:     [42, 42],
    iconAnchor:   [21, 42],
    popupAnchor:  [-3, -76]
});
var redIcon = L.icon({
    iconUrl: 'img/Red_marker.png',
    iconSize:     [42, 42],
    iconAnchor:   [21, 42],
    popupAnchor:  [-3, -76]
});

var blueIcon = L.icon({
    iconUrl: 'img/Blue_marker.png',
    iconSize:     [42, 42],
    iconAnchor:   [21, 42],
    popupAnchor:  [-3, -76]
});


var bloky = [{
    "type": "Feature",
    "properties": {
        "party": "A",
        "amenity":"Blok A",
        "popupContent":"Inštitút komunikácie a aplikovanej lingvistiky,"+"<br>"+
                        "Ústav jadrového a fytikálneho inžinierstva "


    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07255, 48.15196],
            [17.07387, 48.15196],
            [17.07387, 48.15182],
            [17.07255, 48.15182],
            [17.07255, 48.15196]
        ]]
    }
},{
    "type": "Feature",
    "properties": {
        "party": "B",
        "amenity":"Blok B",
        "popupContent":"Ústav elektrotechniky,"+"<br>"+
                        "Ústav multimediálnych informačných a komunikačnýych technológií"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07301, 48.15246],
            [17.07434, 48.15246],
            [17.07435, 48.15232],
            [17.07301, 48.15233],
            [17.07301, 48.15246]
        ]]
    }
},{
    "type": "Feature",
    "properties": {
        "party": "C",
        "amenity":"Blok C",
        "popupContent":"Ústav elektroenergetiky a aplikvoanej elektrotechniky,"+"<br>"+
                        "Ústav informatiky a matematiky"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072828, 48.152971],
            [17.073889, 48.152968],
            [17.073889, 48.152828],
            [17.072827, 48.152832],
            [17.072828, 48.152971]
        ]]
    }
},{
    "type": "Feature",
    "properties": {
        "party": "D",
        "amenity":"Blok D",
        "popupContent":"Ústav automobilovej mechatroniky,"+"<br>"+
                        "Ústav robotiky a kybernetiky"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073214, 48.153472],
            [17.074382, 48.153473],
            [17.074383, 48.153328],
            [17.073214, 48.153334],
            [17.073214, 48.153472]
        ]]
    }
},{
    "type": "Feature",
    "properties": {
        "party": "E",
        "amenity":"Blok E",
        "popupContent":"Ústav elektrotechniky a fotoniky"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072854, 48.153982],
            [17.073908, 48.153977],
            [17.073908, 48.153834],
            [17.072846, 48.153834],
            [17.072854, 48.153982]
        ]]
    }
}
];

L.geoJSON(bloky, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h2>'+feature.properties.amenity+'</h2><p>'+feature.properties.popupContent+'</p>');

    }
}).addTo(mymap);

var zastavky={
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "party": "skola",
                "nazov":"FEI STU",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [17.07333,48.15177]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"ZOO",
                "smer":"Hlavná stanica, Záhorská Bystrica, Lamač, Volkswagen VW2, Jána Jonáša VW1",
                "linky": "30, 32, 37, 92, 192, N29",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [17.07692,48.15404]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"ZOO",
                "smer":"Dlhé diely, Most SNP, Depo Petržalka",
                "linky": "30, 32, 37, 92, 192, N29",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [17.07578,48.15464]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"ZOO",
                "smer":"Blumentál, Súhvezná",
                "linky": "39, 39, N31",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [17.075121,48.1541]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"ZOO",
                "smer":"Cintorín slávičie",
                "linky": "39, 39, N31",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [ 17.07456, 48.15459]
            }
        },
        {

            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"Botanická záhrada",
                "smer":"Dlhé diely, Opletalova VW5",
                "linky": "29, 32, N29, N33, N34",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [17.07203,48.14832 ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "bus",
                "nazov":"Botanická záhrada",
                "smer":"Hlavná stanica, Malá scéna",
                "linky": "29, 32, N29, N33, N34",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [ 17.0723,48.14794]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "elektricka",
                "nazov":"Botanická záhrada",
                "smer":"Astronomická, Mariánska",
                "linky": "4, 9",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [ 17.07246,48.14814]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "party": "elektricka",
                "nazov":"Botanická záhrada",
                "smer":"Pri kríži, Kútiky",
                "linky": "4, 9",

            },

            "geometry": {
                "type": "Point",
                "coordinates": [ 17.07173,48.14809]
            }
        }
    ]
};
L.geoJson(zastavky, {
    pointToLayer: function (feature, latlng) {
        if(feature.properties.party==="bus"){
            return L.marker(latlng, {icon: blueIcon});
        }
        if(feature.properties.party==="elektricka"){
            return L.marker(latlng, {icon: redIcon});
        }
        if(feature.properties.party==="skola"){
            return L.marker(latlng, {icon: blackIcon});
        }

    }, onEachFeature:function (feature, layer) {
        if(feature.properties.party==="skola"){
            layer.bindPopup('<h2>'+feature.properties.nazov+'</h2>');
        }else{
            layer.bindPopup('<h2>'+feature.properties.nazov+'</h2><p>'+feature.properties.smer+'</p><p>'+feature.properties.linky+'</p>');
        }

    }

}).addTo(mymap);

L.Routing.control({
    waypoints: [
        L.latLng("Start"),
        L.latLng(48.1517, 17.07251)

    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(mymap);

L.control.fullscreen({
    position: 'topleft',
    title: 'Show me the fullscreen !',
    titleCancel: 'Exit fullscreen mode',
    content: null,
    forceSeparateButton: true,
    forcePseudoFullscreen: true,
    fullscreenElement: false
}).addTo(mymap);
