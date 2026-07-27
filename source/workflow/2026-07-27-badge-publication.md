# Badge publication integration

## Outcome

Publish the Figma-aligned Badge contract without restoring the retired generated reference architecture.

## Integration rules

- `ui-loader` owns Core and Smart source.
- `ui-builder` produces immutable `ui` and `ui-smart` artifacts.
- `ui-play` demonstrates the exact 42-variant matrix.
- `ui-doc` documents the public API in the current multilingual documentation tree.
- The newer LTR/RTL generated baseline remains intact.

## Acceptance

- two clean build waves are byte-identical;
- generated repositories change only builder-owned Badge subtrees;
- the demo validates all 42 supported variants;
- Russian and English documentation expose the same public contract;
- default branches are pushed only after repository checks and publication gates pass.
