class TDLBehaviours{
    costructor(component){
        this.component=component;
    }

    start(callback){
        if (this.component.currentBehaviour==this.name){
            callback();
        }
    }

    stop(){

    }
}