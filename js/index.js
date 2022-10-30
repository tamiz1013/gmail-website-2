// changable tex
const minusBtn= document.querySelectorAll(".minus");
const plusBtn= document.querySelectorAll(".plus");
let gmailQuantity= document.querySelectorAll(".gmail-quantity");


//Gmail pricing and amount set
const freshGmail = document.querySelector(".fresh-gmail");
const freshGmailAmount = document.querySelector(".fresh-gmail .amount");
const freshGmailPrice = 0.15;
let freshGmailQuantity=100;
gmailQuantity[0].innerHTML= freshGmailQuantity;
freshGmailAmount.innerHTML= parseInt(freshGmailQuantity*freshGmailPrice);
plusBtn[0].addEventListener('click', ()=>{
    if(freshGmailQuantity<5000){
        if(freshGmailQuantity<500){
            freshGmailQuantity=500;
            gmailQuantity[0].innerHTML= freshGmailQuantity;
        }else if(freshGmailQuantity>=500){
            freshGmailQuantity+=500;
            gmailQuantity[0].innerHTML= freshGmailQuantity;
        }else{

        }
        
    }
    
    
})
minusBtn[0].addEventListener('click', ()=>{
    if( freshGmailQuantity > 100 ){
        if( freshGmailQuantity <= 500 ){
            freshGmailQuantity -= 100;
            gmailQuantity[0].innerHTML = freshGmailQuantity; 
        }
        if( freshGmailQuantity >= 1000){
            freshGmailQuantity -= 500;
            gmailQuantity[0].innerHTML = freshGmailQuantity;
        }
    }

})
freshGmail.addEventListener('click',()=>{
    freshGmailAmount.innerHTML= parseInt(freshGmailQuantity*freshGmailPrice);
    
})

// google voice part  
const googleVoice = document.querySelector(".google-voice");
const googleVoiceAmount = document.querySelector(".google-voice .amount");
const googleVoicePrice = 3.5;
let googleVoiceQuantity=10;
gmailQuantity[1].innerHTML= googleVoiceQuantity;
googleVoiceAmount.innerHTML= googleVoiceQuantity*googleVoicePrice;
plusBtn[1].addEventListener('click', ()=>{
    if(googleVoiceQuantity<200){
        if(googleVoiceQuantity<50){
            googleVoiceQuantity=50;
            gmailQuantity[1].innerHTML= googleVoiceQuantity;
        }else if(googleVoiceQuantity>=50){
            googleVoiceQuantity+=50;
            gmailQuantity[1].innerHTML= googleVoiceQuantity;
        }else{

        }
        
    }
    
    
})
minusBtn[1].addEventListener('click', ()=>{
    if(googleVoiceQuantity>10){
        if(googleVoiceQuantity<=50){
            googleVoiceQuantity-=10;
            gmailQuantity[1].innerHTML= googleVoiceQuantity; 
        }
        if(googleVoiceQuantity>50){
            googleVoiceQuantity-=50;
            gmailQuantity[1].innerHTML= googleVoiceQuantity;
        }
    }

})
googleVoice.addEventListener('click',()=>{
    googleVoiceAmount.innerHTML = googleVoiceQuantity*googleVoicePrice;
    
})

// app password gmail  
const appPasswordGmail = document.querySelector(".app-password-gmail");
const appPasswordGmailAmount = document.querySelector(".app-password-gmail .amount");
const appPasswordGmailPrice = 0.17;
let   appPasswordGmailQuantity=100;
gmailQuantity[2].innerHTML= appPasswordGmailQuantity;
appPasswordGmailAmount.innerHTML=parseInt(appPasswordGmailPrice*appPasswordGmailQuantity);

plusBtn[2].addEventListener('click', ()=>{
    if(appPasswordGmailQuantity<5000){
        if(appPasswordGmailQuantity<500){
            appPasswordGmailQuantity=500;
            gmailQuantity[2].innerHTML= appPasswordGmailQuantity;
        }else if(appPasswordGmailQuantity>=500){
            appPasswordGmailQuantity+=500;
            gmailQuantity[2].innerHTML= appPasswordGmailQuantity;
        }else{

        }
        
    }
})
minusBtn[2].addEventListener('click', ()=>{
    if(appPasswordGmailQuantity>100){
        if(appPasswordGmailQuantity<=500){
            appPasswordGmailQuantity-=100;
            gmailQuantity[2].innerHTML= appPasswordGmailQuantity; 
        }
        if(appPasswordGmailQuantity>=1000){
            appPasswordGmailQuantity-=500;
            gmailQuantity[2].innerHTML= appPasswordGmailQuantity;
        }
    }
})
appPasswordGmail.addEventListener('click',()=>{
    appPasswordGmailAmount.innerHTML=parseInt(appPasswordGmailPrice*appPasswordGmailQuantity);
    
})

