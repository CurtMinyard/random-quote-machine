const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Fortune favors the bold.", author: "Virgil"},
    { text: "Knowledge is power.", author: "Francis Bacon" },
  
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to update the quote in the UI
  function updateQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById("text").innerText = `"${randomQuote.text}"`;
    document.getElementById("author").innerText = `— ${randomQuote.author}`;
  
    // Update the Tweet link
    const tweetUrl = `https://twitter.com/intent/tweet?text="${randomQuote.text}" — ${randomQuote.author}`;
    document.getElementById("tweet-quote").href = tweetUrl;
  }
  
  // Set the initial quote when the page loads
  document.addEventListener("DOMContentLoaded", updateQuote);
  
  // Set up event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", updateQuote);
