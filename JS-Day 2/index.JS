//level1
let Challenge = "30 Days of Javascript "
console.log(Challenge);
firstLetter = (Challenge)[0]
console.log(Challenge.length);
console.log(Challenge.toUpperCase());
console.log(Challenge.toLowerCase());
console.log(Challenge.substr(0,2));
console.log(Challenge.substr(3,21));
console.log(Challenge.includes("script"));
console.log(Challenge.split(' '));
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(' '));
console.log(Challenge.replace('Javascript', 'Python'));
console.log(Challenge.charAt(15));
console.log(Challenge.charCodeAt(11));
console.log(Challenge.indexOf('a'));
let conjun = 'You cannot end a sentence with because because because is a conjunction'
console.log(conjun.indexOf('because'));
console.log(conjun.lastIndexOf('because'));
console.log(conjun.search('because'));
console.log(Challenge.trim());
console.log(Challenge.startsWith('30 Days of Javascript'));
console.log(Challenge.endsWith('30 Days of Javascript'));
console.log(Challenge.match('a'));
let ten = '30 days of'
console.log(ten.concat(' ','javascript'));
console.log(Challenge.repeat(2));


//level2
let quote = 'There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.'
console.log(quote);
let theresa="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(theresa)
console.log(typeof 10);
let num = '9.8'
num = '10'
let numFloat = parseFloat(num)
console.log(numFloat);
let men = 'python'
let women = 'jargon'
console.log(men.endsWith('on'));
console.log(women.endsWith('on'));
let randomNum = Math.random()
let numBtwfiftyAndhundred =randomNum * 101
console.log(numBtwfiftyAndhundred)
let randomNumRoundToFloor = Math.floor(numBtwfiftyAndhundred)
console.log(numBtwfiftyAndhundred);
let unilateral = Math.random(50)
let unilateralfifty = unilateral*101
console.log(unilateralfifty);
let unilateralfiftyRoundToFloor = Math.floor(unilateralfifty)
console.log(unilateralfiftyRoundToFloor);
let fan = Math.floor(Math.random()*(100-50+1))+50;
console.log(fan);
let randNum=Math.random()
let numBtntwofiftysix= randNum * 256
console.log(numBtntwofiftysix);
let randNumRoundToFloor = Math.floor(numBtntwofiftysix)
console.log(randNumRoundToFloor);
 
let pod = 'javascript'
console.log();


let mum = 'you cannot end a sentence with because because because is a conjunction'
console.log(mum.substr('because'));

//level 3//
let love = 'Love is the best thing in this world.Some found their love and some are still looking for their love '
console.log(love.match('love'));
let flower = 'you cannot end a sentence with because because because is a conjunction'
console.log(flower.match('because'));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#at'
let symbol = ('%,$,&,@')
console.log(sentence.replace(' '));
let RegExp=/\d+/
console.log(sentence.match(RegExp));

















