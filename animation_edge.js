/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'trypodTrigger',
                            type: 'image',
                            rect: ['42.9%', '39.6%', '15.1%', '20%', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"trypodTrigger.svg",'0px','0px'],
                            transform: [[],['11'],[],['2.38','2.38'],['54.2095%','52.4865%']]
                        },
                        {
                            id: 'trypodBody',
                            type: 'image',
                            rect: ['42.9%', '39.5%', '83px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"trypodBody.svg",'0px','0px'],
                            transform: [[],['11'],[],['2.38','2.38'],['53.9858%','53.1612%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "rotateZ",
                            0,
                            750,
                            "linear",
                            "${trypodTrigger}",
                            '11deg',
                            '0deg'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            750,
                            2250,
                            "swing",
                            "${trypodTrigger}",
                            '0deg',
                            '371deg'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            0,
                            750,
                            "linear",
                            "${trypodBody}",
                            '11deg',
                            '0deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            750,
                            2250,
                            "swing",
                            "${trypodBody}",
                            '0deg',
                            '371deg'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            750,
                            "linear",
                            "${trypodTrigger}",
                            '39.68%',
                            '44.3%'
                        ],
                        [
                            "eid64",
                            "top",
                            750,
                            366,
                            "linear",
                            "${trypodTrigger}",
                            '44.3%',
                            '40%'
                        ],
                        [
                            "eid66",
                            "top",
                            1116,
                            191,
                            "linear",
                            "${trypodTrigger}",
                            '40%',
                            '40.1%'
                        ],
                        [
                            "eid65",
                            "top",
                            1307,
                            693,
                            "linear",
                            "${trypodTrigger}",
                            '40.1%',
                            '39.6%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("EDGE-418283999");
