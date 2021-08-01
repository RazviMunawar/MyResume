let progress = document.querySelector(".progress");

window.onscroll = () => {
    let width = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
    progress.setAttribute("style","width:"+width+"%");
};

function renderProject(e){
    console.log()
}