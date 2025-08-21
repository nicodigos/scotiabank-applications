const applications = [
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
