<script lang="ts">
  import { signIn , signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

{#if $page.data.session?.user }
  <div class="flex items-center">
    <button on:click={()=>signOut()} class="btn btn-outline btn-primary">Logout</button>
    <div class="avatar mx-5">
      <div class="w-10 rounded-full">
        <img src={$page.data.session.user.image || ''} alt={$page.data.session.user.name || ''} width={100} height={100}/>
      </div>
    </div>
    <span class="label-text">{$page.data.session?.user?.name || 'NaN'}</span>
  </div>
{:else}
  <button on:click={()=>signIn()} class="login btn btn-wide btn-outline btn-primary">
    Login Discord
  </button>
{/if}

