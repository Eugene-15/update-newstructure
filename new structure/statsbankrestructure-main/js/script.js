// Extract the base URL and search form IDs into constants
const SEARCH_FORM_IDS = ["searchForm0", "searchForm1", "searchForm2", "searchForm3", "searchForm4", "searchForm5", "searchForm6"];
const BASE_URLS = {
  searchForm0: "https://statsbank.statsghana.gov.gh/pxweb/en/Search%20Bar",
  searchForm1: "https://statsbank.statsghana.gov.gh/pxweb/en/PHC%202021%20StatsBank",
  searchForm2: "https://statsbank.statsghana.gov.gh/pxweb/en/Macro%20Economic%20Indicators",
  searchForm3: "https://statsbank.statsghana.gov.gh/pxweb/en/PHC2010",
  searchForm4: "https://statsbank.statsghana.gov.gh/pxweb/en/Annual%20Household%20Income%20and%20Expenditure%20Survey%20(AHIES)",
  searchForm5: "https://statsbank.statsghana.gov.gh/pxweb/en/Ghana%20Census%20of%20Agriculture%20(GCA)",
  searchForm6: "https://statsbank.statsghana.gov.gh/pxweb/en/Trade",
};

// Define a single event listener function
function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Get the input ID and base URL based on the form ID
  const formId = event.target.id;
  const inputId = event.target.querySelector('input[type="text"]').id;
  const baseUrl = BASE_URLS[formId];

  // Get the search query, encode it, and construct the URL
  const searchQuery = document.getElementById(inputId).value.trim();
  const encodedQuery = encodeURIComponent(searchQuery);
  const url = `${baseUrl}/search/?searchquery=${encodedQuery}`;

  // Redirect to the search URL
  window.location.href = url;
}

// Add the event listener to each search form
SEARCH_FORM_IDS.forEach((formId) => {
  document.getElementById(formId).addEventListener("submit", handleSearchFormSubmit);
});


