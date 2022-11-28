export class Squirrel {
    constructor(){
        this.moving = true;
        this.vida = 5;
        this.puntos = 0;
        this.monedas = 0;
        this.bellota = false;
    }

    update(){
        if(this.moving === true){
            this.moving = false;
        }
    }

    updateMonedas(){
        this.monedas += 1;
    }

    updatePuntuacion(setPuntos){
        this.puntos += setPuntos;
    }

    updateVida(daño){
        this.vida -= daño;
    }
    updateBellota(){
        this.bellota = true;
    }

    GetPuntuacion(){
        return this.puntos;
    }

    GetVida(){
        return this.vida;
    }
    GetBellota(){
        return this.bellota;
    }
    GetMoneda(){
        return this.monedas;
    }
}