// iphone gmail 
const iphoneGmail = document.querySelector(".iphone-gmail");
const iphoneGmailAmount = document.querySelector(".iphone-gmail .amount");
const iphoneGmailPrice = 0.50;
let iphoneGmailQuantity = 100;
gmailQuantity[3].innerHTML= iphoneGmailQuantity;
iphoneGmailAmount.innerHTML=parseInt(iphoneGmailPrice*iphoneGmailQuantity);
plusBtn[3].addEventListener('click', ()=>{

    if( iphoneGmailQuantity < 2000 ){
        if( iphoneGmailQuantity < 500 ){
            iphoneGmailQuantity = 500 ;
            gmailQuantity[3].innerHTML = iphoneGmailQuantity;
        }else if( iphoneGmailQuantity >= 500 ){
            iphoneGmailQuantity += 500 ;
            gmailQuantity[3].innerHTML = iphoneGmailQuantity;
        }else{

        }
        
    }
    
})
minusBtn[3].addEventListener('click', ()=>{

    if( iphoneGmailQuantity > 100 ){
        if( iphoneGmailQuantity <= 500 ){
            iphoneGmailQuantity -= 100;
            gmailQuantity[3].innerHTML = iphoneGmailQuantity; 
        }
        if( iphoneGmailQuantity >= 1000){
            iphoneGmailQuantity -= 500;
            gmailQuantity[3].innerHTML = iphoneGmailQuantity;
        }
    }
})
iphoneGmail.addEventListener('click',()=>{
    iphoneGmailAmount.innerHTML=parseInt(iphoneGmailPrice*iphoneGmailQuantity);
    
})

// gmail 2021  
const gmail2021 = document.querySelector(".gmail-2021");
const gmail2021Amount = document.querySelector(".gmail-2021 .amount");
const gmailPrice2021 = 0.35;
let gmail2021Quantity = 100;
gmailQuantity[4].innerHTML= gmail2021Quantity;
gmail2021Amount.innerHTML= parseInt(gmailPrice2021*gmail2021Quantity);
plusBtn[4].addEventListener('click', ()=>{
    if(gmail2021Quantity<2000){
        gmail2021Quantity+=100;
        gmailQuantity[4].innerHTML= gmail2021Quantity;
    }

    
})
minusBtn[4].addEventListener('click', ()=>{
    if(gmail2021Quantity>100){
        gmail2021Quantity-=100;
        gmailQuantity[4].innerHTML= gmail2021Quantity;
        
    }
})
gmail2021.addEventListener('click',()=>{
    gmail2021Amount.innerHTML= parseInt(gmailPrice2021*gmail2021Quantity);
    
})


// gmail 2020 
const gmail2020 = document.querySelector(".gmail-2020");
const gmail2020Amount = document.querySelector(".gmail-2020 .amount");
const gmailPrice2020 = 0.38;
let gmail2020Quantity = 100;
gmailQuantity[5].innerHTML= gmail2020Quantity;
gmail2020Amount.innerHTML=parseInt(gmailPrice2020*gmail2020Quantity);
plusBtn[5].addEventListener('click', ()=>{
    if(gmail2020Quantity<2000){
        gmail2020Quantity+=100;
        gmailQuantity[5].innerHTML= gmail2020Quantity;
    }


    
})
minusBtn[5].addEventListener('click', ()=>{
    if(gmail2020Quantity>100){
        gmail2020Quantity-=100;
        gmailQuantity[5].innerHTML= gmail2020Quantity;
        
    }
})
gmail2020.addEventListener('click',()=>{
    gmail2020Amount.innerHTML=parseInt(gmailPrice2020*gmail2020Quantity);
    
})


// gmail 2018 
const gmail2018 = document.querySelector(".gmail-2018");
const gmail2018Amount = document.querySelector(".gmail-2018 .amount");
const gmailPrice2018 = 0.40;
let gmail2018Quantity = 100;
gmailQuantity[6].innerHTML= gmail2018Quantity;
gmail2018Amount.innerHTML=parseInt(gmailPrice2018*gmail2018Quantity);
plusBtn[6].addEventListener('click', ()=>{
    if(gmail2018Quantity<2000){
        gmail2018Quantity+=100;
        gmailQuantity[6].innerHTML= gmail2018Quantity;
    }

    
})
minusBtn[6].addEventListener('click', ()=>{
    if(gmail2018Quantity>100){
        gmail2018Quantity-=100;
        gmailQuantity[6].innerHTML= gmail2018Quantity;
        
    }
})
gmail2018.addEventListener('click',()=>{
    gmail2018Amount.innerHTML=parseInt(gmailPrice2018*gmail2018Quantity);
    
})

