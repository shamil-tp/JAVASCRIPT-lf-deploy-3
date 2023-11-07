function sum() {
    let input1 = +document.getElementById("input1").value;
    let input2 = +document.getElementById("input2").value;

    let result = isNaN(input1) || isNaN(input2) ? "Invalid input" : input1 + input2;
    document.getElementById("Sum").innerHTML = result;
}