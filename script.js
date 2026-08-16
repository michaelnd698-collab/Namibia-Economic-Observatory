/* ==========================================
   SEARCH
========================================== */

function searchSite() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const searchText =
        input.value.toLowerCase();

    const sections =
        document.querySelectorAll(".searchable");

    sections.forEach(function(section) {

        const text =
            section.innerText.toLowerCase();

        section.style.display =
            text.includes(searchText)
                ? "block"
                : "none";

    });

}


/* ==========================================
   EXPLORE DATA BUTTON
========================================== */

document.addEventListener("DOMContentLoaded", function() {

    const exploreBtn =
        document.getElementById("exploreBtn");

    const dashboardSection =
        document.getElementById("dashboard-section");

    if (exploreBtn && dashboardSection) {

        exploreBtn.addEventListener("click", function(event) {

            event.preventDefault();

            dashboardSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }

});


/* ==========================================
   CHART.JS
========================================== */


/* ==========================================
   CHART VARIABLES
========================================== */

let inflationChart = null;
let tradeChart = null;


/* ==========================================
   INFLATION CHART
========================================== */

function createInflationChart() {

    const canvas =
        document.getElementById("inflationChart");

    if (!canvas) {
        console.warn("Inflation canvas not found.");
        return;
    }

    /* Destroy previous chart */

    if (inflationChart) {

        inflationChart.destroy();

        inflationChart = null;

    }

    inflationChart = new Chart(canvas, {

        type: "line",

        data: {

         labels: [
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug"
            ],

            datasets: [{

                label: "Inflation Rate (%)",

                data: [
                    2.9,
                    2.4,
                    2.1,
                    3.1,
                    4.1,
                    4.4,
                    4.4,
                    4.3
                ],

                borderColor: "#0077cc",

                backgroundColor:
                    "rgba(0,119,204,0.2)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 4,

                pointHoverRadius: 6

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration: 700

            },

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: false

                }

            }

        }

    });

}


/* ==========================================
   TRADE / USD NAD CHART
========================================== */

function createTradeChart() {

    const canvas =
        document.getElementById("tradeChart");

    if (!canvas) {
        console.warn("Trade canvas not found.");
        return;
    }

    /* Destroy previous chart */

    if (tradeChart) {

        tradeChart.destroy();

        tradeChart = null;

    }

    tradeChart = new Chart(canvas, {

        type: "line",

        data: {

          labels: [
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug"
            ],

            datasets: [{

               label: "USD/NAD",

               data: [
                   16.00,
                   15.69,
                   16.41,
                   16.57,
                   16.47,
                   16.36,
                   16.83,
                   16.22
                ],

                borderColor: "#009966",

                backgroundColor:
                    "rgba(0,153,102,0.2)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 4,

                pointHoverRadius: 6

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration: 700

            },

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: false

                }

            }

        }

    });

}


/* ==========================================
   HIDE ALL DASHBOARDS
========================================== */

function hideAllDashboards() {

    const dashboards = [

        "inflationDashboard",
        "costDashboard",
        "housingDashboard",
        "employmentDashboard",
        "tradeDashboard",
        "regionalDashboard"

    ];

    dashboards.forEach(function(id) {

        const dashboard =
            document.getElementById(id);

        if (dashboard) {

            dashboard.style.display = "none";

        }

    });

}


/* ==========================================
   INFLATION DASHBOARD
========================================== */

function showInflationDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("inflationDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

    /*
       Wait until the browser has rendered
       the visible dashboard before creating
       the chart.
    */

    requestAnimationFrame(function() {

        requestAnimationFrame(function() {

            createInflationChart();

        });

    });

}


/* ==========================================
   COST OF LIVING DASHBOARD
========================================== */

function showCostDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("costDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

}

/* ==========================================
   HOUSING DASHBOARD
========================================== */

function showHousingDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("housingDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

}


/* ==========================================
   EMPLOYMENT DASHBOARD
========================================== */

function showEmploymentDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("employmentDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

}


/* ==========================================
   TRADE DASHBOARD
========================================== */

function showTradeDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("tradeDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

    /*
       Create chart only after the
       dashboard becomes visible.
    */

    requestAnimationFrame(function() {

        requestAnimationFrame(function() {

            createTradeChart();

        });

    });

}


