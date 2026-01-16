# Vercel Deployment Diagnostic and Fix Script
# Run this script to diagnose and fix DEPLOYMENT_NOT_FOUND errors

Write-Host "=== Vercel Deployment Diagnostic ===" -ForegroundColor Cyan
Write-Host ""

# Check 1: Is Vercel CLI installed?
Write-Host "1. Checking Vercel CLI installation..." -ForegroundColor Yellow
try {
    $vercelVersion = vercel --version 2>&1
    Write-Host "   ✓ Vercel CLI installed: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "   ✗ Vercel CLI not installed" -ForegroundColor Red
    Write-Host "   → Install with: npm i -g vercel" -ForegroundColor Yellow
    exit 1
}

# Check 2: Is project linked to Vercel?
Write-Host ""
Write-Host "2. Checking project link status..." -ForegroundColor Yellow
if (Test-Path ".vercel") {
    Write-Host "   ✓ Project is linked to Vercel" -ForegroundColor Green
    Get-Content ".vercel/project.json" -ErrorAction SilentlyContinue | Out-Null
} else {
    Write-Host "   ✗ Project is NOT linked to Vercel" -ForegroundColor Red
    Write-Host "   → Run: vercel link" -ForegroundColor Yellow
}

# Check 3: Does build script exist?
Write-Host ""
Write-Host "3. Checking build configuration..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    if ($packageJson.scripts.build) {
        Write-Host "   ✓ Build script found: $($packageJson.scripts.build)" -ForegroundColor Green
    } else {
        Write-Host "   ✗ No build script in package.json" -ForegroundColor Red
    }
} else {
    Write-Host "   ✗ package.json not found" -ForegroundColor Red
}

# Check 4: Test build locally
Write-Host ""
Write-Host "4. Testing local build..." -ForegroundColor Yellow
Write-Host "   → Run 'npm run build' to test" -ForegroundColor Yellow
$testBuild = Read-Host "   Do you want to test the build now? (y/n)"
if ($testBuild -eq "y") {
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✓ Build successful!" -ForegroundColor Green
    } else {
        Write-Host "   ✗ Build failed - fix errors before deploying" -ForegroundColor Red
    }
}

# Check 5: Git repository status
Write-Host ""
Write-Host "5. Checking Git repository..." -ForegroundColor Yellow
try {
    $gitStatus = git status 2>&1
    Write-Host "   ✓ Git repository found" -ForegroundColor Green
} catch {
    Write-Host "   ⚠ Git repository not initialized" -ForegroundColor Yellow
    Write-Host "   → Consider: git init (for better Vercel integration)" -ForegroundColor Yellow
}

# Summary and recommendations
Write-Host ""
Write-Host "=== Recommendations ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "To fix DEPLOYMENT_NOT_FOUND error:" -ForegroundColor White
Write-Host "  1. Link project: vercel link" -ForegroundColor Yellow
Write-Host "  2. Deploy: vercel --prod" -ForegroundColor Yellow
Write-Host "  3. Or connect Git repo in Vercel dashboard for auto-deployments" -ForegroundColor Yellow
Write-Host ""
Write-Host "For detailed explanation, see: DEPLOYMENT_ERROR_GUIDE.md" -ForegroundColor Cyan

