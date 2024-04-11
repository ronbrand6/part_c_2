document.addEventListener('DOMContentLoaded', function() {
    const myAccountBtn = document.getElementById('myAccountBtn');

    // Add event listener to the My Account button
    myAccountBtn.addEventListener('click', function(e) {
        // Check if the user is logged in
        if (! (sessionStorage.getItem('isLoggedIn'))) {

            e.preventDefault();
            alert('אתה צריך להתחבר כדי שתוכל להיכנס לחשבון שלך');
            window.location.href = 'user_connection.html';
     }
        window.location.href = 'user_profile.html';
});
});