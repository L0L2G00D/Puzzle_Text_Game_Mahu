// Initial/Teaching question 1
while (l == 0) {
  console.log("__________________________________________________________");
  console.log("Would you like to Play(p), or learn How To Play(h)? You can answer with p or h");
  answer = prompt(_Name + "?");
  if (Qone.p.indexOf(answer.toLowerCase().trim()) > -1) {
    console.log("");
    console.log(`This game requires you to answer in a way that doesn’t make sense at first, but might make sense after, or might not. `);
    console.log(`You want to play against the game ${_Name}, not with it. Try and find a not answer`);
  } else {
    if (Qone.h.indexOf(answer.toLowerCase().trim()) > -1) {
      console.log("");
      console.log(`Sorry, this feature is not available - V₭Ⱬ`);
    } else {
      if (Qone.ph.indexOf(answer.toLowerCase().trim()) > -1) {
        console.log("");
        console.log(`The game expects that, it says to answer "${answer}", think different or backwards, try again ${_Name}`);
      } else {
        if (Qone.hp.indexOf(answer.toLowerCase().trim()) > -1) {
          SL = 1;
          l++;
        } else {
          if (Qone.f.indexOf(answer.toLowerCase().trim()) > -1) {
            console.log("");
            console.log(`Very funny ${_Name}, but that’s not how you play properly`);
          } else {
            if (Qone.pp.indexOf(answer.toLowerCase().trim()) > -1) {
              console.log("");
              console.log(`${_Name},You're meant to be playing against the game, not me! `);
              console.log(`How about you look at the question the game gave you and try and make something to not answer that`);
            } else {
              if (Qone.t.indexOf(answer.toLowerCase().trim()) > -1) {
                SL = -1;
                l++;
              } else {
                if (Qone.s.indexOf(answer.toLowerCase().trim()) > -1) {
                  console.log("");
                  console.log('Something to happen');
                } else {
                  console.log("");
                  console.log(`Make sure you spell everything correctly ${_Name},`);
                  console.log(`otherwize don’t just randomly type in “stuff” expecting something to happen.`);
                  console.log("");
                  console.log(`*Here's a tip, important stuff is sometimes in "quotation marks". Pretend their not there and don't answer with quotation marks*`);
                  console.log("");
                  console.log(`This game is still in development, so you might have entered an acceptable answer, just it hasn’t been considered.`);
                }
              }
            }
          }
        }
      }
    }
  }
}

//Reseting Loop breaking
l = 0;
