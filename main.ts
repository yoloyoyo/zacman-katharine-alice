namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
}
function createGhost () {
    Ghost = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f . 1 1 1 1 f . . . . . . 
        . . . 1 f 1 1 1 f 1 . . . . . . 
        . . . 1 1 f 1 f 1 1 1 . . . . 1 
        . . 1 1 1 1 1 1 1 1 1 1 . 1 1 1 
        . . 1 1 f 1 1 1 f 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 f 1 1 1 1 1 f 1 1 1 1 . . 
        . . 1 1 f f f f f 1 1 1 1 1 . . 
        . . . 1 1 1 1 3 3 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Ghost.follow(Zacman, randint(30, 60))
    scene.cameraFollowSprite(Zacman)
    tiles.placeOnRandomTile(Ghost, assets.tile`myTile1`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite, otherSprite) {
    canEatGhost = true
    otherSprite.destroy()
    pause(5000)
    canEatGhost = false
})
function createFood () {
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(pizza, sprites.castle.tileDarkGrass3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (canEatGhost == false) {
        game.over(false)
    } else {
        otherSprite.destroy()
    }
})
let star: Sprite = null
let pizza: Sprite = null
let canEatGhost = false
let Ghost: Sprite = null
let Zacman: Sprite = null
Zacman = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Zacman, 150, 150)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Zacman, assets.tile`myTile`)
for (let index = 0; index < 20; index++) {
    createFood()
}
for (let index = 0; index < 4; index++) {
    createGhost()
}
game.onUpdate(function () {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        game.over(true)
    }
})
forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
game.onUpdateInterval(20000, function () {
    star = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . . 3 1 1 1 1 1 1 1 1 3 . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 3 3 1 1 2 . . . . 
        . . . . 3 3 3 2 2 2 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.PowerUp)
    tiles.placeOnRandomTile(star, sprites.castle.tileDarkGrass3)
})
