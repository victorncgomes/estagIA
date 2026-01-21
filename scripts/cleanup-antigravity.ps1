# ============================================
# estagIA - Script de Limpeza do Antigravity
# Execute periodicamente para liberar espaço
# ============================================

Write-Host "`n🧹 Iniciando limpeza do Antigravity..." -ForegroundColor Cyan

# Pasta base do Antigravity
$geminiPath = "$env:USERPROFILE\.gemini\antigravity"

# 1. Limpar gravações de browser (principal consumidor de espaço)
$browserRecordings = "$geminiPath\browser_recordings"
if (Test-Path $browserRecordings) {
    $size = [math]::Round((Get-ChildItem $browserRecordings -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB, 2)
    Write-Host "  Removendo browser_recordings ($size GB)..." -ForegroundColor Yellow
    Remove-Item $browserRecordings -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✅ browser_recordings limpo" -ForegroundColor Green
}

# 2. Limpar conversas antigas (manter apenas as últimas 3)
$brainPath = "$geminiPath\brain"
if (Test-Path $brainPath) {
    $folders = Get-ChildItem $brainPath -Directory | Sort-Object LastWriteTime -Descending
    if ($folders.Count -gt 3) {
        $toDelete = $folders | Select-Object -Skip 3
        foreach ($folder in $toDelete) {
            $size = [math]::Round((Get-ChildItem $folder.FullName -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1MB, 2)
            Write-Host "  Removendo conversa antiga: $($folder.Name) ($size MB)" -ForegroundColor Yellow
            Remove-Item $folder.FullName -Recurse -Force -ErrorAction SilentlyContinue
        }
        Write-Host "  ✅ Conversas antigas limpas" -ForegroundColor Green
    }
}

# 3. Limpar logs de click_feedback
$clickFeedback = Get-ChildItem "$geminiPath\brain\*\.system_generated\click_feedback" -Directory -ErrorAction SilentlyContinue
foreach ($folder in $clickFeedback) {
    Remove-Item "$($folder.FullName)\*" -Force -ErrorAction SilentlyContinue
}
Write-Host "  ✅ Logs de click_feedback limpos" -ForegroundColor Green

# 4. Limpar browser profile (cache do browser interno)
$browserProfile = "$env:USERPROFILE\.gemini\antigravity-browser-profile"
if (Test-Path $browserProfile) {
    Remove-Item $browserProfile -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✅ Browser profile limpo" -ForegroundColor Green
}

# 5. Limpar conversations antigas
$conversations = "$geminiPath\conversations"
if (Test-Path $conversations) {
    Remove-Item $conversations -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✅ Conversations limpo" -ForegroundColor Green
}

# 6. Limpar caches de sistema
Write-Host "`n🗑️ Limpando caches do sistema..." -ForegroundColor Cyan
Remove-Item "$env:USERPROFILE\AppData\Local\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "C:\Windows\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "  ✅ Temp limpo" -ForegroundColor Green

# Resumo final
$finalSize = [math]::Round((Get-ChildItem "$env:USERPROFILE\.gemini" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1MB, 2)
$freeSpace = [math]::Round((Get-PSDrive C).Free / 1GB, 2)

Write-Host "`n📊 Resumo:" -ForegroundColor Cyan
Write-Host "  Pasta .gemini: $finalSize MB" -ForegroundColor White
Write-Host "  Espaço livre no C: $freeSpace GB" -ForegroundColor White
Write-Host "`n✅ Limpeza concluída!`n" -ForegroundColor Green
