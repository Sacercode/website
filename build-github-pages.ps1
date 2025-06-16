# Script de build pour GitHub Pages - Sacercode
Write-Host "🚀 Construction du site Sacercode pour GitHub Pages..." -ForegroundColor Green

# Nettoyage du dossier docs s'il existe
if (Test-Path "docs") {
    Write-Host "🧹 Nettoyage du dossier docs..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "docs"
}

# Installation des dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Blue
npm install

# Build du projet
Write-Host "🔨 Construction du projet..." -ForegroundColor Blue
$env:NODE_ENV = "production"
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build terminé avec succès!" -ForegroundColor Green
    Write-Host "📁 Les fichiers sont prêts dans le dossier /docs" -ForegroundColor Green
    Write-Host "🌐 Vous pouvez maintenant pousser vers GitHub et configurer Pages" -ForegroundColor Cyan
} else {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
