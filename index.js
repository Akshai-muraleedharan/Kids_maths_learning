// for heading
  let headEle = document.querySelector('#head_ele')


// get url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const arithmeticName  = urlParams.get('name')
  const levelName  = urlParams.get('level')
  headEle.innerHTML = `${arithmeticName} <br> <span style="font-size:18px">level ${levelName}</span>`




const  speakTheQuestion = (max,symbol,min) => {

  
  const utterance = new SpeechSynthesisUtterance(`${max} ${symbol} ${min} is equel to`)

  utterance.lang = 'en-US';
  utterance.volume = 1;
  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance)
}



  const arithmeticStages = (numOne,numTwo) => {
    
      
  const globalArr = []   

  // insert number to array for calculate
  for(let i = numOne ; i <= numTwo ; i++){
     globalArr.push(i)
  }
  
  // random number for array refernce value
  let randomNumOne = Math.floor(Math.random() * globalArr.length )
  let randomNumTwo = Math.floor(Math.random() * globalArr.length )


// the two varible for check max and min value 
  const checkMaxValue = Math.max(globalArr[randomNumOne],globalArr[randomNumTwo])
  const checkMinValue = Math.min(globalArr[randomNumOne],globalArr[randomNumTwo])

// The sum of calculation and arithemetic symbol for ui
  let sum
  let arithmeticSymbol

// check arithmetic calculation
  if(arithmeticName === "addition"){
    let arithmeticValue = checkMaxValue + checkMinValue
    sum = arithmeticValue
     arithmeticSymbol = "+"

     speakTheQuestion(checkMaxValue,"plus",checkMinValue)
    
  }else if(arithmeticName === "substraction"){
    let arithmeticValue = checkMaxValue - checkMinValue
    sum = arithmeticValue
    arithmeticSymbol = "-"
    speakTheQuestion(checkMaxValue,"substracted",checkMinValue)
  }else if(arithmeticName === "multiplication"){
    let arithmeticValue = checkMaxValue * checkMinValue
    sum = arithmeticValue
    arithmeticSymbol = "x"
    speakTheQuestion(checkMaxValue,"multiply by",checkMinValue)
  }else{
    let arithmeticValue = checkMaxValue / checkMinValue
    sum = arithmeticValue.toFixed(2)
    arithmeticSymbol = "/"
    speakTheQuestion(checkMaxValue,"divided by",checkMinValue)
  }
 
// Three variables for user answer check
  const sumAdd = sum + 3
  const sumSub = sum - 4
  const sumForLoop = sum - 1

 const dispalyNumbersArray = []

//  To create values and push to arrays
  for ( let i = sum ; i < sumAdd; i++){
    dispalyNumbersArray.push(i)
  }

  //  To create values and push to arrays
  for (let i = sumForLoop ; i > sumSub ; i--){
    dispalyNumbersArray.unshift(i)
  }

//  This function for dispalyNumbersArray values to shuffles
  function shuffleArray(array) {

    let newArray = [...array]; // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;
  }
 

// To get return values
  let fun =  shuffleArray(dispalyNumbersArray)

//  To hold the numbers from arrays below
 let numberHolderEle = document.querySelector('.number_holder')
  let outPut = '' 

  fun.forEach((item) => {
    outPut += `
    <li >
    <button class="number_holder_li">${item} </button>
    </li>
    `
  })

  numberHolderEle.innerHTML = outPut
 //  To hold the numbers from arrays above


  let numberHolderLi = document.querySelectorAll('.number_holder_li')
  let numContainerEle = document.querySelector('.number_container')


  // add animation
    const addAnimation = () => {
  
     var randomNum = Math.floor(Math.random() * dispalyNumbersArray.length)

    numberHolderLi[randomNum].classList.add('anime')  
       
   }


  setInterval(()=>{
    addAnimation()

  },2000)

//  remove animation
    numberHolderLi.forEach(item => {
      if(item.classList.length > 0) {
        
      setInterval(() => {
    numberHolderLi.forEach(item => {
      item.classList.remove('anime')
    })

      },9500)
      }})

    //  for check anwser
      let answerEle = document.querySelector('.answer_container')
      let question = document.querySelector('.answer_container_holder')
  
   
      let ansOut = ''
  

    
      ansOut = `
      <li class="ans_list">${checkMaxValue}</li> 
      <li style="font-size:23px; font-weight:600"> ${arithmeticSymbol} </li>
      <li class="ans_list">${checkMinValue}</li>
      <li style="font-size:23px; font-weight:600"> = </li>
      <li class="ans_list" id="answee">0</li>
     
      `

      answerEle.innerHTML += ansOut

    // answer or correct variables
      let totalanswerEle = document.querySelector('#answee')
      let overlayEle = document.querySelector('#overlay-con')
      let overlayHead =document.querySelector('#overlay_head')


   

      numberHolderLi.forEach((item) => {
        item.addEventListener("click",() => {

          totalanswerEle.textContent = item.textContent

          if(parseInt(sum) === parseInt(item.textContent)){
          

            setTimeout(() => {

              overlayEle.classList.add("overlay") 
              numContainerEle.classList.add("displayRemove")
              question.classList.add("displayRemove")
              overlayHead.textContent = "Correct Answer"
            },1500)

            setTimeout(()=>{
              
              overlayEle.classList.remove("overlay")
              question.classList.remove("displayRemove")
              numContainerEle.classList.remove("displayRemove")
              overlayHead.textContent = ""
              window.location.reload()
            },3000)
          }else{
          
            setTimeout(() => {
              overlayEle.classList.add("overlay") 
              numContainerEle.classList.add("displayRemove")
              question.classList.add("displayRemove")
              overlayHead.textContent = "wrong Answer"
              overlayHead.style.color =" red"
  
            },1500)
            setTimeout(()=>{
              
              overlayEle.classList.remove("overlay")
              question.classList.remove("displayRemove")
              numContainerEle.classList.remove("displayRemove")
              overlayHead.textContent = ""
               overlayHead.style.color =""
              totalanswerEle.textContent = 0
            },3000)
          }

        })
      })

    
}





 

if(arithmeticName === "addition" && levelName === "one"){
 
   arithmeticStages(1,10)

}else if(arithmeticName === "addition" && levelName === "two"){

  arithmeticStages(11,100) 

}else if(arithmeticName === "addition" && levelName === "three"){

  arithmeticStages(100,1000)

}



if(arithmeticName === "substraction" && levelName === "one"){

   arithmeticStages(1,10)

} else if(arithmeticName === "substraction" && levelName === "two"){

  arithmeticStages(11,100) 

} else if(arithmeticName === "substraction" && levelName === "three"){

  arithmeticStages(100,1000)

}


if(arithmeticName === "multiplication" && levelName === "one"){

  arithmeticStages(1,10)

} else if(arithmeticName === "multiplication" && levelName === "two"){

 arithmeticStages(11,100) 

} else if(arithmeticName === "multiplication" && levelName === "three"){

 arithmeticStages(100,1000)

}


if(arithmeticName === "division" && levelName === "one"){

  arithmeticStages(1,10)

} else if(arithmeticName === "division" && levelName === "two"){

 arithmeticStages(11,100) 

} else if(arithmeticName === "division" && levelName === "three"){

 arithmeticStages(100,1000)

}








  

