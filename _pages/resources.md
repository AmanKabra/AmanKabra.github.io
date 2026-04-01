---
layout: page
permalink: /resources/
title: Resources
description:
nav: true
nav_order: 5
---

## apastats

**APA 7th edition compliant statistical analyses for organizational science research.**

[GitHub](https://github.com/AmanKabra/apastats) | [PyPI](https://pypi.org/project/apastats/)

```bash
pip install apastats
```

Python is increasingly the language of choice for analytical pipelines across the social sciences. Yet no Python package exists for the statistical reporting conventions required by journals in organizational behavior and adjacent fields, such as the *Journal of Applied Psychology*. Researchers who work in Python are forced to piece together output from general-purpose libraries and reformat manually. `apastats` closes this gap: it runs the standard analyses organizational scholars need and produces publication-ready output in a single step.

The package also addresses a transparency problem. Statistical software routinely applies consequential settings silently — the number of bootstrap resamples, the type of confidence interval, whether variables are mean-centered. `apastats` prints all parameter settings alongside every analysis output, making methods sections complete by construction.

| Module | What it does |
|---|---|
| **Descriptives** | JAP "Table 1": means, SDs, correlations, alphas on diagonal |
| **Moderation** | Hierarchical regression, simple slopes, Johnson-Neyman |
| **Mediation** | Bootstrap indirect effects, single and parallel mediators |
| **Conditional Process** | Moderated mediation (PROCESS Models 7, 8, 14, 15) |
| **CFA** | Fit indices, standardized loadings, CR, AVE, Fornell-Larcker, HTMT |
| **Scale Reliability** | Alpha, omega, composite reliability, item-total correlations |
| **Effect Sizes** | Cohen's *d*, *f*-squared, partial eta-squared |
| **Export** | APA-formatted Word, LaTeX, CSV |

For full documentation, examples, and source code, see the [GitHub repository](https://github.com/AmanKabra/apastats).

**Citation:**

> Kabra, A. (2026). *apastats: APA 7th edition compliant statistical analyses for organizational science* (Version 0.1.6) [Computer software]. https://github.com/AmanKabra/apastats
