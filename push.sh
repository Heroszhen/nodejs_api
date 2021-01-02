#! /bin/bash
#push to github

git add -A 
git commit -m "maj"
git push origin master

if [ -n "$1" ]
then
    if [ $1 = "archive" ]
    then
        zip ../nodejs-default.zip -r * .[^.]* -x "node_modules/*"
    fi
fi