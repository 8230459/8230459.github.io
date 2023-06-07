rem cd d:\test
cd d:\portal
git checkout andy
git add .
git commit -m "用户信息查询页详情优化"
git push
git checkout sit
git merge andy
git push
cmd.exe exit