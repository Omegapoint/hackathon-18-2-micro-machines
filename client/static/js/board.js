class Board {
    constructor() {
        this.objects = [{
            x: 10,
            y: 10,
        }, {
            x: 20,
            y: 10,
        }, {
            x: 200,
            y: 290,
        }, {
            x: 300,
            y: 800,
        }, {
            x: 1000,
            y: 500,
        }]
        this.cars = []
    }

    getObjects() {
        return this.objects
    }
    // getBoardSize() {
    //     const canvas = document.querySelector('canvas')
    //     const width = canvas.getAttribute('width')
    //     const height = canvas.getAttribute('height')
    //     return [width][height]
    // }
}
