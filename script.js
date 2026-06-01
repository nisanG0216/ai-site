function func() {
    let p = document.querySelector(".main");
    p.style.color = "red";
}

let p = document.querySelector("#larry");

function hide() {
    p.style.display = "none";
}

function show() {
    p.style.display = "block";
}

let h = document.querySelector("#fs");

function buttonshitnoneblock() {
    if (h.style.display === "none") {
        h.style.display = "block";
    } else {
        h.style.display = "none";
    }
}

let h2 = document.querySelector("#overme");

function mouseover1() {
    h2.style.textDecoration = "underline";
}

function out() {
    h2.style.textDecoration = "none";
}

document.addEventListener("DOMContentLoaded", () => {

    const phoneInput = document.querySelector("#phone_number");

    phoneInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
    });

    const form = document.querySelector("form");

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let validFname = true;
        let validLname = true;
        let validEmail = true;
        let validPhone = true;
        let validSubjectMsg = true;
        let validMsg = true;

        const fname = document.querySelector("#fname").value;
        const lname = document.querySelector("#lname").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#phone_number").value;
        const subjectMsg = document.querySelector("#subjectMsg").value;
        const msg = document.querySelector("#msg").value;

        if (fname.length < 3) {
            alert("First name is too short!");
            validFname = false;
        }

        if (lname.length < 3) {
            alert("Last name is too short!");
            validLname = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Illegal email!");
            validEmail = false;
        }

        if (phone.length !== 10) {
            alert("Phone number must contain exactly 10 digits!");
            validPhone = false;
        }

        if (subjectMsg.length < 5) {
            alert("The subject is too short!");
            validSubjectMsg = false;
        }

        if (msg.length < 10) {
            alert("The message is too short!");
            validMsg = false;
        }

        let validSubmit =
            validFname &&
            validLname &&
            validEmail &&
            validPhone &&
            validSubjectMsg &&
            validMsg;

        if (validSubmit) {

            fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    phone_number: phone,
                    subjectMsg,
                    msg
                })
            })
            .then(response => response.text())
            .then(data => {
                alert("The form has been submitted!");
                form.reset();
                document.body.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                alert("Error submitting form");
            });
        }
    });
});