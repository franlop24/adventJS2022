function distributeGifts(packOfGifts, reindeers) {
    let weigthGifts = 0;
    let weigthReinders = 0;
    packOfGifts.forEach(g => weigthGifts += g.length);
    reindeers.forEach(r => weigthReinders += r.length * 2);
    return Math.floor(weigthReinders / weigthGifts);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const result = distributeGifts(packOfGifts, reindeers) // 2
console.log(result);