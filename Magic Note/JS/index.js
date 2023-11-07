showNotes();

let addBtn = document.getElementById('addbtn');

// add a function when anyone click in the addbtn button
addBtn.addEventListener('click',function(e){
    //target text area
    let addText = document.getElementById('addtxt');
    let addTitle = document.getElementById('addtitle');
    
    //get value from local storage
    let noteTxt = localStorage.getItem('notes');
    if(noteTxt==null){
        noteObj = [];
    }else{
        noteObj = JSON.parse(noteTxt);
    }
    let myObj = {
        title: addTitle.value,
        text: addText.value
    }
    //push tha value of text area in noteObj
    noteObj.push(myObj);

    //update localstorage

    localStorage.setItem('notes',JSON.stringify(noteObj));

    addText.value = "";
    addTitle.value = "";
    showNotes();
})
//function for show notes from local storage

function showNotes(){
    //get value from local storage
    let noteTxt = localStorage.getItem('notes');
    if(noteTxt == null){
        noteObj = [];
    }else{
        noteObj = JSON.parse(noteTxt);
    }
    let html = '';
    noteObj.forEach(function (element, index){
        html+= `<div class="noteCard card m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${index+1} : ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button onclick="deleteNote(this.id)" id="delBtn" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`
    });
    //target notearea
    let noteArea = document.getElementById('notes');
    
    if(noteObj.length != 0){
        noteArea.innerHTML = html;
    }else{
        noteArea.innerHTML = `You have No Note. Write Some Note And Add It From Add Note Button`;
    }
}

//function for delete elements

function deleteNote(index){
    let noteTxt = localStorage.getItem('notes');

    if(noteTxt == null){
        noteObj = [];
    }else{
        noteObj = JSON.parse(noteTxt);
    }

    noteObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteObj));

    showNotes();
}

//function for search box

let search = document.getElementById("searchBox");

let noteCards = document.getElementsByClassName('noteCard');

search.addEventListener('input',function(){
    let inputVal = search.value;

     Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
     })
})