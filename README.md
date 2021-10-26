# Meeting-Attender😋

This is a script that will automate attending virtual meetings 🎥. 

You have the option to assign a name to your meetings and the time that they would occur.
The time⌚ of start and time of end of meeting and the link to the meeting are as well required.

# Syntax 👨🏽‍💻👩🏽‍💻

Meeting information should be entered in the multidimensional array using the following syntax.

👾👾👾👾👾👾👾👾👾👾👾👾👾

[   'Meeting Name'  ,  start-time-24hrs  ,  end-time-24hrs , day-integer ,  'http link'  ],
        
Meeting Name: It is of type String. Here you can enter the name of your meeting.

Start Time: <start-time-24hr-integer> The start time is of type int. You have to enter the time that your meeting would start. You will enter your values in a 24hour format but in interger form. example: 
  
  800  (meaning 0800hrs)
  
  2345 (meaning 2345hrs)
  
End Time: <end-time-24hr-integer> The end time is of type int. You will to enter the time that your meeting would end. You will enter your values in a 24hour format but in interger form. example: 
 
  900  (meaning 0900hrs)
  
  2135 (meaning 2135hrs)
 
Day integer: <day-integer> Here you will enter the integer corresponding to the day of the week 
            
                    1 -> Monday 😣      2 -> Tuesday 🤔      3 -> Wednesday 😐     4 -> Thursday🤗    5 -> Friday🥳   6 -> Saturday 🤩   7 -> Sunday 😎  
  
Link - The type is String. You will enter your meetings link at the value 'your_link'
  
Finally you are done! Repeat the process in the following dimensions of the array entering other meetings that might be of interest.

  # Deploy ✈🌏
  
You can run the script in your html file.
Allow popups for your html doc page inthe browser as it will redirect to your desired meeting links in a separate tab in the browser.
  
That is all, have fun😁.

