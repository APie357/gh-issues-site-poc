<script>
    import { route } from "sv-router/generated";
    import { getIssue } from "../issues.js";
    import SvelteMarkdown from "@humanspeak/svelte-markdown";

    let issue = $state([]);

    (async () => {
      issue = [await getIssue(route.params["issue"])]
      console.log(issue);
    })();
</script>

{#each issue as issue}
    <div class="issue">
        <h1>{issue.title} ({issue.id})</h1>
        <h2>by {issue.author.login}</h2>
        <SvelteMarkdown source={issue.body} />
    </div>
{/each}

