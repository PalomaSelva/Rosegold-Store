const produtos =[

      {
            id:1,
            image1:"./assets/imgs/img1.jpeg",
            image2:"./assets/imgs/img2.jpg",
            title:"Produto 1",
            price: "R$70",

      },
      {
            id:2,
            image1:"./assets/imgs/img1.jpeg",
            image2:"./assets/imgs/img2.jpg",
            title:"Produto 2",
            price: "R$40",

      },
      {
            id:3,
            image1:"./assets/imgs/img1.jpeg",
            image2:"./assets/imgs/img2.jpg",           
            title:"Produto 3",
            price: "R$50",

      },
      

      

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