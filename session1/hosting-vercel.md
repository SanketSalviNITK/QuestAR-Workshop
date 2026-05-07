# Session 1: Launching Your Portfolio 🚀

In this session, you will connect your code to the world using **GitHub** (for storage) and **Vercel** (for hosting).

## 1. Create Your GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `my-portfolio`.
4. Leave it as **Public** and click **Create repository**.

## 2. Push Your Code to GitHub
1. Open your project folder in VS Code.
2. Open the terminal (Ctrl + `).
3. Run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: My Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

## 3. Host on Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New** -> **Project**.
3. Find your `my-portfolio` repository and click **Import**.
4. Click **Deploy**.
5. **Boom!** Your website is live at a URL like `my-portfolio.vercel.app`.

---

## 💡 Pro Tip
Vercel is powerful! Every time you `git push` new changes to GitHub, Vercel will automatically update your live website. No manual uploading needed!
