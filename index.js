import express, { request, response } from "express";
import * as ComBojoService from "./services/ComBojo-service.js";
import * as SemBojoService from "./services/SemBojo-service.js";
import * as NoiteService from "./services/Noite-service.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views','./views')

app.use(express.static('public'))

app.listen(PORT, ()=>{
      console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/com',(request,response)=> {
      const products = ComBojoService.getProdutos()
      response.render('pages/com-bojo', {products,title:"Conjunto com bojo"})
})

app.get('/sem',(request,response)=> {
      const products = SemBojoService.getProdutos()
      response.render('pages/com-bojo', {products,title:"Conjunto sem bojo"})
})

app.get('/noite',(request,response)=> {
      const products = NoiteService.getProdutos()
      response.render('pages/com-bojo', {products,title:"Noite"})
})

// Criar um service para cada tipo de produto => com,sem e noite
// Importar pra cá 
// Mudar o const products de cada => const com / const sem / const noite 
// Mudar o link do menu => com / sem / noite
// Criar um service SÓ pra alterar o título da página => Conjuntos com bojo / Conjuntos sem bojo / Noite

