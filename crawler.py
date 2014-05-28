"""
Webcrawler/scraper that extracts news stories

1.  Read a website or html file
2.  Look for paragraph tag and extract it with BeautifulSoup
3.  write out paragraph to temporary file, name file paragraph.txt

"""


from BeautifulSoup import BeautifulSoup

#Step 1 read in yahoo file
#copied from 
#https://docs.python.org/2/tutorial/inputoutput.html
lines = []
f = open('webfiles/yahoo_story.html')
for html_lines in f:
    lines.append(html_lines)

print len(lines)
#Step 2 extract paragraph from file
#use Beautiful soup on lines list and extract it


#Step 3 write out paragraph to file out.txt
#write out extracted text to out.txt

