const back = document.querySelector("#back")
const bigger_picture = document.querySelector("#bigger_picture")
const biggerimg = document.createElement("img")
const titulok = document.querySelector("#titulok")
const popisokText = document.querySelector("#popisok")
const cisloObrazka = document.querySelector("#cisloObrazka")
const section= document.querySelector(".sortable")
const frame= document.querySelector(".frame")
const filter = document.querySelector("#filter")
const storedFilterValue = localStorage.getItem("filter")
var storedImgIndexes = localStorage.getItem("storedImgIndexes")
var draggedIndex
var destinationIndex
var imagesIndexes = storedImgIndexes ? storedImgIndexes.split(',').map(Number) : []
var images = []
filter.value = storedFilterValue

function createImages (filterString){
    section.innerHTML=""
    images = []
    var counter = 0;
    fetch("./images.json")
        .then(res => res.json())
        .then(data => {
            data.forEach((image) => {
                if(image.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1){
                    const img = document.createElement("img")
                    img.src = "./images/"+image.filename
                    img.setAttribute("id",''+counter)
                    img.setAttribute("alt", image.title)
                    img.setAttribute("longdesc", image.description)
                    images.push(img)

                    img.addEventListener("click",()=>{

                        back.style.display = "inline-flex"
                        bigger_picture.innerHTML = ""
                        titulok.innerHTML = ""
                        popisokText.innerHTML = ""
                        cisloObrazka.innerHTML = ""
                        biggerimg.src=img.getAttribute("src")
                        titulok.innerHTML = img.getAttribute("alt")
                        popisokText.innerHTML  = img.getAttribute("longdesc")
                        cisloObrazka.innerHTML = img.getAttribute("id")

                        bigger_picture.appendChild(biggerimg)
                    })


                    counter++
                }

            })

            loadImages()
        })

}
createImages(storedFilterValue === null ? "" : storedFilterValue)

const loadImages = () => {
    if(imagesIndexes.length === 0){
        for(var x=0 ; x < images.length; x++){
            imagesIndexes.push(x)
        }
    }
    for(var i=0 ; i < images.length; i++){
        const frame = document.createElement("div")

        frame.addEventListener("dragstart", event =>{
            draggedIndex = imagesIndexes.indexOf(Number(event.target.childNodes[0].id))
        })

        frame.addEventListener("drop", event =>{
            destinationIndex = imagesIndexes.indexOf(Number(event.target.id))
            var temp = imagesIndexes[destinationIndex]
            imagesIndexes[destinationIndex] = imagesIndexes[draggedIndex]
            imagesIndexes[draggedIndex] = temp
            localStorage.setItem("storedImgIndexes", imagesIndexes.join(','))
        })

        frame.setAttribute("class","frame")
        frame.appendChild(images[imagesIndexes[i]])
        section.appendChild(frame)
    }


}


filter.addEventListener("input", event =>{
    imagesIndexes = []
    localStorage.setItem("filter", event.target.value)
    createImages(event.target.value)

})
function indexfinder(list,index){
    for(var a=0; a< list.length; a++ ){
        if(list[a]===index)
            return a
    }
}
var right = document.getElementById("right")
right.addEventListener("click",() => {
    var currentId = Number(cisloObrazka.innerHTML)
    var rightId = indexfinder(imagesIndexes,currentId)+1
    if(rightId >= images.length){
        rightId = 0
    }
    bigger_picture.innerHTML = ""
    titulok.innerHTML = ""
    popisokText.innerHTML = ""
    cisloObrazka.innerHTML = ""
    console.log(rightId)
    biggerimg.src = images[imagesIndexes[rightId]].getAttribute("src")
    titulok.innerHTML = images[imagesIndexes[rightId]].getAttribute("alt")
    popisokText.innerHTML  = images[imagesIndexes[rightId]].getAttribute("longdesc")
    cisloObrazka.innerHTML = images[imagesIndexes[rightId]].getAttribute("id")
    bigger_picture.appendChild(biggerimg)
})

var left = document.getElementById("left")
left.addEventListener("click",() => {
    var currentId = Number(cisloObrazka.innerHTML)
    var leftId =  indexfinder(imagesIndexes,currentId)- 1
    if(leftId < 0){
        leftId = images.length - 1
    }
    bigger_picture.innerHTML = ""
    titulok.innerHTML = ""
    popisokText.innerHTML = ""
    cisloObrazka.innerHTML = ""
    biggerimg.src = images[imagesIndexes[leftId]].getAttribute("src")
    titulok.innerHTML = images[imagesIndexes[leftId]].getAttribute("alt")
    popisokText.innerHTML  = images[imagesIndexes[leftId]].getAttribute("longdesc")
    cisloObrazka.innerHTML = images[imagesIndexes[leftId]].getAttribute("id")
    bigger_picture.appendChild(biggerimg)
})
var auto = document.getElementById("auto")
auto.addEventListener("change",(event) => {
    myFunction()

})
function myFunction() {

   setInterval(function(){
       var check = (document.getElementById('auto').checked);
       console.log(check)
       if(!check){
           return
       }
        var currentId = Number(cisloObrazka.innerHTML)
        var rightId = indexfinder(imagesIndexes,currentId) + 1
        if(rightId >= images.length){
            rightId = 0
        }
        bigger_picture.innerHTML = ""
        titulok.innerHTML = ""
        popisokText.innerHTML = ""
        cisloObrazka.innerHTML = ""
        biggerimg.src = images[imagesIndexes[rightId]].getAttribute("src")
        titulok.innerHTML = images[imagesIndexes[rightId]].getAttribute("alt")
        popisokText.innerHTML  = images[imagesIndexes[rightId]].getAttribute("longdesc")
        cisloObrazka.innerHTML = images[imagesIndexes[rightId]].getAttribute("id")
        bigger_picture.appendChild(biggerimg)

    }, 2000);
}
var closebtn = document.getElementById("close")
closebtn.addEventListener("click", () => back.style.display = "none")



sort = new Sortable(section, {
    swap: true, // Enable swap plugin
    animation: 150
});


