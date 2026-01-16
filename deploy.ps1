# Скрипт для быстрого деплоя изменений
# Использование: .\deploy.ps1 "Описание изменений"

param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

Write-Host "=== Деплой изменений ===" -ForegroundColor Cyan
Write-Host ""

# Проверка Git
Write-Host "1. Проверка Git репозитория..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    Write-Host "   ⚠ Git не инициализирован" -ForegroundColor Yellow
    $init = Read-Host "   Инициализировать Git? (y/n)"
    if ($init -eq "y") {
        git init
        Write-Host "   ✓ Git инициализирован" -ForegroundColor Green
    } else {
        Write-Host "   ✗ Пропущено" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "   ✓ Git репозиторий найден" -ForegroundColor Green
}

# Проверка изменений
Write-Host ""
Write-Host "2. Проверка изменений..." -ForegroundColor Yellow
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "   ⚠ Нет изменений для коммита" -ForegroundColor Yellow
    $continue = Read-Host "   Продолжить деплой? (y/n)"
    if ($continue -ne "y") {
        exit 0
    }
} else {
    Write-Host "   Изменённые файлы:" -ForegroundColor White
    git status --short | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
}

# Добавление изменений
Write-Host ""
Write-Host "3. Добавление изменений..." -ForegroundColor Yellow
git add .
Write-Host "   ✓ Изменения добавлены" -ForegroundColor Green

# Коммит
Write-Host ""
Write-Host "4. Создание коммита..." -ForegroundColor Yellow
git commit -m $Message
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Коммит создан: $Message" -ForegroundColor Green
} else {
    Write-Host "   ✗ Ошибка при создании коммита" -ForegroundColor Red
    exit 1
}

# Проверка remote
Write-Host ""
Write-Host "5. Проверка подключения к GitHub..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "   ✓ Remote настроен: $remote" -ForegroundColor Green
    
    # Push
    Write-Host ""
    Write-Host "6. Отправка в GitHub..." -ForegroundColor Yellow
    git push
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✓ Код отправлен в GitHub" -ForegroundColor Green
        Write-Host ""
        Write-Host "   🚀 Vercel автоматически задеплоит изменения!" -ForegroundColor Cyan
        Write-Host "   Проверьте статус: https://vercel.com/dashboard" -ForegroundColor Gray
    } else {
        Write-Host "   ✗ Ошибка при отправке в GitHub" -ForegroundColor Red
        Write-Host "   Попробуйте: git push origin main" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ⚠ Remote не настроен" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   Для настройки выполните:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/USERNAME/REPO.git" -ForegroundColor Gray
    Write-Host ""
    
    # Ручной деплой
    $deploy = Read-Host "   Задеплоить вручную через Vercel CLI? (y/n)"
    if ($deploy -eq "y") {
        Write-Host ""
        Write-Host "7. Деплой в Vercel..." -ForegroundColor Yellow
        vercel --prod
        if ($LASTEXITCODE -eq 0) {
            Write-Host "   ✓ Деплой завершён!" -ForegroundColor Green
        } else {
            Write-Host "   ✗ Ошибка при деплое" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "=== Готово! ===" -ForegroundColor Green

