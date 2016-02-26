//The Source file name: control.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/26/2016
//Program description: Manages the dat.ui to allow for the zoom and rotation of the planets
//Revision History: 
//      - Added Zoom Methods 02/26/2016
//      - Added Planet rotation or orbit 02/20/2016

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
        public zoom: boolean = false;
        
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

            this.fifthPlanetRotation = fifthPlanetRotation;
            this.fifthPlanetOrbit = fifthPlanetOrbit;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        
        public zoomIn(): void {
            this.zoom = true;
        }

        public zoomOut(): void {
            this.zoom = false;
        }

        public controlZoom(): void {

            if (this.zoom) {
                thirdPlanet.updateMatrix();
                var vector = new THREE.Vector3();
                vector.setFromMatrixPosition(thirdPlanet.matrixWorld);
                camera.position.set(vector.x, vector.y + 5, vector.z - 16);
            } else {
                camera.position.set(0.6, 60, -175.5);
                console.log("false false");
            }
        }


    }
}
