#!/bin/bash
git pull
npm install
npm run build
sudo cp -r dist/* /var/www/stock-app/
sudo systemctl restart nginx
