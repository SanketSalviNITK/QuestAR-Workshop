# 🛠️ Workshop Troubleshooting Guide

Use this guide to help students resolve common technical hurdles during the workshop.

---

## 📸 Camera & AR Issues

### 1. Camera won't start
*   **The HTTPS Rule**: Browsers **block** camera access on non-secure sites. Ensure the student is using their **Vercel URL** (e.g., `https://project.vercel.app`) and NOT a local IP or `http://`.
*   **Permissions**: On iPhone/Android, click the "Aa" or "Lock" icon in the address bar and ensure **Camera** is set to **Allow**.
*   **Background Apps**: Ensure other apps (like Zoom, Teams, or the native Camera app) are closed.

### 2. AR Marker not detected
*   **Lighting**: Tracking fails in dim rooms or under heavy glare. Move to a well-lit area.
*   **Focus**: Ensure the camera is clean and focusing on the marker.
*   **The Marker**: Ensure the student hasn't cropped or distorted the marker image. It needs its "border" to be detected.

### 3. "Script Error" or "Three is not defined"
*   **Internet Connection**: The project imports Three.js and Mind.AR from CDNs. If the Wi-Fi is down, these won't load.
*   **Import Map**: Ensure the `<script type="importmap">` block is at the very top of the `<head>` and matches the syntax in the starter code exactly.

---

## 🌐 Hosting & GitHub Issues

### 1. Vercel "Build Failed"
*   **File Paths**: Case sensitivity matters! If the code says `style.css` but the file is `Style.css`, Vercel will fail.
*   **Directory Structure**: Ensure the `index.html` is in the folder they connected to Vercel.

### 2. "git push" rejected
*   **Authentication**: If they haven't set up a Personal Access Token (PAT) or the GitHub Desktop app, they might get a 403 error. 
*   **Merge Conflict**: If they edited files directly on GitHub and then tried to push from VS Code. Run `git pull` first.

---

## 💎 Three.js Visual Issues

### 1. Screen is just black
*   **Lighting**: Ensure there is at least one `AmbientLight` in the scene, otherwise, materials like `MeshStandardMaterial` will appear black.
*   **Camera Position**: Ensure `camera.position.z` is set to a positive value (e.g., `5`), otherwise, the camera is "inside" the object.

### 2. Animation is stuttering
*   **Device Power**: Ensure the laptop is plugged in or not in "Power Saver" mode, which throttles WebGL performance.
