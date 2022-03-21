// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(Ralph){
    cats.pop(Ralph)
}
function destructivelyRemoveFirstCat(Bob){
    cats.shift(Bob);
}
function appendCat(Ralph){
    const catstwo = [...cats, Ralph];
    return catstwo;
}
function prependCat(Bob){
    const catsone = [Bob,...cats];
    return catsone;
}
function removeLastCat(){
    const removes = cats.slice(0,-1);
    return removes;
}
function removeFirstCat(){
    const removesfirst = cats.slice(1);
    return removesfirst;
}