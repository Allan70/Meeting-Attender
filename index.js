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

//timer that refreshes the code after 60 seconds 60000
function checker() {
    setTimeout(loadclass, 15000);
}

//function that loads info into the launching class
function loadclass(){
for(let i = 0; i < classInfo.length; i++){
   //function that launches the meeting
   launchClass(classInfo[i][0],classInfo[i][1],classInfo[i][2],classInfo[i][3], classInfo[i][4]); 
}

}

//
function day(num){
          
   var dayOfWeek;
   if(num = 1){
     dayOfWeek = 'Monday';
   }else if(num = 2){
     dayOfWeek = 'Tuesday';
   }else if(num =3){
     dayOfWeek = 'Wednesday';
   }else if(num = 4){
     dayOfWeek = 'Thursday';
   }else if(num = 5){
     dayOfWeek = 'Friday';
   }else if(num = 6){
     dayOfWeek = 'Saturday';
   }else if(num =7 ){
     dayOfWeek = 'Sunday';
   }

   return dayOfWeek;
}

// 
function launchClass(name, timeStart, endTime,setDay, link){
    
   // function to execute class when its 15 minutes before time
       
function eggTimer(endTime, currentTime){
       var egg = endTime - currentTime;
       var mSec;
   // convert egg time to milliseconds
       var minutes = egg % 100;
       var hour = Math.round(egg/100);
       mSec = ((hour*60*60) + (minutes*60))*1000;
      
    
   return mSec;
} 

       const currentDate = new Date();
       const currentDay = currentDate.getDay();
       const currentTime = (currentDate.getHours()*100) + currentDate.getMinutes();
       const now = currentTime;
       var timeOfficial = timeStart - 15;
       var inClass = false;
        
       if ((timeOfficial == currentTime && setDay == currentDay)&&(timeOfficial <= currentTime && setDay == currentDay)){
           // send an    console.log or a text message reminding the user that they have a class in 15 minutes
           console.log('You are 15 mins early to ' + name);
           googleLink(link,checker,endTime, now);
           

       }else if((timeStart == currentTime && setDay == currentDay)&&(timeStart <= currentTime && setDay == currentDay)){
           console.log('You are on time to ' + name);
           googleLink(link,checker,endTime, now);
           

       }else if((endTime >= currentTime  && setDay == currentDay)&&(timeStart <= currentTime  && setDay == currentDay)){
           console.log('you are late to '+ name);
           googleLink(link,checker,endTime, now);
           
           // begin the timer once the class has started
          

       }else if(endTime == currentTime  && setDay == currentDay){
           console.log(name + ' meeting will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime +'hrs');
           checker;
       }else{
           console.log(name + ' meeting will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime+'hrs');
           checker;
       }

       // inClass ? setTimeout(checker,eggTimer(endTime,currentTime)) : checker;
   

   function googleLink(link, checker,endTime, now){
       // a finction to execute a google link
       window.open(link, '_blank');
       setTimeout(checker,eggTimer(endTime,now));
   }
}
