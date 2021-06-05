# Multiple Linear Regression

Multiple linear regression (MLR), also known simply as multiple regression, is a statistical technique that uses several explanatory variables to predict the outcome of a response variable. The goal of multiple linear regression (MLR) is to model the linear relationship between the explanatory (predictor) variables and a response (predicted) variable.

We show in this article an implementation of MLR in python using the famous scikit-learn package.

## Dataset details

The data concerns city-cycle fuel consumption in miles per gallon, to be predicted in terms of 3 multi-valued discrete and 5 continuous attributes. The data can be downloaded from [here](https://archive.ics.uci.edu/ml/datasets/auto+mpg) (UCI Machine Learning Repository).

Data attributes:

1. mpg: continuous
2. cylinders: multi-valued discrete
3. displacement: continuous
4. horsepower: continuous
5. weight: continuous
6. acceleration: continuous
7. model year: multi-valued discrete
8. origin: multi-valued discrete
9. car name: string (unique for each instance)

## Implementation with explanations

First, import necessary packages.

```
import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.model_selection import train_test_split
```

Next, import the dataset with simultaneous naming of the columns. The data is in the *.data* format.

```
names = [
       'mpg'
    ,  'cylinders'
    ,  'displacement'
    ,  'horsepower'
    ,  'weight'
    ,  'acceleration'
    ,  'model_year'
    ,  'origin'
    ,  'car_name'
]

df = pd.read_csv('auto-mpg.data', sep = '\s+', header = None, names = names)
```

Let’s see the column names, head of the dataframe, summary about the various column types, and size of the dataframe.

```
print(df.columns)
print(df.head())
print(df.info())
print(df.shape)

The following output is obtained:

Index(['mpg', 'cylinders', 'displacement', 'horsepower', 'weight',
       'acceleration', 'model_year', 'origin', 'car_name'],
      dtype='object')
    mpg  cylinders  displacement  ... model_year  origin                   car_name
0  18.0          8         307.0  ...         70       1  chevrolet chevelle malibu
1  15.0          8         350.0  ...         70       1          buick skylark 320
2  18.0          8         318.0  ...         70       1         plymouth satellite
3  16.0          8         304.0  ...         70       1              amc rebel sst
4  17.0          8         302.0  ...         70       1                ford torino

[5 rows x 9 columns]
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 398 entries, 0 to 397
Data columns (total 9 columns):
 #   Column        Non-Null Count  Dtype  
---  ------        --------------  -----  
 0   mpg           398 non-null    float64
 1   cylinders     398 non-null    int64  
 2   displacement  398 non-null    float64
 3   horsepower    398 non-null    object 
 4   weight        398 non-null    float64
 5   acceleration  398 non-null    float64
 6   model_year    398 non-null    int64  
 7   origin        398 non-null    int64  
 8   car_name      398 non-null    object 
dtypes: float64(4), int64(3), object(2)
memory usage: 28.1+ KB
None
(398, 9)
```

Note that the dataset granularity is at a car level, i.e., the car name is unique per row. Also, there are 3908 rows and 9 columns (8 predictors and 1 predicted) in the dataset as seen in the last line of the above output.

Next, we drop the rows that have one or more NA values. Since this data contains NAs as “?”, we convert the “?” symbols to NA first.

```
df_clean=df.applymap(lambda x: np.nan if x == '?' else x).dropna()
print(df_clean.shape)

The following output is obtained:

(392, 9)
```

Notice that 6 rows have been removed in the dataframe.

Next, we store the predictor variables in X and the predicted variable in y. Then, we split the dataset into two sets: training and testing (in the ratio (80:20).

```
#Select predictor columns
X = df_clean[['cylinders', 'displacement', 'horsepower', 'weight', 'acceleration', 'model_year', 'origin']]

#Select target column
y = df_clean['mpg']

#Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8, test_size=0.2)
```

We now define an object of LinearRegression() and fit it on the training set.

```
LR = linear_model.LinearRegression()
LR.fit(X_train, y_train)

print("Y intercept", LR.intercept_)
print("Coefficients for all predictors", LR.coef_)
print("Efficiency of the model on test data", LR.score(X_test, y_test))

The following output is obtained:

Y intercept -12.795220343674366
Coefficients for all predictors [-0.47885872  0.02007958 -0.02883928 -0.00611358  0.02605078  0.70645767
  1.28835413]
Efficiency of the model on test data 0.7657125224195827
```

We now need to check for multicollinearity among the predictor variables. This piece of code gives the VIF values for the code.

```
cc = np.corrcoef(X_train, rowvar=False)
VIF = np.linalg.inv(cc)
VIF.diagonal()
```

Scikit-learn is a great library to train the model and obtain predictions for new data.

import statsmodels.api as sm  
from sklearn import datasets, linear_model  
import scipy as sp  
from scipy import stats  

X_train = np.array(X_train, dtype=float)  
X2 = sm.add_constant(X_train)  
est = sm.OLS(y_train, X2)  
est2 = est.fit()  
print(est2.summary())

You might also

Optional: In some cases, you might be interested in printing the detailed regression output table in a PDF. You can print the output in Latex format (tex file) using the code below.

```
beginningtex = """\\documentclass{report}
\\usepackage{booktabs}
\\begin{document}"""
endtex = "\end{document}"

f = open('myreg.tex', 'w')
f.write(beginningtex)
f.write(est2.summary().as_latex())
f.write(endtex)
f.close()
```
