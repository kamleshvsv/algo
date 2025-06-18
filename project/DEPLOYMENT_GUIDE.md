# Deploying Multi-Tenant Next.js App to Netlify

## Prerequisites

1. **GitHub Account** - Your code needs to be in a GitHub repository
2. **Netlify Account** - Sign up at [netlify.com](https://netlify.com)
3. **Custom Domain** (optional but recommended for production)

## Step 1: Prepare Your Repository

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Connect GitHub Repository
1. **Log in to Netlify**
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify
4. **Select your repository**
5. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`
6. **Click "Deploy site"**

### Option B: Manual Deploy
1. **Build your project locally**:
   ```bash
   npm run build
   ```
2. **Drag and drop the `out` folder** to Netlify's deploy area

## Step 3: Configure Custom Domain (Optional)

### For Production Multi-Tenant Setup:

1. **In Netlify Dashboard**:
   - Go to Site settings → Domain management
   - Add your custom domain (e.g., `yourdomain.com`)

2. **Configure DNS** at your domain provider:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: *
   Value: yoursitename.netlify.app
   ```

3. **Add domain aliases** in Netlify:
   - `yourdomain.com`
   - `*.yourdomain.com` (for subdomains)

## Step 4: Environment Variables (If Needed)

If your app uses environment variables:

1. **Go to Site settings → Environment variables**
2. **Add your variables**:
   ```
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

## Step 5: Test Your Deployment

### Test URLs:
- **Main site**: `https://yoursitename.netlify.app`
- **Admin**: `https://yoursitename.netlify.app/dashboard`
- **Tenant pages**: `https://yoursitename.netlify.app/tenant/acme`

### With Custom Domain:
- **Main site**: `https://yourdomain.com`
- **Admin**: `https://admin.yourdomain.com`
- **Tenants**: `https://acme.yourdomain.com`

## Important Notes for Multi-Tenant on Netlify

### Limitations:
1. **Subdomain routing** works differently than localhost
2. **Server-side middleware** has limitations on static sites
3. **Real-time subdomain detection** requires custom domain setup

### Workarounds:
1. **Use path-based routing** for testing: `/tenant/[slug]`
2. **Configure proper redirects** in `netlify.toml`
3. **Use client-side routing** for tenant detection

## Alternative: Vercel (Recommended for Next.js)

For better Next.js support with server-side features:

1. **Deploy to Vercel** instead:
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Vercel handles**:
   - Server-side middleware automatically
   - Better subdomain routing
   - Automatic deployments from Git

## Troubleshooting

### Build Errors:
- Check Node.js version (use 18+)
- Ensure all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### Routing Issues:
- Verify `netlify.toml` configuration
- Check redirect rules
- Test with path-based routing first

### Subdomain Issues:
- Ensure DNS is configured correctly
- Wait for DNS propagation (up to 48 hours)
- Test with `dig` or online DNS tools

## Production Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed successfully
- [ ] Custom domain configured
- [ ] DNS records set up
- [ ] SSL certificate active
- [ ] All routes working
- [ ] Environment variables set
- [ ] Performance optimized