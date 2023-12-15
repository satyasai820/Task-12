$(document).ready(function () {
    $("#btn").click(function () {

        let a, b, c, d, e, f, g, h, i, j;
        a = f2();
        if (a == true) {
            c = f3();
        } else {

            display();
        }

        if (c) {
            d = f4();
        } else {
            display();
        }

        if (d) {
            e = f5();
        } else {
            display();
        }

        if (e) {
            f = f6();
        } else {
            display();
        }

        if (f) {
            g = f7();
        } else {
            display();
        }

        if (g) {
            h = f8()
        } else {
            display();
        }

        if (h) {
            i = f9();
        } else {
            display();
        }

        if (i) {
            j = f10();
        } else {
            display();
        }

        // display start
        function display() {

            if (z == 1) {
                $("#em").css("borderColor", "lightgrey");
                Er3.text("");
                z++;
            }

            if (z == 2) {
                $("#pw").css("borderColor", "lightgrey");
                Er4.text("");
                z++;
            }

            if (z == 3) {
                $("#cpw").css("borderColor", "lightgrey");
                Er5.text("");
                z++;
            }

            if (z == 4) {
                $("#dob").css("borderColor", "lightgrey");
                Er6.text("");
                z++;
            }

            if (z == 5) {
                $("#num").css("borderColor", "lightgrey");
                Er7.text("");
                z++;
            }

            if (z == 6) {
                Er8.text("");
                z++;
            }

            if (z == 7) {
                $("#cou").css("borderColor", "lightgrey");
                Er9.text("");
                z++;
            }

            if (z == 8) {
                Er10.text("");
            }
        }

        //display End

        let dmodel = $("#modelForm");
        let dmodelForm = dmodel.val();
        if (a && c && d && e && f && g && h && i && j) {
            
            $("#modelForm").show();
            $("#reg").append(fn);
        }

    });

    let fname, fn, Er1;
    let email, Email, Er3;
    let password, Password, Er4;
    let cpassword, Cpassword, Er5;
    let DOB, Dob, Er6;
    let numb, Num, Er7;
    let getValue, Er8;
    let country, country1, Er9;
    let checkinput, Er10;
    let z;

    function initialize() {
        //f2()
        fname = $("#firstName")
        fn = fname.val();
        Er1 = $("#er1");

        //f3()
        email = $("#em");
        Email = email.val();
        Er3 = $("#er3");

        //f4()
        password = $("#pw");
        Password = password.val();
        Er4 = $("#er4");

        //f5()
        cpassword = $("#cpw");
        Cpassword = cpassword.val();
        Er5 = $("#er5");

        //f6()
        DOB = $("#dob");
        Dob = DOB.val();
        Er6 = $("#er6");

        //f7()
        numb = $("#num");
        Num = numb.val();
        Er7 = $("#er7");

        //f8()
        getValue = document.querySelector('input[name="fav"]:checked');
        Er8 = $("#er8");

        //f9()
        country = $("#cou");
        country1 = country.val();
        Er9 = $("#er9")

        //f10()

        checkinput = $(' input[type="checkbox"]:checked').val();
        console.log(checkinput, "value")
        Er10 = $("#er10");

    }





    // first name start
    function f2() {
        initialize();

        if (fn === "") {
            console.log(fn, "hi")
            $("#firstName").css("borderColor", 'red');
            Er1.text("please enter your name");
            z = 1;
        } else if ((fn.charAt(0) >= 'A' && fn.charAt(0) <= 'Z') && check(fn)) {
            $("#firstName").css("borderColor", "green");
            Er1.text("");
            return true;

        } else {
            Er1.text("first name must be Capital & numbers are not valid");
            $("#firstName").css("borderColor", "red");
            z = 1;
        }
        function check(name) {
            let regEx = /^[a-zA-Z]+$/;
            let n = regEx.test(name);
            return n;
        }
    }

    // first name End

    //email start
    function f3() {
        initialize();
        if (Email === "") {
            $("#em").css("borderColor", "red");
            Er3.text("please enter your email");
            z = 2;

        } else if (check(Email)) {
            $("#em").css("borderColor", "green");
            Er3.text('');
            return true;
        } else {
            $("#em").css("borderColor", "red");
            Er3.text("Give proper mail");
            z = 2;
        }

        function check(name) {
            let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
            let rs = regex.test(name);
            return rs;
        }

    }
    //email End    

    //password start
    var r;
    function f4() {
        initialize();
        if (Password.trim() === "") {
            $("#pw").css("borderColor", "red");
            Er4.text("please enter your password");
            z = 3;

        } else if (checkpw(Password)) {
            $("#pw").css("borderColor", "green");
            Er4.text(" ");
            r = Password;
            return true;
        } else {
            $("#pw").css("borderColor", "red");
            Er4.text("password contain atleast 8 characters & one lower & upper case letters & one digit");
            z = 3;
        }

        function checkpw(name) {
            let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            let rs = passwordRegex.test(name);
            return rs;
        }
    }
    //password End

    //confirm password start
    function f5() {
        initialize();
        if (Cpassword.trim() === "") {
            $("#cpw").css("borderColor", "red");
            Er5.text("please enter your Confirm Password");
            z = 4;
        } else if (Cpassword === r) {
            $("#cpw").css("borderColor", "green");
            Er5.text("");
            return true;
        } else {
            $("#cpw").css("borderColor", "red");
            Er5.text("invalid Confirm password");
            z = 4;
        }
    }
    //confirm password End

    //  date of birth start
    function f6() {
        initialize();
        if (Dob === "") {
            $("#dob").css("borderColor", "red");
            Er6.text("please enter your Date of Birth");
            z = 5;
        } else {
            $("#dob").css("borderColor", "green");
            Er6.text(" ");
            return true;
        }
    }
    // date of birth End

    // Number start
    function f7() {
        initialize();
        if (Num === "") {
            $("#num").css("borderColor", "red");
            Er7.text("please enter your Phone Number");
            z = 6;
        } else if (check(Num)) {
            $("#num").css("borderColor", "green");
            Er7.text("");
            return true;
        } else {
            $("#num").css("borderColor", "red");
            Er7.text("invalid Phone Number");
            z = 6;
        }
        function check(number) {
            let phoneRegex = /^[6-9]\d{9}$/;
            let rs = phoneRegex.test(number);
            return rs;
        }
    }
    //Number End

    //gender start
    function f8() {
        initialize();
        if (getValue === null) {
            Er8.text("Please Select your Gender");
            console.log("msg")
            z = 7;
        } else {
            Er8.text("");
            return true;
        }
    }
    //gender End

    //country start
    function f9() {
        initialize();
        if (country1 == "") {
            $("#cou").css("borderColor", "red");
            Er9.text("Please Select your country");
            z = 8;
        } else {
            $("#cou").css("borderColor", "green");
            Er9.text("");
            return true;
        }
    }
    //country End

    //check box Start
    function f10() {
        initialize();
        if (checkinput === undefined) {
            Er10.text("We need your Response");
        } else {
            Er10.text("");
            return true;

        }
    }

    //star Rating

    $("#st1").click(function () {
        $(".fa-star").css('color', 'black');
        $("#st1").css('color', 'yellow')
        $("#review").text('Bad').css('color','red')

    });
    $("#st2").click(function () {
        $(".fs-star").css('color', 'black');
        $("#st1,#st2").css('color', 'yellow')
        $("#review").text('Good').css('color','red')

    });
    $("#st3").click(function () {
        $(".fs-star").css('color', 'black');
        $("#st1,#st2,#st3").css('color', 'yellow')
        $("#review").text('Very Good').css('color','blue')

    });
    $("#st4").click(function () {
        $(".fs-star").css('color', 'black');
        $("#st1,#st2,#st3,#st4").css('color', 'yellow')
        $("#review").text('Excellent').css('color','green')

    });
    $("#st5").click(function () {
        $(".fs-star").css('color', 'black');
        $("#st1,#st2,#st3,#st4,#st5").css('color', 'yellow')
        $("#review").text('Awesome').css('color','green')
 
    });

    


});
