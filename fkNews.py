from textblob import TextBlob
from textblob.classifiers import NaiveBayesClassifier 
import pandas as pd

def panda_parser_train():
    # id,title,author,text,label
    train = []
    n = pd.read_csv('./samples/train.csv', sep=',', header = None)
    for i in n.values[0:100]:
        tple = (i[3], i[4])
        train.append(tple)

    return train 

news = panda_parser_train()
clf = NaiveBayesClassifier(news, format="csv")

class Classifier:
    def __init__(self, headline):
        self.headline = headline 
    def classify(self):
        res = clf.prob_classify(self.headline)
        return {
            'fake_news': res.prob(0),
            'verdadeiro': res.prob(1)
        }


#n = pd.read_csv('./samples/test.csv', sep=',', header = None)
#for i in n.values[0:100]:
#    print(Classifier(i[3]).classify())    
        