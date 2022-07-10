
function toggleClass(target, klass){
  if(target && klass)
      document.querySelector(target).classList.toggle(klass)
}
function removeClass(target, klass){
  if(target && klass)
      document.querySelector(target).classList.remove(klass)
}