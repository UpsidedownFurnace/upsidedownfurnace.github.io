const map_parts = [
    {
        path: "map/mapmain.png",
        origin: {
            x: 0,
            y: 0
        },
        scale: 1
    },
    {
        path: "map/mapexp2.png",
        origin: {
            x: -632,
            y: -213
        },
        scale: 1.12
    },
    {
        path: 'map/mapexp3.png',
        origin: {
            x: 672,
            y: -217
        },
        scale: 1.023
    },
    {
        path: 'map/mapexp4.png',
        origin: {
            x: 30,
            y: -675
        },
        scale: 1
    },
    {
        path: 'map/mapexp5.png',
        origin: {
            x: -576,
            y: 289
        },
        scale: 0.5
    },
    {
        path: 'map/mapexp6.png',
        origin: {
            x: -821,
            y: 60
        },
        scale: 1
    },
];

const location_dat = [
    {
        x: 70,
        y: 17,
        uname: 'furnacejesus'
    },
    {
        x: 53,
        y: -28,
        uname: 'ilovefurnaces'
    },
    {
        x: -10,
        y: -97,
        uname: 'furnacemarx'
    },
    {
        x: 109,
        y: 119,
        uname: 'comradefurnace',
        leader:true
    },
    {
        x: -21,
        y: 60,
        uname: 'F.P.D',
        nou: true
    },
    {
        x: -126,
        y: 26,
        uname: 'capitalistfurnace'
    },
    {
        x: -122,
        y: -105,
        uname: 'invertedfurnace'
    },
    {
        x: -195,
        y: -34,
        uname: 'americanfurnace'
    },
    {
        x: -330,
        y: -108,
        uname: 'anvilleader'
    },
    {
        x: -470,
        y: -109,
        uname: 'i_eat_wii'
    },
    {
        x: -464,
        y: -183,
        uname: 'i_like_wii'
    },
    {
        x: -361,
        y: -263,
        uname: 'eminem_wii'
    },
    {
        x: -89,
        y: -221,
        uname: 'freezerpresident',
        leader:true
    },
    {
        x: 64,
        y: -174,
        uname: 'fakefurnace'
    },
    {
        x: 84,
        y: -108,
        uname: 'comicalylargefreezer'
    },
    {
        x: 222,
        y: -64,
        uname: 'furnacekiller'
    },
    {
        x: 199,
        y: 35,
        uname: 'ikillfurnacesforfun'
    },
    {
        x: 348,
        y: 4,
        uname: 'antifurnacegroup'
    },
    {
        x: 380,
        y: -92,
        uname: 'femboyfurnace'
    },
    {
        x: 197,
        y: -146,
        uname: 'kawaiifurnace',
        leader:true
    },
    {
        x: 201,
        y: 260,
        uname: 'handsomefurnace'
    },
    {
        x: -56,
        y: 382,
        uname: 'ThaiFurnace',
        nou: true
    },
    {
        x: -167,
        y: 376,
        uname: 'iFurnace',
        nou: true
    },
    {
        x: -90,
        y: 120,
        uname: 'iunfuckfurnaces'
    },
    {
        x: 226,
        y: 127,
        uname: 'iwillendfurnaces'
    },
    {
        x: 135,
        y: -200,
        uname: 'metalfurnace'
    },
    {
        x: -298,
        y: 114,
        uname: 'dragonfurnace'
    },
    {
        x: 96,
        y: -309,
        uname: 'freezersorcerer'
    },
    {
        x: -599,
        y: 326,
        uname: 'eldritchfurnace'
    },
    {
        x: -824,
        y: 85,
        uname: 'upsidedownfurnace',
        leader:true
    },
    {
        x: 414,
        y: -48,
        uname: 'furnacekitty'
    },
    {
        x:-266,
        y:-476,
        g:"idownloadfurnaces"
    }
];

const pois = [
    {
        x: -128,
        y: 81,
        name: 'West Burnin',
    },
    {
        x: 22,
        y: -50,
        name: 'East Burnin'
    },
    {
        x: -296,
        y: -184,
        name: 'Forgehelm'
    },
    {
        x: -424,
        y: -228,
        name: 'Wiiland'
    },
    {
        x: -21,
        y: -233,
        name: 'Glacia'
    },{
        x: 10,
        y: -332,
        name: 'Coald Mines'
    },
    {
        x: 282,
        y: 7,
        name: 'Pyraxis'
    },
    {
        x: 202,
        y: -174,
        name: 'Ignicis'
    },
    {
        x: 0,
        y: -480,
        name: 'Unclaimed Territories'
    },
    {
        x: -595,
        y: 298,
        name: 'Eldritch Tower'
    },
    {
        x: -834,
        y: 49,
        name: 'Furnacestralia'
    },
    {
        x: -10000,
        y: -10000,
        name: 'Nothing here...'
    },
    {
        x: -20000,
        y: -20000,
        name: 'Try to guess my main'
    },
    {
        x: -30000,
        y: -30000,
        name: 'Have a guess?'
    },
    {
        x: -40000,
        y: -40000,
        name: 'ok.'
    },
    {
        x: -50000,
        y: -50000,
        name: 'it is...'
    }
]

const towns = [
    {
        x: -799,
        y: 44,
        name: 'New Furnace',
        population: 1,
        capital: true
    },
    {
        x: -538,
        y: -281,
        name: 'West Camp 1',
        population: 1
    },
    {
        x: -265,
        y: -472,
        name: 'Download Village',
        population: 1
    }
];

const terrainDat = [
    {
        x: -522,
        y: -312,
        name: 'West territories',
        size:10,
        rot: 60
    },
    {
        x: -411,
        y: -700,
        name: 'Freezepoint Sea',
        size: 14,
        rot: -15
    },
    {
        x: -245,
        y: -482,
        name: 'Charcoal Lake',
        size:7
    }
]