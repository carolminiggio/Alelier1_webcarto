ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([855261.620468, 6248696.414951, 881995.276718, 6274292.468807]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var lyr_PlanIGNJ1_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN J+1',
                            popuplayertitle: 'Plan IGN J+1',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNJ1_2, 0]);
var format_Communes_3 = new ol.format.GeoJSON();
var features_Communes_3 = format_Communes_3.readFeatures(json_Communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_3.addFeatures(features_Communes_3);
var lyr_Communes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_3, 
                style: style_Communes_3,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_3.png" /> Communes'
            });
var format_Lignedebateauxbus_4 = new ol.format.GeoJSON();
var features_Lignedebateauxbus_4 = format_Lignedebateauxbus_4.readFeatures(json_Lignedebateauxbus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Lignedebateauxbus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignedebateauxbus_4.addFeatures(features_Lignedebateauxbus_4);
var lyr_Lignedebateauxbus_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignedebateauxbus_4, 
                style: style_Lignedebateauxbus_4,
                popuplayertitle: 'Ligne de bateaux bus',
                interactive: true,
    title: 'Ligne de bateaux bus<br />\
    <img src="styles/legend/Lignedebateauxbus_4_0.png" /> 1 - 50<br />\
    <img src="styles/legend/Lignedebateauxbus_4_1.png" /> 50 - 200<br />\
    <img src="styles/legend/Lignedebateauxbus_4_2.png" /> 200 - 600<br />' });
var format_Embarcaderepotentiel_5 = new ol.format.GeoJSON();
var features_Embarcaderepotentiel_5 = format_Embarcaderepotentiel_5.readFeatures(json_Embarcaderepotentiel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Embarcaderepotentiel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embarcaderepotentiel_5.addFeatures(features_Embarcaderepotentiel_5);
var lyr_Embarcaderepotentiel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embarcaderepotentiel_5, 
                style: style_Embarcaderepotentiel_5,
                popuplayertitle: 'Embarcadere potentiel',
                interactive: true,
    title: 'Embarcadere potentiel<br />\
    <img src="styles/legend/Embarcaderepotentiel_5_0.png" /> Bonne emprise foncière mais éloignement à plus de 100 m des commodités<br />\
    <img src="styles/legend/Embarcaderepotentiel_5_1.png" /> Emprise foncière supérieure à 1500 m² et bonne connexion aux commodités les plus proches<br />' });
var format_Portsexistants_6 = new ol.format.GeoJSON();
var features_Portsexistants_6 = format_Portsexistants_6.readFeatures(json_Portsexistants_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Portsexistants_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portsexistants_6.addFeatures(features_Portsexistants_6);
var lyr_Portsexistants_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portsexistants_6, 
                style: style_Portsexistants_6,
                popuplayertitle: 'Ports existants',
                interactive: true,
                title: '<img src="styles/legend/Portsexistants_6.png" /> Ports existants'
            });
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_Ortho20cm_1,lyr_PlanIGNJ1_2,],
                                fold: 'open',
                                title: 'Fonds de carte'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Ortho20cm_1.setVisible(true);lyr_PlanIGNJ1_2.setVisible(true);lyr_Communes_3.setVisible(true);lyr_Lignedebateauxbus_4.setVisible(true);lyr_Embarcaderepotentiel_5.setVisible(true);lyr_Portsexistants_6.setVisible(true);
var layersList = [group_Fondsdecarte,lyr_Communes_3,lyr_Lignedebateauxbus_4,lyr_Embarcaderepotentiel_5,lyr_Portsexistants_6];
lyr_Communes_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_Lignedebateauxbus_4.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'nb_passager_jour': 'nb_passager_jour', });
lyr_Embarcaderepotentiel_5.set('fieldAliases', {'fid': 'fid', 'hub_dist_routes': 'Distance de la route la plus proche (en m)', 'hub_dist_parking': 'Distance au parking le plus proche (en m)', 'surf': 'Surface (en m²)', 'potentiel': 'Potentiel', });
lyr_Portsexistants_6.set('fieldAliases', {'fid': 'fid', 'nom': 'Nom', });
lyr_Communes_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_Lignedebateauxbus_4.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'nb_passager_jour': 'Range', });
lyr_Embarcaderepotentiel_5.set('fieldImages', {'fid': 'Hidden', 'hub_dist_routes': 'Range', 'hub_dist_parking': 'Range', 'surf': 'Range', 'potentiel': 'TextEdit', });
lyr_Portsexistants_6.set('fieldImages', {'fid': 'Hidden', 'nom': 'TextEdit', });
lyr_Communes_3.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_Lignedebateauxbus_4.set('fieldLabels', {'nb_passager_jour': 'inline label - always visible', });
lyr_Embarcaderepotentiel_5.set('fieldLabels', {'hub_dist_routes': 'inline label - visible with data', 'hub_dist_parking': 'inline label - visible with data', 'surf': 'inline label - visible with data', 'potentiel': 'no label', });
lyr_Portsexistants_6.set('fieldLabels', {'nom': 'no label', });
lyr_Portsexistants_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});