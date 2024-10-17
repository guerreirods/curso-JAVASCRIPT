function adcionar(){
    var itemtext = document.getElementById('itemtext').value.trim() 
    // o .trim tira os espaços antes e depois da string

    if(itemtext ===''){
        return
    //se não estiver escrito nada, nada acontece.
    }

    var list = document.getElementById('list')

    var itemdiv = document.createElement('div')
    itemdiv.id = 'item'

    var itemspan = document.createElement('span')
    itemspan.textContent = itemtext

    var removebtn = document.createElement('button')
    removebtn.textContent = 'X'
    removebtn.id = 'removebtn'
    removebtn.onclick = function excluir(){
        list.removeChild (itemdiv)
    }

    itemdiv.appendChild(itemspan)
    itemdiv.appendChild(removebtn)
    
    list.appendChild(itemdiv)

    document.getElementById('itemtext').value=''
}

document.getElementById('itemtext').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){ 
        event.preventDefault()
        adcionar()
    }
    // quando apertar o enter chama a função adcionar
}) 