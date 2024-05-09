Link Youtube: 

https://youtu.be/BfV08wJFcLY

-aplicatia este practic solutia mea software pentru licenta
-este creata pentru o clinica mica, pe modelul Regina Maria
Partea de cloud care a fost introdusa intervine atunci cand pacientul vrea sa lase un review
si este incurajat sa incarca si o poza. Odata ce apasa Submit, poza este trimisa si stocata in Azure.
-> Metoda HTTP din C# responsabila arata asa: 
 [HttpPost]
        public async Task<ActionResult> Post([FromForm] Category2CreationDTO category2CreationDTO)
        {
            var category2 = mapper.Map<Category2>(category2CreationDTO);
            if(category2CreationDTO.Picture != null)
            {
                category2.Picture = await fileStorageService.SaveFile(containerName, category2CreationDTO.Picture);
            }
            context.Add(category2);
            await context.SaveChangesAsync();
            return NoContent();
        }

1) Post care primește și procesează date pentru crearea unei categorii. În primul rând, datele primite sunt mapate către un obiect Category2CreationDTO, apoi sunt transformate într-un obiect de domeniu Category2 și stocate în baza de date. Dacă este furnizată o imagine pentru categorie, aceasta este salvată utilizând un serviciu de stocare a fișierelor. După succesul operației, se returnează un cod de stare HTTP 204 No Content, indicând că operația s-a încheiat cu succes

2) Clasa Category2CreationDTO este un obiect de transfer de date utilizat pentru a primi informații în cadrul unei cereri HTTP de creare a unei categorii. Proprietatea Name stochează era initial destinata pentru nume dar a ajuns sa fie o descriere, cu o validare care impune ca acesta să fie obligatorie și să aibă maxim 120 de caractere. Proprietatea ConsultationDate reprezintă data consultării categoriei, în timp ce Picture permite încărcarea unei imagini pentru categoria respectivă, fiind de tip IFormFile. Această clasă facilitează transferul și validarea datelor între cererea HTTP și logica de aplicație, asigurând un proces simplu și consistent.

3) Acest obiect se salveaza si in SQL Server sub forma de blob. 

4) Key-urile sunt cele generate de Azure, unice.

Multumesc!