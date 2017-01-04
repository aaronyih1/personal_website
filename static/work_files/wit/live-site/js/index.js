// canvas settings
var viewWidth = 2000,
    viewHeight = 2000,
    canvas = document.getElementById("canvas"),
    ctx,
    timeStep = (1/60),
    time = 0;

var mousePosition = [0, 0];

var vertices = [],
    indices = [],
    fragments = [];

window.onload = function() {
    initCanvas();
    createTriangles();
    transitionIn();

    window.addEventListener('mousemove', function(e) {
        var r = canvas.getBoundingClientRect();

        mousePosition[0] = e.clientX - r.left;
        mousePosition[1] = e.clientY - r.top;
    });

    requestAnimationFrame(loop);
};

function initCanvas() {
    canvas.width = viewWidth;
    canvas.height = viewHeight;
    ctx = canvas.getContext('2d');
}

function createTriangles() {
    for (var i = 1; i < 70; i++) {
        for (var j = 1; j < 12; j++) {
            vertices.push([
                i * 100, //+ randomRange(-10, 10),
                j * 100 //+ randomRange(-10, 10)
            ]);
        }
    }

    indices = Delaunay.triangulate(vertices);

    for (var i = 0; i < indices.length; i += 3) {
        fragments.push(new Fragment(
            vertices[indices[i + 0]],
            vertices[indices[i + 1]],
            vertices[indices[i + 2]]
        ));
    }
}

function transitionIn() {
    var tl = new TimelineMax();

    fragments.forEach(function(f) {
         tl.add(f.restore(), Math.random());
    });
}

function update() {
    fragments.forEach(function(f) {
        f.update();
    });
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    fragments.forEach(function(f) {
        f.draw();
    });
}

function loop() {
    update();
    draw();
    time += timeStep;
    requestAnimationFrame(loop);
}

function Fragment(v0, v1, v2) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.tri = [v0, v1, v2];

    this.fillOffsetX1 = 0;
    this.fillOffsetY1 = 0;
    this.fillOffsetX2 = 0;
    this.fillOffsetY2 = 0;

    this.mouseOver = false;
    this.visible = true;

    this.setColors();
    this.calculateDeltas();
}
Fragment.prototype = {
    setColors:function() {
        var h = 40,
            s = '0%',
            l1 = ~~(randomRange(10, 30)) + '%',
            l2 = ~~(randomRange(30, 50)) + '%';

        this.fill =   'hsl(' + [h,s,l1].join(',') + ')';
        this.stroke = 'hsl(' + [h,s,l2].join(',') + ')';
        /*var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        this.fill = 'white';
        this.stroke = 'white'; */
    },

    calculateDeltas:function() {
        this.fillOffsetX1 = this.v1[0] - this.v0[0];
        this.fillOffsetY1 = this.v1[1] - this.v0[1];
        this.fillOffsetX2 = this.v2[0] - this.v0[0];
        this.fillOffsetY2 = this.v2[1] - this.v0[1];
    },
    update:function() {
        this.mouseOver = Delaunay.contains(this.tri, mousePosition);

        if (this.mouseOver) {
            this.visible = false;
        }
        else if (this.visible === false && !TweenMax.isTweening(this)) {
            this.restore();
            this.visible = true;
        }
    },
    draw:function() {
        if (this.visible === false) return;

        ctx.strokeStyle = this.fill;
        ctx.fillStyle = this.stroke;

        ctx.beginPath();
        ctx.moveTo(this.v0[0], this.v0[1]);
        ctx.lineTo(this.v0[0] + this.fillOffsetX1, this.v0[1] + this.fillOffsetY1);
        ctx.lineTo(this.v0[0] + this.fillOffsetX2, this.v0[1] + this.fillOffsetY2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    },
    restore:function() {
        var tl = new TimelineMax();

        tl.from(this, 0.5, {
            fillOffsetX1:0,
            fillOffsetY1:0,
            ease:Cubic.easeIn
        });
        tl.from(this, 0.5, {
            fillOffsetX2:0,
            fillOffsetY2:0,
            ease:Cubic.easeIn
        });

        return tl;
    }
};

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}