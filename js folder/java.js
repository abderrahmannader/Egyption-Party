



$(".nav-section").animate({"left" : -$(".nav-section2").innerWidth()},1000)

$(".open").click(function(){
    
        $(".nav-section").animate({"left" : 0},1000)
   
    
})

$(".open2").click(function(){
    
    $(".nav-section").animate({"left" : -$(".nav-section2").innerWidth()},1000)


})

$(".result").slideUp(300)
$(".chocie").click(function(){
    $(".result").slideToggle(300)
})

$(".result2").slideUp(300)
$(".chocie2").click(function(){
    $(".result2").slideToggle(300)
})

$(".result3").slideUp(300)
$(".chocie3").click(function(){
    $(".result3").slideToggle(300)
})

$(".result4").slideUp(300)
$(".chocie4").click(function(){
    $(".result4").slideToggle(300)
})


 

setInterval(function(){

let DateNow = new Date().getTime();

let DateOfEvent = new Date("Jan 29, 2024").getTime()

let dateDiff = DateOfEvent - DateNow

let dateInDays = Math.floor(dateDiff /1000 /60 /60 /24)

let dateInHours = Math.floor(dateDiff % (1000*60*60*24) / (1000*60*60) )

let dateInMin = Math.floor(dateDiff % (1000*60*60) /1000 /60   )

let dateInsec = Math.floor(dateDiff % (1000*60) /1000 )

$(".days").html(dateInDays)
$(".hours").html(dateInHours)
$(".minutes").html(dateInMin)
$(".seconds").html(dateInsec)




},100)

// let DateDays = 



// new Date().getDate()
// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()

// DateOfEvent = new Date("Jan 29, 2024").getTime()


let counter = "100"



$(".textareaHolder").on('keyup', function(){


    let lengthOfWords = $(".textareaHolder").val()
    let lengthOfWords2 = lengthOfWords.length
  
    let finalRes =  counter - lengthOfWords2
  
  
if(finalRes > 0)
{
    
    $(".counter").html(finalRes)
  
    console.log(finalRes)
  
    console.log(lengthOfWords2)
}else{
    $(".counter").html("your available character finished")
}


    
    
})


$(".counter")
