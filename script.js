function addNewEfield() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("placeholder","Enter here")
    newNode.setAttribute("rows",3)

    let weObj = document.getElementById("we")
    let weAddButtonObj = document.getElementById("weAddButton")
    weObj.insertBefore(newNode,weAddButtonObj)
}

function addNewAqfield() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("placeholder","Enter here")
    newNode.setAttribute("rows",3)

    let aqObj = document.getElementById("aq")
    let aqAddButtonObj = document.getElementById("aqAddButton")
    aqObj.insertBefore(newNode,aqAddButtonObj)
}

// function for generating cv

function generateCV() {
    // console.log("cv generated")
    //name field 
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML  = nameField

    //Direct     
    document.getElementById('nameT2').innerHTML =  nameField;
    //conatct filed
    let contactField = document.getElementById('contactField').value
    document.getElementById('contactT').innerHTML = contactField
    //address Field
    let addressField = document.getElementById('addressField').value
    document.getElementById('addressT').innerHTML = addressField

    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value
    document.getElementById('linkedT').innerHTML = document.getElementById('LinkedField').value

    //Objective Field
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value

    // Workimg experience get data

    let wes = document.getElementsByClassName('weField')
    let str = "";
    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
        document.getElementById('weT').innerHTML = str;
    }
    // Academic Qualification
    let aqs = document.getElementsByClassName('aqField')
    let str1 = "";
    for(let e of aqs)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
        document.getElementById('aqT').innerHTML = str1;
    }

    //image reading code

    let file = document.getElementById('fileField').files[0];
    console.log(file)
    let reader = new FileReader();
    reader.readAsDataURL(file)
    console.log(reader.result)

    // set the image to template
    reader.onloadend = function()
    {
        document.getElementById('imgTemplate').src = reader.result
    }

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
}

function printCV(){
    window.print()
}