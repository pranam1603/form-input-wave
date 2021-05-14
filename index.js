const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

labels.forEach(label => {
    label.innerHTML = label.textContent.split('').map((letter, inx) => {
        return `<span style="transition-delay: ${inx * 60}ms">${letter}</span>`
    }).join('')

    // inputs.forEach(input => {
    //     if (input.value) {
    //         console.log(input.value);
    //         labels.forEach(label => {
    //             label.style.transform = `translateY(-30px)`
    //         })
    //     }
    // })
})