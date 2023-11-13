import requests
from bs4 import BeautifulSoup
import csv


id = 6725
csv_file = open('exp.csv', 'w', encoding='utf-8', newline='')
csv_write = csv.writer(csv_file)
csv_write.writerow(['id', 'image','name','old_price','new_price','category','save'])
for a in range(1, 8):
    url = f"https://chefaa.com/eg-en/waffar/category/health-care-devices?brands=&offers=undefined&page={a}"

    skinCare = requests.get(url).text
    soap = BeautifulSoup(skinCare, "lxml")
    
   

    for division in soap.find_all("div", class_={'col-6'}):
        id+=1
        print(id)
        try:
            name = division.find("div", class_={"separator"}).h2.text.strip()
            print(name)
        except Exception as e:
            name = None

        try:
            image_url = division.find("img", class_={'lazyload'})['data-src']
            print(image_url)
        except Exception as e:
            image_url=None

        try:
            currency = division.find('span').text.strip()
            new_price = currency.split(' ')[0]
        except Exception as e:
            print(new_price)

        category='health-care-devices'
        print(category)

        save = None
        print(save)

        old_price = None
        print(old_price)

        print()

        csv_write.writerow([id,image_url,name,old_price,new_price,category,save])

csv_file.close()




