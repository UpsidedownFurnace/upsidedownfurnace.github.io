(function() {
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
    ];
    function displayChangeLog() {
        alert(`New Version ${ver}! This update fixed map panning / zoom and added the ability to display towns and terrain labels for things suck as territories and oceans.`);
    }
    const ver = 'beta 1.1';
    if (localStorage.getItem('last_update') != ver) {
        displayChangeLog();
    }
    localStorage.setItem('last_update', ver);
    //for encoding / decoding level data as base64
    const townLabelSize = 10;
var b64 = {
    table: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+',
    bitCombine: function(bits, i, len) {
      var r = 0;
      for (var j = 0; j < len; j++) { //basically just collects all the bits into a int / long
        r |= bits[i++];
        r <<= 1;
      }
      return r >> 1;
    },
    encode: function(dat) {
      var res = "";
      
      var bits = [],v = null;
      
      //extract all the bits from the bytes to encode
      for (var i = 0; i < dat.length; i++) { //cant use of :/
        v = dat[i];
        for (var b = 0; b < 8; b++) {
          bits.push(
            (v >> b) 
            & 1
          );
        }
      }
      
      //combine the bits into 6 bit chunks from 0-64 and index a table to get the character
      for (i = 0; i < bits.length; i += 6) {
        var cmax = i >= bits.length ? 6 - (i - bits.length) : 6;
        res += this.table[
          this.bitCombine(bits, i, cmax)
        ];
      }
      return res;
    },
    decode: function(dat) {
      var bits = [];
      var v;
      
      //collect all the bytes
      for (var i = 0; i < dat.length; i ++) {
        v = this.table.indexOf(dat[i]); //opposite of the prior table indexing
        for (var b = 0; b < 6; b++)
          bits.push(
            (v >> (5-b)) & 1  
          );
      }
      
      var res = [];
      
      //now assemble as bytes instead of 6 bit chunks
      var val = 0;
      for (var b = 0; b < bits.length; b += 8) {
        val = 0;
        var cmax = b >= bits.length ? 8 - (b - bits.length) : 8;
        for (var j = 0; j < cmax; j++) {
          val |= (bits[b+j] << j);
        }
        res.push(val);
      }
      
      return res;
    }
  };
  
  //Binary utility functions
  var bin = {
    combineBytes: function(bytes, i, sz) {
      var r = 0;
      
      for (var b = i+sz-1; b >= i;) {
        r |= bytes[b--];
        r <<= 8;
      }
      
      return r >> 8;
    },
    intSplit: function(v, sz) {
      var r = [];
      
      for (var i = 0; i < sz; i++) {
        r.push(v & 255);
        v >>= 8;
      }
      
      return r;
    }
  };

    const MAP_W = 10000, MAP_H = 10000;
    const zoomMin = 0.15, zoomMax = 10;
    const can = document.querySelector('#c');
    const cPosDisplay = document.querySelector('.cursor-pos');
    const pointRad = 7, hPointRad = pointRad * 0.5;
    const fsi = document.querySelector('#fsi');

    const settings = {
        spg: document.querySelector('#spg')
    }

    if (can == null) {
        console.error('Failed to get canvas!');
        return;
    }

    const ctx = can.getContext('2d');

    var origin = {
        x: 0,
        y: 0
    };
    var zoom = 1, invZoom = 1 / zoom;

    var drag = false;
    var mx = 0, my = 0;

    var map_data = [];

    var location = {
        x: null,
        y: null
    }

    var update_loc = false;

    //loads the map data
    function load_map_data() {
        for (const i of map_parts) {
            const g = {
                img: new Image(),
                origin: i.origin,
                scale: i.scale
            };
            g.img.src = i.path;
            g.img.addEventListener('load', function(e) {
                console.log("Loaded image!");
            })
            map_data.push(g);
        }
    }

    function _round(v, d) {
        const D = (10 ** d);
        return Math.round(v * D) / D;
    }

    function polyDraw(x, y, points) {
        if (points.length <= 0) return;
        ctx.beginPath();

        var i = 0;

        for (var p of points) {
            if (i == 0) {
                ctx.moveTo(p[0] + x, p[1] + y);
            } else {
                ctx.lineTo(p[0] + x, p[1] + y);
              }
            i++;
        }
        ctx.lineTo(points[0][0] + x, points[0][1] + y);
        ctx.closePath();
    }

    function renderLocationPoint(x, y, hover, dat) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.arc(x, y, pointRad, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();

        if (hover) {
            //TODO: display info above name
            const triPoints = [
                [0,0],
                [10,0],
                [5, 10]
            ];

            ctx.font = '15px Arial';
            var name_len = ctx.measureText(dat.uname || '').width;
            const h = 22;
            const sPadding = 5, ttop = 2;
            name_len += sPadding * 2;
            const aDist = 7; //distance above point

            ctx.fillStyle = '#fff';
            const hnl = name_len * 0.5;
            const _x = x - hnl - hPointRad, _y = y - (h + aDist + 12 + pointRad);
            ctx.fillRect(_x, _y + 1, name_len, h);
            ctx.lineWidth = 0;
            polyDraw(_x + (hnl - hPointRad), _y + h, triPoints);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.fillText(dat.uname || '', _x + sPadding, _y + ttop + h / 2 + 2);
        }
    }

    function translateCoord(x, y) {
        return {
            x: (((x) - origin.x)* zoom + can.width / 2),
            y: (((y) - origin.y)* zoom + can.height / 2)
        }
    }

    function unTranslateCoord(x, y) {
        return {
            x: ((x - can.width / 2)* invZoom + origin.x),
            y: ((y - can.height / 2)* invZoom + origin.y)
        }
    }

    var current_region = [];

    var regionEditing = false;

    function startRegionEdit() {
        regionEditing = true;
        current_region = [];
    }

    document.querySelector('#cr').addEventListener('click', startRegionEdit);

    function render_region_overlay(dat, render_points) {
        if (dat.length <= 0) return;
        var i = 0;
        ctx.beginPath();
        for (const  _p of dat) {
            const p = translateCoord(_p.x, _p.y);
            if (typeof p != 'object') continue;
            switch (i) {
                case 0: {
                    ctx.moveTo(p.x, p.y);
                    break;
                }
                default: {
                    ctx.lineTo(p.x, p.y);
                    break;
                }
            }
            i++;
        }
        const f = translateCoord(dat[0].x, dat[0].y);
        ctx.lineTo(f.x,f.y);
        ctx.strokeStyle = '#0a0';
        ctx.fillStyle = '#0f0';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.globalAlpha = 0.25;
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
        if (render_points) {
            ctx.fillStyle = '#0b0';
            for (const  _p of dat) {
                const p = translateCoord(_p.x, _p.y);
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2, false);
                ctx.fill();
            }
        }
    }

    function getPopStyle(pop) {
        var steps = [10**6, 10**5, 5*10**4, 10**4];
        var i = 4;
        for (const s of steps) {
            if (pop >= steps[i])
                return i;
            i--;
        }
        return 0;
    }

    function getTriangle(s) {
        const hs = s * 0.5;
        return [[hs, 0],[s,s],[0,s]]
    }

    function getStar(s) {
        const uy = s / 5;
        const ux = s / 4;

        return [
            [ux * 2, uy * 0],
            [ux * 3, uy * 2],
            [ux * 4, uy * 2],
            [ux * 3, uy * 3],
            [ux * 4, uy * 5],
            [ux * 2, uy * 4],
            [ux * 0, uy * 5],
            [ux * 1, uy * 3],
            [ux * 0, uy * 2],
            [ux * 1, uy * 2]
        ];
    }

    function renderTowns() {
        for (const t of towns) {
            var rPoint = translateCoord(t.x, t.y);
            var sty = getPopStyle(t.population);

            var lz = townLabelSize * (1 + (0.2 * sty));

            if (!t.capital && (invZoom / zoomMax) > (sty / 4) + 0.25)
                continue;

            if (t.capital) {
                sty = 4;
                lz = townLabelSize * (1 + (0.2 * 4));
                ctx.strokeStyle = '#000';
                ctx.fillStyle = '#fff';
                const starPoints = getStar(lz);

                polyDraw(rPoint.x, rPoint.y, starPoints);
                ctx.lineWidth = 2;
                ctx.fill();
                ctx.stroke();
            } else {

            switch (sty) {
                case 0: {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(rPoint.x, rPoint.y, lz, lz);
                    break;
                }
                case 1: {
                    ctx.fillStyle = '#000';
                    ctx.beingPath();
                    ctx.arc(rPoint.x, rPoint.y, lz, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                }
                case 2: {
                    ctx.strokeStyle = '#000';
                    ctx.fillStyle = '#fff';
                    ctx.beingPath();
                    ctx.arc(rPoint.x, rPoint.y, lz, 0, Math.PI * 2);
                    ctx.lineWidth = 2;
                    ctx.fill();
                    ctx.stroke();
                    break;
                }
                case 3: {
                    ctx.fillStyle = '#000';
                    const triPoints = getTriangle(lz);

                    ctx.strokeStyle = '#000';
                    ctx.fillStyle = '#fff';
                    polyDraw(rPoint.x, rPoint.y, triPoints);
                    ctx.lineWidth = 2;
                    ctx.fill();
                    ctx.stroke();
                    break;
                }
            }
            }

            if (!t.capital && (invZoom / zoomMax) > (sty / 4) + 0.025)
                continue;
            

            //draw town name
            ctx.fillStyle = '#000';
            ctx.strokeStyle = '#fff';
            const fontSize = 12 * (1 + (0.1 * sty));
            ctx.font = `${fontSize}px Arial`;
            
            ctx.strokeText(t.name, rPoint.x + lz + 5, rPoint.y + fontSize);
            ctx.fillText(t.name, rPoint.x + lz + 5, rPoint.y + fontSize);
        }
    }

    function getMetricHeight(m) {
        return m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
    }

    function renderLandLabels() {
        for (const l of terrainDat) {
            ctx.font = `bold ${l.size*zoom}px Arial`;
            const tmet = ctx.measureText(l.name);
            const th = getMetricHeight(tmet);
            ctx.fillStyle = '#000';
            ctx.globalAlpha = 0.25;
            const nc = translateCoord(l.x, l.y);
            ctx.save();
            ctx.translate(nc.x, nc.y);
            ctx.rotate(l.rot * Math.PI / 180);
            ctx.fillText(l.name, - tmet.width / 2, -th / 2);
            ctx.restore();
            ctx.globalAlpha = 1;
        }
    }

    document.querySelector('#se').addEventListener('input', function(e) {
        if (this.checked)
            document.querySelector('.editor-box').style.display = 'block';
        else
            document.querySelector('.editor-box').style.display = 'none';
    })

    var globalMousePos = {x:0,y:0};

    //render the map / maps
    function render() {
        ctx.translate(0.5, 0.5);
        can.width = document.documentElement.clientWidth;
        can.height = document.documentElement.clientHeight;
        can.style.position = 'absolute';
        can.style.left = '0';
        can.style.top = '0';

        ctx.fillStyle = '#C3E7FB';
        ctx.fillRect(0,0,can.width,can.height);

        for (const mp of map_data) {
            const iw = mp.img.width * mp.scale;
            const ih = mp.img.height * mp.scale;
            const pos = translateCoord(mp.origin.x - iw/2, mp.origin.y - ih/2);

            ctx.drawImage(mp.img, pos.x, pos.y, iw * zoom, ih * zoom);
        }
        cPosDisplay.innerText = 'Cursor Position: (' +  
        _round(globalMousePos.x, 2) + ', ' + 
        _round(globalMousePos.y, 2) + ')';

        renderLandLabels();
        renderTowns();

        //render pois
        for (const poi of pois) {
            const name = poi.name || '???';
            ctx.font = '25px Arial';
            ctx.fillStyle = '#000';
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 3;
            const tw1 = ctx.measureText(name).width, pos = translateCoord(poi.x - tw1 * 0.5, poi.y);
            ctx.strokeText(name, pos.x, pos.y);
            ctx.fillText(name, pos.x, pos.y);
        }

        //render your location
        if (location.x != null && location.y != null) {
            ctx.strokeStyle = '#000';
            ctx.fillStyle = '#f00';
            const loc = translateCoord(location.x - hPointRad, location.y - hPointRad);
            renderLocationPoint(
                loc.x, 
                loc.y, 
                fsi.checked || Math.sqrt((mx - loc.x) ** 2 + (my - loc.y) ** 2) < pointRad, 
                {uname:(!location.nou?'u/':'')+location.uname}
            );
        }

        //render other locations
        for (const up of location_dat) {
            const nLoc = translateCoord(up.x - 2.5, up.y - 2.5),
                  hov = Math.sqrt((mx - nLoc.x) ** 2 + (my - nLoc.y) ** 2) < 5;

            if (!up.leader)
                ctx.fillStyle = hov ? '#090' : '#0f0';
            else    
                ctx.fillStyle = hov ? '#ec0' : '#fe0';

            renderLocationPoint(
                nLoc.x, 
                nLoc.y, 
                fsi.checked || hov, 
                {uname:(!up.nou?'u/':'')+up.uname}
            );
        }

        if (regionEditing) {
            render_region_overlay(current_region, true);
        }

        //draw global grid thingy
        /*if (settings.spg.checked) {
            const nGrid = 10, hnGrid = nGrid / 2;
            const posScale = (can.width / nGrid),
                xBase = posScale - (origin.x ) % posScale,
                yBase =  (origin.y ) % posScale;
            
            for (var dx = 0; dx < hnGrid * 2; dx++) {
                ctx.globalAlpha = 0.5;
                ctx.strokeStyle = '#000';

                var xp = xBase + dx * posScale;

                //if (xp)
                //console.log(xp);
                ctx.beginPath();
                ctx.moveTo(xp, 0);
                ctx.lineTo(xp, can.height);
                ctx.stroke();
            }

            for (var dy = 0; dy < hnGrid * 2; dy++) {
                ctx.globalAlpha = 0.5;
                ctx.strokeStyle = '#000';

                var yp = dy * posScale - yBase;

                //if (yp)
                //console.log(xp);
                ctx.beginPath();
                ctx.moveTo(0, yp);
                ctx.lineTo(can.width, yp);
                ctx.stroke();
            }
        }*/
        /*    ctx.strokeStyle = '#f00';
            ctx.beginPath();
            ctx.moveTo(can.width / 2, can.height / 2);
            ctx.lineTo(mx, my);
            ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#000';
        const neworigin = translateCoord(origin.x, origin.y);
        ctx.arc(neworigin.x, neworigin.y, 10, 0, Math.PI * 2, false);
        ctx.fill();*/
    }

    setInterval(render, 1000/60);

    can.style.cursor = 'grab';

    var regionPanning = false;

    can.addEventListener('keydown', function(e) {
        switch (e.key.toLowerCase()) {
            case 'shift': {
                regionPanning = true;
                break;
            }
        }
    })

    can.addEventListener('keyup', function(e) {
        switch (e.key.toLowerCase()) {
            case 'shift': {
                regionPanning = false;
                break;
            }
        }
    })

    //pan on
    can.addEventListener('mousedown', function(e) {
        mx = e.clientX;
        my = e.clientY;
        globalMousePos = unTranslateCoord(mx, my);
        can.style.cursor = 'grabbing';

        if (regionEditing && !regionPanning) {
            current_region.push({
                x:globalMousePos.x, 
                y:globalMousePos.y
            })
        } else
            drag = true;
        
        if (update_loc) {
            location = globalMousePos;
            update_loc = false;
        }
    })

    //var scrollDiff = 0, targetScrollDiff = 0;

    //panning
    can.addEventListener('mousemove', function(e) {

        if (drag) {
            const dx = e.clientX - mx, dy = e.clientY - my;

            //invert axis for better feel
            origin.x += -dx * invZoom;
            origin.y += -dy * invZoom;
        }

        mx = e.clientX;
        my = e.clientY;
        globalMousePos = unTranslateCoord(mx, my);
    })

    //pan off
    can.addEventListener('mouseup', function(e) {
        drag = false;
        mx = e.clientX;
        my = e.clientY;
        globalMousePos = unTranslateCoord(mx, my);
        can.style.cursor = 'grab';
    }) 

    //zooming
    window.addEventListener('wheel', function(e) {
        var scrollDir = e.wheelDelta >= 0;

        var dz = zoom * 0.1;

        if (scrollDir && zoom < zoomMax) //up
            zoom += dz;
        else if (zoom > zoomMin) //down
            zoom += (dz *= -1);
        invZoom = 1 / zoom;
        if (zoom <= zoomMin) {
            zoom = zoomMin + 0.01;
            return;
        }
        if (zoom >= zoomMax) {
            zoom = zoomMax - 0.01;
            return;
        }

        origin.x += (mx - can.width / 2) * 0.1;
        origin.y += (my - can.height / 2) * 0.1;
    })

    load_map_data();

    document.querySelector('#al').addEventListener('click', function(e) {
        const name = prompt('Enter you furnace name: ');
        alert('Click on a point where you want to set your location.');
        can.style.cursor = 'pointer';
        update_loc = true;
        location.uname = name;
    })
})();