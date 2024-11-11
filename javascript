// Developer GitHub profiles
const developers = [
    { id: "developer1", name: "Dev1", githubUrl: "https://github.com/dev1" },
    { id: "developer2", name: "Dev2", githubUrl: "https://github.com/dev2" },
    { id: "developer3", name: "Dev3", githubUrl: "https://github.com/dev3" }
];

// Function to set GitHub links for each developer
function setGitHubLinks(developers) {
    developers.forEach(developer => {
        const linkElement = document.getElementById(developer.id);
        if (linkElement) {
            linkElement.href = developer.githubUrl;
            linkElement.innerHTML = `<i class="fab fa-github"></i> ${developer.name}`;
        }
    });
}

// Run the function
setGitHubLinks(developers);
