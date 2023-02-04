const week = document.getElementsByClassName("weekview-day-schedule-container");
var week_events = []; // holds all events in a week: break, lunch, on queue, meeting

for (let i = 0; i < week.length; i++) {
	
	// each line is an item in this array
    var day = week[i].innerText.split("\n");
    // 2023-02-03
    var the_date = day[0].split(" ")[1].replace(",","");
    // Work or Day Off
    var type = day[0].split(",")[1].trim();

    // add events in single day to day array
    if ( type == "Day Off") {
	
			// holds all events in a day
			var day_events = [];
    		day = week[i].innerText.split(",");
    		the_date = day[0].split(" ")[1];

    		day_events.push(day[1].trim()); // Subject
		    day_events.push(the_date); // Start Date
		    day_events.push(""); // Start Time
		    day_events.push(the_date); // End Date
		    day_events.push(""); // End Time
		    day_events.push("TRUE"); // All Day Event
		    day_events.push(day[1].trim()); // Description
		    day_events.push(""); // Location
		    day_events.push("TRUE"); // Private
    
    		week_events.push(day_events);

    } else {
	    for (var u = 1; u < day.length - 1 ; u += 2) { 
			var events = [];
	    	
		    events.push(day[u]); // Subject
		    events.push(the_date); // Start Date
		    events.push(day[u+1].split("–")[0].trim()); // Start Time
		    events.push(the_date); // End Date
		    events.push(day[u+1].split("–")[1].trim()); // End Time
		    events.push("FALSE"); // All Day Event
		    events.push(day[0].split(",")[1].trim() + " @" + day[0].split(",")[2]); // Description
		    events.push(""); // Location
		    events.push("TRUE"); // Private

		    week_events.push(events);
	    }
	}
}

console.log(week_events);

let csvContent = "Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private\n" + week_events.map(e => e.join(",")).join("\n");

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

download("weekly_schedule.csv", csvContent);
