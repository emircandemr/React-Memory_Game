// Shuffle the cards to "mess up" with their order
export const shuffleCards = cards => {
    let m = cards.length;
    let t;
    let i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};

export const getFormedData = data => {
    return data.map((pic, index) => ({
        id: index,
        url: pic.src.small,
        isShown: false,
        isFound: false,
    }));
};

export const getPairedPics = data => {
    return data.reduce((img, i) => img.concat(i, i), []);
};

export const addUniqueIds = data => {
    return data.map((entry, i) => ({
        ...entry,
        uniqueId: i,
    }));
};