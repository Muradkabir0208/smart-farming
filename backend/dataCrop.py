from sklearn.tree import DecisionTreeClassifier
import sys
import json
import ast
import numpy as np
import pickle
import warnings
warnings.filterwarnings('ignore')


data_to_pass_back = 'Send this to node process.'
input = ast.literal_eval(sys.argv[1])
output = input


def cropRec(lst):
    loadModule = pickle.load(open(
        'CropModels/crDtClassifier.pkl', 'rb'))
    x = loadModule.predict([lst])
    return str(x[0])


print(json.dumps(cropRec(output)))
# sys.stdout.flush()
