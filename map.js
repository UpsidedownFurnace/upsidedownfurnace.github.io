(function() {
    const MAP_W = 10000, MAP_H = 10000;
    const zoomMin = 0.15, zoomMax = 10;
    const can = document.querySelector('#c');
    const cPosDisplay = document.querySelector('.cursor-pos');

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
            i++;
            if (i == 0)
                ctx.moveTo(p.x + x, p.y + y);
            else
                ctx.lineTo(p.x + x, p.y + y);
        }
    }

    function renderLocationPoint(x, y, hover, dat) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();

        if (hover) {
            //TODO: display info above name
            const triPoints = [
                [0,0],
                [5,0],
                [2.5, 5]
            ];

            var name_len = ctx.measureText(dat.uname || '').width;
            const h = 20;
            ctx.font = '15px Arial';
            const sPadding = 5, ttop = 2;
            name_len += sPadding * 2;
            const aDist = 3; //distance above point

            ctx.fillStyle = '#fff';
            const _x = x - name_len / 2, _y = y - (h + aDist + 5);
            ctx.fillRect(_x, _y, name_len, h);
            polyDraw(_x + (name_len / 2 - 2.5), _y + h, triPoints);
            ctx.fill();
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
            renderLocationPoint(
                ((location.x * zoom - origin.x) + can.width / 2), 
                ((location.y * zoom - origin.y) + can.height / 2), true, {uname:'bob'}
            );
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
    })
})();