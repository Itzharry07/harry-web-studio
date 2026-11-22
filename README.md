# Harry Web Studio

Marketing website for Harry Web Studio, my web-design business. Next.js 16 (static export) + Tailwind CSS 4.

## Before you launch: edit these

1. **`src/content/site.ts`**: business name, email, domain, Formspree ID, Funded Edge links.
2. **`src/content/content.ts`**: services, package contents, process, FAQ and portfolio text.
3. **Logo**: a simple "H" mark, drawn in three places: `src/components/logo.tsx` (header/footer),
   `src/app/icon.svg` (browser tab icon) and `src/app/og.png/route.tsx` (share image). Update all three if you change it.

Everything else reads from those files, including the page title, the share image (`/og.png`) and the sitemap.

## Portfolio screenshots

Real Funded Edge screenshots live in `public/work/` (`funded-edge-landing.webp`, `funded-edge-features.webp`),
used in `src/components/work.tsx`. To replace one, save a new image with the same name (WebP or JPG around
1600px wide keeps the page fast). If you change the format, update the `src` in `work.tsx`.
Don't use screenshots that show real account balances or personal data.

## Run it on your computer

```powershell
cd C:\dev\studio-site
npm install
npm run dev
```

Open http://localhost:3000. Edits show up as soon as you save.

Check the production build (this is what gets deployed):

```powershell
npm run build
```

This writes the finished site to the `out/` folder.

## Test the whole site (70 automatic checks)

Clicks through every page in a real Edge browser, on desktop and phone sizes: navigation, mobile menu,
sections appearing, images, FAQ, the WhatsApp contact form, both demos, going back from a demo, and the 404 page.

```powershell
npm run test:site -- https://harry-web-studio.harrywebstudio73.workers.dev
```

Use `http://localhost:3000` instead to test your local copy while `npm run dev` is running.

## Contact form (Formspree)

Until you add a Formspree ID, the form opens the visitor's email app with their message pre-filled.

1. Sign up at https://formspree.io and create a new form, using the email you want enquiries sent to.
2. Copy the form ID: the endpoint looks like `https://formspree.io/f/abcdwxyz`, the ID is `abcdwxyz`.
3. Put it in `formspreeId` in `src/content/site.ts`, then commit and push.
4. Send yourself a test message from the live site. Formspree asks you to confirm the first one.

## Deploy

**Live now:** https://harry-web-studio.harrywebstudio73.workers.dev, on Cloudflare (Workers static assets,
set up from GitHub repo `Itzharry07/harry-web-studio`). Every `git push` to `main` rebuilds and redeploys
automatically. Settings for that live in `wrangler.jsonc`.

The site is plain static files, so any static host works. The options below are for reference.

> **Heads-up on Vercel's free plan.** Vercel's free "Hobby" plan is for personal, non-commercial use.
> A business site that sells your services counts as commercial use, so for the long term either use
> Vercel Pro, or use **Cloudflare Pages** or **Netlify**, whose free plans allow commercial sites.
> Check each provider's current terms yourself before choosing. The steps are almost the same on each.

### Option A: Vercel

1. Push this repo to GitHub (see below).
2. Go to https://vercel.com/new, sign in with GitHub and import the repo.
3. Vercel detects Next.js automatically. Leave the settings as they are and click **Deploy**.
4. In **Project → Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = your final URL
   (for example `https://yourdomain.in`), then redeploy. The sitemap and share links use it.

### Option B: Cloudflare Pages (free, commercial use allowed)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Framework preset: **None**. Build command: `npm run build`. Build output directory: `out`.
4. Under environment variables add `NEXT_PUBLIC_SITE_URL` (your final URL) and `NODE_VERSION` = `22`.
5. Click **Save and Deploy**.

### Push to GitHub (first time)

Create an empty repo on github.com (no README), then:

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
```

```powershell
git push -u origin main
```

After that, every `git push` redeploys the site automatically.

## Connect a domain

1. Buy a domain from a registrar (for example GoDaddy, Namecheap, Hostinger or Cloudflare). A `.in` or `.com` both work.
2. In your host, open the project's **Domains** settings and add the domain (on Vercel: **Settings → Domains**;
   on Cloudflare Pages: **Custom domains**).
3. The host shows you DNS records to add (usually an `A` record for `yourdomain.in` and a `CNAME` for `www`).
   Add exactly those at your registrar's DNS settings.
4. Wait for DNS to update (often minutes, sometimes a few hours). HTTPS is set up automatically.
5. Update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy.

## Honesty rules for this site

- Only real work in the portfolio. Anything else is labelled "Concept · not a client project".
- No made-up testimonials, client logos, numbers or reviews. Add real ones as you earn them.
- Funded Edge is described as my own product, not a client project.
