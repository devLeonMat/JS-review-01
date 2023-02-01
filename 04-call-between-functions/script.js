function cutFruitsPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsPieces(apples);
    const orangesPieces = cutFruitsPieces(oranges);
    console.log(apples, oranges);
    return `Juice with ${applePieces} apple pieces and ${orangesPieces} oranges pieces.`;
}

console.log(fruitProcessor(2, 3));

































