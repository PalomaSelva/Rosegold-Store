const ccIcon = window.document.querySelector('.credit-card-image .cc-bg .cc-icons img:last-of-type')
console.log(ccIcon)
function setCardType(type){
    ccIcon.setAttribute('src',`./assets/imgs/cc-${type}.svg`)
}

globalThis.setCardType = setCardType

const cvc = window.document.querySelector('#cvc')
const cvcPattern  = {mask:'000'}
const cvcMasked = IMask(cvc, cvcPattern);

const ccNumber = window.document.querySelector('#number')
const numberPattern = {
    mask: [
        {
            mask:'0000 0000 0000 0000',
            regex:/^4\d{0,15}/,
            cardType:'visa'
        },
        {
            mask:'0000 0000 0000 0000',
            regex:/(^2[3-7]\d{0,2}|^22[2-9]\d|^5[1-5]\d{0,2})\d{0,12}/,
            cardType:'mastercard'
        },
        {
            mask:'0000 0000 0000 0000',
            cardType:'default'
        }
    ],
    dispatch: function (appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g,'');
    }
}
const numberChecked = IMask(ccNumber,numberPattern)

const expiration = window.document.querySelector('#exp')
const expPattern = {
    mask:'MM{/}YY',
    blocks:{
        YY:{
            mask: IMask.MaskedRange,
            from:String(new Date().getFullYear()).slice(2),
            to:String(new Date().getFullYear()+10).slice(2),
        },
        MM:{
            mask: IMask.MaskedRange,
            from:1,
            to:12,
        }
    }
}
const expMasked= IMask(expiration,expPattern)

