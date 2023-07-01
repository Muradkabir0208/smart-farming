import sys
import pickle
import warnings
import json
import ast
warnings.filterwarnings('ignore')

data_to_pass_back = 'Send this to node process.'
input = ast.literal_eval(sys.argv[1])
output = input


def fertiRec(lst):
    loadModule = pickle.load(
        open('FertiModels/knnClassifier.pkl', 'rb'))
    x = loadModule.predict([lst])
    return str(x[0])


# data = [26, 52, 30, 37, 15, 30]
# print(fertiRec(data))

print(json.dumps(fertiRec(output)))
