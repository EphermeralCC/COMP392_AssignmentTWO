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
       
    }
}
