/* ==========================================
   SEARCH
========================================== */

function searchSite(){

let input =
document.getElementById("searchInput")
.value.toLowerCase();

let sections =
document.querySelectorAll(".searchable");

sections.forEach(function(section){

let text =
section.innerText.toLowerCase();

if(text.includes(input)){

section.style.display="block";

}else{

section.style.display="none";

}

});

}

/* ==========================================
   BUTTONS
========================================== */

document.getElementById("exploreBtn").addEventListener("click", function () {

document.getElementById("dashboard-section").scrollIntoView({

behavior: "smooth",

block: "start"

});

});
    
/* ==========================================
   CHART.JS
========================================== */

/* ==========================================
   INFLATION CHART
========================================== */

function createInflationChart(){

    const canvas =
        document.getElementById("inflationChart");

    if(!canvas) return;

    /* Prevent duplicate chart */

    if(Chart.getChart(canvas)){
        Chart.getChart(canvas).destroy();
    }

    new Chart(
        canvas,
        {
            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets: [

                    {
                        label: "Inflation Rate (%)",

                        data: [
                            2.9,
                            2.4,
                            2.1,
                            3.1,
                            4.1,
                            4.4,
                            4.3
                        ],

                        borderColor: "#0077cc",

                        backgroundColor:
                            "rgba(0,119,204,0.2)",

                        borderWidth: 3,

                        fill: true,

                        tension: 0.4,

                        pointRadius: 4,

                        pointHoverRadius: 7
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: true

                    }

                },

                scales: {

                    y: {

                        beginAtZero: false,

                        title: {

                            display: true,

                            text: "Inflation Rate (%)"

                        }

                    },

                    x: {

                        title: {

                            display: true,

                            text: "Month"

                        }

                    }

                }

            }

        }
    );
}


/* ==========================================
   USD / NAD EXCHANGE RATE CHART
========================================== */

function createTradeChart(){

    const canvas =
        document.getElementById("tradeChart");

    if(!canvas) return;

    /* Prevent duplicate chart */

    if(Chart.getChart(canvas)){
        Chart.getChart(canvas).destroy();
    }

    new Chart(
        canvas,
        {
            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets: [

                    {
                        label: "USD/NAD",

                        data: [
                            16.00,
                            15.69,
                            16.41,
                            16.57,
                            16.47,
                            16.36,
                            16.83
                        ],

                        borderColor: "#009966",

                        backgroundColor:
                            "rgba(0,153,102,0.2)",

                        borderWidth: 3,

                        fill: true,

                        tension: 0.4,

                        pointRadius: 4,

                        pointHoverRadius: 7
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: true

                    }

                },

                scales: {

                    y: {

                        beginAtZero: false,

                        title: {

                            display: true,

                            text: "NAD per USD"

                        }

                    },

                    x: {

                        title: {

                            display: true,

                            text: "Month"

                        }

                    }

                }

            }

        }
    );
}


/* ==========================================
   INITIALISE CHARTS
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        createInflationChart();

        createTradeChart();

    }
);

/* ==========================================
   DASHBOARD NAVIGATION
========================================== */

function showCostDashboard(){

document.getElementById(
"inflationDashboard"
).style.display="none";

document.getElementById(
"housingDashboard"
).style.display="none";

document.getElementById(
"employmentDashboard"
).style.display="none";

document.getElementById(
"tradeDashboard"
).style.display="none";

document.getElementById(
"regionalDashboard"
).style.display="none";

document.getElementById(
"costDashboard"
).style.display="block";

}

function showHousingDashboard(){

document.getElementById(
"inflationDashboard"
).style.display="none";

document.getElementById(
"costDashboard"
).style.display="none";

document.getElementById(
"employmentDashboard"
).style.display="none";

document.getElementById(
"regionalDashboard"
).style.display="none";
    
document.getElementById(
"housingDashboard"
).style.display="block";

document.getElementById(
"tradeDashboard"
).style.display="none";
    
}

function showEmploymentDashboard(){

document.getElementById(
"inflationDashboard"
).style.display="none";

document.getElementById(
"costDashboard"
).style.display="none";

document.getElementById(
"housingDashboard"
).style.display="none";

document.getElementById(
"tradeDashboard"
).style.display="none";

document.getElementById(
"regionalDashboard"
).style.display="none";
    
document.getElementById(
"employmentDashboard"
).style.display="block";

}

