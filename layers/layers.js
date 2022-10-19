var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 0.516000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_coord_GAM_grp1_qgis_1 = new ol.format.GeoJSON();
var features_coord_GAM_grp1_qgis_1 = format_coord_GAM_grp1_qgis_1.readFeatures(json_coord_GAM_grp1_qgis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_grp1_qgis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_grp1_qgis_1.addFeatures(features_coord_GAM_grp1_qgis_1);
var lyr_coord_GAM_grp1_qgis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_grp1_qgis_1, 
                style: style_coord_GAM_grp1_qgis_1,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_grp1_qgis_1.png" /> coord_GAM_grp1_qgis'
            });
var format_coord_GAM_grp2_qgis_2 = new ol.format.GeoJSON();
var features_coord_GAM_grp2_qgis_2 = format_coord_GAM_grp2_qgis_2.readFeatures(json_coord_GAM_grp2_qgis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_grp2_qgis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_grp2_qgis_2.addFeatures(features_coord_GAM_grp2_qgis_2);
var lyr_coord_GAM_grp2_qgis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_grp2_qgis_2, 
                style: style_coord_GAM_grp2_qgis_2,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_grp2_qgis_2.png" /> coord_GAM_grp2_qgis'
            });
var format_coord_GAM_grp3_qgis_3 = new ol.format.GeoJSON();
var features_coord_GAM_grp3_qgis_3 = format_coord_GAM_grp3_qgis_3.readFeatures(json_coord_GAM_grp3_qgis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_grp3_qgis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_grp3_qgis_3.addFeatures(features_coord_GAM_grp3_qgis_3);
var lyr_coord_GAM_grp3_qgis_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_grp3_qgis_3, 
                style: style_coord_GAM_grp3_qgis_3,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_grp3_qgis_3.png" /> coord_GAM_grp3_qgis'
            });
var format_coord_GAM_grp4_qgis_4 = new ol.format.GeoJSON();
var features_coord_GAM_grp4_qgis_4 = format_coord_GAM_grp4_qgis_4.readFeatures(json_coord_GAM_grp4_qgis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_grp4_qgis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_grp4_qgis_4.addFeatures(features_coord_GAM_grp4_qgis_4);
var lyr_coord_GAM_grp4_qgis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_grp4_qgis_4, 
                style: style_coord_GAM_grp4_qgis_4,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_grp4_qgis_4.png" /> coord_GAM_grp4_qgis'
            });
var format_coord_GAM_grp5_qgis_5 = new ol.format.GeoJSON();
var features_coord_GAM_grp5_qgis_5 = format_coord_GAM_grp5_qgis_5.readFeatures(json_coord_GAM_grp5_qgis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_grp5_qgis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_grp5_qgis_5.addFeatures(features_coord_GAM_grp5_qgis_5);
var lyr_coord_GAM_grp5_qgis_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_grp5_qgis_5, 
                style: style_coord_GAM_grp5_qgis_5,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_grp5_qgis_5.png" /> coord_GAM_grp5_qgis'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_coord_GAM_grp1_qgis_1.setVisible(true);lyr_coord_GAM_grp2_qgis_2.setVisible(true);lyr_coord_GAM_grp3_qgis_3.setVisible(true);lyr_coord_GAM_grp4_qgis_4.setVisible(true);lyr_coord_GAM_grp5_qgis_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_coord_GAM_grp1_qgis_1,lyr_coord_GAM_grp2_qgis_2,lyr_coord_GAM_grp3_qgis_3,lyr_coord_GAM_grp4_qgis_4,lyr_coord_GAM_grp5_qgis_5];
lyr_coord_GAM_grp1_qgis_1.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_grp2_qgis_2.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_grp3_qgis_3.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_grp4_qgis_4.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_grp5_qgis_5.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_grp1_qgis_1.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_grp2_qgis_2.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_grp3_qgis_3.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_grp4_qgis_4.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_grp5_qgis_5.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_grp1_qgis_1.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_coord_GAM_grp2_qgis_2.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_coord_GAM_grp3_qgis_3.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'header label', 'sid_coordy': 'no label', });
lyr_coord_GAM_grp4_qgis_4.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_coord_GAM_grp5_qgis_5.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_coord_GAM_grp5_qgis_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});