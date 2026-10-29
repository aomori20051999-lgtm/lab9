 let averageGrade = 75;

if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade <= 71) {
    console.log("Задовільно");
} else if (averageGrade <= 81) {
    console.log("Добре");
} else if (averageGrade <= 91) {
    console.log("Дуже добре");
} else if (averageGrade <= 100) {
    console.log("Відмінно");
} else {
    console.log("Некоректна оцінка");
}

const avgGrade = 75;

switch (true) {
    case averageGrade < 60:
        console.log("Незадовільно");
        break;
    case averageGrade <= 70:
        console.log("Задовільно");
        break;
    case averageGrade <= 80:
        console.log("Добре");
        break;
    case averageGrade <= 90:
        console.log("Дуже добре");
        break;
    case averageGrade <= 100:
        console.log("Відмінно");
        break;
    default:
        console.log("Неправильна оцінка");
}