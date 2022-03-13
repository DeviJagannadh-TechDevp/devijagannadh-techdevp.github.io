//Created by smitbarmase on 7 Jan 2020.
const dic = {'S':10,'A':9,'B':8,'C':7,'D':6,'E':5,'F':0}
let subList = []

class Subject{
  constructor(){
    this.id = uuidv4()
  }
  set grade(value){
    this.gradeValue = dic[value.toUpperCase()] //Setter to convert grade to number
  }
}

//Update DOM data function
const updateDom = function(){
  document.querySelectorAll('.name').forEach(function(q,i){
    q.placeholder = '[OPTIONAL] Subject '.concat(i+1) //Update placeholder in HTML
  })
  document.querySelectorAll('.index').forEach(function(q,i){
    q.textContent = (i+1)+')' //Update index in HTML
  })
}

//Remove subject function
const removeSubject = function(sub){
  subList.forEach(function(e,i){
    if(e.id===sub.id){
      const subRemove = document.querySelectorAll('.sub')[i]
      document.querySelector('#subList').removeChild(subRemove)
      subList.splice(i,1)
    }
  })
  updateDom()
}

//Calculation function
const calculate = function(){
  let coursePoint = 0 , totalCredit = 0
  subList.forEach(function(sub){
    coursePoint += sub.gradeValue*sub.credit
    totalCredit += sub.credit
  })
  return (coursePoint/totalCredit).toFixed(2)
}

//Add subject function
const addSubject = function(){
  const sub = new Subject()
  subList.push(sub)

  const subElement = prototype.cloneNode(true)
  document.querySelector('#subList').appendChild(subElement) //Append subject prototype in HTML
  updateDom() //Update HTML data

  //Event listeners for HTML elements
  document.querySelectorAll('.remove')[subList.length-1].addEventListener('click', function(){
    removeSubject(sub) //Remove button event listener
    if(calculate()===Number.NaN){ //Getting NaN means some grades or credits, yet to be filled.
      document.querySelector('#result').textContent = 'Enter your grades and credits'
    }else{
      document.querySelector('#result').textContent = 'Click Calculate to get GPA'
    }
  })

  document.querySelectorAll('.grade')[subList.length-1].addEventListener('input', function(e){
    sub.grade = e.target.value //Store grade from DOM input to JS object.
  })

  document.querySelectorAll('.credit')[subList.length-1].addEventListener('input', function(e){
    sub.credit = Number(e.target.value) //Store credit from DOM input to JS object.
  })
}

//Getting prototype subject DOM and clearing HTML
const prototype = document.querySelector('.sub')
document.querySelector('#subList').innerHTML = ''
addSubject() //Add default subject

//"Add Subject" button listener
document.querySelector('#add').addEventListener('click', function(){
  addSubject()
  document.querySelector('#result').textContent = 'Enter your grades and credits'
})

//"Calculate" button listener
document.querySelector('#calc').addEventListener('click', function(){
  document.querySelector('#result').textContent = 'Your GPA is ' + calculate()
})
