import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Canvas from '../Canvas';
import Control from '../Control';

class Game extends Component {
    constructor(props){
        super(props);
        this.fpsRate = 0;
        this.lastTimestamp = performance.now();

        let { canvas, car, crosshair, target, player, bullets } = this.generateConfiguration();

        this.state = { canvas, car, crosshair, target, player, bullets, shake: { value: 0, increase: true }, move: { left: false, right: false }, screen: { bullets: [] }, debug: this.props.debug || true };

        this.gameLoop = this.gameLoop.bind(this);
        document.addEventListener('keydown', this.keydown.bind(this));
        document.addEventListener('keyup', this.keyup.bind(this));

    }

    componentDidUpdate(){
        // this.initialize();
    }

    componentDidMount(){
        this.initialize();
    }

    initialize(){
        // if(!this.props.player.inaccuracyDistance || !this.props.player.inaccuracySpeed || !this.props.player.engine) return;
        this.canvas = document.getElementById('gameScreen');
        this.ctx = this.canvas.getContext('2d');
        this.gameLoop();
    }

    keydown(ev){
        // if(!this.props.player.inaccuracyDistance || !this.props.player.inaccuracySpeed || !this.props.player.engine) return;
        this.checkKey(ev, true);
    }
    
    keyup(ev){
        // if(!this.props.player.inaccuracyDistance || !this.props.player.inaccuracySpeed || !this.props.player.engine) return;
        this.checkKey(ev, false);
    }

    checkKey(ev, val){
        switch(ev.code){
            case 'ArrowRight':
                this.setState({ move: { ...this.state.move, right: val } });
                break;
            case 'ArrowLeft':
                this.setState({ move: { ...this.state.move, left: val } });
                break;
            case 'ArrowUp':
                this.setState({ move: { ...this.state.move, up: val } });
                break;
            case 'ArrowDown':
                this.setState({ move: { ...this.state.move, down: val } });
                break;
            case 'Space':
                // let bullets = this.shoot();
                // this.setState({ screen: { ...this.state.screen, bullets } });
                this.setState({ move: { ...this.state.move, shoot: val } });
                break;
        }
    }

    generateConfiguration(){
        let canvas = {
            width: 1000,
            height: 600
        };

        let car = {
            x: 0,
            y: 600,
            mass: 999999,
            width: 40,
            height: 40,
            // speed: 200,
            color: 'blue',
            bulletsCount: 10,
            shake: 100,
            gun: {
                mass: 9999
            },
            engine: {
                force: 9999,
                technology: 9999,
                quality: 9999
            }
        };

        let crosshair = {
            size: 20,
            stroke: 3,
            color: 'red',
            x: car.x,
            y: canvas.height / 2,
        };

        let target = {
            x: Math.floor((Math.random() * 600 ) + 200),
            y: canvas.height / 2,
            radius: 100,
            score: [10, 8, 6, 4, 2],
            color: 'gray',
            lines: 'white'
        };

        let bullets = {
            radius: 2,
            color: ['blue', 'red']
        };

        let { player } = this.props;

        // y = (1)/(1 + e^(-x)) => ]0, 1[
        /*
            y = (q)/(w + (o * (e^(-gx/g + u))))
                q => máximo que y pode tender se w=1
                w => serve para diminuir o máximo que y pode tender
                o => empurra a curva para a direita, fazendo com que y esteja mais próximo de 0 em x = 0
                g => se estiver dividindo, faz com que y demore mais a atingir o max. Se estiver multiplicando, faz o contrário.
                u => empurra o meio do valor y (0.5 quando y pode tender a 1 no max)
            
            y = 10/(1 + e^(-x + 3))
                x = 0; y = 0.474
                x = 3; y = 5
                x = 6; y = 9.525
                x = 8; y = 9.933
                x = 10; y = 9.99
                x = 15; y = 9.999
                x = 20; y = 9.999

            y = 10 / (2 + e^(-x + 3))
                x = 0; y = 0.452
                x = 3; y = 3.333
                x = 6; y = 4.878
                x = 8; y = 4.983
                x = 10; y = 4.997
                x = 15; y = 4.999
                x = 20; y = 4.999

            y = 10 / (2 + e^(-(x / 5) + 3))
                x = 0; y = 0.452
                x = 3; y = 0.767
                x = 6; y = 1.242
                x = 8; y = 1.651
                x = 10; y = 2.119
                x = 15; y = 3.333
                x = 20; y = 4.223
            
            y = (1)/(1 + e^(-x))
                x = 0; y = 0.5
                x = 3; y = 0.952
                x = 6; y = 0.997
                x = 8; y = 0.999
                x = 10; y = 0.999
                x = 15; y = 0.999
                x = 20; y =~ 1
        */

        return { canvas, car, crosshair, target, player, bullets }
    }
// UPDATES
    updateCar(obj){
        let car = { ...this.state.car, ...obj };
        this.setState({ car });
        // if(obj.x) 
    }

