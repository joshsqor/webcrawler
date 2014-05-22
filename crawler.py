import urllib2
import time
from BeautifulSoup import BeautifulSoup 

hosts = ["https://www.wikipedia.org/"]

start = time.time()
#grabs urls of hosts and prints first 1024 bytes of page
for host in hosts:
  url = urllib2.urlopen(host)
  chunk = url.read()
  print chunk

print "Elapsed Time: %s" % (time.time() - start)

soup = BeautifulSoup(chunk)
print soup.findAll(['title'])