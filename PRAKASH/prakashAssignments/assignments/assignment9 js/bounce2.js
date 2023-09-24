var namespan = document.getElementById("ass9-name");
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const errorTextName = document.querySelector('.error-text-name');
var minage = document.getElementById("ass9-Minage");
var maxage = document.getElementById("ass9-Maxage");
var form = document.getElementById("display-flex");
const errorTextmin = document.querySelector('.error-text-minage');
const errorTextmax = document.querySelector('.error-text-maxage');
const minicon1 = document.getElementById('minicon1');
const minicon2 = document.getElementById('minicon2');
const maxicon1 = document.getElementById('maxicon1');
const maxicon2 = document.getElementById('maxicon2');
const selectCountry = document.getElementById("country");
const countryFlags = document.getElementById("flags");
let image1 = document.getElementById("ass9-image1");
let image2 = document.getElementById("ass9-image2");
let image3 = document.getElementById("ass9-image3");
let ran = (Math.ceil(Math.random()*24));
let ran1 = (Math.ceil(Math.random()*24));
let ran2 = (Math.ceil(Math.random()*24));
var resultOfAss9;
const labelN = document.getElementById("name");
const labelT = document.getElementById("total");
const labelL = document.getElementById("location");
const images = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];
const images1 = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];
const images2 = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];

var letters = /^[A-Za-z ]+$/;
// var num=/^[0-9]{2,3}+$/

setInterval(() => {
    let ran = (Math.ceil(Math.random() * 24));
    let ran1 = (Math.ceil(Math.random() * 24));
    let ran2 = (Math.ceil(Math.random() * 24));
    image1.src = images[ran];
    image2.src = images1[ran1];
    image3.src = images2[ran2];
},5000);


