cd d:\portal
git checkout andy
choice /t 5 /d y /n >nul
git add .
choice /t 5 /d y /n >nul
git commit -m test
choice /t 5 /d y /n >nul
rem git push
git checkout sit
choice /t 5 /d y /n >nul
git merge andy
choice /t 5 /d y /n >nul
rem git push
