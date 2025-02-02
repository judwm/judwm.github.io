---
title: Contact
permalink: /contact/
layout: page
excerpt: Contact page
comments: false
---

<style>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--light);
  border-radius: 4px;
  background: var(--code-bg);
  color: var(--text-primary);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

textarea.form-input {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.3s ease;
}

.submit-btn:hover {
  opacity: 0.9;
}

.contact-alternatives {
  margin-top: 2rem;
  text-align: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background: var(--light);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  opacity: 0.9;
}
</style>

<div class="contact-form">
  <form id="whatsappForm" onsubmit="sendToWhatsApp(event)">
    <div class="form-group">
      <label class="form-label" for="name">Name</label>
      <input type="text" id="name" name="name" class="form-input" required>
    </div>
    <div class="form-group">
      <label class="form-label" for="message">Message</label>
      <textarea id="message" name="message" class="form-input" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Send via WhatsApp</button>
  </form>
</div>

<div class="contact-alternatives">
  <p>Or reach me directly via:</p>
  <a href="https://x.com/judith_dwm" class="social-link">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    X/Twitter
  </a>
  <a href="mailto:the.wimanda@gmail.com" class="social-link">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    Email
  </a>
</div>

<script>
function sendToWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const phoneNumber = '6287781234477'; 
  const text = `Hi, ane ${name}. ${message}`;
  const whatsappURL = `https://wa.me/$6287781234477?text=${encodeURIComponent(text)}`;
  window.open(whatsappURL, '_blank');
}
</script>
