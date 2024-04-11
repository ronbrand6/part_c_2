let meetings = JSON.parse(localStorage.getItem('meetings')) || [];

function saveMeetings() {
    localStorage.setItem('meetings', JSON.stringify(meetings));
}

document.addEventListener('DOMContentLoaded', function() {
    const scheduleButton = document.getElementById('scudelAppointment');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('hour');
    const typeInput = document.getElementById('meetingType');

    scheduleButton.addEventListener('click', function(e) {
        e.preventDefault();

        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;
        const selectedType = typeInput.value;
        const user = sessionStorage.getItem('whichUser');
        const newMeeting = {
            user: user,
            date: selectedDate,
            time: selectedTime,
            type: selectedType
        };


        if (!selectedDate || !selectedTime || !selectedType) {
            alert('בבקשה תמלא את כל הפרטים בשביל הפגישה');
            return;
        }

        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        if (selectedDate < todayStr) {
            alert('אתה לא יכול לקבוע פגישה בתאריך שכבר עבר');
            return;
        }

        let login = sessionStorage.getItem('isLoggedIn');
        if (!login) {
            alert('אתה צריך להתחבר כדי לקבוע פגישה');

            window.location.href = 'user_connection.html';
        } else {

            alert('הפגישה נשמרה בהצלחה!');

            meetings.push(newMeeting);


            saveMeetings();
        }
    });
});