let button = document.querySelector('#button');
let input = document.querySelector('#show-item');

function ShowInformationFromInput()
{
    alert(input.value);
}
button.addEventListener('click', ShowInformationFromInput);