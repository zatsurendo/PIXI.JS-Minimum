import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
document.body.appendChild(app.view);

const aliens = [];
const totalDudes = 256;

const background = PIXI.Sprite.from('./assets/images/backgrounds/iP4_BGtile.jpg');
const background2 = PIXI.Sprite.from('./assets/images/backgrounds/iP4_BGtile.jpg');
const foreground = PIXI.Sprite.from('./assets/images/backgrounds/iP4_ground.png');
const foreground2 = PIXI.Sprite.from('./assets/images/backgrounds/iP4_ground.png');

foreground.anchor.set(0, 0.7);
foreground.position.y = app.screen.height;
foreground2.anchor.set(0, 0.7);
foreground2.position.y = app.screen.height;

const dude = PIXI.Sprite.from('./assets/images/sprites/alphonse-sm.png');

dude.anchor.set(0.5);
dude.scale.set(0.8);
dude.x = app.screen.width * 0.7;
dude.y = app.screen.height * 0.7;
dude.counter = 0;

aliens.push(dude);
app.stage.addChild(background, background2, dude, foreground, foreground2);
let position = 0;

app.ticker.add((delta) => {
    console.log(delta);
    console.log(app.ticker.FPS);
    position += 10;
    background.x = -(position * 0.6);
    background.x %= 1286 * 2;
    if (background.x < 0) {
        background.x += 1286 * 2;
    }
    background.x -= 1286;

    background2.x = -(position * 0.6) + 1286;
    background2.x %= 1286 * 2;
    if (background2.x < 0) {
        background2.x += 1286 * 2;
    }
    background2.x -= 1286;

    foreground.x = -position;
    foreground.x %= 1286 * 2;
    if (foreground.x < 0) {
        foreground.x += 1286 * 2;
    }
    foreground.x -= 1286;

    foreground2.x = -position + 1286;
    foreground2.x %= 1286 * 2;
    if (foreground2.x < 0) {
        foreground2.x += 1286 * 2;
    }
    foreground2.x -= 1286;
   

    for (let i = 0; i < aliens.length; i++) {
        const dude = aliens[i];
        dude.counter += 2.3;
        if (dude.counter > 360) dude.counter = 0;
        dude.y = (app.screen.height * 0.6) + ((Math.sin(dude.counter * Math.PI / 180)) * 100); 
    }
});

