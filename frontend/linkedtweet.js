

// code to submit the prompt
async function submitPrompt() {
    const prompt = document.getElementById('entered-prompt').value;
    const url = 'https://linkedInTweetAPI';

    try {
        const url = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        console.error('failed to fetch response', error);
        alert('Failed to fetch prompt');
    }
}

function displayResponse(data) {

    const fakeData = 'This is the new reponse based on what you have prompted';

    const displayPromptResponse = document.getElementById('displayPromptResponse');
    displayPromptResponse.innerHTML = `<p> ${fakeData}</p>`;
}



// code to moderate response from the prompt

async function moderateResponse() {
    const contentToModerate = document.getElementById('displayPromptResponse').value;
    const url = 'https://Moderating API';

    try {
        const url = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        console.error('failed to moderate', error);
        alert('Failed to moderate content');
    }
}


// code to analyse response from the prompt
async function analyseResponse() {

    const contentToModerate = document.getElementById('displayPromptResponse').value;
    const url = 'https://AnalysingAPI';

    try {
        const url = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        console.error('failed to analyse content', error);
        alert('Failed to anayse content');
    }

}

// code to share final response after the prompt on LinkedIn
async function shareOnLinkedIn() {

    const contentToModerate = document.getElementById('displayPromptResponse').value;
    const url = 'https://LinkedIn API';

    try {
        const url = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        alert('successfuly shared on linkedIN');
    } catch (error) {
        console.error('failed to share on linked In', error);
        alert('Failed to share on linkedIn');
    }

}

// code to share final response after the prompt on X
async function shareOnX() {
    const contentToModerate = document.getElementById('displayPromptResponse').value;
    const url = 'https://Twitter API';

    try {
        const url = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        alert('successfuly shared on X');
    } catch (error) {
        console.error('failed to share on X', error);
        alert('Failed to share on X');
    }
}