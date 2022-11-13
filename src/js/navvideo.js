const mon_element = document.getElementById('video1')
var state;

function mobilecheck() {
    return (typeof window.orientation !== "undefined") ||
        (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const mobile = mobilecheck()

window.addEventListener("scroll", function () {
    if (mobile == false) {
        var variation = mon_element.getBoundingClientRect()
        variation = (variation.top / window.innerHeight) * -1

        if (state !== null) {
            clearTimeout(state);
            console.log(Math.trunc(variation))
            console.log(variation)
        }

        state = setTimeout(function () {
            if (variation - Math.trunc(variation) > 0.2 && variation - Math.trunc(variation) < 0.5) {
                /* monter */
                window.scroll({
                    top: window.innerHeight * (Math.trunc(variation) + 1),
                    left: 100,
                    behavior: 'smooth'
                });
            } else if (variation - Math.trunc(variation) > 0 && variation - Math.trunc(variation) < 0.2) {
                /* rester */
                window.scroll({
                    top: window.innerHeight * (Math.trunc(variation)),
                    left: 100,
                    behavior: 'smooth'
                });
            } else if (variation - Math.trunc(variation) < 1 && variation - Math.trunc(variation) > 0.8) {
                /* rester */
                window.scroll({
                    top: window.innerHeight * (Math.trunc(variation) + 1),
                    left: 100,
                    behavior: 'smooth'
                });
            } else {
                /* descendre */
                window.scroll({
                    top: window.innerHeight * (Math.trunc(variation)),
                    left: 100,
                    behavior: 'smooth'
                });
            }

        }, 50);
    }
}, false);