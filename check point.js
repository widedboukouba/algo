function Main(ch) {
    let vowels=0;
    let spaces=1;
  
        for (let i=0; i < ch.length;i++) {
    
        
          if (ch[i] == 'a' || ch[i] == 'e' || ch[i] == 'i' || ch[i] == 'o' || ch[i] == 'u') {
            vowels+=1;
          }
    
          else if (ch[i] == ' ') {
            spaces+=1;
          }
        }
      console.log("length ch", ch.length)
       console.log("num voyelle", vowels)
        console.log("num words", spaces)
      }
      
      
      Main("hello world")
    