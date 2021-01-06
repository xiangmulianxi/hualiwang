// 顶部
const dropdown = document.querySelector('.menu-dropdown');
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
}

axios.get('http://localhost:3000')
    .then(function(res) {
        console.log(res.data);
    })
    .catch(function(err) {
        console.log(err);
    });