class Car {
  constructor (name, container) {
    this.name = name
    this.container = container
    this.x = 0
    this.y = 0
    this.init()
  }

  rotate (toX, toY) {
    var angleDeg = (Math.atan2(this.y - toY, this.x - toX) * 180) / Math.PI

    this.applyCSS({
      transform: `rotate(${angleDeg}deg)`
    })
  }

  applyCSS (obj) {
    $(`#${this.name}`).css(obj)
  }

  move (toX, toY) {
    this.rotate(toX, toY)
    this.x = toX
    this.y = toY
    setTimeout(() => {
      this.applyCSS({
        left: `${this.x - 40}px`,
        top: `${this.y - 20}px`
      })
    }, 500)
  }

  init () {
    var carEl = $('<div>')
      .attr({
        id: this.name
      })
      .addClass('car')
    $(this.container).append(carEl)
  }
}

$(document).ready(() => {
  var car = new Car('vw', '#canvas')
  $('#canvas')
    .click(e => {
      car.move(e.pageX, e.pageY)
    })
    .dblclick(e => {
      car.rotate(e.pageX, e.pageY)
    })
})
