console.log("im from file js");



document.getElementById('home').addEventListener('click', function(){
 
    const pricePage = document.getElementById('pricePage');
    pricePage.style.display = "none";


    const mainSection = document.getElementById('mainSection');
    mainSection.style.display = "none"
    const header = document.getElementById('header');
    header.style.display = "block";


    const about = document.getElementById('aboutSection');
    about.style.display = "none";

    const home = document.getElementById('mainSection');
    home.style.display = "block"




    

})











document.getElementById('pricing').addEventListener('click', function(){
 
    const pricePage = document.getElementById('pricePage');
    pricePage.style.display = "block";


    const mainSection = document.getElementById('mainSection');
    mainSection.style.display = "none"
    const header = document.getElementById('header');
    header.style.display = "none";


    const about = document.getElementById('aboutSection');
    about.style.display = "none"

    console.log("Pricing Section")

})


document.getElementById('about').addEventListener('click', function(){
 
    const pricePage = document.getElementById('pricePage');
    pricePage.style.display = "none";


    const mainSection = document.getElementById('mainSection');
    mainSection.style.display = "none"

    const header = document.getElementById('header');
    header.style.display = "none"
    
    const about = document.getElementById('aboutSection');
    about.style.display = "block"


    console.log("Pricing Section")

})