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


    let exercises = [];


    if (goal === "muscle") {

        exercises = [
            ["🏋️ Squat", "3 set × 8-12 tekrar"],
            ["💪 Bench Press", "3 set × 8-12 tekrar"],
            ["🦾 Lat Pulldown", "3 set × 10-12 tekrar"],
            ["🔥 Shoulder Press", "3 set × 8-12 tekrar"],
            ["💪 Biceps Curl", "3 set × 10-15 tekrar"]
        ];

    }


    if (goal === "fat") {

        exercises = [
            ["🏋️ Goblet Squat", "3 set × 12 tekrar"],
            ["💪 Push Up", "3 set × 10-15 tekrar"],
            ["🦾 Row", "3 set × 12 tekrar"],
            ["🔥 Walking Lunge", "3 set × 10 tekrar"],
            ["🏃 Cardio", "20-30 dakika"]
        ];

    }


    if (goal === "strength") {

        exercises = [
            ["🏋️ Squat", "4 set × 5 tekrar"],
            ["💪 Bench Press", "4 set × 5 tekrar"],
            ["🦾 Deadlift", "3 set × 5 tekrar"],
            ["🔥 Overhead Press", "3 set × 6 tekrar"],
            ["🦾 Barbell Row", "3 set × 6-8 tekrar"]
        ];

    }


    if (goal === "fitness") {

        exercises = [
            ["🏃 Jogging", "15-20 dakika"],
            ["🏋️ Bodyweight Squat", "3 set × 15 tekrar"],
            ["💪 Push Up", "3 set × 10 tekrar"],
            ["🦾 Row", "3 set × 12 tekrar"],
            ["🔥 Plank", "3 × 30-60 saniye"]
        ];

    }


    /*
        Seçilen gün sayısına göre
        programın uzunluğunu ayarlıyoruz.
    */

    const numberOfExercises =
        Math.min(exercises.length, days + 2);


    for (let i = 0; i < numberOfExercises; i++) {

        const exercise = exercises[i];


        const div =
            document.createElement("div");

        div.className = "exercise";


        div.innerHTML =
            "<strong>" +
            exercise[0] +
            "</strong>" +
            "<p>" +
            exercise[1] +
            "</p>";


        exerciseList.appendChild(div);
    }


    const program =
        document.getElementById("program");


    program.style.display = "block";


    program.scrollIntoView({
        behavior: "smooth"
    });

}