document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const selectedDateDisplayEl = document.getElementById('selectedDateDisplay');
    const currentDateTodoDisplayEl = document.getElementById('currentDateTodoDisplay');
    const todoListDateDisplayEl = document.getElementById('todoListDateDisplay');
    const todoForm = document.getElementById('todoForm');
    const todoTaskInput = document.getElementById('todoTask');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const todoListEl = document.getElementById('todoList');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let selectedDate = new Date(); // Defaults to today's date

    // Function to format date for display (e.g., "Tuesday, 18 June 2025")
    const formatDateForDisplay = (date) => {
        return date.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Function to format date for localStorage key (e.g., "2025-06-18")
    const formatDateForKey = (date) => {
        return date.toISOString().split('T')[0];
    };

    // Render the calendar
    const renderCalendar = () => {
        calendarEl.innerHTML = ''; // Clear previous calendar

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();

        const startDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday

        // Calendar Header
        const calendarHeader = document.createElement('div');
        calendarHeader.classList.add('calendar-header');
        calendarHeader.innerHTML = `
            <button id="prevMonth">&lt;</button>
            <span>${new Date(currentYear, currentMonth).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
            <button id="nextMonth">&gt;</button>
        `;
        calendarEl.appendChild(calendarHeader);

        // Day Names
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayNameEl = document.createElement('div');
            dayNameEl.classList.add('day-name');
            dayNameEl.textContent = day;
            calendarEl.appendChild(dayNameEl);
        });

        // Fill in leading empty days
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyDayEl = document.createElement('div');
            emptyDayEl.classList.add('calendar-day', 'other-month');
            const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
            emptyDayEl.textContent = prevMonthLastDay - (startDayOfWeek - 1 - i);
            calendarEl.appendChild(emptyDayEl);
        }

        // Fill in days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('calendar-day', 'current-month');
            dayEl.textContent = day;

            const fullDate = new Date(currentYear, currentMonth, day);

            // Add 'today' class if it's the current date
            if (fullDate.toDateString() === new Date().toDateString()) {
                dayEl.classList.add('today');
            }

            // Add 'selected-date' class if it's the currently selected date
            if (fullDate.toDateString() === selectedDate.toDateString()) {
                dayEl.classList.add('selected-date');
            }

            dayEl.addEventListener('click', () => {
                selectedDate = fullDate;
                updateSelectedDateDisplay();
                renderCalendar(); // Re-render to update selected date highlighting
                renderTodoList(); // Update todo list for the newly selected date
            });
            calendarEl.appendChild(dayEl);
        }

        // Fill in trailing empty days (to complete the last week row)
        const totalDaysDisplayed = startDayOfWeek + daysInMonth;
        const remainingDays = 42 - totalDaysDisplayed; // Max 6 rows * 7 days = 42
        for (let i = 1; i <= remainingDays; i++) {
            const emptyDayEl = document.createElement('div');
            emptyDayEl.classList.add('calendar-day', 'other-month');
            emptyDayEl.textContent = i;
            calendarEl.appendChild(emptyDayEl);
        }

        // Add event listeners for month navigation
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    };

    // Update the displayed selected date
    const updateSelectedDateDisplay = () => {
        selectedDateDisplayEl.textContent = formatDateForDisplay(selectedDate);
        currentDateTodoDisplayEl.textContent = formatDateForDisplay(selectedDate);
        todoListDateDisplayEl.textContent = formatDateForDisplay(selectedDate);
    };

    // Get to-do items from localStorage for a specific date
    const getTodos = (date) => {
        const key = formatDateForKey(date);
        const todos = localStorage.getItem(key);
        return todos ? JSON.parse(todos) : [];
    };

    // Save to-do items to localStorage for a specific date
    const saveTodos = (date, todos) => {
        const key = formatDateForKey(date);
        localStorage.setItem(key, JSON.stringify(todos));
    };

    // Render the to-do list for the selected date
    const renderTodoList = () => {
        todoListEl.innerHTML = ''; // Clear previous list
        const todos = getTodos(selectedDate);

        if (todos.length === 0) {
            const noTodoItem = document.createElement('li');
            noTodoItem.textContent = 'No to-dos for this date!';
            noTodoItem.style.fontStyle = 'italic';
            noTodoItem.style.color = '#777';
            noTodoItem.style.textAlign = 'center';
            todoListEl.appendChild(noTodoItem);
            return;
        }

        // Sort todos by start time
        todos.sort((a, b) => {
            const timeA = new Date(`2000/01/01 ${a.startTime}`);
            const timeB = new Date(`2000/01/01 ${b.startTime}`);
            return timeA - timeB;
        });

        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            if (todo.completed) {
                li.classList.add('completed');
            }

            li.innerHTML = `
                <div class="todo-item-details">
                    <span class="task-text">${todo.task}</span>
                    <br>
                    <strong>${todo.startTime} - ${todo.endTime}</strong>
                </div>
                <div class="todo-actions">
                    <button class="check-btn" title="Mark as Complete">
                        <i class="material-icons">${todo.completed ? 'check_box' : 'check_box_outline_blank'}</i>
                    </button>
                    <button class="delete-btn" title="Delete Task">
                        <i class="material-icons">delete</i>
                    </button>
                </div>
            `;

            // Mark as complete/incomplete
            li.querySelector('.check-btn').addEventListener('click', () => {
                todos[index].completed = !todos[index].completed;
                saveTodos(selectedDate, todos);
                renderTodoList();
            });

            // Delete task
            li.querySelector('.delete-btn').addEventListener('click', () => {
                todos.splice(index, 1); // Remove the item
                saveTodos(selectedDate, todos);
                renderTodoList();
            });

            todoListEl.appendChild(li);
        });
    };

    // Handle to-do form submission
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = todoTaskInput.value.trim();
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (task && startTime && endTime) {
            const todos = getTodos(selectedDate);
            todos.push({
                task: task,
                startTime: startTime,
                endTime: endTime,
                completed: false
            });
            saveTodos(selectedDate, todos);
            todoTaskInput.value = '';
            // Reset time inputs or keep them for next entry
            // startTimeInput.value = '09:00';
            // endTimeInput.value = '10:00';
            renderTodoList();
        } else {
            alert('Please fill in all to-do details (Task, Start Time, End Time).');
        }
    });

    // Initial load: render calendar and today's to-do list
    updateSelectedDateDisplay();
    renderCalendar();
    renderTodoList();
});