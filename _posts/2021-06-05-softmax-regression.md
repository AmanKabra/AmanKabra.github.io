# Softmax Regression

Imagine that the task involves classification into more than two classes (for example, the data needs to be classified into dogs, lions, and birds). This is performed using softmax regression. In softmax regression, the classification is in more than two classes unlike logistic regression (which performs two-class classification). In other words, softmax regression is a generalization of logistic regression; it reduces to logsitic regression when the classification involves two classes.

$$
z_k(x) = x^T \theta ^ {(k)} \\

\hat p_k = \sigma (z(x))_k = \dfrac {e^{z_k(x)}}{\sum_{i=1}^{k}e^{z_i(x)}}
$$
