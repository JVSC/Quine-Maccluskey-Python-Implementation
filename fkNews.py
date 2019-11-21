from textblob import TextBlob
from textblob.classifiers import NaiveBayesClassifier 
import pandas as pd

news = pd.read_csv('./samples/news.csv', sep=';', header=None)
clf = NaiveBayesClassifier(news.values, format="csv")

class Classifier:
    def __init__(self, headline):
        self.headline = headline 
    def classify(self):
        res = clf.prob_classify(self.headline)
        return {
            'fake_news': res.prob("fake_news"),
            'verdadeiro': res.prob("verdadeiro")
        }