    updateCrosshair(obj){
        let crosshair = { ...this.state.crosshair, ...obj };
        this.setState({ crosshair });
    }
// GAME
    gameLoop() {
        this.fps();
        this.shake();
        this.move();
        // this.updateCrosshair({ x: this.state.car.x + this.state.shake.value });
        this.draw();
        requestAnimationFrame(this.gameLoop);
    }

    fps(){
        this.currentTimestamp = performance.now();
        this.elapsedMilliseconds = this.currentTimestamp - this.lastTimestamp;
        this.fpsRate = 1000 / this.elapsedMilliseconds;
        this.lastTimestamp = this.currentTimestamp;
        // console.log(`FPS: ${this.fpsRate.toFixed(2)}`);
    }
// SPEED
    crosshairYspeed(){
        const { car } = this.state;
        const { player } = this.props;
        return Math.sqrt((player.force * player.technique * player.focus * car.engine.quality) / (2 * car.gun.mass));
    }
// MOVEMENT
    move(){
        const car = { ...this.state.car },
            crosshair = { ...this.state.crosshair },
            move = { ...this.state.move }, 
            shake = { ...this.state.shake };
        
        // const { car, crosshair, move, shake } = this.state;

        const carSpeed = Math.sqrt((car.engine.force * car.engine.technology * car.engine.quality) / (2 * (car.mass + car.gun.mass)));
        if(move.right) car.x += (carSpeed * (this.elapsedMilliseconds / 1000));
        if(move.left) car.x -= (carSpeed * (this.elapsedMilliseconds / 1000));
        if(move.down) crosshair.y += (this.crosshairYspeed() * (this.elapsedMilliseconds / 1000));
        if(move.up) crosshair.y -= (this.crosshairYspeed() * (this.elapsedMilliseconds / 1000));
        if(move.shoot) this.shoot();
        crosshair.x = this.state.car.x + shake.value;


        this.setState({ car, crosshair });
    }

    shake(){
        const { shake, player } = this.state;
        let shakeVal = 0;
        let shakeIncrease = shake.increase;
        if(shake.increase) shakeVal = shake.value + (player.inaccuracySpeed * (this.elapsedMilliseconds / 1000));
        else shakeVal = shake.value - (player.inaccuracySpeed * (this.elapsedMilliseconds / 1000));

        if(shakeVal >= this.inaccuracyDistance){ 
            shakeVal = this.inaccuracyDistance;
            shakeIncrease = !shake.increase;
        }else if(shakeVal <= -this.inaccuracyDistance){
            shakeVal = -this.inaccuracyDistance;
            shakeIncrease = !shake.increase;
        }
        shake.value = shakeVal;
        shake.increase = shakeIncrease;
        this.setState({ shake });
    }
// ACTIONS
    shoot(){
        const { target, crosshair } = this.state;
        let res = {};
        const dist = Math.sqrt(Math.pow((crosshair.x - target.x),2)+Math.pow((crosshair.y - target.y),2));
        if(dist <= target.radius) res = { shootInTarget: true, x: crosshair.x - target.x, y: crosshair.y - target.y };
        else res = { shootInTarget: false, x: crosshair.x, y: crosshair.y };
        // let bullets = [ ...this.state.screen.bullets ];
        // bullets.push(res);
        // console.log(res)
        // // console.log(crosshair.x, target.x, (crosshair.x - target.x)^2), ((crosshair.y - target.y)^2, Math.sqrt(((crosshair.x - target.x)^2)+((crosshair.y - target.y)^2)));
        // return bullets;
        this.setState({ screen: { ...this.state.screen, bullets: this.state.screen.bullets.concat([res])}})
    }
// DYNAMIC ATTRIBUTES
    inaccuracyDistance(){
        return 200;
    }
    inaccuracySpeed(){}
    engine(){}
// DRAWS
    draw(){
        const { canvas } = this.state;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.targetDraw();
        this.bulletsDraw();
        this.crosshairDraw();
        this.carDraw();
    }

