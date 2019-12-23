// kantor
    var kantor = L.geoJson(null, {
       pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
             icon: L.icon({
                iconUrl: "assets/img/building.png",
                iconSize: [18, 18],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
             })
          });
       },

      onEachFeature: function (feature, layer) {
      if (feature.properties) {
        var content2 = "<table class='table table-striped table-bordered table-condensed'>" +
        "<tr><th>Kabupaten</th><td>" + feature.properties.PELAKSANA + "</td></tr>" +
        "<tr><th>Ibu Kota</th><td>" + feature.properties.TOPONIM + "</td></tr>" 
        "</table>";
        layer.on({
      click: function (e) {
          $("#feature-info").html(content2);
          $("#myModal2").modal("show");
         }
        });
       }
    }
    });

$.getJSON("data/Kab.geojson", function (data) {
 kantor.addData(data);
 map.addLayer(kantor);
}); 