function showTradeDashboard(){

    document.getElementById(
        "inflationDashboard"
    ).style.display="none";

    document.getElementById(
        "costDashboard"
    ).style.display="none";

    document.getElementById(
        "housingDashboard"
    ).style.display="none";

    document.getElementById(
        "employmentDashboard"
    ).style.display="none";

    document.getElementById(
        "regionalDashboard"
    ).style.display="none";

    document.getElementById(
        "tradeDashboard"
    ).style.display="block";

    createTradeChart();

}

function showRegionalDashboard(){

document.getElementById(
"inflationDashboard"
).style.display="none";

document.getElementById(
"costDashboard"
).style.display="none";

document.getElementById(
"housingDashboard"
).style.display="none";

document.getElementById(
"employmentDashboard"
).style.display="none";

document.getElementById(
"tradeDashboard"
).style.display="none";

document.getElementById(
"regionalDashboard"
).style.display="block";

}
    
function showInflationDashboard(){

    document.getElementById(
        "inflationDashboard"
    ).style.display="block";

    document.getElementById(
        "costDashboard"
    ).style.display="none";

    document.getElementById(
        "housingDashboard"
    ).style.display="none";

    document.getElementById(
        "employmentDashboard"
    ).style.display="none";

    document.getElementById(
        "tradeDashboard"
    ).style.display="none";

    document.getElementById(
        "regionalDashboard"
    ).style.display="none";

    createInflationChart();

}

/* ==========================================
INTERACTIVE NAMIBIA MAP
========================================== */

const regionsData = {

khomas:{
name:"Khomas",
capital:"Windhoek",
population:"494,605",
employment:"High",
development:"High"
},

erongo:{
name:"Erongo",
capital:"Swakopmund",
population:"204,000",
employment:"Medium",
development:"High"
},

oshana:{
name:"Oshana",
capital:"Oshakati",
population:"242,000",
employment:"Medium",
development:"Medium"
},

omusati:{
name:"Omusati",
capital:"Outapi",
population:"248,000",
employment:"Medium",
development:"Medium"
},

ohangwena:{
name:"Ohangwena",
capital:"Eenhana",
population:"340,000",
employment:"Medium",
development:"Medium"
},

oshikoto:{
name:"Oshikoto",
capital:"Omuthiya",
population:"220,000",
employment:"Medium",
development:"Medium"
},

kunene:{
name:"Kunene",
capital:"Opuwo",
population:"120,000",
employment:"Low",
development:"Medium"
},

otjozondjupa:{
name:"Otjozondjupa",
capital:"Otjiwarongo",
population:"180,000",
employment:"Medium",
development:"Medium"
},

omaheke:{
name:"Omaheke",
capital:"Gobabis",
population:"80,000",
employment:"Low",
development:"Medium"
},

hardap:{
name:"Hardap",
capital:"Mariental",
population:"90,000",
employment:"Low",
development:"Medium"
},

karas:{
name:"//Kharas",
capital:"Keetmanshoop",
population:"80,000",
employment:"Low",
development:"Medium"
},

kavangoEast:{
name:"Kavango East",
capital:"Rundu",
population:"118,000",
employment:"Low",
development:"Medium"
},

kavangoWest:{
name:"Kavango West",
capital:"Nkurenkuru",
population:"100,000",
employment:"Low",
development:"Low"
},

zambezi:{
name:"Zambezi",
capital:"Katima Mulilo",
population:"100,000",
employment:"Low",
development:"Medium"
}

};

document.querySelectorAll('.region').forEach(region=>{

region.addEventListener('click',function(){

// Remove active class from all regions

document.querySelectorAll('.region')
.forEach(r=>r.classList.remove('active'));

// Add active class to clicked region

this.classList.add('active');

// Get region data

const data = regionsData[this.id];

// Update info panel

document.getElementById('regionName')
.textContent = data.name;

document.getElementById('regionCapital')
.textContent = data.capital;

document.getElementById('regionPopulation')
.textContent = data.population;

document.getElementById('regionEmployment')
.textContent = data.employment;

document.getElementById('regionDevelopment')
.textContent = data.development;

});

});
