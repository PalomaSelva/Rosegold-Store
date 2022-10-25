function validacaoEmail(field){
    usuario=field.value.substring(0,field.value.indexOf('@')); //COmeça na string nº 0 e termina na string "@"
    dominio = field.value.substring(field.value.indexOf('@')+1, field.value.length) //Começa na string após o "@" e termina na última string, por isso o length (QUANTIDADE)
    const msgEmail = window.document.querySelector('.msgemail')
    
    if(
        (usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1) //O último '.' (PONTO) tem que ser posicionado antes do último caractere do domínio
    )
    {
        msgEmail.innerHTML=' '
    } else {
        msgEmail.innerHTML= 'E-mail inválido'
    }
}
