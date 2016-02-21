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
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map