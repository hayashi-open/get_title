#!/bin/bash

echo "input URL"

read URL

#RegExp='s/.*<title.*>\(.*\)<\/title>.*/\1/p'
RegExp='/.*<title.*>\(.*\)<\/title>.*/{s/.*<title.*>\(.*\)<\/title>.*/\1/p;q;}'

title=`curl -s $URL | sed -n $RegExp`

echo -e "\n[$title]($URL)\n" #markdown式