document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date-input");
    const calendar = document.getElementById("calendar");
    const calendarDates = document.getElementById("calendar-dates");
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");
    const monthYearText = document.getElementById("month-year");

    let currentDate = new Date();
    let selectedDate = currentDate;

    function showCalendar() {
        calendar.style.display = "block";
    }

    function updateCalendar() {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const today = new Date();

        monthYearText.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

        while (calendarDates.firstChild) {
            calendarDates.removeChild(calendarDates.firstChild);
        }

        for (let i = 1; i <= lastDayPrevMonth.getDate() - firstDay.getDay(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, i);
            const dateElement = createDateElement(date, false);
            calendarDates.appendChild(dateElement);
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dateElement = createDateElement(date, true);

            if (date.toDateString() === today.toDateString()) {
                dateElement.classList.add("today");
            }

            calendarDates.appendChild(dateElement);
        }
    }

    function createDateElement(date, isCurrentMonth) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");
        dateElement.textContent = date.getDate();

        if (!isCurrentMonth) {
            dateElement.classList.add("other-month");
        }

        dateElement.addEventListener("click", () => {
            selectedDate = date;
            dateInput.value = formatDate(selectedDate);
            // hideCalendar();
        });

        return dateElement;
    }

    function formatDate(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    }

    dateInput.addEventListener("focus", () => {
        showCalendar();
    });

    prevMonthButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
});


    let currentPage = 1;

    function showContent(page) {
      // Hide all content divs
      const contentDivs = document.querySelectorAll('.content');
      contentDivs.forEach((div) => {
        div.classList.remove('active');
      });

      // Show the selected content
      document.getElementById(`content${page}`).classList.add('active');

      currentPage = page;
    }

    function showPreviousContent() {
      if (currentPage > 1) {
        showContent(currentPage - 1);
      }
    }

    function showNextContent() {
      if (currentPage < 4) { // Change 3 to the number of pages
        showContent(currentPage + 1);
      }
    }

    // Show the initial content (e.g., Page 1)
    showContent(1);

    function showFullScreenMessage() {
      const fullscreenMessage = document.getElementById('fullscreenMessage');
      fullscreenMessage.style.display = 'block';
    }

    function closeFullScreenMessage() {
      const fullscreenMessage = document.getElementById('fullscreenMessage');
      fullscreenMessage.style.display = 'none';
    }

 