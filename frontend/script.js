
async function checkBackend() {
    const result = document.getElementById("result");

    try {
        const response = await fetch(
            "http://localhost:5000/api/health"
        );

        const data = await response.json();

        result.textContent = data.message;
    } catch (error) {
        result.textContent = "Backend connection failed!";
        console.error(error);
    }
}
