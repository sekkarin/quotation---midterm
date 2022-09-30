const quotes = [
  {
    id: 1,
    quote_th: "จะมีก้าวที่ยิ่งใหญ่ได้ก็ต้องเริ่มจากก้าวแรกทั้งนั้นแหละ",
    quote_en: "The journey of a thousand miles begins with one step. ",
  },
  {
    id: 2,
    quote_th: "อย่ากลัวที่จะฝันกันนะ",
    quote_en: "Dream big and dare to fail. ",
  },
  {
    id: 3,
    quote_th: "ใช้ชีวิตตัวเองก็เหนื่อยแล้ว เรื่องคนอื่นเราไม่ยุ่ง",
    quote_en:
      "Your time is limited, so don't waste it living someone else's life. ",
  },
  {
    id: 4,
    quote_th: "เปลี่ยนรอยแผลให้เป็นพลังพร้อมสู้ต่อ",
    quote_en: "Turn your wounds into wisdom.  ",
  },
  {
    id: 5,
    quote_th: "ถ้าหยุดฝันเมื่อไหร่ ชีวิตคุณก็หยุดเมื่อนั้น",
    quote_en: "When you cease to dream you cease to live. ",
  },
  {
    id: 6,
    quote_th: "อยากรู้ไหมว่าอนาคตจะเป็นยังไง? ก็ลองทำอะไรบางอย่างในวันนี้ดูสิ",
    quote_en: "The best way to predict your future is to create it. ",
  },
  {
    id: 7,
    quote_th: "ถึงชีวิตจะสู้กลับ! แต่เราก็ต้องสู้ชีวิตมันต่อไปนั่นแหละ",
    quote_en:
      "Life is like riding a bicycle. To keep your balance, you must keep moving. ",
  },
  {
    id: 8,
    quote_th: "ถ้าเรามองภาพตัวเองไม่ชัดก็ลองถามเพื่อน ๆ รอบข้างดูสิ",
    quote_en:
      "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
  },
  {
    id: 9,
    quote_th: "อย่ามองแต่เรื่องแย่ ๆ จนมองข้ามเรื่องดี ๆ ไปนะ!",
    quote_en:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine. ",
  },
  {
    id: 10,
    quote_th: "ทุก ๆ วันใหม่ยังเป็นโอากสที่จะเปลี่ยนแปลงชีวิตเสมอ",
    quote_en: "Every new day is another chance to change your life. ",
  },
];
console.log("hello world");
// Get random index of quotes
// const random = Math.floor(Math.random()*quotes.length)

const screen = {
  "en":document.querySelector('.quote-en'),
  "th":document.querySelector('.quote-th')
}

const randomWord = ()=>{
  
  const btn = document.querySelector('#new-quote')
  btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length)
    // console.log("On click");
    // console.log(quotes[random]);
    screen.en.innerHTML = quotes[random].quote_en
    screen.th.innerHTML = quotes[random].quote_th
  })
}

const mouseOveren=()=> {
  // document.getElementById("demo").style.color = "red";
  screen.en.style.color = 'red'
  screen.en.style.scale =  1.1
  
}

const mouseOuten=()=> {
  screen.en.style.color = 'black'
  screen.en.style.scale =  1
  // document.getElementById("demo").style.color = "black";
}
const mouseOverth=()=> {
  // document.getElementById("demo").style.color = "red";
  screen.th.style.color = 'red'
  screen.th.style.scale =  1.1
  
}

const mouseOutth=()=> {
  screen.th.style.color = 'black'
  screen.th.style.scale =  1
  // document.getElementById("demo").style.color = "black";
}

function main() {
  randomWord()
}
main()