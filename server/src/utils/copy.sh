#!/bin/sh
cd D:/A-project/personal-website/server/logs

cp access.log $(date +%Y-%m-%d).access.log

echo "" > access.log

#/d/A-project/personal-website/server/src/utils/copy.sh