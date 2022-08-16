const level = document.querySelector('.header__timer-extra');
let speed = 20

function headerTimer(i = 0) {


    if (i > 50 && i < 75) {
        speed = 50
    } else if (i >= 75 && i < 85) {
        speed = 100
    } else if (i >= 85 && i < 97) {
        speed = 150
    } else if (i >= 97) {
        speed = 250
    }


    if (i <= 100) {
        setTimeout(() => {
            headerTimer(i)
        }, speed);
    }

    headerTimer()



}

const products = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        kcall: 130,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        kcall: 160,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 240,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    }
}

const productBtn = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', function () {
        minusPlus(this);
    })

}

function minusPlus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute("id"),
        parentPrice = parent.querySelector('.main__product-price span'),
        parentKcall = parent.querySelector('.main__product-kcall span'),
        parentNum = parent.querySelector('.main__product-num'),
        elementSym = element.getAttribute("data-symbol")

    if (elementSym == "+" && products[parentId].amount < 15) {
        products[parentId].amount++
    } else if (elementSym == "-" && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    parentNum.innerHTML = products[parentId].amount
    parentPrice.innerHTML = products[parentId].Summ
    parentKcall.innerHTML = products[parentId].Kcall
}

const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    reseiptWindow = document.querySelector('.receipt__window'),
    reseiptOut = document.querySelector('.receipt__window-out'),
    reseiptBtn = document.querySelector('.receipt__window-btn');

let totalProduct = []
let totalName = ''
let totalPrice = 0,
    totalKcall = 0;



addCart.addEventListener('click', function () {
    for (const key in products) {
        const product = products[key]
        if (product.amount > 0) {
            totalProduct.push(product)
        }
        product.price = product.Summ
        product.kcall = product.Kcall

    }
    for (let i = 0; i < totalProduct.length; i++) {
        const el = totalProduct[i];
        totalName += el.name + ', '
        totalPrice += el.price
        totalKcall += el.kcall
    }
    
    reseiptOut.innerHTML = `Total Products: ${totalName} \n \nTotal Calory: ${totalKcall} \n\n Total Price : ${totalPrice} summa \n\n${timeInfo()}`
    
    
    
    
    
    
    
    receipt.style.display = 'flex'


    setTimeout(() => {
        receipt.style.opacity = '1'
    }, 300);
    setTimeout(() => {
        reseiptWindow.style.top = '20%'
    }, 600);
    
    
    let clearProduct = document.querySelectorAll('.main__product-num , .main__product-price span , .main__product-kcall span');
    for (let i = 0; i < clearProduct.length; i++) {
        clearProduct[i].innerHTML = 0
    }
})


function timeInfo() { 
    let time = new Date,
        s = time.getSeconds(),
        m = time.getMinutes(),
        h = time.getHours(),
        day = time.getDate(),
        month = time.getMonth(),
        year = time.getFullYear();
    return `${h} : ${m} : ${s}  ${day}.${month+1}.${year} `
}


reseiptBtn.addEventListener('click', function () {
    location.reload()
})
 






const view =document.querySelector('.view');
const viewClose = document.querySelector('.view__close');
const viewImg = view.querySelector('img')
const productImg = document.querySelectorAll('.main__product-info');

for (let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('dblclick' , function () {
        changeImg(this)
    })
    
}


function changeImg(item) {
    view.classList.add('active')
    let img = item.querySelector('img').getAttribute('src')
    viewImg.setAttribute('src',img)
   
}
  
viewClose.addEventListener('click' ,function () {
     view.classList.remove('active')
})
