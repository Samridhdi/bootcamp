console.log("This is registration page");
const registrationForm =document.getElementById("registration-form");
console.log(registrationForm);
function getSelected(select){
    let selectedValues=[]
    for(optionIndex in select.options){
        if(select.options[optionIndex].selected){
            selectedValues.push(select.options[optionIndex].value);
        }
    }
    return selectedValues;
}

registrationForm.onsubmit=function(event){
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name=document.getElementById("name").value;
    let interest=getSelected(document.getElementById("interest"));
    let dob=document.getElementById("dob").value;
    let darkmode=document.getElementById("darkmode").checked;
    const data={
        name,
        interest,
        dob,
        darkmode,
    };
    console.log(data);
    localStorage.setItem("userInfo",JSON.stringify(data));
};