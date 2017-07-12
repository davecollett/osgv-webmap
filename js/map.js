ol.proj.setProj4(proj4);
var projection3111 = ol.proj.get('EPSG:3111');
var vicExtent = [1786000.0, 1997264.499195665, 3953471.00160867, 3081000.0];


projection3111.setExtent(vicExtent);
console.log(vicExtent);
console.log(projection3111);

var blankResolutions = [2116.670900008467, 1058.3354500042335, 529.1677250021168, 264.5838625010584, 132.2919312505292, 66.14596563, 26.458386250105836,
 	13.229193125052918, 6.614596562526459, 2.645838625, 1.3229193125052918, 0.6614596562526459, 0.33072982812632296, 0.165364914, 0.105833545000423345,
 	 0.0529167725002116725, 0.02645838625010583625, 0.013229193125052918125
		];

 var tileGrid = new ol.tilegrid.TileGrid({
		extent: vicExtent,
        resolutions: blankResolutions,
        tileSize: [512, 512]
      });	

var zoom = 1, center = [145, -36.75];



var scn_pos_uncert_over_40cmLayer = new ol.layer.Vector({
				title: 'Over 40cm',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_40cm&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleRed,
						visible : false
					});					

var scn_pos_uncert_over_20cmLayer = new ol.layer.Vector({
				title: 'Over 20cm',
                projection: 'EPSG:3111',
				source: new ol.source.Vector({
							defaultProjection : 'EPSG:3111',
                            projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_20cm&outputFormat=application%2Fjson&srsname=EPSG:3111'
						,format : new ol.format.GeoJSON()
						})
						,style: styleOrange,
						visible : false
					});		

var scn_pos_uncert_over_10cmLayer = new ol.layer.Vector({
				title: 'Over 10cm',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_10cm&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleGreen,
						visible : false
					});		

var scn_pos_uncert_over_40cmHeatmapLayer = new ol.layer.Heatmap({
				title: 'Over 40cm Heatmap',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_40cm&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						opacity: 0.8,
						blur: 9,
						radius: 9,
						visible : false
					});							
	
var scn_pos_uncert_over_20cmHeatmapLayer = new ol.layer.Heatmap({
				title: 'Over 20cm Heatmap',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_20cm&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						opacity: 0.8,
						blur: 9,
						radius: 9,
						visible : false
					});							

var scn_pos_uncert_over_10cmHeatmapLayer = new ol.layer.Heatmap({
				title: 'Over 10cm Heatmap',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_scn_pos_uncert_over_10cm&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						opacity: 0.8,
						blur: 9,
						radius: 9,
						visible : false
					});		
					

var layerUncert = new ol.layer.Group({
                title: 'SCN Uncertainty',
                layers: [scn_pos_uncert_over_10cmHeatmapLayer,
                        scn_pos_uncert_over_20cmHeatmapLayer,
                        scn_pos_uncert_over_40cmHeatmapLayer, 
                        scn_pos_uncert_over_10cmLayer, 
                        scn_pos_uncert_over_20cmLayer,  
                        scn_pos_uncert_over_40cmLayer],
                name: 'SCN Uncertainty group'
            });		




  

var ahdAdjustedLayer = new ol.layer.Vector({
				title: 'SCN AHD Adjusted',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:ahd_levelled_in_adjustment&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: styleGreen,
						visible: false
					});	
					
var ahdProvidedLayer = new ol.layer.Vector({
				title: 'SCN AHD Not Adjusted',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:ahd_levelled_no_measurements&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: styleRed,
						//style: styleBluePt2,
						visible: false
					});	
					
var ahdNonSCNLayer = new ol.layer.Vector({
				title: 'Non SCN AHD',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:ahd_approx_height&outputFormat=application%2Fjson&srsname=EPSG:3111%' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: stylePurple1,
						//style: styleBluePt2,
						visible: false
					});											
					

var layerAHD = new ol.layer.Group({
                layers: [ahdNonSCNLayer , ahdProvidedLayer, ahdAdjustedLayer],
                title: 'AHD Sources'
            });		




  var scnBufferLayer = new ol.layer.Tile({
      title: '500m Buffer from occupiable SCN',
	maxResolution: 100,
    visible: false,
			source: new ol.source.TileWMS({
 			 url: 'http://10.192.240.155:8080/geoserver/geodetic/wms',
 			 params: {'LAYERS': 'geodetic:scn_connectable_500m_buffer_dissolved'},
			  serverType: 'geoserver',
			  crossOrigin: 'anonymous'
			})
			});

var cadastralProposedPropertyLayer = new ol.layer.Tile({
    title: 'Proposed Property',
  maxResolution: 15,
    visible: false,
  source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'PROPOSED_PROPERTY', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });

var cadastralBUALayer = new ol.layer.Tile({
  title: 'Built Up Area',
  maxResolution: 15,
    visible: false,
   source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'BUILT_UP_AREA', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });


var layerCadastral = new ol.layer.Group({
                layers: [cadastralBUALayer , cadastralProposedPropertyLayer, scnBufferLayer],
                title: 'Cadastral Requirements'
            });		


