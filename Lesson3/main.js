
let avatar = document.querySelectorAll('.uploadFile');
let blah = document.querySelectorAll('.blah')

for(let i = 0; i < avatar.length; i++) {
    avatar[i].onchange = evt => {
        const [file] = avatar[i].files
        if (file) {
            for(let i = 0; i < blah.length; i++) {
                blah[i].style.display = 'block'
                blah[i].src = URL.createObjectURL(file)
            }
        }
      }
}