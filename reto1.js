function wrapping(gifts) {
    const giftsWrapped = [];
    for(let i = 0; i < gifts.length; i++){
        const wrap = '*'.repeat(gifts[i].length + 2);
        giftsWrapped.push(`${ wrap }\n*${ gifts[i] }*\n${ wrap }`);
    }
    for(const gift of gifts){
        const wrap = '*'.repeat(gift.length + 2);
        giftsWrapped.push(`${ wrap }\n*${ gift }*\n${ wrap }`);
    }
    gifts.forEach( gift => {
        const wrap = '*'.repeat(gift.length + 2);
        giftsWrapped.push(`${ wrap }\n*${ gift }*\n${ wrap }`);
    } )
    return gifts.map( gift => {
        const wrap = '*'.repeat(gift.length + 2);
        return `${ wrap }\n*${ gift }*\n${ wrap }`;
    } )
    return giftsWrapped;
}

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped[0]);