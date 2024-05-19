async function get_data() {
  try {
    const button = document.getElementById("generate_rand_data");
    button.disabled = true;
    let promise_data = await fetch(
      "https://random-data-api.com/api/v3/projects/e17498bd-2c84-49e8-9e31-f48c7d21dd6c?api_key=W6y_BFI6mHjWbJhKU-TLIA"
    );

    let json_data = await promise_data.json();
    console.log(json_data);

    const cardContainer = document.getElementById("cardContainer");

    const cardHtml = `
        <div class="col-md-4" style="margin-top:15px">
          <div class="card bg-dark">
            <div class="card-body">
              <h5 class="card-title" style="color:white">${json_data.first_name} ${json_data.last_name}</h5>
              <p class="card-text" style="color:white">Address:<br/>${json_data.building_number},${json_data.street_name}<br/>
              ${json_data.neighborhood},${json_data.city}<br/>
              ${json_data.country},${json_data.country_code}<br/>
              Job Title:<br/>${json_data.job_title}<br/>
              Tech Skill:<br/>${json_data.tech_skill}</p>
              
            </div>
          </div>
        </div>
      `;
    // Create a temporary div to hold the card HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cardHtml.trim();
    // Append the first child (the card) to the card container
    cardContainer.appendChild(tempDiv.firstChild);
    window.alert("Fetching data from Random Data API");
    button.disabled = false;
  } catch {
    
    console.log("Inside catch block");
  }
}
