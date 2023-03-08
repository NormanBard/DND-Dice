let x = rollTwenty

function rollTwenty() {
    return Math.floor(Math.random() * 20) + 1;
}
function rollTweleve() {
    return Math.floor(Math.random() * 12) + 1;
}
function rollTen() {
    return Math.floor(Math.random() * 10) + 1;
}
function rollEight() {
    return Math.floor(Math.random() * 8) + 1;
}
function rollSix() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollFour() {
    return Math.floor(Math.random() * 4) + 1;
}


document.getElementById("d20").onclick = () => {
    document.getElementById("d20results").innerHTML = (rollTwenty());
}
document.getElementById("d12").onclick = () => {
    document.getElementById("d12results").innerHTML = (rollTweleve());
}
document.getElementById("d10").onclick = () => {
    document.getElementById("d10results").innerHTML = (rollTen());
}
document.getElementById("d8").onclick = () => {
    document.getElementById("d8results").innerHTML = (rollEight());
}
document.getElementById("d6").onclick = () => {
    document.getElementById("d6results").innerHTML = (rollSix());
}
document.getElementById("d4").onclick = () => {
    document.getElementById("d4results").innerHTML = (rollFour());
}






function insultGenerator () {

const words1 = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish', 'dissembling', 'droning', 'errant', 'fawning', 'fobbing', 'froward', 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent', 'infectious', 'jarring', 'joggerheaded', 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny', 'rank', 'reeky', 'roguish', 'ruftish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 'unmuzzled', 'vain', 'venomed', 'villainous', 'warped', 'wayward', 'weedy', 'yeasty'];    
const words2 = ['base-court', 'bat-forling', 'beef-witted', 'beetle-headed', 'boil-brained', 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 'flap-mothed', 'fly-bitten', 'folly-fallen', 'fool-born', 'fill-gorged', 'guts-griping', 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'milk-livered', 'motley-minded', 'onion-eyed', 'plume-plucked', 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing', 'rump-faced', 'shard-borne', 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'unchin-snoted', 'weather-bitten']
const words3 = ['apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canket-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'futilarrian', 'giglet', 'gudgeon', 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewduster', 'lout', 'maggot-pie', 'malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumbion', 'ratsbane', 'scut', 'skainsmate', 'strumpot', 'varlot', 'vassal', 'wheyface', 'wagtail']
//const randomWord1 = words1[Math.floor(Math.random() * words1.length)];
//const randomWord2 = words2[Math.floor(Math.random() * words2.length)];
//const randomWord3 = words3[Math.floor(Math.random() * words3.length)];
const randomWord1 = getRandomWord(words1);

const randomWord2 = getRandomWord(words2);

const randomWord3 = getRandomWord(words3);

function getRandomWord(wordsArray) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
}
const insultPhrase = "You" + " " + randomWord1 + ", " + randomWord2 + ", " + randomWord3 + "!"
return (insultPhrase);

}


document.getElementById("insultBtn").onclick = () => {
    document.getElementById("insultDiv").innerHTML = (insultGenerator());
}

document.getElementById("insultDiv").innerHTML = insultPhrase;





console.log(randomWord1); 
console.log(randomWord2);
console.log(randomWord3);










