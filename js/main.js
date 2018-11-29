function startGame () {
    application ();
    back ()
}

function application () {
    var app = new PIXI.Application({
        width: 900,         // default: 800
        height: 600,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    });

    var body = document.getElementById("body");
    document.getElementById("button").style.display = "none";
    body.appendChild(app.view);
}

function back (){
    var dungeonTexture = TextureCache["../images/background.png"];
    dungeon = new Sprite(dungeonTexture);
    app.stage.addChild(dungeon);
}