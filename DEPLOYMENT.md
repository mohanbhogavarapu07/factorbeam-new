# Deployment Guide - FactorBeam Platform

## Pre-Deployment Security Checklist

### 1. Code Security
- [ ] Run `npm audit` and fix all vulnerabilities
- [ ] Remove all `console.log` statements with sensitive data
- [ ] Verify no API keys or secrets in code
- [ ] Review all environment variables
- [ ] Enable production build optimizations

### 2. Dependencies
- [ ] Update all dependencies to latest stable versions
- [ ] Remove unused dependencies
- [ ] Verify all dependencies are from trusted sources
- [ ] Check for known vulnerabilities in dependencies

### 3. Build Process
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Run security audit
npm audit fix

# Run linter
npm run lint

# Build production bundle
npm run build

# Test production build locally
npm run preview
```

## Infrastructure Setup

### 1. CDN & Hosting Configuration

#### Recommended Providers:
- **Cloudflare Pages** (with DDoS protection)
- **AWS CloudFront + S3**
- **Vercel** (with Edge Network)
- **Netlify** (with DDoS protection)

#### CDN Configuration:
```javascript
// CDN settings
{
  "gzip": true,
  "brotli": true,
  "cache": {
    "static": "max-age=31536000, immutable",
    "html": "max-age=0, must-revalidate",
    "api": "no-cache"
  },
  "ddos_protection": true,
  "rate_limiting": {
    "requests_per_minute": 60,
    "burst": 100
  }
}
```

### 2. DNS Configuration

```dns
# DNS Records
@ A 104.21.0.0 (Cloudflare IP or your CDN)
@ AAAA 2606:4700::1 (IPv6)
www CNAME factorbeam.com

# CAA Records (Certificate Authority Authorization)
factorbeam.com. CAA 0 issue "letsencrypt.org"
factorbeam.com. CAA 0 issuewild "letsencrypt.org"
```

### 3. SSL/TLS Configuration

#### Certificate Setup:
- Use Let's Encrypt or AWS Certificate Manager
- Enable automatic renewal
- Use TLS 1.3 (minimum TLS 1.2)
- Enable HSTS headers

```nginx
# NGINX SSL Configuration (if self-hosting)
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
```

### 4. WAF (Web Application Firewall) Rules

#### Cloudflare WAF Rules:
```
Rule 1: Block SQL Injection Attempts
  (http.request.uri.query contains "UNION SELECT")
  OR (http.request.uri.query contains "' OR '1'='1")
  Action: Block

Rule 2: Block XSS Attempts
  (http.request.uri.query contains "<script")
  OR (http.request.body contains "javascript:")
  Action: Block

Rule 3: Rate Limiting
  (http.request.method eq "POST")
  Rate: 5 requests per 10 seconds
  Action: Challenge

Rule 4: Geographic Restrictions (optional)
  (ip.geoip.country in {"CN" "RU" "KP"})
  AND (http.request.uri.path contains "/api/")
  Action: Challenge

Rule 5: Bot Protection
  (cf.bot_management.score lt 30)
  Action: Challenge
```

### 5. Environment Variables Setup

```bash
# Production Environment Variables
export NODE_ENV=production
export VITE_APP_ENV=production
export VITE_API_URL=https://api.factorbeam.com
export VITE_ENABLE_RATE_LIMITING=true

# Never expose these in frontend:
export DATABASE_URL="postgresql://..."
export JWT_SECRET="..."
export API_SECRET_KEY="..."
```

## Deployment Steps

### Option 1: Deploy to Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages publish dist --project-name=factorbeam
```

### Option 2: Deploy to AWS (S3 + CloudFront)

```bash
# Install AWS CLI
aws configure

# Build and sync to S3
npm run build
aws s3 sync dist/ s3://factorbeam-production --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"
```

### Option 3: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 4: Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

## Post-Deployment Verification

### 1. Security Headers Check
```bash
# Test security headers
curl -I https://factorbeam.com

# Expected headers:
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# X-XSS-Protection: 1; mode=block
# Strict-Transport-Security: max-age=31536000
```

