// tab切换
const dropdown = document.querySelector('.menu-dropdown');
const tabs = document.querySelector('.login-tabs');
const form = document.getElementsByClassName('login-form')

const userVal = document.getElementById('phone');
const pwdVal = document.getElementById('phonePassWord')


// 账号登陆和微信扫码切换

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

// 账号点击登陆
function phoneRegister() {
    const userTxt = document.querySelector('.tel-box .tips')
    const pwdTxt = document.querySelector('.pwd-box .tips')
    const patt = /@/g;
    const res = patt.test(userVal.value)
    console.log(res)
    if (res) {
        const pattUser = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        const pattPwd = /\w{8,20}/g;
        var resUser = pattUser.test(userVal.value)
        var resPwd = pattPwd.test(pwdVal.value)

        if (resUser) {
            userTxt.innerText = '邮箱输入正确'
                // console.log(telTxt)
        } else {
            userTxt.innerText = '邮箱输入错误'
        };
        if (resPwd) {
            pwdTxt.innerText = '密码格式正确'
                // console.log(pwdTxt)
        } else {
            pwdTxt.innerText = '密码格式错误'
        };

        if (resPwd == true && resUser == true) {
            console.log('成功')
            axios.get('http://localhost:3000/landing', {
                params: {
                    user: userVal.value,
                    pwd: pwdVal.value
                }

            }).then(function(res) {
                console.log(res.data.status);
                if (res.data.status == 200) {
                    window.location.href = '../index.html'
                } else if (res.data.status == 404) {
                    alert('密码错误或者判断是否已注册')
                }
            }).catch(function(err) {
                console.log(err);
            });

        } else {
            alert('账号或密码错误')
        }
    } else {
        const pattUser = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        const pattPwd = /\w{8,20}/g;
        var resUser = pattUser.test(userVal.value)
        var resPwd = pattPwd.test(pwdVal.value)

        if (resUser) {
            userTxt.innerText = '手机号输入正确'
                // console.log(telTxt)
        } else {
            userTxt.innerText = '手机号输入错误'
        };
        if (resPwd) {
            pwdTxt.innerText = '密码格式正确'
                // console.log(pwdTxt)
        } else {
            pwdTxt.innerText = '密码格式错误'
        };

        if (resPwd == true && resUser == true) {
            console.log('成功')
            axios.get('http://localhost:3000/landing', {
                params: {
                    user: userVal.value,
                    pwd: pwdVal.value
                }

            }).then(function(res) {
                console.log(res.data.status);
                if (res.data.status == 200) {
                    window.location.href = '../index.html'
                } else if (res.data.status == 404) {
                    alert('密码错误或者判断是否已注册')
                }
            }).catch(function(err) {
                console.log(err);
            });

        } else {
            alert('账号或密码错误')
        }

    }

}