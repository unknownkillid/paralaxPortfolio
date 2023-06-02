const applyCVBtn = document.getElementById('applyNowCV');
const registerContainerMain = document.getElementById('registerContainerMain')
const xBtn = document.getElementById('registerXBtn');

function applyOpen() {
    registerContainerMain.classList.add('comein')
}


xBtn.addEventListener('click', () => {
    registerContainerMain.classList.remove('comein')
})