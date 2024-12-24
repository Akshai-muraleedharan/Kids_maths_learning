
let headEle = document.querySelector('#head_ele')


// get url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const arithmeticName  = urlParams.get('name')
const levelName  = urlParams.get('level')
headEle.innerHTML = `${arithmeticName} <br> <span style="font-size:18px">level ${levelName}</span>`







const additionStages = (numOne,numTwo) => {
  
const globalArr = []   
  // insert number to array 

  for(let i = numOne ; i <= numTwo ; i++){
     globalArr.push(i)
  }
  
  let randomNumOne = Math.floor(Math.random() * globalArr.length )
  let randomNumTwo = Math.floor(Math.random() * globalArr.length )



const checkMaxValue = Math.max(globalArr[randomNumOne],globalArr[randomNumTwo])
const checkMinValue = Math.min(globalArr[randomNumOne],globalArr[randomNumTwo])


  const sum = checkMaxValue + checkMinValue

const sumAdd = sum + 3
const sumSub = sum - 4

const sumForLoop = sum - 1

  const dispalyNumbersArray = []

  for ( let i = sum ; i < sumAdd; i++){
    dispalyNumbersArray.push(i)
  }

 for (let i = sumForLoop ; i > sumSub ; i--){
  dispalyNumbersArray.unshift(i)
 }

 function shuffleArray(array) {

  let newArray = [...array]; // Create a copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  return newArray;
}
 


 let fun =  shuffleArray(dispalyNumbersArray)

 console.log(fun)

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


  let numberHolderLi = document.querySelectorAll('.number_holder_li')
  let numContainerEle = document.querySelector('.number_container')


  
 const addAnimation = () => {
    

        var randomNum = Math.floor(Math.random() * dispalyNumbersArray.length)

        numberHolderLi[randomNum].classList.add('anime')  
       
  }


  setInterval(()=>{
    addAnimation()

  },2000)

 
  numberHolderLi.forEach(item => {
    if(item.classList.length > 0) {
      
    setInterval(() => {
   numberHolderLi.forEach(item => {
     item.classList.remove('anime')
   })


    },9500)
    }
      })

     
       


      let answerEle = document.querySelector('.answer_container')
      let question = document.querySelector('.answer_container_holder')
  
   
      let ansOut = ''
  

    
      ansOut = `
      <li class="ans_list">${checkMaxValue}</li> 
      <li style="font-size:23px; font-weight:600">  + </li>
      <li class="ans_list">${checkMinValue}</li>
      <li style="font-size:23px; font-weight:600"> = </li>
      <li class="ans_list" id="answee">0</li>
     
      `

      answerEle.innerHTML += ansOut

    
      let totalanswerEle = document.querySelector('#answee')
      let overlayEle = document.querySelector('#overlay-con')
      let overlayHead =document.querySelector('#overlay_head')


   

      numberHolderLi.forEach((item) => {
        item.addEventListener("click",() => {

          totalanswerEle.textContent = item.textContent

          if(parseInt(sum) === parseInt(item.textContent)){
            console.log("correct ans :",sum)

            setTimeout(() => {

              overlayEle.classList.add("overlay") 
              numContainerEle.classList.add("displayRemove")
              question.classList.add("displayRemove")
              overlayHead.textContent = "Correct Answer"
            },2000)

            setTimeout(()=>{
              
              overlayEle.classList.remove("overlay")
              question.classList.remove("displayRemove")
              numContainerEle.classList.remove("displayRemove")
              overlayHead.textContent = ""
              window.location.reload()
            },4000)
          }else{
          
            setTimeout(() => {
              overlayEle.classList.add("overlay") 
              numContainerEle.classList.add("displayRemove")
              question.classList.add("displayRemove")
              overlayHead.textContent = "wrong Answer"
              overlayHead.style.color =" red"
  
            },2000)
            setTimeout(()=>{
              
              overlayEle.classList.remove("overlay")
              question.classList.remove("displayRemove")
              numContainerEle.classList.remove("displayRemove")
              overlayHead.textContent = ""
               overlayHead.style.color =""
              totalanswerEle.textContent = 0
            },4000)
          }

        })
      })

    
}





 

if(arithmeticName === "addition" && levelName === "one"){
 
   additionStages(1,10)

}else if(arithmeticName === "addition" && levelName === "two"){

  additionStages(11,100) 

}else{

  additionStages(100,1000)

}








  

