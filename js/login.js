// tab切换
const dropdown = document.querySelector('.menu-dropdown');
const tabs = document.querySelector('.login-tabs');
const form = document.getElementsByClassName('login-form')
const telVal = document.getElementById('phone');
const codeVal = document.getElementById('phoneCode')
const pwdVal = document.getElementById('phonePassWord')
const getcode = document.getElementById('getcode');
// 邮箱
const mailVal = document.getElementById('email')
const pwd2Val = document.getElementById('emailPassWord');
// 手机号注册和邮箱注册切
// console.log(tabs.children);
var code = null;
for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].onclick = function() {
        for (var j = 0; j < tabs.children.length; j++) {
            tabs.children[j].classList.remove('active')
            form[j].classList.remove("tel")
        };
        // console.log(111, this)
        this.classList.add('active')
        form[i].classList.add("tel")
    }
};
// 头部下拉
dropdown.onmouseover = function() {
    this.classList.add('open')
}
dropdown.onmouseout = function() {
    this.classList.remove('open')
};
// 获取手机值
console.log(telVal.value)

// 随机生成4位验证码
getcode.onclick = function() {
    code = verificationCode();
    console.log(code)
    getcode.innerHTML = code
};

// 随机验证码函数
function verificationCode() {
    var arr = [];
    for (var i = 48; i < 123; i++) {
        if (i > 57 && i < 65) {
            continue;
            i = 64;
        }
        if (i > 90 && i < 97) {
            continue;
            i = 96;
        }
        arr.push(String.fromCharCode(i)); //String.fromCharCode(46) 将编码转换为字符串
    }
    arr = arr.sort(function() {
        return Math.random() - 0.5;
    })
    arr.length = 4;
    str = arr.join("");
    // res.innerHTML=str.toLowerCase();    //将字符串的大写转换为小写
    // res.innerHTML = str.toUpperCase();     //将字符串中的所有小写字母转换为大写字母
    return str;
    console.log(str);
}

// 手机号点击注册
function phoneRegister() {
    const telTxt = document.querySelector('.tel-box .tips')
    const pwdTxt = document.querySelector('.pwd-box .tips')
    const codeTxt = document.querySelector('.code-box .tips')
    const pattTel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    const pattPwd = /\w{8,20}/g;
    var resTel = pattTel.test(telVal.value)
    var resPwd = pattPwd.test(pwdVal.value)
    console.log(pwdVal.value)
    console.log(resPwd)
    if (resTel) {
        telTxt.innerText = '手机号输入正确'
            // console.log(telTxt)
    } else {
        telTxt.innerText = '手机号输入错误'
    };
    if (resPwd) {
        pwdTxt.innerText = '密码格式正确'
            // console.log(pwdTxt)
    } else {
        pwdTxt.innerText = '密码格式错误'
    };

    if (codeVal.value == code) {
        codeTxt.innerHTML = '验证码正确'
    } else {
        codeTxt.innerHTML = '验证码错误'
    }
    if (codeVal.value == code && resPwd == true && resTel == true) {
        console.log('成功')
        axios.get('http://localhost:3000/login', {
            params: {
                tel: telVal.value,
                pwd: pwdVal.value
            }

        }).then(function(res) {
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
    } else {
        console.log('失败')
    }

}
// 邮箱点击注册
function emailRegister() {
    const mailTxt = document.querySelector('.mail-box .tips')
    const pwd2Txt = document.querySelector('.pwd-box2 .tips')
    const pattmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    const pattPwd2 = /\w{8,20}/g;
    var resMail = pattmail.test(mailVal.value)
    var resPwd2 = pattPwd2.test(pwd2Val.value)
    console.log(pwdVal.value)
    console.log(resMail)
    if (resMail) {
        mailTxt.innerText = '邮箱输入正确'
            // console.log(telTxt)
    } else {
        mailTxt.innerText = '邮箱输入错误'
    };
    if (resPwd2) {
        pwd2Txt.innerText = '密码格式正确'
            // console.log(pwdTxt)
    } else {
        pwd2Txt.innerText = '密码格式错误'
    };
    if (resPwd2 == true && resMail == true) {
        console.log('成功')
        axios.get('http://localhost:3000/login', {
            params: {
                tel: mailVal.value,
                pwd: pwd2Val.value
            }

        }).then(function(res) {
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
    } else {
        console.log('失败')
    }

}