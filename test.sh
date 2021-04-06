#!/bin/sh

status=$(git status)

lineno=0

echo "$status"

line_count=$(($(printf "%s\n" "$status" | wc -l) - 1))

line_count=$line_count+1

echo "$line_count"