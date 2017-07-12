
  var defaultStyle = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    })
              });  		
		

var styleGreen = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 135, 0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0, 90, 0, 1)'
                    }),
                    radius: 4
                })
              });

var styleGreenLine = new ol.style.Style({

                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(0, 90, 0, 1)'
                    })
              });              
              
              

var styleBluePoly = new ol.style.Style({
									 stroke: new ol.style.Stroke({
            color: 'blue',
            width: 3
          }),
          fill: new ol.style.Fill({
            color: 'rgba(46,243,217,0.26)'
          })
              });



var styleOrange = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 116, 0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(208, 94, 0, 1)'
                    }),
                    radius: 4
                })
              });

var styleOrangeLine = new ol.style.Style({

                    stroke: new ol.style.Stroke({
                        width: 4,
                        color: 'rgba(208, 94, 0, 1)'
                    })
              });

              
              
var styleRed = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(215, 25, 30, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(167, 6, 10, 1)'
                    }),
                    radius: 4
                })
              });              
              
var styleBlue1 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(239,243,255, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(189,215,231, 1)'
                    }),
                    radius: 4
                })
              }); 

var styleBlue2 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(189,215,231, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(107,174,214, 1)'
                    }),
                    radius: 4
                })
              }); 

var styleBlue3 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(107,174,214, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(49,130,189, 1)'
                    }),
                    radius: 4
                })
              }); 

var styleBlue4 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(49,130,189, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(8,81,156, 1)'
                    }),
                    radius: 4
                })
              }); 


var stylePurple1 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(215,181,216, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(223,101,176, 1)'
                    }),
                    radius: 4
                })
              }); 

var stylePurple2 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(223,101,176, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(221,28,119, 1)'
                    }),
                    radius: 4
                })
              }); 

var stylePurple3 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(221,28,119, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(152,0,67, 1)'
                    }),
                    radius: 4
                })
              }); 
              
var stylePurple4 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(221,28,230, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(117,0,190, 1)'
                    }),
                    radius: 4
                })
              });               
              
 var styleFixed = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(35,132,67, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });            
              
  var styleTraverse = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(170,63,219, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              }); 
 var styleGPS = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(35,67,228, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              }); 
 var styleCadastral = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(109,201,120, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });                                          
 var styleTrig = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(208,96,147, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              }); 
 var styleOther = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(233,109,26, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });                             
              
 var styleCorsRed = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(228,26,28, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              });  
 var styleCorsBlue = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(55,126,184, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              });  
 var styleCorsGreen = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(77,175,74, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              });  
 var styleCorsPurple = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(152,78,163, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              }); 
 var styleCorsOrange = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(255,127,0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              }); 
              
  var styleOrangeTriangle = new ol.style.Style({
                image: new ol.style.RegularShape({
                	points: 3,
                    fill: new ol.style.Fill({
                        color: 'rgba(255,127,0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 6
                })
              });              
              
              
  var styleGreenTriangle = new ol.style.Style({
                image: new ol.style.RegularShape({
                	points: 3,
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 135, 0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0, 90, 0, 1)'
                    }),
                    radius: 6
                })
              });  
              
  var styleRedTriangle = new ol.style.Style({
                image: new ol.style.RegularShape({
                	points: 3,
                    fill: new ol.style.Fill({
                        color: 'rgba(215, 25, 30, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(167, 6, 10, 1)'
                    }),
                    radius: 6
                })
              });                



 var stylePurplePt1 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(152,78,163, 1)'
                    })
              }); 

 var styleOrangePt1 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(208, 94, 0, 1)'
                    })
              });     
 var styleOrangePt3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(208, 94, 0, 1)'
                    })
              });               
 var styleBluePt1 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(55,126,184, 1)'
                    })
              });     
 var styleBluePt3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(55,126,184, 1)'
                    })
              });                      
  var styleGreenPt1 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(77,175,74, 1)'
                    })
              });     
 var styleGreenPt3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(77,175,74, 1)'
                    })
              });              
  var styleRedPt1 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(228,26,28, 1)'
                    })
              });     
 var styleRedPt3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(228,26,28, 1)'
                    })
              });   

      var gnss2to3 = [254,224,210,1];
      var gnss3to4 = [252,187,161,1];
      var gnss4to5 = [251,106,74,1];
      var gnss5to6 = [203,24,29,1];
      var gnss6up = [103,0,13,1];

 var gnss2to3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(254,224,210,1)'
                    })
              });   
 var gnss3to4 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(252,187,161,1)'
                    })
              });   
 var gnss4to5 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(251,106,74,1)'
                    })
              });   
 var gnss5to6 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(203,24,29,1)'
                    })
              });   
 var gnss6up = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(103,0,13,1)'
                    })
              });   

  var dist2to3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(188,189,220,1)'
                    })
              });   
 var dist3to4 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(128,125,186,1)'
                    })
              });   
 var dist4to5 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(106,81,163,1)'
                    })
              });   
 var dist5to6 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(84,39,143,1)'
                    })
              });   
 var dist6up = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(63,0,125,1)'
                    })
              });       
                                                                                            
  var dir2to3 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(107,174,214,1)'
                    })
              });   
 var dir3to4 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(66,146,198,1)'
                    })
              });   
 var dir4to5 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(33,113,181,1)'
                    })
              });   
 var dir5to6 = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(8,81,156,1)'
                    })
              });   
 var dir6up = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        width: 3,
                        color: 'rgba(8,48,107,1)'
                    })
              }); 




var styleSteps0 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(6,47,228, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });

var styleSteps1 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(28, 42, 210, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });

var styleSteps2 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(51, 38, 192, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });

var styleSteps3 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(74, 34, 174, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });


var styleSteps4 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(96, 30, 156, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });
              
               
var styleSteps5 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(119, 26, 138, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });



var styleSteps6 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(142, 21, 120, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });

 
var styleSteps7 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(165, 17, 102, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });

var styleSteps8 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(187, 13, 84, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });   

var styleSteps9 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(210, 9, 66, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });     
              


var styleSteps10 = new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: 'rgba(233,5,48, 1)'
                    }),
                    stroke: new ol.style.Stroke({
                        width: 1,
                        color: 'rgba(0,0,0, 1)'
                    }),
                    radius: 4
                })
              });                   