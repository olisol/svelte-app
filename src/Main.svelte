<script>
	import Content from './Content.svelte';
	const content = {
		title: "ŠTA JE TO?", 
        description: "Kad neko bez dozvole objavljuje i deli tuđe seksualne poruke, slike ili snimke, s namerom da izazove javno poniženje, sramoćenje, strah ili uznemirenost. Nema veze da li su intimni dokumenti nastali dobrovoljno ili su snimljeni tajno, niko nema pravo da ih deli dalje bez pristanka.",
	};
</script>


<main class= "flex flex-row justify-center mx-auto h-full "> 
    <div class="px-8 flex items-center w-1/3 h-full">
        <a href="#"><img src="/img/arrow-l.svg"></a>
    </div>

    <section class="grow space-y-10 ">
        <Content {...content}/>
    </section>

    <div class="px-8 flex items-center w-1/3 h-full ">
        <a href="#" class= "hover:translate-x-2 transform transition hover:ease-in focus:outline-none focus:ring "> <img src="/img/arrow-r.svg"></a>
    </div>

</main>


