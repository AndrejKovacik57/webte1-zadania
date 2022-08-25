const template = document.createElement('template')
template.innerHTML=`
<style>
    .container{
    background-color: azure;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    }
    .checkboxy{
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  
    font-size: 25px;

    
    }
    .vyber{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    .vyber label{
        padding: 20px;
        float: left;
        font-size: 25px;
        font-weight: bold;
        width: 5em;
    
    }
    input[type=checkbox] {
        transform: scale(1.5);
    }
    
        
    .amplituda{
    width: 80%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    position: relative;
    }
   .amplituda input{
    width: 100%;
    margin-bottom: 20px;
   }
   
    #sliderval{
    font-size: 18px;
    width: 25px;
    font-weight: bold;
    color: white;
    pointer-events: none;
    cursor: not-allowed;
    background-color: blue;
    text-align: center;
    vertical-align: middle;
    position : absolute;
    
    }

    #numInput{
    font-size: 18px;
    }
</style>

<div class="container">
    <div class="checkboxy">
        <div class="vyber"">
            <label for="slid">Slider</label>
            <input type="checkbox" id="slid" value="Slider" checked>
        </div>
        <div class="vyber">
            <label for="inpbox">Input box</label>
            <input type="checkbox" id="inpbox" value="Input box" checked>
        </div>   
    </div>
    <div class="amplituda">
        <div id="sliderval" class="slidercomp" >1</div>
        <input type="range" id="slider" class="aplituda,slidercomp" min="1" max="20" value="1" >
        <input type="number" id="numInput" class="aplituda" min="1" max="20" value="1">
    </div>
</div>

`

class MyInput extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        const slidercheck = this.shadowRoot.getElementById("slid")
        const numinpcheck = this.shadowRoot.getElementById("inpbox")
        const slider = this.shadowRoot.getElementById("slider")
        const numin = this.shadowRoot.getElementById("numInput")
        const sliderval = this.shadowRoot.getElementById("sliderval")
        sliderval.style.top = slider.value+"%"
        setDiv(slider, sliderval)
        slidercheck.addEventListener("change", (event)=> {
            if (slidercheck.checked){
                slider.style.visibility="visible";
                sliderval.style.visibility="visible";
            }else{
                slider.style.visibility="hidden";
                sliderval.style.visibility="hidden";
            }
        });

        numinpcheck.addEventListener("change", (event)=> {
            if (numinpcheck.checked){
                numin.style.visibility="visible";
            }else{
                numin.style.visibility="hidden";
            }
        });

        slider.addEventListener("input", (event)=> {
            numin.value = slider.value
            sliderval.innerHTML = slider.value
            setDiv(slider, sliderval)
            amp = Number(slider.value)
        });
        function setDiv(slider, div) {
            const val = Number( (slider.value - slider.min) * 100 / (slider.max - slider.min) )
            const pos = val * 0.15;
            div.style.left = `calc(${val}% - (${pos}px))`
        }
        numin.addEventListener("input", (event)=> {
            slider.value = numin.value
            sliderval.innerHTML = numin.value
            setDiv(slider, sliderval)
            amp = Number(numin.value)
        });
    }

}


window.customElements.define("my-input", MyInput)