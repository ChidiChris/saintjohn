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
      { title: 'Epiphany of the Lord.', day: '01-05' },
      { title: 'Baptism of the Lord.', day: '01-12' },
      { title: 'Security Collection (2nd Sunday Year C.', day: '01-19' },
      { title: 'Memorial Mass in honor of Bishop John Moore SMA.', day: '01-20' },
      { title: 'Conversion of St. Paul (AP) - Feast.', day: '01-25' },
      { title: '3rd Sunday Year C.', day: '01-26' },
      // February
      { title: 'Presentation of the lord (Feast).', day: '02-02' },
      { title: 'Security Collection (5th Sunday Year C).', day: '02-09' },
      { title: 'sixth Sunday Year C.', day: '02-16' },
      { title: 'Seventh Sunday Year C.', day: '02-23' },
      // March
      { title: 'Eight Sunday Year C.', day: '03-02' },
      { title: 'Ash Wednesday (Stations of the Cross starts at 5:00pm) (Wednesdays & Fridays with evening Mass).', day: '03-05' },
      { title: 'First Sunday of Lent (Security Collection & Mass for Business Men, Women & Workers).', day: '03-09' },
      { title: 'Second Sunday of Lent.', day: '03-16' },
      { title: 'Feast of St. Patrick (BP).', day: '03-17' },
      { title: 'Third Sunday of Lent / First Launching of Diocesan day.', day: '03-23' },
      { title: 'The Annunciation of the Lord (Solemnity) / World day for Unborn Child.', day: '03-25' },
      { title: 'Fourth Sunday of Lent (Leatare Sunday).', day: '03-30' },
      // April
      { title: 'Fifth Sunday of Lent Year C.', day: '04-06' },
      { title: 'Passion Sunday (Palm Sunday) - Security Collection.', day: '04-13' },
      { title: 'Holy Thursday / Maundy Thursday - Chrism Mass. Evening Mass of the Lord’s Supper.', day: '04-17' },
      { title: 'Good Friday-Passion Play: 8:00am, followed by Recollection (All day) Evening Ceremonies: by 4:00pm.', day: '04-18' },
      { title: 'Holy Saturday - Vigil Mass by 8:00pm.', day: '04-19' },
      { title: 'Easter Sunday - Mass - 7:00am (one Mass).', day: '04-20' },
      { title: 'Second Sunday of Easter Year C.', day: '04-27' },
      // May
      { title: 'Workers day & St. Joseph the worker (Opt. Memorial) May Devotion starts daily by 5:00pm.', day: '05-01' },
      { title: 'Third Sunday of Easter Year C.', day: '05-04' },
      { title: '4th Sunday of Easter (Good Shepherd Sunday) / Launching for Vocation.', day: '05-11' },
      { title: 'Fifth Sunday of Easter.', day: '05-18' },
      { title: 'Sixth Sunday of Easter.', day: '05-25' },
      { title: 'Family week part 1.', day: '05-28' },
      { title: 'Family week part 1.', day: '05-29' },
      { title: 'Ascention of the Lord (Holy day of Obligation).', day: '05-29' },
      { title: 'Visitation of the Lord (Feast). ', day: '05-31' },
      // June
      { title: 'Seventh Sunday of Easter', day: '06-01' },
      { title: 'Pentecost Sunday (Solemnity) / Security Collection.', day: '06-08' },
      { title: 'The Most Holy Trinity (Solemnity).', day: '06-15' },
      { title: 'The Most Body & Blood of Christ (Solemnity-Corpus Christi). Make-up launching for Diocesan day.', day: '06-22' },
      { title: 'Nativity of John the Baptist (Solemnity).', day: '06-24' },
      { title: 'The Most Sacred Heart of Jesus (Solemnity).', day: '06-28' },
      { title: 'Immaculate Heart of the Blessed Virgin Mary (Memorial).', day: '06-28' },
      { title: 'S.S. Peter & Paul (Solemnity).', day: '06-29' },
      // July
      { title: 'Bishop Hillary’s Priestly Anniversary.', day: '07-01' },
      { title: 'Fourteenth Sunday Year C.', day: '07-06' },
      { title: 'Fifteenth Sunday Year C. (Security Collection).', day: '07-13' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-17' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-18' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-19' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-20' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-21' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-22' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-23' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-24' },
      { title: '9 Days Novena (S.S. Ann & Joachim).', day: '07-25' },
      { title: 'Sixteenth Sunday Year C.', day: '07-20' },
      { title: 'Seventeenth Sunday Year C (Last make-up launching for Diocesan day).', day: '07-27' }, 
      // August
      { title: 'Eighteenth Sunday Year C (Youth Week Starts).', day: '08-03' },
      { title: 'Transfiguration of the Lord (Feast).', day: '08-06' },
      { title: 'Nineteenth Sunday Year C (Security Collection).', day: '08-10' },
      { title: 'Assumption of Blessed Virgin Mary (Solemnity).', day: '08-15' },
      { title: 'Twentieth Sunday Year C.', day: '08-17' },
      { title: 'Twenty-first Sunday Year C', day: '08-24' },
      { title: 'St. Monica’s (Feast day of Igbo Women).', day: '08-27' },
      { title: 'St. Augustine (Tiv & Hausa Choir feast day).', day: '08-28' },
      { title: 'Martyrdom of St. John the Baptist.', day: '08-29' },
      { title: 'Mass for Children & Youth (Student).', day: '08-30' },
      { title: 'Twenty-second Sunday Year C', day: '08-31' },
      // September
      { title: 'Twenty-third Sunday Year C.', day: '09-07' },
      { title: 'Birthday of the Blessed Virgin Mary.', day: '09-08' },
      { title: 'Exaltation of the Cross (Feast), Security Collection.', day: '09-14' },
      { title: 'Twenty-fift Sunday Year C (Children & Youth Harvest).', day: '09-21' },
      { title: 'Twenty-sixth Sunday Year C.', day: '09-28' },
      { title: 'St. Jerome (lay Readers day).', day: '09-30' },
      // October
      { title: 'October Devotion starts.', day: '10-01' },
      { title: 'Twenty-seventh Sunday Year C.', day: '10-05' },
      { title: 'Twenty-eight Sunday Year C (Security Collection).', day: '10-12' },
      { title: 'Twenty-nineth Sunday Year C (Mission Sunday mini launching).', day: '10-19' },
      { title: 'Thirtieth Sunday Year C.', day: '10-26' },
      // November
      { title: 'All Saints (Solemnity).', day: '11-01' },
      { title: 'All Souls (Feast) Sunday.', day: '11-02' },
      { title: 'Dedication of the Lateran Basilica (feast) / Security Collection.', day: '11-09' },
      { title: 'Family week part (2).', day: '11-12' },
      { title: 'Family week part (2).', day: '11-13' },
      { title: 'Family week part (2).', day: '11-14' },
      { title: 'Thirty-third Sunday Year C (Adult Harvest & Bazaar).', day: '11-16' },
      { title: 'Solemnity of Christ the King.', day: '11-23' },
      { title: 'First Sunday of Advent Year A.', day: '11-30' },
      // December
      { title: 'Second Sunday of Adveent Year A, Christmas Carol.', day: '12-07' },
      { title: 'Immaculate Conception of the Blessed Virgin Mary.', day: '12-08' },
      { title: 'End of the Year Retreat.', day: '12-11' },
      { title: 'End of the Year Retreat.', day: '12-12' },
      { title: 'Third Sunday of Advent Year A (Security Collection).', day: '12-14' },
      { title: 'Night of Excceeding Praise.', day: '12-14' },
      { title: 'Fourth Sunday of Advent Year A.', day: '12-21' },
      { title: 'Nativity of the Lord (Christmas).', day: '12-25' },
      { title: 'St. John’s the Evangelist Feast day', day: '12-27' },
      { title: 'Feast of the Holy Family.', day: '12-28' },
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
