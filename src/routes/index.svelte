<script>
  import { listIssues } from "../issues.js";
  import { repo } from "../config.js";

  let issues = $state([]);

  (async () => {
    issues = await listIssues();
    console.log(issues);
  })();
</script>


<div class="issues">
    {#each issues as issue}
        <a href="/{repo}/{issue.id}" class="issue">
            <h1>{issue.title} (#{issue.id})</h1>
            <p>{issue.author.login}</p>
            <ul>
                {#each issue.labels as label}
                    <li>{label}</li>
                {/each}
            </ul>
        </a>
    {/each}
</div>
