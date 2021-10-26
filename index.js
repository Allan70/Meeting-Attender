// The user has to allow for pop ups in order to use our service.

var meetingInfo = [
    ['Class  1',0800,1000,1,'your http link'],
    ['Class 2',1300,1530,1,'your http link'],
    ['Class 3',1515, 1715,1,'your http link'],
    ['Class 4',0800,1000,1,'your http link'],
    ['Class 5',1400,1600,2,'your http link'],
    ['Class 6',0800,1000,5,'your http link'],
    ['Class 7',1515,1715,5,'your http link']
];

//we will check whethe the meeting is available after every 15 seconds
checker();

//timer that refreshes the code after 15 seconds 15000 milliseconds
function checker() {setInterval(loadclass, 15000);}


//function that loads info into the launching class
function loadclass(){
for(let i = 0; i < meetingInfo.length; i++){
   //function that launches the meeting
   launchClass(meetingInfo[i][0],meetingInfo[i][1],meetingInfo[i][2],meetingInfo[i][3], meetingInfo[i][4]); 
}

}

function day(num){
          
   var buck;
   if(num = 1){
     buck = 'Monday';
   }else if(num = 2){
       buck = 'Tuesday';
   }else if(num =3){
       buck = 'Wednesday';
   }else if(num = 4){
       buck = 'Thursday';
   }else if(num = 5){
       buck = 'Friday';
   }else if(num = 6){
       buck = 'Saturday';
   }else if(num =7 ){
       buck = 'Sunday';
   }

   return buck;
}


function launchClass(name, timeStart, endTime,setDay, link){
    
   // function to execute class when its 15 minutes before time
       // nowDay = currentDay
       // nowTime = current Time
       
function eggTimer(endTime, currentTime){
   var egg = endTime - currentTime;
   var sec;
   // convert egg time to milliseconds
   if(egg < 60){
      sec = egg * 60 * 1000;
   }else{
       var minutes = egg % 100;
       var quotient = egg/100;
       var hour = Math.round(quotient);
       sec = (hour*60*60) + (minutes*60);
       sec *= 1000;
      
   }
   return sec;
} 

       const currentDate = new Date();
       const currentDay = currentDate.getDay();
       const currentTime = (currentDate.getHours()*100) + currentDate.getMinutes();
       var timeOfficial = timeStart - 15;
       var inClass = false;
        
       if (timeOfficial == currentTime && setDay == currentDay){
           // send an    console.log or a text message reminding the user that they have a class in 15 minutes
           console.log('You are 15 mins early to ' + name);
           inClass = true;

           googleLink(link);

       }else if((timeStart == currentTime && setDay == currentDay)&&(timeStart <= currentTime && setDay == currentDay)){
           console.log('You are on time to ' + name);
           inClass = true;
           googleLink(link);

       }else if((endTime >= currentTime  && setDay == currentDay)&&(timeStart <= currentTime  && setDay == currentDay)){
           console.log('you are late to '+ name);
           inClass = true;
           googleLink(link);
           // begin the timer once the class has finished
          

       }else if(endTime == currentTime  && setDay == currentDay){
           console.log(name + ' class will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime +'hrs');
       }else{
           console.log(name + ' class will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime+'hrs');
       }

       inClass ? setTimeout(checker,eggTimer(endTime,currentTime)) : checker;
   

   function googleLink(link){
       // a finction to execute a google link
       window.open(link, '_blank');
   }
}
