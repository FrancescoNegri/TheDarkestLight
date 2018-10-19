class LightSource extends WorldObject {
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

    turnOff() {
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

    startFlickering(minTime, maxTime) {
        this.behaviour.hardFlickering.start(...arguments);
    }
    stopFlickering(finalState) {
        this.behaviour.hardFlickering.stop(...arguments);
    }

    /**
     * Start the trembling behaviour.
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
    stopTrembling(backToInitialPosition) {
        this.behaviour.trembling.stop(...arguments);
    }

    startSoftFlickering(minTime, maxTime, minPercentageIntensity, maxPercentageIntensity) {
        this.behaviour.softFlickering.start(...arguments);
    }
    stopSoftFlickering(backToInitialIntensity) {
        this.behaviour.softFlickering.stop(...arguments);
    }

    startSoftFlickeringAndTrembling(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        this.behaviour.softFlickeringAndTrembling.start(...arguments);
    }
    stopSoftFlickeringAndTrembling(backToInitialIntensity, backToInitialPosition) {
        this.behaviour.softFlickeringAndTrembling.stop(...arguments);
    }

    startHardFlickeringAndTrembling(minTimeHardFlickering, maxTimeHardFlickering, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        this.behaviour.hardFlickeringAndTrembling.start(...arguments);
    }
    stopHardFlickeringAndTrembling(finalState, backToInitialPosition) {
        this.behaviour.hardFlickeringAndTrembling.stop(...arguments);
    }




}