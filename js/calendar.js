document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
      console.error("Calendar element not found. Aborting calendar initialization.");
      return;
  }

  // Get today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();

  var todayFormatted = yyyy + '-' + mm + '-' + dd;

  // Initialize FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: todayFormatted, // Set initialDate to today's date
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [] // Start with empty events array
    });

    // Define the range of years to iterate over
    var startYear = yyyy; // var startYear = yyyy - 1; Adjusted start year to 1 years before current year
    var endYear = yyyy; // var endYear = yyyy + 1; Extended end year to 1 years after current year

    // Define an array of event details
    var events = [
      // January
      { title: 'New Year / Mary Mother Of God.', day: '01-01' },
      { title: 'Epiphany of the Lord.', day: '01-04' },
      { title: 'Baptism of the Lord (Feast) (Security/Church Maintenance Collection).', day: '01-11' },
      { title: 'Memorial Mass in honor of Bishop John Moore SMA.', day: '01-20' },
      { title: '3rd Sunday Year A.', day: '01-25' },
      // February
      { title: '4th Sunday Year A.', day: '02-01' },
      { title: 'Presentation of the lord (Feast).', day: '02-02' },
      { title: 'Begining of the year retreat.', day: '02-02' },
      { title: 'Begining of the year retreat.', day: '02-03' },
      { title: 'Begining of the year retreat.', day: '02-04' },
      { title: 'Begining of the year retreat.', day: '02-05' },
      { title: '5th Sunday Year A (Security/Church Maintenance Collection).', day: '02-08' },
      { title: '6th Sunday Year A.', day: '02-15' },
      { title: 'Ash Wednesday (Stations of the Cross starts at 5:00pm, Wednesdays & Fridays).', day: '02-18' },
      { title: '1st Sunday of LENT Year A.', day: '02-22' },
      // March
      { title: '2nd Sunday of LENT Year A.', day: '03-01' },
      { title: '3rd Sunday of LENT Year A.', day: '03-08' },
      { title: '4th Sunday of LENT Year A (Leatare Sunday), (Security Collection).', day: '03-01' },
      { title: 'Feast of St. Patrick (Secondary Patron of Nigeria)', day: '03-17' },
      { title: '5th Sunday of LENT Year A (1st Diocesan Fund Raising Launching).', day: '03-22' },
      { title: 'The Annunciation of the Lord (Solemnity)/World day for Unborn Child', day: '03-25' },
      { title: 'Palm Sunday.', day: '03-29' },
      { title: 'Chrism Mass', day: '03-31' },
      // April
      { title: 'Holy Thursday/Maundy Thursday. Evening Mass of the Lord’s Supper at 6:00 pm ', day: '04-02' },
      { title: 'Good Friday/Passion Play: 8:00 am, followed by Recollection (All day).', day: '04-03' },
      { title: 'Holy Saturday/Mass of Easter Vigil', day: '04-04' },
      { title: 'Easter Sunday (One Mass by 7:00 am).', day: '04-05' },
      { title: '2nd Sunday of Easter (Divine Mercy Sunday) (Security/Church Maintenance Collection)', day: '04-12' },
      { title: '3rd Sunday of Easter Year A.', day: '04-19' },
      { title: '4th Sunday of Easter Year A (Good Shepherd Sunday).', day: '04-26' },
      // May
      { title: 'St. Joseph the worker (Opt. Memorial) / Workers day & May Devotion starts daily by 5:00pm.', day: '05-01' },
      { title: '5th Sunday of Easter Year A.', day: '05-03' },
      { title: '6th Sunday of Easter Year A (Security/Church Maintenance Collection)', day: '05-10' },
      { title: 'Ascension of the Lord (Holy day of Obligatio).', day: '05-14' },
      { title: '7th Sunday of Easter.', day: '05-17' },
      { title: 'Penticost Sunday (Solemnity).', day: '05-24' },
      { title: 'Most Holy Trinity (Solemnity).', day: '05-31' },
      // June
      { title: 'The Most Holy Body & Blood of Christ (Solemnity-Corpus Christi).', day: '06-07' },
      { title: 'Most Sacred Heart of Jesus (Solemnity).', day: '06-12' },
      { title: 'Immaculate Heart of the Blessed Virgin Mary (Memorial).', day: '06-13' },
      { title: '11th Sunday Year A (Security/Church Maintenance Collection).', day: '06-14' },
      { title: '12th Sunday Year A.', day: '06-21' },
      { title: '13th Sunday Year A.', day: '06-28' },
      { title: 'S.S. Peter & Paul (Solemnity).', day: '06-29' },
      // July
      { title: 'Bishop Hillary’s Priestly Anniversary.', day: '07-01' },
      { title: '14th Sunday Year A.', day: '07-05' },
      { title: '15th Sunday Year A. (Security/Church Maintenance Collection).', day: '07-12' },
      { title: '16th Sunday Year A.', day: '07-19' },
      { title: '17th Sunday Year A.', day: '07-26' },
      // August
      { title: '18th Sunday Year A (Youth Week Starts).', day: '08-02' },
      { title: 'Transfiguration of the Lord (Feast).', day: '08-06' },
      { title: '19th Sunday Year A (Security/Church Maintenance Collection).', day: '08-09' },
      { title: 'Assumption of Blessed Virgin Mary (Solemnity).', day: '08-15' },
      { title: '20th Sunday Year A.', day: '08-16' },
      { title: '21st Sunday Year A.', day: '08-23' },
      { title: 'St. Monica’s (Feast day of Igbo Women).', day: '08-27' },
      { title: 'St. Augustine (Tiv & Hausa Choir feast day).', day: '08-28' },
      { title: '22nd Sunday Year A.', day: '08-30' },
      // September
      { title: '23rd Sunday Year A.', day: '09-06' },
      { title: 'Birthday of the Blessed Virgin Mary.', day: '09-08' },
      { title: 'Exaltation of the Cross (Feast), (Security/Church Maintenance Collection).', day: '09-13' },
      { title: '25th Sunday Year A (Children & Youth Harvest).', day: '09-20' },
      { title: '26th Sunday Year A.', day: '09-27' },
      { title: 'St. Jerome (lay Readers day).', day: '09-30' },
      // October
      { title: 'October Devotion starts daily by 5:00 PM (First & Last days Rosary Procession by 4:00 PM).', day: '10-01' },
      { title: '27th Sunday Year A.', day: '10-04' },
      { title: '28th Sunday Year A (Security/Church Maintenance Collection).', day: '10-11' },
      { title: '29th Sunday Year A.', day: '10-18' },
      { title: '30th Sunday Year A.', day: '10-25' },
      // November
      { title: 'All Saints (Solemnity).', day: '11-01' },
      { title: 'All Souls (Feast) Sunday.', day: '11-02' },
      { title: '32nd Sunday Year A (Security/Church Maintenance Collection).', day: '11-08' },
      { title: '33rd Sunday Year A.', day: '11-15' },
      { title: 'Family week.', day: '11-18' },
      { title: 'Family week.', day: '11-19' },
      { title: 'Family week.', day: '11-20' },
      { title: '34th Sunday Year A.', day: '11-22' },
      { title: '1st Sunday of Advent Year A (Adult Harvest & Bazaar).', day: '11-29' },
      // December
      { title: '2nd Sunday of Advent Year A.', day: '12-02' },
      { title: 'Immaculate Conception of the Blessed Virgin Mary (Solemnity).', day: '12-08' },
      { title: '3rd Sunday of Advent Year A (Security/Church Maintenance Collection).', day: '12-13' },
      { title: '9 days Novena to the Holy Family begins.', day: '12-18' },
      { title: '4th Sunday of Advent Year A.', day: '12-20' },
      { title: 'Nativity of the Lord (Christmas day).', day: '12-25' },
      { title: 'St. John’s the Evangelist Feast day/Feast of the Holy Family', day: '12-27' },
      // End of var events
      // How to ask chatGPT for text formatting!
      // "Can you convert the list of dates and events for [month] into the JavaScript array format like you did for [previous month]?"
      // "Can you convert the December events and their dates into a JavaScript array format?"
    ];

// Iterate through each year in the specified range
for (var year = startYear; year <= endYear; year++) {
    // Iterate through each event detail in the events array
    events.forEach(function(eventDetail) {
        // Construct the event date string using the current year and event day
        var eventDate = year + '-' + eventDetail.day;
  
        // Create the event object with the specified title, start date, and end date (all-day event)
        var event = {
            title: eventDetail.title,
            start: eventDate,
            end: eventDate // All-day event ends on the same day
        };
  
        // Add the event to the calendar
        calendar.addEvent(event);
    });
  }
  
  // Render the calendar with added events
  calendar.render();
});
