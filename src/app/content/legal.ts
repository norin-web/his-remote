// Legal texts are supplied by the owner and must be reproduced verbatim.
// PLACEHOLDER until they arrive — replace each `body` with the supplied text, unedited.
// Format: "## " starts a section, "### " a sub-heading, "- " list lines.

export const legalUpdated = "October 6, 2026";

const PLACEHOLDER = (doc: string) => `## Placeholder

The final ${doc} will be inserted here word for word from the owner's document.

## Contact

Questions about this document can be sent to the email address below.`;

export const privacy = {
  title: "Privacy Policy",
  current: "privacy",
  body: PLACEHOLDER("Privacy Policy"),
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  current: "terms",
  body: PLACEHOLDER("Terms of Use"),
  other: { to: "/privacy", label: "Privacy Policy" },
};
