document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const menuToggle = $(".menu-toggle");
    const mainNav = $("#main-navigation");
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const open = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!open));
            const text = menuToggle.querySelector(".sr-only");
            if (text) text.textContent = open ? "Open menu" : "Close menu";
            const icon = menuToggle.querySelector("use");
            if (icon) icon.setAttribute("href", open ? "#icon-menu" : "#icon-close");
            mainNav.classList.toggle("is-open", !open);
        });
        $$(".main-nav a").forEach(link => link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            const text = menuToggle.querySelector(".sr-only");
            if (text) text.textContent = "Open menu";
            const icon = menuToggle.querySelector("use");
            if (icon) icon.setAttribute("href", "#icon-menu");
            mainNav.classList.remove("is-open");
        }));
    }

    const stats = $$(".stats-section .stat-card strong[data-target]");
    const animateStats = () => stats.forEach(el => {
        if (el.dataset.counted) return;
        el.dataset.counted = "true";
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        if (!Number.isFinite(target) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.textContent = el.dataset.display || String(target) + suffix;
            return;
        }
        const duration = 900;
        const start = performance.now();
        const step = now => {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
            el.textContent = value.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = el.dataset.display || target.toLocaleString() + suffix;
        };
        requestAnimationFrame(step);
    });
    if (stats.length) {
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    animateStats();
                    observer.disconnect();
                }
            }, { threshold: 0.25 });
            observer.observe(stats[0]);
        } else animateStats();
    }

    $$(".hero-video video").forEach(video => {
        const fallback = $(".video-fallback", video.parentElement);
        if (fallback) fallback.hidden = true;
        video.addEventListener("error", () => { if (fallback) fallback.hidden = false; });
    });

    const applicationForm = $("#applicationForm");
    if (applicationForm) {
        const facultySelect = $("#faculty");
        const studyLevelSelect = $("#studyLevel");
        const programmeSelect = $("#programme");
        const errorSummary = $("#applicationErrorSummary");
        const errorList = errorSummary ? $("ul", errorSummary) : null;
        const progressBar = $("#applicationProgressBar");
        const progressText = $("#applicationProgressText");
        const motivation = $("#motivation");
        const motivationCounter = $("#motivationCounter");
        const applicationMessage = $("#applicationMessage");
        const successPanel = $("#applicationSuccess");
        const reference = $("#applicationReference");
        const copyReference = $("#copyReference");
        const newApplication = $("#newApplication");
        const clearButton = applicationForm.querySelector('button[type="reset"]');

        const programmes = {
            business: {"Undergraduate":["Bachelor of Business Administration"],"Honours":["BBA Honours"],"Master's":["Master of Business Administration"],"PhD":["PhD in Business Management"]},
            computing: {"Undergraduate":["BSc Computer Science"],"Honours":["BSc Computer Science Honours"],"Master's":["MSc Computer Science"],"PhD":["PhD in Computing"]},
            engineering: {"Undergraduate":["BEng Electrical Engineering"],"Honours":["BEng Electrical Engineering Honours"],"Master's":["MEng Electrical Engineering"],"PhD":["PhD in Engineering"]},
            education: {"Undergraduate":["Bachelor of Education"],"Honours":["BEd Honours"],"Master's":["Master of Education"],"PhD":["PhD in Education"]},
            arts: {"Undergraduate":["BA Communication and Media"],"Honours":["BA Communication and Media Honours"],"Master's":["MA Humanities"],"PhD":["PhD in Arts and Humanities"]},
            science: {"Undergraduate":["BSc Biological Sciences"],"Honours":["BSc Biological Sciences Honours"],"Master's":["MSc Biological Sciences"],"PhD":["PhD in Science"]}
        };
        const levelForProgramme = {};
        Object.entries(programmes).forEach(([faculty, levels]) => Object.entries(levels).forEach(([level, names]) => names.forEach(name => {
            levelForProgramme[faculty + "|" + name] = level;
        })));

        const setError = (field, message, errorId) => {
            if (!field) return !message;
            field.setAttribute("aria-invalid", String(Boolean(message)));
            const error = document.getElementById(errorId);
            if (error) error.textContent = message || "";
            return !message;
        };

        const validateField = field => {
            if (!field) return true;
            let message = "";
            if (field.id === "studyLevel" && !field.value) message = "Select a study level.";
            else if (field.id === "faculty" && !field.value) message = "Select a faculty.";
            else if (field.id === "programme" && !field.value) message = "Select a programme that matches your study level and faculty.";
            else if (field.name === "gender") {
                const checked = applicationForm.querySelector('input[name="gender"]:checked');
                message = checked ? "" : "Select a gender option.";
                return setError(field, message, "genderError");
            } else if (field.name === "financialAid") {
                const checked = applicationForm.querySelector('input[name="financialAid"]:checked');
                message = checked ? "" : "Select whether you would like to be considered for financial aid.";
                return setError(field, message, "financialAidError");
            } else if (field.name === "documents") {
                const identity = document.querySelector('input[name="documents"][value="identity"]');
                message = identity && identity.checked ? "" : "Confirm that you have an identification document.";
                const error = $("#documentsError");
                if (error) error.textContent = message;
                return !message;
            } else if (field.required && !String(field.value || "").trim()) message = "This field is required.";
            else if (field.type === "email" && field.value && !field.validity.valid) message = "Enter a valid email address.";
            else if (field.id === "telephone" && field.value && !/^[+0-9][0-9\\s().-]{7,}$/.test(field.value)) message = "Enter a valid telephone number, including the country code where possible.";
            return setError(field, message, field.id + "Error");
        };

        const updateProgrammeOptions = preferred => {
            const faculty = facultySelect && facultySelect.value;
            const level = studyLevelSelect && studyLevelSelect.value;
            programmeSelect.innerHTML = "";
            if (!faculty || !level || !programmes[faculty] || !programmes[faculty][level]) {
                programmeSelect.disabled = true;
                programmeSelect.innerHTML = '<option value="">Select a study level and faculty first</option>';
                return;
            }
            programmeSelect.disabled = false;
            programmeSelect.append(new Option("Select programme", ""));
            programmes[faculty][level].forEach(name => programmeSelect.append(new Option(name, name)));
            if (preferred && programmes[faculty][level].includes(preferred)) programmeSelect.value = preferred;
        };

        const updateProgress = () => {
            const checks = [
                Boolean($("#firstName")?.value.trim() && $("#surname")?.value.trim() && $("#dob")?.value && $("#nationality")?.value && $("#email")?.value && $("#telephone")?.value && $("#identity")?.value && applicationForm.querySelector('input[name="gender"]:checked')),
                Boolean(studyLevelSelect?.value && facultySelect?.value && programmeSelect?.value),
                Boolean(applicationForm.querySelector('input[name="financialAid"]:checked')),
                Boolean(document.querySelector('input[name="documents"][value="identity"]:checked')),
                Boolean(motivation?.value.trim())
            ];
            const done = checks.filter(Boolean).length;
            if (progressBar) progressBar.style.width = (done * 20) + "%";
            if (progressText) progressText.textContent = done + " of 5 sections complete";
        };

        const updateMotivationCounter = () => {
            if (!motivationCounter || !motivation) return;
            const length = motivation.value.length;
            motivationCounter.textContent = length + " / 1500";
            motivationCounter.classList.toggle("is-soft-minimum", length > 0 && length < 120);
        };
        motivation?.addEventListener("input", () => { updateMotivationCounter(); updateProgress(); validateField(motivation); });

        facultySelect?.addEventListener("change", () => { updateProgrammeOptions(); validateField(facultySelect); updateProgress(); });
        studyLevelSelect?.addEventListener("change", () => { updateProgrammeOptions(); validateField(studyLevelSelect); updateProgress(); });
        programmeSelect?.addEventListener("change", () => { validateField(programmeSelect); updateProgress(); });
        $("input[name=\"gender\"], input[name=\"financialAid\"], input[name=\"documents\"]", document).forEach(input => {
            input.addEventListener("change", () => { validateField(input); updateProgress(); });
        });
        $$("input, select, textarea", applicationForm).forEach(field => {
            field.addEventListener("blur", () => { validateField(field); updateProgress(); });
            field.addEventListener("input", () => { if (field !== motivation) validateField(field); updateProgress(); });
        });

        const query = new URLSearchParams(window.location.search);
        const queryFaculty = query.get("faculty");
        const queryProgramme = query.get("programme");
        if (queryFaculty && facultySelect && facultySelect.querySelector('option[value="' + CSS.escape(queryFaculty) + '"]')) {
            facultySelect.value = queryFaculty;
            const inferredLevel = levelForProgramme[queryFaculty + "|" + queryProgramme];
            if (inferredLevel) studyLevelSelect.value = inferredLevel;
            updateProgrammeOptions(queryProgramme || "");
        } else updateProgrammeOptions();

        const buildSummary = errors => {
            if (!errorSummary || !errorList) return;
            errorList.innerHTML = "";
            errors.forEach(item => {
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.href = "#" + (item.field.id || "documentsError");
                link.textContent = item.message;
                link.addEventListener("click", e => { e.preventDefault(); item.field.focus(); });
                li.append(link);
                errorList.append(li);
            });
            errorSummary.hidden = errors.length === 0;
        };

        applicationForm.addEventListener("submit", e => {
            e.preventDefault();
            const errors = [];
            $$("input[required], select[required], textarea[required]", applicationForm).forEach(field => {
                if (!validateField(field)) errors.push({field: field, message: document.getElementById(field.id + "Error")?.textContent || "Check this field."});
            });
            const gender = applicationForm.querySelector('input[name="gender"]');
            if (!validateField(gender)) errors.push({field: gender, message: $("#genderError")?.textContent || "Select a gender option."});
            const aid = applicationForm.querySelector('input[name="financialAid"]');
            if (!validateField(aid)) errors.push({field: aid, message: $("#financialAidError")?.textContent || "Select a financial aid option."});
            const identity = document.querySelector('input[name="documents"][value="identity"]');
            if (!validateField(identity)) errors.push({field: identity, message: $("#documentsError")?.textContent || "Confirm your documents."});
            const unique = errors.filter((item, index, arr) => arr.findIndex(x => x.message === item.message) === index);
            buildSummary(unique);
            updateProgress();
            if (unique.length) {
                applicationMessage.textContent = "Please correct the highlighted fields.";
                applicationMessage.className = "form-message form-message-error";
                errorSummary?.focus();
                return;
            }
            applicationMessage.textContent = "";
            applicationMessage.className = "form-message";
            const ref = "CW-2027-" + Math.random().toString(36).slice(2, 8).toUpperCase();
            if (reference) reference.textContent = ref;
            applicationForm.hidden = true;
            successPanel.hidden = false;
            successPanel.focus();
        });

        clearButton?.addEventListener("click", e => {
            if (!window.confirm("Clear all application fields and start again?")) {
                e.preventDefault();
                return;
            }
            setTimeout(() => {
                applicationForm.reset();
                $("input[name=\"documents\"]").forEach(el => { el.checked = false; });
                applicationForm.hidden = false;
                successPanel.hidden = true;
                errorSummary.hidden = true;
                applicationMessage.textContent = "";
                applicationMessage.className = "form-message";
                $$(".error-message", applicationForm).forEach(el => el.textContent = "");
                $$('[aria-invalid="true"]', applicationForm).forEach(el => el.removeAttribute("aria-invalid"));
                updateProgrammeOptions();
                updateMotivationCounter();
                updateProgress();
            }, 0);
        });

        copyReference?.addEventListener("click", async () => {
            const value = reference?.textContent || "";
            try {
                await navigator.clipboard.writeText(value);
                copyReference.textContent = "Copied";
                setTimeout(() => { copyReference.textContent = "Copy reference"; }, 1600);
            } catch { copyReference.textContent = "Copy unavailable"; }
        });

        newApplication?.addEventListener("click", () => {
            successPanel.hidden = true;
            applicationForm.hidden = false;
            applicationForm.reset();
            $("input[name=\"documents\"]").forEach(el => { el.checked = false; });
            updateProgrammeOptions();
            updateMotivationCounter();
            updateProgress();
            applicationForm.querySelector("input")?.focus();
        });

        updateMotivationCounter();
        updateProgress();
    }

    const contactForm = $("#contactForm");
    if (contactForm) {
        const message = $("#contactMessage");
        const counter = $("#contactMessageCounter");
        const status = $("#contactMessageStatus");
        const updateCounter = () => { if (message && counter) counter.textContent = message.value.length + " / " + (message.maxLength || 1000); };
        message?.addEventListener("input", updateCounter);
        updateCounter();
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            let firstInvalid = null;
            $("[required]", contactForm).forEach(field => {
                const error = $("#" + field.id + "Error");
                let msg = "";
                if (!String(field.value || "").trim()) msg = "This field is required.";
                else if (field.type === "email" && !field.validity.valid) msg = "Enter a valid email address.";
                field.setAttribute("aria-invalid", String(Boolean(msg)));
                if (error) error.textContent = msg;
                if (msg && !firstInvalid) firstInvalid = field;
            });
            if (firstInvalid) {
                status.textContent = "Please correct the highlighted fields.";
                status.className = "form-message form-message-error";
                firstInvalid.focus();
                return;
            }
            status.textContent = "Thanks — your message has been prepared as a demonstration. No message was sent.";
            status.className = "form-message form-message-success";
        });
        contactForm.addEventListener("reset", () => setTimeout(() => {
            $$('[aria-invalid="true"]', contactForm).forEach(el => el.removeAttribute("aria-invalid"));
            $$(".error-message", contactForm).forEach(el => el.textContent = "");
            if (status) { status.textContent = ""; status.className = "form-message"; }
            updateCounter();
        }, 0));
    }
});