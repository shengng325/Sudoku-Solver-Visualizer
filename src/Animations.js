'use strict';

const Animations = {
    interval: 1,
    skip: false,
    status: false,
    setInterval: function(sliderValue) {
        this.interval = sliderValue;
    },
    pause: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, this.interval);
        });
    },
    stop: async function(){
        this.status = false;
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        });
    },
}

export { Animations };