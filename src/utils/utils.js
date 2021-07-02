export function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function removeDuplicates(array) {
    return array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
}

export function sortAlphabetically(array){
    return array.sort((a, b) => a.localeCompare(b))
}
