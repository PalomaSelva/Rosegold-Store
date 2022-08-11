import express, { request, response } from "express";
import * as ComBojoService from "./services/ComBojo-service.js";
import * as SemBojoService from "./services/SemBojo-service.js";
import * as NoiteService from "./services/Noite-service.js";
const app = express();
const PORT=process.env.PORT || 3000;
 
app.set('view engine', 'ejs')
app.set('views','./views')

app.listen(PORT, ()=>{
      console.log(`Servidor rodando em http://localhost:${PORT}`);
});
app.use(express.static('public'))

app.get('/com',(request,response)=> {
      const products = ComBojoService.getProdutos()
      response.render('pages/produtos', {products,title:"Conjunto com bojo",type:'com'})
})

app.get('/com/:productId', (request,response)=> {
      const productId = request.params.productId;
      const produto = ComBojoService.getProdutosByID(productId);
      response.render('pages/item', {produto})
})

app.get('/sem',(request,response)=> {
      const products = SemBojoService.getProdutos()
      response.render('pages/produtos', {products,title:"Conjunto sem bojo",type:'sem'})
})

app.get('/sem/:productId', (request,response)=> {
      const productId = request.params.productId;
      const produto = SemBojoService.getProdutosByID(productId);
      response.render('pages/item', {produto})
})

app.get('/noite',(request,response)=> {
      const products = NoiteService.getProdutos()
      response.render('pages/produtos', {products,title:"Noite",type:'noite'})
})

app.get('/noite/:productId', (request,response)=> {
      const productId = request.params.productId;
      const produto = NoiteService.getProdutosByID(productId);
      response.render('pages/item', {produto})
})

app.get('/carrinho',(request,response)=> {
      const products = NoiteService.getProdutos()
      response.render('pages/carrinho', {products,})
})
// Criar um service para cada tipo de produto => com,sem e noite
// Importar pra cá 
// Mudar o const products de cada => const com / const sem / const noite 
// Mudar o link do menu => com / sem / noite
// Criar um service SÓ pra alterar o título da página => Conjuntos com bojo / Conjuntos sem bojo / Noite

