// async function load_readings() {
//     let today = new Date();
//     let apiURL = `https://universalis.app/api/daily-readings?${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}/`;

//     try {
//         let response = await fetch(apiURL);
//         if (response.ok) {
//             let data = await response.json();
//             let abbr_readings = data.abbreviated_reading_indices.map(
//                 (index) => data.readings[index]
//             );

//             document.querySelector("#readings").innerHTML = `
//                 <h2>${today.toDateString()}</h2>
//                 <h3>${data.summary_title}</h3>
//                 <h2>Scripture Readings</h2>
//                 ${abbr_readings
//                     .map(
//                         (reading) => `
//                     <h3>${reading.display}</h3>
//                     <p>${reading.passage.map((p) => p.content).join(" ")}</p>
//                 `
//                     )
//                     .join("")}
//                 <h2>Commemorations</h2>
//                 ${data.stories
//                     .map(
//                         (story) => `
//                     <h3>${story.title}</h3>
//                     ${story.story}
//                 `
//                     )
//                     .join("")}
//             `;
//         } else {
//             console.error("Failed to fetch readings: ", response.status);
//         }
//     } catch (error) {
//         console.error("Error fetching readings: ", error);
//     }
// }

async function load_readings() {
    const proxy = "https://api.allorigins.win/get?url=";
    const targetURL = encodeURIComponent("https://bible.usccb.org/daily-bible-reading");

    try {
        const response = await fetch(`${proxy}${targetURL}`);
        const data = await response.json();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Extract date, title, and lectionary
        const date = doc.querySelector("ul.pager li.current time") ?.textContent.trim() || "";
        const title = doc.querySelector(".wr-block.b-lectionary h2") ?.textContent.trim() || "";
        const lectionary = doc.querySelector(".wr-block.b-lectionary p") ?.textContent.trim() || "";

        // Extract all readings
        const readingBlocks = doc.querySelectorAll(".wr-block.b-verse");
        let readingsHtml = "";
        readingBlocks.forEach(block => {
            const readingType = block.querySelector(".content-header h3.name") ?.textContent.trim() || "";
            const reference = block.querySelector(".content-header .address a") ?.outerHTML || "";
            const content = block.querySelector(".content-body") ?.innerHTML || "";
            readingsHtml += `
                <h3>${readingType} ${reference}</h3>
                <div>${content}</div>
                <hr>
            `;
        });

        // Final HTML output (uses your structure)
        document.querySelector("#readings").innerHTML = `
            <h2>${date}</h2>
            <h3>${title}</h3>
            <p>${lectionary}</p>
            <h2>Scripture Readings</h2>
            ${readingsHtml}
        `;
    } catch (error) {
        document.querySelector("#readings").innerHTML = "Failed to load readings. Please refresh the page.";
        console.error("Error fetching readings:", error);
    }
}

document.addEventListener("DOMContentLoaded", load_readings);
// Function to fetch a random Bible quote and update the specified element
async function fetchRandomBibleQuote(quoteId) {
    try {
        const response = await fetch("https://labs.bible.org/api/?passage=random&type=json");
        if (!response.ok) throw new Error(`Error fetching quote for ${quoteId}`);
        const data = await response.json();

        // Update the content of the specific element
        document.getElementById(quoteId).innerHTML = `<strong>${data[0].bookname} ${data[0].chapter}:${data[0].verse}</strong> - ${data[0].text}`;
    } catch (error) {
        console.error(`Failed to load quote for ${quoteId}:`, error);
        document.getElementById(quoteId).innerHTML = "Failed to load quote.";
    }
}

// Function to load all Bible quotes with a delay
function loadAllQuotesWithDelay() {
    // Set delay between each fetch (2 seconds)
    setTimeout(() => {
        fetchRandomBibleQuote("newQuote0");
    }, 0);  // No delay for the first quote

    setTimeout(() => {
        fetchRandomBibleQuote("newQuote1");
    }, 2000); // Delay of 2 seconds for the second quote

    setTimeout(() => {
        fetchRandomBibleQuote("newQuote2");
    }, 4000); // Delay of 4 seconds for the third quote

    setTimeout(() => {
        fetchRandomBibleQuote("newQuote3");
    }, 6000); // Delay of 6 seconds for the fourth quote (if present)
}

// Event listener to load quotes with delay on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    loadAllQuotesWithDelay();

    // Reload quotes on button click with delay
    document.querySelectorAll(".owl-prev, .owl-next").forEach(button => {
        button.addEventListener("click", loadAllQuotesWithDelay);
    });
});

