var loggedIn = false;
var username = '';
var email = '';
var place = '';
var phone = '';
var birthyear = '';

function defaultProfileData() {
    username = '';
    email = 'mustername@musterdomain.com';
    place = 'Musterort';
    phone = '0664/1234567';
    birthyear = '1981';
}

function login() {
    loggedIn = true;
    $('#loginLink').hide();
    $('#logoutLink').show();
    $('#userLink').text(username);
    $('#userLink').show();
    $('#registerLink').hide();
}

function logout() {
    loggedIn = false;
    username = '';
    $('#loginLink').show();
    $('#logoutLink').hide();
    $('#userLink').hide();
    $('#registerLink').show();
    $('#contentInclude').load("partials/main.html");
}

function loadUserProfile() {
    $('#contentInclude').load("partials/profil.html", function(){
        $('#profileUsername').text(username);
        $('#profileMail').text(email);
        $('#profilePlace').text(place);
        $('#profilePhone').text(phone);
        $('#profileBirthyear').text(birthyear);
    });
}

function loadDetailPage () {
    $('#contentInclude').load("partials/detail.html");

}

function loadMainPage () {
    $('#contentInclude').load("partials/main.html");
}

/**
 * Toggle visibility of menue-bar
 * @returns {undefined}
 */
function showFilters() {
    $('#filters').toggle();
    return false;
}





 $(document).ready( function() {
    /* on page load */
    $(function(){
        $('#contentInclude').load("partials/main.html");
        $('#loginInclude').load("partials/anmelden-modal.html");
        $('#registerInclude').load("partials/register-modal.html");
        $('#inventarInclude').load("partials/inventar-modal.html");
        $('#anfrageInclude').load("partials/anfrage-modal.html");
        $('#bewertungInclude').load("partials/userbewertung-modal.html");
        logout();
        defaultProfileData();
    });

    /* On-Click-Handler */
    $(document).on ('click', '#registerBtn', function () {
        username = $('#register-username').val();
        email = $('#register-email').val();
        place = $('#register-place').val();
        phone = $('#register-phone').val();
        birthyear = $('#register-birthyear').val();
        login();
        loadUserProfile();
    });
    $(document).on ('click', '#loginBtn', function () {
        defaultProfileData();
        username = $('#login-username').val();
        login();
    });
    $(document).on ('click', '#logoutLink', function () {
        defaultProfileData();
        logout();
    });
    $(document).on ('click', '#userLink', function () {
        loadUserProfile();
    });
    //$(document).on ('click', '#addInventar', function () {
        //loadUserProfile();
    //});
    $(document).on ('click', '#detailLink', function () {
        loadDetailPage();
    });

    $(document).on ('click', '#logoLink', function () {
        loadMainPage();
    });

    $(document).on ('click', '#userbewertungDoneBtn', function (){
        $('#bewertung1').toggleClass('hide', true);
    });

    //Filterbar
    $(document).on('click', '.filter_toggle', function(){
        $('#filters').toggle();
    });

    //Filters
    $(document).on('click', '#filter_forBrand', function () {
        $('#filter_forBrand_list').toggle();
    });

    $(document).on('click', '#filter_brand', function () {
        $('#filter_brand_list').toggle();
    });

    $(document).on('click', '#filter_obj', function () {
        $('#filter_obj_list').toggle();
    });

    $(document).on('click', '#filter_brenn', function () {
        $('#filter_brenn_list').toggle();
    });

    $(document).on('click', '#filter_licht', function () {
        $('#filter_licht_list').toggle();
    });

});

