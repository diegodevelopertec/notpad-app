
const el=(e:string)=>document.querySelector(e)


let btnOpenModal=el('.start-modal') as HTMLButtonElement   ///botao abrir Modal 
let btnCancelNote=el('#cancel-note') as HTMLButtonElement   //botao fechar Modal
let btnAddNote=el('#add-note') as HTMLButtonElement        //botao adicionar nova anotação
let containerModal=el('#container-modal') as HTMLDivElement  //container Modal
let containerMainNotes=el('.container-content') as HTMLElement   //container das anotações
let titulo:string
let conteudo:string
let divCard:ChildNode


                                                                   //Dados//


type data={
    id: number,
    title:string,
    content:string,
    dateNote:string
    
}


let d=new Date()

let listNotes:data[]=[]


 





let addNewNote=()=>{
    let titleInput=el('#cx-title') as HTMLInputElement
    let contentInput=el('#cx-anotacao') as HTMLInputElement
      if(titleInput.value !== '' && contentInput.value !== ''){
           titulo=titleInput.value
          conteudo=contentInput.value


                listNotes.push({
                    id:listNotes.length + 1,
                    title:titulo,
                    content:conteudo,
                    dateNote:d.toLocaleDateString()
                })
                 
                let newNote=document.createElement('span')
                newNote.innerHTML=`
                
                <div class="card-model">
                <div class="card-info">
                         <div class="info-title">${titleInput.value}</div>
                         <div class="info-dataNote">${d.toLocaleDateString()}</div>
                    
                </div>
                <div class="cx-content">
                    <textarea name="" id="card-note" class="note-no-edit"  cols="30" rows="10">${contentInput.value}</textarea>
                 </div>
                
            </div>
                
                
                `
                containerMainNotes.insertBefore(newNote,containerMainNotes.childNodes[0])
               
                console.log(listNotes);
                titleInput.value='' 
                contentInput.value= ''

                containerModal.style.display='none'
                containerMainNotes.style.opacity='1.0' 
               
                
                
    }else{
        alert('Os campos não estão preenchidos')
    }
}







let openModal=()=>{

        if(containerModal.style.display='none'){
            containerModal.style.display='flex'
            containerMainNotes.style.opacity='0.5'
        }

}
let closeModal=()=>{

    if(containerModal.style.display='flex'){
        containerModal.style.display='none'
        containerMainNotes.style.opacity='1.0'
    }



}


 btnCancelNote.addEventListener('click',closeModal)
btnOpenModal.addEventListener('click',openModal)
btnAddNote.addEventListener('click',addNewNote)




    






   