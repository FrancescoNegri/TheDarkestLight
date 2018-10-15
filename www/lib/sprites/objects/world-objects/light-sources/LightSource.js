class LightSource extends WorldObject {
    constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, isOn = true) {
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
        this.isFlickering = false;
        this.isTrembling = false;

        this.room.lightSource.add(this);
    }

    turnOn() {
        if (!this.isOn) {
            this.diffusedLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.diffusedLight.radius).setIntensity(this.config.diffusedLight.intensity);
            this.room.lightSource.diffusedLights.push(this.diffusedLight);

            this.graphicLight = this.room.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.graphicLight.radius).setIntensity(this.config.graphicLight.intensity);
            this.room.lightSource.graphicLights.push(this.graphicLight);

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

    startFlickering(minTime, maxTime, mode = 'hard', minPercentageIntensity = 0.8, maxPercentageIntensity = 1) {
        if (!this.isFlickering) {
            if (this.isTrembling && mode== 'hard'){
                this.isTrembling= false;
                this.stopTrembling();
            }
            this.isFlickering = true;
            var minTime = minTime;
            var maxTime = maxTime;
            var mode = mode;
            var setTimer;

            switch (mode) {
                case 'hard':
                    setTimer = (context, callback) => {
                        context.room.time.addEvent({
                            delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                            callback: () => {
                                if (this.isFlickering) {
                                    if (this.isOn) this.turnOff();
                                    else if (!this.isOn) this.turnOn();
                                    setTimer(this, callback);
                                }
                            },
                            callbackScope: context,
                            repeat: 0
                        })
                    };
                    break;
                case 'soft':
                    setTimer = (context, callback) => {
                        context.room.time.addEvent({
                            delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                            callback: () => {
                                if (this.isFlickering) {
                                    var newIntensityPercentage = Math.floor((minPercentageIntensity + Math.random() * (maxPercentageIntensity - minPercentageIntensity))  * 100 + 1) / 100;
                                    this.graphicLight.setIntensity(this.config.graphicLight.intensity * newIntensityPercentage);
                                    this.diffusedLight.setIntensity(this.config.diffusedLight.intensity * newIntensityPercentage);
                                    setTimer(this, callback);
                                }
                            },
                            callbackScope: context,
                            repeat: 0
                        })
                    };
                    break;
            }

            console.log(setTimer);
            setTimer(this);
        }
    }

    stopFlickering(finalState = 'on') {
        if (this.isFlickering) {
            this.isFlickering = false;
            if (finalState == 'on') this.turnOn();
            else if (finalState == 'off') this.turnOff();
            this.graphicLight.setIntensity(this.config.graphicLight.intensity);
            this.diffusedLight.setIntensity(this.config.diffusedLight.intensity);
        }
    }

    startTrembling(minTime, maxTime, xMinOscillation, xMaxOscillation, yMinOscillation = -1, yMaxOscillation = -1, movementOnXAxis = true, movementeOnYAxis = true) {
        if (!this.isTrembling) {
            this.isTrembling = true;
            yMinOscillation = yMinOscillation < 0 ? xMinOscillation : yMinOscillation;
            yMaxOscillation = yMaxOscillation < 0 ? xMaxOscillation : yMaxOscillation;
            var config = {
                minTime: minTime,
                maxTime: maxTime,
                xMinOscillation: xMinOscillation,
                xMaxOscillation: xMaxOscillation,
                yMinOscillation: yMinOscillation,
                yMaxOscillation: yMaxOscillation,
                movementOnXAxis: movementOnXAxis,
                movementeOnYAxis: movementeOnYAxis,
            }
            var setTimer = (context) => {
                context.room.time.addEvent({
                    delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                    callback: () => {
                        if (this.isTrembling) {
                            var xNewOffset = 0;
                            var yNewOffset = 0;
                            if (config.movementOnXAxis) {
                                xNewOffset = Math.floor(Math.random() * (xMaxOscillation - xMinOscillation + 1)) + xMinOscillation;
                                xNewOffset *= Math.round(Math.random()) * 2 - 1;
                            }
                            if (config.movementeOnYAxis) {
                                yNewOffset = Math.floor(Math.random() * yMaxOscillation - yMinOscillation + 1) + yMinOscillation;
                                yNewOffset *= Math.round(Math.random()) * 2 - 1;
                            }
                            this.graphicLight.setPosition(this.x + xNewOffset, this.y + yNewOffset);
                            setTimer(this);
                        }
                    },
                    callbackScope: context,
                    repeat: 0
                })
            }
            setTimer(this);
        }
    }

    stopTrembling(backToInitialPosition = true) {
        if (this.isTrembling) {
            this.isTrembling = false;
            if (backToInitialPosition) this.graphicLight.setPosition(this.x + this.config.offset.x, this.y + this.config.offset.y);
        }
    }




}