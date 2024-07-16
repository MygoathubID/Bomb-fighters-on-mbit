// A+B 버튼은 게임이 종료됬을때 누르면 다시 시작됩니다.
input.onButtonPressed(Button.A, function () {
    김폭제.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    김폭제.change(LedSpriteProperty.X, 1)
})
let 김폭제: game.LedSprite = null
game.setLife(3)
basic.showString("1")
basic.showString("2")
basic.showString("3")
basic.showString("GO")
김폭제 = game.createSprite(2, 4)
let sprite = game.createSprite(randint(-4, 4), -4)
basic.forever(function () {
    while (game.isRunning()) {
        basic.pause(1000)
        sprite.change(LedSpriteProperty.Y, 2)
        if (sprite.get(LedSpriteProperty.Y) == 4) {
            if (sprite.isTouching(김폭제)) {
                music.play(music.stringPlayable("C5 A - - - - - - ", 500), music.PlaybackMode.InBackground)
                game.addScore(randint(10, 20))
            } else {
                music.play(music.stringPlayable("D - - - - - - - ", 500), music.PlaybackMode.InBackground)
                game.removeLife(1)
            }
            sprite.set(LedSpriteProperty.X, randint(-4, 4))
            sprite.set(LedSpriteProperty.Y, -4)
        }
    }
})
