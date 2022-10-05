let btns= document.querySelectorAll('.btn')


if(localStorage.getItem('basket')===null){
    localStorage.setItem('basket',JSON.stringify([]))
}


for(let btn of btns){
btn.onclick=function(e){
    e.preventDefault()
    let prId=e.target.parentElement.parentElement.id;
    let prName=e.target.parentElement.children[0].innerHTML
    let prPrice=e.target.previousElementSibling.innerHTML
    let prImage=e.target.parentElement.previousElementSibling.src

    let basket=JSON.parse(localStorage.getItem('basket'));

    
    // let existProd = basket.find(pr => pr.id === prId);


    // if(existProd == undefined){

    //     basket.push({
    //         Id: prId,
    //         Name: prName,
    //         Price: prPrice,
    //         Image: prImage,
    //         Count: 1
    //     })
    // }
    // else{
    //     existProd.Count+=1
    // }
    let existProd = basket.find(pr => pr.Id === prId);
    // console.log(existProd);

    if(existProd == undefined){
        basket.push({
            Id: prId,
            Name: prName,
            Price: prPrice,
            Image: prImage,
            Count: 1
        })
    }
    else{
        existProd.Count +=1 
    }

    localStorage.setItem('basket',JSON.stringify(basket))

CountProduct()

}
}



function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));

    document.getElementById('count').innerHTML=basket.length
}

CountProduct()