var phone = document.querySelector('#phone');
console.log(phone)
var phonePattern = {
  mask: '+{55}(81)00000-0000'
};
var mask = IMask(phone, phonePattern);

