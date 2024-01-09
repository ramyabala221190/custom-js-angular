const title="Integrating Js in Angular";

function changeBgColor(element){
    $(element).addClass('highlight')
}

function checkIfDateIsValid(date){
    return moment(date).isValid()
}