const caseitem = document.querySelectorAll(".case_tav .case_tav_item")
const casebody = document.querySelectorAll(".case-fixed .case_body")
const alist = document.querySelectorAll(".nav .nav-group-list a")
const content = document.querySelectorAll(".contents .content")
const dropdown = document.querySelector('.menu-dropdown');


// 头部下拉
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
};
//swiper
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    loop: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});


caseitem.forEach((item, index) => {
    item.onclick = function() {
        for (var i = 0; i < caseitem.length; i++) {
            caseitem[i].classList.remove("case_tav_item_active");
            casebody[i].classList.remove('case-active');
        }
        item.classList.add("case_tav_item_active");
        casebody[index].classList.add('case-active')
    }
})

alist.forEach((item, index) => {
    item.onclick = function() {
        for (var i = 0; i < alist.length; i++) {
            alist[i].classList.remove("nav-active");
            content[i].classList.remove('contentactive')
        }
        item.classList.add("nav-active");
        content[index].classList.add('contentactive')
    }
})