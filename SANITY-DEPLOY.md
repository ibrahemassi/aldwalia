# Deploy Sanity Studio to sanity.io (so "Services" appears online)

Your **localhost Studio** (http://localhost:3000/y) already has the Services type. The **hosted Studio** at sanity.io uses a separate deployed app; that deploy is currently timing out (408). Same project & dataset — any content you add in localhost appears everywhere.

## To get "Services" on the hosted Studio, try:

### 1. Refresh login and retry
```bash
npx sanity logout
npx sanity login
npx sanity deploy
```
When prompted for hostname, use your existing one or press Enter.

### 2. Network
- Use a stable connection (avoid VPN/proxy if possible).
- Try from another network (e.g. mobile hotspot) and run `npx sanity deploy` again.

### 3. Debug (see why it fails)
```bash
set SANITY_DEBUG=1
npx sanity deploy
```

### 4. Use localhost in the meantime
- Run: `npm run dev`
- Open: **http://localhost:3000/y**
- Add/edit Services there; they sync to the same Sanity project, so your site and (once deploy works) the hosted Studio will show them.

### 5. Deploy from GitHub (often fixes 408)

Deploy runs on GitHub’s servers, which usually have better connectivity to Sanity.

1. Create a token: [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens** → **Add API token** (name e.g. `deploy`, **Editor**).
2. In your repo: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**: name `SANITY_AUTH_TOKEN`, value = the token.
3. Push this project (including `.github/workflows/deploy-sanity-studio.yml`) to GitHub.
4. Open the repo → **Actions** → **Deploy Sanity Studio** → **Run workflow** → **Run workflow**.

If the workflow succeeds, refresh your hosted Studio at sanity.io — **Services** should appear.

---

If deploy still times out, see [Sanity deploy docs](https://www.sanity.io/docs/cli-reference/deploy) or [contact Sanity support](https://www.sanity.io/contact/support).
