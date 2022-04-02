/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ





// const isFalse = [2, 5];
// const isTrue = [1, 3, 5, 6];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა








console.log("bc" > "ah")


// ერთნაირი  შემადგენლობა არ უნდა ქონდეთ სიტყვებს
console.log(004 == "004")

// გამომდინაარე იქიდან,რომ პირველი არის numberi უნდა ქონდეთ იდენტური შემადგენლბოა 


















// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ

let age = 18;
let clientaage = prompt('please enter your age')

if (clientaage < 18) {
    console.log('please  drink water')
} else {
    console.log('would you like to drink some alcohol?')

}





//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ


let a = "tamo";
let b = 'java';

if (a < b) {
    console.log(
        ' i will learn soon js'
    )
} else {
    console.log('there is no else')
}




let c = 'i am studying java';
let d = 'my dreams will come true';

if (a > b) {
    console.log('my dreams will come true')
}
else { console.log('it wont come true') }

//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2)

// >>> კოდი დაწერეთ აქ

let girl = 20;
let boy = 27;
console.log(boy);
console.log('boy>19', (boy > 19));
console.log('boy' < '70', (boy < 70));
(boy > 19) ? boy < 70 ? console.log('boy <70') : console.log('boy < 70 false') : console.log('boy >19 false')


//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4,
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0,
  სხვა ყველა ფერი=undefinde)


*/







let white = 4;
let red = 3;
let green = 2;
let blue = 1;
let black = 0;

if (null == undefined) { console.log('white red green blue black') } else { console.log('underfined') }












// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ





//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2)

// >>> კოდი დაწერეთ აქ


//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ


let price = 18;
let sale = Number(prompt("please tell me the price"));

switch (true) {
    case price === sale:
        console.log('true')
    case price > 20:
        console.log('sale>  20')
}





//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი
    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ.
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/




//  ა მ     ორ     დავალებას     გავაკეთებ  მალე







// const bot = document.getElementById("bot")
// bot.addEventListener("click", myFun())

// function myFun() {
//     let x = prompt("მე მზად არ ვარ პასუხისათვის")

//     // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch


//     //

//     // რეკურსიული ფუნქცია
//     myFun()
// }











