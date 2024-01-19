//your JS code here. If required.
async function showMessageWithDelay() {
      const textInput = document.getElementById('text').value;
      const delayInput = parseInt(document.getElementById('delay').value, 10);

      // Validate inputs
      if (!textInput || isNaN(delayInput)) {
        alert('Please enter valid values for text and delay.');
        return;
      }

      // Use setTimeout to introduce a delay
      await new Promise(resolve => setTimeout(resolve, delayInput));

      // Display the message on the webpage
      const outputDiv = document.getElementById('output');
      outputDiv.innerText = textInput;
    }

    document.getElementById('btn').addEventListener('click', showMessageWithDelay);