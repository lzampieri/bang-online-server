class CardType {
    constructor(name, action) {
        this.name = name;
        this.action = action;
    }
}

const cards = {
    1: new CardType(
        "Bang!",
        () => {
            print("Doing stuff1");
        }
    ),

    2: new CardType(
        "Mancato!",
        () => {
            print("Doing stuff2");
        }
    ),
    
    3: new CardType(
        "Diligenza!",
        () => {
            print("Doing stuff3");
        }
    ),
}

const deck = [
    /* 30 Bang */       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    /* 10 Mancato */    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    /* 3 Diligenza */   3, 3, 3
]

module.exports = {
    CardType: CardType,
    cards: cards,
    deck: deck
}