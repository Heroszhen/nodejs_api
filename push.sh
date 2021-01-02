#! /bin/bash
#push to github

git add -A 
git commit -m "maj"
git push origin master


#zip ../nodejs-default.zip -r * .[^.]* -x "node_modules/*"