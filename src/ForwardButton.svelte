<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();
</script>

 <button title="Go forward" on:click={() => navigate(-1)}><img class= "hover:translate-x-2 transform transition hover:ease-in focus:outline-none focus:ring " src="/img/arrow-r.svg"></button>  
  
