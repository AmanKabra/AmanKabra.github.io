# Common Concepts and terminologies

## Properties of variance

$$
\operatorname {Var}(X) =\operatorname{E}\left[(X-\mu )^{2}\right] \\

Now, \ since \ \mu = E[X],\\


\begin{split}
\operatorname {Var}(X)&=\operatorname{E}[(X-\operatorname {E} [X])^{2}]\\
&=\operatorname {E} [X^{2}-2X\operatorname {E} [X]+\operatorname {E} [X]^{2}]\\
&=\operatorname {E} [X^{2}]-2\operatorname {E} [X]\operatorname {E} [X]+\operatorname {E} [X]^{2} \\
&=\operatorname {E} [X^{2}]-\operatorname {E} [X]^{2}
\end{split}\\

\operatorname{Var}(X)\geq 0 \\
\operatorname{Var}(a)=0 \\
\operatorname{Var}(X+a)=\operatorname{Var}(X) \\
\operatorname{Var}(aX)=a^{2}\operatorname{Var}(X) \\
\operatorname{Var}(aX+bY)=a^{2}\operatorname{Var}(X)+b^{2}\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y) \\
$$