var corsAllLayer = new ol.layer.Vector({
				title: 'Status of OK in SMES',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_cors&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsBlue,
						visible : false
					});						
					
					var corsConnectedLayer = new ol.layer.Vector({
				title: 'Connected in ADJ (G)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_cors_connected&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsGreen,
						visible : false
					});			

					var corsNotConnectedLayer = new ol.layer.Vector({
				title: 'Not Connected in ADJ (No G)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_cors_not_connected&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsOrange,
						visible : false
					});			

					var corsSinexLayer = new ol.layer.Vector({
				title: 'In SINEX (Y)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_cors_sinex&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsPurple,
						visible : false
					});			

					var corsNotSinexLayer = new ol.layer.Vector({
				title: 'Not in SINEX (no Y)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_cors_not_sinex&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsRed,
						visible : false
					});		
					
var layerCors = new ol.layer.Group({
                layers: [corsAllLayer, corsNotSinexLayer, corsSinexLayer, corsNotConnectedLayer, corsConnectedLayer ],
                title: 'CORS'
            });		
            


var orphaned_third_order_fixedLayer = new ol.layer.Vector({
				title: 'Fixed in Adj (Not in SMES)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_fixed&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleFixed,
						visible: false
					});				

var orphaned_third_order_currentLayer = new ol.layer.Vector({
				title: 'Current',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleBlue4,
						visible: false
					});				

var orphaned_third_order_current_traverseLayer = new ol.layer.Vector({
				title: 'Traverse',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&CQL_FILTER=technique=%27TRAVERSE%27&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleTraverse,
						visible: false
					});			

var orphaned_third_order_current_gpsLayer = new ol.layer.Vector({
				title: 'GPS',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&CQL_FILTER=technique%20LIKE%20%27GPS%25%27&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleGPS,
						visible: false
					});			

var orphaned_third_order_current_cadastralLayer = new ol.layer.Vector({
				title: 'Cadastral',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&CQL_FILTER=technique=%27CADASTRAL%27&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCadastral,
						visible: false
					});		
					
var orphaned_third_order_current_TrigLayer = new ol.layer.Vector({
				title: 'Triangulation',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&CQL_FILTER=technique=%27TRIANGULATION%27&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleTrig,
						visible: false
					});			

var orphaned_third_order_current_OtherLayer = new ol.layer.Vector({
				title: 'Other',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:orphaned_third_order_current&outputFormat=application%2Fjson&CQL_FILTER=technique%20%3C%3E%20%27TRAVERSE%27%20AND%20technique%20%3C%3E%20%27CADASTRAL%27%20AND%20technique%20%3C%3E%20%27TRIANGULATION%27%20AND%20technique%20%20NOT%20LIKE%20%27GPS%25%27&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleOther,
						visible: false
					});											



var layerOrphaned = new ol.layer.Group({
                layers: [orphaned_third_order_fixedLayer,orphaned_third_order_current_OtherLayer , orphaned_third_order_current_traverseLayer,orphaned_third_order_current_TrigLayer , orphaned_third_order_current_cadastralLayer, orphaned_third_order_current_gpsLayer],
                title: 'Orphaned 3rd Order'
            });		




var isolated_gnss_adj_fixedLayer = new ol.layer.Vector({
				title: 'Fixed',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:isolated_gnss_adj_fixed&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
				style: styleGreen,
						visible : false
					});

var isolated_gnss_adj_made_worseLayer = new ol.layer.Vector({
				title: 'Newly Isolated',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:isolated_gnss_adj_made_worse&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
				style: styleRed,
						visible : false
					});
					
					
var isolated_gnss_adj_currentLayer = new ol.layer.Vector({
				title: 'Current Points',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:isolated_gnss_adj_current&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleOrange,
						visible : false
					});			

var isolated_gnss_adj_current_baselinesLayer = new ol.layer.Vector({
				title: 'Current Baselines',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_gnss_baselines_current_isolated&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleOrangeLine,
						visible : false
					});		
											

var isolated_gnss_adjHeatmapLayer = new ol.layer.Heatmap({
				title: 'Heatmap',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:isolated_gnss_adj_current&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						opacity: 0.8,
						blur: 30,
						visible : false
					});		
					
					
var layerIsolated = new ol.layer.Group({
                layers: [isolated_gnss_adjHeatmapLayer,
                        isolated_gnss_adj_fixedLayer,
                        isolated_gnss_adj_made_worseLayer, 
                        isolated_gnss_adj_current_baselinesLayer, 
                        isolated_gnss_adj_currentLayer
                        ],
                title: 'Isolated Baselines'
            });				


var creation_dates_2017Layer = new ol.layer.Vector({
				title: '2017',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:creation_dates_2017&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: stylePurple4
					});		


var creation_dates_2016Layer = new ol.layer.Vector({
				title: '2016',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:creation_dates_2016&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: stylePurple3,
						visible: false
					});		

var creation_dates_2015Layer = new ol.layer.Vector({
				title: '2015',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:creation_dates_2015&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: stylePurple2,
						visible: false
					});		

