function startGame () {
    var app = new PIXI.Application({
        width: 800,         // default: 800
        height: 600,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    });
    app.renderer.backgroundColor = 0x061639;
    var body = document.getElementById("body");
    document.getElementById("button").style.display = "none"
    body.appendChild(app.view);
};