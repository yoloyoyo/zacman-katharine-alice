// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020102020202020202020202020202020202020202020202020202020202020202020204040402020402040404020202020202040302020204020203040202020202020402020404040402020402020202020202020202020202020202020202020202040404040303040204020202020202020202020403030402020202020202020202040204040404040404020202020202020202020202020202020202020202020402020404040402020402020202020204030202040202020304020202020202040404020402020404040202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 . . 2 . 2 2 2 . . . 
. . . 2 . . . . 2 . . . 2 . . . 
. . . 2 . . 2 2 2 2 . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 . . 2 . 2 . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . 2 . 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . 2 2 2 2 . . 2 . . . 
. . . 2 . . . 2 . . . . 2 . . . 
. . . 2 2 2 . 2 . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tileDarkGrass3,myTiles.tile3,sprites.dungeon.floorLight5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
