// First Step: select element
// const for something that never changes, let for things that changes/gets reassigned

const toggler = document.getElementById('toggler')
const toBeToggled = document.getElementById('toBeToggled')

// 2nd step: do whatever it is you want to do
function toggleButton() {
  // First way of doing it
  if (toBeToggled.disabled === false) {
    toBeToggled.disabled = true
  } else {
    toBeToggled.disabled = false
  }

  // Second way of doing it
  // toBeToggled.disabled = !toBeToggled.disabled
  //                 true = !true
  //                false = !false
}

toggler.addEventListener('click', () => toggleButton())