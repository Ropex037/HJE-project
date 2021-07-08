
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9wZXgiLCJhIjoiY2tpb2s1bmtkMGo2NzJzbWxxNW1udW1saSJ9._cNVUDLXfG4n-evuq48ZWw'; // replace this with your access token
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ropex/ckipzn2wt1sa517nqdcp3d8ck', // replace this with your style URL
    center: [21.337, 43.573],
    zoom: 17.47
});
// code from the next step will go here
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['home-jet-eng'] // replace this with the name of the layer
    });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .addTo(map);
});

