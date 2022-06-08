<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .btn {
      @apply text-3xl font-semibold text-main font-main italic self-center uppercase px-4;
    }

   .btn-circle {
      @apply inline-block px-5 py-2 border-2 rounded-full border-main mx-1;
    } 


    h1 { /* XL */
      font-family: 'Futura PT Cond Bold Italic';
      font-style: italic;
      font-weight: 400;
      font-size: 90px;
      line-height: 115px;
      text-align: center;
      /* Dark Blue */
      color: #2F5C74;}
  
    }

   p {
        font-family: 'Futura';
        font-style: normal;
        font-weight: 200;
        font-size: 25px;
        line-height: 33px;
        text-align: justify;
        color: #2F5C74;
    }


</style> 