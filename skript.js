
// Get the "Generate Application" button element
const btn = document.getElementById('btn');
// Add an event listener to the button
btn.addEventListener('click', generateAnswer);
const eins = 'sk-DDLI';
const zwei = 'SQW9gOrrMVbWj4VET3BlbkFJLmPrWSpeUFiupVfTFS3e'
const drei = eins+zwei;


async function generateAnswer(event){
    event.preventDefault();

    const question = document.getElementById('question');
    const prompt = `Act is if you were the ancient Philosopher Diogenes but drunk. What are you thoughts about this? Be Cynical and remember You are Diogenes:   ${question} .Ende` ;



    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${drei}`
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 1,
        max_tokens: 1100,
        n: 1,
        stop: ["Ende"],
        model: "text-davinci-003",  
      })
    });
    console.log(response);

  
    // Extract completed text from API response
   const data = await response.json();
   console.log(data);    
   
   const txt =data.choices[0].text;
   const answerElement = document.querySelector('#answer');
   answerElement.innerHTML = txt;
   
   const res = document.getElementById('answer');
   res.value = txt;
}