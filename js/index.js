// 顶部
const dropdown = document.querySelector('.menu-dropdown');
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
}