var creation_dates_2014Layer = new ol.layer.Vector({
				title: '2014',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:creation_dates_2014&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: stylePurple1,
						visible: false
					});												
		
var layerCreation = new ol.layer.Group({
                layers: [creation_dates_2014Layer, 
                        creation_dates_2015Layer, 
                        creation_dates_2016Layer, 
                        creation_dates_2017Layer],
                title: 'Creation Dates'
            });	



var hsmMarksLayer = new ol.layer.Vector({
				title: 'All HSM Marks',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_hsm_marks&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsOrange,
  		visible: false
					});		
					
var hsmMarksGnssLayer = new ol.layer.Vector({
				title: 'HSM Marks GNSSed',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_hsm_marks_gnss&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleCorsGreen,
                        visible: false
					});		
					
var layerHsm = new ol.layer.Group({
                layers: [ hsmMarksLayer, 
                    hsmMarksGnssLayer],
                title: 'HSM Marks'
            });	




var steps_to_gnss_0Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (0)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=0&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps0,
						visible : false
					});			
var steps_to_gnss_1Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (1)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=1&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps1,
						visible : false
					});			
var steps_to_gnss_2Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (2)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=2&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps2,
						visible : false
					});								
var steps_to_gnss_3Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (3)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=3&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps3,
						visible : false
					});			
var steps_to_gnss_4Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (4)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=4&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps4,
						visible : false
					});			
var steps_to_gnss_5Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (5)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=5&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps5,
						visible : false
					});			
var steps_to_gnss_6Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (6)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=6&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps6,
						visible : false
					});			
var steps_to_gnss_7Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (7)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=7&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps7,
						visible : false
					});			
var steps_to_gnss_8Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (8)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=8&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps8,
						visible : false
					});			
var steps_to_gnss_9Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (9)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=9&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps9,
						visible : false
					});			
var steps_to_gnss_10Layer = new ol.layer.Vector({
				title: 'Steps to GNSS (10)',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:steps_to_gnss&outputFormat=application%2Fjson&CQL_FILTER=steps=10&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleSteps10,
						visible : false
					});			
					

var layerSteps = new ol.layer.Group({
                layers: 
                [
                steps_to_gnss_10Layer,
                steps_to_gnss_9Layer,
                steps_to_gnss_8Layer,
                steps_to_gnss_7Layer,
                steps_to_gnss_6Layer,
                steps_to_gnss_5Layer,
                steps_to_gnss_4Layer,               
                steps_to_gnss_3Layer,
                steps_to_gnss_2Layer,
                steps_to_gnss_1Layer,
                steps_to_gnss_0Layer
                ],
                title: 'Steps to GNSS'
            });		



	var uncert_rounded_allLayer = new ol.layer.Vector({
				title: '0.00 in SMES',
				source: new ol.source.Vector({
							projection : 'EPSG:3111',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:uncert_rounded&outputFormat=application%2Fjson&srsname=EPSG:3111',
						format : new ol.format.GeoJSON()
						}),
						style: styleOrangeTriangle,
                        visible : false
					});			


var layerRoundingUncert = new ol.layer.Group({
                layers: [uncert_rounded_allLayer],
                name: 'Rounded Uncert Error',
                title: 'Rounded Uncertainty Error'
            });		         
            


var vw_msr_gnss_baselines_currentLayer = new ol.layer.Vector({
				title: 'Baselines in Current Adj',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_gnss_baselines_current&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: styleBluePt1,
						visible: false
					});	
					

var vw_msr_gnss_baselines_current_flaggedLayer = new ol.layer.Vector({
				title: 'Flagged Baselines in Current Adj',
				source: new ol.source.Vector({
						projection : 'EPSG:4283',
						url : function(extent) {
                                return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_gnss_baselines_current_flagged&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
                                 'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
				visible: false,
				style: function(feature, resolution){
							if ( Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) > 1.96 && Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) < 3) {
                                return [gnss2to3];
                            } else if ( Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) > 3 && Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) < 4) {
                                return [gnss3to4];
                            } else if ( Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) > 4 && Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) < 5) {
                                return [gnss4to5];
                            } else if ( Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) > 5 && Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) < 6) {
                                return [gnss5to6];
                             } else if  (Math.sqrt(Math.pow(feature.get('x_nstat'),2)+Math.pow(feature.get('y_nstat'),2) +Math.pow(feature.get('z_nstat'),2)) >6) {
                                return [gnss6up];
   					 }						
					}
					});		
							
var vw_msr_distance_currentLayer = new ol.layer.Vector({
				title: 'Distances in Current Adj',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_distance_current&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: styleGreenPt1,
						visible: false
					});						            
            
     
					

var vw_msr_distance_current_flaggedLayer = new ol.layer.Vector({
				title: 'Flagged Distances in Current Adj',
                 visible: false,
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_distance_current_flagged&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: function(feature, resolution){
										if ( Math.abs(feature.get('nstat')) > 1.96 && Math.abs(feature.get('nstat')) < 3) {
        return [dist2to3];
   					 } else if ( Math.abs(feature.get('nstat')) > 3 && Math.abs(feature.get('nstat')) < 4) {
        return [dist3to4];
   					 } else if ( Math.abs(feature.get('nstat')) > 4 && Math.abs(feature.get('nstat')) < 5) {
        return [dist4to5];
   					 } else if ( Math.abs(feature.get('nstat')) > 5 && Math.abs(feature.get('nstat')) < 6) {
        return [dist5to6];
   					 } else if  (Math.abs(feature.get('nstat')) > 6 ) {
        return [dist6up];
   					 }						
					}
					});	


