# AI Prompting Guide for QuestAR Workshop 🤖

This guide contains detailed prompts you can use with AI coding assistants (like ChatGPT, Claude, or Antigravity) to help you build and customize your projects.

---

## 🎨 Session 1: Your Digital Identity
*Goal: Build a premium portfolio and host it.*

### Prompt 1: Building the Structure
> "Act as a senior frontend developer. Create a single-page portfolio website using semantic HTML5. Include a navigation bar, a hero section with my name and a catchy subtitle, an 'About Me' section, a 'Projects' grid with 3 placeholders, and a footer. Use a modern font like 'Outfit' from Google Fonts."

### Prompt 2: Premium Styling
> "Using Vanilla CSS, style the portfolio structure I just created. Use a clean, modern aesthetic with a light background (`#f8fafc`) and a primary accent color of Indigo (`#6366f1`). Add a glassmorphism effect to the navigation bar (blur and semi-transparency). Ensure the layout is responsive using Flexbox and Grid."

### Prompt 3: Adding Interactivity
> "Add a subtle fade-in animation to the hero section using CSS keyframes. Also, make the project cards slightly lift up and show a shadow when the user hovers over them."

---

## 🎮 Session 2: Entering the 3D World
*Goal: Create a game dashboard and render 3D objects.*

### Prompt 1: The Glassmorphism Dashboard
> "Create a game UI overlay for an AR game. It should have a status bar at the top with a 'Gems Collected' counter and a 'Quit' button. At the bottom, add a floating 'Hint Box' that says 'Scanning for treasures...'. Use a dark-mode glassmorphism style with a blur effect and thin white borders."

### Prompt 2: Three.js Boilerplate
> "Write a basic Three.js script to render a 3D 'Gem' in the center of the screen. Use an `OctahedronGeometry`. The gem should have a shiny, metallic cyan material (`MeshStandardMaterial`). Add an animation loop that makes the gem rotate continuously. Include a PointLight to make the metallic surface shine."

---

## 🔍 Session 3: Bridging Reality (AR)
*Goal: Connect the 3D assets to the camera feed.*

### Prompt 1: Mind.AR Integration
> "I want to integrate Mind.AR with my Three.js code. Provide a script that sets up a `MindARImageThree` controller. Use a sample marker URL for image tracking. When the marker is found, the 3D Gem from Session 2 should appear on top of it. Ensure the camera feed fills the entire screen."

### Prompt 2: Collection Logic
> "Add a simple game mechanic to my AR code: when the user clicks anywhere on the screen while the AR target is visible, increment a score counter in the UI, show a 'Collected!' message in the hint box, and hide the 3D gem."

---

## 🚀 Session 4: The Creator's Lab (Remixing)
*Goal: Customize and create something unique.*

### Prompt 1: Changing the 3D Model
> "How do I change the Three.js `OctahedronGeometry` to something more complex, like a floating `TorusKnot` or a `Sphere`? Provide the code snippet and explain how to adjust the scale so it fits nicely on an AR marker."

### Prompt 2: Adding Sound Effects
> "I want to add a 'ding' sound effect whenever a treasure is collected in my AR game. Show me how to use the HTML5 Audio API to play a sound file when my score increments."

### Prompt 3: Custom AR Markers
> "I have created a custom `.mind` file using the Mind.AR compiler. How do I update my code to use this new marker instead of the sample one? Explain where to change the file path."

---

## 💡 Prompting Tips for Students
1. **Be Specific**: Don't just say "make it look better." Say "add a 10px blur and a subtle blue glow."
2. **One Step at a Time**: Ask for the HTML first, then the CSS, then the JS.
3. **Ask 'Why'**: If the AI gives you code you don't understand, ask "Can you explain how the `requestAnimationFrame` function works here?"
