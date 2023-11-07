//add note to local storage

showNotes();

let addBtn = document.getElementById('addbtn');

//add a function when anyone click in add note button

addBtn.addEventListener("click", function (e) {
    /*target textarea */
    let addText = document.getElementById('addtext');

    /*get value from local storage*/
    let notestxt = localStorage.getItem('notes');

    if (notestxt == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notestxt);
    }

    //add value of textarea in noteObj
    noteObj.push(addText.value);

    //update local storage
    localStorage.setItem('notes', JSON.stringify(noteObj));

    addText.value = "";


    showNotes();

})

//function to show notes from local storage

function showNotes() {
    let noteTxt = localStorage.getItem('notes');

    if (noteTxt == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(noteTxt)
    }
    let html = "";


    noteObj.forEach(function (element, index) {
        html += `<div class="noteCard card m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button onclick="deleteNote(this.id)" id="delBtn" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`
    })
    let noteElm = document.getElementById('notes');

    if (noteObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `You have No Note. Write Some Note And Add It From Add Note Button`;
    }
}

//function that delete element

function deleteNote(index) {
  let notestxt = localStorage.getItem('notes');

    if (notestxt == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notestxt);
    }
    //update local storage


    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));

    showNotes(); 
}

//search box function

let search = document.getElementById('searchBox');

search.addEventListener('input',function(){
    let inputVal = search.value;

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName('p')[0].innerText;
        console.log(cardText)
        if(cardText.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    });
    console.log(inputVal);
});


