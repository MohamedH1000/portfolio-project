echo "building app ..."
npm run build

echo "deploying files to the server ..."
scp -i ~/.ssh/school -r build/* root@54.237.7.47:/var/www/softwaremech.tech
scp -i ~/.ssh/school -r build/* root@52.86.175.15:/var/www/softwaremech.tech

echo "done"