<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Header from './Header.svelte';
	// import Main from './Main.svelte';
	
  	// Routing stufs 
  import { Router, Route, Link } from "svelte-navigator";

  import PageStajeto from './PageStajeto.svelte';
  import PageProblem from './PageProblem.svelte';
  import PagePaipak from './PagePaipak.svelte';
  import PagePaipak1 from './PagePaipak1.svelte';
  import PagePaipak2 from './PagePaipak2.svelte';
  import PagePaipak3 from './PagePaipak3.svelte';
  import PagePaipak4 from './PagePaipak4.svelte';
  import PagePaipak5 from './PagePaipak5.svelte';
  import PageLinkovi from './PageLinkovi.svelte';

  import BackButton from "./BackButton.svelte";
  import ForwardButton from "./ForwardButton.svelte";
	// end of routing stufs
  import Content from './Content.svelte';
	const content = {
    title: "home", 
    description: "Kad neko bez dozvole objavljuje i deli tuđe seksualne poruke, slike ili snimke, s namerom da izazove javno poniženje, sramoćenje, strah ili uznemirenost. Nema veze da li su intimni dokumenti nastali dobrovoljno ili su snimljeni tajno, niko nema pravo da ih deli dalje bez pristanka.",
  };
    
</script>



<body class="space-y-10 flex flex-col justify-between h-screen bg-bg "> 
	<Header/>

  <Router>

    <main class= "flex flex-row justify-center mx-auto h-full ">
      <div class="px-8 flex items-center w-1/3 h-full"><BackButton /></div>

      <section class="grow space-y-10 ">
        
        <Route path="home"></Route>

        <Route path="stajeto" component={PageStajeto}></Route>
        <Route path="stajeto" component={PageStajeto}></Route>
        <Route path="problem" component={PageProblem}></Route>
        <Route path="paipak" component={PagePaipak}></Route>
        <Route path="paipak1" component={PagePaipak1}></Route>
        <Route path="paipak2" component={PagePaipak2}></Route>
        <Route path="paipak3" component={PagePaipak3}></Route>
        <Route path="paipak4" component={PagePaipak4}></Route>
        <Route path="paipak5" component={PagePaipak5}></Route>
        <Route path="linkovi" component={PageLinkovi}></Route>  


        <!-- Default  -->
        <Route>
            <section class="grow space-y-10 ">
              <Content {...content}/>
             
                <div class="grid grid grid-cols-3 gap-4">
                 
                  <div class=" p-10 "><img src="/img/logos/1.png" class="h-20" alt="Porn Hub"></div>
                  <div class="p-10">  <img src="/img/logos/2.png" class="h-20" alt="Facebook"></div>
                  <div class="p-10">  <img src="/img/logos/3.png" class="h-20" alt="Instagram"></div>
                  <div class="p-10">  <img src="/img/logos/4.png" class="h-20" alt="Porn Hub"></div>
                  <div class="p-10">  <img src="/img/logos/5.png" class="h-20" alt="Porn Hub"></div>
                  <div class="p-10">  <img src="/img/logos/6.png" class="h-20" alt="Porn Hub"></div>
                </div>




            </section> 
        </Route>
        <!-- End Default  -->
      </section>
      <div class="px-8 flex items-center w-1/3 h-full "><ForwardButton/></div>
    </main>

        <footer>
      <nav>
    
      <div class="py-4 flex flex-wrap justify-center bg-white">
        <div class="self-center py-4">
          <Link class="btn hover:drop-shadow-strong" to="/">Home</Link>
          <Link class="btn hover:drop-shadow-strong" to="stajeto">ŠTA JE TO?</Link>
          <Link class="btn hover:drop-shadow-strong" to="problem">PROBLEM</Link>
        </div>        
        <div class="self-center py-4">
          <Link class="btn hover:drop-shadow-strong" to="paipak">Pa ipak…</Link>
          <Link class="btn btn-circle hover:shadow-strong" to="paipak1">1</Link>
          <Link class="btn btn-circle hover:shadow-strong" to="paipak2">2</Link>
          <Link class="btn btn-circle hover:shadow-strong" to="paipak3">3</Link>
          <Link class="btn btn-circle hover:shadow-strong" to="paipak4">4</Link>
          <Link class="btn btn-circle hover:shadow-strong" to="paipak5">5</Link>
        </div>
        
        <div class="self-center py-4">
          <Link class="btn hover:drop-shadow-strong" to="linkovi">Linkovi</Link>
        </div>             
      </div> 
    </nav>

    </footer>
  </Router>

</body>