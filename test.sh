#!/bin/bash

while true
do

git fetch

status=$(git status)

#echo "$status"

line_count=$(($(printf "%s\n" "$status" | wc -l) - 1))

#echo "$line_count"

if [[ "$status" == *"behind"* ]]; then
  echo "need to pull"
	git pull origin main
fi

if [[ "$status" == *"committed"* && "$status" == *"modified:"* ]]; then
  echo "need to push"
	git add .
	git commit -m "placeholder"
	git push origin main
fi

done