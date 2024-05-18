for (let year = 1004; year <= 2024; year += 4) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.write(year,"<br>");
    }
}
