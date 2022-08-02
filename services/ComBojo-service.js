const produtos =[

      {
            id:1,
            image1:"./assets/imgs/img2.jpg",
            image2:"./assets/imgs/img1.jpeg",
            title:"Produto 1",
            price: "R$70",

      },
      {
            id:2,
            image1:"./assets/imgs/img2.jpg",
            image2:"./assets/imgs/img1.jpeg",
            title:"Produto 2",
            price: "R$40",

      },
      {
            id:3,
            image1:"./assets/imgs/img2.jpg",
            image2:"./assets/imgs/img1.jpeg",            
            title:"Produto 3",
            price: "R$50",

      },
      

      

];

function getProdutos(){
      return produtos;
}

function getProdutosByID(productId){
      return produtos.find(product=>{
            return (product.id === Number(productId))
      })
}

export {getProdutos,getProdutosByID}