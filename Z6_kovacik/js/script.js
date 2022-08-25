const ctx = document.getElementById('myChart');
var amp = 1
const data = {
    labels: [],
    datasets: [{
        label: 'Sinus',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0
    },{
        label: 'Cosinus',
        data: [],
        fill: false,
        borderColor: 'rgb(75,192,91)',
        tension: 0
    }]
};


const config = {
    type: 'line',
    data: data,
    options:{
        maintainAspectRatio:false,
        responsive:true,
        plugins: {
            zoom: {
                zoom: {
                    drag: {
                        enabled: false,
                        borderColor: 'rgba(250,79,79,0.3)',
                        backgroundColor: 'rgb(255,161,161)'
                    }
                }
            }
        }
    }

};
const chart = new Chart(ctx, config)

var evtSource = new EventSource("https://iolab.sk/evaluation/sse/sse.php")

const evt = (event) =>{
    const data = JSON.parse(event.data)
    chart.data.labels.push(data.x)
    chart.data.datasets[0].data.push(data.y1 * amp)
    chart.data.datasets[1].data.push(data.y2 * amp)
    chart.update()
}

evtSource.addEventListener("message", evt)

const checkboxes = document.querySelectorAll("input[type=checkbox]")
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("change", (event)=> {
        if (checkbox.checked) {
            if (checkbox.getAttribute("value")==="Sinus")
                chart.setDatasetVisibility(0, true);
            else
                chart.setDatasetVisibility(1, true);
        } else {
            if (checkbox.getAttribute("value")==="Sinus")
                chart.setDatasetVisibility(0, false);
            else
                chart.setDatasetVisibility(1, false);
        }
        chart.update()
    });
})
const endbutton = document.getElementById("koniec");
endbutton.addEventListener("click", function() {
    console.log("koniec")
    evtSource.removeEventListener("message", evt)
    chart.options.plugins.zoom.zoom.drag.enabled= true
    chart.update()
});
