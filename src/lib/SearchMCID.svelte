<script lang="ts">
  let mcid: string;

  let checker_data: {
		mcid?: string;
		message?: string;
		type?: string;
	};

  const search = async () => {
    console.log(mcid);
    const checker = await fetch(`/api/mcid/${mcid}`);
    checker_data = await checker.json();
  }
</script>

<input type="text" bind:value={mcid} placeholder="Steve" class="input input-bordered input-primary w-full max-w-xs" />
<button type="button" on:click={search} class="btn btn-active btn-primary">
  search
  <span class="material-symbols-outlined">
    search
  </span>
</button>

{#if checker_data?.message }
  {#if checker_data.type == "ERROR" }
    <div role="alert" class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{checker_data.message}</span>
    </div>
  {/if}

  {#if checker_data.type == "WARNING" }
    <div role="alert" class="alert alert-warning">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>{checker_data.message}</span>
    </div>
  {/if}
{/if}

{#if checker_data?.type == "SUCCESS" }
  <div role="alert" class="alert alert-success flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div class="avatar mx-5">
      <div class="w-10 rounded-full">
        <img src={"https://cravatar.eu/avatar/"+checker_data.mcid} alt={checker_data.mcid} width={100} height={100}/>
      </div>
    </div>
    <span class="label-text">{checker_data.mcid}</span>
  </div>
{/if}