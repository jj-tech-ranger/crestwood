document.addEventListener("DOMContentLoaded", () => {
    const applicationForm = document.getElementById("applicationForm");
    const contactForm = document.getElementById("contactForm");
    const facultySelect = document.getElementById("faculty");
    const programmeSelect = document.getElementById("programme");

    const programmes = {
        business: [
            "Bachelor of Business Administration",
            "BBA Honours",
            "Master of Business Administration",
            "PhD in Business Management"
        ],
        computing: [
            "BSc Computer Science",
            "BSc Computer Science Honours",
            "MSc Computer Science",
            "PhD in Computing"
        ],
        engineering: [
            "BEng Electrical Engineering",
            "BEng Electrical Engineering Honours",
            "MEng Electrical Engineering",
            "PhD in Engineering"
        ],
        education: [
            "Bachelor of Education",
            "BEd Honours",
            "Master of Education",
            "PhD in Education"
        ],
        arts: [
            "BA Communication and Media",
            "BA Communication and Media Honours",
            "MA Humanities",
            "PhD in Arts and Humanities"
        ],
        science: [
            "BSc Biological Sciences",
            "BSc Biological Sciences Honours",
            "MSc Biological Sciences",
            "PhD in Science"
        ]
    };

    if (facultySelect && programmeSelect) {
        facultySelect.addEventListener("change", () => {
            const selectedFaculty = facultySelect.value;
            programmeSelect.innerHTML = "";

            if (!selectedFaculty || !programmes[selectedFaculty]) {
                programmeSelect.disabled = true;

                const option = document.createElement("option");
                option.value = "";
                option.textContent = "Select a faculty first";
                programmeSelect.appendChild(option);
                return;
            }

            programmeSelect.disabled = false;

            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select programme";
            programmeSelect.appendChild(defaultOption);

            programmes[selectedFaculty].forEach(programme => {
                const option = document.createElement("option");
                option.value = programme;
                option.textContent = programme;
                programmeSelect.appendChild(option);
            });
        });
    }

    function showError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}Error`);

        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors(form) {
        form.querySelectorAll(".error-message").forEach(error => {
            error.textContent = "";
        });

        form.querySelectorAll("input, select, textarea").forEach(field => {
            field.removeAttribute("aria-invalid");
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^\+?[0-9\s()-]{9,18}$/.test(phone);
    }

    function generateApplicationReference() {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        return `CU-2027-${randomNumber}`;
    }

    if (applicationForm) {
        applicationForm.addEventListener("submit", event => {
            event.preventDefault();

            clearErrors(applicationForm);

            const firstName = document.getElementById("firstName");
            const surname = document.getElementById("surname");
            const dob = document.getElementById("dob");
            const nationality = document.getElementById("nationality");
            const email = document.getElementById("email");
            const telephone = document.getElementById("telephone");
            const identity = document.getElementById("identity");
            const studyLevel = document.getElementById("studyLevel");
            const faculty = document.getElementById("faculty");
            const programme = document.getElementById("programme");
            const motivation = document.getElementById("motivation");
            const applicationMessage = document.getElementById("applicationMessage");

            let valid = true;

            const requiredFields = [
                [firstName, "First name is required."],
                [surname, "Surname is required."],
                [dob, "Date of birth is required."],
                [nationality, "Please select your nationality."],
                [email, "Email address is required."],
                [telephone, "Telephone number is required."],
                [identity, "ID or passport number is required."],
                [studyLevel, "Please select a study level."],
                [faculty, "Please select a faculty."],
                [programme, "Please select a programme."],
                [motivation, "Please provide a motivation statement."]
            ];

            requiredFields.forEach(([field, message]) => {
                if (!field.value.trim()) {
                    field.setAttribute("aria-invalid", "true");
                    showError(field.id, message);
                    valid = false;
                }
            });

            if (email.value.trim() && !validateEmail(email.value.trim())) {
                email.setAttribute("aria-invalid", "true");
                showError("email", "Please enter a valid email address.");
                valid = false;
            }

            if (telephone.value.trim() && !validatePhone(telephone.value.trim())) {
                telephone.setAttribute("aria-invalid", "true");
                showError("telephone", "Please enter a valid telephone number.");
                valid = false;
            }

            if (valid) {
                const reference = generateApplicationReference();

                applicationMessage.className = "form-message success";
                applicationMessage.textContent = `Application submitted successfully for demonstration purposes. Your reference number is ${reference}. No information has been stored or sent to a server.`;

                applicationForm.reset();
                programmeSelect.innerHTML = '<option value="">Select a faculty first</option>';
                programmeSelect.disabled = true;

                window.scrollTo({
                    top: applicationMessage.getBoundingClientRect().top + window.scrollY - 120,
                    behavior: "smooth"
                });
            } else {
                applicationMessage.className = "form-message error";
                applicationMessage.textContent = "Please correct the highlighted fields before submitting your application.";
            }
        });

        applicationForm.addEventListener("reset", () => {
            setTimeout(() => {
                clearErrors(applicationForm);
                const applicationMessage = document.getElementById("applicationMessage");
                applicationMessage.className = "form-message";
                applicationMessage.textContent = "";
                programmeSelect.innerHTML = '<option value="">Select a faculty first</option>';
                programmeSelect.disabled = true;
            }, 0);
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            clearErrors(contactForm);

            const name = document.getElementById("contactName");
            const email = document.getElementById("contactEmail");
            const subject = document.getElementById("contactSubject");
            const message = document.getElementById("contactMessage");
            const status = document.getElementById("contactMessageStatus");

            let valid = true;

            if (!name.value.trim()) {
                showError("contactName", "Please enter your full name.");
                valid = false;
            }

            if (!email.value.trim()) {
                showError("contactEmail", "Please enter your email address.");
                valid = false;
            } else if (!validateEmail(email.value.trim())) {
                showError("contactEmail", "Please enter a valid email address.");
                valid = false;
            }

            if (!subject.value.trim()) {
                showError("contactSubject", "Please enter a subject.");
                valid = false;
            }

            if (!message.value.trim()) {
                showError("contactMessage", "Please enter your message.");
                valid = false;
            }

            if (valid) {
                status.className = "form-message success";
                status.textContent = "Your message has been sent successfully for demonstration purposes. No information has been stored or sent to a server.";
                contactForm.reset();

                window.scrollTo({
                    top: status.getBoundingClientRect().top + window.scrollY - 120,
                    behavior: "smooth"
                });
            } else {
                status.className = "form-message error";
                status.textContent = "Please correct the highlighted fields before sending your message.";
            }
        });

        contactForm.addEventListener("reset", () => {
            setTimeout(() => {
                clearErrors(contactForm);
                const status = document.getElementById("contactMessageStatus");
                status.className = "form-message";
                status.textContent = "";
            }, 0);
        });
    }
});