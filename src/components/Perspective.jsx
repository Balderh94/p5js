import React from 'react'
import Sketch from "react-p5";

let dis = 50;
function Perspective() {
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(480, 480).parent(canvasParentRef);   
            p5.frameRate(60);

        };

        const draw = (p5) => {
              p5.background(p5.color(255, 0, 0));
              p5.line(0, 0, p5.mouseX - dis, p5.mouseY - dis);
              p5.line(p5.width, 0, p5.mouseX + dis, p5.mouseY - dis);
              p5.line(0, p5.height, p5.mouseX - dis, p5.mouseY + dis);
              p5.line(p5.width, p5.height, p5.mouseX + dis, p5.mouseY + dis);
              p5.line(p5.mouseX - dis, p5.mouseY - dis, p5.mouseX + dis, p5.mouseY - dis);
              p5.line(p5.mouseX - dis, p5.mouseY - dis, p5.mouseX - dis, p5.mouseY + dis);
              p5.line(p5.mouseX - dis, p5.mouseY + dis, p5.mouseX + dis, p5.mouseY + dis);
              p5.line(p5.mouseX + dis, p5.mouseY + dis, p5.mouseX + dis, p5.mouseY - dis);

              p5.fill(p5.color(150, 182, 0));

              let circleX = p5.width / 2;
              if (p5.mouseX < p5.width / 2) {
                  circleX = p5.width / 2 + p5.width / 2 - p5.mouseX;
              }
              if (p5.mouseX > p5.width / 2) {
                  circleX = p5.width / 2 - (p5.mouseX - p5.width / 2);
              }

              let circleY = p5.height / 2;
              if (p5.mouseY < p5.height / 2) {
                  circleY = p5.height / 2 + p5.height / 2 - p5.mouseY;
              }
              if (p5.mouseY > p5.height / 2) {
                  circleY = p5.height / 2 - (p5.mouseY - p5.height / 2);
              }
              p5.circle(circleX + circleX * 0.2, circleY + circleY * 0.2, 40);

        };

  return <Sketch setup={setup} draw={draw} />;
}

export default Perspective