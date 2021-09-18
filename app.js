let male = document.getElementById('maleName');
let female = document.getElementById('femaleName');
let loveButton = document.querySelector('.love-button');
let showResult = document.querySelector('.result-love');

let loveIcon = document.querySelector('.love-icon');

// console.log(female);
loveButton.addEventListener('click', loveCalculator);


function loveCalculator(){
    let number = Math.random() * 100;
    number = Math.floor(number) + 1 ;
    if(number<50){
        showResult.innerHTML = `${male.value} and ${female.value} Love Percent is  ${number}% <br>
        "There is No Love!!!"` ;
    }
    else if(number>=50 && number<=79){
        showResult.innerHTML = `${male.value} and ${female.value} Love Percent is  ${number}% <br>
        "Care More Your Love Person"` ;
    }else if(number<50){
        showResult.innerHTML = `${male.value} and ${female.value} Love Percent is  ${number}% <br>
        "If You Really Love Her/Him,You Have to Focus More"` ;
    }else{
        showResult.innerHTML = `${male.value} and ${female.value} Love Percent is  ${number}% <br>
        "Your Love is Perfect!"` ;
    }


    


    
  

}

// console.log(loveButton);