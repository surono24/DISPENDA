// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

$(window).resize(function() {
  sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

if ( !("ontouchstart" in window) ) {
  $(document).on("mouseover", ".feature-row", function(e) {
    highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));
  });
}

$(document).on("mouseout", ".feature-row", clearHighlight);

/* Button */
$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(bataskab.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#downloaddata-btn").click(function() {
  $("#downloaddataModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#pendapatan-btn").click(function() {
  $(".pendapatanModal").modal("show");
  return false;
});

// zoom to manado
$("#manaDo-btn").click(function() {
  map.fitBounds(ManaDo.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to Bitung
$("#bitung-btn").click(function() {
  map.fitBounds(biTung.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to Tomohon
$("#tomohon-btn").click(function() {
  map.fitBounds(TomoHon.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to Kotamobagu
$("#kotamobagu-btn").click(function() {
  map.fitBounds(KTG.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to bolmong
$("#bolmong-btn").click(function() {
  map.fitBounds(BMR.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to bolsel
$("#bolsel-btn").click(function() {
  map.fitBounds(BMS.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to bolsel
$("#bolmut-btn").click(function() {
  map.fitBounds(BMU.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to boltim
$("#boltim-btn").click(function() {
  map.fitBounds(BMT.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to minahasa
$("#minahasa-btn").click(function() {
  map.fitBounds(MinaHasa.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to minahasa selatan
$("#minsel-btn").click(function() {
  map.fitBounds(MinSel.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to minahasa tenggara
$("#mitra-btn").click(function() {
  map.fitBounds(MiTra.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to minahasa utara
$("#minut-btn").click(function() {
  map.fitBounds(MiNut.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to sangihe
$("#sangihe-btn").click(function() {
  map.fitBounds(SangiHe.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to talaud
$("#talaud-btn").click(function() {
  map.fitBounds(TalaUd.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

// zoom to sitaro
$("#sitaro-btn").click(function() {
  map.fitBounds(SiTaRo.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return true;
});

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}
var map = L.map('map').setView([2.3501926,124.6342042],7);
map.setMaxBounds(map.getBounds());

var basemap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
	   minZoom: 7,
     maxZoom: 20,
	   subdomains:['mt0','mt1','mt2','mt3'],
	   attribution: 'Google Streets | <a href="#" target="_blank">ObliqueGIS@2019</a>'
	});
var basemap1 = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	   minZoom: 7,
     maxZoom: 20,
	   subdomains:['mt0','mt1','mt2','mt3'],
	   attribution: 'Google Satellite | <a href="#" target="_blank">ObliqueGIS@2019</a>'
	}); 
var RupabumiIndonesia = L.tileLayer('https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/INDONESIA/MapServer/tile/{z}/{y}/{x}', {
  minZoom: 7,
  maxZoom: 20,
  attribution: 'RBI 2019 BIG | <a href="#" target="_blank">ObliqueGIS@2019</a>',
  bounds: [[8, 144], [-15, 90]]
});
  basemap1.addTo(map);

//layer Manado
var ManaDo = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/manado.geojson", function (data) {    //Lokasi data geojson
  ManaDo.addData(data);
});

//layer bitung
var biTung = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/bitung.geojson", function (data) {    //Lokasi data geojson
  biTung.addData(data);
});

//layer tomohon
var TomoHon = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/TomoHon.geojson", function (data) {    //Lokasi data geojson
  TomoHon.addData(data);
});

//layer Kotamobagu
var KTG = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/kotamobagu.geojson", function (data) {    //Lokasi data geojson
  KTG.addData(data);
});

//layer BMR
var BMR = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/bolmong.geojson", function (data) {    //Lokasi data geojson
  BMR.addData(data);
});

//layer BMS
var BMS = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/bolsel.geojson", function (data) {    //Lokasi data geojson
  BMS.addData(data);
});

//layer BMU
var BMU = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/bolmut.geojson", function (data) {    //Lokasi data geojson
  BMU.addData(data);
});

//layer BMT
var BMT = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/boltim.geojson", function (data) {    //Lokasi data geojson
  BMT.addData(data);
});

//layer Minahasa
var MinaHasa = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/minahasa.geojson", function (data) {    //Lokasi data geojson
  MinaHasa.addData(data);
});

//layer Minahasa Selatan
var MinSel = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/minsel.geojson", function (data) {    //Lokasi data geojson
  MinSel.addData(data);
});

//layer Minahasa Tenggara
var MiTra = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/mitra.geojson", function (data) {    //Lokasi data geojson
  MiTra.addData(data);
});

//layer Minahasa Utara
var MiNut = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/minut.geojson", function (data) {    //Lokasi data geojson
  MiNut.addData(data);
});

//layer kep Sangihe
var SangiHe = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/sangihe.geojson", function (data) {    //Lokasi data geojson
  SangiHe.addData(data);
});

//layer kep talaud
var TalaUd = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/talaud.geojson", function (data) {    //Lokasi data geojson
  TalaUd.addData(data);
});

//layer kep sitaro
var SiTaRo = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00afff",
      opacity: 1,
      weight: 1,
    };
  }
});
$.getJSON("data/sitaro.geojson", function (data) {    //Lokasi data geojson
  SiTaRo.addData(data);
});

var bataskab = L.geoJson(null, {
   style: function (feature) {
      return {
         color: "#ff0000",
         weight: 1,
         opacity: 1
      };
   }
});
$.getJSON("data/batas_kab.geojson", function (data) {
   bataskab.addData(data);
   map.addLayer(bataskab);
}); 

// kantor
    var kantor = L.geoJson(null, {
       pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
             icon: L.icon({
                iconUrl: "assets/img/samsat.png",
                iconSize: [25, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
             })
          });
       },

      onEachFeature: function (feature, layer) {
      if (feature.properties) {
        var content = "<table class='table table-striped table-bordered table-condensed'>" +
        "<img src='" + feature.properties.PIC + "' width='100'>" +"</td></tr>" +
        "<tr><th>Kabupaten/Kota</th><td>" + feature.properties.PELAKSANA + "</td></tr>" +
        "<tr><th>Jumlah Kendaraan</th><td>" + feature.properties.J_KEND +" Kendaraan"+"</td></tr>"+
        "<tr><th>Target Perubahan 2019</th><td>" +"Rp. "+ feature.properties.TARGET + "</td></tr>"+
        "<tr><th>Realisasi Januari s/d 11 Desember 2019</th><td>" +"Rp. "+ feature.properties.REAL_ + "</td></tr>"+
        "</table>";
        layer.on({
      click: function (e) {
          $("#feature-title").html(feature.properties.SAM);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
         }
        });
       }
    }
    });

$.getJSON("data/kab.geojson", function (data) {
 kantor.addData(data);
 map.addLayer(kantor);
}); 

//kantor bupati

    var BUPA = L.geoJson(null, {
       pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
             icon: L.icon({
                iconUrl: "assets/img/building.png",
                iconSize: [25, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
             })
          });
       },

      onEachFeature: function (feature, layer) {
      if (feature.properties) {
        var content = "<table class='table table-striped table-bordered table-condensed'>" +
        "<img src='" + feature.properties.PIC + "' width='100'>" +"</td></tr>" +
        "<tr><th>Kabupaten/Kota</th><td>" + feature.properties.PELAKSANA + "</td></tr>" +
        "<tr><th>Ibu Kota</th><td>" + feature.properties.TOPONIM + "</td></tr>"+
        "</table>";
        layer.on({
      click: function (e) {
          $("#feature-title").html(feature.properties.SAM);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
         }
        });
       }
    }
    });

$.getJSON("data/Bup.geojson", function (data) {
 BUPA.addData(data);
 map.addLayer(BUPA);
}); 


//skala//
L.control.betterscale({
  metric: true,
  imperial: false
}).addTo(map);

var baseMaps = {
	'Google Streets': basemap,
	'Google Satellite' : basemap1,
  'Rupabumi Indonesia' : RupabumiIndonesia
};
var Layers = {
      'Batas Kabupaten Kota': bataskab,
      'Kantor Bupati/Walikota':BUPA,
      'Kantor SAMSAT':kantor
      };
var layerControl = L.control.layers(baseMaps, Layers, {collapsed:false});
layerControl.addTo(map);

L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    var img = L.DomUtil.create('img');
    img.src = 'assets/img/sulut.png';
    img.style.width = '80px';
    return img;
  },
  onRemove: function(map) {
    // Nothing to do here
  }
});
L.control.watermark = function(opts) {
  return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'bottomright' }).addTo(map);
