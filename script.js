function createProgram() {

    const goal = document.getElementById("goal").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const days = Number(document.getElementById("days").value);

    if (height === "" || weight === "") {
        alert("Lütfen boy ve kilo bilgilerini gir.");
        return;
    }

    let goalText = "";

    if (goal === "muscle") {
        goalText = "Kas kazanma";
    }

    if (goal === "fat") {
        goalText = "Yağ yakma";
    }

    if (goal === "strength") {
        goalText = "Güçlenme";
    }

    if (goal === "fitness") {
        goalText = "Kondisyon";
    }


    const programText =
        "Hedef: " + goalText +
        " • Boy: " + height + " cm" +
        " • Kilo: " + weight + " kg" +
        " • Haftada " + days + " gün";


    document.getElementById("programText").innerText = programText;


    const exerciseList =
        document.getElementById("exerciseList");

    exerciseList.innerHTML = "";


    /*
    =====================================
    KAS KAZANMA
    =====================================
    */

    const muscleProgram = [

        {
            day: "1. Gün",
            title: "Göğüs + Triceps",
            exercises: [
                ["🏋️ Bench Press", "4 set × 8-12 tekrar", "90 saniye"],
                ["💪 Incline Dumbbell Press", "3 set × 10-12 tekrar", "90 saniye"],
                ["💪 Chest Fly", "3 set × 12-15 tekrar", "60 saniye"],
                ["🦾 Triceps Pushdown", "3 set × 10-15 tekrar", "60 saniye"],
                ["🔥 Overhead Triceps Extension", "3 set × 10-12 tekrar", "60 saniye"]
            ]
        },

        {
            day: "2. Gün",
            title: "Sırt + Biceps",
            exercises: [
                ["🦾 Lat Pulldown", "4 set × 8-12 tekrar", "90 saniye"],
                ["🏋️ Barbell Row", "3 set × 8-12 tekrar", "90 saniye"],
                ["💪 Seated Cable Row", "3 set × 10-12 tekrar", "90 saniye"],
                ["💪 Biceps Curl", "3 set × 10-15 tekrar", "60 saniye"],
                ["🔥 Hammer Curl", "3 set × 10-12 tekrar", "60 saniye"]
            ]
        },

        {
            day: "3. Gün",
            title: "Bacak",
            exercises: [
                ["🏋️ Squat", "4 set × 8-12 tekrar", "120 saniye"],
                ["🦵 Leg Press", "3 set × 10-12 tekrar", "90 saniye"],
                ["🦵 Romanian Deadlift", "3 set × 8-12 tekrar", "90 saniye"],
                ["🔥 Leg Curl", "3 set × 10-15 tekrar", "60 saniye"],
                ["🦵 Calf Raise", "4 set × 12-15 tekrar", "60 saniye"]
            ]
        },

        {
            day: "4. Gün",
            title: "Omuz + Karın",
            exercises: [
                ["🏋️ Shoulder Press", "4 set × 8-12 tekrar", "90 saniye"],
                ["💪 Lateral Raise", "3 set × 12-15 tekrar", "60 saniye"],
                ["🔥 Rear Delt Fly", "3 set × 12-15 tekrar", "60 saniye"],
                ["🔥 Plank", "3 set × 30-60 saniye", "60 saniye"],
                ["💪 Leg Raise", "3 set × 10-15 tekrar", "60 saniye"]
            ]
        }

    ];


    /*
    =====================================
    YAĞ YAKMA
    =====================================
    */

    const fatProgram = [

        {
            day: "1. Gün",
            title: "Full Body",
            exercises: [
                ["🏋️ Goblet Squat", "3 set × 12-15 tekrar", "60 saniye"],
                ["💪 Push Up", "3 set × 10-15 tekrar", "60 saniye"],
                ["🦾 Dumbbell Row", "3 set × 10-12 tekrar", "60 saniye"],
                ["🔥 Walking Lunge", "3 set × 10 tekrar", "60 saniye"],
                ["🏃 Cardio", "20 dakika", "—"]
            ]
        },

        {
            day: "2. Gün",
            title: "Üst Vücut + Cardio",
            exercises: [
                ["💪 Push Up", "3 set × 10-15 tekrar", "60 saniye"],
                ["🦾 Lat Pulldown", "3 set × 10-12 tekrar", "60 saniye"],
                ["💪 Shoulder Press", "3 set × 10-12 tekrar", "60 saniye"],
                ["🔥 Biceps Curl", "3 set × 12-15 tekrar", "60 saniye"],
                ["🏃 Cardio", "25 dakika", "—"]
            ]
        },

        {
            day: "3. Gün",
            title: "Alt Vücut",
            exercises: [
                ["🏋️ Squat", "3 set × 12 tekrar", "60 saniye"],
                ["🦵 Leg Press", "3 set × 12 tekrar", "60 saniye"],
                ["🔥 Walking Lunge", "3 set × 10 tekrar", "60 saniye"],
                ["🦵 Calf Raise", "3 set × 15 tekrar", "60 saniye"],
                ["🏃 Cardio", "20 dakika", "—"]
            ]
        },

        {
            day: "4. Gün",
            title: "Full Body + Cardio",
            exercises: [
                ["🏋️ Bodyweight Squat", "3 set × 15 tekrar", "60 saniye"],
                ["💪 Push Up", "3 set × 10-15 tekrar", "60 saniye"],
                ["🦾 Row", "3 set × 12 tekrar", "60 saniye"],
                ["🔥 Plank", "3 set × 30-60 saniye", "60 saniye"],
                ["🏃 Cardio", "30 dakika", "—"]
            ]
        }

    ];


    /*
    =====================================
    GÜÇ PROGRAMI
    =====================================
    */

    const strengthProgram = [

        {
            day: "1. Gün",
            title: "Göğüs + Triceps",
            exercises: [
                ["🏋️ Bench Press", "5 set × 5 tekrar", "180 saniye"],
                ["💪 Incline Press", "4 set × 6 tekrar", "120 saniye"],
                ["🦾 Triceps Pushdown", "3 set × 8 tekrar", "90 saniye"]
            ]
        },

        {
            day: "2. Gün",
            title: "Sırt + Biceps",
            exercises: [
                ["🏋️ Deadlift", "4 set × 5 tekrar", "180 saniye"],
                ["🦾 Barbell Row", "4 set × 6 tekrar", "120 saniye"],
                ["💪 Biceps Curl", "3 set × 8 tekrar", "90 saniye"]
            ]
        },

        {
            day: "3. Gün",
            title: "Bacak",
            exercises: [
                ["🏋️ Squat", "5 set × 5 tekrar", "180 saniye"],
                ["🦵 Leg Press", "4 set × 6-8 tekrar", "120 saniye"],
                ["🦵 Romanian Deadlift", "3 set × 6 tekrar", "120 saniye"]
            ]
        },

        {
            day: "4. Gün",
            title: "Omuz",
            exercises: [
                ["🏋️ Overhead Press", "5 set × 5 tekrar", "180 saniye"],
                ["💪 Lateral Raise", "3 set × 10 tekrar", "90 saniye"],
                ["🦾 Barbell Row", "3 set × 6 tekrar", "120 saniye"]
            ]
        }

    ];


    /*
    =====================================
    KONDISYON PROGRAMI
    =====================================
    */

    const fitnessProgram = [

        {
            day: "1. Gün",
            title: "Full Body",
            exercises: [
                ["🏃 Jogging", "15 dakika", "—"],
                ["🏋️ Bodyweight Squat", "3 set × 15 tekrar", "45 saniye"],
                ["💪 Push Up", "3 set × 10 tekrar", "45 saniye"],
                ["🔥 Plank", "3 set × 30 saniye", "45 saniye"]
            ]
        },

        {
            day: "2. Gün",
            title: "Cardio + Core",
            exercises: [
                ["🏃 Jogging", "20 dakika", "—"],
                ["🔥 Plank", "3 set × 45 saniye", "45 saniye"],
                ["💪 Leg Raise", "3 set × 12 tekrar", "45 saniye"],
                ["🔥 Mountain Climber", "3 set × 20 tekrar", "45 saniye"]
            ]
        },

        {
            day: "3. Gün",
            title: "Full Body",
            exercises: [
                ["🏋️ Bodyweight Squat", "3 set × 15 tekrar", "45 saniye"],
                ["💪 Push Up", "3 set × 10-15 tekrar", "45 saniye"],
                ["🦾 Row", "3 set × 12 tekrar", "45 saniye"],
                ["🔥 Plank", "3 set × 45 saniye", "45 saniye"]
            ]
        },

        {
            day: "4. Gün",
            title: "Cardio",
            exercises: [
                ["🏃 Jogging", "25 dakika", "—"],
                ["🔥 Mountain Climber", "3 set × 20 tekrar", "45 saniye"],
                ["🔥 Jumping Jack", "3 set × 30 tekrar", "45 saniye"],
                ["🔥 Burpee", "3 set × 10 tekrar", "60 saniye"]
            ]
        }

    ];


    /*
    =====================================
    PROGRAMI SEÇ
    =====================================
    */

    let selectedProgram;

    if (goal === "muscle") {
        selectedProgram = muscleProgram;
    }

    if (goal === "fat") {
        selectedProgram = fatProgram;
    }

    if (goal === "strength") {
        selectedProgram = strengthProgram;
    }

    if (goal === "fitness") {
        selectedProgram = fitnessProgram;
    }


    /*
    =====================================
    SEÇİLEN GÜN SAYISINA GÖRE GÖSTER
    =====================================
    */

    const selectedDays =
        selectedProgram.slice(0, days);


    selectedDays.forEach(function(day) {

        const dayBox =
            document.createElement("div");

        dayBox.className = "day-box";


        const dayTitle =
            document.createElement("h4");

        dayTitle.innerText =
            day.day + " — " + day.title;


        dayBox.appendChild(dayTitle);


        day.exercises.forEach(function(exercise) {

            const exerciseBox =
                document.createElement("div");

            exerciseBox.className =
                "exercise";


            exerciseBox.innerHTML =

                "<strong>" +
                exercise[0] +
                "</strong>" +

                "<p>" +
                exercise[1] +
                "</p>" +

                "<small>⏱️ Dinlenme: " +
                exercise[2] +
                "</small>" +

                "<button class='complete-button' onclick='completeExercise(this)'>" +
                "✓ Tamamladım" +
                "</button>";


            dayBox.appendChild(exerciseBox);

        });


        exerciseList.appendChild(dayBox);

    });


    const program =
        document.getElementById("program");


    program.style.display = "block";


    program.scrollIntoView({
        behavior: "smooth"
    });

}


/*
=====================================
EGZERSİZ TAMAMLAMA
=====================================
*/

function completeExercise(button) {

    button.innerText = "✓ Tamamlandı";

    button.classList.add("completed");

    button.disabled = true;

}
