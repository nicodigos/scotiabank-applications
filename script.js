const applications = [
  {
    name: "Data Analyst, Global Client Experience Centre ",
    link: "https://jobs.scotiabank.com/job/Toronto-Data-Analyst%2C-Global-Client-Experience-Centre-ON-M5H1N1/594798417/",
    location: "Toronto, ON, CA, M5H1H1 ",
    requisition: "233086",
  },
  {
    name: "Business Solution Expert  , Scotiabank",
    link: "https://jobs.scotiabank.com/job/Toronto-Business-Solution-Expert-ON-M5H1B6/594848117/",
    location: "Toronto, ON, CA, M5H1H1 ",
    requisition: "233430",
  },
  {
    name: "Business Analyst , Scotiabank",
    link: "https://jobs.scotiabank.com/job/Toronto-Business-Analyst-ON-M5H1H1/594838617/",
    location: "Toronto, ON, CA, M5H1H1 ",
    requisition: "233297",
  },
  {
    name: "  Senior Business Analyst, Scotiabank",
    link: "https://jobs.scotiabank.com/job/Toronto-Senior-Business-Analyst-ON-M5H-1H1/594901017/",
    location: "Toronto, ON, CA, M5H1H1 ",
    requisition: "233345",
  },
  {
    name: "  Business Analysis Specialist - Global Equities Technology, Scotiabank",
    link: "https://jobs.scotiabank.com/job/Toronto-Business-Analysis-Specialist-Global-Equities-Technology-ON-M5H1H1/594123617/",
    location: "Toronto, ON, CA, M5H1H1 ",
    requisition: "231388",
  },
  {
    name: " Analyst Programmer, Scotiabank",
    link: "https://jobs.scotiabank.com/job/Toronto-Analyst-Programmer%2C-Scotiabank-ON-M5V2T3/594193117/",
    location: "Toronto, ON, CA, M5V2T3 ",
    requisition: "227165",
  },
];

const tbody = document.getElementById("applications-list");

applications.forEach((app) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
      <td><a class="job-link" href="${app.link}" target="_blank">${app.name}</a></td>
      <td>${app.location}</td>
      <td>${app.requisition}</td>
    `;

  tbody.appendChild(tr);
});

// loading
