window.onload = function () {
  const chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight;
};

// El
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const alertBox = document.getElementById("alertBox");

function showAlert(msg) {
  alertBox.textContent = msg;
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

const redirects = {
  "secret link": "https://example.com/secret",
  "go home": "index.html",
  "the feature": "https://feature.example.com"
};

function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;

  if (redirects[text.toLowerCase()]) {
    window.location.href = redirects[text.toLowerCase()];
    return; 
  }
  
  showAlert("You must become a member to chat!");
  chatInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", handleSend);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSend();
  }
});

chatBox.scrollTop = chatBox.scrollHeight;