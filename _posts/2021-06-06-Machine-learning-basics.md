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
Choose \ \theta \ni \hat y \approx y 
\ for \ the \ training \ sample \ set.
$$

In this mathematical representation, feel free to substitute $\hat y$ with $h_\theta(x)$. The $\theta$ in the subscript highlights the fact that $h$ depends on both $\theta$ and $x$.

The objective in multiple linear regression is to:

$$
\min_\theta \ \sum_{i=1}^m \big(h_\theta(x^i)-y^i\big)^2
$$


$$
J(\theta) = \frac{1}{2} \sum_{i=1}^m \big(h_\theta(x^i)-y^i\big)^2
$$

Our objective? Minimise $J(\theta)$. How do we accomplish that? 

1. Start with some random value of $\theta$.

2. Keep changing the value of theta to redue the value of the cost function $\big($which is $J(\theta)\big)$ such that $J(\theta)$ gets minimised.

$$
\theta_j:= \theta_j - 
\alpha \frac{\partial}{\theta_j}J(\theta) \\


\implies \theta_j:= \theta_j - 
\alpha \sum_{i=1}^m \big(h_\theta(x^i)-y^i\big)x_j^i \\
(repeat \ this \ till \ convergence)
$$

Note: The colon symbol in the above formula refers to the assignment operation (the value of $\theta_j$ gets updated). $\alpha$ refers to the learning rate.
