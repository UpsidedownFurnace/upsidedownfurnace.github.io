(function() {
    //for encoding / decoding level data as base64
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
            x: (((x) * zoom - origin.x) + can.width / 2),
            y: (((y) * zoom - origin.y) + can.height / 2)
        }
    }

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
            const iw = mp.img.width * mp.scale * zoom;
            const ih = mp.img.height * mp.scale * zoom;
            const pos = {
                x: ((mp.origin.x - iw/2) - origin.x) + can.width / 2,
                y: ((mp.origin.y - ih/2) - origin.y) + can.height / 2
            };

            ctx.drawImage(mp.img, pos.x, pos.y, iw, ih);
        }

        cPosDisplay.innerText = 'Cursor Position: (' +  
        _round((((mx - can.width / 2)) + origin.x) * invZoom, 2) + ', ' + 
        _round((((my - can.height / 2)) + origin.y) * invZoom, 2) + ')';

        //render your location
        if (location.x != null && location.y != null) {
            ctx.strokeStyle = '#000';
            ctx.fillStyle = '#f00';
            const loc = translateCoord(location.x - hPointRad, location.y - hPointRad);
            renderLocationPoint(
                loc.x, 
                loc.y, 
                Math.sqrt((mx - loc.x) ** 2 + (my - loc.y) ** 2) < pointRad, 
                {uname:'u/'+location.uname}
            );
        }

        //render other locations
        for (const up of location_dat) {
            const nLoc = translateCoord(up.x - 2.5, up.y - 2.5),
                  hov = Math.sqrt((mx - nLoc.x) ** 2 + (my - nLoc.y) ** 2) < 5;

            ctx.fillStyle = hov ? '#090' : '#0f0';

            renderLocationPoint(
                nLoc.x, 
                nLoc.y, 
                hov, 
                {uname:'u/'+up.uname}
            );
        }

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
    }

    setInterval(render, 1000/60);

    can.style.cursor = 'grab';

    //pan on
    can.addEventListener('mousedown', function(e) {
        drag = true;
        mx = e.clientX;
        my = e.clientY;
        can.style.cursor = 'grabbing';

        if (update_loc) {
            location.x = _round((((mx - can.width / 2)) + origin.x) * invZoom, 2);
            location.y = _round((((my - can.height / 2)) + origin.y) * invZoom, 2);
            update_loc = false;
        }
    })

    //panning
    can.addEventListener('mousemove', function(e) {

        if (drag) {
            const dx = e.clientX - mx, dy = e.clientY - my;

            //invert axis for better feel
            origin.x += -dx;
            origin.y += -dy;
        }

        olx = origin.x;
        oly = origin.y;

        mx = e.clientX;
        my = e.clientY;
    })

    //pan off
    can.addEventListener('mouseup', function(e) {
        drag = false;
        mx = e.clientX;
        my = e.clientY;
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

        if (zoom <= zoomMin) {
            zoom = zoomMin + 0.01;
            return;
        }
        if (zoom >= zoomMax) {
            zoom = zoomMax - 0.01;
            return;
        }

        invZoom = 1 / zoom;

        origin.x += (mx - can.width / 2) * dz;
        origin.y += (my - can.height / 2) * dz;
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