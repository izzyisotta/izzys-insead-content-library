# Course Knowledge Page — Skill Changelog

Running log of manual edits to the MGE exemplar (`index.html`, `MGE Revision Document.html`, `MGE — Exam Drills.html`) that the **course-knowledge-page generator skill** must reproduce. The MGE pages are the gold reference; each entry below is a design or pedagogy rule to encode in the skill, not a one-off.

## Design system / structure (stable — encode directly)

- **Hub (`index.html`):** term-grouped grid of course cards. Live course = `<a class="card active">` with `<span class="pill live">Live</span>`; not-yet-built = `<div class="card soon">` with `pill wip` "Soon".
- **Card pill must not overlap the title.** `.card .name` carries `padding-right:54px` so long course titles wrap *before* the absolutely-positioned status pill (top:12px/right:13px). Any card title longer than one short line would otherwise collide with the pill. (Fix applied 2026-06-06.)
- **Every course page links back to the hub.** Top of the sidebar `nav.toc`, above the `.brand`, carries `<a href="index.html">← All courses</a>` (inherits nav link styling; accent `#9fd3ba`). Applies to both the Revision Document and the Exam Drills page. (Applied 2026-06-06.)
- **Two-page-per-course pattern:** `<Course> Revision Document.html` (Course Content) + `<Course> — Exam Drills.html` (Exam Questions), cross-linked via the `.modetoggle` in the sidebar.
- **Palette/tokens:** INSEAD green `#00643C`, dark green `#0e2a20`, sidebar `nav.toc` dark, content cards/callouts (`.eq`, `.key`, `.exam`, `.chain`, `.pitfall`) with left-accent borders.

## Pedagogy / content rules (refined as we edit — encode as generation guidance)

- **State the WHY, not just the arrow chain.** Mechanism chains (e.g. "below potential ⟹ prices fall ⟹ M/P rises ⟹ LM right") must include the causal reason for each non-obvious link, not only the symbols. (Driving the 2026-06-06 "why do prices fall" edit.)
- **Symmetric mechanisms get both directions.** Where an adjustment has a mirror case (below vs above potential, easing vs tightening), show both — paired diagrams and both chains — rather than "(and vice versa)". (Driving the above-potential graph addition.)
- **Keep diagrams compact.** Inline SVG figures should be sized restrained (don't let a single explanatory diagram dominate the column). Where a concept has two cases, prefer two compact side-by-side figures (`.twocol`) over one large one.
- **Lead hard concepts with an intuition box.** Dense formulas/models get a teal `.intuition` box with a plain-language hook BEFORE the worked detail — e.g. the Taylor Rule as "a thermostat" (neutral setting + lean against the cycle + why inflation counts twice → you must raise the *real* rate). IS/LM/Mundell-Fleming, the LM equation, and the open-economy "third line" all carry these.
- **Numbered curve-move diagrams.** Policy-experiment diagrams label each curve shift ①②… in sequence, and every chain starts from the *causal first step* (the curve the policy shifts), not a downstream variable.
- **Comparison tables as matrices.** Where rows × regimes compare (e.g. Mundell-Fleming: policy × {closed, flexible, fixed}), use a matrix so the verdict reads straight across; keep result cells on one template (chain ⟹ outcome ⟹ verdict).
- **Readings = synthesis + source link, never verbatim.** Each key reading gets a one-page ~180-word synthesis page that links OUT to the original source; do not reproduce source text.
- **Exam page = archetypes + self-test + coverage map**, built only from REAL past papers (never fabricated). Archetype = trigger + ideal-answer skeleton + one worked model answer + traps.
- **Eval gate before shipping:** independent verifier subagents (re-derive maths; define-every-term; past-paper answerability), with ★ confidence flags for anything uncertain.

## Edit log (chronological)

- 2026-06-06 — `index.html`: added `padding-right:54px` to `.card .name` (pill overlap fix). ✅
- 2026-06-06 — `MGE Revision Document.html`: `← All courses` back-link in sidebar. ✅
- 2026-06-06 — `MGE — Exam Drills.html`: `← All courses` back-link in sidebar. ✅
- 2026-06-06 — `MGE Revision Document.html`: adjustment mechanism — added "why prices fall" causal explanation. ✅
- 2026-06-06 — `MGE Revision Document.html`: split the potential-output adjustment graph into two compact figures (below-potential + above-potential mirror). ✅
- 2026-06-06 — `MGE Revision Document.html`: added "it's a thermostat" intuition box to the Taylor Rule. ✅
- 2026-06-06 — `MGE Revision Document.html`: **major Yield Curve expansion** (heavily-examined topic). Added: the one expectations+term-premium identity (display MathJax), a "reading the slope" 3-box guide, and a **6-panel scenario library** — each scenario a self-contained card with its own mini yield-curve SVG (grey-dashed start → coloured solid after), verdict badge, step chain, "why", and a real example. Scenarios: (1) inflation surprise pre-CB; (2) credible disinflation; (3) hike expectations long-anchored; (4) cuts priced ahead; (5) QE; (6) heavy issuance/fiscal-risk. Enhanced exam-lens with the four-moves taxonomy + the two examiner traps. **Rule for skill:** heavily-examined topics get a scenario-matrix treatment (mini-diagram + chain + why + example per case), mirroring the Mundell-Fleming matrix pattern. ✅
- 2026-06-06 — `MGE Revision Document.html`: **reframed the Yield Curve intro for clarity** (Isabella found it hard to follow). Now leads with the **2-year arbitrage intuition** (buy a 2y bond vs roll two 1y bonds → they must pay the same → long rate = average of expected short rates) with a concrete numbers box, and **demotes the Σ summation formula to a small footnote** under it. Stripped trader jargon from the scenario badges ("bear/bull steepener/flattener" → plain **Steepens / Flattens / Inverts** + which end moves). **Rules for skill:** (a) lead hard quant ideas with a concrete plain-language/arbitrage intuition, put the formal notation *under* it, not first; (b) use the course's own examinable vocabulary (steepen/flatten/invert), never desk/trader jargon the professor doesn't use; (c) no em dashes in generated prose (was leaking in). ✅
