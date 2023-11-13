/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows nested loops in action
*/

// variables
let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter1 = 0
    loopCounter2 = 0
    sprite = game.createSprite(0, 0)
    basic.pause(500)

    while (loopCounter1 <= 3) {
      while (loopCounter2 <= 4) {
        sprite.move(1)
        loopCounter2 = loopCounter2 + 1
        basic.pause(500)
      }
      loopCounter1++
      loopCounter2 = 0
      sprite.turn(Direction.Right, 90)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
