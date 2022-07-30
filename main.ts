controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    info.changeLifeBy(1)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f 6 6 6 6 f 8 f . . . 
    . . . f f 6 6 6 6 f 8 8 8 f . . 
    . . . f 6 6 6 f f 6 6 6 6 f . . 
    . . . f f f f 6 6 8 8 8 8 6 f . 
    . . . f 6 8 8 8 f f f f 6 8 f . 
    . . f f f f f f f 6 6 6 f f f . 
    . . f f 6 9 9 6 b f 9 9 6 6 f . 
    . . f 6 6 9 d 9 1 f d d 6 f . . 
    . . . f 6 6 6 9 d d d d f . . . 
    . . . . f f 6 6 9 9 9 6 f . . . 
    . . . . . 9 d d 6 8 8 8 f . . . 
    . . . . . 6 d d 6 8 8 8 f . . . 
    . . . . . f 6 6 f 7 7 7 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
info.setLife(4)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
