const dropdown = document.querySelector('.menu-dropdown');
const black = document.querySelector('.black .product-list')
const white = document.querySelector('.white .product-list')
    // 下拉
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
};
// black渲染
console.log(black);

axios.get('http://localhost:3000/design1').then(res => {
    console.log(res.data.data);
    var str = '';
    for (var i = 0; i < res.data.data.length; i++) {
        str += `
            <a class="product-item" href="#">
                <div class="product-item-pic">
                    <img src="${res.data.data[i].img}"></div>
                <div class="product-item-info">
                    <div class="product-item-info__hd">
                        <div class="product-info-left">
                            <p class="product-info-name">${res.data.data[i].title}</p>
                            <p class="product-info-tag"${res.data.data[i].product}</p>
                        </div>
                        <div class="product-info-right">
                            <p>${res.data.data[i].unit}</p>
                            <div class="product-info-price" data-id="9012300">${res.data.data[i].price}</div>
                        </div>
                    </div>
                    <div class="product-item-info__desc">${res.data.data[i].content}</div>
                </div>
            </a>
        `
        black.innerHTML = str
    }

}).catch((err) => {
    console.log(err);
})
axios.get('http://localhost:3000/design2').then(res => {
    console.log(res.data.data);
    var str = '';
    for (var i = 0; i < res.data.data.length; i++) {
        str += `
            <a class="product-item" href="#">
                <div class="product-item-pic">
                    <img src="${res.data.data[i].img}"></div>
                <div class="product-item-info">
                    <div class="product-item-info__hd">
                        <div class="product-info-left">
                            <p class="product-info-name">${res.data.data[i].title}</p>
                            <p class="product-info-tag"${res.data.data[i].product}</p>
                        </div>
                        <div class="product-info-right">
                            <p>${res.data.data[i].unit}</p>
                            <div class="product-info-price" data-id="9012300">${res.data.data[i].price}</div>
                        </div>
                    </div>
                    <div class="product-item-info__desc">${res.data.data[i].content}</div>
                </div>
            </a>
        `
        white.innerHTML = str
    }

}).catch((err) => {
    console.log(err);
})