# Machine Learning

Machine learning is essentially mapping $x \mapsto y$, where x is an input (set of features) and y is an output (classification/regression/etc.).

Note that in the machine learning terminologies,

- $\theta$: parameters

- $m$: traning samples

- x: features (or inputs)

- $n$: number of features

- $y$: target variable (or output)

- $(x,y)$: training example

- $(x^{i},y^{i})$: $i^{th}$ training example

## Multiple Linear regression

Multiple linear regression (MLR), also known simply as multiple regression, is a statistical technique that uses several explanatory variables to predict the outcome of a response variable. The goal of multiple linear regression (MLR) is to model the linear relationship between the explanatory (predictor) variables and a response (predicted) variable.

True values (in the training set):

$$
y= \beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3+..+\beta_nx_n+e
$$

Mode equation:

$$
\hat{y}=h(x)=\hat{\beta}_0+\hat{\beta}_1x_1+\hat{\beta}_2x_2+
\hat{\beta}_3x_3+..+\hat{β}_nx_n \\

=\sum_{j=0}^{n}{\theta_jx_j} \ where \ x_0=1 \ 
(x_0 \ is \ a \ dummy \ variable) \\

\theta = \begin{bmatrix}\theta_0 \\ \theta_1 \\ \theta_2 \\ \vdots \\ 
\theta_n\end{bmatrix} , x = \begin{bmatrix}x_0 \\ x_1 \\ x_2 \\ \vdots \\ 
x_n\end{bmatrix}  



$$

Note that in the mathemantical representations of machine learning models (think econometrics), any term that carries a *hat* refers to an estimated value obtained from training the model. For instance, $\hat y$ refers to the estimated (or predicted) valye of y obtained using the model.

If I have to sum up the objective of a machine learning exercise, it is to choose the appropriate parameters such that the predicted output is as close to the ground truth output as possible.

In mathematical terms,

$$
Choose \ \theta  \ni \hat y \approx y 
\ for \ the \ training \ sample \ set.
$$

The objective in multiple linear regression is to 
