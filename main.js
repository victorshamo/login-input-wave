const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    //innerText = each letter
    label.innerHTML = label.innerText
    //to split them into an array
        .split('')
    //to turn it into an array with a span around it
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    //to turn it back into a string
        .join('')
});