#!/bin/bash

while true
do

status=$(git status)

echo "$status"

line_count=$(($(printf "%s\n" "$status" | wc -l) - 1))

#echo "$line_count"

if (($line_count >= 7)); then
  echo "need to push"
	git add .
	git commit -m "placeholder"
	git push origin main
fi

if [["$status" == *"Your branch is up to date with"*]]; then
  echo "need to pull"
	git pull origin main
fi

done