function check() {
    if (namespan.value.match(letters)) {
        labelN.innerHTML = `Name       :${namespan.value}`
        namespan.style.borderColor = "#27ae60";
        icon1.style.display = "none";
        icon2.style.display = "block";
        errorTextName.style.display = "none";
        // namespan.value=resName.value;
    } else {
        // alert("Error");
        namespan.style.borderColor = "#e74c3c";
        icon1.style.display = "block";
        icon2.style.display = "none";
        errorTextName.style.display = "block";
    }
    if (namespan.value == "") {
        namespan.style.borderColor = "#lightgrey";
        icon1.style.display = "none";
        icon2.style.display = "none";
        errorTextName.style.display = "none";
    }
    

    // **************************************** minage ****************************************************************
    if (Number(minage.value) < Number(maxage.value)) {

        minage.style.borderColor = "#27ae60";
        minicon1.style.display = "none";
        minicon2.style.display = "block";
        errorTextmin.style.display = "none";
        maxage.style.borderColor = "#27ae60";
        maxicon1.style.display = "none";
        maxicon2.style.display = "block";
        errorTextmax.style.display = "none";
    } else {

        minage.style.borderColor = "#e74c3c";
        minicon1.style.display = "block";
        minicon2.style.display = "none";
        errorTextmin.style.display = "block";
        maxage.style.borderColor = "#e74c3c";
        maxicon1.style.display = "block";
        maxicon2.style.display = "none";
        errorTextmax.style.display = "block";
    }
    if (!minage.value.match(/^[0-9]+$/)) {
        errorTextmin.innerHTML="Please Enter only Numbers";
        minage.style.borderColor = "#e74c3c";
        minicon1.style.display = "block";
        minicon2.style.display = "none";
        errorTextmin.style.display = "block";
  
    } if(!maxage.value.match(/^[0-9]+$/)) {
        errorTextmax.innerHTML="Please Enter only Numbers";
        maxage.style.borderColor = "#e74c3c";
        maxicon1.style.display = "block";
        maxicon2.style.display = "none";
        errorTextmax.style.display = "block";
    }
    // if ((Number(maxage.value) < Number(minage.value))){
    // minage.style.borderColor = "#e74c3c";
    // minicon1.style.display = "block";
    // minicon2.style.display = "none";
    // errorTextmin.style.display = "block";
    // minage.style.borderColor = "#e74c3c";
    // maxicon1.style.display = "block";
    // maxicon2.style.display = "none";
    // errorTextmax.style.display = "block";
    // } else {

    //     minage.style.borderColor = "#27ae60";
    //     minicon1.style.display = "none";
    //     minicon2.style.display = "block";
    //     errorTextmin.style.display = "none";
    //     maxage.style.borderColor = "#27ae60";
    //     maxicon1.style.display = "none";
    //     maxicon2.style.display = "block";
    //     errorTextmax.style.display = "none";
    // }
    // if ((Number(minage.value) > Number(maxage.value))){
    //     minage.style.borderColor = "#e74c3c";
    //     minicon1.style.display = "block";
    //     minicon2.style.display = "none";
    //     errorTextmin.style.display = "block";
    //     minage.style.borderColor = "#e74c3c";
    //     maxicon1.style.display = "block";
    //     maxicon2.style.display = "none";
    //     errorTextmax.style.display = "block";
    //     } else {
    
    //         minage.style.borderColor = "#27ae60";
    //         minicon1.style.display = "none";
    //         minicon2.style.display = "block";
    //         errorTextmin.style.display = "none";
    //         maxage.style.borderColor = "#27ae60";
    //         maxicon1.style.display = "none";
    //         maxicon2.style.display = "block";
    //         errorTextmax.style.display = "none";
    //     }
    // if (Number(maxage.value) == Number(minage.value)) {
    //     minage.style.borderColor = "#e74c3c";
    //     maxage.style.borderColor = "#e74c3c";
    //     maxicon1.style.display = "block";
    //     errorTextmax.style.display = "block";
    //     errorTextmin.style.display = "block";
    //     minicon1.style.display = "block";
    // }
    
    // if (minage.value == "") {
    //     minage.style.borderColor = "#lightgrey";
    //     minicon1.style.display = "none";
    //     minicon2.style.display = "none";
    //     errorTextmin.style.display = "none";
    // }
    if (maxage.value == "") {
        maxage.style.borderColor = "#lightgrey";
        maxicon1.style.display = "none";
        maxicon2.style.display = "none";
        errorTextmax.style.display = "none";

    } 
    if (minage.value == ""){
         minage.style.borderColor = "#lightgrey";
        minicon1.style.display = "none";
        minicon2.style.display = "none";
        errorTextmin.style.display = "none";
    }
    
    labelT.innerHTML = `Total age  :${Number(minage.value) + Number(maxage.value)}`;

if (selectCountry.value == "India") {
        countryFlags.src = "../../images/india.jpeg";
    } else

        if (selectCountry.value == "USA") {
            countryFlags.src = "../../images/USA flag.jpeg";            
        } else
            if (selectCountry.value == "Bangladesh") {
                countryFlags.src = "../../images/Bangla flag.jpeg";
            } else
                if (selectCountry.value == "Israel") {
                    countryFlags.src = "../../images/israel flag.jpeg";
                } else
                    if (selectCountry.value == "Mexico") {
                        countryFlags.src = "../../images/mexico.jpeg";
                    } else
                        if (selectCountry.value == "France") {
                            countryFlags.src = "../../images/france flag.jpeg";
                        } else
                            if (selectCountry.value == "China") {
                                countryFlags.src = "../../images/china flag.jpeg";
                            } else
                                if (selectCountry.value == "Sri lanka") {
                                    countryFlags.src = "../../images/sri lanka flag.jpeg";
                                } else {
                                    countryFlags.src = "../../images/img27.jpg";
                                }
                
    if (selectCountry.value == "") {
        //To do
    } else {
        labelL.innerHTML = `Location   :${selectCountry.value}`;
    }
}


