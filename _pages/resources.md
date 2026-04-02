---
layout: page
permalink: /resources/
title: Resources
description:
nav: true
nav_order: 3
---

## apastats

**APA 7th edition compliant statistical analyses for organizational science research.**

[GitHub](https://github.com/AmanKabra/apastats) | [PyPI](https://pypi.org/project/apastats/)

```bash
pip install apastats
```

*I don't believe academic research should depend on closed-source, paid software. I built `apastats` across my five-year Ph.D. journey. It lived in a private repo the entire time. Now it's yours.*

I built `apastats` to solve three problems. First, no Python package produces the statistical reporting conventions required by OB journals like *JAP*. Researchers either reformat output manually or abandon Python for SPSS or R. Second, statistical software applies consequential settings silently (bootstrap resamples, CI type, centering, estimator), and when these go unreported, readers cannot evaluate whether findings would hold under alternative specifications. `apastats` prints all parameter settings alongside every output, making methods sections complete by construction. Third, a disproportionate share of researcher time goes to formatting rather than thinking. Every decimal place, leading zero, and significance star in an APA 7th manuscript must follow precise rules, and `apastats` enforces them programmatically, returning formatted tables, structured result objects, `.report()` strings, and direct export to Word, LaTeX, or CSV.

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

**Disclaimer:** `apastats` is provided as is, without warranty of any kind. While the package includes an extensive test suite (191 tests at the time of writing) and every effort has been made to ensure correctness, errors in statistical software are always possible. Users are strongly encouraged to cross-verify results against at least one independent tool (e.g., PROCESS for SPSS, lavaan for R, jamovi) before relying on any output for publication. This is standard practice in quantitative research, and it is what I do in my own work. The project is under active development and building rapidly, but it has not yet undergone external audit. By using this software, you accept full responsibility for verifying the accuracy of any results it produces. I assume no liability for errors, omissions, or consequences arising from the use of this package.

*Found an issue? Open it on [GitHub](https://github.com/AmanKabra/apastats/issues) or send me a note. I will fix it if I am alive. If I am not, well, I won't care. But sincerely, as the community grows, so will this library. Your contributions are welcome.*

**Citation:**

> Kabra, A. (2026). *apastats: APA 7th edition compliant statistical analyses for organizational science* (Version 0.1.6) [Computer software]. https://github.com/AmanKabra/apastats