var vw_msr_direction_currentLayer = new ol.layer.Vector({
				title: 'Directions in Current Adj',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_direction_current&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: stylePurplePt1,
						visible: false
					});						            

var vw_msr_direction_current_flaggedLayer = new ol.layer.Vector({
				title: 'Flagged Distances in Current Adj',
                 visible: false,
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : function(extent) {
          			return 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geodetic:vw_msr_direction_current_flagged&outputFormat=application%2Fjson&srsname=EPSG:3111&' +
            	  'bbox=' + extent.join(',') + ',EPSG:3111';  },
						format : new ol.format.GeoJSON(),
						strategy: ol.loadingstrategy.bbox
						}),
						style: function(feature, resolution){
							if ( Math.abs(feature.get('nstat')) > 1.96 && Math.abs(feature.get('nstat')) < 3) {
        return [dir2to3];
   					 } else if ( Math.abs(feature.get('nstat')) > 3 && Math.abs(feature.get('nstat')) < 4) {
        return [dir3to4];
   					 } else if ( Math.abs(feature.get('nstat')) > 4 && Math.abs(feature.get('nstat')) < 5) {
        return [dir4to5];
   					 } else if ( Math.abs(feature.get('nstat')) > 5 && Math.abs(feature.get('nstat')) < 6) {
        return [dir5to6];
   					 } else if  (Math.abs(feature.get('nstat')) > 6 ) {
        return [dir6up];
   					 }						
					}
					});	

					   
            
var layerMeasurements = new ol.layer.Group({
                title: 'Measurements in Adjustment',
                 maxResolution: 40,
                layers: [vw_msr_direction_currentLayer,
                        vw_msr_distance_currentLayer, 
                        vw_msr_gnss_baselines_currentLayer,
                        vw_msr_direction_current_flaggedLayer,
                        vw_msr_distance_current_flaggedLayer, 
                        vw_msr_gnss_baselines_current_flaggedLayer],
                name: 'Measurements Group'
            });		



var smes_scn_gda_wmsLayer = new ol.layer.Tile({
  title: 'SCN GDA',
  maxResolution: 20,
  projection : 'EPSG:3111',
  source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'SMES_SCN_GDA94', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });


var smes_scn_ahd_wmsLayer = new ol.layer.Tile({
  title: 'SCN AHD',
  maxResolution: 20,
  source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'SMES_SCN_AHD', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });
console.log(smes_scn_ahd_wmsLayer);


var smes_non_scn_gda_wmsLayer = new ol.layer.Tile({
    title: 'Non SCN GDA',
    maxResolution: 20,
    visible: false,
    source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'SMES_NON_SCN_GDA94', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });

var smes_defective_wmsLayer = new ol.layer.Tile({
     title: 'Defective',
     maxResolution: 20,
  visible: false,
  source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'SMES_DEFECTIVE', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });  


