/* =========================
   HOME BUTTON
========================= */

function showMessage() {
    alert("Welcome to My Website!");
}


/* =========================
   REGISTER
========================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const message =
            document.getElementById("registerMessage");


        if (password.length < 6) {

            message.textContent =
                "Password कम से कम 6 characters का होना चाहिए।";

            return;
        }


        const user = {
            name: name,
            email: email,
            password: password
        };


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        message.textContent =
            "Registration successful! अब Login करें।";


        registerForm.reset();

    });
}


/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        const message =
            document.getElementById("loginMessage");


        const savedUser =
            localStorage.getItem("user");


        if (!savedUser) {

            message.textContent =
                "पहले Register करें।";

            return;
        }


        const user =
            JSON.parse(savedUser);


        if (
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            window.location.href =
                "dashboard.html";

        } else {

            message.textContent =
                "Email या Password गलत है।";
        }

    });
}


/* =========================
   DASHBOARD PROTECTION
========================= */

if (
    window.location.pathname.includes(
        "dashboard.html"
    )
) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");


    if (isLoggedIn !== "true") {

        window.location.href =
            "login.html";
    }
}


/* =========================
   DASHBOARD USER NAME
========================= */

if (
    window.location.pathname.includes(
        "dashboard.html"
    )
) {

    const savedUser =
        localStorage.getItem("user");


    if (savedUser) {

        const user =
            JSON.parse(savedUser);


        const welcomeMessage =
            document.getElementById(
                "welcomeMessage"
            );


        if (welcomeMessage) {

            welcomeMessage.textContent =
                "Hello, " + user.name + "!";
        }
    }
}


/* =========================
   LOGOUT
========================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "isLoggedIn"
            );


            window.location.href =
                "login.html";
        }
    );
}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const messageText =
                document.getElementById(
                    "message"
                ).value.trim();


            const formMessage =
                document.getElementById(
                    "formMessage"
                );


            if (
                name === "" ||
                email === "" ||
                messageText === ""
            ) {

                formMessage.textContent =
                    "Please fill all fields.";

                return;
            }


            formMessage.textContent =
                "Message sent successfully!";


            contactForm.reset();
        }
    );
}