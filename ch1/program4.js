var Plane = function () {
    this.blood = 100
    this.attackLevel = 1
    this.defenseLevel = 1
}

var plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

var planeInstance = Object.create(plane)
console.log('blood: ' + clonePlane.blood)
console.log('attackLevel: ' + clonePlane.attackLevel)
console.log('defenseLevel: ' + clonePlane.defenseLevel)
