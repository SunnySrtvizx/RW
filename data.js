var APP_DATA = {
  "scenes": [
    {
      "id": "0-open_area",
      "name": "Open_Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04906262122050009,
        "pitch": -0.017754675606392212,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.616765058944095,
          "pitch": -0.0025663444665475765,
          "rotation": 0,
          "target": "2-meeting_room"
        },
        {
          "yaw": -0.708606689881341,
          "pitch": -0.4934081672976802,
          "rotation": 0,
          "target": "3-first_floor"
        },
        {
          "yaw": 1.5817057911982815,
          "pitch": -0.07722852935206959,
          "rotation": 0,
          "target": "1-workstation_gf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-workstation_gf",
      "name": "Workstation_GF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.771713037961014,
        "pitch": 0.18011817811256314,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5466536827929929,
          "pitch": -0.07131858940157443,
          "rotation": 0,
          "target": "0-open_area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-meeting_room",
      "name": "Meeting_Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5896817496758988,
        "pitch": 0.15042955882086773,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -3.0919789561113618,
          "pitch": 0.046064448721827134,
          "rotation": 0,
          "target": "0-open_area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first_floor",
      "name": "First_Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1678553386898365,
        "pitch": 0.19862437123388865,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.713418282124299,
          "pitch": 0.23124564762842859,
          "rotation": 0,
          "target": "0-open_area"
        },
        {
          "yaw": 0.38847674349607964,
          "pitch": 0.047572967678332745,
          "rotation": 0,
          "target": "4-meeting_room_f1"
        },
        {
          "yaw": 0.7119357976582545,
          "pitch": -0.010950128970401707,
          "rotation": 0,
          "target": "5-meeting_room2_f1"
        },
        {
          "yaw": -2.9660543751305397,
          "pitch": -0.03313649868787394,
          "rotation": 0,
          "target": "6-2nd_floor_open_area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-meeting_room_f1",
      "name": "Meeting_Room_F1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4473837519515662,
        "pitch": 0.11926686067316972,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.1989210477385104,
          "pitch": 0.0166695297914341,
          "rotation": 7.0685834705770345,
          "target": "3-first_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-meeting_room2_f1",
      "name": "Meeting_Room2_F1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.7041778232076101,
        "pitch": 0.19338817118375928,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.4525491960943846,
          "pitch": 0.009727537537440156,
          "rotation": 0,
          "target": "3-first_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2nd_floor_open_area",
      "name": "2nd_Floor_Open_Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.04929119277948857,
        "pitch": 0.3038546653590135,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.907734012148092,
          "pitch": 0.00559488433962585,
          "rotation": 2.356194490192345,
          "target": "3-first_floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rockworth",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
