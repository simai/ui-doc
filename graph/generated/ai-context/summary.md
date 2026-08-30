# Graph AI Context

Generated at: `2026-08-30T09:51:44.327350+00:00`

## Summary

- Objects: 8
- Relations: 7
- Warnings: 0

## DNA

- Purpose: Define why this graph exists and what development vector it must preserve.
- Evolution vector: Keep the graph coherent, machine-readable, evidence-backed and useful for future implementation.

## Objects

- `ui-doc.capability.authored-content` (capability): Repository-owned documentation content
- `ui-doc.capability.docara-runtime` (capability): Docara 2 build runtime
- `ui-doc.capability.documentation-site` (capability): SIMAI Framework documentation site
- `ui-doc.capability.local-static-build` (capability): Verified local static build
- `ui-doc.capability.product-landing-navigation` (capability): SIMAI Framework product landing and top navigation
- `ui-doc.capability.shared-examples` (capability): Repository-owned shared examples
- `ui-doc.capability.translation-tracking` (capability): Report-only translation tracking
- `ui-doc.policy.explicit-publication` (policy): Explicit publication authorization

## Relations

- `rel.ui-doc.site.generated-by-docara`: `ui-doc.capability.documentation-site` --generated_by--> `ui-doc.capability.docara-runtime`
- `rel.ui-doc.site.uses-authored-content`: `ui-doc.capability.documentation-site` --uses--> `ui-doc.capability.authored-content`
- `rel.ui-doc.content.uses-shared-examples`: `ui-doc.capability.authored-content` --uses--> `ui-doc.capability.shared-examples`
- `rel.ui-doc.site.reports-translation-state`: `ui-doc.capability.documentation-site` --reports--> `ui-doc.capability.translation-tracking`
- `rel.ui-doc.site.exposes-product-landing-navigation`: `ui-doc.capability.documentation-site` --exposes--> `ui-doc.capability.product-landing-navigation`
- `rel.ui-doc.site.materialized-as-build`: `ui-doc.capability.documentation-site` --materialized_as--> `ui-doc.capability.local-static-build`
- `rel.ui-doc.build.guarded-by-publication-policy`: `ui-doc.capability.local-static-build` --guarded_by--> `ui-doc.policy.explicit-publication`
