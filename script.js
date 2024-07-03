let question = 0;
let answer = 0;
let points = 0;
let data;
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const next = document.getElementById("next");

const title = document.querySelector("#Watah");
const img = document.querySelector("img");
fetchthedata();


async function fetchthedata() {
data = await fetch("quiz.json");
data = await data.json();
console.log(data[0].answers.length);

setQuestion();
}




function setQuestion(){
    title.innerHTML = data[question].Question;
    img.src = data[question].img.src;
    img.alt = data[question].img.alt;
    switch (data[question].answers.length){
        case 4:
            four.value = data[question].answers[3].text;
            three.value = data[question].answers[2].text;
            two.value = data[question].answers[1].text;
            one.value = data[question].answers[0].text;
            four.style.display = "block";
            three.style.display = "block";
            two.style.display = "block";
            one.style.display = "block";
            break;
        case 3:
            three.value = data[question].answers[2].text;
            two.value = data[question].answers[1].text;
            one.value = data[question].answers[0].text;
            four.style.display = "none";
            three.style.display = "block";
            two.style.display = "block";
            one.style.display = "block";
            break;
        case 2:
            two.value = data[question].answers[1].text;
            one.value = data[question].answers[0].text;
            four.style.display = "none";
            three.style.display = "none";
            two.style.display = "block";
            one.style.display = "block";
            break;
        case 1:
            one.value = data[question].answers[0].text;
            four.style.display = "none";
            three.style.display = "none";
            two.style.display = "none";
            one.style.display = "block";
            break;
        case 0:
            four.style.display = "none";
            three.style.display = "none";
            two.style.display = "none";
            one.style.display = "none";
            break;
    }
}
function setButton(number) {
    switch (answer) {
        case 1:
            one.style.backgroundColor = "darkred";
            break;
        case 2:
            two.style.backgroundColor = "darkred";
            break;
        case 3:
            three.style.backgroundColor = "darkred";
            break;
        case 4:
            four.style.backgroundColor = "darkred";
            break;
    }
    if (number != answer) {
    switch (number) {
        case 1:
            one.style.backgroundColor = "darkslateblue";
            break;
        case 2:
            two.style.backgroundColor = "darkslateblue";
            break;
        case 3:
            three.style.backgroundColor = "darkslateblue";
            break;
        case 4:
            four.style.backgroundColor = "darkslateblue";
            break;
    }
    console.log(number);return number;} else {console.log(0);return 0;}
}

one.addEventListener("click", function() {
    answer = setButton(1);
});

two.addEventListener("click", function() {
    answer = setButton(2);
});

three.addEventListener("click", function() {
    answer = setButton(3);
});

four.addEventListener("click", function() {
    answer = setButton(4);
});

function STOPPP(){
    if (points > 0) {
        title.innerHTML = "You ARE a likable person!"
        img.src = "https://cdn.quizly.co/wp-content/uploads/2024/02/26215134/Likeable-Person-Test.jpg";
        img.alt = "Winner!";
    } else if (points < 0) { title.innerHTML = "You aren't a likable person!"
        img.src = "https://media.licdn.com/dms/image/C5112AQHmiNWlCeI51w/article-cover_image-shrink_600_2000/0/1520152401295?e=2147483647&v=beta&t=GDwJfrfKDVXm_u_bDBnzFoMUiOotHJ0wi58gS7qsEIY";
        img.alt = "Loser!";
    } else {
        title.innerHTML = "You are mid."
        img.src = "https://em-content.zobj.net/social/emoji/neutral-face.png";
        img.alt = "Mid.";
    }
    four.style.display = "none";
    three.style.display = "none";
    two.style.display = "none";
    one.style.display = "none";
}


next.addEventListener("click", function() {
    if (answer > 0) {
        switch (data[question].answers[question - 1].value) {
            case "w":
                points += 1;
                break;
            case "l":
                points -= 1;
                break;
            default:
                console.log("Well, how did we get here?")
                break;
        } 
        console.log(points);
        question += 1;
        answer = setButton(answer);

        if (data[question].Question == "End") {STOPPP();} 
        else {setQuestion();};
    } else if (data[question].answers.length == 0) {
        question += 1;
        setQuestion();
    }
});
