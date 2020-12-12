#!/bin/bash
echo "Pulling latest code from git"
git pull
sleep 3
echo "Killing existing server"
kill $(pgrep 'ng serve')
sleep 5
echo "Restarting...."
ng serve --host=0.0.0.0 --port 4000 --disable-host-check >> app.log &
sleep 14
echo "Redeploy completed !!!"