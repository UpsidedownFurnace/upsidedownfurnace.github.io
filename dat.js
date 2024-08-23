const map_parts = [
    /*{
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
    },*/
    {
        path: 'map/WORLD MAP.jpg',
        origin: {
            x: 0,
            y: 0
        },
        scale: 1
    }
];

const location_dat = [
    {
        x: -18,
        y: -929,
        uname: 'furnacejesus'
    },
    {
        x: 201,
        y: -490,
        uname: 'ilovefurnaces'
    },
    {
        x: 357,
        y: -217,
        uname: 'furnacemarx'
    },
    {
        x: 98,
        y: -660,
        uname: 'comradefurnace',
        leader:true
    },
    {
        x: -26,
        y: -330,
        uname: 'F.P.D',
        nou: true
    },
    {
        x: -412,
        y: -864,
        uname: 'capitalistfurnace'
    },
    {
        x: 4800,
        y: -37,
        uname: 'americanfurnace'
    },
    {
        x: -1212,
        y: -1122,
        uname: 'anvilleader'
    },
    {
        x: -1887,
        y: -1013,
        uname: 'i_eat_wii'
    },
    {
        x: -1727,
        y: -1365,
        uname: 'i_like_wii'
    },
    {
        x: -1449,
        y: -1554,
        uname: 'eminem_wii'
    },
    {
        x: -400,
        y: -1474,
        uname: 'freezerpresident',
        leader:true
    },
    {
        x: 151,
        y: -1400,
        uname: 'fakefurnace'
    },
    {
        x: 308,
        y: -996,
        uname: 'comicalylargefreezer'
    },
    {
        x: 1112,
        y: -89,
        uname: 'furnacekiller'
    },
    {
        x: 1241,
        y: -476,
        uname: 'ikillfurnacesforfun'
    },
    {
        x: 990,
        y: -705,
        uname: 'antifurnacegroup'
    },
    {
        x: 1445,
        y: -948,
        uname: 'femboyfurnace'
    },
    {
        x: 710,
        y: -1137,
        uname: 'kawaiifurnace',
        leader:true
    },
    {
        x: 748,
        y: 335,
        uname: 'handsomefurnace'
    },
    {
        x: -265,
        y: 853,
        uname: 'ThaiFurnace',
        nou: true
    },
    {
        x: -630,
        y: 870,
        uname: 'iFurnace',
        nou: true
    },
    {
        x: -229,
        y: -140,
        uname: 'iunfuckfurnaces'
    },
    {
        x: 1002,
        y: -406,
        uname: 'iwillendfurnaces'
    },
    {
        x: 496,
        y: -1204,
        uname: 'metalfurnace'
    },
    {
        x: -1057,
        y: -239,
        uname: 'dragonfurnace'
    },
    {
        x: 355,
        y: -1669,
        uname: 'freezersorcerer'
    },
    {
        x: -1746,
        y: 746,
        uname: 'eldritchfurnace'
    },
    {
        x: -1600,
        y: 345,
        uname: 'upsidedownfurnace',
        leader:true
    },
    {
        x: 1614,
        y: -497,
        uname: 'furnacekitty'
    },
    {
        x: -1000,
        y: -2276,
        uname: 'idownloadfurnaces'
    },
    {
        x: -3654,
        y: 1093,
        uname: 'paxsims'
    },
    {
        x: 5083,
        y: 1080,
        uname: 'baconburger2022'
    },
    {
        x: 3097,
        y: -52,
        uname: 'awsome_furnace'
    },
    {
        x: -1734,
        y: -2125,
        uname: 'invertedFurnace'
    },
    {
        x: -684,
        y: -1700,
        uname: 'coaldfreezer'
    },
    {
        x: -3370,
        y: 2907,
        uname: "lidl-brand-furnace"
    }
];

const pois = [
    {
        x: -500,
        y: -300,
        name: 'West Burnin',
    },
    {
        x: 4,
        y: -783,
        name: 'East Burnin'
    },
    {
        x: -1213,
        y: -1248,
        name: 'Forgehelm'
    },
    {
        x: -1626,
        y: -1434,
        name: 'Wiiland'
    },
    {
        x: -263,
        y: -1423,
        name: 'Glacia'
    },{
        x: 25,
        y: -1768,
        name: 'Coald Mines'
    },
    {
        x: 983,
        y: -580,
        name: 'Pyraxis'
    },
    {
        x: 575,
        y: -1250,
        name: 'Ignicis'
    },
    {
        x: -314,
        y: -2391,
        name: 'Cryos'
    },
    {
        x: -1776,
        y: 707,
        name: 'Eldritch Tower'
    },
    {
        x: -1600,
        y: 283,
        name: 'Furnacestralia'
    },
    {
        x: -492,
        y: 840,
        name: 'F.F.F'
    },
    {
        x: 559,
        y: 459,
        name: 'Handsome Island'
    },
    {
        x: 2177,
        y: 1159,
        name: 'South Arcania'
    },
    {
        x: 3297,
        y: 13,
        name: 'Calypsia'
    },
    {
        x: 4624,
        y: 840,
        name: 'Navara'
    },
    {
        x: 3982,
        y: -1702,
        name: 'North Arcania'
    },
    {
        x: -3921,
        y: 38,
        name: 'Avalia'
    },
    {
        x: -3856,
        y: 960,
        name: 'Furnia'
    },
    {
        x: -413,
        y: 2714,
        name: 'Ice Spire'
    },
    {
        x: -1729,
        y: -2108,
        name: 'Froza'
    },
    {
        x: -1000,
        y: -2350,
        uname: 'Downloadia'
    },
    {
        x: -3910,
        y: 3260,
        name: "The Crusible Islands"
    }
]

const towns = [
    {
        x: -1583,
        y: 328,
        name: 'New Furnace',
        population: 1,
        capital: true
    },
    {
        x: -2019,
        y: -1666,
        name: 'West Camp 1',
        population: 1
    },
    {
        x: -1037,
        y: -2275,
        name: 'Download Village',
        population: 1
    },{
        x: -106,
        y: 70,
        name: "Ofen Point",
        population: 10
    },
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
        x: 44,
        y: -2880,
        name: 'Freezepoint Sea',
        size: 40,
        rot: 15
    },
    {
        x: 130,
        y: 1549,
        name: 'I R O N W A V E  O C E A N',
        size: 180,
        rot: 0
    },
    {
        x: 4187,
        y: 2363,
        name: 'COLOSSIC OCEAN',
        size: 100,
        rot: 0
    },
    {
        x: -5110,
        y: 2002,
        name: 'COLOSSIC OCEAN',
        size: 100,
        rot: 0
    },
    {
        x: 2657,
        y: -1509,
        name: 'VORTIC OCEAN',
        size: 120,
        rot: 0
    },
    {
        x: -3222,
        y: -2577,
        name: 'STORMCREST OCEAN',
        size: 120,
        rot: 0
    },
    {
        x: -245,
        y: -482,
        name: 'Charcoal Lake',
        size:7
    },
    {
        x: -3335,
        y: -2166,
        name: '"Fuck you" Island',
        size:20
    },
    {
        x: 3915,
        y: -739,
        name: 'Calypsian Sea',
        size:30
    }
];
