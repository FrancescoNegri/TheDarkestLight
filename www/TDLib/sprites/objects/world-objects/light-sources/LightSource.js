class LightSource extends WorldObject {
    /**
     * constructor of the class
     * @param {Room} room - Room in which will be created the LightSource.
     * @param {number} x - X position of the sprite.
     * @param {number} y - Y position of the sprite.
     * @param {string} texture - Name of the sprite for the LightSource.
     * @param {string} layer - Name of the Layer in which will be put the LightSource.
     * @param {Object} graphicLightConfig - Configuration of the graphic light of the LightSource.
     * @param {number} graphicLightConfig.intensity - Intensity of the graphic light.
     * @param {number} graphicLightConfig.radius - Radius of the graphic light.
     * @param {Object} diffusedLightConfig - Configuration of the diffused light of the LightSource.
     * @param {number} diffusedLightConfig.intensity - Intensity of the diffused light.
     * @param {number} diffusedLightConfig.radius - Radius of the diffused light.
     * @param {Object} offset - Offset of the graphic light respect the center of the sprite.
     * @param {number} offset.x - X offset.
     * @param {number} offset.y - Y offset.
     * @param {Object[]} allowedBehaviours - List of names of the allowed Behaviour for this light
     * @param {boolean} [isOn=true] - Light created as switched on or off.
     */
    constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours, isOn = true) {
        super(room, x, y, texture, layer, false);
        this.config = {
            graphicLight: graphicLightConfig,
            diffusedLight: diffusedLightConfig,
            offset: offset
        }

        this.isOn = false;
        if (isOn) {
            this.turnOn();
        }

        this.room.lightSource.add(this);
        this.behaviour = new LightSourceBehaviourComponent(this, allowedBehaviours);
    }

    /**
     * Turn on the lights of the LightSource by creating new ones.
     */
    turnOn() {
        if (!this.isOn) {
            if (this.config.diffusedLight !== null) {
                this.diffusedLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.diffusedLight.radius).setIntensity(this.config.diffusedLight.intensity);
                this.room.lightSource.diffusedLights.push(this.diffusedLight);
            }

            if (this.config.graphicLight !== null) {
                this.graphicLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.graphicLight.radius).setIntensity(this.config.graphicLight.intensity);
                this.room.lightSource.graphicLights.push(this.graphicLight);
            }

            this.isOn = true;
        }
    }

    /**
     * Turn off the lights of the LightSource by deleting the existing ones.
     * @param {boolean} [stopBehaviours=true] - If true, turning off the light stops all the behaviours.
     */
    turnOff(stopBehaviours = true) {

        if (stopBehaviours) this.behaviour.stopAllBehaviours();
        if (this.isOn) {
            var diffusedLightindex = this.room.lightSource.diffusedLights.indexOf(this.diffusedLight);
            if (diffusedLightindex > -1) {
                this.room.lightSource.diffusedLights.splice(diffusedLightindex, 1);
                this.room.lights.removeLight(this.diffusedLight);
            }

            var graphicLightindex = this.room.lightSource.graphicLights.indexOf(this.graphicLight);
            if (graphicLightindex > -1) {
                this.room.lightSource.graphicLights.splice(graphicLightindex, 1);
                this.room.lights.removeLight(this.graphicLight);
            }


            this.isOn = false;
        }
    }

    /**
     * Start the flickering behaviour if it's an allowed behavior.
     * @param {number} [minTime=10] - Minimum time gap between two switch in milliseconds.
     * @param {number} [maxTime=400] - Maximum time gap between two switch in milliseconds.
     */
    startFlickering(minTime, maxTime) {
        this.behaviour.hardFlickering.start(...arguments);
    }

    /**
     * Stop of the flickering effect.
     * @param {string} [finalState='on'] - (on/off) Set the light switched on or off at the end of the effect. 
     */
    stopFlickering(finalState) {
        this.behaviour.hardFlickering.stop(...arguments);
    }

    /**
     * Start the trembling behaviour if it's an allowed behavior.
     * @param {number} [minTime=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTime=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    startTrembling(minTime, maxTime, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        this.behaviour.trembling.start(...arguments);
    }
    
    /**
     * Stop the trembling behaviour. 
     * @param {boolean} [backToInitialPosition=true] - Back to the sarting position of the light at the end of the effect.
     */
    stopTrembling(backToInitialPosition) {
        this.behaviour.trembling.stop(...arguments);
    }

    /**
     * Start soft flickering behavior (only flicker the intensity) if it's an allowed behavior.
     * @param {number} [minTime=10] - Minimum time gap between two flickers in milliseconds.
     * @param {number} [maxTime=100] - Maximum time gap between two flickers in milliseconds.
     * @param {number} [minPercentageIntensity=0.8] - Minimum light intensity reacheable during the effect. Value between 0 and 1. 
     * @param {number} [maxPercentageIntensity=1] - Minimum light intensity reacheable during the effect. Value between 0 and 1.
     */
    startSoftFlickering(minTime, maxTime, minPercentageIntensity, maxPercentageIntensity) {
        this.behaviour.softFlickering.start(...arguments);
    }

    /**
     * Stop flickering the intenisity of the light.
     * @param {boolean} [backToInitialIntensity=true] - Back to the initial light position before the effect.
     */
    stopSoftFlickering(backToInitialIntensity) {
        this.behaviour.softFlickering.stop(...arguments);
    }

    /**
     * Start the soft flickering and the trembling behaviours in the same time if it's an allowed behavior.
     * @param {number} [minTimeSoftFlickering=10] - Minimum time gap between two flickers in milliseconds.
     * @param {number} [maxTimeSoftFlickering=100] - Maximum time gap between two flickers in milliseconds.
     * @param {number} [minPercentageIntensity=0.8] - Minimum light intensity reacheable during the effect. Value between 0 and 1. 
     * @param {number} [maxPercentageIntensity=1] - Minimum light intensity reacheable during the effect. Value between 0 and 1.
     * @param {number} [minTimeTrembling=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTimeTrembling=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    startSoftFlickeringAndTrembling(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        this.behaviour.softFlickeringAndTrembling.start(...arguments);
    }

    /**
     * Stop the soft flickering and trembling behaviour.
     * @param {boolean} [backToInitialIntensity=true] - Back to the initial light position before the effect.
     * @param {boolean} [backToInitialPosition=true] - Back to the sarting position of the light at the end of the effect.
     */
    stopSoftFlickeringAndTrembling(backToInitialIntensity, backToInitialPosition) {
        this.behaviour.softFlickeringAndTrembling.stop(...arguments);
    }

    /**
     * Start the hard flickering and the trembling behaviours in the same time if it's an allowed behavior.
     * @param {number} [minTimeHardFlickering=10] - Minimum time gap between two switch in milliseconds.
     * @param {number} [maxTimeHardFlickering=400] - Maximum time gap between two switch in milliseconds.
     * @param {number} [minTimeTrembling=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTimeTrembling=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    startHardFlickeringAndTrembling(minTimeHardFlickering, maxTimeHardFlickering, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        this.behaviour.hardFlickeringAndTrembling.start(...arguments);
    }

    /**
     * Stop the hard flickering and trembling behaviour.
     * @param {string} finalState - (on/off) Set the light switched on or off at the end of the effect.
     * @param {boolean} [backToInitialPosition=true] - Back to the sarting position of the light at the end of the effect.
     */
    stopHardFlickeringAndTrembling(finalState, backToInitialPosition) {
        this.behaviour.hardFlickeringAndTrembling.stop(...arguments);
    }




}