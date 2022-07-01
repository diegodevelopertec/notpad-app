
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

let listNotes:data[]=[
    /*
    {id:1,title:'Aprenda HTML E CSS ',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:2,title:'Aprenda Javascript e Typescript',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:3,title:'Aprenda React',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:4,title:'Aprenda Node e Express',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:5,title:'Aprenda MYSQL e Mongo',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:5,title:'Aprenda React Native',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:1,title:'Aprenda PHP ',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:2,title:'Aprenda Ruby on Rails',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:3,title:'sei lá 3',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:4,title:'sei lá 4',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:5,title:'sei lá 5',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()},
    {id:5,title:'sei lá 5',content:'alguma nota qualquer',dateNote:d.toLocaleDateString()}
    */
]


 /*
      let displayAnnotations=()=>{
        
        listNotes.map((item,index)=>{
    containerMainNotes.innerHTML+=` <div data-id=${item.id} class="card-model">
            <div class="card-info">
                     <div class="info-title">${item.title }</div>
                     <div class="info-dataNote">${item.dateNote }</div>
                
            </div>
            <div class="cx-content">
                <textarea name="" id="card-note" class="note-no-edit"  cols="30" rows="10">${item.content}</textarea>
             </div>
            
            </div>
            
            `
             })


        }
           
    
      */
    


function setListNote(){
    
    for(let i:number=0;i<listNotes.length;i++){
        listNotes.map((item,index)=>{
            containerMainNotes.innerHTML+=` <div data-id=${item.id} class="card-model">
                    <div class="card-info">
                             <div class="info-title">${item.title }</div>
                             <div class="info-dataNote">${item.dateNote }</div>
                        
                    </div>
                    <div class="cx-content">
                        <textarea name="" id="card-note" class="note-no-edit"  cols="30" rows="10">${item.content}</textarea>
                     </div>
                    
                    </div>
                    
                    `
                     })
                     break
    }
}

setListNote()




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

               
                console.log(listNotes);
                titleInput.value='' 
                contentInput.value= ''

                setListNote()

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




    






   