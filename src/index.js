import "./styles.css";

import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";
import confetti from "canvas-confetti";

const scContainer = document.getElementById("js--sc--container");
const sc = new ScratchCard("#js--sc--container", {
    scratchType: SCRATCH_TYPE.CIRCLE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: 300,
    imageForwardSrc:
        "https://i.imgur.com/IC1KpJp.jpg",
    htmlBackground: '' +
        '   <div class="h1 text-center m-5">XXX flyers ont été scannés à date !</div>',
    clearZoneRadius: 30,
    percentToFinish: 30, // When the percent exceeds 50 on touchend event the callback will be exec.
    callback: function () {
        confetti({
            particleCount: 150,
            spread: 60
        });
        stop();
    }
});

// ScratchCard methods
sc.clear(); // Clear the scratch zone


sc.init().then(() => {
    sc.canvas.addEventListener("scratch.move", () => {
        sc.getPercent().toFixed(2);
    })
})
