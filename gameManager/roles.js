class Sheriff {

    constructor(lb) {
        this.tipo = "Sceriffo";
        this.lifebonus = 1;
        if(lb) this.lifebonus = lb;
    }
}

class Vice {
    constructor(lb) {
        this.tipo = "Vice";
        this.lifebonus = 0;
        if(lb) this.lifebonus = lb;
    }
}

class Renegade {

    constructor(lb) {
        this.tipo = "Rinnegato";
        this.lifebonus = 0;
        if(lb) this.lifebonus = lb;
    }
}

class Outlaw {

    constructor(lb) {
        this.tipo = "Fuorilegge";
        this.lifebonus = 0;
        if(lb) this.lifebonus = lb;
    }
}

const config = {
    1: [ new Sheriff(10)],
    4: [ new Sheriff(), new Renegade(), new Outlaw(),   new Outlaw() ],
    5: [ new Sheriff(), new Vice(1),    new Renegade(1),new Outlaw(1),  new Outlaw(1) ],
    6: [ new Sheriff(), new Vice(),     new Renegade(), new Outlaw(),   new Outlaw(),   new Outlaw() ],
    7: [ new Sheriff(), new Vice(),     new Vice(),     new Renegade(), new Outlaw(),   new Outlaw(),   new Outlaw() ],
    8: [ new Sheriff(), new Vice(),     new Vice(),     new Renegade(), new Renegade(), new Outlaw(),   new Outlaw(),   new Outlaw() ]
}

module.exports = {
    Sheriff: Sheriff,
    Vice: Vice,
    Renegade: Renegade,
    Outlaw: Outlaw,
    config: config
}