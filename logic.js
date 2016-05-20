/*Goal:
 * Write a JS program to display the current day and time in the following format.
 * 		Sample output:
 *    	Today is: Friday
 *   	Current time is: 4 PM : 50 : 22
*/

//need to have the text show up "Today is: "
//can I do that as a paragraph in html and have it pull that element?
//like getElementById such that the JS would give the day back as a string?
//Today is: (<p> in html) and then have a way to put the JS string next...?

//one way to do this is to use documnet.write (access the write method on the document property of JS)
//this is considered bad practice and I think is completely out of date.

//the better way is to use getElementById("").innerHTML = [] where the element between the "" is whatever you give a tag
//like <p> where it would look like <p id="this tag"><p> -- see how it's blank between? That's cuz the JS will write something
//to it using getElementById("this tag").innerHTML = "Write this" where "Write this" is just a string (could be any statement)

function showTime(){
	var d = new Date();
	document.getElementById("date and time").innerHTML = d;
}

var today = new Date();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
'Friday', 'Saturday'];
document.getElementById("today is").innerHTML = dayList[day];
var day = today.getDay()
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//gives the day
document.getElementById("today is").innerHTML = "Today is " + dayList[day];

//prepand means to add something to the beginning of something else, like a prefix
var prepand = (hour >= 12) ? " PM " : " AM ";

	if (hour === 0 && prepand === ' PM ') {   
		if (minute === 0 && second === 0)  {   
			hour = 12;  
			prepand =' Noon';  //this and the lines above account for exact noon
		} else {   
			hour = 12;  
			prepand = ' PM'; //otherwise it just is PM...?
		}   
	}   
	if (hour === 0 && prepand === ' AM ') {   
		if (minute === 0 && second === 0)  {   
			hour = 12;  
			prepand =' Midnight'; //another one to set for midnight
		} else {   
			hour = 12;  
			prepand = ' AM';  
		}   
	}   
	document.getElementById("time is").innerHTML = "Current time is: " + " Hour: " + hour +
	 						prepand + ' minute: ' + minute + " and seconds: " + second;