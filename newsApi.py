import urllib
import json
#from nytimesAPIjson.items import NytimesapijsonItem

def processTicker(tickerName):
	response=urllib.urlopen("http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+tickerName+"&facet_field=day_of_week&begin_date=20140101&end_date=20140403&api-key=8ce42b172f2fa9fb2acd574cabdcfc9f:13:69144594")
	newsResults=json.loads(response.read())
	return parse(newsResults)

def parse(response):
    items = []
    jsonresponse = response
    for doc in jsonresponse["response"]["docs"]:
    
       # item = NytimesapijsonItem()
       # item ["pubDate"] = doc["pub_date"]
        #item ["description"] = doc["lead_paragraph"]
        #item ["title"] = doc["headline"]["print_headline"]
        #item ["link"] = doc["web_url"]
        #items.append(doc["headline"]["main"])
        #items.append(doc["web_url"])
        htmlString='<a href="'+doc['web_url']+'">'+doc['headline']['main']+"</a>"
    	return htmlString


