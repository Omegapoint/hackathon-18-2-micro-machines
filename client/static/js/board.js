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

    isMovable(rect) {
        let movable = true
        
        this.objects.forEach(o => {
            const rect1 = {
                left: o.x,
                right: o.x + 10,
                bottom: o.y,
                top: o.y + 10,
            }
            if (this.overlaps(rect1, rect)) {
                movable = false
            }
        })

        return movable
    }

    overlaps(r1, r2) {
        return !(r2.left > r1.right || 
                 r2.right < r1.left || 
                 r2.top > r1.bottom ||
                 r2.bottom < r1.top);
    }
    // getBoardSize() {
    //     const canvas = document.querySelector('canvas')
    //     const width = canvas.getAttribute('width')
    //     const height = canvas.getAttribute('height')
    //     return [width][height]
    // }
}