/* ==========================================
   REGIONAL DASHBOARD
========================================== */

function showRegionalDashboard() {

    hideAllDashboards();

    const dashboard =
        document.getElementById("regionalDashboard");

    if (!dashboard) return;

    dashboard.style.display = "block";

}


/* ==========================================
   REGIONAL DATA
========================================== */

const regionsData = {

    khomas: {

        name: "Khomas",
        capital: "Windhoek",
        population: "494,605",
        employment: "High",
        development: "High"

    },

    erongo: {

        name: "Erongo",
        capital: "Swakopmund",
        population: "204,000",
        employment: "Medium",
        development: "High"

    },

    oshana: {

        name: "Oshana",
        capital: "Oshakati",
        population: "242,000",
        employment: "Medium",
        development: "Medium"

    },

    omusati: {

        name: "Omusati",
        capital: "Outapi",
        population: "248,000",
        employment: "Medium",
        development: "Medium"

    },

    ohangwena: {

        name: "Ohangwena",
        capital: "Eenhana",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    oshikoto: {

        name: "Oshikoto",
        capital: "Tsumeb",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    kunene: {

        name: "Kunene",
        capital: "Opuwo",
        population: "Unknown",
        employment: "Low",
        development: "Medium"

    },

    otjozondjupa: {

        name: "Otjozondjupa",
        capital: "Otjiwarongo",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    omaheke: {

        name: "Omaheke",
        capital: "Gobabis",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    hardap: {

        name: "Hardap",
        capital: "Mariental",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    karas: {

        name: "//Kharas",
        capital: "Keetmanshoop",
        population: "Unknown",
        employment: "Medium",
        development: "Medium"

    },

    kavangoEast: {

        name: "Kavango East",
        capital: "Rundu",
        population: "118,000",
        employment: "Low",
        development: "Medium"

    },

    kavangoWest: {

        name: "Kavango West",
        capital: "Nkurenkuru",
        population: "Unknown",
        employment: "Low",
        development: "Medium"

    },

    zambezi: {

        name: "Zambezi",
        capital: "Katima Mulilo",
        population: "100,000",
        employment: "Low",
        development: "Medium"

    }

};


/* ==========================================
   SELECT REGION
========================================== */

function selectRegion(regionId) {

    const data =
        regionsData[regionId];

    if (!data) {

        console.warn(
            "No data found for region:",
            regionId
        );

        return;

    }

    const regionName =
        document.getElementById("regionName");

    const regionCapital =
        document.getElementById("regionCapital");

    const regionPopulation =
        document.getElementById("regionPopulation");

    const regionEmployment =
        document.getElementById("regionEmployment");

    const regionDevelopment =
        document.getElementById("regionDevelopment");


    if (regionName)
        regionName.textContent = data.name;

    if (regionCapital)
        regionCapital.textContent = data.capital;

    if (regionPopulation)
        regionPopulation.textContent = data.population;

    if (regionEmployment)
        regionEmployment.textContent = data.employment;

    if (regionDevelopment)
        regionDevelopment.textContent = data.development;


    /* Remove active state */

    document
        .querySelectorAll(".region")
        .forEach(function(region) {

            region.classList.remove("active");

        });


    /* Highlight selected region */

    const selectedRegion =
        document.getElementById(regionId);

    if (selectedRegion) {

        selectedRegion.classList.add("active");

    }

}

/* ==========================================
   INITIALISE EVERYTHING
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* ------------------------------
           MAP
        ------------------------------ */

        document
            .querySelectorAll(".region")
            .forEach(function(region) {

                region.addEventListener(
                    "click",
                    function() {

                        selectRegion(
                            this.id
                        );

                    }
                );

            });


        /* ------------------------------
           INITIAL DASHBOARD
        ------------------------------ */

        showInflationDashboard();

    }
);

function showBoardManagement(){

    document.getElementById("boardManagement").style.display = "block";

    document.getElementById("executiveManagement").style.display = "none";

}

function showExecutiveManagement(){

    document.getElementById("boardManagement").style.display = "none";

    document.getElementById("executiveManagement").style.display = "block";

}

function previousManagement(){

    showBoardManagement();

}
