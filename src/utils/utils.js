export const capitalize = (word) => {
    if(word){
        const singleLetters = word.split('')
        singleLetters[0] = singleLetters[0].toUpperCase()
        console.log(singleLetters.join(''))
        return singleLetters.join('')
    }
}