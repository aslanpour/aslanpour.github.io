
# Workflow
1. FeatureScout: An agent that daily at a specific time, runs via a GitHub action job. This job runs (the start time must be made adjustable easily, not hardcoded)
    a. `on: schedule`
    a. Checkout code
    - Install Claude Code `curl -fsSL claude.ai/install.sh | bash`
    b. Crawl predefined sources.
    c. Summarize findings.
    d. Filter and rank by relevance.
    e. Create a GitHub issue via GitHub MCP server with title + details + links
    f. Record the cost of all Claude session (`result=$(claude -p "Generate code" --output-format json) && cost=$(echo "$result" | jq -r '.cost_usd')`)
    g. Consider timeouts for ling-running operations (`timeout 300 claude -p "$complex_prompt" || echo "Timed out after 5 minutes"`)
    h. Explicitly name the subagent
2. FeatureBilder: An agent that is trigerred by the created issue and implements the feature
    a. Claude Code CLI reads the issue.
    b. Generates code changes / commits.
    c. Runs unit/integration tests.
    d. Pushes to feature/<issue-number> branch.
    e. Optionally opens a PR to main for review.
3. FeaturePreview: An agent that sets up the preview deployment before deployment to GitHub Pages.
    a. Trigger on push to push to feature/*
    a. Deploy the new feature to Vercel via PR previews.
    b. Get the URL
    c. Notify me of this new feature with the link.
    d. Allow me accept or reject the feature.
    e. If accepted (by PR labels or issue commits), merge the PR to main branch and then GitHub Pages Deploy
    f. If rejected, close branch/PR
4. Deployment
    a. Triggered when a PR is labeled.
    b. If the label is approved, the workflow fetches the feature branch.
    c. Merges it into main.
    d. Push to main triggers your existing GitHub Pages deploy workflow automatically.

    e. Triggered when a PR is labeled.
    f. If the label is rejected, it deletes the branch using GitHub CLI.
    g. No deployment occurs.


