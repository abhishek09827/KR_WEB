import geocoder 
from scipy.spatial import KDTree
def nearest_centre():
  g = geocoder.ip('me')
  lat , long = g.latlng

  locations = [{'name': 'Ahmedgarh,Punjab', 'latitude': 30.6834952, 'longitude': 75.8290011}, {'name': 'Ajuha,Uttar Pradesh', 'latitude': 25.7026986, 'longitude': 81.2491912}, {'name': 'Aliganj,Uttar Pradesh', 'latitude': 27.4856358, 'longitude': 79.08266687135878}, {'name': 'Atarra,Uttar Pradesh', 'latitude': 25.259221099999998, 'longitude': 80.61677591160583}, {'name': 'Atmakur,Telangana', 'latitude': 17.2334484, 'longitude': 79.6958156}, {'name': 'Azamgarh,Uttar Pradesh', 'latitude': 26.02269675, 'longitude': 83.02887343114848}, {'name': 'Baberu,Uttar Pradesh', 'latitude': 25.55083605, 'longitude': 80.7777566145783}, {'name': 'Babrala,Uttar Pradesh', 'latitude': 28.2651557, 'longitude': 78.4054229}, {'name': 'Balrampur,Uttar Pradesh', 'latitude': 27.4504805, 'longitude': 82.39541774073132}, {'name': 'Beldanga,West Bengal', 'latitude': 23.9378, 'longitude': 88.2449}, {'name': 'Bewar,Uttar Pradesh', 'latitude': 25.7591464, 'longitude': 79.9252618}, {'name': 'Bhagalpur,Bihar', 'latitude': 25.2871758, 'longitude': 87.13033088387233}, {'name': 'Bhainsa,Telangana', 'latitude': 19.107085, 'longitude': 77.9635656}, {'name': 'Bhuntar,Himachal Pradesh', 'latitude': 31.8875195, 'longitude': 77.1436237}, {'name': 'Charla,Telangana', 'latitude': 16.6774673, 'longitude': 79.4594265}, {'name': 'Chathanoor,Kerala', 'latitude': 8.858422099999999, 'longitude': 76.72203408934462}, {'name': 'Chirgaon,Uttar Pradesh', 'latitude': 25.5735429, 'longitude': 78.8126634}, {'name': 'Chittoor,Andhra Pradesh', 'latitude': 13.1601048, 'longitude': 79.15555061803596}, {'name': 'Damnagar,Gujarat', 'latitude': 21.6950878, 'longitude': 71.5160345}, {'name': 'Dinhata,West Bengal', 'latitude': 26.1238376, 'longitude': 89.4680986}, {'name': 'Dubbak,Telangana', 'latitude': 18.1737336, 'longitude': 78.6657035}, {'name': 'English Bazar,West Bengal', 'latitude': 24.965712250000003, 'longitude': 88.1277781318015}, {'name': 'Fatehpur,Uttar Pradesh', 'latitude': 25.8435395, 'longitude': 80.91800397088501}, {'name': 'Gangadhara,Telangana', 'latitude': 18.5888465, 'longitude': 79.0099528}, {'name': 'Ghaziabad,Uttar Pradesh', 'latitude': 28.6711527, 'longitude': 77.4120356}, {'name': 'Haldibari,West Bengal', 'latitude': 26.3117592, 'longitude': 88.82969377742026}, {'name': 'Hansi,Haryana', 'latitude': 29.1352917, 'longitude': 75.97647564346738}, {'name': 'Hindol,Odisha', 'latitude': 20.63810575, 'longitude': 85.21285529708807}, {'name': 'Huzurnagar,Telangana', 'latitude': 16.9003686, 'longitude': 79.8745862}, {'name': 'Jafarganj,Uttar Pradesh', 'latitude': 26.4685222, 'longitude': 81.5859582}, {'name': 'Jalaun,Uttar Pradesh', 'latitude': 26.105546, 'longitude': 79.42765264782076}, {'name': 'Jalore,Rajasthan', 'latitude': 25.3476006, 'longitude': 72.6260916}, {'name': 'Jhabua,Madhya Pradesh', 'latitude': 22.88585225, 'longitude': 74.72513368804519}, {'name': 'Kalimpong,West Bengal', 'latitude': 27.0702869, 'longitude': 88.4723676}, {'name': 'Kalna,West Bengal', 'latitude': 23.2211183, 'longitude': 88.3591889}, {'name': 'Ramnagar,Madhya Pradesh', 'latitude': 24.6260816, 'longitude': 81.0589398}, {'name': 'Sarangarh,Chattisgarh', 'latitude': 21.5856358, 'longitude': 83.0782699}, {'name': 'Sheoraphuly,West Bengal', 'latitude': 22.7710582, 'longitude': 88.32078017404632}, {'name': 'Sirsaganj,Uttar Pradesh', 'latitude': 27.0569981, 'longitude': 78.686047}, {'name': 'Sultanpur,Uttar Pradesh', 'latitude': 26.242510850000002, 'longitude': 82.29616931685918}, {'name': 'Wanaparthy town,Telangana', 'latitude': 16.3617799, 'longitude': 78.0610836}, {'name': 'Warangal,Telangana', 'latitude': 17.9820644, 'longitude': 79.5970954}]




  coordinates = [(30.6834952, 75.8290011), (25.7026986, 81.2491912), (27.4856358, 79.08266687135878), (25.259221099999998, 80.61677591160583), 
                (17.2334484, 79.6958156), (26.02269675, 83.02887343114848), (25.55083605, 80.7777566145783), (28.2651557, 78.4054229), (27.4504805, 82.39541774073132), (23.9378, 88.2449), (25.7591464, 79.9252618), (25.2871758, 87.13033088387233), (19.107085, 77.9635656), (31.8875195, 77.1436237), (16.6774673, 79.4594265), (8.858422099999999, 76.72203408934462), (25.5735429, 78.8126634), (13.1601048, 79.15555061803596), (21.6950878, 71.5160345), (26.1238376, 89.4680986), (18.1737336, 78.6657035), (24.965712250000003, 88.1277781318015), (25.8435395, 80.91800397088501), (18.5888465, 79.0099528), (28.6711527, 77.4120356), (26.3117592, 88.82969377742026), (29.1352917, 75.97647564346738), (20.63810575, 85.21285529708807), (16.9003686, 79.8745862), (26.4685222, 81.5859582), (26.105546, 79.42765264782076), (25.3476006, 72.6260916), (22.88585225, 74.72513368804519), (27.0702869, 88.4723676), (23.2211183, 88.3591889), (24.6260816, 81.0589398), (21.5856358, 83.0782699), (22.7710582, 88.32078017404632), (27.0569981, 78.686047), (26.242510850000002, 82.29616931685918), (16.3617799, 78.0610836), (17.9820644, 79.5970954)]


  tree = KDTree(coordinates)

  user_latitude = lat
  user_longitude =  long


  distance, index = tree.query((user_latitude, user_longitude))


  nearest_location = locations[index]
  return nearest_location['name'] , distance

  