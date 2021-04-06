#!/bin/sh

while :
do

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @{0})
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @{0} "$UPSTREAM")

if [ $LOCAL = $BASE ]; then
    #echo "Need to pull"
    git pull origin main
elif [ $REMOTE = $BASE ]; then
    #echo "Need to push"
    git push origin main
fi

done