class LightSource extends WorldObject {
    constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, isOn = true) {
        super(room, x, y, texture, layer, false);

        this.config = {
            graphicLight: graphicLightConfig,
            diffusedLight: diffusedLightConfig,
            offset: offset
        }
        this.behaviour = {
            flickering: {
                isRunning: false,
                mode: 'hard',
            },
            trembling: {
                isRunning: false,
            }
        }
        this.isOn = false;
        if (isOn) {
            this.turnOn();
        }

        this.room.lightSource.add(this);
        this.behaviour = new LightSourceBehaviourComponent(this, ['HardFlickeringBehaviour', 'TremblingBehaviour', 'HardFlickeringAndTremblingBehaviour']);
        //this.component.hardFlickeringBehavior.start(1,1);
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

    startFlickeringAndTrembling(){
        this.behaviour.hardFlickeringAndTrembling.start();
    }

    stopFlickeringAndTrembling(){
        this.behaviour.hardFlickeringAndTrembling.stop();
    }

    startFlickering(minTime, maxTime, mode = 'hard', minPercentageIntensity = 0.8, maxPercentageIntensity = 1) {
        /*if (!this.behaviour.flickering.isRunning || this.behaviour.flickering.mode!=mode) {
            if (this.behaviour.flickering.isRunning && this.behaviour.flickering.mode != mode) {
                this.stopFlickering();
            }

            this.behaviour.flickering.mode = mode;

            if (this.behaviour.trembling.isRunning && this.behaviour.flickering.mode == 'hard') {
                this.stopTrembling();
            }
            console.log('start flickering...');
            this.behaviour.flickering.isRunning = true;
            var minTime = minTime;
            var maxTime = maxTime;
            var mode = mode;
            var setTimer;

            switch (mode) {
                case 'hard':
                    console.log('start hard flickering');
                    setTimer = (context) => {
                        context.room.time.addEvent({
                            delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                            callback: () => {
                                if (this.behaviour.flickering.isRunning) {
                                    if (this.isOn) this.turnOff();
                                    else if (!this.isOn) this.turnOn();
                                    setTimer(this);
                                }
                            },
                            callbackScope: context,
                            repeat: 0
                        })
                    };
                    break;
                case 'soft':
                    console.log('start soft flickering');
                    setTimer = (context) => {
                        context.room.time.addEvent({
                            delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                            callback: () => {
                                if (this.behaviour.flickering.isRunning) {
                                    var newIntensityPercentage = Math.floor((minPercentageIntensity + Math.random() * (maxPercentageIntensity - minPercentageIntensity)) * 100 + 1) / 100;
                                    this.graphicLight.setIntensity(this.config.graphicLight.intensity * newIntensityPercentage);
                                    this.diffusedLight.setIntensity(this.config.diffusedLight.intensity * newIntensityPercentage);
                                    setTimer(this);
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
        }*/
        this.behaviour.hardFlickering.start();
    }

    stopFlickering(finalState = 'on') {
        /*
        if (this.behaviour.flickering.isRunning) {
            this.behaviour.flickering.isRunning = false;
            if (finalState == 'on') this.turnOn();
            else if (finalState == 'off') this.turnOff();
            this.graphicLight.setIntensity(this.config.graphicLight.intensity);
            this.diffusedLight.setIntensity(this.config.diffusedLight.intensity);
            console.log('stop flickering');
        }*/
        this.behaviour.hardFlickering.stop();
    }

    startTrembling() {
        this.behaviour.trembling.start(...arguments);
    }

    stopTrembling(backToInitialPosition = true) {
        /*
        if (this.behaviour.trembling.isRunning) {
            console.log('stop trembling');
            this.behaviour.trembling.isRunning = false;
            if (backToInitialPosition) this.graphicLight.setPosition(this.x + this.config.offset.x, this.y + this.config.offset.y);
        }*/
        this.behaviour.trembling.stop(backToInitialPosition);
    }




}