import express, { request, response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views','./views')

app.use(express.static('public'))

app.listen(PORT, ()=>{
      console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/com',(request,response)=> {
      response.render('pages/com-bojo')
})

