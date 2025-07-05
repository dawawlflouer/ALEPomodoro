// 📅 Select the DOM elements for calendar dates container, title, and navigation buttons
const dates = document.querySelector(".dates");
const header = document.querySelector(".title");
const nav = document.querySelectorAll("#prev, #next");

// 🗓️ Array of month names to display in header
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// 📌 Initialize current date information
let date = new Date();           // Today's full date
let month = date.getMonth();     // Current month (0-11)
let year = date.getFullYear();   // Current year (e.g. 2025)

/**
 * 🛠️ Function to generate and render the calendar for the current month and year
 */
function renderCalendar() {
  // 🔢 Get the weekday index of the 1st day of the month (0 = Sunday)
  const start = new Date(year, month, 1).getDay();

  // 🔚 Get the last date of the current month (e.g., 31, 30, 28)
  const endDate = new Date(year, month + 1, 0).getDate();

  // 🔚 Get the weekday index of the last date of the month
  const end = new Date(year, month, endDate).getDay();

  // 📆 Get the last date of the previous month
  const endDatePrev = new Date(year, month, 0).getDate();

  // 🧩 Placeholder for the HTML string of date elements
  let datesHtml = "";

  // ◀️ Fill in last few days of the previous month (gray out)
  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="old"><span>${endDatePrev - i + 1}</span></li>`;
  }

  // 🔁 Loop through current month's dates
  for (let i = 1; i <= endDate; i++) {
    // ✅ Highlight today's date
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className}><span>${i}</span></li>`;
  }

  // ▶️ Fill in the beginning of the next month (gray out)
  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="old"><span>${i - end + 1}</span></li>`;
  }

  // 🖋️ Inject the generated calendar HTML and header text
  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

/**
 * ⏮️⏭️ Add click event listeners to the Previous and Next buttons
 */
nav.forEach(nav => {
  nav.addEventListener("click", e => {
    const btnId = e.target.id; // Get the ID of the clicked button

    // ⬅️ If "prev" button clicked and current month is January
    if (btnId === 'prev' && month === 0) {
      year--;       // Go to previous year
      month = 11;   // Set month to December
    }
    // ➡️ If "next" button clicked and current month is December
    else if (btnId === 'next' && month === 11) {
      year++;       // Go to next year
      month = 0;    // Set month to January
    }
    // 🔁 In all other cases, simply increase or decrease the month
    else {
      month = (btnId === 'next') ? month + 1 : month - 1;
    }

    // 🧠 Update the `date` object and re-render calendar
    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

// 🚀 Initial calendar rendering on page load
renderCalendar();
