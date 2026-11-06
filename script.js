function love() {
            var name1 = document.getElementById("name1").value;
            var name2 = document.getElementById("name2").value;
            var result = Math.floor(Math.random() * 100);
            var par = document.getElementById("par");
            par.innerHTML = "The love percentage between " + name1 + " and " + name2 + " is: " + result + "%";
}