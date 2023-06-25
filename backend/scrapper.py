import os
import time
import json


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


def scrape_justdial():
    os.environ['PATH'] += r"C:/SeleniumDrivers"
    driver = webdriver.Chrome()

    driver.get('https://www.justdial.com/Bangalore/Soil-Testing-Laboratory-near-me')
    up_location = driver.find_element(By.CSS_SELECTOR, 'div[class*="input_location_box"]')
    up_location.click()
    det_location = driver.find_element(By.CSS_SELECTOR, 'div[class*="input_search_result"]')
    det_location.click()
    driver.implicitly_wait(30)
    sort = driver.find_element(By.CSS_SELECTOR, 'div[class*="jsx-6ab5af3a8693e5db"]')
    sort.click()

    search_res_1 = driver.find_element(By.CSS_SELECTOR, 'div[class*="resultbox_listview"]')
    search_res_2 = search_res_1.find_elements(By.CLASS_NAME, 'resultbox_info')

    collection = []
    for i in search_res_2:
        name = i.find_element(By.CSS_SELECTOR, 'a[class*="resultbox_title"]').get_attribute('title').strip()
        address = i.find_element(By.CSS_SELECTOR, 'div[class*="font15"]').get_attribute('innerHTML').strip()
        img = i.find_element(By.CSS_SELECTOR, 'img[class*="resultbox_image"]').get_attribute('src').strip()
        link = i.find_element(By.CSS_SELECTOR, 'a[class*="resultbox_title_anchor"]').get_attribute('href').split()

        collection.append({
            'name': name,
            'address': address,
            'image_url': img,
            'link': link
        })

    

    driver.implicitly_wait(15)
    time.sleep(25)
    driver.quit()
    json_data = json.dumps(collection)

    return json_data
