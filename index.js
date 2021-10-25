// The user has to allow for pop ups in order to use our service.
// use an array to identify the number of classes.
// use an array to hold each variable for each class
// a function to run the script live through out the year
var classInfo = [
    ['Class  1',0800,1000,1,'your http link'],
    ['Class 2',1300,1530,1,'your http link'],
    ['Class 3',1515, 1715,1,'your http link'],
    ['Class 4',0800,1000,1,'your http link'],
    ['Class 5',1400,1600,2,'your http link'],
    ['Class 6',0800,1000,5,'your http link'],
    ['Class 7',1515,1715,5,'your http link']
];

for(let i = 0; i < classInfo.length; i++){
    for(let k = 0; k < classInfo[i].length; k++){
        launchClass(classInfo[i][k]);
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

function launchClass(name, timeStart, endTime,setDay,link){
     
    // function to join class when its 15 minutes before time
       
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        const currentTime = (currentDate.getHours()*100) + currentDate.getMinutes();
        var timeOfficial = timeStart - 15;
         
        if (timeOfficial == currentTime && setDay == currentDay){
            // send an alert or a text message reminding the user that they have a class in 15 minutes
            alert('You are 15 mins early to ' + name);
            googleLink(link);
        }else if(timeStart ==currentTime && setDay == currentDay){
            alert('You are on time to ' + name);
            googleLink(link);
        }else if(timeStart <= currentTime && setDay == currentDay){
            alert('you are tardy to ' + name);
            googleLink(link);
        }else if(endTime == currentTime  && setDate == currentDay){
            console.log(name + ' class will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime +'hrs');
        }else{
            console.log(name + ' class will be available on '+ day(setDay) + ' at ' + timeStart +'hrs to '+ endTime+'hrs');
        }
    
    

    function googleLink(link){
        // a function to execute a google http link
        window.open(link, '_blank');
    }
    
    

}
