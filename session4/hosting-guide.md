# Session 4: Launching Your AR Game 🚀

Now that your game is working locally, it's time to share it with the world!

## 1. Prepare Your Repository
1. Go to [GitHub](https://github.com) and create a new repository named `quest-ar`.
2. Open your terminal in the project folder.
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "First commit: AR Game prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/quest-ar.git
   git push -u origin main
   ```

## 2. Enable GitHub Pages
1. In your GitHub repository, go to **Settings**.
2. Click on **Pages** in the left sidebar.
3. Under **Branch**, select `main` and click **Save**.
4. Wait 1-2 minutes. Your site will be live at `https://YOUR_USERNAME.github.io/quest-ar/`.

## 3. Testing on Mobile
1. Open the URL on your smartphone.
2. **Crucial**: You must allow camera permissions when prompted.
3. Point your camera at the target marker.
4. If it doesn't work, ensure you are using **HTTPS** (GitHub Pages provides this automatically).

## 4. UI Polish Checklist
- [ ] Does the splash screen look good on mobile?
- [ ] Is the "Collect" animation smooth?
- [ ] Did you add a "Restart" button?
- [ ] (Bonus) Add a sound effect when a gem is collected!

---

## Congratulations!
You've built and hosted a modern AR experience from scratch. Keep exploring Three.js and Mind.AR to build even more complex adventures!
