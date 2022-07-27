const produtos =[

      {
            id:1,
            title:"Produto 1",
            price: "70R$",

      },
      {
            id:2,
            title:"Produto 2",
            price: "50R$",

      },
      {
            id:2,
            title:"Produto 2",
            price: "50R$",

      }

];

function getProdutos(){
      return produtos;
}

function getProdutosByID(articleId){
      return produtos.find(article=>{
            return (article.id === Number(articleId))
      })
}

export {getProdutos,getProdutosByID}