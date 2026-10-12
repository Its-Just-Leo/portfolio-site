function getMousePositionY(e){
    const rect = e.target.getBoundingClientRect();
    const yPosition = e.clientY - ((rect.top + rect.bottom)/2);
    return yPosition
}

function getMousePositionX(e){
    const rect = e.target.getBoundingClientRect();
    const xPosition = e.clientX - (rect.left + rect.right)/2; 
    return xPosition;
}

function setProperty(el, property, val){
    el.style.setProperty(property, (val + 'px'));
}

let header = document.getElementsByTagName('header');
header[0].addEventListener('mousemove', e => {
    setProperty(e.target, '--grad-position', getMousePositionX(e));
})

let skills = document.querySelectorAll('#skills li');
skills.forEach(element => {
    element.addEventListener('mousemove', e => {
        setProperty(e.target, '--position-x', getMousePositionX(e) );
        setProperty(e.target, '--position-y', getMousePositionY(e));
    })
});