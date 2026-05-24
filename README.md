# Mat Daddy Apparel Website

**www.matdaddyapparel.com**

A clean, responsive storefront for Mat Daddy Apparel — built to host on GitHub Pages and connect to your custom domain.

---

## 📁 File Structure

```
matdaddy/
├── index.html          ← Main website
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── products.js     ← ✏️ ADD YOUR PRODUCTS HERE
│   └── main.js         ← Site functionality (don't edit)
├── images/             ← Put your product photos here
└── README.md
```

---

## 🛍️ Adding Products

Open **`js/products.js`** and add items to the `PRODUCTS` array:

```js
const PRODUCTS = [
  {
    id: 1,
    name: "Mat Daddy Classic Tee",
    description: "Heavyweight 100% cotton — Black",
    price: 35.00,
    image: "images/tee-black.jpg",
    badge: "New",        // Optional: "New", "Hot", "Sale" — delete line to hide
    category: "tees"
  },
  {
    id: 2,
    name: "Mat Daddy Hoodie",
    description: "Midweight pullover — Black",
    price: 65.00,
    image: "images/hoodie-black.jpg",
    category: "hoodies"
  },
];
```

- Add your product image to the `/images/` folder
- Each product needs a **unique `id`** number
- Save and push — it shows up on the site automatically!

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it anything (e.g. `matdaddy-site`)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload Your Files
**Option A — Upload via GitHub website:**
1. Click **Add file → Upload files**
2. Drag all your files in (keep the folder structure)
3. Click **Commit changes**

**Option B — Git command line:**
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/matdaddy-site.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repo, go to **Settings → Pages**
2. Under **Source**, select `main` branch, `/ (root)` folder
3. Click **Save**
4. GitHub will give you a URL like: `https://yourusername.github.io/matdaddy-site`

---

## 🌐 Connect Your Custom Domain (matdaddyapparel.com)

### Step 1 — Add domain in GitHub
1. In **Settings → Pages**, under "Custom domain"
2. Type `www.matdaddyapparel.com` and click **Save**
3. GitHub will create a `CNAME` file automatically

### Step 2 — Update DNS at your domain registrar
Go to where you bought your domain and add these DNS records:

| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | `YOUR_USERNAME.github.io` |
| A     | @    | `185.199.108.153` |
| A     | @    | `185.199.109.153` |
| A     | @    | `185.199.110.153` |
| A     | @    | `185.199.111.153` |

> DNS changes can take up to 24 hours to propagate.

### Step 3 — Enable HTTPS
Back in **Settings → Pages**, check **"Enforce HTTPS"** once it's available.

---

## 📧 Email Signup (Optional)

The email signup form is ready for a real email service. Free options:
- **[Formspree](https://formspree.io)** — Easiest, no code needed
- **[Mailchimp](https://mailchimp.com)** — Free up to 500 contacts

To connect Formspree:
1. Sign up at formspree.io
2. Create a form → copy your endpoint URL
3. In `index.html`, find the `<form>` in the signup section
4. Change `onsubmit="handleSignup(event)"` to `action="YOUR_FORMSPREE_URL" method="POST"`

---

## 🛒 Adding Real Payments Later

When you're ready to take real payments, options include:
- **[Shopify Buy Button](https://www.shopify.com/buy-button)** — Easiest, embed into this site
- **[Stripe](https://stripe.com)** — Build a custom checkout
- **[Gumroad](https://gumroad.com)** — Simple product links

---

Built with ❤️ for the mat. 🤼
