import GameEngine from "./GameEngine/app.js"

window.addEventListener("load", () => {
    const cvs = document.createElement("canvas");
    const ctx = cvs.getContext("2d");
    document.body.appendChild(cvs);
    const game = new GameEngine(cvs, ctx);
});