var smes_non_scn_ahd_wmsLayer = new ol.layer.Tile({
   title: 'Non SCN AHD',
  maxResolution: 20,
  visible: false,
  source: new ol.source.TileWMS(({
    url: 'http://maps.land.vic.gov.au/geolassi/wms',
    params: {'LAYERS': 'SMES_NON_SCN_AHD', 'TILED': true, 'VERSION': '1.3.0',
      'FORMAT': 'image/png8', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });
  
  
var searchSource = new ol.source.Vector({});
var searchLayer = new ol.layer.Vector({ source : searchSource});
  
var layerSmes = new ol.layer.Group({
        title:'Live SMES Layers',
        layers: [searchLayer, 
                smes_defective_wmsLayer, 
                smes_non_scn_ahd_wmsLayer, 
                smes_non_scn_gda_wmsLayer, 
                smes_scn_ahd_wmsLayer, 
                smes_scn_gda_wmsLayer],
         name: 'SMES WMS'
            });	



var MapscapeVicGrid_GrayScaleLayer = new ol.layer.Tile({
    title:'Mapscape Greyscale',
    type: 'base',
 extent: vicExtent,
  source: new ol.source.TileArcGISRest({
    url: 'http://mapshare.maps.vic.gov.au/pwms/arcgis/rest/services/Basemaps/Mapscape_VicGrid_Greyscale/MapServer/',
  	tileGrid: tileGrid,
  	projection: 'EPSG:3111',
  	params: {'TRANSPARENT': false}
    }),
  	visible: false
  });  


/*
var vicmapSatelliteLayer = new ol.layer.Tile({
    title:'Vicmap Satellite',
    extent: vicExtent,
    type: 'base',
    source: new ol.source.TileArcGISRest({
    url: 'http://mapshare.maps.vic.gov.au/pwms/arcgis/rest/services/Basemaps/ImageMosaic_VicGrid/MapServer',
  	tileGrid: tileGrid,
  	projection: 'EPSG:3111',
  	params: {'TRANSPARENT': false}
    }),
  	visible: false
  });    
*/  


var vicmapSatelliteLayer = new ol.layer.Tile({
   title: 'Vicmap Satellite',
  visible: false,
    type: 'base',
  source: new ol.source.TileWMS(({
    url: 'http://api.maps.vic.gov.au/geowebcache/service/wms',
    params: {'LAYERS': 'SATELLITE2', 'TILED': true, 'VERSION': '1.1.1',
      'FORMAT': 'image/png', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });



var vicmapCartoLayer = new ol.layer.Tile({
   title: 'Vicmap Carto',
  visible: true,
    type: 'base',
  source: new ol.source.TileWMS(({
    url: 'http://api.maps.vic.gov.au/geowebcache/service/wms',
    params: {'LAYERS': 'CARTOGRAPHICAL', 'TILED': true, 'VERSION': '1.1.1',
      'FORMAT': 'image/png', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });



/*var vicmapCartoLayer = new ol.layer.Tile({
    title:'Vicmap Carto',
    extent: vicExtent,
    type: 'base',
    source: new ol.source.TileArcGISRest({
    url: 'http://pwms-ags-00.aaa.depi.vic.gov.au/arcgis/rest/services/Basemaps/VicmapAPI_VicGrid/MapServer',
  	tileGrid: tileGrid,
  	projection: 'EPSG:3111',
  	params: {'TRANSPARENT': false}
    }),
  	visible: false
  });  */
  /*
var vicmapHybridLayer = new ol.layer.Tile({
   title: 'Vicmap Hybrid',
  visible: true,
    type: 'base',
  source: new ol.source.TileWMS(({
    url: 'http://api.maps.vic.gov.au/geowebcache/service/wms',
    params: {'LAYERS': 'SATELLITE2, HYBRID_CARTO', 'TILED': false, 'VERSION': '1.1.1',
      'FORMAT': 'image/png', 'WIDTH': 256, 'HEIGHT': 256, 'CRS': 'EPSG:3111'},
    serverType: 'geoserver',
  	tileGrid: tileGrid
    }))
  });*/
  

var vicmapHybridLayer = new ol.layer.Tile({
    title:'Vicmap Hybrid',
    extent: vicExtent,
    type: 'base',
    source: new ol.source.TileArcGISRest({
    url: 'http://mapshare.maps.vic.gov.au/pwms/arcgis/rest/services/Basemaps/ImageHybridMosaic_VicGrid/MapServer',
  	tileGrid: tileGrid,
  	projection: 'EPSG:3111',
  	params: {'TRANSPARENT': false}
    }),
  	visible: false
  });    

  
  

var thunderforest = new ol.layer.Tile({
    title: 'Thunderforest Landscape',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html:'&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    }),
  	visible: false,
    type: 'base'
	});

var Vicmaptopo_VicGridLayer = new ol.layer.Tile({
    title: 'Vicmap Topo',
 extent: vicExtent,
    type: 'base',
  source: new ol.source.TileArcGISRest({
    url: 'http://mapshare.maps.vic.gov.au/pwms/arcgis/rest/services/Basemaps/Vicmaptopo_VicGrid/MapServer',
  	tileGrid: tileGrid,
  	projection: 'EPSG:3111',
  	params: {'TRANSPARENT': false}
    }),
  	visible: false
  });  
  
 


var MapscapeVicGridLayer = new ol.layer.Tile({
    title: 'Mapscape Colour',
    extent: vicExtent,
    type: 'base',
    source: new ol.source.TileArcGISRest({
        url: 'http://mapshare.maps.vic.gov.au/pwms/arcgis/rest/services/Basemaps/Mapscape_VicGrid/MapServer',
        tileGrid: tileGrid,
        projection: 'EPSG:3111',
        params: {'TRANSPARENT': false}
    }),
  	visible: false
  });  



var vic_boundariesLayer = new ol.layer.Vector({
				//title: 'Victoria Boundaries',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://maps.land.vic.gov.au/geolassi/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=LASSI_WS:VICTORIA_LINE_SHP_SU5&outputFormat=application%2Fjson&SRSNAME=EPSG:3111',
						format : new ol.format.GeoJSON()
						})
					});	

/*
var vic_boundariesLayer = new ol.layer.Vector({
				//title: 'Victoria Boundaries',
				source: new ol.source.Vector({
							projection : 'EPSG:4283',
							url : 'http://10.192.240.155:8080/geoserver/geodetic/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geolassi-WFS:LASSI_WS_VICTORIA_LINE_SHP_SU5&outputFormat=application%2Fjson&SRSNAME=EPSG:3111',
						format : new ol.format.GeoJSON()
						})
					});		
*/
  
var layerVicmap = new ol.layer.Group({
                'title': 'Base Layers',
                layers: [   thunderforest, 
                            vicmapSatelliteLayer, 
                            vicmapHybridLayer, 
                            vicmapCartoLayer,   
                            Vicmaptopo_VicGridLayer, 
                            MapscapeVicGridLayer, 
                            MapscapeVicGrid_GrayScaleLayer],
                name: 'Vicmap WMS'
            });	





var view = new ol.View({
		projection:projection3111,
		resolutions:blankResolutions,
		center: ol.proj.fromLonLat(center, 'EPSG:3111'),
		zoom: zoom,
	  pixelRatio: 1
});

      var map = new ol.Map({
          controls: ol.control.defaults({}).extend([new ol.control.ScaleLine({ units: 'metric'}),
	    new ol.control.ZoomSlider()]),
        target: 'map',
        layers: [   layerVicmap, 
                    vic_boundariesLayer,
                    layerSmes  , 
                    layerMeasurements  ,
                    layerSteps,
                    layerRoundingUncert , 
                    layerHsm,
                    layerCreation,
                    layerIsolated,
                    layerOrphaned,
                    layerCors,
                    layerCadastral,
                    layerAHD,
                    layerUncert  
                ],
        view: view
      });

    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
    });
    map.addControl(layerSwitcher);



var interaction;
var interactionSelectPointerMove = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove
});

var interactionSelect = new ol.interaction.Select({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#FF2828'
        })
    })
});

var wmsSource = new ol.layer.Tile({
	maxResolution: 20,
			source: new ol.source.TileWMS({
 			 url: 'http://maps.land.vic.gov.au/geolassi/wms',
 			 params: {'LAYERS': 'IDENTIFY_SMES_DEFECTIVE,IDENTIFY_SMES_SCN_GDA94,IDENTIFY_SMES_NON_SCN_GDA94,IDENTIFY_SMES_NON_SCN_AHD,IDENTIFY_SMES_SCN_AHD'},
			  serverType: 'geoserver',
			  crossOrigin: 'anonymous'
			})
			});

/*var wmsSource = new ol.layer.Tile({
	maxResolution: 20,
			source: new ol.source.TileWMS({
 			 url: 'http://10.192.240.155:8080/geoserver/geodetic/wms',
 			 params: {'LAYERS': 'geodetic:IDENTIFY_SMES_DEFECTIVE,geodetic:IDENTIFY_SMES_SCN_GDA94,geodetic:IDENTIFY_SMES_NON_SCN_GDA94,geodetic:IDENTIFY_SMES_NON_SCN_AHD,geodetic:IDENTIFY_SMES_SCN_AHD'},
			  serverType: 'geoserver',
			  crossOrigin: 'anonymous'
			})
			});*/



searchText = document.getElementById("searchbox");
searchText.addEventListener("input", checkSearchNineFigure, false);

	
// -- Display information on singleclick --

// Create a popup overlay which will be used to display feature info
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

// Add an event handler for the map "singleclick" event
map.on('singleclick', function(evt) {

    // Hide existing popup and reset it's offset
    popup.hide();
    popup.setOffset([0, 0]);

    // Attempt to find a feature in one of the visible vector layers
    var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
    } , null, function(layer) {
  return layer != searchLayer;
      });

    if (feature) {
				//var coord2 = evt.coordinate;
        var coord = feature.getGeometry().getCoordinates();
        var printProps = feature.getProperties();
        
       var info =    '<table style="width:100%">';
                    // '<tr>'+'<td>'+"<b>Nine fig:</b> " +printProps.nine_fig+'</td>'+'</tr>';
                 if (printProps.nine_fig) {  info +=    '<tr>'+'<td>'+"<b>Nine Fig:</b> " +printProps.nine_fig+'</td>'+'</tr>' } ;     
                 if (printProps.nine_fig_from) {  info +=    '<tr>'+'<td>'+"<b>Nine Fig From:</b> " +printProps.nine_fig_from+'</td>'+'</tr>' } ;     
                 if (printProps.nine_fig_to) {  info +=    '<tr>'+'<td>'+"<b>Nine Fig To:</b> " +printProps.nine_fig_to+'</td>'+'</tr>' } ;     
                 if (printProps.pos_uncertainty) {  info +=    '<tr>'+'<td>'+"<b>Pos Uncert:</b> " +printProps.pos_uncertainty+'</td>'+'</tr>' } ; 
                 if (printProps.pu) {  info +=    '<tr>'+'<td>'+"<b>Pos Uncert:</b> " +printProps.pu+'</td>'+'</tr>' } ; 
                 if (printProps.v_uncertainty) {  info +=    '<tr>'+'<td>'+"<b>Vert Uncert:</b> " +printProps.v_uncertainty+'</td>'+'</tr>' } ;  
                 if (printProps.vu) {  info +=    '<tr>'+'<td>'+"<b>Vert Uncert:</b> " +printProps.vu+'</td>'+'</tr>' } ;  
                 if (printProps.adjustment) {  info +=    '<tr>'+'<td>'+"<b>Adj:</b> " +printProps.adjustment+'</td>'+'</tr>' } ;
                 if (printProps.adj) {  info +=    '<tr>'+'<td>'+"<b>Adj:</b> " +printProps.adj+'</td>'+'</tr>' } ;
                 if (printProps.date_edit) {  info +=    '<tr>'+'<td>'+"<b>Date Edited:</b> " +printProps.date_edit+'</td>'+'</tr>' } ; 
                 if (printProps.h_order) {  info +=    '<tr>'+'<td>'+"<b>H Order:</b> " +printProps.h_order+'</td>'+'</tr>' } ; 
                 if (printProps.technique) {  info +=    '<tr>'+'<td>'+"<b>Technique:</b> " +printProps.technique+'</td>'+'</tr>' } ; 
                 if (printProps.display_name) {  info +=    '<tr>'+'<td>'+"<b>Name:</b> " +printProps.display_name+'</td>'+'</tr>' } ; 
                 if (printProps.mark_name) {  info +=    '<tr>'+'<td>'+"<b>Name:</b> " +printProps.mark_name+'</td>'+'</tr>' } ; 
                 if (printProps.status) {  info +=    '<tr>'+'<td>'+"<b>Status:</b> " +printProps.status+'</td>'+'</tr>' } ; 
                 if (printProps.nstat) {  info +=    '<tr>'+'<td>'+"<b>nstat:</b> " +printProps.nstat+'</td>'+'</tr>' } ; 
                 if (printProps.x_nstat) {  info +=    '<tr>'+'<td>'+"<b>x_nstat:</b> " +printProps.x_nstat+'</td>'+'</tr>' } ; 
                 if (printProps.y_nstat) {  info +=    '<tr>'+'<td>'+"<b>y_nstat:</b> " +printProps.y_nstat+'</td>'+'</tr>' } ; 
                 if (printProps.z_nstat) {  info +=    '<tr>'+'<td>'+"<b>z_nstat:</b> " +printProps.z_nstat+'</td>'+'</tr>' } ; 
                 if (printProps.correction) {  info +=    '<tr>'+'<td>'+"<b>Correction:</b> " +printProps.correction+'</td>'+'</tr>' } ; 
                 if (printProps.x_corr) {  info +=    '<tr>'+'<td>'+"<b>x_corr:</b> " +printProps.x_corr+'</td>'+'</tr>' } ; 
                 if (printProps.y_corr) {  info +=    '<tr>'+'<td>'+"<b>y_corr:</b> " +printProps.y_corr+'</td>'+'</tr>' } ; 
                 if (printProps.z_corr) {  info +=    '<tr>'+'<td>'+"<b>z_corr:</b> " +printProps.z_corr+'</td>'+'</tr>' } ; 
                 if (printProps.adj_std_dev) {  info +=    '<tr>'+'<td>'+"<b>Adj Std Dev:</b> " +printProps.adj_std_dev+'</td>'+'</tr>' } ; 
                 if (printProps.adj_x_std_dev) {  info +=    '<tr>'+'<td>'+"<b>Adj X Std Dev:</b> " +printProps.adj_x_std_dev+'</td>'+'</tr>' } ; 
                 if (printProps.adj_y_std_dev) {  info +=    '<tr>'+'<td>'+"<b>Adj Y Std Dev:</b> " +printProps.adj_y_std_dev+'</td>'+'</tr>' } ; 
                 if (printProps.adj_z_std_dev) {  info +=    '<tr>'+'<td>'+"<b>Adj Z Std Dev:</b> " +printProps.adj_z_std_dev+'</td>'+'</tr>' } ; 
	               if (printProps.msr_id) {  info +=    '<tr>'+'<td>'+"<b>MSR ID:</b> " +printProps.msr_id+'</td>'+'</tr>' } ;     
	               if (printProps.mark_id_from) {  info +=    '<tr>'+'<td>'+"<b>Mark ID From:</b> " +printProps.mark_id_from+'</td>'+'</tr>' } ;     
	               if (printProps.mark_id_to) {  info +=    '<tr>'+'<td>'+"<b>Mark ID To:</b> " +printProps.mark_id_to+'</td>'+'</tr>' } ;                      
                 if (printProps.mark_id) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadSketches.do?MARK_ID=' +printProps.mark_id+ '>Sketch Plan</a>' +'</td>'+'</tr>' } ;
                 if (printProps.mark_id) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadReport.do?downloadType=PDF&MARK_ID=' +printProps.mark_id+ '>Mark Report</a>' +'</td>'+'</tr>' } ;                 
                 if (printProps.mark_id) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadReport.do?downloadType=KML&MARK_ID=' +printProps.mark_id+ '>KMZ (Google Earth)</a>' +'</td>'+'</tr>' } ;                 

          info +=  '</table>';
        
        // Offset the popup so it points at the middle of the marker not the tip
        popup.setOffset([0, -10]);
       // popup.show(coord, info);
        popup.show(evt.coordinate, info);
    } else {
 			if (
 		//	layerSmes.getVisible() == true 
 		//	AND 
 			map.getView().getResolution() < smes_non_scn_gda_wmsLayer.getMaxResolution()
 			){


        var url = wmsSource
                    .getSource()
                    .getGetFeatureInfoUrl(
                        evt.coordinate,
                        map.getView().getResolution(),
                        map.getView().getProjection(),
                        {
                            'INFO_FORMAT': 'application/json',
                         //   'propertyName': 'MARK_ID,DISPLAY_NAME'
                        }
                    );

    	
    	  reqwest({
            url: url,
             crossOrigin: true,
            type: 'json',
        }).then(function (data) {
            var feature = data.features[0];
            var props = feature.properties;
            var coord = ol.proj.transform(evt.coordinate, "EPSG:3111", "EPSG:4326");
            var coordLat = coord[1];
            var coordLon = coord[0];
          //  var info = "<h2>" + props.MARK_ID + "</h2><p>" + props.DISPLAY_NAME + "</p>";
             var info =    '<table style="width:100%">'+
                     '<tr>'+'<td>'+"<b>Nine Fig:</b> " +props.NINE_FIG+'</td>'+'</tr>';
                if (props.DISPLAY_NAME) {  info +=    '<tr>'+'<td>'+"<b>Name:</b> " +props.DISPLAY_NAME+'</td>'+'</tr>' } ; 
                if (props.MGA) {  info +=    '<tr>'+'<td>'+"<b>MGA:</b> " +props.MGA+'</td>'+'</tr>' } ; 
                 if (props.AHD) {  info +=    '<tr>'+'<td>'+"<b>AHD:</b> " +props.AHD+'</td>'+'</tr>' } ;    
                 if (props.PLAN_REF) {  info +=    '<tr>'+'<td>'+"<b>Plan Ref:</b> " +props.PLAN_REF+'</td>'+'</tr>' } ;                
                 if (props.STATUS) {  info +=    '<tr>'+'<td>'+"<b>Status:</b> " +props.STATUS+'</td>'+'</tr>' } ; 
                 if (props.MARK_ID) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadSketches.do?MARK_ID=' +props.MARK_ID+ '>Sketch Plan</a>' +'</td>'+'</tr>' } ;
                  if (props.MARK_ID) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadReport.do?downloadType=PDF&MARK_ID=' +props.MARK_ID+ '>Mark Report</a>' +'</td>'+'</tr>' } ;                 
                 if (props.MARK_ID) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.land.vic.gov.au/lassi/downloadReport.do?downloadType=KML&MARK_ID=' +props.MARK_ID+ '>KMZ (Google Earth)</a>' +'</td>'+'</tr>' } ;    
                 if (props.MARK_ID) {  info +=    '<tr>'+'<td>'+'<a href=http://maps.google.com/maps?q=&layer=c&cbll=' + coordLat + ',' + coordLon + ' target="_blank">Street View</a>' +'</td>'+'</tr>' } ;              

          info +=  '</table>';
            popup.show(evt.coordinate, info);
        });
						}
    }
    	
    
    
    
    
});