    carDraw(){
        let { car, canvas } = this.state;

        let carMarginLeft = (car.width / 2) + 1,
            carMarginRight = canvas.width - (car.width / 2) - 1;
        if(car.x < carMarginLeft) this.updateCar({ x: carMarginLeft });
        if(car.x > carMarginRight) this.updateCar({ x: carMarginRight });
        let carMarginTop = (car.height / 2) + 1,
            carMarginBottom = canvas.height - (car.height / 2) - 1;
        if(car.y < carMarginTop) this.updateCar({ y: carMarginTop });
        if(car.y > carMarginBottom) this.updateCar({ y: carMarginBottom });
        
        this.ctx.fillStyle = car.color;
        this.ctx.fillRect(car.x - (car.width / 2), car.y - (car.height / 2), car.width, car.height);
        
        this.debug(car);
    }

    crosshairDraw(){
        const { crosshair, canvas } = this.state;

        let crosshairMarginTop = crosshair.size + 1,
            crosshairMarginBottom = canvas.height - 140;
        if(crosshair.y < crosshairMarginTop) this.updateCrosshair({ y: crosshairMarginTop });
        if(crosshair.y > crosshairMarginBottom) this.updateCrosshair({ y: crosshairMarginBottom });

        this.ctx.beginPath();
        this.ctx.moveTo(crosshair.x - (crosshair.size / 2), crosshair.y);
        this.ctx.lineTo(crosshair.x + (crosshair.size / 2), crosshair.y);
        this.ctx.moveTo(crosshair.x, crosshair.y - (crosshair.size / 2));
        this.ctx.lineTo(crosshair.x, crosshair.y + (crosshair.size / 2));
        this.ctx.strokeStyle = crosshair.color;
        this.ctx.stroke();
        this.ctx.closePath();

        this.debug(crosshair);
    }

    targetDraw(){
        const { target, canvas } = this.state;
        const interval = target.radius / target.score.length;

        this.ctx.beginPath();
        this.ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = target.color;
        this.ctx.fill();
        for(let i = interval; i <= target.radius; i+=interval){
            this.ctx.beginPath();
            this.ctx.arc(target.x, target.y, i, 0, Math.PI * 2);
            this.ctx.fillStyle = target.lines;
            this.ctx.stroke();
        }
        this.ctx.closePath();
        
        this.debug(target);
    }

    bulletsDraw(){
        const { bullets, screen, target } = this.state;
        screen.bullets.forEach(bullet => {
            this.ctx.fillStyle = bullets.color[bullet.shootInTarget ? 0 : 1];
            this.ctx.beginPath();
            this.ctx.arc(
                bullet.shootInTarget ? target.x + bullet.x : bullet.x, 
                bullet.shootInTarget ? target.y + bullet.y : bullet.y, 
                bullets.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        })
    }
// UTILS
    debug(obj){
        if(!this.state.debug) return;
        this.debugPosition(obj);
    }

    debugPosition(obj){
        this.ctx.fillStyle = 'green';
        this.ctx.beginPath();
        this.ctx.arc(obj.x, obj.y, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col sm={12} md={9}>
                        <Canvas {...this.state} player={this.props.player} /*updateInaccuracyDistance={this.props.updateInaccuracyDistance} updateInaccuracySpeed={this.props.updateInaccuracySpeed} updateEngine={this.props.updateEngine}*/ />
                    </Col>
                    <Col sm={12} md={3}>
                        <Control />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Game;