/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(firstPlanetOrbit, firstPlanetRotation, secondPlanetRotation, secondPlanetOrbit, thirdPlanetRotation, thirdPlanetOrbit, fourthPlanetRotation, fourthPlanetOrbit, fifthPlanetRotation, fifthPlanetOrbit) {
            this.zoom = false;
            this.firstPlanetOrbit = firstPlanetOrbit;
            this.firstPlanetRotation = firstPlanetRotation;
            this.secondPlanetRotation = secondPlanetRotation;
            this.secondPlanetOrbit = secondPlanetOrbit;
            this.thirdPlanetRotation = thirdPlanetRotation;
            this.thirdPlanetOrbit = thirdPlanetOrbit;
            this.fourthPlanetRotation = fourthPlanetRotation;
            this.fourthPlanetOrbit = fourthPlanetOrbit;
            this.fifthPlanetRotation = fifthPlanetRotation;
            this.fifthPlanetOrbit = fifthPlanetOrbit;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.zoomIn = function () {
            this.zoom = true;
        };
        Control.prototype.zoomOut = function () {
            this.zoom = false;
        };
        Control.prototype.controlZoom = function () {
            if (this.zoom) {
                thirdPlanet.updateMatrix();
                var vector = new THREE.Vector3();
                vector.setFromMatrixPosition(thirdPlanet.matrixWorld);
                camera.position.set(vector.x, vector.y + 5, vector.z - 16);
            }
            else {
                camera.position.set(0.6, 60, -175.5);
                console.log("false false");
            }
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map