$("#searchclear").click(function(){
    $("#searchbox").val('');
    searchSource.clear();
}); 

function checkSearchNineFigure() {
    //Check whether search text could be a nine figure number
    if (searchText.value.length === 9 && searchText.value % 1 === 0) {
        //See if nine figure ca nb elocated
        var nineFigureString = searchText.value;

				searchSource.clear();
    	  reqwest({
							url : 'https://maps.land.vic.gov.au/lvis/services/smesDataDelivery/getMarkInformation?returnDefective=True&searchType=NineFigureNumber&nineFigureNumber=' + nineFigureString ,    	  	
             crossOrigin: true,
            type: 'json',
        }).then(function (data) {
            	var feature = data.data;
							var coordinate = [feature.longitude,feature.latitude];
							var coordinate3111 = ol.proj.fromLonLat(coordinate, 'EPSG:3111');
							//console.debug("Coord = " + coordinate3111);
							searchSource.addFeature(new ol.Feature(new ol.geom.Circle(coordinate3111, 20)));
							console.debug("Search for " + nineFigureString);
							map.getView().setCenter(ol.proj.fromLonLat(coordinate, 'EPSG:3111'));
							map.getView().setZoom(10) ;
//vectorSource.clear();
        		});

    }
}
    

function searchNine(){

searchSource.clear();
    	  reqwest({
    	  	
    	  	
    	  	
    	  	//url: 'https://maps.land.vic.gov.au/lvis/services/smesDataDelivery/getMarkInformation?searchType=Location&latitude=-34.186934059924276&longitude=142.23391041001886&radius=1.563508515945148&format=Full',
            url: 'https://maps.land.vic.gov.au/lvis/services/smesDataDelivery/getMarkInformation?searchType=NineFigureNumber&nineFigureNumber=226700320',
             crossOrigin: true,
            type: 'json',
        }).then(function (data) {
            	var feature = data.data;
							var coordinate = [feature.longitude,feature.latitude];
							var coordinate3111 = ol.proj.fromLonLat(coordinate, 'EPSG:3111');
							console.debug("Coord = " + coordinate3111);
							searchSource.addFeature(new ol.Feature(new ol.geom.Circle(coordinate3111, 20)));

							map.getView().setCenter(ol.proj.fromLonLat(coordinate, 'EPSG:3111'));
							map.getView().setZoom(10) ;
//vectorSource.clear();
        		});
}