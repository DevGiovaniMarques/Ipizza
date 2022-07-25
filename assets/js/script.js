let modalQt = 1;
const doc = (el)=>document.querySelector(el);
const docall = (el)=>document.querySelectorAll(el);

pizzaJson.map((items, index)=>{
    let pizzaItem = doc('.models .pizza-item').cloneNode(true);
    

    pizzaItem.setAttribute('data-key',index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = items.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${items.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = items.description;
    pizzaItem.querySelector('.pizza-item--img img').src = items.img;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        modalQt = 1;
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        doc('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        doc('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        doc('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`; 
        doc('.pizzaBig img').src = pizzaJson[key].img;
        doc('.pizzaInfo--size.selected').classList.remove('selected');
        docall('.pizzaInfo--size').forEach((size,sizeindex)=>{
            if(sizeindex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeindex];
        });

        doc('.pizzaInfo--qt').innerHTML = modalQt;

        doc('.pizzaWindowArea').style.opacity = 0;
        doc('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            doc('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    doc('.pizza-area').append(pizzaItem);
});