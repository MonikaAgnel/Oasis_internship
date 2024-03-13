let CelciusInput=document.querySelector('#Celcius>input')
let FarenheitInput=document.querySelector('#Farenheit>input')
let KelvinInput=document.querySelector('#Kelvin>input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

CelciusInput.addEventListener('input', function(){
    let CTemp=parseFloat(CelciusInput.value)
    let FTemp=(CTemp*(9/5))+32
    let KTemp=CTemp+273.15

    FarenheitInput.value= roundNumber(FTemp)
    KelvinInput.value=roundNumber(KTemp)
})
FarenheitInput.addEventListener('input', function(){
    let FTemp=parseFloat(FarenheitInput.value)
    let CTemp=(FTemp-32)*(5/9)
    let KTemp=(FTemp-32)*(5/9) +273.15
   

    CelciusInput.value=roundNumber(CTemp)
    KelvinInput.value=roundNumber(KTemp)
})
KelvinInput.addEventListener('input', function(){
    let KTemp=parseFloat(KelvinInput.value)
    let CTemp=KTemp-273.15
   let FTemp=(KTemp-273.15)*(9/5)+32

    CelciusInput.value=roundNumber(CTemp)
    FarenheitInput.value=roundNumber(FTemp)
})
btn.addEventListener('click',()=>{
    CelciusInput.value=" "
    FarenheitInput.value=" "
    KelvinInput.value=" "
})