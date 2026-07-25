# LTR/RTL documentation publication

Date: 2026-07-25
Status: completed

## Goal

Publish a durable Russian and English guide that explains how developers use
SIMAI Framework in LTR and RTL interfaces and connects the documentation to the
accepted UI Play demonstration.

## Done when

- the existing Directions page becomes a complete RU/EN LTR/RTL guide;
- both locale menus and Fundamentals entrypoints expose the guide;
- the Utilities entrypoint links to it in both locales;
- technical statements match the accepted `ui-loader`, `ui-builder`, `ui`,
  `ui-smart`, and `ui-play` contracts;
- the documentation build and link checks pass;
- the change is published to `simai/ui-doc` default branch without modifying
  the user's dirty checkout.

## Audience and reading path

- primary: frontend developers and integrators using SIMAI Framework;
- secondary: component maintainers reviewing direction compatibility;
- path: Fundamentals -> LTR and RTL -> Utilities -> UI Play demo.

## Documentation map

| Path | Purpose | Locale |
| --- | --- | --- |
| `source/docs/ru/fundamentals/directions/directions.md` | complete user/developer guide | RU |
| `source/docs/en/fundamentals/directions/directions.md` | complete user/developer guide | EN |
| `source/docs/*/fundamentals/.settings.php` | navigation entry | RU/EN |
| `source/docs/*/fundamentals/index.md` | Fundamentals reading path | RU/EN |
| `source/docs/*/utilities/index.md` | utility reference entrypoint | RU/EN |
| `config.php` | public SIMAI brand metadata | shared |

## Source evidence

- `ui-loader/docs/developer/ltr-rtl-source-contract.md`;
- `ui-loader/src/core/js/index.js`;
- `ui-builder/libs/postcssPolicy.js`;
- `ui-builder/scripts/reproducibility/verify-rtl-postcss-policy.js`;
- `ui-play/examples/ltr-rtl/`;
- `ui-play/packages/host/src/main.ts`;
- accepted component matrix and publication evidence in `ui-control`.

## Constraints

- use the public name SIMAI Framework and uppercase SIMAI;
- preserve the existing `directions/directions.md` URL;
- document physical coordinates as valid where their semantics are physical;
- preserve legacy `left` and `right` APIs;
- do not claim universal RTL readiness from documentation or a single demo;
- do not edit generated `build_*` output as source;
- do not touch the existing dirty `ui-doc` checkout.

## Route note

The federation semantic router selected UX with medium confidence. The task is
instead executed through the raw owner contracts `docs + sf5 + docara`: content
and structure belong to Docs, framework facts belong to SF5, and the existing
legacy Docara repository owns its build mechanics.

## Verification

- `git diff --check`;
- local Markdown link and asset check;
- repository documentation build;
- generated RU/EN page and navigation inspection;
- no secrets or generated output committed.

## Result

- replaced the placeholder Directions pages with complete, source-backed RU
  and EN LTR/RTL guides;
- added Fundamentals and Utilities reading paths in both locales;
- translated the English Utilities entrypoint that previously contained
  Russian text;
- linked the accepted 22-scenario UI Play demonstration at
  `https://play.simai.io/ltr-rtl/`;
- normalized public site metadata and the discovered adaptive-sizing reference
  to uppercase SIMAI;
- preserved the existing `directions/` URL and legacy physical API guidance.

## Verification evidence

- PHP syntax: 4/4 changed `.settings.php` files pass;
- generated-reference parity:
  `adaptive sizing docs parity PASS`
  (`333d78f0f3abe6f47c9caa1fc3c53c4d2894e122a922a400804383266cbd72f5`);
- production Docara content build: PASS with PHP 8.2.29 and the existing
  accepted Mix asset bundle;
- generated output after rebasing onto the concurrent scrollbar documentation
  update: 460 RU pages and 438 EN pages;
- focused rendered assertions: RU/EN guide, menu entry, Fundamentals entry,
  Utilities entry and Playground link pass;
- external Playground route: HTTP 200;
- browser review: RU and EN title, navigation, logical-side table, source
  examples and Playground link render without horizontal overflow;
- no generated `build_*`, dependency runtime or asset bundle is included in
  the commit.

## Existing repository baseline findings

- the generic docs asset checker reports 14 historical missing targets from
  `.github/copilot-instructions.md`; none is introduced by this batch;
- the full rendered-link checker reports 3,425 RU and 2,615 EN historical
  broken links. The four guide entrypoint links changed by this batch resolve;
- clean `npm run prod` currently combines Vite output with a legacy Blade
  `mix()` contract and does not materialize `mix-manifest.json`. The direct
  Docara production content build passes when bound to the accepted existing
  Mix assets;
- browser console records the existing `ui@49d31e45` Highlight component
  request for missing chunk `distr/js/22635021162243.js`. The guide remains
  readable, but this distribution/runtime defect belongs to a separate
  source/build correction and is not hidden by this documentation verdict.

## Readiness

The LTR/RTL documentation batch is ready for source publication. This result
does not claim that the historical repository-wide link baseline, legacy
Vite/Mix transition, or missing Highlight runtime chunk is fixed.
