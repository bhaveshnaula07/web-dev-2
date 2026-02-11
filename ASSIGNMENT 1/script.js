const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

let sampleEvents = [
    { title: "Web Dev Workshop", date: "2026-12-04", category: "Workshop", description: "Learn web dev." },
    { title: "Tech Conference", date: "2026-12-05", category: "Conference", description: "Tech meetup." }
];

function createEventCard(e) {
    const card = document.createElement("div");
    card.classList.add("event");
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${e.title}</h3>
        <div>${e.date}</div>
        <span>${e.category}</span>
        <p>${e.description}</p>
    `;
    return card;
}

function addEvent(e) {
    const empty = document.querySelector(".empty-state");
    if (empty) empty.remove();
    eventContainer.appendChild(createEventCard(e));
}

eventForm.addEventListener("submit", e => {
    e.preventDefault();
    addEvent({
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    });
    eventForm.reset();
});

eventContainer.addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        if (!eventContainer.children.length) {
            eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
        }
    }
});

clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
});

addSampleBtn.addEventListener("click", () => {
    sampleEvents.forEach(ev => addEvent(ev));
});

document.addEventListener("keydown", () => {
    demoContent.innerText = "innerText";
    setTimeout(() => demoContent.textContent = "textContent", 800);
    setTimeout(() => demoContent.innerHTML = "<b>innerHTML</b>", 1600);
});
