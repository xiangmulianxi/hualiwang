// 顶部
const dropdown = document.querySelector('.menu-dropdown');
const fcaketitle = document.querySelector('.f-cake-title-box-r');
const flproducts = document.querySelector('.f-lover .fl-products')
const felder = document.querySelector('.f-elder .fl-products')
const fsong = document.querySelector('.f-song .fl-products')
const fcake = document.querySelector('.f-cake .fl-products')
const fgifts = document.querySelector('.f-gifts .fl-products')
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
}
fcaketitle.onmouseover = function() {
    this.classList.add('open')
}
fcaketitle.onmouseout = function() {
    this.classList.remove('open')
}

axios.get('http://localhost:3000/')
    .then(function(res) {
        var products = '';
        for (var i = 0; i < res.data.length; i++) {
            products += `
                <div class="fl-products-item">
                    <a href="javascript:;" target="_blank">
                        <div class="img-box" href="javascript:;">
                            <img height="240" width="220" src="${res.data[i].pic}" style="display: inline;">
                        </div>
                        <div class="product-content">
                            <p class="product-title">${res.data[i].title}</p>
                            <p class="product-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">${res.data[i].price}</span>
                            </p>
                            <p class="product-sell">${res.data[i].productsell}</p>
                        </div>
                    </a>
                </div>
            `
        }
        flproducts.innerHTML = products
    })
    .catch(function(err) {
        console.log(err);
    });
axios.get('http://localhost:3000/1')
    .then(function(res) {
        var elder = '';
        for (var i = 0; i < res.data.length; i++) {
            elder += `
                <div class="fl-products-item">
                    <a href="javascript:;" target="_blank">
                        <div class="img-box" href="javascript:;">
                            <img height="240" width="220" src="${res.data[i].pic}" style="display: inline;">
                        </div>
                        <div class="product-content">
                            <p class="product-title">${res.data[i].title}</p>
                            <p class="product-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">${res.data[i].price}</span>
                            </p>
                            <p class="product-sell">${res.data[i].productsell}</p>
                        </div>
                    </a>
                </div>
            `
        }
        felder.innerHTML = elder
    })
    .catch(function(err) {
        console.log(err);
    });

axios.get('http://localhost:3000/2')
    .then(function(res) {
        var song = '';
        for (var i = 0; i < res.data.length; i++) {
            song += `
                <div class="fl-products-item">
                    <a href="javascript:;" target="_blank">
                        <div class="img-box" href="javascript:;">
                            <img height="240" width="220" src="${res.data[i].pic}" style="display: inline;">
                        </div>
                        <div class="product-content">
                            <p class="product-title">${res.data[i].title}</p>
                            <p class="product-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">${res.data[i].price}</span>
                            </p>
                            <p class="product-sell">${res.data[i].productsell}</p>
                        </div>
                    </a>
                </div>
            `
        }
        fsong.innerHTML = song
    })
    .catch(function(err) {
        console.log(err);
    });

axios.get('http://localhost:3000/3')
    .then(function(res) {
        var cake = '';
        for (var i = 0; i < res.data.length; i++) {
            cake += `
                <div class="fl-products-item">
                    <a href="javascript:;" target="_blank">
                        <div class="img-box" href="javascript:;">
                            <img height="240" width="220" src="${res.data[i].pic}" style="display: inline;">
                        </div>
                        <div class="product-content">
                            <p class="product-title">${res.data[i].title}</p>
                            <p class="product-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">${res.data[i].price}</span>
                            </p>
                            <p class="product-sell">${res.data[i].productsell}</p>
                        </div>
                    </a>
                </div>
            `
        }
        fcake.innerHTML = cake
    })
    .catch(function(err) {
        console.log(err);
    });
axios.get('http://localhost:3000/4')
    .then(function(res) {
        var gifts = '';
        for (var i = 0; i < res.data.length; i++) {
            gifts += `
                <div class="fl-products-item">
                    <a href="javascript:;" target="_blank">
                        <div class="img-box" href="javascript:;">
                            <img height="240" width="220" src="${res.data[i].pic}" style="display: inline;">
                        </div>
                        <div class="product-content">
                            <p class="product-title">${res.data[i].title}</p>
                            <p class="product-price">
                                <span class="price-sign">¥</span>
                                <span class="price-num">${res.data[i].price}</span>
                            </p>
                            <p class="product-sell">${res.data[i].productsell}</p>
                        </div>
                    </a>
                </div>
            `
        }
        fgifts.innerHTML = gifts
    })
    .catch(function(err) {
        console.log(err);
    });