document.addEventListener("DOMContentLoaded", function() {
  const meetingsList = document.getElementById('meetings-list');
  const comebackButton = document.getElementById('comeback');
  const  addMeetButton= document.getElementById('addMeet');


  // Sample meetings data
  const meetings = [{
    email: 'shirhambera@gmail.com',
    meetings:[ {id: 1, title: 'מעקב', date: '2024-02-20', time: '10:00'},
    {id: 2, title: 'הצגה', date: '2024-02-21', time: '11:00'},
    {id: 3, title: 'מעקב', date: '2024-02-22', time: '17:00 '}]
  }];
comebackButton.addEventListener('click', function(e) {
  e.preventDefault();
    window.location.href = 'user_profile.html';
})
  addMeetButton.addEventListener('click', function(e) {
  e.preventDefault();
    window.location.href = 'meeting_create.html';
})

  function getLoggedInUserEmail() {
    return sessionStorage.getItem('whichUser');
  }

  // Function to show meetings for the currently logged-in user
  function showUserMeetings() {
    const userEmail = getLoggedInUserEmail();

    // Find the user's meetings based on the email
    const userMeetings = localStorage.getItem('meetings').find(user => user.email === userEmail);

    // Clear previous meetings
    meetingsList.innerHTML = '';

    // Render meetings if user exists
    if (userMeetings) {
      userMeetings.meetings.forEach(meeting => {
        const li = document.createElement('li');
        li.innerHTML = `${meeting.title} - ${meeting.date} - ${meeting.time}
          <button onclick="changeMeeting(${meeting.id})">שינוי</button>
          <button onclick="cancelMeeting(${meeting.id})">ביטול</button>`;
        meetingsList.appendChild(li);
      });
    } else {
      meetingsList.innerHTML = 'אין פגישות קיימות';
    }
  }

  // Call the function to show meetings for the currently logged-in user
  showUserMeetings();

  // Function to change meeting
  window.changeMeeting = function(meetingId) {
    const newDateTime = prompt('Enter new date and time for the meeting (YYYY-MM-DD HH:MM AM/PM):');
    if (newDateTime !== null && newDateTime !== '') {
      // Here you can write code to update the meeting date and time
      alert(`  ${newDateTime}התאריך והשעה התעדכנו `);
    }
  };

  // Function to cancel meeting
  window.cancelMeeting = function(meetingId) {
    const confirmCancel = confirm('אתה בטוח שתרצה לבטל את הפגישה?');
    if (confirmCancel) {
      // Here you can write code to cancel the meeting
      alert('הפגישה בוטלה');
    }
  };

});