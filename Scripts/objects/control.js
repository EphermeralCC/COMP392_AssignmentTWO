/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(firstPlanetOrbit, firstPlanetRotation, secondPlanetRotation, secondPlanetOrbit, thirdPlanetRotation, thirdPlanetOrbit, fourthPlanetRotation, fourthPlanetOrbit, fifthPlanetRotation, fifthPlanetOrbit) {
            this.firstPlanetOrbit = firstPlanetOrbit;
            this.firstPlanetRotation = firstPlanetRotation;
            this.secondPlanetRotation = secondPlanetRotation;
            this.secondPlanetOrbit = secondPlanetOrbit;
            this.thirdPlanetRotation = thirdPlanetRotation;
            this.thirdPlanetOrbit = thirdPlanetOrbit;
            this.fourthPlanetRotation = fourthPlanetRotation;
            this.fourthPlanetOrbit = fourthPlanetOrbit;
            this.fifthPlanetRotation = fourthPlanetRotation;
            this.fifthPlanetOrbit = fifthPlanetOrbit;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.zoomIn = function () {
            camera.position.set(thirdPlanet.position.x, thirdPlanet.position.y + 10, thirdPlanet.position.z - 10);
            // camera.position.x = thirdPlanet.position.x;
            // camera.position.z = thirdPlanet.position.z;
            // camera.lookAt(thirdPlanet.position)
            console.log(thirdPlanet.position.x);
            console.log(thirdPlanet.position.z);
        };
        Control.prototype.zoomOut = function () {
            camera.position.x = 0.6;
            camera.position.y = 60;
            camera.position.z = -175.5;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map