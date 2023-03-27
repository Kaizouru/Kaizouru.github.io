$("document").ready(function () {

    $("form").submit(function (e) {
        
        let service = document.forms["orderForm"]["service"].value;
        if ((service != 200) && (service != 350) && (service != 120)){
            $("#service").css("border", "1.5px solid red");
            $("#no-service").html("לא נבחר שירות ").show();
            e.preventDefault();
        }
        else {
            $("#no-service").hide();
            document.getElementById("service").style.border = "";
        }

        let master = document.forms["orderForm"]["master"].value;
        if ((master != "idan") && (master != "aviv") && (master != "shai")){
            $("#master").css("border", "1.5px solid red");
            $("#no-master").html("לא נבחר מדריך").show();
            e.preventDefault();
        }
        else {
            $("#no-master").hide();
            document.getElementById("master").style.border = "";
        }
 
        let lastName = document.forms["orderForm"]["last_name"].value;
        if (lastName === "") {
            $("#last_name").css("border", "1.5px solid red");
            $("#no-last").html("לא הוזן שם משפחה").show();
            e.preventDefault();
        }
        else {
            $("#no-last").hide();
            document.getElementById("last_name").style.border = "";
        }
        let firstName = document.forms["orderForm"]["first_name"].value;

        if (firstName === "") {
            $("#first_name").css("border", "1.5px solid red");
            $("#no-first").html("לא הוזן שם פרטי ").show();
            e.preventDefault();
        }
        else {
            $("#no-first").hide();
            document.getElementById("first_name").style.border = "";
        }
        let streetNum = document.forms["orderForm"]["street_num"].value;

        if (streetNum === "") {
            $("#street_num").css("border", "1.5px solid red");
            $("#no-street-num").html("לא הוזן מספר בית ").show();
            e.preventDefault();
        }
        else {
            $("#no-street-num").hide();
            document.getElementById("street_num").style.border = "";
        }
        let street = document.forms["orderForm"]["street"].value;

        if (street === "") {
            $("#street").css("border", "1.5px solid red");
            $("#no-street").html("לא הוזן רחוב ").show();
            e.preventDefault();
        }
        else {
            $("#no-street").hide();
            document.getElementById("street").style.border = "";
        }
        var city = document.forms["orderForm"]["city"].value;

        if (city === "") {
            $("#city").css("border", "1.5px solid red");
            $("#no-city").html("לא הוזנה עיר ").show();
            e.preventDefault();
        }
        else {
            $("#no-city").hide();
            document.getElementById("city").style.border = "";
        }
        let email = document.forms["orderForm"]["email"].value;

        if (email === "") {
            $("#email").css("border", "1.5px solid red");
            $("#no-email").html("לא הוזנה כתובת אימייל ").show();
            e.preventDefault();
        }
        else {
            $("#no-email").hide();
            document.getElementById("email").style.border = "";
        }
        let phone = document.forms["orderForm"]["phone"].value;

        if (phone === "") {
            $("#phone").css("border", "1.5px solid red");
            $("#no-phone").html("לא הוזן מספר טלפון ").show();
            e.preventDefault();
        }
        else {
            $("#no-phone").hide();
            document.getElementById("phone").style.border = "";
        }
        let cardholdername = document.forms["orderForm"]["card-holder-name"].value;
        let goodname = cardholdername.includes(" ")

        if ((cardholdername === "") || (!goodname)){
            $("#card-holder-name").css("border", "1.5px solid red");
            $("#no-cardholder-name").html("לא הוזן שם בעל הכרטיס בפורמט הראוי ").show();
            e.preventDefault();
        }
        else {
            $("#no-cardholder-name").hide();
            document.getElementById("card-holder-name").style.border = "";
        }
        let cardholderid = document.forms["orderForm"]["card-holder-id"].value;

        if ((cardholderid === "") ||(cardholderid.length != 9)){
            $("#card-holder-id").css("border", "1.5px solid red");
            $("#no-cardholder-id").html(" לא הוזן ת.ז תקין").show();
            e.preventDefault();
        }
        else {
            $("#no-cardholder-id").hide();
            document.getElementById("card-holder-id").style.border = "";
        }
        let cardnumber = document.forms["orderForm"]["card-number"].value;

        if ((cardnumber === "") || (cardnumber.length < 8)){
            $("#card-number").css("border", "1.5px solid red");
            $("#no-card-number").html("לא הוזן מס' אשראי תקין  ").show();
            e.preventDefault();
        }
        else {
            $("#no-card-number").hide();
            document.getElementById("card-number").style.border = "";
        }
        let cardvalidation = document.forms["orderForm"]["card-validation"].value;
        let result = cardvalidation.includes("/")

        if ((cardvalidation === "") || (!result)){
            $("#card-validation").css("border", "1.5px solid red");
            $("#no-card-validity").html("לא הוזן תוקף תקין").show();
            e.preventDefault();
        }
        else {
            $("#no-card-validity").hide();
            document.getElementById("card-validation").style.border = "";
        }
        var cvv = document.forms["orderForm"]["cvv"].value;

        if ((cvv === "") || (cvv.length != 3)){
            $("#cvv").css("border", "1.5px solid red");
            $("#no-cvv").html("3 ספרות מאחורי גב הכרטיס לא הוזנו").show();
            e.preventDefault();
        }
        else {
            $("#no-cvv").hide();
            document.getElementById("cvv").style.border = "";
        }
        
});
    })

window.onload = function dateValidation() {

    date.min = new Date().toISOString().split("T")[0];

}




