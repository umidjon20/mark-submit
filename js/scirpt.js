let items = document.querySelectorAll('.item')
let inText = document.querySelector('.counter')
let pageDone = document.querySelector('.page_done')
let pageSubmit = document.querySelector('.page_submit')
let errEl  = document.querySelector('.error')
let back = document.querySelector('.back')
let count = 0 

function getCount(arr){
    arr.forEach((element,i) => {
        element.addEventListener('click',()=>{
            count = i + 1
            inText.innerText = count
            // console.log(inText)
            errEl.innerText = ''
            setColor(items,i)
        })
         
    });
    
}
function setColor(arr,ind){
    arr.forEach(item=>{
        item.style.backgroundColor = '#262E38'
    })
    for(let i = 0; i <= ind;i++){
        arr[i].style.backgroundColor = '#FC7614'
    }
}

console.log(pageDone);


getCount(items)

let btn = document.querySelector('button')
console.log(btn);
console.log(pageSubmit);

btn.addEventListener('click',()=>{
    
    if(inText.innerText != '0'){
        pageSubmit.style.display = 'none'
        pageDone.style.display = 'flex'
        back.style.display = 'block'
        inText.innerText = count
    }else{
        errEl.innerText = 'Choose one option!'
        
    }
    
})
back.addEventListener('click',()=>{
    pageSubmit.style.display = 'flex'
    pageDone.style.display = 'none'
    back.style.display = 'none'
    inText.innerText = '0'
    items.forEach(item=>{
        item.style.backgroundColor = '#262E38'
    })
})