class Mobile {
    constructor(name, OSver, processor, screen, screenDia){
        this.mobileName = name;
        this.OSVersion = OSver;
        this.mobileProcessor = processor;
        this.screenType = screen;
        this.screenDim = {
            dim : screenDia
        };
    };
    highProcessor(newProcessor){
        this.mobileProcessor = newProcessor;
    };
    changeDisplay(newScreen){
        this.screenType = newScreen;
    };
    
}
export default Mobile;