#!/bin/bash

status=$(git status)

echo "$status"

line_count=$(($(printf "%s\n" "$status" | wc -l) - 1))

echo "$line_count"

if (($line_count >= 7)); then
  echo "need to push"
	git add .
	git commit -m "placeholder"
	git push origin main
else
  echo "no need to push"
fi