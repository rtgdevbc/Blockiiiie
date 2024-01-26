setTimeout(()=>{
    console.log("1st setTimeout of 1000ms");
    setTimeout(()=>{
        console.log("2nd setTimeout of 900ms");
        setTimeout(()=>{
            console.log("3rd setTimeout of 800ms");
            setTimeout(()=>{
                console.log("4th setTimeout of 700ms");
                setTimeout(()=>{
                    console.log("5th setTimeout of 600ms");
                    setTimeout(()=>{
                        console.log("6th setTimeout of 500ms");
                        setTimeout(()=>{
                            console.log("7th setTimeout of 400ms");
                            setTimeout(()=>{
                                console.log("8th setTimeout of 300ms");
                                setTimeout(()=>{
                                    console.log("9th setTimeout of 200ms");
                                    setTimeout(()=>{
                                        console.log("10th setTimeout of 100ms");
                                        setTimeout(()=>{
                                            console.log("0th setTimeout of 0ms");
                                        }, 0);
                                    }, 100);
                                }, 200);
                            }, 300);
                        }, 400);
                    }, 500);
                }, 600);
            }, 700);
        }, 800);
    }, 900);
}, 1000);

/**
 *  output
 *  1st setTimeout of 1000ms
    2nd setTimeout of 900ms
    3rd setTimeout of 800ms
    4th setTimeout of 700ms
    5th setTimeout of 600ms
    6th setTimeout of 500ms
    7th setTimeout of 400ms
    8th setTimeout of 300ms
    9th setTimeout of 200ms
    10th setTimeout of 100ms
    0th setTimeout of 0ms
 */