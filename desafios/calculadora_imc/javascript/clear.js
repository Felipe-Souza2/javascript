function clearFn() {
  window.document.getElementById('peso').value = ''
  window.document.getElementById('altura').value = ''
  window.document.getElementById('resultado').innerHTML = ''
  window.document.getElementById('imcTable').className = 'hidden'
  document.body.style.background = '#fff'
}

if (typeof window !== 'undefined') {
  window.clearFn = clearFn
}