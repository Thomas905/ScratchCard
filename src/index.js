import "./styles.css";

import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";

const scContainer = document.getElementById("js--sc--container");
const sc = new ScratchCard("#js--sc--container", {
    scratchType: SCRATCH_TYPE.CIRCLE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: 300,
    imageForwardSrc:
        "https://i.imgur.com/rgvJWfO.jpg",
    htmlBackground: '' +
        '<div class="sc__html-background">' +
        '   <div class="sc__html-background__title">Bravo !</div>' +
        '   <div class="sc__html-background__subtitle">Votre agence a scanné 100 codes</div><img src="../dist/mjc.jpg" alt="">' +
        '</div>',
    clearZoneRadius: 30,
    percentToFinish: 30, // When the percent exceeds 50 on touchend event the callback will be exec.
    callback: function () {
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