let sortable_options
let sortable_answer
let next_level = false
const sort_odpoved = document.querySelector(".sortable-odpoved")
const sort_moznosti = document.querySelector(".sortable-moznosti")
let score_html = document.querySelector("#score")
let next_button = document.getElementById("dalsi-level")
const back = document.querySelector("#back")
let levels = JSON.parse(localStorage.getItem("levels"))
let level_index = Number(localStorage.getItem("level_index"))
let score = Number(localStorage.getItem("score"))
let answer = ""

gameInitalization(levels, level_index, score)
function gameInitalization(levels, level_index, score){
    if(levels == null){
        getRandomLevels()
    }
    else {
        make_level(levels, level_index, score)
    }
}

function getRandomLevels() {
    levels = []
    score = 0
    level_index = 0
    localStorage.setItem("score", String(score))
    localStorage.setItem("level_index", String(level_index))
    fetch("levels.json")
        .then(res => res.json())
        .then(data => {
            //Fisher–Yates shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
            for (let i = data.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));

                let tmp = data[i];
                data[i] = data[j];
                data[j] = tmp;
            }
            data.forEach((level) => {
                let leveltmp = {
                    "level_name": level.level_name,
                    "pokemoni": level.pokemoni
                }

                levels.push(leveltmp)

            })

            make_level(levels, level_index, score)
        })

}

function make_level(levels, level_index, score){
    localStorage.setItem("levels", JSON.stringify(levels))
    localStorage.setItem("level_index", String(level_index))
    localStorage.setItem("score", String(score))
    answer = levels[level_index].pokemoni[Math.floor(Math.random() * (levels[level_index].pokemoni.length))].meno
    next_button.className = ""
    next_button.disabled = true
    let stred_html = document.querySelector("#moznosti")
    let najdi_pokemona_nadpis_html = document.querySelector("#nazov-pokemona")
    let najdi_pokemona_frame_html = document.querySelector("#odpoved")
    let img_placeholder = document.createElement("img")
    let aktualny_level_html = document.querySelector("#aktualny-level")
    aktualny_level_html.innerHTML = "Level " + (level_index + 1) + "/" + levels.length
    stred_html.innerHTML = ""
    score_html.innerHTML = "Score: " + score
    img_placeholder.src = "./images/placeholder.png"
    img_placeholder.setAttribute("alt", 'placeholder',)
    img_placeholder.setAttribute("id", 'placeholder')
    najdi_pokemona_frame_html.appendChild(img_placeholder)

    najdi_pokemona_nadpis_html.innerHTML = "Nájdi "+answer

    levels[level_index].pokemoni.forEach((pokemon) => {
        let img = document.createElement("img")
        img.src = ""+pokemon.pokemon_obrazok_src
        img.setAttribute("alt", pokemon.meno)

        let frame = document.createElement("div")
        frame.className = "ramec sortable"
        frame.appendChild(img)
        stred_html.appendChild(frame)
        addListeners(frame)

    })
    addListeners(najdi_pokemona_frame_html)

    //https://sortablejs.github.io/Sortable/#sorting-disabled
    sortable_options = new Sortable(sort_moznosti, {
        swap: true,
        group: {
            name: 'shared',
            put: false // Do not allow items to be put into this list
        },
        animation: 50,
        sort: false // To disable sorting: set sort to false

    });

    sortable_answer = new Sortable(sort_odpoved, {
        swap: true,
        group: 'shared',
        animation: 50,
        sort: false
    });
}

function addListeners(element){
    element.addEventListener("drop", () =>{
        let answer_img = document.querySelector(".sortable-odpoved").querySelector(".ramec").querySelector("img")
        answer_img.style.backgroundColor = "white"
    })
    element.addEventListener("touchend", () =>{
        let answer_img = document.querySelector(".sortable-odpoved").querySelector(".ramec").querySelector("img")
        answer_img.style.backgroundColor = "white"
    })
}

let submit_button = document.getElementById("odovzdaj")
submit_button.addEventListener("click", () => {
    const sort_odpoved = document.querySelector(".sortable-odpoved").querySelector(".ramec").querySelector("img")
    if(answer == sort_odpoved.alt){
        if(!next_level){
            sort_odpoved.style.backgroundColor = "green"
            score += 50
            sortable_options.destroy()
            sortable_answer.destroy()
            next_level = true
            next_button.className = "active"
            next_button.disabled = false
        }
    }else {
        sort_odpoved.style.backgroundColor = "red"
        score -= 25
    }
    score_html.innerHTML = "Tvoje score: " + score
})

next_button.addEventListener("click", () => {
    if(next_level && level_index+1 < levels.length){
        let aaa = document.querySelector(".sortable-odpoved")
        aaa.innerHTML = ""
        let ramec = document.createElement("div")
        ramec.className = "ramec"
        ramec.id = "odpoved"
        aaa.appendChild(ramec)
        level_index += 1
        next_level = false
        make_level(levels, level_index, score)
    }
    else{
        let aaa = document.querySelector(".sortable-odpoved")
        let ramec = document.createElement("div")
        let fina_score_html = document.querySelector("#final-score")
        aaa.innerHTML = ""
        ramec.className = "ramec"
        ramec.id = "odpoved"
        aaa.appendChild(ramec)
        level_index = 0
        next_level = false
        fina_score_html.innerHTML = "Finálne score: " + score
        back.style.display = "inline-flex"
        getRandomLevels()

    }

})
let closebtn = document.getElementById("close")
closebtn.addEventListener("click", () => {
    back.style.display = "none"
})


