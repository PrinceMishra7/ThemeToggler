# ⚛️ React + Vite Starter Template

This template provides a minimal setup to get **React** working with **Vite**, featuring **HMR (Hot Module Replacement)** and some basic **ESLint** rules.

## 🔌 Available Plugins

Two official Vite plugins are available for React integration:

* [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses **Babel** for Fast Refresh.
* [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc): Uses **SWC** for Fast Refresh.

---

## 📝 Git Workflow Reference

### 🌳 Branch Naming Convention

* **`main`**: Primary branch for production-ready code.
* **`development`**: Active development and integration branch.

#### 📌 Example Commands

```bash
git branch -M main         # Rename current branch to 'main'
git branch -M development  # Rename current branch to 'development'
```

---

### 🌐 Remote Naming

* **`origin`**: Default name for a remote (commonly used for GitHub).
* **Custom name**: Useful when working with multiple remotes.

#### 📌 Example Commands

```bash
git remote add origin https://github.com/username/repo.git     # Add default-named remote
git remote add my-repo https://github.com/username/repo.git    # Add custom-named remote
```

---

### 🔁 Tracking Branches with `-u`

Use the `-u` (or `--set-upstream`) flag to link a local branch with its remote counterpart. This allows simplified usage of `git push` and `git pull`.

#### 📌 Example Commands

```bash
git push -u origin main         # Push and track 'main' on 'origin'
git push -u my-repo development # Push and track 'development' on 'my-repo'
```
