document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("Par");
    const colorPicker = document.getElementById("color");
    const fontSizePicker = document.getElementById("fontSize");
    const fontFamilyPicker = document.getElementById("fontFamily");

    colorPicker.addEventListener("input", function() {
        paragraph.style.color = this.value;
    });

    fontSizePicker.addEventListener("input", function() {
        paragraph.style.fontSize = `${this.value}px`;
    });

    fontFamilyPicker.addEventListener("change", function() {
        paragraph.style.fontFamily = this.value;
    });
});
