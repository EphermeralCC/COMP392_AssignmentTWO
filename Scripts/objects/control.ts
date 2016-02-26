/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public firstPlanetRotation: number;
        public firstPlanetOrbit: number;

        public secondPlanetRotation: number;
        public secondPlanetOrbit: number;

        public thirdPlanetRotation: number;
        public thirdPlanetOrbit: number;

        public fourthPlanetRotation: number;
        public fourthPlanetOrbit: number;

        public fifthPlanetRotation: number;
        public fifthPlanetOrbit: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(firstPlanetOrbit: number, firstPlanetRotation: number, secondPlanetRotation: number, secondPlanetOrbit: number,
            thirdPlanetRotation: number, thirdPlanetOrbit: number, fourthPlanetRotation: number, fourthPlanetOrbit: number, fifthPlanetRotation: number,
            fifthPlanetOrbit: number) {
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
        public zoomIn(): void {
            camera.position.set(thirdPlanet.position.x, thirdPlanet.position.y + 10, 
            thirdPlanet.position.z -10);
            // camera.position.x = thirdPlanet.position.x;
            // camera.position.z = thirdPlanet.position.z;
            // camera.lookAt(thirdPlanet.position)
            console.log(thirdPlanet.position.x);
            console.log(thirdPlanet.position.z);
        }

        public zoomOut(): void {
            camera.position.x = 0.6;
            camera.position.y = 60;
            camera.position.z = -175.5;
        }
    }
}
