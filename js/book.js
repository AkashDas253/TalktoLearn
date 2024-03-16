function changeLanguage() {
    // Get the selected language from the dropdown
    var selectedLanguage = document.getElementById("languages").value;

    // Filter books based on the selected language
    var booksList = document.getElementById("books");
    booksList.innerHTML = ""; // Clear previous book list

    var filteredBooks = getFilteredBooks(selectedLanguage);

    // Display the filtered books
    filteredBooks.forEach(function(book) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${book.name}</strong><br>
            <em>Author: ${book.author}</em><br>
            ${book.description}
        `;
        booksList.appendChild(listItem);
    });
}

function getFilteredBooks(language) {
    // Define your books and their associated languages
    var books = {
        "none":[],
        
        "en": [
            {
                name: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "Classic novel set in the American South during the 1930s, addressing racial injustice."
            },
            {
                name: "1984",
                author: "George Orwell",
                description: "Dystopian novel depicting a totalitarian society and the dangers of government overreach."
            },
            // Add more books as needed
        ],
        "es": [
            {
                name: "Cien años de soledad",
                author: "Gabriel García Márquez",
                description: "Novela que narra la historia de la familia Buendía en el pueblo ficticio de Macondo."
            },
            {
                name: "Don Quijote de la Mancha",
                author: "Miguel de Cervantes",
                description: "Novela que sigue las aventuras de un caballero enloquecido, Don Quijote."
            },
            // Add more books as needed
        ],
        "fr": [
            {
                name: "Les Misérables",
                author: "Victor Hugo",
                description: "Roman épique qui suit la vie de plusieurs personnages au cours des décennies du XIXe siècle."
            },
            {
                name: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                description: "Conte philosophique racontant l'histoire d'un jeune prince venu d'une autre planète."
            },
            {
                name: "Les Misérables",
                author: "Victor Hugo",
                description: "Roman épique qui suit la vie de plusieurs personnages au cours des décennies du XIXe siècle."
            },
            {
                name: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                description: "Conte philosophique racontant l'histoire d'un jeune prince venu d'une autre planète."
            },
            {
                name: "Les Misérables",
                author: "Victor Hugo",
                description: "Roman épique qui suit la vie de plusieurs personnages au cours des décennies du XIXe siècle."
            },
            {
                name: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                description: "Conte philosophique racontant l'histoire d'un jeune prince venu d'une autre planète."
            },
            {
                name: "Les Misérables",
                author: "Victor Hugo",
                description: "Roman épique qui suit la vie de plusieurs personnages au cours des décennies du XIXe siècle."
            },
            {
                name: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                description: "Conte philosophique racontant l'histoire d'un jeune prince venu d'une autre planète."
            },
            // Add more books as needed
        ]
        // Add more languages as needed
    };

    // Return books based on the selected language
    return books[language] || [];
}

// Retrieve the selected language on page load
var storedLanguage = localStorage.getItem("selectedLanguage");
if (storedLanguage) {
    // Set the dropdown to the stored language
    document.getElementById("languages").value = storedLanguage;

    // Update books list with the stored language
    changeLanguage();
}