### 2. SSL/TLS Test
```bash
# Test SSL configuration
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=factorbeam.com
# Target Grade: A+
```

### 3. Performance Test
```bash
# Google PageSpeed Insights
# Visit: https://pagespeed.web.dev/
# Target Score: 90+

# Lighthouse CLI
npm install -g lighthouse
lighthouse https://factorbeam.com --view
```

### 4. Security Scan
```bash
# OWASP ZAP scan (if available)
# Mozilla Observatory: https://observatory.mozilla.org/
# SecurityHeaders.com: https://securityheaders.com/
```

## Monitoring & Alerting Setup

### 1. Uptime Monitoring
```javascript
// UptimeRobot configuration
{
  "monitors": [
    {
      "url": "https://factorbeam.com",
      "interval": 300,
      "type": "https",
      "alert_contacts": ["security@factorbeam.com"]
    }
  ]
}
```

### 2. Error Tracking
```javascript
// Sentry configuration (example)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.VITE_APP_ENV,
  tracesSampleRate: 0.1,
  beforeSend(event) {
    // Filter sensitive data
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers;
    }
    return event;
  },
});
```

### 3. Analytics & Security Monitoring
```javascript
// CloudFlare Analytics
// Google Analytics (privacy-focused configuration)
// Custom security event logging
```

## DDoS Protection Configuration

### Cloudflare DDoS Protection:
1. **Enable "I'm Under Attack" mode** during attacks
2. **Configure Rate Limiting Rules**
3. **Set up Challenge pages** for suspicious traffic
4. **Enable Bot Fight Mode**

### AWS Shield (if using AWS):
```bash
# Enable AWS Shield Standard (free)
aws shield describe-subscription

# Consider AWS Shield Advanced for critical applications
```

## Backup & Recovery

### 1. Automated Backups
```bash
# GitHub Actions workflow for automatic backups
name: Backup
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Create backup
        run: |
          tar -czf backup-$(date +%Y%m%d).tar.gz dist/
      - name: Upload to S3
        run: |
          aws s3 cp backup-*.tar.gz s3://factorbeam-backups/
```

### 2. Disaster Recovery Plan
1. **Backup frequency**: Daily
2. **Backup retention**: 30 days
3. **Recovery time objective (RTO)**: < 1 hour
4. **Recovery point objective (RPO)**: < 24 hours

## Rollback Procedure

```bash
# If issues occur, rollback to previous version

# Cloudflare Pages
wrangler pages deployment list --project-name=factorbeam
wrangler pages deployment promote <DEPLOYMENT_ID>

# AWS CloudFront
aws s3 sync s3://factorbeam-backup-YYYYMMDD/ s3://factorbeam-production/
aws cloudfront create-invalidation --distribution-id E1234567890ABC --paths "/*"

# Vercel/Netlify
# Use dashboard to rollback to previous deployment
```

## Maintenance Windows

### Scheduled Maintenance:
- **Frequency**: Monthly
- **Duration**: 30 minutes
- **Timing**: Sunday 2:00 AM - 2:30 AM UTC
- **Notification**: 7 days advance notice

### Emergency Maintenance:
- Immediate response for security vulnerabilities
- Maximum 1-hour downtime target
- Real-time status updates

## Support Contacts

### Technical Issues:
- **Email**: tech@factorbeam.com
- **Phone**: +91-XXX-XXX-XXXX (24/7 emergency)

### Security Incidents:
- **Email**: security@factorbeam.com
- **Response Time**: < 1 hour for critical issues

## Compliance & Certifications

- [ ] HTTPS enforced (TLS 1.3)
- [ ] Security headers configured
- [ ] DDoS protection enabled
- [ ] WAF rules active
- [ ] Rate limiting configured
- [ ] Monitoring and alerting active
- [ ] Backup strategy implemented
- [ ] Incident response plan documented

---

**Last Updated**: 2025-10-25
**Next Review**: 2026-01-25
**Maintained By**: DevOps Team