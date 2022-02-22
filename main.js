function startclassification()
{
 navigator.mediaDevices.getUserMedia({audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3PAD5QJy9/model.json',modelready);   
}

function modelready()
{
 classifier.classify(gotResults);   
}

function gotResults(error, results)
{
if (error) 
{
 console.error(error);   
} else {
 console.log(results);
 random_numeber_r = Math.floor(Math.random () * 255) + 1; 
 random_number_g = Math.floor(Math.random () * 255) + 1;
 random_number_b = Math.floor(Math.random () * 255) + 1;
 document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
 document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
 document.getElementById("result_label").style.color = "rgb("+random_numeber_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("result_confidence").style.color = "rgb("+random_numeber_r+","+random_number_g+","+random_number_b+")";
img1 = document.getElementById('Cat1');
img2 = document.getElementById('Dog2');
img3 = document.getElementById('Elephant3');
img4 = document.getElementById('Lion4');

if(results[0].label == "Roar")
{ 
img1.src = 'cat.jpg';
img2.src = 'dog.jpg';
img3.src = 'elephant.jpg';
img4.src = 'lion.gif';
}
else if(results[0].label == "Trumpet")
{ 
img1.src = 'cat.jpg';
img2.src = 'dog.jpg';
img3.src = 'elephant.gif';
img4.src = 'lion.jpg';
}
else if(results[0].label == "Meow")
{ 
img1.src = 'cat.gif';
img2.src = 'dog.jpg';
img3.src = 'elephant.jpg';
img4.src = 'lion.jpg';
}
else if(results[0].label == "Barking")
{ 
img1.src = 'cat.jpg';
img2.src = 'dog.gif';
img3.src = 'elephant.jpg';
img4.src = 'lion.jpg';
}
}
}