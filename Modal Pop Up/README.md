# Advanced Modal / Popup System

A stylish and modern modal/popup system built with pure HTML, CSS, and JavaScript. This project demonstrates how to create multiple, versatile modals with a sleek user interface, including a beautiful dark mode, smooth animations, and a blurred overlay effect.

 
*(You can replace this with a screenshot or GIF of your project in action!)*

---

## ✨ Features

- **Multiple Modal Types:** Includes examples for informational text, a contact form, and an image display.
- **Stylish UI:** Modern design with gradient buttons, a card-like layout, and subtle shadows.
- **Dark/Light Theme:** A beautiful, high-contrast dark mode that can be toggled with a single click. The theme preference is saved for future visits.
- **Animated & Interactive:** Smooth transitions for modal opening/closing and a `backdrop-filter` for a blurred background overlay.
- **Easy to Use:** Simple and intuitive JavaScript for handling all modal logic.
- **Customizable:** Built with CSS variables for easy theme and color customization.
- **Pure Vanilla JS:** No external libraries or frameworks required, keeping it lightweight and fast.

---

## 🚀 Live Demo

Check out the live demo here: **[Link to your live demo]**

*(You can host this project for free on services like GitHub Pages, Netlify, or Vercel)*

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Grid, CSS Variables)
- **JavaScript** (ES6+)

---

## ⚙️ How to Use

1.  **Clone or download the repository:**
    ```bash
    git clone https://github.com/remissg/Modal-Popup
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Modal-Pop-Up
    ```
3.  **Open `index.html` in your web browser.** That's it!

### Adding a New Modal

1.  **HTML:** Create a button to open the modal and give it a unique `data-modal` attribute.
    ```html
    <button class="open-modal-btn" data-modal="newModalId">Open New Modal</button>
    ```
2.  **HTML:** Create the modal structure with a corresponding `id`.
    ```html
    <div id="newModalId" class="modal">
        <div class="modal-header">
            <h2>New Modal Title</h2>
            <span class="close-btn">&times;</span>
        </div>
        <p>Content for the new modal.</p>
    </div>
    ```
The JavaScript is already set up to handle any new modals as long as the `data-modal` on the button matches the `id` of the modal `div`.

### Customization

You can easily change the color scheme by modifying the CSS variables at the top of the `style.css` file.

```css
/* In style.css */
:root {
    /* Light Theme Colors */
    --bg: #f0f2f5;
    --card: #ffffff;
    /* ...and so on */
}

body.dark {
    /* Dark Theme Colors */
    --bg: #101118;
    --card: #1f2029;
    /* ...and so on */
}
```

---

## 📄 License

This project is open source and available under the MIT License.