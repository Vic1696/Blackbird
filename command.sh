 npx create-react-app tool
 git init
 git add tool
 git commit -m  "First commit"
 git branch -M master
 git remote add origin https://github.com/Vic1696/Blackbird.git
 git push -u origin master
 git checkout -b update_logo
 sed -i "s|https://www.propelleraero.com/dirtmate/|https://www.propelleraero.com/dirtmate/|g" src/App.js
 cd tool
 sed -i "s|https://www.propelleraero.com/dirtmate/|https://www.propelleraero.com/dirtmate/|g" src/App.js
 ls 
 grep src/App.js
 git add .
 git commit -m "updated logo and link"
 git push
 git push --set-upstream origin update_logo
 gh pr create --base master --head update_logo
 gh pr merge
 nano command.sh
 

https://github.com/Vic1696/Blackbird

