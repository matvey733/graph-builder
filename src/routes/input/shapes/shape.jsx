export default class Shape {
    constructor(filled, fillColors, strokeColor, velocity, gravity, gravForce, friction, collisions, canvas, c, mousePos) {
        this.strokeStyle = strokeColor;
        this.fillStyle = fillColors[Math.floor(Math.random() * fillColors.length)];
        this.lineWidth = 2;
        this.canvas = canvas;
        this.c = c;
        this.mousePos = mousePos;
        this.filled = filled;
        this.collisions = collisions;
        this.friction = friction;
        if (gravity) this.gravity = gravForce;
        else this.gravity = false;
        
        const randVx = Math.random() - 0.5;
        const randVy = Math.random() - 0.5;
        const rand = Math.random();
        if (rand >= 0.66) {
            this.vx = randVx >= 0 ? randVx * velocity + velocity : randVx * velocity - velocity;
            this.vy = randVy >= 0 ? randVy * velocity + velocity : randVy * velocity - velocity;
        }
        else if (rand >= 0.33) {
            this.vx = randVx * velocity;
            this.vy = randVy >= 0 ? randVy * velocity + velocity : randVy * velocity - velocity;
        }
        else {
            this.vx = randVx >= 0 ? randVx * velocity + velocity : randVx * velocity - velocity;
            this.vy = randVy * velocity;
        }
    }

    diff(mousePos, shapePos) {
        return Math.abs(mousePos - shapePos);
    }
}