// gmail 2016 
const gmail2016 = document.querySelector(".gmail-2016");
const gmail2016Amount = document.querySelector(".gmail-2016 .amount");
const gmailPrice2016 = 0.45;
let gmail2016Quantity = 100;
gmailQuantity[7].innerHTML= gmail2016Quantity;
gmail2016Amount.innerHTML=parseInt(gmailPrice2016*gmail2016Quantity);
plusBtn[7].addEventListener('click', ()=>{
    if(gmail2016Quantity<1000){
        gmail2016Quantity+=100;
        gmailQuantity[7].innerHTML= gmail2016Quantity;
    }

    
})
minusBtn[7].addEventListener('click', ()=>{
    if(gmail2016Quantity>100){
        gmail2016Quantity-=100;
        gmailQuantity[7].innerHTML= gmail2016Quantity;
        
    }
})
gmail2016.addEventListener('click',()=>{
    gmail2016Amount.innerHTML=parseInt(gmailPrice2016*gmail2016Quantity);
    
})

// gmail 2014 
const gmail2014 = document.querySelector(".gmail-2014");
const gmail2014Amount = document.querySelector(".gmail-2014 .amount");
const gmailPrice2014 = 0.60;
let gmail2014Quantity = 100;
gmailQuantity[8].innerHTML= gmail2014Quantity;
gmail2014Amount.innerHTML=parseInt(gmailPrice2014*gmail2014Quantity);
plusBtn[8].addEventListener('click', ()=>{
    if(gmail2014Quantity<1000){
        gmail2014Quantity+=100;
        gmailQuantity[8].innerHTML= gmail2014Quantity;
    }

    
})
minusBtn[8].addEventListener('click', ()=>{
    if(gmail2014Quantity>100){
        gmail2014Quantity-=100;
        gmailQuantity[8].innerHTML= gmail2014Quantity;
        
    }
})
gmail2014.addEventListener('click',()=>{
    gmail2014Amount.innerHTML=parseInt(gmailPrice2014*gmail2014Quantity);
    
})

// gmail 2010 
const gmail2010 = document.querySelector(".gmail-2010");
const gmail2010Amount = document.querySelector(".gmail-2010 .amount");
const gmailPrice2010 = 1;
let gmail2010Quantity = 100;
gmailQuantity[9].innerHTML = gmail2010Quantity;
gmail2010Amount.innerHTML=parseInt(gmailPrice2010*gmail2010Quantity);
plusBtn[9].addEventListener('click', ()=>{
    if(gmail2010Quantity<1000){
        gmail2010Quantity+=100;
        gmailQuantity[9].innerHTML = gmail2010Quantity;
    }

    
})
minusBtn[9].addEventListener('click', ()=>{
    if(gmail2010Quantity>100){
        gmail2010Quantity-=100;
        gmailQuantity[9].innerHTML= gmail2010Quantity;
        
    }
})
gmail2010.addEventListener('click',()=>{
    gmail2010Amount.innerHTML=parseInt(gmailPrice2010*gmail2010Quantity);
    
})

const gmail2008 = document.querySelector(".gmail-2008");
const gmail2008Amount = document.querySelector(".gmail-2008 .amount");
const gmailPrice2008 = 2;
let gmail2008Quantity = 100;
gmailQuantity[10].innerHTML= gmail2008Quantity;
gmail2008Amount.innerHTML=parseInt(gmailPrice2008*gmail2008Quantity);
plusBtn[10].addEventListener('click', ()=>{
    if(gmail2008Quantity<1000){
        gmail2008Quantity+=100;
        gmailQuantity[10].innerHTML= gmail2008Quantity;
    }
})
minusBtn[10].addEventListener('click', ()=>{
    if(gmail2008Quantity>100){
        gmail2008Quantity-=100;
        gmailQuantity[10].innerHTML= gmail2008Quantity;
        
    }
})
gmail2008.addEventListener('click',()=>{
    gmail2008Amount.innerHTML=parseInt(gmailPrice2008*gmail2008Quantity);
    
})